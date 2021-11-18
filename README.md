Näin lataat loput moduulit kun olet ladannut sovelluksen GitHubista. Muista jokainen välivaihde alempana on terminaali esimerkkit.

__
Tämä asentaa concurrently moduulin root kansioon
### `npm install`
-> C:\xampp\htdocs\ossi $ npm install
__


Tämä asentaa React moduulit frontend kansioon
### `cd frontend`
-> C:\xampp\htdocs\ossi $ cd frontend
### `npm install`
-> C:\xampp\htdocs\ossi\frontend $ npm install


### `cd ..`
__
Tämä asentaa Express.js moduulit backend kansioon
-> C:\xampp\htdocs\ossi\
### `cd backend`
-> C:\xampp\htdocs\ossi $ cd backend
### `cd npm install`
-> C:\xampp\htdocs\ossi\backend $ npm install

### `cd ..`
-> C:\xampp\htdocs\ossi $ cd ..
__
Tämä käynnistää Reactin porttiin 3000 ja samalla myös Express.js porttiin 3003
### `npm run dev`
-> C:\xampp\htdocs\ossi $ npm run dev
__




Muista että portti 3006 on varattu MySql:ille ja se käynnistetään Xampin/Wampin (+ muut serverit) kautta. 

Ja nimenomaan portti :3006 on varattu MySQL
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
