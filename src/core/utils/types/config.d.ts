type BotConfig = {
    id: string
    name: string
    iconUrl?: string
    apiUrl: string
    apiToken: string
    secret: string
}

type BotsConfigs = BotConfig[]

type SanitizedBotConfig = Omit<BotConfig, 'apiUrl' | 'apiToken' | 'secret'>
