import React from "react"

const Content = ({ icon, title, highlight, highlightStart, highlightEnd }) => {
  return (
    <div className="flex md:px-16 px-6 gap-4  md:gap-12 py-3 items-center">
      <div className="">
        <img src={icon} alt="" />
      </div>
      <div className="">
        <h4 className="not-italic font-semibold text-[18px] md:text-[28px] leading-[100%] flex items-center tracking-[0.03em] text-white ">
          {highlightStart && (
            <span className="text-[#0096FF] mr-4">{highlight}</span>
          )}{" "}
          {title}{" "}
          {highlightEnd && (
            <span className="text-[#0096FF] ml-4">{highlight}</span>
          )}
        </h4>
      </div>
    </div>
  )
}

export default Content
