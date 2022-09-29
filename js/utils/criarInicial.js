const criarInicialDisciplina = (nome) => {
    let nomeDisciplina = nome;
    let inicialDisciplina = [];

    let splitedNome = nomeDisciplina.split(' ');
    splitedNome.forEach(item => {
        inicialDisciplina.push(item[0].toUpperCase());
    });

    return inicialDisciplina.join('');
}

export default criarInicialDisciplina;