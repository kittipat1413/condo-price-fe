import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Select from 'react-select'
import { filterData } from '../../utils/filterData';
import './Hero.css'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find the perfect place</h1>
                <p className='search-text'> Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes. </p>
                <form className='search'>

                    <div>
          
                    {filterData.map((filter) => (
                        <div className='filter' >{filter.queryName}
                        <Select name={filter.queryName} options={filter.items} onChange={e => console.log(filter.queryName,e.value)}/>
                        </div>
                    
                    ))}
                    </div>
                    <button type='submit'><AiOutlineSearch className='icon'/></button>
                    
                </form>
            </div>
        </div>
    )
}

export default Hero