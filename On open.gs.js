On open.gs
     var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];  
 var ui = SpreadsheetApp.getUi(); 
function onOpen(e) {
                    
      var menuEntries = [];
 
   menuEntries.push({name: "Race Build", functionName: "RaceBuild"});
   menuEntries.push(null); // line separator
   menuEntries.push({name: "Premium Build", functionName: "PremiumBuild"});
   menuEntries.push(null);
   menuEntries.push({name: "Xpress Build", functionName: "XpressBuild"});
   menuEntries.push(null);
   menuEntries.push({name: "Frame Only", functionName: "frameOnly"});
   menuEntries.push(null);
   menuEntries.push({name: "Export to new build", functionName: "ExportBuild"});
   //menuEntries.push({name: "OpenSheet Tester", functionName: "tester"});

   ss.addMenu("Build Options", menuEntries);
 }

var Premium = [["$6,850.00"], ["Enve SES TT"], ["Enve Stem"], ["Zipp 808 NSW Front"],
["Zipp 808 NSW Rear"], ["Dura_Ace"], ["Dura-Ace FC-9000 Crankset"]];

var Xpress = [["$4,000.00"], ["Profile Design Pro Svet T2"], ["Profile Aris Stem "], ["Profile Design 30/24 AC Front"],
["Profile Design 30/24 AC Rear"], ["Ultegra"], ["Ultegra Crankset, FC-6800"]];

var Race = [["$6,850.00"], ["Profile Aeria T2"], ["Profile Aris Stem "], ["Profile Design 78/Twenty-Four CCL FRONT"],
["Profile Design 78/Twenty-Four CCL REAR"], ["Ultegra"], ["Ultegra Crankset, FC-6800"]];

var Builds = [["TriRig Omega X Brake Set"], ["Fizik Tritone"], ["Praxxis BB"], ["None"], ["None"], [""], 
[""], [""], [""], [""], ["None"], ["None"], ["None"], ["None"], ["None"], ["None"]];

var Frame = [["$6,850.00"], ["None"], ["None"], ["None"],
["None"], ["None"], ["None"]];

var ClearStandards = [["None"], ["None"], ["None"], ["None"], ["None"], [""], 
[""], [""], [""], [""], ["None"], ["None"], ["None"], ["None"], ["None"], ["None"]];


    