addEventListener("DOMContentLoaded", () => {
  let gameInfo = {
    cursorsPrice: 10,
    points: 0,
    perSecond: 0,
    cursors: 0,
  };

  const click = document.querySelector(".click");
  const score = document.querySelector(".points");
  const subtitle = document.querySelector(".cursors");

  const cursors = document.getElementById("cursor");
  const output = document.getElementById("output");

  click.addEventListener("click", () => {
    gameInfo.points += 1;
    score.innerHTML = gameInfo.points;
  });

  cursors.addEventListener("click", () => {
    const cursorCost = gameInfo.cursorsPrice * gameInfo.cursors;
    if (gameInfo.points >= cursorCost) {
      gameInfo.points -= cursorCost;
      gameInfo.cursors += 1;
      subtitle.innerHTML = gameInfo.cursors;
      gameInfo.perSecond += 1;

      score.innerHTML = gameInfo.points;
    } else {
      alert("Not enough points to buy a cursor!");
    }
  });

  function incrementPoints() {
    gameInfo.points += gameInfo.perSecond;
    score.innerHTML = gameInfo.points;
  }

  setInterval(incrementPoints, 1000);
});
