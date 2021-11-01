import { buscarHeroeAsync, buscarHeroe } from "./promesas";


const heroesIds = ['capi','iron','spider'];
const heroesPromesas = heroesIds.map( buscarHeroe );

// Sin asnyc
//export const obtenerHeroresArr = () => {
// export const obtenerHeroresArr = async() => {
//     const heroesArr = [];

//     for(const id of heroesIds){
//         // Hay que esperar a la respuesta.
//         //buscarHeroeAsync(id).then(heroe =>heroesArr.push(heroe));
        
//         // Sin asnyc -> await
//         //const herore = buscarHeroeAsync(id);

//         //const herore = await buscarHeroeAsync(id);

//         //Modificación para el ejemplo de ProTip uso del AWAIT
//         //Espera en cada búsqueda
//         //const herore = await buscarHeroe(id);
//         heroesArr.push(buscarHeroe(id));

//     }


//     // Si no se usa el Await, se debería poner un tiempo de espera
//     // Sólo en casos en los que se tiene un standar JS muy antiguo.
//     // setTimeout(()=> {
//     //     console.log('ObtenerHeroes');
//     //     console.table(heroesArr);
//     // },1000);

//     //return heroesArr;

//     // Midificación para el ProTip del uso de AWAIT.
//     return await Promise.all(heroesArr);

// };

// FUCKING ProTip
// @o@ ¡¡¡ARREEEEEAAA!!!
export const obtenerHeroresArr = async() => {
    return await Promise.all( heroesIds.map( buscarHeroe ) );
};

//Manejo de errores en el await
export const obtenerHeroeAwait = async(id) => {
    try{
       const heroe = await buscarHeroeAsync(id);
       return heroe;
    }
    catch (err){
        console.log(`CATCH!!!`);
        //throw err;
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }
    
};

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');

    // Una forma correcta sería:
    // const heroes = await Promise.all(heroresPromesas);
    // heroes.forEach(console.log);

    // Más sencillo
    for await (const heroe of heroesPromesas){
        console.log(heroe);
    }

    // ESTO NO SERÍA CORRECTO
    // heroesPromesas.forEach( async(p) => console.log( await p) );


    
    console.timeEnd('HeroesCiclo');

};

export const heroeIfAwait = async (id) => {
    if ( ( await buscarHeroeAsync(id) ).nombre === 'Ironman' ){
        console.log('Es el mejor de todos.');
    } else{
        console.log('Naaah');
    }
};