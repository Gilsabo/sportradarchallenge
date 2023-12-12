import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';
import { AppProvider } from './AppProvider';

export const metadata = {
  title: 'Gil Sala Bordallo',
  description: 'Sport radar challenge',
};

export type Props = {
  children: ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="eng">
      <body className="bg-blue-900 text-white">
        <div className="flex flex-col items-center mt-12">
          <Link href="/">
            <header className="font-extrabold text-3xl text-center text-red-500">
              AFC Champions League
            </header>
          </Link>
          <nav className="flex">
            <Link
              className="mt-4 mr-2 hover:text-red-500 font-semibold"
              href="/events"
            >
              Events
            </Link>
            <Link
              className="mt-4 ml-2 hover:text-red-500 font-semibold"
              href="/add-event"
            >
              Add Event
            </Link>
          </nav>
        </div>
        <AppProvider>{props.children}</AppProvider>
      </body>
    </html>
  );
}
