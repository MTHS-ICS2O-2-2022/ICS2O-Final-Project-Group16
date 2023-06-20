/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: April 2023
//This is the Menu Scene

/**
 * This class is the Menu scene.
 */
class GameScene extends Phaser.Scene {
  //let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
  //let boxes;

  //var boxes;
  /**
   * This method is the constructor.
   */

  // randomly generates boxes
  createBox() {
    this.boxes = this.physics.add.sprite(800, this.getRandomArbitrary(), "box")
    // make the box clickable
    this.boxes.setInteractive({ useHandCursor: true })
    // when the box is clicked, call the moveBox function
    this.boxes.on("pointerdown", () => this.moveBox())
  }

  moveBox () {
    let xLocation = Phaser.Math.Between(300,1920)
    let yLocation = Phaser.Math.Between(300, 980)
    this.boxes.x = xLocation
    this.boxes.y = yLocation
    this.score += 1
  }

  constructor() {
    super({ key: "gameScene" })
    this.menuSceneBackgroundImage = null
    this.startButton = null
    this.scoreText = null
    this.score = 0
    this.scoreTextStyle = {
      font: "65px Arial",
      fill: "#000000",
      align: "center",
    }
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called when the Scene is started by the SceneManager.
   *before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  init() {
    this.cameras.main.setBackgroundColor("#000000")
  }

  //var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update })

  //var boxes

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets
   */
  preload() {
    console.log("Game Scene")
    this.load.image("box", "./assets/clickBox.png")
    this.load.image("restartButton", "./assets/restartButton.png")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    // this.physics.startSystem(Phaser.Physics.ARCADE)
    this.createBox()
    this.scoreText = this.add.text(10, 10, "Score: ", + this.score.toString(), this.scoreTextStyle)

    this.restartButton = this.add.sprite(1920 / 2, 1900 / 2, 'restartButton')
    this.restartButton.setInteractive({ useHandCursor: true })
    this.restartButton.on('pointerdown', () => this.scene.start('gameScene'))

    //this.boxes = this.physics.add.group()

    this.boxes.enableBody = true
  }

  update() {
    this.scoreText.setText("Score: " + this.score.toString())
  }

  getRandomArbitrary() {
    return Math.random() * (600 - 325) + 325
  }

  moveIndividual(moved) {
    moved.body.velocity.x = -1000
  }
}

export default GameScene
