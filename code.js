/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    let nombreObtenido = prompt("Ingresa tu nombre");
    let anioObtenido = prompt("Ingresa el año en que naciste");
    let edadObtenida = 0;
    if (isNaN(anioObtenido)){
      let nuevoAnio = prompt("Valor no válido. Ingresa el año en que naciste");
      edadObtenida = 2022 - nuevoAnio;
    }
    else {
      edadObtenida = 2022 - anioObtenido;
    }
    let ciudadObtenida = prompt("Ingresa la ciudad donde vives");
    let interes = confirm("¿Te interesa JavaScript?");
    let interesObtenido = "";
    if (interes){
      interesObtenido = "Si";
    }
    else{
      interesObtenido = "No";
    }

    datosPersona.nombre = nombreObtenido;
    datosPersona.edad = edadObtenida;
    datosPersona.ciudad = ciudadObtenida;
    datosPersona.interesPorJs = interesObtenido;

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.querySelector("#nombre");
  nombre.innerHTML = datosPersona.nombre;
  let edad = document.querySelector("#edad");
  edad.innerHTML = datosPersona.edad;
  let ciudad = document.querySelector("#ciudad");
  ciudad.innerHTML = datosPersona.ciudad;
  let javascript = document.querySelector("#javascript");
  javascript.innerHTML = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let fila = document.querySelector("#fila");
  fila.innerHTML = ``;
  for (materia of listado){
    fila.innerHTML += `
      <div class="caja">
        <img src="${materia.imgUrl}" alt="${materia.lenguajes}" />
        <p class="lenguajes">${materia.lenguajes}</p>
        <p class="bimestre">${materia.bimestre}</p>
      </div>
    `
  }

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
  
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener("keypress", (e) => {
  if(e.key === "f"){
    let sobremi = document.querySelector("#sobre-mi");
    sobremi.classList.remove("oculto");
  }
})