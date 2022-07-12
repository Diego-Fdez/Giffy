const apiId = import.meta.env.VITE_API_KEY;

const fromApiResponseToGif = (apiResponse) => {
  const { data } = apiResponse;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { title, id, url };
};

export default function getSingleGif({ id }) {
  const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiId}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGif);
}
