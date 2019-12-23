import classNames from 'classnames';
import styles from './Link.less';
import Link from 'next/link';

export default ({ className, href, children }) => {
    return (
        <Link href={href}><a className={classNames(styles.link, className)}>{children}</a></Link>
    );
}