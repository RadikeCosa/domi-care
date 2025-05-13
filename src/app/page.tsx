import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen  gap-16 sm:p-20 ">
      <h1 className="text-4xl font-bold text-center">DomiCare</h1>
      <main>
        <p className="text-center">
          Una app para equipos de atencion domiciliaria
        </p>
        <Link className="text-center" href="/dashboard">
          {" "}
          ir a Dashboard
        </Link>
      </main>
      <footer className="text-sm text-center">© 2025 DomiCare</footer>
    </div>
  );
}
