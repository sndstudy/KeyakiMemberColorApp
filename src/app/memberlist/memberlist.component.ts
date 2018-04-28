import { Component, OnInit } from '@angular/core';
import { MemberlistService } from '../service/memberlist.service'
import { MemberEntity } from '../entity/memberEntity';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {

  showMemberList:Array<MemberEntity>;

  constructor(private memberListService:MemberlistService) { }

  ngOnInit() {

    this.getMember();

  }
  
  getMember():void{

    this.showMemberList = this.memberListService.getMemberList();

  }

}
