'use strict'

const getInformacaoAluno = async (matricula) => {
    const url =  `http://localhost:8080/aluno/matricula/${matricula}`;
    const response = await fetch(url);
    const { informacaoAluno } = await response.json();

    return informacaoAluno;
}

const getDisciplinas = async (matricula) => {
    const url =  `http://localhost:8080/${matricula}/disciplinas`;
    const response = await fetch(url);
    const { disciplinas } = await response.json()

    return disciplinas;
}

export {getInformacaoAluno, getDisciplinas};