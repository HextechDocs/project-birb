import React from 'react';
import { RecoilRoot } from 'recoil';

import ThemedApp from '@Components/ThemedApp';

import 'css-reset-and-normalize/css/button-reset.min.css';
import 'css-reset-and-normalize/css/link-reset.min.css';
import 'css-reset-and-normalize/css/reset-and-normalize.min.css';
import 'bulma/css/bulma.min.css';

import '@Styles/globals.sass';

function HextechDocs({ Component, pageProps }: any) {
    return (
        <RecoilRoot>
            <ThemedApp Component={Component} pageProps={pageProps} />
        </RecoilRoot>
    );
}

export default HextechDocs;
