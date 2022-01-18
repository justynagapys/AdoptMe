const petFinderKey ="pxnVY3m8iAKKBwqc7ilpOZHZN0GK5QSGejxwg7nbpZ4Nrw3A6P";
const petFinderSecretKey = "TERyH4Xa1pQ9ly8kpa1eD4bWQWUEgLCO7etNQmxW";
export default async (req, res) => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", petFinderKey);
  params.append("client_secret", petFinderSecretKey);
  const petFinderRes = await fetch(
    "https://api.petfinder.com/v2/oauth2/token",
    {
      method: "POST",
      body: params,
    }
  );
  const data = await petFinderRes.json();
  res.send(data);
};