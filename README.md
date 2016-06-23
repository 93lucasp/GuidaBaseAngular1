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
