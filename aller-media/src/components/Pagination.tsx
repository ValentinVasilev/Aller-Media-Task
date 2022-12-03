import { useState, useEffect } from 'react';
import '../styles/components/pagination.component.css'

interface PaginationProps {
  articlesPerPage: number,
  totalArticles: number,
  paginate(number: number): any
}

const Pagination = (props: PaginationProps) => {

  const { articlesPerPage, totalArticles, paginate } = props;
  const [selectedButton, setSelectedButton] = useState<number>(1)

  const pageNumbers: number[] = [];

  useEffect(() => {

  }, [selectedButton])

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination_container">
      <ul className='pagination_list'>
        {pageNumbers.map((number: number) => (
          <li key={number} className='page_item'>
            <button onClick={() => { paginate(number); setSelectedButton(number) }} className='page_link' style={{ backgroundColor: selectedButton === number ? 'skyblue' : 'transparent' }}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;