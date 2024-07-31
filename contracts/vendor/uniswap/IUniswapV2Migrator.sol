pragma solidity >=0.5.0; //Em nenhuma hipótese mudar a versão

interface IUniswapV2Migrator {
    function migrate(address token, uint amountTokenMin, uint amountETHMin, address to, uint deadline) external;
}
