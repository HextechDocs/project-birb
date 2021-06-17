import { useState } from 'react';
import { Navbar } from 'react-bulma-components';
import Link from 'next/link';
import StyledNavbar from './assets/StyledNavbar';

const NavigationBar = () => {
    const [active, setActive] = useState(false);

    const BurgerHandler = () => {
        setActive(!active);
    };

    return (
        <StyledNavbar>
            <Navbar fixed={'top'}>
                <div className="menus">
                    <Navbar.Brand id="logosmall">
                        <Link href={'/'}>
                            <img src="/assets/static/img/birb.png" alt="" style={{ height: '100%' }} />
                        </Link>
                        <Navbar.Burger
                            aria-expanded={`${active}`}
                            aria-label="menu"
                            data-target="navbarmenu"
                            className={`${active ? 'is-active' : ''}`}
                            onClick={() => {
                                BurgerHandler();
                            }}
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </Navbar.Burger>
                    </Navbar.Brand>
                </div>

                <Navbar.Menu id="navbarmenu" className={`${active ? 'is-active' : ''}`}>
                    <Navbar.Item>
                        <Link href={'/'}>Home</Link>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Link href={'#projects'}>Projects</Link>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Link href={'#tools'}>Tools</Link>
                    </Navbar.Item>
                    <Navbar.Brand id="logolarge">
                        <div
                            onClick={() => {
                                BurgerHandler();
                            }}
                        >
                            <img src="/assets/static/img/birb.png" alt="" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Item>
                        <Link href={'#team'}>Team</Link>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Link href={'https://forums.hextechdocs.dev/'}>Forums</Link>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Link href={'https://docs.hextechdocs.dev'}>Docs</Link>
                    </Navbar.Item>
                </Navbar.Menu>
            </Navbar>
        </StyledNavbar>
    );
};

export default NavigationBar;
