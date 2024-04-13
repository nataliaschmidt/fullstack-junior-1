import Image from "next/image";
import Left from "./components/hero/Left";
import Right from "./components/hero/Right";
import CardServices from "./components/CardServices";
import services from './data/services'
import { Service } from "./types/service";

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
      <main className="mt-10 flex flex-col">
        <div className="flex w-screen items-start justify-center gap-10">
          <Left />
          <Right />
        </div>
        <section className="w-[1192px] h-[292px] bottom-5 left-[110px] absolute">
          <h2 className="text-5xl font-normal leading-[57.6px] mb-10">Our Service</h2>
          <div className="flex gap-10">
            {
              services.map((service: Service)=> <CardServices image={service.image} title={service.title} text={service.text} key={service.title}/>)
            }
          </div>
        </section>
      </main>
    </>
  );
}
