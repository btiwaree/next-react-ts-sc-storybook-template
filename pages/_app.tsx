import type { AppProps } from 'next/app';
import React from 'react';

import { GlobalStyle } from '../GlobalStyle';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
