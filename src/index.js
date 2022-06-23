import _ from 'lodash';
import "./style/style.css";
import Icon from "./img/example.png";
import printMe from './print';
import halloText from './components/helloComponent';
import "./style/style2.scss";

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join([halloText.text, 'webpack'], ' ');
    element.classList.add("colorRed");
    const button = document.createElement("div");


    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    button.innerHTML = "Click me and check the console";
    button.onclick = printMe;

    element.appendChild(button);
  
    return element;
}
  
document.body.appendChild(component());
