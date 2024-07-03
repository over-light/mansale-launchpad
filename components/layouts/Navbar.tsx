import { Anchor, Button, Flex, Group } from '@mantine/core';

import {
  IconAlertTriangle,
  IconAlertTriangleFilled,
  IconCheck,
  IconWallet,
} from '@tabler/icons-react';

import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
    <Flex align="center" justify="space-between" pos="absolute" top={8} right={8}>
      <Group>
        <>
          <Button
            variant="gradient"
            size="xs"
            onClick={() => {}}
            leftSection={<IconWallet size="16" />}
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          >
            Connect Wallet
          </Button>
        </>
      </Group>
    </Flex>
  );
}
