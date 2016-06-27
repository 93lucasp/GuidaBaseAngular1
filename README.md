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
o
```javascript
var app = angular.module('app', []);
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
Gli Scopes in AngulaJS sono una parte fondamentale di ogni singola app.
Il compito dello scope è di consentire la definizione del modello e la sua esposizione alla view, infatti tutte le proprietà dello $scope saranno accessibili dalla view tramite ng-model.
Possono essere visti come il luogo dove definire le nostre funzionalità, i metodi nel nostro controller e le proprietà della view.
Vediamo un esempio (non ti preoccupare della funzione controller, i controllers li andremo a spiegare in seguito)
```javascript
/* scope.html */
<!DOCTYPE html>
<html>
  <head>
    <title>Declaring Module</title>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script src="scopeController.js" type="text/javascript">
    </script>
  </head>
  <body ng-app="myApp" ng-controller="MyController">
    <h1> Qui vedrai le informazioni derivanti dallo scope </h1>
    // stampa dell'oggetto $scope.persona derivante dal controller
    <h2>{{persona}}</h2>
    // Visualizziamo le singole proprietà dell'oggetto
    <label>Nome: </label>{{persona.nome}} <br>
    <label>Cognome: </label>{{persona.cognome}} <br>
    <label>Data di nascita: </label>{{persona.dataNascita}}
  </body>
</html>
```
```javascript
/* scope.js */
angular.module('myApp', []) /*si sarebbe potuto dichiare il modula anche nel sequente modo: var app = angular.module('app', []);*/
  .controller('MyController', /*e di conseguenza: app.controller...*/
  function($scope) {
    $scope.persona = {};
    $scope.persona.nome = "Luca";
    $scope.persona.cognome = "Rossi";
    $scope.persona.dataNascita = "06/06/1993";
  });
```
Come puoi vedere una volta definite le proprietà del nostro $scope saremo in grado di accerdervi dalla view.

### Controllers
Il controller in AngularJS è una funzione che aggiunge ulteriori funzionalità alla view, per poter fare questo è necessario passare $scope come argomento. Ed è ciò che fa comunicare la View con il Controller Vediamo un esempio:
```javascript
 /*controller.html*/
 <!DOCTYPE html>
<html>
  <head>
    <title>Controllers</title>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script src="controllerController.js" type="text/javascript"></script>
  </head>
  <body ng-app="myApp">
    <div ng-controller="FirstController">
      <h4>Aggiungi e sottrai </h4>
      <button ng-click="aggiungi()">Aggiungi</button>
      <button ng-click="sottrai()">Sottrai</button>
      <h4>Contatore: {{ count }}</h4>
    </div>
  </body>
</html>
```
```javascript
 /*controllerController.js*/
 angular.module('myApp', [])
  .controller('FirstController', function($scope) {
    $scope.count = 0;
    $scope.aggiungi = function() {
      $scope.count += 1;
    };
    $scope.sottrai = function() {
      $scope.count -= 1;
    };
  });
```
Come possiamo vedere il Controller contiene la logica della view in un singolo file. (ng-click lo vedremo in seguito)
Come possiamo vedere dichiariamo due funzioni che facciamo partire dall view con ng-click.
Una volta definito il Controller è necessario dichiararlo nell'elemento HTML in cui desideriamo utilizzarlo con ng-controller.

### Controller Hierarchy



