# Guida base AngularJS 1

### Cos'è AngularJS
AngularJS è un framework (client-side), scritto interamente in JavaScript, esso funziona con tecnologie come HTML, CSS and JavaScript.
Angular permette di sviluppare in modo facile e veloce applicazioni web.
Il team di AngularJS lo descrive come un "framework strutturato per dinamiche applicazioni web".

### Two-way binding
Il data binding è il meccanismo di sincronizzazione automatica dei dati tra il modello e la view.
In AngularJS esso è biridezionale ed è chiamato Two-way binding ciò significa che qualsiasi modifica che avviene nella view si riflette nel modello e viceversa.
Per vederlo in azione crea un file html e scrivi il seguente snippet.
```javascript
 <!DOCTYPE html>
 <html ng-app>
    <head>
      <title>Two-way Binding</title>
      <meta charset="utf-8">
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    </head>
    <body>
      <label>Ciao come ti chiami?</label>
      <input ng-model="nome" type="text">
      <h1>Ciao {{ nome }} </h1>
      <p>
        Questa è la tua prima applicazione web usando AngularJS, In questo caso stai usando il two-way
        bindind cioè le modifiche che avvengono nel modello si rifletto direttamente nella view, quello che scrivi lo puoi vedere in tempo reale.
      </p>
    </body>
 </html>
```
* Dichiarando ng-app decidiamo dove nel DOM la nostra Angular app andrà ad agire, ma potremmo dichiare questo attributo in qualsiasi elemento dell'HTML a nostro piacimento, chiariremo questo concetto andando avanti.
* Con ng-model dichiariamo un nome al modello e tramite l'input gli assegniamo un valore che possiamo riutilizzare usando il nome del modello dentro le doppie parentesi graffe {{nome}}

Come puoi notare quello che inserisci nel modello è visibile in tempo reale nella view ecco il Two-way Binding di AngularJS. Si può dire che AngulaJS crea un live template.

![picture alt](http://media.creativebloq.futurecdn.net/sites/creativebloq.com/files/images/2014/05/2way.jpg "Two-way binding")

### MVC o MV*
Anche in angular troviamo il MVC (Model View Controller):
* Model: responsabile del montenimento dei dati.
* View: responsabile della visualizzazione dei dati all'utente.
* Controller: controlla l'interazione tra Model e View, esso infatti riceve l'input dalla View e lo elabora e lo passa al Model.

In realtà in AngularJS questo concetto è molto flessibile, infatti molti preferiscono definirlo Model View View Model (MVVM) o come lo definisce uno degli autori Model View Whatever (MV*).

###  Module
In AngularJS un Module è il miglior modo per definire un app Angular.
Il Module di un app è dove verrà contenuto il codice della nostra app, ogni app può contenere diversi Modules i quali avranno diverse funzionalità.
Il modo di dichiare un Module è il seguente: 
```javascript
angular.module('myApp', []); 
```
Come puoi vedere abbiamo bisogno di passare due argomenti:
* Il primo argomento è il nome del nostro Module
* Il secondo è la lista delle dependencies (dipendenze) da iniettare nel module nel caso ne avessimo bisogno.
Una volta dichiarato il Module per usarlo correttamente è necessario inserirlo nell'elemento HTML dove desideriamo usarlo ad esempio:
```javascript
<div ng-app="myApp">
```
 o
```javascript
<body ng-app="myApp">
```
### Scopes


