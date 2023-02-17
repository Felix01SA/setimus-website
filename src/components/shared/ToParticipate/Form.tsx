import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    NumberInput,
    NumberInputField,
    Radio,
    RadioGroup,
    SimpleGrid,
    Stack,
    Text,
    useDisclosure,
    ModalFooter,
    useToast,
} from '@chakra-ui/react'
import { api } from '@core/lib/axios'
import Head from 'next/head'
import {
    DiscordLogo,
    PaperPlaneTilt,
    Warning,
    WhatsappLogo,
} from 'phosphor-react'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'

type FormProps = {
    name?: string
    discordUsername?: string
    discordTag?: string
    gameTag?: string
    gameId?: string
    phoneNumber?: string
    competitive?: boolean
}

type GameID = {
    encontrado: boolean
    form?: FormProps
}

export const Form: React.FC = () => {
    const [form, setForm] = useState<FormProps>()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const mutation = useMutation((newForm: FormProps) => {
        return api.post('/forms/create', newForm, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
    })

    const { data } = useQuery<GameID>(['existForm', form?.gameId], {
        queryFn: async () => {
            if (form?.gameId === '' || form!.gameId!.length < 19) return
            const response = await api.get(`/forms/${form?.gameId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
            console.log(response.data)
            return response.data
        },
    })

    return (
        <>
            <Head>
                <title>FORMULÁRIO</title>
            </Head>
            <Container maxW='6xl' px={16}>
                <Stack spacing={10}>
                    <Stack spacing={3}>
                        <Heading
                            textTransform='uppercase'
                            fontFamily='AgencyFB'
                        >
                            Formulário de inscrição
                        </Heading>
                        <Text color='gray.400'>
                            Se alguma informação estiver incorreta vc não
                            conseguirá entrar na comunidade.
                        </Text>
                    </Stack>
                    <Stack align='center' spacing={10}>
                        <SimpleGrid
                            as={Stack}
                            columns={{ base: 1, sm: 2 }}
                            spacing={5}
                        >
                            <FormControl isRequired>
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    focusBorderColor='purple.400'
                                    type='text'
                                    placeholder='John Doe'
                                    value={form?.name}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Nome no jogo</FormLabel>
                                <Input
                                    focusBorderColor='purple.400'
                                    type='text'
                                    value={form?.gameTag}
                                    placeholder='JohnDoeKiller'
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            gameTag: e.target.value,
                                        })
                                    }
                                />
                            </FormControl>
                            <FormControl
                                isRequired
                                isInvalid={data?.encontrado}
                            >
                                <FormLabel>ID do jogo</FormLabel>
                                <NumberInput
                                    focusBorderColor='purple.400'
                                    placeholder='1234567890'
                                    value={form?.gameId}
                                >
                                    <NumberInputField
                                        maxLength={19}
                                        placeholder='01234567890123456789'
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                gameId: e.target.value,
                                            })
                                        }
                                    />
                                </NumberInput>
                                <FormErrorMessage>
                                    ID já cadastrado
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Discord Tag</FormLabel>
                                <Flex align='center' gap={2}>
                                    <Input
                                        focusBorderColor='purple.400'
                                        type='text'
                                        placeholder='Nome de usuário'
                                        value={form?.discordUsername}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                discordUsername: e.target.value,
                                            })
                                        }
                                    />
                                    <Text fontFamily='Caxo' fontSize='xl'>
                                        #
                                    </Text>
                                    <Input
                                        focusBorderColor='purple.400'
                                        type='number'
                                        w='38%'
                                        placeholder='9999'
                                        value={form?.discordTag}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                discordTag: e.target.value,
                                            })
                                        }
                                    />
                                </Flex>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>WhatsApp</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon
                                        /* eslint-disable-next-line react/no-children-prop*/
                                        children='+55'
                                        pointerEvents='none'
                                        userSelect='none'
                                    />
                                    <Input
                                        focusBorderColor='purple.400'
                                        type='tel'
                                        maxLength={11}
                                        placeholder='82999009900'
                                        value={form?.phoneNumber}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                phoneNumber: e.target.value,
                                            })
                                        }
                                    />
                                    <InputRightElement
                                        pointerEvents='none'
                                        /* eslint-disable-next-line react/no-children-prop*/
                                        children={<WhatsappLogo size={25} />}
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Competitivo</FormLabel>
                                <RadioGroup
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            competitive:
                                                e === 'true' ? true : false,
                                        })
                                    }
                                    value={String(form?.competitive)}
                                >
                                    <Stack direction='row' spacing={10}>
                                        <Radio value='true'>Sim</Radio>
                                        <Radio value='false'>Não</Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>
                        </SimpleGrid>
                        <Button
                            maxW='md'
                            px={8}
                            colorScheme='purple'
                            bgColor={'purple.400'}
                            color='gray.200'
                            rounded='full'
                            rightIcon={<PaperPlaneTilt />}
                            _loading={{
                                _hover: {
                                    color: 'gray.900',
                                },
                            }}
                            loadingText='Enviando'
                            spinnerPlacement='end'
                            isLoading={mutation.isLoading}
                            onClick={() => {
                                mutation.mutate({
                                    competitive: form?.competitive,
                                    name: form?.name,
                                    discordTag: `${form?.discordUsername}#${form?.discordTag}`,
                                    gameId: form?.gameId,
                                    gameTag: form?.gameTag,
                                    phoneNumber: form?.phoneNumber,
                                })

                                mutation.isSuccess ? onOpen() : onClose
                                mutation.isError
                                    ? toast({
                                          title: 'Algo saiu mau.',
                                          description:
                                              'UID do jogo ou Discord Tag já cadastradas',
                                          duration: 5000,
                                          isClosable: true,
                                          status: 'error',
                                          variant: 'solid',
                                          icon: <Warning size={50} />,
                                      })
                                    : ''
                            }}
                        >
                            Enviar
                        </Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>
                                    Cadastro Enviado com sucesso!
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text>
                                        Agora você pode entrar em nosso servidor
                                        do Discord, interagir, jogar e se
                                        divertir com todos da comunidade.
                                    </Text>
                                </ModalBody>

                                <ModalFooter>
                                    <Button
                                        bgColor='discord.500'
                                        colorScheme='blue'
                                        leftIcon={<DiscordLogo size={25} />}
                                    >
                                        Discord
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}
