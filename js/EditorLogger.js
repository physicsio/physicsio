function EditorLogger(){

  this.currentlyParsing = false;
  this.rawExpressionData = {};
  this.rawExpressionDataForDeeperCheck = {};//this object is a filtered copy of "this.rawExpressionData" and DoHighLevelSelfConsistencyCheck() populates this object with filtered data
  this.linesToCheckForSelfConsistency = [];
  this.expressionsThatDontActuallyEqualEachOther = {};

  this.undefinedVars = {
    undefined: {},
    defined: {},
  };

  this.savedUndefinedVars = {};

  this.log = {
    success: [],
    info: [],
    warning: [],
    error: [],
  };

  this.errorTypes = {
    "Unexpected end of expression": {
      description: "An equation on this line is ending in an operation",
      
    },
    "Unexpected type of argument in function cross": {
      description: "You are crossing a vector with a scalar",
      
    },
    "Cannot read property 'toString' of undefined": {
      description: "You have an empty expression or an incomplete expression on this line",
      
    },
    "Units do not match": {
      description: "You are adding or substracting expressions that don't have the same units",
      
    },
    "Adding a scalar with a vector": {
      description: "Units match, but your adding a scalar with a vector",
      
    },
    "Setting a vector equal to scalar": {
      description: "Units match, but you are setting a vector quantity equal to a scalar quantity",
      
    },
    "Units do not equal each other": {
      description: "You have an equation or inequality that don't have the same units",
      
    },
    "Incorrect equations": {
      description: "You have incorrect equations on this line",
      
    },
    "Expressions don't equal": {
      description: "These equations may be symbolically equal but when the variable values are plugged in the expressions don't equal",
    },
    "Expressions found inside integral without differential variable": {
      description: "All expressions inside the parentheses of an integral must be multiplied by a differential variable, for exmaple: dx,dy,dt,etc",
    },
    "Integral bounds not formatted properly": {
      description: "There is an integral on this line that has a lower bound defined but not an upper bound defined or vise versa",
    },
    "Integral not formatted correctly for editor": {
      description: "The integrand and differential variable(s) need to be wrapped in parentheses for the editor to parse and evaluate the integral. Look at example below",
    },
    "Summation not formatted correctly for editor": {
      description: "The summation arguement must be wrapped in parentheses for the editor to parse and evaluate the summation. Look at example below",
    },
    "Product not formatted correctly for editor": {
      description: "The product arguement must be wrapped in parentheses for the editor to parse and evaluate the product. Look at example below",
    },
    "Limit not formatted correctly for editor": {
      description: "The limit arguement must be wrapped in parentheses for the editor to parse and evaluate the limit. Look at example below",
    },
    "Cannot evaluate limit": {
      description: "The editor supports a limited range of limit formats. Below are examples of invalid limit expressions"
    },
    "Value expected": {
      description: "An equation on this line is formatted incorrectly",
    },
    "Unexpected type of argument in function addScalar": {
      description: "There is an equation on this line that is adding a unitless value to a value with units or adding a vector with a scalar",
    },
    "Unexpected type of argument in function log": {
      description: "Expressions inside any log must be unitless. Check all expressions on this line that are inside a log and make sure they simplify to a unitless expression",
    },
    "Unexpected type of argument in function pow": {
      description: "All expressions in the exponent must simplify down to a unitless expression. Check that all exponents on this line simplify down to a unitless value.",
    },
    "Unit in function sin is no angle": {
      description: "All expressions in sin function must simplify to be radians, steradians, or unitless",
    },
    "Unit in function cos is no angle": {
      description: "All expressions in cos function must simplify to be radians, steradians, or unitless",
    },
    "Unit in function tan is no angle": {
      description: "All expressions in tan function must simplify to be radians, steradians, or unitless",
    },
    "Unit in function csc is no angle": {
      description: "All expressions in csc function must simplify to be radians, steradians, or unitless",
    },
    "Unit in function sec is no angle": {
      description: "All expressions in sec function must simplify to be radians, steradians, or unitless",
    },
    "Unexpected type of argument in function asin": {
      description: "All expressions in arcsin function must simplify to be radians, steradians, or unitless",
    },
    "Unexpected type of argument in function acos": {
      description: "All expressions in arccos function must simplify to be radians, steradians, or unitless",
    },
    "Unexpected type of argument in function atan": {
      description: "All expressions in arctan function must simplify to be radians, steradians, or unitless",
    },
    //trig functions--------------------------------
    "Too few arguments in function sin": {
      description: "You have a sin function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function cos": {
      description: "You have a cos function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function tan": {
      description: "You have a tan function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function asin": {
      description: "You have a arcsin function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function acos": {
      description: "You have a arccos function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function atan": {
      description: "You have a arctan function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function csc": {
      description: "You have a arccsc function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function sec": {
      description: "You have a arcsec function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function cot": {
      description: "You have a arccot function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function acsc": {
      description: "You have a arccsc function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function asec": {
      description: "You have a arcsec function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function acot": {
      description: "You have a arccot function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function sinh": {
      description: "You have a sinh function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function cosh": {
      description: "You have a cosh function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function tanh": {
      description: "You have a tanh function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function asinh": {
      description: "You have a arcsinh function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function acosh": {
      description: "You have a arccosh function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function atanh": {
      description: "You have a arctanh function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function csch": {
      description: "You have a arccsch function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function sech": {
      description: "You have a arcsech function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function coth": {
      description: "You have a arccoth function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function acsch": {
      description: "You have a arccsch function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function asech": {
      description: "You have a arcsech function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function acoth": {
      description: "You have a arccoth function on this line that doesn't have an expression inside it",
    },
    "Too few arguments in function log10": {
      description: "You have a log function on this line that doesn't have an expression inside it",
    },
    //end of trig functions----------------------
    "Editor couldn't evaluate cross product": {
      description: "The editor has limited support for parsing vector multiplication. For this reason the editor can not verify if this line is correct",
    },
    "Editor couldn't evaluate expression (this is probably an error with the editor)": {
      description: "For some reason the editor couldn't evaluate the expression below",
    },
    "Definite integral returned 'NaN' (not a number)": {
      description: "Editor couldn't calculate the value of the definite integral; therefore, the editor can not verify if the equations on this line are correct",
    },
    "Dimension mismatch. Matrix A": {
      description: "You are adding vectors that don't have the same number of demensions",
    },
    "Dimension mismatch. Adding vectors with different amount of demension": {
      description: "You can only add vectors with the same number of demensions",
    },
    "Demension mismatch. Setting to vectors with a different number of demensions equal to each other": {
      description: "Vectors must have the same number of demensions to be set equal to each other",
    },
    "Vectors with length 3 expected": {
      description: "You have a cross product on this line that is not with a 3 demensional vector",
    },
    "Two different coordinate systems used in cross product": {
      description: "You must be consistent with the coordinate system you use when doing the cross product. Editor detected the two coordinate systems below",
    },
    "Couldn't identify coordinate system used in cross product": {
      description: "You need to be more specific about which coordinate system you are using. Look Below for examples"
    },
    "Two different coordinate systems used in cross product": {
      description: "You must be consistent with the coordinate system you use in the cross product"
    },
    "Two different coordinate systems used in expression": {
      description: "You must be consistent with the coordinate system you use in an expression. If you are writing an equation that specifically relates two different coordinate systems please ignore this error."
    },
    "Unit vectors from two different coordinate systems detected in expression": {
      description: "You must use the same coordinate system in an expression. If you are writing an equation that specifically relates two different coordinate systems please ignore this error."
    },
    "Vector found in integral bounds": {
      description: "Integral bounds must evaluate to a scalar value",
    },
    "Mismatched absolute value sign": {
      description: "There is an absolute value sign that is not formatted correctly on this line"
    },
    "Empty absolute value sign": {
      description: "There is an absolute value sign on this line that doesn't have an expression inside of it",
    },
    "Editor couldn't evaluate a definite integral on this line": {
      description: "This is a problem with the editor. It occasionally has trouble evaluating some types of definite integrals",
    },
    "defaultError": {
      description: "There is something wrong with an equation on this line. This may be a problem with the Editor. Please contact customer support if the issue persists",
    }
  }

  this.GenerateEditorErrorMessages = function(opts = {}){
    this.currentlyParsing = true;
    let orderedIds = OrderMathFieldIdsByLineNumber(Object.keys(MathFields));
    this.clearLog();//clearing log befor adding to it
    this.saveUndefinedVariablesData();
    this.clearUndefinedVariables();
    this.clearRawExpressionData();
    this.clearLinesToCheckForSelfConsistency();

    for(const [lineNumber, id] of Object.entries(orderedIds)){
      //before we do anything there are some edge case we need to take care of specifically \nabla^2 need to be formatted as \nabla \cdot \nabla
      let ls = FormatNablaSquared(MathFields[id].mf.latex());
      ls = PutBracketsAroundAllSubsSupsAndRemoveEmptySubsSups(ls);
      if(ls.length > 0){//there is something to evaluate
        let undefinedVars = GetUndefinedVariables(RemoveDifferentialOperatorDFromLatexString(ls));
        this.recordUndefinedVariables(undefinedVars);
        CheckForErrorsInExpression(ls, lineNumber, id);
      }
    }

    //after we have gone through all the lines and parsed everything we will have a list of lines that we can check for selfConsistency so lets do that
    this.CheckLinesForSelfConsistency();
    //we use the same list of lines we can check for self consistency to check if we can figure out if we can identify known values and also check that equations actually equal each other not just symbolically
    this.UpdateKnownUnknownVariables();
    //after this function runs it will populate "this.expressionsThatDontActuallyEqualEachOther" with information about equations that don't actually equal each other so we need to add the errors that this object represents
    this.AddErrorsFromExpressionsThatDontActuallyEqualEachOther();
    //after parsing through everything and building up the list of defined undefined variables we need to check if there are any relevant equations for the set of variables we have in DefinedVariables and this.undefinedVars.defined
    CheckForAndDisplayRelevantEquations();

    this.display({dontRenderMyVariablesCollection: opts.dontRenderMyVariablesCollection, updatedVariableInfo: opts.updatedVariableInfo});
    this.currentlyParsing = false;
  }

  this.AddErrorsFromExpressionsThatDontActuallyEqualEachOther = function(){
    let orderedIds = OrderMathFieldIdsByLineNumber(Object.keys(MathFields));
    let errors = [];
    for(const [lineNumber, latexExpressions] of Object.entries(this.expressionsThatDontActuallyEqualEachOther)){
      errors.push({
        error: this.createLoggerErrorFromMathJsError("Expressions don't equal"),
        info: "",
        latexExpressions: latexExpressions.filter((value, index, self)=>{return self.indexOf(value) === index}),//filtering so that there is only unique sets of equations because we don't need the same equation showing up twice
        lineNumber: lineNumber,
        mfID: orderedIds[lineNumber],
      });

      MathFields[orderedIds[lineNumber]].log.error.push({
        error: this.createLoggerErrorFromMathJsError("Expressions don't equal"),
        latexExpressions: latexExpressions.filter((value, index, self)=>{return self.indexOf(value) === index}),//filtering so that there is only unique sets of equations because we don't need the same equation showing up twice,
      });

    }
  }

  this.ParsePreviousLinesAgainWithNewInfoAboutUndefinedVariables = function(endingLineNumber){
    let orderedIds = OrderMathFieldIdsByLineNumber(Object.keys(MathFields));
    this.clearLog();//clearing log befor adding to it
    this.clearUndefinedVariables(true, false);//clearing undefined variables but not defined undefined variables

    for(const [lineNumber, id] of Object.entries(orderedIds)){
      if(lineNumber > endingLineNumber){
        break;//we break the job of this function was only to parse previous lines and the current line we were on when we called this function
      }
      else{
        //before we do anything there are some edge case we need to take care of specifically \nabla^2 need to be formatted as \nabla \cdot \nabla
        let ls = FormatNablaSquared(MathFields[id].mf.latex());
        ls = PutBracketsAroundAllSubsSupsAndRemoveEmptySubsSups(ls);
        if(ls.length > 0){//there is something to evaluate
          let undefinedVars = GetUndefinedVariables(RemoveDifferentialOperatorDFromLatexString(ls));
          this.recordUndefinedVariables(undefinedVars);
          CheckForErrorsInExpression(ls, lineNumber, id);
        }
      }

    }
  }

  this.CheckLinesForSelfConsistency = function(){
    let orderedIds = OrderMathFieldIdsByLineNumber(Object.keys(MathFields));
    let lineNumber;
    let mfID;
    this.rawExpressionDataForDeeperCheck = {};//we need to clear this object because it will be populated with data from "DoHighLevelSelfConssistencyCheck()""
    //this function will go through the "this.linesToCheckForSelfConsistency" array and do a high level check for self consistency
    //this makes sures that there are no duplicate values in the array
    this.linesToCheckForSelfConsistency = this.linesToCheckForSelfConsistency.filter((value, index, self)=>{
      return self.indexOf(value) === index
    });
    for(let i = 0; i < this.linesToCheckForSelfConsistency.length; i++){
      lineNumber = this.linesToCheckForSelfConsistency[i];
      mfID = orderedIds[this.linesToCheckForSelfConsistency[i]];
      for(let j = 0; j < this.rawExpressionData[this.linesToCheckForSelfConsistency[i]].length; j++){
        let expressionsThatDontEqualEachOtherOnThisLine = [];
        let a = [];
        let c = 0;
        if(this.rawExpressionData[this.linesToCheckForSelfConsistency[i]][j].length >= 2){//you can only do a self consistency check if there at least two expressions set equal to each other
          //before we do a high level self consistency check we need to make sure that integrals are formatted properly and have the correct information. specifically if a lower bound is defined then an upperbound should also be defined and vise versa
          if(AreIntegralBoundsFormattedProperly(this.rawExpressionData[this.linesToCheckForSelfConsistency[i]][j])){
            a = DoHighLevelSelfConsistencyCheck(this.rawExpressionData[this.linesToCheckForSelfConsistency[i]][j], lineNumber, mfID);
            while(c < a.length){
              expressionsThatDontEqualEachOtherOnThisLine.push(a[c]);
              c++;
            }
          }
          else{
            //we are going to add this information to the correct mathfield that has this error
            MathFields[mfID].log.error.push({
              error: this.createLoggerErrorFromMathJsError("Integral bounds not formatted properly"),
            });
          }
        }

        if(expressionsThatDontEqualEachOtherOnThisLine.length > 0){
          //console.log("expressionsThatDontEqualEachOtherOnThisLine", expressionsThatDontEqualEachOtherOnThisLine);
          let latexExpressions = expressionsThatDontEqualEachOtherOnThisLine.map((value)=>{
            let oppositeOperator = {
              "<": "\\nless",
              ">": "\\ngtr",
              "=": "\\ne",
              "\\le": ">",
              "\\ge": "<",
            };

            //there is a case where this string has latex characters mathquill can't render because I made them up for the purpose of calculations. These characters are \\comp1{...} \\comp2{...} and \\comp3{...}
            //if we have any of these characters in the calculatedExpression1 or calculatedExpression2 we will only tell the user that the equations are wrong we will not show the calculated value
            if(/\\comp\d\{/.test(`${value.calculatedExpression1} ${value.calculatedExpression2}`)){
              return `(${value.expression1} ${oppositeOperator[value.operator]} ${value.expression2})`;
            }
            
            return `(${value.expression1} ${oppositeOperator[value.operator]} ${value.expression2}) \\rightarrow (${value.calculatedExpression1} ${oppositeOperator[value.operator]} ${value.calculatedExpression2})`;
          });

          //we are going to add this information to the correct mathfield that has this error
          MathFields[mfID].log.error.push({
            error: this.createLoggerErrorFromMathJsError("Incorrect equations"),
            latexExpressions: latexExpressions,
          });
        }
      }
    }

  }

  this.CheckLinesForKnownVariables = function(){
    let orderedIds = OrderMathFieldIdsByLineNumber(Object.keys(MathFields));
    let mfID;
    let j;
    for(const [lineNumber, a] of Object.entries(this.rawExpressionDataForDeeperCheck)){
      mfID = orderedIds[lineNumber];
      j = 0;
      while(j < a.length){
        IdentifyAllKnownVariablesAndTheirValues(a[j], lineNumber, mfID);
        j++;
      }
    }
  }

  this.UpdateKnownUnknownVariables = function(reset = true){
    //we need to first reset all unknown variables current state to "unknown" so that they have to prove that they are known every time the user makes an edit in the editor
    if(reset){
      this.ResetAllUnknownVariblesToCurrentStateUnknown();
      this.TryToCheckAndSetVectorsAndVectorMagnitudes();
    }
    this.expressionsThatDontActuallyEqualEachOther = {};//we have to reset this object everytime we run this function because this.CheckLinesForKnownVariables() will populuate this object with the most up to date expressions that don't actually equal each other
    this.CheckLinesForKnownVariables();
  }

  this.recordUndefinedVariables = function(undefinedVars){
    let definedUndefinedVariables = Object.keys(this.undefinedVars.defined);
    for(let i = 0; i < undefinedVars.length; i++){
      if(this.undefinedVars.undefined[undefinedVars[i]] == undefined){
        //we need to check first that we haven't already given this undefined variable a definition based on equations that were written in previous lines.
        //so we check that this undefined variable is not a key in this.undefinedVars.defined because that would mean it is defined
        if(!definedUndefinedVariables.includes(undefinedVars[i])){
          //we are going to add this new undefined variable to the list of undefined variables
          let savedVariable = this.retrieveSavedUndefinedVariablesData(undefinedVars[i]);
          this.undefinedVars.undefined[undefinedVars[i]] = {
            state: (savedVariable.state) ? savedVariable.state : "unknown",
            type: (IsVariableLatexStringVector(undefinedVars[i])) ? "vector" : "scalar",
            units: "undefined units (none)",
            value: (savedVariable.value) ? savedVariable.value: undefined,
            valueFormattingError: (savedVariable.valueFormattingError) ? savedVariable.valueFormattingError: undefined,
            components: (savedVariable.components) ? (savedVariable.components) : undefined,
            unitsMathjs: "1 undefinedunit",
            rid: (savedVariable.rid) ? savedVariable.rid : RID(),
          };
        }

      }
    }
  }

  this.recordOneUndefinedVariable = function(ls, props){
    this.undefinedVars.undefined[ls] = {
      state: props.state,
      type: props.type,
      units: "undefined units (none)",
      value: props.value,
      valueFormattingError: props.valueFormattingError,
      unitsMathjs: "1 undefinedunit",
      rid: RID(),
    };
  }

  this.recordDefinitionForUndefinedVariable = function(definedUndefinedVariable, unitsMathjs, state = undefined, currentState = undefined){
    let fullUnitsString = GetFullUnitsStringFromUnitsMathJs(unitsMathjs);
    let isVariableVector = IsVariableLatexStringVector(definedUndefinedVariable);

    let savedVariable = this.retrieveSavedUndefinedVariablesData(definedUndefinedVariable);

    savedVariable.state = (state != undefined) ? state : savedVariable.state;
    savedVariable.currentState = (currentState != undefined) ? currentState : savedVariable.currentState;

    this.undefinedVars.defined[definedUndefinedVariable] = {
      currentState: (savedVariable.currentState) ? savedVariable.currentState : "unknown",
      state: (savedVariable.state) ? savedVariable.state : "unknown",
      type: (isVariableVector) ? "vector" : "scalar",
      value: (savedVariable.value) ? savedVariable.value: undefined,
      components: (savedVariable.components) ? savedVariable.components: undefined,
      valueFormattingError: (savedVariable.valueFormattingError) ? savedVariable.valueFormattingError: undefined,
      canBeVector: fullUnitsString.canBeVector,
      fullUnitsString: fullUnitsString.str,
      units: (fullUnitsString.custom) ? fullUnitsString.str : TrimUnitInputValue(fullUnitsString.str),
      unitsLatex: (fullUnitsString.custom) ? nerdamer.convertToLaTeX(fullUnitsString.str).toString() : UnitReference[fullUnitsString.str].unitsLatex,
      unitsMathjs: GetUnitsFromMathJsVectorString(unitsMathjs),//if it is not a vector it won't effect the string
      rid: (savedVariable.rid) ? savedVariable.rid : RID(),
      quantity: (fullUnitsString.custom) ? undefined : UnitReference[fullUnitsString.str].quantity,
      dynamicUnits: true,
    };
    //then after giving this variable a definiton we need to remove it from the undefined object of this.undefinedVars
    delete this.undefinedVars.undefined[definedUndefinedVariable];

  }

  this.clearLog = function(){
    EquationSet = [];
    this.log = {
      success: [],
      info: [],
      warning: [],
      error: [],
    };
    for (const [key, value] of Object.entries(MathFields)) {
      MathFields[key].log = {
        warning: [],//variable undefined,
        error: [], //units don't match
      };
    }
  }

  this.clearRawExpressionData = function(){
    this.rawExpressionData = {};
  }


  this.clearLinesToCheckForSelfConsistency = function(){
    this.linesToCheckForSelfConsistency = [];
  }

  this.clearUndefinedVariables = function(clearUndefined = true, clearDefined = true){
    if(clearUndefined){
      this.undefinedVars.undefined = {};
    }
    if(clearDefined){
      this.undefinedVars.defined = {};
    }

  }

  this.ResetAllUnknownVariblesToCurrentStateUnknown = function(){
    //definedVariables needs to be set because it persists between edits so every time an edit is made every unknown
    //variable needs to prove that they are set equal to all known variables in the editor
    for(const [key, value] of Object.entries(DefinedVariables)){
      if(value.state == "unknown"){
        DefinedVariables[key].currentState = "unknown";
        //if the value is unknown by definition then the value of the variable must be "undefined"
        DefinedVariables[key].value = undefined;
        DefinedVariables[key].components = undefined;
      }
    }

    //these variables are dynamically created eveyr time the editor is changed so you would think we wouldn't have to reset
    //these if they were just created. but in the use case where the user changes the state of another variable we wanted to
    //be able to update the state of all the other variables without having to parse everything and regenerate everything.
    //This can be seen in the function "ToggleVariableState"
    for(const [key, value] of Object.entries(this.undefinedVars.undefined)){
      if(value.state == "unknown"){
        this.undefinedVars.undefined[key].currentState = "unknown";
        //if the value is unknown by definition then the value of the variable must be "undefined"
        this.undefinedVars.undefined[key].value = undefined;
        this.undefinedVars.undefined[key].components = undefined;
      }
    }
    for(const [key, value] of Object.entries(this.undefinedVars.defined)){
      if(value.state == "unknown"){
        this.undefinedVars.defined[key].currentState = "unknown";
        //if the value is unknown by definition then the value of the variable must be "undefined"
        this.undefinedVars.defined[key].value = undefined;
        this.undefinedVars.defined[key].components = undefined;
      }
    }

  }

  this.TryToCheckAndSetVectorsAndVectorMagnitudes = function(){
    
    // this function goes through every variable and tries to see if it can check or set the corresponding vector magnitude and we do this
    // right after we have set all known unknowns to unknown and before "CheckLinesForKnownVariables" so that we can have some unknowns
    // possibly known already by first trying to calculate a vectors magnitude and setting the vector magnitude equal to this value if
    //the variable exists

    for(const [key, value] of Object.entries(DefinedVariables)){
      // we will try to set and compare vector magnitudes and vectors
      CheckThatVectorMagnitudeVariableEqualsVectorMagnitude({
        variables: DefinedVariables,
        vectorLs: value.type == "vector" ? key : `\\vec{${key}}`,
        vectorMagnitudeLs: value.type == "vector" ? RemoveVectorLatexString(key) : key,
      });
    }

    for(const [key, value] of Object.entries(this.undefinedVars.undefined)){
      // we will try to set and compare vector magnitudes and vectors
      CheckThatVectorMagnitudeVariableEqualsVectorMagnitude({
        variables: this.undefinedVars.undefined,
        vectorLs: value.type == "vector" ? key : `\\vec{${key}}`,
        vectorMagnitudeLs: value.type == "vector" ? RemoveVectorLatexString(key) : key,
      });
    }

    for(const [key, value] of Object.entries(this.undefinedVars.defined)){
      // we will try to set and compare vector magnitudes and vectors
      CheckThatVectorMagnitudeVariableEqualsVectorMagnitude({
        variables: this.undefinedVars.defined,
        vectorLs: value.type == "vector" ? key : `\\vec{${key}}`,
        vectorMagnitudeLs: value.type == "vector" ? RemoveVectorLatexString(key) : key,
      });
    }

  }

  this.saveUndefinedVariablesData = function(){
    this.savedUndefinedVars = Object.assign({}, this.undefinedVars);
  }

  this.retrieveSavedUndefinedVariablesData = function(ls){
    for(const [key, value] of Object.entries(this.savedUndefinedVars.undefined)){
      if(ls == key){
        return value;
      }
    }

    for(const [key, value] of Object.entries(this.savedUndefinedVars.defined)){
      if(ls == key){
        return value;
      }
    }
    //if we can't find this variable in past data then we will just return a default variable
    return {
      state: "unknown",
    };
  }

  this.createLoggerErrorFromMathJsError = function(err){
    let keys = Object.keys(this.errorTypes);
    let et = Object.assign({}, this.errorTypes);
    let error = undefined;
    keys.map(function(key, index){
      if(err.indexOf(key) != -1){

        error = {
          type: key,
          description: et[key].description,
          example: et[key].example,
        }
      }
    });

    if(error){
      return error;
    }

    return {
      type: err,
      description: et["defaultError"].description,
      example: et["defaultError"].example,
    };

  }

  this.display = function(opts = {}){

    RenderAllMathFieldLogs();

    if(!opts.dontRenderMyVariablesCollection){
      //after generating errors and defined undefined and defined undefined variables we need to rerender my variable collection
      OrderCompileAndRenderMyVariablesCollection();
    }

    if(opts.dontRenderMyVariablesCollection && opts.updatedVariableInfo != undefined){
      OrderCompileAndUpdateMyVariablesCollection(opts.updatedVariableInfo);
    }

    //regardless if we update the variable collection we need to make sure the errors for the variable collection are up to date
    RenderVariableCollectionErrors();
    
  }

}

let EL = new EditorLogger();
