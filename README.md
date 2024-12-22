
# Static Site Development 🛠️🌍

**A static website development environment using Gulp, Nunjucks templating, Sass, Autoprefixer, and BrowserSync for fast and efficient web development.**

## 🚀 Overview

This project provides a streamlined development environment for static websites, combining powerful tools to help you automate your workflow:

- **Gulp**: A task runner to automate repetitive tasks.
- **Nunjucks**: A flexible and powerful templating engine to generate dynamic HTML files.
- **Sass**: A preprocessor for writing cleaner, more maintainable CSS.
- **Autoprefixer**: Automatically adds vendor prefixes to your CSS for better cross-browser support.
- **BrowserSync**: Instantly reflects your changes on the browser without the need for manual refreshes.

Whether you’re building a personal blog, a portfolio, or a small static site, this setup allows you to focus on your content while automating your workflows. 💻

---

## 📥 Installation

To get started with this project, follow these simple steps:

1. **Clone this repository:**

   ```bash
   git clone https://github.com/zurivy-myval/static-site-development.git
   cd static-site-development
   ```

2. **Install dependencies:**

   This project uses **Yarn** to manage dependencies. Run the following command to install everything you need:

   ```bash
   yarn install
   ```

---

## ⚙️ Usage

Once the project is set up, you can start developing your static website with the following commands:

### 🏃‍♂️ **Start Development**

To start the development environment with live-reloading, simply run:

```bash
yarn start
```

This will start **Gulp**, which will:

- Compile your Sass files into CSS
- Add vendor prefixes to your CSS using Autoprefixer
- Watch your SCSS and Nunjucks files for changes
- Automatically refresh the browser when you make changes
- Render your Nunjucks templates from `src/templates` into the `dist` directory

### 💨 **Run in Development Mode**

You can also run the same as `yarn start` using the `dev` script:

```bash
yarn dev
```

This will run **Gulp** and serve the site with the same functionality.

---

## 📂 Project Structure

Here’s an overview of the project directory structure:

```
static-site-dev/
├── dist/                 # Compiled files (CSS, JS, HTML)
│   ├── css/
│   ├── pages/        # Rendered templates
│
├── src/                  # Source files
│   ├── scss/             # Sass files
│   ├── pages/        # Nunjucks templates
│
├── gulpfile.mjs          # Gulp tasks configuration
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

### 📁 Key Folders:

- **`src/scss/`**: Place your Sass files here.
- **`src/pages/`**: Place your Nunjucks templates here.
- **`dist/`**: The output folder where compiled CSS, HTML, and other files will be saved.

---

## 🔧 Technologies Used

- **Gulp**: Task runner to automate SCSS compilation, browser syncing, and templating.
- **Sass**: CSS preprocessor for writing more manageable CSS.
- **Autoprefixer**: Ensures cross-browser compatibility by automatically adding vendor prefixes to CSS.
- **Nunjucks**: Templating engine to create reusable HTML structures.
- **BrowserSync**: Instant browser reloading when you modify your files.

---

## 📝 Scripts

The project comes with a couple of predefined scripts to help you during development:

- **`yarn start`**: Start the development environment with live-reloading.
- **`yarn dev`**: Run in development mode (same as `yarn start`).
- **`yarn test`**: Placeholder for testing (currently not implemented).

---

## 🌐 Contributing

If you have any improvements, ideas, or bug fixes, feel free to contribute! Here's how:

1. Fork this repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Questions?

If you have any questions or run into issues, feel free to open an issue on the [GitHub Issues page](https://github.com/zurivy-myval/static-site-development/issues). ✨

---

Happy coding! 😎🚀
