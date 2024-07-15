import {
  Badge,
  Card,
  Center,
  Container,
  Flex,
  Group,
  Image,
  Paper,
  Progress,
  Spoiler,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import React from 'react';
import classes from './style.module.css';

const TOKEN_PROJECTS = [
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: 'https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png',
    presaleAmount: 2300,
    currentSale: 400,
    endDate: 4,
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: 'https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png',
    presaleAmount: 2300,
    currentSale: 400,
    endDate: 4,
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: 'https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png',
    presaleAmount: 2300,
    currentSale: 400,
    endDate: 4,
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: 'https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png',
    presaleAmount: 2300,
    currentSale: 400,
    endDate: 4,
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: 'https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png',
    presaleAmount: 2300,
    currentSale: 400,
    endDate: 4,
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: 'https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png',
    presaleAmount: 2300,
    currentSale: 400,
    endDate: 4,
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: 'https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png',
    presaleAmount: 2300,
    currentSale: 400,
    endDate: 4,
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: 'https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png',
    presaleAmount: 2300,
    currentSale: 400,
    endDate: 4,
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: 'https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png',
    presaleAmount: 2300,
    currentSale: 400,
    endDate: 4,
  },
];
function Tokens() {
  return (
    <Container>
      <Card shadow="sm" withBorder>
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Token Logo"
          />
        </Card.Section>
        <Stack mt="md" mb="xs">
          <Center>
            <Title order={2}>Current Projects</Title>
          </Center>
          <Flex gap={4} wrap="wrap" justify="center">
            {TOKEN_PROJECTS.map((itm) => {
              return (
                <Paper radius="md" withBorder className={classes.card} mt={20} w={320}>
                  <ThemeIcon className={classes.icon} size={60} radius={60}>
                    <Image src={itm.logo} alt={itm.title} height={60} width={60} />
                  </ThemeIcon>
                  <Title order={3} ta="center" className={classes.title}>
                    {itm.title}
                  </Title>
                  <Spoiler maxHeight={130} showLabel="Show more" hideLabel="Hide">
                    <Text c="dimmed" ta="center" fz="sm">
                      {itm.description}
                    </Text>
                  </Spoiler>

                  <Group justify="space-between" mt="xs">
                    <Text fz="sm" c="dimmed">
                      Progress
                    </Text>
                    <Text fz="sm" c="dimmed">
                      {((itm.currentSale * 100) / itm.presaleAmount).toFixed(1)} %
                    </Text>
                  </Group>

                  <Progress value={62} mt={5} />

                  <Group justify="space-between" mt="md">
                    <Text fz="sm">
                      {itm.currentSale} / {itm.presaleAmount}
                    </Text>
                    <Badge size="sm">{itm.endDate} days left</Badge>
                  </Group>
                </Paper>
              );
            })}
          </Flex>
        </Stack>
      </Card>
    </Container>
  );
}

export default Tokens;
