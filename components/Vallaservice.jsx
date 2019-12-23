import classNames from 'classnames';
import VallaserviceTable from './VallaserviceTable';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styles from './Vallaservice.less';

export default ({ className, content }) => {
    const {title, text} = content;
    const htmlText = {__html: documentToHtmlString(text)};
    return (
        <div className={classNames(styles.products, className)}>
            <h1 className={styles.title}>{title}</h1>
            <VallaserviceTable className={styles.prices} />
            <div className={styles.smallFont} dangerouslySetInnerHTML={htmlText} />
        </div>
    );
}