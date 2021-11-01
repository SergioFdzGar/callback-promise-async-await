
import './styles.css';
import {buscarHeroe as buscarHeroeCallbacks} from './js/callbacks'
import {buscarHeroe} from './js/promesas'

const heroeId_01 = 'capi';
const heroeId_02 = 'spider';

// Código con callbacks
//BLOQUEA la ejecución de código restante.
// buscarHeroe( heroeId_01, (err, heroe_01) => {
    
//     if (err) return console.error(err);
    

//     buscarHeroe(heroeId_02, (err, heroe_02) => {
//         if (err) return console.error(err);
        
//         console.log(`Enviando a ${ heroe_01.nombre } y ${ heroe_02.nombre } a la misión.`);
//     });
    
// } );


//NO BLOQUEA la ejecución de código restante mientras que realiza la promesa
// buscarHeroe( heroeId_01).then(heroe_01 => {
//     //console.log(`Enviando a ${ heroe.nombre } a la misión.`)
//     buscarHeroe( heroeId_02).then(heroe_02 => {
//         console.log(`Enviando a ${ heroe_01.nombre } y ${ heroe_02.nombre } a la misión.`);
//     })
// });

Promise.all([buscarHeroe(heroeId_01), buscarHeroe(heroeId_02)])
    .then(([heroe_01, heroe_02]) => {
    console.log(`Enviando a ${ heroe_01.nombre } y ${ heroe_02.nombre } a la misión.`);
}).catch(err =>{
    alert(err)
}).finally( () => {
    console.log(`Terminó el Promise.all.`);
});

console.log('Fin del programa.');