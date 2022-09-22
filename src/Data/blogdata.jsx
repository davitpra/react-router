/* Este Array simula una API que contenga nuestros datos, estos 
cargarán dinámicamente el contenido a los fake blogs */ 
const blogdata = [];

blogdata.push({
    title: '¿Que es React?',
    slug: 'que-es-react',
    content: 'React es el mejor Framework de JavaScript, que lindo React',
    author: 'Juan DC'
});

blogdata.push({
    title: '¿Que es Vue?',
    slug: 'que-es-vue',
    content: 'Vue es el mejor Framework de JavaScript, que lindo Vue',
    author: 'Diana'
});

blogdata.push({
    title: '¿Que es Angular?',
    slug: 'que-es-angular',
    content: 'Angular esta bien, que lindo React XD',
    author: 'NicoBytes'
});

blogdata.push({
    title: '¿Que es Svelte?',
    slug: 'que-es-svelte',
    content: 'Svelte es el mejor Framework de JavaScript, que lindo Svelte',
    author: 'Andrés Rodríguez'
});

export {blogdata}