class Tiger {
    constructor(){
        this.strength = Math.floor(Math.random() * 100);
        this.type = "carnivore";
    }

    growl(){
        console.log('Ururong ururong bae');
    }

}

export {Tiger};