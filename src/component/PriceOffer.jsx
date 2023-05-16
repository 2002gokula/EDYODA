import { isDisabled } from "@testing-library/user-event/dist/utils"
import React, { useState } from "react"
const PriceOfferData = [
  {
    PlanName: "12 Months Subscription ",
    TotlePrice: "₹99",
    MonthPrice: "₹8",
    Offerexpired: true,
    Recommended: false,
  },
  {
    PlanName: "12 Months Subscription ",
    TotlePrice: "₹179",
    MonthPrice: "₹15",
    Offerexpired: false,
    Recommended: true,
  },
  {
    PlanName: "6 Months Subscription  ",
    TotlePrice: "₹149",
    MonthPrice: "₹25",
    Offerexpired: false,
    Recommended: false,
  },
  {
    PlanName: "3 Months Subscription  ",
    TotlePrice: "₹99",
    MonthPrice: "₹33",
    Offerexpired: false,
    Recommended: false,
  },
]
const PriceOffer = () => {
  const [planSelection, setPlanSelection] = useState(1)

  return (
    <div className="">
      <form action="">
        {PriceOfferData.map((value, index) => (
          <div
            key={index}
            onClick={() =>
              setPlanSelection((prevState) =>
                prevState === index ? null : index
              )
            }
            className={`flex items-center border-2 ${
              planSelection !== index
                ? "border-[#BEBEBE]"
                : "border-[#47BA68] bg-[#D7EDDD]"
            } my-4  ${
              value.Offerexpired ? "bg-[#E7E7E7] cursor-not-allowed" : null
            } rounded cursor-pointer relative justify-between`}
          >
            {value.Recommended && (
              <div
                className={`absolute top-0 px-5 rounded-[0px_0px_4px_4px] py-[2px] bg-[#47BA68] left-16`}
              >
                <h3 className="not-italic font-medium text-xs leading-[120%] flex items-center text-center text-white">
                  Recommended
                </h3>
              </div>
            )}
            {value.Offerexpired && (
              <div
                className={`absolute top-0 px-5 rounded-[0px_0px_4px_4px] py-[2px] bg-[#F77171] left-16`}
              >
                <h3 className="not-italic font-medium text-xs leading-[120%] flex items-center text-center text-white">
                  Offer expired
                </h3>
              </div>
            )}
            <div className="flex items-center">
              <div class="inputGroup ">
                <input
                  id="option1"
                  checked={
                    value.Offerexpired ? isDisabled : planSelection === index
                  }
                  name="option1"
                  className=""
                  type="checkbox"
                />
                <label className="" for="option1"></label>
              </div>
              {/* )} */}
              <h4 className="not-italic font-semibold text-xs md:text-base leading-[120%] flex items-center text-center text-[#3C4852] ml-1">
                {value.PlanName}
              </h4>
            </div>
            <div className="flex items-end px-3 flex-col">
              <div className="flex items-center gap-2">
                <h4 className="not-italic font-normal text-xs leading-[120%] flex items-center text-center text-[#3C4852]">
                  Total
                </h4>
                <h2 className="not-italic font-semibold text-base leading-[120%] flex items-center price-font text-center text-[#3C4852]">
                  {value.TotlePrice}
                </h2>
              </div>
              <h6 className="not-italic font-normal text-xs leading-[120%] flex items-center text-center price-font text-[#3C4852]">
                {value.MonthPrice}{" "}
                <span className="not-italic ml-2 font-medium text-[10px] leading-[120%] flex items-center text-center text-[#BEBEBE]">
                  /mo
                </span>
              </h6>
            </div>
          </div>
        ))}
      </form>
    </div>
  )
}

export default PriceOffer
