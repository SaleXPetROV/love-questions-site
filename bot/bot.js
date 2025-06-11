const TelegramBot = require('node-telegram-bot-api');

// Загрузка переменных окружения
require('dotenv').config();

// Токен бота
const token = process.env.TELEGRAM_BOT_TOKEN;

// Создаем экземпляр бота
const bot = new TelegramBot(token, {polling: true});

// ID пользователя, которому будут отправляться ответы
const ANSWER_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    
    // Проверяем, является ли пользователь тем, кому нужно отправить приветствие
    if (chatId.toString() === process.env.ADMIN_CHAT_ID) {
        const keyboard = {
            inline_keyboard: [
                [{
                    text: 'Открыть вопросы',
                    web_app: {url: 'https://salexpetrov.github.io/love-questions-site/'} // Замените на URL вашего сайта
                }]
            ]
        };

        bot.sendMessage(chatId, 'Пару вопросов для тебя❤️', {
            reply_markup: keyboard
        });
    }
});

// Обработчик для получения ответов с сайта
bot.on('message', (msg) => {
    // Здесь можно добавить дополнительную логику обработки сообщений
    console.log('Получено сообщение:', msg);
});

console.log('Бот запущен!'); 