---
layout: post
title: "Die Neuerungen in Java 21 bis 25 / Value Objects"
speaker: "Falk Sippach"
location: "LivePerson, Loksite, Glücksteinallee 69, 68163 Mannheim"
---

Bei unserem nächsten Vortrag von **Falk Sippach** geht es um die Neuerungen in Java 21 bis 25 sowie um einen Deep Dive in Value Objects.

**Sprecher**: Falk Sippach **Sprache**: Deutsch **Firma**: [embarc Software Consulting GmbH](https://www.embarc.de/)

### Anmeldung
Um uns die Planung zu erleichtern, freuen wir uns über eure Anmeldung auf unserer [Meetup-Seite](https://www.meetup.com/mannheim-java-usergroup/events/311356930/).

### Termin und Ablauf
Der Vortrag findet am 29.10.2025 um 19:00 Uhr, bei LivePerson, Loksite, Glücksteinallee 69, 68163 Mannheim, statt.
* Ab 18:30 Uhr: Einlass und Ankommen.
* 19:00 Uhr: Vortrag.
* 20:30 Uhr: Ende.

### Abstract

#### 30 Jahre Java - Die Neuerungen in Java 21 bis 25

Alle halben Jahre erscheinen Major-Releases mit einer Vielzahl von neuen Features. 
Manche starten als Inkubator und viele durchlaufen mehrere Preview-Phasen. 
Und auch wenn wir die neuen Funktionen nicht direkt einsetzen können, lohnt sich immer der Blick auf den aktuellsten Stand. 
Aktuell geht es um so spannende Themen wie Erweiterungen zum Pattern Matching, Bibliotheken rund um Virtual Threads wie Structured Concurrency, String Templates, Stream Gatherers, Flexible Constructor Bodies, Module Import Declarations, Simple Source Files and Instance Main Methods, die Class File API, Stable Values und Value Types.

Neben diesen verschiedenen JDK Enhancement Proposals (JEPs) werfen wir natürlich auch einen Blick auf hilfreiche API-Verbesserungen und Änderungen an der JVM, z. B. bei den Garbage Collectoren. 
Ihr bekommt einen Überblick über die neusten Entwicklungen im Java-Umfeld und seht heute schon, was Euch in den nächsten Jahren in der täglichen Arbeit erwarten wird.

#### Value Objects - das nächste große Ding in Java

Einer der großen Pluspunkte von Java war und ist das statische, starke Typsystem. 
Es hilft, viele Fehler bereits zur Compilezeit zu entdecken und macht die Entwicklung robuster sowie effizienter. 
Allerdings integrieren sich die vor etwa 30 Jahren aus Performancegründen eingeführten primitiven Datentypen nicht gut mit modernen Ansätze wie Generics, Stream API oder Pattern Matching. 
Value Objects versprechen Abhilfe und werden die Vorteile beider Welten kombinieren. 
Damit können wir in Zukunft unveränderbare Datentypen entwerfen, die sich wie primitive Datentypen verhalten. 
Das steigert nicht nur die Performance und senkt den Speicherverbrauch, es erhöht durch das Schreiben von ausdrucksstarken Typen auch die Les- und Wartbarkeit.

Schon seit etwa 10 Jahren wird im Rahmen vom Projekt Valhalla an dieser großen Änderung des Java Typsystems gearbeitet. 
Daran hängen einige komplexe Fragestellungen, wie z. B. der Umgang mit Default-Werten sowie null-Values, der Umbau der Wrapper-Typen (Integer, …) und die Verwendung als generische Typisierung. 
Im Sommer 2024 hat Java Language Architekt Brian Goetz verkündet, dass nach der langen Zeit der Durchbruch in der Umsetzung erreicht ist. 
Darum wollen wir gemeinsam schauen, wie Value Classes, Null-Restricted und Nullable Types sowie erweitertes Primitive Boxing die Art und Weise verändern, wie wir in Zukunft programmieren werden.

### Bio
Falk Sippach ist bei der embarc Software Consulting GmbH als Softwarearchitekt, Berater und Trainer stets auf der Suche nach dem Funken Leidenschaft, den er bei seinen Teilnehmern, Kunden und Kollegen entfachen kann. 
Bereits seit 20 Jahren unterstützt er in meist agilen Softwareentwicklungsprojekten im Java-Umfeld. 
Als aktiver Bestandteil der Community (Mitorganisator der JUG Darmstadt und Mitglied der Java Champions) teilt er zudem sein Wissen gern in Artikeln, Blog-Beiträgen, sowie bei Vorträgen auf Konferenzen oder User Group Treffen und unterstützt bei der Organisation diverser Fachveranstaltungen.

**Eine Veranstaltung des iJUG e.V., organisiert durch die JUG Mannheim (majug).**
