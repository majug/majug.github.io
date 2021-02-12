---
layout: post
title: "Property Based Resilience Testing Workshop"
speaker: "Gregor Trefs"
location: "Online"
state: startpage
---

### Termin

Der Workshop findet am 04.03.2021 um 19:00 Uhr online statt. Zugangsdaten werden über [meetup.com](https://www.meetup.com/de-DE/mannheim-java-usergroup/events/275945757/) bekannt gegeben. 

### Abstract

Property Based Resilience Testing bedeutet mit Hilfe von Property Based Testing (PBT) die Resilienz eines Systems zu testen. Wikipedia definiert Resilienz als “die Fähigkeit eines Systems bei Störungen oder Teilausfällen nicht vollständig zu versagen, sondern wesentliche Systemdienstleistungen aufrechtzuerhalten” und “[...] trotz massiver externer oder interner Störungen wieder in den Ausgangszustand zurückzukehren.” Wie verhält sich, zum Beispiel, eine Benutzerverwaltung während eines Datenbankausfalls? Was sind die Antwortzeiten? Wie schnell kann der normale Betrieb wieder hergestellt werden? Gerade in verteilten Systemen ist es sehr schwierig alle relevanten Fehlerszenarien zu finden und zu testen. Hier hilft PBT: Anstatt Fehlerszenarien selbst zu finden, wird erwünschtes Verhalten im Fehlerfall als Regelwerk beschrieben und ein PBT-Framework testet ob es von unserem Programm eingehalten wird. Im Fall der Benutzerverwaltung, kann eine Regel besagen, dass der normale Betrieb wieder hergestellt wird sobald der Datenbankausfall behoben wurde.

In diesem Workshop verwenden wir jqwik und testcontainers um container-basierte Systeme auf diese Art und Weise zu testen. Nach einer kurzen Einführung und Motivation des Themas, rekapitulieren wir was Property Based Testing ist und gehen insbesondere auf Modeling und Stateful Properties ein. Wir bauen ein Modell einer Applikation auf und benutzen es um bestimmte Eigenschaften zu falsifizieren. Danach erweitern wir dieses Modell um die Möglichkeit Fehlerzustände abzubilden. Zuletzt werden wir den Ansatz diskutieren und beenden den Workshop mit einer Retrospektive.

Der Workshop richtet sich an Anfänger und Fortgeschrittene und in Kooperation mit der Softwerkskammer Rhein-Neckar statt. Grundkenntnisse über Property Based Testing sind hilfreich aber nicht unbedingt notwendig. Für die Übungen werden die Teilnehmer in Kleingruppen unterteilt. Der Link zur Teilnahme wird noch veröffentlicht.

### Voraussetzung

Computer mit Docker (siehe [testcontainers](https://www.testcontainers.org/supported_docker_environment) für die minimale Version), Git und Java IDE.

### Lernziele

Die Zuhörer/-innen lernen
* wie eine container-basierte Umgebung in Tests aufgebaut wird und
* wie Stateful Properties bestimmt und mit Hilfe von Modeling getestet werden.

### Bio

[Gregor Trefs](https://twitter.com/gtrefs) ist Software Development Manager bei LivePerson, Mitorganisator der Java User Group Mannheim und Softwerkskammer Rhein-Neckar. Weiterhin ist er der Autor der testcontainers Extension für jqwik.
