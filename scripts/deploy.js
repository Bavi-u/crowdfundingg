const hre = require("hardhat");
//Crowdfunding deployed to 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
//Crowdfunding deployed to 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0

async function main() {
  const CrowdFunding = await hre.ethers.deployContract("CrowdFunding");
  //const crowdFunding = await CrowdFunding.deploy();

  await CrowdFunding.waitForDeployment();

  console.log(`CrowdFunding deployed to ${CrowdFunding.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});