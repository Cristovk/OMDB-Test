import {Constants} from 'expo-constants'

async function fetchData(params) {
  try {
    // Validar si params es un objeto
    if (typeof params !== 'object') {
      throw new Error('Se esperaba un objeto como entrada.');
    }

    // Extraer la URL de la variable de entorno
    const apiUrl = 'http://www.omdbapi.com/?apikey=10fdf75b&';

    // Construir la URL con los parámetros
    const url = new URL(apiUrl);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    let urlStr = url.toString()
    console.log(urlStr)
    // Realizar la solicitud a la API
    const response = await fetch(urlStr);
    const data = await response.json();

    // Verificar si hay un error en la respuesta
    if (data.Error) {
      throw new Error(data.Error);
    }

    // Retornar la información de la película
    return data;
  } catch (error) {
    throw error;
  }
}


export async function searchMovies(title, options = {}) {
  const params = {
    s: title,
    ...options,
  };
  // Validar parámetros opcionales
  if (options.type && !['movie', 'series', 'episode'].includes(options.type)) {
    throw new Error('Tipo de contenido no válido.');
  }
  if (options.year && isNaN(options.year)) {
    throw new Error('El año debe ser un número.');
  }
  if (options.page && isNaN(options.page)) {
    throw new Error('La página debe ser un número.');
  }
  return await fetchData(params);
}




export async function getMovieById(id, options = {}) {
  const params = {
    i: id,
    ...options,
  };
  // Validar parámetros opcionales
  if (options.type && !['movie', 'series', 'episode'].includes(options.type)) {
    throw new Error('Tipo de contenido no válido.');
  }
  if (options.plot && !['short', 'full'].includes(options.plot)) {
    throw new Error('El tipo de trama debe ser "short" o "full".');
  }
  let returnData =  await fetchData(params);
  // let cleanMovieData = removeQuotesFromKeys(returnData)
  return returnData
}

const removeQuotesFromKeys= (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key.replace(/"/g, ''), value])
  );
}