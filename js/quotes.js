const quotes = [
  {
    quote: "고통이 지나가면 그것이 너에게 강한 힘을 남길 것이다.",
    author: "프리드리히 니체",
  },
  {
    quote: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 믿는 대로 될 것이다.",
    author: "헨리 포드",
  },
  {
    quote: "성공은 실패를 거듭해도 열정을 잃지 않는 데서 나온다.",
    author: "윈스턴 처칠",
  },
  {
    quote: "가장 어두운 밤이 지나야 해가 떠오른다.",
    author: "할리 핸슨",
  },
  {
    quote: "기회는 대부분 어려움 속에서 찾아온다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "계속 나아가기만 한다면 얼마나 천천히 가는지는 중요하지 않다.",
    author: "공자",
  },
  {
    quote: "지금 서 있는 곳이 출발점이다. 주저하지 말고 시작하라.",
    author: "토니 로빈스",
  },
  {
    quote: "실패란 넘어지는 것이 아니라, 일어나지 않는 것이다.",
    author: "메리 픽포드",
  },
  {
    quote: "불가능은 작은 사람들의 환상에 불과하다.",
    author: "무하마드 알리",
  },
  {
    quote: "오늘 걷지 않으면, 내일은 뛰어야 한다.",
    author: "일본 속담",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todaysQuote);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
