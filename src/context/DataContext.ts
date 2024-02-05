import { createContext, Dispatch, SetStateAction } from "react";
import { AppDataType } from "../types/AppDataType";

type AppContextType = {
  appData: AppDataType;
  setAppData: Dispatch<SetStateAction<AppDataType>>;
};

const IAppContextState = {
  appData: {} as AppDataType,
  setAppData: () => {},
};

export const DataContext = createContext<AppContextType>(IAppContextState);
