import{r as l,j as e,b as X,d as oe}from"./index-Cmow-nIL.js";import{u as de}from"./usePlan-DX5i7Bn8.js";import{a as Z}from"./axios-DXsv3KKR.js";const pe={plan:"Enterprise Free",price:0,quantity:"1"},v={plan:"Enterprise Pro",price:49,quantity:"1"},xe={plan:"Full Enterprise",price:490,quantity:"1"},me={plan:"Agency Free",price:0,quantity:"1"},ue={plan:"Agency Pro",price:49,quantity:"1"},he={plan:"Full Agency",price:490,quantity:"1"},ge=({plan:s})=>{const{checkSubscription:r}=de(),[a,n]=l.useState("EnterprisePro"),[p,c]=l.useState(v),o=x=>{switch(n(x.target.value),console.log(x.target.value),x.target.value){case"EnterpriseBasic":c(pe);break;case"EnterprisePro":c(v);break;case"EnterpriseFull":c(xe);break;case"AgencyBasic":c(me);break;case"AgencyPro":c(ue);break;case"AgencyFull":c(he);break;default:c(v);break}console.log(p)};return e.jsxs("div",{className:"rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 max-w-[1500px] flex-grow",children:[e.jsxs("div",{className:"rounded-xl border border-[#E1E6EF] p-5 md:p-10 flex flex-col gap-10 justify-start items-start flex-grow",children:[e.jsx("p",{className:"text-[30px] font-bold",children:"Plan Subscribed"}),e.jsx("hr",{}),e.jsxs("div",{className:"grid grid-cols-2 grid-rows-2 gap-10 w-full",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Plan Name"}),e.jsx("p",{className:"text-[20px] font-bold",children:s?s.plan:"None"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Price"}),e.jsxs("p",{className:"text-[20px] font-bold",children:[s?s.price:"0"," $"]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Quantity"}),e.jsx("p",{className:"text-[20px] font-bold",children:s?s.quantity:"0"})]})]})]}),e.jsx("div",{className:"rounded-xl border border-[#E1E6EF] p-5 md:p-10 w-full lg:w-auto",children:e.jsxs("div",{className:"flex flex-col gap-10 justify-center items-start w-full",children:[e.jsx("p",{className:"text-[30px] font-bold",children:"Upgrade plan"}),e.jsx("hr",{}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-5 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-5 w-full font-bold",children:[e.jsx("p",{className:"text-[30px] font-bold w-full lg:w-[300px]",children:"Enterprise Packages"}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"enterprise",value:"EnterpriseBasic",id:"enterprisebasic",onChange:o,checked:a==="EnterpriseBasic",className:" cursor-pointer"}),e.jsx("label",{htmlFor:"enterprisebasic",className:"ml-5 cursor-pointer text-[18px]",children:"Basic   0$"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"enterprise",value:"EnterprisePro",id:"enterprisepro",onChange:o,checked:a==="EnterprisePro",className:" cursor-pointer"}),e.jsx("label",{htmlFor:"enterprisepro",className:"ml-5 cursor-pointer text-[18px]",children:"Pro   49$"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"enterprise",value:"EnterpriseFull",id:"enterprisefull",onChange:o,checked:a==="EnterpriseFull",className:" cursor-pointer"}),e.jsx("label",{htmlFor:"enterprisefull",className:"ml-5 cursor-pointer text-[18px]",children:"Full   449$"})]})]}),e.jsxs("div",{className:"flex flex-col gap-5 w-full font-bold",children:[e.jsx("p",{className:"text-[30px] font-bold",children:"Agency Packages"}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"agency",value:"AgencyBasic",id:"agencybasic",onChange:o,checked:a==="AgencyBasic",className:" cursor-pointer"}),e.jsx("label",{htmlFor:"agencybasic",className:"ml-5 cursor-pointer text-[18px]",children:"Basic   0$"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"agency",value:"AgencyPro",id:"agencypro",onChange:o,checked:a==="AgencyPro",className:" cursor-pointer"}),e.jsx("label",{htmlFor:"agencypro",className:"ml-5 cursor-pointer text-[18px]",children:"Pro   49$"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"agency",value:"AgencyFull",id:"agencyfull",onChange:o,checked:a==="AgencyFull",className:" cursor-pointer"}),e.jsx("label",{htmlFor:"agencyfull",className:"ml-5 cursor-pointer text-[18px]",children:"Full   449$"})]})]})]}),e.jsx("button",{onClick:()=>r(p),className:"px-8 rounded-full bg-white text-black hover:bg-[#4A16D8] hover:text-white border border-gray-500 duration-300 hover:border-[#4A16D8] mx-auto py-2 w-full mb-3",children:"Upgrade"})]})})]})},fe=({user:s,plan:r})=>e.jsxs("div",{className:"rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 max-w-[1400px] flex-grow",children:[e.jsxs("div",{className:"rounded-xl border border-[#E1E6EF] p-5 md:p-10",children:[e.jsxs("div",{className:"flex flex-row flex-wrap gap-10 justify-center md:justify-start items-center",children:[e.jsx("img",{loading:"lazy",src:s.email?s.picture:"Nil",alt:"user Image",className:"rounded-full w-32 h-32"}),e.jsx("p",{className:"text-[36px] font-bold",children:s.name&&s.name})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex flex-col gap-10 justify-center items-start w-full",children:[e.jsx("p",{className:"text-[30px] font-bold mt-5",children:"Personal Information"}),e.jsxs("div",{className:"grid grid-cols-2 grid-rows-2 gap-10 w-full",children:[e.jsxs("div",{children:[e.jsx("p",{children:"First Name"}),e.jsx("p",{className:"text-[20px] font-bold",children:s.given_name?s.given_name:"Nil"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Last Name"}),e.jsx("p",{className:"text-[20px] font-bold",children:s.family_name?s.family_name:"Nil"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Email"}),e.jsx("p",{className:"text-[20px] font-bold",children:s.email?s.email:"Nil"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Phone Number"}),e.jsx("p",{className:"text-[20px] font-bold",children:s.phone?s.phone:"Nil"})]})]})]})]}),e.jsxs("div",{className:"rounded-xl border border-[#E1E6EF] p-5 md:p-10 flex flex-col gap-10 justify-start items-start flex-grow",children:[e.jsx("p",{className:"text-[30px] font-bold",children:"Plan Subscribed"}),e.jsx("hr",{}),e.jsxs("div",{className:"grid grid-cols-2 grid-rows-2 gap-10 w-full",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Plan Name"}),e.jsx("p",{className:"text-[20px] font-bold",children:r?r.plan:"None"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Price"}),e.jsxs("p",{className:"text-[20px] font-bold",children:[r?r.price:"0"," $"]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Quantity"}),e.jsx("p",{className:"text-[20px] font-bold",children:r?r.quantity:"0"})]})]})]})]}),je=()=>{const[s,r]=l.useState(!1),a=()=>{var n=document.getElementById("invitelink");n.select(),n.setSelectionRange(0,99999),navigator.clipboard.writeText(n.value),r(!0)};return e.jsxs("div",{className:"rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 w-auto",children:[e.jsxs("div",{className:"rounded-xl border border-[#E1E6EF] p-5 md:p-10 flex flex-col gap-10 justify-start items-start",children:[e.jsxs("form",{className:"w-full lg:w-[550px]",children:[e.jsx("p",{className:"text-[36px] font-bold text-[#727272]] text-[#727272]",children:"Add Team members"}),e.jsxs("div",{className:"flex flex-row gap-5 lg:gap-10 w-full my-3",children:[e.jsx("input",{type:"text",className:"inputContact",placeholder:"First Name"}),e.jsx("input",{type:"text",className:"inputContact",placeholder:"Last Name"})]}),e.jsx("input",{type:"email",className:"inputContact my-3 w-full",placeholder:"Email"}),e.jsx("button",{className:"nav-btn bg-[#4A16D8] text-white border border-[#4A16D8] float-end",children:"Add"}),e.jsx("p",{className:"text-[36px] font-bold text-[#727272]] text-[#727272] mt-10",children:"Or Invite Via a Link"})]}),s&&e.jsxs("p",{className:"bg-green-300 py-2 px-5 flex flex-row items-center gap-4 rounded-xl text-[18px] w-full",children:[e.jsx("img",{src:"./header/checkmark.png",className:"w-7 h-7",alt:"warning"}),"Link Copied"]}),e.jsxs("div",{className:"flex flex-row gap-10 w-full",children:[e.jsx("input",{id:"invitelink",type:"text",className:"inputContact",placeholder:"invitelink@harryphoto.com",value:"invitelink@harryphoto.com",disabled:!0}),e.jsx("button",{onClick:a,className:"bg-[#EDEDED] rounded-md py-2 px-5",children:"Copy"})]})]}),e.jsx("div",{className:"rounded-xl border border-[#E1E6EF] p-5 md:p-10 flex flex-col gap-10 justify-start items-start",children:e.jsx("p",{className:"text-[36px] font-bold text-[#727272]] text-[#727272]",children:"Team members"})})]})},be=()=>{const{notify:s}=X();return l.useEffect(()=>{console.log(s)},[]),e.jsx("div",{className:"rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 max-w-[1400px] flex-grow",children:e.jsxs("div",{className:"rounded-xl border border-[#E1E6EF] p-5 md:p-10 w-full",children:[e.jsx("p",{className:"text-[30px] font-bold",children:"Notifications"}),e.jsx("hr",{}),e.jsx("ul",{className:"mt-5 ml-4",style:{listStyleType:"disc"},children:e.jsx("li",{children:s})})]})})},we=()=>e.jsx("div",{className:"rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 max-w-[1400px] flex-grow",children:e.jsxs("div",{className:"rounded-xl border border-[#E1E6EF] p-5 md:p-10 w-full",children:[e.jsx("p",{className:"text-[30px] font-bold",children:"Security"}),e.jsx("p",{children:"Your account is valuable to hackers. To make your acocunt more secure, enable 2-step verification"}),e.jsx("hr",{}),e.jsxs("div",{className:"flex flex-row justify-between mt-10",children:[e.jsx("p",{className:"text-[30px] font-bold",children:"Google 2FA Verification"}),e.jsx("button",{className:"nav-btn bg-white text-black hover:bg-[#4A16D8] hover:text-white border border-gray-500 hover:border-[#4A16D8]",children:"Enable"})]})]})}),ve=({user:s,plan:r})=>{const[a,n]=l.useState("1"),p=c=>{switch(c){case"1":n("1");break;case"2":n("2");break;case"3":n("3");break;case"4":n("4");break;case"5":n("5");break;default:n("1")}};return e.jsx("div",{className:"bg-[#F9FAFB] w-full h-auto ",children:e.jsxs("div",{className:"mt-5 md:mt-16 mx-5 md:mx-20",children:[e.jsx("p",{className:"text-[36px] font-bold",children:"Account Settings"}),e.jsx("div",{className:"flex flex-row flex-wrap gap-x-4 justify-start ",children:oe.map(c=>e.jsx("a",{href:c.link,className:`accountSettingButtons ${a===c.id?"font-bold":"font-regular"}`,onClick:()=>p(c.id),children:c.name},c.id))}),a==="1"&&e.jsx(fe,{user:s,plan:r}),a==="2"&&e.jsx(ge,{plan:r}),a==="3"&&e.jsx(je,{}),a==="4"&&e.jsx(be,{}),a==="5"&&e.jsx(we,{})]})})},Ne=({plan:s,user:r})=>e.jsx("div",{className:"bg-[#F9FAFB] w-full h-auto ",children:e.jsxs("div",{className:"mt-5 md:mt-16 mx-5 md:mx-20",children:[e.jsx("p",{className:"text-[36px] font-bold",children:"Product Details"}),e.jsx("div",{className:"rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 max-w-[1400px] flex-grow mt-10",children:e.jsxs("div",{className:"rounded-xl border border-[#E1E6EF] p-5 md:p-10 w-full",children:[e.jsx("p",{className:"text-[30px] font-bold",children:"Product"}),e.jsx("hr",{}),e.jsxs("div",{className:"grid grid-cols-2 grid-rows-2 gap-10 w-full mt-10",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Name"}),e.jsx("p",{className:"text-[20px] font-bold",children:"Harry Photo"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Owner"}),e.jsx("p",{className:"text-[20px] font-bold",children:r.name&&r.name})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Images Owned"}),e.jsx("p",{className:"text-[20px] font-bold",children:"0"})]})]}),e.jsx("hr",{}),e.jsx("hr",{}),e.jsx("p",{className:"text-[30px] font-bold mt-10",children:"Plan Subscribed"}),e.jsx("hr",{}),e.jsxs("div",{className:"grid grid-cols-2 grid-rows-2 gap-10 w-full mt-10",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Plan Name"}),e.jsx("p",{className:"text-[20px] font-bold",children:s?s.plan:"None"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Price"}),e.jsxs("p",{className:"text-[20px] font-bold",children:[s?s.price:"0"," $"]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Quantity"}),e.jsx("p",{className:"text-[20px] font-bold",children:s?s.quantity:"0"})]})]})]})})]})}),ye=()=>{const[s,r]=l.useState(""),[a,n]=l.useState(""),[p,c]=l.useState(null),[o,x]=l.useState(null),[f,h]=l.useState(""),[j,m]=l.useState(""),[d,u]=l.useState(null),[N,y]=l.useState(null),[E,F]=l.useState(""),[ee,C]=l.useState(""),[se,k]=l.useState(""),[P,S]=l.useState(""),[te,D]=l.useState(""),[_,A]=l.useState(null),[I,q]=l.useState(null),[U,$]=l.useState(""),[le,B]=l.useState(""),[T,L]=l.useState(null),[H,R]=l.useState(null),[M,O]=l.useState(""),[ae,Q]=l.useState(""),[V,G]=l.useState(null),[z,Y]=l.useState(null),[re,J]=l.useState(""),[ne,K]=l.useState(!1),[ie,W]=l.useState(!1),g=(t,i,b)=>{const w=t.target.files[0];w&&(i(w),b(URL.createObjectURL(w)))},ce=async t=>{t.preventDefault();const i=new FormData;i.append("mainTitle",s),i.append("mainDescription",a),p&&i.append("descriptionImage",p),i.append("heading1",f),i.append("description1",j),d&&i.append("description1Image",d),i.append("heading2",E),i.append("description2_1",ee),i.append("description2_2",se),i.append("heading3_1",P),i.append("description3_1",te),_&&i.append("description3_1Image",_),i.append("heading3_2",U),i.append("description3_2",le),T&&i.append("description3_2Image",T),i.append("heading3_3",M),i.append("description3_3",ae),V&&i.append("description3_3Image",V),i.append("conclusion",re);try{await Z.post("http://localhost:4000/api/user/uploadarticle",i,{headers:{"Content-Type":"multipart/form-data"}}),K(!0),W(!1),r(""),n(""),c(null),x(null),h(""),m(""),u(null),y(null),F(""),C(""),k(""),S(""),D(""),A(null),q(null),$(""),B(""),L(null),R(null),O(""),Q(""),G(null),Y(null),J("")}catch(b){W(!0),K(!1),console.error("Error uploading:",b)}};return e.jsxs("div",{className:"bg-[#F9FAFB] w-full h-auto",children:[ne&&e.jsxs("p",{className:"bg-green-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]",children:[e.jsx("img",{src:"./header/checkmark.png",className:"w-10 h-10",alt:"checkmark"}),"Article uploaded successfully"]}),ie&&e.jsxs("p",{className:"bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]",children:[e.jsx("img",{src:"./header/warning.png",className:"w-10 h-10",alt:"warning"}),"Failed to upload article. Please try again"]}),e.jsx("div",{className:"pt-5 mx-2 md:mx-20",children:e.jsx("div",{className:"p-5 md:p-10",children:e.jsx("div",{className:"rounded-xl border border-[#E1E6EF] bg-white p-5",children:e.jsxs("form",{className:"w-full",children:[e.jsx("p",{className:"text-xl md:text-3xl font-bold text-[#727272]",children:"Upload An Article"}),e.jsxs("div",{className:"flex flex-col gap-5 lg:gap-4 w-full my-3",children:[e.jsx("input",{type:"text",value:s,onChange:t=>r(t.target.value),placeholder:"Article Title",className:"inputContact w-full",required:!0}),e.jsx("textarea",{onChange:t=>n(t.target.value),className:"inputContact w-full",placeholder:"Type the article description here",rows:3,required:!0}),e.jsx("input",{type:"file",accept:"image/*",onChange:t=>g(t,c,x),className:"my-2"}),o&&e.jsx("img",{src:o,alt:"Description Preview",className:"w-32 h-32 object-cover my-2"}),e.jsx("input",{type:"text",value:f,onChange:t=>h(t.target.value),placeholder:"Heading 1",className:"inputContact w-full",required:!0}),e.jsx("textarea",{onChange:t=>m(t.target.value),className:"inputContact w-full",placeholder:"Description 1",rows:5,required:!0}),e.jsx("input",{type:"file",accept:"image/*",onChange:t=>g(t,u,y),className:"my-2"}),N&&e.jsx("img",{src:N,alt:"Description 1 Preview",className:"w-32 h-32 object-cover my-2"}),e.jsx("input",{type:"text",value:E,onChange:t=>F(t.target.value),placeholder:"Heading 2",className:"inputContact w-full",required:!0}),e.jsx("textarea",{onChange:t=>C(t.target.value),className:"inputContact w-full",placeholder:"Description 2 - Paragraph 1",rows:5,required:!0}),e.jsx("textarea",{onChange:t=>k(t.target.value),className:"inputContact w-full",placeholder:"Description 2 - Paragraph 2",rows:5,required:!0}),e.jsx("input",{type:"text",value:P,onChange:t=>S(t.target.value),placeholder:"Heading 3.1",className:"inputContact w-full",required:!0}),e.jsx("textarea",{onChange:t=>D(t.target.value),className:"inputContact w-full",placeholder:"Description 3.1",rows:5,required:!0}),e.jsx("input",{type:"file",accept:"image/*",onChange:t=>g(t,A,q),className:"my-2"}),I&&e.jsx("img",{src:I,alt:"Description 3.1 Preview",className:"w-32 h-32 object-cover my-2"}),e.jsx("input",{type:"text",value:U,onChange:t=>$(t.target.value),placeholder:"Heading 3.2",className:"inputContact w-full",required:!0}),e.jsx("textarea",{onChange:t=>B(t.target.value),className:"inputContact w-full",placeholder:"Description 3.2",rows:5,required:!0}),e.jsx("input",{type:"file",accept:"image/*",onChange:t=>g(t,L,R),className:"my-2"}),H&&e.jsx("img",{src:H,alt:"Description 3.2 Preview",className:"w-32 h-32 object-cover my-2"}),e.jsx("input",{type:"text",value:M,onChange:t=>O(t.target.value),placeholder:"Heading 3.3",className:"inputContact w-full",required:!0}),e.jsx("textarea",{onChange:t=>Q(t.target.value),className:"inputContact w-full",placeholder:"Description 3.3",rows:5,required:!0}),e.jsx("input",{type:"file",accept:"image/*",onChange:t=>g(t,G,Y),className:"my-2"}),z&&e.jsx("img",{src:z,alt:"Description 3.3 Preview",className:"w-32 h-32 object-cover my-2"}),e.jsx("textarea",{onChange:t=>J(t.target.value),className:"inputContact w-full",placeholder:"Conclusion",rows:5,required:!0})]}),e.jsx("div",{className:"w-full flex justify-end",children:e.jsx("button",{onClick:ce,className:"mt-5 bg-[#98D9FF] w-[200px] lg:w-[300px] h-[50px] lg:h-[60px] text-xl lg:text-3xl text-[#252733] font-bold rounded-xl",children:"Publish Article"})})]})})})})]})},Ee=()=>{const[s,r]=l.useState("photos"),[a,n]=l.useState({preview:null,categoryFile:null}),[p,c]=l.useState(""),[o,x]=l.useState(""),f=m=>{r(m.target.value),n({preview:null,categoryFile:null}),c("")},h=m=>{const{name:d,files:u}=m.target;n({...a,[d]:u[0]}),(d==="preview"||d==="categoryFile"&&s==="photos")&&c(URL.createObjectURL(u[0]))},j=async m=>{m.preventDefault(),x("");const d=new FormData;d.append("category",s),s!=="photos"&&d.append("preview",a.preview),d.append("file",a.categoryFile);try{(await Z.post("http://localhost:4000/api/user/uploadimage/home",d,{headers:{"Content-Type":"multipart/form-data"}})).status===200&&x("Upload successful!")}catch(u){x("Upload failed. Please try again."),console.error("Error during file upload:",u)}};return e.jsxs("div",{className:"w-full mx-auto p-6 md:p-14 bg-white rounded shadow-md",children:[e.jsx("h1",{className:"text-xl md:text-3xl font-bold mb-4 text-gray-700 text-center",children:"Upload Files"}),o&&e.jsx("p",{className:`mt-4 text-center w-full p-3 bg-green-100  ${o.includes("successful")?"text-green-500":"text-red-500"}`,children:o}),e.jsxs("form",{onSubmit:j,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm md:text-lg font-semibold text-gray-600 mb-1",children:"Select Category"}),e.jsxs("select",{value:s,onChange:f,className:"block w-full p-2 border border-gray-300 rounded",children:[e.jsx("option",{value:"photos",children:"Photos"}),e.jsx("option",{value:"psds",children:"PSDs"}),e.jsx("option",{value:"mockups",children:"Mockups"}),e.jsx("option",{value:"vectors",children:"Vectors"}),e.jsx("option",{value:"pngs",children:"PNGs"}),e.jsx("option",{value:"socialMedia",children:"Social Media"})]})]}),s!=="photos"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm md:text-lg font-semibold text-gray-600 mb-1",children:"Upload Preview"}),e.jsx("input",{type:"file",name:"preview",onChange:h,accept:"image/*",className:"block w-full text-sm text-gray-500 border border-gray-300 rounded",required:!0})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm md:text-lg font-semibold text-gray-600 mb-1",children:["Upload ",s.toUpperCase()," File"]}),e.jsx("input",{type:"file",name:"categoryFile",onChange:h,className:"block w-full text-sm text-gray-500 border border-gray-300 rounded",required:!0})]})]}),s==="photos"&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm md:text-lg font-semibold text-gray-600 mb-1",children:"Upload Image"}),e.jsx("input",{type:"file",name:"categoryFile",onChange:h,accept:"image/*",className:"block w-full  text-sm text-gray-500 border border-gray-300 rounded",required:!0})]}),p&&e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("img",{src:p,alt:"Preview",className:"w-full md:w-48 md:h-60 object-contain rounded border border-gray-300"})}),e.jsx("div",{className:"text-right",children:e.jsx("button",{type:"submit",className:"w-60 bg-blue-500 text-white p-3 font-semibold text-xl rounded hover:bg-blue-600 transition",children:"Upload"})})]})]})},Fe=()=>{const{user:s,plan:r}=X(),[a,n]=l.useState("1");return e.jsxs("section",{className:"flex flex-row",children:[e.jsxs("nav",{className:"py-10 md:pr-5 w-auto md:w-[266px] h-lvh border-r-2 border-gray-300",children:[e.jsx("img",{src:"./header/menu-bar-admin.png",alt:"menubar",className:"h-4 w-4 ml-5"}),e.jsxs("div",{className:`flex flex-row justify-start items-center gap-2 py-2 w-full mt-10 cursor-pointer ${a==="1"&&"bg-[#E1E6EF] font-bold rounded-none md:rounded-r-lg"}`,onClick:()=>n("1"),children:[e.jsx("img",{src:a==="1"?"./header/overview-filled.png":"./header/overview.png",alt:"overviewfilled",className:"px-5 md:pr-0"}),e.jsx("p",{className:"text-[14px] font-light hidden md:inline-block",children:"Overview"})]}),e.jsxs("div",{className:`flex flex-row justify-start items-center gap-2 py-2 w-full mt-2 cursor-pointer ${a==="2"&&"bg-[#E1E6EF] font-bold rounded-r-lg"}`,onClick:()=>n("2"),children:[e.jsx("img",{src:a==="2"?"./header/product-filled.png":"./header/product.png",alt:"overviewfilled",className:"pl-5"}),e.jsx("p",{className:"text-[14px] font-light hidden md:inline-block",children:"Product"})]}),e.jsxs("div",{className:`flex flex-row justify-start items-center gap-2 py-2 w-full mt-2 mb-16 cursor-pointer ${a==="3"&&"bg-[#E1E6EF] font-bold rounded-r-lg"}`,onClick:()=>n("3"),children:[e.jsx("img",{src:a==="3"?"./header/product-filled.png":"./header/product.png",alt:"overviewfilled",className:"pl-5"}),e.jsx("p",{className:"text-[14px] font-light hidden md:inline-block",children:"Articles"})]}),e.jsx("hr",{}),e.jsx("p",{className:"pl-5 pt-5 font-bold",children:"Support"}),e.jsxs("div",{className:`flex flex-row justify-start items-center gap-2 py-2 w-full mt-2 cursor-pointer ${a==="4"&&"bg-[#E1E6EF] font-bold rounded-r-lg"}`,onClick:()=>n("4"),children:[e.jsx("img",{src:"./header/settings.png",alt:"overviewfilled",className:"pl-5"}),e.jsx("p",{className:"text-[14px] font-light hidden md:inline-block",children:"Settings"})]}),e.jsxs("div",{className:"flex flex-row justify-start items-center gap-2 py-2  w-full mt-2 cursor-pointer",children:[e.jsx("img",{src:"./header/moon.png",alt:"overviewfilled",className:"pl-5"}),e.jsx("p",{className:"text-[14px] font-light hidden md:inline-block",children:"Dark Mode"})]})]}),a==="1"&&e.jsx(Ee,{}),a==="2"&&e.jsx(Ne,{user:s,plan:r}),a==="3"&&e.jsx(ye,{}),a==="4"&&e.jsx(ve,{user:s,plan:r})]})},Se=l.memo(Fe);export{Se as default};
