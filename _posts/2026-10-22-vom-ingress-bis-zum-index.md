---
layout: post
title: "Vom Ingress bis zum Index: Wo verteilte Systeme unter Last brechen"
location: "TBA"
state: startpage
---

**Sprecher**: Alexander Schwartz
**Sprache**: Deutsch
**Firma**: [IBM](https://www.ibm.com/)

### Anmeldung

Um uns die Planung zu erleichtern, freuen wir uns über eure Anmeldung auf unserer [Meetup-Seite](https://www.meetup.com/mannheim-java-usergroup/events/316608403).

### Termin und Ablauf

Der Vortrag findet am 22.10.2016 um 19:00 Uhr bei TBA statt.

* Ab 18:30 Uhr: Einlass und Ankommen.
* 19:00 Uhr: Vortrag.
* 20:30 Uhr: Ende.

### Abstract

#### Vom Ingress bis zum Index: Wo verteilte Systeme unter Last brechen

Wenn Nutzerzahlen sprunghaft ansteigen, geraten verteilte Architekturen schnell an ihre Grenzen. Doch reicht es, in Kubernetes einfach mehr Anwendungs-Pods hochzufahren?

Meist verlagert das die Engpässe nur – von ausgelasteten Web-Nodes hin zu verschränkten Datenbank-Locks, Ingress-Socket-Exhaustion oder schleichendem Storage-I/O-Throttling.

Der Vortrag zeigt Performance als schichtübergreifendes Phänomen. Als praxisnahes Beispiel dient Keycloak, ein verteiltes Identity & Access Management. Fallstricke sind Skalierung, Token-Handling und Session-Caching, die sich auch auf moderne Microservice-Landschaften übertragen lassen.

Wir starten bei der Definition messbarer Service Level Indicators (SLIs) und klären, warum klassische Lasttests im "Closed Workload Model" oft trügerische Ergebnisse liefern.

Wir beleuchten, wie ein "Open Model" mit Tools wie Gatling mit Constant Arrival Rates, verteilter Lastgenerierung und entkoppelter Metrikerfassung eine Anwendung auf reale Traffic-Muster vorbereitet und welche Probleme in den einzelnen Schichten auftreten können.

### Bio

Alexander Schwartz arbeitet als Principal Software Engineer bei IBM als Maintainer am Keycloak-Projekt. Beruflich und privat entwickelt er Open-Source-Software. Zusätzlich bringt er Erfahrung als Software-Architekt und IT-Berater mit.

Auf Konferenzen und bei User Groups spricht er über Keycloak, JavaScript-Frontends, Java-Backends, Kubernetes, APIs und darüber, wie man diese passend betreiben kann.

Eine Veranstaltung des iJUG e.V.