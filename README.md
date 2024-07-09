# Restaurant Delivery

This is a restaurant food delivery application built with ReactJS.

## Overview

The application allows users to browse a menu of food items, add items to their cart, place orders, and view item details.

## Screenshots
### Here are some images from the project

<table>
  <tr>
    <td>
      <img src="screenshots/menu-page.png" alt="Image 1" width="200"/>
    </td>
    <td>
      <img src="screenshots/product-detail-modal.png" alt="Image 2" width="200"/>
    </td>
    <td>
      <img src="screenshots/basket.png" alt="Image 3" width="200"/>
    </td>
  </tr>
</table>

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/Kiyoshi-san/food-app-test.git
    ```
2. Navigate to the project directory:
    ```sh
    cd food-app-test-kiyoshi
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To run the application in development mode, execute:
```sh
npm start
```
This will open the application at http://localhost:3000

## Available Scripts

`npm start`: Runs the application in development mode.
`npm test`: Runs the tests.
`npm run build`: Builds the application for production.
`npm run lint`: Lints the code.

## Project Structure

```sh
src/
├── assets/
├── components/
│   ├── ActiveSeciton/
│   ├── AlergyInformation/
│   ├── BottomCart/
│   ├── cart/
│   ├── HeroBanner/
│   ├── Menu/
│   ├── MenuSectionMenu/
│   ├── ProductInfo/
│   ├── Search/
│   ├── ui/
│   ├── Wrapper/
├── hooks/
│   ├── currency/
│   ├── restaurant/
│   ├── theme/
├── model/
│   ├── cart/
│   ├── menu/
│   ├── menuSection/
│   ├── restaurant/
│   ├── restaurantMenu/
├── pages/
│   ├── Menu/
│   ├── NotFoundPage/
│   ├── UnderConstruction/
├── redux/
│   ├── activeModal/
│   ├── cart/
│   ├── menuSection/
│   ├── navMenu/
├── utils/
│   ├── api/
│   ├── currency/
│   ├── i18n/
│   ├── testingTools/
├── index.css
├── index.tsx
├── react-app-env.d.ts
├── react-app-env.d.tsreposrtWebVitals.ts
├── setupTests.ts
```

## Technologies Used

- ReactJS
- Redux Toolkit
- React Router
- Typescript
- i18next
- Jest
- React Testing Library