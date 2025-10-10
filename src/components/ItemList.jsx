import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from './Item';

function ItemList({ items }) {
    return (
        <Container className='mt-5'>
            <Row>
                {items.map(item => <Item item={item} key={item.id} />)}
            </Row>
        </Container>    
    )
}
export default ItemList 