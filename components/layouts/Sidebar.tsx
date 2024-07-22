import { Box, Divider, Flex, NavLink, Stack, Text, useMantineColorScheme } from '@mantine/core';

import { IconMoonFilled, IconSunFilled, IconSunMoon } from '@tabler/icons-react';

import { APP_MENU, orgMenu } from '@/utils/constants';
import NavbarLink from './components/NavbarLink';

export default function Sidebar() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Flex justify="space-between" align="start" direction="column" h="100%">
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
