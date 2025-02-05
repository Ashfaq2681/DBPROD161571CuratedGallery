const express = require('express');
const multer = require('multer');
const { createWorker } = require('tesseract.js');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Store uploaded images temporarily

// Endpoint to handle image uploads
app.post('/extract-text', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }

    const worker = createWorker();
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    const { data: { text } } = await worker.recognize(req.file.path);
    await worker.terminate();

    res.json({ extractedText: text });
  } catch (error) {
    console.error('Error extracting text:', error);
    res.status(500).json({ error: 'Failed to extract text from the image' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Welcome to the OCR Backend Service!');
  });