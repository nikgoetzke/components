import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./App.css";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:30PM"
          profileIcon={faker.image.avatar()}
          comment="I love potatoes!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Gandalf"
          timeAgo="Today at 10:43AM"
          profileIcon={faker.image.avatar()}
          comment="You shall not pass!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Frodo"
          timeAgo="Yesterday at 7:00AM"
          profileIcon={faker.image.avatar()}
          comment="Fine, keep your secrets then. "
        />
      </ApprovalCard>
    </div>
  );
};

// NOTE the following is deprecated in React 18: ReactDOM.render(<App />, document.querySelector("#root"));

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
