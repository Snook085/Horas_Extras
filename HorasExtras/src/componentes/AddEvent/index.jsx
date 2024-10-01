import { useState } from 'react'
import { Link } from 'react-router-dom'


function AddEvent() {
  const [nameEvent, setNameEvent] = useState('')
  const [dateEvent, setDateEvent] = useState('')
  
  const [save,setSave] = useState(false)

  

  const addEvent = (name,date) => {




    
    const mes = new Date(date)
    const mesNumber = mes.getMonth();
    const id = Math.floor(Math.random() * 100000)
    
    

    const mesNames = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro'
    ];

    const mesName = mesNames[mesNumber]
    
    const event = {mes: mesName,events: [{id,name}],id: mesNumber}

    
    const arrayRecuperado = JSON.parse(localStorage.getItem('events'))
    if(arrayRecuperado){
      
      const foundMoth = arrayRecuperado.find( item => item.mes === mesNumber)

      if(foundMoth){
        const newEvent = {id,name}
        foundMoth.events.push(newEvent)
      }else{
        arrayRecuperado.push(event)
      }
      


    localStorage.setItem('events', JSON.stringify(arrayRecuperado))
    }else{
      localStorage.setItem('events', JSON.stringify([event]))
    }
    
  }

  

  function handleSave (e) {
    e.preventDefault()
    addEvent(nameEvent,dateEvent)
    setSave(true)
    setNameEvent('')
    setDateEvent('')
    setTimeout(() => setSave(false),2000)
    
  }

  return (
    <>
    <div className='flex flex-col h-screen w-screen bg-slate-800 justify-center items-center '>

    
      <div className=' bg-white  p-5  flex flex-col items-center justify-center rounded-xl shadow-xl shadow-black'>
        <h1 className=' text-2xl'>Horas extras</h1>
        <form className='mt-5 flex flex-col gap-5 items-center justify-center' onSubmit={handleSave}>
          <div className='flex flex-col gap-3'>
            <label  htmlFor="name" className='text-sm font-bold'>Nome Evento:</label>
            <input className='ml-3 rounded border-2 border-black h-10 w-56' 
            type="text"
            value={nameEvent}
            onChange={(e) => setNameEvent(e.target.value)}
            />
          </div>
          <div className='mt-2 flex flex-col gap-3'>
            <label  htmlFor="name" className='text-sm font-bold' >Data do Evento:</label>
            <input className='ml-3 rounded border-2 border-black h-10 w-56'
             type="date"
             value={dateEvent}
             required
             onChange={(e) => setDateEvent(e.target.value)}
             />
          </div>
        
            <div className='flex '>
                <button className='text-white bg-sky-700 rounded-xl shoadow-xl shadow-slate-700 mt-4 p-4' type='submit'>Salvar Evento</button>
        
            </div>
          
        </form>

        <div>
            {save ? <p className='text-green-500 mt-5 font-bold'>Evento Salvo Com Sucesso</p> : null}
        </div>
        
      </div>
      </div>
    </>
  )
}

export default AddEvent;
