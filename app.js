console.log('hello');

var app = angular.module('GamingApp', []);

$(function(){
});

app.controller('MainController', ['$http', '$scope', function($http, $scope){
   console.log("controller");
   this.count=0;
   this.updateLevels = [5,8,11,17,25,38];

   this.updates = [
      {
         name: "add 'points' to the number",
         code: function(){
            this.addWords = true;
         }
      },{
         name: "add next upgrade number to the page",
         code: function(){
            this.addNextUpdateNumber = true;
         }
      },{
         name: "add next upgrade name",
         code: function(){
            this.addUpgradeName = true;
         }
      },{
         name: "automate clicks",
         code: function(){
            this.automateClicks = true;
            var controller = this;
            setInterval(function(){
               console.log('interval');
               controller.addToCount();
               console.log(controller.count);
            },30000);
         }
      },{
         name: "end",
         code: function(){
            console.log('end');
         }
      }
   ];
   this.addWords = false;
   this.addNextUpdateNumber = false;
   this.addUpgradeName = false;
   this.arrayIndex = 0;
   this.currentUpdateName = this.updates[this.arrayIndex].name;
   this.currentUpdateLevel = this.updateLevels[this.arrayIndex];
   this.currentUpdateCode = this.updates[this.arrayIndex].code;
   this.addToCount= function(){
      this.count += 1;
   };
   this.upgrade = function(){
      this.currentUpdateCode();
      this.count -= this.currentUpdateLevel;
      this.arrayIndex++;
      console.log(this.arrayIndex);
      this.currentUpdateLevel = this.updateLevels[this.arrayIndex];
      this.currentUpdateName = this.updates[this.arrayIndex].name;
      this.currentUpdateCode = this.updates[this.arrayIndex].code;
      if (this.arrayIndex == this.updateLevels.length-2) {
         console.log(this.updateLevels.push(Math.floor(this.updateLevels[this.updateLevels[this.updateLevels.length-1]] * 1.5)));
         // this.updateLevels.push(Math.floor(this.updateLevels[this.updateLevels[this.updateLevels.length-1]] * 1.5));
      }
   };




}]);
