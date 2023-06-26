import { BaseXHR } from "@/ultis/axios";
import { testItem } from "./slice/selector";
import NavigationLink from "@/app/component/NavigationLink";
import { RangePicker } from "../component/RangePicker";
import { DatePicker } from "../component/DatePicker";

async function getData(locale: string) {
  try {
    const { data } = await BaseXHR.$get(`v2/page/Hotel?locale=${locale}`);
    return data;
  } catch (e) {
    console.log(e);
  }
}
export default async function Test({ params }: any) {
  // const { data } = await getData(params.locale);

  return (
    <>
      <NavigationLink href="/">
        <span>home</span>
      </NavigationLink>
      {/* <h1>{data.title}</h1> */}
      <div className="d-flex">
        <RangePicker
          mode="search"
          className="font-weight-bold"
          key={"range picker"}
        />
        <RangePicker mode="input" key={"range picker 1"} />

        <DatePicker key={"date picker"} />
      </div>
    </>
  );
}
