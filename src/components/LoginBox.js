import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginBox = () => {
  const [repoUrl, setRepoUrl] = useState("");


  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!repoUrl) return;
    try {
      const response = await fetch(`${repoUrl}`);
      const repoData = await response.text();
      console.log(repoData);
      navigate("notes-screen", {state: {data:repoData}});
    } catch (error) {
      console.error("Error fetching Markdown: ", error);
    }
  };

  
  return (
    <div className="login-box">
      <h1>Welcome</h1>
      <p>Paste your Github repo Link </p>

      <form onSubmit={handleSubmit}>
        <div className="ui input login-input">
          <input
            type="text"
            placeholder="Paste here..."
            onChange={(event) => setRepoUrl(event.target.value)}
          />
        </div>

        <div className="login-button">
          <button className="ui inverted button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginBox;
