import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Main from '../components/Main';
import Info from '../components/Info';
import styles from './index.less';
import Footer from '../components/Footer';

export default () => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const fetchContent = async () => {
            const result = await fetch('https://cdn.contentful.com/spaces/5vatiodyxqrj/environments/master/entries/2wPepcwYm7BUqZ6J8Xqf0t?access_token=nwN0wAJQLFgiBlhIM424UXLSh5InOLySILhmmR8dhWE');
            const body = await result.json();
            setContent(body.fields);
        };
        fetchContent();
    }, []);

    return (
        <>
            <Header content={content} />
            <Main>
                <Info content={content} className={styles.info} />
            </Main>
            <Footer />
        </>
    );
}