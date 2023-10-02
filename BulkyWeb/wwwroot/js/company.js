var dataTable;

$(document).ready(function () {
   
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url: '/admin/company/getall' },
        "columns": [
            { "data": "id", "width": "5%" },
            { "data": "name", "width": "25%" },
            { "data": "phonenumber", "width": "20%" },
            { "data": "applicationuser.email", "width": "20%" },
            { "data": "orderstatus", "width": "10%" },
            { "data": "ordertotal", "width": "10%" },
            {
                data: 'id',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group">
                     <a href="/admin/company/upsert?id=${data}" class="btn btn-primary mx-2"> <i class="bi bi-pencil-square"></i> Edit</a>               
                    </div>`
                },
                "width": "10%"
            }
        ]
    });
}

