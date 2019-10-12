import Header from '../components/Header';
import Main from '../components/Main';
import Products from '../components/Products';
import styles from './vasaloppet.less';

export default () => {
    return (
        <>
            <Header />
            <Main>
                <Products />
            </Main>
        </>
    );
}