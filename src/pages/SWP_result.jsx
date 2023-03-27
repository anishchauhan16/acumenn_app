import React from "react";
import { useNavigate } from "react-router-dom";

const SWP_result = () => {
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
            onClick={() => navigate("/SWP")}
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
            MONTHLY SWP CALCULATION
          </p>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">Current Age</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">20 Years</div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">Initial Investment</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">Rs. 100,000</div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">SWP Period</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">10 Years</div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">Expected Inflation Rate</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">7.50 %</div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">Balance Required</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">Rs. 0</div>
            </td>
          </tr>
        </table>
        <div class="p-6 bg-white items-center justify-between">
          <p class="text-center font-bold place-items-center justify-between text-[20px]">
            FIRST YEAR AVERAGE MONTHLY SWP @ 8.00 %
          </p>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 place-items-center justify-center whitespace-nowrap">
              <div class="text-center text-sm text-[20px] text-gray-900">Rs. 88725</div>
            </td>
          </tr>
        </table>
        <div class="p-6 bg-white items-center justify-between">
          <p class="text-center font-bold place-items-center justify-between text-[20px]">
            TOTAL WITHDRAWAL
          </p>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 place-items-center justify-center whitespace-nowrap">
              <div class="text-center text-[20px] text-sm text-gray-900">
                Rs. 20,000,000
              </div>
            </td>
          </tr>
        </table>
        <div class="p-6 bg-white items-center justify-between">
          <p class="text-center font-bold place-items-center justify-between text-[20px]">
            MONTHLY WITHDRAWAL & PROJECTED INVESTMENT VALUE
          </p>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Age
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Monthly SWP
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Year-End Balance
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">21</div>
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
                <div class="text-sm text-gray-900">22</div>
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
                <div class="text-sm text-gray-900">23</div>
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
                <div class="text-sm text-gray-900">24</div>
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
                <div class="text-sm text-gray-900">25</div>
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
                <div class="text-sm text-gray-900">26</div>
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
                <div class="text-sm text-gray-900">27</div>
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
                <div class="text-sm text-gray-900">28</div>
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
                <div class="text-sm text-gray-900">29</div>
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
                <div class="text-sm text-gray-900">30</div>
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
            onClick={() => navigate("/SWP")}
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

export default SWP_result;
