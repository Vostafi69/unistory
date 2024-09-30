<h1 align="center">Тестовое задание</h1>
<h2 align="center">на позицию Frontend/Solidity Developer</h2>

> Создать приложение на React, сподключением криптокашелька и выводом информации с бэкэнда.
>
> ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)

## Содержание

- [Требования](#Требования)
- [Технологии](#технологии)
- [Начало работы](#начало-работы)
- [Примеры](#Примеры)

## Требования

> Дизайн:
>
> https://www.figma.com/file/8ejkTFQVtBPLcBIRvdzZI8?embed_host=notion&kind=file&node-id=0%3A1&t=Vohq9u7LNsNutjXD-1&viewer=1

<hr/>

1. Сверстать 2 страницы в соответствии с дизайном страницы:

- Главная страница
- Страница участника

2. Подключить функционал к страницам:
   При открытии страницы, уведомить пользователя о том, что потребуется расширение Metamask для браузера.
   Выполнить подключение криптокошелька Metamask при нажатии на кнопку CONNECT METAMASK в шапке. После подключения
   необходимо отображать адрес подключенного кошелька вместо кнопки.

При заполнении формы, BETA TEST REGISTRATION загрузить данные для таблицы PARTICIPATION LISTING и отобразить ее, введенные
данные добавить в начало таблицы. Новая запись должна содержать введенные name, email и адрес подключенного криптокошелька.
Сделать удаление созданной записи из таблицы (другие не должны удаляться).

При клике на запись таблицы должна открываться страница участника. Запись, добавленная пользователем должна быть некликабельной.
Отображать на странице участника данные, полученные с бэкенда.

<hr/>

- Использование TypeScript.
- Должен подключаться кошелек Metamask. Для подключения рекомендуется использовать библиотеку wagmi.
- Использовать роутер для перехода между страницами.
- Будет преимуществом:
- Сделать бесконечный список для таблицы (новые данные должны подгружаться с бэкенда).
- Спроектировать приложение согласно FSD.
- Использовать библиотеку для управления запросами (TanStack Query, RTK Query, SWR или подобную).
- Развернуть приложение на одной из бесплатных платформ (Netlify, Github Pages или подобные).
- Использование Tailwind для стилизации.

## Технологии

- [React](https://react.dev/)
- [Shadcn](https://ui.shadcn.com/docs/components/accordion)
- [Vite](https://vitejs.dev/)
- [Tailwindcss](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [RTK](https://redux-toolkit.js.org/)
- [Wagmi](https://wagmi.sh/)
- [FramerMotion](https://github.com/framer/motion)

## Начало работы

Стянуть проект:

```sh
$ git clone https://github.com/Vostafi69/unistory.git
```

Перейти в директорию проекта:

```sh
$ cd unistory
```

Установить зависимости:

```sh
$ npm i
```

Запустить проект:

```sh
$ npm run dev
```

## Примеры

Главная страница <hr/>

![Главная страница](https://github.com/Vostafi69/unistory/blob/main/examples/mainPage.png)

Главная страница <hr/>

![Страница участника](https://github.com/Vostafi69/unistory/blob/main/examples/memberPage.png)
