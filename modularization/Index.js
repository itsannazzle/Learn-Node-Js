import moment from 'moment';
import{ Tiger}  from './Tiger.js';
import{ Wolf }  from './Wolf.js';

const date = moment().format("MMMM Do YYYY");
console.log(date);

const fighting = (tiger, wolf ) => {
    
    if(tiger.strength > wolf.strength){
        tiger.growl();
        return;
    }

    if(tiger.strength < wolf.strength){
        wolf.howl();
        return;
    }
    if(tiger.type == "carnivore"){
        console.log(`${tiger.type}`);
        return;
    }
    

    console.log('Equal strength!');
}
const tiger = new Tiger();
const wolf = new Wolf();
fighting(tiger,wolf)