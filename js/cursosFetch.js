'use strict'

const getCursos = async () => {
    const url =  'http://localhost:8080/cursos';
    const response = await fetch(url);
    const { cursos } = await response.json();

    return cursos;
}

export {getCursos}