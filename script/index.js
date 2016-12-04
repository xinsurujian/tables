var myapp=angular.module("myapp",[]);
    myapp.controller("table",["$scope",function($scope){
    	var names=[
    	{
          FirstName:"FANG",LastName:"vane",Gender:"Male",Salary:"1233350",Birthday:new Date("1988-09-02")
    	},
    	{
    	  FirstName:"SARA",LastName:"rose",Gender:"Female",Salary:"23233350",Birthday:new Date("1988-04-25")
      	},
      	{
      	  FirstName:"AAM",LastName:"hot",Gender:"Male",Salary:"6633350",Birthday:new Date("1982-12-15")
      	},
      	{
          FirstName:"MARK",LastName:"bear",Gender:"Male",Salary:"683330",Birthday:new Date("1992-7-23")
      	}
      	]
    	 $scope.names=names;
    	 $scope.active="FirstName";
    	 $scope.add=false;
    	 $scope.setSort=function(active) {
    	 	
    	 	//如果是第一点击就让他顺序排列，否则就让他倒叙排列
    	 	$scope.add=$scope.active==active?!$scope.add:false;
    	 	//console.log($scope.add);
    	 	//让默认值等于当前值
    	 	$scope.active=active;
    	 }
    	
    	 $scope.addClass=function(active){
    	 	//如果是第一点击就让加allow-up，否则就让他加allow-down
    	 	if($scope.active==active){
    	 		return $scope.add?"allow-down":"allow-up";
    	 	}
    	 }
       $scope.searchText="";
       $scope.searchText1="";
       var ruler="LastName";
       $scope.add=function(active,$event){
        // console.log($event);
       //if($event.keyCode==13){
           ruler=active;
        //}
        

       }
       $scope.search=function(obj){
         //console.log(ruler);
        // console.log(obj);
         if($scope.searchText!=""){
            if(obj[ruler].toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1){
              return true;
              

            }else{
              return false;
            }
         }else if($scope.searchText1!=""){
            if(obj[ruler].toLowerCase().indexOf($scope.searchText1.toLowerCase())!=-1){
              return true;
              

            }else{
              return false;
            }
         }else{
          return true;
         }

       }
    }])
