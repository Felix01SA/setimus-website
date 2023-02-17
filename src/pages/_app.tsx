import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import '@styles/main.scss'
import '@styles/fonts.scss'
import '@fontsource/dm-sans'

import { theme } from '@core/theme'
import { AnimatePresence } from 'framer-motion'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <AnimatePresence mode='wait' initial={false}>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </AnimatePresence>
        </ChakraProvider>
    )
}
