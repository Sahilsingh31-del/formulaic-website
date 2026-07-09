import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { AnimatePresence, motion } from 'motion/react';
import { Building2, ExternalLink, MapPin, Search, ShieldCheck } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Counter, PageHero, Reveal } from '../components/animated';
import { officeLocations, type OfficeLocation } from '../data/offices';

const INDIA_BOUNDS: L.LatLngBoundsExpression = [
  [6.4, 68.1],
  [37.1, 97.4],
];

function createOfficeIcon(isActive: boolean) {
  return L.divIcon({
    className: `formulaic-office-pin${isActive ? ' is-active' : ''}`,
    html: '<div class="office-pin-head"></div><div class="office-pin-pulse"></div>',
    iconSize: [34, 46],
    iconAnchor: [17, 46],
    popupAnchor: [0, -48],
  });
}

async function fetchAddress(lat: number, lng: number, elementId: string) {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.textContent = 'Detecting address...';

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=16&addressdetails=1`
    );
    const data = (await response.json()) as { display_name?: string };
    el.textContent = data.display_name
      ? data.display_name.split(',').slice(0, 4).join(',')
      : 'Address not found.';
  } catch {
    el.textContent = 'Could not fetch address.';
  }
}

function OfficeMap({ offices, selectedOfficeName }: { offices: OfficeLocation[]; selectedOfficeName?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerLayerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [23.3, 79.2],
      zoom: 5,
      minZoom: 4,
      maxZoom: 18,
      maxBounds: INDIA_BOUNDS,
      maxBoundsViscosity: 1,
      zoomControl: false,
      worldCopyJump: false,
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap & CARTO',
      bounds: INDIA_BOUNDS,
      maxZoom: 18,
      noWrap: true,
    }).addTo(map);

    markerLayerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      markerLayerRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const markerLayer = markerLayerRef.current;
    if (!map || !markerLayer) return;

    markerLayer.clearLayers();
    const markers: L.Marker[] = [];

    offices.forEach((office, index) => {
      const addressId = `office-address-${office.city.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`;
      const gmapsUrl = `https://www.google.com/maps?q=${office.lat},${office.lng}`;
      const isActive = selectedOfficeName === office.name;
      const popupHtml = `
        <div class="office-popup">
          <div class="office-popup-header">
            <span>${office.state}</span>
            <h3>${office.name}</h3>
          </div>
          <div class="office-popup-body">
            <div class="office-popup-row">
              <span>City</span>
              <strong>${office.city}</strong>
            </div>
            <div class="office-popup-row">
              <span>Coordinates</span>
              <strong>${office.lat.toFixed(5)}, ${office.lng.toFixed(5)}</strong>
            </div>
            <div class="office-popup-address">
              <span>Geo address</span>
              <p id="${addressId}">Click marker to load address.</p>
            </div>
            <a href="${gmapsUrl}" target="_blank" rel="noreferrer" class="office-popup-link">
              View on Google Maps
            </a>
          </div>
        </div>
      `;

      const marker = L.marker([office.lat, office.lng], { icon: createOfficeIcon(isActive) })
        .bindPopup(popupHtml)
        .on('popupopen', () => fetchAddress(office.lat, office.lng, addressId));

      marker.addTo(markerLayer);
      markers.push(marker);

      if (isActive || offices.length === 1) {
        marker.openPopup();
      }
    });

    if (markers.length === 1) {
      map.setView(markers[0].getLatLng(), 12, { animate: true });
    } else if (markers.length > 1) {
      const bounds = L.featureGroup(markers).getBounds().pad(0.18);
      map.fitBounds(bounds, { animate: true, maxZoom: 6 });
    } else {
      map.fitBounds(INDIA_BOUNDS, { animate: true });
    }

    setTimeout(() => map.invalidateSize(), 80);
  }, [offices, selectedOfficeName]);

  return <div ref={containerRef} className="h-[620px] w-full overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl shadow-slate-950/20" />;
}

export default function Offices() {
  const [query, setQuery] = useState('');
  const [selectedOfficeName, setSelectedOfficeName] = useState<string | undefined>();

  const filteredOffices = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return officeLocations;

    return officeLocations.filter((office) =>
      [office.name, office.city, office.state].some((value) => value.toLowerCase().includes(term))
    );
  }, [query]);

  const visibleOffices = selectedOfficeName
    ? officeLocations.filter((office) => office.name === selectedOfficeName)
    : filteredOffices;

  const statesCount = new Set(officeLocations.map((office) => office.state)).size;

  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero
        eyebrow="Interactive office map"
        title="Find Formulaic offices across India."
        description="Search city-wise locations, zoom into the nearest office, and open exact coordinates in Google Maps."
        image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop"
      >
        <div className="mt-10 grid max-w-3xl grid-cols-3 gap-4">
          {[
            [officeLocations.length, '+', 'Office locations'],
            [statesCount, '', 'States covered'],
            [1, '', 'India-only map view'],
          ].map(([value, suffix, label], index) => (
            <motion.div
              key={label as string}
              className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + index * 0.08 }}
            >
              <div className="font-serif text-3xl font-bold text-white">
                <Counter to={value as number} suffix={suffix as string} />
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{label}</p>
            </motion.div>
          ))}
        </div>
      </PageHero>

      <section className="relative overflow-hidden bg-slate-950 py-8 text-white md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.14),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-[360px_1fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Search office</p>
                <h2 className="mt-2 font-serif text-2xl font-bold">Office directory</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-cyan-200">
                <Search className="h-5 w-5" />
              </div>
            </div>

            <label htmlFor="office-search" className="sr-only">Search city or office name</label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="office-search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelectedOfficeName(undefined);
                }}
                placeholder="Type city, state or office name..."
                className="w-full rounded-2xl border border-white/10 bg-white px-11 py-3 text-sm font-medium text-slate-900 outline-none ring-0 transition focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-500/20"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              <span>Showing {visibleOffices.length} of {officeLocations.length}</span>
              {selectedOfficeName && (
                <button
                  type="button"
                  onClick={() => setSelectedOfficeName(undefined)}
                  className="text-cyan-200 transition hover:text-white"
                >
                  Show all
                </button>
              )}
            </div>

            <div className="mt-4 max-h-[390px] space-y-3 overflow-y-auto pr-1">
              <AnimatePresence initial={false}>
                {filteredOffices.map((office) => {
                  const isActive = selectedOfficeName === office.name;
                  return (
                    <motion.button
                      key={office.name}
                      type="button"
                      className={`group w-full rounded-2xl border p-4 text-left transition ${
                        isActive
                          ? 'border-cyan-300 bg-cyan-300/15'
                          : 'border-white/10 bg-white/[0.06] hover:border-cyan-300/60 hover:bg-white/[0.1]'
                      }`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      onClick={() => {
                        setSelectedOfficeName(office.name);
                        setQuery(office.city);
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-cyan-200">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block font-semibold text-white">{office.name}</span>
                          <span className="mt-1 block text-sm text-slate-300">{office.city}, {office.state}</span>
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <OfficeMap offices={visibleOffices} selectedOfficeName={selectedOfficeName} />
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Coverage details</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">Fast access to regional teams.</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: 'City-wise presence',
                text: 'Office cards and markers stay synced, so users can quickly filter by city, state, or office name.',
              },
              {
                icon: ShieldCheck,
                title: 'India-focused map',
                text: 'The map is restricted to Indian bounds and only loads visible India-area map tiles.',
              },
              {
                icon: ExternalLink,
                title: 'Google Maps ready',
                text: 'Every location popup has a direct coordinate-based Google Maps link for navigation.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-serif text-2xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
