const TelegramBot = require('node-telegram-bot-api');

// Токен бота
const token = '7430735534:AAEPh3D-JwKDnNpxRtaHobNI_YJ1_1q5JWw';

// Создаем экземпляр бота
const bot = new TelegramBot(token, {polling: true});

// ID пользователя, которому будут отправляться ответы
const ANSWER_CHAT_ID = '6661676176';

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    
    // Проверяем, является ли пользователь тем, кому нужно отправить приветствие
    if (chatId.toString() === '7095431174') {
        const keyboard = {
            inline_keyboard: [
                [{
                    text: 'Открыть вопросы',
                    web_app: {url: 'https://salexpetrov.github.io/love-questions-site/'} // Замените на URL вашего сайта
                }]
            ]
        };

        bot.sendMessage(chatId, 'Вопросы для тебя ❤️', {
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