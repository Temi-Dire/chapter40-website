import { create } from 'zustand';

interface InformationStore {
  email: string;
  firstName: string;
  lastName: string;

  setEmail: (email: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
}

const useInformationStore = create<InformationStore>((set) => ({
  email: '',
  firstName: '',
  lastName: '',

  setEmail: (email) => set({ email }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
}));

export default useInformationStore;
