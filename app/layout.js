import './globals.css';

export const metadata = {
  title: 'Gil Sala Bordallo',
  description: 'Sport radar challenge',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>AFC Champions League</h1>
        {children}
      </body>
    </html>
  );
}
