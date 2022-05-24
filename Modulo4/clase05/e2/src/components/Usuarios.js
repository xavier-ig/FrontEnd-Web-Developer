import React from "react"

const Usuarios = () => {
    const [usuarios, setUsuarios] = React.useState(['usr'])

    const didMount = () => {
        setTimeout(() => {
            setUsuarios(['Usuario 01', 'Usuario 02', 'Usuario 03'])
        }, 2000);
    }
    React.useEffect(didMount, [])

    const despliegaUsuarios = () => {
        if(!usuarios.length) return '...'
        return usuarios.map((users) => `${users} -`)
    }

    return(
        <div>
            { despliegaUsuarios() }
        </div>
    )
}

export default Usuarios