import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import 'normalize.css/normalize.css';
import './_app.less';
import Fingerprint2 from 'fingerprintjs2';

class MyApp extends App {
    componentDidMount() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/service-worker.js").catch(err => console.error("Service worker registration failed", err));
        }
        Fingerprint2.getV18((clientId) => {
            ga('create', 'UA-155190132-1', {
                'storage': 'none',
                'clientId': clientId
            });
            ga('set', 'anonymizeIp', true);
            ga('send', 'pageview');
        });
    }

    setGoogleTags() {
        return {
            __html:
                `
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject'] = r;i[r]=i[r]||function(){
                    (i[r].q = i[r].q || []).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
                `
        };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head lang="sv_SE">
                    <title>Svensk Vallaservice</title>
                    <meta name="description" content="Svensk Vallaservice" />
                    <meta name="og:title" property="og:title" content="Svensk Vallaservice" />
                    <meta name="og:description" property="og:description" content="Svensk Vallaservice" />
                    <meta name="og:type" property="og:type" content="website" />
                    <meta name="robots" content="index, follow" />
                    <link href="/" rel="canonical" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=1" />
                    <meta property="og:site_name" content="Svensk Vallaservice" />
                    <meta name="theme-color" content="#1e272e" />
                    <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/manifest.webmanifest" />
                    <meta charSet="utf-8" />

                    <link rel="preconnect" href="https://cdn.contentful.com" crossOrigin="anonymous" />
                    <link rel="preconnect" href="https://images.ctfassets.net/" crossOrigin="anonymous" />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />

                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                        lazyload="true"
                        async
                        defer
                        rel="stylesheet"
                    />
                </Head>
                <Component {...pageProps} />
                <script async defer dangerouslySetInnerHTML={this.setGoogleTags()} />
            </>
        );
    }
}

export default MyApp