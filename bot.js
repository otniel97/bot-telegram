const { Telegraf } = require('telegraf');
require('./.env');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use((ctx) => {
    const message = [ctx.message.text]
    ctx.reply(`Hola ${message[0]}`)
})

bot.launch();