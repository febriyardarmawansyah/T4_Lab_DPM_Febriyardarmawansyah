export const isWinningScore = (score) => score === 10;

export const resetScores = (setTeamA, setTeamB) => {
  setTeamA(0);
  setTeamB(0);
};
