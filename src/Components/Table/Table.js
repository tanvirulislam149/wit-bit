import React from "react";
import "./Table.css";

const Table = () => {
   return (
      <div className="mt-10 dashboard-font w-full h-full mr-6">
         <div className="pb-8 flex justify-between items-center">
            <p
               style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  height: "24px",
                  width: "95px",
               }}
            >
               Students
            </p>
            <button className="add-font flex">
               <svg
                  className="ml-9 my-3.5"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
               </svg>
               <p className="pl-2 pr-8 py-3.5">ADD</p>
            </button>
         </div>
         <div class="flex flex-col">
            <div class="overflow-x-auto">
               <div class="py-2 inline-block w-full">
                  <div
                     style={{
                        border: "1px solid #D3D6DB",
                        borderRadius: "10px",
                        height: "854px",
                     }}
                     class="bg-white"
                  >
                     <table class="w-full">
                        <thead
                           style={{ backgroundColor: "#F1F4F8" }}
                           class="border-b"
                        >
                           <tr>
                              <th
                                 scope="col"
                                 class="text-sm font-bold text-gray-900 px-6 py-2 text-left"
                              >
                                 No.
                              </th>
                              <th
                                 scope="col"
                                 class="text-sm font-bold text-gray-900 px-6 py-2 text-left"
                              >
                                 Student Name
                              </th>
                              <th
                                 scope="col"
                                 class="text-sm font-bold text-gray-900 px-6 py-2 text-left"
                              >
                                 Class
                              </th>
                              <th
                                 scope="col"
                                 class="text-sm font-bold text-gray-900 px-6 py-2 text-left"
                              >
                                 Result
                              </th>
                              <th
                                 scope="col"
                                 class="text-sm font-bold text-gray-900 px-6 py-2 text-left"
                              >
                                 Score
                              </th>
                              <th
                                 scope="col"
                                 class="text-sm font-bold text-gray-900 px-6 py-2 text-left"
                              >
                                 Grade
                              </th>
                              <th
                                 scope="col"
                                 class="text-sm font-bold text-gray-900 px-6 py-2 text-left"
                              ></th>
                              <th
                                 scope="col"
                                 class="text-sm font-bold text-gray-900 px-6 py-2 text-left"
                              ></th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                 1
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 Mark
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 Otto
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 @mdo
                              </td>
                           </tr>
                           <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                 2
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 Jacob
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 Thornton
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 @fat
                              </td>
                           </tr>
                           <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                 3
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 Larry
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 Wild
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 @twitter
                              </td>
                           </tr>
                           <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                 3
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 Larry
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 Wild
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 @twitter
                              </td>
                           </tr>
                           <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                 3
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 Larry
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 Wild
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 @twitter
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Table;
