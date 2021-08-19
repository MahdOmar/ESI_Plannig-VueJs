<template>
    <div>
        <button type="button" title="Edit account" data-toggle="modal" data-target="#add" style="float: right" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-plus"></i>Ajouter Enseignant </button>

          <table class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Photo</th>
                <th scope="col" class="text-primary">Nom</th>
                <th scope="col" class="text-primary">Prénom</th>
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
                    <td>  Mahdaoui</td>
                    <td>Omar</td>
                    <td>o.mahdaoui@esi-sba.dz </td>
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-edit"></i>Éditer</button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i>Supprimer</button>
                    </td>
                </tr>
                 <tr>
                    <td class="user_row">
                        <img src="../assets/img/images.png" class="rounded-circle" style='width: 50px;
  height: 50px;
  border-radius: 50%;' alt="image">
                    </td>
                    <td> Riyadh</td>
                    <td>Herizi</td>
                    <td>r.herizi@esi-sba.dz </td>
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-edit"></i>Éditer</button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i>Supprimer</button>
                    </td>
                </tr>




        


            </tbody>
        </table>
        <div class="modal fade" id="add">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h5 class="modal-title">Créer un nouveau compte</h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form method="POST" action="">
                    <div class="form-group">
                        <label for="firstNameInput">Nom</label>
                        <input name="firstName" type="text" class="form-control" id="firstName" required>
                    </div>

                    <div class="form-group">
                        <label for="lastNameInput">Prénom</label>
                        <input name="lastName" type="text" class="form-control" id="lastName" required>
                    </div>

                    <div class="form-group">
                        <label for="emailInput">Email </label>
                        <input name="email" type="email" class="form-control" id="email" placeholder="" required>
                    </div>

                    <div class="form-group">
                        <label for="type">Selectioner Type</label>
                       <select class="form-control" id="sel1">
                          <option>Maitre de conférence A</option>
                          <option>Maitre de conférence B</option>
                          <option>Professeur</option>
                        
                      </select>
                    </div>

                    <div class="form-group">
                        <label for="passwordInput">Mot de Pass</label>
                        <input name="password" type="password" class="form-control" id="password" placeholder="" required>
                    </div>

                    <div class="form-group">
                        <label for="confirmPasswordInput">Confirmer Mot de Pass</label>
                        <input name="confirmPassword" type="password" class="form-control" id="confirmPassword"
                               placeholder="">
                    </div>


                </form>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                <button type="submit" class="btn btn-primary" onclick="create()" >Créer</button>
            </div>

        </div>
    </div>
</div>




    </div>
    
</template>