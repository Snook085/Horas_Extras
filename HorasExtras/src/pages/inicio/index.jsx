
import { Link } from "react-router-dom";


const InicialPage = () => {
   

    
    return(
        <>
        <div className="bg-gray-800 h-screen w-screen flex flex-col justify-center items-center">
            <div className="bg-white rounded-xl shadow-xl w-72 h-72 flex flex-col justify-center items-center ">
                <div className="flex flex-col gap-5">
                    <Link className="bg-sky-700 px-8 py-2 rounded-xl shadow-sm text-white shadow-black text-cente" to='/AddEvent'>Adicionar Eventos</Link>
                    <Link className="bg-sky-700 px-8 py-2 rounded-xl shadow-sm text-white shadow-black text-center" to='/MesEvent'>Ver Eventos</Link>
                    
                </div>
            </div>
        </div>
            
        </>
    )
}


export default InicialPage;