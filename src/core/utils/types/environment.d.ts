declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production'

            PORT: string
            BASE_URL: string
            API_URL: string

            NEXT_PUBLIC_WEBSOCKET_PROXY_URL: string
        }
    }
}

export {}
