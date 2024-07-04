import React, { useState } from 'react';
import {
  Card,
  Container,
  Group,
  Text,
  TextInput,
  Button,
  Image,
  Badge,
  Loader,
  Stack,
  Center,
  Title,
} from '@mantine/core';
import axios from 'axios';
import { showNotification } from '@mantine/notifications';
import { useConnection } from '@solana/wallet-adapter-react';

function PresalePage() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { connection } = useConnection();
  const fetchTokenData = async (address) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://solscan.io/token/${address}`
      );
      console.log(response);
      setTokenData(response.data);
      setLoading(false);
    } catch (err) {
      showNotification({ message: 'Failed' });
      setError('Failed to fetch token data');
      setLoading(false);
    }
  };

  const handleFetchData = () => {
    fetchTokenData(tokenAddress);
  };

  return (
    <Container>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Token Logo"
          />
        </Card.Section>
        <Stack gap="md" mt="md" mb="xs">
          <Center>
            <Title order={2}>Create Token Presale</Title>
          </Center>
          <TextInput
            label="Token Address"
            placeholder="Enter the token contract address"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.currentTarget.value)}
            required
          />
          <Button
            color="blue"
            radius="md"
            onClick={handleFetchData}
            disabled={!tokenAddress || loading}
          >
            {loading ? <Loader size="xs" /> : 'Fetch Token Data'}
          </Button>
        </Stack>

        {error && <Text color="red">{error}</Text>}

        {tokenData && (
          <Card shadow="sm" padding="lg" radius="md" withBorder mt="md">
            <Stack gap="md">
              <Image src={tokenData?.logoURL} height={160} alt="Token Logo" />
              <Text>Token Name: {tokenData?.name}</Text>
              <Text>Token Symbol: {tokenData?.symbol}</Text>
              <Text>Decimals: {tokenData?.decimals}</Text>
              <Text>Total Supply: {tokenData?.totalSupply}</Text>
              <Text>Token Price: {tokenData?.price}</Text>
              <Text>Start Date: {tokenData?.startDate}</Text>
              <Text>End Date: {tokenData?.endDate}</Text>
              <Text>Min Contribution: {tokenData?.minContribution}</Text>
              <Text>Max Contribution: {tokenData?.maxContribution}</Text>
              <Text>Soft Cap: {tokenData?.softCap}</Text>
              <Text>Hard Cap: {tokenData?.hardCap}</Text>
              <Text>
                Website:{' '}
                <a href={tokenData?.website} target="_blank" rel="noopener noreferrer">
                  {tokenData?.website}
                </a>
              </Text>
              <Text>
                Telegram:{' '}
                <a href={tokenData?.telegram} target="_blank" rel="noopener noreferrer">
                  {tokenData?.telegram}
                </a>
              </Text>
              <Text>
                Discord:{' '}
                <a href={tokenData?.discord} target="_blank" rel="noopener noreferrer">
                  {tokenData?.discord}
                </a>
              </Text>
              <Text>
                Twitter:{' '}
                <a href={tokenData?.twitter} target="_blank" rel="noopener noreferrer">
                  {tokenData?.twitter}
                </a>
              </Text>
              <Text>Description: {tokenData?.description}</Text>
              <Badge color="green">Contract Address: {tokenAddress}</Badge>
            </Stack>
          </Card>
        )}
      </Card>
    </Container>
  );
}

export default PresalePage;
