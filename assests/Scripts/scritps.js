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
        checkIn: null
    },
    {
        nome: "João Silva",
        email: "joaosilva@gmail.com",
        inscricao: new Date(2024, 2, 18, 14, 0),
        checkIn: null
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
        checkIn: null
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
        checkIn: null
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
    let inscricao = dayjs(Date.now()).to(participante.inscricao)
    let checkIn = dayjs(Date.now()).to(participante.checkIn)


    if (participante.checkIn == null) {
        checkIn = `
        <button data-email="${participante.email}" onclick="fazerCheckIn(event)">
            Confirmar check-in
        </button>
        `
    }

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


const adicionarParticipante = (event) => { 
    event.preventDefault()

    const dados = new FormData(event.target)
    const participante = {
        nome: dados.get("nome"),
        email: dados.get("email"), 
        inscricao: new Date(),
        checkIn: null
    }

    const emailCadastrado = participantes.find(
        (p) => p.email == participante.email
    )
  

    if (emailCadastrado) {
        alert("email já cadastrado")
        return
    }

    participantes = [participante, ...participantes]
    
    atualizaLista(participantes)

    event.target.querySelector("[name='nome']").value = ""
    event.target.querySelector("[name='email']").value = ""
}

const fazerCheckIn = (event) => {
    const resultado = confirm("Tem certeza que deseja realizar check-in")

    if (!resultado) {
        return
    }

    const participante = participantes.find(
        (p) => p.email == event.target.dataset.email
    )

    participante.checkIn = new Date()

    atualizaLista(participantes)
}

atualizaLista(participantes)