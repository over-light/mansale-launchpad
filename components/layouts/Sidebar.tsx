import { Box, Flex, NavLink, Stack, Text, ThemeIcon, useMantineColorScheme } from '@mantine/core';

import {
  IconAnalyze,
  IconAutomation,
  IconBolt,
  IconCreditCard,
  IconMoonFilled,
  IconSunFilled,
  IconSunMoon,
  IconUsers,
} from '@tabler/icons-react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, Combobox, InputBase, useCombobox } from '@mantine/core';

import { IconPlus } from '@tabler/icons-react';

import { APP_MENU, orgMenu } from '@/utils/constants';
import { useState } from 'react';

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
  const router = useRouter();

  const [createProjectLoading, setCreateProjectLoading] = useState(false);

  const combobox = useCombobox();

  const { setColorScheme } = useMantineColorScheme();

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
        <Box w="100%">
          <Combobox store={combobox} withinPortal={false} onOptionSubmit={() => {}}>
            <Combobox.Target>
              <InputBase
                component="button"
                size="xs"
                mx="xs"
                my="xs"
                w="auto"
                type="button"
                pointer
                leftSection={<IconAnalyze size={16} />}
                rightSection={<Combobox.Chevron />}
                onClick={() => combobox.toggleDropdown()}
                rightSectionPointerEvents="none"
              ></InputBase>
            </Combobox.Target>
            <Combobox.Dropdown>
              <Combobox.Options></Combobox.Options>
              <Combobox.Footer>
                <Button
                  loading={createProjectLoading}
                  size="xs"
                  onClick={() => {}}
                  data-testid="new-project"
                  variant="light"
                  fullWidth
                  leftSection={<IconPlus size={12} />}
                >
                  Create project
                </Button>
              </Combobox.Footer>
            </Combobox.Dropdown>
          </Combobox>
        </Box>
        <Box as="nav" className="flex-grow" w="100%" px="2" py="2" direction="column">
          {APP_MENU.map((item) => (
            <NavbarLink {...item} key={item.label} />
          ))}
        </Box>
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
            Text
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
            leftSection={<IconSunFilled size={18} onClick={() => setColorScheme('light')} />}
          />
          <NavLink
            component="button"
            label="Dark"
            leftSection={<IconMoonFilled size={18} onClick={() => setColorScheme('dark')} />}
          />
          <NavLink
            component="button"
            label="Auto"
            leftSection={<IconAutomation size={18} onClick={() => setColorScheme('auto')} />}
          />
        </NavLink>
      </Stack>
    </Flex>
  );
}
