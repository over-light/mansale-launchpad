import {
  Anchor,
  Box,
  Divider,
  Flex,
  NavLink,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
} from '@mantine/core';

import { IconMoonFilled, IconSunFilled, IconSunMoon } from '@tabler/icons-react';

import { APP_MENU, orgMenu } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavbarLink({ icon: Icon, label, link, soon, onClick, c, subMenu, disabled = false }) {
  const router = useRouter();

  const active = router.pathname.startsWith(link);

  return (
    <NavLink
      component={!onClick ? Link : 'button'}
      href={link}
      w="100%"
      onClick={onClick}
      c={c}
      label={`${label}${soon ? ' (soon)' : ''}`}
      disabled={disabled || soon}
      active={active}
      leftSection={
        <ThemeIcon
          variant={active ? 'light' : 'subtle'}
          color={active ? c || 'blue' : c || 'blue.4'}
          size="md"
        >
          <Icon size={18} />
        </ThemeIcon>
      }
    >
      {subMenu?.map((item) => <NavbarLink {...item} key={item.label} />)}
    </NavLink>
  );
}

export default function Sidebar() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Flex
      justify="space-between"
      align="start"
      w={200}
      direction="column"
      style={{
        borderRight: '1px solid var(--mantine-color-default-border)',
      }}
    >
      <Stack w="100%" gap={0}>
        <Box w="100%" my="lg">
          <Flex direction="row" gap="sm" justify="center" align="center">
            <Image alt="Favicon" src="/favicon.svg" width={32} height={32} />
            <Title order={2}>ManSale</Title>
          </Flex>
        </Box>
        <Divider />
        <Box as="nav" className="flex-grow" w="100%" px="2" py="2" direction="column">
          {APP_MENU.map((item) => (
            <NavbarLink {...item} key={item.label} />
          ))}
        </Box>
        <Divider />
        <Box w="100%" mt="xl">
          <Text
            ml="xs"
            h={20}
            fz={12}
            fw={700}
            style={{
              textTransform: 'uppercase',
            }}
          >
            Community
          </Text>

          {orgMenu
            .filter((item) => !item.disabled)
            .map((item) => (
              <NavbarLink {...item} key={item.label} />
            ))}
        </Box>
      </Stack>
      <Stack w="100%">
        <NavLink w="100%" label="Theme" leftSection={<IconSunMoon size={18} />}>
          <NavLink
            component="button"
            label="Light"
            onClick={() => setColorScheme('light')}
            active={colorScheme == 'light'}
            leftSection={<IconSunFilled size={18} />}
          />
          <NavLink
            component="button"
            label="Dark"
            active={colorScheme == 'dark'}
            onClick={() => setColorScheme('dark')}
            leftSection={<IconMoonFilled size={18} />}
          />
        </NavLink>
      </Stack>
    </Flex>
  );
}
