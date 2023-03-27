import React from "react";
import { useNavigate } from "react-router-dom";

const SIP = () => {
  const navigate = useNavigate();
  return (
    <section className="flex row max-w-7xl mx-auto">
      <div className="place-items-center w-full bg-white sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4]">
        <h1 className="text-center font-extrabold text-[#222328] text-[32px] w-15 h-18">
          CALCULATORS CUM CLIENT PROPOSALS
        </h1>
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
              <a class="text-black-500 hover:text-black-800" href="/SWP">
                Lumpsum
              </a>
            </li>
            <li class="mr-6 px-4">
              <a class="text-black-500 hover:text-black-800" href="/sip">
                SIP
              </a>
            </li>
            <li class="mr-6 px-4">
              <a class="text-black-500 hover:text-black-800" href="#">
                STP
              </a>
            </li>
            <li class="mr-6 px-4">
              <a class="text-black-500 hover:text-black-800" href="/SWP">
                SWP
              </a>
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
      <br></br>
      <div className="place-items-center w-full bg-white sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4]">
        <h1 className="text-center font-extrabold text-[#222328] text-[22px] w-15 h-18">
          SIP Required for Target Future Value
        </h1>
        <div className="flex px-4 py-4">
          <div className="place-items-center rounded-xl mr-4 px-2 py-2 w-full h-auto group relative shadow-card hover:shadow-cardhover card">
            {/* <div class="p-6 bg-white rounded-lg shadow-md"> */}
            <form>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="targetValue"
                >
                  Target Value
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="targetValue"
                  type="text"
                  placeholder="Enter target value"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="sipPeriod"
                >
                  SIP Period
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="sipPeriod"
                  type="text"
                  placeholder="Enter SIP period"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="percentage"
                >
                  Scenario 1
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="percentage"
                  type="text"
                  placeholder="Enter percentage"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="percentage"
                >
                  Scenario 2 {"(Optional)"}
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="percentage"
                  type="text"
                  placeholder="Enter percentage"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Include Step-up Comparison
                </label>
                <div class="flex items-center">
                  <input
                    class="mr-2 leading-tight"
                    type="radio"
                    id="yesStepUpOption"
                    name="stepUpOption"
                  />
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="yesStepUpOption"
                  >
                    Yes
                  </label>
                  <input
                    class="ml-8 mr-2 leading-tight"
                    type="radio"
                    id="noStepUpOption"
                    name="stepUpOption"
                  />
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="noStepUpOption"
                  >
                    No
                  </label>
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="stepUpPercentage"
                >
                  Step-up % Every Year
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="stepUpPercentage"
                  type="text"
                  placeholder="Enter step-up percentage"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Include Cost of Delay Report
                </label>
                <div class="flex items-center">
                  <input
                    class="mr-2 leading-tight"
                    type="radio"
                    id="yesCost"
                    name="CostofDelay"
                  />
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="yesCost"
                  >
                    Yes
                  </label>
                  <input
                    class="ml-8 mr-2 leading-tight"
                    type="radio"
                    id="noCost"
                    name="CostofDelay"
                  />
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="noCost"
                  >
                    No
                  </label>
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="clientName"
                >
                  Add Client Name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="clientName"
                  type="text"
                  placeholder="Enter name of client"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Get Report
                </label>
                <div class="flex items-center">
                  <input
                    class="mr-2 leading-tight"
                    type="radio"
                    id="yesCost"
                    name="CostofDelay"
                  />
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="yesCost"
                  >
                    Summary Report
                  </label>
                  <input
                    class="ml-8 mr-2 leading-tight"
                    type="radio"
                    id="noCost"
                    name="CostofDelay"
                  />
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="noCost"
                  >
                    Detailed Report
                  </label>
                </div>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="mr-2 leading-tight font-bold mb-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 font-medium"
                >
                  Add suggested schemes for investment
                </label>
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  Back
                </button>
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => navigate("/sip_result")}
                >
                  Calculate
                </button>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIP;
