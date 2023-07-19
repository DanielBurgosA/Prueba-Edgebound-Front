import React, {useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import Filters from '../filters/Filters';
import { PokemonContext } from '../../context/PokemonContext';

const SearchBar = () => {
    
    const {onInputChange, handlerSearch, search} = useContext(PokemonContext)
    const [filterOpen, setFilterOpen] = useState(false)
    const handleClickFilter= ()=>{
      setFilterOpen(!filterOpen)
    }

    return (
    <div className="container" >
        <div className="row mt-4">
            <div className="col">
                <div className="d-flex align-items-center">
                    <img src={require('../../images/pokemon-symbol-logo-png-31.png')} alt="Logo Pokemon" className="mr-4" width={"5%"} style={{ marginRight: '30px' }}/>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Buscar por nombre o número"  style={{ textAlign: 'right' }} onChange={onInputChange} value={search}/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" onClick={handlerSearch}>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-2">
        <div className="col">
          <div className="d-flex align-items-center">
            <Button variant="light" className="btn-sm" style={{ width: '40px', height: '40px'}} onClick={handleClickFilter}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                style={{ width: '25px', height: '25px' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </Button>
            <div className="ml-2">Filter</div>
          </div>
        </div>
      </div>
      <Filters active={filterOpen} close={handleClickFilter}/>
    </div>
  );
};


export default SearchBar;
