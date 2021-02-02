import Home from "./components/Home"
import MessagesProvider from "./providers/MessagesProvider";

const App = () => {
  return (
    <MessagesProvider>
      <Home />
    </MessagesProvider>
    
  )
}

export default App;
