import Header from "./components/Header";
import BlogsListed from "./components/BlogsListed";
import Provider from "./Store/Provider";

function App() {
  return (
    <Provider>
      <Header />
      <BlogsListed />
    </Provider>
  );
}

export default App;
