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
        <Link href="/">
          <h1>AFC Champions League</h1>
        </Link>
        <Link href="/events">Events</Link>
        <Link href="/add-event">Add Event</Link>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
