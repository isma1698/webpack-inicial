
import '../CSS/componentes.css';
// import webpacklogo from'../assets/img/webpack-logo.png';

export const saludar =(nombre = 'sin nombre')=>{
    console.log('creando etiqueta');

    const h1 = document.createElement('h1');
    h1.innerText= `hola, ${nombre}`;

    document.body.append(h1);

//     console.log(webpacklogo);
//   const img =  document.createElement('img');
//     img.src =webpacklogo;
//     document.body.append(img);

}
