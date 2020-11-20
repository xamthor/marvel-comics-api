import axios from "axios";

let comicId = 550;
let string = `/v1/public/comics/${comicId}/characters`;
let character = `/v1/public/characters`;

let url = `https://gateway.marvel.com${string}`;

async function getChar(){

  try{

    const results = await axios.get(url, {
      params: {
        "apikey": process.env.publicapikey,
      }
    });
    return results.data.data.results;
  }
  catch(err){
    console.log('err :>> ', err);
  }

}

async function main(){

  let character = await getChar();

  let basic = document.getElementById('character');

  // console.log('character :>> ', character);
  let extension = character[0].thumbnail.extension;
  let path = character[0].thumbnail.path;
  let thumburl = `${path}.${extension}`;
  // console.log(character[0].thumbnail);
  // console.log(thumburl);
  // console.log('character[0].name :>> ', character[0].name);
  // console.log(basic);
  
  basic.innerHTML = `${character[0].name} <img class="h-48 w-auto rounded-lg" src="${thumburl}">`;

}


export { main }; 
