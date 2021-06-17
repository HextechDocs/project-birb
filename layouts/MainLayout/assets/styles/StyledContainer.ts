import styled from 'styled-components';
import theme from 'styled-theming';

import GLOBALS from '@Styles/Globals';

const backgroundColor = theme('mode', {
    light: '#fff',
    dark: '#181818',
});

const textColor = theme('mode', {
    light: GLOBALS.light.color,
    dark: GLOBALS.dark.color,
});

export default styled.div`
    width: 100%;
    height: 100%;
    background-color: ${backgroundColor};
    color: ${textColor};
`;
