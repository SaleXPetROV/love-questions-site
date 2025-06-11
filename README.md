# Love Questions Site

Интерактивный сайт с вопросами для пары, интегрированный с Telegram ботом для сбора ответов.

### Предварительные требования
- Node.js (версия 14 или выше)
- Git
- Telegram Bot Token (получить у [@BotFather](https://t.me/BotFather))
- Telegram Chat ID (можно получить через [@userinfobot](https://t.me/userinfobot))

### Установка и Локальный запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/SaleXPetROV/love-questions-site.git
cd love-questions-site
```

2. Создайте файл конфигурации `.env` в корневой директории:
```env
TELEGRAM_BOT_TOKEN=ваш_токен_бота
TELEGRAM_CHAT_ID=ваш_chat_id
```

3. Запустите локальный сервер:
```bash
# Если у вас установлен Python 3:
python -m http.server 8000

# Или если у вас установлен Node.js:
npx serve
```

4. Откройте браузер и перейдите по адресу:
```
http://localhost:8000
```

## Запуск на сервере

### Вариант 1: Простой хостинг (например, GitHub Pages)

1. Загрузите файлы на GitHub Pages:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

2. В настройках репозитория GitHub включите GitHub Pages для ветки main.

### Вариант 2: Полноценный сервер (например, VPS)

1. Подключитесь к серверу:
```bash
ssh user@your-server-ip
```

2. Установите необходимые пакеты:
```bash
sudo apt update
sudo apt install nginx nodejs npm
```

3. Клонируйте репозиторий:
```bash
git clone https://github.com/SaleXPetROV/love-questions-site.git
cd love-questions-site
```

4. Настройте Nginx:
```bash
sudo nano /etc/nginx/sites-available/love-questions
```

Добавьте следующую конфигурацию:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /path/to/love-questions-site;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

5. Активируйте конфигурацию:
```bash
sudo ln -s /etc/nginx/sites-available/love-questions /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Настройка Telegram бота

1. Создайте нового бота через [@BotFather](https://t.me/BotFather)
2. Получите токен бота
3. Получите ваш Chat ID через [@userinfobot](https://t.me/userinfobot)
4. Обновите конфигурацию в файле `script.js`:
```javascript
const TELEGRAM_BOT_TOKEN = 'ваш_токен_бота';
const TELEGRAM_CHAT_ID = 'ваш_chat_id';
```

## Структура проекта

```
love-questions-site/
├── index.html          # Главная страница
├── script.js           # Основной JavaScript код
├── styles.css          # Стили
├── images/            # Папка с изображениями
│   └── gif1.gif      # Анимации котиков
├── audio/            # Папка с аудиофайлами
│   └── *.mp3        # Музыкальные файлы
└── README.md         # Этот файл
```

## Функциональность

- Интерактивный интерфейс с вопросами
- Автоматическая отправка ответов в Telegram
- Фоновая музыка
- Анимации котиков
- Падающие сердечки

## Безопасность

- Не публикуйте токен бота в публичном доступе
- Используйте переменные окружения для хранения чувствительных данных
- Регулярно обновляйте зависимости

## Поддержка

При возникновении проблем создайте issue в репозитории проекта. 