const apiId = import.meta.env.VITE_API_KEY;

export default async function getGifs({
  limit = 25,
  keyword = 'morty',
  rating = 'g',
  page = 0,
} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiId}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      const gifs = data.map((image) => {
        const { title, id } = image;
        const { url } = image.images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
