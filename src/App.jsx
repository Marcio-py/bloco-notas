import React from "react";
import Header from "../components/Header";
import Note from "../components/Note";
import Footer from "../components/Footer";
import notes from "../components/notes";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem.key}
            title={noteItem.title}
            description={noteItem.description}
          />
        );
      })}
    </div>
  );
}

export default App;
