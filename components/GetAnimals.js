import { useEffect, useState, useContext } from "react";
import AnimalsResults from './AnimalsResults'
import { AuthContext } from "../pages/_app";

function GetAnimals({animalType}) {
  const [results, setResults] = useState(null);
  const accessToken = useContext(AuthContext);
  useEffect(() => {
    if (accessToken === null) return;
    const fetchPets = async () => {
      const animalResults = await fetch(
        `https://api.petfinder.com/v2/animals?type=${animalType}`,
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
      <AnimalsResults results={results} />
  );
};

export default GetAnimals;