import BookTrip from "@/components/BookTrip/BookTrip";
import Destination from "@/components/Destination/Destination";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/Services/Service";

export default function Home() {
  return (
    <main className="text-2xl ">
      <Hero />
      <Service />
      <Destination />
      <BookTrip />
    </main>
  );
}
