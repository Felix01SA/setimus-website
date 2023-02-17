import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

import styles from './styles'
import colors from './colors'
import fonts from './fonts'
import components from './components'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    config,
    colors,
    fonts,
    styles,
    components,
})
