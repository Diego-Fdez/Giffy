const apiId = import.meta.env.VITE_API_KEY;

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default async function getTrendingTerms() {
  const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${apiId}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
