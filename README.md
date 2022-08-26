# 영화 리뷰 작성 홈페이지 만들기
>  22.07~08 AI 양재 허브 웹 개발 교육 기간 중 만든 프로젝트

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

MERN (MongoDB + Express.js + React.js + Node.js) 를 이용하여   
회원 가입 및 리뷰 CRUD 가 가능 한 영화 리뷰 작성 홈페이지 제작


![image](https://user-images.githubusercontent.com/11794584/184541791-637089b0-5358-4cd5-ae38-a2d7a416c6e2.png)


## 설치 방법

```sh
npm install 
```

## 사용 예제


### MAIN
- 회원 가입 및 로그인 할 수 있는 페이지 (react 스럽게 하기 위해 전체 페이지가 아닌 Body 부분만 변환 되도록 함)
- 카카오톡 OAuth2.0 을 이용한 인증 구현
![image](https://user-images.githubusercontent.com/11794584/184542676-5ff77c32-d474-4afd-96b8-ee20081d3f9a.png)

### REVIEW LIST
- 해당 페이지에서 영화의 리뷰 CRUD 를 할 수 있다
- 리뷰 6개씩 Pagination 구현
![image](https://user-images.githubusercontent.com/11794584/184542855-ed7cd2b7-3c06-4d0d-8c2d-4d2beb256413.png)

### REVIEW CREATE
- 영화의 포스터 주소를 입력하여 포스터 저장
- 영화의 제목과 줄거리를 입력하여 저장
![image](https://user-images.githubusercontent.com/11794584/184543344-8fb67b99-2ce6-456a-9a5c-748fd5597fce.png)

### REVIEW UPDATE
- REVIEW LIST 화면에서 각 리뷰에 있는 `수정` 버튼으로 수정 가능
- 영화의 제목과 줄거리를 입력하여 수정
![image](https://user-images.githubusercontent.com/11794584/184543469-e6dc03ed-0533-4366-a014-beebfcb2dcf0.png)

### REVIEW DELETE
- REVIEW LIST 화면에서 각 리뷰에 있는 `삭제` 버튼으로 삭제 가능
![image](https://user-images.githubusercontent.com/11794584/184543505-2d9448fd-38d2-420f-98dc-745048732347.png)


## 실행 방법

- Server
```sh
node app.js
```
- Client
```sh
npm start
```

## 업데이트 내역

* 0.0.1
    * 작업 완료
## 정보
## 기여 방법

1. (<https://github.com/jisulee42/Movie_Review_Web/fork>)을 포크합니다.
2. (`git checkout -b feature/fooBar`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요. 
5. 풀리퀘스트를 보내주세요.

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
