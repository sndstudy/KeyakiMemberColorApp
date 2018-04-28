export class MemberEntity{

    constructor() { }

    private name: string;

    private color1: string;

    private color2: string;

    public getName():string{
        return this.name;
    }

    public setName(name:string):void{
        this.name = name;
    }

    public getColor1():string{
        return this.color1;
    }

    public setColor1(color1:string):void{
        this.color1 = color1;
    }

    public getColor2():string{
        return this.color2;
    }

    public setColor2(color2:string):void{
        this.color2 = color2;
    }

}