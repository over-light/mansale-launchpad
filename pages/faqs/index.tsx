import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import classes from './style.module.css';
import { FAQS } from '@/utils/constants';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export default function FAQs() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src="/faq.svg" alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              {FAQS.map((itm) => {
                return (
                  <Accordion.Item className={classes.item} value={itm.question}>
                    <Accordion.Control>{itm.question}</Accordion.Control>
                    <Accordion.Panel>{itm.answer}</Accordion.Panel>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
