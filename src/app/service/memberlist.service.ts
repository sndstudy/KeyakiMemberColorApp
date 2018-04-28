import { Injectable } from '@angular/core';
import { MemberEntity } from '../entity/memberEntity'

@Injectable()
export class MemberlistService {

  constructor() { }

  getMemberList():Array<MemberEntity>{

    let member:MemberEntity = new MemberEntity();
    member.setName("米谷");
    // member.setColor1

    return [member];
  }

}
