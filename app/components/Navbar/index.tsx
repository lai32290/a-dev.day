import { Link } from 'remix';

export default function Navbar() {
  return (
    <header className="px-10 py-4 bg-gray-700 text-slate-50 text-4xl">
      <Link to="/">
        a dev.day
      </Link>
    </header>
  );
}
