Race Build.gs
    function RaceBuild(){
     var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange("Components");
cell.setValues(Race);

 var cell = sheet.getRange("Build");
 cell.setValues(Builds);
 }
                 

    
