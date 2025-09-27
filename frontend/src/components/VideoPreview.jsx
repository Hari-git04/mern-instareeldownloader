import React from "react";

function VideoPreview({ videoUrl }) {
  if (!videoUrl) return null;

  const handleDownload = async () => {
    try {
    const response = await fetch(videoUrl);
     const blob = await response.blob();
     const url = window.URL.createObjectURL(blob);
     const a = document.createElement("a");
      a.href = url;
      a.download = "instagram-reel.mp4"; 
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  font-mono">

      <div className="bg-white p-4 rounded-xl shadow-md">
      <video
      controls
      className="rounded-lg w-[300px] h-[500px] object-cover" >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
        </video>
      </div>
     <button
  onClick={handleDownload}
  className="mt-6 px-8 py-3 rounded-lg text-white font-bold 
             bg-gradient-to-r from-blue-500 to-indigo-600 
             hover:from-blue-600 hover:to-indigo-700 
             active:scale-95 active:shadow-inner
             transition-all duration-200 shadow-lg cursor-pointer">
  Download Video
</button>

    </div>
  );
}
export default VideoPreview;


