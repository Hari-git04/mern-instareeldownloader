import React, { useState } from "react";

function InputGet({ onFetch }) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGet = async () => {
    if (!url) return;
    setIsLoading(true);
    await onFetch(url); 
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto font-mono mt-20">
    <div className="flex flex-col md:flex-row w-full gap-2 justify-center">
    <input
      type="text"
      id="reelUrl"
      name="reelUrl" 
      placeholder="Paste Instagram reel URL"
      className="input input-bordered border-2 border-gray-400 flex-1 rounded-md px-3 py-2"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
        />
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer transition"
          onClick={handleGet}>
          Get
        </button>
      </div>

      {isLoading && (
        <p className="mt-4 text-gray-600 font-mono">Loading video...</p>
      )}
    </div>
  );
}
export default InputGet;

