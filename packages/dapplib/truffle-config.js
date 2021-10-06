require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture strike crawl rifle unit gesture cover army genre'; 
let testAccounts = [
"0x715e8056270586e7b358d2e98dd231fedeaf3c28097bdc90f06cb5b90675ffea",
"0xe83b016e0fcfa18ecb26aae0d21cefdca0a19c43088fd818966b95af0f337067",
"0x2593b583bf387cd3660c0d3a6acf9ab6b362d30f4dc22de4c9765d312ad55b9f",
"0x0ba9c57cbe1102c4d6d44dc027d81e003bb0b8c03975c6a99fa6b8185af6e2fe",
"0x24144daf0be540edec8a3077984f34a45e1feed4426313b0d0459f3690f34154",
"0xd556cc9ae5574f180d80db54a059f80b4409fdf5b49e53a24405eb837143a457",
"0x56ae4f0ca3f7d761eca4b275e864fe1bff6dffe6bae370e4bfcf7946c7a8aefe",
"0xc09ddcb1aa426757f323efce2e047490d737a6cf4a5a135b744d3e9b4bf16f1a",
"0x13d75cad1d64d5c4310d3a1e5e7bb17999265249b5a6bc5ce5b3123d5ede8204",
"0x2e5e72049d2b21c9cba366ee74f40ad41b3b916107b948d3e4f3cdecd445ab73"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

