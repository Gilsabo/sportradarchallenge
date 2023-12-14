'use client';
import React, { createContext, useContext, useState } from 'react';
import sportData from '../public/sportData.json';

// Create the context
const AppContext = createContext();
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
