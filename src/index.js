import _ from 'lodash';
import {main} from "./comics";
import {searchmain} from "./search";


document.addEventListener("DOMContentLoaded", function() {

  // main();

  const selectElement = document.querySelector('#search');

  selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('#search').value;
    searchmain(result);
  });

});