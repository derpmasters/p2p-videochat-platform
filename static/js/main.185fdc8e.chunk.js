(this.webpackJsonpquackamole=this.webpackJsonpquackamole||[]).push([[0],{175:function(e,t,a){e.exports=a(252)},177:function(e,t,a){},186:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=186},216:function(e,t){},252:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(177),a(11)),c=a.n(o),i=a(19),l=a(42),s=a(145),u=a(146),m={data:{},error:null},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_ROOM":return{data:t.payload.room,error:null};case"SET_CURRENT_ROOM_ERROR":return{data:e.data,error:t.payload.error};default:return e}},p=a(12),f=a(22),g=a(147),h=a.n(g),E=function(e){e&&e.getTracks().forEach((function(e){return e.stop()}))},b=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):{}},y={peer:null,socket:null,metadata:b("metadata"),error:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_LOCAL_USER_SOCKET":return Object(p.a)({},e,{socket:t.payload.socket,error:null});case"INIT_LOCAL_USER_PEER":return Object(p.a)({},e,{peer:t.payload.peer,error:null});case"SET_LOCAL_USER_METADATA":return Object(p.a)({},e,{metadata:t.payload.metadata,error:null});case"SET_LOCAL_USER_ERROR":return Object(p.a)({},e,{error:t.payload.error});case"RESET_LOCAL_USER":return y;default:return e}},x=a(34),O={data:{},error:null},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PEER":var a=t.payload,n=a.peerId,r=a.metadata;return{data:Object(p.a)({},e.data,Object(x.a)({},n,{metadata:r})),error:null};case"REMOVE_PEER":var o=Object(p.a)({},e.data),c=t.payload.peer;return delete o[c.id],{data:o,error:null};case"SET_PEERS_ERROR":return Object(p.a)({},e,{error:t.payload.error});default:return e}},j={data:{},error:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONNECTION":var a=t.payload.connection;return{data:Object(p.a)({},e.data,Object(x.a)({},a.peer,a)),error:null};case"REMOVE_CONNECTION":var n=Object(p.a)({},e.data),r=t.payload.connection;return delete n[r.peer],{data:n,error:null};case"SET_CONNECTIONS_ERROR":return Object(p.a)({},e,{error:t.payload.error});default:return e}},R={data:{},error:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CALL":var a=t.payload.call;return{data:Object(p.a)({},e.data,Object(x.a)({},a.peer,a)),error:null};case"REMOVE_CALL":var n=Object(p.a)({},e.data),r=t.payload.call;return delete n[r.peer],{data:n,error:null};case"SET_CALLS_ERROR":return Object(p.a)({},e,{error:t.payload.error});default:return e}},C={data:{},error:null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_STREAM":var a=t.payload,n=a.peerId,r=a.stream;return{data:Object(p.a)({},e.data,Object(x.a)({},n,r)),error:null};case"REMOVE_STREAM":var o=Object(p.a)({},e.data),c=t.payload.peerId,i=o[c];return E(i),delete o[c],{data:o,error:null};case"SET_STREAM_ERROR":return Object(p.a)({},e,{error:t.payload.error});case"CLEAR_ALL_STREAMS":return Object.values(e.data).forEach(E),Object(p.a)({},e,{data:{},error:null});default:return e}},_={url:"",name:"p2p-test-plugin",error:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PLUGIN":return Object(p.a)({},e,{},t.payload.plugin,{error:null});case"SET_PLUGIN_ERROR":return Object(p.a)({},e,{error:t.payload.error});default:return e}},T=a(164),L=[],A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_MESSAGE":return[].concat(Object(T.a)(e),[t.payload]);default:return e}},D=Object(l.combineReducers)({room:d,localUser:v,peers:w,calls:k,connections:S,streams:N,plugin:I,chat:A}),M=Object(l.createStore)(D,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(s.a))),U=a(27),P=a(15),B=a(278),z=a(280),G=a(163),F=Object(G.a)({palette:{primary:{main:"#2E7D32"},secondary:{main:"#FBC02D"}}}),q=a(296),W=a(92),V=a(293),J=a(284),K=a(85),H=a.n(K),Q=a(7),Y=a.n(Q),X=a(13),Z=a(151),$=a.n(Z),ee=a(152),te=a.n(ee),ae=function(e,t){return function(a,n){t&&a({type:"ADD_STREAM",payload:{peerId:e,stream:t}})}},ne=function(e){return function(t,a){e&&t({type:"REMOVE_STREAM",payload:{peerId:e}})}},re=function(e,t){return function(){var a=Object(X.a)(Y.a.mark((function a(n,r){var o,c,i;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=e||r().localUser.peer,r().streams.data[o.id]){a.next=18;break}return a.prev=3,c={audio:!0,video:{frameRate:{ideal:20,max:25},width:{ideal:128},height:{ideal:72}}},a.next=7,navigator.mediaDevices.getUserMedia(t||c);case 7:return i=a.sent,n(ae(o.id,i)),window.localStream=i,a.abrupt("return",i);case 13:a.prev=13,a.t0=a.catch(3),console.error("local stream couldnt be started",a.t0);case 16:a.next=19;break;case 18:console.log("local stream already active");case 19:case"end":return a.stop()}}),a,null,[[3,13]])})));return function(e,t){return a.apply(this,arguments)}}()},oe=function(e){return function(t,a){e&&(t({type:"ADD_CALL",payload:{call:e}}),t(ie(e)))}},ce=function(e){return function(t,a){e&&t({type:"REMOVE_CALL",payload:{call:e}})}},ie=function(e){return function(t,a){e&&e.on("stream",(function(a){t(ae(e.peer,a))}))}},le=function(e){return function(){var t=Object(X.a)(Y.a.mark((function t(a,n){var r,o,c;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n().localUser.peer,t.t0=n().streams.data[r.id],t.t0){t.next=6;break}return t.next=5,a(re(r));case 5:t.t0=t.sent;case 6:return o=t.t0,t.next=9,r.call(e.peer,o);case 9:c=t.sent,a(oe(c));case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},se=function(e){return{type:"SET_CURRENT_ROOM_ERROR",payload:{error:e}}},ue=function(e){return function(){var t=Object(X.a)(Y.a.mark((function t(a,n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.peer){t.next=5;break}return t.next=3,a({type:"ADD_CONNECTION",payload:{connection:e}});case 3:return t.next=5,a(de(e));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},me=function(e){return function(){var t=Object(X.a)(Y.a.mark((function t(a,n){var r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.peer){t.next=11;break}if(!n().streams.data[e.peer]){t.next=5;break}return t.next=5,a(ne(e.peer));case 5:if(!(r=n().calls.data[e.peer])){t.next=9;break}return t.next=9,a(ce(r));case 9:return t.next=11,a({type:"REMOVE_CONNECTION",payload:{connection:e}});case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},de=function(e){return function(t,a){e&&e.connectionId&&(e.on("open",(function(){setTimeout((function(){return t(ge(e),500)}))})),e.on("data",(function(n){console.log("on connection data",n);var r=n.type;if(n.textMessage&&(t({type:"ADD_NEW_MESSAGE",payload:n.textMessage}),console.log("%c MESSAGE - ".concat(n.textMessage.peerId,': "').concat(n.textMessage.text,'"'),"background: black; color: white; padding: 1rem")),"PLUGIN_DATA"===r){window.postMessage(n.payload,"*");var o=a().plugin.iframe;o&&o.contentWindow.postMessage(n,"*")}if("PEER_INTRODUCTION"===r){console.log("Connected peer is introducing himself to you:",n.payload);var c=n.payload.metadata;t({type:"ADD_PEER",payload:{metadata:c,peerId:e.peer}})}})),e.on("close",(function(){t(me(e))})))}},pe=function(e){return function(){var t=Object(X.a)(Y.a.mark((function t(a,n){var r,o;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n().localUser.peer,e===r.id){t.next=9;break}return t.next=4,r.connect(e);case 4:return o=t.sent,t.next=7,a(ue(o));case 7:return t.next=9,a(le(o));case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},fe=function(e,t){return function(){var a=Object(X.a)(Y.a.mark((function a(n,r){return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e&&e.send(t);case 1:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},ge=function(e){return function(){var t=Object(X.a)(Y.a.mark((function t(a,n){var r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=n().localUser.metadata)&&a(fe(e,{type:"PEER_INTRODUCTION",payload:{metadata:r}}));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},he=function(e){return function(){var t=Object(X.a)(Y.a.mark((function t(a,n){var r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=e||n().localUser.peer)&&(r.on("open",(function(e){})),r.on("connection",(function(e){a(ue(e))})),r.on("call",function(){var t=Object(X.a)(Y.a.mark((function t(o){var c;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n().streams.data[r.id];case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=a(re(e));case 5:c=t.t0,o.answer(c),a(oe(o));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},Ee=a(282),be=Object(B.a)({containerStyle:{display:"flex",justifyContent:"center",paddingTop:"128px"},titleStyle:{display:"flex",justifyContent:"center",width:"100%",padding:"16px",color:"white",fontWeight:"bold",backgroundColor:"#388E3C"},nicknameStyle:{width:"90%",margin:"16px"},textfieldLink:{width:"90%",marginRight:"16px",marginLeft:"16px"},nextButton:{color:"white",boxShadow:"none",width:"100%"},alignbutton:{display:"flex",justifyContent:"center",width:"80%",marginTop:"24px",marginBottom:"24px"}}),ye=Object(i.b)((function(e){return{nickname:e.localUser.metadata.nickname||"",roomError:e.room.error}}),{setMetadata:function(e){return function(t,a){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("metadata",e),t({type:"SET_LOCAL_USER_METADATA",payload:{metadata:e}})}},setCurrentRoomError:se,resetLocalUser:function(){return{type:"RESET_LOCAL_USER"}}})((function(e){var t=e.history,a=e.match,o=e.setMetadata,c=e.nickname,i=e.roomError,l=e.setCurrentRoomError,s=e.resetLocalUser,u=Object(n.useState)(c),m=Object(f.a)(u,2),d=m[0],p=m[1],g=Object(n.useState)(a.params.roomId),h=Object(f.a)(g,2),E=h[0],b=h[1],y=be();return r.a.createElement(z.a,{theme:F},r.a.createElement(q.a,{display:"flex",height:63,bgcolor:"#2E7D32",alignItems:"center",paddingLeft:"36px"},r.a.createElement(U.b,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement(H.a,null))),r.a.createElement(Ee.a,{container:!0,className:y.containerStyle},r.a.createElement(Ee.a,{item:!0,xs:11,md:6,lg:5},r.a.createElement(q.a,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",borderRadius:"5px",bgcolor:"white"},r.a.createElement(W.a,{variant:"h4",className:y.titleStyle},"Enter the room"),r.a.createElement(V.a,{required:!0,id:"outlined-required",label:"Nickname",variant:"outlined",value:d,className:y.nicknameStyle,onChange:function(e){p(e.target.value)}}),r.a.createElement(V.a,{required:!0,id:"outlined-required",label:"Room ID",variant:"outlined",value:E,className:y.textfieldLink,onChange:function(e){b(e.target.value)}}),r.a.createElement("div",{className:y.alignbutton},r.a.createElement(J.a,{onClick:function(e){o({nickname:d}),l(null),s(),t.push("/rooms/".concat(a.params.roomId))},size:"large",color:"secondary",variant:"contained",className:y.nextButton},"join")),i&&r.a.createElement(q.a,{color:"red",textAlign:"center"},i.error.message)))))})),ve=function(e){return function(t,a){e&&t({type:"SET_PLUGIN",payload:{plugin:e}})}},xe={PLUGIN_SEND_TO_ALL_PEERS:function(e){return function(t,a){var n=Object.values(a().connections.data),r={type:"PLUGIN_DATA",payload:e.data.payload};console.log("PLUGIN_SEND_TO_ALL_PEERS",r),n.forEach((function(e){t(fe(e,r))}))}},PLUGIN_SEND_TO_PEER:function(e){return function(t,a){var n=e.data,r=n.peerId,o=n.payload,c=a().connections.data[r];t(fe(c,{type:"PLUGIN_DATA",payload:o}))}},PLUGIN_PLATFORM_CONTROL_REQUEST:function(){return console.log("plugin is requesting something from the platform (mute local user, rumble screen, etc")}},Oe=Object(i.b)((function(e){return{plugin:e.plugin}}),{handlePluginMessage:function(e){return function(){var t=Object(X.a)(Y.a.mark((function t(a,n){var r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.data.type&&e.data.type.startsWith("PLUGIN")&&(r=xe[e.data.type],a(r(e)));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},setPlugin:ve})((function(e){var t=e.plugin,a=e.handlePluginMessage,o=e.setPlugin,c=Object(n.useRef)();return Object(n.useEffect)((function(){var e=function(e){a(e)};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}}),[]),Object(n.useEffect)((function(){c&&c.current&&o(Object(p.a)({},t,{iframe:c.current}))}),[c,t.url]),r.a.createElement(q.a,{flexGrow:1},t&&t.url&&r.a.createElement("iframe",{src:t.url,style:{width:"100%",height:"100%"},ref:c,title:"plugin content"}))})),we=a(285),je=a(286),Se=Object(B.a)((function(e){return{root:{display:"flex"},cardWrapper:{position:"relative",display:"flex",flexFlow:"column nowrap",marginBottom:"5px",width:"100%",height:"130px"},media:{width:"100%",height:"100%",objectFit:"cover"},displayName:{color:"white",opacity:"0.8",position:"absolute",bottom:"5px",left:"5px",fontSize:"0.9rem",userSelect:"none"}}})),Re=function(e){var t=e.stream,a=e.muted,o=void 0!==a&&a,c=e.user,i=Se(),l=Object(n.useRef)(null),s=c.nickname;return Object(n.useEffect)((function(){!function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e.current&&t&&(e.current.srcObject=t,e.current.oncanplay=function(){e.current.play(),e.current.muted=a})}(l,t,o)}),[t]),r.a.createElement(we.a,{className:i.cardWrapper},t?r.a.createElement("video",{ref:l,className:i.media}):r.a.createElement(je.a,{color:"inherit"}),r.a.createElement(q.a,{className:i.displayName},s))},ke=Object(i.b)((function(e,t){var a=t.connection.peer;return{remoteStream:a?e.streams.data[a]:null,remoteNickname:(e.peers.data[a]?e.peers.data[a].metadata:{}).nickname||"missing Nickname"}}))((function(e){var t=e.remoteStream,a=e.remoteNickname;return r.a.createElement(Re,{stream:t,user:{nickname:a}})})),Ce=Object(i.b)((function(e){return{connections:Object.values(e.connections.data)}}))((function(e){var t=e.connections;return r.a.createElement(r.a.Fragment,null,t&&t.map((function(e){return r.a.createElement(ke,{key:e.connectionId,connection:e})})))})),Ne=Object(B.a)((function(e){return{roomMediaManager:{padding:"5px"}}})),_e=Object(i.b)((function(e){var t=e.localUser.peer,a=t?e.streams.data[t.id]:null;return{localPeerMetadata:e.localUser.metadata,localStream:a}}),{})((function(e){var t=e.localStream,a=e.localPeerMetadata,n=Ne();return r.a.createElement(q.a,{bgcolor:"lightblue",width:"220px",minWidth:"150px",className:n.roomMediaManager},r.a.createElement(Re,{stream:t,muted:!0,user:{nickname:a.nickname}}),r.a.createElement(Ce,null))})),Ie=a(153),Te=a.n(Ie),Le=a(154),Ae=a.n(Le),De=a(295),Me=a(283),Ue=a(290),Pe=a(287),Be=a(288),ze=a(289),Ge=a(155),Fe=a.n(Ge),qe=Object(B.a)({list:{width:250},menuIcon:{margin:"8px"}}),We=[{name:"Random number",url:"https://andreas-schoch.github.io/p2p-test-plugin/"},{name:"Paint",url:"https://andreas-schoch.github.io/quackamole-plugin-paint/"},{name:"Gomoku",url:"https://derpmasters.github.io/quackamole-plugin-gomoku/"},{name:"Breakout game",url:"https://andreas-schoch.github.io/breakout-game/"}],Ve=Object(i.b)((function(e){return{plugin:e.plugin}}),{setPlugin:ve})((function(e){var t=e.plugin,a=e.setPlugin,o=qe(),c=Object(n.useState)(!1),i=Object(f.a)(c,2),l=i[0],s=i[1],u=function(e){"keydown"!==e.type&&s(!l)},m=function(e){var n=e.currentTarget.dataset.index;a(t?Object(p.a)({},t,{},We[n]):We[n])};return r.a.createElement(z.a,{theme:F},r.a.createElement(J.a,null,r.a.createElement(Fe.a,{onClick:u,color:"primary",fontSize:"large",className:o.menuIcon}),r.a.createElement(De.a,{open:l,onClose:u,anchor:"left"},r.a.createElement("div",{className:o.list,role:"presentation",onClick:u},r.a.createElement(Me.a,null,We.map((function(e,t){var a=e.name;return r.a.createElement(Pe.a,{button:!0,key:a,onClick:m,"data-index":t},r.a.createElement(Be.a,null,r.a.createElement(Te.a,null)),r.a.createElement(ze.a,{primary:a}))}))),r.a.createElement(Ue.a,null),r.a.createElement(Me.a,null,r.a.createElement(Pe.a,{button:!0},r.a.createElement(Be.a,null,r.a.createElement(Ae.a,null)),r.a.createElement(ze.a,{primary:"Browse Plugins"})))))))})),Je=a(159),Ke=a.n(Je),He=a(3),Qe=a(297),Ye=a(156),Xe=a.n(Ye)()((function(e){var t=e.palette,a=e.spacing,n=a(2.5),r=a(4),o=t.primary.main;return{avatar:{width:r,height:r},leftRow:{textAlign:"left"},rightRow:{textAlign:"right"},msg:{padding:a(1,2),borderRadius:4,marginBottom:4,display:"inline-block",wordBreak:"break-word",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"14px"},left:{borderTopRightRadius:n,borderBottomRightRadius:n,backgroundColor:t.grey[100]},right:{borderTopLeftRadius:n,borderBottomLeftRadius:n,backgroundColor:o,color:t.common.white},leftFirst:{borderTopLeftRadius:n},leftLast:{borderBottomLeftRadius:n},rightFirst:{borderTopRightRadius:n},rightLast:{borderBottomRightRadius:n}}}),{name:"ChatMsg"})((function(e){var t=e.classes,a=e.avatar,n=e.messages,o=e.side,c=e.GridContainerProps,i=e.GridItemProps,l=e.AvatarProps,s=e.getTypographyProps;return r.a.createElement(Ee.a,Object.assign({container:!0,spacing:2,justify:"right"===o?"flex-end":"flex-start"},c),"left"===o&&r.a.createElement(Ee.a,Object.assign({item:!0},i),r.a.createElement(Qe.a,Object.assign({src:a},l,{className:Object(He.a)(t.avatar,l.className)}))),r.a.createElement(Ee.a,{item:!0,xs:8},n.map((function(a,c){var i,l=s(a,c,e);return r.a.createElement("div",{key:a.id||c,className:t["".concat(o,"Row")]},r.a.createElement(W.a,Object.assign({align:"left"},l,{className:Object(He.a)(t.msg,t[o],(i=c,0===i?t["".concat(o,"First")]:i===n.length-1?t["".concat(o,"Last")]:""),l.className)}),a))}))))}));Xe.defaultProps={avatar:"",messages:[],side:"left",GridContainerProps:{},GridItemProps:{},AvatarProps:{},getTypographyProps:function(){return{}}};var Ze=Xe,$e=a(158),et=a.n($e),tt=a(157),at=Object(B.a)({chatContainer:{},textField:{width:"85%",marginRight:"5px"},chatSection:{display:"flex",justifyContent:"space-between",alignItems:"center"},customizeIcon:{border:"2px solid #E53935",borderRadius:"50%",color:"#E53935",height:35,width:35,padding:4,cursor:"pointer","&:hover":{background:"#E53935",color:"white"}}}),nt=Object(i.b)((function(e){return{chatData:e.chat,localPeer:e.localUser.peer}}),{sendMessage:function(e){return function(){var t=Object(X.a)(Y.a.mark((function t(a,n){var r,o;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=Object.values(n().connections.data),o=n().localUser.peer,r.forEach((function(t){return t.send({textMessage:{text:e,peerId:o.id}})})),a({type:"ADD_NEW_MESSAGE",payload:{text:e,peerId:o.id}});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}})((function(e){var t=e.chatData,a=e.sendMessage,o=e.localPeer,c=at(""),i=Object(n.useState)(""),l=Object(f.a)(i,2),s=l[0],u=l[1],m=function(e){e.preventDefault(),a(s),u("")},d=function(e){return Object(tt.toArray)(e).reduce((function(e,t){return"string"===typeof t?e+t:e+t.props.children}),"")},p=t.map((function(e,t){return e.peerId===o.id?r.a.createElement(Ze,{key:t,side:"right",messages:[d(e.text)]}):r.a.createElement(Ze,{key:t,avatar:"",messages:[d(e.text)]})}));return r.a.createElement("div",{className:c.chatContainer},p,r.a.createElement("div",{className:c.chatSection},r.a.createElement(V.a,{variant:"outlined",size:"small",multiline:!0,fullWidth:!0,className:c.textField,onChange:function(e){u(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&s.length>0&&m(e)},value:d(s)}),r.a.createElement(et.a,{className:c.customizeIcon,onClick:m})))})),rt=Object(B.a)({list:{display:"flex",flexDirection:"column",justifyContent:"flex-end",overflowY:"auto",WebkitFlex:"1 1 auto",height:"100%",width:400,padding:10},chatIcon:{margin:"8px"}}),ot=function(){var e=rt(),t=Object(n.useState)(!1),a=Object(f.a)(t,2),o=a[0],c=a[1],i=function(e){"keydown"!==e.type&&c(!o)};return r.a.createElement(z.a,{theme:F},r.a.createElement(J.a,null,r.a.createElement(Ke.a,{onClick:i,color:"primary",fontSize:"large",className:e.chatIcon}),r.a.createElement(De.a,{open:o,onClose:i,anchor:"right"},r.a.createElement("div",{className:e.list,role:"presentation"},r.a.createElement(nt,null)))))},ct=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{bgcolor:"wheat",height:"10%",display:"flex",flexDirection:"row",width:1,justifyContent:"center"},r.a.createElement(Ve,null),r.a.createElement(ot,null),r.a.createElement(U.b,{to:"/"},"Home")))},it=Object(i.b)((function(e){var t=e.localUser.peer;return{socket:e.localUser.socket,localPeer:t,localMetadata:e.localUser.metadata,localStream:t?e.streams.data[t]:null,connections:e.connections.data,roomError:e.room.error}}),{addConnection:ue,removeConnection:me,initLocalUser:function(e){return function(){var t=Object(X.a)(Y.a.mark((function t(a,n){var r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"https",(r=te()("".concat("https","://").concat("derpmasters.online",":").concat("5002"),{secure:!0,query:(o=e,Object.entries(o).map((function(e){var t=Object(f.a)(e,2),a=t[0],n=t[1];return"".concat(a,"=").concat(n)})).join("&"))})).on("ready",(function(e){var t;a({type:"INIT_LOCAL_USER_SOCKET",payload:{socket:r}}),a((t=e,function(){var e=Object(X.a)(Y.a.mark((function e(a,n){var r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new $.a(t,{host:"derpmasters.online",port:"5001",path:"/peer/signal",config:{iceServers:[{url:"stun:stun.l.google.com:19302"}]}});case 2:return r=e.sent,e.next=5,a({type:"INIT_LOCAL_USER_PEER",payload:{peer:r}});case 5:return e.next=7,a(re(r));case 7:return e.next=9,a(he(r));case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))})),r.on("user-leave",(function(e){var t=n().connections.data[e];t&&a(me(t))}));case 4:case"end":return t.stop()}var o}),t)})));return function(e,a){return t.apply(this,arguments)}}()},joinRoom:function(e,t){return function(){var a=Object(X.a)(Y.a.mark((function a(n,r){var o,c,i;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o=r().localUser,c=o.socket,i=o.peer,c&&i&&c.emit("join",{roomId:e,password:t,peerId:i.id},function(){var e=Object(X.a)(Y.a.mark((function e(t,a){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=8;break}return e.next=3,n(re(i));case 3:return e.next=5,n({type:"SET_CURRENT_ROOM",payload:{room:a.room}});case 5:a.room.joinedUsers.forEach((function(e){return n(pe(e))})),e.next=9;break;case 8:n(se(t));case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 2:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},startLocalStream:re,clearAllStreams:function(){return function(){var e=Object(X.a)(Y.a.mark((function e(t,a){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLEAR_ALL_STREAMS"});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}})((function(e){var t=e.socket,a=e.localPeer,o=e.localMetadata,c=(e.localStream,e.connections),i=e.match,l=e.history,s=e.initLocalUser,u=e.joinRoom,m=e.startLocalStream,d=e.clearAllStreams,p=e.roomError;return Object(n.useEffect)((function(){var e=b("metadata");a||s(e)}),[]),Object(n.useEffect)((function(){p&&l.push("/room-lobby/".concat(i.params.roomId))}),[p]),Object(n.useEffect)((function(){o.nickname&&a&&(m(),u(i.params.roomId,"dummy123"))}),[a,o,m,u,i]),Object(n.useEffect)((function(){return function(){t&&(t.emit("leave",i.params.roomId),t.disconnect()),c&&Object.values(c).forEach((function(e){return e.close()})),window.localStream&&window.localStream.getTracks().forEach((function(e){return e.stop()})),d()}}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{display:"flex",flexDirection:"column",width:1,height:"100%",justifyContent:"space-between"},r.a.createElement(q.a,{display:"flex",flexDirection:"row",width:1,height:"90%",justifyContent:"space-between"},r.a.createElement(Oe,null),r.a.createElement(_e,null)),r.a.createElement(ct,null)))})),lt=a(161),st=a.n(lt),ut=a(162),mt=a.n(ut),dt=a(160),pt=a.n(dt),ft=a(291),gt=Object(B.a)({container:{display:"flex",flexDirection:"column",alignItems:"center",width:314,height:400,border:"solid 1px lightgrey",backgroundColor:"white"},smallScreenContainer:{display:"flex",flexDirection:"column",alignItems:"center",width:314,height:400,border:"solid 1px lightgrey",backgroundColor:"white",margin:8},alignTitle:{display:"flex",margin:24},customizeTitle:{fontWeight:"bold",marginLeft:4},customizeIcon:{marginRight:4},customizeText:{paddingLeft:16,paddingRight:16,marginBottom:16}}),ht=function(e){var t,a=gt(),n=Object(ft.a)("(max-width: 950px)");return r.a.createElement("div",{className:n?a.smallScreenContainer:a.container},r.a.createElement("div",{className:a.alignTitle},"ToysOutlinedIcon"===(t=e.content.icon)?r.a.createElement(pt.a,{fontSize:"large",className:a.customizeIcon}):"AssessmentOutlinedIcon"===t?r.a.createElement(st.a,{fontSize:"large",className:a.customizeIcon}):"CallOutlinedIcon"===t?r.a.createElement(mt.a,{fontSize:"large",className:a.customizeIcon}):void 0,r.a.createElement(W.a,{variant:"h5",className:a.customizeTitle},e.content.title)),r.a.createElement(W.a,{className:a.customizeText,align:"center"},e.content.text),r.a.createElement("img",{src:e.content.image,height:"181",width:"275",alt:"icon"}))},Et=Object(B.a)({box:{display:"flex",width:"100%",height:"100%",justifyContent:"center"},smallScreenBox:{display:"flex",flexDirection:"column",width:"100%",height:"100%",alignItems:"center"},titleContainer:{display:"flex",flexDirection:"column",alignItems:"center",width:"30%",minWidth:310},titleStyle:{color:"white",fontWeight:"bold",marginTop:"98px"},buttonStyle:{borderRadius:"5px",width:"106px",fontWeight:"bold",color:"white",backgroundColor:"#FBC02D","&:hover":{backgroundColor:"#f9a825"},"&:focus":{outline:0}},mainImg:{display:"flex",height:224,width:309,borderRadius:5,marginTop:76,marginLeft:36,marginRight:36},smallScreenMainImg:{display:"flex",height:224,width:309,borderRadius:5,margin:36},bulletPoints:{display:"flex",justifyContent:"center",zIndex:"3",position:"relative",bottom:150},smallScreenBulletPoints:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:72}}),bt=function(){var e=Et(),t=Object(ft.a)("(max-width: 950px)");return r.a.createElement(z.a,{theme:F},r.a.createElement(q.a,{height:63,bgcolor:"#2E7D32"}," "),r.a.createElement(q.a,{height:540,display:"flex",zIndex:1},r.a.createElement(q.a,{className:t?e.smallScreenBox:e.box,bgcolor:"#388E3C"},r.a.createElement("div",{className:e.titleContainer},r.a.createElement(W.a,{variant:"h3",className:e.titleStyle,gutterBottom:!0,align:"center"},"Create now a room and have fun"),r.a.createElement(U.b,{to:"/create-room",style:{textDecoration:"none"}},r.a.createElement(J.a,{size:"large",className:e.buttonStyle},"Create"))),r.a.createElement("img",{src:"https://www.zohowebstatic.com/sites/default/files/cliq-primetime-features.jpg",className:t?e.smallScreenMainImg:e.mainImg,alt:"quackamole room preview"}))),r.a.createElement("div",{className:t?e.smallScreenBulletPoints:e.bulletPoints},[{title:"Gaming",icon:"ToysOutlinedIcon",image:"https://image.freepik.com/free-vector/realistic-radiant-magic-portals-pink-vs-blue-with-light-effects-black-background-illustration_1284-31390.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec urna dolor. Maecenas vehicula dui ut quam imperdiet."},{title:"Working",icon:"AssessmentOutlinedIcon",image:"https://image.freepik.com/free-vector/teamwork-concept-illustration_1284-20522.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec urna dolor. Maecenas vehicula dui ut quam imperdiet."},{title:"Chatting",icon:"CallOutlinedIcon",image:"https://image.freepik.com/free-vector/group-chat-concept-illustration_114360-1495.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec urna dolor. Maecenas vehicula dui ut quam imperdiet."}].map((function(e){return r.a.createElement(ht,{content:e})}))),r.a.createElement(U.b,{to:"/rooms/dummy-room-id"},"Test room"))},yt=Object(B.a)({containerStyle:{display:"flex",justifyContent:"center",paddingTop:"128px"},titleStyle:{display:"flex",justifyContent:"center",padding:"16px",color:"white",fontWeight:"bold",backgroundColor:"#388E3C",width:"100%"},formControl:{width:"20%",margin:"16px"},select:{borderColor:"#FB8C00","&:before":{borderColor:"#FB8C00"},"&:after":{borderColor:"#f57c00"}},textfield:{width:"90%",marginTop:"48px"},textfieldLink:{width:"90%",marginRight:"16px",marginLeft:"16px"},alignButton:{display:"flex",justifyContent:"flex-end",width:"100%",margin:"16px"},myButton:{color:"white",boxShadow:"none",margin:"16px"},paper:{padding:F.spacing(2),textAlign:"center",color:F.palette.text.secondary},copyLink:{display:"flex",alignItems:"center",marginTop:"16px",width:"90%"},nextButton:{color:"white",boxShadow:"none",marginBottom:"16px",width:"100%"},subtitle:{display:"flex",justifyContent:"center",margin:"16px"}}),vt=function(){var e=r.a.useState(""),t=Object(f.a)(e,2),a=t[0],n=t[1],o=r.a.useState(""),c=Object(f.a)(o,2),i=c[0],l=c[1],s=r.a.useState(""),u=Object(f.a)(s,2),m=u[0],d=u[1],p=r.a.useState(!0),g=Object(f.a)(p,2),E=g[0],b=g[1],y=yt(),v=function(e){n(e.target.value)},x=r.a.createElement(q.a,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",borderRadius:"5px",bgcolor:"white"},r.a.createElement(W.a,{variant:"h4",className:y.titleStyle},"Create a new room"),r.a.createElement(V.a,{required:!0,id:"outlined-required",label:"Room name",variant:"outlined",value:a,onChange:v,className:y.textfield}),r.a.createElement("div",{className:y.alignButton},r.a.createElement(J.a,{size:"large",color:"secondary",variant:"contained",className:y.myButton,onClick:function(){var e={name:a,password:"Test123.",maxUsers:4};if(a.length>0){fetch("".concat("https","://").concat("derpmasters.online",":").concat("5002","/api/rooms"),{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t,a=(t="derpmasters.github.io/quackamole",h()().test(t),":3000");l("".concat("https","://").concat("derpmasters.github.io/quackamole").concat(a,"/#/room-lobby/").concat(e)),d(e),b(!1)}))}else console.log("error")}},"create"))),O=r.a.createElement(q.a,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",borderRadius:"5px",bgcolor:"white"},r.a.createElement(W.a,{variant:"h4",className:y.titleStyle},"Room was created"),r.a.createElement("div",{className:y.copyLink},r.a.createElement(V.a,{variant:"outlined",value:i,onChange:v,className:y.textfieldLink}),r.a.createElement(J.a,{size:"large",color:"secondary",variant:"contained",className:y.myButton,onClick:function(){navigator.clipboard.writeText(i)}},"copy")),r.a.createElement(W.a,{variant:"h6",align:"center",className:y.subtitle},"Share your link and invite someone to your room"),r.a.createElement(U.b,{to:"/room-lobby/".concat(m),style:{textDecoration:"none",width:"80%"}},r.a.createElement(J.a,{size:"large",color:"secondary",variant:"contained",className:y.nextButton,to:"/room-lobby/".concat(m)},"next")));return r.a.createElement(z.a,{theme:F},r.a.createElement(q.a,{display:"flex",height:63,bgcolor:"#2E7D32",alignItems:"center",paddingLeft:"36px"},r.a.createElement(U.b,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement(H.a,null))),r.a.createElement(Ee.a,{container:!0,className:y.containerStyle},r.a.createElement(Ee.a,{item:!0,xs:11,md:6,lg:5},E?x:O)))},xt=a(292),Ot=function(){return r.a.createElement(xt.a,null,r.a.createElement(U.a,null,r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/",component:bt}),r.a.createElement(P.a,{exact:!0,path:"/create-room",component:vt}),r.a.createElement(P.a,{exact:!0,path:"/room-lobby/:roomId",component:ye}),r.a.createElement(P.a,{path:"/rooms/:roomId",component:it}))))};c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{store:M},r.a.createElement(Ot,null))),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.185fdc8e.chunk.js.map