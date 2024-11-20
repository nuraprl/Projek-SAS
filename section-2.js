const daftarTugas = [
    {
    namaTugas : "",
    deadline : "",
    prioritas : "",
    },
]

let mode = 'tambah'

const tampilkanTugas = () => {
    const tabelTugas = document.getElementById('tabelTugas')
    tabelTugas.innerHTML = `<tr><th>No</th><th>Nama Tugas</th><th>Deadline</th><th>Selesai</th></tr>`

    for (let index in daftarTugas) {
        console.log(`${parseInt(index) + 1}.${daftarTugas[index].namaTugas} dengan deadline tanggal ${daftarTugas[index].deadline} memiliki priotitas ${daftarTugas[index].prioritas}.`)

        tabelTugas.innerHTML += `<tr><td>${parseInt(index) + 1}.</td><td>${daftarTugas[index].namaTugas}</td><td>${daftarTugas[index].deadline}</td><td>${daftarTugas[index].prioritas}</td></tr>`
    }
}


let tambahTugas = () => {
    const namaTugas = document.getElementById('txtnamaTugas').value
    const deadline = document.getElementById('txtdeadline').value
    const prioritas = document.getElementById('txtprioritas').value

    const tugasBaru = {
        namaTugas: namaTugas,
        deadline: deadline,
        prioritas: prioritas,

    }

    if (mode == 'tambah') {
        daftarTugas.push(tugasBaru)
    } else {
        daftarTugas[mode] = tugasBaru
    }
    
    document.getElementById('txtnamaTugas').value = ""
    document.getElementById('txtdeadline').value = ""
    document.getElementById('txtprioritas').value = ""

    mode = 'tambah'

    tampilkanTugas()

    }
