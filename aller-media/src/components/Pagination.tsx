import '../styles/components/pagination.component.css'

interface PaginationProps {
  articlesPerPage: number,
  totalArticles: number,
  paginate(number: number): any
}

const Pagination = (props: PaginationProps) => {

  const { articlesPerPage, totalArticles, paginate } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination_container">
      <ul className='pagination_list'>
        {pageNumbers.map((number: number) => (
          <li key={number} className='page_item'>
            <button onClick={() => paginate(number)} className='page_link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;