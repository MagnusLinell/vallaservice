import styles from './VallaserviceTable.less';
import classNames from 'classnames';

export default ({ className }) => {
    return (
        <table className={classNames(styles.table, className)}>
            <tbody className={styles.tbody}>
                <tr>
                    <td>Rengöring av fästvalla</td>
                    <td>150 kr</td>
                </tr>
                <tr>
                    <td>Glidvallning lågfluor</td>
                    <td>299 kr</td>
                </tr>
                <tr>
                    <td>Rillning</td>
                    <td>150 kr</td>
                </tr>
                <tr>
                    <td>Fästvallning</td>
                    <td>250 kr</td>
                </tr>
                <tr>
                    <td>Sommar service</td>
                    <td>799 kr</td>
                </tr>
                <tr>
                    <td>Tävlingsvallning (Se Vasavallning)</td>
                    <td>749 – 1599 kr</td>
                </tr>
            </tbody>
        </table >
    );
};