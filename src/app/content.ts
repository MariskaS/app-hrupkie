export const FORM_CONTENT = {
  title: 'Платеж с помощью банковской\n карты или google/apple pay',
  or: 'или',
  fieldSumError: 'Введите пожалуйста сумму.',
  name: {
    label: 'Ваше имя',
    error: 'Это поле необходимо заполнить.'
  },
  email: {
    label: 'Адрес эл. почты',
    errorNoEmpty: 'Адрес эл. почты не должен быть пустым.',
    errorInvalid: 'Введите корректный адрес эл. почты.'
  },
  comment: {
    label: 'Ваш комментарий'
  },
  confirm: {
    yes: 'Я принимаю',
    personalData: 'соглашение об использовании персональных данных',
    contractOffer: 'договор оферты'
  },
  submitButton: 'Пожертвовать'
}

export const DONATE_SUM = [
  {value: 50},
  {value: 100},
  {value: 300},
  {value: 500},
  {value: 1000},
];

export const SLIDER_CONTENT = [
  {
    title: '#хрупкихнебросать',
    subtitle: 'в чем особенность<br>«хрупких» людей?'
  },
  {
    title: '#хрупкихнебросать',
    subtitle: 'Даже простое действие...'
  },
  {
    title: '#хрупкихнебросать',
    subtitle: '...например, поднять чашку...<br>..может привести к перелому'
  }
]

export const DONATION_CONTENT = {
  title: "50 рублей в фонд помощи «хрупким»",
  subtitle: "Незаметно для тебя, огромная помощь для «хрупких»",
  notifySuccess: {
    title: "ваше пожертвование выполнено!",
    subtitle: "мы искренне благодарим вас за неравнодушие!",
    button: "Повторить платеж"
  }
}

export const SOCIALS_CONTENT = [
  {icon: 'facebook', link: 'https://www.facebook.com/hrupkie.fond'},
  {icon: 'vk', link: 'https://vk.com/hrupkie.fond'},
  {icon: 'instagram', link: 'http://instagram.com/hrupkie.fond/'},
];

export const FOOTER_CONTENT = {
  contacts: {
    phone: "+7-903-590-04-00",
    email: "info@hrupkie.ru",
    mainSite: "help.hrupkie",
    directToMainSite: "Перейти на основной сайт"
  },
  addresses: {
    legal: "Юридический адрес: 127051, г. Москва, Цветной Бульвар, д. 2",
    physical: "Физический адрес: 125284, г. Москва, 1-й Боткинский пр-д, д. 7с1",
    mailing: "Почтовый адрес: 143090, МО, г. Краснознаменск, ул. Победы, д. 15, кв.11"
  },
  thanks: {
    title: "спасибо за помощь в разработке и дизайне сайта:"
  }
}
