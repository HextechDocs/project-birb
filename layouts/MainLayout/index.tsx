import StyledContainer from './assets/styles/StyledContainer';
import Header from '@Components/Header';

const MainLayout = ({ children }: any): JSX.Element => {
    return (
        <StyledContainer>
            <Header />
            <main>{children}</main>
        </StyledContainer>
    );
};

export default MainLayout;
