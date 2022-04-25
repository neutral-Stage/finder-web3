const { ethers } = require("hardhat");

const main = async () => {
  const finderFactory = await ethers.getContractFactory("FinderERC721");
  const FinderContract = await finderFactory.deploy();

  console.log("FINDER CONTRACT ADDRESS:", FinderContract.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("Error in deploying Contract >> ", error);
    process.exit(1);
  });
