import React, { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { Button, Form, Row, Col } from 'react-bootstrap';
import style from './Filters.module.css';

export default function Filters({ active, close }) {
    const { handleCheckbox } = useContext(PokemonContext);

    return (
        <div className={`${style.containerFilters} ${active ? style.active : ''}`}>
            <div className={style.filterByType}>
                <Row>
                    <Col>
                        <h4>Tipo</h4>
                    </Col>
                    <Col>
                        <Button onClick={close} className={style.boton}>close</Button>
                    </Col>
                </Row>
                <Form.Check
                    type="checkbox"
                    id="bug"
                    label="Bug"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="dark"
                    label="Dark"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="dragon"
                    label="Dragon"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="electric"
                    label="Electric"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="fairy"
                    label="Fairy"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="fighting"
                    label="Fighting"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="fire"
                    label="Fire"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="flying"
                    label="Flying"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="ghost"
                    label="Ghost"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="grass"
                    label="Grass"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="ground"
                    label="Ground"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="ice"
                    label="Ice"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="normal"
                    label="Normal"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="poison"
                    label="Poison"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="psychic"
                    label="Psychic"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="rock"
                    label="Rock"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="shadow"
                    label="Shadow"
                    onChange={handleCheckbox}
                />                      
                <Form.Check
                    type="checkbox"
                    id="steel"
                    label="Steel"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="unknow"
                    label="Steel"
                    onChange={handleCheckbox}
                />
                <Form.Check
                    type="checkbox"
                    id="water"
                    label="Water"
                    onChange={handleCheckbox}
                />
            </div>
        </div>
    );
}