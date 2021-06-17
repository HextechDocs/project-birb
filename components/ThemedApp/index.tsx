import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useRecoilState } from 'recoil';

import { ThemeState } from '@State/components/ThemedApp';

export default function HextechDocs({ Component, pageProps }: any): JSX.Element {
    const [theme] = useRecoilState(ThemeState);

    return (
        <ThemeProvider theme={{ mode: theme }}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
