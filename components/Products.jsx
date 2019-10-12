import classNames from 'classnames';
import styles from './Products.less';

export default ({ className }) => {
    return (
        <div className={classNames(styles.products, className)}>
            <h1 className={styles.title}>Vasaloppsveckan</h1>
            <div className={styles.prices}>
                <div>
                    Eko		fästvallning, paraffin, rillning		499 kr
                </div>
                <div>
                    Standard	fästvallning, lågfluorparaffin, rillning		599 kr
                </div>
                <div>
                    Premium	Utöver standard; högfluorparaffin		999 kr
                </div>
                <div>
                    Elit		Utöver premium; pulver			1299 kr
                </div>
                <div>
                    Elit+		Utöver elit; kloss eller vätska/fluid		1499 kr
                </div>
            </div>
            <div className={styles.smallFont}>
                <div>Specialerbjudande för företag och klubbar; Vid en beställning på minst 10 par skidor ges en rabatt på 15 % på ovanstående belopp.</div>
            </div>
        </div>
    );
}