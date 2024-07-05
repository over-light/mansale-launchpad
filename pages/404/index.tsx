import { Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import classes from './404.style.module.css';
import { useRouter } from 'next/router';

export default function NotFoundImage() {
  const { back } = useRouter();

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src="/404.svg" className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Button variant="outline" size="md" mt="xl" className={classes.control} onClick={back}>
            Get back to home page
          </Button>
        </div>
        <Image src="/404.svg" className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}
