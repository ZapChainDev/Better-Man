import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata = {
  title: "Services | Bedros Keuilian",
  description:
    "Coaching programs, masterminds, and resources to help you dominate in business and life.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesGrid />
      <Footer />
    </main>
  );
}
