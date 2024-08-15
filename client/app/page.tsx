import Image from "next/image";
import Cta from "@/components/CTA/Cta";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Cta />
    </div>
  );
}
