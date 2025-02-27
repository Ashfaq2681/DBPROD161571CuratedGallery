require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require('./routes/user');
const path=require('path')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.static('uploads'))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/user", userRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //port
    app.listen(process.env.PORT, () => {
      console.log("Db connected and On port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

*//open ai bot to scan website
require("dotenv").config();
const express = require("express");
const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const PORT = 5000;
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

const WEBSITE_URL = "http://localhost:3000"; // Your private React website URL

app.use(express.json());

/**
 * Scrapes the website HTML and detects common issues.
 */
const scanWebsite = async () => {
    try {
        console.log(`🔍 Scanning ${WEBSITE_URL}...`);
        const response = await axios.get(WEBSITE_URL);
        const $ = cheerio.load(response.data);
        let issues = [];

        // Check for broken links
        $("a").each((_, link) => {
            const href = $(link).attr("href");
            if (!href || href.startsWith("#")) {
                issues.push(`Broken link: ${href}`);
            }
        });

        // Check for missing images
        $("img").each((_, img) => {
            if (!$(img).attr("src")) {
                issues.push("Missing image detected");
            }
        });

        return issues;
    } catch (error) {
        console.error("Error scanning website:", error.message);
        return [];
    }
};


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
