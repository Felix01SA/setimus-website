import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const variants = {
    hidden: {
        opacity: 0,
        x: -200,
        y: 0,
    },
    enter: {
        opacity: 1,
        x: 0,
        y: 0,
    },
    exit: {
        opacity: 0,
        x: 0,
        y: -200,
    },
}

const MotionMain: React.FC<Props> = ({ children }) => {
    return (
        <motion.main
            variants={variants}
            initial='hidden'
            animate='enter'
            exit='exit'
            transition={{ type: 'spring', damping: 13 }}
        >
            {children}
        </motion.main>
    )
}

export default MotionMain
