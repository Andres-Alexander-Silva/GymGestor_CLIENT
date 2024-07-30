import { createContext, useEffect, useState } from "react";
import * as MembresiaServices from "../services/membresia.services";
import { Membresia } from "../interface/membresia.interface";

interface MembresiasProviderProps {
  children: React.ReactNode;
}

interface MembresiasContextProps {
  membresias: Membresia[];
  getMembresias: () => void;
}

export const MembresiasContext = createContext<MembresiasContextProps>({
  membresias: [],
  getMembresias: () => {},
});

export const MembresiasProvider = ({ children }: MembresiasProviderProps) => {
  const [membresias, setMembresias] = useState<Membresia[]>([]);

  const getMembresias = async () => {
    try {
      const response = await MembresiaServices.getMembresias();
      console.log(response.data);
      setMembresias(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMembresias();
  }, []);

  return (
    <MembresiasContext.Provider value={{ membresias, getMembresias }}>
      {children}
    </MembresiasContext.Provider>
  );
};
