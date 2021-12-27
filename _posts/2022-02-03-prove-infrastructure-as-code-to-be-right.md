---
layout: post
title: "Don't test your Infrastructure as Code – prove it to be right"
speaker: "Gerd Aschemann"
location: "Online"
state: startpage
---

### Termin

Der Vortrag findet am 03.02.2022 um 18:30 Uhr online statt.

Für die Planung freuen wir uns über eine Anmeldung über unsere [Meetup](https://www.meetup.com/de-DE/mannheim-java-usergroup/events/282898647/)-Seite. 

### Abstract

Du realisierst deine Infrastruktur als Code (IaC), z. B. mit Ansible, Terraform, oder Kubernetes Manifests und Helm Charts? Dabei überprüfst du sicher schon die syntaktische Korrektheit und ein lesbares Layout? Vielleicht führst du sogar schon einfache Tests auf deinen IaC-Definitionen durch? Prima, aber wie kannst du sicher sein, dass alles auch semantisch korrekt ist, ohne es in eine reale Umgebung zu deployen? Kannst du leicht beantworten, welche Teile deiner Infrastruktur durch welche Code-Fragmente auf welcher Pipeline provisioniert werden? Weißt du, wie sich dein Staging-Environment von der Produktion unterscheidet? Lässt du neue Team-Mitglieder dein Heiligtum ändern? Hast du Vertrauen, dass niemand versehentlich alles kaputt macht?

Die Rettung liegt möglicherweise im Einsatz von jQAssistant (jQA). Du kannst deine IaC-Definitionen scannen und analysieren. Es ist möglich, semantische Prüfung auszuführen und Constraints zu prüfen, die bei jeder Code-Änderung erfüllt sein müssen. Das Tool integriert sich in deine Pipelines und kann so die Feedback-Loop durch frühzeitiges Erkennen von Problemen deutlich verkürzen. Neben der Analyze kannst du mit jQA deine Infrastruktur dokumentieren und aussagekräftige Reports in textueller oder graphischer Form aus den enthaltenen Informationen erzeugen. jQA zeichnet sich seit langem durch die Analyse von Java Code und Frameworks (wie Spring, Java EE, OSGi etc), Dokumentation (AsciiDoctor, PlantUML) und weiteren Informationen (Git, Maven, …) aus. Es lädt alle Daten in eine Graph-Datenbank (Neo4j) und kann darauf Konzepte und Constraints prüfen, sowie Reports erzeugen. Seine offene Architektur ermöglicht Erweiterungen in Form von Plugins um IaC-Definitionen zu scannen und zu analysieren.

Der Vortrag stellt jQA und einige dieser Erweiterungen vor.

### Bio

Gerd Aschemann arbeitet kontinuierlich daran, die Grenze zwischen Dev und Ops aufzuheben. Als freiberuflicher Software-Architekt aktualisiert und erweitert er permanent die agile Kultur und den Technologie-Stack seiner Kunden durch zeitgemäße Methoden und Komponenten. In den letzten Jahren hat er in mehreren Cloud-Nativen Software-Projekten die Transition zu Continuous Delivery vorangetrieben.
