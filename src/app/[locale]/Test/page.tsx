import { testItem } from "./slice/selector";
import NavigationLink from "@/app/component/NavigationLink";

export default function Test(props: any) {
  console.log(props);

  return (
    <>
      <NavigationLink href="/">
        <span>home</span>
      </NavigationLink>
      <h1>{}</h1>
    </>
  );
}
