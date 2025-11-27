import axios from "axios";
const API_KEY = "e6383fa1";
const IMDBData = axios.create({
  baseURL: "https://www.omdbapi.com/",
});
export const FetchIMDBData = async (page = 1) => {
  return await IMDBData.get("/", {
    params: {
      apikey: API_KEY,
      s: "search",
      type: "movie",
      page:page 
    
    },
  });
};
