import styles from '../styles/SearchResults.module.css'
import Head from "next/head"

function SearchResults({ data }) {
    <Head>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>
    </Head>

    const concatLink =(result)=>{
        if (result?.formattedUrl?.length >= 30){
            return result.formattedUrl.substr(0,45) + '...'
        }
    }
    const concatTitle =(result)=>{
        if (result?.title?.length >= 30){
            return result.title.substr(0,30) + '...'
        }else{
            return result.title
        }
    }
    return (
        <div className={styles.searchResults}>
            <p className={styles.info}>
                About {data.searchInformation?.formattedTotalResults} results ({data.searchInformation?.formattedSearchTime} seconds)
         </p>

            {data.items?.map(result => {
                let url = concatLink(result)
                let title = concatTitle(result)
                
                return(<div key={result.link} className={styles.map}>
                    <div className={styles.link}>
                        <a href={result.link}>{url}</a><br/>
                        <a href={result.link}>{title}</a>
                    </div>
                    <p>{result.snippet}</p>
                </div>
            )})}
        </div>
    )
}

export default SearchResults


