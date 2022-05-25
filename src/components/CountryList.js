import Card from './Card';

export default function CountryList({countryList}){
    console.log(countryList);
    return (
        <div className='row'>
            {countryList&&countryList.map(country=><Card  name={country.name.common} flag={country.flags.png} area={country.area} continents={country.continents} currencies={country.currencies} languages={country.languages}/>)}
        </div>
    )
}