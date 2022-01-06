import { useEffect, useState, useContext } from "react";
import Layout from '../components/Layout'
import AnimalsResults from '../components/AnimalsResults'
import { AuthContext } from "./_app";

export default function Home() {
  const [results, setResults] = useState(null);
  const accessToken = useContext(AuthContext);
  useEffect(() => {
    if (accessToken === null) return;
    const fetchPets = async () => {
      const animalResults = await fetch(
        "https://api.petfinder.com/v2/animals",
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

      {/* / => AnimalsResults results={results}
      /dogs => AnimalsResults results={+type=dogs}
      /cats => .... cats
      ...
      * => NotFound */}

    </Layout>
  );
};
