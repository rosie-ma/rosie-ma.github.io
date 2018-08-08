function GridView(options) {
	var $grid = document.createElement('table'),
        $regCaption = document.createElement('caption'),
        caps = options.scheme.map(function (item) {
		return item.cap;
        });
    $regCaption.innerHTML = 'Registration';
    $regCaption.classList.add('registCaption');
    $grid.setAttribute('id', 'gridTable');
    
	GridView.createHead({
        $grid: $grid,
        caps: caps
    });
	GridView.createBody({
        $grid: $grid, 
        model: options.model,
        $popup: options.$popup,
        parent: options.parent
	});
    main.appendChild($grid);
    $grid.appendChild($regCaption);
}

GridView.createHead = function(options) {
	var $head = options.$grid.createTHead(),
		$row = $head.insertRow();

	options.caps.forEach(function(cap) {
		var $cell = $row.insertCell();
		$cell.innerHTML = cap;
    });

    var cellEdit = $row.insertCell();
    
    cellEdit.innerText = 'Edit';
    cellEdit.classList.add('edit');
};

GridView.createBody = function(options) {
    var $body = options.$grid.createTBody(),
        data = options.model.selectAll();
    options.$grid.$body = $body;
    
    data.forEach(function (user) {
        var $row = $body.insertRow();
           
        userGridScheme.forEach(function (col) {
            var $cell = $row.insertCell();
            $cell.innerText = user[col.name];
            $cell.classList.add(col.class);
        });
        GridView.createEdit({
            $row: $row, 
            id: user.ID, 
            $popup: options.$popup,
            model: user
        });
//        GridView.createDelete({
//            $row: $row, 
//            id: user.ID,
//            model: User,
//            $grid: options.$grid
//        });
	});
};

GridView.createEdit = function (options) {
    var $cell = options.$row.insertCell(),
        $img = document.createElement('img');
    $img.setAttribute('alt', 'Edit');   
    $img.setAttribute('id', 'editBtn');
    $cell.setAttribute('id', 'editCell');
    $img.src = 'image/editIcon.png';

    $img.onclick = function () {
         Popup.open({
            $popup: options.$popup,
            getTitle: (model) => model.FirstName + ' ' + model.LastName,
            model: options.model
        });
     
        $popup.classList.add('popup');
        var $dimLayer = document.createElement('div');
        $dimLayer.setAttribute('id', 'dimLayer');
        $dimLayer.classList.add('dimlayer');
            main.appendChild($dimLayer);
    }
    $cell.appendChild($img);
}

//GridView.createDelete = function (options) {
//    var $cell = options.$row.insertCell();
//        $img = document.createElement('img');
//    $img.setAttribute('alt', 'Delete');
//    $img.setAttribute('id', 'deleteBtn');
//    $cell.setAttribute('id', 'deleteCell');
//    $img.src = 'image/deleteIcon.png';
//    $img.onclick = function () {
//        if (confirm('Are you sure you want to delete this user?')) {
//            options.model.delete(options.id);
//            options.$grid.removeChild(options.$grid.$body);
//
//            GridView.createBody(options);
//        }
//    }
//    $cell.appendChild($img);
//}
