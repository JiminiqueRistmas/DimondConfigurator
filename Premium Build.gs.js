Premium Build.gs
    function PremiumBuild(){
     var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

  var cell = sheet.getRange("Components");
cell.setValues(Premium);

 var cell = sheet.getRange("Build");
 cell.setValues(Builds);
 }
     
