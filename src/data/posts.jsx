const posts = [
  {
    id: 1,
    title: "3주차 대면 스터디",
    content: `
React 유데미 섹션 5 정리와 카운터 만들기 프로젝트
    
5.2) React 컴포넌트
컴포넌트 : 자바 스크립트가 html 태그를 return하도록 만든 것
컴포넌트 생성하는 함수의 이름 첫 글자는 대문자여야 한다.
App이 루트 컴포넌트임. App 안에 자식 컴포넌트를 < /> 형식으로 넣어야 함.

5.3) JSX로 UI 표현하기
Jsx 규칙
js값을 html로 랜더링하고 싶다면 { } 안에 넣기. 중괄호 안에는 숫자, 문자열 배열 값만 렌더링 된다. 모든 태그는 닫혀 있어야 한다. 최상위 태그는 반드시 하나여야만 한다. (빈 태그도 가능)

css처럼 border-bottom이 아닌 borderBottom처럼써야 됨.
Class가 아닌 className이라고 써야 됨.

별도의 css파일 만들기.

5.4) Props로 데이터 전달하기
부모 컴포넌트가 자식 컴포넌트에게 함수 인수 전달하듯 원하는 값을 전달할 수 있다.
매개변수 받아올 때 객체 구조분해할당 형태로 받아오자.

5.5) 이벤트 처리하기
Event Handling ex) onClick, onChange, onMouseEnter, …
ex) onClick= {( e ) => {
}} //e : 합성 이벤트 객체 (Synthetic Base Event 객체)
또는 
const onClickButton = () => {
}
<button onClick = {onClickButton}
> //여기서 onClickButton()이라고 적으면 

5.6) State로 상태관리하기
state: 현재 가지고 있는 형태나 모양을 정의. 변화할 수 있는 동적인 값이다.
state의 값에 따라 렌더링 되는 UI가 결정된다. state 바뀌면 알아서 리렌더링한다.
ex) const [state, setState] = useState(0); //state에는 useState를 통해 만들어진 값이 저장, setState에는 state 값 변경시키는 함수가 저장.

5.7) State와 Props
<Bulb light={light} /> 코드를 통해 light 상태 변수를 Bulb 컴포넌트의 prop으로 전달.
light={light}에서 왼쪽의 light는 Bulb 컴포넌트에서 사용할 prop의 이름이고, 오른쪽의 light는 ParentComponent(App)의 상태 변수이다.

리렌더링 발생하는 상황
1.	자신의 state값 변경된 경우
2.	자신이 제공받는 props 값 변경된 경우
3.	부모 컴포넌트가 리렌더링 되는 경우
	따로 파일을 만들자!

5.8) State로 사용자 입력 관리하기 1
onChange 뿐만이 아니라 value 속성도 지정해주기
	
5.9) State로 사용자 입력 관리하기 2
비슷한 여러 개의 state는 하나의 객체로 묶어서 관리하기
const [input, setInput] = useState({
	name: “”,
	birth: “”,
});
const onChangeName = (e) => {
setInput ({
	…input, // 관련 없는 건 그대로 유지
	name : e.target.value
})
};
비슷한 이벤트는 통합 이벤트 핸들러로
	const onChange = (e)=> {
setInput ({
…input,
[e.target.name]: e.target.value, // name에는 event가 발생한 태그의 name 속성이 들어가있음.
});
};

5.10) useRef로 컴포넌트의 변수 생성하기
useState와 비슷하나 리렌더링 되지 않음.

5.11) React Hooks
클래스 컴포넌트 기능을 함수 컴포넌트에서도 이용할 수 있도록
ex) useState, useRef, useEffect
함수 컴포넌트 내부에서만 호출 가능
조건문, 반복문 내에서는 X
use 접두사 이용해서 나만의 hook 제작 가능(custom hook 은 hooks라는 별도의 폴더에서 보관함.)
`,
    summary: "React 유데미 섹션 5 정리와 카운터 만들기 프로젝트",
    date: "2024년 7월 18일",
    comments: "5개의 댓글",
    likes: 3,
    author: "이다빈",
    imageUrl: "/imgs/counter.png",
  },
  {
    id: 2,
    title: "4주차 대면 스터디",
    summary: "React 유데미 섹션 7 정리와 투두리스트 만들기 프로젝트",
    content: `React 유데미 섹션 7 정리와 투두리스트 만들기 프로젝트

섹션 7: 라이프사이클

7.1) 라이프사이클이란?
리액트 컴포넌트의 라이프사이클 : mount(탄생) – update(변화) – unmount(죽음)
Mount : 컴포넌트가 탄생하는 순간, 화면에 처음 렌더링 되는 순간
Update : 컴포넌트가 리렌더링 되는 순간
Unmount : 컴포넌트가 화면에서 사라지는 순간, 렌더링에서 제외 되는 순간

라이프사이클 제어 (5.2 useEffect 사용하면 편리)
Mount(서버에서 데이터 불러오기) – Update(어떤 값이 변경되었는지 콘솔에 출력) – Unmount(컴포넌트가 사용하던 메모리 정리)

7.2) useEffect 사용하기
useEffect : 리액트 컴포넌트의 사이드 이펙트를 제어하는 React Hook
  useEffect(() => {}, []); // 콜백함수와 배열, 배열 안의 값이 바뀌면 사이드 이펙트로 콜백함수가 실행된다. 이 배열은 의존성 배열이라고 한다. dependency array=deps

7.3) useEffect로 라이프사이클 제어하기
  //1. 마운트
  useEffect(() => {
    console.log("mount");
  }, [ ]);

  //2. 업데이트
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

클린업, 정리 함수 : useEffect의 콜백함수가 반환하는 함수, useEffect가 끝날 때 실행됨.
const Even = () => {
  useEffect(() => {
    //클린업, 정리함수
    return () => {
      console.log("unmount");
    };
  }, []);


7.4) React 개발자 도구 사용하기
부모 컴포넌트가 자식 컴포넌트에게 함수 인수 전달하듯 원하는 값을 전달할 수 있다.
매개변수 받아올 때 객체 구조분해할당 형태로 받아오자.

`,
    date: "2024년 7월 23일",
    comments: "8개의 댓글",
    likes: 3,
    author: "이다빈",
    imageUrl: "/imgs/todolist.png",
  },
  {
    id: 3,
    title: "9주차 마지막 스터디",
    content: "velog 클론코딩 최종 프로젝트",
    summary: "velog 클론코딩 최종 프로젝트",
    date: "2024년 9월 1일",
    comments: "12개의 댓글",
    likes: 3,
    author: "이다빈",
    imageUrl: "/imgs/home.png",
  },
  {
    id: 4,
    title: "Node.js 서버 구축",
    content:
      "Node.js를 사용하여 서버를 구축하는 방법을 단계별로 설명합니다. Express 프레임워크와 MongoDB를 연동하여 CRUD 기능을 구현하는 방법을 배웁니다.",
    summary:
      "Node.js를 사용하여 서버를 구축하는 방법을 단계별로 설명합니다. Express 프레임워크와 Mon...",
    date: "2024년 8월 25일",
    comments: "7개의 댓글",
    likes: 56,
    author: "최수현",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 5,
    title: "프로그래밍 언어 선택 가이드",
    content:
      "프로그래밍을 처음 시작하는 사람들을 위한 언어 선택 가이드를 제공합니다. 각 언어의 장단점을 비교하고, 사용 사례에 따라 어떤 언어를 선택해야 할지 조언합니다.",
    summary:
      "프로그래밍을 처음 시작하는 사람들을 위한 언어 선택 가이드를 제공합니다. 각 언어의 장단점을 비...",
    date: "2024년 5월 21일",
    comments: "20개의 댓글",
    likes: 92,
    author: "윤지호",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 6,
    title: "AI와 머신러닝의 미래",
    content:
      "AI와 머신러닝 기술이 우리의 미래에 미칠 영향을 탐구합니다. 최신 연구 동향과 실질적인 적용 사례를 바탕으로 AI의 발전 방향을 논의합니다.",
    summary:
      "AI와 머신러닝 기술이 우리의 미래에 미칠 영향을 탐구합니다. 최신 연구 동향과 실질적인 적용 사례...",
    date: "2024년 1월 1일",
    comments: "15개의 댓글",
    likes: 38,
    author: "이다슬",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 7,
    title: "데이터 분석 시작하기",
    content:
      "데이터 분석을 처음 접하는 사람들을 위한 입문서입니다. 기본 개념부터 시작하여, 데이터 시각화와 통계 분석까지 다양한 주제를 다룹니다.",
    summary:
      "데이터 분석을 처음 접하는 사람들을 위한 입문서입니다. 기본 개념부터 시작하여, 데이터 시각화와...",
    date: "2024년 10월 12일",
    comments: "9개의 댓글",
    likes: 21,
    author: "정하나",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 8,
    title: "웹 보안 기초",
    content:
      "웹 애플리케이션 보안을 강화하는 방법에 대해 설명합니다. OWASP Top 10과 같은 표준 보안 취약점 목록을 바탕으로, 각 취약점의 위험성과 방어 방법을 다룹니다.",
    summary:
      "웹 애플리케이션 보안을 강화하는 방법에 대해 설명합니다. OWASP Top 10과 같은 표준 보안 취약...",
    date: "2024년 3월 30일",
    comments: "18개의 댓글",
    likes: 64,
    author: "김민준",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 9,
    title: "풀스택 개발자가 되는 법",
    content:
      "풀스택 개발자가 되기 위한 필수 기술을 소개합니다. 프론트엔드와 백엔드 모두에 대한 기본 개념과 최신 트렌드를 학습할 수 있습니다.",
    summary:
      "풀스택 개발자가 되기 위한 필수 기술을 소개합니다. 프론트엔드와 백엔드 모두에 대한 기본 개념과...",
    date: "2024년 9월 3일",
    comments: "12개의 댓글",
    likes: 29,
    author: "최수현",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 10,
    title: "효율적인 코드 작성법",
    content:
      "코드의 가독성과 유지보수성을 높이기 위한 효율적인 코드 작성법을 배웁니다. 함수형 프로그래밍, 디자인 패턴 등을 활용한 모범 사례를 소개합니다.",
    summary:
      "코드의 가독성과 유지보수성을 높이기 위한 효율적인 코드 작성법을 배웁니다. 함수형 프로그래밍, ...",
    date: "2024년 6월 11일",
    comments: "10개의 댓글",
    likes: 72,
    author: "한지민",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 11,
    title: "모바일 앱 개발 입문",
    content:
      "모바일 앱 개발에 대한 기본 개념과 프로세스를 설명합니다. React Native와 Flutter를 사용하여 크로스 플랫폼 앱을 개발하는 방법을 배웁니다.",
    summary:
      "모바일 앱 개발에 대한 기본 개념과 프로세스를 설명합니다. React Native와 Flutter를 사용하여...",
    date: "2024년 2월 15일",
    comments: "7개의 댓글",
    likes: 84,
    author: "이서준",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 12,
    title: "클라우드 컴퓨팅의 이해",
    content:
      "클라우드 컴퓨팅의 기본 개념과 주요 서비스 제공자들의 특징을 비교합니다. AWS, Azure, Google Cloud Platform에 대해 다룹니다.",
    summary:
      "클라우드 컴퓨팅의 기본 개념과 주요 서비스 제공자들의 특징을 비교합니다. AWS, Azure, Google...",
    date: "2024년 4월 5일",
    comments: "5개의 댓글",
    likes: 61,
    author: "윤지호",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 13,
    title: "DevOps 문화와 도구",
    content:
      "DevOps 문화의 중요성과 이를 지원하는 다양한 도구들에 대해 배웁니다. CI/CD 파이프라인 구축 및 자동화 도구 사용법을 설명합니다.",
    summary:
      "DevOps 문화의 중요성과 이를 지원하는 다양한 도구들에 대해 배웁니다. CI/CD 파이프라인 구축 ...",
    date: "2024년 7월 19일",
    comments: "12개의 댓글",
    likes: 47,
    author: "최수현",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 14,
    title: "웹 성능 최적화",
    content:
      "웹 페이지의 로딩 속도를 개선하고, 사용자 경험을 향상시키기 위한 성능 최적화 기법들을 소개합니다. Lighthouse와 같은 도구를 사용한 분석 방법도 다룹니다.",
    summary:
      "웹 페이지의 로딩 속도를 개선하고, 사용자 경험을 향상시키기 위한 성능 최적화 기법들을 소개합...",
    date: "2024년 8월 25일",
    comments: "20개의 댓글",
    likes: 34,
    author: "서예지",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 15,
    title: "데이터베이스 설계 원칙",
    content:
      "효율적이고 확장 가능한 데이터베이스를 설계하기 위한 원칙들을 설명합니다. 정규화, 인덱싱, 쿼리 최적화 등의 기법을 다룹니다.",
    summary:
      "효율적이고 확장 가능한 데이터베이스를 설계하기 위한 원칙들을 설명합니다. 정규화, 인덱싱, 쿼...",
    date: "2024년 5월 21일",
    comments: "8개의 댓글",
    likes: 23,
    author: "김영수",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 16,
    title: "머신러닝 모델 배포",
    content:
      "머신러닝 모델을 실제 환경에 배포하는 과정과 고려해야 할 사항들을 설명합니다. Docker와 Kubernetes를 활용한 배포 방법도 포함됩니다.",
    summary:
      "머신러닝 모델을 실제 환경에 배포하는 과정과 고려해야 할 사항들을 설명합니다. Docker와 Kuber...",
    date: "2024년 1월 1일",
    comments: "7개의 댓글",
    likes: 92,
    author: "이다슬",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 17,
    title: "백엔드 아키텍처 설계",
    content:
      "확장성과 유지보수성을 고려한 백엔드 아키텍처 설계 방법을 배웁니다. 마이크로서비스와 모놀리식 아키텍처의 장단점을 비교합니다.",
    summary:
      "확장성과 유지보수성을 고려한 백엔드 아키텍처 설계 방법을 배웁니다. 마이크로서비스와 모놀리식...",
    date: "2024년 10월 12일",
    comments: "18개의 댓글",
    likes: 38,
    author: "김민준",
    imageUrl: "/imgs/fox.jpg",
  },
  {
    id: 18,
    title: "테스트 주도 개발(TDD)",
    content:
      "테스트 주도 개발(TDD)의 원칙과 이를 실무에 적용하는 방법을 학습합니다. 단위 테스트, 통합 테스트를 통해 코드 품질을 높이는 기법을 배웁니다.",
    summary:
      "테스트 주도 개발(TDD)의 원칙과 이를 실무에 적용하는 방법을 학습합니다. 단위 테스트, 통합 테스...",
    date: "2024년 3월 30일",
    comments: "9개의 댓글",
    likes: 54,
    author: "박민지",
    imageUrl: "/imgs/fox.jpg",
  },
];

export default posts;
