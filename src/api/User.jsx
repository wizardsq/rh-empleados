import axios from "axios";

export async function LoginUser({ correo, passw }) {

    await axios.post(`${process.env.REACT_APP_URL}/login`, {
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
    await axios.post(`${process.env.REACT_APP_URL}/crearuser`, {
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