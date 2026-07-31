export interface Door {
  id: string;
  collection: string;
  name: string;
  image: string;
  description?: string;
  materials?: string[];
  finishes?: string[];
  characteristics?: string[];
}

export const doors: Door[] = [
  // DRIVE
  {
    id: 'pekin-new',
    collection: 'drive',
    name: 'Pekin NEW',
    image: '/src/assets/doors/drive/pekin-new.webp',
  },
  {
    id: 'pekin',
    collection: 'drive',
    name: 'Pekin',
    image: '/src/assets/doors/drive/pekin.webp',
  },
  {
    id: 'new-york',
    collection: 'drive',
    name: 'New York',
    image: '/src/assets/doors/drive/new-york.webp',
  },
  {
    id: 'berlin',
    collection: 'drive',
    name: 'Berlin',
    image: '/src/assets/doors/drive/berlin.webp',
  },
  {
    id: 'pekin-space',
    collection: 'drive',
    name: 'Pekin Space',
    image: '/src/assets/doors/drive/pekin-space.webp',
  },
  {
    id: 'alaska',
    collection: 'drive',
    name: 'Alaska',
    image: '/src/assets/doors/drive/alaska.webp',
  },
  {
    id: 'kongo',
    collection: 'drive',
    name: 'Kongo',
    image: '/src/assets/doors/drive/kongo.webp',
  },
  {
    id: 'kongo-double',
    collection: 'drive',
    name: 'Kongo Double',
    image: '/src/assets/doors/drive/kongo-double.webp',
  },
  {
    id: 'sydney',
    collection: 'drive',
    name: 'Sydney',
    image: '/src/assets/doors/drive/sydney.webp',
  },
  {
    id: 'akord',
    collection: 'drive',
    name: 'Akord',
    image: '/src/assets/doors/drive/akord.webp',
  },
  {
    id: 'geneva-space',
    collection: 'drive',
    name: 'Geneva Space',
    image: '/src/assets/doors/drive/geneva-space.webp',
  },
  {
    id: 'piramida-n',
    collection: 'drive',
    name: 'Piramida N',
    image: '/src/assets/doors/drive/piramida-n.webp',
  },
  {
    id: 'praga',
    collection: 'drive',
    name: 'Praga',
    image: '/src/assets/doors/drive/praga.webp',
  },
  {
    id: 'rym',
    collection: 'drive',
    name: 'Rym',
    image: '/src/assets/doors/drive/rym.webp',
  },

  // CLASSIC
  {
    id: 'london',
    collection: 'classic',
    name: 'London',
    image: '/src/assets/doors/classic/london.webp',
  },
  {
    id: 'london-classic',
    collection: 'classic',
    name: 'London Classic',
    image: '/src/assets/doors/classic/london-classic.webp',
  },
  {
    id: 'daniia',
    collection: 'classic',
    name: 'Daniia',
    image: '/src/assets/doors/classic/daniia.webp',
  },
  {
    id: 'milan',
    collection: 'classic',
    name: 'Milan',
    image: '/src/assets/doors/classic/milan.webp',
  },
  {
    id: 'nizza',
    collection: 'classic',
    name: 'Nizza',
    image: '/src/assets/doors/classic/nizza.webp',
  },
  {
    id: 'shotlandiia',
    collection: 'classic',
    name: 'Shotlandiia',
    image: '/src/assets/doors/classic/shotlandiia.webp',
  },

  // BALANCE
  {
    id: 'argentina',
    collection: 'balance',
    name: 'Argentina',
    image: '/src/assets/doors/balance/argentina.webp',
  },
  {
    id: 'paryzh-double',
    collection: 'balance',
    name: 'Paryzh Double',
    image: '/src/assets/doors/balance/paryzh-double.webp',
  },
  {
    id: 'kanada',
    collection: 'balance',
    name: 'Kanada',
    image: '/src/assets/doors/balance/kanada.webp',
  },
  {
    id: 'sahara',
    collection: 'balance',
    name: 'Sahara',
    image: '/src/assets/doors/balance/sahara.webp',
  },
  {
    id: 'malta',
    collection: 'balance',
    name: 'Malta',
    image: '/src/assets/doors/balance/malta.webp',
  },
  {
    id: 'dubai',
    collection: 'balance',
    name: 'Dubai',
    image: '/src/assets/doors/balance/dubai.webp',
  },
  {
    id: 'trio',
    collection: 'balance',
    name: 'Trio',
    image: '/src/assets/doors/balance/trio.webp',
  },
  {
    id: 'mars',
    collection: 'balance',
    name: 'Mars',
    image: '/src/assets/doors/balance/mars.webp',
  },

  // CALMNESS
  {
    id: 'city',
    collection: 'calmness',
    name: 'City',
    image: '/src/assets/doors/calmness/city.webp',
  },
  {
    id: 'venera',
    collection: 'calmness',
    name: 'Venera',
    image: '/src/assets/doors/calmness/venera.webp',
  },
  {
    id: 'venezia',
    collection: 'calmness',
    name: 'Venezia',
    image: '/src/assets/doors/calmness/venezia.webp',
  },
  {
    id: 'city-space',
    collection: 'calmness',
    name: 'City Space',
    image: '/src/assets/doors/calmness/city-space.webp',
  },
  {
    id: 'line',
    collection: 'calmness',
    name: 'Line',
    image: '/src/assets/doors/calmness/line.webp',
  },
  {
    id: 'leo',
    collection: 'calmness',
    name: 'Leo',
    image: '/src/assets/doors/calmness/leo.webp',
  },
  {
    id: 'gretsiia',
    collection: 'calmness',
    name: 'Gretsiia',
    image: '/src/assets/doors/calmness/gretsiia.webp',
  },
  {
    id: 'manhattan-double',
    collection: 'calmness',
    name: 'Manhattan Double',
    image: '/src/assets/doors/calmness/manhattan-double.webp',
  },
  {
    id: 'manhattan',
    collection: 'calmness',
    name: 'Manhattan',
    image: '/src/assets/doors/calmness/manhattan.webp',
  },
  {
    id: 'sakura',
    collection: 'calmness',
    name: 'Sakura',
    image: '/src/assets/doors/calmness/sakura.webp',
  },
  {
    id: 'sakura-2',
    collection: 'calmness',
    name: 'Sakura 2',
    image: '/src/assets/doors/calmness/sakura-2.webp',
  },
  {
    id: 'zlata',
    collection: 'calmness',
    name: 'Zlata',
    image: '/src/assets/doors/calmness/zlata.webp',
  },
  {
    id: 'city-light',
    collection: 'calmness',
    name: 'City Light',
    image: '/src/assets/doors/calmness/city-light.webp',
  },
  {
    id: 'fortuna',
    collection: 'calmness',
    name: 'Fortuna',
    image: '/src/assets/doors/calmness/fortuna.webp',
  },
  {
    id: 'braziliia',
    collection: 'calmness',
    name: 'Braziliia',
    image: '/src/assets/doors/calmness/braziliia.webp',
  },

  // MODERN
  {
    id: 'akra',
    collection: 'modern',
    name: 'Akra',
    image: '/src/assets/doors/modern/akra.webp',
  },
  {
    id: 'marokko',
    collection: 'modern',
    name: 'Marokko',
    image: '/src/assets/doors/modern/marokko.webp',
  },
];

export default doors;
