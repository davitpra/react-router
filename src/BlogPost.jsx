import React from 'react';

// Importamos el useParams
import { Link, useParams, useNavigate } from 'react-router-dom';
// También necesitamos los datos aquí
import { blogdata } from './Data/blogdata'

function BlogPost() {
// Creamos una variable que nos permita usar este Hook
    const navigate = useNavigate();

/* Para cargar la información dinámicamente en la página debemos 
hacer uso del "useParams", este por medio de un objeto que debemos 
destructurar nos traerá el slug */
    const { slug } = useParams();

/* Lo que hacemos por acá es encontrar la información que 
necesitamos mediante una confición en un fin que nos envíe y 
guarde en esta variable los datos del post cuyo slug coincida con 
el que estamos solicitando por un compoente para que se renderice */
    const blogpost = blogdata.find( post => post.slug == slug );

/* En esta función haremos uso del useNavigate para volver al BlogPage */
    const returnToBlog = () => {
        /* Aquí la utilizamos como una función y le indicamos la ruta 
            hacia donde queremos navegar */ 
        navigate('/blog');
    }

/* Ahora si, después de que encontremos la información que 
necesitamos podemos cargarla en nuestro componente y renderizarla */
    return (
    <>
        <h2>{blogpost.title}</h2>
        <p>{blogpost.author}</p>
        <p>{blogpost.content}</p>
        <button
        // Llamamos a una función que nos permita usar el Hook 
        onClick={returnToBlog}
        >Volver al blog</button>
    </>
    );
}

export { BlogPost }