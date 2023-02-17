import { ColorModeScript } from '@chakra-ui/react'
import { theme } from '@core/theme'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='pt-BR'>
            <Head>
                <link
                    rel='shortcut icon'
                    href='/assets/images/logo500x500.png'
                    type='image/x-icon'
                />

                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin=''
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <body>
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
