
import {Home} from './home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
export class Preloader extends Phaser.State {
    loaderText: Phaser.Text;
    logo;
    preLoadBar;
    
    constructor(public navParams: NavParams) {
        super();
    }
    preload() {
        this.logo = this.game.add.sprite(0, 0, 'logo');
        this.logo.anchor.setTo(0.5);
        this.load.image('backyard', 'assets/images/sky1.png');
        this.load.image('star', 'assets/images/star.png');
        this.load.image('wrong', 'assets/images/wrong.png');
        this.load.image('correct', 'assets/images/correct.png');
        this.load.audio('tap', ['assets/mp3/tap.mp3', 'assets/mp3/tap.ogg']);
        this.load.audio('win', ['assets/mp3/win.mp3', 'assets/mp3/win.ogg']);
        this.load.audio('loss', ['assets/mp3/loss.mp3', 'assets/mp3/loss.ogg']);
        this.load.spritesheet('dude', 'assets/images/dude.png',31,45,9,1,1);
        this.game.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
        this.game.load.bitmapFont('desyrel-pink', 'assets/fonts/bitmapFonts/desyrel-pink.png', 'assets/fonts/bitmapFonts/desyrel-pink.xml');
        this.game.load.bitmapFont('stack', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.xml');
  
    }

    create() {
        this.game.state.start('Home');
    }

    startMainMenu() {
       
    }

}
       