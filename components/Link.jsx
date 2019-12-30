import classNames from 'classnames';
import styles from './Link.less';
import Link from 'next/link';

export default ({ className, href, large, children }) => {
    return (
        <Link href={href}><a className={classNames(styles.link, large && styles.large, className)}>{children}</a></Link>
    );
}