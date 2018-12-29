class CustomHero extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let img = this.getAttribute('image');
        let text = this.getAttribute('text');
        // //attach shadow
        let shadow = this.attachShadow({ mode: 'open' });

        let imageEl = document.createElement('img');
        imageEl.classList.add('image')
        imageEl.src = img;

        let wrapperEl = document.createElement('div');
        wrapperEl.classList.add('image-wrapper');

        let textEl = document.createElement('span');
        textEl.classList.add('text');
        textEl.innerText = text;

        let style = document.createElement('style');

        style.innerHTML = `
        .image-wrapper{
            position:relative;
            overflow:hidden;
            height:calc(100vh - 85px);

        }
        .image{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:auto;
            
        }
        .text{
            position:absolute;
            top:var(--top);
            left:var(--left);
            font-size:30px;
            color:var(--color);
        }
        `;
        wrapperEl.append(imageEl);
        wrapperEl.append(textEl);

        shadow.appendChild(style);
        shadow.appendChild(wrapperEl);

    }
}
customElements.define('custom-hero', CustomHero);
