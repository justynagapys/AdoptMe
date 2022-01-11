import Layout from '../components/Layout'
import { useEffect, useState, useContext } from "react";
import AnimalsResults from '../components/AnimalsResults';
import { AuthContext } from "../pages/_app";

export default function App() {
  const [results, setResults] = useState(null);
  const accessToken = useContext(AuthContext);
  useEffect(() => {
    if (accessToken === null) return;
    const fetchPets = async () => {
      const animalResults = await fetch(
        `https://api.petfinder.com/v2/animals`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const json = await animalResults.json();
      setResults(json.animals);
    };
    fetchPets();
  }, [accessToken]);
  if (results === null) return null;
  return(
    <Layout>
      <AnimalsResults results={results} />
    </Layout>
  );
};
