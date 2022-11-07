const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage(".assets/img/pokemon-sad.gif")
            document.getElementById('error').style.display = 'block';
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeInfoabilities = data.abilities;
            let pokeInfoName = data.name;
            let pokeInfoId = data.id;
            let pokeInfoWeight = data.weight;
            let pokeInfoType = data.types;
            let pokeInfoStats = data.stats;

            pokeImage(pokeImg);
            pokeAbilities(pokeInfoabilities);
            pokeNames(pokeInfoName);
            pokeId(pokeInfoId);
            pokeWeight(pokeInfoWeight);
            pokeType(pokeInfoType);
            pokeStats(pokeInfoStats);

            console.log(data.stats);
            document.getElementById('error').style.display = 'none';
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeAbilities = (abilites) => {
    const abilities = document.getElementById("abilities");
    const abilitiesName = abilites.map((item) => item.ability.name);
    abilities.innerHTML = "<b> Habilidades: </b>" + abilitiesName;
}
const pokeNames = (namepokemon) => {
    const pokeNombre = document.getElementById("nombre");
    nameP = namepokemon;
    pokeNombre.innerHTML = "<b> Nombre: </b>" + nameP;
}
const pokeId = (idpokemon) => {
    const pokeId = document.getElementById("idPokemon");
    idP = idpokemon;
    pokeId.innerHTML = "<b> Id: </b>" + idP;
}
const pokeWeight = (weightpokemon) => {
    const pokeWeight = document.getElementById("weightPokemon");
    weightP = weightpokemon;
    pokeWeight.innerHTML = "<b> Peso: </b>" + weightP;
}
const pokeType = (type) => {
    const types = document.getElementById("type");
    const typeName = type.map((item) => item.type.name);
    types.innerHTML = "<b> Tipo: </b>" + typeName;
}

const stats = document.getElementById("estadisticas");
const pokeStats = (stat) => {
    // Esto pudo funcionar 
    /*const stats =  document.getElementById("estadisticas");
    const statName = stat.map((item) => item.stat.name);
    const base_stat = stat.map((item) => item.base_stat);
    stats.innerHTML = "<b>" + statName + " </b> <br>" +base_stat ;*/

    /*stat.forEach(item => {
        console.log(item.stat.name + " " +item.base_stat)
        const stats =  document.getElementById("estadisticas");
        stats.innerHTML = item.stat.name + " "+ item.base_stat ;
    });*/
    stats.innerHTML = "<b>" + "Estadisticas: " + " </b> <br><br>" ;
    stat.forEach(item => {
        /*console.log(item.stat.name + " " +item.base_stat)
        const stats =  document.getElementById("estadisticas");
        stats.innerHTML = item.stat.name + " "+ item.base_stat ;*/
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = item.stat.name;
        statElementAmount.textContent = item.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        stats.appendChild(statElement);
    });

}

