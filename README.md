# Vecka 20: API Bootcamp – Veckans Code Review-uppgift

## Del 1: Todo API

I denna övning ska du bygga ett REST API för en Todo-app med hjälp av Express.

Du kommer att spara dina todos i en array i minnet, alltså behövs ingen databas.

API:et ska kunna:

- Hämta alla todos
- Hämta en specifik todo
- Skapa en ny todo
- Uppdatera en todo
- Ta bort en todo

---

## Instruktioner

1. Skapa en mapp för ditt projekt.

2. Skapa en `package.json`:

```bash
npm init -y
```

3. Installera dependencies:

```bash
npm install express
npm install -D nodemon
```

4. Konfigurera din `package.json` så att du använder ES6 moduler, samt kan köra ett `dev`-script.
5. Skapa filen `server.js`.
6. Skapa mappen `data`, samt filen `todos` där du klistar in [följande data](./data/todos.js). Importera till din `server.js`.
7. Starta servern.

## Endpoints

Vid alla anrop skall korrekt statuskod returneras.

### Hämta alla todos

URL: `/api/todos`
Metod: `GET`
Beskrivning: Anropet skall returnera alla todos.

### Hämta en specifk todo

URL: `/api/todos/:id`
Metod: `GET`
Beskrivning: Anropet ska returnera den todo som matchar det angivna id:t.

### Skapa en ny todo

URL: `/api/todos`
Metod: `POST`
Body:

```json
{
	"todo": "Köpa trisslotter"
}
```

Beskrivning: Servern skall skapa ett unikt ID, samt `done : false` och lägga till den skapade todo:n i arrayen. Därefter returneras ett success-meddelande, tillsammans med den skapade todo:n.

### Uppdatera en todo

URL: `/api/todos/:id`
Metod: `PATCH`
Beskrivning: Anropet ska toggla done mellan true och false, samt returnera den uppdaterade todon tillsammans med ett success-meddelande.

### Ta bort en todo

URL: `/api/todos/:id`
Metod: `GET`
Beskrivning: Anropet ska ta bort den todo som matchar angivet id, och returnera den raderade todo:n tillsammans med ett success-meddelande.

## Del 2: Login och Registrering

I denna övning skall du bygga ut ditt Todo API med enkla autentiserings-endpoints.

Du skall skapa endpoints för:

- registrering
- inloggning

All data kan sparas i en array:

```javascript
const users = [];
```

Här får ni fria tyglar att skapa era resurser som ni vill. Försök tänka enligt REST-standarden, och fundera lite på hur era requests och responses bör se ut för respektive funktion.

## Levelups

**Level Up 1 – Filtrering med Query Params**

I endpointen som hämtar alla todos ska användaren kunna filtrera på status. Exempelvis `/api/todos?done=true`, varpå enbart de todos som matchar statusen returneras.

**Level Up 2 - API-nyckel** - middlewares

1. Skapa upp en ny array innehållandes 5 st API-nycklar (5 tecken vardera).
2. När en användare lyckas med sin inloggning lägger ni till en API-nyckel i svaret.
3. Skapa sedan en middleware som kontrollerar om API-nyckel som skickas med som query parameter matchar.
4. Lägg först till er middleware så att alla anrop mot /todos-routen kräver en API-nyckel
5. Ändra sedan så att enbart de anrop som försöker göra ändringar i "databasen" kräver API-nyckel
