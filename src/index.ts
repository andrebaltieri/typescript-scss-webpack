import * as _ from "lodash";
import { MenuController } from "./menu";
import "./styles.scss";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  var menu = new MenuController();
  menu.teste();

  return element;
}

document.body.appendChild(component());
