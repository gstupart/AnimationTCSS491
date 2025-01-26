class ExplosionAnimTest {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y })
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/explosionSheet.png");
        console.log("Successfully Loaded Asset");
        this.testAnim = new Animator(this.spritesheet, 150, 75, 250, 220, 5, .08, 50, false, true);
    };

    draw(ctx) {
        // console.log(this.game.clockTick);
        this.testAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, .5);
    };

    update() {
        // Placeholder; change to condition that means to start the game
    };
}