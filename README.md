## About

The test task from DzenCode for a position as a React developer

## Download

```bash
git clone https://github.com/Lobovem/DzenCode
```

## Install dependencies

```bash
$ npm install
```

## Running JSON server

```bash
$ npx json-server db.json
```

## Path to local JSON server without Docker

```bash
 http://localhost:3000/
```

## Running the app in dev mode

```bash
# development
$ npm run dev

```

## Path to local project without Docker

```bash
 http://localhost:5173/
```

## DOCKER

## If you need create Docker image

```bash
$ docker build -t lobovem/dzencode:my-app .

```

## Pull docker image from Hub

```bash
$ docker pull lobovem/dzencode:my-app

```

## If you need Running Docker image

```bash
# development
$ docker run -p 3000:3000 -p 3030:5173 lobovem/dzencode:my-app

```

## path to local JSON server with Docker image

```bash
http://localhost:3000/

```

## path to local project with Docker image

```bash
http://localhost:3030

```
