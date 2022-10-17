const quotes = [
{
    quote : "No Fear.",
    author : "Jerry Royster"
},
{
    quote : "제 야구 인생은 시속 70㎞ 커브로 날아가고 있습니다. 느리고 돌아가지만, 스트라이크존에 꽂히는 공처럼 언젠가 성공할 거라고 믿었거든요.",
    author : "유희관"
},
{
    quote : "나는 오늘을 살고 내일을 준비한다. 오늘 풀어지면 내일은 두 배로 땀을 흘려야 어제의 수준을 유지할 수 있다.",
    author : "오승환"
},
{
    quote : "기회는 자주 오는 게 아니다. 깰 수 있을 때 깨는 게 좋다. ",
    author : "이승엽"
},
{
    quote : "It ain't over till it's over.",
    author : "Yogi Berra"
},
{
    quote : "Don't laugh at a youth for his affectations; he is only trying on one face after another to find his own.",
    author : "Logan Pearsall Smith"
},
{
    quote : "Challenges are what make life interesting; overcoming them is what makes life meaningful.",
    author : "Joshua J. Marine"
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


//Math.random()=> 0~1 사이의 랜덤한 숫자 * array의 길이 --> floor로 숫자를 내림 --> quotes array 내부에서 탐색
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;