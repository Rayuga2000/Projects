import fs from 'fs'
import path from 'path'
import express from 'express';
import nodemailer from 'nodemailer'

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

// async function mail() {
//     await transporter.sendMail({
//         from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//         to: "tsarkar431@gmail.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     })
// }

// app.post('/server', (req, res) => {
//     fs.readFileSync('./mail_client_secret.json', 'utf-8', (err, data) => {
//         if (err)
//             console.log(err)

//         data = data.json()        
//         console.log(data);
//     })

    // const transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 587,
    //     secure: false, // true for port 465, false for other ports
    //     auth: {
    //       user: import.meta.env.VITE_MAIL_SECRET.web.client_id,
    //       pass: import.meta.env.VITE_MAIL_SECRET.web.client_secret,
    //     },
    // });


    // try {        
    //     mail()

    // } catch {
    //     res.status(500)
    // }
// })

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));