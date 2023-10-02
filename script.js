function calculateQuantity(){
    let adult = parseFloat(document.getElementById("adult").value);
    let children = parseFloat(document.getElementById("children").value);
    let duration = document.getElementById("duration").value;
    let steak;
    let beer;
    let drinks;


    if (duration.includes(",")){
        duration = duration.replace(',', '.')
    }
    if (parseFloat(duration) <= 6){
        steak = (adult + (0.5 * children)) * 0.4
        beer = adult * 1.2
        drinks = (adult + (0.5 * children)) * 1
    }
    else{
        steak = (adult + (0.5 * children)) * 0.65
        beer = adult * 2
        drinks = (adult + (0.5 * children)) * 1.5
    }

    let h2_steak = document.getElementsByTagName("h2")[0];
    let h2_beer = document.getElementsByTagName("h2")[1];
    let h2_drinks = document.getElementsByTagName("h2")[2];
    h2_steak.innerHTML += `${steak.toFixed(1)} Kg de Carne`;
    h2_beer.innerHTML += `${beer.toFixed(1)} L de Cerveja`;
    h2_drinks.innerHTML += `${drinks.toFixed(1)} L de Bebida(Refrigerante e Água)`;
}