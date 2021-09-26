import styles from '../styles/HeaderSearch.module.css';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {useRouter} from 'next/router';
import {useRef} from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function HeaderSearch() {
    
    const router = useRouter();
    const inputRef = useRef()
    const [ session, loading ] = useSession()

    function goBack(){
        router.push('/')
    }

    function searchIt(e){
        e.preventDefault();
        const term = inputRef.current.value;

        router.push(`/search?term=${term}`)
    }
    return (
        <>
        <div className={styles.header}>
            <div className={styles.container1}>
                <img onClick={goBack}
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="google..com" />
            </div>
            <div className={styles.container2}>
                <form className={styles.search} onSubmit={searchIt}>
                    
                    <input type="search" defaultValue={router.query.term} ref={inputRef} />
                    <div className={styles.line}>
                        |
                    </div>
                    <button type='submit' className={styles.submitButton}>
                    <SearchIcon className={styles.icon1} />
                    <MicIcon className={styles.icon2} />
                    </button>
                </form>

                <div className={styles.text}>
                    <div className={styles.selected}>
                <p><SearchIcon />
                    All</p>
                    </div>
                <p><ImageSearchIcon />
                    Images</p>
                <p><MenuBookIcon />
                    News</p>
                <p><LocalOfferIcon />
                    Shopping</p>
                <p><RoomIcon />
                    Maps</p>
                <p><MoreVertIcon />
                    More</p>
                </div>
            </div>
            <div className={styles.container3}>
                <AppsIcon className={styles.icon3} onClick={() => signOut()} />
                {!session ? (<button onClick={() => signIn('google')}>Sign in</button>) : (<img className={styles.userIcon} src={session.user.image} alt='lol' />)}
            </div>

        </div>
        <div className={styles.headerMobile}>
            <div className={styles.container4}>
                <img onClick={goBack}
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="google..com" />
            </div>
            <form className={styles.container5} onSubmit={searchIt}>
                    
                    <input type="search" defaultValue={router.query.term} ref={inputRef} />                    
            </form>
        </div>

        </>
    )
}
