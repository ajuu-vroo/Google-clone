import styles from '../styles/Header.module.css'
import AppsIcon from '@material-ui/icons/Apps';
import { signIn, signOut, useSession } from 'next-auth/client'

function Header() {

    const [ session, loading ] = useSession()

    return (
        <div className={styles.header}>
            <p>Gmail</p>
            <p>Images</p>
            <AppsIcon className={styles.icon} onClick={() => signOut()}/>
            {!session ? (<button onClick={() => signIn('google')}>Sign in</button>) : (<img className={styles.userIcon} src={session.user.image} alt='lol' />)}
            
        </div>
    )
}

export default Header
