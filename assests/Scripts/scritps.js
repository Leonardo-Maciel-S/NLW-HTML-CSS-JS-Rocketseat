

let participantes = [
    {
        nome: "Otavio Miranda",
        email: "Otaviomiranda@gmail.com",
        inscricao: new Date(2024, 3, 2, 22, 0),
        checkIn: new Date(2024, 2, 25, 22, 0)
    }, 
    {
        nome: "Diego Fernandes",
        email: "diegofernandes@gmail.com",
        inscricao: new Date(2024, 2, 14, 15, 20),
        checkIn: new Date(2024, 2, 7, 21, 0)
    },
    {
        nome: "Maria Souza",
        email: "mariasouza@gmail.com",
        inscricao: new Date(2024, 2, 20, 10, 30),
        checkIn: new Date(2024, 2, 24, 18, 45)
    },
    {
        nome: "João Silva",
        email: "joaosilva@gmail.com",
        inscricao: new Date(2024, 2, 18, 14, 0),
        checkIn: new Date(2024, 2, 21, 9, 15)
    },
    {
        nome: "Ana Oliveira",
        email: "anaoliveira@gmail.com",
        inscricao: new Date(2024, 2, 10, 8, 45),
        checkIn: new Date(2024, 2, 14, 16, 30)
    },
    {
        nome: "Pedro Santos",
        email: "pedrosantos@gmail.com",
        inscricao: new Date(2024, 2, 28, 17, 10),
        checkIn: new Date(2024, 2, 30, 11, 20)
    },
    {
        nome: "Carla Lima",
        email: "carlalima@gmail.com",
        inscricao: new Date(2024, 2, 9, 11, 20),
        checkIn: new Date(2024, 2, 13, 19, 0)
    },
    {
        nome: "Rafaela Pereira",
        email: "rafaelapereira@gmail.com",
        inscricao: new Date(2024, 2, 5, 13, 40),
        checkIn: new Date(2024, 2, 9, 22, 10)
    },
    {
        nome: "Lucas Costa",
        email: "lucascosta@gmail.com",
        inscricao: new Date(2024, 2, 15, 9, 0),
        checkIn: new Date(2024, 2, 18, 15, 30)
    },
    {
        nome: "Mariana Almeida",
        email: "marianaalmeida@gmail.com",
        inscricao: new Date(2024, 2, 25, 16, 30),
        checkIn: new Date(2024, 2, 28, 20, 45)
    }
];

const criarNovoParticipante = (participante) => {
    const inscricao = dayjs(Date.now()).to(participante.inscricao)
    const checkIn = dayjs(Date.now()).to(participante.checkIn)

    return `
    <tr> 
        <td><strong>${participante.nome}</strong> <br>  <small>${participante.email}</small></td>
        <td>${inscricao}</td>
        <td>${checkIn}</td>
    </tr>`
}


const atualizaLista = (participantes) => {
    
    let output = ""

    for (let participante of participantes) {
        output = output + criarNovoParticipante(participante);
    }

    const body = document.querySelector('tbody').innerHTML = output;
}


atualizaLista(participantes)