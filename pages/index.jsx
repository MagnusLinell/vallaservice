import React from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Main from '../components/Main';
import Info from '../components/Info';
import styles from './index.less';
import Footer from '../components/Footer';
import Head from 'next/head';

const Index = ({ content }) => {
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
                <Info content={content} className={styles.info} />
            </Main>
            <Footer />
        </>
    );
}

Index.getInitialProps = async () => {
    const result = await fetch('https://cdn.contentful.com/spaces/5vatiodyxqrj/environments/master/entries/2wPepcwYm7BUqZ6J8Xqf0t?access_token=nwN0wAJQLFgiBlhIM424UXLSh5InOLySILhmmR8dhWE');
    const body = await result.json();
    return { content: body.fields }
};

export default Index;