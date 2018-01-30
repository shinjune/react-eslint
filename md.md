게사판을 만든다
아래를 이용해서 만든다

semantic ui
react
redux
react-router

storyboard
eslint



## eslint
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}

## eslint를 사용하려면 설정파일이 필요하다

.eslintrc 파일 만들고 아래 붙여넣기

{
   "extends": "react-app"
}

## storybook 설치
npm i --save-dev @storybook/react


package.json에 아래 추가
{
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook"
  }
}

.storybook 폴더 생성
그 안에 config.js 생성
 - 내용 찾아서 입력


story폴더
index. js 생성

 - 내용 찾아서 입력


npm run storybook

## semantic ui css
설치

$ npm install semantic-ui-react semantic-ui-css


### styled components 설치


### 로그인 기능

1. 화면
2. 라우터
3. 컨테이너
4. 통신/백엔드/관련

라우터는 presentational component 이다

리액트 바깥 세계들과 연결되는 것을 container components라고 부른다

firebase login기능이 있는 것을 만들어보자

보안규칙/통신/백엔드 관련

router 설정은 app.js에서 한다

### 글목록

1. 화면
2. 라우터
3. 컨테이너 (connect)
4. 데이터구조

### 글쓰기
same as above

### 글열람
same as above
