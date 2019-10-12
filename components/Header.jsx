import Link from 'next/link';
import classNames from 'classnames';
import styles from './Header.less';

export default () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <i className={classNames('fas', 'fa-skiing-nordic', styles.icon)}></i>
                <Link href="/"><a className={styles.link}>Vallamannen</a></Link>
                <Link href="/vasaloppet"><a className={styles.link}>Vasaloppet</a></Link>
                <Link href="/vallaservice"><a className={styles.link}>Vallaservice</a></Link>
                <Link href="/kontakt"><a className={styles.link}>Kontakt</a></Link>
            </nav>
        </header>
    );
};