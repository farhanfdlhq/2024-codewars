// WPU Coding Challenge 2024
// 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  return games.reduce((totalPoints, match) => {
    const [ourScore, opponentScore] = match.split(":").map(Number);
    return (
      totalPoints +
      (ourScore > opponentScore ? 3 : ourScore === opponentScore ? 1 : 0)
    );
  }, 0);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
