import Link from "next/link";
import { testItem } from "./slice/selector";

export default function Test(props: any) {
  console.log(props);

  return (
    <>
      <Link href="/">
        <span>home</span>
      </Link>
      <h1>{}</h1>
    </>
  );
}
