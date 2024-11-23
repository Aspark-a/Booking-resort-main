class Admin {
    constructor() {}
    render(mainContainer) {
// Create the first section (search)
const sectionSearch = document.createElement('section');
sectionSearch.id = 'search';

const formSearch = document.createElement('form');

const inputGroupDiv = document.createElement('div');
inputGroupDiv.className = 'input-group mb-3';

const inputSearch = document.createElement('input');
inputSearch.type = 'text';
inputSearch.className = 'form-control';
inputSearch.placeholder = 'Search by phone number';
inputSearch.setAttribute('aria-label', "Recipient's username");
inputSearch.setAttribute('aria-describedby', 'button-addon2');
inputSearch.id = 'search_inp';
inputGroupDiv.appendChild(inputSearch);

const buttonSearch = document.createElement('button');
buttonSearch.className = 'btn btn-success';
buttonSearch.type = 'button';
buttonSearch.id = 'search_submit';
buttonSearch.textContent = 'Button';
inputGroupDiv.appendChild(buttonSearch);

formSearch.appendChild(inputGroupDiv);
sectionSearch.appendChild(formSearch);

// Create the second section (table)
const sectionTable = document.createElement('section');
sectionTable.id = 'table';

const containerDiv = document.createElement('div');
containerDiv.className = 'container';

const rowDiv1 = document.createElement('div');
rowDiv1.className = 'row';

const colDiv1 = document.createElement('div');
colDiv1.className = 'col-md-12';

const addRowButton = document.createElement('button');
addRowButton.className = 'btn btn-primary pull-right add-row';
addRowButton.innerHTML = '<i class="fa fa-plus"></i>&nbsp;&nbsp; Add Row';
colDiv1.appendChild(addRowButton);
rowDiv1.appendChild(colDiv1);
containerDiv.appendChild(rowDiv1);

// Create the second row with the table
const rowDiv2 = document.createElement('div');
rowDiv2.className = 'row';

const colDiv2 = document.createElement('div');
colDiv2.className = 'col-md-12';

const table = document.createElement('table');
table.className = 'table table-bordered';
table.id = 'editableTable';

// Create thead element
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

// Create header cells
const thArrivalDate = document.createElement('th');
thArrivalDate.textContent = 'Arrival date';
headerRow.appendChild(thArrivalDate);

const thAdults = document.createElement('th');
thAdults.textContent = 'Adults';
headerRow.appendChild(thAdults);

const thChildren = document.createElement('th');
thChildren.textContent = 'Children';
headerRow.appendChild(thChildren);

const thPhoneNumber = document.createElement('th');
thPhoneNumber.textContent = 'Phone number';
headerRow.appendChild(thPhoneNumber);

const thType = document.createElement('th');
thType.textContent = 'Type';
headerRow.appendChild(thType);

const thStatus = document.createElement('th');
thStatus.textContent = 'Status';
headerRow.appendChild(thStatus);

const thEdit = document.createElement('th');
thEdit.textContent = 'Edit';
headerRow.appendChild(thEdit);

// Append the header row to thead
thead.appendChild(headerRow);
table.appendChild(thead);

// Create tbody element
const tbody = document.createElement('tbody');
table.appendChild(tbody);

// Append the table to the second row
colDiv2.appendChild(table);
rowDiv2.appendChild(colDiv2);
containerDiv.appendChild(rowDiv2);

// Append the container to the second section
sectionTable.appendChild(containerDiv);

// Finally, append both sections to the body or main container
mainContainer.appendChild(sectionSearch);
mainContainer.appendChild(sectionTable);
    }
}