const initialStateNav = {
  navItem: [
    {
      title: 'Peoples',
      active: false,
      section: 'section1',
      id: 0,
      menu: [
        {
          title: 'челове́к разу́мный',
          activeUnderMenu: false,
          undermenu: [
            'Эвангелос Кациулис — IQ 198-205',
            'Ким Унг-Йонг — IQ 210',
            'Кристофер Хирата — IQ 225',
            'Мэрилин Вос Савант — IQ 228',
            'Теренс Тао — IQ 230',
          ],
        },
        {
          title: 'челове́к красивый',
          activeUnderMenu: false,
          undermenu: [
            'Кэтрин Элизабет Мидлтон',
            'Кристина Хендрикс',
            'Щарлиз Терон',
            'Сальма Хайек',
          ],
        },
      ],
    },
    {
      title: 'Animals',
      active: false,
      section: 'section2',
      id: 1,
      menu: [
        {
          title: 'хордовые',
          activeUnderMenu: false,
          undermenu: [
            'Зебра',
            'Летучая мышь',
            'Ящерица',
            'Лягушка',
            'Мартышка',
          ],
        },
        {
          title: 'иглокожие',
          activeUnderMenu: false,
          undermenu: [
            'Морская звезда',
            'Морские лилии',
            'Морские огурцы',
            'Морские ежи',
          ],
        },
        {
          title: 'моллюски',
          activeUnderMenu: false,
          undermenu: ['Улитка', 'Прудовик', 'Осьминог', 'Кальмар', 'Устрица'],
        },
        {
          title: 'членистоногие',
          activeUnderMenu: false,
          undermenu: ['Паук', 'Муха', 'Рак', 'Краб', 'Бабочка'],
        },
        {
          title: 'губки',
          activeUnderMenu: false,
          undermenu: ['Kovax', 'Амфей', 'Фарматэкс', 'Дагмар', 'Элемент 2.5'],
        },
      ],
    },
    {
      title: 'Cities',
      active: false,
      section: 'section3',
      id: 2,
      menu: [
        {
          title: 'промышленные',
          activeUnderMenu: false,
          undermenu: [
            'Детройт, США',
            'Магнитогорск, Россия',
            'Днепропетровск, Украина',
            'Шеффилд, Великобритания',
            'Бохум-Германия',
          ],
        },
        {
          title: 'курортные',
          activeUnderMenu: false,
          undermenu: [
            'Атолл Адду, Мальдивы',
            'Рио-де-Жанейро, Бразилия',
            'Тенерифе, Канарские острова',
            'Палм-Бич, США',
            'Минск, Беларусь',
          ],
        },
      ],
    },
    {
      title: 'Flowers',
      active: false,
      section: 'section4',
      id: 3,
      menu: [
        {
          title: 'красивые',
          activeUnderMenu: false,
          undermenu: [
            'Plumeria',
            'Orchids',
            'Sunflower',
            'Lilies',
            'Daffodils',
          ],
        },
        {
          title: 'некрасивые',
          activeUnderMenu: false,
          undermenu: [
            'Pseudocolus fusiformis',
            'Welwitschia mirabilis',
            'Pachypodium namaquanum',
            'Nepenthes',
            'Bowiea volubilis',
          ],
        },
      ],
    },
    {
      title: 'Mushrooms',
      active: false,
      section: 'section5',
      id: 4,
      menu: [
        {
          title: 'съедобные',
          activeUnderMenu: false,
          undermenu: [
            'Боровик',
            'Сыроежка',
            'Лисичка',
            'Опята',
            'Волнуша',
            'ChocoBoy',
          ],
        },
        {
          title: 'несъедобные',
          activeUnderMenu: false,
          undermenu: ['Мухомор', 'Поганка', 'Сатанинский гриб', 'Свинушка'],
        },
      ],
    },
  ],
}
export default initialStateNav
