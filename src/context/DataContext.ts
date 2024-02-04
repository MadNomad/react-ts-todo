import { createContext } from 'react';
import { AppDataType } from '../types/AppDataType';

type AppContextType = {
  appData: AppDataType | null;
  setAppData: React.Dispatch<React.SetStateAction<AppDataType | null>>;
};

const iAppContextState = {
  appData: null,
  setAppData: () => {},
};

export const DataContext = createContext<AppContextType>(iAppContextState);
