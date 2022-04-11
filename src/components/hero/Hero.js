import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import Select from 'react-select'
import { filterData } from '../../utils/filterData';
import './Hero.css'


const Hero = () => {
    const [data, setData] = useState({})
    const handleChange = (key, value) => {
        setData({
            [key]: value
        })
    }
    return (
        <div>
            <div className='hero'>
                <div className='content'>
                    <h1>Find the perfect place</h1>
                    <p className='search-text'> Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes. </p>
                </div>
            </div>
            <form className='search'>
                <Row>
                    <div className='filter-list'>
                        {filterData.map((filter, i) => (
                            <Col md={filter.width}>
                                <div className='' key={i}>
                                    <div className='label'>
                                        {filter.queryName}
                                    </div>
                                    <Select className='select-filter' name={filter.queryName} options={filter.items} onChange={e => handleChange(filter.queryName, e.value)} placeholder={filter.queryName} />
                                </div>
                            </Col>
                        ))}
                        <div className='button-filter' style={{marginTop: '7px'}}>
                            <Button style={{backgroundColor: '#E03D31', borderColor: '#E03D31'}}>Search</Button>
                        </div>
                    </div>
                </Row>
            </form>
            <div className='card-list'>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default Hero