import React from 'react'
import { toTitleCase } from "../utils/strings";

const MatchCard = ({ match }) => {
  const setA = match?.["setA"];
  const setB = match?.["setB"];
  const setC = match?.["setC"];

  return (
    <div key={match?.["_id"]} className='w-[300px] divide-y mt-[20px] border rounded-md ml-2 relative'>
      <div className="flex items-center justify-between">
        <div className='flex items-center justify-start'>
          <span
          className={`${!match?.winner
            ? "bg-orange-500"
            : match?.winner?._id === match?.challenger?.["_id"]
              ? "bg-lime-600"
              : "bg-gray-400"
            } text-white pl-4 pr-2 py-[10px] text-right text-[18px]`}
        >1</span>
        <span>
          <p className='text-[#0E0E0E] px-2 text-[16px] py-[1-px] font-medium'>
            {toTitleCase(match?.challenger?.firstname)}{" "}
            {toTitleCase(match?.challenger?.lastname)}
          </p>
        </span>
        </div>

        <span className="flex  ml-2">
          <span
            className={`${!match?.winner
              ? "bg-orange-500"
              : setA.challenger > setA.challenged
                ? "bg-lime-600"
                : "bg-gray-400"
              } border px-[10px]`}
          >
            {setA?.challenger}
          </span>

          <span
            className={`${!match?.winner
              ? "bg-orange-500"
              : setB.challenger > setA.challenged
                ? "bg-lime-600"
                : "bg-gray-400"
              } border px-[10px]`}
          >
            {setB?.challenger}
          </span>

          <span
            className={`${!match?.winner
              ? "bg-orange-500"
              : setC.challenger > setA.challenged
                ? "bg-lime-600"
                : "bg-gray-400"
              } border px-[10px]`}
          >
            {setC?.challenger}
          </span>
        </span>
      </div>



      <div className="flex items-center justify-between">
        <div className='flex items-center justify-start'>
          <span
          className={`${!match?.winner
            ? "bg-orange-500"
            : match?.winner?._id === match?.challenged?.["_id"]
              ? "bg-lime-600"
              : "bg-gray-400"
            } text-white pl-4 pr-2 py-[10px] text-right text-[18px] text-right`}
        >2</span>
        <span>
          <p className='text-[#0E0E0E] px-2 text-[16px] py-[1-px] font-medium'>
            {toTitleCase(match?.challenged?.firstname)}{" "}
            {toTitleCase(match?.challenged?.lastname)}
          </p>
        </span>
        </div>

        <span className="flex ml-2">
          <span
            className={`${!match?.winner
              ? "bg-orange-500"
              : setA.challenger < setA.challenged
                ? "bg-lime-600"
                : "bg-gray-400"
              } border px-[10px]`}
          >
            {setA?.challenged}
          </span>

          <span
            className={`${!match?.winner
              ? "bg-orange-500"
              : setB.challenger < setA.challenged
                ? "bg-lime-600"
                : "bg-gray-400"
              } border px-[10px]`}
          >
            {setB?.challenged}
          </span>

          <span
            className={`${!match?.winner
              ? "bg-orange-500"
              : setC.challenger < setA.challenged
                ? "bg-lime-600"
                : "bg-gray-400"
              } border px-[10px]`}
          >
            {setC?.challenged}
          </span>
        </span>
      </div>
    </div>




  )
}

export default MatchCard