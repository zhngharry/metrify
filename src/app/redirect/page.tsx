"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function RedirectPage() {
  const params = useSearchParams();

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    // Extract necessary codes from the query parameters

    // Perform any additional logic (e.g., exchange code for access token with Spotify)
    // ...

    console.log(params);

    // Redirect the user to the profile page
    // window.location.href = "/profile";
  }, [params]);

  return (
    <>
      <h1>Redirecting...</h1>
    </>
  );
}
