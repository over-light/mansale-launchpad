import {
  Button,
  Card,
  Center,
  Container,
  Image,
  NumberInput,
  Stack,
  Textarea,
  Title
} from '@mantine/core';
import { useState } from 'react';

function CreateAirdrop() {
  const [addresses, setAddresses] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    // Handle token creation logic here
    console.log({
      addresses,
      amount,
    });
  };

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
            <Title order={2}>Create Airdrop</Title>
          </Center>
          <Textarea
            label="List of addresses"
            placeholder="List of addresses to get airdrop"
            rows={6}
            value={addresses}
            onChange={(e) => setAddresses(e.currentTarget.value)}
          />
          <NumberInput
            label="Amount"
            placeholder="0"
            value={amount}
            onChange={(val) => setAmount(val)}
            required
          />
        </Stack>

        <Button color="blue" fullWidth mt="md" radius="md" onClick={handleSubmit}>
          Create Airdrop
        </Button>
      </Card>
    </Container>
  );
}

export default CreateAirdrop;
