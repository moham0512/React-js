import { useState } from "react";
import "./DelBtn.css";

function DeleteBtn({ text, onClick }) {
  const [content, setContent] = useState(text);

  return (
    <button type="button" id="del-btn" onClick={onClick}>
      {content}
    </button>
  );
}

export default DeleteBtn;
