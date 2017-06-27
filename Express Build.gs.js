Express Build.gs
    function XpressBuild(){
     var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

  var cell = sheet.getRange("Components");
cell.setValues(Xpress);

 var cell = sheet.getRange("Build");
 cell.setValues(Builds);
 
 var Brakes = [["Tektro R3725 Brake (set)"]];
 var Saddle = [["Profile Design Vertex 80"]];
 
 var cell = sheet.getRange("C14");
 cell.setValues(Brakes);
 
 var cell = sheet.getRange("C15");
 cell.setValues(Saddle);

 }
     
    
