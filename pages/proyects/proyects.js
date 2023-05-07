import Link from "next/link";
import styles from "../../styles/proyects.module.css";

const people = [
  {
    name: "Primer Año",
    href: "proyects/first-year",
  },
  {
    name: "Segundo año",
    href: "proyects/second-year",
  },
  {
    name: "Tercer año",
    href: "proyects/second-year",
  },
];

export default function Proyects({ allPostsData }) {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        <li key={person.email} className="py-4 flex">
          <div>
            <Link
              className="text-xl font-medium text-gray-900"
              href={person.href}
            >
              {person.name}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
