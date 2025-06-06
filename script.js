// Массив вопросов (вы можете заменить их на свои)
const questions = [
    "Вопрос 1",
    "Вопрос 2",
    "Вопрос 3",
    "Вопрос 4",
    "Вопрос 5",
    "Вопрос 6",
    "Вопрос 7",
    "Вопрос 8",
    "Вопрос 9",
    "Вопрос 10"
];

// Массив анимаций котиков
const catAnimations = [
    "images/gif1.gif",
    "images/gif2.gif",
    "images/gif3.gif",
    "images/gif4.gif",
    "images/gif5.gif",
    "images/gif6.gif",
    "images/gif7.gif",
    "images/gif8.gif",
    "images/gif9.gif",
    "images/gif10.jpg",
];

// Конфигурация Telegram бота
const TELEGRAM_BOT_TOKEN = '7430735534:AAEPh3D-JwKDnNpxRtaHobNI_YJ1_1q5JWw';
const TELEGRAM_CHAT_ID = '6661676176'; // ID пользователя, которому будут отправляться сообщения

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submitBtn');
const questionCounter = document.getElementById('questionCounter');
const catImage = document.querySelector('.cat-animation');
const backgroundMusic = document.getElementById('backgroundMusic');

// Элементы для стартового экрана и страницы вопросов
const startContainer = document.getElementById('startContainer');
const questionPage = document.getElementById('questionPage');

// Функция для создания падающих сердечек
function createHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);

    // Удаляем сердечко после завершения анимации
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Создаем сердечки каждые 300мс
setInterval(createHearts, 300);

// Функция для отправки сообщения в Telegram
async function sendToTelegram(message) {
    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        if (!response.ok) {
            throw new Error('Ошибка отправки сообщения');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке сообщения');
    }
}

// Функция для обновления счетчика вопросов
function updateQuestionCounter() {
    questionCounter.textContent = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}`;
}

// Функция для обновления анимации котика
function updateCatAnimation() {
    const randomCatIndex = Math.floor(Math.random() * catAnimations.length);
    catImage.src = catAnimations[randomCatIndex];
}

// Функция для показа текущего вопроса
function showCurrentQuestion() {
    questionElement.textContent = questions[currentQuestionIndex];
    answerInput.value = '';
    updateQuestionCounter();
    updateCatAnimation();
}

// Обработчик первого клика для запуска
document.addEventListener('click', function firstClickListener() {
    // Удаляем этот же обработчик, чтобы он сработал только один раз
    document.removeEventListener('click', firstClickListener);

    // Скрываем стартовый экран
    startContainer.style.display = 'none';
    // Показываем страницу с вопросами
    questionPage.style.display = 'flex'; // Используем flex, как в CSS для центрирования

    // Запускаем музыку
    backgroundMusic.play().catch(error => {
        console.error('Ошибка воспроизведения музыки:', error);
        // Можно добавить сообщение пользователю, что нужно включить звук
    });

    // Показываем первый вопрос
    showCurrentQuestion();
});

// Обработчик отправки ответа
submitButton.addEventListener('click', async () => {
    const answer = answerInput.value.trim();
    
    if (answer) {
        // Формируем сообщение для Telegram
        const message = `Вопрос ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex]}\nОтвет: ${answer}`;
        
        // Отправляем сообщение в Telegram
        await sendToTelegram(message);
        
        // Переходим к следующему вопросу
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            showCurrentQuestion();
        } else {
            // Все вопросы пройдены
            questionElement.textContent = "Спасибо за ответы!";
            answerInput.style.display = 'none';
            submitButton.style.display = 'none';
            catImage.src = catAnimations[0];
            
            // Отправляем финальное сообщение
            await sendToTelegram('Все вопросы пройдены! 🎉');

            // Останавливаем музыку (опционально)
            // backgroundMusic.pause();
        }
    }
});