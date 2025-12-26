import { BsCartPlus} from 'react-icons/bs'

export function Home() {
  return(
    <main className="w-full max-w-7xl px-4 mx-auto">
      <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
        <section className="w-full">
          <img className='w-full rounded-bl-lg max-h-70 mb-2' src="https://boutique.octup.fr/storage/2022/11/CF58749_01-1024x1024.jpeg" alt="" />
          <p className='font-medium mt-1 mb-2'>Airpods Pro</p>

          <div className='flex gap-3 items-center'>
            <strong className='text-zinc-700/90'>
              R$ 1000,00
            </strong>
            <button className='bg-zinc-900 p-1 rounded'>
              <BsCartPlus size={22} color="#FFF" />
            </button>
          </div>

        </section>
      </div>
    </main>
  )
}