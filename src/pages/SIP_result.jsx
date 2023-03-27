import React from "react";
import { useNavigate } from "react-router-dom";

const SIP_result = () => {
  const navigate = useNavigate();
  return (
    <section className="flex row max-w-7xl mx-auto">
      <div className="place-items-center w-full bg-white sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4]">
        <h1 className="text-center font-extrabold text-[#222328] text-[32px] w-15 h-18">
          CALCULATORS CUM CLIENT PROPOSALS
        </h1>
      </div>
      <br></br>
      <div class="p-6 bg-white rounded-lg shadow-md">
        <div class="flex items-center justify-between mt-6 ">
          <button
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => navigate("/SIP")}
          >
            Back
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            
          >
            Save
          </button>
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Download / Print
          </button>
        </div>
        <div class="p-6 bg-white items-center justify-between">
          <p class="text-center font-bold place-items-center justify-between text-[20px]">
            SIP PLANNING
          </p>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">Target Amount</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">Rs. 100,000,000</div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">SIP Period</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">10 Years</div>
            </td>
          </tr>
        </table>
        <div class="p-6 bg-white items-center justify-between">
          <p class="text-center font-bold place-items-center justify-between text-[20px]">
            MONTHLY SIP REQUIRED
          </p>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 place-items-center justify-center whitespace-nowrap">
              <div class="text-center text-sm text-gray-900">@ 14 %</div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 place-items-center justify-center whitespace-nowrap">
              <div class="text-center text-sm text-gray-900">Rs. 200,000</div>
            </td>
          </tr>
        </table>
        <div class="p-6 bg-white items-center justify-between">
          <p class="text-center font-bold place-items-center justify-between text-[20px]">
            TOTAL INVESTMENT
          </p>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 place-items-center justify-center whitespace-nowrap">
              <div class="text-center text-sm text-gray-900">@ 14 %</div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 place-items-center justify-center whitespace-nowrap">
              <div class="text-center text-sm text-gray-900">Rs. 20,000,000</div>
            </td>
          </tr>
        </table>
        <div class="p-6 bg-white items-center justify-between">
          <p class="text-center font-bold place-items-center justify-between text-[20px]">
            YEAR-WISE PROJECTED VALUE
          </p>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Year
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Annual Investment
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Year-End Value
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">1</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 100,000</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 200,000</div>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">2</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 100,000</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 262,800</div>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">3</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 100,000</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 262,800</div>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">4</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 100,000</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 262,800</div>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">5</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 100,000</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 262,800</div>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">6</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 100,000</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 262,800</div>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">7</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 100,000</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 262,800</div>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">8</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 100,000</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 262,800</div>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">9</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 100,000</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 262,800</div>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">10</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 100,000</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Rs. 262,800</div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex items-center justify-between mt-6 ">
          <button
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => navigate("/SIP")}
          >
            Back
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            
          >
            Save
          </button>
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Download / Print
          </button>
        </div>
      </div>
    </section>
  );
};

export default SIP_result;
