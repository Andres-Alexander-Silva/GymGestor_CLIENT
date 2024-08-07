import HeaderHome from "../../../global/components/HeaderHome";
import Footer from "../../../global/components/Footer";
import { MembershipPlans } from "../Components";

const Planes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderHome />
      <main className="flex-grow">
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-14">
          <h1 className="text-center text-2xl font-bold text-yellow-500 mb-4">
            Elige tu membresía y{" "}
            <span className="text-orange-500">entrena</span>
          </h1>
          <MembershipPlans />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Planes;
