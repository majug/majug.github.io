---
layout: post
title: "Configuration Management and Zero-downtime deployment with Kubernetes, Spring Boot"
speaker: "Nicolas Frankel"
location: "Uni Mannheim, Raum C013, A5 6, 68159 Mannheim"
---

### Registration

Registration is optional, but for planning we would still prefer registration on our [Meetup page](https://www.meetup.com/mannheim-java-usergroup/events/259617436/).

### Date

08.05.2019 at 19:00h at Uni Mannheim A5, 6, room C013 ([How to get there](/getting-there)).

### Language

The talks will be held in English.

### Abstract

#### Configuration Management with Kubernetes, a Spring Boot use-case

Come discover what options Kubernetes allows in terms of configuration management.

Docker images are supposed to (and should be) immutable. Given that the same image should be promoted from the development environment to the production environment, it needs to be parameterized in each environment.

Kubernetes provides different ways to do that. On the other, the Spring Boot platform allows a wide range of configuration options. In this talk, I’ll go through (and demo!) what common options are available, and what pro(s)/con(s) each of them have.


#### Zero-downtime deployment with Kubernetes, Spring Boot and Flyway

Beyond Hello World applications, zero-downtime deployments are not trivial. In this talk, I’ll demo how to achieve that on a Spring Boot application using Kubernetes and Flyway.

Kubernetes allows a lot. After discovering its features, it’s easy to think it can magically transform your application deployment process into a painless no-event. For Hello World applications, that is the case. Unfortunately, not many of us do deploy such applications day-to-day.

You need to think about application backward compatibility, possible rollback, database schema migration, etc. I believe the later is one of the biggest pain point. In this talk, I’ll demo how to update a Spring Boot app deployed on a Kubernetes cluster with a non-trivial database schema migration with the help of Flyway, while keeping the service up during the entire update process.



### Bio

[Nicolas Frankel](https://twitter.com/nicolas_frankel) ([Blog](https://blog.frankel.ch)) is a Developer Advocate with 15+ years experience consulting for many different customers, in a wide range of contexts (such as telecoms, banking, insurances, large retail and public sector). Usually working on Java/Java EE and Spring technologies, but with focused interests like Rich Internet Applications, Testing, CI/CD and DevOps. Currently working for Exoscale. Also double as a teacher in universities and higher education schools, a trainer and triples as a book author.


