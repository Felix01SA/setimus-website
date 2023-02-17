import { Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Router from 'next/router'
import {
    ArrowRight,
    CurrencyDollarSimple,
    DiscordLogo,
    TelegramLogo,
    WarningCircle,
} from 'phosphor-react'
import { Fragment } from 'react'

type PerksProps = {
    title: string
    detail: string
    icon: any
}

const perks: PerksProps[] = [
    {
        title: 'Passe de batalha',
        detail: 'Membro com mais estrelas ganhará um pase de batalha até o fim da temporada',
        icon: <CurrencyDollarSimple size={25} />,
    },
    {
        title: 'Interação no Discord',
        detail: 'Cor do Tag do discord',
        icon: <DiscordLogo size={25} />,
    },
    {
        title: 'Por Fazer',
        detail: 'Sem ideias no momento',
        icon: <WarningCircle size={25} />,
    },
]

export const Perks: React.FC = () => {
    return (
        <Container
            id='perks'
            mt='20'
            maxW='6xl'
            px={{ base: 6, md: 10 }}
            pb={20}
        >
            <Heading
                as='h1'
                textTransform='uppercase'
                fontFamily='AgencyFB'
                textAlign='center'
            >
                em breve novidades...
            </Heading>
            {/* <Stack direction={{ base: 'column', md: 'row' }}>
                <Stack direction='column' spacing={10} justifyContent='center'>
                    <Heading
                        as='h1'
                        fontSize='5xl'
                        lineHeight={1}
                        fontWeight='bold'
                        textAlign='left'
                    >
                        Na Se7imus você{' '}
                        <Text
                            as='span'
                            bgGradient='linear(to-r, yellow.400, yellow.700)'
                            bgClip='text'
                        >
                            ganha
                        </Text>{' '}
                        por seu{' '}
                        <Text
                            as='span'
                            bgGradient='linear(to-r, yellow.400, yellow.700)'
                            bgClip='text'
                        >
                            desempenho
                        </Text>{' '}
                        em jogo!
                    </Heading>
                    <Text
                        color='gray.400'
                        fontSize='lg'
                        textAlign='left'
                        fontWeight='400'
                        maxW='700px'
                    >
                        Cumprir objetivos propostos pela comunidade te dará
                        prêmios no jogo e no servidor do Discord.
                    </Text>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: 5, md: 10 }}
                        flexWrap='wrap'
                    >
                        {perks.map((perk, index) => (
                            <Stack
                                key={index}
                                direction={{ base: 'row', md: 'column' }}
                                spacing={2}
                            >
                                <Flex
                                    p={3}
                                    maxH='52'
                                    w='max-content'
                                    color='gray.800'
                                    bgGradient='linear(to-br, yellow.400, yellow.700)'
                                    rounded='md'
                                    align='center'
                                >
                                    {perk.icon}
                                </Flex>
                                <Stack direction='column' spacing={2}>
                                    <Text fontSize='md' fontWeight='500'>
                                        {perk.title}
                                    </Text>
                                    <Text
                                        fontSize='sm'
                                        color='gray.500'
                                        maxW={{ base: '100%', md: '200px' }}
                                    >
                                        {perk.detail}
                                    </Text>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                    <Stack
                        flexWrap='wrap'
                        direction={{ base: 'column', sm: 'row' }}
                        spacing={{ base: 0, sm: 2 }}
                    >
                        <Button
                            as={motion.button}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition='0.4 ease'
                            px={6}
                            position='revert'
                            rounded='full'
                            color='gray.800'
                            bgGradient='linear(to-r, yellow.400, yellow.700)'
                            _hover={{
                                bgGradient:
                                    'linear(to-r, yellow.700, yellow.400)',
                            }}
                            rightIcon={<ArrowRight />}
                            onClick={() => {
                                setTimeout(
                                    () => Router.push('/participar'),
                                    400
                                )
                            }}
                        >
                            Participar
                        </Button>
                    </Stack>
                </Stack>
            </Stack> */}
        </Container>
    )
}
