const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/download", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const options = {
      method: "GET",
      url: "https://insta-reels-downloader-the-fastest-hd-reels-fetcher-api.p.rapidapi.com/index",
      params: { url },
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.RAPIDAPI_HOST,
      },
    };

    const response = await axios.request(options);
    

    const videoUrl = response.data?.data?.content?.media_url;

    if (!videoUrl) {
      return res.status(404).json({ error: "No video URL found", raw: response.data });
    }
    res.json({ videoUrl });
  } 
  catch (error) {
    console.error("Error fetching video:", error.response?.data || error.message);
    res.status(500).json({
      error: "Failed to fetch video",
      details: error.response?.data || error.message,
    });
  }
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
