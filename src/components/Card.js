import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';

export default function Cards(props){
    const {flag, name, area, continents, currencies, languages} = props;
    return (
        <Card style={{ width: '22rem' }} className="m-3">
            <Card.Img variant="top" src={flag} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <span><b>Area: </b>{area} </span>
                <b>
                    Languages:
                </b>
                <ul>
                    {languages && Object.values(languages).map(lang=><li>{lang}</li>)}
                </ul>

                <b>
                    Currencies
                </b>
                <ul>
                    {currencies && Object.values(currencies).map(curr=><li>{curr.name}</li>)}
                </ul>

                <b>
                    Continents
                </b>
                <ul>
                    {continents.map(cont=><li>{cont}</li>)}
                </ul>
            </Card.Body>

        </Card>
    )
}