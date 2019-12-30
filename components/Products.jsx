import classNames from 'classnames';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ProductsTable from './ProductsTable';
import styles from './Products.less';

export default ({ className, content }) => {
    const { title, text } = content;
    const htmlText = { __html: documentToHtmlString(text) };
    return (
        <div className={classNames(styles.products, className)}>
            <h1 className={styles.title}>{title}</h1>
            { /* <img className={styles.image} src="//images.ctfassets.net/5vatiodyxqrj/A6v8wkAFNlnEnxzRZTom7/36702f87ee1412707c5c198bafce89b1/74576993_2369316313196151_7371427605343371264_n.jpg?fm=webp" alt="emil i skidbacke" /> */}
            <ProductsTable className={styles.prices} />
            <div className={styles.smallFont} dangerouslySetInnerHTML={htmlText} />
        </div>
    );
}