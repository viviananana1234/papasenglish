const BASE = (import.meta.env.BASE_URL || "/") + "images/cards/";

const img = (n) => BASE + `card${n}.jpg.jpg`;

const QUIZ_CARDS = [
  { id: 1, word: "in the know", meaning: "특정 정보나 사실에 정통한 (잘 알고 있는)", image: img(1), options: ["In the know", "Out of focus", "Under the weather", "Behind the times"], keyPoints: ["in the know", "well-informed", "have inside information"] },
  { id: 2, word: "it's not unheard of", meaning: "놀라운 일이 아니다 (흔한 일이다)", image: img(2), options: ["It's common", "It's not unheard of", "It's bizarre", "It's unique"], keyPoints: ["it's not unheard of", "it happens", "quite common"] },
  { id: 3, word: "crush it", meaning: "어떤 일을 정말 잘 해내다 (박살 내다)", image: img(3), options: ["Nail it", "Break it", "Crush it", "Miss it"], keyPoints: ["crush it", "nail it", "do really well"] },
  { id: 4, word: "I'm a stranger here", meaning: "여기가 처음이라 잘 모릅니다", image: img(4), options: ["I'm a stranger here", "I'm a local", "I'm lost", "I'm busy"], keyPoints: ["I'm a stranger here", "first time here", "don't know the area"] },
  { id: 5, word: "be-all and end-all", meaning: "전부, 혹은 가장 중요한 것", image: img(5), options: ["Side project", "Be-all and end-all", "Starting point", "Final warning"], keyPoints: ["be-all and end-all", "the most important", "everything that matters"] },
  { id: 6, word: "not my scene", meaning: "내 취향이 아니야 (즐기는 상황이 아님)", image: img(6), options: ["Not my scene", "Just my type", "My favorite", "A total disaster"], keyPoints: ["not my scene", "not my thing", "not for me"] },
  { id: 7, word: "save me a lot of work", meaning: "~의 일(수고)을 많이 덜어주다", image: img(7), options: ["Give me work", "Save me a lot of work", "Make it hard", "Work out"], keyPoints: ["save me a lot of work", "lighten the load", "reduce my workload"] },
  { id: 8, word: "there's no telling", meaning: "확실히 알 수 없다 (예측하기 어렵다)", image: img(8), options: ["It's obvious", "There's no telling", "I told you", "Say no more"], keyPoints: ["there's no telling", "hard to predict", "impossible to know"] },
];

const EXTRA_KEY_POINTS = [
  ["break the ice", "start a conversation", "get things going"],
  ["piece of cake", "very easy", "no problem"],
  ["hit the books", "study hard", "crack the books"],
  ["on the same page", "in agreement", "aligned"],
  ["think outside the box", "be creative", "innovative thinking"],
  ["once in a blue moon", "very rarely", "hardly ever"],
  ["under the weather", "feel sick", "not well"],
  ["bite the bullet", "face difficulty", "deal with it"],
  ["spill the beans", "reveal a secret", "let it out"],
  ["cost an arm and a leg", "very expensive", "pricey"],
  ["feel under the weather", "slightly ill", "run down"],
  ["get the ball rolling", "start something", "get started"],
  ["call it a day", "stop working", "wrap up"],
  ["break a leg", "good luck", "do well"],
  ["hit the nail on the head", "exactly right", "spot on"],
  ["let the cat out of the bag", "reveal secret", "spill it"],
  ["raining cats and dogs", "heavy rain", "pour down"],
  ["when pigs fly", "never", "unlikely"],
  ["bend over backwards", "try very hard", "go out of one's way"],
  ["cut corners", "take shortcuts", "do it the easy way"],
  ["back to the drawing board", "start over", "try again"],
  ["on cloud nine", "very happy", "over the moon"],
  ["fit as a fiddle", "very healthy", "in great shape"],
  ["let sleeping dogs lie", "avoid trouble", "leave it alone"],
];

const IMAGE_ONLY = Array.from({ length: 24 }, (_, i) => ({
  id: i + 9,
  word: "",
  meaning: "",
  image: img(i + 9),
  options: [],
  keyPoints: EXTRA_KEY_POINTS[i % EXTRA_KEY_POINTS.length],
}));

export const CARDS = [...QUIZ_CARDS, ...IMAGE_ONLY];
