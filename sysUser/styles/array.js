var source = {
leftSide: [
    [
        {tagName: 'th', text: 'First Name:', for: 'firstName'},
        {tagName: 'td', name: 'firstName', id: 'firstName', placeholder: 'Enter your first name...', type: 'text', typeName: 'input',}
    ],
    [
        {tagName: 'th', text: 'Last Name:', for: 'lastName'},
        {tagName: 'td', name: 'lastName', id: 'lastName', placeholder: 'Enter your last name...', type: 'text', typeName: 'input',}
    ],
    [
        {tagName: 'th', text: 'Age:', for: 'age'},
        {tagName: 'td', name: 'age', id: 'age', placeholder: 'Enter your age...', type: 'number', typeName: 'input',}
    ],
    [
        {tagName: 'th', text: 'Password:', for: 'password'},
        {tagName: 'td', name: 'password', id: 'password', placeholder: 'Enter your password...', type: 'password', typeName: 'input',}
    ],
    [
        {tagName: 'th', text: 'Confirm:', for: 'confirm'},
        {tagName: 'td', name: 'confirm', id: 'confirm', placeholder: 'Confirm your password...', type: 'password', typeName: 'input',}
    ],
    [
        {tagName: 'th', text: 'Job Title:', for: 'select'},
        {tagName: 'td', name: 'select', id: 'select', placeholder: 'Select...', optionsvalue: 'beginner', typeName: 'select',},
    ]
],
rightSide: [
    [
        {tagName: 'th', text: 'Gender:', for: 'radio'},
        {tagName: 'td', name: 'radio', id: 'radio', typeName: 'input'}
    ],
    [
        {tagName: 'th', text: 'Profit:', for: 'checkbox'},
        {tagName: 'td', name: 'checkbox', id: 'checkbox', typeName: 'input'}
    ],
    [
        {tagName: 'th', text: 'Teletype:', for: 'textarea'},
        {tagName: 'td',  name: 'textarea', id: 'textarea', placeholder: 'Call me...', typeName: 'textarea'}
    ],
    [   
        {tagName: 'th', text: 'Country:', for: 'selectCountry'},
        {tagName: 'td',  name: 'selectCountry', id: 'selectCountry', placeholder: 'Select...', value: 'Scotland', typeName: 'select'}
    ], [    
        {tagName: 'th', text: 'State:', for: 'selectState'},
        {tagName: 'td',  name: 'selectState', id: 'selectState', placeholder: 'Select again...', value: 'Edinburgh', typeName: 'select'}
    ],
],
buttonMatrix: [
    [ 
        {type: 'radio', text: 'M', typeName: 'radio', name: 'radio', id: 'radio1'},
        {type: 'radio', text: 'F', typeName: 'radio', name: 'radio', id: 'radio2'}
    ], 
    [
        {type: 'checkbox', text: 'A', typeName: 'checkbox', name: 'checkbox', id: 'checkbox1'},
        {type: 'checkbox', text: 'B', typeName: 'checkbox', name: 'checkbox', id: 'checkbox2'},
        {type: 'checkbox', text: 'C', typeName: 'checkbox', name: 'checkbox', id: 'checkbox3'}
    ]
],
footer: [
    [
        {tagName: 'buttonUpload', typeName: 'button', type: 'file', value: 'Upload'}
    ],
    [
        {tagName: 'buttonRight', typeName: 'button', type: 'button', value: 'Save'}
    ],
    [
        {tagName: 'buttonRight', typeName: 'button', type: 'button', value: 'Cancel'}
    ]
],
};
var country = [
        {id:'Select...'}, 
        {id: 'Armenia', class: 'countries'},
        {id: 'Finland', class: 'countries'},
        {id: 'Spain', class: 'countries'},
        {id: 'Brasil', class: 'countries'}
];
var state =  [
        {id:'Select again...'},
        {id: 'Yerevan', region: 'Armenia', class: 'city'},
        {id: 'Gyumri', region: 'Armenia', class: 'city'},
        {id: 'Vanadzor', region: 'Armenia', class: 'city'},
        {id: 'Abovyan', region: 'Armenia', class: 'city'},
        {id: 'Helsinki', region: 'Finland', class: 'city'},
        {id: 'Espoo', region: 'Finland', class: 'city'},
        {id: 'Tampere', region: 'Finland', class: 'city'},
        {id: 'Vantaa', region: 'Finland', class: 'city'},
        {id: 'Almería', region: 'Spain', class: 'city'},
        {id: 'Cádiz', region: 'Spain', class: 'city'},
        {id: 'Córdoba', region: 'Spain', class: 'city'},
        {id: 'Granada', region: 'Spain', class: 'city'},
        {id: 'Rio De Janeiro', region: 'Brasil', class: 'city'},
        {id: 'Alagoas', region: 'Brasil', class: 'city'},
        {id: 'Roraima', region: 'Brasil', class: 'city'},
        {id: 'Santa Catarina', region: 'Brasil', class: 'city'}
];
