Näin lataat loput moduulit kun olet ladannut sovelluksen GitHubista. Muista jokainen välivaihde alempana on terminaali esimerkkit.

### `npm install`
-> C:\xampp\htdocs\ossi $ npm install


### `cd frontend`
-> C:\xampp\htdocs\ossi $ cd frontend

### `npm install`
-> C:\xampp\htdocs\ossi\frontend $ npm install

### `cd ..`
-> C:\xampp\htdocs\ossi\

### `cd backend`
-> C:\xampp\htdocs\ossi $ cd backend

### `cd npm install`
-> C:\xampp\htdocs\ossi\backend $ npm install

### `cd ..`
-> C:\xampp\htdocs\ossi $ cd ..

### `npm run dev`
-> C:\xampp\htdocs\ossi $ npm run dev

___________________________________________________________________________________________________________________________________________________________________________________
Kun olet asentanut npm kirjasto voit seuraavaksi käynnistää sovellus ->

Käynnistä sovellus Ossi Juureesta. esim.  C:\xampp\htdocs\ossi $ npm run dev

### `npm run dev`

npm run dev käynnistää Backendin Ja Frontendin samaan aikaan.

___________________________________________________________________________________________________________________________________________________________________________________

Frontendiin voi lisätä seuraavasti moduuleja 
### `cd frontend`
-> C:\xampp\htdocs\ossi $ cd frontend

### `npm install [moduuli mitä asennetaan]`
-> C:\xampp\htdocs\ossi\frontend $ npm install (whatever)



___________________________________________________________________________________________________________________________________________________________________________________

Backendiin voi lisätä seuraavasti moduuleja 
### `cd backend`
-> C:\xampp\htdocs\ossi $ cd backend

### `npm install [moduuli mitä asennetaan]`
-> C:\xampp\htdocs\ossi\backend $ npm install (whatever)


___________________________________________________________________________________________________________________________________________________________________________________


Roottiin emme saa lisätä mitään eli 
-> C:\xampp\htdocs\ossi $ npm install (whatever) <-- Eli näin ei saa tehdä

Root kansioon on lisätty "concurrently" joka sallii usean komennon.
Tarkemmin ->  

"scripts": {
    "dev": "concurrently \"cd backend && npm run dev\" \"cd frontend && npm start\" ",
  },
