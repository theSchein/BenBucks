pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract BenBucks is ERC20 {
  string public name = "BenBucks";
  string public symbol = "BB";
  uint8 public decimals = 0;
  uint public INITIAL_SUPPLY = 1000000000000000000;

  constructor() public {
  _mint(msg.sender, INITIAL_SUPPLY);
}
}
