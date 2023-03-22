// code your solution here
function saturdayFun(event = "roller-skate") {
  return `This Saturday, I want to ${event}!`;
}

function mondayWork(event = "go to the office") {
  return `This Monday, I will ${event}.`;
}

function wrapAdjective(symbol = "*") {
  return function newfunction(special = "special") {
    return `You are ${symbol}${special}${symbol}!`;
  };
}
