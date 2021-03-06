import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Products from '../components/Products';
import styles from './vasaloppet.less';
import Footer from '../components/Footer';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

const Vasaloppet = ({ content }) => {
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
                <Products content={content} />
            </Main>
            <Footer />
        </>
    );
}

Vasaloppet.getInitialProps = async () => {
    const result = await fetch('https://cdn.contentful.com/spaces/5vatiodyxqrj/environments/master/entries/7JTwG3B79WQ4ZghaCo4ewa?access_token=nwN0wAJQLFgiBlhIM424UXLSh5InOLySILhmmR8dhWE');
    const body = await result.json();
    return { content: body.fields }
};

export default Vasaloppet;


