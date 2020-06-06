(this.webpackJsonpquackamole=this.webpackJsonpquackamole||[]).push([[0],{179:function(e,t,a){e.exports=a(256)},181:function(e,t,a){},190:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=190},220:function(e,t){},256:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(181),a(11)),c=a.n(o),l=a(18),i=a(42),s=a(148),u=a(149),d={data:{},error:null},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_ROOM":return{data:t.payload.room,error:null};case"SET_CURRENT_ROOM_ERROR":return{data:e.data,error:t.payload.error};default:return e}},p=a(10),f=a(20),g=function(e){e&&e.getTracks().forEach((function(e){return e.stop()}))},h={peer:null,socket:null,metadata:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):{}}("metadata"),error:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_LOCAL_USER_SOCKET":return Object(p.a)({},e,{socket:t.payload.socket,error:null});case"INIT_LOCAL_USER_PEER":return Object(p.a)({},e,{peer:t.payload.peer,error:null});case"SET_LOCAL_USER_METADATA":return Object(p.a)({},e,{metadata:t.payload.metadata,error:null});case"SET_LOCAL_USER_ERROR":return Object(p.a)({},e,{error:t.payload.error});default:return e}},b=a(35),y={data:{},error:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PEER":var a=t.payload,n=a.peerId,r=a.metadata;return{data:Object(p.a)({},e.data,Object(b.a)({},n,{metadata:r})),error:null};case"REMOVE_PEER":var o=Object(p.a)({},e.data),c=t.payload.peer;return delete o[c.id],{data:o,error:null};case"SET_PEERS_ERROR":return Object(p.a)({},e,{error:t.payload.error});default:return e}},O={data:{},error:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONNECTION":var a=t.payload.connection;return{data:Object(p.a)({},e.data,Object(b.a)({},a.peer,a)),error:null};case"REMOVE_CONNECTION":var n=Object(p.a)({},e.data),r=t.payload.connection;return delete n[r.peer],{data:n,error:null};case"SET_CONNECTIONS_ERROR":return Object(p.a)({},e,{error:t.payload.error});default:return e}},j={data:{},error:null},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CALL":var a=t.payload.call;return{data:Object(p.a)({},e.data,Object(b.a)({},a.peer,a)),error:null};case"REMOVE_CALL":var n=Object(p.a)({},e.data),r=t.payload.call;return delete n[r.id],{data:n,error:null};case"REMOVE_CONNECTION":var o=t.payload.connection.peer,c=e.data[o];if(c){var l=Object(p.a)({},e.data);return delete l[o],Object(p.a)({},e,{data:l,error:null})}return e;case"SET_CALLS_ERROR":return Object(p.a)({},e,{error:t.payload.error});default:return e}},S={data:{},error:null},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_STREAM":var a=t.payload,n=a.peerId,r=a.stream;return{data:Object(p.a)({},e.data,Object(b.a)({},n,r)),error:null};case"REMOVE_STREAM":var o=Object(p.a)({},e.data),c=t.payload.peerId,l=o[c];return g(l),delete o[c],{data:o,error:null};case"SET_STREAM_ERROR":return Object(p.a)({},e,{error:t.payload.error});case"CLEAR_ALL_STREAMS":return Object.values(e.data).forEach(g),Object(p.a)({},e,{data:{},error:null});default:return e}},R={url:"",name:"p2p-test-plugin",error:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PLUGIN":return Object(p.a)({},e,{},t.payload.plugin,{error:null});case"SET_PLUGIN_ERROR":return Object(p.a)({},e,{error:t.payload.error});default:return e}},N=a(163),_=[],I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_MESSAGE":return[].concat(Object(N.a)(e),[t.payload]);default:return e}},T=Object(i.combineReducers)({room:m,localUser:E,peers:v,calls:w,connections:x,streams:C,plugin:k,chat:I}),L=Object(i.createStore)(T,Object(u.composeWithDevTools)(Object(i.applyMiddleware)(s.a))),A=a(29),D=a(14),M=a(282),P=a(284),U=a(162),B=Object(U.a)({palette:{primary:{main:"#E53935"},secondary:{main:"#FB8C00"}}}),F=a(303),W=a(286),z=a(95),G=a(304),q=a(291),J=a(89),V=a.n(J),K=a(12),H=a.n(K),Q=a(23),X=a(153),Y=a.n(X),Z=a(154),$=a.n(Z),ee=function(e,t){return function(a,n){t&&a({type:"ADD_STREAM",payload:{peerId:e,stream:t}})}},te=function(e,t){return function(){var a=Object(Q.a)(H.a.mark((function a(n,r){var o,c,l;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=e||r().localUser.peer,a.prev=1,c={audio:!0,video:{frameRate:{ideal:24,max:30},width:{ideal:640},height:{ideal:360}}},a.next=5,navigator.mediaDevices.getUserMedia(t||c);case 5:return l=a.sent,n(ee(o.id,l)),window.localStream=l,a.abrupt("return",l);case 11:a.prev=11,a.t0=a.catch(1),console.error('local stream couldnt be started via "startStream()"',a.t0);case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e,t){return a.apply(this,arguments)}}()},ae=function(e){return function(t,a){e&&(t({type:"ADD_CALL",payload:{call:e}}),t(ne(e)))}},ne=function(e){return function(t,a){e&&e.on("stream",(function(a){t(ee(e.peer,a))}))}},re=function(e){return function(t,a){e&&e.peer&&(t({type:"ADD_CONNECTION",payload:{connection:e}}),t(ce(e)))}},oe=function(e){return function(t,a){e&&e.peer&&t({type:"REMOVE_CONNECTION",payload:{connection:e}})}},ce=function(e){return function(t,a){e&&e.connectionId&&(e.on("open",(function(){t(ie(e))})),e.on("data",(function(n){console.log("data----------------",n),n.textMessage&&(t({type:"ADD_NEW_MESSAGE",payload:n.textMessage}),console.log("%c MESSAGE - ".concat(n.textMessage.peerId,': "').concat(n.textMessage.text,'"'),"background: black; color: white; padding: 1rem"));var r=n.type;if("pluginData"===r){console.log("received plugin data:",n.payload),window.postMessage(n,"*");var o=a().plugin.iframe;o&&o.contentWindow.postMessage(n,"*")}if("peerIntroduction"===r){console.log("Connected peer is introducing himself to you:",n.payload);var c=n.payload.metadata;t({type:"ADD_PEER",payload:{metadata:c,peerId:e.peer}})}})),e.on("close",(function(){t(oe(e))})))}},le=function(e){return function(t,a){var n=a().localUser.peer;if(e!==n.id){var r=n.connect(e,{metadata:{nickname:"test-metadata"}});t(re(r)),t(function(e){return function(){var t=Object(Q.a)(H.a.mark((function t(a,n){var r,o,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n().localUser.peer,t.t0=n().streams.data[r.id],t.t0){t.next=6;break}return t.next=5,a(te(r));case 5:t.t0=t.sent;case 6:return o=t.t0,t.next=9,r.call(e.peer,o);case 9:c=t.sent,a(ae(c));case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(r))}}},ie=function(e){return function(){var t=Object(Q.a)(H.a.mark((function t(a,n){var r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=n().localUser.metadata)&&e.send({type:"peerIntroduction",payload:{metadata:r}});case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},se=function(e){return function(t,a){var n=e||a().localUser.peer;n&&(n.on("open",(function(e){})),n.on("connection",(function(e){t(re(e))})),n.on("call",(function(e){var r=a().streams.data[n.id];e.answer(r),t(ae(e))})))}},ue=Object(M.a)({containerStyle:{display:"flex",justifyContent:"center",paddingTop:"128px"},titleStyle:{display:"flex",justifyContent:"center",padding:"16px",color:"white",fontWeight:"bold",backgroundColor:"#FB8C00"},nicknameStyle:{width:"616px",margin:"16px"},textfieldLink:{width:"616px",marginRight:"16px",marginLeft:"16px"},nextButton:{color:"white",boxShadow:"none",width:"422px"},alignbutton:{display:"flex",justifyContent:"center",marginTop:"24px"}}),de=Object(l.b)((function(e,t){return{nickname:e.localUser.metadata.nickname||"",roomError:e.room.error}}),{setMetadata:function(e){return function(t,a){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("metadata",e),t({type:"SET_LOCAL_USER_METADATA",payload:{metadata:e}})}}})((function(e){var t=e.history,a=e.match,o=e.setMetadata,c=e.nickname,l=e.roomError,i=Object(n.useState)(c),s=Object(f.a)(i,2),u=s[0],d=s[1],m=Object(n.useState)(a.params.roomId),p=Object(f.a)(m,2),g=p[0],h=p[1],E=ue();return r.a.createElement(P.a,{theme:B},r.a.createElement(F.a,{display:"flex",height:63,bgcolor:"#E53935",alignItems:"center",paddingLeft:"36px"},r.a.createElement(A.b,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement(V.a,null))),r.a.createElement(W.a,{className:E.containerStyle},r.a.createElement(F.a,{display:"flex",flexDirection:"column",width:648,height:307,borderRadius:"5px",bgcolor:"white"},r.a.createElement(z.a,{variant:"h4",className:E.titleStyle},"Enter the room"),r.a.createElement(G.a,{required:!0,id:"outlined-required",label:"Nickname",variant:"outlined",value:u,className:E.nicknameStyle,onChange:function(e){d(e.target.value)}}),r.a.createElement(G.a,{required:!0,id:"outlined-required",label:"Room ID",variant:"outlined",value:g,className:E.textfieldLink,onChange:function(e){h(e.target.value)}}),r.a.createElement("div",{className:E.alignbutton},r.a.createElement(q.a,{onClick:function(e){o({nickname:u}),t.push("/rooms/".concat(a.params.roomId))},size:"large",color:"secondary",variant:"contained",className:E.nextButton},"join")),l&&r.a.createElement(F.a,{color:"red",textAlign:"center"},l.error.message))))})),me=function(e){return function(t,a){e&&t({type:"SET_PLUGIN",payload:{plugin:e}})}},pe=Object(l.b)((function(e){return{plugin:e.plugin}}),{broadcastPluginMessageToPeers:function(e,t){return function(t,a){Object.values(a().connections.data).forEach((function(t){t.send(e),console.log("--- broadcasting plugin data to connection:",t.peer)}))}},setPlugin:me})((function(e){var t=e.plugin,a=e.broadcastPluginMessageToPeers,o=e.setPlugin,c=Object(n.useRef)();return Object(n.useEffect)((function(){var e=function(e){"broadcast"===e.data.type&&a({type:"pluginData",payload:e.data.payload},c.current)};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}}),[]),Object(n.useEffect)((function(){c&&c.current&&o(Object(p.a)({},t,{iframe:c.current}))}),[c,t.url]),r.a.createElement(F.a,{bgcolor:"salmon",flexGrow:1},t&&t.url&&r.a.createElement("iframe",{src:t.url,style:{width:"100%",height:"100%"},ref:c}))})),fe=a(292),ge=Object(M.a)((function(e){return{root:{display:"flex"},cardWrapper:{marginBottom:"5px"},media:{width:"100%",height:"120px",objectFit:"cover"}}})),he=function(e){var t=e.stream,a=e.muted,o=void 0!==a&&a,c=e.user,l=ge(),i=Object(n.useRef)(null),s=c.nickname;c.peerId;return Object(n.useEffect)((function(){!function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e.current&&t&&(e.current.srcObject=t,e.current.oncanplay=function(){e.current.play(),e.current.muted=a})}(i,t,o)}),[t]),r.a.createElement(fe.a,{className:l.cardWrapper},r.a.createElement("video",{ref:i,className:l.media}),s)},Ee=a(293),be=Object(l.b)((function(e,t){var a=e.localUser.peer,n=t.connection.peer,r=n?e.streams.data[n]:null;return{localPeer:a,localStream:a?e.streams.data[a.id]:null,remoteStream:r,call:e.calls.data[n]}}),{addCall:ae})((function(e){var t=e.localPeer,a=(e.localStream,e.remoteStream),o=e.connection,c=e.call;e.addCall;Object(n.useEffect)((function(){}),[t,o]);return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(he,{stream:a,user:{nickname:"remote"}}):r.a.createElement(Ee.a,{color:"inherit"}))})),ye=Object(l.b)((function(e){return{connections:Object.values(e.connections.data)}}))((function(e){var t=e.connections;return r.a.createElement(r.a.Fragment,null,t&&t.map((function(e){return r.a.createElement(be,{key:e.connectionId,connection:e})})))})),ve=Object(M.a)((function(e){return{roomMediaManager:{padding:"5px"}}})),Oe=Object(l.b)((function(e){var t=e.localUser.peer,a=t?e.streams.data[t.id]:null;return{localPeerMetadata:e.localUser.metadata,localStream:a}}),{})((function(e){var t=e.localStream,a=e.localPeerMetadata,n=ve();return r.a.createElement(F.a,{bgcolor:"lightblue",width:"220px",minWidth:"150px",className:n.roomMediaManager},r.a.createElement(he,{stream:t,muted:!0,user:{nickname:a.nickname}}),r.a.createElement(ye,null))})),xe=a(155),je=a.n(xe),we=a(156),Se=a.n(we),Ce=a(302),Re=a(290),ke=a(296),Ne=a(261),_e=a(294),Ie=a(295),Te=a(157),Le=a.n(Te),Ae=Object(M.a)({list:{width:250},menuIcon:{margin:"8px"}}),De=[{name:"Random number",url:"https://andreas-schoch.github.io/p2p-test-plugin/"},{name:"Breakout game",url:"https://andreas-schoch.github.io/breakout-game/"},{name:"Todo list",url:"https://andreas-schoch.github.io/react-todo-app/"},{name:"Karaoke",url:"https://www.youtube.com/embed/dQw4w9WgXcQ"}],Me=Object(l.b)((function(e){return{plugin:e.plugin}}),{setPlugin:me})((function(e){var t=e.plugin,a=e.setPlugin,o=Ae(),c=Object(n.useState)(!1),l=Object(f.a)(c,2),i=l[0],s=l[1],u=function(e){"keydown"!==e.type&&s(!i)},d=function(e){var n=e.currentTarget.dataset.index;a(t?Object(p.a)({},t,{},De[n]):De[n])};return r.a.createElement(P.a,{theme:B},r.a.createElement(q.a,null,r.a.createElement(Le.a,{onClick:u,color:"primary",fontSize:"large",className:o.menuIcon}),r.a.createElement(Ce.a,{open:i,onClose:u,anchor:"left"},r.a.createElement("div",{className:o.list,role:"presentation",onClick:u},r.a.createElement(Re.a,null,De.map((function(e,t){var a=e.name;return r.a.createElement(Ne.a,{button:!0,key:a,onClick:d,"data-index":t},r.a.createElement(_e.a,null,r.a.createElement(je.a,null)),r.a.createElement(Ie.a,{primary:a}))}))),r.a.createElement(ke.a,null),r.a.createElement(Re.a,null,r.a.createElement(Ne.a,{button:!0},r.a.createElement(_e.a,null,r.a.createElement(Se.a,null)),r.a.createElement(Ie.a,{primary:"Browse Plugins"})))))))})),Pe=a(161),Ue=a.n(Pe),Be=a(3),Fe=a(297),We=a(307),ze=a(158),Ge=a.n(ze)()((function(e){var t=e.palette,a=e.spacing,n=a(2.5),r=a(4),o=t.primary.main;return{avatar:{width:r,height:r},leftRow:{textAlign:"left"},rightRow:{textAlign:"right"},msg:{padding:a(1,2),borderRadius:4,marginBottom:4,display:"inline-block",wordBreak:"break-word",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"14px"},left:{borderTopRightRadius:n,borderBottomRightRadius:n,backgroundColor:t.grey[100]},right:{borderTopLeftRadius:n,borderBottomLeftRadius:n,backgroundColor:o,color:t.common.white},leftFirst:{borderTopLeftRadius:n},leftLast:{borderBottomLeftRadius:n},rightFirst:{borderTopRightRadius:n},rightLast:{borderBottomRightRadius:n}}}),{name:"ChatMsg"})((function(e){var t=e.classes,a=e.avatar,n=e.messages,o=e.side,c=e.GridContainerProps,l=e.GridItemProps,i=e.AvatarProps,s=e.getTypographyProps;return r.a.createElement(Fe.a,Object.assign({container:!0,spacing:2,justify:"right"===o?"flex-end":"flex-start"},c),"left"===o&&r.a.createElement(Fe.a,Object.assign({item:!0},l),r.a.createElement(We.a,Object.assign({src:a},i,{className:Object(Be.a)(t.avatar,i.className)}))),r.a.createElement(Fe.a,{item:!0,xs:8},n.map((function(a,c){var l,i=s(a,c,e);return r.a.createElement("div",{key:a.id||c,className:t["".concat(o,"Row")]},r.a.createElement(z.a,Object.assign({align:"left"},i,{className:Object(Be.a)(t.msg,t[o],(l=c,0===l?t["".concat(o,"First")]:l===n.length-1?t["".concat(o,"Last")]:""),i.className)}),a))}))))}));Ge.defaultProps={avatar:"",messages:[],side:"left",GridContainerProps:{},GridItemProps:{},AvatarProps:{},getTypographyProps:function(){return{}}};var qe=Ge,Je=a(160),Ve=a.n(Je),Ke=a(159),He=Object(M.a)({chatContainer:{},textField:{width:"85%",marginRight:"5px"},chatSection:{display:"flex",justifyContent:"space-between",alignItems:"center"},customizeIcon:{border:"2px solid #E53935",borderRadius:"50%",color:"#E53935",height:35,width:35,padding:4,cursor:"pointer","&:hover":{background:"#E53935",color:"white"}}}),Qe=Object(l.b)((function(e,t){return{chatData:e.chat,connections:Object.values(e.connections.data),localPeer:e.localUser.peer}}),{sendMessage:function(e){return function(){var t=Object(Q.a)(H.a.mark((function t(a,n){var r,o;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=Object.values(n().connections.data),o=n().localUser.peer,r.forEach((function(t){return t.send({textMessage:{text:e,peerId:o.id}})})),a({type:"ADD_NEW_MESSAGE",payload:{text:e,peerId:o.id}});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}})((function(e){var t=e.chatData,a=e.sendMessage,o=(e.connections,e.localPeer),c=He(""),l=Object(n.useState)(""),i=Object(f.a)(l,2),s=i[0],u=i[1],d=function(e){return Object(Ke.toArray)(e).reduce((function(e,t){return"string"===typeof t?e+t:e+t.props.children}),"")},m=t.map((function(e,t){return e.peerId===o.id?r.a.createElement(qe,{key:t,side:"right",messages:[d(e.text)]}):r.a.createElement(qe,{key:t,avatar:"",messages:[d(e.text)]})}));return r.a.createElement("div",{className:c.chatContainer},m,r.a.createElement("div",{className:c.chatSection},r.a.createElement(G.a,{variant:"outlined",size:"small",multiline:!0,fullWidth:!0,className:c.textField,onChange:function(e){u(e.target.value)},value:d(s)}),r.a.createElement(Ve.a,{className:c.customizeIcon,onClick:function(e){e.preventDefault(),a(s),u("")}})))})),Xe=Object(M.a)({list:{display:"flex",flexDirection:"column",justifyContent:"flex-end",overflowY:"auto",WebkitFlex:"1 1 auto",height:"100%",width:400,padding:10},chatIcon:{margin:"8px"}}),Ye=function(){var e=Xe(),t=Object(n.useState)(!1),a=Object(f.a)(t,2),o=a[0],c=a[1],l=function(e){"keydown"!==e.type&&c(!o)};return r.a.createElement(P.a,{theme:B},r.a.createElement(q.a,null,r.a.createElement(Ue.a,{onClick:l,color:"primary",fontSize:"large",className:e.chatIcon}),r.a.createElement(Ce.a,{open:o,onClose:l,anchor:"right"},r.a.createElement("div",{className:e.list,role:"presentation"},r.a.createElement(Qe,null)))))},Ze=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{bgcolor:"wheat",height:"10%",display:"flex",flexDirection:"row",width:1,justifyContent:"center"},r.a.createElement(Me,null),r.a.createElement(Ye,null),r.a.createElement(A.b,{to:"/"},"Home")))},$e=Object(l.b)((function(e){return{socket:e.localUser.socket,localPeer:e.localUser.peer,connections:e.connections.data}}),{addConnection:re,removeConnection:oe,initLocalUser:function(e){return function(){var t=Object(Q.a)(H.a.mark((function t(a,n){var r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"https",(r=$()("".concat("https","://").concat("derpmasters.online",":").concat("5002"),{secure:!0,query:(n=e,Object.entries(n).map((function(e){var t=Object(f.a)(e,2),a=t[0],n=t[1];return"".concat(a,"=").concat(n)})).join("&"))})).on("ready",(function(e){var t;a({type:"INIT_LOCAL_USER_SOCKET",payload:{socket:r}}),a((t=e,function(){var e=Object(Q.a)(H.a.mark((function e(a,n){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Y.a(t,{host:"derpmasters.online",port:"5001",path:"/peer/signal",config:{iceServers:[{url:"stun:stun.l.google.com:19302"}]}});case 2:r=e.sent,a({type:"INIT_LOCAL_USER_PEER",payload:{peer:r}}),a(te(r)),a(se(r));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))}));case 3:case"end":return t.stop()}var n}),t)})));return function(e,a){return t.apply(this,arguments)}}()},joinRoom:function(e,t){return function(){var a=Object(Q.a)(H.a.mark((function a(n,r){var o,c,l;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o=r().localUser,c=o.socket,l=o.peer,c&&l&&c.emit("join",{roomId:e,password:t,peerId:l.id},(function(e){e&&e.room.joinedUsers.forEach((function(e){return n(le(e))}))}));case 2:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},startLocalStream:te,clearAllStreams:function(){return function(){var e=Object(Q.a)(H.a.mark((function e(t,a){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLEAR_ALL_STREAMS"});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}})((function(e){var t=e.socket,a=e.localPeer,o=e.connections,c=e.match,l=e.initLocalUser,i=e.joinRoom,s=e.startLocalStream,u=e.clearAllStreams;return Object(n.useEffect)((function(){l({nickname:"andiiii"})}),[]),Object(n.useEffect)((function(){a&&(s(),i(c.params.roomId,"dummy123"))}),[a]),Object(n.useEffect)((function(){return function(){t&&(t.emit("leave",c.params.roomId),t.disconnect()),o&&Object.values(o).forEach((function(e){return e.close()})),window.localStream&&window.localStream.getTracks().forEach((function(e){return e.stop()})),u()}}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{display:"flex",flexDirection:"column",width:1,height:"100%",justifyContent:"space-between"},r.a.createElement(F.a,{display:"flex",flexDirection:"row",width:1,height:"90%",justifyContent:"space-between"},r.a.createElement(pe,null),r.a.createElement(Oe,null)),r.a.createElement(Ze,null)))})),et=Object(M.a)({titleStyle:{color:"white",fontWeight:"bold",marginTop:"98px"},buttonStyle:{borderRadius:"50px",width:"106px",fontWeight:"bold",border:"2px solid #E53935","&:hover":{color:"white",backgroundColor:"#E53935"},"&:focus":{outline:0}}}),tt=function(){var e=et();return r.a.createElement(P.a,{theme:B},r.a.createElement(F.a,{height:63,bgcolor:"#E53935"}," "),r.a.createElement(F.a,{height:640,display:"flex"},r.a.createElement(F.a,{display:"flex",flexDirection:"column",width:"50%",height:"100%",bgcolor:"#FDD835",alignItems:"center"},r.a.createElement(z.a,{variant:"h3",className:e.titleStyle,gutterBottom:!0}," Create a new room"),r.a.createElement(A.b,{to:"/create-room",style:{textDecoration:"none"}},r.a.createElement(q.a,{size:"large",color:"primary",className:e.buttonStyle},"Create"))),r.a.createElement(F.a,{display:"flex",flexDirection:"column",width:"50%",height:"100%",bgcolor:"#FB8C00",alignItems:"center"},r.a.createElement(z.a,{variant:"h3",className:e.titleStyle,gutterBottom:!0}," Join a room"),r.a.createElement(q.a,{size:"large",color:"primary",className:e.buttonStyle},"Join"))),r.a.createElement(A.b,{to:"/rooms/dummy-room-id"},"Test room"))},at=a(305),nt=a(298),rt=a(289),ot=a(300),ct=Object(M.a)({containerStyle:{display:"flex",justifyContent:"center",paddingTop:"128px"},titleStyle:{display:"flex",justifyContent:"center",padding:"16px",color:"white",fontWeight:"bold",backgroundColor:"#FB8C00"},formControl:{width:"20%",margin:"16px"},select:{borderColor:"#FB8C00","&:before":{borderColor:"#FB8C00"},"&:after":{borderColor:"#f57c00"}},textfield:{width:"616px",marginLeft:"16px"},textfieldLink:{width:"506px",marginRight:"16px",marginLeft:"16px"},alignButton:{display:"flex",justifyContent:"flex-end",margin:"16px"},myButton:{color:"white",boxShadow:"none"},paper:{padding:B.spacing(2),textAlign:"center",color:B.palette.text.secondary},copyLink:{display:"flex",alignItems:"center",marginTop:"16px"},nextButton:{color:"white",boxShadow:"none",margin:"32px",width:"576px"},subtitle:{display:"flex",justifyContent:"center",marginTop:"16px"}}),lt=function(){var e=r.a.useState(""),t=Object(f.a)(e,2),a=t[0],n=t[1],o=r.a.useState(""),c=Object(f.a)(o,2),l=c[0],i=c[1],s=r.a.useState(""),u=Object(f.a)(s,2),d=u[0],m=u[1],p=r.a.useState(""),g=Object(f.a)(p,2),h=g[0],E=g[1],b=r.a.useState(!0),y=Object(f.a)(b,2),v=y[0],O=y[1],x=ct(),j=function(e){i(e.target.value)};return r.a.createElement(P.a,{theme:B},r.a.createElement(F.a,{display:"flex",height:63,bgcolor:"#E53935",alignItems:"center",paddingLeft:"36px"},r.a.createElement(A.b,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement(V.a,null))),r.a.createElement(W.a,{className:x.containerStyle},v?r.a.createElement(F.a,{display:"flex",flexDirection:"column",width:648,height:307,borderRadius:"5px",bgcolor:"white"},r.a.createElement(z.a,{variant:"h4",className:x.titleStyle},"Create a new room"),r.a.createElement(rt.a,{variant:"outlined",className:x.formControl},r.a.createElement(at.a,{id:"demo-simple-select-outlined-label"},"Status"),r.a.createElement(ot.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:a,onChange:function(e){n(e.target.value)},label:"Status",className:x.select},r.a.createElement(nt.a,{value:"Privat"},"Privat"))),r.a.createElement(G.a,{required:!0,id:"outlined-required",label:"Room name",variant:"outlined",value:l,onChange:j,className:x.textfield}),r.a.createElement("div",{className:x.alignButton},r.a.createElement(q.a,{size:"large",color:"secondary",variant:"contained",className:x.myButton,onClick:function(){var e={name:l,password:"Test123.",maxUsers:4,status:a};if(l.length>0&&a.length>0){fetch("".concat("https","://").concat("derpmasters.online",":").concat("5002","/api/rooms"),{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){m("".concat("https","://").concat("derpmasters.github.io/quackamole",":3000/#/room-lobby/").concat(e)),E(e),O(!1)}))}else console.log("error")}},"create"))):r.a.createElement(F.a,{display:"flex",flexDirection:"column",width:648,height:307,borderRadius:"5px",bgcolor:"white"},r.a.createElement(z.a,{variant:"h4",className:x.titleStyle},"Room was created"),r.a.createElement("div",{className:x.copyLink},r.a.createElement(G.a,{variant:"outlined",value:d,onChange:j,className:x.textfieldLink}),r.a.createElement(q.a,{size:"large",color:"secondary",variant:"contained",className:x.myButton,onClick:function(){navigator.clipboard.writeText(d)}},"copy")),r.a.createElement(z.a,{variant:"h6",className:x.subtitle}," Share your link and invite someone to your room"),r.a.createElement(A.b,{to:"/room-lobby/".concat(h),style:{textDecoration:"none"}},r.a.createElement(q.a,{size:"large",color:"secondary",variant:"contained",className:x.nextButton},"next")))))},it=a(299),st=function(){return r.a.createElement(it.a,null,r.a.createElement(A.a,null,r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/",component:tt}),r.a.createElement(D.a,{exact:!0,path:"/create-room",component:lt}),r.a.createElement(D.a,{exact:!0,path:"/room-lobby/:roomId",component:de}),r.a.createElement(D.a,{path:"/rooms/:roomId",component:$e}))))};c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{store:L},r.a.createElement(st,null))),document.getElementById("root"))}},[[179,1,2]]]);
//# sourceMappingURL=main.03f4166b.chunk.js.map