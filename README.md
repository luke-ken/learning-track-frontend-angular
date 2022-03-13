_**This project is a hobby project and is still a work in
progress, so if something is not running please don't be mad**_ :smile:  

# Learning Track (Front-end)
This is the front-end part of the LSDP (Learn-Solve-Document-Progress) web-app. The back-end
counterpart can be found [here](https://github.com/luke-ken/learning-track).

(**Make sure to check out the back-end part too as both are intent to run together!**)

## Prerequisites
* Node 14
* Angular CLI 10

You need to install the correct version as this project is built with Angular 10,
which is **NOT** compatible with newer Node version (e.g. 16, 17).

## How to run

### 1. With Development server
Run `ng serve` for a dev server. Then navigate to `http://localhost:4200` to access the front-end.

### 2. With Docker
First run `ng build --prod` to build the project.
After the build is done, run the following to build a docker image:
```
docker build -t lsdp-client . 
```
Then start up a container with the freshly built image:
```
docker run --name lsdp-client-container -d -p 8080:80 lsdp-client 
```
Navigate to `http://localhost:8080` to access the front-end.

## User credentials
You can log in using [this credentials](https://github.com/luke-ken/learning-track#user-credentials) from the back-end.
