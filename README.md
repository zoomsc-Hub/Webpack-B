# 🎨 Aesthetic Webpack Gallery

> Учбовий проект для практики налаштування **Webpack 5** з нуля. Демонструє галерею цифрового мистецтва з преміальним темним дизайном та модулем статистики кліків.

---

## ✨ Функціональні можливості

| Можливість | Деталі |
|---|---|
| 🔑 **Хешування імен файлів** | `[contenthash]` у іменах JS та CSS запобігає проблемам кешування браузера |
| 🅰️ **Локальні шрифти** | Шрифт **Outfit** (9 варіантів ваги) підключено через `@font-face` з `.woff2` файлів |
| 🖼️ **Обробка зображень** | JPG/PNG/SVG/GIF обробляються через `asset/resource` та включаються у збірку |
| 🎨 **CSS стилі** | CSS витягується у окремий файл через `MiniCssExtractPlugin` |
| ⚡ **Code Splitting** | `splitChunks: { chunks: 'all' }` виносить спільні залежності у окремий чанк |

---

## 📁 Структура проекту

```
webpack/
├── src/
│   ├── index.html        # HTML-шаблон для HtmlWebpackPlugin
│   ├── index.js          # Головна точка входу (галерея)
│   ├── statistics.js     # Точка входу (лічильник кліків)
│   ├── post.js           # Клас Post (модель даних)
│   └── css/
│       ├── style.css     # Основні стилі галереї (темна тема)
│       └── font.css      # Підключення локального шрифту Outfit
├── assets/
│   ├── images/           # Зображення (cyberpunk_city, neon_waves, cosmic_nebula, dark_mountains)
│   └── fonts/            # Шрифт Outfit — 9 варіантів ваги (.woff2)
├── dist/                 # Зібраний проект (генерується автоматично)
├── webpack.config.js     # Конфігурація Webpack
└── package.json
```

---

## 🛠️ Технічний стек

- **[Webpack 5](https://webpack.js.org/)** — модульний бандлер
- **[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)** — генерація HTML з авто-підключенням збірки
- **[mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)** — витягування CSS в окремий файл
- **[css-loader](https://github.com/webpack-contrib/css-loader)** — обробка CSS-імпортів у JS
- **[clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)** — очищення `dist/` перед кожною збіркою

---

## 🚀 Запуск проекту

### Встановлення залежностей

```bash
npm install
```

### Команди

| Команда | Опис |
|---|---|
| `npm run dev` | Збірка у режимі **development** |
| `npm run build` | Збірка у режимі **production** (мінімізація) |
| `npm run watch` | Режим слідкування за змінами файлів |

---

## ⚙️ Конфігурація Webpack

### Точки входу (Entry Points)

Проект має **два незалежних бандли**:

```js
entry: {
  main: './index.js',       // Галерея + стилі + зображення
  stat: './statistics.js'   // Лічильник кліків
}
```

### Хешування файлів

```js
output: {
  filename: "[name].[contenthash].js",           // JS бандли
  assetModuleFilename: '[name].[hash][ext]',     // Зображення та шрифти
}
// CSS:
new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })
```

### Правила обробки модулів

```js
rules: [
  { test: /\.css$/i,                       use: [MiniCssExtractPlugin.loader, "css-loader"] },
  { test: /\.(png|svg|jpg|jpeg|gif)$/i,    type: 'asset/resource' },
  { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' }
]
```

---

## 📊 Модуль статистики

`statistics.js` підключається як окремий бандл і додає глобальний об'єкт `window.statistics` з методами:

```js
// Отримати кількість кліків по сторінці
window.statistics.getClicks()   // → number

// Зупинити слідкування і видалити listener
window.statistics.destroy()     // → 'Statistics fully destroyed'
```

> Перевірити у консолі браузера: натисніть **Stats** у навігації.

---

## 🖼️ Галерея

Відображає 4 зображення у темному grid-макеті:

| Назва | Опис |
|---|---|
| **Neo Tokyo 2049** | Кіберпанк-мегаполіс під неоновим освітленням |
| **Fluid Glow** | Абстрактні неонові хвилі на темному тлі |
| **Cosmic Dust** | Туманність у фіолетово-бірюзових тонах |
| **Starry Peaks** | Силуети гір під зоряним небом |

---

## 📝 Ліцензія

ISC
