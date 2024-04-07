const API_KEY = '10fdf75b';

@param {string} json 
@returns {object} 

const myFunction = async (...params) => {
  try {
    const url = new URL('http://www.omdbapi.com/');
    url.searchParams.append('apikey', API_KEY);
    params.forEach((param) => {
      url.searchParams.append(param.name, param.value);
    });

    const response = await fetch(url.toString());
    const data = await response.json();

    if (data.Error) {
      throw new Error(data.Error);
    }

    return data;
  } catch (error) {
    throw error;
  }
};




export const searchMovies = async (title) => {
  const params = [{ name: 's', value: title }];
  const results = await myFunction(...params);
  return results;
};

export const getMovieById = async (id) => {
  const params = [{ name: 'i', value: id }];
  const results = await myFunction(...params);
  console.log(results)
  return results;
};
