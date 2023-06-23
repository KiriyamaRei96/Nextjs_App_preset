"use client";
import React, { useState } from "react";

import ReactDatePicker from "react-datepicker";

export interface DatePickerProps {}

export function DatePicker(props: DatePickerProps) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <ReactDatePicker
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
