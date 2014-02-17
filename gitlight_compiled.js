if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.sidebar');
goog.require('lt.object');
goog.require('lt.object');
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight","gitlight.sidebar.close","lt.plugins.gitlight/gitlight.sidebar.close",1352006804),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: sidebar close",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"close!","close!",3951350939));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.ui')) {
goog.provide('lt.plugins.gitlight.status.ui');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.objs.command');
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),cljs.core.name.call(null,g_name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,lt.plugins.gitlight.status.ui.file,files)], null)], null));var seq__8211_8279 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8212_8280 = null;var count__8213_8281 = 0;var i__8214_8282 = 0;while(true){
if((i__8214_8282 < count__8213_8281))
{var vec__8215_8283 = cljs.core._nth.call(null,chunk__8212_8280,i__8214_8282);var ev__8112__auto___8284 = cljs.core.nth.call(null,vec__8215_8283,0,null);var func__8113__auto___8285 = cljs.core.nth.call(null,vec__8215_8283,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8284,func__8113__auto___8285);
{
var G__8286 = seq__8211_8279;
var G__8287 = chunk__8212_8280;
var G__8288 = count__8213_8281;
var G__8289 = (i__8214_8282 + 1);
seq__8211_8279 = G__8286;
chunk__8212_8280 = G__8287;
count__8213_8281 = G__8288;
i__8214_8282 = G__8289;
continue;
}
} else
{var temp__4092__auto___8290 = cljs.core.seq.call(null,seq__8211_8279);if(temp__4092__auto___8290)
{var seq__8211_8291__$1 = temp__4092__auto___8290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8211_8291__$1))
{var c__7497__auto___8292 = cljs.core.chunk_first.call(null,seq__8211_8291__$1);{
var G__8293 = cljs.core.chunk_rest.call(null,seq__8211_8291__$1);
var G__8294 = c__7497__auto___8292;
var G__8295 = cljs.core.count.call(null,c__7497__auto___8292);
var G__8296 = 0;
seq__8211_8279 = G__8293;
chunk__8212_8280 = G__8294;
count__8213_8281 = G__8295;
i__8214_8282 = G__8296;
continue;
}
} else
{var vec__8216_8297 = cljs.core.first.call(null,seq__8211_8291__$1);var ev__8112__auto___8298 = cljs.core.nth.call(null,vec__8216_8297,0,null);var func__8113__auto___8299 = cljs.core.nth.call(null,vec__8216_8297,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8298,func__8113__auto___8299);
{
var G__8300 = cljs.core.next.call(null,seq__8211_8291__$1);
var G__8301 = null;
var G__8302 = 0;
var G__8303 = 0;
seq__8211_8279 = G__8300;
chunk__8212_8280 = G__8301;
count__8213_8281 = G__8302;
i__8214_8282 = G__8303;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.plugins.gitlight.status.ui.file = (function file(f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),f], null));var seq__8223_8304 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8224_8305 = null;var count__8225_8306 = 0;var i__8226_8307 = 0;while(true){
if((i__8226_8307 < count__8225_8306))
{var vec__8227_8308 = cljs.core._nth.call(null,chunk__8224_8305,i__8226_8307);var ev__8112__auto___8309 = cljs.core.nth.call(null,vec__8227_8308,0,null);var func__8113__auto___8310 = cljs.core.nth.call(null,vec__8227_8308,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8309,func__8113__auto___8310);
{
var G__8311 = seq__8223_8304;
var G__8312 = chunk__8224_8305;
var G__8313 = count__8225_8306;
var G__8314 = (i__8226_8307 + 1);
seq__8223_8304 = G__8311;
chunk__8224_8305 = G__8312;
count__8225_8306 = G__8313;
i__8226_8307 = G__8314;
continue;
}
} else
{var temp__4092__auto___8315 = cljs.core.seq.call(null,seq__8223_8304);if(temp__4092__auto___8315)
{var seq__8223_8316__$1 = temp__4092__auto___8315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8223_8316__$1))
{var c__7497__auto___8317 = cljs.core.chunk_first.call(null,seq__8223_8316__$1);{
var G__8318 = cljs.core.chunk_rest.call(null,seq__8223_8316__$1);
var G__8319 = c__7497__auto___8317;
var G__8320 = cljs.core.count.call(null,c__7497__auto___8317);
var G__8321 = 0;
seq__8223_8304 = G__8318;
chunk__8224_8305 = G__8319;
count__8225_8306 = G__8320;
i__8226_8307 = G__8321;
continue;
}
} else
{var vec__8228_8322 = cljs.core.first.call(null,seq__8223_8316__$1);var ev__8112__auto___8323 = cljs.core.nth.call(null,vec__8228_8322,0,null);var func__8113__auto___8324 = cljs.core.nth.call(null,vec__8228_8322,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8323,func__8113__auto___8324);
{
var G__8325 = cljs.core.next.call(null,seq__8223_8316__$1);
var G__8326 = null;
var G__8327 = 0;
var G__8328 = 0;
seq__8223_8304 = G__8325;
chunk__8224_8305 = G__8326;
count__8225_8306 = G__8327;
i__8226_8307 = G__8328;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("test: "),cljs.core.str(Math.random())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__8243(s__8244){return (new cljs.core.LazySeq(null,(function (){var s__8244__$1 = s__8244;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8244__$1);if(temp__4092__auto__)
{var s__8244__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8244__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8244__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8246 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8245 = 0;while(true){
if((i__8245 < size__7465__auto__))
{var vec__8249 = cljs.core._nth.call(null,c__7464__auto__,i__8245);var g = cljs.core.nth.call(null,vec__8249,0,null);var fs = cljs.core.nth.call(null,vec__8249,1,null);cljs.core.chunk_append.call(null,b__8246,lt.plugins.gitlight.status.ui.group.call(null,g,fs));
{
var G__8329 = (i__8245 + 1);
i__8245 = G__8329;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8246),iter__8243.call(null,cljs.core.chunk_rest.call(null,s__8244__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8246),null);
}
} else
{var vec__8250 = cljs.core.first.call(null,s__8244__$2);var g = cljs.core.nth.call(null,vec__8250,0,null);var fs = cljs.core.nth.call(null,vec__8250,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.group.call(null,g,fs),iter__8243.call(null,cljs.core.rest.call(null,s__8244__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.Keyword(null,"git-statuses","git-statuses",1990081325).cljs$core$IFn$_invoke$arity$1(this$));
})()], null)], null));var seq__8251_8330 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8252_8331 = null;var count__8253_8332 = 0;var i__8254_8333 = 0;while(true){
if((i__8254_8333 < count__8253_8332))
{var vec__8255_8334 = cljs.core._nth.call(null,chunk__8252_8331,i__8254_8333);var ev__8112__auto___8335 = cljs.core.nth.call(null,vec__8255_8334,0,null);var func__8113__auto___8336 = cljs.core.nth.call(null,vec__8255_8334,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8335,func__8113__auto___8336);
{
var G__8337 = seq__8251_8330;
var G__8338 = chunk__8252_8331;
var G__8339 = count__8253_8332;
var G__8340 = (i__8254_8333 + 1);
seq__8251_8330 = G__8337;
chunk__8252_8331 = G__8338;
count__8253_8332 = G__8339;
i__8254_8333 = G__8340;
continue;
}
} else
{var temp__4092__auto___8341 = cljs.core.seq.call(null,seq__8251_8330);if(temp__4092__auto___8341)
{var seq__8251_8342__$1 = temp__4092__auto___8341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8251_8342__$1))
{var c__7497__auto___8343 = cljs.core.chunk_first.call(null,seq__8251_8342__$1);{
var G__8344 = cljs.core.chunk_rest.call(null,seq__8251_8342__$1);
var G__8345 = c__7497__auto___8343;
var G__8346 = cljs.core.count.call(null,c__7497__auto___8343);
var G__8347 = 0;
seq__8251_8330 = G__8344;
chunk__8252_8331 = G__8345;
count__8253_8332 = G__8346;
i__8254_8333 = G__8347;
continue;
}
} else
{var vec__8256_8348 = cljs.core.first.call(null,seq__8251_8342__$1);var ev__8112__auto___8349 = cljs.core.nth.call(null,vec__8256_8348,0,null);var func__8113__auto___8350 = cljs.core.nth.call(null,vec__8256_8348,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8349,func__8113__auto___8350);
{
var G__8351 = cljs.core.next.call(null,seq__8251_8342__$1);
var G__8352 = null;
var G__8353 = 0;
var G__8354 = 0;
seq__8251_8330 = G__8351;
chunk__8252_8331 = G__8352;
count__8253_8332 = G__8353;
i__8254_8333 = G__8354;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.git-status","div.git-status",3669381948)], null));var seq__8263_8355 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8264_8356 = null;var count__8265_8357 = 0;var i__8266_8358 = 0;while(true){
if((i__8266_8358 < count__8265_8357))
{var vec__8267_8359 = cljs.core._nth.call(null,chunk__8264_8356,i__8266_8358);var ev__8112__auto___8360 = cljs.core.nth.call(null,vec__8267_8359,0,null);var func__8113__auto___8361 = cljs.core.nth.call(null,vec__8267_8359,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8360,func__8113__auto___8361);
{
var G__8362 = seq__8263_8355;
var G__8363 = chunk__8264_8356;
var G__8364 = count__8265_8357;
var G__8365 = (i__8266_8358 + 1);
seq__8263_8355 = G__8362;
chunk__8264_8356 = G__8363;
count__8265_8357 = G__8364;
i__8266_8358 = G__8365;
continue;
}
} else
{var temp__4092__auto___8366 = cljs.core.seq.call(null,seq__8263_8355);if(temp__4092__auto___8366)
{var seq__8263_8367__$1 = temp__4092__auto___8366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8263_8367__$1))
{var c__7497__auto___8368 = cljs.core.chunk_first.call(null,seq__8263_8367__$1);{
var G__8369 = cljs.core.chunk_rest.call(null,seq__8263_8367__$1);
var G__8370 = c__7497__auto___8368;
var G__8371 = cljs.core.count.call(null,c__7497__auto___8368);
var G__8372 = 0;
seq__8263_8355 = G__8369;
chunk__8264_8356 = G__8370;
count__8265_8357 = G__8371;
i__8266_8358 = G__8372;
continue;
}
} else
{var vec__8268_8373 = cljs.core.first.call(null,seq__8263_8367__$1);var ev__8112__auto___8374 = cljs.core.nth.call(null,vec__8268_8373,0,null);var func__8113__auto___8375 = cljs.core.nth.call(null,vec__8268_8373,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8374,func__8113__auto___8375);
{
var G__8376 = cljs.core.next.call(null,seq__8263_8367__$1);
var G__8377 = null;
var G__8378 = 0;
var G__8379 = 0;
seq__8263_8355 = G__8376;
chunk__8264_8356 = G__8377;
count__8265_8357 = G__8378;
i__8266_8358 = G__8379;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.plugins.gitlight.status.ui.__BEH__update = (function __BEH__update(obj){console.log("?");
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))));
new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)).innerHTML = "";
return lt.util.dom.append.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),lt.plugins.gitlight.status.ui.status_ui.call(null,cljs.core.deref.call(null,obj)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.ui.__BEH__update,new cljs.core.Keyword(null,"desc","desc",1016984067),"update status view",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"GIT",new cljs.core.Keyword(null,"git-statuses","git-statuses",1990081325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zygmunt.txt"], null),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"staged","staged",4416376984),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731)], null),new cljs.core.Keyword(null,"order","order",1119910592),2,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.status.ui.wrapper.call(null,cljs.core.deref.call(null,this$));
}));
lt.plugins.gitlight.status.ui.status_bar = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620));
lt.plugins.gitlight.status.ui.sb = lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.gitlight.status.ui.status_bar);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Status",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){console.log(Math.random());
lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.gitlight.status.ui.status_bar);
return console.log("que");
})], null));
}

//# sourceMappingURL=gitlight_compiled.js.map