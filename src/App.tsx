import { useState } from "react";
import Card from "./components/Card";

const plans = [
  {
    name: "Basic",
    monthlyPrice: "19.99",
    annuallyPrice: "199.99",
    storage: "500 GB Storage",
    usersAllowed: "2 Users Allowed",
    sendLimit: "Send up to 3 GB",
  },
  {
    name: "Professional",
    monthlyPrice: "24.99",
    annuallyPrice: "249.99",
    storage: "1 TB Storage",
    usersAllowed: "5 Users Allowed",
    sendLimit: "Send up to 10 GB",
  },
  {
    name: "Master",
    monthlyPrice: "39.99",
    annuallyPrice: "399.99",
    storage: "2 TB Storage",
    usersAllowed: "10 Users Allowed",
    sendLimit: "Send up to 20 GB",
  },
];

export const pricing = {
  annually: "annually",
  monthly: "monthly",
};

// let toggle = true

function App() {
  const [pricingType, setPricingType] = useState(pricing.monthly);

  function handlePricing() {
    if (pricingType === pricing.annually) {
      setPricingType(pricing.monthly);
    } else {
      setPricingType(pricing.annually);
    }
  }

  return (
    <div className="font-montserrat   flex flex-col md:justify-start relative overflow-hidden w-[374px] md:w-screen md:h-screen  h-full  justify-center  m-auto">
      <img
        src="./src/assets/bg-top.svg"
        className="left-[50%] top-[-1%] absolute -z-10 block md:hidden"
        width={550}
      ></img>
      <img
        src="./src/assets/bg-top.svg"
        className="left-[80%] top-[-1%] absolute -z-10 md:block  hidden"
        width={380}
      ></img>
      <img
        src="./src/assets/bg-bottom.svg"
        className="left-[0%] bottom-[0%] absolute -z-10 md:block hidden"
        width={450}
      ></img>
      <div
        className="bg-[#f7f7ff] w-full h-full
       absolute -z-20"
      ></div>
      <div className="m-9">
        <div className="font-bold text-3xl text-[#6f7390] flex justify-center m-10 md:m-0 md:p-10 ">
          Our Pricing
        </div>
        <div className="flex justify-center gap-3 items-center flex-row text-[#aeaeba] font-bold text-md">
          <div className="">Annually</div>

          <button
            onClick={handlePricing}
            className="bg-gradient-to-r from-[#aaace0] to-[#7276e1] w-14 h-8 rounded-full relative "
          >
            <div
              className={`${
                pricingType === pricing.annually
                  ? "left-[4px] bg-white "
                  : " left-[28px] bg-[#4c4f60]"
              } transition-all duration-250 ease-in-out top-1 rounded-full w-6 h-6 absolute`}
            ></div>
          </button>
          <div className="">Monthly</div>
        </div>
      </div>
      <div className="flex flex-col md:items-center gap-[32px] my-6 md:flex-row md:gap-0 justify-center">
        {plans.map((plan) => (
          <Card
            name={plan.name}
            monthlyPrice={plan.monthlyPrice}
            annuallyPrice={plan.annuallyPrice}
            storage={plan.storage}
            usersAllowed={plan.usersAllowed}
            sendLimit={plan.sendLimit}
            pricingType={pricingType}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
