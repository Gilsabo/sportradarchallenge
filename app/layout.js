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
            <h1 className="font-extrabold text-3xl text-center text-red-500">
              AFC Champions League
            </h1>
          </Link>
          <div className="flex">
            <Link className="mt-4 mr-2 font-semibold" href="/events">
              Events
            </Link>
            <Link className="mt-4 ml-2 font-semibold" href="/add-event">
              Add Event
            </Link>
          </div>
        </nav>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
