import kafeImage from '../assets/kafe.png'
import cafeImage2 from '../assets/2c.png'
import cafeimage3 from '../assets/3c.png'
import cafeimage4 from '../assets/4c.png'
import cafeimage5 from '../assets/5c.png'
import cafeimage6 from '../assets/6c.png'
import cafeimage7 from '../assets/7c.png'
import cafeimage9 from '../assets/9c.png'


const galleryItems = [
  {
    title: 'Home',
    image: kafeImage,
    alt: 'Foto Home Website Kafe',
  },
  {
    title: 'About Us',
    image: cafeImage2,
    alt: 'Foto menu kafe',
  },
  {
    title: 'Visi & Misi',
    image: cafeimage3,
    alt: 'Suasana kafe',
  },
  {
    title: 'Menu',
    image: cafeimage4,
    alt: 'Detail proyek kafe',
  },
  {
    title: 'Lokasi',
    image: cafeimage5,
    alt: 'Detail proyek kafe',
  },
  {
    title: 'Kontak',
    image: cafeimage6,
    alt: 'Detail proyek kafe',
  },
  {
    title: 'Menu Manajemen',
    image: cafeimage7,
    alt: 'Detail proyek kafe',
  },
  {
    title: 'Tambah Menu',
    image: cafeimage9,
    alt: 'Detail proyek kafe',
  },
  
]

export default function Cafeweb() {
  return (
    <section className="min-h-screen bg-transparent text-slate-100 px-6 py-16 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-300">Gallery</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Proyek Kafe</h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/70 shadow-2xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:shadow-slate-900/50"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-64 w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
