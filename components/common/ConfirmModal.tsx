import { CreateTokenType } from '@/utils/types/types';
import { Modal, Grid, Text, Image, Button, Flex, Center } from '@mantine/core';
import React from 'react';

interface IConfirmModalProps {
  opened: boolean;
  toggle: () => void;
  data: CreateTokenType;
  onSubmit: () => void;
}

function ConfirmModal({ opened, toggle, data, onSubmit }: IConfirmModalProps) {
  return (
    <Modal opened={opened} onClose={toggle} title="Token Details" centered>
      <Grid>
        <Grid.Col span={12}>
          <Image src={data.logoURL} alt={`${data.name} logo`} height={60} width={60} radius="md" />
        </Grid.Col>
        <Grid.Col span={12}>
          <Text size="lg">
            {data.name} ({data.symbol})
          </Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text size="sm" color="dimmed">
            Decimals:
          </Text>
          <Text size="sm">{data.decimals}</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text size="sm" color="dimmed">
            Total Supply:
          </Text>
          <Text size="sm">{data.totalSupply}</Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text size="sm" color="dimmed">
            Website:
          </Text>
          <Text size="sm">
            <a href={data.website} target="_blank" rel="noopener noreferrer">
              {data.website}
            </a>
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text size="sm" color="dimmed">
            Telegram:
          </Text>
          <Text size="sm">
            <a href={data.telegram} target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text size="sm" color="dimmed">
            Discord:
          </Text>
          <Text size="sm">
            <a href={data.discord} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text size="sm" color="dimmed">
            Twitter:
          </Text>
          <Text size="sm">
            <a href={data.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text size="sm" color="dimmed">
            Description:
          </Text>
          <Text size="sm">{data.description}</Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text size="sm" color="dimmed">
            Mint Authority:
          </Text>
          <Text size="sm">{data.mintAuthority}</Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text size="sm" color="dimmed">
            Freeze Authority:
          </Text>
          <Text size="sm">{data.freezeAuthority}</Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text size="sm" color="dimmed">
            Update Authority:
          </Text>
          <Text size="sm">{data.updateAuthority}</Text>
        </Grid.Col>
        <Flex gap={4} justify="center" align="center">
          <Button variant="outline" onClick={toggle}>
            Close
          </Button>
          <Button onClick={onSubmit}>Confirm</Button>
        </Flex>
      </Grid>
    </Modal>
  );
}

export default ConfirmModal;
