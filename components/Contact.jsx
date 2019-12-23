import classNames from 'classnames';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styles from './Contact.less';

export default ({content}) => {
    const {title, text} = content;
    const htmlText = {__html: documentToHtmlString(text)};
    return (
        <>
            <div className={styles.contact}>
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.about} dangerouslySetInnerHTML={htmlText} />
        </>
    );
};