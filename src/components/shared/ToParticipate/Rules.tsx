import {
    Button,
    Container,
    Flex,
    Heading,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

const rules: string[] = [
    'Ter 14 anos ou mais',
    'Não jogamos competitivamente (Mix, treino, campeonatos, qualquer atividade competitiva/representativa da comunidade) entre às 18:00H de sexta-feira até às 18:00H de sábado.',
    'Não serão aceitos membros integrantes de outros clãs, comunidades ou tropas, por favor tenha seu desligamento oficializado pelo líder do clã., comunidade ou tropa anterior, com o motivo do desligamento e o tempo de participação do mesmo.',
    'Todos os membros deverão estar atentos as redes da comunidade, lá será o principal vinculo de anúncios sobre qualquer evento da comunidade.',
    'Só poderá usar o nome ou simbolo da comunidade ou qualquer coisa que indique a mesma, somente com a autorização dos lideres.',
    'A TAG da comunidade só será liberada para uso após a aprovação no recrutamento (Não coloque antes). Mesmo depois de ser aprovado o membro deverá manter sua conduta que o fez entrar nessa comunidade, pois estará sendo observado pelos lideres e pelos moderadores, até mesmo pelos outros membros.',
]

export const RulesPage: React.FC = () => {
    const route = useRouter()

    return (
        <Container maxW='5xl' p={{ base: 5, md: 10 }}>
            <VStack rounded='md' overflow='hidden' spacing={0}>
                <Heading mb='8'>
                    Essas são nossas regras,{' '}
                    <Text as='strong' color='red.600'>
                        se não estiver de acordo
                    </Text>{' '}
                    com alguma, por favor não entre!
                </Heading>
                {rules.map((rule, index) => (
                    <Fragment key={index}>
                        <Flex direction='column' px={8} py={2} w='100%'>
                            <Text
                                fontSize={{
                                    base: 'sm',
                                    sm: 'md',
                                    md: 'lg',
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: `${index + 1} - ${rule}`,
                                }}
                            />
                        </Flex>
                    </Fragment>
                ))}
                <Button onClick={route.back}>Voltar</Button>
            </VStack>
        </Container>
    )
}
