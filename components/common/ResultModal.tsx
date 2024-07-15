import { Modal, Text, Button, Center, Box } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { Transition } from '@mantine/core';
import React from 'react';

interface IResultModalProps {
  opened: boolean;
  toggle: () => void;
  success: boolean;
}

function ResultModal({ opened, toggle, success }: IResultModalProps) {
  return (
    <Modal opened={opened} onClose={toggle} title="Token Creation" centered>
      <Center>
        <Transition mounted={opened} transition="fade" duration={1000} timingFunction="ease">
          {(styles) => (
            <div style={styles}>{success ? <IconCheck size={60} /> : <IconX size={60} />}</div>
          )}
        </Transition>
      </Center>
      <Center>
        <Text size="lg">
          {success ? 'Token creation was successful!' : 'Token creation failed.'}
        </Text>
      </Center>
      <Center>
        <Transition mounted={opened} transition="fade" duration={500} timingFunction="ease">
          {(styles) => (
            <Text size="sm" color="dimmed" style={styles}>
              {success
                ? 'Your token has been successfully created and is now available on the blockchain.'
                : 'There was an error in the token creation process. Please try again.'}
            </Text>
          )}
        </Transition>
      </Center>
      <Center style={{ marginTop: '20px' }}>
        <Button variant="outline" onClick={toggle}>
          Close
        </Button>
      </Center>
    </Modal>
  );
}

export default ResultModal;
