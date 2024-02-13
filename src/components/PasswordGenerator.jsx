import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "./PasswordGenerator.css";

export default function PasswordGenerator() {
  const [progress, setProgress] = useState(25);
  const [checkboxes, setCheckboxes] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const handlechange = (e) => {
    setProgress(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+=";

    let validChars = "";
    if (checkboxes.uppercase) validChars += uppercaseChars;
    if (checkboxes.lowercase) validChars += lowercaseChars;
    if (checkboxes.numbers) validChars += numberChars;
    if (checkboxes.symbols) validChars += symbolChars;

    let password = "";
    for (let i = 0; i < progress; i++) {
      password += validChars.charAt(
        Math.floor(Math.random() * validChars.length)
      );
    }
    setGeneratedPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePassword();
  };

  const trackStyle = {
    background: `linear-gradient(to right, #A5FFAF ${progress}%, white ${progress}%)`,
  };

  return (
    <div className="flex justify-center items-center bg-black min-h-screen">
      <div className="w-80 min-h-28 font-oswald">
        <p className="text-slate-500 text-center">Password Generator</p>
        <div className="bg-gray-900 p-3 py-1 w-full mt-5">
          <p className="text-slate-300 text-sm font-base">
            {generatedPassword || "dfhjgshd"}
          </p>
        </div>
        <div className="bg-gray-900 p-3 w-full mt-3">
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-300 font-light">
              character length
            </p>
            <p className="text-light-green">{progress}</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full mt-2">
            <input
              type="range"
              value={progress}
              onChange={handlechange}
              className="w-full"
              style={trackStyle}
              min="1"
              max="100"
            />
            {Object.entries(checkboxes).map(([key, value]) => (
              <div key={key} className="mt-1 flex items-center">
                <input
                  type="checkbox"
                  name={key}
                  checked={value}
                  onChange={handleCheckboxChange}
                  className=""
                />
                <label className="ml-3 text-sm text-slate-300 font-light">
                  {`Include ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                </label>
              </div>
            ))}
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
