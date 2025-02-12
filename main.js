const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/mineSheet.png");
ASSET_MANAGER.queueDownload("./sprites/explosionSheet.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new ObstacleAnimTest(gameEngine, 25, 25));
	gameEngine.addEntity(new ExplosionAnimTest(gameEngine, 225, 225));
	gameEngine.init(ctx);

	gameEngine.start();
});
