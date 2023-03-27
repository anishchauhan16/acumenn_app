import React from "react";
import { graph, calcu } from "../assets";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <section className="flex row max-w-7xl mx-auto">
      <div className="w-full flex  items-center bg-white sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4]">
        <br></br>
        <div>
          <h1 className=" flex font-extrabold text-[#222328] text-[32px] w-15 h-18">
            Calculators CUM Client <br></br>Proposals
          </h1>
          <br></br>
          <br></br>
          <p className="flex mt-2 text-[#666e75] text-[16px] w-30 h-12">
            A good proposal has a higher chance of getting converted into sales.
            <br></br>
            Create customised investment proposals for your clients and
            prospects.
          </p>
        </div>
        <div className="flex justify-end">
          <img src={graph} alt="graph" className="w-6/12 h-6/12"></img>
        </div>
      </div>
      <br></br>
      <div className="w-full flex-col items-center bg-white sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4]">
        <div class="flex">
          <ul class="flex">
            <li class="mr-6 px-4">
              <a class="text-black-500 hover:text-black-800" href="#">
                All
              </a>
            </li>
            <li class="mr-6 px-4">
              <a class="text-black-500 hover:text-black-800" href="#">
                Premium Calculator
              </a>
            </li>
            <li class="mr-6 px-4">
              <button
                class="text-black-500 hover:text-black-800"
                onClick={() => navigate("/SWP")}
              >
                Lumpsum
              </button>
            </li>
            <li class="mr-6 px-4">
              <button
                class="text-black-500 hover:text-black-800"
                onClick={() => navigate("/SIP")}
              >
                SIP
              </button>
            </li>
            <li class="mr-6 px-4">
              <a class="text-black-500 hover:text-black-800" href="#">
                STP
              </a>
            </li>
            <li class="mr-6 px-4">
              <button
                class="text-black-500 hover:text-black-800"
                onClick={() => navigate("/SWP")}
              >
                SWP
              </button>
            </li>
            <li class="mr-6 px-4">
              <a class="text-black-500 hover:text-black-800" href="#">
                Combination
              </a>
            </li>
            <li class="mr-6 px-5">
              <a class="text-black-500 hover:text-black-800" href="#">
                Need Based Calculator
              </a>
            </li>
          </ul>
        </div>
        <br></br>
        <div class="flex">
          <ul class="flex">
            <li class="mr-6 px-3">
              <a class="text-black-500 hover:text-black-800" href="#">
                MF vs Insurance
              </a>
            </li>
            <li class="mr-6 px-3">
              <a class="text-black-500 hover:text-black-800" href="#">
                Others
              </a>
            </li>
            <li class="mr-6 px-3">
              <a class="text-black-500 hover:text-black-800" href="#">
                Fund Performance
              </a>
            </li>
            <li class="mr-6 px-3">
              <a class="text-black-500 hover:text-black-800" href="#">
                View Saved File
              </a>
            </li>
            <li class="mr-6 px-3">
              <a class="text-black-500 hover:text-black-800" href="#">
                Not a Member?
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex-col items-center bg-white sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4]">
        <div>
          <h1 className=" flex font-extrabold text-[#222328] text-[32px] w-5 h-0">
            SIP
          </h1>
        </div>
        <div className="flex justify-end ">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3">
            How to Use?
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3">
            Sample Reports
          </button>
        </div>
      </div>

      <div className="w-full flex-col items-center bg-white sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4]">
        <div className="flex px-4 py-4">
          <div className="place-items-center rounded-xl mr-4 px-2 py-2 w-1/2 h-auto group relative shadow-card hover:shadow-cardhover card">
            <img
              className="w-2/12 h-2/12 object-cover  rounded-xl"
              src={calcu}
              alt="calc"
            />
            <br></br>
            <p className="mt-2 text-black font-bold text-[16px]">
              Future value of SIP
            </p>
            <br></br>
            <button
              class="bg-white hover:bg-blue-700 text-blue-500 border-2 px-24 py-2 border-blue-500 font-bold  rounded mx-3"
              onClick={() => navigate("/SIP")}
            >
              Calculate Now
            </button>
          </div>
          <div className="place-items-center rounded-xl px-2 py-2 w-1/2 h-auto group relative shadow-card hover:shadow-cardhover card">
            <img
              className="w-2/12 h-2/12  object-cover rounded-xl"
              src={calcu}
              alt="calc"
            />
            <br></br>
            <p className="mt-2 text-black font-bold text-[16px]">
              SIP Required for Target Future Value
            </p>
            <br></br>
            <button
              type="button"
              class="bg-white hover:bg-blue-700 text-blue-500 border-2 px-24 py-2 border-blue-500 font-bold  rounded mx-3"
              onClick={() => navigate("/SIP")}
            >
              Calculate Now
            </button>
          </div>
        </div>
        <div className="flex px-4 py-4">
          <div className="place-items-center rounded-xl mr-4 px-2 py-2 w-1/2 h-auto group relative shadow-card hover:shadow-cardhover card">
            <img
              className="w-2/12 h-2/12  object-cover rounded-xl"
              src={calcu}
              alt="calc"
            />
            <br></br>
            <p className="mt-2 text-black font-bold text-[16px]">
              Future Value of Limited Period SIP
            </p>
            <br></br>
            <button
              onClick={() => navigate("/SIP")}
              type="button"
              class="bg-white hover:bg-blue-700 text-blue-500 border-2 px-24 py-2 border-blue-500 font-bold  rounded mx-3"
            >
              Calculate Now
            </button>
          </div>
          <div className="place-items-center rounded-xl px-2 py-2 w-1/2 h-auto group relative shadow-card hover:shadow-cardhover card">
            <img
              className="w-2/12 h-2/12  object-cover rounded-xl"
              src={calcu}
              alt="calc"
            />
            <br></br>
            <p className="mt-2 text-black font-bold text-[16px]">
              Limited Period SIP Need Based Calculator
            </p>
            <br></br>
            <button
              onClick={() => navigate("/SIP")}
              type="button"
              class="bg-white hover:bg-blue-700 text-blue-500 border-2 px-24 py-2 border-blue-500 font-bold  rounded mx-3"
            >
              Calculate Now
            </button>
          </div>
        </div>
        <div className="flex px-4 py-4">
          <div className="place-items-center rounded-xl mr-4 px-2 py-2 w-1/2 h-auto group relative shadow-card hover:shadow-cardhover card">
            <img
              className="w-2/12 h-2/12  object-cover rounded-xl"
              src={calcu}
              alt="calc"
            />
            <br></br>
            <p className="mt-2 text-black font-bold text-[16px]">
              Future value of Step-Up SIP
            </p>
            <br></br>
            <button
              onClick={() => navigate("/SIP")}
              type="button"
              class="bg-white hover:bg-blue-700 text-blue-500 border-2 px-24 py-2 border-blue-500 font-bold  rounded mx-3"
            >
              Calculate Now
            </button>
          </div>
          <div className="place-items-center rounded-xl  px-2 py-2 w-1/2 h-auto group relative shadow-card hover:shadow-cardhover card">
            <img
              className="w-2/12 h-2/12  object-cover rounded-xl"
              src={calcu}
              alt="calc"
            />
            <br></br>
            <p className="mt-2 text-black font-bold text-[16px]">
              Step-Up Required For Target Future value
            </p>
            <br></br>
            <button
              onClick={() => navigate("/SIP")}
              type="button"
              class="bg-white hover:bg-blue-700 text-blue-500 border-2 px-24 py-2 border-blue-500 font-bold  rounded mx-3"
            >
              Calculate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
