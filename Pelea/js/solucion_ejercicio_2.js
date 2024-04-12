//Ejercicio de practica Javascript

//Objeto base para los personajes
class Character {
  constructor(name, health) {
    //Atributos
    this.name = name;
    this.health = health;
    this.maxhealth = health;
  }
  //Verifica si el personaje esta vivo
  isAlive() {
    return this.health > 0;
  }

  //Ataca a otro personaje seleccionado
  attack(target) {
    var daño = Math.floor(Math.random() * 11)
    console.log(`${this.name} deals ${daño} DMG to ${target.name}`);
    target.health -= daño;
  }

  //Retorna la información actual del personaje
  status() {
    return `${this.name} - HP ${this.health}/${this.maxhealth}`;
  }
}

//Función para combatir
/*function fight(firstCharacter, secondCharacter) {
  console.log("Empieza el combate!");
  console.log(hero.status());
  console.log(enemy.status());
  while (true) {

    //Primer personaje ataca si esta vivo
    if (firstCharacter.isAlive()) {
      firstCharacter.attack(secondCharacter);
      slimelife.value-=40;
      console.log(hero.status());
      console.log(enemy.status());
    } else {
      console.log(`${firstCharacter.name} died!`);
      break;
    }

    //Segundo personaje ataca si esta vivo
    if (secondCharacter.isAlive()) {
      secondCharacter.attack(firstCharacter);
      heroelife.value-=110;
      console.log(hero.status());
      console.log(enemy.status());
    } else {
      console.log(`${secondCharacter.name} died!`);
      break;
    }
  }
}
*/

document.addEventListener("keydown", function (event) {
  if (event.key === "x") {
    if (hero.health > 0) {
      hero.attack(enemy);
      slimelife.value = ((enemy.health * 100) / enemy.maxhealth);
    } else {
      window.alert("El heroe ya perdio");
    }
  } else if (event.key === "n") {
    if (enemy.health > 0) {
      enemy.attack(hero);
      heroelife.value = ((hero.health * 100) / hero.maxhealth);
    } else {
      window.alert("El Enemigo ya perdio");
    }
  }
})

//Creación de personajes
const hero = new Character("Heroe", Math.floor(Math.random() * 500));
const enemy = new Character("Limo", Math.floor(Math.random() * 500));

window.alert(`Vida del Heroe: ${hero.maxhealth} \nVida del Enemigo: ${enemy.maxhealth}`);

var heroelife = document.getElementById("heroe");
var slimelife = document.getElementById("slime");