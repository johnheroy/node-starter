# Node Starter Pack

This is a starter pack for Node.js backend applications. After mostly writing
Java and Kotlin for the past several years and having dabbled in Node.js (with
plain vanilla ES5 back in 2014 and 2015), I thought it would be fun and
interesting to see how far Node.js development tools have come.

In particular I wanted to explore these tools:

* Typescript
* Inversify
* RxJS
* TypeORM
* Visual Studio Code (for writing code and live debugger)

## Overview

Right now this is kind of a slimmed down CRUDish app with two endpoints

* `GET /hello?name=<optional name>` - sends `Hello <name or World if not provided>` as a plaintext response and logs the "hello" as an entry in Postgres (with id, name, and created_at columns)
* `GET /hello/all` - sends back a JSON array of all "hellos" in the database

The idea is that one can copy this repo and then use the hellos resource as an example and starting point for some real CRUD data.

## Known issues

I want to use the rich operators library of RxJS and there is much stronger support for Promises and async/await in both TypeORM and Inversify (am currently using the `InversifyExpressServer`), so to put `Observable` in the middle of the data layer giving me `Promise` and also having to return `Promise` is well, a little forced (see [this Inversify issue](https://github.com/inversify/InversifyJS/issues/1003)).

So I might move away from `InversifyExpressServer` and use Express directly or with a standalone Express Typescript decorators framework so I can have more RxJS-based Express controller logic for my endpoints and just transform TypeORM promises to Observables to `from`.

Also--this project doesn't have any user authentication support yet, which I plan to add with Passport.js.
