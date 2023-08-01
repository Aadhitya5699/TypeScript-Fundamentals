class Humans{
    name:string;
    age:number;

    information(){
        console.log('name:'+this.name+'age'+this.age);
    }
}

let men=new Humans();
men.name="john";
men.age=24;
men.information();