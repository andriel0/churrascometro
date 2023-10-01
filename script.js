function calculateQuantity(){
    let adult = parseInt(document.getElementById("adult").value);
    let children = parseInt(document.getElementById("children").value);
    let duration = document.getElementById("duration").value;
    let steak;
    let beer;
    let drinks;


    if ("," in duration){
        duration = duration.String.prototype.replace(',', '.')
    }
    if (parseInt(duration) <= 6){
        steak = (adult + (0.5 * children)) * 0.4
        beer = adult * 1.2
        drinks = (adult + (0.5 * children)) * 1
    }
    else{
        steak = (adult + (0.5 * children)) * 0.65
        beer = adult * 2
        drinks = (adult + (0.5 * children)) * 1.5
    }
}