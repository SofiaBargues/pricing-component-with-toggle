// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <div className="font-montserrat flex flex-col te relative overflow-hidden w-[374px] h-screen  justify-center  m-auto">
      <img
        src="./src/assets/bg-top.svg"
        className="left-[50%] top-[-2%]
         
       absolute -z-10"
        width={180}
      ></img>
      <div
        className="bg-[#f7f7ff]  w-full h-full
       absolute -z-20"
      ></div>
      <div className="font-bold text-3xl text-[#6f7390] flex justify-center m-10 ">
        Our Pricing
      </div>
      <div className="flex justify-center gap-3 items-center flex-row text-[#aeaeba] relative font-bold text-md">
        <div className="">Annually</div>
        <div className="bg-white left-[169px] h-5 rounded-full w-5 absolute"></div>
        <div className="bg-[#7a7ee1] w-12 h-7 rounded-full"></div>
        <div className="">Monthly</div>
      </div>
      <div className="w-[323px] h-[455px] text-sm  font-bold text-[#4c4f60] bg-white m-auto p-6 flex items-center justify-between flex-col">
        <div className="text-lg text-[#666882]">Basic</div>
        <div className="text-7xl flex items-center">
          <span className="text-4xl">$</span>199.99
        </div>
        <div className="  w-full text-md text-[#6b6b83] flex flex-col gap-6 text-center ">
          <hr></hr>
          <div>500 GB Storage</div>
          <hr></hr>
          <div>2 Users Allowed</div>
          <hr></hr>
          <div>Send up to 3 CB</div>
          <hr></hr>
        </div>
        <div className="bg-[#7276e1] text-white font-semibold text-center  p-3 rounded-lg w-full">
          LEARN MORE
        </div>
      </div>
    </div>
  );
}

export default App;
