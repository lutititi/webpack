import '../css/componentes.css';
import juanfoto from '../assets/img/juan.jpg';


export const saludar = ( nombre ) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }!!!!`;

    document.body.append( h1 );

    //img
    //console.log(juanfoto);
    //const img = document.createElement('img');
    //img.src   = juanfoto;
    //document.body.append( img );


}