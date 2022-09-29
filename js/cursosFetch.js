'use strict'

const getCursos = async () => {
    const url =  'http://localhost:8080/cursos';
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export {getCursos}