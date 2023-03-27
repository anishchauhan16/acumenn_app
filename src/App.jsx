import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import { Main, SIP,SWP,SIP_result,SWP_result } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-end items-center bg-white sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4]">
        <ul class="flex">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="text-blue-500 hover:text-blue-800 sm:px-4 "
            type="button"
          >
            Membership{" "}
            <svg
              class="w-4 h-4 "
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                //stroke-linecap="round"
                // stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="/">
              MF Research
            </a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="/">
              Demo
            </a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="/">
              Pricing
            </a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="/">
              Store
            </a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="/">
              Website Tree
            </a>
          </li>
        </ul>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/sip" element={<SIP></SIP>}></Route>
          <Route path="/swp" element={<SWP></SWP>}></Route>
          <Route path="/sip_result" element={<SIP_result></SIP_result>}></Route>
          <Route path="/swp_result" element={<SWP_result></SWP_result>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;