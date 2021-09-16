<template>
    

    <div class="planning m-4">
    <div >
      <div
        class="col-xs-auto col-sm-auto col-md-auto col-lg-auto"
        style="padding: 0px"
      >
      <h2 class="m-2 text-center">{{ planning.name }}</h2>

        <div class="table">
          <table class="table table-bordered text-center">
            <thead
              class="text-primary"
              style="background: #ffffff; border: 1px solid rgb(103, 128, 240)"
            >
              

              <tr style="z-index: 1">
                <th scope="col">Date</th>
                <th scope="col">Module</th>
                 <th scope="col">Horaire</th>
                <th scope="col">Responsable</th>
               
              </tr>
            </thead>
            <tbody v-html="content" style="z-index: 1">
             

              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters({
    planning: "auth/planning",
  }),

  data() {
    return {
      
     
     
      
      content: '',
    
   
    };
  },
  methods: {
    addCour() {

    

      for(let i=0;i < this.planning.positionsexams.length;i++)
      
      {
        if(i != this.planning.positionsexams.length-1  && this.planning.positionsexams[i].date == this.planning.positionsexams[i+1].date )
        {


        
       this.content=this.content+ '<tr > <td  rowspan="2">'+this.planning.positionsexams[i].date+'</td>'+
                '<td >'+this.planning.positionsexams[i].module.name+'</td>'+
                
               ' <td>'+this.planning.positionsexams[i].startH+'h-'+this.planning.positionsexams[i].endH+'h'+'</td>'+
                '<td>'+this.planning.positionsexams[i].prof+'</td>'+
                
              '</tr>'+
              ' <tr><td>'+this.planning.positionsexams[i+1].module.name+'</td>'+
                '<td >'+this.planning.positionsexams[i+1].startH+'h-'+this.planning.positionsexams[i+1].endH+'h'+'</td>'+
                '<td>'+this.planning.positionsexams[i+1].prof+'</td>'+
               
                
             ' </tr>'
             i+=1;
        }
            
            else{
              this.content = this.content + ' <tr><td>'+this.planning.positionsexams[i].date+'</td>'+
                '<td >'+this.planning.positionsexams[i].module.name+'</td> '+
               ' <td >'+this.planning.positionsexams[i].startH+'h-'+this.planning.positionsexams[i].endH+'h'+'</td> '+
                '<td>'+this.planning.positionsexams[i].prof+'</td>'+
                
              '</tr>'

            }
              

      }


      
    },
  },

  mounted() {
    console.log(this.planning.positionsexams);
   


     this.addCour();
     /* this.day1 = this.days[1]
      this.day2 = this.days[2]
      this.day3 = this.days[3]
      this.day4 = this.days[4]
      this.day5 = this.days[5]
      console.log(this.days)
    */
  },
};



</script>
