import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Gil Sala Bordallo',
  description: 'Sport radar challenge',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>AFC Champions League</h1>
        <Link href="/events">Events</Link>
        <Link href="/add-event">Add Event</Link>
        {children}
      </body>
    </html>
  );
}
