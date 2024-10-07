import { useState } from "react"


const Profile = () => {
    const [salario, setSalario] = useState('')

    const verifica = JSON.parse(localStorage.getItem('perfil')) || ''

    
    function salarioSalvo(){
        const div = <div className="flex flex-col ">
            
            <p className="text-3xl mb-3">Seu Salario é:</p>
            <span className="text-green-500 text-2xl font-bold">{verifica}</span>
        </div>

        return div
    }
    function saveSalario (){
        
        const salarioFormatado = formataSalario(salario)
        localStorage.setItem('perfil',JSON.stringify(salarioFormatado))
    }

    function formataSalario(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL', // Moeda brasileira (Reais)
        }).format(value);
    }

    return(
        <>
            <div className="bg-slate-800 w-screen h-screen pb-20 flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl mb-5">Perfil</h1>
                <div className="bg-white w-72 h-72 flex flex-col items-center rounded shadow-xl justify-center border-2 border-black">
                    {verifica  ? salarioSalvo():<form className="flex flex-col gap-5 " onSubmit={saveSalario}>
                        <div className="mt-5 flex flex-col ">
                            <label className="text-sm font-bold mb-3"  htmlFor="salario">Valor Salario:</label>
                            <input 
                            className="border-black border-2  rounded w-full h-10 text-xl p-3"
                            type="number" 
                            required
                            placeholder="Ex: 1500"
                            value={salario}
                            onChange={(e) => setSalario(e.target.value)}
                            />
                        </div>

                        <div>
                            <button className="bg-red-600 rounded w-full h-10 shadow-xl text-white ">Salvar Salario</button>
                        </div>
                    </form>}
                </div>
            </div>
        </>
    )
}

export default Profile