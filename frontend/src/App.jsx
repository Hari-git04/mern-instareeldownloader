import React, { useState } from "react";
import Navbar from "./components/Navbar";
import InputGet from "./components/InputGet";
import VideoPreview from "./components/VideoPreview";

function App() {
  const [videoUrl, setVideoUrl] = useState(null);

 const fetchVideo = async (url) => {
  if (!url) {
    alert("Please enter a valid Instagram URL");
    return;
  }
  try {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const res = await fetch(`${apiUrl}/api/download`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    if (data.videoUrl) {
      setVideoUrl(data.videoUrl);
    } else {
      console.error("No video URL in response:", data);
    }
  } catch (err) {
    console.error("Error fetching video:", err);
  }
 };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
      <InputGet onFetch={fetchVideo} />
      <VideoPreview videoUrl={videoUrl} />
      </main>
    </div>
  );
}
export default App;
