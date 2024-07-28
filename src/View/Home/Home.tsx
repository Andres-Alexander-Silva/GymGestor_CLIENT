import React from "react";
import HeaderHome from "../../Components/Header/HeaderHome";
import Footer from "../../Components/Footer/Footer";
import MembershipPlans from "./Components/MembershipPlans";
import PromotionalMemberships from "./Components/PromotionalMemberships";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderHome />
      <main className="flex-grow">
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-14">
          <h1 className="text-center text-2xl font-bold text-yellow-500 mb-4">
            Elige tu membresía y <span className="text-orange-500">entrena</span>
          </h1>
          <MembershipPlans />
          {/* <PromotionalMemberships /> */}
          <div className="text-center mt-8">
            <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
              Iniciar sesión
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
