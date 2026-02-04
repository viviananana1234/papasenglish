import { shuffle } from "./shuffle.js";

let _shuffledOrder = null;

export function getShuffledCardOrder(cards) {
  if (_shuffledOrder === null) {
    _shuffledOrder = shuffle(cards.map((_, i) => i));
  }
  return _shuffledOrder;
}

let _sessionCardIndex = null;

export function getSessionCardIndex(cards) {
  if (_sessionCardIndex === null) {
    _sessionCardIndex = Math.floor(Math.random() * cards.length);
  }
  return _sessionCardIndex;
}

export function getDayOfYear(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export function getTodayCardIndex(cards) {
  const day = getDayOfYear();
  return day % cards.length;
}
