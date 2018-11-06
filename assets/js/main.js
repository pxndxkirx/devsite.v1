let item=document.getElementsByClassName('item');


let contaner_app=document.getElementsByClassName('contaner_app');
let container_folder=document.getElementsByClassName('container_folder');
let container_data=document.getElementsByClassName('container_data');

clear();

function clear(){
	setTimeout(function(){
		item[1].className="item";
		item[0].className="item";
	},700);
}




item[0].addEventListener('mouseenter',animation_one);
item[1].addEventListener('mouseenter',animation_two);


item[0].addEventListener('click',enter_one);
item[1].addEventListener('click',enter_two);
item[2].addEventListener('click',back_folder);
item[3].addEventListener('click',back_add);





function enter_one(){
	console.log('asd');

	contaner_app[0].style.display='none';
	container_data[0].style.display='none';

	container_folder[0].style.display="block";

}

function enter_two(){
	contaner_app[0].style.display='none';
	container_folder[0].style.display='none';
	container_data[0].style.display="block";

}



function back_folder(){
	contaner_app[0].style.display='block';
	container_folder[0].style.display='none';
	// container_data[0].style.display="block";	
}

function back_add(){
	contaner_app[0].style.display='block';
	// container_folder[0].style.display='none';
	container_data[0].style.display="none";	
}





function animation_one(){
	console.log('a');
	item[0].className="item animated swing";
	clear();
}


function animation_two(){
	item[1].className="item animated swing";
	clear();
}