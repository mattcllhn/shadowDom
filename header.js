class CustomHeader extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        let titleIn = this.getAttribute('title');
        //attach shadow
        let shadow = this.attachShadow({ mode: 'open' });
        // define 2 children of shadow
        let style = document.createElement('style');
        let header = document.createElement('header');

        let title = document.createElement('h1');
        title.innerText = titleIn;


        style.innerHTML = `
        header{
            display:block;
            position:fixed;
            top:0;
            left:0;
            right:0;        
            text-align: var(--text-align);
            height:85px;
            background-color:var(--background-color);
            color:var(--color);

        }
        `;
        shadow.appendChild(style);
        shadow.appendChild(header);
        header.appendChild(title);

    }
}
customElements.define('custom-header', CustomHeader);
