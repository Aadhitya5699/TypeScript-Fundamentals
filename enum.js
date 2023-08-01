var Animals;
(function (Animals) {
    Animals[Animals["Dog"] = 0] = "Dog";
    Animals[Animals["Cat"] = 1] = "Cat";
    Animals[Animals["Cow"] = 2] = "Cow";
})(Animals || (Animals = {}));
var smallAnimals = Animals.Cat;
var BigAnimals = Animals.Cow;
