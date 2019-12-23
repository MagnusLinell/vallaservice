
import classNames from 'classnames';
import styles from './Header.less';
import Link from './Link';

export default () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <i className={classNames('fas', 'fa-skiing-nordic', styles.icon)}></i>
                <Link className={styles.link} href="/">Vallamannen</Link>
                <Link className={styles.link} href="/vasaloppet">Vasaloppet</Link>
                <Link className={styles.link} href="/vallaservice">Vallaservice</Link>
                <Link className={styles.link} href="/kontakt">Kontakt</Link>
            </nav>
        </header>
    );
};