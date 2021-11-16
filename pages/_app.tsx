import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Background, Header, ThemeProvider } from '../components';
import { IconContext } from 'react-icons';

function MyApp({ Component, pageProps }: AppProps) {

  const left = [
    {
      'path': '/',
      'title': 'Home'
    },
    {
      'path': '/about',
      'title': 'About'
    },
    {
      'path': '/resume',
      'title': 'Resume'
    }
  ];

  const right = [
    {
      'path': '/portfolio',
      'title': 'Portfolio'
    },
    {
      'path': '/services',
      'title': 'Services'
    },
    {
      'path': '/contact',
      'title': 'Contact'
    }
  ];

  return <IconContext.Provider value={{style: {verticalAlign: 'bottom'}}}>

    <ThemeProvider>
      <Header
        right={right}
        left={left}
        center={{
          'title': 'Angel Alvarado',
          'path': '/'
        }}
      />
      <Background >
        <Component {...pageProps} />
      </Background>
    </ThemeProvider>
  </IconContext.Provider>
}

export default MyApp
