import Footer from './components/Footer';
import ImageSlider from "./components/ImageSlider";
import Header from './components/Header';

export default function Page() {
  return (
      <>
        <Header/>
        <main className="flex min-h-screen flex-col">
            <ImageSlider />
        </main>
        <Footer/>
      </>
  );
}
