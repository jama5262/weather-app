# weather-app
An vuejs weather app that consumes the open weather api

[![Build Status](https://travis-ci.org/jama5262/weather-app.svg?branch=develop)](https://travis-ci.org/jama5262/weather-app)
[![Coverage Status](https://coveralls.io/repos/github/jama5262/weather-app/badge.svg?branch=develop)](https://coveralls.io/github/jama5262/weather-app?branch=develop)

## Demos

Success | Unknown Cities
------------ | ------------
<img src="https://github.com/jama5262/weather-app/blob/develop/src/gif/image1.gif" alt="alt text" height="500px"> | <img src="https://github.com/jama5262/weather-app/blob/develop/src/gif/image2.gif" alt="alt text" height="500px">

## Installation

### Cloning
Clone this repo to your local machine using `https://github.com/jama5262/weather-app.git`

### Create .env
Create a `.env` file and add the following variables
```
VUE_APP_OPEN_WEATHER_API_KEY=<YOUR_OPEN_WEATHER_API_KEY>
```
**The project can be setup in two ways, using docker or runnig locally using npm**

### Running Docker

To setup using docker, run the following docker-compose command
```
docker-compose up
```
The project can be found at http://localhost:8080/

### OR Installing all packages
After cloning `cd` into the project and run the following to install all packages
```
npm install
```
Great the project has been setup 👍

## Usage
To start using it locally, run the following
```
npm run serve
```

## Testing

You can run tests by usung the following command
```
npm run test:unit
```

## Support

Reach out to me at one of the following places!

- Email at jama3137@gmail.com
- Twitter [timedjama5262](https://twitter.com/timedjama5262)

## License

```
MIT License

Copyright (c) 2020 Jama Mohamed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
