'use client';
import { createContext, useContext, useState } from 'react';
import sportData from '../public/sportData.json';

interface AppContextValue {
  addEvent: (newEvent: any) => void;
  sportEvents: any[];
  setSportEvents: React.Dispatch<React.SetStateAction<any[]>>;
}

// Create the context
const AppContext = createContext<AppContextValue>({} as AppContextValue);
// Create a provider component
export const AppProvider = ({ children }) => {
  // Information that will be passed
  const [sportEvents, setSportEvents] = useState(sportData.data);

  const addEvent = (newEvent) => {
    setSportEvents([...sportEvents, newEvent]);
  };
  const value = {
    addEvent,
    sportEvents,
    setSportEvents,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);
