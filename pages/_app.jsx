import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import './_app.less';

class MyApp extends App {
    setGoogleTags() {
        return {
            __html:
                `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'ID');
                `
        };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Svensk Vallaservice</title>
                    <meta name="description" content="Svensk Vallaservice" />
                    <meta name="og:title" property="og:title" content="Svensk Vallaservice" />
                    <meta name="og:description" property="og:description" content="Svensk Vallaservice" />
                    <meta name="og:type" property="og:type" content="website" />
                    <meta name="robots" content="index, follow" />
                    <link href="/" rel="canonical" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=1" />
                    <meta property="og:site_name" content="Svensk Vallaservice" />
                    <meta name="theme-color" content="#ffd32a" />
                    <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/manifest.webmanifest" />
                    <meta charSet="utf-8" />

                    <script async src="https://www.googletagmanager.com/gtag/js?id=[ID]"></script>

                    <script async dangerouslySetInnerHTML={this.setGoogleTags()} />

                    <link 
                        href="https://fonts.googleapis.com/css?family=Roboto&display=swap" 
                        lazyload="true"
                        rel="stylesheet" />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                        lazyload="true"
                    />
                    <link rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                        crossOrigin="anonymous"
                        lazyload="true"
                    />
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp