// ==UserScript==
// @name         ioihw2020 题目信息
// @namespace    https://ioihw2020.duck-ac.cn
// @version      0.1.1
// @description  一道都不会做
// @author       xzz
// @match        https://ioihw20.duck-ac.cn/problem/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/xzz-233/ioihw20-problem/master/userscript.js
// @downloadURL  https://raw.githubusercontent.com/xzz-233/ioihw20-problem/master/userscript.js
// @supportURL   https://github.com/xzz-233/ioihw20-problem/issues
// @homepage     https://github.com/xzz-233/ioihw20-problem
// ==/UserScript==

(function() {
    'use strict';
    var problemId=parseInt(location.href.substr(location.href.lastIndexOf("problem/")+8,3),10);
    var li_problemType=document.createElement("li"),li_author=document.createElement("li");
    if(problemId==1)li_problemType.innerHTML='<span style="display:block;padding:10px 15px;font-weight:bold;">测试题</span>';
    else if(problemId%4==0)li_problemType.innerHTML='<span style="display:block;padding:10px 15px;font-weight:bold;">自选题</span>';
    else li_problemType.innerHTML='<span style="display:block;padding:10px 15px;font-weight:bold;">作业题</span>';
    $(".nav-tabs")[0].appendChild(li_problemType);
    var authorName;
    if(problemId==1)authorName="root";
    else authorName="ioi2021_"+(((problemId-101)>>2)<10?"0":"")+String((problemId-101)>>2);
    li_author.innerHTML='<span style="display:block;padding:10px 15px;">题目提供者：<a class="uoj-username" href="https://ioihw20.duck-ac.cn/user/profile/'+authorName+
        '" style="color:rgb(75,175,178)"><span style="font-weight: normal">'+authorName+'</span></a></span>';
    $(".nav-tabs")[0].appendChild(li_author);
    var problemList=new Array('UC','DG','RB','ZX','HC','IB','FJ','ZX','GK','UH','QH','ZX','EE','DJ','IH','ZX','HL','MI','EJ','ZX','MB','UI','ED','ZX','AA','BG','ML','ZX','CF','TE','QG','ZX','PH','UJ','BB','ZX','CI','SD','NG','ZX','DK','LD','IJ','ZX','NC','BJ','FK','ZX','CH','NJ','RH','ZX','QF','BE','KI','ZX','AC','PG','HM','ZX','PJ','ID','EG','ZX','SI','KC','GI','ZX','OG','CK','DB','ZX','QE','GH','NI','ZX','OL','KA','MG','ZX','SG','NL','KH','ZX','QJ','KG','AB','ZX','KD','IL','NF','ZX','CM','NE','HD','ZX','DH','EC','BM','ZX','LC','CD','JI','ZX','DL','ME','PE','ZX','LI','AI','RJ','ZX','SF','II','HG','ZX','RE','LL','OA','ZX','FB','QD','DA','ZX','TC','AE','CB','ZX','GF','AG','JC','ZX','PA','TH','EH','ZX','AJ','TK','EI','ZX','UL','AF','SK','ZX','BH','RD','OK','ZX','FC','JD','OE','ZX','TF','FF','DD','ZX','CJ','HK','MJ','ZX','FG','GL','AL','ZX','FI','IC','QC','ZX','MD','OJ','HI','ZX','KK','JH','OB','ZX','BK','GJ','KE','ZX','CA','IK','LE','ZX','RI','LK','PD','ZX','JE','LB','HB','ZX','BL','RG','AH','ZX','AK','GG','JG','ZX');
    var problemSource=new Array(101221,101239,101242,101471,102482,102511,101630,101190,100851,100553,100307,101620,101173,101480,100543,100299,101612,101142,100801,100531,100269);
    if(problemId>1&&problemId%4!=0){
        var li_problemSource=document.createElement("li");
        var contestId=problemSource[problemList[problemId-101].charCodeAt(0)-65];
        var problemCFId=problemList[problemId-101][1];
        li_problemSource.innerHTML='<a class="uoj-username" href="https://www.codeforces.com/gym/'+contestId+'"><span style="font-weight: normal">原题：Problem '+problemCFId+'</span></a>';
        $(".nav-tabs")[0].appendChild(li_problemSource);
    }
})();
