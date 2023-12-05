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
      <body>
        <nav className="flex flex-col items-center mt-12">
          <Link href="/">
            <h1 className="text-xl">AFC Champions League</h1>
          </Link>
          <Link className="mt-4" href="/events">
            Events
          </Link>
          <Link className="mt-4" href="/add-event">
            Add Event
          </Link>
        </nav>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
