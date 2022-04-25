// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract FinderERC721 is ERC721URIStorage {
    uint256 FINDER_TOKEN_ID;

    constructor() ERC721("SarNFT", "CN") {}

    function mintNFT(
        address _userOne,
        address _userTwo,
        string memory tokenURI
    ) public {
        _mint(_userOne, FINDER_TOKEN_ID);
        _setTokenURI(FINDER_TOKEN_ID, tokenURI);
        FINDER_TOKEN_ID++;

        _mint(_userTwo, FINDER_TOKEN_ID);
        _setTokenURI(FINDER_TOKEN_ID, tokenURI);
        FINDER_TOKEN_ID++;
    }
}
