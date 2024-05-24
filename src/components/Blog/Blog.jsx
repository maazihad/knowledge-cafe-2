import PropTypes from "prop-types";


const Blog = ({ blog }) => {
   const { title } = blog;
   return (
      <div>
         <h4>title Name : {title}</h4>
      </div>
   );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired
};

export default Blog;