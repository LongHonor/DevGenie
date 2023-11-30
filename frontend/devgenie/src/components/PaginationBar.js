import * as React from 'react';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@mui/material';

/**
 * pagination click -> query string -> url params -> data axios -> elementbox print
 * @returns
 */
function PaginationBar({ currentpage }) {
  return (
    <Pagination
      page={currentpage}
      count={7}
      size='large'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 0',
      }}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/quizlist${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}

export default PaginationBar;
