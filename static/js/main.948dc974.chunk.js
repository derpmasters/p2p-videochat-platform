(this.webpackJsonpquackamole=this.webpackJsonpquackamole||[]).push([[0],{172:function(e,t,a){e.exports=a(249)},174:function(e,t,a){},183:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=183},213:function(e,t){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(174),a(11)),c=a.n(o),i=a(18),l=a(41),s=a(143),u=a(144),m=a(20),d=Object(m.a)((function(e,t){switch(t.type){case"SET_CURRENT_ROOM":return e.data=t.payload.room,void(e.error=null);case"SET_CURRENT_ROOM_ERROR":return void(e.error=t.payload.error)}}),{data:{},error:null}),p=a(22),f=a(145),g=a.n(f),h=function(e){e&&e.getTracks().forEach((function(e){return e.stop()}))},E=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):{}},y={peer:null,socket:null,metadata:E("metadata"),loading:!1,error:null},b=Object(m.a)((function(e,t){switch(t.type){case"SET_LOCAL_USER_LOADING":return void(e.loading=t.payload.loading);case"INIT_LOCAL_USER_SOCKET":return e.socket=t.payload.socket,void(e.error=null);case"INIT_LOCAL_USER_PEER":return e.peer=t.payload.peer,void(e.error=null);case"SET_LOCAL_USER_METADATA":return e.metadata=t.payload.metadata,void(e.error=null);case"SET_LOCAL_USER_ERROR":return void(e.error=t.payload.error);case"RESET_LOCAL_USER":return void(e=y)}}),y),v=Object(m.a)((function(e,t){switch(t.type){case"ADD_PEER":var a=t.payload,n=a.peerId,r=a.metadata;return e.data[n]={metadata:r},void(e.error=null);case"REMOVE_PEER":var o=t.payload.peer;return delete e.data[o.id],void(e.error=null);case"SET_PEERS_ERROR":return void(e.error=t.payload.error)}}),{data:{},error:null}),x=Object(m.a)((function(e,t){switch(t.type){case"ADD_CONNECTION":var a=t.payload.connection;return e.data[a.peer]=a,void(e.error=null);case"REMOVE_CONNECTION":var n=t.payload.connection;return delete e.data[n.peer],void(e.error=null);case"SET_CONNECTIONS_ERROR":return void(e.error=t.payload.error)}}),{data:{},error:null}),O=Object(m.a)((function(e,t){switch(t.type){case"ADD_CALL":var a=t.payload.call;return e.data[a.peer]=a,void(e.error=null);case"REMOVE_CALL":var n=t.payload.call;return delete e.data[n.peer],void(e.error=null);case"SET_CALLS_ERROR":return void(e.error=t.payload.error)}}),{data:{},error:null}),w=Object(m.a)((function(e,t){switch(t.type){case"ADD_STREAM":var a=t.payload,n=a.peerId,r=a.stream;return e.data[n]=r,void(e.error=null);case"REMOVE_STREAM":var o=t.payload.peerId,c=e.data[o];return h(c),void delete e.data[o];case"SET_STREAM_ERROR":return void(e.error=t.payload.error);case"CLEAR_ALL_STREAMS":return Object.values(e.data).forEach(h),e.data={},void(e.error=null)}}),{data:{},error:null}),R=Object(m.a)((function(e,t){switch(t.type){case"SET_PLUGIN":var a=t.payload.plugin,n=a.url,r=a.name,o=a.iframe;return e.iframe=o,e.url=n,e.name=r,void(e.error=null);case"SET_PLUGIN_ERROR":return void(e.error=t.payload.error)}}),{iframe:null,url:"",name:"p2p-test-plugin",error:null}),S=Object(m.a)((function(e,t){switch(t.type){case"ADD_NEW_MESSAGE":return void e.push(t.payload)}}),[]),k=Object(l.combineReducers)({room:d,localUser:b,peers:v,calls:O,connections:x,streams:w,plugin:R,chat:S}),j=Object(l.createStore)(k,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(s.a))),C=a(27),N=a(14),_=a(275),I=a(277),L=a(161),T=Object(L.a)({palette:{primary:{main:"#2E7D32"},secondary:{main:"#FBC02D"}}}),A=a(293),D=a(90),U=a(290),M=a(281),P=a(82),B=a.n(P),z=a(7),G=a.n(z),F=a(12),q=a(149),W=a.n(q),V=a(150),J=a.n(V),K=function(e,t){return function(a,n){t&&a({type:"ADD_STREAM",payload:{peerId:e,stream:t}})}},H=function(e){return function(t,a){e&&t({type:"REMOVE_STREAM",payload:{peerId:e}})}},Q=function(e,t){return function(){var a=Object(F.a)(G.a.mark((function a(n,r){var o,c,i;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=e||r().localUser.peer,r().streams.data[o.id]){a.next=18;break}return a.prev=3,c={audio:!0,video:{frameRate:{ideal:20,max:25},width:{ideal:128},height:{ideal:72}}},a.next=7,navigator.mediaDevices.getUserMedia(t||c);case 7:return i=a.sent,n(K(o.id,i)),window.localStream=i,a.abrupt("return",i);case 13:a.prev=13,a.t0=a.catch(3),console.error("local stream couldnt be started",a.t0);case 16:a.next=19;break;case 18:console.log("local stream already active");case 19:case"end":return a.stop()}}),a,null,[[3,13]])})));return function(e,t){return a.apply(this,arguments)}}()},Y=function(e){return function(t,a){e&&(t({type:"ADD_CALL",payload:{call:e}}),t(Z(e)))}},X=function(e){return function(t,a){e&&t({type:"REMOVE_CALL",payload:{call:e}})}},Z=function(e){return function(t,a){e&&e.on("stream",(function(a){t(K(e.peer,a))}))}},$=function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a,n){var r,o,c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n().localUser.peer,t.t0=n().streams.data[r.id],t.t0){t.next=6;break}return t.next=5,a(Q(r));case 5:t.t0=t.sent;case 6:return o=t.t0,t.next=9,r.call(e.peer,o);case 9:c=t.sent,a(Y(c));case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},ee=function(e){return{type:"SET_CURRENT_ROOM_ERROR",payload:{error:e}}},te=function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a,n){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.peer){t.next=5;break}return t.next=3,a({type:"ADD_CONNECTION",payload:{connection:e}});case 3:return t.next=5,a(ne(e));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},ae=function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a,n){var r;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.peer){t.next=11;break}if(!n().streams.data[e.peer]){t.next=5;break}return t.next=5,a(H(e.peer));case 5:if(!(r=n().calls.data[e.peer])){t.next=9;break}return t.next=9,a(X(r));case 9:return t.next=11,a({type:"REMOVE_CONNECTION",payload:{connection:e}});case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},ne=function(e){return function(t,a){e&&e.connectionId&&(e.on("open",(function(){setTimeout((function(){return t(ce(e),500)}))})),e.on("data",(function(n){console.log("on connection data",n);var r=n.type;if(n.textMessage&&(t({type:"ADD_NEW_MESSAGE",payload:n.textMessage}),console.log("%c MESSAGE - ".concat(n.textMessage.peerId,': "').concat(n.textMessage.text,'"'),"background: black; color: white; padding: 1rem")),"PLUGIN_DATA"===r){window.postMessage(n.payload,"*");var o=a().plugin.iframe;o&&o.contentWindow.postMessage(n,"*")}if("PEER_INTRODUCTION"===r){console.log("Connected peer is introducing himself to you:",n.payload);var c=n.payload.metadata;t({type:"ADD_PEER",payload:{metadata:c,peerId:e.peer}})}})),e.on("close",(function(){t(ae(e))})))}},re=function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a,n){var r,o;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n().localUser.peer,e===r.id){t.next=9;break}return t.next=4,r.connect(e);case 4:return o=t.sent,t.next=7,a(te(o));case 7:return t.next=9,a($(o));case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},oe=function(e,t){return function(){var a=Object(F.a)(G.a.mark((function a(n,r){return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e&&e.send(t);case 1:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},ce=function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a,n){var r;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=n().localUser.metadata)&&a(oe(e,{type:"PEER_INTRODUCTION",payload:{metadata:r}}));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},ie=function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a,n){var r;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=e||n().localUser.peer)&&(r.on("open",(function(e){})),r.on("connection",(function(e){a(te(e))})),r.on("call",function(){var t=Object(F.a)(G.a.mark((function t(o){var c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n().streams.data[r.id];case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=a(Q(e));case 5:c=t.t0,o.answer(c),a(Y(o));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},le=a(279),se=Object(_.a)({containerStyle:{display:"flex",justifyContent:"center",paddingTop:"128px"},titleStyle:{display:"flex",justifyContent:"center",width:"100%",padding:"16px",color:"white",fontWeight:"bold",backgroundColor:"#388E3C"},nicknameStyle:{width:"90%",margin:"16px"},textfieldLink:{width:"90%",marginRight:"16px",marginLeft:"16px"},nextButton:{color:"white",boxShadow:"none",width:"100%"},alignbutton:{display:"flex",justifyContent:"center",width:"80%",marginTop:"24px",marginBottom:"24px"}}),ue=Object(i.b)((function(e){return{nickname:e.localUser.metadata.nickname||"",roomError:e.room.error}}),{setMetadata:function(e){return function(t,a){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("metadata",e),t({type:"SET_LOCAL_USER_METADATA",payload:{metadata:e}})}},setCurrentRoomError:ee,resetLocalUser:function(){return{type:"RESET_LOCAL_USER"}}})((function(e){var t=e.history,a=e.match,o=e.setMetadata,c=e.nickname,i=e.roomError,l=e.setCurrentRoomError,s=e.resetLocalUser,u=Object(n.useState)(c),m=Object(p.a)(u,2),d=m[0],f=m[1],g=Object(n.useState)(a.params.roomId),h=Object(p.a)(g,2),E=h[0],y=h[1],b=se();return r.a.createElement(I.a,{theme:T},r.a.createElement(A.a,{display:"flex",height:63,bgcolor:"#2E7D32",alignItems:"center",paddingLeft:"36px"},r.a.createElement(C.b,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement(B.a,null))),r.a.createElement(le.a,{container:!0,className:b.containerStyle},r.a.createElement(le.a,{item:!0,xs:11,md:6,lg:5},r.a.createElement(A.a,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",borderRadius:"5px",bgcolor:"white"},r.a.createElement(D.a,{variant:"h4",className:b.titleStyle},"Enter the room"),r.a.createElement(U.a,{required:!0,id:"outlined-required",label:"Nickname",variant:"outlined",value:d,className:b.nicknameStyle,onChange:function(e){f(e.target.value)}}),r.a.createElement(U.a,{required:!0,id:"outlined-required",label:"Room ID",variant:"outlined",value:E,className:b.textfieldLink,onChange:function(e){y(e.target.value)}}),r.a.createElement("div",{className:b.alignbutton},r.a.createElement(M.a,{onClick:function(e){o({nickname:d}),l(null),s(),t.push("/rooms/".concat(a.params.roomId))},size:"large",color:"secondary",variant:"contained",className:b.nextButton},"join")),i&&r.a.createElement(A.a,{color:"red",textAlign:"center"},i.error.message)))))})),me=a(88),de=function(e){return function(t,a){e&&t({type:"SET_PLUGIN",payload:{plugin:e}})}},pe={PLUGIN_SEND_TO_ALL_PEERS:function(e){return function(t,a){var n=Object.values(a().connections.data),r={type:"PLUGIN_DATA",payload:e.data.payload};console.log("PLUGIN_SEND_TO_ALL_PEERS",r),n.forEach((function(e){t(oe(e,r))}))}},PLUGIN_SEND_TO_PEER:function(e){return function(t,a){var n=e.data,r=n.peerId,o=n.payload,c=a().connections.data[r];t(oe(c,{type:"PLUGIN_DATA",payload:o}))}},PLUGIN_PLATFORM_CONTROL_REQUEST:function(){return console.log("plugin is requesting something from the platform (mute local user, rumble screen, etc")}},fe=Object(i.b)((function(e){return{plugin:e.plugin}}),{handlePluginMessage:function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a,n){var r;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.data.type&&e.data.type.startsWith("PLUGIN")&&(r=pe[e.data.type],a(r(e)));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},setPlugin:de})((function(e){var t=e.plugin,a=e.handlePluginMessage,o=e.setPlugin,c=Object(n.useRef)();return Object(n.useEffect)((function(){var e=function(e){a(e)};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}}),[]),Object(n.useEffect)((function(){c&&c.current&&o(Object(me.a)({},t,{iframe:c.current}))}),[c,t.url]),r.a.createElement(A.a,{flexGrow:1},t&&t.url&&r.a.createElement("iframe",{src:t.url,style:{width:"100%",height:"100%"},ref:c,title:"plugin content"}))})),ge=a(282),he=a(283),Ee=Object(_.a)((function(e){return{root:{display:"flex"},cardWrapper:{position:"relative",display:"flex",flexFlow:"column nowrap",marginBottom:"5px",width:"100%",height:"130px"},media:{width:"100%",height:"100%",objectFit:"cover"},displayName:{color:"white",opacity:"0.8",position:"absolute",bottom:"5px",left:"5px",fontSize:"0.9rem",userSelect:"none"}}})),ye=function(e){var t=e.stream,a=e.muted,o=void 0!==a&&a,c=e.user,i=Ee(),l=Object(n.useRef)(null),s=c.nickname;return Object(n.useEffect)((function(){!function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e.current&&t&&(e.current.srcObject=t,e.current.oncanplay=function(){e.current.play(),e.current.muted=a})}(l,t,o)}),[t]),r.a.createElement(ge.a,{className:i.cardWrapper},t?r.a.createElement("video",{ref:l,className:i.media}):r.a.createElement(he.a,{color:"inherit"}),r.a.createElement(A.a,{className:i.displayName},s))},be=Object(i.b)((function(e,t){var a=t.connection.peer;return{remoteStream:a?e.streams.data[a]:null,remoteNickname:(e.peers.data[a]?e.peers.data[a].metadata:{}).nickname||"missing Nickname"}}))((function(e){var t=e.remoteStream,a=e.remoteNickname;return r.a.createElement(ye,{stream:t,user:{nickname:a}})})),ve=Object(i.b)((function(e){return{connections:Object.values(e.connections.data)}}))((function(e){var t=e.connections;return r.a.createElement(r.a.Fragment,null,t&&t.map((function(e){return r.a.createElement(be,{key:e.connectionId,connection:e})})))})),xe=Object(_.a)((function(e){return{roomMediaManager:{padding:"5px"}}})),Oe=Object(i.b)((function(e){var t=e.localUser.peer,a=t?e.streams.data[t.id]:null;return{localPeerMetadata:e.localUser.metadata,localStream:a}}),{})((function(e){var t=e.localStream,a=e.localPeerMetadata,n=xe();return r.a.createElement(A.a,{bgcolor:"lightblue",width:"220px",minWidth:"150px",className:n.roomMediaManager},r.a.createElement(ye,{stream:t,muted:!0,user:{nickname:a.nickname}}),r.a.createElement(ve,null))})),we=a(151),Re=a.n(we),Se=a(152),ke=a.n(Se),je=a(292),Ce=a(280),Ne=a(287),_e=a(284),Ie=a(285),Le=a(286),Te=a(153),Ae=a.n(Te),De=Object(_.a)({list:{width:250},menuIcon:{margin:"8px"}}),Ue=[{name:"Random number",url:"https://andreas-schoch.github.io/p2p-test-plugin/"},{name:"Paint",url:"https://andreas-schoch.github.io/quackamole-plugin-paint/"},{name:"Gomoku",url:"https://derpmasters.github.io/quackamole-plugin-gomoku/"},{name:"Breakout game",url:"https://andreas-schoch.github.io/breakout-game/"}],Me=Object(i.b)((function(e){return{plugin:e.plugin}}),{setPlugin:de})((function(e){var t=e.plugin,a=e.setPlugin,o=De(),c=Object(n.useState)(!1),i=Object(p.a)(c,2),l=i[0],s=i[1],u=function(e){"keydown"!==e.type&&s(!l)},m=function(e){var n=e.currentTarget.dataset.index;a(t?Object(me.a)({},t,{},Ue[n]):Ue[n])};return r.a.createElement(I.a,{theme:T},r.a.createElement(M.a,null,r.a.createElement(Ae.a,{onClick:u,color:"primary",fontSize:"large",className:o.menuIcon}),r.a.createElement(je.a,{open:l,onClose:u,anchor:"left"},r.a.createElement("div",{className:o.list,role:"presentation",onClick:u},r.a.createElement(Ce.a,null,Ue.map((function(e,t){var a=e.name;return r.a.createElement(_e.a,{button:!0,key:a,onClick:m,"data-index":t},r.a.createElement(Ie.a,null,r.a.createElement(Re.a,null)),r.a.createElement(Le.a,{primary:a}))}))),r.a.createElement(Ne.a,null),r.a.createElement(Ce.a,null,r.a.createElement(_e.a,{button:!0},r.a.createElement(Ie.a,null,r.a.createElement(ke.a,null)),r.a.createElement(Le.a,{primary:"Browse Plugins"})))))))})),Pe=a(157),Be=a.n(Pe),ze=a(3),Ge=a(294),Fe=a(154),qe=a.n(Fe)()((function(e){var t=e.palette,a=e.spacing,n=a(2.5),r=a(4),o=t.primary.main;return{avatar:{width:r,height:r},leftRow:{textAlign:"left"},rightRow:{textAlign:"right"},msg:{padding:a(1,2),borderRadius:4,marginBottom:4,display:"inline-block",wordBreak:"break-word",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"14px"},left:{borderTopRightRadius:n,borderBottomRightRadius:n,backgroundColor:t.grey[100]},right:{borderTopLeftRadius:n,borderBottomLeftRadius:n,backgroundColor:o,color:t.common.white},leftFirst:{borderTopLeftRadius:n},leftLast:{borderBottomLeftRadius:n},rightFirst:{borderTopRightRadius:n},rightLast:{borderBottomRightRadius:n}}}),{name:"ChatMsg"})((function(e){var t=e.classes,a=e.avatar,n=e.messages,o=e.side,c=e.GridContainerProps,i=e.GridItemProps,l=e.AvatarProps,s=e.getTypographyProps;return r.a.createElement(le.a,Object.assign({container:!0,spacing:2,justify:"right"===o?"flex-end":"flex-start"},c),"left"===o&&r.a.createElement(le.a,Object.assign({item:!0},i),r.a.createElement(Ge.a,Object.assign({src:a},l,{className:Object(ze.a)(t.avatar,l.className)}))),r.a.createElement(le.a,{item:!0,xs:8},n.map((function(a,c){var i,l=s(a,c,e);return r.a.createElement("div",{key:a.id||c,className:t["".concat(o,"Row")]},r.a.createElement(D.a,Object.assign({align:"left"},l,{className:Object(ze.a)(t.msg,t[o],(i=c,0===i?t["".concat(o,"First")]:i===n.length-1?t["".concat(o,"Last")]:""),l.className)}),a))}))))}));qe.defaultProps={avatar:"",messages:[],side:"left",GridContainerProps:{},GridItemProps:{},AvatarProps:{},getTypographyProps:function(){return{}}};var We=qe,Ve=a(156),Je=a.n(Ve),Ke=a(155),He=Object(_.a)({chatContainer:{},textField:{width:"85%",marginRight:"5px"},chatSection:{display:"flex",justifyContent:"space-between",alignItems:"center"},customizeIcon:{border:"2px solid #E53935",borderRadius:"50%",color:"#E53935",height:35,width:35,padding:4,cursor:"pointer","&:hover":{background:"#E53935",color:"white"}}}),Qe=Object(i.b)((function(e){return{chatData:e.chat,localPeer:e.localUser.peer}}),{sendMessage:function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a,n){var r,o;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=Object.values(n().connections.data),o=n().localUser.peer,r.forEach((function(t){return t.send({textMessage:{text:e,peerId:o.id}})})),a({type:"ADD_NEW_MESSAGE",payload:{text:e,peerId:o.id}});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}})((function(e){var t=e.chatData,a=e.sendMessage,o=e.localPeer,c=He(""),i=Object(n.useState)(""),l=Object(p.a)(i,2),s=l[0],u=l[1],m=function(e){e.preventDefault(),a(s),u("")},d=function(e){return Object(Ke.toArray)(e).reduce((function(e,t){return"string"===typeof t?e+t:e+t.props.children}),"")},f=t.map((function(e,t){return e.peerId===o.id?r.a.createElement(We,{key:t,side:"right",messages:[d(e.text)]}):r.a.createElement(We,{key:t,avatar:"",messages:[d(e.text)]})}));return r.a.createElement("div",{className:c.chatContainer},f,r.a.createElement("div",{className:c.chatSection},r.a.createElement(U.a,{variant:"outlined",size:"small",multiline:!0,fullWidth:!0,className:c.textField,onChange:function(e){u(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&s.length>0&&m(e)},value:d(s)}),r.a.createElement(Je.a,{className:c.customizeIcon,onClick:m})))})),Ye=Object(_.a)({list:{display:"flex",flexDirection:"column",justifyContent:"flex-end",overflowY:"auto",WebkitFlex:"1 1 auto",height:"100%",width:400,padding:10},chatIcon:{margin:"8px"}}),Xe=function(){var e=Ye(),t=Object(n.useState)(!1),a=Object(p.a)(t,2),o=a[0],c=a[1],i=function(e){"keydown"!==e.type&&c(!o)};return r.a.createElement(I.a,{theme:T},r.a.createElement(M.a,null,r.a.createElement(Be.a,{onClick:i,color:"primary",fontSize:"large",className:e.chatIcon}),r.a.createElement(je.a,{open:o,onClose:i,anchor:"right"},r.a.createElement("div",{className:e.list,role:"presentation"},r.a.createElement(Qe,null)))))},Ze=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{bgcolor:"wheat",height:"10%",display:"flex",flexDirection:"row",width:1,justifyContent:"center"},r.a.createElement(Me,null),r.a.createElement(Xe,null),r.a.createElement(C.b,{to:"/"},"Home")))},$e=Object(i.b)((function(e){var t=e.localUser.peer;return{socket:e.localUser.socket,localPeer:t,localPeerLoading:e.localUser.loading,localMetadata:e.localUser.metadata,localStream:t?e.streams.data[t]:null,connections:e.connections.data,roomError:e.room.error,currentRoom:e.room.data}}),{addConnection:te,removeConnection:ae,initLocalUser:function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a,n){var r;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n().localUser.loading){t.next=2;break}return t.abrupt("return");case 2:a({type:"SET_LOCAL_USER_LOADING",payload:{loading:!0}}),"https",(r=J()("".concat("https","://").concat("derpmasters.online",":").concat("5002"),{secure:!0,query:(o=e,Object.entries(o).map((function(e){var t=Object(p.a)(e,2),a=t[0],n=t[1];return"".concat(a,"=").concat(n)})).join("&"))})).on("ready",(function(e){var t;a({type:"INIT_LOCAL_USER_SOCKET",payload:{socket:r}}),a((t=e,function(){var e=Object(F.a)(G.a.mark((function e(a,n){var r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new W.a(t,{host:"derpmasters.online",port:"5001",path:"/peer/signal",config:{iceServers:[{url:"stun:stun.l.google.com:19302"}]}});case 2:return r=e.sent,e.next=5,a({type:"INIT_LOCAL_USER_PEER",payload:{peer:r}});case 5:return e.next=7,a(ie(r));case 7:a({type:"SET_LOCAL_USER_LOADING",payload:{loading:!1}});case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))})),r.on("user-leave",(function(e){var t=n().connections.data[e];t&&a(ae(t))}));case 7:case"end":return t.stop()}var o}),t)})));return function(e,a){return t.apply(this,arguments)}}()},joinRoom:function(e,t){return function(){var a=Object(F.a)(G.a.mark((function a(n,r){var o,c,i;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o=r().localUser,c=o.socket,i=o.peer,c&&i&&c.emit("join",{roomId:e,password:t,peerId:i.id},function(){var e=Object(F.a)(G.a.mark((function e(t,a){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=8;break}return e.next=3,n(Q(i));case 3:return e.next=5,n({type:"SET_CURRENT_ROOM",payload:{room:a.room}});case 5:a.room.joinedUsers.forEach((function(e){return n(re(e))})),e.next=9;break;case 8:n(ee(t));case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 2:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},startLocalStream:Q,clearAllStreams:function(){return function(){var e=Object(F.a)(G.a.mark((function e(t,a){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLEAR_ALL_STREAMS"});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},setCurrentRoomError:ee})((function(e){var t=e.socket,a=e.localPeer,o=e.localMetadata,c=e.connections,i=e.match,l=e.history,s=e.initLocalUser,u=e.joinRoom,m=e.startLocalStream,d=e.clearAllStreams,p=e.roomError,f=e.currentRoom,g=e.localPeerLoading,h=e.setCurrentRoomError;return Object(n.useEffect)((function(){if(p)l.push("/room-lobby/".concat(i.params.roomId));else if(a||g||!o.nickname)a&&!f.id?(m(),u(i.params.roomId,"dummy123")):o.nickname&&o.nickname.length||(h({error:{name:"RoomError",message:"Please enter a nickname before joining the room."}}),l.push("/room-lobby/".concat(i.params.roomId)));else{var e=E("metadata");s(e)}}),[a,p,t]),Object(n.useEffect)((function(){return function(){t&&(t.emit("leave",i.params.roomId),t.disconnect()),c&&Object.values(c).forEach((function(e){return e.close()})),window.localStream&&window.localStream.getTracks().forEach((function(e){return e.stop()})),d()}}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{display:"flex",flexDirection:"column",width:1,height:"100%",justifyContent:"space-between"},r.a.createElement(A.a,{display:"flex",flexDirection:"row",width:1,height:"90%",justifyContent:"space-between"},r.a.createElement(fe,null),r.a.createElement(Oe,null)),r.a.createElement(Ze,null)))})),et=a(159),tt=a.n(et),at=a(160),nt=a.n(at),rt=a(158),ot=a.n(rt),ct=a(288),it=Object(_.a)({container:{display:"flex",flexDirection:"column",alignItems:"center",width:314,height:400,border:"solid 1px lightgrey",backgroundColor:"white"},smallScreenContainer:{display:"flex",flexDirection:"column",alignItems:"center",width:314,height:400,border:"solid 1px lightgrey",backgroundColor:"white",margin:8},alignTitle:{display:"flex",margin:24},customizeTitle:{fontWeight:"bold",marginLeft:4},customizeIcon:{marginRight:4},customizeText:{paddingLeft:16,paddingRight:16,marginBottom:16}}),lt=function(e){var t,a=it(),n=Object(ct.a)("(max-width: 950px)");return r.a.createElement("div",{className:n?a.smallScreenContainer:a.container},r.a.createElement("div",{className:a.alignTitle},"ToysOutlinedIcon"===(t=e.content.icon)?r.a.createElement(ot.a,{fontSize:"large",className:a.customizeIcon}):"AssessmentOutlinedIcon"===t?r.a.createElement(tt.a,{fontSize:"large",className:a.customizeIcon}):"CallOutlinedIcon"===t?r.a.createElement(nt.a,{fontSize:"large",className:a.customizeIcon}):void 0,r.a.createElement(D.a,{variant:"h5",className:a.customizeTitle},e.content.title)),r.a.createElement(D.a,{className:a.customizeText,align:"center"},e.content.text),r.a.createElement("img",{src:e.content.image,height:"181",width:"275",alt:"icon"}))},st=Object(_.a)({box:{display:"flex",width:"100%",height:"100%",justifyContent:"center"},smallScreenBox:{display:"flex",flexDirection:"column",width:"100%",height:"100%",alignItems:"center"},titleContainer:{display:"flex",flexDirection:"column",alignItems:"center",width:"30%",minWidth:310},titleStyle:{color:"white",fontWeight:"bold",marginTop:"98px"},buttonStyle:{borderRadius:"5px",width:"106px",fontWeight:"bold",color:"white",backgroundColor:"#FBC02D","&:hover":{backgroundColor:"#f9a825"},"&:focus":{outline:0}},mainImg:{display:"flex",height:224,width:309,borderRadius:5,marginTop:76,marginLeft:36,marginRight:36},smallScreenMainImg:{display:"flex",height:224,width:309,borderRadius:5,margin:36},bulletPoints:{display:"flex",justifyContent:"center",zIndex:"3",position:"relative",bottom:150},smallScreenBulletPoints:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:72}}),ut=function(){var e=st(),t=Object(ct.a)("(max-width: 950px)");return r.a.createElement(I.a,{theme:T},r.a.createElement(A.a,{height:63,bgcolor:"#2E7D32"}," "),r.a.createElement(A.a,{height:540,display:"flex",zIndex:1},r.a.createElement(A.a,{className:t?e.smallScreenBox:e.box,bgcolor:"#388E3C"},r.a.createElement("div",{className:e.titleContainer},r.a.createElement(D.a,{variant:"h3",className:e.titleStyle,gutterBottom:!0,align:"center"},"Create now a room and have fun"),r.a.createElement(C.b,{to:"/create-room",style:{textDecoration:"none"}},r.a.createElement(M.a,{size:"large",className:e.buttonStyle},"Create"))),r.a.createElement("img",{src:"https://www.zohowebstatic.com/sites/default/files/cliq-primetime-features.jpg",className:t?e.smallScreenMainImg:e.mainImg,alt:"quackamole room preview"}))),r.a.createElement("div",{className:t?e.smallScreenBulletPoints:e.bulletPoints},[{title:"Gaming",icon:"ToysOutlinedIcon",image:"https://image.freepik.com/free-vector/realistic-radiant-magic-portals-pink-vs-blue-with-light-effects-black-background-illustration_1284-31390.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec urna dolor. Maecenas vehicula dui ut quam imperdiet."},{title:"Working",icon:"AssessmentOutlinedIcon",image:"https://image.freepik.com/free-vector/teamwork-concept-illustration_1284-20522.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec urna dolor. Maecenas vehicula dui ut quam imperdiet."},{title:"Chatting",icon:"CallOutlinedIcon",image:"https://image.freepik.com/free-vector/group-chat-concept-illustration_114360-1495.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec urna dolor. Maecenas vehicula dui ut quam imperdiet."}].map((function(e,t){return r.a.createElement(lt,{content:e,key:e.title+t}," ")}))),r.a.createElement(C.b,{to:"/rooms/dummy-room-id"},"Test room"))},mt=Object(_.a)({containerStyle:{display:"flex",justifyContent:"center",paddingTop:"128px"},titleStyle:{display:"flex",justifyContent:"center",padding:"16px",color:"white",fontWeight:"bold",backgroundColor:"#388E3C",width:"100%"},formControl:{width:"20%",margin:"16px"},select:{borderColor:"#FB8C00","&:before":{borderColor:"#FB8C00"},"&:after":{borderColor:"#f57c00"}},textfield:{width:"90%",marginTop:"48px"},textfieldLink:{width:"90%",marginRight:"16px",marginLeft:"16px"},alignButton:{display:"flex",justifyContent:"flex-end",width:"100%",margin:"16px"},myButton:{color:"white",boxShadow:"none",margin:"16px"},paper:{padding:T.spacing(2),textAlign:"center",color:T.palette.text.secondary},copyLink:{display:"flex",alignItems:"center",marginTop:"16px",width:"90%"},nextButton:{color:"white",boxShadow:"none",marginBottom:"16px",width:"100%"},subtitle:{display:"flex",justifyContent:"center",margin:"16px"}}),dt=function(){var e=r.a.useState(""),t=Object(p.a)(e,2),a=t[0],n=t[1],o=r.a.useState(""),c=Object(p.a)(o,2),i=c[0],l=c[1],s=r.a.useState(""),u=Object(p.a)(s,2),m=u[0],d=u[1],f=r.a.useState(!0),h=Object(p.a)(f,2),E=h[0],y=h[1],b=mt(),v=function(e){n(e.target.value)},x=r.a.createElement(A.a,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",borderRadius:"5px",bgcolor:"white"},r.a.createElement(D.a,{variant:"h4",className:b.titleStyle},"Create a new room"),r.a.createElement(U.a,{required:!0,id:"outlined-required",label:"Room name",variant:"outlined",value:a,onChange:v,className:b.textfield}),r.a.createElement("div",{className:b.alignButton},r.a.createElement(M.a,{size:"large",color:"secondary",variant:"contained",className:b.myButton,onClick:function(){var e={name:a,password:"Test123.",maxUsers:4};if(a.length>0){fetch("".concat("https","://").concat("derpmasters.online",":").concat("5002","/api/rooms"),{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t,a=(t="derpmasters.github.io/quackamole",g()().test(t)?":3000":"");l("".concat("https","://").concat("derpmasters.github.io/quackamole").concat(a,"/#/room-lobby/").concat(e)),d(e),y(!1)}))}else console.log("error")}},"create"))),O=r.a.createElement(A.a,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",borderRadius:"5px",bgcolor:"white"},r.a.createElement(D.a,{variant:"h4",className:b.titleStyle},"Room was created"),r.a.createElement("div",{className:b.copyLink},r.a.createElement(U.a,{variant:"outlined",value:i,onChange:v,className:b.textfieldLink}),r.a.createElement(M.a,{size:"large",color:"secondary",variant:"contained",className:b.myButton,onClick:function(){navigator.clipboard.writeText(i)}},"copy")),r.a.createElement(D.a,{variant:"h6",align:"center",className:b.subtitle},"Share your link and invite someone to your room"),r.a.createElement(C.b,{to:"/room-lobby/".concat(m),style:{textDecoration:"none",width:"80%"}},r.a.createElement(M.a,{size:"large",color:"secondary",variant:"contained",className:b.nextButton,to:"/room-lobby/".concat(m)},"next")));return r.a.createElement(I.a,{theme:T},r.a.createElement(A.a,{display:"flex",height:63,bgcolor:"#2E7D32",alignItems:"center",paddingLeft:"36px"},r.a.createElement(C.b,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement(B.a,null))),r.a.createElement(le.a,{container:!0,className:b.containerStyle},r.a.createElement(le.a,{item:!0,xs:11,md:6,lg:5},E?x:O)))},pt=a(289),ft=function(){return r.a.createElement(pt.a,null,r.a.createElement(C.a,null,r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:ut}),r.a.createElement(N.a,{exact:!0,path:"/create-room",component:dt}),r.a.createElement(N.a,{exact:!0,path:"/room-lobby/:roomId",component:ue}),r.a.createElement(N.a,{path:"/rooms/:roomId",component:$e}))))};c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{store:j},r.a.createElement(ft,null))),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.948dc974.chunk.js.map