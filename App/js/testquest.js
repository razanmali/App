var quest=[
    {//0
        text: [
            ['Упала ядерная бомба. Вся земля превратилась в радиоактивный пепел.'],
            ['Все живое превратилось в мертвое. Надо как то осваиваться в этом мире.'],
            ['Тебе стоит бежать в подвал. Но есть ли в твоем доме или стоит бежать в бомбоубежище']
        ],
        ask: 'Куда побежишь?',
        answer:['Подвал','Бомбоубежище','Канализация'],
        step:[1,2,3],
    },
    {//1
        text: [
            ['Ты решил искать подвал в своем доме. К сожалению он закрыт.'],
            ['Это прочная металическая дверь. Можно попытаться как-то ее выломать'],
            ['Ты огляделся, не нашел ничего подходящего. Надо искать что то другое']
        ],
        ask: 'Куда побежишь?',
        answer:['Бомбоубежище','Канализация'],
        step:[2,3],
    },
    {//2
        text: [
            ['Ты все же успел в бомбоубежище. Тебя пропутили без очереди.'],
            ['Хоть где-то пригодилась твоя корочка инженера'],
            ['Ну Тебя пронесло. Теперь ты в безопасности']
        ],
        ask: 'Закончить квест?',
        answer:['да'],
        step:[8],
    },
    {//3
        text: [
            ['Ты попал в канализацию. Сверху послышались взрывы.'],
            ['Нужно решать что делать. Искать где то безопасное место'],
            ['Можно попробовать пробраться в бомбоубежище через канализацию']
        ],
        ask: 'Остаться в канализации или искать бомбоубежище',
        answer:['Остаться','Искать'],
        step:[4,5],
    },
    {//4
        text: [
            ['Ты решил остаться тут и переждать. Ждать придется довольно долго.'],
            ['Нужно придумать чем питаться. Крысы не самый лучший вариант.'],
            ['Ты задумался и увидел группу людей идущих по коллектору']
        ],
        ask: 'Бежать или начать диалог с ними',
        answer:['бежать','Диалог'],
        step:[6,7],
    },
    {//5
        text: [
            ['Ты начал искать выход. и увидел трубу, она чем то напоминала вентилюцию'],
            ['Ты влез в нее. И попробовал пройти в помещение.'],
            ['У тебя все получилось. тебя Нормально приняли.'],
            ['теперь все хорошо']
        ],
        ask: 'Завершить квест?',
        answer:['Да'],
        step:[8],
    },
    {
        text: [
            ['Ты побежал. Споткнулся и упал, повредив ногу.'],
            ['Кажется они тебя не заметили. Но теперь ты не можешь передвигаться'],
            ['Спустя некоторое время тебя стало тошнить'],
            ['Наверное лежать в воде не самая лучшая идея. Похоже ты умер']
        ],
        ask: 'Закончить квест?',
        answer:['Да'],
        step:[8],
    },
    {//7
        text: [
            ['Ты решил наладить контакт с людьми. Они оказались не злыми'],
            ['У них была еда и они согласились поделиться с тобой'],
            ['Вы в порядке и у тебя все хорошо']
        ],
        ask: 'Закончить квест?',
        answer:['Да'],
        step:[8],
    }]