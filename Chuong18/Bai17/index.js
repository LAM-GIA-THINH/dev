const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `Making the sale...`
    }, 1500) 
  
/*   
Thử thách: 
1. Sử dụng setTimeout để thay đổi cụm từ "Uploading
   your data to the dark web" thành "Making the 
   sale..." sau 1.5 giây.
⚠️ Không thay đổi biểu tượng loading svg!
*/ 

})
