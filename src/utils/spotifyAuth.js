export const generateRandomString = (length) => {
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
  const clientID = "887375b1455e411d83c6aa44fbeb9f00";
  const redirectURL = "http://localhost:3000/redirect";
  const scope = "user-read-private user-read-email";

  window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURL}&scope=${scope}&state=${state}`;
};
