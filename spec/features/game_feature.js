describe("Features - BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("can play a normal game without bonuses", function() {
    game.play(3, 4);
    expect(game.turns[0].firstBowl).toEqual(3)
    expect(game.turns[0].secondBowl).toEqual(4)
    expect(game.score).toEqual(7)
    game.play(1, 1);
    expect(game.turns[1].firstBowl).toEqual(1)
    expect(game.turns[1].secondBowl).toEqual(1)
    expect(game.score).toEqual(9)
    game.play(0, 9);
    expect(game.turns[2].firstBowl).toEqual(0)
    expect(game.turns[2].secondBowl).toEqual(9)
    expect(game.score).toEqual(18)
    game.play(8, 1);
    expect(game.turns[3].firstBowl).toEqual(8)
    expect(game.turns[3].secondBowl).toEqual(1)
    expect(game.score).toEqual(27)
    game.play(3, 0);
    expect(game.turns[4].firstBowl).toEqual(3)
    expect(game.turns[4].secondBowl).toEqual(0)
    expect(game.score).toEqual(30)
    game.play(3, 6);
    expect(game.turns[5].firstBowl).toEqual(3)
    expect(game.turns[5].secondBowl).toEqual(6)
    expect(game.score).toEqual(39)
    game.play(0, 4);
    expect(game.turns[6].firstBowl).toEqual(0)
    expect(game.turns[6].secondBowl).toEqual(4)
    expect(game.score).toEqual(43)
    game.play(1, 7);
    expect(game.turns[7].firstBowl).toEqual(1)
    expect(game.turns[7].secondBowl).toEqual(7)
    expect(game.score).toEqual(51)
    game.play(5, 2);
    expect(game.turns[8].firstBowl).toEqual(5)
    expect(game.turns[8].secondBowl).toEqual(2)
    expect(game.score).toEqual(58)
    game.play(5, 0);
    expect(game.turns[9].firstBowl).toEqual(5)
    expect(game.turns[9].secondBowl).toEqual(0)
    expect(game.score).toEqual(63)
  });

  it("can play a game with spares and strikes showing always the score - tenth frame plays normal", function() {
    game.play(3, 7);
    console.log(game.score)
    expect(game.score).toEqual(0)
    game.play(1, 1);
    console.log(game.score)
    expect(game.score).toEqual(13)
    game.play(10);
    expect(game.score).toEqual(23)
    game.play(10);
    expect(game.score).toEqual(43)
    game.play(3, 4);
    expect(game.score).toEqual(57)
    game.play(10);
    expect(game.score).toEqual(67)
    game.play(8, 0);
    expect(game.score).toEqual(83)
    game.play(3, 7);
    expect(game.score).toEqual(93)
    game.play(10);
    expect(game.score).toEqual(113)
    game.play(2, 4);
    expect(game.score).toEqual(125)
  });

});