import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useAos from '../hooks/useAos.js'
import useLightbox from '../hooks/useLightbox.js'
import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer.jsx'
import ScrollTopButton from '../layout/ScrollTopButton.jsx'
import WhatsappFloat from '../layout/WhatsappFloat.jsx'
import Hero from '../components/home/Hero.jsx'
import Apresentacao from '../components/home/Apresentacao.jsx'
import Metodo from '../components/home/Metodo.jsx'
import Segmentos from '../components/home/Segmentos.jsx'
import Diferenciais from '../components/home/Diferenciais.jsx'
import Estrutura from '../components/home/Estrutura.jsx'
import Parceiros from '../components/home/Parceiros.jsx'
import Depoimentos from '../components/home/Depoimentos.jsx'
import Noticias from '../components/home/Noticias.jsx'
import Matricula from '../components/home/Matricula.jsx'
import Contato from '../components/home/Contato.jsx'
import Lightbox from '../components/home/Lightbox.jsx'

export default function HomePage() {
  useAos()
  const lightbox = useLightbox()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Apresentacao />
      <Metodo />
      <Segmentos />
      <Diferenciais />
      <Estrutura onPhotoClick={lightbox.open} />
      <Parceiros />
      <Depoimentos />
      <Noticias onPhotoClick={lightbox.open} />
      <Matricula />
      <Contato />
      <Footer />
      <ScrollTopButton />
      <WhatsappFloat />
      <Lightbox {...lightbox} />
    </>
  )
}
