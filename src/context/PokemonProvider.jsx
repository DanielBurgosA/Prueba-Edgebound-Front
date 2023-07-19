import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import axios from 'axios';
import { Alert } from "react-bootstrap";

export default function PokemonProvider({ children }) {
    
  
    ////estados sin filtros
    //paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [topPage, setTopPage] = useState(1)
    const [loading, setLoading] = useState(true);

    //pokemons a rendreizar
    const [pokemons, setPokemons] = useState([])
    
    //pokemon seleccionado
    const [idPokemonSelected, setIDPokemonSelected] = useState(1)
    const [pokemonSelected, setPokemonSelected] = useState({})

    //URL API
    const baseURL = 'https://pokeapi.co/api/v2/'


    /////////// funciones aplicacion sin filtros///////////
    
    //llamar pokemones sin filtros
    const getPokemons = async(page = 1) =>{
        // calcular los límites en la URL
        let top =page*6-1;
        let bot = top-5;

        try {
            const res1 = await axios.get(`${baseURL}pokemon`, {params: {offset: bot, limit: 6}});
            const data1 = res1.data;
            setTopPage(169)
            
            const promises = await data1.results.map(async(pokemon)=>{
                const res2 = await axios.get(pokemon.url);
                const data2 = res2.data;
                return data2
            })
            
            const pokelist= await Promise.all(promises);
            setPokemons(pokelist);
            
        } catch (error) {
            console.error(error);
        }       
    }
    
    
    //conseguir la info de un pokemon por su id
    const pokemonByID = async(id)=>{
        try {
            const res = await axios.get(`${baseURL}pokemon/${id}`);
            const data = res.data;
            data? setPokemonSelected(data) : (()=>{<Alert> No se encontró resultado</Alert>})()
            data&&setIDPokemonSelected(data.id)
            if (currentPage!==Math.ceil(data.id/6)&&searching===true) {
                setCurrentPage(Math.ceil(data.id/6));
                setSearching(false)
            }
        } catch (error) {
            console.error(error);
        }       
    }
    // useEffect para seleccionar un pokemon
    useEffect(()=>{
        pokemonByID(idPokemonSelected);
    }, [idPokemonSelected])
    

    ////filtrado//////////////////////
    const [typeSelected, setTypeSelected] = useState({
		bug: false,
		dark: false,
		dragon: false,
		electric: false,
		fairy: false,
		fighting: false,
		fire: false,
		flying: false,
		ghost: false,
		grass: false,
		ground: false,
		ice: false,
		normal: false,
		poison: false,
		psychic: false,
		rock: false,
		shadow: false,
		steel: false,
		unknow: false,
		water: false,
	});
    
    ////pokemons buscados
    const[search , setSearch] = useState ("")
    const[searching, setSearching] = useState(false)
    //pokemons filtrados
    const [allPokemons, setAllPokemons] = useState([]);
    //pokemons filtrados
    const [filteredPokemons, setFilteredPokemons] = useState([]);
        
    //llamar todos los pokemons para buscar por nombre
    const getAllPokemons = async(page = 1) =>{
        try {
            const res1 = await axios.get(`${baseURL}pokemon`, {params: {offset: 0, limit:1001}}, { timeout: 10000 });
            const data1 = res1.data;
            
            const promises = await data1.results.map(async(pokemon)=>{
                const res2 = await axios.get(pokemon.url);
                const data2 = res2.data;
                return data2
            })
            const pokelist= await Promise.all(promises);
            setAllPokemons(pokelist);
            setLoading(false);

        } catch (error) {
            console.error(error);
        }       
    }
    
    const getFiltredPokemons = (page=1) =>{
        let top =page*6;
        let bot = top-6;

        const filtpoke = filteredPokemons.slice(bot,top);
        setPokemons(filtpoke);
        setCurrentPage(page)
    }
    
    const handleCheckbox = (e) => {
        setTypeSelected({ ...typeSelected, [e.target.id]: e.target.checked });
      
        if (e.target.checked) {
          const filteredResults = allPokemons.filter((pokemon) =>
            pokemon.types.map((type) => type.type.name).includes(e.target.id)
          );
          const uniqueFilteredResults = filteredResults.filter(
            (pokemon) => !filteredPokemons.some((p) => p.id === pokemon.id)
          );
      
          setFilteredPokemons([...filteredPokemons, ...uniqueFilteredResults].sort((poke1, poke2) => poke1.id - poke2.id));
        } else {
            let activeTypes = Object.entries(typeSelected).filter(([type, checked]) => checked).map(([type]) => type);
            activeTypes = activeTypes.filter((type)=>type!==e.target.id)

            const filteredResults = filteredPokemons.filter((pokemon) =>
                pokemon.types.some((type) => activeTypes.includes(type.type.name)));

            setFilteredPokemons([...filteredResults]);
        }
      };

    ///busqueda
    const onInputChange = (e) =>{
        setSearch(e.target.value)
    }

    const handlerSearch = () => {
        const value = search;
        setSearching(true)
        try{
            if(isNaN(search))pokemonByID(value.toLowerCase())
            else pokemonByID(value)
            setSearch('')
        } catch(error){
            console.error(error);
        }
    }

    //cambiar página
    useEffect(()=>{
        if (search===''&&Object.values(typeSelected).every((value)=>!value)) {
            getPokemons(currentPage);
        }else{
            getFiltredPokemons(currentPage)
        }
    }, [currentPage])

    //getAll pokemos para filtrar
    useEffect(()=>{
        if(!allPokemons.length){
            getAllPokemons()
        }
    },[loading])

    //cambiar renderización de filtro a normal 
    useEffect(()=>{
        if (search===''&&Object.values(typeSelected).every((value)=>!value)) {
            setCurrentPage(Math.ceil(idPokemonSelected/6));
            if((Math.ceil(idPokemonSelected/6))===1){
                getPokemons(1)
            }
        }else{
            getFiltredPokemons(1)
        }      
    },[filteredPokemons])
    
    
    return (
        <PokemonContext.Provider value={{
            /////
            pokemons,
            loading,
            /////////
            currentPage,
            topPage,
            setCurrentPage,
            setIDPokemonSelected,
            pokemonSelected,
            idPokemonSelected,
            /////////////
            handleCheckbox,
            onInputChange,
            search,
            handlerSearch
        }}>
            {children}
        </PokemonContext.Provider>
    )
}