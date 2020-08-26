import React, { useEffect } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

// Components
const Blog = (props) => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  useEffect(() => {
    push(`${pathname}/1`);
    console.log('push??')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      Blog works
    </div>
  )
};
export default Blog;
