import styles from './ProductsTable.less';
import classNames from 'classnames';

export default ({ className }) => {
    return (
        <table className={classNames(styles.table, className)}>
            <thead className={styles.thead}>
                <tr>
                    <th></th>
                    <th>Eko</th>
                    <th>Standard</th>
                    <th>Premium</th>
                    <th>Elit</th>
                    <th>Elit+</th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                <tr>
                    <td>Fästvallning</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                </tr>
                <tr>
                    <td>Rillning</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                </tr>
                <tr>
                    <td>Paraffin</td>
                    <td>basic</td>
                    <td>lågfluor</td>
                    <td>högfluor</td>
                    <td>högfluor</td>
                    <td>högfluor</td>
                </tr>
                <tr>
                    <td>Pulver</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>X</td>
                    <td>X</td>
                </tr>
                <tr>
                    <td>Kloss eller vätska/fluid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>X</td>
                </tr>
            </tbody>
            <tfoot className={styles.tfoot}>
                <tr>
                    <td></td>
                    <td>499 kr</td>
                    <td>599 kr</td>
                    <td>999 kr</td>
                    <td>1299 kr</td>
                    <td>1499 kr</td>
                </tr>
            </tfoot>
        </table >
    );
};