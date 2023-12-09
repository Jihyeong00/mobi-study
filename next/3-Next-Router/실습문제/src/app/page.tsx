import Link from "next/link";

export default function Home() {
    return <>
        <main className="">HomePage :)</main>
        <Link href={'/posts'}>포스트 보러가기</Link>
    </>;
}
