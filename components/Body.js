import styles from '../styles/Body.module.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {useRef} from 'react';
import {useRouter} from 'next/router'

function Body() {

    const inputRef = useRef();
    const router = useRouter();

    function searchIt(e){
        e.preventDefault();
        const term = inputRef.current.value;

        router.push(`/search?term=${term}`)
    }

    return (
        <form className={styles.body} onSubmit={searchIt}>
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google.com"/>
            <div className={styles.search}>
                <SearchIcon className={styles.icon1} />
                <input required type="search" ref={inputRef}/>
                <MicIcon className={styles.icon2} />
            </div>
            <div className={styles.btns}>
                <button type='submit'>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            
        </form>
    )
}

export default Body
