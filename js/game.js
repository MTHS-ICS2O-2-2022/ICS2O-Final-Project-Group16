/* Global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: June 2023
// This file contains the JS functions for index.html

// scene important statements
import SplashScene from "./splashScene.js";

// create the new Scenes
const splashScene = new SplashScene();
/**
 *Start Phaser Game
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  // set background colour
  backgroundColor: 0x000000,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config)
console.log(game)
// console.log("game ")

// load the scenes
// NOTE: remember any "key" is global and CAN NOT be reused
game.scene.add('splashScene', splashScene)

// start the game
game.scene.start('SplashScene')
