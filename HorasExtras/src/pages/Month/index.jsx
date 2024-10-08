import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Month = () => {
    const [mes,setMes] = useState([])
    
     let salario = JSON.stringify(localStorage.getItem('perfil'))

     function formataSalario(value) {
        
        const numericValue = value.replace(/[^0-9,-]/g, '').replace(',', '.');
        
        
        return Math.round(parseFloat(numericValue));
    }
    const salarioFormatado = formataSalario(salario)
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
        <div className="bg-gray-800 h-screen w-screen flex justify-center items-center p-3">
            
            <div className="flex flex-col gap-5 w-full">
                {mes.map((item) => {
                    let total = 0
                    item.events.forEach(event => {
                        total += event.valor
                    })
                    const inss = (salarioFormatado * 11) / 100
                    
                    const valorFinal = (total + salarioFormatado) - 156 - inss

                    
                   const result = <div key={item.id} className="bg-white p-5 flex flex-col w-full justify-center items-center gap-6 rounded-xl shadow-md  shadow-black">
                        <h1 className="text-4xl font-bold mb-20">{item.mes}</h1>
                        <div>
                            <p>Total Do Mês <span className="text-green-500">R${valorFinal},00</span> </p>
                        </div>
                        <div className="flex  gap-4">
                            <button className="bg-red-600 rounded p-2 text-white shadow-xl hover:bg-red-800" onClick={() => removeEvent(item.id)}>Remover mês</button>
                            
                            <Link  className="bg-red-600 rounded p-2 text-white shadow-xl hover:bg-red-800" to={`/verEvent/${item.id}`}>Ver Eventos</Link>
                        </div>
                        </div>

                return result
})}
            </div>


            
        </div>
        
        </>
    )
}

export default Month;