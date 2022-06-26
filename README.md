# Gwitter

Twitter (mini)clone with React and Firebase

## Page
https://sovla.github.io/gtwitter

## 진행하며 느낀것들
# 클론코딩 twitter
## 주의할점 
- 클론코딩은 내 실력이 아니다
- 배워 갈것은 패턴, 코딩 습관, 흐름을 이해하는것 
- 해당 프로젝트를 완성한뒤 꼭 비슷한 기술을 사용한 개인 프로젝트를 진행해볼것 

### 개인적인 생각 
- 이 책을 클론 코딩하는 이유? 
	- 내 Gavri 프로젝트에 로그인등 기능을 추가하고 싶은데 어떻게 할지 몰라서.
- 그럼 내가 배워갈수 있을거 같은 항목은? (목차만보고)
	- 사진 저장, 미리보기
	- 회원가입,로그인,소셜 로그인 기능
   	- 파이어베이스, 보안 , 필터링 기능 

## 목차
### 파이어베이스
파이어베이스 처럼 서버 구축 서비스를 전문 용어로 BaaS(Backend-as-a-Service)라고 합니다.
파이어베이스의 기능 
`실시간 데이터베이스` 관리자 패널에서 직접 데이터 베이스 조작 가능
`파이어베이스 ML 베타` 파이어베이스에서 제공하는 머신러닝 서비스
`Cloud 함수` 서버 자체의 기능을 직접 구현 가능
`인증` 아주 적은 양의 코드로도 회원가입,로그인 등을 처리
`클라우드 저장소` 사진 등의 파일을 저장하기 위해 사용

### 환경 설정
1. node js 설치
(보충 지식 : node.js 는 브라우저 외의 환경에서 자바스크립트를 실행할 수 있게 도와주는 도구입니다. 그로인해 웹 서버 개발시 자바스크립트 언어로도 가능해졌습니다.)
2. npx 설치 
(npm과의 차이는 npm은 최신 버전의 노드패키지를 설치해주는 것이고 npx는 그 패키지를 사용하게 해주는 도구입니다.)
3. VSC 설치
4. Git 설치
5. Repository 생성 (gwitter) 
6. npx create-react-app "프로젝트명"
7. git 연동 git remote add origin "저장소 이름"
#### 파이어베이스 설정
1. https://firebase.google.com/ -> 시작하기 -> 프로젝트 만들기
2. Google애널리틱스 사용설정 끄고 프로젝트 생성
3. 해당 프로젝트 접근후 `</>` 모양 클릭 후 호스팅 설정 끄고 앱등록
4. 해당 config 설정 
![](https://images.velog.io/images/gavri/post/5440a3d0-afc7-48b9-a5c3-a53e8e2756d1/image.png)

### 클론 코딩 시작
#### 시작전 api 키 숨기기
.env 파일 작성후 api 키등 옮긴후 REACT_APP_API_KEY 입력시
process.env.REACT_APP_API_KEY로 바로 접근이 가능하다.
그리고 .gitignore 파일에 .env 파일을 추가하여 올리지 못하도록 막는다.

참고) ko.reactjs.org/docs/faq-state.html
참고) ko.reactjs.org/docs/components-and-props.html
참고) ko.reactjs.org/docs/hooks-intro.html
참고) ko.reactjs.org/docs/hooks-state.html

#### 코드 가독성을 위한 jsconfig.json 파일 
![](https://images.velog.io/images/gavri/post/4a6d998d-ab6a-4d7d-84a4-4f20842702ba/image.png)
기존 import Auth from "../route/Auth"
변경 import Auth from "route/Auth" 
해당 파일을 사용하게 되면 발생하는 문제가 nodemodule 폴더 이름과 동일한 파일이 있을시 에러가 발생함. firebase.js -> fbase.js 변경

`이외에도 파일 설정하는 것들이 많을거 같은데 꼭 배우고싶다.`

## 진행하며 느낀점
### 배워갈점
- 기능을 만든뒤 컴포넌트를 분리하는점 
- 파이어베이스의 다양한 기능 지원 (로그인,저장소,DB)
- 어떠한 기능을 만들때마다 log 찍으며 확인하는 습관 
- 파일설정(보안, 절대경로지정)

### 추후 어떤 프로젝트에 배운것을 적용해볼것인가
firebase의 편리함을 경험해보았다..
이 자체를 알게된다면 굳이 개인프로젝트에 백단을 구성해볼 필요가있을까?
약간 고민의 여지가 생기게 됩니다.. 
## 배포
code) https://github.com/sovla/gtwitter.com 
page) https://sovla.github.io/gtwitter.com





