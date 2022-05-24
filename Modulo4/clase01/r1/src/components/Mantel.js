
import Cubiertos from "./Cubiertos";
import Plato from "./Plato";

const Mantel = () => {
    return (
        <div className="mantel">
            <Cubiertos/>
            <Plato/>
            <Cubiertos/>
        </div>
    );
}

export default Mantel;