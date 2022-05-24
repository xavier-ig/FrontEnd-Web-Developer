import React from "react"

const Tareas = () => {
    const [tareas, setTareas] = React.useState([])

    const didMount = () => {
        setTimeout(() => {
            setTareas(['Reto 01', 'Reto 02', 'Reto 03'])
        }, 2000);
    }
    React.useEffect(didMount, [])

    return(
        <div>
            { !tareas.length && '...'}
            { !!tareas.length && tareas.map((tarea) => `${tarea} - `) }
        </div>
    )
}

export default Tareas