'use strict'

import { getInformacaoAluno, getDisciplinas } from "./alunosFetch.js"
import criarInicialDisciplina from  './utils/criarInicial.js'

const matricula = localStorage.getItem('matricula');

const informacaoAluno = await getInformacaoAluno(matricula);
const disciplinas = await getDisciplinas(matricula);


// console.log(informacaoAluno, disciplinas);

const renderPerfil = () => {
    const container = document.querySelector('.perfil');

    const img = document.createElement('img');
    img.src = informacaoAluno.foto;
    img.classList.add('perfil-foto');

    const nome = document.createElement('span');
    nome.classList.add('student-name');
    nome.textContent = informacaoAluno.nome;

    container.appendChild(img);
    container.appendChild(nome);
}

renderPerfil()

const renderNotas = (disciplina) => {
    const container = document.querySelector('.scores');

    const notaContainer = document.createElement('div');
    notaContainer.classList.add('subject-score')

    const nota = document.createElement('span');
    nota.classList.add('score');
    nota.textContent = disciplina.media;

    const progressoNota = document.createElement('progress');
    progressoNota.classList.add('score-progress');
    progressoNota.max = '100';
    progressoNota.value = disciplina.media;

    // if pra estilizar a cor

    if(disciplina.media <= 70 && disciplina.media >= 40){
        progressoNota.classList.add('yellow');
    } else if (disciplina.media < 40){
        progressoNota.classList.add('red')
    }
    
    const inicialDisciplina = document.createElement('span');
    inicialDisciplina.classList.add('subject-initials');
    inicialDisciplina.textContent = criarInicialDisciplina(disciplina.nome)
    
    notaContainer.appendChild(nota);
    notaContainer.appendChild(progressoNota);
    notaContainer.appendChild(inicialDisciplina);

    container.appendChild(notaContainer);
}

disciplinas.forEach(renderNotas);
