import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const NotFound = () => {
  const location = useLocation();
  const [joke, setJoke] = useState(null);
  const [dogImage, setDogImage] = useState(null);

  // Fetch a random computer science joke and dog image
  useEffect(() => {
    const fetchJokeAndDogImage = async () => {
      try {
        // Fetching a random computer science joke
        const jokeResponse = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=single");
        setJoke(jokeResponse.data.joke);

        // Fetching a random dog image
        const dogResponse = await axios.get("https://dog.ceo/api/breeds/image/random");
        setDogImage(dogResponse.data.message);  // Dog image URL
      } catch (error) {
        console.error("Error fetching joke or dog image:", error);
      }
    };

    fetchJokeAndDogImage();

    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        
        {/* Displaying joke */}
        <p className="mb-4 text-xl text-gray-600">{joke ? joke : "Loading a joke..."}</p>
        
        {/* Displaying dog image */}
        <div className="mb-4">
          {dogImage ? (
            <img src={dogImage} alt="Random Dog" className="w-64 h-64 object-cover rounded-lg" />
          ) : (
            <p>Loading dog image...</p>
          )}
        </div>

        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
