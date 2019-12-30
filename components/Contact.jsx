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
            <div className={styles.layout}>
                <img className={styles.image} src="//images.ctfassets.net/5vatiodyxqrj/1FRvCWmUj69j6s74v7OOwb/17052c46f8e025d5c671456cdad7e51b/72461756_2320791841364001_1238926377873309696_n.jpg?fm=webp" alt="stadion" />
                <div className={styles.about} dangerouslySetInnerHTML={htmlText} />
            </div>
        </>
    );
};