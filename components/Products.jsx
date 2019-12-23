import classNames from 'classnames';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ProductsTable from './ProductsTable';
import styles from './Products.less';

export default ({ className, content }) => {
    const {title, text} = content;
    const htmlText = {__html: documentToHtmlString(text)};
    return (
        <div className={classNames(styles.products, className)}>
            <h1 className={styles.title}>{title}</h1>
            <ProductsTable className={styles.prices} />
            <div className={styles.smallFont} dangerouslySetInnerHTML={htmlText} />
        </div>
    );
}