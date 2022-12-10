// Данный уровень будет рассказывать азы работы с формой на уровен JavaScript и будет вообще объяснять принцип валидации - без работы по ошибкам.

// Валидация представляет из себя работу с формой, содержащими её инпутами и их значениями. Для того чтобы работать с формой - мы должны её получить.
// Есть несколько способов получения, я буду использовать способ получения по имени.

// Также хочу обратить внимание, что поле инпут для работы с пользовательским email в type принимает значение text, а не email. Сделано это для того, чтобы отключить стандартные ошибки браузера, такие как отстутствие @.

const signInForm = document.forms.signIn; // Данной строчкой мы получаем форму как элемент нашего документа.
// Данная конструкция обращается к документу и его свойству forms в котором хранятся все формы этой страницы. Дальше внутри этого свойства она ищет нашу форму по имени signIn. Имя написано внутри html при помощи атрибута name.
// console.log(signInForm); // Расскомментируй ( CTRL + / ), если понадобиться посмотреть в консоли как это выглядит. 

// Для работы с полями и проверки их значений - нам нужно их получить. Для этого мы пишем следующий код:
const emailInput = signInForm.elements.email;
const passwordInput = signInForm.elements.password;
console.log(emailInput); // Расскомментируй ( CTRL + / ), если понадобится посмотреть в консоли как это выглядит. 
console.log(passwordInput); // Расскомментируй ( CTRL + / ), если понадобится посмотреть в консоли как это выглядит. 

// Для получения значений формы нам потребуется использовать свойство value. emailInput.value;
// Нужно понимать, что конкретно в этом файле в данный момент это свойство выдаст пустую строку, потому что этот код отрабатывает сразу как пользователь прогрузил страницу, и он не успеет ничего написать в форму. 
// Тут мы сталкиваемся с тем, что нам нужно работать с конкретным событием. Событием submit. Для работы с этим событием нам требуется обращаться не к кнопке, которое вызовет это событие своим нажатием, а к самой форме.
signInForm.addEventListener('submit', callbackFunction); // Не указываю круглые скобки и не добавляю туда в качестве агрумента event, потому что браузер это делает за меня.

// Данную функцию я могу вызывать выше объявления, потому что она объявлена function expression методом. Данный метод затрагивает такую тему как преждевременное объявление, которую мы упоминали при работе с var. 
function callbackFunction(event) {
    event.preventDefault(); // Ломаю стандартное поведение при получении этого события.
    console.log(`Пользователь отправил форму со значениями: ${emailInput.value} и ${passwordInput.value}`); 

    let isEmailValid = emailInput.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
    // Разберем подробнее конструкцию выше. Я объявляю переменную, нейминг говорит о том, что там будет лежать Boolean значение ( true, false ). После чего в неё помещаю результат выполнения match() по отношению к значению которое лежит в инпуте где будет почта, которое я получаю при помощи emailInput.value. В match я передаю регулярное выражение, которое будет отвечать за то какому условию должен удовлетворять пользовательский электронный почтовый ящик.

    if (isEmailValid) {
        console.log('Валидация прошла успешно');
    } else {
        console.log('Ошибка валидации');
    }
}

// Если попытаться работать с callbackFunction() без сломанного стандартного поведения, то страница обновится и попытается отправить эти данные на сервер, но так как при помощи атрибута action, мы не указали никакого сервера, то мы получим сообщение о том, что наша страница недоступна, а в консоли будет высвечиваться ошибка о том, что сервер ответил нам статусом 405.

// Валидация выполняется путём проверки получаемых данных на соответствие какому-то регулярному выражению и только в случае соответствия - требуется отправить данные на сервер.

