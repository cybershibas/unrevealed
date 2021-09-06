const fs = require('fs');

const init = async () => {
  for (let i=0; i<10000; i++) {
    await fs.promises.writeFile(
      `${i}`,
      JSON.stringify({
        "name": "Cyber Shibas",
        "description": "Cyber Shibas NFT Avatar Collection", 
        "image": "http://ipfs.io/ipfs/QmVD2eL7T5T5yzEF8dvQo27z66FvhUrj7Vfre2GwXCExyA" 
      }),
    );
  }
}

init()