
import styles from './Footer.less';
import Link from './Link';

export default () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.link}>Svensk Vallaservice</span>
            <span className={styles.link}>Innehar F-skattesedel</span>
        </footer>
    );
};