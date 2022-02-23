import "./Previewer.css";
import { marked } from "marked";

const Previewer = (props) => {
  const markDown = marked(props.markdown, { breaks: true });
  return (
    <div id="preview-container">
      <h2 id="preview-header">Previewer</h2>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markDown }}></div>
    </div>
  );
};

export default Previewer;
