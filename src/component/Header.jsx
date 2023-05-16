import React from "react"

const Header = () => {
  return (
    <header className="flex items-center px-4 md:px-24 py-4 justify-between">
      <div className="flex items-center space-x-12">
        <div className="">
          <img src="/Images/EDYODA.svg" alt="" />
        </div>
        <div className="items-center md:flex hidden gap-2">
          <h4 className="not-italic font-medium text-base leading-[19px] text-center text-black">
            Courses
          </h4>
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.91 0.580078L6.5 5.17008L11.09 0.580078L12.5 2.00008L6.5 8.00008L0.5 2.00008L1.91 0.580078Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="md:flex hidden items-center gap-2">
          <h4 className="not-italic font-medium text-base leading-[19px] text-center text-black">
            Programs
          </h4>
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.91 0.580078L6.5 5.17008L11.09 0.580078L12.5 2.00008L6.5 8.00008L0.5 2.00008L1.91 0.580078Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center space-x-12">
        <div className="md:flex hidden">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1 18L10.8 11.7C10.3 12.1 9.725 12.4167 9.075 12.65C8.425 12.8833 7.73333 13 7 13C5.18333 13 3.646 12.3707 2.388 11.112C1.13 9.85333 0.500667 8.316 0.5 6.5C0.5 4.68333 1.12933 3.146 2.388 1.888C3.64667 0.63 5.184 0.000666667 7 0C8.81667 0 10.354 0.629333 11.612 1.888C12.87 3.14667 13.4993 4.684 13.5 6.5C13.5 7.23333 13.3833 7.925 13.15 8.575C12.9167 9.225 12.6 9.8 12.2 10.3L18.5 16.6L17.1 18ZM7 11C8.25 11 9.31267 10.5623 10.188 9.687C11.0633 8.81167 11.5007 7.74933 11.5 6.5C11.5 5.25 11.0623 4.18733 10.187 3.312C9.31167 2.43667 8.24933 1.99933 7 2C5.75 2 4.68733 2.43767 3.812 3.313C2.93667 4.18833 2.49933 5.25067 2.5 6.5C2.5 7.75 2.93767 8.81267 3.813 9.688C4.68833 10.5633 5.75067 11.0007 7 11Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="md:flex hidden">
          <button className="not-italic font-medium text-base leading-[19px] text-center text-black">
            Log in
          </button>
        </div>
        <div className="">
          <button className="bg-btn px-6 md:px-10 py-2 rounded-[52px] not-italic font-bold text-sm md:text-base leading-[19px] flex items-center text-center uppercase text-white">
            join now
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
