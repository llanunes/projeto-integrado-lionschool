'use strict'

const getInformacaoAluno = async (matricula) => {
    const url =  `http://localhost:8080/aluno/matricula/${matricula}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const getDisciplinas = async (matricula) => {
    const url =  `http://localhost:8080/${matricula}/disciplinas`;
    const response = await fetch(url);
    const data = await response.json()

    return data;
}

export {getInformacaoAluno, getDisciplinas};