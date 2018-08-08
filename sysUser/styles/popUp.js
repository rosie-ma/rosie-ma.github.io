function Popup (options) {
    var $popup = document.createElement('table');   
    $popup.setAttribute('class', 'mainTable');
    
    options.$popup = $popup;
    
    Popup.createTitlebar(options);
    Popup.createContainer(options);
    Popup.createButtonbar(options);
    
    options.parent.appendChild($popup);
        
    Popup.close(options);
    
    return $popup;
}
Popup.open = function(options){
    options.$popup.style.display = 'inline-block';
    if(options.$popup.onopen) {
        options.$popup.onopen();
    }
    options.$popup.$titlebar.text('User: ' + options.getTitle(options.model));
}
Popup.close = function(options){
    options.$popup.style.display = 'none';
    if(options.$popup.onclose) {
        options.$popup.onclose();
    }
}
Popup.createTitlebar = function(options) {
    var $titlebar = options.$popup.createTHead(),
        $row = $titlebar.insertRow(),
        $cell = $row.insertCell();
    
    $titlebar.setAttribute('id', 'mainThead');
    $titlebar.$cell = $cell;
    $titlebar.text = function(text) {
        this.$cell.innerText = text;
            var $closeBtn = document.createElement('img');
            $closeBtn.setAttribute('src', 'image/closeButton.png');
            $closeBtn.setAttribute('id', 'closeBtn');
            $cell.appendChild($closeBtn);    
        $closeBtn.onclick = function(e) {
            $popup.style.display = 'none';
        var $dimLayer = document.getElementsByClassName('dimlayer')[0];
        $dimLayer.classList.remove('dimlayer');
        };  
    };
    options.$popup.$titlebar = $titlebar;
}
Popup.createContainer = function(options) {
    var $container = options.$popup.createTBody(),
        $row = $container.insertRow()
        $cell = $row.insertCell();
        $container.cell = $cell;
        if(options.$contentForm){
         $container.cell.appendChild(options.$contentForm);
        }
}
Popup.createButtonbar = function(options) {
    
    
}