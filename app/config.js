import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    url: process.env.DB_CLIENT_URL,
    collection: "members",
    name: "gym",
  },
  port: process.env.port || 3000,
};
