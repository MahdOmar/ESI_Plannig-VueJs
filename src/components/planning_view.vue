<template>
  <div class="planning m-4">
    <div >
      <div
        class="col-xs-auto col-sm-auto col-md-auto col-lg-auto"
        style="padding: 0px"
      >
      <h2 class="m-2 text-center">{{planning.name}}</h2>

        <div class="table-responsive">
          <table class="table text-center">
            <thead
              class="text-primary"
              style="background: #ffffff; border: 1px solid rgb(103, 128, 240)"
            >
              <tr
                id="times"
                class="collapse bg-primary"
                style="position: absolute; z-index: 3; display: hidden"
              >
                <div>
                  <td></td>
                  <td>
                    <h4 class="text-white">Sunday</h4>
                    <label class="form-check-label text-white">
                      <input
                        class="form-check-input"
                        id="check_box-0"
                        onclick="switch_day(0)"
                        type="checkbox"
                        checked
                      />
                      Work day
                    </label>
                    <div class="form-group row">
                      <label
                        for="example-time-input"
                        class="col-2 col-form-label text-white"
                        >Start:</label
                      >
                      <div class="col-10">
                        <input
                          onchange="update_empty(this,0)"
                          class="form-control"
                          type="time"
                          value="08:00"
                          id="time-empty-0"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h4 class="text-white">Monday</h4>
                    <label class="form-check-label text-white">
                      <input
                        class="form-check-input"
                        onclick="switch_day(1)"
                        id="check_box-1"
                        type="checkbox"
                        checked
                      />
                      Work day
                    </label>
                    <div class="form-group row">
                      <label
                        for="example-time-input"
                        class="col-2 col-form-label text-white"
                        >Start:</label
                      >
                      <div class="col-10">
                        <input
                          onchange="update_empty(this,1)"
                          class="form-control"
                          type="time"
                          value="08:00"
                          id="time-empty-1"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h4 class="text-white">Tuesday</h4>
                    <label class="form-check-label text-white">
                      <input
                        class="form-check-input"
                        onclick="switch_day(2)"
                        id="check_box-2"
                        type="checkbox"
                        checked
                      />
                      Work day
                    </label>
                    <div class="form-group row">
                      <label
                        for="example-time-input"
                        class="col-2 col-form-label text-white"
                        >Start:</label
                      >
                      <div class="col-10">
                        <input
                          onchange="update_empty(this,2)"
                          class="form-control"
                          type="time"
                          value="08:00"
                          id="time-empty-2"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h4 class="text-white">Wednesday</h4>
                    <label class="form-check-label text-white">
                      <input
                        class="form-check-input"
                        onclick="switch_day(3)"
                        id="check_box-3"
                        type="checkbox"
                        checked
                      />
                      Work day
                    </label>
                    <div class="form-group row">
                      <label
                        for="example-time-input"
                        class="col-2 col-form-label text-white"
                        >Start:</label
                      >
                      <div class="col-10">
                        <input
                          onchange="update_empty(this,3)"
                          class="form-control"
                          type="time"
                          value="08:00"
                          id="time-empty-3"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h4 class="text-white">Thursday</h4>
                    <label class="form-check-label text-white">
                      <input
                        class="form-check-input"
                        onclick="switch_day(4)"
                        id="check_box-4"
                        type="checkbox"
                        checked
                      />
                      Work day
                    </label>
                    <div class="form-group row">
                      <label
                        for="example-time-input"
                        class="col-2 col-form-label text-white"
                        >Start:</label
                      >
                      <div class="col-10">
                        <input
                          onchange="update_empty(this,4)"
                          class="form-control"
                          type="time"
                          value="08:00"
                          id="time-empty-4"
                        />
                      </div>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                </div>
              </tr>

              <tr style="z-index: 1">
                <th scope="col">Chronologie</th>
                <th scope="col">Dimanche</th>
                <th scope="col">Lundy</th>
                <th scope="col">Mardi</th>
                <th scope="col">Mercredi</th>
                <th scope="col">Jeudi</th>
              </tr>
            </thead>
            <tbody style="z-index: 1">
              <tr>
                <td class="vertical-time" id="vertical-time">
                  <div class="card border border-primary" style="height: 80px">
                    <div class="card-body">08:00 - 09:00</div>
                  </div>
                  <div class="card border border-primary" style="height: 80px">
                    <div class="card-body">09:00 - 10:00</div>
                  </div>
                  <div class="card border border-primary" style="height: 80px">
                    <div class="card-body">10:00 - 11:00</div>
                  </div>
                  <div class="card border border-primary" style="height: 80px">
                    <div class="card-body">11:00 - 12:00</div>
                  </div>
                  <div class="card border border-primary" style="height: 80px">
                    <div class="card-body">12:00 - 13:00</div>
                  </div>

                  <div class="card border border-primary" style="height: 80px">
                    <div class="card-body">13:00 - 14:00</div>
                  </div>
                  <div class="card border border-primary" style="height: 80px">
                    <div class="card-body">14:00 - 15:00</div>
                  </div>
                  <div class="card border border-primary" style="height: 80px">
                    <div class="card-body">15:00 - 16:00</div>
                  </div>
                  <div class="card border border-primary" style="height: 80px">
                    <div class="card-body">16:00 - 17:00</div>
                  </div>
                  <div class="card border border-primary" style="height: 80px">
                    <div class="card-body">17:00 - 18:00</div>
                  </div>
                </td>
                <td v-html="day1" ></td>
                <td v-html="day2" ></td>
                <td v-html="day3"></td>
                <td v-html="day4" ></td>
                <td v-html="day5" ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    planning: "auth/planning",
  }),

  data() {
    return {
      
      days: ["","","","","","",""],
     
      day1:'',
      day2:'',
      day3:'',
      day4:'',
      day5:'',
      content: null,
      content2: null,
      courses: this.planning,
    };
  },
  methods: {
    addCour() {
      for (let k = 0; k < 7; k++) {
      
      for (let i = 0; i < this.planning.days[k].length; i++) {
        
   //       console.log(" day "+k +" session "+this.planning[k][i].name+" module "+this.planning[k][i].module.name)
        if (i == 0) {   
          // console.log('day0 de '+i)
          var dif =
            this.planning.days[k][i].endH -
            this.planning.days[k][i].startH +
            Math.abs(
              this.planning.days[k][i].startMin - this.planning.days[k][i].endMin
            ) /60;
              var dif3 =
            this.planning.days[k][i].startH +
            (this.planning.days[k][i].startMin / 60) - 8;
            console.log(dif3)

          var hightemp = dif3 * 80
          console.log(hightemp)

          var hight = dif * 80;
          this.days[k] =
          ' <div class="bg-secondary"  style="height:' +
            hightemp +
            'px; "></div>' +
            '<div class="d-flex flex-column justify-content-between border border-primary" style="height:' +
            hight +
            'px "><div class="size m-2">' +
            this.planning.days[k][i].name +
            '</div><div class="size2">' +
            this.planning.days[k][i].prof + 
            '</div><div class="d-flex m-2 justify-content-end size2">'+this.planning.days[k][i].requirement+'</div></div>';
        } else {
          var dif1 =
           Math.abs( (this.planning.days[k][i].startH +
            this.planning.days[k][i].startMin / 60 )-
          
            (this.planning.days[k][i - 1].endH +
              this.planning.days[k][i - 1].endMin / 60));

          var dif2 =
            this.planning.days[k][i].endH -
            this.planning.days[k][i].startH +
            Math.abs(
              this.planning.days[k][i].startMin - this.planning.days[k][i].endMin
            ) /
              60;

          var hight = dif1 * 80;
          var hight2 = dif2 * 80;
            this.days[k]  = this.days[k] +
          ' <div class="bg-secondary"  style="height:' +
            hight +
            'px; "></div>' +
            '<div class="d-flex flex-column justify-content-between border border-primary" style="height:' +
            hight2 +
             'px "><div class="size m-2">' +
            this.planning.days[k][i].name +
            '</div><div class="size2">' +
             this.planning.days[k][i].prof +
            '</div><div  class="d-flex m-2 justify-content-end size2">'+this.planning.days[k][i].requirement+'</div></div>';
            
        }
        
      }
      }
    },
  },

  mounted() {
    console.log(this.planning);


      this.addCour();
      this.day1 = this.days[1]
      this.day2 = this.days[2]
      this.day3 = this.days[3]
      this.day4 = this.days[4]
      this.day5 = this.days[5]
      console.log(this.days)
    
  },
};
</script>
