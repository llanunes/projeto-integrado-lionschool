'use strict'

const getAlunoPorCurso = async (curso) => {
    const url =  `http://localhost:8080/alunos/curso/?curso=${curso}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const filtrarAlunoPorStatusEAnoDeConclusao = async (curso, status, conclusao) => {
    const url = `http://localhost:8080/alunos/curso/?curso=${curso}&status=${status}&conclusao=${conclusao}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const getAnos = async (curso, conclusao) => {
    const url =  `http://localhost:8080/alunos/curso/?curso=${curso}&conclusao=${conclusao}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export {
    getAlunoPorCurso,
    filtrarAlunoPorStatusEAnoDeConclusao,
    getAnos
}