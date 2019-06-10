//--------------------------
//==========================
//    ADD MONTHLY INCOME
//==========================
//--------------------------

$(".monthly-add-income").click(function() {
  $(".monthly-new-income-container").append(`
    <div class="formInput my-2">
        <div class="form-row">
            <div class="col-8">
                <label contenteditable="true" class="monthly-added-income-label">New Income</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="number" class="form-control monthly-added-income-input">
                </div>
            </div>
            <div class="col-4">
                <label>Frequency of Pay:</label>
                <div class="input-group mb-2">
                <select class="form-control monthly-added-income-freq">
                    <option class="weekly-freq">Weekly</option>
                    <option class="bi-weekly-freq" selected="selected">Bi-Weekly</option>
                    <option class="monthly-freq">Monthly</option>
                </select>
                    <button type="button" class="input-group-append btn delete-button">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `);
});

//--------------------------
//==========================
//   ADD ONE-TIME EXPENSE
//==========================
//--------------------------

$(".monthly-one-time-add-expense").click(function() {
  $(".monthly-one-time-expense-container").append(`
        <div class="formInput my-2">
            <div class="form-row">
                <div class="col-8">
                    <label contenteditable="true" class="monthly-added-one-time-expense-label">One-Time Expense</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        </div>
                        <input type="number" class="form-control monthly-added-one-time-expense-input">
                    </div>
                </div>
                <div class="col-4">
                    <label>Date of Payment:</label>
                    <div class="input-group mb-2">
                            <select class="form-control new-input-select-date">
                                <option value="0">Choose...</option>
                                <option value="1"><span class="monthly-title"></span> 1st</option>
                                <option value="2"><span class="monthly-title"></span> 2nd</option>
                                <option value="3"><span class="monthly-title"></span> 3rd</option>
                                <option value="4"><span class="monthly-title"></span> 4th</option>
                                <option value="5"><span class="monthly-title"></span> 5th</option>
                                <option value="6"><span class="monthly-title"></span> 6th</option>
                                <option value="7"><span class="monthly-title"></span> 7th</option>
                                <option value="8"><span class="monthly-title"></span> 8th</option>
                                <option value="9"><span class="monthly-title"></span> 9th</option>
                                <option value="10"><span class="monthly-title"></span> 10th</option>
                                <option value="11"><span class="monthly-title"></span> 11th</option>
                                <option value="12"><span class="monthly-title"></span> 12th</option>
                                <option value="13"><span class="monthly-title"></span> 13th</option>
                                <option value="14"><span class="monthly-title"></span> 14th</option>
                                <option value="15"><span class="monthly-title"></span> 15th</option>
                                <option value="16"><span class="monthly-title"></span> 16th</option>
                                <option value="17"><span class="monthly-title"></span> 17th</option>
                                <option value="18"><span class="monthly-title"></span> 18th</option>
                                <option value="19"><span class="monthly-title"></span> 19th</option>
                                <option value="20"><span class="monthly-title"></span> 20th</option>
                                <option value="21"><span class="monthly-title"></span> 21st</option>
                                <option value="22"><span class="monthly-title"></span> 22nd</option>
                                <option value="23"><span class="monthly-title"></span> 23rd</option>
                                <option value="24"><span class="monthly-title"></span> 24th</option>
                                <option value="25"><span class="monthly-title"></span> 25th</option>
                                <option value="26"><span class="monthly-title"></span> 26th</option>
                                <option value="27"><span class="monthly-title"></span> 27th</option>
                                <option value="28"><span class="monthly-title"></span> 28th</option>
                                <option value="29"><span class="monthly-title"></span> 29th</option>
                                <option value="30"><span class="monthly-title"></span> 30th</option>
                                <option value="31"><span class="monthly-title"></span> 31st</option>
                            </select>
                            <button type="button" class="input-group-append btn delete-button">
                                <i class="fas fa-times"></i>
                            </button>
                    </div>
                </div>
            </div>
        </div>
        `);
});

//============================
//     DELETE BUTTON LOGIC
//============================

$("body").delegate(".delete-button", "click", function(event) {
  event.preventDefault();
  $(this)
    .closest(".formInput")
    .remove();
});
