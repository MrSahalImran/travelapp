import BookTrip from "@/components/BookTrip/BookTrip";
import Destination from "@/components/Destination/Destination";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";
import Service from "@/components/Services/Service";

export default function Home() {
  return (
    <main className="text-2xl ">
      <Hero />
      <Service />
      <Destination />
      <BookTrip />
      <Newsletter />
      <Footer />
    </main>
  );
}
