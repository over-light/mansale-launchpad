import { Card, Container, Grid, Text, Title } from '@mantine/core';
import React from 'react';

function Features() {
  return (
    <Container mt="md">
      <Grid>
        <Grid.Col span={4}>
          <Card>
            <Title order={3}>Simple & Fast</Title>
            <Text>Create your Token Launch & Sale within 5 Minutes.</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card>
            <Title order={3}>Custom Sale</Title>
            <Text>Customize your Sale with the Conditions you choose.</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card>
            <Title order={3}>100% Free</Title>
            <Text>Don't pay to use our Platform. We only get a 2.5% of your Sales.</Text>
          </Card>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={4}>
          <Card>
            <Title order={3}>Safe and Secure</Title>
            <Text>Focus on your project growth, we make the process secure.</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card>
            <Title order={3}>For everyone in SOL</Title>
            <Text>We want to empower Creators through useful Free Tools.</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card>
            <Title order={3}>Used by the Best</Title>
            <Text>The Best Projects in Solana are using our Token Launchpad.</Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Features;
