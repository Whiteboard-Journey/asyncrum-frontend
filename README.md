<div align="center">
<img src="https://user-images.githubusercontent.com/24418404/201491364-d7e87dd3-4d3e-4b20-a92b-188511b1f3a6.png" title="asyncrum"/>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FWhiteboard-Journey%2Fasyncrum-frontend&count_bg=%233D71C8&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>

# Asyncrum

> 시차가 존재하는 원격 팀을 위한 화이트보드 + 비디오 로그 기반 비동기 협업 소프트웨어 <br /><br /> **개발 기간: 2022. 06 ~ 2022. 11**

> 이 성과는 2022년도 과학기술정보통신부의 재원으로 정보통신기획평가원의 지원을 받아 수행된 연구임. (IITP-2022-SW마에스트로과정) <br><br> This work was supported by the Institute of Information & Communications Technology Planning & Evaluation(IITP) grant funded by the Ministry of Science and ICT(MSIT) (IITP-2022-SW Maestro training course).

## ~~배포 주소~~ (서버 중단 상태)

> ~~[https://www.asyncrum.com](https://www.asyncrum.com)~~

## 데모
※ 서버가 가동되고 있지 않은 상태입니다. 일부 기능이 작동하지 않을 수 있습니다.

1. `demo` 브랜치에서 코드 복사
```
git clone -b demo --single-branch https://github.com/Whiteboard-Journey/asyncrum-frontend.git
```
2. dependency 설치
```
yarn
```
3. json-server 설치 및 구동
```
npm install -g json-server
json-server --watch src/mock-server/db.json --port 3001
```
4. 코드 실행
```
yarn start
```

## 프로젝트 소개

동시 편집 화이트보드와 동영상을 결합한 협업 소프트웨어로서 원격으로 근무하는 팀을 돕습니다. 비디오 로그 기능을 통해 시차가 존재하는 팀원간의 커뮤니케이션을 원활하게 합니다.

SW마에스트로 13기 벤처 프로젝트로서 네이버 SmartStudio Alto 팀, Yorkie 팀과 협업하며 개발을 진행했습니다.

## 주요 기능

- 팀 워크스페이스(Dashboard)
  - 데일리 스크럼 리스트
  - 화이트보드 문서 리스트
  - 화상 회의 리스트
- 데일리 스크럼(Daily Standups)
  - 데일리 스크럼 녹화
  - 데일리 스크럼 시청: 화이트보드 + 비디오 코멘트 쓰레드 북마크가 존재하는 가능한 비디오 플레이어
- 화이트보드 문서
  - tldraw + Yorkie 기반 동시 편집 화이트보드
  - 이미지/동영상을 업로드 할 수 있는 화이트보드
- 화상 회의
  - Jitsi Meet 기반 화상 회의

## 개발 환경

- Front-end: React, TypeScript, Redux-saga, react-bootstrap, SCSS
- Back-end: Java, Spring Boot, JPA, Mysql, MongoDB, AWS, K8S, Docker, WebRTC, Jitsi, gRPC

## 동작 화면

### 랜딩 페이지
<img src="https://user-images.githubusercontent.com/24418404/201982333-ef7625d0-8e74-4b29-82d2-608c4edb1bf8.png" />

### 로그인

<img src="https://user-images.githubusercontent.com/24418404/201703645-c4b35d77-a144-4e43-a5b6-6b53448434f5.png" />

### 팀 워크스페이스

![dashboard.png](./src/assets/images/dashboard.png)
![dashboard_dark.png](./src/assets/images/dashboard_dark.png)

### 데일리 스크럼

<img src="https://user-images.githubusercontent.com/24418404/201708981-393e6c2b-3928-4e15-96a4-c4a0fa2f2c2e.png" />

### 동시 편집 화이트보드

![whiteboard.png](./src/assets/images/whiteboard.png)

### 실시간 회의

![meeting.png](./src/assets/images/meeting.png)

### 설정

<img src="https://user-images.githubusercontent.com/24418404/201711539-bd0ea156-bc5d-438c-8101-053f3643c385.png" />
<img src="https://user-images.githubusercontent.com/24418404/201711622-47a6b110-f86f-4cf1-834d-cf9928a5c55e.png" />
