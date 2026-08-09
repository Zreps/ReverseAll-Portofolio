import { useRef, useState } from 'react'
import logoUtama from '../assets/LOGO.jpg'



export default function Hero(){
    const imgRef = useRef(null);
    const [ style, setStyle] = useState({});
    
        const handleMouseMove = (e) => {
            const el = imgRef.current;
            if (!el) return;
    
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
    
            const rotateX = -( y / rect.height) * 25;
            const rotateY = ( x / rect.width ) * 25;
    
            const shadowX = -(x / rect.width ) * 20;
            const shadowY = -(y / rect.height) * 20;
    
            setStyle({
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
          transition: 'none' 
        });
      };
    
        const handleMouseLeave = () => {
            setStyle({
         transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: 'transform 0.5s ease, box-shadow 0.5s ease'
            });
        };
    return(
        <section className='hero-container w-full min-h-screen mt-20' id="home">
            <section className="hero-section w-full flex flex-col gap-8 items-center justify-center p-8 h-screen" >
            <div className="hero-content flex flex-col items-center justify-center text-center gap-4">
                <h1 className="hero-title text-white text-bold font-serif text-5xl">Welcome to <span className='name text-blue-500'>My Portofolio</span></h1>
               
            </div>
            <div 
            className="hero-image"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={style}
            ref={imgRef}
            >
                <img  src={logoUtama} className="myfoto w-128 h-128 object-cover rounded-full" alt="Hero Image" />
            </div>
      </section>
        </section>
    )
}