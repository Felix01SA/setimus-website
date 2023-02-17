import { Box } from '@chakra-ui/react'
import LandingLayout from '@components/layouts/LandingPage-layout'
import MotionMain from '@components/layouts/MotionTransitions'
import { Form } from '@components/shared/ToParticipate/Form'
import type { NextPage } from 'next'

const FormsPage: NextPage = () => {
    return (
        <LandingLayout>
            <MotionMain>
                <Box my={20}>
                    <Form />
                </Box>
            </MotionMain>
        </LandingLayout>
    )
}

export default FormsPage
