/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: April 2023
//This is the Menu Scene

/**
 * This class is the Menu scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: 'menuScene' })
    this.menuSceneBackgroundImage = null
    this.startButton = null
  }
  
  /**
   * Can be defined on your own Scenes.
   * This method is called when the Scene is started by the SceneManager.
   *before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
    */
  init() {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  /**
   * Can be defined on your own Scenes.
   * Use it to load assets
    */
  preload() {
    console.log('Menu Scene')
    this.load.image('1click', './assets/1click.png')
    this.load.image('2click', './assets/2click.png')
    this.load.image('3click', './assets/3click.png')
    this.load.image('4click', './assets/4click.png')
    this.load.image('5click', './assets/5click.png')
    this.load.image('10click', './assets/10click.png')
    this.load.image('15click', './assets/15click.png')
    this.load.image('20click', './assets/20click.png')
    this.load.image('25click', './assets/25click.png')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.startButton = this.add.sprite(1920 / 2, 1900 / 2, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
  }
  
  /**
   * Should be overridden on your own Scenes.
   * This method is called once per game step  while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    //pass
  }

  clickButton() {
    this.scene.start('gameScene')
  }
}

export default MenuScene