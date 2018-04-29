import { Injectable } from '@angular/core';
import { MemberEntity } from '../entity/memberEntity'

@Injectable()
export class MemberlistService {

  constructor() { }

  getMemberList():Array<MemberEntity>{

    let memberList:Array<MemberEntity> = [];

    for(let member of memberConst.MEMBER_LIST){
      
      let memberEntity:MemberEntity = new MemberEntity();

      Object.keys(member).forEach(key=>{
        if(key === "name"){
          memberEntity.setName(member[key])
        }

        if(key === "color1"){
          memberEntity.setColor1(member[key])
        }

        if(key === "color2"){
          memberEntity.setColor2(member[key])
        }

        if(key === "color1_name"){
          memberEntity.setColor1Name(member[key])
        }

        if(key === "color2_name"){
          memberEntity.setColor2Name(member[key])
        }

      });

      memberList.push(memberEntity);

    }

    return memberList;
  }

}

module memberConst{
  export const MEMBER_LIST:Array<Object> = [
    {"name":"石森 虹花","group":"kanji","color1":"pink","color2":"white","color1_name":"ピンク","color2_name":"白"},
    {"name":"今泉 佑唯","group":"kanji","color1":"red","color2":"green","color1_name":"赤","color2_name":"緑"},
    {"name":"上村 莉菜","group":"kanji","color1":"pink","color2":"pink","color1_name":"ピンク","color2_name":"ピンク"},
    {"name":"尾関 梨香","group":"kanji","color1":"yellow","color2":"white","color1_name":"黄","color2_name":"白"},
    {"name":"織田 奈那","group":"kanji","color1":"orange","color2":"green","color1_name":"オレンジ","color2_name":"緑"},
    {"name":"小池 美波","group":"kanji","color1":"orange","color2":"white","color1_name":"オレンジ","color2_name":"白"},
    {"name":"小林 由依","group":"kanji","color1":"blue","color2":"yellow","color1_name":"青","color2_name":"黄"},
    {"name":"齋藤 冬優花","group":"kanji","color1":"yellow","color2":"yellow","color1_name":"黄","color2_name":"黄"},
    {"name":"佐藤 詩織","group":"kanji","color1":"blue","color2":"purple","color1_name":"青","color2_name":"紫"},
    {"name":"志田 愛佳","group":"kanji","color1":"white","color2":"white","color1_name":"白","color2_name":"白"},
    {"name":"菅井 友香","group":"kanji","color1":"yellow","color2":"purple","color1_name":"黄","color2_name":"紫"},
    {"name":"鈴本 美愉","group":"kanji","color1":"orange","color2":"orange","color1_name":"オレンジ","color2_name":"オレンジ"},
    {"name":"長沢 菜々香","group":"kanji","color1":"red","color2":"white","color1_name":"赤","color2_name":"白"},
    {"name":"長濱 ねる","group":"kanji","color1":"purple","color2":"purple","color1_name":"紫","color2_name":"紫"},
    {"name":"土生 瑞穂","group":"kanji","color1":"lightskyblue","color2":"pink","color1_name":"水色","color2_name":"ピンク"},
    {"name":"原田 葵","group":"kanji","color1":"orange","color2":"yellow","color1_name":"オレンジ","color2_name":"黄"},
    {"name":"平手 友梨奈","group":"kanji","color1":"white","color2":"white","color1_name":"白","color2_name":"白"},
    {"name":"守屋 茜","group":"kanji","color1":"red","color2":"red","color1_name":"赤","color2_name":"赤"},
    {"name":"米谷 奈々未","group":"kanji","color1":"lightskyblue","color2":"green","color1_name":"水色","color2_name":"緑"},
    {"name":"渡辺 梨加","group":"kanji","color1":"lightskyblue","color2":"lightskyblue","color1_name":"水色","color2_name":"水色"},
    {"name":"渡邉 理佐","group":"kanji","color1":"blue","color2":"white","color1_name":"青","color2_name":"白"}
  ];
}