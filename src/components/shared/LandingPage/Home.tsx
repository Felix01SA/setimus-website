import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image as ChakraImage,
    RecursiveProperty,
    Stack,
    Text,
} from '@chakra-ui/react'
import Router from 'next/router'
import { ArrowDown, ArrowRight } from 'phosphor-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const HomeLanding: React.FC = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 690,
            left: 0,
            behavior: 'smooth',
        })
    }

    return (
        <Flex
            align='center'
            justify={{
                base: 'center',
                md: 'space-around',
                xl: 'space-between',
            }}
            direction={{ base: 'column-reverse', sm: 'row-reverse', md: 'row' }}
            wrap='nowrap'
            minH='90vh'
            px={20}
            id='home'
        >
            <Stack spacing={4} w={{ base: '80%', md: '90%' }} align='center'>
                <ChakraImage
                    src='/assets/images/logoText.svg'
                    alt='Setimus'
                    width='md'
                    mb='4'
                />
                <Heading
                    as='h2'
                    size='xl'
                    fontWeight='bold'
                    textAlign='center'
                    textTransform='uppercase'
                    fontFamily='Caxo'
                >
                    Um mundo pelo qual vale a pena lutar.{' '}
                </Heading>
                <Heading
                    as='h3'
                    size='md'
                    fontWeight='normal'
                    lineHeight={1.5}
                    textAlign={['center', 'center', 'left', 'left']}
                >
                    Uma nova comunidade de Call Of Duty Mobile
                </Heading>

                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    align='center'
                    gap='8'
                >
                    <Button
                        as={motion.button}
                        onClick={() => {
                            setTimeout(() => Router.push('/participar'), 400)
                        }}
                        px={8}
                        rounded='full'
                        bg='purple.400'
                        rightIcon={<ArrowRight />}
                        _hover={{
                            bg: 'purple.700',
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition='0.4 ease'
                        textTransform='uppercase'
                    >
                        Participar
                    </Button>

                    <Button
                        visibility={{ base: 'hidden', md: 'visible' }}
                        as={motion.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition='0.4 ease'
                        rounded='full'
                        textTransform='uppercase'
                        px={8}
                        rightIcon={<ArrowDown />}
                        onClick={handleScroll}
                    >
                        Saiba mais
                    </Button>
                </Flex>
            </Stack>
        </Flex>
    )
}
