import React,{useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import Select from 'react-select'
import { Button, Col, Row } from 'react-bootstrap';
import { filterData, defaultFilter } from '../../utils/filterData';
import './Hero.css'


const Hero = () => {
    const [data, setData] = useState(defaultFilter)
    const handleChange = (key, value) => {
        data.map((filter,i) => {
            if (filter.name === key){
                filter.value = value
            }
        })
        setData(data)
    }
    const onSubmitFrom = async e => {
        e.preventDefault();
        try {
            const body = {data};
            const response = await fetch("http://localhost:5000/",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find the perfect place</h1>
                <p className='search-text'> Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes. </p>
                {/* <form className='search'>

                    <div>
                    {filterData.map((filter,i) => (
                        <div className='filter' key={i}>{filter.queryName}
                        <Select options={filter.items} onChange={(e) => handleChange(filter.queryName, e.value)}/>
                        </div>                    
                    ))}
                    </div>
                    <button onClick={(e) => onSubmitFrom(e)}><AiOutlineSearch className='icon'/></button>
                    
                </form> */}
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
        </div>
    )
} 
export default Hero