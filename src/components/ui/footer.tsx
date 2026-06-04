export default function Footer() {
  return (
    <footer className="bg-background-dark py-4 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-black tracking-tighter uppercase">Pantera</h2>
        </div>
        <div className="flex gap-8">
          <a href="https://www.instagram.com/pntr_g" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all" />
          </a>
          <a href="https://on.soundcloud.com/QBzbEgcke8nXGPYQl4" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/soundcloud.svg" alt="SoundCloud" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all" />
          </a>
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/spotify.svg" alt="Spotify" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/youtube.svg" alt="YouTube" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all" />
          </a> */}
        </div>
        <p className="text-xs text-slate-600">
          © 2026 TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}
