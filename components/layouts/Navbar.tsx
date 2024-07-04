import { Anchor, Box, Button, Flex, Group, Image, Title } from '@mantine/core';

import {
  IconAlertTriangle,
  IconAlertTriangleFilled,
  IconCheck,
  IconWallet,
} from '@tabler/icons-react';

import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const floatingBtn = {
  position: 'fixed',
  top: 12,
  right: 24,
  zIndex: 100,
};

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  //   useEffect(() => {
  //     const verified = router.query.verified === "true"

  //     if (verified) {
  //       notifications.show({
  //         id: "verified",
  //         icon: <IconCheck size={18} />,
  //         color: "teal",
  //         title: "Email verified",
  //         message: "You now have access to all features.",
  //       })

  //       // remove query param
  //       router.replace(router.pathname, undefined, { shallow: true })
  //     }
  //   }, [router.query])

  return (
    <Flex align="center" justify="space-between" w="100%">
      <Flex direction="row" gap="sm" justify="center" align="center">
        <Image alt="Favicon" src="/favicon.svg" width={32} height={32} />
        <Title order={2}>ManSale</Title>
      </Flex>
      <Group>
        <WalletMultiButton>Connect Wallet</WalletMultiButton>
      </Group>
    </Flex>
  );
}
