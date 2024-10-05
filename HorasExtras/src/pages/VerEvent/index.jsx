import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const VerEvent = () => {
    const { id } = useParams();
    const dados = JSON.parse(localStorage.getItem('events'));
    const mesEncontrado = dados.find(item => item.id == id);
    console.log(mesEncontrado.events)

    return (
        <>
            
            <div className="bg-gray-800 h-screen w-screen  flex flex-col pb-20 justify-center items-center ">
                <h1 className="text-4xl mb-3 text-white">Eventos</h1>
                <div className="flex justify-center items-center  w-full b rounded-xl bg-transparent shadow-xl ">
                    
                    <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('Slide passado')}
                onSwiper={(swiper) => console.log(swiper)}
                
               
                
                ><div>
                    
                </div>
                    {mesEncontrado.events.map((item) => (
                        
                        <SwiperSlide>
                            <div className="bg-slate-200  w-full  h-96 gap-10 flex flex-col justify-center items-center rounded-xl ">
                                <h1 className="text-2xl font-bold ">{item.name}</h1>
                            <p className="text-slate-500" >Data: {item.dia}/{item.mesNumber}</p>
                            <div className="flex flex-col justify-center items-center gap-3">
                                {item.serviços.map((index) => (
                                    <p className="text-green-600" key={index}>{index}</p>
                                ))}
                            </div>
                            <p className="font-bold">Valor do dia: <span className="text-green-500">${item.valor},00</span></p>
                            </div>
                            
                        
                        </SwiperSlide>
                    ))}
                </Swiper></div>
                
            </div>
        </>
    );
}

export default VerEvent;
