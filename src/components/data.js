const data = [
    {
        num: '1',
        name: 'Большой шар с рисунком',
        count: '2',
        year: '1960',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '2',
        name: 'Зелёный шар с цветами',
        count: '5',
        year: '2000',
        shape: 'шар',
        color: 'зелёный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '3',
        name: 'Красный матовый шар',
        count: '3',
        year: '1990',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '4',
        name: 'Сосулька красная',
        count: '2',
        year: '1980',
        shape: 'фигурка',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '5',
        name: 'Красный виноград',
        count: '4',
        year: '1980',
        shape: 'фигурка',
        color: 'красный',
        size: 'средний',
        favorite: true,
    },
    {
        num: '6',
        name: 'Красный шар с рисунком',
        count: '6',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '7',
        name: 'Молочно-белый шар',
        count: '12',
        year: '1960',
        shape: 'шар',
        color: 'белый',
        size: 'средний',
        favorite: true,
    },
    {
        num: '8',
        name: 'Красный шар',
        count: '10',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '9',
        name: 'Колокольчик старинный',
        count: '2',
        year: '1950',
        shape: 'колокольчик',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '10',
        name: 'Белый шар ретро',
        count: '7',
        year: '1960',
        shape: 'шар',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '11',
        name: 'Шишка еловая белая',
        count: '11',
        year: '1960',
        shape: 'шишка',
        color: 'белый',
        size: 'малый',
        favorite: false,
    },
    {
        num: '12',
        name: 'Белый шар с цветами',
        count: '5',
        year: '1980',
        shape: 'шар',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '13',
        name: 'Шар расписной Река',
        count: '3',
        year: '1970',
        shape: 'шар',
        color: 'синий',
        size: 'большой',
        favorite: true,
    },
    {
        num: '14',
        name: 'Шар расписной Деревня',
        count: '4',
        year: '1970',
        shape: 'шар',
        color: 'синий',
        size: 'большой',
        favorite: true,
    },
    {
        num: '15',
        name: 'Колокольчик расписной',
        count: '3',
        year: '1970',
        shape: 'колокольчик',
        color: 'синий',
        size: 'средний',
        favorite: false,
    },
    {
        num: '16',
        name: 'Шишка расписная Пейзаж',
        count: '3',
        year: '1970',
        shape: 'шишка',
        color: 'синий',
        size: 'средний',
        favorite: true,
    },
    {
        num: '17',
        name: 'Шишка расписная',
        count: '7',
        year: '1970',
        shape: 'шишка',
        color: 'красный',
        size: 'средний',
        favorite: false,
    },
    {
        num: '18',
        name: 'Желтый шар с бантом',
        count: '2',
        year: '2010',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '19',
        name: 'Желтый шар с паетками',
        count: '12',
        year: '1980',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '20',
        name: 'Красный шар с бантом',
        count: '8',
        year: '1950',
        shape: 'шар',
        color: 'красный',
        size: 'средний',
        favorite: true,
    },
    {
        num: '21',
        name: 'Красный шар с звёздами',
        count: '4',
        year: '1970',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: true,
    },
    {
        num: '22',
        name: 'Шишка еловая золотая',
        count: '11',
        year: '1990',
        shape: 'шишка',
        color: 'желтый',
        size: 'малый',
        favorite: false,
    },
    {
        num: '23',
        name: 'Колокольчик старинный',
        count: '9',
        year: '1950',
        shape: 'колокольчик',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '24',
        name: 'Снежинка изящная',
        count: '1',
        year: '1940',
        shape: 'снежинка',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '25',
        name: 'Розовый шар с блёстками',
        count: '12',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '26',
        name: 'Рубиново-золотой шар',
        count: '8',
        year: '1960',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '27',
        name: 'Красный шар с узором',
        count: '4',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '28',
        name: 'Бордовый шар с узором',
        count: '10',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '29',
        name: 'Старинный шар с цветами',
        count: '5',
        year: '1950',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: true,
    },
    {
        num: '30',
        name: 'Старинный шар с узором',
        count: '8',
        year: '1950',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: true,
    },
    {
        num: '31',
        name: 'Красный шар с блёстками',
        count: '8',
        year: '2010',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '32',
        name: 'Синий шар Вселенная',
        count: '11',
        year: '1970',
        shape: 'шар',
        color: 'синий',
        size: 'большой',
        favorite: false,
    },
    {
        num: '33',
        name: 'Синий шар со снежинкой',
        count: '6',
        year: '2010',
        shape: 'шар',
        color: 'синий',
        size: 'средний',
        favorite: false,
    },
    {
        num: '34',
        name: 'Зелёный  шар с узором',
        count: '8',
        year: '2010',
        shape: 'шар',
        color: 'зелёный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '35',
        name: 'Фигурка Лис в шарфе',
        count: '8',
        year: '1950',
        shape: 'фигурка',
        color: 'желтый',
        size: 'средний',
        favorite: true,
    },
    {
        num: '36',
        name: 'Сиреневый шар Метель',
        count: '1',
        year: '2000',
        shape: 'шар',
        color: 'синий',
        size: 'большой',
        favorite: false,
    },
    {
        num: '37',
        name: 'Зелёный  шар Метель',
        count: '6',
        year: '2000',
        shape: 'шар',
        color: 'зелёный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '38',
        name: 'Голубой  шар Метель',
        count: '6',
        year: '2000',
        shape: 'шар',
        color: 'синий',
        size: 'большой',
        favorite: false,
    },
    {
        num: '39',
        name: 'Красная снежинка',
        count: '6',
        year: '1990',
        shape: 'снежинка',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '40',
        name: 'Снежинка золотая',
        count: '12',
        year: '2020',
        shape: 'снежинка',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '41',
        name: 'Снежинка арктическая',
        count: '11',
        year: '2020',
        shape: 'снежинка',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '42',
        name: 'Зелёный шар',
        count: '10',
        year: '1980',
        shape: 'шар',
        color: 'зелёный',
        size: 'средний',
        favorite: false,
    },
    {
        num: '43',
        name: 'Снежинка двухцветная',
        count: '6',
        year: '1960',
        shape: 'снежинка',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '44',
        name: 'Фигурка Ангела',
        count: '11',
        year: '1940',
        shape: 'фигурка',
        color: 'красный',
        size: 'средний',
        favorite: true,
    },
    {
        num: '45',
        name: 'Снежинка новогодняя',
        count: '1',
        year: '1980',
        shape: 'снежинка',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '46',
        name: 'Фигурка Мухомор',
        count: '10',
        year: '1950',
        shape: 'фигурка',
        color: 'красный',
        size: 'малый',
        favorite: false,
    },
    {
        num: '47',
        name: 'Фигурка Колодец',
        count: '6',
        year: '1950',
        shape: 'фигурка',
        color: 'красный',
        size: 'малый',
        favorite: false,
    },
    {
        num: '48',
        name: 'Желтый шар с бантом',
        count: '6',
        year: '1960',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '49',
        name: 'Снежинка с бирюзой',
        count: '4',
        year: '1980',
        shape: 'снежинка',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '50',
        name: 'Колокольчик большой',
        count: '3',
        year: '2020',
        shape: 'колокольчик',
        color: 'красный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '51',
        name: 'Шишка с изморозью',
        count: '12',
        year: '1970',
        shape: 'шишка',
        color: 'красный',
        size: 'малый',
        favorite: false,
    },
    {
        num: '52',
        name: 'Красный шар с надписью',
        count: '12',
        year: '1990',
        shape: 'шар',
        color: 'красный',
        size: 'большой',
        favorite: true,
    },
    {
        num: '53',
        name: 'Снежинка серебристая',
        count: '6',
        year: '2020',
        shape: 'снежинка',
        color: 'белый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '54',
        name: 'Зелёный шар с рисунком',
        count: '6',
        year: '2010',
        shape: 'шар',
        color: 'зелёный',
        size: 'большой',
        favorite: false,
    },
    {
        num: '55',
        name: 'Пряничный домик',
        count: '1',
        year: '1940',
        shape: 'фигурка',
        color: 'желтый',
        size: 'большой',
        favorite: false,
    },
    {
        num: '56',
        name: 'Пряничный теремок',
        count: '1',
        year: '1940',
        shape: 'фигурка',
        color: 'желтый',
        size: 'малый',
        favorite: false,
    },
    {
        num: '57',
        name: 'Пряничная избушка',
        count: '1',
        year: '1940',
        shape: 'фигурка',
        color: 'желтый',
        size: 'средний',
        favorite: false,
    },
    {
        num: '58',
        name: 'Фигурка белого медведя',
        count: '2',
        year: '1980',
        shape: 'фигурка',
        color: 'белый',
        size: 'средний',
        favorite: false,
    },
    {
        num: '59',
        name: 'Желтый шар с надписью',
        count: '10',
        year: '1990',
        shape: 'шар',
        color: 'желтый',
        size: 'средний',
        favorite: false,
    },
    {
        num: '60',
        name: 'Фигурка Голубь',
        count: '12',
        year: '1940',
        shape: 'фигурка',
        color: 'белый',
        size: 'средний',
        favorite: true,
    },
];

export default data;
