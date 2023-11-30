import './globals.css';

export const metadata = {
  title: 'Gil Sala Bordallo',
  description: 'Sport radar challenge',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
