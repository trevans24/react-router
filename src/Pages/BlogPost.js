import React from 'react';
import { useParams, withRouter } from 'react-router-dom';

// Components
const BlogPost = (props) => {
  const { blogId } = useParams();

  console.log('Blog Post', blogId)

  return (
    <div className="">
      BlogPost works
    </div>
  )
};
export default withRouter(BlogPost);
