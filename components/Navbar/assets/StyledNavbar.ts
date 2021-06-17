import styled from 'styled-components';
import theme from 'styled-theming';

import GLOBALS from '@Styles/Globals';

const menuBg = theme('mode', {
    light: GLOBALS.light.menuBGColor,
    dark: GLOBALS.dark.menuBGColor,
});

const navbarBg = theme('mode', {
    light: GLOBALS.light.navbarBgColor,
    dark: GLOBALS.dark.navbarBgColor,
});

const textColor = theme('mode', {
    light: GLOBALS.light.color,
    dark: GLOBALS.dark.color,
});

export default styled.div`
    width: 100%;
    background-color: ${navbarBg};
    color: ${textColor};
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    > nav {
        background-color: ${navbarBg};
        width: 100%;
        height: 5rem;
        justify-content: center;
        color: ${textColor};
        > .navbar-menu {
            background-color: ${menuBg};
        }

        > div > .navbar-brand {
            height: 100%;
            padding: 1%;
        }

        > .menus {
            height: 100%;
            & > .navbar-brand {
                height: 100%;
            }
            & > .navbar-burger {
                margin: 0 !important;
                padding: 0;
            }
        }

        > .menus > * {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        * {
            color: ${textColor};
        }

        > .navbar-burger {
            //justify-content: center;
            //height: 100%;
            //align-content: center;
        }

        > .navbar-menu > .navbar-brand > img {
            padding: 3%;
            max-height: 250px;
        }

        @media (min-width: 961px) {
            > .navbar-menu > .navbar-brand {
                display: flex !important;
            }

            #logolarge {
                display: none;
            }
        }

        > .navbar-menu > .navbar-brand {
            justify-content: center;
            height: 100%;
            & > * > * {
                height: 100%;
            }
        }

        > * {
            justify-content: center;
        }
    }
`;
