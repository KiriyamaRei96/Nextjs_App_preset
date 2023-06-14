import Link from "next/link";

export default function App(props: any) {
  console.log(props);
  return (
    <>
      <Link href="/Test">
        <span>Test page</span>
      </Link>
      <Link locale="en" href="/Test">
        <span>Test lang</span>
      </Link>
      <h1>test</h1>
    </>
  );
}
