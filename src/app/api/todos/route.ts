import { NextResponse } from "next/server";

const client_id: string = process.env.CLIENT_ID as string;

export const generateRandomString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
};

export const handleLogin = () => {
  const state = generateRandomString(16);
  const clientID = client_id;
  const redirectURL = "http://localhost:3000/redirect";
  const scope = "user-read-private user-read-email";

  window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURL}&scope=${scope}&state=${state}`;
};
