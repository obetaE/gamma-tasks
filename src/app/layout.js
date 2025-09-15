import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Poppins, Playfair_Display } from 'next/font/google';
import { AuthProvider } from './Providers';

// Configure Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins', // Optional: for CSS variable usage
});

// Configure Playfair Display
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair-display',
});


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gamma Tasks - Learning Platform',
  description: 'A customizable teaching platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} ${playfairDisplay.variable}`}>
        <AuthProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}