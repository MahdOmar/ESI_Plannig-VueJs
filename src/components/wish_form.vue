<template>
    

<div class="container-fluid bg-custom">
        <div class="jumbotron p-2 bg-custom">
            <h1>Wish form</h1>
            <p>Here you can set or edit your prefered work days.</p>
        </div>
        <div class="container" >
            <div class="item d-none" id="select-warning">You did not select your prefered days yet.</div>
            <form action="/user/add_wish" method="POST">
                <div class="item p-1" style="margin:10px">
                    Prefered day 1:
                </div>
                <div class="form-check form-check-inline d-flex justify-content-around p-1" style="margin:10px">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day1" id="r-1-0" value="0">Sunday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day1" id="r-1-1" value="1">Monday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day1" id="r-1-2" value="2">Tuesday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day1" id="r-1-3" value="3">Wednesday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day1" id="r-1-4" value="4">Thursday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day1" id="r-1-5" value="5">Friday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day1" id="r-1-6" value="6">Saturday 
                    </label>
                </div>
                <div class="line" style="margin:10px"></div>
                <div class="item p-1" style="margin:10px">
                    Prefered day 2:
                </div>
                <div class="form-check form-check-inline d-flex justify-content-around p-1" style="margin:10px">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day2" id="r-2-0" value="0">Sunday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day2" id="r-2-1" value="1">Monday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day2" id="r-2-2" value="2">Tuesday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day2" id="r-2-3" value="3">Wednesday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day2" id="r-2-4" value="4">Thursday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day2" id="r-2-5" value="5">Friday 
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="day2" id="r-2-6" value="6">Saturday 
                    </label>
                </div>
                <button name="" id="" class="btn btn-primary float-right"  type="submit" style="margin:10px;">Save</button>
            </form>
        </div>
        
        

    </div>


</template>