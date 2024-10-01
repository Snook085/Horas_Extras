import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Month = () => {
    const [mes,setMes] = useState([])
    
    useEffect(() => {
        const eventos = JSON.parse(localStorage.getItem('events')) || [];
        setMes(eventos);
    }, []);
    

   

    function removeEvent(id){
        const mesRemovido = mes.filter(item => item.id !== id)
        localStorage.setItem('events',JSON.stringify(mesRemovido))
        setMes(mesRemovido)
    }

    return(
        <>
        <div className="bg-gray-800 h-screen w-screen flex justify-center items-center">
            
            <div className="flex flex-col gap-10">
                {mes.map((item) => (
                    <div key={item.id} className="bg-white p-5 flex flex-col justify-center items-center gap-6 rounded-xl shadow-xl shadow-black">
                        <h1 className="text-2xl">{item.mes}</h1>
                        <div className="flex  gap-4">
                            <button className="bg-red-600 rounded p-2 text-white shadow-xl hover:bg-red-800" onClick={() => removeEvent(item.id)}>Remover mês</button>
                            <Link  className="bg-red-600 rounded p-2 text-white shadow-xl hover:bg-red-800" to={`/verEvent/${item.id}`}>Ver Eventos</Link>
                        </div>
                        </div>
                ))}
            </div>


            
        </div>
        
        </>
    )
}

export default Month;