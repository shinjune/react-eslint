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
