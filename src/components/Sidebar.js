/*const Sidebar = () => {

  return (
    <div className={"sidebar"} id="sidebar">
      <div className="sidebar-content">
        <ul>
          <li>
            <a href="">Array</a>
          </li>
          <li>
            <a href="">React</a>
          </li>
          <li>
            <a href="">FullStack</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
*/

import { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = ({setMarkdownContent}) => {
  const [structure, setStructure] = useState([]);
  const [fileContent, setFileContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    axios
      .get("/api/folder-structure")
      .then((response) => {
        console.log(response.data);
        setStructure(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const fetchFileContent = async (filePath) => {
    try {
      const response = await axios.get(
        `/api/file-content?path=${encodeURIComponent(filePath)}`
      );
      /*setFileContent(response.data.content);*/
      setMarkdownContent(response.data.content)
    } catch (error) {
      console.error("Error fetching file content:", error);
    }
  };

  const handleFileClick = (file) => {
    setSelectedFile(file);
    fetchFileContent(file.path);
  };

  const renderItem = (item) => {
    if (item.type === "folder") {
      return (
        <li key={item.name}>
          <span className="folder-name">{item.name}</span>
          <ul>{item.children.map(renderItem)}</ul>
        </li>
      );
    } else {
      return (
        <li key={item.path}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleFileClick(item);
            }}
          >
            {item.name}
          </a>
        </li>
      );
    }
  };

  return (
    <div className={"sidebar"} id="sidebar">
      <div className="sidebar-content">
        <ul>{structure.map(renderItem)}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
