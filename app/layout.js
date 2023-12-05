import './globals.css';
import Link from 'next/link';
import { AppProvider } from './AppProvider';

export const metadata = {
  title: 'Gil Sala Bordallo',
  description: 'Sport radar challenge',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-900 text-white">
        <nav className="flex flex-col items-center mt-12">
          <Link href="/">
            <h1 className="font-extrabold text-3xl text-red-500">
              AFC Champions League
            </h1>
          </Link>
          <Link className="mt-4 font-semibold" href="/events">
            Events
          </Link>
          <Link className="mt-4 font-semibold" href="/add-event">
            Add Event
          </Link>
        </nav>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
