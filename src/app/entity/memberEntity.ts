export class MemberEntity{

    constructor() { }

    private name: string;

    private group: string;

    private color1: string;

    private color2: string;

    private color1Name: string;

    private color2Name: string;

    public getName():string{
        return this.name;
    }

    public setName(name:string):void{
        this.name = name;
    }

    public getGroup():string{
        return this.group;
    }

    public setGroup(group:string):void{
        this.group = group;
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

    public getColor1Name():string{
        return this.color1Name;
    }

    public setColor1Name(color1Name:string):void{
        this.color1Name = color1Name;
    }

    public getColor2Name():string{
        return this.color2Name;
    }

    public setColor2Name(color2Name:string):void{
        this.color2Name = color2Name;
    }

}