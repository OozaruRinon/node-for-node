abi = [
	{
	    "constant": false,
	    "inputs": [],
	    "name": "getFreeAlien",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "ceoAddress",
	    "outputs": [
			{
			    "name": "",
			    "type": "address"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "getBalance",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "initialized",
	    "outputs": [
			{
			    "name": "",
			    "type": "bool"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
			{
			    "name": "",
			    "type": "address"
			}
		],
	    "name": "hatcheryAlien",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
			{
			    "name": "rt",
			    "type": "uint256"
			},
			{
			    "name": "rs",
			    "type": "uint256"
			},
			{
			    "name": "bs",
			    "type": "uint256"
			}
		],
	    "name": "calculateTrade",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
			{
			    "name": "eth",
			    "type": "uint256"
			},
			{
			    "name": "contractBalance",
			    "type": "uint256"
			}
		],
	    "name": "calculateEggBuy",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "marketEggs",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [],
	    "name": "sellEggs",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
			{
			    "name": "eggs",
			    "type": "uint256"
			}
		],
	    "name": "seedMarket",
	    "outputs": [],
	    "payable": true,
	    "stateMutability": "payable",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
			{
			    "name": "amount",
			    "type": "uint256"
			}
		],
	    "name": "devFee",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "pure",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
			{
			    "name": "ref",
			    "type": "address"
			}
		],
	    "name": "hatchEggs",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "getMyEggs",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
			{
			    "name": "",
			    "type": "address"
			}
		],
	    "name": "lastHatch",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "getMyAlien",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [],
	    "name": "buyEggs",
	    "outputs": [],
	    "payable": true,
	    "stateMutability": "payable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [
			{
			    "name": "_newFreeAlien",
			    "type": "uint16"
			}
		],
	    "name": "setFreeAlien",
	    "outputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
			{
			    "name": "",
			    "type": "address"
			}
		],
	    "name": "claimedEggs",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
			{
			    "name": "eth",
			    "type": "uint256"
			}
		],
	    "name": "calculateEggBuySimple",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "EGGS_TO_HATCH_1ALIEN",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
			{
			    "name": "eggs",
			    "type": "uint256"
			}
		],
	    "name": "calculateEggSell",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "STARTING_ALIEN",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
			{
			    "name": "",
			    "type": "address"
			}
		],
	    "name": "referrals",
	    "outputs": [
			{
			    "name": "",
			    "type": "address"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [
			{
			    "name": "adr",
			    "type": "address"
			}
		],
	    "name": "getEggsSinceLastHatch",
	    "outputs": [
			{
			    "name": "",
			    "type": "uint256"
			}
		],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "constructor"
	},
	{
	    "anonymous": false,
	    "inputs": [
			{
			    "indexed": true,
			    "name": "customerAddress",
			    "type": "address"
			},
			{
			    "indexed": false,
			    "name": "Aliens",
			    "type": "uint256"
			},
			{
			    "indexed": true,
			    "name": "referredBy",
			    "type": "address"
			}
		],
	    "name": "onHatchEggs",
	    "type": "event"
	},
	{
	    "anonymous": false,
	    "inputs": [
			{
			    "indexed": true,
			    "name": "customerAddress",
			    "type": "address"
			},
			{
			    "indexed": false,
			    "name": "eggs",
			    "type": "uint256"
			},
			{
			    "indexed": false,
			    "name": "ethereumEarned",
			    "type": "uint256"
			}
		],
	    "name": "onSellEggs",
	    "type": "event"
	},
	{
	    "anonymous": false,
	    "inputs": [
			{
			    "indexed": true,
			    "name": "customerAddress",
			    "type": "address"
			},
			{
			    "indexed": false,
			    "name": "eggs",
			    "type": "uint256"
			},
			{
			    "indexed": false,
			    "name": "incomingEthereum",
			    "type": "uint256"
			}
		],
	    "name": "onBuyEggs",
	    "type": "event"
	}
]

	contractAddress = "0xE8be2E87d586B72461c471bED2Ee52bdf6A7b0f8"  // Changed to a new Power Inc contract, where DevFee goes to Divies

function buyEggs(eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.buyEggs.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            //console.log('buyEggs ',eth);
            alertify.success("The transaction is being processed...")
            var gfsdoc = document.getElementById('getfreealien')
            gfsdoc.style.display = "none"
            callback()
        }
        else{
            //console.log('error :(')
            alertify.error("The transaction was cancelled by the user");
        }
    });
}

function getFreeAlien(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getFreeAlien.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('getFreeAlien ', result);
            alertify.success("The transaction is being processed...")
            callback()
        }
        else{
            //console.log('error :(')
            alertify.error("The transaction was cancelled by the user");
        }
    });
}


function hatchEggs(ref,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.hatchEggs.getData(ref);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('hatchEggs ',);
            alertify.success("The transaction is being processed...")
            callback()
        }
        else{
            //console.log('error :(')
            alertify.error("The transaction was cancelled by the user");
        }
    });
}


function seedMarket(eggs,eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.seedMarket.getData(eggs);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            //console.log('seedMarket ',);
            alertify.success("The transaction is being processed...")
            callback()
        }
        else{
            //console.log('error :(')
            alertify.error("The transaction was cancelled by the user");
        }
    });
}


function sellEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.sellEggs.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('sellEggs ',);
            alertify.success("The transaction is being processed...")
            callback()
        }
        else{
            //console.log('error :(')
            alertify.error("The transaction was cancelled by the user");
        }
    });
}


function calculateEggBuy(eth,contractBalance,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggBuy.getData(eth,contractBalance);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggBuy ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggBuySimple(eth,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggBuySimple.getData(eth);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggBuySimple ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateEggSell(eggs,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateEggSell.getData(eggs);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateEggSell ',result);
            if(result=='0x'){
                result=0
            }
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function calculateTrade(rt,rs,bs,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.calculateTrade.getData(rt,rs,bs);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('calculateTrade ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function ceoAddress(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.ceoAddress.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('ceoAddress ',result);
            callback(result)
        }
        else{
            console.log('error :(')
        }
    });
}


function claimedEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.claimedEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('claimedEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function devFee(amount,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.devFee.getData(amount);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('devFee ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function EGGS_TO_HATCH_1ALIEN(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.EGGS_TO_HATCH_1ALIEN.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('EGGS_TO_HATCH_1ALIEN ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getBalance(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getBalance.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getBalance ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getEggsSinceLastHatch(adr,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getEggsSinceLastHatch.getData(adr);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getEggsSinceLastHatch ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getMyEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getMyEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getMyEggs ', web3.toDecimal(result));
            var gfsdoc = document.getElementById('getfreealien')
            /*
            if (web3.toDecimal(result) > 0) {
                gfsdoc.style.display = "none"
            }
            else {
                gfsdoc.style.display = "inline-block"
            }
            */
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getMyAlien(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getMyAlien.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getMyAlien ',web3.toDecimal(result));
            if(result=='0x'){
                result=0
            }
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getMyStatus(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var resp = myContract.STARTING_ALIEN.call(function (err, res) {
        if(!err){
            console.log('STARTING_ALIEN ', res)
            callback(res)
        }
    });
}


function hatcheryAlien(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.hatcheryAlien.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('hatcheryAlien ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function lastHatch(address,callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.lastHatch.getData(address);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('lastHatch ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function marketEggs(callback){
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.marketEggs.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('marketEggs ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}



