walletAddressElement.value = "Wallet not connected";
let resetFields = (message) => {
    walletBalance.value = message;
    minTokensForDividends.value = message;
    dividendEligibleHolders.value = message;
    totalDividendsDistributed.value = message;
    totalWithdrawnDividends.value = message;
    lastClaimTime.value = message;
    walletHeldWeek.value = message;
    totalTax.value = message;
    stcRank.value = message;
}
resetFields("Wallet not connected");

const configData = {
    "erc20ContractAddress": "0x0bf969ab4082ead3bdac5b93badfe2f9cf5e155d",
    "erc20ContractABI": [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_tokenSymbol",
                    "type": "string"
                },
                {
                    "internalType": "uint8",
                    "name": "_decimals",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalSupply",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_swapTokensAtAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minimumTokenBalanceForDividends",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isExcluded",
                    "type": "bool"
                }
            ],
            "name": "ExcludeFromFees",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "numOfWeeks",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fromTimestamp",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "toTimestamp",
                    "type": "uint256"
                }
            ],
            "name": "FeeChargedAfterHoldingFor",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "newValue",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "oldValue",
                    "type": "uint256"
                }
            ],
            "name": "GasForProcessingUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "iterations",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "claims",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lastProcessedIndex",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "automatic",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "gas",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "processor",
                    "type": "address"
                }
            ],
            "name": "ProcessedDividendTracker",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokensSwapped",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "SendDividends",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "value",
                    "type": "bool"
                }
            ],
            "name": "SetAutomatedMarketMakerPair",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokensSwapped",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "ethReceived",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokensIntoLiqudity",
                    "type": "uint256"
                }
            ],
            "name": "SwapAndLiquify",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newAddress",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "oldAddress",
                    "type": "address"
                }
            ],
            "name": "UpdateDividendTracker",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newAddress",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "oldAddress",
                    "type": "address"
                }
            ],
            "name": "UpdateUniswapV2Router",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "automatedMarketMakerPairs",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "claim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "dividendTokenBalanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dividendTracker",
            "outputs": [
                {
                    "internalType": "contract DividendTracker",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "effectiveObtainTime",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "excluded",
                    "type": "bool"
                }
            ],
            "name": "excludeFromFees",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "gasForProcessing",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "getAccountDividendsInfo",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getAccountDividendsInfoAtIndex",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getClaimWait",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLastProcessedIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMinimumTokenBalanceForDividends",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "getNumOfWeeksTokenHeldFor",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNumberOfDividendTokenHolders",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTotalDividendsDistributed",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "isExcludedFromFees",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isSwappingEnabled",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isTradingEnabled",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "gas",
                    "type": "uint256"
                }
            ],
            "name": "processDividendTracker",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "coinAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiveWallet",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "recoverLostCoins",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "value",
                    "type": "bool"
                }
            ],
            "name": "setAutomatedMarketMakerPair",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "shouldEnable",
                    "type": "bool"
                }
            ],
            "name": "setIsSwappingEnabled",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_swapTokensAtAmount",
                    "type": "uint256"
                }
            ],
            "name": "setSwapTokensAtAmount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "setTradingEnabled",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "swapTokensAtAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "uniswapV2Pair",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "uniswapV2Router",
            "outputs": [
                {
                    "internalType": "contract IUniswapV2Router02",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "claimWait",
                    "type": "uint256"
                }
            ],
            "name": "updateClaimWait",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newAddress",
                    "type": "address"
                }
            ],
            "name": "updateDividendTracker",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "newValue",
                    "type": "uint256"
                }
            ],
            "name": "updateGasForProcessing",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newAddress",
                    "type": "address"
                }
            ],
            "name": "updateUniswapV2Router",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "weeklyFee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "burnFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "holderFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityFee",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "withdrawableDividendOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ]
};

const web3 = new Web3(window["ethereum"] || "binance");
const smartContract = new web3.eth.Contract(configData["erc20ContractABI"], configData["erc20ContractAddress"]);
let userAddress = "";

let setUserAccount = (accList, shouldFetchNewData = true) => {
    let newAddress = accList[0];
    if (userAddress !== newAddress) {
        userAddress = newAddress;
        //console.log(`Switched Address to ${userAddress}`);

        if (userAddress) {
            connectWalletButton.text = "Wallet Connected";
            walletAddressElement.value = userAddress;
            if (shouldFetchNewData) {
                bulkDataFetch().then().catch((err) => {
                    //console.log(err);
                });
            }
        } else {
            walletAddressElement.value = "Wallet not connected";
            connectWalletButton.text = "Connect Wallet";
            walletBalance.value = "Wallet not connected";
            minTokensForDividends.value = "Wallet not connected";
            dividendEligibleHolders.value = "Wallet not connected";
            totalDividendsDistributed.value = "Wallet not connected";
            totalWithdrawnDividends.value = "Wallet not connected";
            lastClaimTime.value = "Wallet not connected";
            walletHeldWeek.value = "Wallet not connected";
            totalWithdrawnDividends.value = "Wallet not connected";
            totalTax.value = "Wallet not connected";
            stcRank.value = "Wallet not connected";
        }
    }
    if (userAddress) {
        connectWalletButton.text = "Wallet Connected";
        walletAddressElement.value = userAddress;
    }
};
const zeroAddress = "0x0000000000000000000000000000000000000000";

if (window["ethereum"]) {
    window["ethereum"].on('accountsChanged', setUserAccount);
    web3.eth.getAccounts()
        .then((accounts) => {
            if (accounts && accounts.length > 0) {
                setUserAccount(accounts);
            }
        })
        .catch(() => {
        });
} else {
    connectWalletButton.text = "MetaMask not installed";
}

const connectWallet = () => {
    if (window["ethereum"]) {
        //console.log("Attempting to connect to Metamask");
        window["ethereum"].request({method: 'eth_requestAccounts'})
            .then(setUserAccount)
            .catch((err) => {
                //console.log("Error when requesting user accounts");
                //console.log(err);
            });
    } else {
        connectWalletButton.text = "MetaMask not installed";
    }
};

const callSmartContractFunction = (functionName, params) => {
    return smartContract.methods[functionName](...params).call;
};

const makeBatchRequest = async (calls) => {
    let batch = new web3.BatchRequest();

    let promises = calls.map((call) => {
        return new Promise((res, rej) => {
            let req = call.request({}, (err, data) => {
                if (err) rej(err);
                else res(data)
            });

            batch.add(req);
        })
    })

    batch.execute();
    return await Promise.allSettled(promises);
};

const addCommasToNumberString = (numberString) => {
    return numberString.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};
const formatDecimalNumberString = (numberString) => {
    if (numberString.length <= 9) {
        return "0";
    }
    return addCommasToNumberString(numberString.substring(0, numberString.length - 9));
};
const formatTimestampToDate = (timestamp) => {
    try {
        if (!timestamp || timestamp === 0 || timestamp === "0") {
            return "No records found";
        }
        let date = new Date(timestamp);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ` +
            `${date.getHours() % 12}:${date.getMinutes()}:${date.getSeconds()} ` +
            `${(date.getHours() >= 12) ? "P.M." : "A.M."}`;
    } catch {
        return "No records found";
    }
};

/**
 * Function to fetch all the data from the blockchain for the specified contract.
 */
const bulkDataFetch = async () => {
    // Preset Fields
    resetFields("Loading...");
    let shouldReturnEarly = false;
    let currentAddressForSearch = walletAddressElement.value ? walletAddressElement.value : userAddress;
    if (currentAddressForSearch && web3.utils.isAddress(currentAddressForSearch)) {
        currentAddressForSearch = web3.utils.toChecksumAddress(currentAddressForSearch);
    } else {
        //console.log(`Invalid Custom Address: ${walletAddressElement.value}`);
        resetFields("Invalid Wallet Address");
        currentAddressForSearch = zeroAddress;
		
		stcRank.value = "Rank not available";		
		
		
		
        shouldReturnEarly = true;
    }
    if (!shouldReturnEarly) {
        walletAddressElement.value = currentAddressForSearch;
    }

    let response = await makeBatchRequest([
        callSmartContractFunction("balanceOf", [currentAddressForSearch]),
        callSmartContractFunction("effectiveObtainTime", [currentAddressForSearch]),
        callSmartContractFunction("getNumOfWeeksTokenHeldFor", [currentAddressForSearch]),
        callSmartContractFunction("getMinimumTokenBalanceForDividends", []),
        callSmartContractFunction("getNumberOfDividendTokenHolders", []),
        callSmartContractFunction("getTotalDividendsDistributed", []),
        callSmartContractFunction("getAccountDividendsInfo", [currentAddressForSearch]),
        callSmartContractFunction("dividendTokenBalanceOf", [currentAddressForSearch])
    ]);
    let returnData = {
        "balanceOf": (response[0].status === "fulfilled") ? response[0].value : response[0].reason,
        "effectiveObtainTime": (response[1].status === "fulfilled") ? response[1].value : response[1].reason,
        "getNumOfWeeksTokenHeldFor": (response[2].status === "fulfilled") ? response[2].value : response[2].reason,
        "getMinimumTokenBalanceForDividends": (response[3].status === "fulfilled") ? response[3].value : response[3].reason,
        "getNumberOfDividendTokenHolders": (response[4].status === "fulfilled") ? response[4].value : response[4].reason,
        "getTotalDividendsDistributed": (response[5].status === "fulfilled") ? response[5].value : response[5].reason,
        "getAccountDividendsInfo": (response[6].status === "fulfilled") ? {
            "address": response[6].value[0],
            "index": response[6].value[1],
            "iterationsUntilProcessed": response[6].value[2],
            "withdrawableDividends": response[6].value[3],
            "totalDividends": response[6].value[4],
            "lastClaimTime": response[6].value[5],
            "nextClaimTime": response[6].value[6],
            "secondsUntilAutoClaimAvailable": response[6].value[7]
        } : response[6].reason,
        "dividendTokenBalanceOf": (response[7].status === "fulfilled") ? response[7].value : response[7].reason,
    };

    // Contract Specific Data Below
    minTokensForDividends.value = formatDecimalNumberString(returnData.getMinimumTokenBalanceForDividends.toString());
    dividendEligibleHolders.value = addCommasToNumberString(returnData.getNumberOfDividendTokenHolders.toString());
    totalDividendsDistributed.value = formatDecimalNumberString(returnData.getTotalDividendsDistributed.toString());

    if (shouldReturnEarly) {
        return null;
    }

    // User Specific Data below
    // Wallet Balance, walletHeldWeek and totalTax

    let userBalance = formatDecimalNumberString(returnData.balanceOf.toString());


    if (!userBalance || userBalance === "0" || userBalance === "Wallet not connected") {
        walletBalance.value = "0 Swap TC Tokens";
        walletHeldWeek.value = "No records";
        totalTax.value = "Not applicable";
        stcRank.value = "Not applicable";


    } else {
        walletBalance.value = userBalance;


        


        // TODO: Display this ->   formatTimestampToDate(parseInt(returnData.effectiveObtainTime) * 1000);
        let weekNumber = parseInt(returnData.getNumOfWeeksTokenHeldFor);
        weekNumber = (weekNumber >= 19) ? 19 : weekNumber;
        selectDropdown.value = weekNumber;
        walletHeldWeek.value = weekNumber;

        switch (weekNumber) {
            case 0: {
                bnbRate.value = "15%";
                lpRate.value = "3%";
                burnRate.value = "12%";
                totalRate.value = "30%";
                totalTax.value = "30%";
                break;
            }
            case 1: {
                bnbRate.value = "14%";
                lpRate.value = "3%";
                burnRate.value = "12%";
                totalRate.value = "29%";
                totalTax.value = "29%";
                break;
            }
            case 2: {
                bnbRate.value = "13%";
                lpRate.value = "3%";
                burnRate.value = "12%";
                totalRate.value = "28%";
                totalTax.value = "28%";
                break;
            }
            case 3: {
                bnbRate.value = "13%";
                lpRate.value = "3%";
                burnRate.value = "11%";
                totalRate.value = "27%";
                totalTax.value = "27%";
                break;
            }
            case 4: {
                bnbRate.value = "13%";
                lpRate.value = "3%";
                burnRate.value = "10%";
                totalRate.value = "26%";
                totalTax.value = "26%";
                break;
            }
            case 5: {
                bnbRate.value = "12%";
                lpRate.value = "3%";
                burnRate.value = "10%";
                totalRate.value = "25%";
                totalTax.value = "25%";
                break;
            }
            case 6: {
                bnbRate.value = "12%";
                lpRate.value = "2%";
                burnRate.value = "10%";
                totalRate.value = "24%";
                totalTax.value = "24%";
                break;
            }
            case 7: {
                bnbRate.value = "11%";
                lpRate.value = "2%";
                burnRate.value = "10%";
                totalRate.value = "23%";
                totalTax.value = "23%";
                break;
            }
            case 8: {
                bnbRate.value = "11%";
                lpRate.value = "2%";
                burnRate.value = "9%";
                totalRate.value = "22%";
                totalTax.value = "22%";
                break;
            }
            case 9: {
                bnbRate.value = "10%";
                lpRate.value = "2%";
                burnRate.value = "9%";
                totalRate.value = "21%";
                totalTax.value = "21%";
                break;
            }
            case 10: {
                bnbRate.value = "10%";
                lpRate.value = "2%";
                burnRate.value = "8%";
                totalRate.value = "20%";
                totalTax.value = "20%";
                break;
            }
            case 11: {
                bnbRate.value = "10%";
                lpRate.value = "2%";
                burnRate.value = "7%";
                totalRate.value = "19%";
                totalTax.value = "19%";
                break;
            }
            case 12: {
                bnbRate.value = "9%";
                lpRate.value = "2%";
                burnRate.value = "7%";
                totalRate.value = "18%";
                totalTax.value = "18%";
                break;
            }
            case 13: {
                bnbRate.value = "9%";
                lpRate.value = "1%";
                burnRate.value = "7%";
                totalRate.value = "17%";
                totalTax.value = "17%";
                break;
            }
            case 14: {
                bnbRate.value = "8%";
                lpRate.value = "1%";
                burnRate.value = "7%";
                totalRate.value = "16%";
                totalTax.value = "16%";
                break;
            }
            case 15: {
                bnbRate.value = "7%";
                lpRate.value = "1%";
                burnRate.value = "6%";
                totalRate.value = "14%";
                totalTax.value = "14%";
                break;
            }
            case 16: {
                bnbRate.value = "7%";
                lpRate.value = "1%";
                burnRate.value = "5%";
                totalRate.value = "13%";
                totalTax.value = "13%";
                break;
            }
            case 17: {
                bnbRate.value = "6%";
                lpRate.value = "1%";
                burnRate.value = "5%";
                totalRate.value = "12%";
                totalTax.value = "12%";
                break;
            }
            case 18: {
                bnbRate.value = "6%";
                lpRate.value = "1%";
                burnRate.value = "4%";
                totalRate.value = "11%";
                totalTax.value = "11%";
                break;
            }
            case 19: {
                bnbRate.value = "5%";
                lpRate.value = "1%";
                burnRate.value = "4%";
                totalRate.value = "10%";
                totalTax.value = "10%";
                break;
            }
            default: {
                bnbRate.value = "Starts at";
                lpRate.value = "Starts at";
                burnRate.value = "Starts at";
                totalRate.value = "Starts at";
                totalTax.value = "Not applicable";
            }
        }
    }


    // TODO: Show withdrawn dividend as well.
    totalWithdrawnDividends.value = formatDecimalNumberString(returnData.getAccountDividendsInfo.totalDividends.toString());
    lastClaimTime.value = formatTimestampToDate(parseInt(returnData.getAccountDividendsInfo.lastClaimTime) * 1000);

    var dateString = new Date().toString();
    let userBalanceNoCommas = userBalance.replace(/,/g, '');
        /////////////////////////////////


        switch (true) {
            case userBalanceNoCommas > 0 && userBalanceNoCommas <= 500000000:
                stcRank.value = "{rank}";
                rankEmblem.innerHTML = "{rank}";
                break;

            case userBalanceNoCommas > 500000000 && userBalanceNoCommas <= 750000000:
                stcRank.value = "{rank}";
                rankEmblem.innerHTML = "{rank}";
                break;

            case userBalanceNoCommas > 750000000 && userBalanceNoCommas <= 1250000000:
                stcRank.value = "{rank}";
                rankEmblem.innerHTML = "{rank}";
                break;

            case userBalanceNoCommas > 1250000000 && userBalanceNoCommas <= 1500000000:
                stcRank.value = "{rank}";
                rankEmblem.innerHTML = "{rank}";
                break;

            case userBalanceNoCommas > 1500000000 && userBalanceNoCommas <= 1750000000:
                stcRank.value = "{rank}";
                rankEmblem.innerHTML = "{rank}";
                break;

            case userBalanceNoCommas > 1750000000 && userBalanceNoCommas <= 2250000000:
                stcRank.value = "{rank}";
                rankEmblem.innerHTML = "{rank}";
                break;

            case userBalanceNoCommas > 2250000000:
                stcRank.value = "{rank}";
                rankEmblem.innerHTML = "{rank}";
                break;

            default:
                stcRank.value = "Rank not available";
                rankEmblem.innerHTML = "{rank}";

        }


        /////////////////////////////////

    return returnData;
};

const callableFunctionSet = {
    "balanceOf": async (walletAddress) => {
        return await callSmartContractFunction("balanceOf", [walletAddress])();
    },
    "effectiveObtainTime": async (walletAddress) => {
        return await callSmartContractFunction("effectiveObtainTime", [walletAddress])();
    },
    "getNumOfWeeksTokenHeldFor": async (walletAddress) => {
        return await callSmartContractFunction("getNumOfWeeksTokenHeldFor", [walletAddress])();
    },
    "getMinimumTokenBalanceForDividends": async () => {
        return await callSmartContractFunction("getMinimumTokenBalanceForDividends", [])();
    },
    "getNumberOfDividendTokenHolders": async () => {
        return await callSmartContractFunction("getNumberOfDividendTokenHolders", [])();
    },
    "getTotalDividendsDistributed": async () => {
        return await callSmartContractFunction("getTotalDividendsDistributed", [])();
    },
    "getAccountDividendsInfo": async (walletAddress) => {
        let result = await callSmartContractFunction("getAccountDividendsInfo", [walletAddress])();
        return {
            "address": result[0],
            "index": result[1],
            "iterationsUntilProcessed": result[2],
            "withdrawableDividends": result[3],
            "totalDividends": result[4],
            "lastClaimTime": result[5],
            "nextClaimTime": result[6],
            "secondsUntilAutoClaimAvailable": result[7]
        };
    },
    "dividendTokenBalanceOf": async (walletAddress) => {
        return await callSmartContractFunction("dividendTokenBalanceOf", [walletAddress])();
    },
};
