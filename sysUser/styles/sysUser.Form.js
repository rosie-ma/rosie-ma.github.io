function SysUserForm(options) {
    var $bigTable = document.createElement('table'),
        $bigTbody = document.createElement('tbody'),
        $bigTr = document.createElement('tr'),
        $firstTd = document.createElement('td'),
        $secondTd = document.createElement('td'),
        $footer = document.createElement('tfoot'),
        $mainTable = document.getElementsByClassName('mainTable')[0];
    
        $mainTable.appendChild($bigTable);
        $bigTable.appendChild($bigTbody);
        $bigTbody.appendChild($bigTr);
        $bigTr.appendChild($firstTd);
        $bigTr.appendChild($secondTd);
    
        options.parent = $firstTd;
        createCellFirst(options);
    
        options.data = source;
        options.parent = $secondTd;
        createCellSecond(options);
       
}
function createCellFirst(options) {
    var $tableFirst = document.createElement('table'),
        $theadFirst = document.createElement('thead'),
        $tbodyFirst = document.createElement('tbody'),
        $leftSide = options.data.leftSide,
        $mainTable = options.parent;
    
    $tableFirst.setAttribute('class', 'tableFirst');  
    $theadFirst.innerHTML = 'User Info';
    $theadFirst.setAttribute('class', 'theadFirst');
    
    options.parent.appendChild($tableFirst);
    $tableFirst.appendChild($theadFirst);
    $tableFirst.appendChild($tbodyFirst);
    
    $mainTable = $tbodyFirst;
   
    var $parent = $tbodyFirst;
        for(let i = 0; i < $leftSide.length; i++) {
        options.data = $leftSide[i];
        var $tr = document.createElement('tr');
        options.parent = $tr;
        $parent.appendChild($tr);
        createFirstRow(options);
    }   
}
function createFirstRow(options) {
    var $leftSideOptions = options.data;
      for(let i = 0; i < $leftSideOptions.length; i++) {
         var   $leftOptionsData = $leftSideOptions[i];
            if('th' == $leftOptionsData.tagName) {         
                var $th = document.createElement('th'),   
                    $label = document.createElement('label');              
                $label.innerHTML = $leftOptionsData.text;
                $label.setAttribute('for', $leftOptionsData.labelFor);
                options.parent.appendChild($th);        
                $th.appendChild($label);
            }else if('td' == $leftOptionsData.tagName && 'input' == $leftOptionsData.typeName) {
                var $td = document.createElement('td'),
                    $input  = document.createElement('input');
                $input.placeholder = $leftOptionsData.placeholder;
                $input.type = $leftOptionsData.type;
                $input.name = $leftOptionsData.name;
                $input.id = $leftOptionsData.id;
                options.parent.appendChild($td);
                $td.appendChild($input);
            }else if('td' == $leftOptionsData.tagName && 'select' == $leftOptionsData.typeName) {
                var $td = document.createElement('td'),
                    $select  = document.createElement('select'),
                    $option = document.createElement('option');               
                $option.innerHTML = $leftOptionsData.placeholder;
                $select.type = $leftOptionsData.type;
                $select.name = $leftOptionsData.name;
                $select.id = $leftOptionsData.id;
                options.parent.appendChild($td);
                $td.appendChild($select);           
                $select.appendChild($option);
            }
      }
} 
function createCellSecond(options) {
    var $tableSecond = document.createElement('table'),
        $theadSecond = document.createElement('thead'),
        $tbodySecond = document.createElement('tbody'),
        $rightSide = options.data.rightSide;   
    $tableSecond.setAttribute('class', 'tableSecond')
    $theadSecond.innerHTML = 'Security';
    $theadSecond.setAttribute('class', 'theadSecond');
    options.parent.appendChild($tableSecond);
    $tableSecond.appendChild($theadSecond);
    $tableSecond.appendChild($tbodySecond);
    options.parent = $tbodySecond;
    var $parent = $tbodySecond;
        for(let i = 0; i < $rightSide.length; i++) {
            options.data = $rightSide[i];
            var  $tr = document.createElement('tr');
            $parent.appendChild($tr);
            options.parent = $tr;
            createSecondRow(options);  
        }
    createButton(options);
}    
function createSecondRow(options) {
var $rightSideOptions = options.data;
for(let i = 0; i < $rightSideOptions.length; i++) {
var $rightOptionsData = $rightSideOptions[i];
    if('th' == $rightOptionsData.tagName) {     
        var $th = document.createElement('th'),
            $label = document.createElement('label');
        $label.innerHTML = $rightOptionsData.text;
        $label.setAttribute('for', $rightOptionsData.labelFor);
        options.parent.appendChild($th);
        $th.appendChild($label);
    }else { 
    var  $typeName = $rightOptionsData.typeName,
         $td = document.createElement('td');
    options.parent.appendChild($td);
    switch($typeName) {
        case 'input':
            $td.name = $rightOptionsData.name;
            $td.id = $rightOptionsData.id;
            options.parent.appendChild($td);
        break;
        case 'textarea':  
            var  $textarea  = document.createElement('textarea');
            $textarea.placeholder = $rightOptionsData.placeholder;
            $textarea.setAttribute('cols', '20');
            $textarea.setAttribute('rows', '4');
            $textarea.name = $rightOptionsData.name;
            $textarea.id = $rightOptionsData.id;
            $td.appendChild($textarea);
        break;            
        case 'select':         
            options.parent.appendChild($td);                 
            var $country = country,
                $state = state;
            if('selectCountry' == $rightOptionsData.name) {
                var $selectCountry = document.createElement('select');             
                $selectCountry.name = $rightOptionsData.name;
                $selectCountry.id = $rightOptionsData.id;
                $td.appendChild($selectCountry);
                for(let country of $country) {    
                    var $option = document.createElement('option'),
//                        $listCountry = $country[i],
                        $selectCountry = document.getElementById('selectCountry');
                    $option.value = country.id;
                    $option.innerHTML = country.id;  
                    $selectCountry.appendChild($option);
                } 
            }
            var $selectCountry = document.getElementById('selectCountry'),
                $selectState = document.createElement('select');
            $selectCountry.onchange = function(event) { 
                options.state = getCities(this.value);
                switch($rightOptionsData.name) {                    
                    case 'selectState':
                        var $countryState = document.getElementById('selectState'),
                            $optionsFirst = document.createElement('option');
                        $countryState.innerHTML = '';
                    break;
                }
                for(let i = 0; i < options.state.length; i++) {
                    var $option = document.createElement('option'),
                        $listState = options.state[i];
                $option.value = $listState.id;
                $option.innerHTML = $listState.id;                   
                $selectState.appendChild($option);
                }           
            }
            if('selectState' == $rightOptionsData.name) {
                var  $selectState = document.createElement('select'),
                     $optionsFirst = document.createElement('option');               
                $selectState.name = $rightOptionsData.name;
                $selectState.id = $rightOptionsData.id;
                $optionsFirst.innerHTML = 'First Choose Country';
                $td.appendChild($selectState);
                $selectState.appendChild($optionsFirst);          
            }               
        break;
       }
     }     
   }
}
function getCities(parentId) {
    if(null == parentId){
        return state;
    }
    return state.filter(function(state) {
        return state.region == parentId;
    });
}
function createButton(options) {
    options.data = source;
    var $tdRadio = document.getElementById('radio'),
        $tdCheckbox = document.getElementById('checkbox'),
        $buttonMatrix = options.data.buttonMatrix,
        $figure = document.createElement('figure'),
        $img = document.createElement('img');
    $img.setAttribute('id', 'openedImage');
    $img.setAttribute('src', 'image/woman.png');
    options.parent.appendChild($figure);
    $figure.appendChild($img);
    for(let i = 0; i < $buttonMatrix.length; i++) {
    var $buttonMatrixOptions = $buttonMatrix[i];
        for(let j = 0; j < $buttonMatrixOptions.length; j++) {
            var $ruby = document.createElement('ruby'),
                $rt = document.createElement('rt'),   
                $rb = document.createElement('rb'),        
                $label = document.createElement('label'),
                $input  = document.createElement('input');
            $ruby.appendChild($rb);
            $ruby.appendChild($rt);               
            var $buttonOptionsData = $buttonMatrixOptions[j];
                $label.setAttribute('for', $buttonOptionsData.id);
                $input.type = $buttonOptionsData.type;
                $label.innerHTML = $buttonOptionsData.text;
                $input.name = $buttonOptionsData.name;
                $input.id = $buttonOptionsData.id;
                $rt.appendChild($label);
                $rb.appendChild($input);
            if('radio' == $buttonOptionsData.type) {
                $tdRadio.appendChild($ruby);     
            }else if('checkbox' == $buttonOptionsData.type) {     
                $tdCheckbox.appendChild($ruby);     
            }                   
        }   
    }
}
//function createFooter(options) {
//    var $footerMatrix = options.data.footer,
//        $tr = document.createElement('tr'),
//        $tdLeft = document.createElement('td'),
//        $tdRight = document.createElement('td');
//    options.parent.appendChild($tr);
//    $tr.appendChild($tdLeft);
//    $tr.appendChild($tdRight);
//    for(let i = 0; i < $footerMatrix.length; i++) {
//        var $footerOptions = $footerMatrix[i],
//            $input = document.createElement('input');
//        for(let j = 0; j < $footerOptions.length; j++) {
//            var $footerOptionsData = $footerOptions[j],
//                $tagName = $footerOptionsData.tagName;
//            $input.className = $footerOptionsData.tagName;         
//            $input.innerHTML = $footerOptionsData.value;
//            $input.value = $footerOptionsData.value;
//            $input.type = $footerOptionsData.type; 
//            switch($tagName) {
//                case 'buttonUpload':      
//                var $label = document.createElement('label');                
//                    $label.setAttribute('class', 'imageLabel');
//                    $tdLeft.appendChild($label);
//                    $tdLeft.appendChild($input);
//                    $input.onchange = function(event) {
//                        imgUrl(this);
//                    };
//                break;
//                case 'buttonRight':
//                    $tdRight.appendChild($input);
//                break;
//            }
//        }
//    }
//}
function imgUrl($buttonUpload) {
    if ($buttonUpload.files && $buttonUpload.files[0]) {
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
            var $imgId = document.getElementById('openedImage');
            $imgId.setAttribute('src', e.target.result);
        });
    reader.readAsDataURL($buttonUpload.files[0]);
    }  
}