import LandingLayout from '@components/layouts/LandingPage-layout'
import MotionMain from '@components/layouts/MotionTransitions'
import { RulesPage } from '@components/shared/ToParticipate/Rules'
import Head from 'next/head'

const Rules: React.FC = () => {
    return (
        <>
            <Head>
                <title>REGRAS - Se7imus</title>
            </Head>
            <main>
                <LandingLayout>
                    <MotionMain>
                        <RulesPage />
                    </MotionMain>
                </LandingLayout>
            </main>
        </>
    )
}

export default Rules
