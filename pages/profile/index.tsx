import React, { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import {
  Card,
  Container,
  Group,
  Text,
  Button,
  Badge,
  List,
  Center,
  Stack,
  Title,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';

const TokenAccounts = ({ publicKey, connection }) => {
<<<<<<< HEAD
  const [tokenAccounts, setTokenAccounts] = useState<any[]>([]);
=======
  const [tokenAccounts, setTokenAccounts] = useState([]);
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016

  useEffect(() => {
    const getTokenAccounts = async () => {
      const response = await connection.getParsedTokenAccountsByOwner(publicKey, {
        programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
      });
      setTokenAccounts(response.value);
    };

    if (publicKey) {
      getTokenAccounts();
    }
  }, [publicKey, connection]);

  return (
    <List spacing="sm" size="sm" center>
<<<<<<< HEAD
      {tokenAccounts?.map((tokenAccount) => (
=======
      {tokenAccounts.map((tokenAccount) => (
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
        <List.Item key={tokenAccount.pubkey.toBase58()}>
          {tokenAccount.account.data.parsed.info.tokenAmount.uiAmount}{' '}
          {tokenAccount.account.data.parsed.info.mint}
        </List.Item>
      ))}
    </List>
  );
};

const RecentTransactions = ({ publicKey, connection }) => {
<<<<<<< HEAD
  const [transactions, setTransactions] = useState<any[]>([]);
=======
  const [transactions, setTransactions] = useState([]);
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016

  useEffect(() => {
    const getRecentTransactions = async () => {
      const confirmedSignatures = await connection.getConfirmedSignaturesForAddress2(publicKey, {
        limit: 5,
      });
      const transactionDetails = await Promise.all(
        confirmedSignatures.map(async (signature) => {
          const transaction = await connection.getConfirmedTransaction(signature.signature);
          return {
            signature: signature.signature,
            blockTime: transaction.blockTime,
            amount: transaction.meta.postBalances[0] - transaction.meta.preBalances[0],
          };
        })
      );
      setTransactions(transactionDetails);
    };

    if (publicKey) {
      getRecentTransactions();
    }
  }, [publicKey, connection]);

  return (
    <List spacing="md" size="sm" center>
      {transactions.map((tx) => (
        <Card key={tx.signature} shadow="sm" p="md" radius="md" withBorder>
          <Stack gap="sm">
            <Text size="sm" color="dimmed">
              Signature:
            </Text>
            <Text style={{ wordWrap: 'break-word' }}>{tx.signature}</Text>
            <Text size="sm" color="dimmed">
              Time:
            </Text>
            <Text>{new Date(tx.blockTime * 1000).toLocaleString()}</Text>
            <Text size="sm" color="dimmed">
              Amount:
            </Text>
            <Text>{tx.amount} SOL</Text>
          </Stack>
        </Card>
      ))}
    </List>
  );
};

export default function WalletProfile() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    if (publicKey) {
      const getBalanceEvery10Seconds = async () => {
        const newBalance = await connection.getBalance(publicKey);
        setBalance(newBalance / LAMPORTS_PER_SOL);
        setTimeout(getBalanceEvery10Seconds, 10000);
      };
      getBalanceEvery10Seconds();
    }
  }, [publicKey, connection]);

  const getAirdropOnClick = async () => {
    try {
      if (!publicKey) {
        throw new Error('Wallet is not Connected');
      }
      const [latestBlockhash, signature] = await Promise.all([
        connection.getLatestBlockhash(),
        connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL),
      ]);
      const sigResult = await connection.confirmTransaction(
        { signature, ...latestBlockhash },
        'confirmed'
      );
      if (sigResult) {
        showNotification({
          title: 'Success',
          message: 'Airdrop was confirmed!',
          color: 'teal',
          icon: <IconCheck />,
        });
      }
    } catch (err) {
      showNotification({
        title: 'Error',
        message: 'You are rate limited for Airdrop',
        color: 'red',
        icon: <IconX />,
      });
    }
  };

  return (
    <Container size="sm" my="md">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        {publicKey ? (
          <>
            <Group mt="md" mb="xs">
              <Center>
                <Title order={2}>Wallet Profile</Title>
              </Center>
              <Badge color="pink" variant="light">
                Connected
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              Your public key:
            </Text>
            <Text style={{ wordWrap: 'break-word' }}>{publicKey.toString()}</Text>

            <Text size="sm" color="dimmed" mt="md">
              Balance:
            </Text>
            <Text>{balance} SOL</Text>

            <Button fullWidth mt="md" radius="md" color="blue" onClick={getAirdropOnClick}>
              Get Airdrop
            </Button>

            <Text size="sm" color="dimmed" mt="md">
              Token Balances:
            </Text>
            <TokenAccounts publicKey={publicKey} connection={connection} />

<<<<<<< HEAD
            {/* <Text size="sm" color="dimmed" mt="md">
              Recent Transactions:
            </Text>
            <RecentTransactions publicKey={publicKey} connection={connection} /> */}
=======
            <Text size="sm" color="dimmed" mt="md">
              Recent Transactions:
            </Text>
            <RecentTransactions publicKey={publicKey} connection={connection} />
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
          </>
        ) : (
          <Center>
            <Text size="lg">Wallet is not connected</Text>
          </Center>
        )}
      </Card>
    </Container>
  );
}
