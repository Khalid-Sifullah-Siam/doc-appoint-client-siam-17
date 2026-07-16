import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
    // Better Auth validates this as an absolute URL during SSR as well.
    baseURL:
        process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
        process.env.BETTER_AUTH_URL ||
        "http://localhost:3000/api/auth"
})

export const {signIn, signUp,signOut, useSession} = authClient();
