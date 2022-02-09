import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
async function fetchDog() {
    // get the id from URL
    const params = new URLSearchParams(window.location.search);
    // console.log('params', params.get('id'));
    // use the id to fetch the dog
    const dogId = await getDog(params.get('id'));
    // console.log('dogId', dogId);
    // render and append this dog's details to the container
    const dogEl = renderDogDetail(dogId);
    dogDetailContainer.append(dogEl);
}
fetchDog();
