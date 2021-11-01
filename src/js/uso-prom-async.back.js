
//import {promesaLenta, promesaMedia, promesaRapida} from './js/promesas';
import {buscarHeroe, buscarHeroeAsync} from './js/promesas';

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);


// Sólo aparece la primera que termina, 
// si no se usa catch, será la primera que termina de manera EXITOSA.
// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch(console.warn);


buscarHeroe('capi2').then(console.log)
    .catch(console.warn);
buscarHeroeAsync('iron2').then(console.log)
    .catch(console.warn);