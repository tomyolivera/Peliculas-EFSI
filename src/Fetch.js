import axios from "axios";

const api_key = "8cbcae6e6a57f619c72f01584c61e53c";

export const obtenerPeliculaPorTipo = async tipo => await axios.get(`https://api.themoviedb.org/3/movie/${tipo}?api_key=${api_key}&language=en-US&page=1`);
export const obtenerPeliculaPorId = async id => await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`);
export const obtenerPeliculaPorTipoYFiltro = async (tipo, filtro) => await axios.get(`https://api.themoviedb.org/3/movie/${tipo}?api_key=${api_key}&group=${filtro}&language=en-US`);
