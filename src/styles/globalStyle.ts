"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @font-face {
  font-family: "Sun World";
  src: url("static/fonts/SunWorld-Light.eot");
  src: url("static/fonts/SunWorld-Light.eot?#iefix") format("embedded-opentype"),
    url("static/fonts/SunWorld-Light.woff2") format("woff2"),
    url("static/fonts/SunWorld-Light.woff") format("woff"),
    url("static/fonts/SunWorld-Light.ttf") format("truetype"),
    url("static/fonts/SunWorld-Light.svg#SunWorld-Light") format("svg");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Sun World";
  src: url("static/fonts/SunWorld-Regular.eot");
  src: url("static/fonts/SunWorld-Regular.eot?#iefix") format("embedded-opentype"),
    url("static/fonts/SunWorld-Regular.woff2") format("woff2"),
    url("static/fonts/SunWorld-Regular.woff") format("woff"),
    url("static/fonts/SunWorld-Regular.ttf") format("truetype"),
    url("static/fonts/SunWorld-Regular.svg#SunWorld-Regular") format("svg");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Sun World";
  src: url("static/fonts/SunWorld-Bold.eot");
  src: url("static/fonts/SunWorld-Bold.eot?#iefix") format("embedded-opentype"),
    url("static/fonts/SunWorld-Bold.woff2") format("woff2"),
    url("static/fonts/SunWorld-Bold.woff") format("woff"),
    url("static/fonts/SunWorld-Bold.ttf") format("truetype"),
    url("static/fonts/SunWorld-Bold.svg#SunWorld-Bold") format("svg");
  font-style: normal;
  font-display: swap;
  font-weight: bold;
}
:root {
  --font-body: "Sun World";
  --color-1: #f9b217;
  --color-2: #ea2127;
  --color-3: #f2f2f2;
}
body {
  font-family: var(--font-body) !important;
  font-size: 16px !important;
}
.--link {
  text-decoration: none;
}

button:focus {
  outline: none !important;
}



.pad-btm-top {
  .react-datepicker {
    padding: 20px 18px;
  }
}

.input-range {
  width: 326px;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 16px;
}

.react-datepicker {
  font-family: var(--font-body);
  font-size: 18px;
  width: 346px;

  display: flex;
  padding: 0 18px;



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

    .Calendar-header {
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;

      span {
        font-size: 20px;
        font-weight: 900;

      }

      button {
        border-radius: 10px;

        background: white;
        display: flex;
        height: 34px;
        width: 34px;
        align-items: center;
        justify-content: center;
        font-size: 14px;

      }
    }

    .react-datepicker__day-names {
      display: flex;
      padding: 8px 30px;
      justify-content: space-between;
      font-size: 16px;
      margin-bottom: 4px;

      .react-datepicker__day-name {
        height: auto;
        width: auto;
        line-height: normal;
        margin: 0;
        line-height: 14px;
      }
    }
  }

  .react-datepicker__month {
    margin: 0;

    .react-datepicker__week {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .react-datepicker__day {
      margin: 0;

      line-height: 24px;

      width: calc(100% / 7);

      .item {
        display: flex;
        flex-direction: column;

        .number {
          height: 24px;
          width: 100%;
          padding: 0 10px;

          span {
            height: 24px;
            width: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .price {
          height: 10px;
          line-height: 10px;
          font-size: 10px;
          color: #F27024;
          font-weight: normal;
        }
      }
    }

    .react-datepicker__day--disabled {


      .price {
        color: white !important;
      }


    }

    .react-datepicker__day--keyboard-selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--selected {
      background-color: transparent;

      &.react-datepicker__day--disabled {
        .number {


          span {
            background-color: white;
            color: #ccc;
          }
        }
      }

      &:hover {
        background-color: transparent;
      }

      .number {


        span {
          background-color: var(--color-1);
          color: var(--color-2)
        }
      }
    }

    .react-datepicker__day--in-range {
      color: #2C2C2C;
      border-radius: 0;
      background-color: white;

      .number {
        background-color: #f7a7a8c2;


      }

      &.react-datepicker__day--range-start {
        .number {
          padding: 0;
          padding-right: 10px;
          margin-left: 10px;
          border-top-left-radius: 50%;
          border-bottom-left-radius: 50%;

          span {
            background-color: var(--color-1);
            color: var(--color-2)
          }
        }
      }

      &.react-datepicker__day--range-end {

        .number {
          padding: 0;
          padding-left: 10px;
          margin-right: 10px;
          width: fit-content;
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;

          span {
            background-color: var(--color-1);
            color: var(--color-2)
          }
        }

        &.react-datepicker__day--range-start {
          .number {
            padding: 0 !important;
          }
        }
      }

    }
  }

}


`;
