import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import './search.css'

var AllcollegesDetails=[]
export default function Search() {
    
    const [filteredColleges, setCollegesFilter] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    const handleFilter=(event)=>{
        const searchString=event.target.value;
        setSearchWord(searchString);
        const newFilter=AllcollegesDetails.filter((item)=>{
            return item.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        if(searchString==''){
            setCollegesFilter('')
        }
        else{
            setCollegesFilter(newFilter)
        }
        
    }

    const clearInput=()=>{
        setCollegesFilter('');
        setSearchWord('');
    }

    useEffect(()=>{
        axios.get(`http://universities.hipolabs.com/search?country=India`)
        .then(response=>{
            let result=response.data
            result.map((item)=>{AllcollegesDetails.push(item)}) 
        })
        .catch()
    },[])

    return (
        <div className='search-container'>
            <div className='search-body'>
                <h3>Search Your University</h3>
                <input type='text' value={searchWord} placeholder='Type the name of your university' onChange={handleFilter}/>
                {searchWord.length==0?<i className="fas fa-search"/>:<i className="fas fa-times" id='clearBtn' onClick={clearInput}/>}
                {filteredColleges.length==0 || //false
                <div className='search-result'>
                    {filteredColleges.slice(0,100).map((item,index)=>{
                        return <a href={item.web_pages[0]} target='_blank'><div key={index}>{item.name}</div></a>
                    })}
                </div>}
            </div>
            
        </div>
    )
}
