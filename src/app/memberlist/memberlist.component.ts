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
  selectedButton:string = "all";

  constructor(private memberListService:MemberlistService) { }

  ngOnInit() {

    this.getMember();

  }
  
  getMember():void{

    this.showMemberList = this.memberListService.getMemberList("all");

  }

  changeButton():void{

    this.showMemberList = this.memberListService.getMemberList(this.selectedButton);

  }

}
