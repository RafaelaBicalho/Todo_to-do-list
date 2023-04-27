import styles from './Header.module.css'
import rocketLogo from '../assets/rocket-logo.svg'

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <img src={rocketLogo} alt="Logotipo da Rocket" />
                <p>todo</p>
            </div>
        </header>
    )
}