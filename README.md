# Суть приложения:
Проба пера. Знакомство с Vue 3.
[Cocktails](https://cocktails-theta-nine.vercel.app/)

## Что использовалось в проекте?
  - Vue 3
  - Vite
  - Router
  - Pinia
  - Element Plus
  - API
  - SCSS

## С какими проблемами я столкнулась?
При повторном нажатии на кнопку рандомного коктейля на одной и той же странице, выскакивала ошибка. 
Я её решила, поменяв history с createWebHistory() на createWebHashHistory() в Router. Приложение без серверной части, в этом и была проблема. Используется API https://www.thecocktaildb.com/api.php

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
