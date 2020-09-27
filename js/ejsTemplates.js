let Templates = {
  "editorLogger":
  `
  <div class="row my-row">
    <div class="my-col col s12">
      <i id="close-editor-log" class="material-icons tiny" onclick="CloseEditorLog()">cancel</i>
      <ul class="collapsible log-container">
        <li class="success-log">
          <div class="collapsible-header">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="green-text text-lighten-2 bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <span>Success</span>
            <span class="badge" data-badge-caption="<%= log.success.length %>"></span>
          </div>
          <div class="collapsible-body information-container">
            <ul class="collapsible">
              <% for(let i = 0; i < log.success.length; i++){%>
              <li>
                <div class="collapsible-header"><%= log.success[i].error.type %><span class="badge">Line: <%= log.success[i].lineNumber %></span></div>
                <div class="collapsible-body"><span><%= log.success[i].error.description %></span></div>
              </li>
              <% } %>
            </ul>
          </div>
        </li>
        <li class="info-log">
          <div class="collapsible-header">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="blue-text text-lighten-2 bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
            <span>Info</span>
            <span class="badge" data-badge-caption="<%= log.info.length %>"></span>
          </div>
          <div class="collapsible-body information-container">
            <ul class="collapsible">
              <% for(let i = 0; i < log.info.length; i++){%>
              <li>
                <div class="collapsible-header"><%= log.info[i].error.type %><span class="badge">Line: <%= log.info[i].lineNumber %></span></div>
                <div class="collapsible-body"><span><%= log.info[i].error.description %></span></div>
              </li>
              <% } %>
            </ul>
          </div>
        </li>
        <li class="warning-log">
          <div class="collapsible-header">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="amber-text text-lighten-2 bi bi-exclamation-triangle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
            <span>Warning</span>
            <span class="badge" data-badge-caption="<%= log.warning.length %>"></span>
          </div>
          <div class="collapsible-body information-container">
            <ul class="collapsible">
              <% for(let i = 0; i < log.warning.length; i++){%>
              <li>
                <div class="collapsible-header"><%= log.warning[i].warning %><span class="badge">Line: <%= log.warning[i].lineNumber %></span></div>
                <div class="collapsible-body">
                  <div class="row">
                    <div class="col m12">
                      <% for(let c =0; c < log.warning[i].variables.length; c++){%>
                          <span class="undefined-variable-badge log-static-latex" latex="<%= log.warning[i].variables[c] %>"><%= log.warning[i].variables[c] %></span>
                      <% }%>
                    </div>
                  </div>
                </div>
              </li>
              <% } %>
            </ul>
          </div>
        </li>
        <li class="error-log">
          <div class="collapsible-header">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="red-text text-lighten-2 bi bi-bug-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956zM13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/>
            </svg>
            <span>Error</span>
            <span class="badge" data-badge-caption="<%= log.error.length %>"></span>
          </div>
          <div class="collapsible-body information-container">
            <ul class="collapsible">
              <% for(let i = 0; i < log.error.length; i++){%>
              <li>
                <div class="collapsible-header"><%= log.error[i].error.type %><span class="badge">Line: <%= log.error[i].lineNumber %></span></div>
                <div class="collapsible-body">
                  <div><%= log.error[i].error.description %></div>
                  <% if(log.error[i].latexExpressions != undefined){%>
                  <%for(let latexExpression of log.error[i].latexExpressions){%>
                    <div style="display:block;" class="log-static-latex" latex="<%= latexExpression %>"></div>
                  <%}}%>
                </div>
              </li>
              <% } %>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  `,
  "editor-line":
  `
  <div class="editor_line row">
    <div class="line_label col m1">
      <span class="active line-number" mf="<%= rid %>">1</span>
      <span onclick="OpenEditorLog('warning')" class="line-warning" mf="<%= rid %>">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="amber-text text-lighten-2 bi bi-exclamation-triangle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      </span>
      <span onclick="OpenEditorLog('error')" class="line-error" mf="<%= rid %>">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="red-text text-lighten-2 bi bi-bug-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956zM13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/>
        </svg>
      </span>
      <span class="line-question" mf="<%= rid %>"><i class="fas fa-question-circle"></i></span>
    </div>
    <div class="col m11 my_math_field_col">
      <div id="<%= rid %>" class="my_math_field" onkeydown="KeyLogger()" onkeyup="KeyLogger()" onmousedown="FocusOnThisMathField('<%= rid %>')"></div>
    </div>
  </div>
  `,
  "VariableCollection": {
    "physics-constant":
    `
    <div class="variable-row <%= (opts.unused) ? "unused-variable" : "" %>">
      <span class="static-physics-equation" latex="<%= opts.ls + "=" %>" rid="<%= opts.variable.rid %>"></span>
      <span class="variable-tag constant-info"><span latex="<%= opts.variable.value %>" rid="<%= opts.variable.rid %>"></span></span>
      <span class="variable-tag constant-info"><span latex="<%= opts.variable.unitsLatex %>" rid="<%= opts.variable.rid %>"></span></span>
      <span class="variable-tag physics-constant"><%= opts.variable.quantityDescription %></span>
      <% if(opts.unused){%>
        <span class="right delete-var" onclick="UpdateMyVariablesCollection({ls: '<%= opts.ls %>', rid: '<%= opts.variable.rid %>',remove: true, uncheckbox: true, editable: false, cantRemove: false,})"><i class="material-icons">close</i></span>
      <%}else{%>
        <span class="right delete-var" onclick="UpdateMyVariablesCollection({ls: '<%= opts.ls %>', rid: '<%= opts.variable.rid %>',remove: true, uncheckbox: true, editable: false, cantRemove: true,})"><i class="material-icons">close</i></span>
      <%}%>    
    </div>
    `,
    "defined-variable":
    `
    <div class="variable-row valign-wrapper <%= (opts.unused) ? "unused-variable" : "" %>" vector-rid="<%= opts.variable.type == "vector" ? opts.variable.rid : "" %>" scalar-rid="<%= opts.variable.type == "scalar" ? opts.variable.rid : "" %>">
      <div class="valign-wrapper" style="width: calc(100% - 30px); height:100%;">
        <span class="variable-collection-error-container">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="red-text text-lighten-2 bi bi-bug-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956zM13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/>
          </svg>
        </span>
        <span class="static-physics-equation editable-variable" latex="<%= opts.ls + "=" %>" rid="<%= opts.variable.rid %>"></span>
        <% if(opts.variable.state == "unknown" && opts.variable.currentState == "known"){%>
          <span onclick="ToggleVariableState('<%= opts.variable.rid %>')" class="variable-tag known tooltipped" data-position="bottom" data-tooltip="This variable is defined using all known or given variables in your equations">known</span>
          <% if(opts.variable.value != undefined){%>
            <span class="variable-value-container">
              <span class="variable-value static-mathfield tooltipped" data-position="bottom" data-tooltip="This value was calculated and can not be edited" type="<%= opts.variable.type %>" rid="<%= opts.variable.rid %>" latex="<%= opts.variable.value %>"></span>
            </span>
          <%}%>  
        <%}else if(opts.variable.state == "unknown"){%>
          <span onclick="ToggleVariableState('<%= opts.variable.rid %>')" class="variable-tag unknown tooltipped" data-position="bottom" data-tooltip="This variable is an unknown variable">unknown</span>
        <%}else if(opts.variable.state == "given"){%>
          <span onclick="ToggleVariableState('<%= opts.variable.rid %>')" class="variable-tag given tooltipped" data-position="bottom" data-tooltip="This variable is known at the start of the problem">given</span>
          <span class="variable-value-container">
            <span class="variable-value" type="<%= opts.variable.type %>" rid="<%= opts.variable.rid %>" latex="<%= (opts.variable.value != undefined) ? opts.variable.value : "" %>"></span>
          </span>
        <%}%>    

        <% if(opts.variable.dynamicUnits){%>
          <span onclick="DefineVariableUnits($(this), '<%= opts.variable.rid %>')" class="variable-tag info units dynamic-units tooltipped" search="<%= opts.variable.fullUnitsString %>" data-position="bottom" data-tooltip="This unit was dynamically created by the editor"><%= opts.variable.units %></span>
        <%}else{%>
          <span onclick="DefineVariableUnits($(this), '<%= opts.variable.rid %>')" class="variable-tag info units tooltipped" data-position="bottom" data-tooltip="This unit was set by the user or imported"><%= opts.variable.units %></span>
        <%}%>
      </div>
      <div class="valign-wrapper" style="width: 30px; height:100%;">
        <% if(opts.unused){%>
          <span class="right delete-var" onclick="UpdateMyVariablesCollection({rid: '<%= opts.variable.rid %>',remove: true, editable: true, cantRemove: false,})"><i class="material-icons">close</i></span>
        <%}else{%>
          <span class="right delete-var" onclick="UpdateMyVariablesCollection({rid: '<%= opts.variable.rid %>',remove: true, editable: true, cantRemove: true,})"><i class="material-icons">close</i></span>
        <%}%>    
      </div>
    </div>
    `,
    "defined-variable-pair":
    `
    <div class="variable-row valign-wrapper <%= (opts.unused) ? "unused-variable" : "" %>" vector-rid="<%= opts.variableVector.rid %>" scalar-rid="<%= opts.variableVectorMagnitude.rid %>">
      <div class="valign-wrapper" style="width: calc(100% - 30px); height:100%;">
        <span class="variable-collection-error-container">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="red-text text-lighten-2 bi bi-bug-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956zM13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/>
          </svg>
        </span>
        <!--vector portion of the pair-->
        <span class="static-physics-equation editable-variable" latex="<%= opts.vectorLs + "=" %>" rid="<%= opts.variableVector.rid %>"></span>
        <% if(opts.variableVector.state == "unknown" && opts.variableVector.currentState == "known"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVector.rid %>')" class="variable-tag known tooltipped" data-position="bottom" data-tooltip="This variable is defined using all known or given variables in your equations">known</span>
          <% if(opts.variableVector.value != undefined){%>
            <span class="variable-value-container">
              <span class="variable-value static-mathfield tooltipped" data-position="bottom" data-tooltip="This value was calculated and can not be edited" type="<%= opts.variableVector.type %>" rid="<%= opts.variableVector.rid %>" latex="<%= opts.variableVector.value %>"></span>
            </span>
          <%}%>  
        <%}else if(opts.variableVector.state == "unknown"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVector.rid %>')" class="variable-tag unknown tooltipped" data-position="bottom" data-tooltip="This variable is an unknown variable">unknown</span>
        <%}else if(opts.variableVector.state == "given"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVector.rid %>')" class="variable-tag given tooltipped" data-position="bottom" data-tooltip="This variable is known at the start of the problem">given</span>
          <span class="variable-value-container">
            <span class="variable-value" type="<%= opts.variableVector.type %>" rid="<%= opts.variableVector.rid %>" latex="<%= (opts.variableVector.value != undefined) ? opts.variableVector.value : "" %>"></span>
          </span>
        <%}%>  
        <!--vector magnitude portion of the pair-->  
        <span class="static-physics-equation editable-variable" latex="<%= opts.vectorMagnitudeLs + "=" %>" rid="<%= opts.variableVectorMagnitude.rid %>"></span>
        <% if(opts.variableVectorMagnitude.state == "unknown" && opts.variableVectorMagnitude.currentState == "known"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVectorMagnitude.rid %>')" class="variable-tag known tooltipped" data-position="bottom" data-tooltip="This variable is defined using all known or given variables in your equations">known</span>
          <% if(opts.variableVectorMagnitude.value != undefined){%>
            <span class="variable-value-container">
              <span class="variable-value static-mathfield tooltipped" data-position="bottom" data-tooltip="This value was calculated and can not be edited" type="<%= opts.variableVectorMagnitude.type %>" rid="<%= opts.variableVectorMagnitude.rid %>" latex="<%= opts.variableVectorMagnitude.value %>"></span>
            </span>
          <%}%>  
        <%}else if(opts.variableVectorMagnitude.state == "unknown"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVectorMagnitude.rid %>')" class="variable-tag unknown tooltipped" data-position="bottom" data-tooltip="This variable is an unknown variable">unknown</span>
        <%}else if(opts.variableVectorMagnitude.state == "given"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVectorMagnitude.rid %>')" class="variable-tag given tooltipped" data-position="bottom" data-tooltip="This variable is known at the start of the problem">given</span>
          <span class="variable-value-container">
            <span class="variable-value" type="<%= opts.variableVectorMagnitude.type %>" rid="<%= opts.variableVectorMagnitude.rid %>" latex="<%= (opts.variableVectorMagnitude.value != undefined) ? opts.variableVectorMagnitude.value : "" %>"></span>
          </span>
        <%}%> 

        <% if(opts.variableVectorMagnitude.dynamicUnits){%>
          <span onclick="DefineVariableUnits($(this), '<%= opts.variableVector.rid %>', '<%= opts.variableVectorMagnitude.rid %>' )" class="variable-tag info units dynamic-units tooltipped" search="<%= opts.variableVectorMagnitude.fullUnitsString %>" data-position="bottom" data-tooltip="This unit was dynamically created by the editor"><%= opts.variableVectorMagnitude.units %></span>
        <%}else{%>
          <span onclick="DefineVariableUnits($(this), '<%= opts.variableVector.rid %>', '<%= opts.variableVectorMagnitude.rid %>' )" class="variable-tag info units tooltipped" data-position="bottom" data-tooltip="This unit was set by the user or imported"><%= opts.variableVectorMagnitude.units %></span>
        <%}%>
      </div>
      <div class="valign-wrapper" style="width: 30px; height:100%;">
        <% if(opts.unused){%>
          <span class="right delete-var" onclick="UpdateMyVariablesCollection({rid: '<%= opts.variableVector.rid %>', rid2: '<%= opts.variableVectorMagnitude.rid %>', remove: true, editable: true, cantRemove: false,})"><i class="material-icons">close</i></span>
        <%}else{%>
          <span class="right delete-var" onclick="UpdateMyVariablesCollection({remove: true, editable: true, cantRemove: true,})"><i class="material-icons">close</i></span>
        <%}%>    
      </div>
    </div>
    `,
    "undefined-variable":
    `
    <div class="variable-row valign-wrapper undefined-variable <%= (opts.unused) ? "unused-variable" : "" %>" vector-rid="<%= opts.variable.type == "vector" ? opts.variable.rid : "" %>" scalar-rid="<%= opts.variable.type == "scalar" ? opts.variable.rid : "" %>">
      <div class="valign-wrapper" style="width: calc(100% - 30px); height:100%;">
        <span class="variable-collection-error-container">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="red-text text-lighten-2 bi bi-bug-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956zM13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/>
          </svg>
        </span>
        <span class="static-physics-equation editable-variable" latex="<%= opts.ls + "=" %>" rid="<%= opts.variable.rid %>"></span>
        <% if(opts.variable.state == "unknown" && opts.variable.currentState == "known"){%>
          <span onclick="ToggleVariableState('<%= opts.variable.rid %>')" class="variable-tag known tooltipped" data-position="bottom" data-tooltip="This variable is defined using all known or given variables in your equations">known</span>
          <% if(opts.variable.value != undefined){%>
            <span class="variable-value-container">
              <span class="variable-value static-mathfield tooltipped" data-position="bottom" data-tooltip="This value was calculated and can not be edited" type="<%= opts.variable.type %>" rid="<%= opts.variable.rid %>" latex="<%= opts.variable.value %>"></span>
            </span>
          <%}%>  
        <%}else if(opts.variable.state == "unknown"){%>
          <span onclick="ToggleVariableState('<%= opts.variable.rid %>')" class="variable-tag unknown tooltipped" data-position="bottom" data-tooltip="This variable is an unknown variable">unknown</span>
        <%}else if(opts.variable.state == "given"){%>
          <span onclick="ToggleVariableState('<%= opts.variable.rid %>')" class="variable-tag given tooltipped" data-position="bottom" data-tooltip="This variable is known at the start of the problem">given</span>
          <span class="variable-value-container">
            <span class="variable-value" type="<%= opts.variable.type %>" rid="<%= opts.variable.rid %>" latex="<%= (opts.variable.value != undefined) ? opts.variable.value : "" %>"></span>
          </span>
        <%}%>  
        <span onclick="DefineVariableUnits($(this), '<%= opts.variable.rid %>')" class="variable-tag info undefined-units units"><%= opts.variable.units %></span>
      </div>
      <div class="valign-wrapper" style="width: 30px; height: 100%;">
        <span class="right delete-var" onclick="UpdateMyVariablesCollection({remove: true, cantRemove: true})"><i class="material-icons">close</i></span>
      </div>
    </div>
    `,
    "undefined-variable-pair": 
    `
    <div class="variable-row valign-wrapper undefined-variable <%= (opts.unused) ? "unused-variable" : "" %>" vector-rid="<%= opts.variableVector.rid %>" scalar-rid="<%= opts.variableVectorMagnitude.rid %>">
      <div class="valign-wrapper" style="width: calc(100% - 30px); height:100%;">
        <span class="variable-collection-error-container">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="red-text text-lighten-2 bi bi-bug-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956zM13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/>
          </svg>
        </span>
        <!--vector portion of the pair-->
        <span class="static-physics-equation editable-variable" latex="<%= opts.vectorLs + "=" %>" rid="<%= opts.variableVector.rid %>"></span>
        <% if(opts.variableVector.state == "unknown" && opts.variableVector.currentState == "known"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVector.rid %>')" class="variable-tag known tooltipped" data-position="bottom" data-tooltip="This variable is defined using all known or given variables in your equations">known</span>
          <% if(opts.variableVector.value != undefined){%>
            <span class="variable-value-container">
              <span class="variable-value static-mathfield tooltipped" data-position="bottom" data-tooltip="This value was calculated and can not be edited" type="<%= opts.variableVector.type %>" rid="<%= opts.variableVector.rid %>" latex="<%= opts.variableVector.value %>"></span>
            </span>
          <%}%>  
        <%}else if(opts.variableVector.state == "unknown"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVector.rid %>')" class="variable-tag unknown tooltipped" data-position="bottom" data-tooltip="This variable is an unknown variable">unknown</span>
        <%}else if(opts.variableVector.state == "given"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVector.rid %>')" class="variable-tag given tooltipped" data-position="bottom" data-tooltip="This variable is known at the start of the problem">given</span>
          <span class="variable-value-container">
            <span class="variable-value" type="<%= opts.variableVector.type %>" rid="<%= opts.variableVector.rid %>" latex="<%= (opts.variableVector.value != undefined) ? opts.variableVector.value : "" %>"></span>
          </span>
        <%}%>
        <!--vector magnitude portion of the pair-->
        <span class="static-physics-equation editable-variable" latex="<%= opts.vectorMagnitudeLs + "=" %>" rid="<%= opts.variableVectorMagnitude.rid %>"></span>
        <% if(opts.variableVectorMagnitude.state == "unknown" && opts.variableVectorMagnitude.currentState == "known"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVectorMagnitude.rid %>')" class="variable-tag known tooltipped" data-position="bottom" data-tooltip="This variable is defined using all known or given variables in your equations">known</span>
          <% if(opts.variableVectorMagnitude.value != undefined){%>
            <span class="variable-value-container">
              <span class="variable-value static-mathfield tooltipped" data-position="bottom" data-tooltip="This value was calculated and can not be edited" type="<%= opts.variableVectorMagnitude.type %>" rid="<%= opts.variableVectorMagnitude.rid %>" latex="<%= opts.variableVectorMagnitude.value %>"></span>
            </span>
          <%}%>  
        <%}else if(opts.variableVectorMagnitude.state == "unknown"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVectorMagnitude.rid %>')" class="variable-tag unknown tooltipped" data-position="bottom" data-tooltip="This variable is an unknown variable">unknown</span>
        <%}else if(opts.variableVectorMagnitude.state == "given"){%>
          <span onclick="ToggleVariableState('<%= opts.variableVectorMagnitude.rid %>')" class="variable-tag given tooltipped" data-position="bottom" data-tooltip="This variable is known at the start of the problem">given</span>
          <span class="variable-value-container">
            <span class="variable-value" type="<%= opts.variableVectorMagnitude.type %>" rid="<%= opts.variableVectorMagnitude.rid %>" latex="<%= (opts.variableVectorMagnitude.value != undefined) ? opts.variableVectorMagnitude.value : "" %>"></span>
          </span>
        <%}%>
        <span onclick="DefineVariableUnits($(this), '<%= opts.variableVector.rid %>', '<%= opts.variableVectorMagnitude.rid %>' )" class="variable-tag info undefined-units units"><%= opts.variableVectorMagnitude.units %></span>
      </div>
      <div class="valign-wrapper" style="width: 30px; height: 100%;">
        <span class="right delete-var" onclick="UpdateMyVariablesCollection({remove: true, cantRemove: true})"><i class="material-icons">close</i></span>
      </div>
    </div>
    `,
  },
  "units-search-results":
  `
  <% for(let i = 0; i < results.length; i++){%>
  <div class="row my-row si-unit-row" onclick="UpdateVariableUnits($(this))" fullUnitssString="<%= results[i] %>">
    <div class="col m12">
      <%- results[i] %>
    </div>
  </div>
  <% } %>
  `,
  "imported-variables-modal-content":
  `
  <div class="row">
    <h4><%= header %></h4>
  </div>
  <div class="row">
    <div class="col m12">
      <span style="color: #616161; font-size: 14px;">By importing variables, the editor can understand what units a variable is which makes it easier to write equations and get them checked. For example, if you import the variable 't' as time whenever you use the variable 't' or 't' with any subscript the editor will understand that the variable has units of time</span>
    </div>
  </div>
  <div class="row">
    <div class="col m12">
      <label>
        <input id="import-all-variables" type="checkbox" />
        <span>Import All Variables</span>
      </label>
    </div>
  </div>
  <div class="row">
    <table>
      <thead>
        <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Use</th>
        </tr>
      </thead>

      <tbody>
        <% for (const [key, value] of Object.entries(importedVariables)) {%>
        <tr>
          <td><span class="static-physics-equation" latex="<%= key %>"></span></td>
          <td><%= value.quantityDescription %> (<%= value.units %>)</td>
          <td>
            <% if(value.disabled){%>
            <label>
              <input class="variable-checkbox" type="checkbox" rid="<%= value.rid %>" latex="<%= key %>" disabled="disabled"/>
              <span class="already-imported-variable tooltipped" data-position="bottom" data-tooltip="This variable is already imported with possibly a different definition"></span>
            </label>
            <%}else if(value.checked){%>
              <label>
                <input class="variable-checkbox" type="checkbox" rid="<%= value.rid %>" latex="<%= key %>" checked="checked"/>
                <span class=""></span>
              </label>
            <%}else{%>
              <label>
                <input class="variable-checkbox" type="checkbox" rid="<%= value.rid %>" latex="<%= key %>"/>
                <span class=""></span>
              </label>
            <%}%>
          </td>
        </tr>
        <% } %>
      </tbody>
    </table>
  </div>
  `,
  "no-variables-defined":
  `
  <div id="no-variables-defined" class="center">The physics constants you import and variables you use in the editor will appear in this tab</div>
  `,
  "mathfield-warning":
  `
  <%for(let i = 0; i < warnings.length; i++){%>
    <div>
      <span class="warning-header"><%= warnings[i].warning %>:</span><span class="log-static-latex" latex="<%= warnings[i].variables.join(",") %>"></span>
    </div>
  <%}%>  
  `,
  "mathfield-error":
  `
  <%for(let i = 0; i < errors.length; i++){%>
    <div class="row my-row">
      <div class="row my-row">
        <div class="error-header"><span class="left"><%= errors[i].error.type %>:</span></div>
        <div><span class="left"><%= errors[i].error.description %></span></div>
      </div>
      <%if(errors[i].latexExpressions != undefined){%>
        <div class="row my-row">
          <div class="left">
            <%for(let j = 0; j < errors[i].latexExpressions.length; j++){%>
              <div><span class="log-static-latex left" latex="<%= errors[i].latexExpressions[j] %>"></span></div>
            <%}%>  
          </div>
        </div>
      <%}%>  
    </div>
  <%}%>     
  `,
  "video-info-popup":
  `
  <div id="<%= id %>" info="<%= JSON.stringify(info) %>" class="more-information-videos-container" onmouseover="SelectInfoPopup('<%= id %>')">
    <div class="more-information-videos">
        <div class="carousel carousel-slider">
            <div class="carousel-fixed-item center">
              <a id="btn-play-info-video" onclick="PlayInfoVideo('<%= id %>')" class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">play_arrow</i></a>
            </div>
            <% for(let i = 0; i < info.videos.length; i++){%>
            <div class="carousel-item white-text">
              <div class="video-thumbnail-container"><img src="<%= info.videos[i].thumbnail %>"></div>
              <div class="video-title-container">
                <span class="new badge video-level <%= info.videos[i].level %>" data-badge-caption="<%= info.videos[i].level %>"></span>
                <span><%= info.videos[i].title %></span>
              </div>
            </div>
            <% } %>
        </div>
    </div>
  </div>
  `,
  "video-iframe-container":
  `
  <div class="video-iframe-container">
    <%- iframe %>
    <i class="material-icons close-iframe-container" onclick="CloseIframe()">close</i>
  </div>
  `,
};
