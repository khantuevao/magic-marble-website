let walletConnected = false;

const loaderContainer =  document.querySelector('.loader-container')

const popupForm = document.querySelector('.popup-form')

const submitted = document.querySelector('.submitted')

const glowButton = document.querySelector('.glow-button')
glowButton.addEventListener('click', () => {
    popupForm.classList.add('hidden')
    loaderContainer.classList.remove('hidden')
    setTimeout(() => {
        submitted.classList.remove('hidden')

    }, 1000)
    
})



const mintButton = document.getElementById('mint-button');
mintButton.addEventListener('click', () => {
    if (walletConnected == false) {
        alert('Wallet not connected')
    } else {
        loaderContainer.classList.remove('hidden')
        setTimeout(() => {
            loaderContainer.classList.add('hidden')
            popupForm.classList.remove('hidden')
        }, 1500)
    }
})

document.getElementById('connect-wallet').addEventListener('click', event => {
    let account;
    let button = event.target;
    window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
      account = accounts[0];
      console.log(account)
      button.textContent = account;
      walletConnected = true;
    })
  })