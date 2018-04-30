import { Injectable } from '@angular/core';
import { MemberEntity } from '../entity/memberEntity'

@Injectable()
export class MemberlistService {

  constructor() { }

  getMemberList(targetGroup:string):Array<MemberEntity>{

    let memberList:Array<MemberEntity> = [];

    for(let member of memberConst.MEMBER_LIST){
      
      let memberEntity:MemberEntity = new MemberEntity();

      Object.keys(member).forEach(key=>{

        if(key === "name"){
          memberEntity.setName(member[key])
        }

        if(key === "group"){
          memberEntity.setGroup(member[key])
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

    let showMemberList:Array<MemberEntity> = [];

    memberList.forEach(member=>{

      if(targetGroup === member.getGroup() || targetGroup === "all"){

          showMemberList.push(member);
      }

    });

    return showMemberList;
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
    {"name":"平手 友梨奈","group":"kanji","color1":"white","color2":"white","color1_name":"曲ごとに変わる","color2_name":"曲ごとに変わる"},
    {"name":"守屋 茜","group":"kanji","color1":"red","color2":"red","color1_name":"赤","color2_name":"赤"},
    {"name":"米谷 奈々未","group":"kanji","color1":"lightskyblue","color2":"green","color1_name":"水色","color2_name":"緑"},
    {"name":"渡辺 梨加","group":"kanji","color1":"lightskyblue","color2":"lightskyblue","color1_name":"水色","color2_name":"水色"},
    {"name":"渡邉 理佐","group":"kanji","color1":"blue","color2":"white","color1_name":"青","color2_name":"白"},
    {"name":"井口 眞緒","group":"hiragana1","color1":"red","color2":"orange","color1_name":"赤","color2_name":"オレンジ"},
    {"name":"潮 紗理菜","group":"hiragana1","color1":"purple","color2":"white","color1_name":"紫","color2_name":"白"},
    {"name":"柿崎 芽実","group":"hiragana1","color1":"palegreen","color2":"palegreen","color1_name":"パールグリーン","color2_name":"パールグリーン"},
    {"name":"影山 優佳","group":"hiragana1","color1":"red","color2":"red","color1_name":"赤","color2_name":"赤"},
    {"name":"加藤 史帆","group":"hiragana1","color1":"blue","color2":"blue","color1_name":"青","color2_name":"青"},
    {"name":"齊藤 京子","group":"hiragana1","color1":"white","color2":"white","color1_name":"白","color2_name":"白"},
    {"name":"佐々木 久美","group":"hiragana1","color1":"#c3cdfa","color2":"#c3cdfa","color1_name":"パールブルー","color2_name":"パールブルー"},
    {"name":"佐々木 美玲","group":"hiragana1","color1":"red","color2":"lightskyblue","color1_name":"赤","color2_name":"水色"},
    {"name":"高瀬 愛奈","group":"hiragana1","color1":"#ff69b4","color2":"white","color1_name":"ホットピンク","color2_name":"白"},
    {"name":"高本 彩花","group":"hiragana1","color1":"green","color2":"white","color1_name":"緑","color2_name":"白"},
    {"name":"東村 芽依","group":"hiragana1","color1":"lightpink","color2":"lightpink","color1_name":"パールピンク","color2_name":"パールピンク"},
    {"name":"金村 美玖","group":"hiragana2","color1":"yellow","color2":"lightskyblue","color1_name":"黄","color2_name":"ライトブルー"},
    {"name":"河田 陽菜","group":"hiragana2","color1":"#ff69b4","color2":"yellow","color1_name":"ホットピンク","color2_name":"黄"},
    {"name":"小坂 菜緒","group":"hiragana2","color1":"violet","color2":"white","color1_name":"バイオレット","color2_name":"白"},
    {"name":"富田 鈴花","group":"hiragana2","color1":"lightpink","color2":"#c3cdfa","color1_name":"パールピンク","color2_name":"パールブルー"},
    {"name":"丹生 明里","group":"hiragana2","color1":"purple","color2":"violet","color1_name":"紫","color2_name":"バイオレット"},
    {"name":"濱岸 ひより","group":"hiragana2","color1":"orange","color2":"white","color1_name":"オレンジ","color2_name":"白"},
    {"name":"松田 好花","group":"hiragana2","color1":"#ff69b4","color2":"palegreen","color1_name":"ホットピンク","color2_name":"パールグリーン"},
    {"name":"宮田 愛萌","group":"hiragana2","color1":"deeppink","color2":"lightpink","color1_name":"ショッキングピンク","color2_name":"パールピンク"},
    {"name":"渡邉 美穂","group":"hiragana2","color1":"white","color2":"#c3cdfa","color1_name":"白","color2_name":"パールブルー"}
  ];
}