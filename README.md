# Node Starter Pack

Starter pack for full-stack Node.js + TypeScript applications.

## Stack

* Node.js - runtime
* TypeScript - for readability
* TypeORM - for modeling and persisting data to a relational db
* Express - Node.js web framework
* TypeScript Express Decorators (TSED) - declarative REST routing
* RxJS

## Overview

Slimmed down CRUDish app with two REST endpoints:

* `GET /hello?name=<optional name>` - sends `Hello <name or World if not provided>` as a plaintext response and logs the "hello" as an entry in Postgres (with id, name, and created_at columns)
* `GET /hello/all` - sends back a JSON array of all "hellos" in the database

## Instructions

Set database connection details in `ormconfig.json`.

```bash
npm install
npm run dev
```

## TODO

- [x] Declarative decorators
- [ ] Unit tests
- [ ] Templating (server side HTML rendering)
- [ ] Static assets (for front end)
- [ ] Better nodemon configuration (only build 1x when first starting)
- [ ] Logging & metrics
- [ ] Debugging configuration for VS Code

## License

MIT
