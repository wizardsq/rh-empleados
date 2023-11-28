import axios from "axios";

export async function LoginUser({ correo, passw }) {
    console.log(process.env.REACT_APP_URL)
    await axios.post(`http://localhost:3000/api/login`, {
        correo,
        passw
    })
        .then(function (res) {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('user', JSON.stringify(res.data));
            const user = localStorage.getItem('user');
            if (user != null) {
                window.location.href = "/home"
            }
        })
        .catch(function (error) {
            console.log(error)
        })
}


export async function CreateUser({ Nombre, Correo, password, rol }) {
    let stat;
    await axios.post(`http://localhost:3000/api/crearuser`, {
        Nombre, Correo, password, rol
    })

        .then(function (res) {
            if (res.status == '200') {
                stat = res.status
            } else {
                stat = res.status
            }
        }).catch(function (error) {
            console.log(error)
        })
    return stat
}