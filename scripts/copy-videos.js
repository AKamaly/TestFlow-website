const fs = require('fs');
const path = require('path');

// Define source and destination directories
const sourceDir = path.join(__dirname, '../public/video');
const destDirs = [
  path.join(__dirname, '../out/video'),
  path.join(__dirname, '../out/static/media')
];

// Create destination directories if they don't exist
destDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log('Created destination directory:', dir);
  }
});

// Copy all files from source to destinations
try {
  const files = fs.readdirSync(sourceDir);
  
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    
    // Check if it's a file (not a directory)
    if (fs.statSync(sourcePath).isFile()) {
      // Copy to all destination directories
      destDirs.forEach(destDir => {
        const destPath = path.join(destDir, file);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied ${file} to ${destDir}`);
      });
    }
  });
  
  console.log('All video files copied successfully!');
} catch (error) {
  console.error('Error copying video files:', error);
} 