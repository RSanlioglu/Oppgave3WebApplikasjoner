import users from './src/util.js'; //Bruker import da dette funker med Live Server på VSC

const userUl = document.getElementById("users"); //Feltet hvor brukere vil bli vist

//Funksjon som lager en tabell med brukere. Brukerne er hentet fra users
const createTableUI = (users) => {
  userUl.innerHTML = null; //Nuller først tabellen for å unngå dobbeltoppføring

  //Legger til brukere som er hentet fra users
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`; 
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

// Henter alle html-elementer som er nødvendige
const nameIn = document.getElementById("name");
const ageIn = document.getElementById("age");
const filterBtn = document.getElementById("filter");


// Funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const handleSeacrh = () => {
  const textInput = nameIn.value; //Henter inn navnsøket
  
  if(textInput != "") { //Dersom søket ikke er tomt så sammenligner vi navna med brukere som er i systemet
    const searchedUser = users.find(
      (user) => user.name.toLowerCase() === textInput.toLowerCase()
    );
  
    if(searchedUser) { //Dersom brukerne finnes så oppdaterer vi grensesnittet med de brukerne
      createTableUI([searchedUser]);
    } else {  //Ellers vil feilmeldingen vises til bruker
      userUl.innerHTML = null;
      userUl.innerHTML = `${textInput} finnes ikke i listen`
    }
  } else { //Dersom tabellen er tom eller tømmes så vil alle brukerne legges tilbake til tabellen
    createTableUI(users);
  }
}

// Funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
  const handleFilter = () => {
    const inputAge = Number(ageIn.value); //Gjør om alderen gitt fra brukeren til et tall.

    const filteredUsers = users.filter( //Ny array som inneholder brukere med høyere alder enn det brukeren anga
      (user) => user.age > inputAge
    );
    //Dersom det ikke er noen brukere med høyere alder enn angitt så vil melding vises til bruker. Ellers vil brukere med høyere alder printes ut
    (filteredUsers.length > 1) ? createTableUI(filteredUsers) : userUl.innerHTML = `Ingen brukere med alderen over ${inputAge}`
  }


// Lytt til tastatur klikk på søkefeltet, den trigger søkefunksjonen (handleSearch)
nameIn.addEventListener("keyup", handleSeacrh);

// Lytt til klikk på filter-knappen, den trigger filterfunksjonen (handleFilter)
filterBtn.addEventListener("click", handleFilter);

const main = () => {
  createTableUI(users);
};

main();
