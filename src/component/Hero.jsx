import React from "react"
import Content from "./Content"
import PriceOffer from "./PriceOffer"

const Hero = () => {
  return (
    <section className="bg-[url(/public/Images/BackGroundColor.svg)] h-screen w-full  min-h-full">
      <div className="flex md:flex-row flex-col  items-center">
        <div className="flex-1 w-full ">
          <div className="md:px-16 px-6 pb-6 py-2 pt-6">
            <h4 className="not-italic font-semibold text-[24px] md:text-[46px] leading-[105%] flex items-center tracking-[-0.01em] text-white">
              Access curated courses worth
            </h4>
            <br />
            <h3 className="not-italic font-semibold text-[24px] md:text-[46px] leading-[105%] flex items-center tracking-[-0.01em] text-white">
              ₹
              <strike className="text-[#FF0000] mx-1 md:mx-3">
                <span className="text-white price-font"> 18,500 </span>
              </strike>
              at just{" "}
              <span className="md:mx-3 mx-1 text-[#0096FF] price-font">
                {" "}
                ₹ 99{" "}
              </span>{" "}
              per year!
            </h3>
          </div>
          <Content
            icon={"/Images/Icon/Icon.svg"}
            title={"Job relevant courses"}
            highlight={"100+"}
            highlightStart={true}
          />
          <Content
            icon={"/Images/Icon/Icon1.svg"}
            title={"Hours of content"}
            highlight={"20,000+"}
            highlightStart={true}
          />
          <Content
            icon={"/Images/Icon/Icon2.svg"}
            title={" webinar access"}
            highlight={"Exclusive"}
            highlightStart={true}
          />
          <Content
            icon={"/Images/Icon/Icon3.svg"}
            title={" Scholarship worth "}
            highlight={"₹94,500"}
            highlightEnd={true}
          />
          <Content
            icon={"/Images/Icon/Icon4.svg"}
            title={" learning experience"}
            highlight={"Ad Free "}
            highlightStart={true}
          />
        </div>
        <div className="flex-[0.5] w-full px-6 py-6">
          <div className="bg-white w-full px-8 rounded-[8px] ">
            <div className="flex items-center py-4 px-8 md:px-24 justify-between">
              <button className="flex items-center flex-col">
                <div className=" w-[38px] flex items-center justify-center h-[38px] rounded-full bg-[#0096FF]">
                  <h3 className="not-italic font-semibold text-2xl text-center leading-[18px] flex items-center  tracking-[-0.015em]     text-white">
                    1
                  </h3>
                </div>
                <p className=" not-italic font-normal text-base leading-[19px] flex items-center tracking-[-0.01em] text-[#3C4852]">
                  Sign Up
                </p>
              </button>
              <button className="flex items-center flex-col">
                <div className=" w-[38px] flex items-center justify-center h-[38px] rounded-full bg-[#0096FF]">
                  <h3 className="not-italic font-semibold text-2xl text-center leading-[18px] flex items-center  tracking-[-0.015em]     text-white">
                    2
                  </h3>
                </div>
                <p className=" not-italic font-normal text-base leading-[19px] flex items-center text-center tracking-[-0.01em] text-[#3C4852]">
                  Subscribe
                </p>
              </button>{" "}
            </div>
            <div className="text-center flex py-2 items-center justify-center">
              <h4 className="not-italic font-semibold text-lg md:text-2xl leading-[125.3%] flex items-center text-center text-[#3C4852]">
                Select your subcription plan
              </h4>
            </div>
            <PriceOffer />
            <hr className="border-t-2 border-[#BEBEBE] py-2 mt-2 " />
            <div className="flex items-center py-2 justify-between ">
              <h4 className="not-italic font-normal text-base leading-[120%] flex items-center text-center text-[#3C4852]">
                Subscription Fee
              </h4>
              <h2 className="not-italic font-medium text-base price-font leading-[100%] flex items-center text-center tracking-[0.03em] text-[#3C4852]">
                ₹18,500
              </h2>
            </div>
            <div className="flex flex-col rounded-xl px-6 py-2 bg-limittime ">
              <div className="flex justify-between items-center">
                <h4 className="not-italic font-semibold text-base leading-[120%] flex items-center text-center text-[#DE4313]">
                  Limited time offer
                </h4>
                <h2 className="not-italic price-font font-semibold text-base leading-[100%] flex items-center text-center tracking-[0.03em] text-[#3C4852]">
                  - ₹18,500
                </h2>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.49998 22 1.99998 17.5 1.99998 12C1.99998 6.5 6.49998 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.59998 4 3.99998 7.6 3.99998 12C3.99998 16.4 7.59998 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"
                    fill="#DE4313"
                  />
                </svg>
                <h3 className="not-italic font-normal text-sm leading-[120%] flex items-center text-center text-[#DE4313]">
                  Offer valid till 25th March 2023{" "}
                </h3>
              </div>
            </div>
            <div className="flex items-center  py-2 justify-between">
              <h4 className="not-italic font-medium text-base leading-[120%] flex items-center text-center text-[#3C4852]">
                <span className="font-semibold">Total</span> (Incl. of 18% GST)
              </h4>
              <h6 className="not-italic price-font font-semibold text-2xl leading-[100%] flex items-center text-center tracking-[0.03em] text-[#3C4852]">
                ₹149
              </h6>
            </div>
            <div className=" flex items-center gap-4 md:gap-6 justify-between">
              <button className="not-italic py-2 rounded border-[rgba(247,113,113,1)] w-full border-2 font-bold md:text-base text-sm leading-[19px] flex justify-center items-center text-center uppercase text-[#F77171]">
                cancel
              </button>
              <button className=" not-italic py-2 border-2 border-[rgba(71,186,104,1)] rounded w-full bg-[rgba(71,186,104,1)] font-bold md:text-base text-sm justify-center leading-[19px] flex items-center text-center uppercase text-white">
                proceed to pay
              </button>
            </div>
            <div className="py-2 ">
              <img src="/Images/Icon/PayIcon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
