import React from 'react';
import { Link } from 'react-router-dom';
import { blogdata } from './Data/blogdata'

function BlogPage() {
    return (
    <>
        <h1>Blog Page</h1>

        <ul>
            {blogdata.map( post => (
                <BlogLink post={post} />
            ))}
        </ul>
    </>
    );
}

/* Este BlogLink srá el que contenga los datos que nos crearan 
nuestro slug y nos redireccionen al contenido que deseamos ver */
function BlogLink({ post }) {
    return (
    <li>
        <Link
            to={`/blog/${post.slug}`}
        >{post.title}</Link>
    </li>
    );
}

export { BlogPage }