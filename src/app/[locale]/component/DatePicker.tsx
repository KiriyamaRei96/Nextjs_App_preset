"use client";
import React, { useState } from "react";

import ReactDatePicker from "react-datepicker";
import getMonth from "date-fns/getMonth";
import { getYear } from "date-fns";

export interface DatePickerProps {}

export function DatePicker(props: DatePickerProps) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
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
  return (
    <ReactDatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="Calendar-header d-flex">
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>

          <span>{months[getMonth(date)] + " " + getYear(date)}</span>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      formatWeekDay={(nameOfDay) => {
        console.log(nameOfDay);
        return nameOfDay.slice(0, 3);
      }}
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update: any) => {
        setDateRange(update);
      }}
      inline
    />
  );
}
