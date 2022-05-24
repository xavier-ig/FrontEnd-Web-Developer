import React from "react"

const Profes = () => {
    const [profes, setProfes] = React.useState([])

    const didMount = () => {
        setTimeout(() => {
            setProfes(['Profe 01', 'Profe 02', 'Profe 03'])
        }, 2000);
    }
    React.useEffect(didMount, [])

    return(
        <div>
        {
            profes.length ? profes.map((prf) => `${prf} - `) : '...'
        }
        </div>
    )
}

export default Profes