// Массив вопросов (вы можете заменить их на свои)
const questions = [
    //"Веришь ли ты в дружбу между парнем и девушкой?",
    //"Что заставляет тебя краснеть и смущаться?",
    "Ты ищешь что-то серьёзное или просто приятное общение?",
    "Что для тебя проявление заботы?",  
    "Какой твой самый неожиданный способ флиртовать?",  
    "Как ты относишься к серьёзным отношениям?",  
    //"Если бы мы вдруг оказались одни в пустом кинотеатре, что бы ты сделала?",  
    //"Какой комплимент тебя покорил сильнее всего?",  
    "Ты любишь, когда за тобой ухаживают?",  
    "Опиши жесть, на которую ты бы пошла ради симпатичного человека?",  
    "Какое твоё идеальное свидание?",  
    //"Ты веришь в любовь с первого взгляда, или это сказки?", 
    "Расскажи о 3 вещах, которые доставляют тебе максимальное удовольствие",  
    "Ты когда-нибудь нарушала правила ради влюблённости?",  
    "Ты ревнивая?",  
    "Ты уже составила какое-то мнение обо мне? Какое?",
    "Какая твоя самая тёмная (но милая) фантазия про идеальное свидание?",  
    "Как ты понимаешь, что человек тебе дорог?",  
    "Если бы я спросил, чего ты хочешь прямо сейчас — что бы ответила?",  
    "Ты легко доверяешь людям?",  
    "Ты любишь, когда тебя дразнят, или сразу злишься?",  
    "Какое твоё самое странное, но обаятельное качество?",  
    "Какой стиль общения тебе ближе: лёгкий или глубокий?",  
    "Что для тебя 'перейти черту' в отношениях?",  
    "Какой самый смешной случай произошёл с тобой на свидании?",  
    "Ты предпочитаешь страсть или нежность?",  
    "Как ты справляешься с негативными эмоциями?",
    "Как ты переживаешь моменты, когда тебе больно, но никого рядом нет?",
    "Если бы мы играли в 'Правда или действие' — что бы выбрала прямо сейчас и сказала?",  
    //"Какой вопрос ты боишься, чтобы я задал и почему?",  
    "Что смешного или стыдного случалось в твоей личной жизни?",  
    "Ты больше 'рассвет на пляже' или 'ночь в большом городе'?",  
    //"О чём ты никогда не говоришь при первом знакомстве, но мне можно?",   
    //"Что ты хочешь сделать но стесняешься?",
    
    "Ты бы пошла на ложь ради спасения отношений?",
    
    "Тебе нравится, когда человек проявляет инициативу?",
    //"Ты больше интроверт или экстраверт?",
    //"Как ты считаешь, у нас хороший контакт?",
    "Есть ли что-то, что ты хотела бы изменить в своей жизни?",
    "Что для тебя проявление заботы?",
    "Как ты относишься к серьёзным отношениям?",
    //"Ты любишь, когда за тобой ухаживают?",
    //"Какое твоё идеальное свидание?",
    //"Ты планируешь какие-то изменения в жизни?",
    //"Есть ли у тебя секреты которые ты хотела бы мне рассказать?",
    //"Как бы тебе хотелось, чтобы я показывал свою любовь - словами, действиями, касаниями?",
    //"Какие 3 поступка ты никогда бы не простила?",
    //"Куда бы ты хотела отправиться на свидание?",
    //"Куда бы ты хотела отправиться на свидание в следующий раз?",
    //"Чего нашим отношениям не хватает?",
    //"Ты вообще рассматриваешь меня как потенциального партнёра?",
    //"Ты обычно быстро понимаешь, нравится тебе человек или нет?",
    
    "Ты вообще открыта к новым знакомствам с намёком на отношения?",
    //"Как ты думаешь, мы подходим друг другу?",
    "Ты больше живёшь сегодняшним днём или думаешь о будущем?",
    //"Тебя устраивает степень близости между нами?",
    //"Я изменился с начала отношений?",
    //"Что ты подумала обо мне при первой нашей встрече?",
    "В какие моменты ты чувствуешь себя комфортно и счастливо?",
    "В какие моменты ты чувствуешь себя некомфортно?",
    //"Что в моём поведении вызывает в тебе агрессию?",
    
    //"Что будешь делать если я пропаду на несколько дней без предупреждений?",
    //"Что тебе нравиться в моём характере и что изменила бы?",
    //"Есть ли моменты проведённые со мной которые тебе запомняться на долго?",
    "Как ты себя чувствуешь в последнее время? Есть ли что-то что тебя беспокоит?",
    
    //"Как ты думаешь, что нам нужно сделать, чтобы восстановить наше общение?"

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

// Массив аудиофайлов для плейлиста
const playlist = [
    "audio/Ангельские_глаза.mp3",
    "audio/Я_буду.mp3",
    "audio/Расцветай.mp3",
    "audio/Избалованная.mp3",
    "audio/Nobody_Can_Hear_You.mp3"
    //"audio/Не_могу.mp3",
    //"audio/Не_забывай.mp3",
];

let currentQuestionIndex = 0;
let currentSongIndex = 0; // Индекс текущей песни в плейлисте

const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submitBtn');
const questionCounter = document.getElementById('questionCounter');
const catImage = document.querySelector('.cat-animation');
const backgroundMusic = document.getElementById('backgroundMusic');

// Элементы для стартового экрана и страницы вопросов
const startContainer = document.getElementById('startContainer');
const startButton = document.getElementById('startButton');
const questionPage = document.getElementById('questionPage');

// Открытые токены (замените на свои значения)
const TELEGRAM_BOT_TOKEN = '7872178664:AAGDCRDkL_anfY0maeKLDwUaa-3gC5JLkUc';
const TELEGRAM_CHAT_ID = '6661676176';


// Функция для автоматического изменения высоты textarea
function autoResizeTextarea() {
    this.style.height = 'auto'; // Сначала сбрасываем высоту
    this.style.height = (this.scrollHeight) + 'px'; // Устанавливаем высоту по содержимому
}

// Применяем автоматическое изменение размера к полю ввода ответа
answerInput.addEventListener('input', autoResizeTextarea);

// Также вызываем функцию при загрузке, чтобы установить начальную высоту
answerInput.addEventListener('DOMContentLoaded', autoResizeTextarea);

// Функция для загрузки и воспроизведения текущей песни
function playCurrentSong() {
    if (playlist.length === 0) {
        console.warn("Плейлист пуст!");
        return;
    }
    backgroundMusic.src = playlist[currentSongIndex];
    backgroundMusic.play().catch(error => {
        console.error('Ошибка воспроизведения музыки:', error);
        // Можно добавить сообщение пользователю, что нужно включить звук
    });
}

// Обработчик события окончания песни
backgroundMusic.addEventListener('ended', () => {
    currentSongIndex++;
    if (currentSongIndex >= playlist.length) {
        currentSongIndex = 0; // Начинаем сначала, если включен loop (атрибут loop у <audio>)
        // Если не нужен loop, можно просто остановить: backgroundMusic.pause(); return;
    }
    playCurrentSong(); // Воспроизводим следующую песню
});

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

// Функция для отправки сообщения в Telegram напрямую
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
        if (!response.ok) throw new Error('Ошибка отправки сообщения');
        return await response.json();
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке сообщения');
    }
}

// Функция для обновления счетчика вопросов
function updateQuestionCounter() {
    questionCounter.textContent = `${currentQuestionIndex + 1} из ${questions.length}`;
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

// Обработчик нажатия кнопки "Начать"
startButton.addEventListener('click', () => {
    // Скрываем стартовый экран
    startContainer.style.display = 'none';
    // Показываем страницу с вопросами
    questionPage.style.display = 'flex'; // Используем flex, как в CSS для центрирования

    // Запускаем воспроизведение первой песни из плейлиста
    playCurrentSong();

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
            questionElement.textContent = "Спасибо за ответы солнце! 🎉/n Ты как всегда лучшая😘";
            answerInput.style.display = 'none';
            submitButton.style.display = 'none';
            catImage.src = catAnimations[0];
            // Останавливаем музыку (опционально)
            // backgroundMusic.pause(); // Закомментировано, чтобы музыка не останавливалась
        }
    }
});

// Инициализация - показываем стартовый экран при загрузке
// showCurrentQuestion(); // Эту строку убираем
