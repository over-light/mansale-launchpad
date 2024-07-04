import {
  Button,
  Card,
  Center,
  Container,
  Image,
  NumberInput,
  Stack,
  Textarea,
  TextInput,
  Title
} from '@mantine/core';
import { useState } from 'react';

function CreateToken() {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [logoURL, setLogoURL] = useState('');
  const [website, setWebsite] = useState('');
  const [telegram, setTelegram] = useState('');
  const [discord, setDiscord] = useState('');
  const [twitter, setTwitter] = useState('');
  const [description, setDescription] = useState('');
  const [mintAuthority, setMintAuthority] = useState('');
  const [freezeAuthority, setFreezeAuthority] = useState('');
  const [updateAuthority, setUpdateAuthority] = useState('');

  const handleSubmit = () => {
    // Handle token creation logic here
    console.log({
      name,
      symbol,
      decimals,
      totalSupply,
      logoURL,
      website,
      telegram,
      discord,
      twitter,
      description,
      mintAuthority,
      freezeAuthority,
      updateAuthority,
    });
  };

  return (
    <Container>
      <Card>
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Token Logo"
          />
        </Card.Section>

        <Stack mt="md" mb="xs">
          <Center>
            <Title order={2}>Create New Token on Solana</Title>
          </Center>
          <TextInput
            label="Name"
            placeholder="Token Name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Symbol"
            placeholder="TOKEN"
            value={symbol}
            onChange={(e) => setSymbol(e.currentTarget.value)}
            required
          />
          <NumberInput
            label="Decimals"
            placeholder="0-18"
            value={decimals}
            onChange={(val) => setDecimals(val)}
            required
          />
          <NumberInput
            label="Total Supply"
            placeholder="1000000"
            value={totalSupply}
            onChange={(val) => setTotalSupply(val)}
            required
          />
          <TextInput
            label="Logo URL"
            placeholder="https://example.com/logo.png"
            value={logoURL}
            onChange={(e) => setLogoURL(e.currentTarget.value)}
          />
          <TextInput
            label="Website"
            placeholder="https://example.com"
            value={website}
            onChange={(e) => setWebsite(e.currentTarget.value)}
          />
          <TextInput
            label="Telegram"
            placeholder="https://t.me/your_channel"
            value={telegram}
            onChange={(e) => setTelegram(e.currentTarget.value)}
          />
          <TextInput
            label="Discord"
            placeholder="https://discord.gg/your_channel"
            value={discord}
            onChange={(e) => setDiscord(e.currentTarget.value)}
          />
          <TextInput
            label="Twitter"
            placeholder="https://twitter.com/your_handle"
            value={twitter}
            onChange={(e) => setTwitter(e.currentTarget.value)}
          />
          <Textarea
            label="Description"
            placeholder="Describe your token"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <TextInput
            label="Mint Authority"
            placeholder="Mint authority public key"
            value={mintAuthority}
            onChange={(e) => setMintAuthority(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Freeze Authority"
            placeholder="Freeze authority public key"
            value={freezeAuthority}
            onChange={(e) => setFreezeAuthority(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Update Authority"
            placeholder="Update authority public key"
            value={updateAuthority}
            onChange={(e) => setUpdateAuthority(e.currentTarget.value)}
            required
          />
        </Stack>

        <Button color="blue" fullWidth mt="md" radius="md" onClick={handleSubmit}>
          Create Token
        </Button>
      </Card>
    </Container>
  );
}

export default CreateToken;
