import classNames from 'classnames';
import VallaserviceTable from './VallaserviceTable';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styles from './Vallaservice.less';

export default ({ className, content }) => {
    const { title, text } = content;
    const htmlText = { __html: documentToHtmlString(text) };
    return (
        <div className={classNames(styles.products, className)}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.layout}>
                <img className={styles.image} src="//images.ctfassets.net/5vatiodyxqrj/1NOlVRCnORbGNDFyRyZtm8/cbb9e402df83c570b746fd0f8b6f051a/74238112_413188419362118_7347536798219763712_n.jpg" alt="skidor i rad" />
                <div>
                    <VallaserviceTable className={styles.prices} />
                    <div className={styles.smallFont} dangerouslySetInnerHTML={htmlText} />
                </div>
            </div>
        </div>
    );
}