import axios from 'axios'

export async function EnviarArchivo(file) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('fileName', file.name)
    console.log(formData)
    const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
     await axios.post(`${process.env.REACT_APP_URL}/createusf`, formData, config)
    .then(function(res) {
        console.log(res)
    })
}

