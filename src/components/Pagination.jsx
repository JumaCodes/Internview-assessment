import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-between align-center border-b border-stone-300 pr-4 pb-2 pl-6 pt-8 mr-10">
      <h6 className='font-semibold'>Round {currentPage}</h6>
      <div className="heading-right flex align-center">

        <button className={`mr-2  ${currentPage === 1 ? 'cursor-not-allowed' : ' hover:bg-green-600  cursor-pointer'}`} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>


        {pagesArray.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-2 ${currentPage === page ? 'bg-lime-600 text-white' : ' text-gray-600 hover:bg-lime-600 hover:text-white'} cursor-pointer`}
          >
            {page}
          </button>
        ))}


        <button className={` ml-2 cursor-pointer ${currentPage === totalPages ? '' : 'hover:bg-green-600  cursor-pointer'}`} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Pagination