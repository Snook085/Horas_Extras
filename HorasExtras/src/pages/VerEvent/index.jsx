import { useState } from "react";




const VerEvent = () => {

    
    const dados = JSON.parse(localStorage.getItem('events'))

    if(!dados){
        localStorage.setItem('events',JSON.stringify([{name:'Sem Eventos'}]))
    }

    function removeEvent(id){
        if(dados){
            const removido = dados.filter((item) => item.id !== id)
            console.log(removido)
            localStorage.setItem('events', JSON.stringify(removido))
            window.location.reload()
        }
    }
    
    
    return(
        <>
            <div className="bg-gray-800 h-screen w-screen text-white flex flex-col">
                <div className="mx-auto mt-10"><h1 className="text-2xl font-bold">Meus Eventos</h1></div>
                <div className="flex  justify-center items-center mt-32"><h2 className="font-bold text-3xl">{dados.map((item) =>(
                    <div key={item.id} className="flex
                    flex-col gap-5 justify-center items-center p-3">
                        <h1>{item.name}</h1>
                        <button onClick={() => removeEvent(item.id)} className="bg-red-600 rounded p-2">Remover Evento</button>
                    </div>
                ))}</h2></div>
                
            </div>
        </>
    )
}

export default VerEvent;