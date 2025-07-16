# 🌦️ Angular Weather Forecast App

A simple and responsive weather forecast application built with **Angular**, fetching real-time weather data from [WeatherAPI.com](https://www.weatherapi.com/) and displaying a **6-day forecast** based on user input.


---

## 🚀 Features

- 🔍 Search weather by city name
- 🌤️ View **current weather** and **6-day forecast**
- 📅 Forecast includes temperature, condition, humidity, wind, etc.
- 📱 Responsive layout for desktop and mobile
- 🔁 Real-time API calls using Angular `HttpClient`

---

## 🛠️ Tech Stack

- [Angular](https://angular.io/)
- [WeatherAPI.com](https://www.weatherapi.com/)
- HTML + SCSS

---

## ⚙️ Setup & Run Locally

### 🔧 Prerequisites

- Node.js & npm
- Angular CLI installed globally (`npm install -g @angular/cli`)
- API key from [WeatherAPI.com](https://www.weatherapi.com/)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
