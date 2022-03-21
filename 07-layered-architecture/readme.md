# React で作る中規模 SPA のレイヤードアーキテクチャ

## page url

https://www.gixo.jp/blog/16133/

# why?

- presentation and container component only
- too big container component

# applying clean architecture to frontend

- original layer is too complex for frontend
- infra
- repository
- use case
- presentation
- entity
- user

# infra

- call database, auth, outer API
- depends on only repository layer

## merit

- all outer API stays in infra and repository layer
- database and outer API change effects only infra and repository

# repository

- application ask repository to call outer service

## detail process

- use case layer gives user model to repository
- repository gives user model to fire store and create document in firebase and save data
- change data format for infra layer
- change data format for use-case layer

## merit

- The repository layer shows how a particular model handles external services.
- Without knowing the details of the external service, the use case can manipulate the external service to retrieve and save the model by simply passing arguments according to the interface.
