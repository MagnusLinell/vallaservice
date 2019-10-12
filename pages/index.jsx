import Header from '../components/Header';
import Main from '../components/Main';
import Info from '../components/Info';
import styles from './index.less';

export default () => {
    return (
        <>
            <Header />
            <Main>
                <Info className={styles.info} />
            </Main>
        </>
    );
}