import { useParams } from "react-router-dom"





const VerEvent = () => {
    const params = useParams()
    console.log('params: ',JSON.stringify(params))
    const {id} = useParams();
    const dados = JSON.parse(localStorage.getItem('events')) 


    const mesEncontrado = dados.find(item => item.id == id)

   console.log(`mesId:${id}`)
    
    
    return(
        <>
            <div className="bg-gray-800 h-screen w-screen text-white flex flex-col">
                <div className="mx-auto mt-10"><h1 className="text-2xl font-bold">Meus Eventos</h1></div>
                <div className="flex  justify-center items-center mt-32">
                    {mesEncontrado.events.map((item) =>(
                        <div>{item.name}</div>
                    ))}
                </div>
                
            </div>
        </>
    )
}

export default VerEvent;