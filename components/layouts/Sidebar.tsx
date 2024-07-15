<<<<<<< HEAD
import { Box, Divider, Flex, NavLink, Stack, Text, useMantineColorScheme } from '@mantine/core';
=======
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
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016

import { IconMoonFilled, IconSunFilled, IconSunMoon } from '@tabler/icons-react';

import { APP_MENU, orgMenu } from '@/utils/constants';
<<<<<<< HEAD
import NavbarLink from './components/NavbarLink';
=======
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
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016

export default function Sidebar() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
<<<<<<< HEAD
    <Flex justify="space-between" align="start" direction="column" h="100%">
=======
    <Flex
      justify="space-between"
      align="start"
      direction="column"
      h="100%"
    >
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
      <Stack w="100%" gap={0}>
        <Box className="flex-grow" w="100%" px="2" py="2">
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
