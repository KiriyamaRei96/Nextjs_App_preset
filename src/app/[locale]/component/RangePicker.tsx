/* eslint-disable react/display-name */
"use client";
import React, { forwardRef, useState } from "react";

import ReactDatePicker from "react-datepicker";
import getMonth from "date-fns/getMonth";
import { addDays, getDate, getYear, subDays } from "date-fns";
import { Button, Input } from "antd";

export interface RangePickerProps {
  inline?: true;
  className?: string;
  mode: "search" | "input";
}

export function RangePicker({ inline, className, mode }: RangePickerProps) {
  const [dateRange, setDateRange] = useState([
    subDays(new Date(), 6),
    new Date(),
  ]);
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
  const SearchInput = forwardRef(
    ({ value, onClick, className }: any, ref: any) => (
      <h6 className={className} onClick={onClick} ref={ref}>
        {value ? value : "Chọn Khoảng thời gian"}
      </h6>
    )
  );
  const NormalInput = forwardRef(
    ({ value, onClick, className }: any, ref: any) => (
      <Input
        readOnly
        onClick={onClick}
        ref={ref}
        value={value ? value : "Chọn ngày"}
        className={className + " " + "input-range"}
        suffix={
          <img
            src={`${process.env.NEXT_PUBLIC_SUB_DIR}/static/img/calendar1.svg`}
            alt=""
          />
        }
      ></Input>
    )
  );
  return (
    <ReactDatePicker
      popperClassName={!inline ? "pad-btm-top" : ""}
      customInput={
        mode === "search" ? (
          <SearchInput className={className} />
        ) : (
          <NormalInput />
        )
      }
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
            <span className="price"></span>
          </div>
        );
      }}
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update: any) => {
        setDateRange(update);
      }}
      includeDateIntervals={[
        { start: subDays(new Date(), 7), end: addDays(new Date(), 7) },
      ]}
      inline={inline}
    />
  );
}
