import Header from '../components/Header';
import Main from '../components/Main';
import Contact from '../components/Contact';
import styles from './kontakt.less';

export default () => {
    return (
        <>
            <Header />
            <Main>
                <Contact />
            </Main>
        </>
    );
}