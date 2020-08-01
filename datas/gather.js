const fetch = require('node-fetch');
const debug = require('debug')('australia-covid:gather');


const CASES_API_URL = "https://data.nsw.gov.au/data/api/3/action/package_show?id=aefcde60-3b0c-4bc0-9af1-6fe652944ec2";

function getCases() {
    return ( 
        fetch(CASES_API_URL)
        .then(res => res.json())
        .then(json => json.resources[0])
        .then( ({ url, last_modified }) => {
            fetch(url)
            .then(res => res.csv())
        })
}

module.exports = { getCases }