import { ReactNode, createContext, useContext, useState } from 'react';
import { IRootContext } from './types/types';

const RootContext = createContext<IRootContext>({});

export const RootContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return <RootContext.Provider value={{ theme }}>{children}</RootContext.Provider>;
};

export const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error('useRootContext must be used within a ColorProvider');
  }
  return context;
};
