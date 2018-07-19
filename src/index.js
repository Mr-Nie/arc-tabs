class Lite {
    constructor(){
        this.list = {}
    }
    set(key,value){
        this.list[key] = value
    }
}

window.Lite = Lite