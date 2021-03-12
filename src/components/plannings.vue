<template>
    
<div class="container-fluid bg-custom" style="padding-left: 40px; ">
  <div class="jumbotron p-2 bg-custom">
    <h1>Plannings</h1>
    <p>Here you see and edit created plannings.</p>
  </div>

  <div class="row">
    <div class="col shadow text-center">
     <table class="table text-center table-stripped">
         <thead>
         <tr ><th colspan="3" class="text-primary font-weight-bold">Plannings</th></tr>
         </thead>
         <tbody id="plannings">
         
            <tr>
                <td class="text-center"> <a class="btn btn-sm btn-light  font-weight-bolder " data-toggle="modal" data-target="#view_planning" onclick="" >
                   
                    </a>     </td>
                    <td>                    <a class="btn btn-info btn-sm col-2 text-white d-inline" href=""><i class="fa fa-edit"></i>Edit</a>
</td>
                    <td>                    <a class="btn btn-danger btn-sm col-2 d-inline text-white"><i class="fa fa-trash"></i>Delete</a>
</td>
            
                 
            </tr>
       


         </tbody>
     </table>

    </div>
   
  </div>
    </div>



</template>