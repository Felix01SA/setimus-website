import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { Header } from '@components/shared/Header'
import { Footer } from '@components/shared/Footer'

type LandingLayoutProps = {
    children: React.ReactNode
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
    return (
        <Flex
            direction='column'
            align='center'
            maxW={{ xl: 'full' }}
            m='0 auto'
            bgGradient='linear(to-t, gray.800, gray.900)'
            scrollBehavior='smooth'
            overflowX='hidden'
        >
            <Box my={20}>{props.children}</Box>
            <Header />
            <Footer />
        </Flex>
    )
}

export default LandingLayout
