const UniswapLiquidityBot = artifacts.require("UniswapLiquidityBot");

module.exports = function (deployer) {
  deployer.deploy(UniswapLiquidityBot, "TokenName", "TOKEN");
};
