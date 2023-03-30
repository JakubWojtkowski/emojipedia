import React from "react";
import emojis from "../emojipedia";
import Entry from "../components/Entry";
import Header from "../components/Header";

const createEntry = (emoji => 
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    /> );


function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emojis.map(createEntry)}</dl>
    </div>
  );
}

export default App;
