// enforces that this code can only be called on the server
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
import "server-only";

// Next.js cookies helper to get cookies from the request
import { cookies } from "next/headers";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import { initializeServerApp, initializeApp } from "firebase/app";

// Firebase Auth SDK to manage users and authentication
import { getAuth } from "firebase/auth";

// Returns an authenticated client SDK instance for use in Server Side Rendering
// and Static Site Generation
export async function getAuthenticatedAppForUser() {
  const authIdToken = (await cookies()).get("__session")?.value;

const firebaseConfig = {
  apiKey: "AIzaSyAku0Q6ZIhi54g3qfqZdRJ8be3mfm6sF3k",
  authDomain: "week09---10.firebaseapp.com",
  projectId: "week09---10",
  storageBucket: "week09---10.firebasestorage.app",
  messagingSenderId: "597020325861",
  appId: "1:597020325861:web:635627a75d1f007d60a10c",
  measurementId: "G-DGE3CE2KRK"
};




  // Firebase Server App is a new feature in the JS SDK that allows you to
  // instantiate the SDK with credentials retrieved from the client & has
  // other affordances for use in server environments.
  const firebaseServerApp = initializeServerApp(
    // https://github.com/firebase/firebase-js-sdk/issues/8863#issuecomment-2751401913
    initializeApp(firebaseConfig),
    {
      authIdToken,
    }
  );

  const auth = getAuth(firebaseServerApp);
  await auth.authStateReady();

  return { firebaseServerApp, currentUser: auth.currentUser };
}