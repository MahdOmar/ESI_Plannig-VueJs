<template>
    

<div class="planning">
   
  <div class="row">

    
      <div class="col-xs-auto col-sm-auto col-md-auto col-lg-auto " style="padding: 0px;">
        <div class="table-responsive">
          <table class="table text-center">
              <thead class="text-primary" style="background:#ffffff;border: 1px solid rgb(103, 128, 240)">

                  <tr id="times" class="collapse bg-primary" style="position: absolute;z-index: 3;display: hidden;">
                     <div>
                         <td>
                            
                         </td>
                         <td>
                             <h4 class="text-white">Sunday</h4>
                          <label class="form-check-label text-white">
                              <input class="form-check-input" id="check_box-0" onclick="switch_day(0)" type="checkbox" checked> Work day
                          </label>
                          <div class="form-group row">
                              <label for="example-time-input" class="col-2 col-form-label text-white">Start:</label>
                              <div class="col-10">
                                  <input onchange="update_empty(this,0)" class="form-control" type="time" value="08:00" id="time-empty-0">
                              </div>
                          </div>

                      </td>
                         <td>
                            <h4 class="text-white">Monday</h4>
                             <label class="form-check-label text-white">
                                 <input class="form-check-input"  onclick="switch_day(1)" id="check_box-1" type="checkbox" checked> Work day
                             </label>
                             <div class="form-group row">
                                 <label for="example-time-input" class="col-2 col-form-label text-white">Start:</label>
                                 <div class="col-10">
                                     <input onchange="update_empty(this,1)" class="form-control" type="time" value="08:00" id="time-empty-1">
                                 </div>
                             </div>

                         </td>
                         <td>
                            <h4 class="text-white">Tuesday</h4>
                             <label class="form-check-label text-white">
                                 <input class="form-check-input" onclick="switch_day(2)"  id="check_box-2" type="checkbox" checked> Work day
                             </label>
                             <div class="form-group row">
                                 <label for="example-time-input" class="col-2 col-form-label text-white">Start:</label>
                                 <div class="col-10">
                                     <input onchange="update_empty(this,2)" class="form-control" type="time" value="08:00" id="time-empty-2">
                                 </div>
                             </div>

                         </td>
                         <td>
                            <h4 class="text-white">Wednesday</h4>
                             <label class="form-check-label text-white">
                                 <input class="form-check-input" onclick="switch_day(3)" id="check_box-3" type="checkbox" checked> Work day
                             </label>
                             <div class="form-group row">
                                 <label for="example-time-input" class="col-2 col-form-label text-white">Start:</label>
                                 <div class="col-10">
                                     <input onchange="update_empty(this,3)" class="form-control" type="time" value="08:00" id="time-empty-3">
                                 </div>
                             </div>

                         </td>
                         <td>
                            <h4 class="text-white">Thursday</h4>
                             <label class="form-check-label text-white">
                                 <input class="form-check-input" onclick="switch_day(4)" id="check_box-4" type="checkbox" checked> Work day
                             </label>
                             <div class="form-group row">
                                 <label for="example-time-input" class="col-2 col-form-label text-white">Start:</label>
                                 <div class="col-10">
                                     <input onchange="update_empty(this,4)" class="form-control" type="time" value="08:00" id="time-empty-4">
                                 </div>
                             </div>

                         </td>
                         <td>
                            <h4 class="text-white">Friday</h4>
                             <label class="form-check-label text-white">
                                 <input class="form-check-input" onclick="switch_day(5)" id="check_box-5" type="checkbox" checked> Work day
                             </label>
                             <div class="form-group row">
                                 <label for="example-time-input" class="col-2 col-form-label text-white">Start:</label>
                                 <div class="col-10">
                                     <input onchange="update_empty(this,5)" class="form-control" type="time" value="08:00" id="time-empty-5">
                                 </div>
                             </div>

                         </td>
                         <td> 
                            <h4 class="text-white">Saturday</h4>
                             <label class="form-check-label text-white">
                                 <input class="form-check-input"  onclick="switch_day(6)" id="check_box-6" type="checkbox" checked> Work day
                             </label>
                             <div class="form-group row ">
                                 <label for="example-time-input" class="col-2 col-form-label text-white">Start:</label>
                                 <div class="col-10">
                                     <input onchange="update_empty(this,6)" class="form-control" type="time" value="08:00" id="time-empty-6">
                                 </div>
                             </div>

                         </td>

                         </div>

                  </tr>


              <tr style="z-index: 1;">
                  <th scope="col">timeline</th>
                  <th scope="col">Sunday</th>
                  <th scope="col">Monday</th>
                  <th scope="col">Tuesday</th>
                  <th scope="col">Wednesday</th>
                  <th scope="col">Thursday</th>
                  <th scope="col">Friday</th>
                  <th scope="col">Saturday</th>
              </tr>
              </thead>
              <tbody style="z-index: 1;" >
              <tr>
                  <td class="vertical-time" id="vertical-time">

                      <div class="card border border-primary" style="height:80px; ">
                       
                        <div class="card-body">08:00 - 09:00</div>
                        
                     </div>                   
                      <div class="card border border-primary" style="height:80px; ">
                       
                        <div class="card-body">09:00 - 10:00</div>
                        
                     </div>                   
                      <div class="card border border-primary" style="height:80px; ">
                       
                        <div class="card-body">10:00 - 11:00</div>
                        
                     </div>                   
                      <div class="card border border-primary" style="height:80px; ">
                       
                        <div class="card-body">11:00 - 12:00</div>
                        
                     </div>                   
                      <div class="card border border-primary" style="height:80px; ">
                       
                        <div class="card-body">13:00 - 14:00</div>
                        
                     </div>                   
                      <div class="card border border-primary" style="height:80px; ">
                       
                        <div class="card-body">14:00 - 15:00</div>
                        
                     </div>                   
                      <div class="card border border-primary" style="height:80px; ">
                       
                        <div class="card-body">15:00 - 16:00</div>
                        
                     </div>                   
                      <div class="card border border-primary" style="height:80px; ">
                       
                        <div class="card-body">16:00 - 17:00</div>
                        
                     </div>                   
                      <div class="card border border-primary" style="height:80px; ">
                       
                        <div class="card-body">17:00 - 18:00</div>
                        
                     </div>                   


                  </td>
                  <td style="width:150px">

                       <div class="card border border-primary" style="height:160px; ">
                       
                        <div class="card-body">Cours Analyse 1 </div>
                        
                     </div> 

                     
                       <div class="card border border-primary" style="height:160px; ">
                       
                        <div class="card-body">Cours Analyse 1 </div>
                        
                     </div> 
                      
                   
                  </td>
                  <td style="width:150px">
                      
                       <div class="card border border-primary" style="height:160px; ">
                       
                        <div class="card-body">Cours Analyse 1 </div>
                        
                     </div> 

                   </td >

                  <td style="width:150px">
                   
                   
                  </td>
                  <td style="width:150px">
                    
                    
                  </td>
                  <td style="width:150px">
                   
                   
                  </td>
                  <td style="width:150px">
                    
                    
                  </td>
                  <td style="width:150px">
                   
                  </td>
              </tr>
              </tbody>
          </table>
        </div>

      </div>
  </div>
</div>





</template>