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
        " w-[323px] rounded-md h-[455px] text-sm m-auto font-bold md:m-0 p-12 flex items-center justify-between flex-col " +
        (name != "Professional"
          ? "   text-[#4c4f60] bg-white "
          : "  text-white bg-[#9b9fee] md:h-[490px] ")
      }
    >
      <div
        className={
          "text-lg " +
          (name != "Professional" ? " text-[#666882]" : " text-white ")
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
          "  w-full text-md flex flex-col gap-4 text-center " +
          (name != "Professional" ? "text-[#6b6b83] " : " text-white ")
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
          " text-center  p-3 rounded-lg w-full " +
          (name != "Professional"
            ? "bg-[#7276e1] text-white"
            : "bg-white text-[#7276e1]")
        }
      >
        LEARN MORE
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="font-montserrat   flex flex-col md:justify-start relative overflow-hidden w-[374px] md:w-screen md:h-screen  h-full  justify-center  m-auto">
      <img
        src="./src/assets/bg-top.svg"
        className="left-[50%] top-[-1%] absolute -z-10 block md:hidden"
        width={550}
      ></img>
      <img
        src="./src/assets/bg-top.svg"
        className="left-[50%] top-[-1%] absolute -z-10 md:block  hidden"
        width={250}
      ></img>
      <img
        src="./src/assets/bg-bottom.svg"
        className="left-[0%] bottom-[0%] absolute -z-10 md:block hidden"
        width={290}
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

          <div className="bg-[#7a7ee1] w-14 h-8 rounded-full relative ">
            <div className="bg-white left-[4px] top-1 rounded-full w-6 h-6 absolute"></div>
          </div>
          <div className="">Monthly</div>
        </div>
      </div>
      <div className="flex flex-col md:items-center gap-[32px] my-6 md:flex-row md:gap-0 justify-center">
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
