import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <>
            <footer className={styles.footer1}>
                <p className={styles.country}>{Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
                <hr/>
                <div className={styles.container}>
                    <div className={styles.item1}>
                        <p>About</p>
                        <p>Advertising</p>
                        <p>Business</p>
                        <p>How Search works</p>
                    </div>
                    <div className={styles.item2}>
                        <p>Privacy</p>
                        <p>Terms</p>
                        <p>Settings</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
