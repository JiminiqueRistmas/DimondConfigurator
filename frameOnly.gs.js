frameOnly.gs
    function frameOnly(){
     var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

  var cell = sheet.getRange("Components");
cell.setValues(Frame);

 var cell = sheet.getRange("Build");
 cell.setValues(ClearStandards);
 }
     
    
