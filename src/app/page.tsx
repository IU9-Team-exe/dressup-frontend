import Link from "next/link";

export default function HomePage() {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-6">
          Добро пожаловать в приложение AR-примерки одежды!
        </h1>
        <p className="text-lg mb-4">
          Примеряйте одежду в реальном времени, используя возможности дополненной реальности.
        </p>
        <Link
            href="/ar"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Перейти к AR-примерке
        </Link>
      </main>
  );
}
