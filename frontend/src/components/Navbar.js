export const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-600">SedClo</div>
        <ul className="flex gap-6">
          {['Home', 'Pricing', 'About', 'Contact'].map((link) => (
            <li key={link}>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
