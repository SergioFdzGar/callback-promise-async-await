import {obtenerHeroresArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait} from './js/await';

// Sin Await
//const heroes = obtenerHeroresArr();
//console.table(heroes);

//Con await
//obtenerHeroresArr().then(console.table);

//Modificación para el ProTip del uso de AWAIT
// console.time('await');
// obtenerHeroresArr().then( heroes => {
//     console.table(heroes);

//     console.timeEnd('await');
// });


// Manejo de errores en el await
// console.time('await');
// obtenerHeroeAwait('capi2').then( heroe => {
//     console.log(heroe);
//     console.timeEnd('await');
// }).catch(err => console.error(err));

//heroesCiclo();
heroeIfAwait('iron');
