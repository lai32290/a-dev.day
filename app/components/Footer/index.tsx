import { Link } from 'remix';

export default function Footer() {
  return (
    <div className="px-10 py-4 bg-gray-700 text-slate-50 flex justify-between">
      <div className="text-3xl">
        <Link to="/">
          a dev.day
        </Link>
      </div>

      <nav className="flex items-center">
        <ul className="flex justify-between">
          <li className="pl-4">
            <a href="#">Github</a>
          </li>
          <li className="pl-4">
            <a href="#">Linkedin</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
