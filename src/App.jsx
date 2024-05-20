// import Home from "./components/Home"
import Home from "./components/Home";

import NoteProvider from "./context/DataProvider";

function App() {
  return (
    <>
      <NoteProvider>

        <Home />
      </NoteProvider>
    </>
  );
}

export default App;
