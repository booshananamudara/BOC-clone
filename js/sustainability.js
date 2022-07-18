// const aruna = document.querySelector("#aruna");

// aruna.addEventListener("click",()=>{
//   console.log("helo");
//   var x = document.getElementById("hide_item");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     };
// });

// function hide(){
//     // var x = document.querySelectorAll('.hide');
//     // x.forEach(element => {
//     //   if (element.style.display === "none") {
//     //     element.style.cssText = `
//     //       display:block;

//     //     `;
//     //   } else {
//     //     element.style.display = "none";
//     //   }
//     // });

    
// };


function hide_panel()
{
    var x = document.getElementById("hide_items");
    var icon = document.getElementById("active_id");
    var icon_text = document.getElementById("active_id_text");
    var icon_color = document.getElementById("icon_bg_active_id");
    if (x.style.display == "none") {
        x.style.display = "block";
        icon.style.backgroundColor = "#ffde00";
        icon_text.style.color = "black";
        icon_color.style.backgroundColor = "#ecce00";
    } else {
        x.style.display = "none";
        icon.style.backgroundColor = "#353535";
        icon_text.style.color = "white";
        icon_color.style.backgroundColor = "#4c4c4c";
    };


}

function icon_change(x) {
    x.classList.toggle("fa-plus");
}


