import React from "react";
import "tailwindcss/tailwind.css";

export default function PasswordGenerator() {
  return (
    <div className="flex justify-center items-center bg-black min-h-screen">
      <div className="w-80 min-h-28 font-oswald">
        <p className="text-slate-500 text-center">Password Generator</p>
        <div className="bg-gray-900 p-3 py-1 w-full mt-5">
          <p className="text-slate-300 text-sm font-base">fdgdfg</p>
        </div>
        <div className="bg-gray-900 p-3 w-full mt-3">
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-300 font-light">
              character length
            </p>
            <p className="text-light-green">18</p>
          </div>
          <form className="w-full mt-2">
            <input type="range" className="w-full" />
            <div className="mt-1 flex items-center">
              <input type="checkbox" />
              <label className="ml-3 text-sm text-slate-300 font-light">
                Include Uppercase Letters
              </label>
            </div>
            <div className="mt-1 flex items-center">
              <input type="checkbox" />
              <label className="ml-3 text-sm text-slate-300 font-light">
                Include Lowercase Letters
              </label>
            </div>
            <div className="mt-1 flex items-center">
              <input type="checkbox" />
              <label className="ml-3 text-sm text-slate-300 font-light">
                Include Numbers
              </label>
            </div>
            <div className="mt-1 flex items-center">
              <input type="checkbox" />
              <label className="ml-3 text-sm text-slate-300 font-light">
                Include Symbols
              </label>
            </div>
            <button
              type="submit"
              className="mt-3 bg-light-green w-full text-sm p-2"
            >
              GENERATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
