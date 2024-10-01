import { Link } from "react-router-dom";




const Month = () => {

    const dadosMes = JSON.parse(localStorage.getItem('events'))

    console.log(dadosMes)

    return(
        <>
        <div className="bg-gray-800 h-screen w-screen flex justify-center items-center">
            
            <div className="flex flex-col gap-10">
                {dadosMes.map((item) => (
                    <div className="bg-white p-5 flex flex-col justify-center items-center gap-6">
                        <h1>{item.mes}</h1>
                        <div className="flex  gap-4">
                            <button className="bg-red-600 rounded p-2 text-white shadow-xl hover:bg-red-800">Remover mês</button>
                            <Link to={`/verEvent/${item.id}`}>Ver Eventos</Link>
                        </div>
                        </div>
                ))}
            </div>


            
        </div>
        
        </>
    )
}

export default Month;