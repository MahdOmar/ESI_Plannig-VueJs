<template>
    <div>
        <button type="button" title="Edit account" data-toggle="modal" data-target="#add" style="float: right" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-plus"></i>Add new </button>

          <table class="table table-striped">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Picture</th>
                <th scope="col" class="text-primary">First name</th>
                <th scope="col" class="text-primary">Last name</th>
                <th scope="col" class="text-primary">Email</th>
                <th scope="col" class="text-primary">Actions</th>
            </tr>
            </thead>

            <tbody>
          

                <tr>
                    <td class="user_row">
                        <img src="../assets/img/images.png" class="rounded-circle" style='width: 50px;
  height: 50px;
  border-radius: 50%;' alt="image">
                    </td>
                    <td>  </td>
                    <td></td>
                    <td> </td>
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-edit"></i>Edit</button>
                        <button type="button" title="Delete account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-trash"></i>Delete</button>
                    </td>
                </tr>
                 <tr>
                    <td class="user_row">
                        <img src="../assets/img/images.png" class="rounded-circle" style='width: 50px;
  height: 50px;
  border-radius: 50%;' alt="image">
                    </td>
                    <td>  </td>
                    <td></td>
                    <td> </td>
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-edit"></i>Edit</button>
                        <button type="button" title="Delete account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-trash"></i>Delete</button>
                    </td>
                </tr>




        


            </tbody>
        </table>
        <div class="modal fade" id="add">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h5 class="modal-title">Create new account</h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form method="POST" action="">
                    <div class="form-group">
                        <label for="firstNameInput">First Name</label>
                        <input name="firstName" type="text" class="form-control" id="firstName" required>
                    </div>

                    <div class="form-group">
                        <label for="lastNameInput">Last Name</label>
                        <input name="lastName" type="text" class="form-control" id="lastName" required>
                    </div>

                    <div class="form-group">
                        <label for="emailInput">Email address</label>
                        <input name="email" type="email" class="form-control" id="email" placeholder="Enter email" required>
                    </div>

                    <div class="form-group">
                        <label for="passwordInput">Password</label>
                        <input name="password" type="password" class="form-control" id="password" placeholder="Password" required>
                    </div>

                    <div class="form-group">
                        <label for="confirmPasswordInput">Confirm Password</label>
                        <input name="confirmPassword" type="password" class="form-control" id="confirmPassword"
                               placeholder="Re-enter your password here">
                    </div>


                </form>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" onclick="create()" >Create</button>
            </div>

        </div>
    </div>
</div>




    </div>
    
</template>