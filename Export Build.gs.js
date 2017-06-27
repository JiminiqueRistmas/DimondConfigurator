Export Build.gs
    function ExportBuild(){

var getBuildDetail = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Build Detail Report");

// grabs the athletes name from the sheet  


  var range = getBuildDetail.getRange("B3");
  var athlete = range.getValue();
  var est = getBuildDetail.getSheetId();
  Logger.log(est);
Logger.log("athlete variable = " + athlete);

//creates input box to let you choose a new name for your sheet, or halts action when cancel button is pressed.


  var newName = Browser.inputBox('The new sheet will be named "' + athlete + '".', 'If this is not the desired name, please enter the correct name below.', 
    Browser.Buttons.OK_CANCEL);
Logger.log("newName variable = " + newName);
  if (newName != "cancel") {
  if (newName != '') {
     athlete = newName;
     }
      } else {
      Browser.msgBox("Action canceled.", Browser.Buttons.OK);
      return;
      }
      
Logger.log("athlete variable = " + athlete);


//sets the dimensions for the build detail range


 var lastRow = getBuildDetail.getLastRow();
 var lastColumn = getBuildDetail.getLastColumn();
 var lastCell = getBuildDetail.getRange(lastRow, lastColumn);
  Logger.log("this is the range height: "+lastRow);
  Logger.log("this is the range width: "+lastColumn);
  
  
//grabs build details, and sets the target range on the other sheet --- currently on same workbook


var BuildSource = getBuildDetail.getRange("A1"+":I"+(lastRow));


//Creates new sheet using the athlete's name


 var ssNew = SpreadsheetApp.create(athlete)
var newBuild = (ssNew.getUrl());

var endSheet = SpreadsheetApp.openByUrl(newBuild);
  var ssd = SpreadsheetApp.openByUrl(newBuild).getSheetByName('Sheet1');
  
  
// transfers build data to new sheet. Formats data. adds editors to sheet. 


  var sourceData = BuildSource.getValues();
ssd.getRange(ssd.getLastRow()+1,1,sourceData.length,sourceData[0].length).setValues(sourceData);
ssd.getRange("B3").setValue(athlete);
ssd.getRange("B6").setValue("=sum(G:H)");
ssd.getRange("D:D").clear();
ssd.getRange("F:I").setNumberFormat("$0.00");
ssd.getRange("B19:B21").setNumberFormat('@STRING@');
var editors = ['chris@rustersports.com', 'ethan@rustersports.com', 'randy@rustersports.com', 'brad@rustersports.com', 'reed@rustersports.com', 'matt@rustersports.com', 'eric@rustersports.com', 'alex@rustersports.com']; 
endSheet.addEditors(editors);
  for (var I = 1; I < 10; I ++){
    ssd.autoResizeColumn(I);
    }
    
// Gives popup notifying that the export is complets, and offers a link to the new sheet. 


          var app = UiApp.createApplication().setHeight('60').setWidth('150');
  app.setTitle("Build sheet exported. View sheet here.");
  var panel = app.createPopupPanel()
  var link = app.createAnchor(athlete +" ", newBuild);
  panel.add(link);
  app.add(panel);
  var doc = SpreadsheetApp.getActive();
  doc.show(app);
 

      }     