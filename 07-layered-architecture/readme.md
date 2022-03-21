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

# infra layer

- call database, auth, outer API
- depends on only repository layer

## merit

- all outer API stays in infra and repository layer
- database and outer API change effects only infra and repository

# repository layer

- application ask repository to call outer service

## detail process

- use case layer gives user model to repository
- repository gives user model to fire store and create document in firebase and save data
- change data format for infra layer
- change data format for use-case layer

## merit

- The repository layer shows how a particular model handles external services.
- Without knowing the details of the external service, the use case can manipulate the external service to retrieve and save the model by simply passing arguments according to the interface.

# use-case layer

## detail process

- get data from presentation layer and pass to repository layer
- pass cart data to repository and dispatch redux store

## merit

- use-case layer shows user action list
- component can get data by following interface without knowing inner logic
-

# presentation layer

##

# presenter layer

- no presenter layer
- could be added if presentation layer is too big

# entity

- application unique type, constants, logic
- independent from any layer
- central logic and data
- go though all layers

## merit

-
