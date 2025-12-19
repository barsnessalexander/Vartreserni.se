import { DESTINATION_IMAGES, DESTINATION_CATEGORIES } from '../constants';

export const getRandomImage = (destination) => {
  let imageArray;

  if (DESTINATION_CATEGORIES.mediterraneanBeaches.includes(destination)) {
    imageArray = DESTINATION_IMAGES.mediterranean_beach;
  } else if (DESTINATION_CATEGORIES.partyBeaches.includes(destination)) {
    imageArray = DESTINATION_IMAGES.party_beach;
  } else if (DESTINATION_CATEGORIES.coastalCities.includes(destination)) {
    imageArray = DESTINATION_IMAGES.coastal_city;
  } else if (DESTINATION_CATEGORIES.europeanCities.includes(destination)) {
    imageArray = DESTINATION_IMAGES.european_city;
  } else if (DESTINATION_CATEGORIES.resortBeaches.includes(destination)) {
    imageArray = DESTINATION_IMAGES.resort_beach;
  } else if (DESTINATION_CATEGORIES.asianBeaches.includes(destination)) {
    imageArray = DESTINATION_IMAGES.asian_beach;
  } else if (DESTINATION_CATEGORIES.carribean.includes(destination)) {
    imageArray = DESTINATION_IMAGES.carribean_beach;
  } else if (DESTINATION_CATEGORIES.asiancity.includes(destination)) {
    imageArray = DESTINATION_IMAGES.asian_city;
  } else if (DESTINATION_CATEGORIES.brokecity.includes(destination)) {
    imageArray = DESTINATION_IMAGES.broke_city;
  } else if (DESTINATION_CATEGORIES.zakynthos.includes(destination)) {
    imageArray = DESTINATION_IMAGES.zakynthos_pics;
  } else if (DESTINATION_CATEGORIES.magaluf.includes(destination)) {
    imageArray = DESTINATION_IMAGES.magaluf_pics;
  } else if (DESTINATION_CATEGORIES.ayianapa.includes(destination)) {
    imageArray = DESTINATION_IMAGES.ayianapa_pics;
  } else if (DESTINATION_CATEGORIES.kos.includes(destination)) {
    imageArray = DESTINATION_IMAGES.kos_pics;
  } else if (DESTINATION_CATEGORIES.rhodos.includes(destination)) {
    imageArray = DESTINATION_IMAGES.rhodos_pics;
  } else if (DESTINATION_CATEGORIES.split.includes(destination)) {
    imageArray = DESTINATION_IMAGES.split_pics;
  } else if (DESTINATION_CATEGORIES.barcelona.includes(destination)) {
    imageArray = DESTINATION_IMAGES.barcelona_pics;
  } else if (DESTINATION_CATEGORIES.kreta.includes(destination)) {
    imageArray = DESTINATION_IMAGES.kreta_pics;
  } else if (DESTINATION_CATEGORIES.nice.includes(destination)) {
    imageArray = DESTINATION_IMAGES.nice_pics;
  } else if (DESTINATION_CATEGORIES.Palma.includes(destination)) {
    imageArray = DESTINATION_IMAGES.palma_pics;
  } else if (DESTINATION_CATEGORIES.malta.includes(destination)) {
    imageArray = DESTINATION_IMAGES.malta_pics;
  } else if (DESTINATION_CATEGORIES.ibiza.includes(destination)) {
    imageArray = DESTINATION_IMAGES.ibiza_pics;
  } else if (DESTINATION_CATEGORIES.alicante.includes(destination)) {
    imageArray = DESTINATION_IMAGES.alicante_pics;
  } else if (DESTINATION_CATEGORIES.malaga.includes(destination)) {
    imageArray = DESTINATION_IMAGES.malaga_pics;
  } else if (DESTINATION_CATEGORIES.valtho.includes(destination)) {
    imageArray = DESTINATION_IMAGES.valtho_pics;
  } else if (DESTINATION_CATEGORIES.ischgl.includes(destination)) {
    imageArray = DESTINATION_IMAGES.ischgl_pics;
  } else if (DESTINATION_CATEGORIES.are.includes(destination)) {
    imageArray = DESTINATION_IMAGES.are_pics;
  } else if (DESTINATION_CATEGORIES.valdi.includes(destination)) {
    imageArray = DESTINATION_IMAGES.valdi_pics;
  } else if (DESTINATION_CATEGORIES.chami.includes(destination)) {
    imageArray = DESTINATION_IMAGES.chami_pics;
  } else if (DESTINATION_CATEGORIES.cervinia.includes(destination)) {
    imageArray = DESTINATION_IMAGES.cervinia_pics;
  } else if (DESTINATION_CATEGORIES.stanton.includes(destination)) {
    imageArray = DESTINATION_IMAGES.stanton_pics;
  } else if (DESTINATION_CATEGORIES.deux.includes(destination)) {
    imageArray = DESTINATION_IMAGES.deux_pics;
  } else if (DESTINATION_CATEGORIES.skidestinations.includes(destination)) {
    imageArray = DESTINATION_IMAGES.ski_pics;
  } else {
    imageArray = DESTINATION_IMAGES.coastal_city; // Default to coastal city images
  }

  return imageArray[Math.floor(Math.random() * imageArray.length)];
};
