import React from 'react';
import "./App.css"
import MatchList from './components/MatchList';
import data from './data'; // Yo

const App = () => {

  return (
    <div className="w-[100vw] h-[100vh] px-28 py-24 bg-neutral-100 justify-center items-center inline-flex">
      <div className="w-[1000px] h-[600px] relative bg-white rounded-2xl flex-col flex">
        <MatchList matches={data} />




        <div className="flex-col justify-start items-start gap-4 inline-flex absolute right-[70px] top-[100px]">
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-2.5 h-2.5 bg-orange-400 rounded-lg" />
            <div className="text-stone-950 text-xs font-medium tracking-tight">Match is Ongoing</div>
          </div>
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-2.5 h-2.5 bg-zinc-400 rounded-lg" />
            <div className="text-stone-950 text-xs font-medium tracking-tight">Loser of the Match</div>
          </div>
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-2.5 h-2.5 bg-lime-500 rounded-lg" />
            <div className="text-stone-950 text-xs font-medium tracking-tight">Winner of the match</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
