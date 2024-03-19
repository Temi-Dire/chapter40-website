import { create } from "zustand";

interface FullName {
  firstname: string;
  lastname: string;
}

interface BearState {
  email: string;
  countryState: string;
  fullName: FullName | null;
  company: string;
  address: string;
  apartment: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  // init: () => void;
  setEmail: (email: string) => void;
  setCountryState: (state: string) => void;
  setFullName: (fullName: FullName) => void;
  setCompany: (company: string) => void;
  setAddress: (address: string) => void;
  setApartment: (apartment: string) => void;
  setPostalCode: (postalCode: string) => void;
  setCity: (city: string) => void;
  setPhoneNumber: (phone: string) => void;
}

const storedAddress = localStorage.getItem("address");
const initialAddress = storedAddress ? JSON.parse(storedAddress) : "";
const storedPhoneNumber = localStorage.getItem("phone");
const initialPhoneNumber = storedPhoneNumber
  ? JSON.parse(storedPhoneNumber)
  : "";
const storedFirstName = localStorage.getItem("firstName");
const initialFirstName = storedFirstName ? JSON.parse(storedFirstName) : "";
const storedLastName = localStorage.getItem("lastName");
const initialLastName = storedLastName ? JSON.parse(storedLastName) : "";
const storedEmail = localStorage.getItem("email");
const initialEmail = storedEmail ? JSON.parse(storedEmail) : "";

const useUserInfoStore = create<BearState>()((set, get) => ({
  email: initialEmail,
  countryState: "",
  fullName: { firstname: initialFirstName, lastname: initialLastName },
  company: "",
  address: initialAddress,
  apartment: "",
  postalCode: "",
  city: "",
  phoneNumber: initialPhoneNumber,
  setEmail: (email) => {
    {
      set(() => {
        return { email };
      });
    }
    localStorage.setItem("email", JSON.stringify(get().email));
  },
  setCountryState: (state) =>
    set(() => {
      return { countryState: state };
    }),
  setFullName: (fullName) => {
    {
      set(() => {
        return { fullName: fullName };
      });
    }
    localStorage.setItem(
      "firstName",
      JSON.stringify(get().fullName?.firstname)
    );
    localStorage.setItem("lastName", JSON.stringify(get().fullName?.lastname));
  },
  setCompany: (company) =>
    set(() => {
      return { company };
    }),
  setAddress: (address) => {
    {
      set(() => {
        return { address };
      });
    }
    localStorage.setItem("address", JSON.stringify(get().address));
  },
  setApartment: (apartment) =>
    set(() => {
      return { apartment };
    }),
  setPostalCode: (postalCode) =>
    set(() => {
      return { postalCode };
    }),
  setCity: (city) =>
    set(() => {
      return { city };
    }),
  setPhoneNumber: (phone) => {
    {
      set(() => {
        return { phoneNumber: phone };
      });
    }
    localStorage.setItem("phone", JSON.stringify(get().phoneNumber));
  },
}));

export default useUserInfoStore;
