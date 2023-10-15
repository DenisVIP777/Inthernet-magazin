$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 4,
		initialSlide: 4,
		slidesToScroll:1,
	});
});


document.querySelector('#elastic').oninput = function () {
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll('.elastic, .elastic li, .elastic_prod, .elastic_blog');
	if (val != '') {
		elasticItems.forEach(function (element) {
			if (element.innerText.search(val) == -1) {
				element.classList.add('hide');
			}
			else {
				element.classList.remove('hide');
			}
		});
	}
	else {
		elasticItems.forEach(function (element) {
			element.classList.remove('hide');
		});
	}
}




var isMobile = {
Android: function() {
return navigator.userAgent.match(/Android/i);
},
BlackBerry: function() {
return navigator.userAgent.match(/BlackBerry/i);
},
iOS: function() {
return navigator.userAgent.match(/iPhone|iPad|iPod/i);
},
Opera: function() {
return navigator.userAgent.match(/Opera Mini/i);
},
Windows: function() {
return navigator.userAgent.match(/IEMobile/i);
},
any: function() {
return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
}
};

//if(isMobile.iOS()) {
// Любые манипуляции при определении мобильного устройства на операционной системе от Apple: iOS
//}

//if(isMobile.any()) {
// Любые манипуляции при определении айфона
// Доступны следующие условия для операционных систем
// isMobile.Android() - устройство на Андроиде
// isMobile.BlackBerry() - устройство на BlackBerry
// isMobile.iOS() - устройство на iOS
// isMobile.Opera() - устройство, использующее Opera Mini
// isMobile.Windows() - устройство на Windows
// isMobile.any() - устройство на любой мобильной платформе
//}

window.onload = function () {
	document.addEventListener("click", documentActions);

	// Actions (делигирование события click)
	function documentActions(e) {
		const targetElement = e.target;
		if(window.innerWidth > 768 || isMobile.any()) {
			if(targetElement.classList.contains('btn_icon')) {
				targetElement.closest('.sitebar_links, .sitebar_links_, .hover_select_menu').classList.toggle('_hover');

			}
		}
		console.log(targetElement);
	}
}



const gridViev = document.querySelector('.parametar_grid_view');
const listViev = document.querySelector('.parametar_list_view');

const productCards = document.querySelectorAll('.list_products');
const productCard = document.querySelectorAll('.filtr_product_list_view');
const conyainerPriceProduct = document.querySelectorAll('.container_price_filtr_product_list_view');
const showHideFragment = document.querySelectorAll('.container_characteristics_filtr_product_list_view');
const showHideFragmentTwo = document.querySelectorAll('.show_hide_fragment');
const showHideFragmentThree = document.querySelectorAll('.show_hide_fragment_two');
const activePadding = document.querySelectorAll('.container_info_filtr_product_list_view, .discount_filtr_product_list_view');
const activeMargin = document.querySelectorAll('.header_info_product_list_view, .price_filtr_product_list_view');
const containerImage = document.querySelectorAll('.container_image_filtr_product_list_view');

if (gridViev) {
for (const itemProductCards of productCards) {
	gridViev.addEventListener("click", function(e) {
		itemProductCards.classList.add('active_list_products');
	});
}

for (const itemProductCard of productCard) {
	gridViev.addEventListener("click", function(e) {
		itemProductCard.classList.add('active_grid_viev');
	});
}

for (const itemShowHideFragment of showHideFragment) {
	gridViev.addEventListener("click", function(e) {
		itemShowHideFragment.classList.add('active_shov_hide');
	});
}

for (const itemShowHideFragmentTwo of showHideFragmentTwo) {
	gridViev.addEventListener("click", function(e) {
		itemShowHideFragmentTwo.classList.add('active_shov_hide');
	});
}

for (const itemShowHideFragmentThree of showHideFragmentThree) {
	gridViev.addEventListener("click", function(e) {
		itemShowHideFragmentThree.classList.remove('active_shov_hide');
	});
}

for (const itemConyainerPriceProduct of conyainerPriceProduct) {
	gridViev.addEventListener("click", function(e) {
		itemConyainerPriceProduct.classList.add('active_price_grid_viev');
	});
}

for (const itemActivePadding of activePadding) {
	gridViev.addEventListener("click", function(e) {
		itemActivePadding.classList.add('active_padding');
	});
}

for (const itemContainerImage of containerImage) {
	gridViev.addEventListener("click", function(e) {
		itemContainerImage.classList.add('conteiner_img_product_grid_viev');
	});
}

for (const itemActiveMargin of activeMargin) {
	gridViev.addEventListener("click", function(e) {
		itemActiveMargin.classList.add('activ_margin');
	});
}
}


if (listViev) {
for (const itemProductCards of productCards) {
	listViev.addEventListener("click", function(e) {
		itemProductCards.classList.remove('active_list_products');
	});
}

for (const itemProductCard of productCard) {
	listViev.addEventListener("click", function(e) {
		itemProductCard.classList.remove('active_grid_viev');
	});
}

for (const itemShowHideFragment of showHideFragment) {
	listViev.addEventListener("click", function(e) {
		itemShowHideFragment.classList.remove('active_shov_hide');
	});
}

for (const itemShowHideFragmentTwo of showHideFragmentTwo) {
	listViev.addEventListener("click", function(e) {
		itemShowHideFragmentTwo.classList.remove('active_shov_hide');
	});
}

for (const itemShowHideFragmentThree of showHideFragmentThree) {
	listViev.addEventListener("click", function(e) {
		itemShowHideFragmentThree.classList.add('active_shov_hide');
	});
}

for (const itemConyainerPriceProduct of conyainerPriceProduct) {
	listViev.addEventListener("click", function(e) {
		itemConyainerPriceProduct.classList.remove('active_price_grid_viev');
	});
}

for (const itemActivePadding of activePadding) {
	listViev.addEventListener("click", function(e) {
		itemActivePadding.classList.remove('active_padding');
	});
}

for (const itemContainerImage of containerImage) {
	listViev.addEventListener("click", function(e) {
		itemContainerImage.classList.remove('conteiner_img_product_grid_viev');
	});
}

for (const itemActiveMargin of activeMargin) {
	listViev.addEventListener("click", function(e) {
		itemActiveMargin.classList.remove('activ_margin');
	});
}
}



const menuBody = document.querySelector('.select_filtre_products');

/*Далее я на весь документ вешаю событие click и при возникновении этого события я вызываю функцию menu*/
document.addEventListener("click", menu);

function menu(event) {
	/*Первым делом я отлавливаю момент когда мы внутри документа нажали на нашу кнопку, либо на какой-то вложенный в него объект
	и если мы нажали именно на такой объект мы добавляем либо убираем класс _active*/
	if (event.target.closest('.select_filtre_products')) {
		menuBody.classList.toggle('_active');
	}
	/*Далее мы проверяем не кликнули ли мы на какой-то обект который находится внутри общего обекта с классом .menu
	если нет, тогда мы отбираем класс _active у нашего объекта, и меню у нас закроется*/
	if (!event.target.closest('.select_filtre_products')) {
		menuBody.classList.remove('_active');
	}
}

//Доработка меню чтобы мы могли закрывать его по клавише Escape.
document.addEventListener('keyup', function (event) {
	//Если event.code равно Escape, тогда я отбираю класс _active у нашего меню
	if (event.code == 'Escape') {
		menuBody.classList.remove('_active');
	}
});



const selectFiltreProducts = document.querySelector('.select_menu_');

function showFiltre() {
	const textElementContent = event.target.closest('span').textContent;
	const containerFiltres = document.querySelector('.container_filtres');
	containerFiltres.insertAdjacentHTML(
		'beforeend',
		`<div class="container_filtr">
				<p class="text_filtr">${textElementContent}</p>
				<i class="fa fa-times" aria-hidden="true"></i>
		</div>`
	);
}

if (selectFiltreProducts != null) {
	selectFiltreProducts.addEventListener('click', function (event) {
		if (event.target.closest('span')) {
			showFiltre();
		}
	});
}

const containerFiltres = document.querySelector('.container_filtres');

function deleteFilter() {
	const elem = event.target.closest('.container_filtr');
	elem.remove();
}

if (containerFiltres != null) {
	containerFiltres.addEventListener('click', function (event) {
		if (event.target.closest('i')) {
			deleteFilter();
		}
	});
}





const menuQuantityBody = document.querySelector('.select_quantity_products');

document.addEventListener("click", menuQuantity);

function menuQuantity(event) {
	if (event.target.closest('.select_quantity_products')) {
		menuQuantityBody.classList.toggle('_active');
	}
	
	if (!event.target.closest('.select_quantity_products')) {
		menuQuantityBody.classList.remove('_active');
	}
}


const selectQuantityProducts = document.querySelector('.select_menu_quantity');

function showFiltreQuantity() {
	const textQuantityElementContent = event.target.closest('.select_item_quantity').textContent;
	const containerQuantityFiltre = document.querySelector('.quantity_page_product');

	const numberContainerQuantityFiltre = Number(containerQuantityFiltre.textContent);
	const numberTextQuantityElementContent = Number(textQuantityElementContent);

	const computedQuantity = numberContainerQuantityFiltre + numberTextQuantityElementContent;
	containerQuantityFiltre.innerHTML = `${computedQuantity}`;


	const priceMain = document.querySelector('.price_page_product span');
	if (priceMain !== null) {
		const dataMainPrice = priceMain.getAttribute('data-price');
		const computedPriceMain = dataMainPrice * computedQuantity;
		priceMain.innerHTML = `${computedPriceMain}`;
	}
}

if (selectQuantityProducts != null) {
	selectQuantityProducts.addEventListener("click", function (event) {
		if (event.target.closest('.select_item_quantity')) {
			showFiltreQuantity();
		}
	});
}





const faShoppingBasketContainer = document.querySelector('.fa-shopping-basket-container');
const shoppingCartSubMenu = document.querySelector('.shopping_cart_sub_menu');
const shoppingBtnClost = document.querySelector('.shopping_btn_clost');

if (faShoppingBasketContainer) {
faShoppingBasketContainer.addEventListener("click", function(event) {
	shoppingCartSubMenu.classList.add('_active');
});
}
if (shoppingBtnClost) {
shoppingBtnClost.addEventListener("click", function(event) {
	shoppingCartSubMenu.classList.remove('_active');
});
}