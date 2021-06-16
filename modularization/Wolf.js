class Wolf{
    constructor(){
        this.strength = Math.floor(Math.random() * 100);
        this.type ="karnivora";
    }
    howl(){
        console.log('aaauuuu');
    }
}

export {Wolf};