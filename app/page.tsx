import Footer from './components/Footer';
import Header from "@/app/components/Header";
import ImageSlider from "@/app/components/ImageSlider";

export default function Page() {
  return (
      <>
        <Header />
        <main className="flex min-h-screen flex-col">
            <ImageSlider />
        </main>
        <Footer/>
      </>
  );
}
