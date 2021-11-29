import { Link, Container, Heading, Box, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Crypto Dyno
          </Heading>
          <p>Fossil of dyno a.k.a. NFT Arts</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          There are 100 unique crypto dynos currently live in web3.0
        </Paragraph>
        <Box align="center" my={4}>
          <Link
            href="https://opensea.io/collection/crypto-dyno"
            target="_blank"
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Chekcout Crypto Dyno NFTs @ Opensea
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          History
        </Heading>
        <BioSection>
          <BioYear>2021 Nov 29</BioYear>
          <br />
          Dyno #55 #59 #60 #61 #62 #63 #29 #28 were listed on Opensea
        </BioSection>

        <BioSection>
          <BioYear>2021 Nov 23</BioYear>
          <br />
          Crypto Dyno was created in ERC1155 smart contract and deployed on the{' '}
          <Link
            href="https://polygonscan.com/tx/0xda25b50b851fcd925ffe1ae5305294353e7e95d1fb256f2ba58e5952caf130dd"
            target="_blank"
          >
            Polygon Chain
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Dynos ♥
        </Heading>
        <Paragraph>
          Diamond, Unicorn, Fire, Plants, Christmas, Beer, Chikara, Mana
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact the Creator
        </Heading>
        <Paragraph>Email: cryptodyno.official@gmail.com</Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
