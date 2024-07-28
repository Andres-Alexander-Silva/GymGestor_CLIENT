
import HeaderHome from "../../Components/Header/HeaderHome";
import Footer from "../../Components/Footer/Footer";
import Clases from "./Components/Clases";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderHome />
      <main className="flex-grow">
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-14">
         
       <Clases />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
