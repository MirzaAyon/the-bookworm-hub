import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;


//All the components life cycle



//here App is grandfather, he has 3 child's named Header,Footer and Products
//He also have 2 grand childs named Product and item
//Product and item are siblings 
//and their parent in Products
