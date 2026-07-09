export interface OfficeLocation {
  name: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
}

export const officeLocations: OfficeLocation[] = [
  { name: 'Agra Office', city: 'Agra', state: 'Uttar Pradesh', lat: 27.200089, lng: 78.008103 },
  { name: 'Ahmedabad Office', city: 'Ahmedabad', state: 'Gujarat', lat: 23.0518411, lng: 72.5622491 },
  { name: 'Amritsar Office', city: 'Amritsar', state: 'Punjab', lat: 31.651447, lng: 74.864778 },
  { name: 'Bareilly Office', city: 'Bareilly', state: 'Uttar Pradesh', lat: 28.346254, lng: 79.419273 },
  { name: 'Bihar Office', city: 'Patna', state: 'Bihar', lat: 25.6076067, lng: 85.14281283 },
  { name: 'Bhopal Office', city: 'Bhopal', state: 'Madhya Pradesh', lat: 23.229065, lng: 77.435159 },
  { name: 'Dehradun Office', city: 'Dehradun', state: 'Uttarakhand', lat: 30.3311849, lng: 78.04721761 },
  { name: 'Gorakhpur Office', city: 'Gorakhpur', state: 'Uttar Pradesh', lat: 26.776598, lng: 83.38316 },
  { name: 'Gurgaon Office', city: 'Gurgaon', state: 'Haryana', lat: 28.4139478, lng: 77.0422377 },
  { name: 'Haridwar Office', city: 'Haridwar', state: 'Uttarakhand', lat: 29.93419023, lng: 78.13426492 },
  { name: 'Indore Office', city: 'Indore', state: 'Madhya Pradesh', lat: 22.720861, lng: 75.873583 },
  { name: 'Kanpur Office', city: 'Kanpur', state: 'Uttar Pradesh', lat: 26.462368, lng: 80.359204 },
  { name: 'Karnal Office', city: 'Karnal', state: 'Haryana', lat: 29.6870939, lng: 76.994823 },
  { name: 'Lucknow Office', city: 'Lucknow', state: 'Uttar Pradesh', lat: 26.862612, lng: 80.996387 },
  { name: 'Ludhiana Office', city: 'Ludhiana', state: 'Punjab', lat: 30.901639, lng: 75.833972 },
  { name: 'Moradabad Office', city: 'Moradabad', state: 'Uttar Pradesh', lat: 28.833463, lng: 78.744715 },
  { name: 'Noida Office', city: 'Noida', state: 'Uttar Pradesh', lat: 28.6143406, lng: 77.3555156 },
  { name: 'Prayagraj Office', city: 'Prayagraj', state: 'Uttar Pradesh', lat: 25.459226, lng: 81.837843 },
  { name: 'Raipur Office', city: 'Raipur', state: 'Chhattisgarh', lat: 21.211011, lng: 81.664583 },
  { name: 'Rajkot Office', city: 'Rajkot', state: 'Gujarat', lat: 22.3099728, lng: 70.767746 },
  { name: 'Saharanpur Office', city: 'Saharanpur', state: 'Uttar Pradesh', lat: 29.94027226, lng: 77.54022766 },
  { name: 'Surat Office', city: 'Surat', state: 'Gujarat', lat: 21.1702401, lng: 72.8310607 },
  { name: 'Telangana Office', city: 'Hyderabad', state: 'Telangana', lat: 17.403954, lng: 78.4834106 },
  { name: 'Varanasi Office', city: 'Varanasi', state: 'Uttar Pradesh', lat: 25.306731, lng: 82.98113 },
  { name: 'Zirakpur Office', city: 'Zirakpur', state: 'Punjab', lat: 30.638526, lng: 76.81948 },
].sort((a, b) => a.name.localeCompare(b.name));
