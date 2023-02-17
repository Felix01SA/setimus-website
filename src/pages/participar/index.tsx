import LandingLayout from '@components/layouts/LandingPage-layout'
import MotionLayout from '@components/layouts/MotionTransitions'
import { ParticipatePage } from '@components/shared/ToParticipate'
import Head from 'next/head'

const ToParticipatePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>ENTRAR PARA O CLÃ - Se7imus</title>
            </Head>
            <main>
                <LandingLayout>
                    <MotionLayout>
                        <ParticipatePage />
                    </MotionLayout>
                </LandingLayout>
            </main>
        </>
    )
}

export default ToParticipatePage
