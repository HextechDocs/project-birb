import styled from 'styled-components';
import theme from 'styled-theming';

import GLOBALS from '@Styles/Globals';

const backgroundColor = theme('mode', {
    light: '#fff',
    dark: '#1f1f1f',
});

const textColor = theme('mode', {
    light: GLOBALS.light.color,
    dark: GLOBALS.dark.color,
});

export default styled.div`
    width: 100vw;
`;
