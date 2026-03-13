'use client'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white py-12">
      <div className="section grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg text-neutral-900">Dra. Priscila Martins</p>
          <p className="mt-2 text-sm text-neutral-600">Estética avançada com atendimento exclusivo e personalizado.</p>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="Instagram" className="text-neutral-700 hover:text-neutral-900">Instagram</a>
            <a href="#" aria-label="Facebook" className="text-neutral-700 hover:text-neutral-900">Facebook</a>
            <a href="#" aria-label="TikTok" className="text-neutral-700 hover:text-neutral-900">TikTok</a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-neutral-900">Endereço</p>
          <p className="mt-2 text-sm text-neutral-600">Rua da Elegância, 123 - Centro</p>
          <p className="text-sm text-neutral-600">Seg - Sex: 9h às 19h</p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900">Localização</p>
          <div className="mt-2 overflow-hidden rounded-xl">
            <iframe
              title="Mapa do local"
              aria-label="Mapa do local"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.129679385341!2d-46.66232572398218!3d-23.600024463877848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c9e6e3c3b7%3A0x5cfb9b2d2e6a3d77!2s!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="section mt-8 border-t border-neutral-100 pt-6 text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} Clínica Priscila Martins. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
