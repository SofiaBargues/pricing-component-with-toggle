// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
const plans = [
  {
    name: "Basic",
    price: "19.99",
    storage: "500 GB Storage",
    usersAllowed: "2 Users Allowed",
    sendLimit: "Send up to 3 GB",
  },
  {
    name: "Professional",
    price: "24.99",
    storage: "1 TB Storage",
    usersAllowed: "5 Users Allowed",
    sendLimit: "Send up to 10 GB",
  },
  {
    name: "Master",
    price: "39.99",
    storage: "2 TB Storage",
    usersAllowed: "10 Users Allowed",
    sendLimit: "Send up to 20 GB",
  },
];

function Card({
  name,
  price,
  storage,
  usersAllowed,
  sendLimit,
}: {
  name: string;
  price: string;
  storage: string;
  usersAllowed: string;
  sendLimit: string;
}) {
  return (
    <div
      className={
        name != "Professional"
          ? "w-[323px] rounded-md h-[455px] text-sm  font-bold text-[#4c4f60] bg-white m-auto p-6 flex items-center justify-between flex-col"
          : " w-[323px] rounded-md h-[455px] text-sm  font-bold text-white m-auto bg-[#9b9fee] p-6 flex items-center justify-between flex-col"
      }
    >
      <div
        className={
          name != "Professional"
            ? "text-lg text-[#666882]"
            : "w-full  text-lg text-white flex flex-col gap-6 text-center"
        }
      >
        {name}
      </div>
      <div className="text-7xl flex items-center">
        <span className="text-4xl">$</span>
        {price}
      </div>
      <div
        className={
          name != "Professional"
            ? "w-full text-md text-[#6b6b83] flex flex-col gap-4 text-center "
            : "w-full text-md text-white flex flex-col gap-4 text-center "
        }
      >
        <hr></hr>
        <div>{storage}</div>
        <hr></hr>
        <div>{usersAllowed}</div>
        <hr></hr>
        <div>{sendLimit}</div>
        <hr></hr>
      </div>
      <div
        className={
          name != "Professional"
            ? "bg-[#7276e1] text-white fd text-center  p-3 rounded-lg w-full"
            : "bg-white text-[#7276e1]  text-center  p-3 rounded-lg w-full"
        }
      >
        LEARN MORE
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="font-montserrat flex flex-col relative overflow-hidden w-[374px] h-full  justify-center  m-auto">
      <img
        src="./src/assets/bg-top.svg"
        className="left-[50%] top-[-1%]
         
       absolute -z-10"
        width={550}
      ></img>
      <div
        className="bg-[#f7f7ff]  w-full h-full
       absolute -z-20"
      ></div>
      <div className="m-9">
        <div className="font-bold text-3xl text-[#6f7390] flex justify-center m-10 ">
          Our Pricing
        </div>
        <div className="flex justify-center gap-3 items-center flex-row text-[#aeaeba] relative font-bold text-md">
          <div className="">Annually</div>
          <div className="bg-white left-[130px] rounded-full w-6 h-6  absolute"></div>
          <div className="bg-[#7a7ee1] w-14 h-8 rounded-full"></div>
          <div className="">Monthly</div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] my-6">
        {plans.map((plan) => (
          <Card
            name={plan.name}
            price={plan.price}
            storage={plan.storage}
            usersAllowed={plan.usersAllowed}
            sendLimit={plan.sendLimit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
