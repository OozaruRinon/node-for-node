var gameContract = web3.eth.contract(contracts.lobby.abi).at(contracts.lobby.address);

// if saturn isn't installed 
if (typeof web3 == 'undefined') {
    displayError(
        `
        <div class="custom-computer only">To Use, Install an <a target="_blank" style="color: white; text-decoration: underline;" href="https://www.youtube.com/watch?v=TUD-w5P_uAA&feature=youtu.be">ETC Wallet</a></div>
        <div class="mobile only">To Use, Install an <a target="_blank" style="color: white; text-decoration: underline;" href="https://www.youtube.com/watch?v=xCyrjiF6f3E&feature=youtu.be">ETC Wallet</a></div>
        `
    )
} else {
    // Do nothing - Web3 is detected, and active.
}


masternode = localStorage.getItem("ref")
if (masternode == null) {
    masternode = "0x8C3384569C5174E8Fe196b007fBbf4557475c6F5";
}

$("#createGame").click(function () {
    amountOfPlayers = $("#amountOfPlayers").val()
    entryCost = $("#entryCost").val()
    createGame(amountOfPlayers, entryCost)
})

function createGame(amountOfPlayers, entryCost) {
    amount = web3.toWei(entryCost)
    gameContract.createGame.sendTransaction(
        // your crop is the referrer
        amountOfPlayers, entryCost, {
            from: web3.eth.accounts[0],
            value: amount,
            gas: 123287,
            gasPrice: web3.toWei(1, 'gwei')
        },
        function (error, result) { //get callback from function which is your transaction key
            if (!error) {
                alertify.success(" Creating Game - Waiting for Blockchain...")
            } else {
                console.log(error);
            }
        }
    )
}