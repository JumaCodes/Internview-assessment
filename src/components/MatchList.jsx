import MatchCard from './MatchCard';
import Pagination from './Pagination';
import React, { useState } from 'react'

const MatchList = ({ matches }) => {
  const [currentRound, setCurrentRound] = useState(1);
  const maxRound = Math.max(...matches.map(match => parseInt(match.round)));
  const totalRounds = maxRound;

  const matchesForCurrentRound = matches.filter(match => match.round == currentRound);

  const changeRound = newRound => {
    if (newRound >= 1 && newRound <= totalRounds) {
      setCurrentRound(newRound);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentRound(newPage);
  };

  return (
    <>
      <Pagination changeRound={changeRound} currentPage={currentRound} totalPages={totalRounds} onPageChange={handlePageChange} />
      <div className=" w-[70%] ml-[20px] mt-[20px] grid grid-cols-2 gap-[10px]">
        {matchesForCurrentRound.map(match => (
          <MatchCard match={match} />
        ))}
      </div>
      {currentRound !== totalRounds &&
        <button
          onClick={() => changeRound(currentRound + 1)}
          disabled={currentRound === totalRounds}
          className="text-center text-white text-sm font-semibold border-none w-96 h-12 p-6 bg-lime-400 rounded-2xl shadow justify-center items-center gap-2 inline-flex absolute bottom-[40px] right-[30%]"
        >
          Proceed to Round {currentRound + 1}
        </button>
      }
    </>
  )
}

export default MatchList