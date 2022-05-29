import React from 'react'
import ReactPaginate from 'react-paginate'

const Pages = ({ setPage, totalPages }) => {
    const handlePageChange = p => setPage(p.selected + 1)

    return (
        <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            previousLabel="&laquo;"
            nextLabel="&raquo;"
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            
        />
    )
}

export default Pages