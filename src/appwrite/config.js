import { Databases,Client } from "appwrite";

const client = new Client();
client
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject(process.env.REACT_APP_PROJECT_ID);

export const database=new Databases(client);