import Link from "next/link";
import { LangSwitcher } from "../component/LangSwitcher";
import NavigationLink from "../component/NavigationLink";
import { Button } from "antd";

export default function App(props: any) {
  console.log(props);
  return (
    <>
      <NavigationLink href={"/Test?text=1235487"}>
        <span>Test page</span>
      </NavigationLink>
      <LangSwitcher />

      <h1>test</h1>
    </>
  );
}
