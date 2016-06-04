
### 간단 설명

- Marie Claire 사이트의 Horoscope (별자리 운세) 를 Crawling 합니다.
- 주 이용 언어: : javascript
- 환경: npm, gulp, google app script, lite-server (local 환경)

### package.json 

- 현 프로젝트에 대한 정의 (이름, 버젼, 환경으로 사용한 내용 등)
- 프로젝트 실행 시 이용할 스크립트 작성

```
...
"scripts": {
    "lite": "lite-server",
    "start": "npm run lite"
  },
...
```

- 위와 같이 작성함으로서 `npm start` 라는 명령어 사용
- [lite-server](https://www.npmjs.com/package/lite-server) 를 이용하여 로컬에서 간단하게 서버 띄우기 가능

### gulpfile.js

- [gulp](http://gulpjs.com/) 를 이용하여 빌드 자동화
- [browserify](http://browserify.org/) 를 이용하여 module 화
	- [browserify+gulp](https://www.viget.com/articles/gulp-browserify-starter-faq) 참고


### main.js

- google app script 프로젝트에 데이터를 요청한다.
- parameter : 'monthly', 'weekly' 둘 중 하나를 true 로 요청
- 기본값은 monthly : true 이다.
- jsonp 를 통해 데이터 주고받음
