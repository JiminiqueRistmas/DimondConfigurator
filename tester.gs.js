tester.gs
function tester() {
var ssNew = SpreadsheetApp.create("tester")
var newBuild = (ssNew.getUrl());

    
      var app = UiApp.createApplication().setHeight('60').setWidth('150');
  app.setTitle("Anchor in a popup ;-)");
  var panel = app.createPopupPanel()
  var link = app.createAnchor('This is your link', newBuild);
  panel.add(link);
  app.add(panel);
  var doc = SpreadsheetApp.getActive();
  doc.show(app);

}


//Logger.log(newBuild);
//BuildTarget.openByUrl(newBuild);
//var endSheet = SpreadsheetApp.openByUrl(newBuild);
///BuildSource.copyTo(endSheet.getRange("A1"), {formatOnly:true});
//BuildSource.copyTo(endSheet.getRange("A1"), {contentsOnly:true});
//endSheet.getRange("A1").setValues(BuildSource.getValue());
//Logger.log(endSheet.getName());
//Logger.log(ssNew.getUrl());
//Logger.log(ssNew.getSheetId());
//Logger.log("newBuild variable = " + newBuild);
    //Logger.log(ssNew.getUrl());

//Logger.log(ssNew.getSheetId());



      /*
      Deprecated funciton that pushed data to a local sheet labeled Test2
      
      var BuildTarget = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Test2");
   if (sheet != null) {
     Logger.log(sheet.getIndex());
 }
BuildTarget.activate()
   Logger.log("2 "+sheet.getName()+" "+BuildTarget); 
var SourceTarget = BuildTarget.getRange("A1");
    Logger.log("3 "+sheet.getName());
    
    
//copies build data to target range
//BuildSource.copyTo(SourceTarget, {formatOnly:true});
//BuildSource.copyTo(SourceTarget, {contentsOnly:true});
//BuildTarget.getRange("B3").setValue(athlete);
//BuildTarget.getRange("B6").setValue("=sum(G:H)");
 //   for (var I = 1; I < 10; I ++){
  //  BuildTarget.autoResizeColumn(I);
   // }
//BuildTarget.hideColumns(4);
  //  Logger.log("Build source - Source target :"+BuildSource+ " - " +SourceTarget);
  
  
    */



// copies build info from both calculator sheets 
// dump build info into two sheets on new wookbook
// format new sheets
// add formulas to new sheets
// Open sheet in new tab