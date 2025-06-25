const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

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

const app = express();
app.use(cors());
app.use(express.json());

// Эндпоинт для приёма сообщений с сайта и отправки их в Telegram
app.post('/send', async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'No message provided' });
    try {
        await bot.sendMessage(ANSWER_CHAT_ID, message, { parse_mode: 'HTML' });
        res.json({ ok: true });
    } catch (err) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express server started on port ${PORT}`));

console.log('Бот запущен!'); 