# Online-Shop
## Motivation
- Ziel war es einen simplen Online-Shop zu erstellen
- eigener Fokus lag auf saubere Implementierung, d.h.
    - modularer Aufbau und Umsetzung des Modell/View/Controller-Muster
    - Typ-sicheres Datenhandling über Typ-Skript
- zudem wollte ich mich an der für mich neuen Sprache/neuen Framwork Typescript/ExpressJS versuchen

## Beschreibung grundlegende Struktur
- */src/server.ts*: Startpunkt der Server-Seite zur Instanziierung der App-Class und Übergabe der Controller-Classes
- */src/app.ts*: zentrale App-Class. Wird von server.ts instanziiert und loopt inital über alle Controller-Classes, um deren Methoden zu nutzen
- */routes/home.ts & index.ts*: dienen dem Routing von app.ts
- */src/cart/controller.cart.ts*: Bündelung der Routes und Methoden zur Verwendung der Shopping-Cart-Seite
- */database*: Ablage-Ort für sqlite3-Datenbank. Wurde erzeugt mit Sequelize-seeder (siehe /seeder)
- */models*: dienen Sequelize zur Defition der Datenbank
- */views*: handlebar-Templates zum Aufbau der Website

## implementierte Funktionalität
- Anzeige der Waren auf Landing-Page ("/" und "/home")
- Hinzufügen der Waren zum Cart
- Anzeige der ausgewählten Waren im Cart und Berechnung der Zwischensummen abhängig von Menge und Einzelpreis

## aufgetretene Herausforderungen 
- notwendige Recherche-Arbeit für das angestrebte Ziel einer möglichst sauberen Umsetzung wurde unterschätzt
- ein zu ambitionierter Start im funktionalen Umfang und geplanter Abstraktion kostete Zeit für Implementierung
- einige der für mich persönlich lehrreicheren Sackgassen sind bewusst im Projekt verblieben. Sie sind mit *DEPRICATED* beschrieben und komplett auskommentiert.

## verwendete Pakete & angewendete Methoden
- Modell/View/Controller-Muster
- ExpressJS
- Typescript
- ORM: Sequelize
- Datenbank: sqlite3
- Template-Engine: handlebars
- CSS-Framework: Bootstrap 
