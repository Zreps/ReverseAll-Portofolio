import kafeImage from '../assets/1ch.png'
import Image2 from '../assets/2ch.png'
import image3 from '../assets/3ch.png'
import image4 from '../assets/4ch.png'
import image5 from '../assets/5ch.png'


const galleryItems = [
  {
    title: 'Login',
    image: kafeImage,
    alt: 'Foto Login Admin',
  },
  {
    title: 'Dashboard Admin',
    image: Image2,
    alt: 'Dashboard Admin',
  },
  {
    title: 'Produk',
    image: image3,
    alt: 'Produk',
  },
  {
    title: 'Manajemen Produk',
    image: image4,
    alt: 'Manajemen Produk',
  },
  {
    title: 'History',
    image: image5,
    alt: 'History',
  }
  
]

export default function Cashier() {
  
  return (
    <section className="min-h-screen bg-transparent text-slate-100 px-6 py-16 sm:px-10 lg:px-16">
     
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-300">Gallery</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Proyek Kasir</h1>
          
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
