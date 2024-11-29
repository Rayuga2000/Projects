import fs from 'fs'
import path from 'path'
import express from 'express';

const app = express();
const port = 3000;

function getFile(directoryPath) {
    const filenames = [];
    const entries = fs.readdirSync(directoryPath);

    for (const entry of entries) {
        const fullPath = path.join(directoryPath, entry);

        filenames.push(fullPath);
    }
    
    return filenames;
}

app.get('/files', (req, res) => {
    const folderPath = '../public/certificates';
    try {
        const files = getFile(folderPath);
        // res.json({ files });
        res.send(files);
    } catch (error) {
        res.status(500)
    }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));