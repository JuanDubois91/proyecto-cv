let proyectos = [];
let generadorCards = ``;

async function proyectosJson() {
    const response = await fetch("proyectos.json");
    const data = await response.json();
    proyectos = data;
    mostrarProyectos(proyectos);
}

proyectosJson();

function mostrarProyectos(proyectos){
    for (let i = 0; i < proyectos.length; i++) {
    generadorCards += `
    <div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
    <div class="card" style="width: 18rem">
        <div class="card-body">
            <img src="${proyectos[i].imagen}" alt="" class="img-fluid" />
            <h5 class="card-title">${proyectos[i].nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <p class="card-text">${proyectos[i].descripcion}</p>
            <a href="" class="card-link">Ver proyecto</a>
        </div>
    </div>
</div>`;
    }
    document.getElementById("proyectos").innerHTML = generadorCards;
    }


    
    