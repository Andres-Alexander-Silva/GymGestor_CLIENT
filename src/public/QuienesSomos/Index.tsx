
import HeaderHome from "../../global/components/HeaderHome";
import Footer from "../../global/components/Footer";
import QuienesSomos from "./Components/QuienesSomos";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderHome />
      <main className="flex-grow">
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-14">
         
         <QuienesSomos />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
