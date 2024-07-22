import { ReactNode, createContext, useContext, useState } from 'react';
import { ITxContext } from '../../utils/types/types';
import { useDisclosure } from '@mantine/hooks';
import ResultModal from '../common/ResultModal';

const TxContext = createContext<ITxContext>({});

export const TxContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const createToken = () => {
    toggle();
  };

  return (
    <TxContext.Provider value={{ createToken }}>
      {children}
      <ResultModal opened={opened} toggle={toggle} success={true}></ResultModal>
    </TxContext.Provider>
  );
};

export const useTxContext = () => {
  const context = useContext(TxContext);
  if (!context) {
    throw new Error('useTxContext must be used within a TxContextProvider');
  }
  return context;
};
