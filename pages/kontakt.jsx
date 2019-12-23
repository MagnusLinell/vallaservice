import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Contact from '../components/Contact';
import styles from './kontakt.less';
import Footer from '../components/Footer';

export default () => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const fetchContent = async () => {
            const result = await fetch('https://cdn.contentful.com/spaces/5vatiodyxqrj/environments/master/entries/FQ9ONV9n31EJ6AhziuD6h?access_token=nwN0wAJQLFgiBlhIM424UXLSh5InOLySILhmmR8dhWE');
            const body = await result.json();
            setContent(body.fields);
        };
        fetchContent();
    }, []);
    return (
        <>
            <Header content={content} />
            <Main>
                <Contact content={content} />
            </Main>
            <Footer />
        </>
    );
}