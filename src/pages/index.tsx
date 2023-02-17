import Head from 'next/head'
import type { NextPage } from 'next'
import LandingLayout from '@components/layouts/LandingPage-layout'
import { HomeLanding } from '@components/shared/LandingPage/Home'
import { Perks } from '@components/shared/LandingPage/Perks'
import MotionLayout from '@components/layouts/MotionTransitions'
import { Box } from '@chakra-ui/react'

import { ReactNode } from 'react'

const Background = ({ children }: { children: ReactNode }) => {
    return (
        <Box
            w='100%'
            h={{ base: 'fit-content', md: '100vh' }}
            position='relative'
            overflow='hidden'
            top={-70}
        >
            <Box
                as='video'
                src='/assets/videos/CallofDutyMobile-Cinematic.mp4'
                muted
                autoPlay
                loop
                w='100vw'
                minH='100vh'
                objectFit='cover'
                position='relative'
                filter='auto'
                blur={10}
                opacity={0.2}
                sx={{
                    aspectRatio: '16/9',
                }}
            />

            <Box
                w='100%'
                h={{ base: 'full', md: '50vh', lg: 'full' }}
                position='absolute'
                top={{ base: 20, md: 6 }}
                left={0}
            >
                {children}
            </Box>
        </Box>
    )
}

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>SETIMUS TEAM</title>
                <meta
                    name='description'
                    content='Novo clã de Call Of Duty Mobile'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <LandingLayout>
                    <MotionLayout>
                        <Background>
                            <HomeLanding />
                        </Background>
                        <Perks />
                    </MotionLayout>
                </LandingLayout>
            </main>
        </>
    )
}

export default HomePage
