const fs = require("fs");
const path = require("path");

// public/images/blog ga to'liq yo'l
const blogImagesDir = path.resolve(__dirname, "../../public/images/blog");

// Ruxsat berilgan rasm formatlari
const imageExtensions = /\.(jpg|jpeg|png)$/i;

// Fayllarni filtrlash va URLga aylantirish
const files = fs.readdirSync(blogImagesDir)
  .filter(file => imageExtensions.test(file))
  .map(file => `/images/blog/${file}`);

// JS formatda content yozish
const jsContent = `export const blogImages = ${JSON.stringify(files, null, 2)};\n`;

// Faylni yozish
fs.writeFileSync(path.resolve(__dirname, "../data/blogImages.js"), jsContent);

console.log("✅ blogImages.js created with", files.length, "images.");
