---
layout: post
title: "Event Sourcing: Simpler Persistence Without ORMs"
location: "Technische Hochschule Mannheim, Gebäude A, 2. Stock, Raum A206"
state: startpage
---

**Speaker**: Ted M. Young
**Language**: English


### Anmeldung / RSVP

Der Vortrag findet am 25.11.2026 um 19:00 Uhr an der [Technische Hochschule Mannheim](https://www.informatik.hs-mannheim.de/) (Gebäude A, 2. Stock, Raum A206) statt.
Es gibt mehrere Eingänge zu dem Gebäude (Speyerer Straße, vom Hof auf dem Campus), also bitte da probieren, wenn eine Tür zu ist. 
Leider werden die Eingänge ab 19 Uhr geschlossen, also am besten etwas vorher da sein. Wir schauen aber auch nach Nachzüglern.

Um uns die Planung zu erleichtern, freuen wir uns über eure Anmeldung auf unserer [Meetup-Seite](https://www.meetup.com/mannheim-java-usergroup/events/317451797) (bitte aktualisieren, wenn Du doch nicht kommst).


The talk takes place on 25.11.2026 starting at 19:00 at [Technische Hochschule Mannheim](https://www.informatik.hs-mannheim.de/) (building A, 2nd floor, room A206). 
There are multiple entrances to the building (Speyerer Straße, from the courtyard on the campus), so if one is closed, try another one. 
Unfortunately, the doors will be closed starting at 19:00, so try to be there a bit earlier. We will try to watch out for stragglers.

To simplify planning, we are welcoming a RSVP via our [Meetup page](https://www.meetup.com/mannheim-java-usergroup/events/317451797) (and keeping it up to date in case of cancellation).

### Agenda

* Ab 18:30 Uhr: Einlass und Ankommen / Admission and Welcome
* 19:00 Uhr: Vortrag / Talk
* 20:30 Uhr: Ende / End

### Abstract

#### Event Sourcing: Simpler Persistence Without ORMs

Event Sourcing is not just a different way to persist data, but a different way of thinking about data. 
With ORMs like Hibernate, we have to consider query performance, fetch strategies, mapping domain models to database schemas, caching, etc. 
With Event Sourcing, we can use a few simple patterns to build our systems:

* Commands: user actions representing an intention, e.g., “Buy Concert Ticket”
* Events: meaningful changes to state as a result of executing Commands, e.g., “Ticket Purchased”
* Read Models: up-to-date views of Events, derived specifically for a particular way of looking at the data, e.g., “My Tickets”, or “All Ticket Sales”

Need caching for the ticket sales report? That’s a Read Model. Display tickets for a Customer? 
That’s another Read Model, using the same principles to derive the desired view of state. 
Performance isn’t an issue, as replaying events is very fast. 
Even in a system with millions or billions of events, we only need to replay events related directly to a specific entity or state view.

You’ll see what makes Event Sourcing a mindshift rather than just a different persistence mechanism: updates are just appends to a log,
mapping objects is no longer needed, and you keep the history of changes to data, so you can always know what happened and ask questions you didn’t expect to have.


### Bio

[Ted M. Young](https://ted.dev/about) is a Java technical coach and live coder. He's been in software development for over 30 years, following eXtreme Programming practices since 2000. 
Ted loves helping folks make their code more testable and teaches Test-Driven Development (TDD), Refactoring, Domain-Driven Design, and Event Sourcing through hands-on, shared experiences. 
Ted created the acclaimed "JitterTed's TDD Game" used at events and companies worldwide to help people understand the nuances and benefits of TDD in a fun way.

You can reach him via [his homepage](https://ted.dev/about) or on [LinkedIn](https://www.linkedin.com/in/tedmyoung/).


**Eine Veranstaltung des iJUG e.V.**
