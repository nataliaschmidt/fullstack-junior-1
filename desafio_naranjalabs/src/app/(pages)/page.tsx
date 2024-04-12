import Image from "next/image";
import Left from "./components/hero/Left";
import Right from "./components/hero/Right";

export default function Home() {
  return (
    <>
      <Image
        className="fixed bottom-0 right-0 opacity-75"
        src="/images/blur1.svg"
        alt="Image of a defocused blur in a pink tone"
        height={214.05}
        width={404.08}
      />
      <Image
        className="fixed bottom-10 right-5 opacity-75"
        src="/images/blur2.svg"
        alt="Image of a defocused blur in a pink tone"
        height={381.41}
        width={720}
      />
      <Image
        className="fixed left-[-50px] top-0 opacity-90"
        src="/images/blur3.svg"
        alt="Image of a defocused blur in a pink tone"
        height={381.4}
        width={720}
      />
      <main className="flex w-screen items-start justify-center">
        <Left />
        <Right />
      </main>
    </>
  );
}
