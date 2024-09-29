import { useState } from 'react'


function AddEvent() {
  const [nameEvent, setNameEvent] = useState('')
  const [dateEvent, setDateEvent] = useState('')
  const [eventList, setEventList] = useState([])
  const [save,setSave] = useState(false)
  const addEvent = (name,date) => {
    const id = Math.floor(Math.random() * 100000)
    const event = {id,name,date}
    setEventList((state) => [...state,event])

    
  }

  const remove = (id) => {
    setEventList((state) => state.filter(event => event.id !== id))
  }

  function handleSave (e) {
    e.preventDefault()
    addEvent(nameEvent,dateEvent)
    setSave(true)
    
    
    console.log(nameEvent,dateEvent)
    console.log(eventList)
  }

  return (
    <>
      <div className='bg-gray-900 h-screen p-5'>
        <h1 className='text-white text-2xl'>Horas extras</h1>
        <form className='mt-5' onSubmit={handleSave}>
          <div>
            <label className='text-white ' htmlFor="name">Nome Evento:</label>
            <input className='ml-3 rounded' 
            type="text"
            value={nameEvent}
            onChange={(e) => setNameEvent(e.target.value)}
            />
          </div>
          <div className='mt-2'>
            <label className='text-white ' htmlFor="name">Data do Evento:</label>
            <input className='ml-3 rounded'
             type="date"
             value={dateEvent}
             onChange={(e) => setDateEvent(e.target.value)}
             />
          </div>
        
            <div className='flex gap-1'>
                <button className='text-white bg-sky-700 rounded-xl mt-4 p-2' type='submit'>Salvar Evento</button>
          <button className='text-white bg-sky-700 rounded-xl mt-4 p-2' type='click'>Voltar Para Inicio</button>
            </div>
          
        </form>

        <div>
            {save ? <p className='text-green-500'>Evento Salvo Com Sucesso</p> : null}
        </div>

        <div>
          {eventList.map(event => (
            <div key={event.id}><h1>{event.name}</h1>
              <button  onClick={() => remove(event.id)}>Remove</button>
            </div>
          ))}
        </div>
        
      </div>
    </>
  )
}

export default AddEvent;
