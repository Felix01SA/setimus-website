import {
    Box,
    Container,
    Flex,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Tag,
    Text,
} from '@chakra-ui/react'
import {
    FacebookLogo,
    InstagramLogo,
    TwitterLogo,
    YoutubeLogo,
} from 'phosphor-react'
import { FC, ReactNode } from 'react'

const ListTitle = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight='500' fontSize='lg' mb='2'>
            {children}
        </Text>
    )
}

type ListSocialProps = {
    children: ReactNode
    icon?: any
    href?: string
}

const ListSocial = ({ icon, children, href }: ListSocialProps) => {
    return (
        <Flex align='center' gap='2'>
            {icon}
            <Link href={href} target='_blank'>
                {children}
            </Link>
        </Flex>
    )
}

export const Footer: React.FC = () => {
    return (
        <Box bg={'gray.900'} color='gray.200' w='100%'>
            <Container as={Stack} maxW='6xl' py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing='8'>
                    <Stack align={'flex-start'}>
                        <ListTitle>Comunidade</ListTitle>
                        <Link href={'#'}>Sobre Nós</Link>
                        <Link href={'#'}>Contact Us</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListTitle>Siga-nos</ListTitle>

                        <ListSocial
                            href={'https://www.instagram.com/setimusteam'}
                            icon={<InstagramLogo size={18} />}
                        >
                            Instagram
                        </ListSocial>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10} textAlign='center'>
                <Flex
                    align='center'
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: 'gray.700',
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: 'gray.700',
                        flexGrow: 1,
                        ml: 8,
                    }}
                    gap='4'
                    userSelect='none'
                >
                    <Image
                        src='/assets/images/logo.svg'
                        alt='Logo'
                        w='2.5rem'
                    />
                    <Image
                        src='/assets/images/logoText.svg'
                        alt='Logo'
                        w='6rem'
                    />
                </Flex>
                <Text pt={6} fontSize='sm' textAlign='center'>
                    Site criado por{' '}
                    <Link
                        fontWeight='semibold'
                        target='_blank'
                        href='https://github.com/felix01sa'
                    >
                        Felix01SA ❤️
                    </Link>
                    .
                </Text>
            </Box>
        </Box>
    )
}
