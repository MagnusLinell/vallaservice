import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import VallaService from '../components/Vallaservice';
import styles from './vallaservice.less';
import Footer from '../components/Footer';
import Head from 'next/head';

export default () => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const fetchContent = async () => {
            const result = await fetch('https://cdn.contentful.com/spaces/5vatiodyxqrj/environments/master/entries/1IissOfXAqpOu2IsHE2DZG?access_token=nwN0wAJQLFgiBlhIM424UXLSh5InOLySILhmmR8dhWE');
            const body = await result.json();
            setContent(body.fields);
        };
        fetchContent();
    }, []);

    return (
        <>
            <Head lang="sv_SE">
                <title>{content.seoTitle}</title>
                <meta name="description" content={content.seoDescription} />
                <meta name="og:title" property="og:title" content={content.seoTitle} />
                <meta name="og:description" property="og:description" content={content.seoDescription} />
            </Head>
            <Header content={content} />
            <Main>
                <VallaService content={content} />
            </Main>
            <Footer />
        </>
    );
}