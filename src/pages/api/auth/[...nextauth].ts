import NextAuth, { type NextAuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import { botsConfigs } from '@config/bots'

export const authOptions: NextAuthOptions = {
    providers: [
        DiscordProvider({
            clientId: botsConfigs[0].id,
            clientSecret: botsConfigs[0].secret,
        }),
    ],

    session: { strategy: 'jwt' },

    callbacks: {
        async jwt({ token, user, account }) {
            if (account?.access_token) token.access_token = account.access_token
            if (user?.id) token.userId = user.id
            return token
        },

        async session({ session, token }) {
            if (token.access_token)
                session.access_token = token.access_token as any
            if (token.userId) session.userId = token.userId as any
            return session
        },
    },
}

export default NextAuth(authOptions)
