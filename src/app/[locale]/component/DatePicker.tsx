"use client";
import React, { useState } from "react";

import ReactDatePicker from "react-datepicker";
import getMonth from "date-fns/getMonth";
import { addDays, getDate, getYear, subDays } from "date-fns";
import { Button } from "antd";

export interface DatePickerProps {
  inline?: true;
}

export function DatePicker({ inline }: DatePickerProps) {
  const [startDate, setStartDate] = useState(new Date());
  const months = [
    "Tháng Một",
    "Tháng Hai",
    "Tháng Ba",
    "Tháng Tư",
    "Tháng Năm",
    "Tháng Sáu",
    "Tháng Bảy",
    "Tháng Tám",
    "Tháng Chín",
    "Tháng Mười ",
    "Tháng Mười Một ",
    "Tháng Mười Hai ",
  ];
  const dayPrice: any = {
    "21": "100k",
    "22": "100k",
    "23": "100k",
    "24": "100k",
    "25": "100k",
    "26": "100k",
    "27": "100k",
    "28": "100k",
    "29": "100k",
  };
  const dateHandler = (date: any) => setStartDate(date);
  return (
    <ReactDatePicker
      popperClassName={!inline ? "pad-btm-top" : ""}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="Calendar-header d-flex">
          <Button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            <i className="fa-solid fa-chevron-left"></i>
          </Button>

          <span>{months[getMonth(date)] + " " + getYear(date)}</span>

          <Button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
        </div>
      )}
      formatWeekDay={(nameOfDay) => {
        return nameOfDay.slice(0, 3);
      }}
      calendarStartDay={1}
      renderDayContents={(day, date: any) => {
        return (
          <div className="item">
            <div className="number">
              <span>{getDate(date)}</span>
            </div>
            <span className="price">{dayPrice[day.toString()]}</span>
          </div>
        );
      }}
      startDate={startDate}
      selected={startDate}
      onChange={dateHandler}
      includeDateIntervals={[
        { start: subDays(new Date(), 7), end: addDays(new Date(), 7) },
      ]}
      inline={inline}
    />
  );
}
