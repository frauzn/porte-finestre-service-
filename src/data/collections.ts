export interface Collection {
  id: string;
  name: string;
  description: string;
  heroImage: string;
}

export const collections: Collection[] = [
  {
    id: 'drive',
    name: 'Drive',
    description: '',
    heroImage: '',
  },
  {
    id: 'classic',
    name: 'Classic',
    description: '',
    heroImage: '',
  },
  {
    id: 'balance',
    name: 'Balance',
    description: '',
    heroImage: '',
  },
  {
    id: 'calmness',
    name: 'Calmness',
    description: '',
    heroImage: '',
  },
];

export default collections;
