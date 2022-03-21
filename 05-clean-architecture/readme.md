# page url

https://blog.tai2.net/the_clean_architecture.html

# Architectures

they are different but same purpose. separation of concern.

- Hexagonal Architecture (別名 Ports and Adapters) by Alistair Cockburn
- Onion Architecture
- Screaming Architecture
- DCI
- BCE

# Merit

- independent from framework. no dependency to library
- testable business rule without UI, database, web server, and other outer element
- independent UI. no dependency or change to business rule.
- independent database. no dependency or change to business rule.
- no outer dependency. business rule know nothing about outer world

# dependency rule

- outer circle can depends on inner circle

# entity

- business rule
- independent
- no change from outer layers

# use case

-
