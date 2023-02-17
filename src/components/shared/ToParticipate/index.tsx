import {
    Button,
    Checkbox,
    Container,
    Heading,
    Link,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useBoolean,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Router from 'next/router'
import { DiscordLogo, FileCloud, LinkSimple, X } from 'phosphor-react'

type Rules = {
    text: string
    icon: any
}

const rules: Rules[] = [
    {
        text: ' Não jogamos competitivamente entre sexta-feira dàs 18:00h até às 18:00h de sábado.',
        icon: X,
    },
    {
        text: 'Idade minima de 14 anos.',
        icon: FileCloud,
    },
    {
        text: 'Não estar em outro clã. Certifique-se de ter seu desligamento oficializado pelo Líder.',
        icon: X,
    },
    {
        text: 'Ter uma conta no Discord.',
        icon: DiscordLogo,
    },
    {
        text: 'Se não estiver de acordo com alguma regra, por favor não continue.',
        icon: X,
    },
]

export const ParticipatePage: React.FC = () => {
    const [checked, setChecked] = useBoolean(false)

    return (
        <Container maxW='5xl'>
            <Stack
                textAlign='center'
                align='center'
                spacing={{ base: 8, md: 10 }}
                pb={{ base: 20, md: 28 }}
                pt={{ base: 20, md: 24 }}
            >
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight='110%'
                    display='flex'
                    flexDirection='column'
                    textAlign={{ base: 'center', md: 'start' }}
                >
                    Antes de se inscrever no clã
                    <Text as='span' color='purple.400'>
                        Preste atenção!
                    </Text>
                </Heading>
                <Text textAlign='start' color='gray.500' maxW='3xl'>
                    Nós da{' '}
                    <Text
                        as='strong'
                        color='purple.400'
                        fontFamily='AgencyFB'
                        textTransform='uppercase'
                    >
                        Se7imus
                    </Text>
                    , temos varias regras para que possamos manter a ordem e
                    harmonia na comunidade. <br />
                    Dentre elas algumas das indispensáveis a serem seguidas
                    dento de nossa comunidade são:
                </Text>
                <List textAlign='start' spacing={3}>
                    {rules.map((rule, index) => {
                        return (
                            <ListItem
                                key={index}
                                display='flex'
                                alignItems={'center'}
                            >
                                <ListIcon as={rule.icon} />
                                {rule.text}
                            </ListItem>
                        )
                    })}
                </List>

                <Link
                    as={NextLink}
                    href='/participar/regras'
                    display='flex'
                    alignItems='center'
                    gap={2}
                >
                    <LinkSimple /> Leia todas as nossas regras aqui.
                </Link>

                <Stack spacing={3}>
                    <Checkbox
                        colorScheme='purple'
                        onChange={(e) => {
                            e.target.checked
                                ? setChecked.on()
                                : setChecked.off()
                        }}
                    >
                        Li todas as regras e estou de acordo.
                    </Checkbox>
                    <Button
                        isDisabled={!checked}
                        rounded='full'
                        px={6}
                        colorScheme='purple'
                        bgColor='purple.400'
                        color='gray.200'
                        onClick={() => Router.push('/participar/formulario')}
                    >
                        Continuar
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}
