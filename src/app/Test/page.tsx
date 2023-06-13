import Link from "next/link";
import { testItem } from "./slice/selector";

export default function Test() {
  return (
    <>
      <Link href="/">
        <span>home</span>
      </Link>
      <h1>{}</h1>
    </>
  );
}
