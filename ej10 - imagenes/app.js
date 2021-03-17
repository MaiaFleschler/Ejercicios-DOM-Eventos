const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const imgGrande = document.querySelector(".imgGrande");

const actualizarImg = (img)=>{
    imgGrande.src = img.src;
}
img1.addEventListener("click", ()=>{
    actualizarImg(img1);
});
img2.addEventListener("click", ()=>{
    actualizarImg(img2);
});
img3.addEventListener("click", ()=>{
    actualizarImg(img3);
});
img4.addEventListener("click", ()=>{
    actualizarImg(img4);
});
img5.addEventListener("click", ()=>{
    actualizarImg(img5);
});