import classNames from 'classnames';
import styles from './Info.less';

export default ({ className }) => {
    return (
        <div className={classNames(styles.info, className)}>
            <h1 className={styles.title}>Vallamannen</h1>
            <div>
                <p>Vi har många års erfarenhet från vallning på olika nivåer. Spannet sträcker sig från glada motionärer till elitskidåkare i den absoluta eliten i både längdskidor och skidskytte. Vi har varit med och ”vallat hem” ett flertal Europa Cup, JVM och SM-medaljer genom åren.</p>
                <p>Inför varje tävling registreras olika faktorer som indikerar val av produkter och slipar. Sen testas de olika produkterna för att hitta de produkter som är absolut bäst lämpad för aktuellt före. Vi har ett väl inarbetat system som vi arbetar mot och det har lett till ett flertal Europa Cup medaljer, JVM-medaljer och SM-medaljer genom åren.</p>
                <p>Vi finns på plats under hela vasaloppsveckan och vallar inför alla tävlingar: Boka redan idag!</p>
            </div>
        </div>
    );
}