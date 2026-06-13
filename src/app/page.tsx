import Hero from "@/components/Hero";
import Types from "@/components/Types";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-dvh overflow-hidden">
      <Hero />
      <Types />
    </main>
  );
}
