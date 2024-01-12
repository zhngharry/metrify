export const handleLogin = () => {
  const clientID = "887375b1455e411d83c6aa44fbeb9f00";
  const redirectURL = "http://localhost:3000";
  const scope = "user-read-private user-read-email";

  window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURL}&scope=${scope}`;
};
