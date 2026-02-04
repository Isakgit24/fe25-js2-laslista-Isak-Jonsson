
export class Game {

    constructor(id, favorite, studio, title) {
        this.favorite = favorite ;
        this.studio = studio;
        this.title = title;
        this.id = id
    }

    showGame(container) {
        const gameDiv = document.createElement('div')
        const p = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        const p4 = document.createElement('p')

        gameDiv.classList.add("game");

        gameDiv.dataset.id = this.id;
        gameDiv.dataset.favorite = this.favorite
    
        p.innerText = `Title: ${this.title}`;
        p2.innerText = `Studio: ${this.studio}`;

        p3.innerHTML = '<i class="fa-regular fa-heart heart"></i>';
        if (this.favorite === true) {
            p3.innerHTML = '<i class="fa-solid fa-heart heart"></i>';
        }
        p4.innerHTML = '<i class="fa-solid fa-trash delete"></i>';

        gameDiv.append(p, p2, p3, p4);
        container.append(gameDiv)

    }

 

}
