import Header from "./components/Header";
import BlogsListed from "./components/BlogsListed";
import Chatbot from "./components/Chatbot";
import Provider from "./Store/Provider";

function App() {
  return (
    <Provider>
      <Header />
      <BlogsListed />
      <Chatbot />
    </Provider>
  );
}

export default App;
