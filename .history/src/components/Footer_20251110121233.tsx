import { Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 bg-slate-950">
      <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
  {/* Brand - Izquierda */}
  <div>
    <h3 className="text-2xl mb-4 text-white">
    <span className="text-xl text-white"><span className='text-green-400 text-2xl'>Q</span>uick<span className='text-green-400 text-2xl'>S</span>olution</span>
    </h3>
    <p className="text-slate-400 text-sm mb-4">
      La solución integral para gestionar tu restaurante de forma profesional.
    </p>
    <div className="flex gap-3">
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Instagram className="w-5 h-5 text-white" />
      </a>
      <a 
  href="https://wa.me/5491131199882" 
  target="_blank" 
  rel="noopener noreferrer"
  class="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center hover:scale-110 transition-transform"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    class="w-5 h-5 text-white"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.371-.025-.519-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.226 1.36.194 1.871.118.571-.085 1.758-.718 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.401 4.403h-.004a8.683 8.683 0 01-4.17-1.066l-.3-.178-3.102.81.832-3.027-.195-.312a8.65 8.65 0 01-1.33-4.623c.003-4.787 3.907-8.688 8.698-8.688 2.322 0 4.507.904 6.147 2.544a8.61 8.61 0 012.544 6.142c-.003 4.79-3.907 8.694-8.7 8.694m7.403-16.097A10.61 10.61 0 0012 0C5.383 0 0 5.381 0 12a11.93 11.93 0 001.605 5.94L0 24l6.26-1.64A11.94 11.94 0 0012 24c6.617 0 12-5.383 12-12 0-3.197-1.246-6.206-3.535-8.472"/>
  </svg>
</a>

    </div>
  </div>

  {/* Product - Centro */}
  <div className="text-center md:text-left mx-auto">
    <h4 className="text-white mb-4">Producto</h4>
    <ul className="space-y-2 text-slate-400 text-sm">
      <li><a href="#features" className="hover:text-green-400 transition-colors">Características</a></li>
      <li><a href="#pricing" className="hover:text-green-400 transition-colors">Precios</a></li>
      <li><a href="#demo" className="hover:text-green-400 transition-colors">Demo</a></li>
      <li><a href="#" className="hover:text-green-400 transition-colors">Integraciones</a></li>
    </ul>
  </div>

  {/* Contacto - Derecha */}
  <div className="md:ml-auto">
    <h4 className="text-white mb-4">Contacto</h4>
    <ul className="space-y-3 text-slate-400 text-sm">
      <li className="flex items-center gap-2">
        <Phone className="w-4 h-4 text-green-400" />
        <span>(+54) 911 3119-9882</span>
      </li>
      <li className="flex items-center gap-2">
        <Mail className="w-4 h-4 text-green-400" />
        <span>francoiucap1@gmail.com</span>
      </li>
      <li className="flex items-start gap-2">
        <MapPin className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
        <span>Merlo, Buenos Aires</span>
      </li>
    </ul>
  </div>
</div>

        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 QuickSolution. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-green-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-green-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
