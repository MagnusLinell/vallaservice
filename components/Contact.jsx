import classNames from 'classnames';
import styles from './Contact.less';

export default () => {
    return (
        <>
            <div className={styles.contact}>
                <h1 className={styles.title}>Kontakt / Beställ</h1>
                <div className={styles.row}>Ange produkt, antal skidor och lämningsdatum vid beställning. Upphämtning sker dagen efter.</div>
                <div className={styles.row}><i className={classNames("fas", "fa-mobile", styles.icon)}></i>&nbsp;&nbsp;&nbsp;<a href="tel:070-23 55 223">070-23 55 223</a></div>
                <div className={styles.row}><i className={classNames("fas", "fa-envelope", styles.icon)}></i> <a href="mailto:vallaservice@vallaservice.com">vallaservice@vallaservice.com</a></div>
                <div className={styles.row}><i className={classNames("fas", "fa-home", styles.icon)}></i> Kråkstigen 78, 19823 Falköping</div>
            </div>
            <div className={styles.about}>
                <h2 className={styles.title}>Om oss</h2>
                <p>Vi har många års erfarenhet från vallning på olika nivåer. Spannet sträcker sig från glada motionärer till elitskidåkare i den absoluta eliten i både längdskidor och skidskytte. Vi har varit med och ”vallat hem” ett flertal Europa Cup, JVM och SM-medaljer genom åren.</p>
                <p>Inför varje tävling registreras olika faktorer som indikerar val av produkter och slipar. Sen testas de olika produkterna för att hitta de produkter som är absolut bäst lämpad för aktuellt före. Vi har ett väl inarbetat system som vi arbetar mot och det har lett till ett flertal Europa Cup medaljer, JVM-medaljer och SM-medaljer genom åren.</p>
                <p>Vi innehar F-skattsedel.</p>
            </div>
        </>
    );
};