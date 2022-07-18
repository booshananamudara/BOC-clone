const contact_btn = document.getElementById('first_btn');
const complaint_btn = document.getElementById('second_btn');

const contact_para = document.querySelector('.contact_para');
const complaint_para = document.querySelector('.complaint_para');


complaint_btn.addEventListener("click",()=>{
    contact_para.style.display = "none";
    complaint_para.style.display = "block";
    complaint_btn.classList.add('double_active');
    contact_btn.classList.remove('double_active');
    // contact_btn.style.cssText = `

    // `;

})

contact_btn.addEventListener("click",()=>{
    contact_para.style.display = "block";
    complaint_para.style.display = "none";
    complaint_btn.classList.remove('double_active');
    contact_btn.classList.add('double_active');
})