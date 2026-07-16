import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017"
)
const db = client.db("doc-appoint");

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    basePath: "/api/auth",
    secret: process.env.BETTER_AUTH_SECRET || "doc-appoint-development-secret-change-me",
    trustedOrigins: [
        "http://localhost:3000",
        "https://doc-appoint-client-siam-17.vercel.app",
    ],
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }
    },
    database: mongodbAdapter(db, {

    }),
    account: {
        accountLinking: {
            enabled: true,
            trustedProviders: ["google", "email"],
        }
    }

})
