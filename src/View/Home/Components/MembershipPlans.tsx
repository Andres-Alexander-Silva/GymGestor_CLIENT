import React  from "react";
import { FaCheck, FaPlus } from "react-icons/fa";

type Benefit = {
  text: string;
  included: boolean;
};

type Plan = {
  name: string;
  benefits: Benefit[];
  highlight: boolean;
};

const plans: Plan[] = [
  {
    name: "Membresía Básica",
    benefits: [
      { text: "Plan de entrenamiento personalizado", included: false },
      { text: "Seguimiento a tu progreso", included: false },
      { text: "Acceso a todas las máquinas de entrenamiento", included: true },
    ],
    highlight: false,
  },
  {
    name: "Membresía FIT",
    benefits: [
      { text: "Plan de entrenamiento personalizado", included: true },
      { text: "Seguimiento a tu progreso", included: true },
      { text: "Acceso a todas las máquinas de entrenamiento", included: true },
    ],
    highlight: true,
  },
];

const MembershipPlans: React.FC = () => {
 // const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <section className="py-14">
      <div className="max-w-screen-lg mx-auto ">
        <h2 className="text-center text-2xl font-bold text-yellow-500 mb-4 mt-9">
          Elige tu membresía y <span className="text-orange-500">entrena</span>
        </h2>
        <div className="border-b border-gray-300">
          <div className="mt-4">
            <div className="flex border-t border-gray-200 py-2">
              <div className="w-1/2"></div>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="w-1/2 text-center font-semibold text-orange-500"
                >
                  {plan.name}
                </div>
              ))}
            </div>
            {plans[0].benefits.map((benefit, benefitIndex) => (
              <div
                key={benefitIndex}
                className="flex justify-between border-t border-gray-200 py-2"
              >
                <span className="w-1/2 text-gray-700">{benefit.text}</span>
                {plans.map((plan, planIndex) => (
                  <div key={planIndex} className="w-1/2 text-center">
                    {plan.benefits[benefitIndex].included ? (
                      <FaCheck className="text-green-500 inline" />
                    ) : (
                      <FaPlus className="text-green-500 inline" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
