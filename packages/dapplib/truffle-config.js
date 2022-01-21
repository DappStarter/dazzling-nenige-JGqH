require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember smile hover enroll sun gesture'; 
let testAccounts = [
"0x99682c45e4fad8107eecac26948bcbb03bc85b8edd6fd864c2c8fa3ffa9d1f0f",
"0x7911b97a29adf516478b50f0de033423e7a37b092fe51b11339fde3ca27b1d8e",
"0xb8078ace9ba4452e00bb226054912a321a25d694bc2a9817f3da9d4490642343",
"0x3e3f94ba41faebaa05dc75e61ac8b97f7bc49f6916c34d42d71dd21ebbdb68c3",
"0xe1b35086da2a4cfc9f8c4c6aebd4b68df2680ba96f6bddc81c51c0825a045dc4",
"0x9c1978df815c185acb44dbb8a49b7feb095de3c415c33b685a84032466b19a61",
"0xff92588388bce61b5b0feed505392cf650cb8bf5689bc78832654f1f63a19b61",
"0x382bf140250f2b3b3bef10d4a1f374cc02bd9d725ffdaefcd1c2e05479adbcc7",
"0xbf832d4af58908de43f5ccd627818ea36415b1cfe5456037015febdbca9c4fb8",
"0x14181732219faf29f609acbb3f893a743ba63e0b01f192d274a2ca25aa1cfc01"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


