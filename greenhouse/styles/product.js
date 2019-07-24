window.addEventListener("load", function(event) {
    var click_product_box = document.getElementsByClassName('product_box'),
        parent = document.getElementsByClassName('modal_text_container')[0];
    for(let i = 0; i < click_product_box.length; i ++) {
        click_product_box[i].onclick = function () {
            document.getElementById("modal").classList.add("show");
            document.getElementsByTagName("main")[0].classList.add("overflow");
            var image = document.createElement('img'),
                price =  document.createElement('h1'),
                cell_name =  document.createElement('h2'),
                info_p =  document.createElement('p');

            image.src = this.children[0].src;
            price.innerHTML = this.children[1].innerText;
            cell_name.innerHTML = this.children[2].innerText;
            info_p.innerHTML = this.children[3].innerText;

            image.classList.add('modal_img');
            price.classList.add('modal_price');
            cell_name.classList.add('modal_product_name');
            info_p.classList.add('modal_product_text');

            parent.appendChild(image);
            parent.appendChild(price);
            parent.appendChild(cell_name);
            parent.appendChild(info_p);
        }
    };
    document.getElementById("modal_close").onclick = function () {
        document.getElementById("modal").classList.remove("show");
        document.getElementsByTagName("main")[0].classList.remove("overflow");
        $(parent).empty();
    }
});