import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchBar from '../../components/searchbar/Searchbar';
import Page from '../../components/page/Page';
import Detail from '../../components/detail/Detail';
import Loading from '../../components/Loading/Loading.jsx';
import { PokemonContext } from '../../context/PokemonContext';



export default function Home() {
  
  const {loading} = useContext (PokemonContext)

  return (
    loading?<Loading/>: 
    <div className="container">
      <Row>
        <Col md={12}>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Page />
        </Col>
        <Col md={4}>
          <Detail />
        </Col>
      </Row>
    </div>
  );
}