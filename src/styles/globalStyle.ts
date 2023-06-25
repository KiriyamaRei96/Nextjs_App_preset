"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` @font-face {
  font-family: 'Sun World';
  src: url('/static/fonts/SunWorld-Regular.eot');
  src: url('/static/fonts/SunWorld-Regular.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/SunWorld-Regular.woff2') format('woff2'),
    url('/static/fonts/SunWorld-Regular.woff') format('woff'),
    url('/static/fonts/SunWorld-Regular.ttf') format('truetype'),
    url('/static/fonts/SunWorld-Regular.svg#SunWorld-Regular') format('svg');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Sun World';
  src: url('/static/fonts/SunWorld-Bold.eot');
  src: url('/static/fonts/SunWorld-Bold.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/SunWorld-Bold.woff2') format('woff2'),
    url('/static/fonts/SunWorld-Bold.woff') format('woff'),
    url('/static/fonts/SunWorld-Bold.ttf') format('truetype'),
    url('/static/fonts/SunWorld-Bold.svg#SunWorld-Bold') format('svg');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Sun World';
  src: url('/static/fonts/SunWorld-Light.eot');
  src: url('/static/fonts/SunWorld-Light.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/SunWorld-Light.woff2') format('woff2'),
    url('/static/fonts/SunWorld-Light.woff') format('woff'),
    url('/static/fonts/SunWorld-Light.ttf') format('truetype'),
    url('/static/fonts/SunWorld-Light.svg#SunWorld-Light') format('svg');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Sun World';
  src: url('/static/fonts/SunWorld-Heavy.eot');
  src: url('/static/fonts/SunWorld-Heavy.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/SunWorld-Heavy.woff2') format('woff2'),
    url('/static/fonts/SunWorld-Heavy.woff') format('woff'),
    url('/static/fonts/SunWorld-Heavy.ttf') format('truetype'),
    url('/static/fonts/SunWorld-Heavy.svg#SunWorld-Heavy') format('svg');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

.--link {
  cursor: pointer;
}

:root {
  --color-1: #EA2127;
  --color-2: #F2F2F2;
  --color-3: #2C2C2C;
  --color-4: #F9B217;
  --color-5: #8F2623;
  --color-6: #F6DB5F;
  --color-7: #852221;
  --color-8: #B1B1B1;
  --font-body: 'Sun World';
  --transition-regular: all 0.15s ease-out;
  --transition-smooth: all 0.5s cubic-bezier(0.04, 1, 0.6, 0.97);
}

body {
  font-size: 16px;
  font-family: var(--font-body) !important;
  color: var(--color-3);
  line-height: 20px;
  background: #f5f5f55c;

  @media (max-width: 768px) {
    font-size: 14px !important;
  }
}

h1 {
  color: red
}

.react-datepicker {
  font-family: var(--font-body);
  font-size: 18px;
  width: 346px;
  height: 327px;

  display: flex;
  padding: 0 20px;

  .react-datepicker__month-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .react-datepicker__header {
    display: flex;
    flex-direction: column;
    text-align: center;
    border: none;
    padding: 0;
    border-radius: 0;
    background-color: transparent;
  }

  .react-datepicker__day {
    margin: 5px 0;
    height: 24px;
    width: 24px;
    line-height: 24px;
  }

  .react-datepicker__day--in-range {
    color: #2C2C2C;
    border-radius: 0;
    background-color: #F7A7A9;
  }
}


`;
