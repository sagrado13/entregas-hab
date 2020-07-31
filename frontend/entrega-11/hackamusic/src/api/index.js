import config from "./config.js";
const axios = require("axios").default;

const apiKey = config.apiKey;
const URL_BASE = `https://ws.audioscrobbler.com/`;
const URL_ARTISTS_GEO = `2.0/?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`;
const URL_TRACKS_GEO = `2.0/?method=geo.gettoptracks&country=spain&api_key=${apiKey}&format=json`;
const URL_TAGS = `2.0/?method=chart.gettoptags&api_key=${apiKey}&format=json`;

// FUNCIÓN PARA CONSEGUIR TOP ARTISTAS DE ESPAÑA
async function getArtistsSpain() {
  try {
    const response = await axios.get(`${URL_BASE}${URL_ARTISTS_GEO}`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// FUNCIÓN PARA CONSEGUIR TOP TRACKS DE ESPAÑA
async function getTopTracksSpain() {
  try {
    const response = await axios.get(`${URL_BASE}${URL_TRACKS_GEO}`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// FUNCIÓN PARA CONSEGUIR TOP TRACKS DE ESPAÑA
async function getTopTags() {
  try {
    const response = await axios.get(`${URL_BASE}${URL_TAGS}`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// EXPORTANDO FUNCIONES
export default {
  getArtistsSpain,
  getTopTracksSpain,
  getTopTags,
};
