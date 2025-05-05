const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// Cape                     senza              Back, Exce snake      1

// Exce snake               solo con           Exce default hand     2
// Exce snake               senza              Back                  3

// Back                     solo con           Exce default hand     4
// Exce hands holding       senza              Back, hands           5

const layerConfigurations = [
  {
    growEditionSizeTo: 2,
    layersOrder: [
      { name: "Background" },  // 5, 3, 1
      { name: "Back"},
      { name: "Body" },
      { name: "Mouth" },
      { name: "Hands" },
      { name: "Eyes" },
      { name: "Head" },
    ],
  },
  {
    growEditionSizeTo: 4,      // 2, 4, 3
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Mouth" },
      { name: "Exce default hand" },
      { name: "Eyes" },
      { name: "Exce snake" },
    ],
  },
  {
    growEditionSizeTo: 6,    // 1, 5
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Exce hands holding" },   
      { name: "Eyes" },
      { name: "Head" },
      { name: "Cape" },
    ],
  },
  {
    growEditionSizeTo: 8,  // 1, 3, 5
    layersOrder: [
      { name: "Background" },
      { name: "Back" },
      { name: "Body" },
      { name: "Mouth" },
      { name: "Exce default hand" },
      { name: "Eyes" },
      { name: "Head" },
    ],
  },  
  {
    growEditionSizeTo: 10,     // 1, 3, 5, 2, 4
    layersOrder: [
      { name: "Background" },
      { name: "Back" },
      { name: "Body" },
      { name: "Mouth" },
      { name: "Exce default hand" },
      { name: "Eyes" },
      { name: "Head" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1160,
  height: 1160,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
