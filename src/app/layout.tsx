import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
    title: "AR DressUp App",
    description: "Примерка одежды в реальном времени",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <header className="p-4 bg-gray-100 border-b">
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <a href="/" className="text-blue-600 hover:underline">
                            Главная
                        </a>
                    </li>
                    <li>
                        <a href="/ar" className="text-blue-600 hover:underline">
                            AR-примерка
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-blue-600 hover:underline">
                            О нас
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

        <main className="container mx-auto py-8">
            {children}
        </main>

        <footer className="p-4 bg-gray-100 border-t text-center">
            <p>© 2025 AR DressUp</p>
        </footer>
        </body>
        </html>
    );
}
