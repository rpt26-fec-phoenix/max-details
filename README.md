# Airbnb Listing Details Service

![GitHub Logo](/images/details.png)


The Airbnb Listing Details Service is part of a larger project that uses a service oriented architecture to combine multiple services into one application via a proxy server.

This particular service manages the detail data related to an individual property and serves up the associated HTML, CSS, and React components.

## Related Projects
### Proxy Server
  - https://github.com/rpt26-fec-phoenix/max-proxy
### Other Services
  - https://github.com/rpt26-fec-phoenix/alex-checkout-calendar-component
  - https://github.com/rpt26-fec-phoenix/nelson-reviews
  - https://github.com/rpt26-fec-phoenix/Jason-photos
  - https://github.com/rpt26-fec-phoenix/nelson-host-information

## Table of Contents

1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Development](#development)
1. [Deployment](#deployment)
1. [Technology](#technology)

## Requirements

- Node 6.13.0
- Mongo
- Docker
- CircleCI

## Installation
From within the root directory:

```sh
npm install
npm run seed
```

## Development
From within the root directory, run the following commands in separate terminal windows:

```sh
npm run react-dev
npm run server-dev
```

## Deployment
### Docker Deployment
```sh
docker-compose up
```
## Technology
### Front-End
- React
- Styled-Components
### Back-End
- Express
- Mongo
### Testing + CI/CD
- Jest
- Enzyme
- CircleCI
### Deployment
- Docker
