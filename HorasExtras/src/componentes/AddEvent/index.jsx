import { useState } from 'react';

function AddEvent() {
  const [nameEvent, setNameEvent] = useState('');
  const [dateEvent, setDateEvent] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    montagem: false,
    desmontagem: false,
    plantao: false,
    virada: false,
    operacao: false,
  });

  const serviços = []
  
  const [save, setSave] = useState(false);
  
  const addEvent = (name, date) => {
    const mes = new Date(date);
    const dia = mes.getDate() + 1
    const mesNumber = mes.getMonth();
    const id = Math.floor(Math.random() * 100000);

    const mesNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const mesName = mesNames[mesNumber];
    const {total , serviços} = calcularValorTotal()
    const valor = total
    const event = { mes: mesName, events: [{ id, name,valor , dia, mesNumber,serviços}], id: mesNumber };
    const arrayRecuperado = JSON.parse(localStorage.getItem('events'));

    if (arrayRecuperado) {
      const foundMoth = arrayRecuperado.find(item => item.id === mesNumber);
      if (foundMoth) {
        foundMoth.events.push({id,name,valor,dia,mesNumber,serviços});
      } else {
        arrayRecuperado.push(event);
      }
      localStorage.setItem('events', JSON.stringify(arrayRecuperado));
    } else {
      localStorage.setItem('events', JSON.stringify([event]));
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const calcularValorTotal = () => {
    let total = 0;
    if (checkboxes.montagem){
      total += 20
      serviços.push('Montagem')
    }
    if (checkboxes.desmontagem) {
      total +=20
      serviços.push('Desmontagem')
    }
    if (checkboxes.plantao) {
      total += (new Date(dateEvent).getDay() === 0 || new Date(dateEvent).getDay() === 6) ? 20 : 15;
      serviços.push('Plantão')
    } 
    if (checkboxes.virada) {
      total += 33;
      serviços.push('Virada')
    }
    if (checkboxes.operacao){
      
      total += 40
      serviços.push('Operagem')
    
    }
    return {total,serviços};
  };

  

  function handleSave(e) {
    e.preventDefault();
    addEvent(nameEvent, dateEvent);
    setSave(true);
    setNameEvent('');
    setDateEvent('');
    setCheckboxes({
      montagem: false,
      desmontagem: false,
      plantao: false,
      virada: false,
      operacao: false,
    });
    
    setTimeout(() => setSave(false), 2000);
    console.log('Valor total:', calcularValorTotal());
  }

  return (
    <div className='flex flex-col h-screen w-screen bg-slate-800 justify-center items-center md:p-10 p-3  '>
      <div className='bg-white p-3 flex flex-col items-center justify-center rounded-xl shadow-md  w-full shadow-black'>
        <h1 className='text-2xl font-bold'>Horas extras</h1>
        <form className='mt-5 w-full p-2  flex flex-col gap-5 items-center ' onSubmit={handleSave}>
          <div className='flex flex-col gap-3 w-full'>
            <label htmlFor="name" className='text-sm font-bold'>Nome Evento:</label>
            <input className='ml-3 md:text-4xl rounded border-2 border-black md:h-20 h-10 w-full' 
              type="text"
              value={nameEvent}
              onChange={(e) => setNameEvent(e.target.value)}
            />
          </div>
          <div className='mt-2 flex flex-col gap-3 w-full'>
            <label htmlFor="date" className='text-sm font-bold'>Data do Evento:</label>
            <input className='ml-3 text-center rounded border-2 border-black md:text-4xl h-10 md:h-20 w-full'
              type="date"
              value={dateEvent}
              required
              onChange={(e) => setDateEvent(e.target.value)}
            />
          </div>

          <div className='flex '>
            <label className='text-sm md:text-4xl font-bold'>Montagem: </label>
            <input className='md:w-10 w-5 ml-2' type="checkbox" name="montagem" checked={checkboxes.montagem} onChange={handleCheckboxChange} />
          </div>
          <div className='flex justify-center '>
            <label className='text-sm font-bold md:text-4xl'>Desmontagem:</label>
            <input className='md:w-10 w-5 ml-2' type="checkbox" name="desmontagem" checked={checkboxes.desmontagem} onChange={handleCheckboxChange} />
          </div>
          <div className='flex justify-center'>
            <label className='text-sm font-bold md:text-4xl'>Plantão:</label>
            <input className='md:w-10 w-5 ml-2' type="checkbox" name="plantao" checked={checkboxes.plantao} onChange={handleCheckboxChange} />
          </div>
          <div className='flex'>
            <label className='text-sm font-bold md:text-4xl'>Virada:</label>
            <input className='md:w-10 w-5 ml-2' type="checkbox" name="virada" checked={checkboxes.virada} onChange={handleCheckboxChange} />
          </div>
          <div className='flex'>
            <label className='text-sm font-bold md:text-4xl'>Operagem:</label>
            <input className='md:w-10 w-5 ml-2' type="checkbox" name="operacao" checked={checkboxes.operacao} onChange={handleCheckboxChange} />
          </div>

          <div className='flex'>
            <button className='text-white md:p-8 md:px-80 bg-sky-700 rounded-xl shadow-md shadow-slate-700 mt-4 p-4 md:text-4xl'  type='submit'>Salvar Evento</button>
          </div>
        </form>

        <div>
          {save ? <p className='text-green-500 mt-5 font-bold'>Evento Salvo Com Sucesso</p> : null}
        </div>
      </div>
    </div>
  );
}

export default AddEvent;