import axios from "axios";
import { useEffect } from "react";

function Fetching() {

  const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=20&apiKey=50ee585bf1364c1db2d0b89b0b504a7b`;

  useEffect(() => { 
    async function fetchingApi() {
      const response = await axios.get(url);
      console.log(response);
    };
    fetchingApi();
  }, []);

  return (
    <>
      <h1>Vanshaj</h1>
    </>
  )
};
export default Fetching;