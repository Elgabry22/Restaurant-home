import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Container from './Main';







const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Resturant App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
       
        <Container />
        
        
        
        
    </div>
  )
}
