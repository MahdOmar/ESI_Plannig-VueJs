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
    </div>
</template>