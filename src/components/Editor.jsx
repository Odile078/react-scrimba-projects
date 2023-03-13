import { useState } from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
function Editor({ currentNote, updateNote }) {
  const [selectedTab, setSelectedTab] = useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className="flex-1 my-1.5 bg-white rounded-md h-screen max-h-screen">
      <ReactMde
        value={currentNote?.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        classes="flex-1"
        heightUnits="vh"
      />
    </section>
  );
}

export default Editor;
