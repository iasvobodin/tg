const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
// Обработчик команды /start
bot.start((ctx) => {
 ctx.reply('Привет! Бот работает.');
});
// Другие обработчики команд и сообщений
// Установка вебхука
bot.telegram.setWebhook(`${process.env.URL}/.netlify/functions/bot`);
// Обработка входящих вебхуков
module.exports.handler = async (event, context) => {
 try {
 await bot.handleUpdate(JSON.parse(event.body));
 return { statusCode: 200, body: 'OK' };
 } catch (error) {
 console.error('Error handling update:', error);
 return { statusCode: 500, body: 'Error' };
 }
};
