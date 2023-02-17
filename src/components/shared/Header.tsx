import {
    Box,
    Button,
    Flex,
    Image as ChakraImage,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useBoolean,
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import {
    X,
    List,
    DiscordLogo,
    House,
    UsersThree,
    CircleWavyQuestion,
} from 'phosphor-react'

const variants = {
    open: { opacity: 1, x: 0 },
    close: { opacity: 0, x: '-100%' },
}

export const Header: React.FC = () => {
    const [show, setShow] = useBoolean(false)
    const router = useRouter()

    return (
        <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            w='100%'
            p='5'
            bg={[
                'blackAlpha.400',
                'blackAlpha.400',
                'blackAlpha.200',
                'blackAlpha.200',
            ]}
            backdropFilter='blur(8px)'
            roundedBottom='xl'
            color='gray.200'
            position='fixed'
        >
            <Flex align='center' userSelect='none' gap={3}>
                {/* <ChakraImage src='/assets/images/logo.svg' w='2.5rem' /> */}
                <ChakraImage src='/assets/images/logoText.svg' w='6rem' />
            </Flex>

            <Box display={{ base: 'none', md: 'block' }}>
                <Flex gap='5'>
                    <Button
                        bgColor='gray.800'
                        _hover={{ backgroundColor: 'purple.700' }}
                        onClick={() => router.push('/')}
                    >
                        Home
                    </Button>

                    <Button
                        bgColor='gray.800'
                        _hover={{ backgroundColor: 'purple.700' }}
                        onClick={() => router.push('/participar')}
                    >
                        Participar
                    </Button>
                </Flex>
            </Box>
            <Menu onClose={setShow.off}>
                <MenuButton
                    as={Button}
                    display={{ base: 'block', md: 'none' }}
                    onClick={setShow.toggle}
                    transition='all 0.3s'
                    border='none'
                    backgroundColor='transparent'
                    _active={{
                        backgroundColor: 'transparent',
                    }}
                    _hover={{
                        backgroundColor: 'transparent',
                    }}
                >
                    {show ? <X /> : <List />}
                </MenuButton>

                <MenuList>
                    <MenuItem
                        onClick={() => router.push('/')}
                        icon={<House size={20} />}
                    >
                        Inicio
                    </MenuItem>

                    <MenuItem
                        onClick={() => router.push('/participar')}
                        icon={<UsersThree size={20} />}
                    >
                        Participar
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}
