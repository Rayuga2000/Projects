import { Client, Storage } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_END_POINT)
    .setProject(import.meta.env.VITE_PROJECT_ID);

const storage = new Storage(client);

const result = await storage.listFiles(
    import.meta.env.VITE_BUCKET_ID,
);

let images = []

result.files.map(item => {
    images.push(storage.getFileView(item.bucketId,item.$id));
    
})
  
export default images

