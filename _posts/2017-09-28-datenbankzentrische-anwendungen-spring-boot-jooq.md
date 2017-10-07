---
layout: post
title: 'Datenbankzentrische Anwendungen mit Spring Boot und jOOQ'
speaker: 'Michael Simons'
---

### Registration

Wir freuen uns über Eure Anmeldung (optional und unverbindlich) auf unserer [Meetup-Seite](https://www.meetup.com/de-DE/mannheim-java-usergroup/events/238262460/).

### Termin

Der Vortrag findet am 28.09.2017 um 19:00 Uhr in der Uni Mannheim A5, 6 im Raum C013 statt ([Anfahrtsbeschreibung](/getting-there)).

### Abstract

In diesem Vortrag wird eine Variante datenbankzentrischer Anwendungen mit einer modernen Architektur vorgestellt, die sowohl in einer klassischen Verteilung als auch "cloud native" genutzt werden kann und dabei eine sehr direkte Interaktion mit Datenbanken erlaubt. 

jOOQ ist eine von vielen Möglichkeiten, Datenbankzugriff in Java zu realisieren, aber weder eine Objektrelationale Abbildung (ORM) noch "Plain SQL", sondern eine typsichere Umsetzung aktueller SQL Standards in Java. jOOQ "schützt" den Entwickler nicht vor SQL Code, sondern unterstützt ihn dabei, typsicher Abfragen in Java zu schreiben.

Spring Boot setzt seit 2 Jahren neue Standards im Bereich der Anwendungsentwicklung mit dem Spring Framework. Waren vor wenigen Jahren noch aufwändige XML Konfigurationen notwendig, ersetzen heute "opinionated defaults" manuelle Konfiguration. Eine vollständige Spring Boot Anwendung passt mittlerweile in einen Tweet.

Der Autor setzt die Kombination beider Technologien erfolgreich zur Migration einer bestehenden, komplexen Oracle Forms Client Server Anwendung mit zahlreichen Tabellen und PL/SQL Stored Procedures hinzu einer modernen Architektur ein. Das Projekt profitiert sehr davon, die Datenbankstrukturen nicht in einen ORM "zu zwängen".

Der Vortrag demonstriert, wie Spring Boot genutzt wird, um den Kontext für jOOQ vorzubereiten (Datenbankverbindung, Transaktionen etc.) und anschließend fortgeschrittene, analytische Abfragen als HTTP apis zu veröffentlichen.

Auf dem Weg dorthin wird ebenfalls über Datenbankmigrationen gesprochen und wie auch an dieser Stelle die Magie von Spring Boot eingesetzt werden kann, um Entwicklungs-, Test- und Produktivdatenbanken synchron zu halten.

Kann Domain Driven Design von spezialisierten SQL-Abfragen profitieren? Die Gefahr ist groß, JPA-Entities mit Entitäten aus Evans' DDD Buch zu verwechseln und zu meinen, man ist fertig mit DDD. Vielleicht ist es eine gute Idee, auch für DDD Entitäten und Value-Objekte spezialisierte Abfragen zu verwenden.


### Bio

[Michael Simons](https://twitter.com/rotnroll666) ist Software-Architekt (CPSA-F) bei ENERKO Informatik in Aachen und entwickelt dort GIS-, EDM- und Vertriebsmanagement-Systeme für Stromnetzbetreiber und Energielieferanten. Michael ist Mitglied des NetBeans Dream Team und Gründer der [Euregio JUG](http://www.euregjug.eu/). Er schreibt in seinem Blog [info.michael-simons.eu](http://info.michael-simons.eu) über Java, Spring und Softwarearchitektur.

Auf Twitter unterwegs als [rotnroll666](https://twitter.com/rotnroll666), unter anderem mit Java, Music und den kleineren und größeren Problemen als Ehemann und Vater von 2 Kindern.

