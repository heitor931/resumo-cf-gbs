import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">DRM</h2>
          <p className="text-sm leading-6">
            Construindo uma experiência digital estudantil e envolvente.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Links rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Resumos</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Conectar</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Whatsaap</a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} DRM. Todos direitos reservados.
      </div>
    </footer>
  );
}
