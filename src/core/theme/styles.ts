import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props: any) => ({
        body: {
            bg: mode('gray.300', 'gray.800')(props),
            fontFamily: 'Montserrat',
        },

        html: {
            fontFamily: 'Montserrat',
            scrollBehavior: 'smooth',
        },

        '::-webkit-scrollbar': {
            width: '0.31rem',
        },

        '::-webkit-scrollbar-thumb': {
            borderRadius: '0.625rem',
            background: mode('gray.300', 'gray.600')(props),
        },

        '::-webkit-scrollbar-track': {
            background: 'rgba(0, 0, 0, 0)',
        },
    }),
}

export default styles
