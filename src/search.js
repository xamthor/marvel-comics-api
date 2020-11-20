import axios from "axios";

async function search(name = "spider"){
    // Main endpoint
    let struct = "https://gateway.marvel.com/v1/public"
    // character endpoint
    let character = `characters`;
    // combining struct and character with the name para
    let url = `${struct}/${character}?nameStartsWith=${name}`;

    try{
        // axios call to the url
        const results = await axios.get(url, {
            params: {
            "apikey": process.env.publicapikey,
            }
        });
        // return results object array
        return results.data.data.results;
    }
    catch(err){
        console.log('err :>> ', err);
    }

}

async function searchmain(string){
    // assign object from search function to character
    let character = await search(string);
    // access the html searchresults id 
    let basic = document.getElementById('seacrchresults');
    // empty string to hold html
    let stringcom = '';

    // console.log('character :>> ', character);
    // iterated through the character array
    character.forEach(element => {
        let img = `<img  class="h-80 object-cover w-full rounded-lg" src="${element.thumbnail.path}.${element.thumbnail.extension}">`;

        stringcom += `
                <div class="bg-white lg:mx-8 lg:grid grid-cols-2 lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                    <div class="">
                    ${img}
                    </div>
                    <div class="py-12 px-6">
                        <h2 class="text-3xl text-gray-800 font-bold">${element.name}</h2>
                        <p class="mt-4 text-gray-600 text-left">${element.description}</p>
                    </div>
                </div> `;
    });
    // update searchresults with new hmtl code 
    basic.innerHTML = stringcom;
}

export { searchmain }; 
