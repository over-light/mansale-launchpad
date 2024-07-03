import { Notifications } from '@mantine/notifications';
import { ReactNode } from 'react';

import { RootContextProvider } from '@/utils/context';
import { ModalsProvider } from '@mantine/modals';
import { Box, Flex } from '@mantine/core';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Notifications position="top-right" />
      <ModalsProvider>
        <RootContextProvider>
          <Flex
            h={'100vh'}
            style={{
              backgroundColor: 'var(--mantine-color-body)',
            }}
          >
            <Sidebar />
            <Box
              pos="relative"
              flex={1}
              style={{
                overflowY: 'auto',
              }}
            >
              <Navbar />
              {children}
            </Box>
          </Flex>
        </RootContextProvider>
      </ModalsProvider>
    </>
  );
}
