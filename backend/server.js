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

/**
 * Uses OpenAI to generate fixes for detected issues.
 */
const generateFix = async (issue) => {
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are an expert web developer." },
                { role: "user", content: `Fix this issue in a React.js project: ${issue}` }
            ]
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Error generating fix:", error.message);
        return null;
    }
};

/**
 * Applies the fixes by modifying relevant files.
 */
const applyFixes = async (issues) => {
    let fixesApplied = [];

    for (const issue of issues) {
        const fixCode = await generateFix(issue);
        if (fixCode) {
            console.log(`✅ Fix generated for: ${issue}`);
            fs.appendFileSync("./src/Fixes.js", `\n// Fix: ${issue}\n${fixCode}\n`);
            fixesApplied.push(fixCode);
        }
    }

    return fixesApplied;
};

/**
 * Runs the scanning and fixing process every hour.
 */
const runAutoFixer = async () => {
    const issues = await scanWebsite();
    if (issues.length > 0) {
        console.log("⚠️ Issues detected:", issues);
        const fixes = await applyFixes(issues);
        console.log("✅ Fixes applied successfully!");
        return fixes;
    } else {
        console.log("🎉 No issues detected!");
        return [];
    }
};

// Run auto-fixer every hour
setInterval(runAutoFixer, 60 * 60 * 1000); // 1 hour interval

// API Endpoint to get applied fixes
app.get("/fixes", (req, res) => {
    if (fs.existsSync("./src/Fixes.js")) {
        res.send(fs.readFileSync("./src/Fixes.js", "utf8"));
    } else {
        res.send("No fixes applied yet.");
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
