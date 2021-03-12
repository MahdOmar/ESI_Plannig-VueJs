<template>
    
    <div class="container-fluid bg-custom" style="padding-left: 40px; ">
  <div class="jumbotron p-2 bg-custom">
    <h1>Manuel generation</h1>
    <p>Create a new planning</p>
  </div>
<div class="container">
  <form method="POST" action="">
    <div class="form-group">
        <label for="planning_name2">Planning Name</label>
        <input name="planning_name2" type="text" class="form-control" id="planning_name2" required>
    </div>
    <div class="form-group">
        <label for="groups_select">Select group</label>
        <select class="form-control" id="groups_select" required>
        
               <option value="">
           
                </option>
          <% } %>
        </select>
    </div>
    <div class="form-group row">
        <label for="start" class="col-2 col-form-label">Start :</label>
        <div class="col-10">
            <input class="form-control" type="date" id="start" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="end" class="col-2 col-form-label">End :</label>
        <div class="col-10">
            <input class="form-control" type="date"  id="end" required>
        </div>
    </div>
<h6 id="gen_error" class="text-danger d-none">you need to feel out all fields</h6>
<button class="btn btn-primary"  type="button"  onclick="create_planning()" >Create</button>
</form>

</div>

    </div>




</template>