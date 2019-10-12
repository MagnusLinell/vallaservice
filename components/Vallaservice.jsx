import classNames from 'classnames';
import VallaserviceTable from './VallaserviceTable';
import styles from './Vallaservice.less';

export default ({ className }) => {
    return (
        <div className={classNames(styles.products, className)}>
            <h1 className={styles.title}>Skidservice</h1>
            <VallaserviceTable className={styles.prices} />
            <div className={styles.smallFont}>
                <div>Specialerbjudande för företag och klubbar; Vid en beställning på minst 10 par skidor ges en rabatt på 15 % på ovanstående belopp.</div>
                <div>Ej rengjorda skidor vid tävlingsvallning debiteras med 150 kr/par.</div>
            </div>
            <div>
                Maila <a href="mailto:vallaservice@vallaservice.com">vallaservice@vallaservice.com</a> din beställning.
            </div>
        </div>
    );
}