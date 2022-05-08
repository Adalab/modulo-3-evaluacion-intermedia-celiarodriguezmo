/*  */

const getDataApi = () => {
  return fetch(
    "https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((item) => {
        return {
          quote: item.quote,
          character: item.character,
        };
      });
      return cleanData;
    });
};
export default getDataApi;
