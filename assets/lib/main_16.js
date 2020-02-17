var modal
var modalContent
var lastNumEggs=-1
var lastNumAlien=-1
var lastSecondsUntilFull=100
var lastSecondsElapsed=100
lastHatchTime=0
var eggstohatch1=864
var lastUpdate=new Date().getTime()
function main(){
    console.log('test')
    modal = document.getElementById('myModal');
    modalContent=document.getElementById('modal-internal')

    var installMetamask = "You are not signed into MetaMask. Please install/sign in, and try again.";

    // Events audio
    var audio = new Audio('./sounds/5.mp3');

    // Listen to events
    if (typeof web3 === "undefined") {
        alertify.alert(installMetamask);
    } else {
        web3.eth.getAccounts(function (err, accounts) {
            if (err != null) {
                alertify.alert("An error occurred: " + err);
                console.error(err)
            }
            else if (accounts.length == 0) {
                alertify.alert(installMetamask);
                console.log(installMetamask);
            } else {

                var contractAbi = web3.eth.contract(abi);
                var myContract = contractAbi.at(contractAddress);

                var onHatchEggs = myContract.onHatchEggs({}, 'latest');
                onHatchEggs.watch(function (err, res) {
                    if (err != null) console.error(err);
                    else {
                        audio.play();
                        alertify.notify(res.args.Aliens + " watts have just finished converting", 'event', 5);
                        console.log(res.args.Aliens + " watts have just finished converting");
                    }
                });
                
                var onSellEggs = myContract.onSellEggs({}, "latest");
                onSellEggs.watch(function (err, res) {
                    if (err != null) console.error(err);
                    else {
                        audio.play();
                        alertify.notify("Someone earned " + BigNumber(res.args.ethereumEarned).div(1e18).toFixed(6) + " ETC selling their Power", 'event', 5);
                        console.log("Someone earned " + BigNumber(res.args.ethereumEarned).div(1e18).toFixed(6) + " ETC selling Power");
                    }
                });
                
                var onBuyEggs = myContract.onBuyEggs({}, "latest");
                onBuyEggs.watch(function (err, res) {
                    if (err != null) console.error(err);
                    else {
                        audio.play();
                        alertify.notify("Someone bought " + BigNumber(res.args.incomingEthereum).div(1e18).toFixed(6) + " ETC worth of Power", 'event', 5);
                        console.log("Someone bought " + BigNumber(res.args.incomingEthereum).div(1e18).toFixed(6) + " ETC worth of Power");
                    }
                });
            }
        });
    }

    controlLoop()
    controlLoopFaster()
}
function controlLoop(){
    refreshData()
    setTimeout(controlLoop,2500)
}
function controlLoopFaster(){
    liveUpdateEggs()
    console.log('clf')
    setTimeout(controlLoopFaster,30)
}
function refreshData(){
    var sellsforexampledoc=document.getElementById('sellsforexample')
    marketEggs(function(eggs){
        eggs=eggs/10
        calculateEggSell(eggs,function(wei){
            devFee(wei,function(fee){
                console.log('examplesellprice ',wei)
                sellsforexampledoc.textContent='('+formatEggs(eggs)+' Watts would sell for '+formatEthValue(web3.fromWei(wei-fee,'ether'))+')'
            });
        });
    });
    lastHatch(web3.eth.accounts[0],function(lh){
        lastHatchTime=lh
    });
    EGGS_TO_HATCH_1ALIEN(function(eggs){
        eggstohatch1=eggs
    });

    getMyEggs(function(eggs){
        if(lastNumEggs!=eggs){
            lastNumEggs=eggs
            lastUpdate=new Date().getTime()
            updateEggNumber(formatEggs(eggs))
            latestEggs = eggs
        }        
        var timeuntilfulldoc=document.getElementById('timeuntilfull')
        secondsuntilfull=eggstohatch1-eggs/lastNumAlien        
        console.log('secondsuntilfull ',secondsuntilfull,eggstohatch1,eggs,lastNumAlien)
        lastSecondsUntilFull=secondsuntilfull
        timeuntilfulldoc.textContent=secondsToString(secondsuntilfull)
        if(lastNumAlien==0){
            timeuntilfulldoc.textContent='?'
        }
        
        var timeelapseddoc=document.getElementById('timeElapsed')
        secondselapsed=eggstohatch1+eggs/lastNumAlien        
        console.log('secondselapsed ',secondselapsed,eggstohatch1,eggs,lastNumAlien)
        lastSecondsElapsed=secondselapsed
        timeelapseddoc.textContent=secondsToString(secondselapsed)
        if(lastNumAlien==0){
            timeelapseddoc.textContent='?'
        }
                
    var hatchalienquantitydoc=document.getElementById('hatchalienquantity')
    hatchalienquantitydoc.textContent=translateQuantity(eggs/eggstohatch1)
    var allnumeggs=document.getElementsByClassName('numeggs')
    for(var i=0;i<allnumeggs.length;i++){
        if(allnumeggs[i]){
            allnumeggs[i].textContent=translateQuantity(eggs/eggstohatch1)
        }
    }        
});
    /*
    getMyStatus(function(res){                
        var gfsdoc=document.getElementById('freeAlien')
        gfsdoc.textContent= res
    });
    */
    getMyAlien(function(alien){
        lastNumAlien=alien
        var gfsdoc=document.getElementById('getfreealien')
        if(alien>0){
            gfsdoc.style.display="none"
        }
        else{
            //gfsdoc.style.display="inline-block"
        }
        var allnumalien=document.getElementsByClassName('numalien')
        for(var i=0;i<allnumalien.length;i++){
            if(allnumalien[i]){
                allnumalien[i].textContent=translateQuantity(alien)
            }
        }
        var productiondoc=document.getElementById('production')
        productiondoc.textContent=formatEggs(lastNumAlien*60*60)
    });    
    updateBuyPrice()
    updateSellPrice()

    $("#referralLink")
        .attr("href", window.location.origin+"?ref="+web3.eth.accounts[0])
        .text(window.location.origin+"?ref="+web3.eth.accounts[0]);
}

function hatchEggs1(){
    ref=getQueryVariable('ref')
    if(!ref || ref==web3.eth.accounts[0]){
        ref=0
    }
    console.log('hatcheggs ref ',ref)
    hatchEggs(ref,displayTransactionMessage())
}
function liveUpdateEggs(){
    if(lastSecondsUntilFull>1 && lastNumEggs>=0 && lastNumAlien>0 && eggstohatch1>0){
        currentTime=new Date().getTime()
        if(currentTime/1000-lastHatchTime>eggstohatch1){
            return;
        }
        difference=(currentTime-lastUpdate)/1000
        additionalEggs=Math.floor(difference*lastNumAlien)
        updateEggNumber(formatEggs(lastNumEggs+additionalEggs))
    }
}
function updateSellPrice(){
    var eggstoselldoc=document.getElementById('sellprice')
    //eggstoselldoc.textContent='?'
   getMyEggs(function(eggs){
        calculateEggSell(eggs,function(wei){
            devFee(wei,function(fee){
                console.log('sellprice ',wei)
                eggstoselldoc.textContent=formatEthValue(web3.fromWei(wei-fee,'ether'))
            });
        });
   });
}

function updateBuyPrice(){
    var eggstobuydoc=document.getElementById('eggstobuy')
    //eggstobuydoc.textContent='?'
    var ethtospenddoc=document.getElementById('ethtospend')
    weitospend=web3.toWei(ethtospenddoc.value,'ether')
    calculateEggBuySimple(weitospend,function(eggs){
        devFee(eggs,function(fee){
            eggstobuydoc.textContent=formatEggs(eggs-fee)
        });
    });
}
function buyEggs2(){
    var ethtospenddoc=document.getElementById('ethtospend')
    weitospend=web3.toWei(ethtospenddoc.value,'ether')
    buyEggs(weitospend,function(){
        displayTransactionMessage();
    });
}
function formatEggs(eggs){
    return translateQuantity(eggs/eggstohatch1)
}
function translateQuantity(quantity,precision){
    quantity=Number(quantity)
    finalquantity=quantity
    modifier=''
    if(precision == undefined){
        precision=0             
        if(quantity>1000000000000){
            precision=2
        }
        if(quantity>1000000){
            precision=1
        }
        if(quantity<100000){
            precision=1
        }
        if(quantity<1000){
            precision=2
        }
        if(quantity<100){
            precision=3
        }
        if(quantity<10){
            precision=4
        }
    }
    //console.log('??quantity ',typeof quantity)
    if(quantity>1000){
        modifier='K'
        finalquantity=quantity/1000
    }
    if(quantity>1000000){
        modifier='M'
        finalquantity=quantity/1000000
    }
    if(quantity>1000000000){
        modifier='B'
        finalquantity=quantity/1000000000
    }
    if(quantity>1000000000000){
        modifier='T'
        finalquantity=quantity/1000000000000
    }
    
    if(quantity>1000000000000000){
        modifier='Qd.'
        finalquantity=quantity/1000000000000000
    }

    if(quantity>1000000000000000000){
        modifier='Qt.'
        finalquantity=quantity/1000000000000000000
    }
    
    if(quantity>1000000000000000000000){
        modifier='Sxt.'
        finalquantity=quantity/1000000000000000000000
    }
    
    if(quantity>1000000000000000000000000){
        modifier='Spt.'
        finalquantity=quantity/1000000000000000000000000
    }
    
    if(quantity>1000000000000000000000000000){
        modifier='Oct.'
        finalquantity=quantity/1000000000000000000000000000
    }
    
    if(quantity>1000000000000000000000000000000){
        modifier='Non.'
        finalquantity=quantity/1000000000000000000000000000000
    }
    
    if(quantity>1000000000000000000000000000000000){
        modifier='Dec.'
        finalquantity=quantity/1000000000000000000000000000000000
    }
    
    if(precision==0){
        finalquantity=Math.floor(finalquantity)
    }
    return finalquantity.toFixed(precision)+modifier;
}

function removeModal(){
        modalContent.innerHTML=""
        modal.style.display = "none";
}
function displayTransactionMessage(){
    displayModalMessage("Transaction Submitted")
}
function displayModalMessage(message){
    //modal.style.display = "block";
    //modalContent.textContent=message;
    setTimeout(removeModal,3000)
}
function weiToDisplay(ethprice){
    return formatEthValue(web3.fromWei(ethprice,'ether'))
}
function formatEthValue(ethstr){
    return parseFloat(parseFloat(ethstr).toFixed(5));
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function copyRef() {
  var copyText = document.getElementById("copytextthing");
  copyText.style.display="block"
  copyText.select();
  document.execCommand("Copy");
  copyText.style.display="none"
  displayModalMessage("copied link to clipboard")
  //alert("Copied the text: " + copyText.value);
}

function secondsToString(seconds)
{
    seconds=Math.max(seconds,0)
    var numdays = Math.floor(seconds / 86400);

    var numhours = Math.floor((seconds % 86400) / 3600);

    var numminutes = Math.floor(((seconds % 86400) % 3600) / 59);

    var numseconds = ((seconds % 86400) % 3600) % 60;
    var endstr=""
    //if(numdays>0){
    //    endstr+=numdays + " days "
    //}
    
    return numhours + "h " + numminutes + "m " + numseconds + "s";
}

function disableButtons(){
    var allnumalien=document.getElementsByClassName('btn-lg')
    for(var i=0;i<allnumalien.length;i++){
        if(allnumalien[i]){
            allnumalien[i].style.display="none"
        }
    }
}

function enableButtons(){
    var allnumalien=document.getElementsByClassName('btn-lg')
    for(var i=0;i<allnumalien.length;i++){
        if(allnumalien[i]){
            allnumalien[i].style.display="inline-block"
        }
    }
}

web3.version.getNetwork((err, netId) => {  
  switch (netId) {
    case "1":
      console.log('This is mainnet')
      break
    case "2":
      console.log('This is the deprecated Morden test network.')
      break
    case "3":
      console.log('This is the ropsten test network.')
      break
    default:
      console.log('This is an unknown network.')
      
  }
})
