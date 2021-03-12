<template>
    
<div class="container-fluid bg-custom" style="padding-left: 40px; ">
  <div class="jumbotron p-2 bg-custom">
    <h1>Entities Manager</h1>
    <p>Here you can add,edit and delete planning components</p>
  </div>
  <div class="row">
    <div class="col-md-3 p-2 shadow text-center">
     <table class="table text-center">
         <thead>
         <tr><th class="bg-primary text-white font-weight-bold">Groups</th></tr>
         </thead>
         <tbody id="groups">
      
             <tr>
                 <td class="text-center"> <button class="btn btn-sm btn-light text-primary bg-white" onclick="show_group(<%= groups[i].id %>)">
                 
                     </button>  </td>
             </tr>
         


         </tbody>
     </table>
        <button class="btn btn-primary btn-sm text-center text-white" data-toggle="modal" data-target="#add_group" >Add group</button>

    </div>
      <div id="view" class="col-md-8 shadow p-1 m-4">
          <div class="container-fluid text-center " style="height: 400px ;display: flex;justify-content: center;align-items: center;">
              <h3 class="text-primary">Select a group to see entities</h3>
          </div>
      </div>
  </div>

    </div>


</template>