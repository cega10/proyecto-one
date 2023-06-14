const menuI = document.querySelectorAll('.menu-item');
menuI.forEach(function(item){
    item.addEventListener("click", function(e){
        const currentI = document.querySelector(".active");
        currentI.classList.remove("active");
        e.target.classList.add("active");
    });
});