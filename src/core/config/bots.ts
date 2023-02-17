export const botsConfigs: BotsConfigs = [
    {
        id: process.env['TEST_BOT_ID']!,
        name: 'Teste',
        apiUrl: process.env['TEST_BOT_API_URL']!,
        apiToken: process.env['TEST_BOT_API_TOKEN']!,
        secret: process.env['TEST_BOT_SECRET']!,
    },
]
