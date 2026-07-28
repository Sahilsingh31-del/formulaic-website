import { clientLogoManifest, type ClientLogoAsset } from './clientLogoManifest';

export interface FeaturedClient {
  name: string;
  logo: ClientLogoAsset;
}

/** Curated list of 20 empanelled banking partners shown on the Clients page. */
export const featuredClients: FeaturedClient[] = [
  'HDFC Bank',
  'Icici Bank Ltd',
  'Axis Bank Ltd',
  'Kotak Mahindra Bank Ltd',
  'IDBI Bank Ltd',
  'Indusind Bank Ltd',
  'RBL Bank Ltd',
  'Bandhan Bank Ltd',
  'Au Small Finance Bank Ltd',
  'LIC Housing Finance Ltd',
  'Bajaj Finance Ltd',
  'Tata Capital Ltd',
  'Piramal Capital And Housing Finance Ltd',
  'Aadhar Housing Finance Ltd',
  'Cholamandalam Investment And Finance Co.Ltd',
  'Shriram Finance Ltd',
  'Hdb Financial Services Ltd',
  'Can Fin Homes Ltd',
  'IIFL Finance Ltd',
  'Capri Global Capital Ltd',
]
  .map((name) => ({ name, logo: clientLogoManifest[name] }))
  .filter((client): client is FeaturedClient => Boolean(client.logo));
