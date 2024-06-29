import { pricing } from "../App";

export default function Card({
  name,
  monthlyPrice,
  annuallyPrice,
  storage,
  usersAllowed,
  sendLimit,
  pricingType,
}: {
  name: string;
  annuallyPrice: string;
  monthlyPrice: string;
  storage: string;
  usersAllowed: string;
  sendLimit: string;
  pricingType: string;
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
        {pricingType === pricing.monthly ? monthlyPrice : annuallyPrice}
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
          " text-center  p-3 rounded-lg w-full   " +
          (name != "Professional"
            ? "bg-gradient-to-r from-[#aaace0] to-[#7276e1] text-white hover:text-[#7276e1] hover:bg-gradient-to-r hover:from-white hover:to-white border-2 "
            : " text-[#7276e1]  bg-white hover:text-white hover:bg-[#9b9fee]  border-2")
        }
      >
        LEARN MORE
      </div>
    </div>
  );
}
