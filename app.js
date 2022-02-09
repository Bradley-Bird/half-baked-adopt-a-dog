import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
async function fetchDogs() {
    // fetch all dogs
    const dogs = await getDogs();
    // console.log('hello', dogs);
    // render and append all dog cards to the container
    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);

        dogListContainer.append(dogEl);
    }
}
fetchDogs();
