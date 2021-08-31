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
                       
                        <div class="card-body">12:00 - 13:00</div>
                        
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
                  <td v-html="content" style="width:150px">

                      
                   
                  </td>
                  <td v-html="content2" style="width:150px">
                      
                       
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

<script>
export default {
   
   data(){

        return{
   
            content:null,
            content2:null,
            courses:[{
                 day0:[
                   {name:'Cours Analyse 1' ,hs:8 , ms:0 , he:10 ,me:30},
                {name:'Cours Système 1',hs:11 , ms:0 , he:12 ,me:0},
                {name:'Cours Archi 1',hs:13 , ms:0 , he:16 ,me:0}

            ]

            },
                
            {
                day1:[
                   {name:'Cours Algothmique 1' ,hs:8 , ms:0 , he:10 ,me:0},
                {name:'TP Bureautique',hs:10 , ms:0 , he:12 ,me:0},
                {name:'Cours Archi 1',hs:14 , ms:0 , he:15 ,me:0},
                {name:'TD Electricité',hs:15 , ms:0 , he:17 ,me:0}


            ],

            }
            
             
                


            ],
            

            
           
        };
    },
    methods:{
        addCour(index){
            


            
              
                if( index == 0){
                    for (let i =0 ;i <this.courses[index].day0.length ; i++)

            {



                    if(i == 0){
                       // console.log('day0 de '+i)
              var dif = this.courses[index].day0[i].he - this.courses[index].day0[i].hs + Math.abs(this.courses[index].day0[i].ms - this.courses[index].day0[i].me)/60 ;
              var hight = dif * 80
              this.content = '<div class="card border border-primary" style="height:'+hight+'px "><div class="card-body text-center">'+this.courses[index].day0[i].name+'</div></div>'

                }
                else{
                   
                    var dif1 = (this.courses[index].day0[i].hs + (this.courses[index].day0[i].ms/60)) - (this.courses[index].day0[i-1].he +( this.courses[index].day0[i-1].me /60))  ;

                    var dif2 = this.courses[index].day0[i].he - this.courses[index].day0[i].hs + Math.abs(this.courses[index].day0[i].ms - this.courses[index].day0[i].me)/60 ;
                      
                  
                     var hight = dif1 * 80
                    var hight2 = dif2 * 80
                      this.content = this.content+' <div  style="height:'+hight+'px; "></div>'+
                      '<div class="card border border-primary" style="height:'+hight2+'px; "><div class="card-body text-center">'+this.courses[index].day0[i].name+'</div></div>'
                      



                }



                }

            }

            else if( index == 1){

                  for (let i =0 ;i <this.courses[index].day1.length ; i++)

            {



                    if(i == 0){
                       // console.log('day0 de '+i)
              var dif = this.courses[index].day1[i].he - this.courses[index].day1[i].hs + Math.abs(this.courses[index].day1[i].ms - this.courses[index].day1[i].me)/60 ;
              var hight = dif * 80
              this.content2 = '<div class="card border border-primary" style="height:'+hight+'px "><div class="card-body text-center">'+this.courses[index].day1[i].name+'</div></div>'

                }
                else{
                   
                    var dif1 = (this.courses[index].day1[i].hs + (this.courses[index].day1[i].ms/60)) - (this.courses[index].day1[i-1].he +( this.courses[index].day1[i-1].me /60))  ;

                    var dif2 = this.courses[index].day1[i].he - this.courses[index].day1[i].hs + Math.abs(this.courses[index].day1[i].ms - this.courses[index].day1[i].me)/60 ;
                      
                  
                     var hight = dif1 * 80
                    var hight2 = dif2 * 80
                      this.content2 = this.content2+' <div  style="height:'+hight+'px; "></div>'+
                      '<div class="card border border-primary" style="height:'+hight2+'px; "><div class="card-body text-center">'+this.courses[index].day1[i].name+'</div></div>'
                      



                }



                }




            }



           // const dif1 = (this.cour2.hs +( this.cour2.ms /60)) - (this.cour1.he + (this.cour1.me/60)) ;
           // const dif = this.cour1.he - this.cour1.hs + Math.abs(this.cour1.ms - this.cour1.me)/60 ;
        
            

      /*     const dif2 = this.cour2.he - this.cour2.hs + Math.abs(this.cour2.ms - this.cour2.me)/60 ;
            const hight1 = dif * 80
            const hight = dif1 * 80
            const hight2 = dif2 * 80
            this.content = ' <div class="card border border-primary" style="height:'+hight1+'px "><div class="card-body">'+this.cour1.name+'</div></div>'
            +' <div  style="height:'+hight+'px; "></div>'+
            '<div class="card border border-primary" style="height:'+hight2+'px; "><div class="card-body">'+this.cour2.name+'</div></div>'
            */


        }




    },



    mounted(){
       
     
     

       for(let index = 0 ; index < this.courses.length;index++){
         

             this.addCour(index);

        }


       
       
    }






}
</script>
