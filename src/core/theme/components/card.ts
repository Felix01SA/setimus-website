import { mode } from '@chakra-ui/theme-tools'

const styles = {
    baseStyle: (props: any) => ({
        p: '1.25rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        borderRadius: '0.72rem',
        minWidth: '0rem',
        wordWrap: 'break-word',
        bg: mode('white', 'gray.700')(props),
        backgroundCalip: 'border-box',
    }),
}

export default styles
