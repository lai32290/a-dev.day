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
            <a target="_blank" href="https://github.com/lai32290">
              Github
            </a>
          </li>
          <li className="pl-4">
            <a target="_blank" href="https://www.linkedin.com/in/lai-xuancheng/">
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
