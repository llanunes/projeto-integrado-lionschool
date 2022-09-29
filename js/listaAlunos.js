'use strict'

import { getAlunoPorCurso, filtrarAlunoPorStatus, getAnos } from "./listaAlunosFetch.js"
import { getCursos } from "./cursosFetch.js";

const curso = localStorage.getItem('curso');
const alunosCurso = await getAlunoPorCurso(curso);

const criarCards = (array) => {
    const container = document.querySelector('.cards-container');

    const div = document.createElement('div');
    div.classList.add('card');

    if (array.status.toLowerCase() == 'finalizado') {
        div.classList.add('blue');
    } else {
        div.classList.add('yellow');
    }

    const img = document.createElement('img');
    img.classList.add('student-photo');
    img.src = array.foto;

    const nome = document.createElement('span');
    nome.classList.add('student-name');
    nome.textContent = array.nome.toUpperCase();

    div.appendChild(img);
    div.appendChild(nome);

    container.appendChild(div);

    div.addEventListener('click', (el) => {
        el.preventDefault();

        const matricula = array.matricula;

        localStorage.setItem('matricula', matricula);

        location.href = './alunos.html';
    });
}



alunosCurso.forEach(criarCards);

const titulo = document.querySelector('.title');

let cursos = await getCursos();

cursos.forEach(item => {
    if (item.sigla.toLowerCase() == curso) {
        titulo.textContent = item.nome.split(' - ')[1];
    }
});

const sanitizeCardsContainer = () => {
    const container = document.querySelector('.cards-container')
    while (container.lastChild) {
        container.lastChild.remove()
    }
}


const statusFilters = document.querySelector('#status-select')

statusFilters.addEventListener('change', async (event) => {
   const value = statusFilters.value
   const data = await filtrarAlunoPorStatus(curso, value);
   sanitizeCardsContainer();
   data.forEach(criarCards);
})

