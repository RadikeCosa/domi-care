import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>DomiCare</h1>
      <main>
        <p>Una app para equipos de atencion domiciliaria</p>
        <Link href="/dashboard">
          <p>Ir a Dashboard</p>
        </Link>
      </main>
      <footer>© 2025 DomiCare</footer>
    </div>
  );
}
