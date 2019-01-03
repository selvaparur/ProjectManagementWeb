(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Entities/AppSettings.ts":
/*!*****************************************!*\
  !*** ./src/app/Entities/AppSettings.ts ***!
  \*****************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    // public static ServiceBaseUrl = 'http://localhost:3758/v1';
    AppSettings.ServiceBaseUrl = 'http://dotnet:8010/v1';
    AppSettings.UsersBaseUrl = AppSettings.ServiceBaseUrl + '/users';
    AppSettings.ProjectsUrl = AppSettings.ServiceBaseUrl + '/projects';
    AppSettings.TasksUrl = AppSettings.ServiceBaseUrl + '/tasks';
    AppSettings.LoggingUrl = AppSettings.ServiceBaseUrl + '/loggings';
    AppSettings.IsoDateFormat = 'yyyy-MM-dd';
    AppSettings.EndDateFieldName = 'endDate';
    AppSettings.AlertDanger = 'danger';
    AppSettings.AlertDangerClass = 'alert alert-danger alert-dismissible';
    AppSettings.AlertSuccess = 'successs';
    AppSettings.AlertSuccessClass = 'alert alert-success alert-dismissible';
    AppSettings.GenericError = 'There was a problem in processing your request. Please try again later.';
    AppSettings.StartDateFieldName = 'startDate';
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/add-edit-projects/add-edit-projects.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/add-edit-projects/add-edit-projects.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".compstyle\r\n{\r\n    border: 1px transparent solid;    \r\n    width: 800px;\r\n    background-color: white;\r\n    margin: 3px 145px;\r\n    /* height: 300px; */\r\n    box-shadow: 0px -5px 12px 15px white;\r\n}\r\n\r\n.compstylechild{\r\n    /* border: 1px red solid; */\r\n    height: 30px;\r\n    background: linear-gradient(135deg, #6f42c1 0%, whitesmoke 100%);\r\n    text-align: center;\r\n    color: white;\r\n    border-radius: 5px;  \r\n    font-variant-caps: all-petite-caps;\r\n}\r\n\r\n.field_set{\r\n    border: #AD9AE9;\r\n    border-style: solid;\r\n    padding: 5px !important;\r\n    margin: 5px;\r\n    \r\n  }\r\n\r\n.splithr{\r\n    width: 654px;\r\n    margin-left: 3px;\r\n    border: 1px #6f42c1 dotted;\r\n  }\r\n\r\n#pedit{\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n  }\r\n\r\n.projedit{\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n  }\r\n\r\n.projsec\r\n  {\r\n    \r\n    background: linear-gradient(135deg, #AD9AE9 0%, aliceblue 100%); \r\n    border-radius: 3px;\r\n    border: 1px #6f42c1 solid;\r\n  }\r\n\r\n.countst{\r\n    border: 3px #6f42c1 solid;\r\n    border-radius: 13px;\r\n    padding: 3px 8px;\r\n    background-color: white;\r\n  }\r\n\r\n.mandmaindiv{\r\n   \r\n    margin-top: 15px;\r\n    height: 30px;\r\n    width: 480px;\r\n\r\n    -webkit-animation: MoveUpDown 1s linear infinite;\r\n\r\n            animation: MoveUpDown 1s linear infinite;\r\n  position: relative;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.arrow_box {\r\n\tposition: relative;\r\n\tbackground: linear-gradient(135deg, #AD9AE9 0%, whitesmoke 100%);\r\n    border: 1px solid #dc3545;\r\n    text-align: center;\r\n    margin-left: 27px;\r\n    color: #dc3545;\r\n    border-radius: 4px;\r\n}\r\n\r\n.arrow_box:after, .arrow_box:before {\r\n\tbottom: 100%;\r\n\tleft: 53%;\r\n\tborder: solid transparent;\r\n\tcontent: \" \";\r\n\theight: 0;\r\n\twidth: 0;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n}\r\n\r\n.arrow_box:before {\r\n\t/* border-color: rgba(194, 225, 245, 0); */\r\n\tborder-bottom-color: #AD9AE9;\r\n\tborder-width: 17px;\r\n\tmargin-left: -41px;\r\n}\r\n\r\n@-webkit-keyframes MoveUpDown {\r\n    10%, 50% {\r\n      bottom: 0;\r\n    }\r\n    50% {\r\n      bottom: 5px;\r\n    }\r\n  }\r\n\r\n@keyframes MoveUpDown {\r\n    10%, 50% {\r\n      bottom: 0;\r\n    }\r\n    50% {\r\n      bottom: 5px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/add-edit-projects/add-edit-projects.component.html":
/*!********************************************************************!*\
  !*** ./src/app/add-edit-projects/add-edit-projects.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"compstyle\">\n  <div class=\"compstylechild\"><b>Add Project</b></div>\n  <div>\n    <fieldset class=\"field_set\">\n      <legend class=\"legheading\" style=\"font-variant-caps: all-petite-caps; text-align: center\">Add Project Details</legend>\n      \n<form [formGroup]=\"projectform\">\n  <div class=\"form-group row\">\n<label for=\"proj\" class=\"col-sm-2 col-form-label \">Project:</label>\n  <div class=\"col-sm-10\">\n    <input type=\"input\" class=\"form-control\" formControlName=\"projectname\" id=\"projectname\"\n    name=\"projectname\" placeholder=\"Preoject Name\"  [ngClass]=\"{ 'is-invalid': submitted && f.projectname.errors }\" >\n\n    <div *ngIf=\"submitted && f.projectname.errors\" class=\"mandmaindiv\">\n        <div *ngIf=\"f.projectname.errors.required\" class=\"arrow_box\">Project Name is required</div>\n      </div>\n\n  </div>\n</div>\n\n<div class=\"form-group row\">\n    <div class=\"col-sm-2\"></div>    \n    <div class=\"col-sm-2\">\n            <div>\n              <input type=\"checkbox\" id=\"setstartandenddate\" name=\"setstartandenddate\" \n              formControlName=\"setstartandenddate\" style=\"border-color: #6f42c1;\"\n              (change)=\"changeDate($event)\" \n               checked=\"checked\">&nbsp;Set Start and End Date\n            </div>                \n          </div>  \n          <div class=\"col-sm-3\">\n              <input type=\"date\" class=\"form-control borderstyle\" name=\"startdate\" formControlName=\"startdate\" id=\"startdate\" />\n          </div>   \n          <div class=\"col-sm-3\">\n              <input type=\"date\" class=\"form-control borderstyle\" name=\"enddate\" formControlName=\"enddate\" />\n          </div>   \n          <div class=\"col-sm-2\"></div>\n          <div class=\"mandmaindiv\" id=\"datevalidate\" style=\"visibility: hidden;\">\n              <div class=\"arrow_box\">End date should be greater than start date or date fields may be empty</div>\n            </div>    \n</div>\n\n<div class=\"form-group row\">\n    <label for=\"lastname\" class=\"col-sm-2 col-form-label\">Priority:</label>\n      <div class=\"col-sm-10\">\n        \n        <div style=\"display: flex; color: #6f42c1\">\n          <span><strong>0</strong></span>\n          <input type=\"range\" class=\"form-control\" id=\"priority\" formControlName=\"priority\" name=\"priority\" min=\"0\" max=\"100\" value=\"0\"\n            (change)=\"onPriorityChange($event)\" step=\"1\"  style=\"width: 500px;\">&nbsp;<span><strong>{{priority}}</strong></span>\n          </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"empid\" class=\"col-sm-2 col-form-label\">Manager:</label>          \n          <div class=\"col-sm-7\">\n            <input type=\"input\" formControlName=\"manager\" name=\"manager\" class=\"form-control\" id=\"manager\" style=\"width: 450px !important\" disabled>\n          </div>\n          <div class=\"col-sm-1\">\n            <input type=\"button\" class=\"serachbuton\" data-toggle=\"modal\" data-target=\"#userlisting\">            \n          </div>\n          <div class=\"col-sm-2\"></div>\n          <input type=\"hidden\" id=\"userId\" name=\"userId\" formControlName=\"userId\">\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5\"></div>\n  <div class=\"col-sm-2\">\n  <button type=\"button\" id=\"addeditprobut\" class=\"form-control btn btn-success btn-sm successbutton\" (click)=\"onsubmit()\"><span id=\"addeditpro\">{{addtitle}}</span> </button>\n  <button type=\"button\" style=\"display: none\" id=\"dummybut\" name=\"dummybut\" data-toggle=\"modal\" data-target=\"#saveconfr\">dummy</button>\n\n</div>\n  <div class=\"col-sm-2\">\n  <button type=\"button\" class=\"form-control btn btn-primary btn-sm resetbutton\"  data-toggle=\"modal\" data-target=\"#modal1\">Reset</button>  \n</div>\n<div class=\"col-sm-3\"></div>\n\n        </div>\n</form>\n\n    </fieldset>\n  </div>\n<div></div>\n  <div>\n    <fieldset class=\"field_set\">\n      <legend style=\"font-variant-caps: all-petite-caps; text-align: center\">View Project Details</legend>\n      \n<form style=\"margin: 8px;\">\n  <div class=\"form-group row\">\n      <div class=\"col-sm-12\">\n          <input type=\"text\" name=\"searchproject\" [(ngModel)]=\"searchproject\" style=\"width: 630px !important\" placeholder=\"Search...\"> \n      </div>\n  </div>\n\n<div class=\"form-group row\">\n    \n  <div class=\"col-sm-2\"><div style=\"text-align: center\">Sort By:</div></div>\n<div class=\"col-sm-2\"><button type=\"submit\" class=\"form-control btn btn-success btn-sm successbutton\"  (click)=\"handleSortBy('startdate')\">Start Date</button></div>\n<div class=\"col-sm-2\"><button type=\"submit\" class=\"form-control btn btn-success btn-sm successbutton\" (click)=\"handleSortBy('enddate')\">End Date</button></div>  \n<div class=\"col-sm-2\"><button type=\"submit\" class=\"form-control btn btn-success btn-sm successbutton\" (click)=\"handleSortBy('priority')\">Priority</button></div>\n<div class=\"col-sm-2\"><button type=\"submit\" class=\"form-control btn btn-success btn-sm successbutton\" (click)=\"handleSortBy('completed')\">Completed</button></div>\n</div>  \n\n<div class=\"form-group row\">\n  \n  <div *ngFor=\"let ps of projectsmodel | FilterPipe:searchproject\" class=\"col-sm-12\">\n      <div id=\"pedit\">\n         <div class=\"projsec\" style=\"width: 370px;padding-left: 5px;\">\n           <p>Project:</p>\n           \n           <div>\n            <div class=\"projedit\">\n              <div>No of Tasks:\n                <span class=\"countst\"><b>{{ps.NumberOfTasks}}</b></span>\n              </div>\n              <div style=\"width: 51px;\"></div>\n              <div></div>\n              <div style=\"width: 150px;\">Completed:\n                  <span class=\"countst\"><b>{{ps.Completed}}</b></span>\n              </div>\n            </div>\n<p></p>\n            <div class=\"projedit\">\n                <div>Start Date:\n                  <span>{{ps.StartDate  | date:'dd-MM-yyyy'}}</span>\n                </div>\n                <div style=\"width: 12px;\"></div>\n              <div></div>\n                <div>End Date\n                    <span>{{ps.EndDate  | date:'dd-MM-yyyy'}}</span>\n                </div>\n              </div>\n\n           </div>\n         </div>\n         <div style=\"width: 20px;\"></div>\n         <div class=\"projsec\" style=\"width: 84px; text-align: center\">Priority   \n           <br/>     <br/>     \n        <p><span class=\"countst\"><b>{{ps.Priority}}</b></span></p>            \n      </div>       \n      <div style=\"width: 28px;\"></div>\n    <div>\n         <button type=\"submit\" class=\"form-control btn btn-success btn-sm successbutton\" style=\"margin-bottom: 30px\" (click) = \"editproject(ps)\">Update</button>\n         \n        <button type=\"submit\" class=\"form-control btn btn-success btn-sm successbutton\" data-toggle=\"modal\" data-target=\"#suspendconf\">Suspend</button>\n        </div>\n        \n        </div>\n\n        <hr class=\"splithr\"/>\n\n  </div>\n\n</div>\n\n\n\n</form>\n\n    </fieldset>\n  </div>\n\n</div>\n\n<div>\n  <app-warning modalId=\"modal1\" (valuechangee)=\"resetconfirm($event)\">\n    <div head>  </div>\n    <div body> Are you sure want to <span style=\"color:red;text-shadow: 5px 0px 10px floralwhite;\">reset</span> values ???</div>\n    <div footer></div>\n  </app-warning>\n</div>\n\n<div>\n  <app-userlisting listingmodalId=\"userlisting\" [userlistings]=\"userlists\" (selectedvalue) = \"selectedmanagers($event)\">\n    <div head>Select Manager</div>\n  </app-userlisting>\n</div>\n\n<div id=\"saveconfi\">\n  <app-confirmation confirmid=\"saveconfr\">\n    <div head>Confirmation</div>\n    <div body>Project detail has been saved successfully </div>\n  </app-confirmation>\n</div>\n\n<div id=\"susp\">\n    <app-confirmation confirmid=\"suspendconf\">\n      <div head>Confirmation</div>\n      <div body>Project detail suspended successfully </div>\n    </app-confirmation>\n  </div>\n\n<div>\n    <app-footer></app-footer>\n  </div>\n"

/***/ }),

/***/ "./src/app/add-edit-projects/add-edit-projects.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/add-edit-projects/add-edit-projects.component.ts ***!
  \******************************************************************/
/*! exports provided: AddEditProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditProjectsComponent", function() { return AddEditProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Entities/AppSettings */ "./src/app/Entities/AppSettings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddEditProjectsComponent = /** @class */ (function () {
    function AddEditProjectsComponent(fb, _ProjectService, _datePipe) {
        this.fb = fb;
        this._ProjectService = _ProjectService;
        this._datePipe = _datePipe;
        this.userlists = [];
        this.allowDateSelection = false;
        this.projectsmodel = [];
        this.submitted = false;
    }
    AddEditProjectsComponent.prototype.selectedmanagers = function (values) {
        if (values.length > 0) {
            console.log(values.split('-')[0] + ' ' + values.split('-')[1] + ' ' + values.split('-')[2] + " " + values.split('-')[3]);
            this.selecteduserId = values.split('-')[0];
            this.projectform.patchValue({
                manager: values.split('-')[2] + " " + values.split('-')[3],
                userId: this.selecteduserId
            });
        }
        console.log('selected manager id ' + this.projectform.value.userId);
    };
    AddEditProjectsComponent.prototype.resetconfirm = function (val) {
        console.log('reset confirm ' + val);
        this.projectform.reset();
        this.resetform();
        this.priority = 0;
    };
    AddEditProjectsComponent.prototype.changeDate = function (e) {
        this.allowDateSelection = !(e.target.checked);
        this.changeDateControlState();
    };
    AddEditProjectsComponent.prototype.changeDateControlState = function () {
        if (!this.allowDateSelection) {
            this.projectform.controls['startdate'].enable();
            this.projectform.controls['enddate'].enable();
        }
        else {
            this.projectform.controls['startdate'].disable();
            this.projectform.controls['enddate'].disable();
        }
    };
    AddEditProjectsComponent.prototype.onPriorityChange = function (e) {
        this.priority = e.target.value;
    };
    AddEditProjectsComponent.prototype.ngOnInit = function () {
        this.projectform = this.fb.group({
            projectid: [0],
            projectname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            setstartandenddate: [true],
            startdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', enabled: true }),
            enddate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', enabled: true }),
            priority: [0],
            manager: [''],
            userId: this.selecteduserId,
            numberoftasks: [''],
            completed: ['']
        });
        this.addtitle = 'Add';
        //document.getElementById('setstartandenddate').check
        this.loadManagaers();
        // bind project details
        this.getexistingprojects();
    };
    AddEditProjectsComponent.prototype.loadManagaers = function () {
        var _this = this;
        this._ProjectService.getAllManagers().subscribe(function (data) {
            _this.userlists = data;
        });
    };
    Object.defineProperty(AddEditProjectsComponent.prototype, "f", {
        get: function () { return this.projectform.controls; },
        enumerable: true,
        configurable: true
    });
    AddEditProjectsComponent.prototype.onsubmit = function () {
        var _this = this;
        this.submitted = true;
        // validate start & end date
        var sd = Date.parse(this.projectform.value.startdate);
        var ed = Date.parse(this.projectform.value.enddate);
        if (!isNaN(sd) && !isNaN(ed)) {
            if (ed <= sd || (isNaN(sd) || isNaN(ed))) {
                console.log('date validation fails');
                document.getElementById('datevalidate').style.marginLeft = '152px';
                document.getElementById('datevalidate').style.visibility = 'visible';
                return;
            }
        }
        // if(isNaN(sd) || isNaN(ed))
        //   {
        //     console.log('start & end date are coming as undefined');
        //     this.projectform.patchValue({
        //       startdate : new Date('0001/01/01'),
        //       enddate : new Date('dd-MM-yyyy')
        //     });
        //     this.projectform.value.startdate
        //   }
        if (this.projectform.valid) {
            document.getElementById('datevalidate').style.visibility = 'hidden';
        }
        if (this.projectform.invalid) {
            return;
        }
        if (this.addtitle == 'Add') {
            console.log('Add Mode');
            console.log(this.projectform.value);
            console.log(' projectname  ' + this.projectform.value.projectname
                + ' startdate ' + this.projectform.value.startdate + ' enddate ' + this.projectform.value.enddate + ' priority '
                + this.projectform.value.priority + ' manager ' + this.projectform.value.manager + ' managerid ' + this.projectform.value.userId);
            // call service here to save the data into database.
            this._ProjectService.createOrUpdateProject(this.projectform.value)
                .subscribe(function (data) {
                _this.resetform();
                // bind project details
                _this.getexistingprojects();
                var eledumm = document.getElementById('dummybut').click();
            }, function (erorr) {
                console.error('error on project save ' + erorr);
            });
        }
        else {
            console.log('Edit Mode');
            console.log(this.projectform.value);
            this._ProjectService.createOrUpdateProject(this.projectform.value)
                .subscribe(function (data) {
                _this.resetform();
                // bind project details
                _this.getexistingprojects();
                var eledumm = document.getElementById('dummybut').click();
                _this.addtitle = 'Add';
                document.getElementById('addeditpro').classList.remove('blink_me');
            }, function (erorr) {
                console.error('error on project save ' + erorr);
            });
        }
    };
    AddEditProjectsComponent.prototype.resetform = function () {
        this.submitted = false;
        this.projectform.reset();
        this.addtitle = 'Add';
        this.priority = 0;
        this.projectform.controls['priority'].setValue(this.priority);
        document.getElementById('addeditpro').classList.remove('blink_me');
        this.projectform.controls['setstartandenddate'].setValue(true);
    };
    AddEditProjectsComponent.prototype.getexistingprojects = function () {
        var _this = this;
        this._ProjectService.getAll().subscribe(function (data) {
            _this.projectsmodel = data;
        });
    };
    AddEditProjectsComponent.prototype.handleSortBy = function (value) {
        var _this = this;
        this.sortBy = value;
        switch (this.sortBy) {
            case 'startDate':
                this.projectsmodel = this.projectsmodel.sort(function (a, b) {
                    return _this.getTime(a.StartDate) - _this.getTime(b.StartDate);
                });
                break;
            case 'endDate':
                this.projectsmodel = this.projectsmodel.sort(function (a, b) {
                    return _this.getTime(a.EndDate) - _this.getTime(b.EndDate);
                });
                break;
            case 'completed':
                this.projectsmodel = this.projectsmodel.sort(function (a, b) { return a.Completed.localeCompare(b.Completed); });
                break;
            case 'priority':
                this.projectsmodel = this.projectsmodel.sort(function (a, b) { return a.Priority.toString().localeCompare(b.Priority.toString()); });
                break;
            default:
                this.projectsmodel = this.projectsmodel.sort(function (a, b) { return a.ProjectName.localeCompare(b.ProjectName); });
                break;
        }
    };
    AddEditProjectsComponent.prototype.getTime = function (date) {
        return date != null ? new Date(date).getTime() : 0;
    };
    AddEditProjectsComponent.prototype.setStartAndEndDate = function (start, end) {
        var formattedTodayDate = this._datePipe.transform(start, _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IsoDateFormat).toString();
        var formattedTomorrowDate = this._datePipe.transform(end, _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IsoDateFormat).toString();
        this.projectform.patchValue({ startdate: formattedTodayDate, enddate: formattedTomorrowDate });
    };
    AddEditProjectsComponent.prototype.editproject = function (project) {
        console.log('Edit ' + project.ProjectId + ' projectid ' + project.ProjectId + ' projectname  ' + project.ProjectName
            + ' ' + project.StartDate + ' ' + project.EndDate + ' Priority ' + project.Priority + ' manager ' + project.Manager);
        this.projectform.patchValue({
            projectid: project.ProjectId,
            projectname: project.ProjectName,
            startdate: project.StartDate,
            enddate: project.EndDate,
            priority: project.Priority,
            manager: project.Manager
        });
        this.addtitle = 'Update';
        document.getElementById('addeditpro').classList.add('blink_me');
        this.priority = project.Priority;
        this.setStartAndEndDate(project.StartDate, project.EndDate);
        this.changeDateControlState();
    };
    AddEditProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-projects',
            template: __webpack_require__(/*! ./add-edit-projects.component.html */ "./src/app/add-edit-projects/add-edit-projects.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-projects.component.css */ "./src/app/add-edit-projects/add-edit-projects.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], AddEditProjectsComponent);
    return AddEditProjectsComponent;
}());



/***/ }),

/***/ "./src/app/add-edit-users/add-edit-users.component.css":
/*!*************************************************************!*\
  !*** ./src/app/add-edit-users/add-edit-users.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".compstyle\r\n{\r\n    border: 1px transparent solid;    \r\n    width: 800px;\r\n    background-color: white;\r\n    margin: 3px 145px;\r\n    /* height: 300px; */\r\n    box-shadow: 0px -5px 12px 15px white;\r\n}\r\n\r\n.compstylechild{\r\n    /* border: 1px red solid; */\r\n    height: 30px;\r\n    background: linear-gradient(135deg, #6f42c1 0%, whitesmoke 100%);\r\n    text-align: center;\r\n    color: white;\r\n    border-radius: 5px;  \r\n    font-variant-caps: all-petite-caps;\r\n}\r\n\r\n.field_set{\r\n    border: #AD9AE9;\r\n    border-style: solid;\r\n    padding: 5px !important;\r\n    margin: 5px;\r\n    font-variant-caps: all-petite-caps;\r\n  }\r\n\r\n.splithr{\r\n    width: 654px;\r\n    margin-left: 3px;\r\n    border: 1px #6f42c1 dotted;\r\n  }\r\n\r\n.mand{\r\n    border: 3px black solid;\r\n    width: 153px;\r\n    background-color: black;\r\n    height: 22px;\r\n    border-right: double;\r\n    border-radius: 2px;\r\n}\r\n\r\n.mandalert\r\n{\r\n    display: flex;            \r\n}\r\n\r\n.manddisp{\r\n    background-color: #AD9AE9;\r\n    border: 1px whitesmoke solid;\r\n}\r\n\r\n.arrow-up {\r\n    width: 0; \r\n    height: 0; \r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    \r\n    border-bottom: 5px solid black;\r\n  }\r\n\r\n.mandmaindiv{\r\n   \r\n    margin-top: 15px;\r\n    height: 30px;\r\n    width: 480px;\r\n\r\n    -webkit-animation: MoveUpDown 1s linear infinite;\r\n\r\n            animation: MoveUpDown 1s linear infinite;\r\n  position: relative;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.arrow_box {\r\n\tposition: relative;\r\n\tbackground: linear-gradient(135deg, #AD9AE9 0%, whitesmoke 100%);\r\n    border: 1px solid #dc3545;\r\n    text-align: center;\r\n    margin-left: 27px;\r\n    color: #dc3545;\r\n    border-radius: 4px;\r\n}\r\n\r\n.arrow_box:after, .arrow_box:before {\r\n\tbottom: 100%;\r\n\tleft: 53%;\r\n\tborder: solid transparent;\r\n\tcontent: \" \";\r\n\theight: 0;\r\n\twidth: 0;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n}\r\n\r\n.arrow_box:before {\r\n\t/* border-color: rgba(194, 225, 245, 0); */\r\n\tborder-bottom-color: #AD9AE9;\r\n\tborder-width: 17px;\r\n\tmargin-left: -41px;\r\n}\r\n\r\n@-webkit-keyframes MoveUpDown {\r\n    10%, 50% {\r\n      bottom: 0;\r\n    }\r\n    50% {\r\n      bottom: 5px;\r\n    }\r\n  }\r\n\r\n@keyframes MoveUpDown {\r\n    10%, 50% {\r\n      bottom: 0;\r\n    }\r\n    50% {\r\n      bottom: 5px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/add-edit-users/add-edit-users.component.html":
/*!**************************************************************!*\
  !*** ./src/app/add-edit-users/add-edit-users.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"compstyle\">\n  <div class=\"compstylechild\"><b>Add User</b></div>\n  <div>\n    <fieldset class=\"field_set\">\n      <legend style=\"font-variant-caps: all-petite-caps;text-align: center\">Add User Details</legend>\n      \n<form [formGroup]=\"userform\">\n  <div class=\"form-group row\">\n<label for=\"firstname\" class=\"col-sm-2 col-form-label\">First Name:</label>\n  <div class=\"col-sm-10\">\n    <input type=\"input\" class=\"form-control\" id=\"firstname\"\n     name=\"firstname\" formControlName=\"firstname\" placeholder=\"First Name\"\n     [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\" required>\n\n    \n     <div *ngIf=\"submitted && f.firstname.errors\">\n        <div *ngIf=\"f.firstname.errors.required\" class=\"mandmaindiv\">\n\n          \n            <div class=\"arrow_box\"> First Name is required\n            </div>\n          \n\n        </div>\n      </div>\n    \n  </div>\n</div>\n\n<div class=\"form-group row\">\n    <label for=\"lastname\" class=\"col-sm-2 col-form-label\">Last Name:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"input\" class=\"form-control\" id=\"lastname\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.lastname.errors }\" formControlName=\"lastname\" placeholder=\"Last Name\">\n\n        <div *ngIf=\"submitted && f.lastname.errors\" class=\"mandmaindiv\">\n            <div *ngIf=\"f.lastname.errors.required\" class=\"arrow_box\">Last Name is required</div>\n          </div>\n\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"empid\" class=\"col-sm-2 col-form-label\">Employee ID:</label>\n          <div class=\"col-sm-10\">\n            <input type=\"number\"  class=\"form-control\" name=\"employeeid\" \n            [ngClass]=\"{ 'is-invalid': submitted && f.employeeid.errors }\" formControlName=\"employeeid\" id=\"employeeid\" placeholder=\"Employee ID\">\n\n            <div *ngIf=\"submitted && f.employeeid.errors\" class=\"mandmaindiv\">\n                <div *ngIf=\"f.employeeid.errors.required\"  class=\"arrow_box\">Employee Id is required and it should be greater than 0</div>\n              </div>\n\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5\"></div>\n  <div class=\"col-sm-2\">\n  <button type=\"button\"  (click)=\"onsubmit()\" id=\"addsavebut\" class=\"form-control btn btn-success btn-sm successbutton\"><span id=\"addsave\">{{addtitle}}</span> </button>\n  <button type=\"button\" style=\"display: none\" id=\"dummybut\" name=\"dummybut\"  data-toggle=\"modal\" data-target=\"#succsconf\">dummy</button>\n</div>\n  <div class=\"col-sm-2\">\n  <button type=\"button\" class=\"form-control btn btn-primary btn-sm resetbutton\" data-toggle=\"modal\" data-target=\"#restconf\">Reset</button>    \n</div>\n<div class=\"col-sm-3\"></div>\n\n        </div>\n</form>\n\n    </fieldset>\n  </div>\n<div></div>\n  <div>\n    <fieldset class=\"field_set\">\n      <legend style=\"font-variant-caps: all-petite-caps;text-align: center\">View User Details</legend>\n      \n<form style=\"margin: 8px;\">\n<div class=\"form-group row\">\n<div class=\"col-sm-5\">\n  <input type=\"text\" name=\"searchtext\" [(ngModel)]=\"searchtext\" placeholder=\"Search...\"> \n</div><span  style=\"margin-top:13px\">Sort:</span>\n<div class=\"col-sm-2\">\n<button type=\"button\" class=\"form-control btn btn-success btn-sm successbutton\" style=\"margin-top:9px\"  (click)=\"handleSortBy('firstname')\">First Name</button></div>\n<div class=\"col-sm-2\"><button type=\"button\" class=\"form-control btn btn-success btn-sm successbutton\" style=\"margin-top:9px\" (click)=\"handleSortBy('lastname')\">Last Name</button></div>  \n<div class=\"col-sm-1\"><button type=\"button\" class=\"form-control btn btn-success btn-sm successbutton\" style=\"margin-top:9px\" (click)=\"handleSortBy('employeeId')\">Id</button>\n</div>\n<div class=\"col-sm-2\"></div>\n</div>\n<hr class=\"splithr\"/>\n\n<div *ngFor=\"let ulist of userformlist | FilterPipe : searchtext\">\n<div class=\"form-group row\">\n  <div class=\"col-sm-8\">\n      <input type=\"input\" class=\"form-control\" id=\"firstname\" value=\"{{ulist.FirstName}}\" name=\"firstname\" disabled>\n    </div>\n    <div class=\"col-sm-2\">\n        <button type=\"button\" class=\"form-control btn btn-success btn-sm successbutton\" (click)=\"onedit(ulist)\">Edit</button>\n    </div>\n    <div class=\"col-sm-2\"></div>\n</div>\n\n<div class=\"form-group row\">\n  <div class=\"col-sm-8\">\n      <input type=\"input\" value=\"{{ulist.LastName}}\" class=\"form-control\" id=\"editln\" disabled>\n    </div>\n    <div class=\"col-sm-2\">\n        <button type=\"button\" class=\"form-control btn btn-success btn-sm resetbutton\" (click)=\"delrec(ulist)\" data-toggle=\"modal\" data-target=\"#del\">Delete</button>\n        <button id=\"deldummy\" name=\"deldummy\" style=\"display: none\" type=\"button\" data-toggle=\"modal\" data-target=\"#delconf\">dumdelete</button>\n    </div>\n    <div class=\"col-sm-2\"></div>\n</div>\n\n<div class=\"form-group row\">\n  <div class=\"col-sm-8\">\n      <input type=\"input\" value=\"{{ulist.EmployeeId}}\" class=\"form-control\" id=\"editempid\" disabled>\n    </div>      \n    <div class=\"col-sm-4\"></div>\n</div>\n\n<div class=\"form-group row\" style=\"display: none\">\n    <div class=\"col-sm-8\">\n        <input type=\"input\" value=\"{{ulist.UserId}}\" class=\"form-control\" id=\"editempid\" disabled>\n      </div>      \n      <div class=\"col-sm-4\"></div>\n  </div>\n\n<hr class=\"splithr\"/>\n</div>\n\n</form>\n\n    </fieldset>\n  </div>\n\n</div>\n\n<div id=\"deleteconf\">\n  <app-warning modalId=\"del\" (valuechangee)=\"deleterec($event)\">\n    <div body>Are you sure want to <span style=\"color:red;text-shadow: 5px 0px 10px floralwhite;\">delete</span> the record ???</div>\n  </app-warning>\n</div>\n\n<div id=\"resetconf\">\n    <app-warning modalId=\"restconf\" (valuechangee)=\"resetformconf($event)\">\n      <div body>Are you sure want to <span style=\"color:red;text-shadow: 5px 0px 10px floralwhite;\">reset</span>   the values ???</div>\n    </app-warning>\n  </div>\n\n<div id=\"addconfirm\">\n  <app-confirmation confirmid=\"succsconf\">\n    <div head>Confirmation</div>\n    <div body>User has been added successfully</div>\n  </app-confirmation>\n</div>\n\n<div id=\"deleteconfirm\">\n    <app-confirmation confirmid=\"delconf\">\n      <div head>Confirmation</div>\n      <div body>User has been deleted successfully</div>\n    </app-confirmation>\n  </div>\n\n<div>\n    <app-footer></app-footer>\n  </div>"

/***/ }),

/***/ "./src/app/add-edit-users/add-edit-users.component.ts":
/*!************************************************************!*\
  !*** ./src/app/add-edit-users/add-edit-users.component.ts ***!
  \************************************************************/
/*! exports provided: AddEditUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditUsersComponent", function() { return AddEditUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEditUsersComponent = /** @class */ (function () {
    function AddEditUsersComponent(formbuild, _userservice, router) {
        this.formbuild = formbuild;
        this._userservice = _userservice;
        this.router = router;
        this.userformlist = [];
        this.submitted = false;
        this.addtitle = 'Add';
    }
    AddEditUsersComponent.prototype.ngOnInit = function () {
        this.userform = this.formbuild.group({
            userid: [0],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            employeeid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
        });
        this.getAllUsers();
    };
    AddEditUsersComponent.prototype.onsubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userform.invalid) {
            return;
        }
        // Call service for save
        if (this.addtitle == 'Add') {
            console.log('add');
            console.log(this.userform.value);
            this._userservice.createOrUpdateUser(this.userform.value)
                .subscribe(function (data) {
                _this.userform.reset();
                _this.getAllUsers();
                document.getElementById('dummybut').click();
            }, function (exception) {
                console.error('add user failed!!!' + exception.message);
                console.error('add user failed!!!' + exception.error);
            });
        }
        else {
            console.log('update');
            console.log(this.userform.value);
            this._userservice.createOrUpdateUser(this.userform.value)
                .subscribe(function (data) {
                _this.userform.reset();
                _this.getAllUsers();
                _this.addtitle = 'Add';
                document.getElementById('addsave').classList.remove('blink_me');
                document.getElementById('dummybut').click();
            }, function (exception) {
                console.error('update user failed!!!');
            });
        }
        //call service to get record from db
        this.submitted = false;
    };
    AddEditUsersComponent.prototype.getAllUsers = function () {
        var _this = this;
        console.log('get users called');
        this._userservice.getUsers().subscribe(function (data) {
            console.log('get all user output' + data);
            _this.userformlist = data;
        });
    };
    Object.defineProperty(AddEditUsersComponent.prototype, "f", {
        get: function () { return this.userform.controls; },
        enumerable: true,
        configurable: true
    });
    AddEditUsersComponent.prototype.onedit = function (userlist) {
        console.log(userlist.UserId + ' ' + userlist.FirstName);
        this.userform.patchValue({
            userid: userlist.UserId,
            firstname: userlist.FirstName,
            lastname: userlist.LastName,
            employeeid: userlist.EmployeeId
        });
        this.addtitle = 'Update';
        document.getElementById('addsave').classList.add('blink_me');
    };
    AddEditUsersComponent.prototype.deleterec = function (res) {
        var _this = this;
        if (res == 'yes') {
            console.log(this.deleteuserid + ' has been deleted');
            // call service to delete the record in db
            console.log('user id to delete ' + this.deleteuserid);
            if (this.deleteuserid > 0) {
                this._userservice.delete(this.deleteuserid).subscribe(function (response) {
                    _this.getAllUsers();
                });
            }
            // get updated value from db.
        }
        document.getElementById('deldummy').click();
    };
    AddEditUsersComponent.prototype.delrec = function (usr) {
        this.deleteuserid = usr.UserId;
    };
    AddEditUsersComponent.prototype.resetformconf = function (rst) {
        if (rst == 'yes') {
            console.log('reset form value call');
            this.resetformvalues();
            this.submitted = false;
        }
    };
    AddEditUsersComponent.prototype.resetformvalues = function () {
        this.userform.patchValue({
            userid: 0,
            firstname: '',
            lastname: '',
            employeeid: null
        });
        this.addtitle = 'Add';
    };
    AddEditUsersComponent.prototype.handleSortBy = function (value) {
        this.sortBy = value;
        switch (this.sortBy) {
            case 'lastname':
                this.userformlist = this.userformlist.sort(function (a, b) { return a.LastName.localeCompare(b.LastName); });
                break;
            case 'employeeId':
                this.userformlist = this.userformlist.sort(function (a, b) { return a.EmployeeId.toLocaleString().localeCompare(b.EmployeeId.toLocaleString()); });
                break;
            default:
                this.userformlist = this.userformlist.sort(function (a, b) { return a.FirstName.localeCompare(b.FirstName); });
                break;
        }
    };
    AddEditUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-users',
            template: __webpack_require__(/*! ./add-edit-users.component.html */ "./src/app/add-edit-users/add-edit-users.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-users.component.css */ "./src/app/add-edit-users/add-edit-users.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddEditUsersComponent);
    return AddEditUsersComponent;
}());



/***/ }),

/***/ "./src/app/add-tasks/add-tasks.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-tasks/add-tasks.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".compstyle\r\n{\r\n    border: 1px transparent solid;    \r\n    width: 800px;\r\n    background-color: white;\r\n    margin: 3px 145px;\r\n    /* height: 300px; */\r\n    box-shadow: 0px -5px 12px 15px white;\r\n}\r\n\r\n.compstylechild{\r\n    /* border: 1px red solid; */\r\n    height: 30px;\r\n    background: linear-gradient(135deg, #6f42c1 0%, whitesmoke 100%);\r\n    text-align: center;\r\n    color: white;\r\n    border-radius: 5px;  \r\n    font-variant-caps: all-petite-caps;\r\n}\r\n\r\n.field_set{\r\n    border: #AD9AE9;\r\n    border-style: solid;\r\n    padding: 5px !important;\r\n    margin: 5px;    \r\n  }\r\n\r\n.splithr{\r\n    width: 654px;\r\n    margin-left: 3px;\r\n    border: 1px #6f42c1 dotted;\r\n  }\r\n\r\n#pedit{\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n  }\r\n\r\n.projedit{\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n  }\r\n\r\n.projsec\r\n  {\r\n    \r\n    background: linear-gradient(135deg, aliceblue 0%, aliceblue 100%); \r\n    border-radius: 3px;\r\n    border: 1px #6f42c1 solid;\r\n  }\r\n\r\n.countst{\r\n    border: 3px #6f42c1 solid;\r\n    border-radius: 13px;\r\n    padding: 3px 8px;\r\n  }\r\n\r\n.mandmaindiv{\r\n   \r\n    margin-top: 15px;\r\n    height: 30px;\r\n    width: 480px;\r\n\r\n    -webkit-animation: MoveUpDown 1s linear infinite;\r\n\r\n            animation: MoveUpDown 1s linear infinite;\r\n  position: relative;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.arrow_box {\r\n\tposition: relative;\r\n\tbackground: linear-gradient(135deg, #AD9AE9 0%, whitesmoke 100%);\r\n    border: 1px solid #dc3545;\r\n    text-align: center;\r\n    margin-left: 27px;\r\n    color: #dc3545;\r\n    border-radius: 4px;\r\n}\r\n\r\n.arrow_box:after, .arrow_box:before {\r\n\tbottom: 100%;\r\n\tleft: 53%;\r\n\tborder: solid transparent;\r\n\tcontent: \" \";\r\n\theight: 0;\r\n\twidth: 0;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n}\r\n\r\n.arrow_box:before {\r\n\t/* border-color: rgba(194, 225, 245, 0); */\r\n\tborder-bottom-color: #AD9AE9;\r\n\tborder-width: 17px;\r\n\tmargin-left: -41px;\r\n}\r\n\r\n@-webkit-keyframes MoveUpDown {\r\n    10%, 50% {\r\n      bottom: 0;\r\n    }\r\n    50% {\r\n      bottom: 5px;\r\n    }\r\n  }\r\n\r\n@keyframes MoveUpDown {\r\n    10%, 50% {\r\n      bottom: 0;\r\n    }\r\n    50% {\r\n      bottom: 5px;\r\n    }\r\n  }\r\n\r\n  "

/***/ }),

/***/ "./src/app/add-tasks/add-tasks.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-tasks/add-tasks.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"compstyle\">\n  <div class=\"compstylechild\"><b>Add Task</b></div>\n  <div>\n    <fieldset class=\"field_set\">\n      <legend style=\"font-variant-caps: all-petite-caps;text-align: center\">Add Task Details</legend>\n      \n<form [formGroup]=\"taskform\">\n \n  <div class=\"form-group row\">\n      <label for=\"proid\" class=\"col-sm-2 col-form-label\">Project:</label>          \n        <div class=\"col-sm-7\">\n          <input type=\"input\" class=\"form-control\" formControlName=\"projectname\" \n          name=\"projectname\" id=\"projectname\" style=\"width: 450px !important\" disabled>\n          <div *ngIf=\"submitted && f.projectname.errors\" class=\"mandmaindiv\">\n              <div *ngIf=\"f.projectname.errors.required\" class=\"arrow_box\">Project Name is required</div>\n            </div>\n        </div>\n        <div class=\"col-sm-1\">\n          <input type=\"button\" class=\"serachbuton\" data-toggle=\"modal\" data-target=\"#projectpop\">\n        </div>\n        <div class=\"col-sm-2\"></div>\n        <input type=\"hidden\" name=\"projectId\" id=\"projectid\" formControlName=\"projectid\">\n      </div>\n\n      <div class=\"form-group row\">\n          <label for=\"protask\" class=\"col-sm-2 col-form-label\">Task:</label>          \n            <div class=\"col-sm-10\">\n              <input type=\"input\" class=\"form-control\" id=\"taskname\" formControlName=\"taskname\" \n              style=\"width: 515px !important\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.taskname.errors }\">\n\n              <div *ngIf=\"submitted && f.taskname.errors\" class=\"mandmaindiv\">\n                  <div *ngIf=\"f.taskname.errors.required\" class=\"arrow_box\">Task Name is required</div>\n                </div>\n                <input type=\"hidden\" name=\"taskid\" id=\"taskid\" formControlName=\"taskid\">\n            </div>              \n  \n          </div>\n\n          <div class=\"form-group row\">\n\n              <div class=\"col-sm-2\"></div> \n              <div class=\"col-sm-10\">\n                  <input type=\"checkbox\" (change)=\"onparenttaskselected($event)\"  formControlName=\"isparenttask\" id=\"isparenttask\" style=\"border-color: #6f42c1;\">&nbsp;Parent Task\n                </div> \n\n          </div>\n\n\n<div class=\"form-group row\">\n    <label for=\"lastname\" class=\"col-sm-2 col-form-label\">Priority:</label>\n      <div class=\"col-sm-10\">\n        <div style=\"display: flex; color: #6f42c1\">\n            <span><strong>0</strong></span>\n            <input type=\"range\" class=\"form-control\" id=\"priority\" formControlName=\"priority\" name=\"priority\" min=\"0\" max=\"100\" value=\"0\"\n              (change)=\"onPriorityChange($event)\" step=\"1\"  style=\"width: 500px;\">&nbsp;<span><strong>{{priority}}</strong></span>\n            </div>\n\n\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"ptask\" class=\"col-sm-2 col-form-label\">Parent Task:</label>          \n          <div class=\"col-sm-7\">\n            <input type=\"input\"  formControlName=\"parenttaskname\"\n            id =\"parenttaskname\"  class=\"form-control\" id=\"ptaksinput\" style=\"width: 450px !important\" disabled>\n          </div>\n          <div class=\"col-sm-1\">\n            <input type=\"button\" id=\"parenttaskbut\" [disabled]=\"disabtaskbutton\" class=\"serachbuton\" data-toggle=\"modal\" data-target=\"#taskpopop\">\n          </div>\n          <div class=\"col-sm-2\"></div>\n          <input type=\"hidden\" name=\"parenttaskid\" id=\"parenttaskid\" formControlName=\"parenttaskid\">\n        </div>\n\n\n        <div class=\"form-group row\">  \n            <label for=\"ptask\" class=\"col-sm-2 col-form-label\">Start Date:</label>                      \n                  <div class=\"col-sm-3\">\n                      <input type=\"date\" id=\"startdate\" formControlName=\"startdate\" class=\"form-control borderstyle\" name=\"startDate\" />\n                  </div>  \n                  <label for=\"ptask\" class=\"col-sm-2 col-form-label\">End Date:</label>           \n                  <div class=\"col-sm-3\">\n                      <input type=\"date\" id=\"enddate\" formControlName=\"enddate\" class=\"form-control borderstyle\" name=\"startDate\" />\n                      <div *ngIf=\"submitted && f.startdate.errors\" style=\"margin-left: -337px\" class=\"mandmaindiv\">\n                          <div class=\"arrow_box\">End date should be greater than start date</div>\n                        </div>\n                  </div>   \n                  <div class=\"col-sm-2\"></div>\n                  \n        </div>\n\n\n\n        <div class=\"form-group row\">\n            <label for=\"userid\" class=\"col-sm-2 col-form-label\">User:</label>          \n              <div class=\"col-sm-7\">\n                <input type=\"input\" class=\"form-control\"  formControlName=\"managername\" id=\"managername\" style=\"width: 450px !important\" disabled>\n              </div>\n              <div class=\"col-sm-1\">\n                <input type=\"button\" class=\"serachbuton\" data-toggle=\"modal\" data-target=\"#userpopup\">\n              </div>\n              <div class=\"col-sm-2\"></div>\n              <input type=\"hidden\" name=\"managerid\" id=\"managerid\" formControlName=\"managerid\">\n            </div>\n\n\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5\"></div>\n  <div class=\"col-sm-2\">\n  <button type=\"button\" id=\"addedittask\" class=\"form-control btn btn-success btn-sm successbutton\" (click)=\"onsave()\"><span id=\"blicktext\"> {{addtasktitle}}</span></button>\n  <button type=\"button\" style=\"visibility: hidden;\" id=\"savaecofnm\" data-toggle=\"modal\" data-target=\"#saveconfirm\">dummysave</button>\n</div>\n  <div class=\"col-sm-2\">\n  <button type=\"button\" class=\"form-control btn btn-primary btn-sm resetbutton\" data-toggle=\"modal\" data-target=\"#warnpopup\">Reset</button>\n</div>\n<div class=\"col-sm-3\"></div>\n\n        </div>\n</form>\n\n    </fieldset>\n  </div>\n<div></div>   \n\n</div>\n\n<div id=\"projpop\">\n  <app-userlisting listingmodalId=\"projectpop\" [projectsodel] = \"projectsmodelpop\" (selectedvalue)=\"selectedprojectpop($event)\">\n    <div head>Select Project</div>\n  </app-userlisting>\n</div>\n\n<div id=\"taskpop\">\n    <app-userlisting listingmodalId=\"taskpopop\" [tasksmodel] = \"tasksmodels\" (selectedvalue)=\"selectedtaskpop($event)\">\n      <div head>Select Parent Task</div>\n    </app-userlisting>\n</div>\n\n<div>\n    <app-userlisting listingmodalId=\"userpopup\" [userlistings]=\"userslists\" (selectedvalue) = \"selecteduser($event)\">\n      <div head>Select User</div>\n    </app-userlisting>\n  </div>\n\n<div id=\"warpop\">\n  <app-warning modalId=\"warnpopup\" (valuechangee)=\"warningresult($event)\">\n      <div body>Are you sure want to <span style=\"color:red;text-shadow: 5px 0px 10px floralwhite;\">reset</span>   the values ???</div>\n  </app-warning>\n</div>\n\n<div id=\"saveconfi\">\n    <app-confirmation confirmid=\"saveconfirm\">\n      <div head>Confirmation</div>\n      <div body>Task details has been saved successfully </div>\n    </app-confirmation>\n  </div>  \n\n  \n\n<div>\n    <app-footer></app-footer>\n  </div>"

/***/ }),

/***/ "./src/app/add-tasks/add-tasks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-tasks/add-tasks.component.ts ***!
  \**************************************************/
/*! exports provided: AddTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTasksComponent", function() { return AddTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Entities/AppSettings */ "./src/app/Entities/AppSettings.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var controlNames = ['priority', 'startdate', 'enddate'];
var AddTasksComponent = /** @class */ (function () {
    function AddTasksComponent(fb, _activatedRoute, _ProjectService, _taskService, _datePipe) {
        this.fb = fb;
        this._activatedRoute = _activatedRoute;
        this._ProjectService = _ProjectService;
        this._taskService = _taskService;
        this._datePipe = _datePipe;
        this.projectsmodelpop = [];
        this.tasksmodels = [];
        this.userlists = [];
        this.userslists = [];
        this.submitted = false;
        this.addtasktitle = 'Add Task';
    }
    AddTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskform = this.fb.group({
            taskid: [0],
            taskname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            projectid: [0],
            projectname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isparenttask: [false],
            priority: [0],
            parenttaskid: [0],
            parenttaskname: [''],
            startdate: [null],
            status: [null],
            enddate: [null],
            managername: [''],
            managerid: [0]
        });
        this.getprojectspopup();
        this.getparenttaskspopup();
        this.selectusespopup();
        // edit task   
        this._activatedRoute.paramMap.subscribe(function (pm) {
            console.log('recevied param value from view task screen is ' + pm.get('id'));
            var taskidup = +pm.get('id');
            if (taskidup > 0) {
                // call api to get the data
                _this.getTaskById(taskidup);
                document.getElementById('addtask').style.background = '#AD9AE9';
                document.getElementById('addtask').style.border = '1px transparent solid';
                document.getElementById('addtask').style.borderRadius = '9px';
                document.getElementById('addtask').style.color = 'white';
                document.getElementById('addtask').style.boxShadow = '0px -1px 13px 6px white';
                document.getElementById('viewtask').style.background = '';
                document.getElementById('viewtask').style.border = '';
                document.getElementById('viewtask').style.borderRadius = '';
                document.getElementById('viewtask').style.boxShadow = '';
                document.getElementById('blicktext').classList.add('blink_me');
                _this.addtasktitle = 'Update Task';
            }
        });
    };
    AddTasksComponent.prototype.getTaskById = function (id) {
        var _this = this;
        this._taskService.getById(id).subscribe(function (p) {
            _this.patchModel(p);
            _this.priority = p.Priority;
            _this.setStartAndEndDate(p.StartDate, p.EndDate);
        });
    };
    AddTasksComponent.prototype.setStartAndEndDate = function (start, end) {
        var formattedTodayDate = this._datePipe.transform(start, _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].IsoDateFormat).toString();
        var formattedTomorrowDate = this._datePipe.transform(end, _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].IsoDateFormat).toString();
        this.taskform.patchValue({ startdate: formattedTodayDate, enddate: formattedTomorrowDate });
    };
    AddTasksComponent.prototype.patchModel = function (t) {
        this.taskform.patchValue({
            taskid: t.TaskId,
            taskname: t.TaskName,
            projectid: t.ProjectId,
            projectname: t.ProjectName,
            isparenttask: (t.StartDate == null),
            priority: t.Priority,
            parenttaskid: t.ParentTaskId,
            parenttaskname: t.ParentTaskName,
            startdate: t.StartDate,
            enddate: t.EndDate,
            managerid: t.ManagerId,
            managername: t.ManagerName
        });
    };
    AddTasksComponent.prototype.selectusespopup = function () {
        var _this = this;
        this._ProjectService.getAllManagers().subscribe(function (data) {
            _this.userslists = data;
        });
    };
    AddTasksComponent.prototype.getprojectspopup = function () {
        var _this = this;
        this._ProjectService.getAll().subscribe(function (data) {
            _this.projectsmodelpop = data;
        });
    };
    AddTasksComponent.prototype.getparenttaskspopup = function () {
        var _this = this;
        this._taskService.getAllParentTasks().subscribe(function (data) {
            _this.tasksmodels = data;
        });
    };
    Object.defineProperty(AddTasksComponent.prototype, "f", {
        get: function () { return this.taskform.controls; },
        enumerable: true,
        configurable: true
    });
    AddTasksComponent.prototype.selectedprojectpop = function (selecps) {
        console.log('selected project ' + selecps);
        this.taskform.patchValue({
            projectname: selecps.split('-')[1],
            projectid: selecps.split('-')[0]
        });
        console.log('selected project id ' + this.taskform.value.projectid);
    };
    AddTasksComponent.prototype.selectedtaskpop = function (seltaks) {
        console.log(seltaks);
        this.taskform.patchValue({
            parenttaskname: seltaks.split('-')[1],
            parenttaskid: seltaks.split('-')[0]
        });
        console.log('selected task id ' + this.taskform.value.parenttaskid);
    };
    AddTasksComponent.prototype.selecteduser = function (seleuser) {
        console.log(seleuser);
        this.taskform.patchValue({
            managername: seleuser.split('-')[2] + ' ' + seleuser.split('-')[3],
            managerid: seleuser.split('-')[0]
        });
        console.log('selected user id ' + this.taskform.value.managerid);
    };
    AddTasksComponent.prototype.onsave = function () {
        var _this = this;
        this.submitted = true;
        if (this.taskform.invalid) {
            return;
        }
        var sd = Date.parse(this.taskform.value.startdate);
        var ed = Date.parse(this.taskform.value.enddate);
        if (!isNaN(sd) && !isNaN(ed)) {
            if (ed <= sd) {
                console.log('date validation fails');
                document.getElementById('mandmaindiv').style.visibility = 'visible';
                return;
            }
        }
        if (this.taskform.valid) {
            //document.getElementById('mandmaindiv').style.visibility = 'hidden';
        }
        // api call to save the data in db.
        console.log('save called');
        console.log('button title ' + this.addtasktitle);
        // add
        if (this.addtasktitle == 'Add Task') {
            this._taskService.createOrUpdateTask(this.taskform.value)
                .subscribe(function (data) {
                console.log('task save call');
                _this.resetform();
                document.getElementById('savaecofnm').click();
            }, function (exception) {
                console.log('task save error ' + exception.error);
            });
        }
        else {
            this._taskService.createOrUpdateTask(this.taskform.value)
                .subscribe(function (data) {
                console.log('task update call');
                _this.resetform();
                document.getElementById('savaecofnm').click();
                _this.resetform();
            }, function (exception) {
                console.log('task update error ' + exception.error);
            });
        }
    };
    AddTasksComponent.prototype.onPriorityChange = function (e) {
        this.priority = e.target.value;
    };
    AddTasksComponent.prototype.enableControl = function (controlName) {
        this.taskform.controls[controlName].enable();
    };
    AddTasksComponent.prototype.disableControl = function (controlName) {
        this.taskform.controls[controlName].disable();
    };
    AddTasksComponent.prototype.onparenttaskselected = function (e) {
        this.isParentTask = e.target.checked;
        var index = 0;
        if (this.isParentTask) {
            console.log('parent task checked true');
            for (index = 0; index < controlNames.length; index++) {
                this.disableControl(controlNames[index]);
            }
            this.disabtaskbutton = true;
        }
        else {
            console.log('parent task checked false');
            for (index = 0; index < controlNames.length; index++) {
                this.enableControl(controlNames[index]);
            }
            this.disabtaskbutton = false;
        }
    };
    AddTasksComponent.prototype.warningresult = function (warnresult) {
        console.log('warning result for reset' + warnresult);
        if (warnresult == 'yes') {
            this.resetform();
        }
    };
    AddTasksComponent.prototype.resetform = function () {
        this.taskform.reset();
        this.submitted = false;
        this.priority = 0;
        this.taskform.controls['priority'].setValue(0);
        this.disabtaskbutton = false;
        var index = 0;
        for (index = 0; index < controlNames.length; index++) {
            this.enableControl(controlNames[index]);
        }
        document.getElementById('blicktext').classList.remove('blink_me');
        this.addtasktitle = 'Add Task';
    };
    AddTasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-tasks',
            template: __webpack_require__(/*! ./add-tasks.component.html */ "./src/app/add-tasks/add-tasks.component.html"),
            styles: [__webpack_require__(/*! ./add-tasks.component.css */ "./src/app/add-tasks/add-tasks.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"], _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], AddTasksComponent);
    return AddTasksComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headercontainer{\r\n    /* border:1px red solid; */\r\n    height: 50px;\r\n    text-align: center;\r\n    padding: 10px 10px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    font-size: 1.25em;        \r\n    background: linear-gradient(135deg, #6f42c1 0%, whitesmoke 100%);\r\n    box-shadow: 1px -5px 12px 5px white;\r\n}\r\n\r\n.routerbackground{\r\n    background: linear-gradient(135deg, #6f42c1 0%, whitesmoke 100%);    \r\n}\r\n\r\n.helptext{\r\n    width: 600px;\r\n    border: 3px whitesmoke solid;  \r\n    color: white;\r\n    margin: 20px;  \r\n    border-radius: 10px;\r\n    /* text-align: center; */\r\n    padding:5px 5px;    \r\n}\r\n\r\n.displayhelptext{\r\n    display: inline-flex;    \r\n}\r\n\r\n.hrstyle\r\n{\r\n    background-color: white;\r\n}\r\n\r\nul > li{\r\nbackground-color: transparent;\r\n/* border: 1px red solid; */\r\nborder-radius: 3px;\r\npadding: 2px;\r\ncolor: white;\r\nfont-variant-caps: all-petite-caps;\r\n}\r\n\r\np:active\r\n{\r\n    border: 1px transparent solid;\r\n    border-radius: 9px;\r\n    color: white;\r\n    background-color: #AD9AE9;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container headercontainer bg-dark navbar-dark\">\n  <span style=\"font-family: fantasy\"><h4>Project Management</h4></span>\n</div>\n<div style=\"height: 2px;\"></div>\n<div class=\"container routerbackground\">\n\n  <div id=\"navs\" class=\"displayhelptext\">\n    <div>\n      <ul class=\"nav flex-column\">\n          <li class=\"nav-item\" (click)=\"helptext('project')\">\n            <a class=\"nav-link\" style=\"color: white;\"   id=\"addproject\" [routerLink]=\"'add-edit-projects'\">Add Project</a>\n          </li>\n          <li class=\"nav-item\" (click)=\"helptext('addtask')\">\n            <a class=\"nav-link\"  style=\"color: white\" id=\"addtask\" [routerLink]=\"'add-edit-task/:id'\">Add Task</a>\n          </li>\n          <li class=\"nav-item\" (click)=\"helptext('user')\">\n            <a class=\"nav-link\"  style=\"color: white\" id=\"adduser\" [routerLink]=\"'add-users'\">Add User</a>\n          </li>\n          <li class=\"nav-item\" (click)=\"helptext('viewtask')\">\n            <a class=\"nav-link\"   style=\"color: white\" id=\"viewtask\" [routerLink]=\"'view-task'\">View Task</a>\n          </li>          \n        </ul>\n      </div>\n      <div style=\"width: 115px;\"></div>\n      <div class=\"helptext\" id=\"divhelptext\"></div>\n      \n  </div>\n  <hr class=\"hrstyle\">\n\n<router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_Router) {
        this._Router = _Router;
        this.title = 'ProjectManagementWeb';
    }
    AppComponent.prototype.ngOnInit = function () {
        document.getElementById('divhelptext').innerHTML = this.helptextforadduser();
        this.changebackcolor('adduser');
        this._Router.navigate(['/add-users']);
    };
    AppComponent.prototype.changebackcolor = function (alink) {
        document.getElementById(alink).style.background = '#AD9AE9';
        document.getElementById(alink).style.border = '1px transparent solid';
        document.getElementById(alink).style.borderRadius = '9px';
        document.getElementById(alink).style.color = 'white';
        document.getElementById(alink).style.boxShadow = '0px -1px 13px 6px white';
    };
    AppComponent.prototype.helptext = function (soruce) {
        var hetext = '';
        if (soruce == 'project') {
            hetext = '<p><b>Add Project</b> has <b>2</b> sections,</p>';
            hetext += '&nbsp;&nbsp;<b>1)	Add Project Details<br/></b>';
            hetext += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Add project title, start & end dates, Priority & assign manager';
            hetext += '<br/>&nbsp;&nbsp;<b>2)	View Project Details</b>';
            hetext += '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* View no of Tasks completed, Start & End Date & Priority';
            hetext += '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Provision to Update & Suspend projects';
            document.getElementById('divhelptext').innerHTML = hetext;
            this.changebackcolor('addproject');
            document.getElementById('addtask').style.background = '';
            document.getElementById('addtask').style.border = '';
            document.getElementById('addtask').style.borderRadius = '';
            document.getElementById('addtask').style.boxShadow = '';
            document.getElementById('adduser').style.background = '';
            document.getElementById('adduser').style.border = '';
            document.getElementById('adduser').style.borderRadius = '';
            document.getElementById('adduser').style.boxShadow = '';
            document.getElementById('viewtask').style.background = '';
            document.getElementById('viewtask').style.border = '';
            document.getElementById('viewtask').style.borderRadius = '';
            document.getElementById('viewtask').style.boxShadow = '';
        }
        else if (soruce == 'addtask') {
            hetext = '<p><b>Add Task</b> screen is used to add the following details,<br/></p>';
            hetext += '&nbsp;&nbsp;&nbsp;* Project<br/>';
            hetext += '&nbsp;&nbsp;&nbsp;* Task<br/>';
            hetext += '&nbsp;&nbsp;&nbsp;* Priority<br/>';
            hetext += '&nbsp;&nbsp;&nbsp;* Parent Task<br/>';
            hetext += '&nbsp;&nbsp;&nbsp;* Start & End Dates<br/>';
            document.getElementById('divhelptext').innerHTML = hetext;
            this.changebackcolor('addtask');
            document.getElementById('addproject').style.background = '';
            document.getElementById('addproject').style.border = '';
            document.getElementById('addproject').style.borderRadius = '';
            document.getElementById('addproject').style.boxShadow = '';
            document.getElementById('adduser').style.background = '';
            document.getElementById('adduser').style.border = '';
            document.getElementById('adduser').style.borderRadius = '';
            document.getElementById('adduser').style.boxShadow = '';
            document.getElementById('viewtask').style.background = '';
            document.getElementById('viewtask').style.border = '';
            document.getElementById('viewtask').style.borderRadius = '';
            document.getElementById('viewtask').style.boxShadow = '';
        }
        else if (soruce == 'user') {
            document.getElementById('divhelptext').innerHTML = this.helptextforadduser();
            this.changebackcolor('adduser');
            document.getElementById('addproject').style.background = '';
            document.getElementById('addproject').style.border = '';
            document.getElementById('addproject').style.borderRadius = '';
            document.getElementById('addproject').style.boxShadow = '';
            document.getElementById('addtask').style.background = '';
            document.getElementById('addtask').style.border = '';
            document.getElementById('addtask').style.borderRadius = '';
            document.getElementById('addtask').style.boxShadow = '';
            document.getElementById('viewtask').style.background = '';
            document.getElementById('viewtask').style.border = '';
            document.getElementById('viewtask').style.borderRadius = '';
            document.getElementById('viewtask').style.boxShadow = '';
        }
        else if (soruce == 'viewtask') {
            hetext = '<p><b>View Task</b> screen is used for the following purpose,</p>';
            hetext += '&nbsp;&nbsp;<b>1) View Project Details</b>';
            hetext += '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Like Task, Parent Task, Priority, Start & End Dates<br/>';
            hetext += '&nbsp;&nbsp;<b>2) User Operations</b><br/>';
            hetext += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Provision for edit & end task';
            document.getElementById('divhelptext').innerHTML = hetext;
            this.changebackcolor('viewtask');
            document.getElementById('addproject').style.background = '';
            document.getElementById('addproject').style.border = '';
            document.getElementById('addproject').style.borderRadius = '';
            document.getElementById('addproject').style.boxShadow = '';
            document.getElementById('addtask').style.background = '';
            document.getElementById('addtask').style.border = '';
            document.getElementById('addtask').style.borderRadius = '';
            document.getElementById('addtask').style.boxShadow = '';
            document.getElementById('adduser').style.background = '';
            document.getElementById('adduser').style.border = '';
            document.getElementById('adduser').style.borderRadius = '';
            document.getElementById('adduser').style.boxShadow = '';
        }
    };
    AppComponent.prototype.helptextforadduser = function () {
        var ht = '';
        ht = '<p><b>Add User</b> has <b>2</b> sections,</p>';
        ht += '&nbsp;&nbsp;<b>1)	Add User Details<br/></b>';
        ht += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Add First Name, Last Name & Employee ID';
        ht += '<br/>&nbsp;&nbsp;<b>2)	View User Details</b>';
        ht += '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* View & Update First Name, Last Name & Employee ID';
        return ht;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_edit_users_add_edit_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-users/add-edit-users.component */ "./src/app/add-edit-users/add-edit-users.component.ts");
/* harmony import */ var _app_add_edit_projects_add_edit_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/add-edit-projects/add-edit-projects.component */ "./src/app/add-edit-projects/add-edit-projects.component.ts");
/* harmony import */ var _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-tasks/add-tasks.component */ "./src/app/add-tasks/add-tasks.component.ts");
/* harmony import */ var _view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-tasks/view-tasks.component */ "./src/app/view-tasks/view-tasks.component.ts");
/* harmony import */ var _app_warning_warning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/warning/warning.component */ "./src/app/warning/warning.component.ts");
/* harmony import */ var _app_userlisting_userlisting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/userlisting/userlisting.component */ "./src/app/userlisting/userlisting.component.ts");
/* harmony import */ var _app_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _app_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/confirmation/confirmation.component */ "./src/app/confirmation/confirmation.component.ts");
/* harmony import */ var _app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _app_services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { ListingComponent } from './reusablecomponents/listing/listing.component';
// import { InfoComponent } from './reusablecomponents/info/info.component';

// import { MandatoryalertsComponent } from './reusablecomponents/mandatoryalerts/mandatoryalerts.component';
// import { TestComponent } from './test/test.component';






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _add_edit_users_add_edit_users_component__WEBPACK_IMPORTED_MODULE_5__["AddEditUsersComponent"],
                _app_add_edit_projects_add_edit_projects_component__WEBPACK_IMPORTED_MODULE_6__["AddEditProjectsComponent"],
                _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_7__["AddTasksComponent"],
                _view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_8__["ViewTasksComponent"],
                _app_warning_warning_component__WEBPACK_IMPORTED_MODULE_9__["WarningComponent"],
                _app_userlisting_userlisting_component__WEBPACK_IMPORTED_MODULE_10__["UserlistingComponent"],
                _app_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _app_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationComponent"],
                _app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"]
                // ListingComponent,
                // InfoComponent,
                // ConfirmComponent,
                // MandatoryalertsComponent,
                // TestComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
            ],
            providers: [_app_services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_add_edit_projects_add_edit_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/add-edit-projects/add-edit-projects.component */ "./src/app/add-edit-projects/add-edit-projects.component.ts");
/* harmony import */ var _app_add_edit_users_add_edit_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/add-edit-users/add-edit-users.component */ "./src/app/add-edit-users/add-edit-users.component.ts");
/* harmony import */ var _app_add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/add-tasks/add-tasks.component */ "./src/app/add-tasks/add-tasks.component.ts");
/* harmony import */ var _app_view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/view-tasks/view-tasks.component */ "./src/app/view-tasks/view-tasks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { 'path': 'add-edit-projects', component: _app_add_edit_projects_add_edit_projects_component__WEBPACK_IMPORTED_MODULE_2__["AddEditProjectsComponent"] },
    { 'path': 'add-users', component: _app_add_edit_users_add_edit_users_component__WEBPACK_IMPORTED_MODULE_3__["AddEditUsersComponent"] },
    { 'path': 'add-edit-task/:id', component: _app_add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_4__["AddTasksComponent"] },
    { 'path': 'view-task', component: _app_view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_5__["ViewTasksComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/confirmation/confirmation.component.css":
/*!*********************************************************!*\
  !*** ./src/app/confirmation/confirmation.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modalcontainer{\r\n    /* border:1px red solid; */\r\n    /* height: 50px;\r\n    text-align: center;\r\n    padding: 10px 10px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    font-size: 1.25em;         */\r\n    background: linear-gradient(135deg, #6f42c1 0%, whitesmoke 100%);\r\n}\r\n\r\n.crossbuttons{\r\n    border-radius: 14px;\r\n    border: 2px whitesmoke solid;\r\n    padding: 2px 12px;\r\n    background-color: white;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/confirmation/confirmation.component.html":
/*!**********************************************************!*\
  !*** ./src/app/confirmation/confirmation.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" style=\"font-family: initial;color: white\" [attr.id]=\"confirmid\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalIdLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content   modalcontainer\">\n            <div class=\"modal-header\">\n                <div style=\"font-weight: bold;color: greenyellow\">                   \n                    <ng-content select=\"[head]\"></ng-content>\n                  </div>\n                <button type=\"button\" \n                        class=\"close\" \n                        data-dismiss=\"modal\" \n                        aria-label=\"Close\"><span class=\"crossbuttons\" aria-hidden=\"true\">&times;</span>\n                </button>                            \n            </div>\n            \n            <div class=\"modal-body\"  style=\"text-align: center;display: flex;margin-left: 118px\">\n                <div style=\"color: greenyellow\"> <ng-content select=\"[body]\" ></ng-content></div>\n                <i class=\"material-icons\" style=\"color: greenyellow;border: 2px greenyellow solid;border-radius: 8px;padding: 2px 5px;margin-left: 9px;margin-top: -4px;\">thumb_up_alt</i>\n            </div>\n            <div class=\"modal-footer\">\n            <button class='btn btn-success btn-sm successbutton' data-dismiss=\"modal\">Ok</button>            \n                <ng-content select=\"[footer]\"></ng-content>\n            </div>\n        </div>\n    </div>\n  </div> \n  \n  "

/***/ }),

/***/ "./src/app/confirmation/confirmation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/confirmation/confirmation.component.ts ***!
  \********************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
        console.log('confirm called');
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationComponent.prototype, "confirmid", void 0);
    ConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! ./confirmation.component.html */ "./src/app/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.css */ "./src/app/confirmation/confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<p>\n&nbsp;\n</p>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// import { Pipe, PipeTransform } from '@angular/core';
// import { TasksModel } from '../Entities/Tasks';
// import { NumberSymbol } from '@angular/common';
// import { IfStmt } from '@angular/compiler';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @Pipe({
//     name: 'FilterPipe',
//     pure:false
// })
// export class FilterPipe implements PipeTransform {
//     transform(items: Array<TasksModel>, tasknameSearch: string, parentTasknameSearch: string, priorotyFromSearch: number,priorityToSearch:number,startDateSearch:Date,endDateSearch:Date){
//         if (items && items.length){
//             return items.filter(item =>{
//                 if (tasknameSearch && item.TaskName.toLowerCase().indexOf(tasknameSearch.toLowerCase()) === -1){
//                     return false;
//                 }
//                 if (parentTasknameSearch && item.ParentTaskName.toLowerCase().indexOf(parentTasknameSearch.toLowerCase()) === -1){
//                     return false;
//                 }
//                 if (item.Priority < priorotyFromSearch) {                    
//                     return false;
//                 }
//                 if (item.Priority > priorityToSearch) {
//                     return false;
//                 }
//                 if (startDateSearch && item.StartDate < startDateSearch) {
//                     return false;
//                 }
//                 if (endDateSearch && item.EndDate >= endDateSearch) {
//                     return false;
//                 }
//                 return true;
//            })
//         }
//         else{
//             return items;
//         }
//     }
// }

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (!value) {
            return null;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'FilterPipe'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Entities/AppSettings */ "./src/app/Entities/AppSettings.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = /** @class */ (function () {
    function ProjectService(httpClient, _userService) {
        this.httpClient = httpClient;
        this._userService = _userService;
    }
    ProjectService.prototype.getAll = function () {
        return this.httpClient.get(_Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].ProjectsUrl);
    };
    ProjectService.prototype.getById = function (id) {
        return this.httpClient.get(_Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].ProjectsUrl + '/' + id);
    };
    ProjectService.prototype.delete = function (id) {
        var deleteUrl = _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].ProjectsUrl + '/delete/' + id;
        return this.httpClient.post(deleteUrl, {});
    };
    ProjectService.prototype.createOrUpdateProject = function (project) {
        return this.httpClient.post(_Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].ProjectsUrl, project);
    };
    ProjectService.prototype.getAllManagers = function () {
        return this._userService.getUsers();
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Entities/AppSettings */ "./src/app/Entities/AppSettings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = /** @class */ (function () {
    function TaskService(httpClient) {
        this.httpClient = httpClient;
    }
    TaskService.prototype.createOrUpdateTask = function (task) {
        alert('Services Reached');
        alert(task);
        console.log(task);
        return this.httpClient.post(_Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].TasksUrl, task);
    };
    TaskService.prototype.completeTask = function (task) {
        return this.httpClient.post(_Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].TasksUrl + '/complete', task);
    };
    TaskService.prototype.getAllParentTasks = function () {
        return this.httpClient.get(_Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].TasksUrl + '/parent-tasks');
    };
    TaskService.prototype.getById = function (id) {
        return this.httpClient.get(_Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].TasksUrl + '/' + id);
    };
    TaskService.prototype.getAll = function () {
        return this.httpClient.get(_Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].TasksUrl);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Entities/AppSettings */ "./src/app/Entities/AppSettings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.getUsers = function () {
        return this.httpClient.get(_Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].UsersBaseUrl);
    };
    UserService.prototype.getById = function (id) {
        return this.httpClient.get(_Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].UsersBaseUrl + '/' + id);
    };
    UserService.prototype.delete = function (id) {
        var deleteUrl = _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].UsersBaseUrl + '/delete/' + id;
        return this.httpClient.post(deleteUrl, {});
    };
    UserService.prototype.createOrUpdateUser = function (user) {
        console.log('user service hit');
        console.log(user);
        console.log('api url ' + _Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].UsersBaseUrl);
        return this.httpClient.post(_Entities_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].UsersBaseUrl, user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/userlisting/userlisting.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userlisting/userlisting.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modalcontainer{\r\n    /* border:1px red solid; */\r\n    /* height: 50px;\r\n    text-align: center;\r\n    padding: 10px 10px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    font-size: 1.25em;         */\r\n    background: linear-gradient(135deg, #6f42c1 0%, whitesmoke 100%);\r\n}\r\n\r\n.crossbuttons{\r\n    border-radius: 14px;\r\n    border: 2px whitesmoke solid;\r\n    padding: 2px 12px;\r\n    background-color: white;\r\n  }"

/***/ }),

/***/ "./src/app/userlisting/userlisting.component.html":
/*!********************************************************!*\
  !*** ./src/app/userlisting/userlisting.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" style=\"font-family: initial;color: white\" [attr.id]=\"listingmodalId\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalIdLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content   modalcontainer\">\n            <div class=\"modal-header\">\n                <div style=\"font-weight: bold;\">                   \n                    <ng-content select=\"[head]\"></ng-content>\n                  </div>\n                <button type=\"button\" \n                        class=\"close\" \n                        data-dismiss=\"modal\" \n                        aria-label=\"Close\"><span class=\"crossbuttons\" aria-hidden=\"true\">&times;</span>\n                </button>                            \n            </div>            \n            <div class=\"modal-body\"  style=\"text-align: center\">\n                <ng-content select=\"[body]\"></ng-content>\n                <div *ngIf=\"userlistings.length > 0\">\n                <table class=\"table\">\n                  <thead>\n                    <th scope=\"col\" style=\"border: none\"></th>\n                    <th scope=\"col\" style=\"border: none; display: none\"></th>\n                    <th scope=\"col\" style=\"text-align: center;border: none;text-decoration: underline\">First Name</th>\n                    <th scope=\"col\" style=\"text-align: center;border: none;text-decoration: underline\">Last Name</th>\n                    <th scope=\"col\" style=\"text-align: center;border: none;text-decoration: underline\">Employee ID</th>\n                  </thead>\n                  <tbody *ngFor=\"let us of userlistings\">\n                    <td style=\"border: none\">\n                        <input class=\"form-check-input\" style=\"margin: 8px 6px;\" type=\"radio\" name=\"useridradios\" id=\"useridradios\" (click)=\"radclick(us)\" data-dismiss=\"modal\" [value]=\"us.UserId\">\n                    </td>\n                      <td style=\"border: none;display: none\">{{us.userid}}</td>\n                      <td style=\"border: none\">{{us.FirstName}}</td>\n                      <td style=\"border: none\">{{us.LastName}}</td>\n                      <td style=\"border: none\">{{us.EmployeeId}}</td>\n                  </tbody>\n                </table>\n            </div>\n\n            <div *ngIf=\"projectsodel.length > 0\">\n                    <table class=\"table\">\n                      <thead>\n                        <th scope=\"col\" style=\"border: none\"></th>\n                        <th scope=\"col\" style=\"border: none; display: none\"></th>\n                        <th scope=\"col\" style=\"text-align: center;border: none;text-decoration: underline\">Project Name</th>\n                        <th scope=\"col\" style=\"text-align: center;border: none;text-decoration: underline\">Start Date</th>\n                        <th scope=\"col\" style=\"text-align: center;border: none;text-decoration: underline\">End Date</th>\n                        <th scope=\"col\" style=\"text-align: center;border: none;text-decoration: underline\">Manager</th>\n                        \n                      </thead>\n                      <tbody *ngFor=\"let ps of projectsodel\">\n                        <td style=\"border: none\">\n                            <input class=\"form-check-input\" style=\"margin: 8px 6px;\" type=\"radio\" name=\"useridradios\" id=\"psidradios\" (click)=\"radprojectclick(ps)\" data-dismiss=\"modal\" [value]=\"ps.ProjectId\">\n                        </td>\n                          <td style=\"border: none;display: none\">{{ps.ProjectId}}</td>\n                          <td style=\"border: none\">{{ps.ProjectName}}</td>\n                          <td style=\"border: none\">{{ps.StartDate}}</td>\n                          <td style=\"border: none\">{{ps.EndDate}}</td>\n                          <td style=\"border: none\">{{ps.Manager}}</td>                          \n                      </tbody>\n                    </table>\n                </div>\n\n                <div *ngIf=\"tasksmodel.length > 0\">\n                        <table class=\"table\">\n                          <thead>\n                            <th scope=\"col\" style=\"border: none\"></th>\n                            <th scope=\"col\" style=\"border: none; display: none\"></th>\n                            <!-- <th scope=\"col\" style=\"text-align: center;border: none;text-decoration: underline\">Task Name</th> -->\n                            <!-- <th scope=\"col\" style=\"text-align: center;border: none;text-decoration: underline\">Project Name</th> -->\n                            <th scope=\"col\" style=\"text-align: center;border: none;text-decoration: underline\">Parent TaskName</th>\n                            <!-- <th scope=\"col\" style=\"text-align: center;border: none;text-decoration: underline\">Status</th> -->\n                            \n                          </thead>\n                          <tbody *ngFor=\"let ts of tasksmodel\">\n                            <td style=\"border: none\">\n                                <input class=\"form-check-input\" style=\"margin: 8px 6px;\" type=\"radio\" name=\"tsidradios\" id=\"tsidradios\" (click)=\"radtaskclick(ts)\" data-dismiss=\"modal\" [value]=\"ts.TaskId\">\n                            </td>\n                              <!-- <td style=\"border: none;display: none\">{{ts.TaskId}}</td> -->\n                              <!-- <td style=\"border: none\">{{ts.TaskName}}</td>\n                              <td style=\"border: none\">{{ts.ProjectName}}</td> -->\n                              <td style=\"border: none\">{{ts.ParentTaskName}}</td>\n                              <!-- <td style=\"border: none\">{{ts.Status}}</td>                           -->\n                          </tbody>\n                        </table>\n                    </div>\n\n            </div>\n            <div class=\"modal-footer\">            \n                <ng-content select=\"[footer]\"></ng-content>\n            </div>\n        </div>\n    </div>\n  </div> \n  \n  "

/***/ }),

/***/ "./src/app/userlisting/userlisting.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userlisting/userlisting.component.ts ***!
  \******************************************************/
/*! exports provided: UserlistingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistingComponent", function() { return UserlistingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserlistingComponent = /** @class */ (function () {
    function UserlistingComponent() {
        this.listingmodalId = 'app-userlisting';
        this.userlistings = [];
        this.projectsodel = [];
        this.tasksmodel = [];
        this.usersmodel = [];
        //userlistings : Array<UserListing> = [];
        this.selectedvalue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserlistingComponent.prototype.radclick = function (obj) {
        var empvalue;
        empvalue = obj.UserId + "-" + obj.EmployeeId + "-" + obj.FirstName + "-" + obj.LastName;
        this.selectedvalue.emit(empvalue);
    };
    UserlistingComponent.prototype.OnNgIinit = function () {
        console.log('ji111');
    };
    UserlistingComponent.prototype.radprojectclick = function (ps) {
        var psvalue;
        psvalue = ps.ProjectId + "-" + ps.ProjectName;
        this.selectedvalue.emit(psvalue);
    };
    UserlistingComponent.prototype.radtaskclick = function (tsks) {
        var psvaluetask;
        psvaluetask = tsks.ParentTaskId + "-" + tsks.ParentTaskName;
        this.selectedvalue.emit(psvaluetask);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserlistingComponent.prototype, "listingmodalId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserlistingComponent.prototype, "userlistings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserlistingComponent.prototype, "projectsodel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserlistingComponent.prototype, "tasksmodel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserlistingComponent.prototype, "usersmodel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserlistingComponent.prototype, "selectedvalue", void 0);
    UserlistingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlisting',
            template: __webpack_require__(/*! ./userlisting.component.html */ "./src/app/userlisting/userlisting.component.html"),
            styles: [__webpack_require__(/*! ./userlisting.component.css */ "./src/app/userlisting/userlisting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserlistingComponent);
    return UserlistingComponent;
}());



/***/ }),

/***/ "./src/app/view-tasks/view-tasks.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-tasks/view-tasks.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".compstyle\r\n{\r\n    border: 1px transparent solid;    \r\n    width: 800px;\r\n    background-color: white;\r\n    margin: 3px 145px;\r\n    /* height: 300px; */\r\n    box-shadow: 0px -5px 12px 15px white;\r\n}\r\n\r\n.compstylechild{\r\n    /* border: 1px red solid; */\r\n    height: 30px;\r\n    background: linear-gradient(135deg, #6f42c1 0%, whitesmoke 100%);\r\n    text-align: center;\r\n    color: white;\r\n    border-radius: 5px;  \r\n    font-variant-caps: all-petite-caps;\r\n}\r\n\r\n.field_set{\r\n    border: #AD9AE9;\r\n    border-style: solid;\r\n    padding: 5px !important;\r\n    margin: 5px;\r\n    font-variant-caps: all-petite-caps;\r\n  }\r\n\r\n.alignsort\r\n  {\r\n      display:flex;\r\n      flex-flow: wrap;\r\n  }\r\n\r\n.taskbuttons{\r\n    height: 37px;\r\n    margin-top: 5px;\r\n  }\r\n\r\n/* table thead > tr > th{\r\n    border:1px #6f42c1 solid;\r\n  } */\r\n\r\n.bgggg{\r\n      background-color: lightgreen !important;\r\n      border-radius: 10px;      \r\n  }"

/***/ }),

/***/ "./src/app/view-tasks/view-tasks.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-tasks/view-tasks.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"compstyle\">\n  <div class=\"compstylechild\"><b>View Task</b></div>\n\n<form style=\"margin-top: 10px;\" [formGroup]=\"viewtaskform\">\n    <div class=\"form-group row\">\n        <label for=\"ptask\" class=\"col-sm-1 col-form-label\" style=\"padding-left: 20px;\">Project:</label>          \n          <div class=\"col-sm-4\">\n            <input type=\"input\" formControlName=\"projectname\" [(ngModel)]=\"searchpro\" id=\"projectname\" name=\"projectname\" class=\"form-control\" id=\"ptaksinput\" style=\"width: 250px !important\" disabled>          \n          </div>\n          <div class=\"col-sm-1\">\n            <input type=\"button\" class=\"serachbuton\" style=\"margin-left: -15px;\" data-toggle=\"modal\" data-target=\"#projectpop\">            \n            \n          </div>                \n          <div class=\"col-sm-1\" style=\"padding: 10px 7px;\"><span> Sort By:</span></div>\n          <div class=\"col-sm-5 alignsort\">\n              <button type=\"button\" class=\"btn btn-success btn-sm taskbuttons successbutton\" (click)=\"handleSortBy('startdate')\">Start Date</button>\n              <div style=\"width: 2px;\"></div>\n              <button type=\"button\" class=\"btn btn-success btn-sm taskbuttons successbutton\" (click)=\"handleSortBy('enddate')\">End Date</button>\n              <div style=\"width: 2px;\"></div>\n              <button type=\"button\" class=\"btn btn-success btn-sm taskbuttons successbutton\" (click)=\"handleSortBy('priority')\">Priority</button>\n              <div style=\"width: 2px;\"></div>\n              <button type=\"button\" class=\"btn btn-success btn-sm taskbuttons successbutton\" (click)=\"handleSortBy('completed')\">Completed</button>\n          </div>\n\n        </div>\n\n        <table class=\"table\" id=\"idvietask\">\n          <thead>\n            <tr>\n            <th scope=\"col\" style=\"text-align: center;border: none\">Taks</th>\n            <th scope=\"col\" style=\"text-align: center; border: none\">Parent</th>\n            <th scope=\"col\" style=\"text-align: center; border: none\">Priority</th>\n            <th scope=\"col\" style=\"text-align: center;border: none\">Start</th>\n            <th scope=\"col\" style=\"text-align: center; border: none\">End</th>            \n          </tr>\n          </thead>\n          <tbody *ngFor=\"let tm of tasksmodel | FilterPipe: searchpro; let i = index\">\n            <td style=\"text-align: center;background-color: #AD9AE9; color: white;border-radius: 10px;border: none\">{{tm.TaskName}}</td>\n            <td style=\"text-align: center;background-color: #AD9AE9; border-radius: 10px;; color: white;border: none\">{{tm.ParentTaskName}}</td>\n            <td style=\"text-align: center;border: none\">{{tm.Priority}}</td>\n            <td style=\"text-align: center;border: none\">{{tm.StartDate | date:'MM/dd/yyyy'}}</td>\n            <td style=\"text-align: center;border: none\">{{tm.EndDate | date:'MM/dd/yyyy'}}</td>\n            <td style=\"text-align: center; border: none\"><button type=\"submit\" class=\"btn btn-success btn-sm successbutton\" [disabled]=\"isCompleted(tm)\" style=\"width: 80px;\"  (click)=\"edittask(tm)\" >Edit</button></td>\n            <td style=\"text-align: center; border: none\"><button type=\"submit\" class=\"btn btn-success btn-sm successbutton\"  [disabled]=\"isCompleted(tm,i)\"  (click)=\"endtask(tm)\"  data-toggle=\"modal\" data-target=\"#warnpopup\">End Task</button></td>\n            \n          </tbody>         \n\n        </table>\n\n</form>\n\n</div>\n\n<div id=\"projpop\">\n    <app-userlisting listingmodalId=\"projectpop\" [projectsodel] = \"projectsmodelpop\" (selectedvalue)=\"selectedprojectpop($event)\">\n      <div head>Select Project</div>\n    </app-userlisting>\n  </div>\n\n<div id=\"warnpop\">\n    <app-warning modalId=\"warnpopup\" (valuechangee)=\"warningresultendtask($event)\">\n        <div body>Are you sure want to <span style=\"color:red;text-shadow: 5px 0px 10px floralwhite;\">end the task</span> ???</div>\n    </app-warning>\n  </div>\n\n<div>\n    <app-footer></app-footer>\n  </div>"

/***/ }),

/***/ "./src/app/view-tasks/view-tasks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-tasks/view-tasks.component.ts ***!
  \****************************************************/
/*! exports provided: ViewTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTasksComponent", function() { return ViewTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewTasksComponent = /** @class */ (function () {
    function ViewTasksComponent(_formBuilder, _route, _taskService, _projectService) {
        this._formBuilder = _formBuilder;
        this._route = _route;
        this._taskService = _taskService;
        this._projectService = _projectService;
        this.tasksmodel = [];
        this.projectsmodelpop = [];
    }
    ViewTasksComponent.prototype.ngOnInit = function () {
        this.viewtaskform = this._formBuilder.group({
            projectname: ['']
        });
        this.loadTasks();
        this.getAllProjects();
        console.log(document.getElementsByTagName('tbody').item.length);
    };
    ViewTasksComponent.prototype.getTime = function (date) {
        return date != null ? new Date(date).getTime() : 0;
    };
    ViewTasksComponent.prototype.edittask = function (task) {
        console.log('task id for edit ' + task.TaskId);
        this._route.navigate(['add-edit-task/' + task.TaskId]);
    };
    ViewTasksComponent.prototype.selectedprojectpop = function (selecps) {
        console.log('selected project ' + selecps);
        this.viewtaskform.patchValue({
            projectname: selecps.split('-')[1]
        });
    };
    ViewTasksComponent.prototype.loadTasks = function () {
        var _this = this;
        // call api to get all the tasks
        this._taskService.getAll().subscribe(function (data) {
            _this.tasksmodel = data;
        });
    };
    Object.defineProperty(ViewTasksComponent.prototype, "f", {
        get: function () { return this.viewtaskform.controls; },
        enumerable: true,
        configurable: true
    });
    ViewTasksComponent.prototype.getAllProjects = function () {
        var _this = this;
        this._projectService.getAll().subscribe(function (data) {
            _this.projectsmodelpop = data;
        });
    };
    ViewTasksComponent.prototype.endtask = function (tm) {
        this.endtasksmodel = tm;
    };
    ViewTasksComponent.prototype.isCompleted = function (tm, intt) {
        if (tm === null) {
            return false;
        }
        if (tm.Status === 'Yes') {
            console.log('count ' + intt);
            //  if(!isNaN(intt))
            //  {
            //   var tableRef = document.getElementById('idvietask').getElementsByTagName('tbody'); 
            //   let i;
            //   for(i = 0; tableRef.length ; i++)
            //   {
            // if(i == intt)
            // {
            //   tableRef[i].classList.add('bgggg');
            // }
            //   }
            // }
            // var tds = document.querySelectorAll('tbody td').item(0).classList.add('bgggg');
            // var tds = document.querySelectorAll('tbody td').item(1).classList.add('bgggg');
            // var tds = document.querySelectorAll('tbody td').item(2).classList.add('bgggg');
            // var tds = document.querySelectorAll('tbody td').item(3).classList.add('bgggg');
            // var tds = document.querySelectorAll('tbody td').item(4).classList.add('bgggg');
            // var tds = document.querySelectorAll('tbody td').item(5).classList.add('bgggg');
            // var tds = document.querySelectorAll('tbody td').item(6).classList.add('bgggg');  
        }
        return (tm.Status === 'Yes');
    };
    ViewTasksComponent.prototype.warningresultendtask = function (endtsk) {
        var _this = this;
        console.log('end task call ' + this.endtasksmodel.TaskId);
        if (endtsk = 'yes') {
            this._taskService.completeTask(this.endtasksmodel).subscribe(function (data) {
                _this.tasksmodel = data;
            });
        }
    };
    ViewTasksComponent.prototype.handleSortBy = function (value) {
        var _this = this;
        this.sortBy = value;
        switch (this.sortBy) {
            case 'startDate':
                this.tasksmodel = this.tasksmodel.sort(function (a, b) {
                    return _this.getTime(a.StartDate) - _this.getTime(b.StartDate);
                });
                break;
            case 'endDate':
                this.tasksmodel = this.tasksmodel.sort(function (a, b) {
                    return _this.getTime(a.EndDate) - _this.getTime(b.EndDate);
                });
                break;
            case 'completed':
                this.tasksmodel = this.tasksmodel.sort(function (a, b) { return a.Status.localeCompare(b.Status); });
                break;
            case 'priority':
                this.tasksmodel = this.tasksmodel.sort(function (a, b) { return a.Priority.toString().localeCompare(b.Priority.toString()); });
                break;
            default:
                this.tasksmodel = this.tasksmodel.sort(function (a, b) { return a.ProjectName.localeCompare(b.ProjectName); });
                break;
        }
    };
    ViewTasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-tasks',
            template: __webpack_require__(/*! ./view-tasks.component.html */ "./src/app/view-tasks/view-tasks.component.html"),
            styles: [__webpack_require__(/*! ./view-tasks.component.css */ "./src/app/view-tasks/view-tasks.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]])
    ], ViewTasksComponent);
    return ViewTasksComponent;
}());



/***/ }),

/***/ "./src/app/warning/warning.component.css":
/*!***********************************************!*\
  !*** ./src/app/warning/warning.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modalcontainer{\r\n    /* border:1px red solid; */\r\n    /* height: 50px;\r\n    text-align: center;\r\n    padding: 10px 10px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    font-size: 1.25em;         */\r\n    background: linear-gradient(135deg, #6f42c1 0%, whitesmoke 100%);\r\n}\r\n\r\n.crossbuttons{\r\n    border-radius: 14px;\r\n    border: 2px whitesmoke solid;\r\n    padding: 2px 12px;\r\n    background-color: white;\r\n  }"

/***/ }),

/***/ "./src/app/warning/warning.component.html":
/*!************************************************!*\
  !*** ./src/app/warning/warning.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" style=\"font-family: initial;color: white\" [attr.id]=\"modalId\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalIdLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content   modalcontainer\">\n          <div class=\"modal-header\">\n              <div> \n                <div style=\"display: flex\">\n                  <i class=\"material-icons\" style=\"font-size:36px; color: yellow\">warning</i>\n                  </div>\n                  <ng-content select=\"[head]\"></ng-content>\n                </div>\n              <button type=\"button\" \n                      class=\"close\" \n                      data-dismiss=\"modal\" \n                      aria-label=\"Close\"><span class=\"crossbuttons\" aria-hidden=\"true\">&times;</span>\n              </button>                            \n          </div>\n          \n          <div class=\"modal-body\"  style=\"text-align: center\">\n              <ng-content select=\"[body]\"></ng-content>\n          </div>\n          <div class=\"modal-footer\">\n          <button class='btn btn-success btn-sm successbutton' data-dismiss=\"modal\" (click)=\"valueChanged()\">Yes</button>\n          <button class='btn btn-primary btn-sm resetbutton' data-dismiss=\"modal\" (click)=\"noclick()\">No</button>\n              <ng-content select=\"[footer]\"></ng-content>\n          </div>\n      </div>\n  </div>\n</div> \n\n"

/***/ }),

/***/ "./src/app/warning/warning.component.ts":
/*!**********************************************!*\
  !*** ./src/app/warning/warning.component.ts ***!
  \**********************************************/
/*! exports provided: WarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningComponent", function() { return WarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WarningComponent = /** @class */ (function () {
    function WarningComponent() {
        this.modalId = 'app-warning';
        this.valuechangee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WarningComponent.prototype.valueChanged = function () {
        var counter = "yes";
        this.valuechangee.emit(counter);
    };
    WarningComponent.prototype.noclick = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WarningComponent.prototype, "modalId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WarningComponent.prototype, "valuechangee", void 0);
    WarningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warning',
            template: __webpack_require__(/*! ./warning.component.html */ "./src/app/warning/warning.component.html"),
            styles: [__webpack_require__(/*! ./warning.component.css */ "./src/app/warning/warning.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WarningComponent);
    return WarningComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Selva\Code\ProjectManagementWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map