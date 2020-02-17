window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
			startDapp();
        } catch (error) {
                alert('Reload this page and enable access to use this dapp!');
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
		window.web3 = new Web3(web3.currentProvider);
		startDapp();
    }
    // Non-dapp browsers...
    else {
        alert('Non-Ethereum Classic browser detected. You should consider trying Saturn!');
    }
});

let mnAddress = '0x8C3384569C5174E8Fe196b007fBbf4557475c6F5';
let el = function(id){ return document.querySelector(id);};
let sacrific3CAddress;
let sacrific3CContract;
let p3cInstance;
let playerBookInstance;

let offerSize;

//strings
let stageStringEN = 'Race';
let p3cStatsStringEN = 'Commonwealth Stats';
let altarStringEN = 'Your Wallet';
let earningsStringEN = '';
let offerButtonStringEN = 'img/offeringEN.png';
let validateButtonStringEN = 'VALIDATE RACE';
let offerVaultButtonStringEN = 'USE EARNINGS FOR RACE';
let withdrawButtonStringEN = 'WITHDRAW EARNINGS';
let playerNumberStringEN = 'players enter a daring challenge'
let offerSize1StringEN = 'each paying ';
let offerSize2StringEN = 'to race!';
let winnings1StringEN = 'Race Arena locks up Flux Points in the contract every round, which grows the dividends. ';
let winnings2StringEN = 'One racer will receive dividends, ';
let winnings3StringEN = 'Everyone else receives ';
let winnings4StringEN = 'as their prize for winning!';
let currentStageStringEN = 'Stage ';
let currentPlayersStringEN = 'Players in Game:';
let dividendsStringEN = 'Dividends<br />';
let lockedUpStringEN = 'Locked Up<br />';
let recentlySacrificedStringEN = 'has lost recently';
let openStringEN = 'OPEN';
let waitingForMoreStringEN = 'Waiting for more players...';
let waitingForNewStringEN = 'Waiting for the next ';
let sacrificeChosenStringEN = 'ARENA HAS CHOSEN';
let actionRequiredStringEN = 'ACTION REQUIRED';
let racePlayersMaxStringEN = 'RACE FULL';
let raceEndedStringEN = 'Validate, then withdraw earnings or use them to join the next stage!';
let newRaceStringEN = 'RACE '
let interactStringEN = 'VALIDATE RACE on the Game tab so that the Arena can choose the winners!';

let stageString;
let p3cStatsString;
let alterString;
let earningsString;
let offerButtonString;
let validateButtonString;
let offerVaultButtonString;
let withdrawButtonString;
let playerNumberString;
let offerSize1String;
let offerSize2String;
let winnings1String;
let winnings2String;
let winnings3String;
let winnings4String;
let currentStageString;
let currentPlayersString;
let dividendsString;
let lockedUpString;
let recentlySacrificedString;
let openString;
let waitingForMoreString;
let waitingForNewString;
let sacrificeChosenString;
let actionRequiredString;
let racePlayersMaxString;
let raceEndedString;
let newRaceString;
let interactString;

let sacStrings =
				[
				"has lost",
				"was a worthy opponent",
				"was chosen by the Arena",
                "spun out",
                "blew their engine",
                "crashed spectacularly!",
                "has been run off the road",
                "put up a hard fight",
                "wasn't fast enough",
                "didn't make the cut",
                "flamed out"
                    
				];
				
let slaStrings =
				[
				"car caught fire",
				"was knocked out",
				"has been eliminated",
				"got Rekt",
				"was abducted by Aliens"
				];
				
function startDapp() {
	initialLanguage();
	setupJUST()
	small();    
	setInterval(main, 20000);
}

function small() {
	sacrific3CAddress = '0x5DF93a44D6B4E360fB17345cE47B83049d091A2a';
	sacrific3CContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"offerAsSacrificeFromVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"OFFER_SIZE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"offerAsSacrifice","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"winningsPerRound","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentPlayers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"tryFinalizeStage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numberOfStages","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_PLAYERS_PER_STAGE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myEarnings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"player","type":"address"}],"name":"SacrificeOffered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sarifice","type":"address"}],"name":"SacrificeChosen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"player","type":"address"},{"indexed":true,"name":"amount","type":"uint256"}],"name":"EarningsWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stage","type":"uint256"}],"name":"StageInvalidated","type":"event"}]);	
	main();
}

function showValidate(players, maxPlayers) {
    if(players == maxPlayers)
    el('#validate').disabled = false;
    el('#validate').hidden = false;
}

function hideValidate(players, maxPlayers) {
    if(players < maxPlayers)
    el('#validate').disabled = true;
    el('#validate').hidden = true;
}

function medium() {
	sacrific3CAddress = '0x8c841EDA4E377c06595ff7967292FC0430E81393';
	sacrific3CContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"offerAsSacrificeFromVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"OFFER_SIZE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"offerAsSacrifice","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"winningsPerRound","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentPlayers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"tryFinalizeStage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numberOfStages","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_PLAYERS_PER_STAGE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myEarnings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"player","type":"address"}],"name":"SacrificeOffered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sarifice","type":"address"}],"name":"SacrificeChosen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"player","type":"address"},{"indexed":true,"name":"amount","type":"uint256"}],"name":"EarningsWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stage","type":"uint256"}],"name":"StageInvalidated","type":"event"}]);
	main();
}

function offer() {
	if(sac) {
		sacrific3CInstance.offerAsSacrifice({value:offerSize, gas:350000}, function(error, result){})
	} else {
		sacrific3CInstance.offerAsSacrifice(mnAddress, {value:offerSize, gas:400000}, function(error, result){})
	}
}

function validate() {
	sacrific3CInstance.tryFinalizeStage(function(error, result){})
}
	
function offervault() {
	if(sac) {
		sacrific3CInstance.offerAsSacrificeFromVault({gas:350000}, function(error, result){})
	} else {
		sacrific3CInstance.offerAsSacrificeFromVault(mnAddress, {gas:400000}, function(error, result){})
	}
}
	
function withdrawArenaDivs() {
	sacrific3CInstance.withdraw(function(error, result){})
}
	
function main() {
	changeStaticText();
	sacrific3CInstance = sacrific3CContract.at(sacrific3CAddress);
	checkLastsacrific3C();
	enableButtons();
    hideValidate();

	sacrific3CInstance.MAX_PLAYERS_PER_STAGE(function(error, maxPlayers){
		el('#playersize').innerHTML = '<b>' + maxPlayers + '</b> ' + playerNumberString;
		sacrific3CInstance.currentPlayers(function(error, result){
			el('#players').innerHTML = currentPlayersString + ' <b>' + result + '/' + maxPlayers +'</b>';
			listCurrentPlayers(result);
			determineStageStatus(result, maxPlayers);            
		})
    })
	
	sacrific3CInstance.OFFER_SIZE(function(error, result){
		offerSize = result;
		el('#offersize').innerHTML = offerSize1String + ' <b>' + web3.fromWei(result, 'ether') + ' ETC</b> ' + offerSize2String;
		checkAltar();
	})
	
	sacrific3CInstance.winningsPerRound(function(error, result){
		if(sac)
		{	
		el('#winnings').innerHTML = winnings1String + winnings2String + '<br />' + winnings3String
		} else {
			el('#winnings').innerHTML = 'One player loses their entry, but gets added to the line for a refund which occurs every 20 games.<br /> The winner receives ';
		}
		el('#winnings').innerHTML += web3.fromWei(result, 'ether') + winnings4String;
	})
	
	sacrific3CInstance.numberOfStages(function(error, result){
		el('#stage').innerHTML = currentStageString + ' <b>' + result + '</b>';
	})
	
	p3cInstance.myDividends(true, {from: sacrific3CAddress} , function(error, result){
		el('#sac').innerHTML = web3.fromWei(result, 'ether').toFixed(8) + ' ETC';
	});
	
	p3cInstance.balanceOf(sacrific3CAddress, function(error, result){
		el('#p3c').innerHTML = web3.fromWei(result, 'ether').toFixed(6) + ' Points';
	})
}

function setupJUST() {
	let p3cAddress = '0xDe6FB6a5adbe6415CDaF143F8d90Eb01883e42ac';
	let p3cContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethereumToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokensToSell","type":"uint256"}],"name":"calculateEthereumReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"administrators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"setStakingRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_identifier","type":"bytes32"},{"name":"_status","type":"bool"}],"name":"setAdministrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"disableInitialStage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_toAddress","type":"address"},{"name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_referredBy","type":"address"}],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingEthereum","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"},{"indexed":true,"name":"referredBy","type":"address"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"ethereumEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumReinvested","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"}]);
	p3cInstance = p3cContract.at(p3cAddress);

	let playerBookAddress = '0xD60d353610D9a5Ca478769D371b53CEfAA7B6E4c';
	let playerBookContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"addMeToAllGames","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_whatFunction","type":"bytes32"}],"name":"deleteAnyProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pIDxAddr_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"registrationFee_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNameFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"}],"name":"plyrNames_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"gameNames_","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"pIDxName_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_gameAddress","type":"address"},{"name":"_gameNameStr","type":"string"}],"name":"addGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_nameStr","type":"string"}],"name":"checkIfNameValid","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXnameFromDapp","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_whatFunction","type":"bytes32"},{"name":"_signerA","type":"uint256"},{"name":"_signerB","type":"uint256"},{"name":"_signerC","type":"uint256"}],"name":"checkSignersByAddress","outputs":[{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_gameID","type":"uint256"}],"name":"addMeToGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXID","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"plyrNameList_","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_whatFunction","type":"bytes32"}],"name":"checkData","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddrFromDapp","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"}],"name":"useMyOldName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXIDFromDapp","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_fee","type":"uint256"}],"name":"setRegistrationFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"games_","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"gameIDs_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"plyr_","outputs":[{"name":"addr","type":"address"},{"name":"name","type":"bytes32"},{"name":"laff","type":"uint256"},{"name":"names","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerLAff","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"getPlayerID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_whatFunction","type":"bytes32"},{"name":"_signerA","type":"uint256"},{"name":"_signerB","type":"uint256"},{"name":"_signerC","type":"uint256"}],"name":"checkSignersByName","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":true,"name":"playerAddress","type":"address"},{"indexed":true,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"isNewPlayer","type":"bool"},{"indexed":false,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":false,"name":"amountPaid","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onNewName","type":"event"}])
	playerBookInstance = playerBookContract.at(playerBookAddress);
}

function checkLastsacrific3C() {
	el('#history').innerHTML = '<br><h5 style="color:white;">Recent Arena Losers</h5><p id="lastsaced" style="color:#dc3545;"></p> <button id="more" type="button"  class="btn btn-outline-danger" role="button" style="margin-bottom: 10px;" data-toggle="collapse" data-target="#allsaced">Show More</button> <p id="allsaced" class="collapse" style="color:#dc3545;"></p>';
	el('#more').disabled = true;
	sacrific3CInstance.SacrificeChosen({}, {fromBlock: 9412117, toBlock: 'latest'}).get((error, eventResult) => {
		for(let i = eventResult.length - 4; i < eventResult.length; i++) {
			let sacrific3CPlayer = eventResult[i].args.sarifice;
			if(i < eventResult.length - 1) {
				addressToName(sacrific3CPlayer, function(name){
					el('#allsaced').innerHTML += '<b>' + name + '</b> ' + randomString() + '<br>';
				})
			} else {
				el('#more').disabled = false;
				addressToName(sacrific3CPlayer, function(name){
					el('#lastsaced').innerHTML = '<b>' + name + '</b> ' + randomString();
				})
			}
		}
	});
}

function randomString() {
				
	if(sac) {return sacStrings[Math.floor(Math.random() * sacStrings.length)];}
	else	{return slaStrings[Math.floor(Math.random() * slaStrings.length)];}
}

function listCurrentPlayers(players) {
	sacrific3CInstance.SacrificeOffered({}, { fromBlock: 9412117, toBlock: 'latest' }).get((error, eventResult) => {
		for(let i = 0; i < players; i++) {
			addressToName(eventResult[eventResult.length - 1 - i].args.player, function(name){
				el('#players').innerHTML += '<br><b>' + name + '</b>';
			})
		}
	});
}

function addressToName(address, x) {
	playerBookInstance.pIDxAddr_(address, function(error, pid){
			if(pid != 0) {
				playerBookInstance.getPlayerName(pid, function(error, name){
					if(name != 0) {
							x(web3.toAscii(name));
					} else {
							x(address);
					}
				})
			} else {
				x(address);
			}
	})
}



function determineStageStatus(players, maxPlayers) {
    //IF PLAYERS IS GREATER THAN 1 AND LESS THAN 5 DISPLAY OPEN STRING AND NUMBER OF REQUIRED PLAYERS
	if(players < maxPlayers) {
        var playersNeeded = Math.floor(maxPlayers - players);
		el('#status').innerHTML = '<span style="color:#02c751"><b>' + openString + '</b></span> - Waiting for ' + playersNeeded + ' more player(s)';             
	}
	else {     
        //GET CURRENT ROUND NUMBER FOR NEW RACE STRING VALUE
        sacrific3CInstance.numberOfStages(function(error, result) {
            let lastRoundString = result;
		web3.eth.getStorageAt(sacrific3CAddress, 4, function(error, result){
			let finalizedRound = result;
			web3.eth.getStorageAt(sacrific3CAddress, 5, function(error, result){
				let currentRound = result;
                //IF THE LAST ROUND WAS JUST FINALIZED DISPLAY ARENA CHOSEN STRING AND REQUIRED NUMBER OF PLAYERS
				if(finalizedRound == currentRound) {
                    var playersNeeded = maxPlayers;
					el('#status').innerHTML = '<span style="color:orange"><b>' + sacrificeChosenString + '</b></span> - ' + waitingForNewString + playersNeeded + ' players...';
                    el('#players').innerHTML = '<span style="color:#dc3545"><b>' + newRaceString + lastRoundString + ' ENDED! Join the next stage now</b></span>';
                //OTHERWISE IF MAX NUMBER OF PLAYERS HAVE JOINED DISPLAY ACTION REQUIRED STRING AND SHOW VALIDATE BUTTON
				} else {
					el('#status').innerHTML = '<span style="color:#dc3545"><b>' + actionRequiredString + '</b></span> - ' + interactString;
                    el('#players').innerHTML = '<span style="color:#dc3545"><b>' + racePlayersMaxString + '<br>' + raceEndedString + '</b></span>';      
                    showValidate();
				}
			})
		})
    })
	}
}	

function enableButtons() {
	el('#small').disabled = false;
	el('#medium').disabled = false;
	
	el('#offer').disabled = false;
}

function checkAltar() {
	web3.eth.getAccounts(function(error, accounts){
		addressToName(accounts[0], function(name){
			el('#playeraddress').innerHTML = name;
		})
	})
	
	sacrific3CInstance.myEarnings(function(error, result){
		el('#vault').innerHTML = earningsString;
        el('#earnings').innerHTML = earningsString;
		if(result > 0) {
			el('#vault').innerHTML +=' <b>' + web3.fromWei(result, 'ether').toFixed(8) + ' ETC</b>';
            el('#earnings').innerHTML +=' <b>' + web3.fromWei(result, 'ether').toFixed(8) + ' ETC</b>';
			
            el('#buyFluxButton').disabled = true;
            el('#showBuy').hidden = true;
		} else {
			el('#vault').innerHTML += ' <b>0 ETC</b>';
            el('#earnings').innerHTML += ' <b>0 ETC</b>';
			
            el('#buyFluxButton').disabled = false;
            el('#showBuy').hidden = false;
		}
		if(result >= offerSize) {
			el('#offervault').disabled = false;
		} else {
			el('#offervault').disabled = true;
		}
	})
}

function changeStaticText() {
	el('#offer').src = offerButtonString;
	el('#offervault').innerHTML = offerVaultButtonString;
	el('#withdrawArenaDivs').innerHTML = withdrawButtonString;
	el('#validate').innerHTML = validateButtonString;
}

function initialLanguage() {
	stageString = stageStringEN;
	p3cStatsString = p3cStatsStringEN;
	altarString = altarStringEN;
	earningsString = earningsStringEN;
	offerButtonString = offerButtonStringEN;
	validateButtonString = validateButtonStringEN;
	offerVaultButtonString = offerVaultButtonStringEN;
	withdrawButtonString = withdrawButtonStringEN;
	playerNumberString = playerNumberStringEN;
	offerSize1String = offerSize1StringEN;
	offerSize2String = offerSize2StringEN;
	winnings1String = winnings1StringEN;
	winnings2String = winnings2StringEN;
	winnings3String = winnings3StringEN;
	winnings4String = winnings4StringEN;
	currentStageString = currentStageStringEN;
	currentPlayersString = currentPlayersStringEN;
	dividendsString = dividendsStringEN;
	lockedUpString = lockedUpStringEN;
	recentlySacrificedString = recentlySacrificedStringEN;
	openString = openStringEN;
	waitingForMoreString = waitingForMoreStringEN;
	waitingForNewString = waitingForNewStringEN;
	sacrificeChosenString = sacrificeChosenStringEN;
	actionRequiredString = actionRequiredStringEN;
    racePlayersMaxString = racePlayersMaxStringEN;
    raceEndedString = raceEndedStringEN;
    newRaceString = newRaceStringEN;
	interactString = interactStringEN;
}

function languageEN() {
	initialLanguage();
	
	main();
}