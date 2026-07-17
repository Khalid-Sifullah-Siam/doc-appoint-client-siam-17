import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017"
)
const db = client.db("doc-appoint");

const getOrigin = (value) => {
    if (!value) return null;

    try {
        const url = value.startsWith("http") ? value : `https://${value}`;
        return new URL(url).origin;
    } catch {
        return null;
    }
};

const appURL =
    getOrigin(process.env.BETTER_AUTH_URL) ||
    getOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
    getOrigin(process.env.VERCEL_URL) ||
    "http://localhost:3000";

const trustedOrigins = [
    "http://localhost:3000",
    appURL,
    getOrigin(process.env.NEXT_PUBLIC_BETTER_AUTH_URL),
    getOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL),
    getOrigin(process.env.VERCEL_URL),
].filter(Boolean);

export const auth = betterAuth({
    baseURL: appURL,
    basePath: "/api/auth",
    secret: process.env.BETTER_AUTH_SECRET || "doc-appoint-development-secret-change-me",
    trustedOrigins: [...new Set(trustedOrigins)],
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
