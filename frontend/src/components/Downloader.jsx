import React, { useState } from "react";
import InputGet from "./InputGet";

function Downloader({ onVideoReady }) {
  const handleFetch = async (url) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";
  onVideoReady(videoUrl);
  };
  return <InputGet onFetch={handleFetch} />;
}

export default Downloader;
