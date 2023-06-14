import { BaseXHR } from "@/ultis/axios";
import { testItem } from "./slice/selector";
import NavigationLink from "@/app/component/NavigationLink";
async function getData(locale: string) {
  try {
    const { data } = await BaseXHR.$get(`v2/page/Hotel?locale=${locale}`);
    return data;
  } catch (e) {
    console.log(e);
  }
}
export default async function Test({ params }: any) {
  const { data } = await getData(params.locale);

  return (
    <>
      <NavigationLink href="/">
        <span>home</span>
      </NavigationLink>
      <h1>{data.title}</h1>
    </>
  );
}
