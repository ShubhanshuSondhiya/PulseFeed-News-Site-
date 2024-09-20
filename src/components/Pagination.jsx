/* eslint-disable react/prop-types */

const Pagination = ({page , setPage ,totalResults , perPage}) => {
  return (
    <div className="mt-8 w-full flex justify-center items-center gap-2">
        <button
          className="disabled:opacity-70 mb-4 w-20 h-8 p-2 rounded-lg bg-blue-800 text-white flex justify-center items-center"
          disabled={page == 1}
          onClick={()=>setPage(page-1)}
        >
          Previous
        </button>
        <p className="mb-4 w-auto h-8 p-2 flex justify-center items-center text-white">
          Page {page} of {Math.ceil(totalResults / perPage)}
        </p>
        <button
          className="disabled:opacity-70 mb-4 w-20 h-8 p-2 rounded-lg bg-blue-800 text-white flex justify-center items-center"
          disabled={page >= Math.ceil(totalResults / perPage)}
          onClick={()=>setPage(page+1)}
        >
          Next
        </button>
      </div>
  )
}

export default Pagination
