const PaginationComp = ({ totalPages, currentPage, onHandleNext, onHandlePrev}) => {
    return (
        <section>
            <button disabled={currentPage === 0} onClick={() => onHandlePrev()}>Prev</button>
           {[...Array(totalPages).keys()].map((n) => (
              <div className={currentPage === n ? 'active' : ''}>
                 {n}
                </div>
           ))}
           <button disabled={currentPage === totalPages} onClick={() => onHandleNext()}>Next</button>
        </section>
    )
}

export default PaginationComp;