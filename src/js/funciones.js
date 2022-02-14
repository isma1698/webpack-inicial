
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
 export const multi=(a,b,n3)=> { 
     a=prompt("da el primer numero");
    b=prompt("da el segundo numero");
     n3=a*b;
     console.log("la multiplicacion es: "+n3);
   
 }


