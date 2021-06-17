import React from 'react';

import MainLayout from '@Layouts/MainLayout';
import Navbar from '@Components/Navbar';

import HomeStyled from '@Styles/pages';

import { Hero } from 'react-bulma-components';

const Home = (): JSX.Element => {
    return (
        <MainLayout>
            <Navbar />
            <HomeStyled>
                <Hero size={'fullheight'}>
                    <Hero.Header></Hero.Header>
                    <Hero.Body></Hero.Body>
                    <Hero.Footer></Hero.Footer>
                </Hero>
            </HomeStyled>
        </MainLayout>
    );
};

export default Home;
