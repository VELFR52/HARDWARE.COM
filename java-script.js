var mas_open = document.querySelectorAll("#open-modal-cpu, #open-modal-nak, #open-modal-gpu, #open-modal-mat, #open-modal-pam, #open-modal-block, #open-modal-corp, #open-modal-frez");


mas_open.forEach(function(item, i, arr) {
  var id = item.id;
  var search_id = "my-modal-" + id.split('-')[2];
  item.addEventListener("click", function(){
    document.getElementById(search_id).classList.add("open");
  });
});

var mas_close = document.querySelectorAll("#my-modal-cpu .modal_box, #my-modal-gpu .modal_box, #my-modal-mat .modal_box, #my-modal-pam .modal_box, #my-modal-block .modal_box, #my-modal-corp .modal_box, #my-modal-nak .modal_box, #my-modal-frez .modal_box");
mas_close.forEach(function(item, i, arr) {
  item.addEventListener('click', event => {
    event._isClickWithInModal = true;
  }); 
})

mas_close.forEach(function(item, i, arr) {
  item.parentNode.addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    document.getElementById(item.parentNode.id).classList.remove("open");
  });
});

let selector = document.querySelectorAll('select');
selector.forEach(function(item, i, arr) {
  item.selectedIndex = -1;
})

/*var mas_shops = document.querySelectorAll(".flex img");
mas_shops.forEach(function(item, i, arr) {
  item.addEventListener('click', event => {
    document.getElementsByClassName("select_hardware")[0].classList.add("hidden-block");
    document.getElementsByClassName("filter_result")[0].classList.remove("hidden-block");
  })
});

document.getElementById("logo").addEventListener('click', event => {
  document.getElementsByClassName("select_hardware")[0].classList.remove("hidden-block");
  document.getElementsByClassName("filter_result")[0].classList.add("hidden-block");
});*/
