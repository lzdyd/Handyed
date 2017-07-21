function numberWithSpaces(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

var pageHeader = document.getElementById('page-header');
var pageHeaderCollapse = document.getElementById('page-header-collapse');

pageHeaderCollapse.addEventListener('click', function() {
	pageHeader.classList.toggle('nav-open');
});

// Account-list collapse
var headerAccount = document.getElementById('header-account');
headerAccount.addEventListener('click', function() {
	headerAccount.classList.toggle('account-list-open');
});

// Number of students with spaces
var studentsNumber = document.getElementById('students-number');
studentsNumber.innerHTML = numberWithSpaces(studentsNumber.innerHTML);