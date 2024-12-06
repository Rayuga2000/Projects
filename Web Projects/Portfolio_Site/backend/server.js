import fs from 'fs'
import path from 'path'
import express from 'express';
import nodemailer from 'nodemailer'
import { send } from 'vite';

const app = express();
const port = 3000;

// file operation
function getFile(directoryPath) {
    const filenames = [];
    const entries = fs.readdirSync(directoryPath);

    for (const entry of entries) {
        const fullPath = path.join(directoryPath, entry);

        filenames.push(fullPath);
    }
    
    return filenames;
}

app.get('/server', (req, res) => {
    const folderPath = '../public/certificates';
    try {
        const files = getFile(folderPath);        
        res.send(files);
    } catch (error) {
        res.status(500)
    }
});

// email operation
app.use(express.json());

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));