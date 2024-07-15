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
<<<<<<< HEAD
import { TokenType } from '@/utils/types/types';
import { PublicKey } from '@solana/web3.js';
import { fetchMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { Metaplex } from '@metaplex-foundation/js';
import { TokenListProvider, ENV, TokenInfo } from '@solana/spl-token-registry';
import { getMint } from '@solana/spl-token';

function PresalePage() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenData, setTokenData] = useState<TokenType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const { connection } = useConnection();

=======

function PresalePage() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { connection } = useConnection();
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
  const fetchTokenData = async (address) => {
    setLoading(true);
    setError(null);
    try {
<<<<<<< HEAD
      const mintAddress = new PublicKey(address);
      const mintInfo = await getMint(connection, mintAddress);
      console.log(mintInfo);
      // const tokenProvider = new TokenListProvider();
      // const tokenListContainer = await tokenProvider.resolve();
      // const tokenList = tokenListContainer.filterByChainId(ENV.MainnetBeta).getList();
      // console.log("TOKENLIST", tokenList)
      // const tokenInfo = tokenList.find((token) => token.address === address);
      // console.log("TOKENINFO", tokenInfo);
      // // setTokenData(tokenInfo);
=======
      const response = await axios.get(
        `https://solscan.io/token/${address}`
      );
      console.log(response);
      setTokenData(response.data);
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
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
<<<<<<< HEAD
              <Image src={tokenData?.logoURI} height={160} alt="Token Logo" />
=======
              <Image src={tokenData?.logoURL} height={160} alt="Token Logo" />
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
              <Text>Token Name: {tokenData?.name}</Text>
              <Text>Token Symbol: {tokenData?.symbol}</Text>
              <Text>Decimals: {tokenData?.decimals}</Text>
              <Text>Total Supply: {tokenData?.totalSupply}</Text>
<<<<<<< HEAD
              {/* <Text>Token Price: {tokenData?.price}</Text>
=======
              <Text>Token Price: {tokenData?.price}</Text>
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
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
<<<<<<< HEAD
              <Text>Description: {tokenData?.description}</Text> */}
=======
              <Text>Description: {tokenData?.description}</Text>
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
              <Badge color="green">Contract Address: {tokenAddress}</Badge>
            </Stack>
          </Card>
        )}
      </Card>
    </Container>
  );
}

export default PresalePage;
