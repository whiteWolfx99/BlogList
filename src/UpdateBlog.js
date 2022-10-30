import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const { id } = useParams();
    const {data: blog, isPending} = useFetch(`http://localhost:8000/blogs/` + id);


    return ( 
<div className="create">
      <h2>Add a New Blog</h2>

      <form>
        <label>Blog title:</label>
        <input
          type="text"
          value={blog.title}
          required
        />
        <label>Blog body:</label>
        <textarea
          required
          value={blog.body}
        ></textarea>
        <label>Blog author:</label>
        <select value={blog.author}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
       { !isPending && <button>Add Blog</button>}
       { isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
     );
}
 
export default BlogDetails;