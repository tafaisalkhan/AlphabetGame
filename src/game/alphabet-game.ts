
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Socket } from 'ng-socket-io';
export class AlphabetGame extends Phaser.State {
  
    constructor(public navParams: NavParams) {
        super();
    }
    init(){
       
    }
   

    create() {
       console.log('create section');
    }
  
 

    update() {
     
    
    }
 
    randomNo(startNo:number , endNo: number){
        //return  Math.floor(Math.random() * endNo) + startNo ;
        return Math.floor(Math.random()*(endNo-startNo+1)+startNo);
      }
  
}
