import { Notifications } from '@mantine/notifications';
import { ReactNode } from 'react';

import { RootContextProvider } from '@/components/contexts/RootProvider';
import { ModalsProvider } from '@mantine/modals';
import { AppShell, Box, Burger, Flex, Group, Skeleton } from '@mantine/core';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AppWalletProvider from '../contexts/WalletProvider';
import { useDisclosure } from '@mantine/hooks';
import { TxContextProvider } from '../contexts/TxContext';

export default function Layout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <Notifications position="top-right" />
      <ModalsProvider>
        <AppWalletProvider>
          <RootContextProvider>
            <TxContextProvider>
              <AppShell
                header={{ height: 60 }}
                navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
                padding="md"
              >
                <AppShell.Header>
                  <Group h="100%" px="sm">
                    <Navbar />
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                  </Group>
                </AppShell.Header>
                <AppShell.Navbar p="sm" w="250">
                  <Sidebar />
                </AppShell.Navbar>
                <AppShell.Main>{children}</AppShell.Main>
              </AppShell>
            </TxContextProvider>
          </RootContextProvider>
        </AppWalletProvider>
      </ModalsProvider>
    </>
  );
}
