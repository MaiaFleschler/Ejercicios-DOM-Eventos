const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const imgGrande = document.querySelector(".imgGrande");

const actualizarImg = (img)=>{
    imgGrande.src = img.src;
}
img1.addEventListener("mouseover", ()=>{
    actualizarImg(img1);
});
img2.addEventListener("mouseover", ()=>{
    actualizarImg(img2);
});
img3.addEventListener("mouseover", ()=>{
    actualizarImg(img3);
});
img4.addEventListener("mouseover", ()=>{
    actualizarImg(img4);
});
img5.addEventListener("mouseover", ()=>{
    actualizarImg(img5);
});
