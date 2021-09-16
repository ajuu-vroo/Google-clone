import {Fragment} from 'react'
import HeaderSearch from '../../components/HeaderSearch'
import SearchResults from '../../components/SearchResults'

function index({results}) {
    return (
        <Fragment>
            <HeaderSearch values/>
            <SearchResults data={results}/>
        </Fragment>
    )
}

export default index
export async function getServerSideProps(context){
    const q = context.query.term;
    const index = context.query.start || '0';

    const rawData = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&q=${q}&start=${index}`).then(response => response.json());

    return {
        props: {
        results : rawData ,
    },
    };
}