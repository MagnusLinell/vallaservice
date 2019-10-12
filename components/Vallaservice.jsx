import classNames from 'classnames';
import styles from './Vallaservice.less';

export default ({ className }) => {
    return (
        <div className={classNames(styles.products, className)}>
            <h1 className={styles.title}>Skidservice</h1>
            <div className={styles.prices}>
                <div>
                    Rengöring av fästvalla			150 kr
                </div>
                <div>
                    Glidvallning lågfluor			299 kr
                </div>
                <div>
                    Rillning				150 kr
                </div>
                <div>
                    Fästvallning 				250 kr
                </div>
                <div>
                    Sommar service				799 kr
                </div>
                <div>
                    Tävlingsvallning (Se Vasavallning)		749 – 1599 kr
                </div>
            </div>
            <div className={styles.smallFont}>
                <div>Specialerbjudande för företag och klubbar; Vid en beställning på minst 10 par skidor ges en rabatt på 15 % på ovanstående belopp.</div>
                <div>Ej rengjorda skidor vid tävlingsvallning debiteras med 150 kr/par.</div>
            </div>
        </div>
    );
}