
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";


const App = () => {
  return (
    <div className="container md:mx-auto">
      <Header></Header>
      <div>
        <Blogs></Blogs>
      </div>
    </div>
  );
};

export default App;