var Humans = /** @class */ (function () {
    function Humans() {
    }
    Humans.prototype.information = function () {
        console.log('name:' + this.name + 'age' + this.age);
    };
    return Humans;
}());
var men = new Humans();
men.name = "john";
men.age = 24;
men.information();
