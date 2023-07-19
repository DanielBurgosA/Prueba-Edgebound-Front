import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { PokemonContext } from "../../context/PokemonContext";

export default function PaginationComp () {
    const { currentPage, topPage, setCurrentPage, } = useContext(PokemonContext);
        const handlePageChange = (page) => {
            setCurrentPage(page);
    };

    return (
        <Pagination showsize={9}>
        {currentPage>1&&<Pagination.First onClick={() => handlePageChange(1)} />}
        {currentPage>1&&<Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />}
        {currentPage>5&&<Pagination.Ellipsis />}
        {Array(9).fill().map((_, i) => {
            let page = currentPage + i - 4;
            if (page > topPage||page < 1) return
            return (<Pagination.Item key={i} onClick={() => {handlePageChange(page)}} active={page === currentPage}>
                {page}
                </Pagination.Item>
            );}
        )}
        {currentPage<topPage-4&& <Pagination.Ellipsis />}
        {currentPage<topPage&&<Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />}
        {currentPage<topPage&&<Pagination.Last onClick={() => handlePageChange(topPage)} />}
        </Pagination>
    )
};
