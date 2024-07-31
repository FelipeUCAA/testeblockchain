const UniswapLiquidityBot = artifacts.require("UniswapLiquidityBot");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = async function (deployer) {
  await deployer.deploy(UniswapLiquidityBot, "Teste_LiquidBot", "TLB");
  console.log('First contract deployed. Waiting for 2 seconds...');
  await delay(2000); // Atraso de 2 segundos, *necessário*, sem ele da erro "Too Many Requests" (-32603)

  // Se houver mais contratos para implantar, adicione mais deploys e atrasos conforme necessário, por exemplo:
  /* await deployer.deploy(OutroContrato, "Parametro");
  // console.log('Outro contrato deployado. Waiting for 2 seconds...');
     await delay(2000);
    */
};
