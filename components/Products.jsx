import classNames from 'classnames';
import ProductsTable from './ProductsTable';
import styles from './Products.less';

export default ({ className }) => {
    return (
        <div className={classNames(styles.products, className)}>
            <h1 className={styles.title}>Vasaloppsveckan</h1>
            <ProductsTable className={styles.prices} />
            <div className={styles.smallFont}>
                <div>Specialerbjudande för företag och klubbar; Vid en beställning på minst 10 par skidor ges en rabatt på 15 % på ovanstående belopp.</div>
            </div>
            <div>
                Maila <a href="mailto:vallaservice@vallaservice.com">vallaservice@vallaservice.com</a> din beställning.
            </div>
        </div>
    );
}