import classNames from 'classnames';
import styles from './Main.less';

export default ({ className, children }) => {
    return (
        <main className={classNames(styles.main, className)}>
            <div className={styles.maxWidth}>
                {children}
            </div>
        </main>
    );
};