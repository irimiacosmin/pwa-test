import{r as e,h as t,g as i}from"./p-83ba3037.js";import{I as o}from"./p-d8158e24.js";import{j as s}from"./p-1b1d03ce.js";import{T as a}from"./p-acc27727.js";import{C as n}from"./p-ae405330.js";import{B as l}from"./p-6a969f90.js";import{P as r}from"./p-2c4adcd7.js";var p=function(e,t,i,o){var s,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,i,n):s(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const h=class{constructor(t){e(this,t),this.componentSlot="",this.columns=1,this.layout=null}componentWillLoad(){this.columns=this.__host.children.length,Array.from(this.__host.children).forEach(e=>{"style"===e.tagName.toLowerCase()&&this.columns--}),this.componentSlot=this.__host.innerHTML;let e=this.__host.querySelector("style");e?(this.__host.innerHTML=e.outerHTML,this.componentSlot=this.componentSlot.replace(e.outerHTML,"")):this.__host.innerHTML=""}render(){return t("psk-grid",{innerHTML:this.componentSlot,columns:this.columns,layout:this.layout})}get __host(){return i(this)}};p([n()],h.prototype,"__host",void 0),p([a({isMandatory:!0,propertyType:"string",description:["This attribute will set the layout for the components inside the grid, according to the number of columns.",'Example: <psk-grid columns="3" layout="xs=[12,12,12] s=[6,6,12] m=[3,3,6] l=[3,4,5]" xl=[3,4,5]>',"There are 5 possible breakpoints, according to Bootstrap documentation: xs, s, m, l and xl. For each breakpoint you want to use, the number of the values must be the same with the number of the columns, otherwise, the breakpoint will be ignored.",'Each breakpoint will be written in the following manner: breakpoint=[value1, value2,... valueN], where N is the number of columns and the value accepts numbers between 0 and 12 included, or the string "auto".',"If a value is 0, then the element for that column will be hidden. If a value is auto, it will have no bootstrap class and will inherit the design.","If any other value is set, the breakpoint will be ignored even if it has the same number of columns."],defaultValue:"null"})],h.prototype,"layout",void 0);var d=function(e,t,i,o){var s,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,i,n):s(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const c=class{constructor(t){e(this,t),this.options=[],this.selectOptions=null,this.label=null,this.value=null,this.selectionType="single",this.placeholder=null,this.required=!1,this.disabled=!1,this.invalidValue=null}componentWillLoad(){"single"!==this.selectionType&&"multiple"!==this.selectionType&&(this.selectionType="single"),this.selectOptions&&this.__createOptions()}__onChangeHandler(e){e.preventDefault(),e.stopImmediatePropagation();const t=e.target.value;this.modelHandler&&this.modelHandler.updateModel("value",t),this.eventName&&(e.preventDefault(),e.stopImmediatePropagation(),this._host.dispatchEvent(new r(this.eventName,{value:t,payload:this.eventData},{bubbles:!0,composed:!0,cancelable:!0})))}__createOptions(){let e=this.selectOptions.split("|");this.options=e.map(e=>{let t,i=e.trim().split(","),a=i[0].trim();return t=1===i.length?s(a,o,""):i[1].trim(),{label:a,value:t}})}render(){const e=this.label&&s(this.label,o,"").toLowerCase(),i=-1===this.options.findIndex(e=>e.value===this.value);let a=null;this.placeholder&&(a=t("option",{disabled:!0,label:this.placeholder,value:"",selected:i}));let n=[];return this.options&&(n=this.options.map(e=>{const i=e.value?e.value:e.label&&s(e.label,o,"");return t("option",{value:i,label:e.label,selected:!0===e.selected||this.value===i})})),t("div",{class:"form-group"},t("psk-label",{for:e,label:this.label}),t("select",{name:e,id:e,class:"form-control",disabled:this.disabled,required:this.required,multiple:"multiple"===this.selectionType,onChange:this.__onChangeHandler.bind(this)},a,n))}get _host(){return i(this)}};d([n(),l()],c.prototype,"modelHandler",void 0),d([a({description:["This property is providing the list of the options available for selection.",'Each option is sepparated by the special character "|" (pipe) (e.g. option 1 | option 2 | option 3).',"For each option, as a recommendation, you should add a value sepparated by comma.",'Example of options with values: "Romania, ROM | Italy, ITA | Germany, DE"',"If no value is provided for an option, the component will create one. It will take the option and will normalize it creating the value. Any character which does not comply to the rule, will be removed.",'The rule is that a label must match the folowing regular exprssion: "A-Za-z0-9_-"., which means that all the characers should be alpha-numeric and only two special characters are allowed (_ and -).'],isMandatory:!1,propertyType:"string"})],c.prototype,"selectOptions",void 0),d([a({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],c.prototype,"label",void 0),d([a({description:["Specifies the value of a psk-select component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],c.prototype,"value",void 0),d([a({description:["Specifies the type of the psk-select component.",'There are two possible values, "single" and "multiple". If no value is provided, "single" is assumed.'],isMandatory:!1,propertyType:"string",defaultValue:"single"})],c.prototype,"selectionType",void 0),d([a({description:["Specifies a short hint that describes the expected value of an psk-date-input component"],isMandatory:!1,propertyType:"string"})],c.prototype,"placeholder",void 0),d([a({description:["Specifies that at least one option must be selected before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],c.prototype,"required",void 0),d([a({description:["\tSpecifies that the component is disabled. Most of the times is used within conditional formatting of components.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],c.prototype,"disabled",void 0),d([a({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],c.prototype,"invalidValue",void 0),d([a({description:"By defining this attribute, the component will be able to trigger an event.",isMandatory:!1,propertyType:"string"})],c.prototype,"eventName",void 0),d([a({description:["This attribute is used to pass some information along with an event.","This attribute is taken into consideration only if the eventName has a value. If not, it is ignored."],isMandatory:!1,propertyType:"any"})],c.prototype,"eventData",void 0);export{h as psk_form_row,c as psk_select}