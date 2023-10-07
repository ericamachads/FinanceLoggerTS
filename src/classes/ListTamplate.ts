import { HasFormatter } from "../interfaces/HasFormatter.js";

//criamos um ul lá no html
export class ListTamplate {
    constructor (private container: HTMLUListElement){}
    render (item:HasFormatter, heading: string, pos:"start" | "end"){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if(pos === "start"){
            this.container.prepend(li);///primeiro item
        }else{
            this.container.append(li);//último item
        }
    }

}
