# Challenge de Automation - Inter banking

## Este proyecto contiene una suite de automatización de pruebas **end-to-end** y **API** para Mercado Libre, utilizando **Cypress** y **Cucumber**.

## Estructura del Proyecto

```
cypress/
  e2e/
    features/           # Archivos .feature
    pages/              # Page Objects (MercadoLibre.page.js)
  support/
    step_definitions/   # Step definitions para Cucumber
    e2e.js              # Configuración y comandos globales
  reports/              # Reportes Mochawesome
  screenshots/          # Evidencias visuales de tests
  videos/               # Videos de ejecución de tests
```

---

## ¿Cómo ejecutar los tests?

### 1. Instala dependencias

```sh
npm install
```

### 2. Ejecuta todos los tests en Chrome

```sh
npm run test:chrome
```

### 3. Ejecuta todos los tests en Electron

```sh
npm run test:electron
```

### 4. Ejecuta ambos navegadores en serie

```sh
npm run test:all
```

### 5. Abre la interfaz visual de Cypress

```sh
npm run test:open
```

---

## Reportes

Al ejecutar los tests, se generan reportes automáticos en `cypress/reports/` usando **Mochawesome**.  
Arrastra el archivo `mochawesome.html` hasta tu navegador para ver los resultados.

---

## ¿Qué hace cada script?

- `"test"`: Ejecuta todos los tests en el navegador por defecto (Chrome).
- `"test:open"`: Abre la interfaz visual de Cypress para ejecutar tests manualmente.
- `"clean:cypress"`: Elimina videos y screenshots generados por ejecuciones anteriores.
- `"test:chrome"`: Ejecuta todos los tests en Google Chrome.
- `"test:electron"`: Ejecuta todos los tests en Electron.
- `"test:all"`: Ejecuta los tests en Chrome y Electron, uno después del otro.

---

## Requisitos

- Node.js 18+ recomendado
- Cypress 14+
- Navegadores: Chrome y Electron

---

## Recursos

- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber Documentation](https://cucumber.io/docs/)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)

---

## Autor

Desarrollado por Camila Diaz.

---
