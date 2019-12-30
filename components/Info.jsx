import classNames from 'classnames';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styles from './Info.less';

export default ({ className, content }) => {
    const {title, text} = content;
    const htmlText = {__html: documentToHtmlString(text)};
    return (
        <div className={classNames(styles.info, className)}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.layout}>
                <img className={styles.image} src="//images.ctfassets.net/5vatiodyxqrj/3IGWsrNw2IYK2VCRd6TILY/637cc5e50c60beaf2cac9dd32cc22f8f/76688987_415513609375544_3464621771175493632_n.jpg?fm=webp" alt="vallar skidor" />
                <div dangerouslySetInnerHTML={htmlText} />
            </div>
        </div>
    );
}