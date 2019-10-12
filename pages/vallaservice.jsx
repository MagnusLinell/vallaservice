import Header from '../components/Header';
import Main from '../components/Main';
import VallaService from '../components/VallaService';
import styles from './vallaservice.less';

export default () => {
    return (
        <>
            <Header />
            <Main>
                <VallaService />
            </Main>
        </>
    );
}