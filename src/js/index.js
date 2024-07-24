import "../sass/index.scss";
import Header from "./header";
import User from "./user";
import Table from "./tab";
import Todo from "./todo";

const html = `
  ${Header}
  ${User}
  ${Table}
  ${Todo}
`;

document.getElementById("app").innerHTML = html;
