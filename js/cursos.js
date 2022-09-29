'use strict'

import {getCursos} from "./cursosFetch.js";

let cursos = await getCursos();

const criarCards= (array) => {
    const container = document.querySelector('.subjects-selection')

    // cria a div container
    const div = document.createElement('div')
    div.classList.add('subject')
    div.id = array.sigla.toLowerCase();

    // cria elemento foto
    const img = document.createElement('img')
    img.classList.add('subject-icon');
    img.src = array.icone;

    // cria elemento sigla
    const sigla = document.createElement('span')
    sigla.classList.add('subject-titulo')
    sigla.textContent = array.sigla

    div.appendChild(img)
    div.appendChild(sigla)

    // div.innerHTML = 
    // `
    // <div href="./pages/lista-alunos.html" class="subject">
    //     <img src="${array.icone}"
    // <span class="subject-title">${array.sigla}</span> 
    // `
    container.appendChild(div)

    div.addEventListener('click', (el) => {
        el.preventDefault();

        const curso = div.id;

        localStorage.setItem('curso', curso);

        location.href = './pages/lista-alunos.html';
    });
}

cursos.forEach(criarCards);