if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.config = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),null], null), null),new cljs.core.Keyword(null,"max-history","max-history",730578077),64,new cljs.core.Keyword(null,"git-binary","git-binary",1640221134),"git"));
lt.plugins.gitlight.__BEH__config = (function __BEH__config(this$,new_config){return lt.object.merge_BANG_.call(null,lt.plugins.gitlight.config,new_config);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.__BEH__config,new cljs.core.Keyword(null,"desc","desc",1016984067),"Configure gitlight",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.common-ui')) {
goog.provide('lt.plugins.gitlight.common_ui');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.context');
goog.require('lt.util.dom');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
lt.plugins.gitlight.common_ui.button_ui = (function button_ui(text,fun,args,cls){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),(((cls == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),text], null)], null));var seq__8368_8411 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return cljs.core.apply.call(null,fun,args);
});})(e__7755__auto__))
], null)));var chunk__8369_8412 = null;var count__8370_8413 = 0;var i__8371_8414 = 0;while(true){
if((i__8371_8414 < count__8370_8413))
{var vec__8372_8415 = cljs.core._nth.call(null,chunk__8369_8412,i__8371_8414);var ev__7756__auto___8416 = cljs.core.nth.call(null,vec__8372_8415,0,null);var func__7757__auto___8417 = cljs.core.nth.call(null,vec__8372_8415,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8416,func__7757__auto___8417);
{
var G__8418 = seq__8368_8411;
var G__8419 = chunk__8369_8412;
var G__8420 = count__8370_8413;
var G__8421 = (i__8371_8414 + 1);
seq__8368_8411 = G__8418;
chunk__8369_8412 = G__8419;
count__8370_8413 = G__8420;
i__8371_8414 = G__8421;
continue;
}
} else
{var temp__4092__auto___8422 = cljs.core.seq.call(null,seq__8368_8411);if(temp__4092__auto___8422)
{var seq__8368_8423__$1 = temp__4092__auto___8422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8368_8423__$1))
{var c__7112__auto___8424 = cljs.core.chunk_first.call(null,seq__8368_8423__$1);{
var G__8425 = cljs.core.chunk_rest.call(null,seq__8368_8423__$1);
var G__8426 = c__7112__auto___8424;
var G__8427 = cljs.core.count.call(null,c__7112__auto___8424);
var G__8428 = 0;
seq__8368_8411 = G__8425;
chunk__8369_8412 = G__8426;
count__8370_8413 = G__8427;
i__8371_8414 = G__8428;
continue;
}
} else
{var vec__8373_8429 = cljs.core.first.call(null,seq__8368_8423__$1);var ev__7756__auto___8430 = cljs.core.nth.call(null,vec__8373_8429,0,null);var func__7757__auto___8431 = cljs.core.nth.call(null,vec__8373_8429,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8430,func__7757__auto___8431);
{
var G__8432 = cljs.core.next.call(null,seq__8368_8423__$1);
var G__8433 = null;
var G__8434 = 0;
var G__8435 = 0;
seq__8368_8411 = G__8432;
chunk__8369_8412 = G__8433;
count__8370_8413 = G__8434;
i__8371_8414 = G__8435;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.common_ui.button = (function() {
var button = null;
var button__1 = (function (text){return button.call(null,text,(function (){return cljs.core.List.EMPTY;
}),null,null);
});
var button__2 = (function (text,fun){return button.call(null,text,fun,null,null);
});
var button__3 = (function (text,fun,args){return button.call(null,text,fun,args,null);
});
var button__4 = (function (text,fun,args,cls){return lt.plugins.gitlight.common_ui.button_ui.call(null,text,fun,args,cls);
});
button = function(text,fun,args,cls){
switch(arguments.length){
case 1:
return button__1.call(this,text);
case 2:
return button__2.call(this,text,fun);
case 3:
return button__3.call(this,text,fun,args);
case 4:
return button__4.call(this,text,fun,args,cls);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
button.cljs$core$IFn$_invoke$arity$1 = button__1;
button.cljs$core$IFn$_invoke$arity$2 = button__2;
button.cljs$core$IFn$_invoke$arity$3 = button__3;
button.cljs$core$IFn$_invoke$arity$4 = button__4;
return button;
})()
;
lt.plugins.gitlight.common_ui.text_input = (function text_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"message"], null)], null));var seq__8380_8436 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7755__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7755__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
], null)));var chunk__8381_8437 = null;var count__8382_8438 = 0;var i__8383_8439 = 0;while(true){
if((i__8383_8439 < count__8382_8438))
{var vec__8384_8440 = cljs.core._nth.call(null,chunk__8381_8437,i__8383_8439);var ev__7756__auto___8441 = cljs.core.nth.call(null,vec__8384_8440,0,null);var func__7757__auto___8442 = cljs.core.nth.call(null,vec__8384_8440,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8441,func__7757__auto___8442);
{
var G__8443 = seq__8380_8436;
var G__8444 = chunk__8381_8437;
var G__8445 = count__8382_8438;
var G__8446 = (i__8383_8439 + 1);
seq__8380_8436 = G__8443;
chunk__8381_8437 = G__8444;
count__8382_8438 = G__8445;
i__8383_8439 = G__8446;
continue;
}
} else
{var temp__4092__auto___8447 = cljs.core.seq.call(null,seq__8380_8436);if(temp__4092__auto___8447)
{var seq__8380_8448__$1 = temp__4092__auto___8447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8380_8448__$1))
{var c__7112__auto___8449 = cljs.core.chunk_first.call(null,seq__8380_8448__$1);{
var G__8450 = cljs.core.chunk_rest.call(null,seq__8380_8448__$1);
var G__8451 = c__7112__auto___8449;
var G__8452 = cljs.core.count.call(null,c__7112__auto___8449);
var G__8453 = 0;
seq__8380_8436 = G__8450;
chunk__8381_8437 = G__8451;
count__8382_8438 = G__8452;
i__8383_8439 = G__8453;
continue;
}
} else
{var vec__8385_8454 = cljs.core.first.call(null,seq__8380_8448__$1);var ev__7756__auto___8455 = cljs.core.nth.call(null,vec__8385_8454,0,null);var func__7757__auto___8456 = cljs.core.nth.call(null,vec__8385_8454,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8455,func__7757__auto___8456);
{
var G__8457 = cljs.core.next.call(null,seq__8380_8448__$1);
var G__8458 = null;
var G__8459 = 0;
var G__8460 = 0;
seq__8380_8436 = G__8457;
chunk__8381_8437 = G__8458;
count__8382_8438 = G__8459;
i__8383_8439 = G__8460;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.common_ui.input_popup = (function input_popup(mesg,label,fun){var input = lt.plugins.gitlight.common_ui.text_input.call(null);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),mesg,new cljs.core.Keyword(null,"body","body",1016933652),input,new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),label,new cljs.core.Keyword(null,"action","action",3885920680),((function (input){
return (function (){return fun.call(null,lt.util.dom.val.call(null,input));
});})(input))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null)], null)], null));return null;
});
lt.plugins.gitlight.common_ui.dom_truncate = (function dom_truncate(node){return node.innerHTML = "";
});
lt.plugins.gitlight.common_ui.dom_reset = (function dom_reset(node,new_cnt){lt.plugins.gitlight.common_ui.dom_truncate.call(null,node);
return lt.util.dom.append.call(null,node,new_cnt);
});
lt.plugins.gitlight.common_ui.make_refresh_behavior = (function make_refresh_behavior(k,ui_fun){lt.plugins.gitlight.common_ui.__BEH__k = (function __BEH__k(this$){var new_cnt = ui_fun.call(null,this$);lt.plugins.gitlight.common_ui.dom_reset.call(null,lt.util.dom.parent.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),new_cnt);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),new_cnt], null));
});
return lt.object.behavior_STAR_.call(null,k,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__k,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
});
lt.plugins.gitlight.common_ui.__BEH__refresh_tab = (function __BEH__refresh_tab(this$,command,stdout,stderr){lt.objs.tabs.add_or_focus_BANG_.call(null,this$);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),stdout], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","refresh-tab","lt.plugins.gitlight.common-ui/refresh-tab",1790366357),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__refresh_tab,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
lt.plugins.gitlight.common_ui.make_keywords = (function make_keywords(k){var kwrdstr = cljs.core.subs.call(null,[cljs.core.str(k)].join(''),1);return cljs.core.map.call(null,((function (kwrdstr){
return (function (x){return cljs.core.keyword.call(null,[cljs.core.str(kwrdstr),cljs.core.str(x)].join(''));
});})(kwrdstr))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-out","-refresh-results","-refresh-tab-results","-output"], null));
});
lt.plugins.gitlight.common_ui.__BEH__merge_mult_results = (function __BEH__merge_mult_results(this$,results){lt.objs.tabs.add_or_focus_BANG_.call(null,this$);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.map.call(null,(function (p1__8386_SHARP_){return cljs.core.nth.call(null,p1__8386_SHARP_,2);
}),results)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","merge-mult-results","lt.plugins.gitlight.common-ui/merge-mult-results",4752627904),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__merge_mult_results,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mult-outs","mult-outs",4047322324)], null));
lt.plugins.gitlight.common_ui.not_a_thing = (function not_a_thing(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"nothing"], null));var seq__8393_8461 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8394_8462 = null;var count__8395_8463 = 0;var i__8396_8464 = 0;while(true){
if((i__8396_8464 < count__8395_8463))
{var vec__8397_8465 = cljs.core._nth.call(null,chunk__8394_8462,i__8396_8464);var ev__7756__auto___8466 = cljs.core.nth.call(null,vec__8397_8465,0,null);var func__7757__auto___8467 = cljs.core.nth.call(null,vec__8397_8465,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8466,func__7757__auto___8467);
{
var G__8468 = seq__8393_8461;
var G__8469 = chunk__8394_8462;
var G__8470 = count__8395_8463;
var G__8471 = (i__8396_8464 + 1);
seq__8393_8461 = G__8468;
chunk__8394_8462 = G__8469;
count__8395_8463 = G__8470;
i__8396_8464 = G__8471;
continue;
}
} else
{var temp__4092__auto___8472 = cljs.core.seq.call(null,seq__8393_8461);if(temp__4092__auto___8472)
{var seq__8393_8473__$1 = temp__4092__auto___8472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8393_8473__$1))
{var c__7112__auto___8474 = cljs.core.chunk_first.call(null,seq__8393_8473__$1);{
var G__8475 = cljs.core.chunk_rest.call(null,seq__8393_8473__$1);
var G__8476 = c__7112__auto___8474;
var G__8477 = cljs.core.count.call(null,c__7112__auto___8474);
var G__8478 = 0;
seq__8393_8461 = G__8475;
chunk__8394_8462 = G__8476;
count__8395_8463 = G__8477;
i__8396_8464 = G__8478;
continue;
}
} else
{var vec__8398_8479 = cljs.core.first.call(null,seq__8393_8473__$1);var ev__7756__auto___8480 = cljs.core.nth.call(null,vec__8398_8479,0,null);var func__7757__auto___8481 = cljs.core.nth.call(null,vec__8398_8479,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8480,func__7757__auto___8481);
{
var G__8482 = cljs.core.next.call(null,seq__8393_8473__$1);
var G__8483 = null;
var G__8484 = 0;
var G__8485 = 0;
seq__8393_8461 = G__8482;
chunk__8394_8462 = G__8483;
count__8395_8463 = G__8484;
i__8396_8464 = G__8485;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,ui_fun){var vec__8400 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__8400,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__8400,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__8400,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__8400,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478),new cljs.core.Keyword(null,"gitlight-log-history","gitlight-log-history",2628910772)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"result","result",4374444943),null,new cljs.core.Keyword(null,"results","results",2111450984),null,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword("lt.plugins.gitlight.common-ui","refresh-tab","lt.plugins.gitlight.common-ui/refresh-tab",1790366357),new cljs.core.Keyword("lt.plugins.gitlight.common-ui","merge-mult-results","lt.plugins.gitlight.common-ui/merge-mult-results",4752627904),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__8400,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return lt.plugins.gitlight.common_ui.not_a_thing.call(null);
});})(vec__8400,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);return lt.object.create.call(null,tab_obj);
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8486 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8486))
{var ts_8487 = temp__4092__auto___8486;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8487))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8487);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.libs')) {
goog.provide('lt.plugins.gitlight.libs');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.gitlight.libs.now = (function now(){return (new Date()).toLocaleString();
});
lt.plugins.gitlight.libs.qu = (function qu(s){return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
lt.plugins.gitlight.libs.sanitize = (function sanitize(s){return clojure.string.escape.call(null,s,new cljs.core.PersistentArrayMap(null, 4, ["$","\\$","`","\\`","\\","\\\\","\"","\\\""], null));
});
lt.plugins.gitlight.libs.q_AMPERSAND_s = (function q_AMPERSAND_s(s){return lt.plugins.gitlight.libs.qu.call(null,lt.plugins.gitlight.libs.sanitize.call(null,s));
});
lt.plugins.gitlight.libs.current_file_path = (function current_file_path(){return lt.plugins.gitlight.libs.qu.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
});
lt.plugins.gitlight.libs.qsprint = (function qsprint(s){return cljs.core.println.call(null,lt.plugins.gitlight.libs.q_AMPERSAND_s.call(null,s));
});
lt.plugins.gitlight.libs.popup = (function popup(){return lt.plugins.gitlight.common_ui.input_popup.call(null,"try to break us","commit",lt.plugins.gitlight.libs.qsprint);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.libs","input-test","lt.plugins.gitlight.libs/input-test",2391106596),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: input sanitize test",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.libs.popup], null));
lt.plugins.gitlight.libs.wrap_post = (function wrap_post(wrapper,fun){return (function() { 
var G__8753__delegate = function (args){cljs.core.apply.call(null,fun,args);
return wrapper.call(null);
};
var G__8753 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8753__delegate.call(this,args);};
G__8753.cljs$lang$maxFixedArity = 0;
G__8753.cljs$lang$applyTo = (function (arglist__8754){
var args = cljs.core.seq(arglist__8754);
return G__8753__delegate(args);
});
G__8753.cljs$core$IFn$_invoke$arity$variadic = G__8753__delegate;
return G__8753;
})()
;
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.execute')) {
goog.provide('lt.plugins.gitlight.execute');
goog.require('cljs.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.execute.exec = require("child_process").exec;
lt.plugins.gitlight.execute.run = (function run(return_obj,path,command,input){var child_proc = lt.plugins.gitlight.execute.exec.call(null,command,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",path], null)),(function (err,stdout,stderr){return lt.object.raise.call(null,return_obj,(cljs.core.truth_(err)?new cljs.core.Keyword(null,"err","err",1014004951):new cljs.core.Keyword(null,"out","out",1014014656)),command,stdout,stderr);
}));var proc_input = child_proc.stdin;return proc_input.end(input);
});
lt.plugins.gitlight.execute.run_deaf = (function run_deaf(return_obj,path,command){return lt.plugins.gitlight.execute.run.call(null,return_obj,path,command,"");
});
lt.plugins.gitlight.execute.join_n_run = (function join_n_run(status,this$,command,stdout,stderr){cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,command,stdout,stderr], null));
var funs = new cljs.core.Keyword(null,"funs","funs",1017058886).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var fun = cljs.core.first.call(null,funs);var tail = cljs.core.rest.call(null,funs);if(!((fun == null)))
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"funs","funs",1017058886),tail], null));
return fun.call(null,this$);
} else
{return lt.object.raise.call(null,new cljs.core.Keyword(null,"return-obj","return-obj",2349939276).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"mult-outs","mult-outs",4047322324),cljs.core.rest.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.execute","run-funs-out","lt.plugins.gitlight.execute/run-funs-out",915546777),new cljs.core.Keyword(null,"reaction","reaction",4441361819),cljs.core.partial.call(null,lt.plugins.gitlight.execute.join_n_run,new cljs.core.Keyword(null,"out","out",1014014656)),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out","out",1014014656)], null));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.execute","run-funs-err","lt.plugins.gitlight.execute/run-funs-err",915523714),new cljs.core.Keyword(null,"reaction","reaction",4441361819),cljs.core.partial.call(null,lt.plugins.gitlight.execute.join_n_run,new cljs.core.Keyword(null,"err","err",1014004951)),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",1014004951)], null));
lt.plugins.gitlight.execute.runfuns = (function runfuns(return_obj,funs){var output = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.execute","foldl-outputs","lt.plugins.gitlight.execute/foldl-outputs",3946205472),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-log-history","gitlight-log-history",2628910772)], null),new cljs.core.Keyword(null,"return-obj","return-obj",2349939276),return_obj,new cljs.core.Keyword(null,"funs","funs",1017058886),funs,new cljs.core.Keyword(null,"output","output",4303359091),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.execute","run-funs-out","lt.plugins.gitlight.execute/run-funs-out",915546777),new cljs.core.Keyword("lt.plugins.gitlight.execute","run-funs-err","lt.plugins.gitlight.execute/run-funs-err",915523714)], null)));return lt.object.raise.call(null,output,new cljs.core.Keyword(null,"out","out",1014014656));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.history')) {
goog.provide('lt.plugins.gitlight.history');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight');
lt.plugins.gitlight.history.row = (function row(p__8712){var vec__8714 = p__8712;var success_or_error = cljs.core.nth.call(null,vec__8714,0,null);var command = cljs.core.nth.call(null,vec__8714,1,null);var date = cljs.core.nth.call(null,vec__8714,2,null);var stdout = cljs.core.nth.call(null,vec__8714,3,null);var stderr = cljs.core.nth.call(null,vec__8714,4,null);if(!((success_or_error == null)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,success_or_error)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),command], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),date,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),cljs.core.name.call(null,success_or_error)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),"disabled"], null),stdout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),"disabled"], null),stderr], null)], null)], null);
} else
{return null;
}
});
lt.plugins.gitlight.history.spacer = (function spacer(txt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.spacer","tr.spacer",4188737806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),txt], null)], null)], null);
});
lt.plugins.gitlight.history.parse_dump = (function parse_dump(dump){return clojure.string.join.call(null,"\n",cljs.core.map.call(null,cljs.core.str,dump));
});
lt.plugins.gitlight.history.landfill_of_history = (function landfill_of_history(dump){var landfill = lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-separator","line-separator",3195996094),"\n",new cljs.core.Keyword(null,"name","name",1017277949),"Landfill_of_History",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.plaintext","editor.plaintext",4474629672),new cljs.core.Keyword(null,"editor.transient","editor.transient",3554141883)], null)], null));lt.objs.tabs.add_or_focus_BANG_.call(null,landfill);
return lt.objs.editor.set_val.call(null,landfill,dump);
});
lt.plugins.gitlight.history.get_first = (function get_first(needle,haystack){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8715_SHARP_){return cljs.core._EQ_.call(null,needle,cljs.core.first.call(null,p1__8715_SHARP_));
}),haystack));
});
lt.plugins.gitlight.history.history_header = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stdout"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stderr"], null)], null);
lt.plugins.gitlight.history.make_history_gui = (function make_history_gui(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var history = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var dump_button = lt.plugins.gitlight.common_ui.button.call(null,"dump history",lt.plugins.gitlight.history.landfill_of_history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.history.parse_dump.call(null,cljs.core.deref.call(null,history))], null));var last_ok = lt.plugins.gitlight.history.get_first.call(null,new cljs.core.Keyword(null,"success","success",3441701749),cljs.core.deref.call(null,history));var last_fail = lt.plugins.gitlight.history.get_first.call(null,new cljs.core.Keyword(null,"error","error",1110689146),cljs.core.deref.call(null,history));var history_rows = cljs.core.map.call(null,lt.plugins.gitlight.history.row,cljs.core.deref.call(null,history));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-command-history","div.gitlight-command-history",2639214328),dump_button,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),lt.plugins.gitlight.history.spacer.call(null,"last ok: "),lt.plugins.gitlight.history.row.call(null,last_ok),lt.plugins.gitlight.history.spacer.call(null,"last failed: "),lt.plugins.gitlight.history.row.call(null,last_fail),lt.plugins.gitlight.history.spacer.call(null,"history: "),lt.plugins.gitlight.history.history_header,history_rows], null)], null);
})());var seq__8722_8728 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8723_8729 = null;var count__8724_8730 = 0;var i__8725_8731 = 0;while(true){
if((i__8725_8731 < count__8724_8730))
{var vec__8726_8732 = cljs.core._nth.call(null,chunk__8723_8729,i__8725_8731);var ev__7756__auto___8733 = cljs.core.nth.call(null,vec__8726_8732,0,null);var func__7757__auto___8734 = cljs.core.nth.call(null,vec__8726_8732,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8733,func__7757__auto___8734);
{
var G__8735 = seq__8722_8728;
var G__8736 = chunk__8723_8729;
var G__8737 = count__8724_8730;
var G__8738 = (i__8725_8731 + 1);
seq__8722_8728 = G__8735;
chunk__8723_8729 = G__8736;
count__8724_8730 = G__8737;
i__8725_8731 = G__8738;
continue;
}
} else
{var temp__4092__auto___8739 = cljs.core.seq.call(null,seq__8722_8728);if(temp__4092__auto___8739)
{var seq__8722_8740__$1 = temp__4092__auto___8739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8722_8740__$1))
{var c__7112__auto___8741 = cljs.core.chunk_first.call(null,seq__8722_8740__$1);{
var G__8742 = cljs.core.chunk_rest.call(null,seq__8722_8740__$1);
var G__8743 = c__7112__auto___8741;
var G__8744 = cljs.core.count.call(null,c__7112__auto___8741);
var G__8745 = 0;
seq__8722_8728 = G__8742;
chunk__8723_8729 = G__8743;
count__8724_8730 = G__8744;
i__8725_8731 = G__8745;
continue;
}
} else
{var vec__8727_8746 = cljs.core.first.call(null,seq__8722_8740__$1);var ev__7756__auto___8747 = cljs.core.nth.call(null,vec__8727_8746,0,null);var func__7757__auto___8748 = cljs.core.nth.call(null,vec__8727_8746,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8747,func__7757__auto___8748);
{
var G__8749 = cljs.core.next.call(null,seq__8722_8740__$1);
var G__8750 = null;
var G__8751 = 0;
var G__8752 = 0;
seq__8722_8728 = G__8749;
chunk__8723_8729 = G__8750;
count__8724_8730 = G__8751;
i__8725_8731 = G__8752;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.history.refresh = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,new cljs.core.Keyword("lt.plugins.gitlight.history","history-refresh","lt.plugins.gitlight.history/history-refresh",2164998053),lt.plugins.gitlight.history.make_history_gui);
lt.plugins.gitlight.history.tab_obj = lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.history","history-tab","lt.plugins.gitlight.history/history-tab",571578219),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-tab","history-tab",1364763214)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Git command history",new cljs.core.Keyword(null,"history","history",1940838406),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),lt.plugins.gitlight.history.refresh], null),new cljs.core.Keyword(null,"init","init",1017141378),lt.plugins.gitlight.history.make_history_gui);
lt.plugins.gitlight.history.history_tab = lt.object.create.call(null,lt.plugins.gitlight.history.tab_obj);
lt.plugins.gitlight.history.history_limited_conj = (function history_limited_conj(a,b){var just_enough = new cljs.core.Keyword(null,"max-history","max-history",730578077).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config));return cljs.core.take.call(null,just_enough,cljs.core.conj.call(null,a,b));
});
lt.plugins.gitlight.history.command_history = (function command_history(){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.gitlight.history.history_tab);
return lt.object.raise.call(null,lt.plugins.gitlight.history.history_tab,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.plugins.gitlight.history.add_to_history = (function add_to_history(success_or_error,obj,command,stdout,stderr){if(!((command == null)))
{var history = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.history.history_tab));var item_to_add = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [success_or_error,command,lt.plugins.gitlight.libs.now.call(null),[cljs.core.str(stdout)].join(''),[cljs.core.str(stderr)].join('')], null);return cljs.core.swap_BANG_.call(null,history,lt.plugins.gitlight.history.history_limited_conj,item_to_add);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.history","history-out-success","lt.plugins.gitlight.history/history-out-success",3203541310),new cljs.core.Keyword(null,"reaction","reaction",4441361819),cljs.core.partial.call(null,lt.plugins.gitlight.history.add_to_history,new cljs.core.Keyword(null,"success","success",3441701749)),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Log command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.history","history-out-error","lt.plugins.gitlight.history/history-out-error",4273094007),new cljs.core.Keyword(null,"reaction","reaction",4441361819),cljs.core.partial.call(null,lt.plugins.gitlight.history.add_to_history,new cljs.core.Keyword(null,"error","error",1110689146)),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Log command error output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.history","git-history","lt.plugins.gitlight.history/git-history",1919033520),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: command history",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.history.command_history], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.git')) {
goog.provide('lt.plugins.gitlight.git');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.history');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.gitlight.execute');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.plugins.gitlight.history');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.execute');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight');
lt.plugins.gitlight.git.on_cwd_QMARK_ = (function on_cwd_QMARK_(){return !((lt.objs.editor.pool.last_active.call(null) == null));
});
lt.plugins.gitlight.git.get_cwd = (function get_cwd(){return lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
});
lt.plugins.gitlight.git.get_git_root = (function get_git_root(){if(lt.plugins.gitlight.git.on_cwd_QMARK_.call(null))
{var cwd = lt.objs.files.walk_up_find.call(null,lt.plugins.gitlight.git.get_cwd.call(null),".git");if(!((cwd == null)))
{return lt.objs.files.parent.call(null,cwd);
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.gitlight.git.git_ignore_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","git-ignore-out","lt.plugins.gitlight.git/git-ignore-out",1518510219),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-ignore-out","git-ignore-out",3448111392)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-success","lt.plugins.gitlight.git/ignore.out-success",2272362317),new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-error","lt.plugins.gitlight.git/ignore.out-error",2426640522)], null)));
lt.plugins.gitlight.git.run_git_command = (function run_git_command(args,obj,cwd){var git_path = new cljs.core.Keyword(null,"git-binary","git-binary",1640221134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config));var command = [cljs.core.str(lt.plugins.gitlight.libs.qu.call(null,git_path)),cljs.core.str(" "),cljs.core.str(clojure.string.join.call(null," ",args))].join('');return lt.plugins.gitlight.execute.run_deaf.call(null,obj,cwd,command);
});
lt.plugins.gitlight.git.git = (function() {
var git = null;
var git__1 = (function (args){return git.call(null,args,lt.plugins.gitlight.git.git_ignore_out);
});
var git__2 = (function (args,obj){return git.call(null,args,obj,lt.plugins.gitlight.git.get_git_root.call(null));
});
var git__3 = (function (args,obj,cwd){return lt.plugins.gitlight.git.run_git_command.call(null,args,obj,cwd);
});
git = function(args,obj,cwd){
switch(arguments.length){
case 1:
return git__1.call(this,args);
case 2:
return git__2.call(this,args,obj);
case 3:
return git__3.call(this,args,obj,cwd);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
git.cljs$core$IFn$_invoke$arity$1 = git__1;
git.cljs$core$IFn$_invoke$arity$2 = git__2;
git.cljs$core$IFn$_invoke$arity$3 = git__3;
return git;
})()
;
lt.plugins.gitlight.git.git_add = (function git_add(filename){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add","--",filename], null));
});
lt.plugins.gitlight.git.git_reset = (function git_reset(filename){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reset","--",filename], null));
});
lt.plugins.gitlight.git.git_checkout_file = (function git_checkout_file(filename){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["checkout","--",filename], null));
});
lt.plugins.gitlight.git.git_commit_popup = (function git_commit_popup(){return lt.plugins.gitlight.common_ui.input_popup.call(null,"commit message?","commit",lt.plugins.gitlight.git.git_commit);
});
lt.plugins.gitlight.git.git_commit = (function() {
var git_commit = null;
var git_commit__1 = (function (msg){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","-m",lt.plugins.gitlight.libs.q_AMPERSAND_s.call(null,msg)], null));
});
var git_commit__2 = (function (title,body){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","-m",lt.plugins.gitlight.libs.q_AMPERSAND_s.call(null,title),"-m",lt.plugins.gitlight.libs.q_AMPERSAND_s.call(null,body)], null));
});
git_commit = function(title,body){
switch(arguments.length){
case 1:
return git_commit__1.call(this,title);
case 2:
return git_commit__2.call(this,title,body);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
git_commit.cljs$core$IFn$_invoke$arity$1 = git_commit__1;
git_commit.cljs$core$IFn$_invoke$arity$2 = git_commit__2;
return git_commit;
})()
;
lt.plugins.gitlight.git.__BEH__ignore__DOT__out_success = (function __BEH__ignore__DOT__out_success(obj,command,stdout,stderr){return lt.objs.notifos.set_msg_BANG_.call(null,"git: success!");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-success","lt.plugins.gitlight.git/ignore.out-success",2272362317),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.gitlight.git.__BEH__ignore__DOT__out_error = (function __BEH__ignore__DOT__out_error(obj,command,stdout,stderr){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("git failed!: "),cljs.core.str(stderr.toString())].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-error","lt.plugins.gitlight.git/ignore.out-error",2426640522),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out_error,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.gitlight.git.__BEH__dump_output_to_console = (function __BEH__dump_output_to_console(obj,command,stdout,stderr){return console.log(clojure.string.join.call(null,"\n",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command,stdout.toString(),stderr.toString()], null)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","dump-output-to-console","lt.plugins.gitlight.git/dump-output-to-console",3183590781),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__dump_output_to_console,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: dump git command output to console.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"err","err",1014004951),null,new cljs.core.Keyword(null,"out","out",1014014656),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-add","lt.plugins.gitlight.git/git-add",3411206675),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: add this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_add.call(null,lt.plugins.gitlight.libs.current_file_path.call(null));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-reset","lt.plugins.gitlight.git/git-reset",1466075745),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: reset this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_reset.call(null,lt.plugins.gitlight.libs.current_file_path.call(null));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-checkout","lt.plugins.gitlight.git/git-checkout",2494382294),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: checkout this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_checkout.call(null,lt.plugins.gitlight.libs.current_file_path.call(null));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-commit","lt.plugins.gitlight.git/git-commit",3023680103),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: commit",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.git.git_commit], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.stash')) {
goog.provide('lt.plugins.gitlight.stash');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.stash.stash = (function stash(){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stash"], null));
});
lt.plugins.gitlight.stash.stash_pop = (function stash_pop(stash){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stash","pop",stash], null));
});
lt.plugins.gitlight.stash.stash_apply = (function stash_apply(stash){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stash","apply",stash], null));
});
lt.plugins.gitlight.stash.stash_drop = (function stash_drop(stash){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stash","drop",stash], null));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.gutter')) {
goog.provide('lt.plugins.gitlight.gutter');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.object');
goog.require('lt.object');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","gutter-settings","lt.plugins.gitlight.gutter/gutter-settings",3270956924),new cljs.core.Keyword(null,"width","width",1127031096),32);
lt.plugins.gitlight.gutter.gutter_settings = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","gutter-settings","lt.plugins.gitlight.gutter/gutter-settings",3270956924));
lt.plugins.gitlight.gutter.make_gutter_marker = (function make_gutter_marker(this$,on_click,style_content,content){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gutter-content","div.gutter-content",4072529974),style_content.call(null,content)], null));var seq__8679_8686 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return on_click.call(null,content);
});})(e__7755__auto__))
], null)));var chunk__8680_8687 = null;var count__8681_8688 = 0;var i__8682_8689 = 0;while(true){
if((i__8682_8689 < count__8681_8688))
{var vec__8683_8690 = cljs.core._nth.call(null,chunk__8680_8687,i__8682_8689);var ev__7756__auto___8691 = cljs.core.nth.call(null,vec__8683_8690,0,null);var func__7757__auto___8692 = cljs.core.nth.call(null,vec__8683_8690,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8691,func__7757__auto___8692);
{
var G__8693 = seq__8679_8686;
var G__8694 = chunk__8680_8687;
var G__8695 = count__8681_8688;
var G__8696 = (i__8682_8689 + 1);
seq__8679_8686 = G__8693;
chunk__8680_8687 = G__8694;
count__8681_8688 = G__8695;
i__8682_8689 = G__8696;
continue;
}
} else
{var temp__4092__auto___8697 = cljs.core.seq.call(null,seq__8679_8686);if(temp__4092__auto___8697)
{var seq__8679_8698__$1 = temp__4092__auto___8697;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8679_8698__$1))
{var c__7112__auto___8699 = cljs.core.chunk_first.call(null,seq__8679_8698__$1);{
var G__8700 = cljs.core.chunk_rest.call(null,seq__8679_8698__$1);
var G__8701 = c__7112__auto___8699;
var G__8702 = cljs.core.count.call(null,c__7112__auto___8699);
var G__8703 = 0;
seq__8679_8686 = G__8700;
chunk__8680_8687 = G__8701;
count__8681_8688 = G__8702;
i__8682_8689 = G__8703;
continue;
}
} else
{var vec__8684_8704 = cljs.core.first.call(null,seq__8679_8698__$1);var ev__7756__auto___8705 = cljs.core.nth.call(null,vec__8684_8704,0,null);var func__7757__auto___8706 = cljs.core.nth.call(null,vec__8684_8704,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8705,func__7757__auto___8706);
{
var G__8707 = cljs.core.next.call(null,seq__8679_8698__$1);
var G__8708 = null;
var G__8709 = 0;
var G__8710 = 0;
seq__8679_8686 = G__8707;
chunk__8680_8687 = G__8708;
count__8681_8688 = G__8709;
i__8682_8689 = G__8710;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.gutter.show_gutter_data = (function show_gutter_data(this$,on_click,style_content,data){var current_gutters = cljs.core.set.call(null,cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters")));var gutter_div = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.CodeMirror-gutters","div.CodeMirror-gutters",1932435974),lt.object.__GT_content.call(null,this$));var gutter_markers = cljs.core.map.call(null,((function (current_gutters,gutter_div){
return (function (p1__8685_SHARP_){return lt.plugins.gitlight.gutter.make_gutter_marker.call(null,this$,on_click,style_content,p1__8685_SHARP_);
});})(current_gutters,gutter_div))
,data);var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);return lt.objs.editor.operation.call(null,this$,((function (current_gutters,gutter_div,gutter_markers,ed){
return (function (){lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"gitlight-gutter"))], null));
lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.gitlight-gutter","div.gitlight-gutter",3002550937),gutter_div),new cljs.core.PersistentArrayMap(null, 1, ["width",[cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.gutter.gutter_settings))),cljs.core.str("px")].join('')], null));
cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (current_gutters,gutter_div,gutter_markers,ed){
return (function (idx,gutter_marker){return ed.setGutterMarker(idx,"gitlight-gutter",gutter_marker);
});})(current_gutters,gutter_div,gutter_markers,ed))
,gutter_markers));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});})(current_gutters,gutter_div,gutter_markers,ed))
);
});
lt.plugins.gitlight.gutter.remove_gutters = (function remove_gutters(this$){lt.objs.editor.__GT_cm_ed.call(null,this$).clearGutter("gitlight-gutter");
lt.util.dom.remove.call(null,new cljs.core.Keyword(null,"div.gitlight-gutter","div.gitlight-gutter",3002550937),lt.object.__GT_content.call(null,this$));
var gutter_8711 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["gitlight-gutter",null], null), null),gutter_8711))], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.diff')) {
goog.provide('lt.plugins.gitlight.diff');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.plugins.gitlight.gutter');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.plugins.gitlight.gutter');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.diff.context = cljs.core.atom.call(null,3);
lt.plugins.gitlight.diff.last_filename = cljs.core.atom.call(null,null);
lt.plugins.gitlight.diff.last_cached = cljs.core.atom.call(null,false);
lt.plugins.gitlight.diff.last_commit = cljs.core.atom.call(null,null);
lt.plugins.gitlight.diff.update_diff = (function update_diff(){return lt.plugins.gitlight.diff.git_diff.call(null,cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename),cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached),cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_commit));
});
lt.plugins.gitlight.diff.update_after = cljs.core.partial.call(null,lt.plugins.gitlight.libs.wrap_post,lt.plugins.gitlight.diff.update_diff);
lt.plugins.gitlight.diff.dec_GT_0 = (function dec_GT_0(x){if((x > 0))
{return (x - 1);
} else
{return 0;
}
});
lt.plugins.gitlight.diff.make_context = (function make_context(){var inc_and_up = lt.plugins.gitlight.diff.update_after.call(null,(function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.inc);
}));var dec_and_up = lt.plugins.gitlight.diff.update_after.call(null,((function (inc_and_up){
return (function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,lt.plugins.gitlight.diff.dec_GT_0);
});})(inc_and_up))
);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context","div.context",3533479108),lt.plugins.gitlight.common_ui.button.call(null,"-",dec_and_up),[cljs.core.str("context: "),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join(''),lt.plugins.gitlight.common_ui.button.call(null,"+",inc_and_up)], null);
});
lt.plugins.gitlight.diff.make_more_context = (function make_more_context(){var enlarge_context = lt.plugins.gitlight.diff.update_after.call(null,(function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,100000);
}));var reset_context = lt.plugins.gitlight.diff.update_after.call(null,((function (enlarge_context){
return (function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,3);
});})(enlarge_context))
);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.more-context","div.more-context",3304815846),lt.plugins.gitlight.common_ui.button.call(null,"whole file",enlarge_context),lt.plugins.gitlight.common_ui.button.call(null,"reset",reset_context)], null);
});
lt.plugins.gitlight.diff.cached_toggle_button = (function cached_toggle_button(){var cached_txt = (cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached))?"unstaged changes":"staged changes");var update_cached = lt.plugins.gitlight.diff.update_after.call(null,((function (cached_txt){
return (function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.last_cached,cljs.core.not);
});})(cached_txt))
);return lt.plugins.gitlight.common_ui.button.call(null,cached_txt,update_cached);
});
lt.plugins.gitlight.diff.commit_input = (function commit_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title","input.title",3943357094),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"size","size",1017434995),81,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit title"], null)], null));var seq__8494_8572 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8495_8573 = null;var count__8496_8574 = 0;var i__8497_8575 = 0;while(true){
if((i__8497_8575 < count__8496_8574))
{var vec__8498_8576 = cljs.core._nth.call(null,chunk__8495_8573,i__8497_8575);var ev__7756__auto___8577 = cljs.core.nth.call(null,vec__8498_8576,0,null);var func__7757__auto___8578 = cljs.core.nth.call(null,vec__8498_8576,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8577,func__7757__auto___8578);
{
var G__8579 = seq__8494_8572;
var G__8580 = chunk__8495_8573;
var G__8581 = count__8496_8574;
var G__8582 = (i__8497_8575 + 1);
seq__8494_8572 = G__8579;
chunk__8495_8573 = G__8580;
count__8496_8574 = G__8581;
i__8497_8575 = G__8582;
continue;
}
} else
{var temp__4092__auto___8583 = cljs.core.seq.call(null,seq__8494_8572);if(temp__4092__auto___8583)
{var seq__8494_8584__$1 = temp__4092__auto___8583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8494_8584__$1))
{var c__7112__auto___8585 = cljs.core.chunk_first.call(null,seq__8494_8584__$1);{
var G__8586 = cljs.core.chunk_rest.call(null,seq__8494_8584__$1);
var G__8587 = c__7112__auto___8585;
var G__8588 = cljs.core.count.call(null,c__7112__auto___8585);
var G__8589 = 0;
seq__8494_8572 = G__8586;
chunk__8495_8573 = G__8587;
count__8496_8574 = G__8588;
i__8497_8575 = G__8589;
continue;
}
} else
{var vec__8499_8590 = cljs.core.first.call(null,seq__8494_8584__$1);var ev__7756__auto___8591 = cljs.core.nth.call(null,vec__8499_8590,0,null);var func__7757__auto___8592 = cljs.core.nth.call(null,vec__8499_8590,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8591,func__7757__auto___8592);
{
var G__8593 = cljs.core.next.call(null,seq__8494_8584__$1);
var G__8594 = null;
var G__8595 = 0;
var G__8596 = 0;
seq__8494_8572 = G__8593;
chunk__8495_8573 = G__8594;
count__8496_8574 = G__8595;
i__8497_8575 = G__8596;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.diff.commit_body = (function commit_body(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.body","textarea.body",3433374536),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit body",new cljs.core.Keyword(null,"cols","cols",1016963685),81,new cljs.core.Keyword(null,"rows","rows",1017410891),10], null)], null));var seq__8506_8597 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8507_8598 = null;var count__8508_8599 = 0;var i__8509_8600 = 0;while(true){
if((i__8509_8600 < count__8508_8599))
{var vec__8510_8601 = cljs.core._nth.call(null,chunk__8507_8598,i__8509_8600);var ev__7756__auto___8602 = cljs.core.nth.call(null,vec__8510_8601,0,null);var func__7757__auto___8603 = cljs.core.nth.call(null,vec__8510_8601,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8602,func__7757__auto___8603);
{
var G__8604 = seq__8506_8597;
var G__8605 = chunk__8507_8598;
var G__8606 = count__8508_8599;
var G__8607 = (i__8509_8600 + 1);
seq__8506_8597 = G__8604;
chunk__8507_8598 = G__8605;
count__8508_8599 = G__8606;
i__8509_8600 = G__8607;
continue;
}
} else
{var temp__4092__auto___8608 = cljs.core.seq.call(null,seq__8506_8597);if(temp__4092__auto___8608)
{var seq__8506_8609__$1 = temp__4092__auto___8608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8506_8609__$1))
{var c__7112__auto___8610 = cljs.core.chunk_first.call(null,seq__8506_8609__$1);{
var G__8611 = cljs.core.chunk_rest.call(null,seq__8506_8609__$1);
var G__8612 = c__7112__auto___8610;
var G__8613 = cljs.core.count.call(null,c__7112__auto___8610);
var G__8614 = 0;
seq__8506_8597 = G__8611;
chunk__8507_8598 = G__8612;
count__8508_8599 = G__8613;
i__8509_8600 = G__8614;
continue;
}
} else
{var vec__8511_8615 = cljs.core.first.call(null,seq__8506_8609__$1);var ev__7756__auto___8616 = cljs.core.nth.call(null,vec__8511_8615,0,null);var func__7757__auto___8617 = cljs.core.nth.call(null,vec__8511_8615,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8616,func__7757__auto___8617);
{
var G__8618 = cljs.core.next.call(null,seq__8506_8609__$1);
var G__8619 = null;
var G__8620 = 0;
var G__8621 = 0;
seq__8506_8597 = G__8618;
chunk__8507_8598 = G__8619;
count__8508_8599 = G__8620;
i__8509_8600 = G__8621;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.diff.make_commit_form = (function make_commit_form(){var title = lt.plugins.gitlight.diff.commit_input.call(null);var body = lt.plugins.gitlight.diff.commit_body.call(null);var commit_fun = ((function (title,body){
return (function (){return lt.plugins.gitlight.git.git_commit.call(null,lt.util.dom.val.call(null,title),lt.util.dom.val.call(null,body));
});})(title,body))
;return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.commit-form","div.commit-form",2747534639),title,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.common_ui.button.call(null,"submit",lt.plugins.gitlight.diff.update_after.call(null,commit_fun))], null);
});
lt.plugins.gitlight.diff.make_file_table = (function make_file_table(p__8512){var vec__8514 = p__8512;var header = cljs.core.nth.call(null,vec__8514,0,null);var left = cljs.core.nth.call(null,vec__8514,1,null);var right = cljs.core.nth.call(null,vec__8514,2,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),header], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),right], null)], null)], null)], null);
});
lt.plugins.gitlight.diff.location_row = (function location_row(location){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),location], null)], null)], null);
});
lt.plugins.gitlight.diff.separate = (function separate(fun,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,fun,coll),cljs.core.filter.call(null,cljs.core.complement.call(null,fun),coll)], null);
});
lt.plugins.gitlight.diff.nil_padder = (function nil_padder(coll,padding){return cljs.core.concat.call(null,coll,cljs.core.repeat.call(null,padding,null));
});
lt.plugins.gitlight.diff.pad_smaller_with_nils = (function pad_smaller_with_nils(left_right){var counts = cljs.core.map.call(null,cljs.core.count,left_right);var paddings = cljs.core.map.call(null,cljs.core._,cljs.core.reverse.call(null,counts),counts);return cljs.core.map.call(null,lt.plugins.gitlight.diff.nil_padder,left_right,paddings);
});
lt.plugins.gitlight.diff.separate_minus_and_plus = (function separate_minus_and_plus(lines){var minus_plus = lt.plugins.gitlight.diff.separate.call(null,(function (p1__8515_SHARP_){return cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p1__8515_SHARP_));
}),lines);return lt.plugins.gitlight.diff.pad_smaller_with_nils.call(null,minus_plus);
});
lt.plugins.gitlight.diff.make_columns = (function make_columns(lines){var separated = lt.plugins.gitlight.diff.separate_minus_and_plus.call(null,lines);var make_context_row = ((function (separated){
return (function (p1__8516_SHARP_){return lt.plugins.gitlight.diff.make_diff_row.call(null,"context",p1__8516_SHARP_,p1__8516_SHARP_);
});})(separated))
;var make_changes_row = cljs.core.partial.call(null,lt.plugins.gitlight.diff.make_diff_row,"changes");if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return cljs.core.map.call(null,make_context_row,lines);
} else
{return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.map,make_changes_row),separated);
}
});
lt.plugins.gitlight.diff.make_diff_row = (function make_diff_row(classname,left,right){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),classname], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null);
});
lt.plugins.gitlight.diff.split_diff_into_columns = (function split_diff_into_columns(p__8518){var vec__8520 = p__8518;var location = cljs.core.nth.call(null,vec__8520,0,null);var diff = cljs.core.nth.call(null,vec__8520,1,null);var splitted_into_groups = cljs.core.partition_by.call(null,((function (vec__8520,location,diff){
return (function (p1__8517_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__8517_SHARP_));
});})(vec__8520,location,diff))
,diff);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.diff.location_row.call(null,location),cljs.core.map.call(null,lt.plugins.gitlight.diff.make_columns,splitted_into_groups)], null);
});
lt.plugins.gitlight.diff.make_file_diff = (function make_file_diff(file_diff){return cljs.core.mapcat.call(null,lt.plugins.gitlight.diff.split_diff_into_columns,file_diff);
});
lt.plugins.gitlight.diff.diff_panel = (function diff_panel(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var output = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-diff","div.gitlight-diff",3415869571),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"diff: ",((cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename)))?"whole repo":cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename))], null),lt.plugins.gitlight.diff.make_context.call(null),lt.plugins.gitlight.diff.make_more_context.call(null),lt.plugins.gitlight.diff.cached_toggle_button.call(null),(cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached))?lt.plugins.gitlight.diff.make_commit_form.call(null):null),(function (){var iter__7081__auto__ = ((function (output){
return (function iter__8535(s__8536){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__8536__$1 = s__8536;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8536__$1);if(temp__4092__auto__)
{var s__8536__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8536__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8536__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8538 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8537 = 0;while(true){
if((i__8537 < size__7080__auto__))
{var vec__8541 = cljs.core._nth.call(null,c__7079__auto__,i__8537);var fileinfo = cljs.core.nth.call(null,vec__8541,0,null);var file_diff = cljs.core.nth.call(null,vec__8541,1,null);cljs.core.chunk_append.call(null,b__8538,cljs.core.into.call(null,lt.plugins.gitlight.diff.make_file_table.call(null,fileinfo),lt.plugins.gitlight.diff.make_file_diff.call(null,file_diff)));
{
var G__8622 = (i__8537 + 1);
i__8537 = G__8622;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8538),iter__8535.call(null,cljs.core.chunk_rest.call(null,s__8536__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8538),null);
}
} else
{var vec__8542 = cljs.core.first.call(null,s__8536__$2);var fileinfo = cljs.core.nth.call(null,vec__8542,0,null);var file_diff = cljs.core.nth.call(null,vec__8542,1,null);return cljs.core.cons.call(null,cljs.core.into.call(null,lt.plugins.gitlight.diff.make_file_table.call(null,fileinfo),lt.plugins.gitlight.diff.make_file_diff.call(null,file_diff)),iter__8535.call(null,cljs.core.rest.call(null,s__8536__$2)));
}
} else
{return null;
}
break;
}
});})(output))
,null,null));
});})(output))
;return iter__7081__auto__.call(null,lt.plugins.gitlight.diff.parse_git_diff.call(null,output));
})()], null);
})());var seq__8543_8623 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8544_8624 = null;var count__8545_8625 = 0;var i__8546_8626 = 0;while(true){
if((i__8546_8626 < count__8545_8625))
{var vec__8547_8627 = cljs.core._nth.call(null,chunk__8544_8624,i__8546_8626);var ev__7756__auto___8628 = cljs.core.nth.call(null,vec__8547_8627,0,null);var func__7757__auto___8629 = cljs.core.nth.call(null,vec__8547_8627,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8628,func__7757__auto___8629);
{
var G__8630 = seq__8543_8623;
var G__8631 = chunk__8544_8624;
var G__8632 = count__8545_8625;
var G__8633 = (i__8546_8626 + 1);
seq__8543_8623 = G__8630;
chunk__8544_8624 = G__8631;
count__8545_8625 = G__8632;
i__8546_8626 = G__8633;
continue;
}
} else
{var temp__4092__auto___8634 = cljs.core.seq.call(null,seq__8543_8623);if(temp__4092__auto___8634)
{var seq__8543_8635__$1 = temp__4092__auto___8634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8543_8635__$1))
{var c__7112__auto___8636 = cljs.core.chunk_first.call(null,seq__8543_8635__$1);{
var G__8637 = cljs.core.chunk_rest.call(null,seq__8543_8635__$1);
var G__8638 = c__7112__auto___8636;
var G__8639 = cljs.core.count.call(null,c__7112__auto___8636);
var G__8640 = 0;
seq__8543_8623 = G__8637;
chunk__8544_8624 = G__8638;
count__8545_8625 = G__8639;
i__8546_8626 = G__8640;
continue;
}
} else
{var vec__8548_8641 = cljs.core.first.call(null,seq__8543_8635__$1);var ev__7756__auto___8642 = cljs.core.nth.call(null,vec__8548_8641,0,null);var func__7757__auto___8643 = cljs.core.nth.call(null,vec__8548_8641,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8642,func__7757__auto___8643);
{
var G__8644 = cljs.core.next.call(null,seq__8543_8635__$1);
var G__8645 = null;
var G__8646 = 0;
var G__8647 = 0;
seq__8543_8623 = G__8644;
chunk__8544_8624 = G__8645;
count__8545_8625 = G__8646;
i__8546_8626 = G__8647;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(file_lines){return cljs.core.partition.call(null,2,cljs.core.partition_by.call(null,(function (p1__8549_SHARP_){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,p1__8549_SHARP_));
}),file_lines));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(lines){var vec__8551 = cljs.core.split_at.call(null,3,lines);var fileinfo = cljs.core.nth.call(null,vec__8551,0,null);var diff_lines = cljs.core.nth.call(null,vec__8551,1,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,diff_lines);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fileinfo,groups], null);
});
lt.plugins.gitlight.diff.split_into_files = (function split_into_files(lines){var diff_regexp = /diff --git .*/;var splitter = cljs.core.partial.call(null,cljs.core.re_matches,diff_regexp);var splitted_by_regexp = cljs.core.partition_by.call(null,splitter,lines);return cljs.core.take_nth.call(null,2,cljs.core.rest.call(null,splitted_by_regexp));
});
lt.plugins.gitlight.diff.parse_git_diff = (function parse_git_diff(raw_data){var lines = clojure.string.split_lines.call(null,raw_data.toString());var files = lt.plugins.gitlight.diff.split_into_files.call(null,lines);return cljs.core.map.call(null,lt.plugins.gitlight.diff.parse_single_git_diff,files);
});
lt.plugins.gitlight.diff.git_diff_output = lt.plugins.gitlight.common_ui.make_output_tab_object.call(null,"Git diff",new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-diff","lt.plugins.gitlight.diff/gitlight-diff",1144555959),lt.plugins.gitlight.diff.diff_panel);
lt.plugins.gitlight.diff.git_diff = (function() {
var git_diff = null;
var git_diff__1 = (function (filepath){return git_diff.call(null,filepath,false,null);
});
var git_diff__2 = (function (filepath,cached_QMARK_){return git_diff.call(null,filepath,cached_QMARK_,null);
});
var git_diff__3 = (function (filepath,cached_QMARK_,commit){var contextstr = [cljs.core.str("-U"),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join('');var args = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff","--no-color",contextstr,commit,(cljs.core.truth_(cached_QMARK_)?"--cached":null),"--",filepath], null);cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.last_filename,filepath);
cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.last_cached,cached_QMARK_);
cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.last_commit,commit);
return lt.plugins.gitlight.git.git.call(null,args,lt.plugins.gitlight.diff.git_diff_output);
});
git_diff = function(filepath,cached_QMARK_,commit){
switch(arguments.length){
case 1:
return git_diff__1.call(this,filepath);
case 2:
return git_diff__2.call(this,filepath,cached_QMARK_);
case 3:
return git_diff__3.call(this,filepath,cached_QMARK_,commit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
git_diff.cljs$core$IFn$_invoke$arity$1 = git_diff__1;
git_diff.cljs$core$IFn$_invoke$arity$2 = git_diff__2;
git_diff.cljs$core$IFn$_invoke$arity$3 = git_diff__3;
return git_diff;
})()
;
lt.plugins.gitlight.diff.git_diff_button = (function git_diff_button(filename){return lt.plugins.gitlight.diff.git_diff.call(null,filename);
});
lt.plugins.gitlight.diff.git_diff_cached_button = (function git_diff_cached_button(filename){return lt.plugins.gitlight.diff.git_diff.call(null,filename,true);
});
lt.plugins.gitlight.diff.git_diff_repo_button = (function git_diff_repo_button(filename){return lt.plugins.gitlight.diff.git_diff.call(null,"");
});
lt.plugins.gitlight.diff.git_diff_cached_repo_button = (function git_diff_cached_repo_button(filename){return lt.plugins.gitlight.diff.git_diff.call(null,"",true);
});
lt.plugins.gitlight.diff.style_diff_marker = (function style_diff_marker(p__8552){var vec__8560 = p__8552;var p = cljs.core.nth.call(null,vec__8560,0,null);var m = cljs.core.nth.call(null,vec__8560,1,null);var content = vec__8560;var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(((cljs.core._EQ_.call(null,p," ")) && ((m == null)))?"no-change":(((cljs.core._EQ_.call(null,p,"+")) && ((m == null)))?"added-line":(((cljs.core._EQ_.call(null,p," ")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"deleted-lines":(((cljs.core._EQ_.call(null,p,"+")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"modified-line":null))))], null),content], null));var seq__8561_8648 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8562_8649 = null;var count__8563_8650 = 0;var i__8564_8651 = 0;while(true){
if((i__8564_8651 < count__8563_8650))
{var vec__8565_8652 = cljs.core._nth.call(null,chunk__8562_8649,i__8564_8651);var ev__7756__auto___8653 = cljs.core.nth.call(null,vec__8565_8652,0,null);var func__7757__auto___8654 = cljs.core.nth.call(null,vec__8565_8652,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8653,func__7757__auto___8654);
{
var G__8655 = seq__8561_8648;
var G__8656 = chunk__8562_8649;
var G__8657 = count__8563_8650;
var G__8658 = (i__8564_8651 + 1);
seq__8561_8648 = G__8655;
chunk__8562_8649 = G__8656;
count__8563_8650 = G__8657;
i__8564_8651 = G__8658;
continue;
}
} else
{var temp__4092__auto___8659 = cljs.core.seq.call(null,seq__8561_8648);if(temp__4092__auto___8659)
{var seq__8561_8660__$1 = temp__4092__auto___8659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8561_8660__$1))
{var c__7112__auto___8661 = cljs.core.chunk_first.call(null,seq__8561_8660__$1);{
var G__8662 = cljs.core.chunk_rest.call(null,seq__8561_8660__$1);
var G__8663 = c__7112__auto___8661;
var G__8664 = cljs.core.count.call(null,c__7112__auto___8661);
var G__8665 = 0;
seq__8561_8648 = G__8662;
chunk__8562_8649 = G__8663;
count__8563_8650 = G__8664;
i__8564_8651 = G__8665;
continue;
}
} else
{var vec__8566_8666 = cljs.core.first.call(null,seq__8561_8660__$1);var ev__7756__auto___8667 = cljs.core.nth.call(null,vec__8566_8666,0,null);var func__7757__auto___8668 = cljs.core.nth.call(null,vec__8566_8666,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8667,func__7757__auto___8668);
{
var G__8669 = cljs.core.next.call(null,seq__8561_8660__$1);
var G__8670 = null;
var G__8671 = 0;
var G__8672 = 0;
seq__8561_8648 = G__8669;
chunk__8562_8649 = G__8670;
count__8563_8650 = G__8671;
i__8564_8651 = G__8672;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.diff.filler = (function filler(){var file_editor = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var line_number = file_editor.doc.size;return cljs.core.repeat.call(null,line_number," ");
});
lt.plugins.gitlight.diff.with_deficit = (function with_deficit(marker,deficit){return [cljs.core.str(marker),cljs.core.str((((deficit > 0))?((cljs.core._EQ_.call(null,"+",marker))?"-":[cljs.core.str("-"),cljs.core.str(deficit),cljs.core.str("\u2191")].join('')):null))].join('');
});
lt.plugins.gitlight.diff.make_indicator = (function make_indicator(p__8567,marker){var vec__8570 = p__8567;var consumed = cljs.core.nth.call(null,vec__8570,0,null);var deficit = cljs.core.nth.call(null,vec__8570,1,null);var new_marker = lt.plugins.gitlight.diff.with_deficit.call(null,marker,deficit);var added_new = cljs.core.conj.call(null,consumed,new_marker);var G__8571 = marker;if(cljs.core._EQ_.call(null," ",G__8571))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [added_new,0], null);
} else
{if(cljs.core._EQ_.call(null,"+",G__8571))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [added_new,lt.plugins.gitlight.diff.dec_GT_0.call(null,deficit)], null);
} else
{if(cljs.core._EQ_.call(null,"-",G__8571))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [consumed,(deficit + 1)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(marker)].join('')));
} else
{return null;
}
}
}
}
});
lt.plugins.gitlight.diff.diff_gutter = (function diff_gutter(diff_lines){var diff = cljs.core.map.call(null,cljs.core.first,diff_lines);return cljs.core.first.call(null,cljs.core.reduce.call(null,lt.plugins.gitlight.diff.make_indicator,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,0], null),diff));
});
lt.plugins.gitlight.diff.parse_diff_gutter_out = (function parse_diff_gutter_out(this$,command,stdout,stderr){var splitted = clojure.string.split_lines.call(null,stdout.toString());var diff_part = cljs.core.drop.call(null,5,splitted);return lt.plugins.gitlight.gutter.show_gutter_data.call(null,lt.objs.editor.pool.last_active.call(null),cljs.core.println,lt.plugins.gitlight.diff.style_diff_marker,((cljs.core.empty_QMARK_.call(null,diff_part))?lt.plugins.gitlight.diff.filler.call(null):lt.plugins.gitlight.diff.diff_gutter.call(null,diff_part)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.diff","parse-diff-gutter-out","lt.plugins.gitlight.diff/parse-diff-gutter-out",1856487699),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.diff.parse_diff_gutter_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out","out",1014014656)], null));
lt.plugins.gitlight.diff.__BEH__diff_gutter_err = (function __BEH__diff_gutter_err(this$,command,stdout,stderr){return cljs.core.println.call(null,"error",stderr);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.diff","diff-gutter-err","lt.plugins.gitlight.diff/diff-gutter-err",4747654114),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.diff.__BEH__diff_gutter_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",1014004951)], null));
lt.plugins.gitlight.diff.__BEH__refresh_diff_gutter_on_save = (function __BEH__refresh_diff_gutter_on_save(editor,content){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-gutter-on","lt.plugins.gitlight.diff/gitlight-gutter-on",2438341533))))
{lt.object.remove_tags.call(null,editor,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-gutter-on","lt.plugins.gitlight.diff/gitlight-gutter-on",2438341533),null], null), null));
lt.plugins.gitlight.diff.add_git_diff_gutter.call(null);
} else
{}
return content;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.diff","refresh-diff-gutter-on-save","lt.plugins.gitlight.diff/refresh-diff-gutter-on-save",552947350),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.diff.__BEH__refresh_diff_gutter_on_save,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: refresh diff gutter",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save+","save+",1123115456),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.gitlight.diff.git_diff_gutter_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.diff","diff-file-out","lt.plugins.gitlight.diff/diff-file-out",3995830304),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.diff","diff-file-out","lt.plugins.gitlight.diff/diff-file-out",3995830304),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.diff","parse-diff-gutter-out","lt.plugins.gitlight.diff/parse-diff-gutter-out",1856487699),new cljs.core.Keyword("lt.plugins.gitlight.diff","diff-gutter-err","lt.plugins.gitlight.diff/diff-gutter-err",4747654114)], null)));
lt.plugins.gitlight.diff.add_git_diff_gutter = (function add_git_diff_gutter(){lt.object.add_tags.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-gutter-on","lt.plugins.gitlight.diff/gitlight-gutter-on",2438341533),null], null), null));
return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff","-U10000","--",lt.plugins.gitlight.libs.current_file_path.call(null)], null),lt.plugins.gitlight.diff.git_diff_gutter_out);
});
lt.plugins.gitlight.diff.remove_git_diff_gutter = (function remove_git_diff_gutter(){lt.plugins.gitlight.gutter.remove_gutters.call(null,lt.objs.editor.pool.last_active.call(null));
return lt.object.remove_tags.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-gutter-on","lt.plugins.gitlight.diff/gitlight-gutter-on",2438341533),null], null), null));
});
lt.plugins.gitlight.diff.toggle_git_diff_gutter = (function toggle_git_diff_gutter(){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-gutter-on","lt.plugins.gitlight.diff/gitlight-gutter-on",2438341533))))
{return lt.plugins.gitlight.diff.remove_git_diff_gutter.call(null);
} else
{return lt.plugins.gitlight.diff.add_git_diff_gutter.call(null);
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-add-diff-gutter","lt.plugins.gitlight.diff/gitlight-add-diff-gutter",1473377015),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: add gutter diff (experimental)",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.diff.add_git_diff_gutter], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-remove-diff-gutter","lt.plugins.gitlight.diff/gitlight-remove-diff-gutter",1378510170),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: remove gutter diff (experimental)",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.diff.remove_git_diff_gutter], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-toggle-diff-gutter","lt.plugins.gitlight.diff/gitlight-toggle-diff-gutter",1724931722),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: toggle gutter diff (experimental)",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.diff.toggle_git_diff_gutter], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","git-diff-file","lt.plugins.gitlight.diff/git-diff-file",4564618068),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: diff this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.diff.git_diff.call(null,lt.plugins.gitlight.libs.current_file_path.call(null));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","git-diff-repo","lt.plugins.gitlight.diff/git-diff-repo",4564349286),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: diff this repo",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.diff.git_diff.call(null,"");
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.back')) {
goog.provide('lt.plugins.gitlight.status.back');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.commit');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.commit');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.status.back.in_sequence_QMARK_ = (function in_sequence_QMARK_(haystack,needle){return !((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([needle], true),cljs.core.seq.call(null,haystack)) == null));
});
lt.plugins.gitlight.status.back.keywording = (function keywording(status){if(cljs.core._EQ_.call(null,status,"A"))
{return new cljs.core.Keyword(null,"newfile","newfile",2859647630);
} else
{if(cljs.core._EQ_.call(null,status,"M"))
{return new cljs.core.Keyword(null,"modified","modified",4693358139);
} else
{if(cljs.core._EQ_.call(null,status,"D"))
{return new cljs.core.Keyword(null,"deleted","deleted",2564367243);
} else
{if(cljs.core._EQ_.call(null,status,"R"))
{return new cljs.core.Keyword(null,"renamed","renamed",2106238040);
} else
{if(cljs.core._EQ_.call(null,status,"C"))
{return new cljs.core.Keyword(null,"copied","copied",3954141750);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"unknown","unknown",729063356);
} else
{return null;
}
}
}
}
}
}
});
lt.plugins.gitlight.status.back.not_staged = (function not_staged(X,Y,filename){if(((lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null," MARC",X)) && (lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MD",Y))) || ((cljs.core._EQ_.call(null,"D",X)) && (cljs.core._EQ_.call(null,"M",Y))))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,lt.plugins.gitlight.status.back.keywording.call(null,Y),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066)], null);
} else
{return null;
}
});
lt.plugins.gitlight.status.back.staged = (function staged(X,Y,filename){if(((lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MARC",X)) && (lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null," MD",Y))) || ((cljs.core._EQ_.call(null,"D",X)) && (lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null," M",Y))))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,lt.plugins.gitlight.status.back.keywording.call(null,X),new cljs.core.Keyword(null,"staged","staged",4416376984)], null);
} else
{return null;
}
});
lt.plugins.gitlight.status.back.merge_conflicts = (function merge_conflicts(X,Y,filename){var temp__4090__auto__ = (((cljs.core._EQ_.call(null,"D",X)) && (cljs.core._EQ_.call(null,"D",Y)))?new cljs.core.Keyword(null,"unmerged-both-deleted","unmerged-both-deleted",4207561479):(((cljs.core._EQ_.call(null,"A",X)) && (cljs.core._EQ_.call(null,"U",Y)))?new cljs.core.Keyword(null,"unmerged-added-by-us","unmerged-added-by-us",4095962481):(((cljs.core._EQ_.call(null,"U",X)) && (cljs.core._EQ_.call(null,"D",Y)))?new cljs.core.Keyword(null,"unmerged-deleted-by-them","unmerged-deleted-by-them",4759851208):(((cljs.core._EQ_.call(null,"U",X)) && (cljs.core._EQ_.call(null,"A",Y)))?new cljs.core.Keyword(null,"unmerged-added-by-them","unmerged-added-by-them",3639367855):(((cljs.core._EQ_.call(null,"D",X)) && (cljs.core._EQ_.call(null,"U",Y)))?new cljs.core.Keyword(null,"unmerged-deleted-by-us","unmerged-deleted-by-us",1004394442):(((cljs.core._EQ_.call(null,"A",X)) && (cljs.core._EQ_.call(null,"A",Y)))?new cljs.core.Keyword(null,"unmerged-both-added","unmerged-both-added",3821120238):(((cljs.core._EQ_.call(null,"U",X)) && (cljs.core._EQ_.call(null,"U",Y)))?new cljs.core.Keyword(null,"unmerged-both-modified","unmerged-both-modified",4092771903):null)))))));if(cljs.core.truth_(temp__4090__auto__))
{var status = temp__4090__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,status,new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209)], null);
} else
{return null;
}
});
lt.plugins.gitlight.status.back.others = (function others(X,Y,filename){if((cljs.core._EQ_.call(null,"?",X)) && (cljs.core._EQ_.call(null,"?",Y)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.Keyword(null,"untracked","untracked",1658310115)], null);
} else
{if((cljs.core._EQ_.call(null,"!",X)) && (cljs.core._EQ_.call(null,"!",Y)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"ignored","ignored",2766319684),new cljs.core.Keyword(null,"ignored","ignored",2766319684)], null);
} else
{return null;
}
}
});
lt.plugins.gitlight.status.back.get_status_for_line = (function get_status_for_line(line){var X = cljs.core.first.call(null,line);var Y = cljs.core.second.call(null,line);var filename = cljs.core.subs.call(null,line,3);return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (X,Y,filename){
return (function (fun){return fun.call(null,X,Y,filename);
});})(X,Y,filename))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.status.back.not_staged,lt.plugins.gitlight.status.back.staged,lt.plugins.gitlight.status.back.merge_conflicts,lt.plugins.gitlight.status.back.others], null)));
});
lt.plugins.gitlight.status.back.parse_git_status = (function parse_git_status(lines){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,lt.plugins.gitlight.status.back.get_status_for_line,lines));
});
lt.plugins.gitlight.status.back.parse_porcelain = (function parse_porcelain(data){var splitted = clojure.string.split_lines.call(null,data.toString());var branch = cljs.core.subs.call(null,cljs.core.first.call(null,splitted),3);var parsed = lt.plugins.gitlight.status.back.parse_git_status.call(null,cljs.core.rest.call(null,splitted));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),[cljs.core.str(branch)].join(''),new cljs.core.Keyword(null,"status","status",4416389988),cljs.core.sort.call(null,cljs.core.group_by.call(null,((function (splitted,branch,parsed){
return (function (a){return cljs.core.nth.call(null,a,2);
});})(splitted,branch,parsed))
,parsed))], null);
});
lt.plugins.gitlight.status.back.__BEH__git_status_out_success = (function __BEH__git_status_out_success(obj,command,stdout,stderr){lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"add-watch","add-watch",4224092181));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.parse_porcelain.call(null,stdout));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-success","lt.plugins.gitlight.status.back/git-status-out-success",3735995038),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: When git status is executed, parse its output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
lt.plugins.gitlight.status.back.__BEH__git_status_out_failure = (function __BEH__git_status_out_failure(obj,command,stdout,stderr){cljs.core.remove_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status.back","status-pool-watch","lt.plugins.gitlight.status.back/status-pool-watch",4566645289));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status-failed","status-failed",1731571178));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure","lt.plugins.gitlight.status.back/git-status-out-failure",3442851867),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_failure,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: When git status fails.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null));
lt.plugins.gitlight.status.back.__BEH__git_status_out_failure_verbose = (function __BEH__git_status_out_failure_verbose(obj,command,stdout,stderr){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("git status failed! "),cljs.core.str(stderr.toString())].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure-verbose","lt.plugins.gitlight.status.back/git-status-out-failure-verbose",4010434018),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_failure_verbose,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Be verbose about git status fail",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.gitlight.status.back.git_status_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out","lt.plugins.gitlight.status.back/git-status-out",3897718648),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-status-out","git-status-out",2815542080)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-success","lt.plugins.gitlight.status.back/git-status-out-success",3735995038),new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure","lt.plugins.gitlight.status.back/git-status-out-failure",3442851867),new cljs.core.Keyword("lt.plugins.gitlight.status.back","refresh-ui-on-new-status","lt.plugins.gitlight.status.back/refresh-ui-on-new-status",1675222016)], null)));
lt.plugins.gitlight.status.back.git_status = (function git_status(){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["status","--porcelain","--branch"], null),lt.plugins.gitlight.status.back.git_status_out);
});
lt.plugins.gitlight.status.back.git_commit = (function git_commit(filename){return lt.plugins.gitlight.common_ui.input_popup.call(null,"commit message?","commit",(function (msg){lt.plugins.gitlight.git.git_commit.call(null,msg);
return lt.plugins.gitlight.status.back.git_status.call(null);
}));
});
lt.plugins.gitlight.status.back.bin_rm = (function bin_rm(filename){return lt.objs.files.delete_BANG_.call(null,[cljs.core.str(lt.plugins.gitlight.git.get_git_root.call(null)),cljs.core.str("/"),cljs.core.str(filename)].join(''));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.remote-com')) {
goog.provide('lt.plugins.gitlight.remote_com');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.remote_com.git_fetch = (function git_fetch(){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fetch"], null));
});
lt.plugins.gitlight.remote_com.git_push = (function git_push(){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push"], null));
});
lt.plugins.gitlight.remote_com.git_push_remote_branch = (function git_push_remote_branch(remote,branch){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push",remote,branch], null));
});
lt.plugins.gitlight.remote_com.git_pull = (function git_pull(){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull"], null));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.branch')) {
goog.provide('lt.plugins.gitlight.branch');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight.stash');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.plugins.gitlight.execute');
goog.require('clojure.string');
goog.require('lt.plugins.gitlight.diff');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.execute');
goog.require('lt.plugins.gitlight.stash');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight.diff');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.branch.git_branches = (function git_branches(){var commands_args = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch","--no-color","-vv"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["remote","-v"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch","-r","-v"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stash","list"], null)], null);var commands_to_run = cljs.core.map.call(null,((function (commands_args){
return (function (p1__7968_SHARP_){return cljs.core.partial.call(null,lt.plugins.gitlight.git.git,p1__7968_SHARP_);
});})(commands_args))
,commands_args);return lt.plugins.gitlight.execute.runfuns.call(null,lt.plugins.gitlight.branch.git_branch_output,commands_to_run);
});
lt.plugins.gitlight.branch.update_after = cljs.core.partial.call(null,lt.plugins.gitlight.libs.wrap_post,lt.plugins.gitlight.branch.git_branches);
lt.plugins.gitlight.branch.git_checkout = (function git_checkout(branch){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["checkout",branch], null));
});
lt.plugins.gitlight.branch.checkout_button = (function checkout_button(branch){return lt.plugins.gitlight.common_ui.button.call(null,branch,lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.branch.git_checkout),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [branch], null));
});
lt.plugins.gitlight.branch.git_merge = (function git_merge(branch){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["merge",branch], null));
});
lt.plugins.gitlight.branch.merge_button = (function merge_button(branch){return lt.plugins.gitlight.common_ui.button.call(null,"merge",lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.branch.git_merge),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [branch], null));
});
lt.plugins.gitlight.branch.git_push_it_BANG_ = (function git_push_it_BANG_(branch){return lt.plugins.gitlight.remote_com.git_push_remote_branch.call(null,"origin",branch);
});
lt.plugins.gitlight.branch.push_button = (function push_button(branch){return lt.plugins.gitlight.common_ui.button.call(null,"push it!",lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.branch.git_push_it_BANG_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [branch], null));
});
lt.plugins.gitlight.branch.git_create_new_branch = (function git_create_new_branch(branch){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch",branch], null));
});
lt.plugins.gitlight.branch.git_new_branch_popup = (function git_new_branch_popup(){return lt.plugins.gitlight.common_ui.input_popup.call(null,"new branch name","create",lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.branch.git_create_new_branch));
});
lt.plugins.gitlight.branch.new_branch_button = (function new_branch_button(){return lt.plugins.gitlight.common_ui.button.call(null,"make a new branch",lt.plugins.gitlight.branch.git_new_branch_popup);
});
lt.plugins.gitlight.branch.git_delete_branch = (function git_delete_branch(branch){return lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch","-D",branch], null));
});
lt.plugins.gitlight.branch.delete_branch_button = (function delete_branch_button(branch){return lt.plugins.gitlight.common_ui.button.call(null,"delete",lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.branch.git_delete_branch),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [branch], null));
});
lt.plugins.gitlight.branch.pull_button = (function pull_button(branch){return lt.plugins.gitlight.common_ui.button.call(null,"pull!",lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.remote_com.git_pull));
});
lt.plugins.gitlight.branch.make_field = (function make_field(p__7969){var vec__7971 = p__7969;var the_class = cljs.core.nth.call(null,vec__7971,0,null);var content = cljs.core.nth.call(null,vec__7971,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),the_class], null),content], null);
});
lt.plugins.gitlight.branch.make_row = (function make_row(fields){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(fields)], null),cljs.core.map.call(null,lt.plugins.gitlight.branch.make_field,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(fields))], null);
});
lt.plugins.gitlight.branch.raw__GT_lines = (function raw__GT_lines(raw_data){return clojure.string.split_lines.call(null,raw_data.toString());
});
lt.plugins.gitlight.branch.raw_fun__GT_parsed_rows = (function raw_fun__GT_parsed_rows(raw,fun){return cljs.core.map.call(null,cljs.core.comp.call(null,lt.plugins.gitlight.branch.make_row,fun),lt.plugins.gitlight.branch.raw__GT_lines.call(null,raw));
});
lt.plugins.gitlight.branch.make_active_part = (function make_active_part(active_QMARK_,branch){if(cljs.core.truth_(active_QMARK_))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["this-one","->"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["checkout",lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull",lt.plugins.gitlight.branch.pull_button.call(null,branch)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete",lt.plugins.gitlight.branch.delete_branch_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["checkout",lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["merge",lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)], null);
}
});
lt.plugins.gitlight.branch.parse_branch_line = (function parse_branch_line(line){var active_QMARK_ = cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,line));var current_or_not = ((active_QMARK_)?"current":"not-current");var to_cut = cljs.core.subs.call(null,line,2);var vec__7973 = clojure.string.split.call(null,to_cut,/\s+/,3);var branch = cljs.core.nth.call(null,vec__7973,0,null);var sha1 = cljs.core.nth.call(null,vec__7973,1,null);var desc = cljs.core.nth.call(null,vec__7973,2,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),current_or_not,new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.conj.call(null,lt.plugins.gitlight.branch.make_active_part.call(null,active_QMARK_,branch),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sha",sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push",lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["desc",desc], null))], null);
});
lt.plugins.gitlight.branch.parse_branches = (function parse_branches(raw_data){return lt.plugins.gitlight.branch.raw_fun__GT_parsed_rows.call(null,raw_data,lt.plugins.gitlight.branch.parse_branch_line);
});
lt.plugins.gitlight.branch.local_branches_ui = (function local_branches_ui(raw_branches){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),lt.plugins.gitlight.branch.parse_branches.call(null,raw_branches),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.new-branch","td.new-branch",3433852959),lt.plugins.gitlight.branch.new_branch_button.call(null)], null)], null)], null);
});
lt.plugins.gitlight.branch.parse_remote_branch_line = (function parse_remote_branch_line(line){var splitted = clojure.string.split.call(null,line,/\s+/,4);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"whatever",new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.map.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["origin","sha","desc"], null),cljs.core.rest.call(null,splitted))], null);
});
lt.plugins.gitlight.branch.parse_remote_branches = (function parse_remote_branches(raw_data){return lt.plugins.gitlight.branch.raw_fun__GT_parsed_rows.call(null,raw_data,lt.plugins.gitlight.branch.parse_remote_branch_line);
});
lt.plugins.gitlight.branch.remote_branches_ui = (function remote_branches_ui(raw_remote_branches){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),lt.plugins.gitlight.branch.parse_remote_branches.call(null,raw_remote_branches)], null);
});
lt.plugins.gitlight.branch.parse_remote_line = (function parse_remote_line(line){var splitted = clojure.string.split.call(null,line,/\s+/,3);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"whatever",new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.map.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["origin","url","type"], null),splitted)], null);
});
lt.plugins.gitlight.branch.parse_remotes = (function parse_remotes(raw_data){return lt.plugins.gitlight.branch.raw_fun__GT_parsed_rows.call(null,raw_data,lt.plugins.gitlight.branch.parse_remote_line);
});
lt.plugins.gitlight.branch.remotes_ui = (function remotes_ui(raw_remotes){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),lt.plugins.gitlight.branch.parse_remotes.call(null,raw_remotes)], null);
});
lt.plugins.gitlight.branch.parse_stash_line = (function parse_stash_line(line){var vec__7975 = clojure.string.split.call(null,line,/:/,2);var stash_id = cljs.core.nth.call(null,vec__7975,0,null);var desc = cljs.core.nth.call(null,vec__7975,1,null);var delete_button = lt.plugins.gitlight.common_ui.button.call(null,"delete",lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.stash.stash_drop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stash_id], null));var apply_button = lt.plugins.gitlight.common_ui.button.call(null,"apply",lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.stash.stash_apply),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stash_id], null));var pop_button = lt.plugins.gitlight.common_ui.button.call(null,"pop",lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.stash.stash_pop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stash_id], null));var diff_stash_button = lt.plugins.gitlight.common_ui.button.call(null,"diff",lt.plugins.gitlight.diff.git_diff,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,stash_id], null));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"stashes",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete",delete_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stash",stash_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",diff_stash_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply",apply_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pop",pop_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["desc",desc], null)], null)], null);
});
lt.plugins.gitlight.branch.parse_stashes = (function parse_stashes(raw_data){return lt.plugins.gitlight.branch.raw_fun__GT_parsed_rows.call(null,raw_data,lt.plugins.gitlight.branch.parse_stash_line);
});
lt.plugins.gitlight.branch.stashes_ui = (function stashes_ui(raw_stashes){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),lt.plugins.gitlight.branch.parse_stashes.call(null,raw_stashes)], null);
});
lt.plugins.gitlight.branch.branch_panel = (function branch_panel(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var vec__7983 = new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var branches = cljs.core.nth.call(null,vec__7983,0,null);var remotes = cljs.core.nth.call(null,vec__7983,1,null);var remote_branches = cljs.core.nth.call(null,vec__7983,2,null);var stashes = cljs.core.nth.call(null,vec__7983,3,null);return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-branches","div.gitlight-branches",1801709646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Branches"], null),lt.plugins.gitlight.branch.local_branches_ui.call(null,branches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Remote branches"], null),lt.plugins.gitlight.branch.remote_branches_ui.call(null,remote_branches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Remotes"], null),lt.plugins.gitlight.branch.remotes_ui.call(null,remotes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Stashes"], null),lt.plugins.gitlight.branch.stashes_ui.call(null,stashes)], null);
})());var seq__7984_8000 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7985_8001 = null;var count__7986_8002 = 0;var i__7987_8003 = 0;while(true){
if((i__7987_8003 < count__7986_8002))
{var vec__7988_8004 = cljs.core._nth.call(null,chunk__7985_8001,i__7987_8003);var ev__7756__auto___8005 = cljs.core.nth.call(null,vec__7988_8004,0,null);var func__7757__auto___8006 = cljs.core.nth.call(null,vec__7988_8004,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8005,func__7757__auto___8006);
{
var G__8007 = seq__7984_8000;
var G__8008 = chunk__7985_8001;
var G__8009 = count__7986_8002;
var G__8010 = (i__7987_8003 + 1);
seq__7984_8000 = G__8007;
chunk__7985_8001 = G__8008;
count__7986_8002 = G__8009;
i__7987_8003 = G__8010;
continue;
}
} else
{var temp__4092__auto___8011 = cljs.core.seq.call(null,seq__7984_8000);if(temp__4092__auto___8011)
{var seq__7984_8012__$1 = temp__4092__auto___8011;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7984_8012__$1))
{var c__7112__auto___8013 = cljs.core.chunk_first.call(null,seq__7984_8012__$1);{
var G__8014 = cljs.core.chunk_rest.call(null,seq__7984_8012__$1);
var G__8015 = c__7112__auto___8013;
var G__8016 = cljs.core.count.call(null,c__7112__auto___8013);
var G__8017 = 0;
seq__7984_8000 = G__8014;
chunk__7985_8001 = G__8015;
count__7986_8002 = G__8016;
i__7987_8003 = G__8017;
continue;
}
} else
{var vec__7989_8018 = cljs.core.first.call(null,seq__7984_8012__$1);var ev__7756__auto___8019 = cljs.core.nth.call(null,vec__7989_8018,0,null);var func__7757__auto___8020 = cljs.core.nth.call(null,vec__7989_8018,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8019,func__7757__auto___8020);
{
var G__8021 = cljs.core.next.call(null,seq__7984_8012__$1);
var G__8022 = null;
var G__8023 = 0;
var G__8024 = 0;
seq__7984_8000 = G__8021;
chunk__7985_8001 = G__8022;
count__7986_8002 = G__8023;
i__7987_8003 = G__8024;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.branch.git_branch_output = lt.plugins.gitlight.common_ui.make_output_tab_object.call(null,"Git branches",new cljs.core.Keyword("lt.plugins.gitlight.branch","gitlight-branches","lt.plugins.gitlight.branch/gitlight-branches",2920815417),lt.plugins.gitlight.branch.branch_panel);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.branch","branches","lt.plugins.gitlight.branch/branches",1924152112),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: branches",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.branch.git_branches], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.ui')) {
goog.provide('lt.plugins.gitlight.status.ui');
goog.require('cljs.core');
goog.require('lt.objs.cli');
goog.require('lt.plugins.gitlight.stash');
goog.require('lt.plugins.gitlight.history');
goog.require('lt.plugins.gitlight.branch');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.gitlight.branch');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.plugins.gitlight.diff');
goog.require('lt.plugins.gitlight.history');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.objs.cli');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.stash');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight.diff');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.status.ui.resize_rightbar = (function resize_rightbar(width){lt.object.merge_BANG_.call(null,lt.objs.tabs.multi,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"side","side",1017434313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),width], true, false));
return lt.object.merge_BANG_.call(null,lt.objs.sidebar.rightbar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),width,new cljs.core.Keyword(null,"max-width","max-width",3646439311),width], null));
});
lt.plugins.gitlight.status.ui.state_names = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209),"Merge conflicts",new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),"Not staged",new cljs.core.Keyword(null,"staged","staged",4416376984),"Staged",new cljs.core.Keyword(null,"untracked","untracked",1658310115),"Untracked",new cljs.core.Keyword(null,"ignored","ignored",2766319684),"Ignored"], null);
lt.plugins.gitlight.status.ui.dom_scroll_width = (function dom_scroll_width(n){return n.scrollWidth;
});
lt.plugins.gitlight.status.ui.resize_to_content = (function resize_to_content(parent,child){return lt.plugins.gitlight.status.ui.resize_rightbar.call(null,((lt.util.dom.width.call(null,parent) - lt.util.dom.width.call(null,child)) + lt.plugins.gitlight.status.ui.dom_scroll_width.call(null,child)));
});
lt.plugins.gitlight.status.ui.is_open_QMARK_ = (function is_open_QMARK_(){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),lt.plugins.gitlight.status.ui.status_bar);
});
lt.plugins.gitlight.status.ui.update_status_after = cljs.core.partial.call(null,lt.plugins.gitlight.libs.wrap_post,lt.plugins.gitlight.status.back.git_status);
lt.plugins.gitlight.status.ui.open_file = (function open_file(filename){return lt.objs.cli.open_paths.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(lt.plugins.gitlight.git.get_git_root.call(null)),cljs.core.str("/"),cljs.core.str(filename)].join('')], null),false);
});
lt.plugins.gitlight.status.ui.file_state__GT_buttons = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["resolve",lt.plugins.gitlight.git.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_button], null)], null),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stage",lt.plugins.gitlight.git.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["checkout",lt.plugins.gitlight.git.git_checkout_file], null)], null),new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add",lt.plugins.gitlight.git.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete",lt.plugins.gitlight.status.back.bin_rm], null)], null),new cljs.core.Keyword(null,"staged","staged",4416376984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unstage",lt.plugins.gitlight.git.git_reset], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_cached_button], null)], null)], null);
lt.plugins.gitlight.status.ui.repo_options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push",lt.plugins.gitlight.remote_com.git_push], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull",lt.plugins.gitlight.remote_com.git_pull], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fetch",lt.plugins.gitlight.remote_com.git_fetch], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quick commit",lt.plugins.gitlight.status.back.git_commit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cached diff",lt.plugins.gitlight.diff.git_diff_cached_repo_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_repo_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toggle inline diff",lt.plugins.gitlight.diff.toggle_git_diff_gutter], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["history",lt.plugins.gitlight.history.command_history], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stash",lt.plugins.gitlight.stash.stash], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply",lt.plugins.gitlight.stash.stash_apply], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pop",lt.plugins.gitlight.stash.stash_pop], null)], null)], null);
lt.plugins.gitlight.status.ui.file_ui = (function file_ui(state_keyword,p__9210){var vec__9226 = p__9210;var filename = cljs.core.nth.call(null,vec__9226,0,null);var file_state = cljs.core.nth.call(null,vec__9226,1,null);var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,file_state)], null),lt.plugins.gitlight.common_ui.button.call(null,filename,lt.plugins.gitlight.status.ui.update_status_after.call(null,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = ((function (vec__9226,filename,file_state){
return (function iter__9227(s__9228){return (new cljs.core.LazySeq(null,((function (vec__9226,filename,file_state){
return (function (){var s__9228__$1 = s__9228;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9228__$1);if(temp__4092__auto__)
{var s__9228__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9228__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9228__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9230 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9229 = 0;while(true){
if((i__9229 < size__7080__auto__))
{var vec__9233 = cljs.core._nth.call(null,c__7079__auto__,i__9229);var button_text = cljs.core.nth.call(null,vec__9233,0,null);var fun = cljs.core.nth.call(null,vec__9233,1,null);cljs.core.chunk_append.call(null,b__9230,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),button_text));
{
var G__9365 = (i__9229 + 1);
i__9229 = G__9365;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9230),iter__9227.call(null,cljs.core.chunk_rest.call(null,s__9228__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9230),null);
}
} else
{var vec__9234 = cljs.core.first.call(null,s__9228__$2);var button_text = cljs.core.nth.call(null,vec__9234,0,null);var fun = cljs.core.nth.call(null,vec__9234,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),button_text),iter__9227.call(null,cljs.core.rest.call(null,s__9228__$2)));
}
} else
{return null;
}
break;
}
});})(vec__9226,filename,file_state))
,null,null));
});})(vec__9226,filename,file_state))
;return iter__7081__auto__.call(null,state_keyword.call(null,lt.plugins.gitlight.status.ui.file_state__GT_buttons));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__9235_9366 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9236_9367 = null;var count__9237_9368 = 0;var i__9238_9369 = 0;while(true){
if((i__9238_9369 < count__9237_9368))
{var vec__9239_9370 = cljs.core._nth.call(null,chunk__9236_9367,i__9238_9369);var ev__7756__auto___9371 = cljs.core.nth.call(null,vec__9239_9370,0,null);var func__7757__auto___9372 = cljs.core.nth.call(null,vec__9239_9370,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9371,func__7757__auto___9372);
{
var G__9373 = seq__9235_9366;
var G__9374 = chunk__9236_9367;
var G__9375 = count__9237_9368;
var G__9376 = (i__9238_9369 + 1);
seq__9235_9366 = G__9373;
chunk__9236_9367 = G__9374;
count__9237_9368 = G__9375;
i__9238_9369 = G__9376;
continue;
}
} else
{var temp__4092__auto___9377 = cljs.core.seq.call(null,seq__9235_9366);if(temp__4092__auto___9377)
{var seq__9235_9378__$1 = temp__4092__auto___9377;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9235_9378__$1))
{var c__7112__auto___9379 = cljs.core.chunk_first.call(null,seq__9235_9378__$1);{
var G__9380 = cljs.core.chunk_rest.call(null,seq__9235_9378__$1);
var G__9381 = c__7112__auto___9379;
var G__9382 = cljs.core.count.call(null,c__7112__auto___9379);
var G__9383 = 0;
seq__9235_9366 = G__9380;
chunk__9236_9367 = G__9381;
count__9237_9368 = G__9382;
i__9238_9369 = G__9383;
continue;
}
} else
{var vec__9240_9384 = cljs.core.first.call(null,seq__9235_9378__$1);var ev__7756__auto___9385 = cljs.core.nth.call(null,vec__9240_9384,0,null);var func__7757__auto___9386 = cljs.core.nth.call(null,vec__9240_9384,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9385,func__7757__auto___9386);
{
var G__9387 = cljs.core.next.call(null,seq__9235_9378__$1);
var G__9388 = null;
var G__9389 = 0;
var G__9390 = 0;
seq__9235_9366 = G__9387;
chunk__9236_9367 = G__9388;
count__9237_9368 = G__9389;
i__9238_9369 = G__9390;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.status.ui.ui_for_files_in_state = (function ui_for_files_in_state(state_keyword,files){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,state_keyword)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),state_keyword.call(null,lt.plugins.gitlight.status.ui.state_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file_ui,state_keyword),files)], null)], null));var seq__9247_9391 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9248_9392 = null;var count__9249_9393 = 0;var i__9250_9394 = 0;while(true){
if((i__9250_9394 < count__9249_9393))
{var vec__9251_9395 = cljs.core._nth.call(null,chunk__9248_9392,i__9250_9394);var ev__7756__auto___9396 = cljs.core.nth.call(null,vec__9251_9395,0,null);var func__7757__auto___9397 = cljs.core.nth.call(null,vec__9251_9395,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9396,func__7757__auto___9397);
{
var G__9398 = seq__9247_9391;
var G__9399 = chunk__9248_9392;
var G__9400 = count__9249_9393;
var G__9401 = (i__9250_9394 + 1);
seq__9247_9391 = G__9398;
chunk__9248_9392 = G__9399;
count__9249_9393 = G__9400;
i__9250_9394 = G__9401;
continue;
}
} else
{var temp__4092__auto___9402 = cljs.core.seq.call(null,seq__9247_9391);if(temp__4092__auto___9402)
{var seq__9247_9403__$1 = temp__4092__auto___9402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9247_9403__$1))
{var c__7112__auto___9404 = cljs.core.chunk_first.call(null,seq__9247_9403__$1);{
var G__9405 = cljs.core.chunk_rest.call(null,seq__9247_9403__$1);
var G__9406 = c__7112__auto___9404;
var G__9407 = cljs.core.count.call(null,c__7112__auto___9404);
var G__9408 = 0;
seq__9247_9391 = G__9405;
chunk__9248_9392 = G__9406;
count__9249_9393 = G__9407;
i__9250_9394 = G__9408;
continue;
}
} else
{var vec__9252_9409 = cljs.core.first.call(null,seq__9247_9403__$1);var ev__7756__auto___9410 = cljs.core.nth.call(null,vec__9252_9409,0,null);var func__7757__auto___9411 = cljs.core.nth.call(null,vec__9252_9409,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9410,func__7757__auto___9411);
{
var G__9412 = cljs.core.next.call(null,seq__9247_9403__$1);
var G__9413 = null;
var G__9414 = 0;
var G__9415 = 0;
seq__9247_9391 = G__9412;
chunk__9248_9392 = G__9413;
count__9249_9393 = G__9414;
i__9250_9394 = G__9415;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(status_parsed,branch,git_root){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),lt.plugins.gitlight.common_ui.button.call(null,[cljs.core.str("Branch: "),cljs.core.str(branch)].join(''),lt.plugins.gitlight.branch.git_branches)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = (function iter__9303(s__9304){return (new cljs.core.LazySeq(null,(function (){var s__9304__$1 = s__9304;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9304__$1);if(temp__4092__auto__)
{var s__9304__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9304__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9304__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9306 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9305 = 0;while(true){
if((i__9305 < size__7080__auto__))
{var opions = cljs.core._nth.call(null,c__7079__auto__,i__9305);cljs.core.chunk_append.call(null,b__9306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (i__9305,opions,c__7079__auto__,size__7080__auto__,b__9306,s__9304__$2,temp__4092__auto__){
return (function iter__9323(s__9324){return (new cljs.core.LazySeq(null,((function (i__9305,opions,c__7079__auto__,size__7080__auto__,b__9306,s__9304__$2,temp__4092__auto__){
return (function (){var s__9324__$1 = s__9324;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9324__$1);if(temp__4092__auto____$1)
{var s__9324__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9324__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9324__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9326 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9325 = 0;while(true){
if((i__9325 < size__7080__auto____$1))
{var vec__9329 = cljs.core._nth.call(null,c__7079__auto____$1,i__9325);var button_text = cljs.core.nth.call(null,vec__9329,0,null);var fun = cljs.core.nth.call(null,vec__9329,1,null);cljs.core.chunk_append.call(null,b__9326,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)));
{
var G__9416 = (i__9325 + 1);
i__9325 = G__9416;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9326),iter__9323.call(null,cljs.core.chunk_rest.call(null,s__9324__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9326),null);
}
} else
{var vec__9330 = cljs.core.first.call(null,s__9324__$2);var button_text = cljs.core.nth.call(null,vec__9330,0,null);var fun = cljs.core.nth.call(null,vec__9330,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)),iter__9323.call(null,cljs.core.rest.call(null,s__9324__$2)));
}
} else
{return null;
}
break;
}
});})(i__9305,opions,c__7079__auto__,size__7080__auto__,b__9306,s__9304__$2,temp__4092__auto__))
,null,null));
});})(i__9305,opions,c__7079__auto__,size__7080__auto__,b__9306,s__9304__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,opions);
})()], null));
{
var G__9417 = (i__9305 + 1);
i__9305 = G__9417;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9306),iter__9303.call(null,cljs.core.chunk_rest.call(null,s__9304__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9306),null);
}
} else
{var opions = cljs.core.first.call(null,s__9304__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (opions,s__9304__$2,temp__4092__auto__){
return (function iter__9331(s__9332){return (new cljs.core.LazySeq(null,((function (opions,s__9304__$2,temp__4092__auto__){
return (function (){var s__9332__$1 = s__9332;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9332__$1);if(temp__4092__auto____$1)
{var s__9332__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9332__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9332__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9334 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9333 = 0;while(true){
if((i__9333 < size__7080__auto__))
{var vec__9337 = cljs.core._nth.call(null,c__7079__auto__,i__9333);var button_text = cljs.core.nth.call(null,vec__9337,0,null);var fun = cljs.core.nth.call(null,vec__9337,1,null);cljs.core.chunk_append.call(null,b__9334,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)));
{
var G__9418 = (i__9333 + 1);
i__9333 = G__9418;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9334),iter__9331.call(null,cljs.core.chunk_rest.call(null,s__9332__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9334),null);
}
} else
{var vec__9338 = cljs.core.first.call(null,s__9332__$2);var button_text = cljs.core.nth.call(null,vec__9338,0,null);var fun = cljs.core.nth.call(null,vec__9338,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)),iter__9331.call(null,cljs.core.rest.call(null,s__9332__$2)));
}
} else
{return null;
}
break;
}
});})(opions,s__9304__$2,temp__4092__auto__))
,null,null));
});})(opions,s__9304__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,opions);
})()], null),iter__9303.call(null,cljs.core.rest.call(null,s__9304__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,lt.plugins.gitlight.status.ui.repo_options);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.common_ui.button.call(null,"refresh",lt.plugins.gitlight.status.ui.update_status_after.call(null,(function (){return cljs.core.List.EMPTY;
}))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__9339(s__9340){return (new cljs.core.LazySeq(null,(function (){var s__9340__$1 = s__9340;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9340__$1);if(temp__4092__auto__)
{var s__9340__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9340__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9340__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9342 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9341 = 0;while(true){
if((i__9341 < size__7080__auto__))
{var vec__9345 = cljs.core._nth.call(null,c__7079__auto__,i__9341);var state_keyword = cljs.core.nth.call(null,vec__9345,0,null);var files = cljs.core.nth.call(null,vec__9345,1,null);cljs.core.chunk_append.call(null,b__9342,((!((cljs.core.count.call(null,files) === 0)))?lt.plugins.gitlight.status.ui.ui_for_files_in_state.call(null,state_keyword,files):null));
{
var G__9419 = (i__9341 + 1);
i__9341 = G__9419;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9342),iter__9339.call(null,cljs.core.chunk_rest.call(null,s__9340__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9342),null);
}
} else
{var vec__9346 = cljs.core.first.call(null,s__9340__$2);var state_keyword = cljs.core.nth.call(null,vec__9346,0,null);var files = cljs.core.nth.call(null,vec__9346,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,files) === 0)))?lt.plugins.gitlight.status.ui.ui_for_files_in_state.call(null,state_keyword,files):null),iter__9339.call(null,cljs.core.rest.call(null,s__9340__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,status_parsed);
})()], null)], null));var seq__9347_9420 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9348_9421 = null;var count__9349_9422 = 0;var i__9350_9423 = 0;while(true){
if((i__9350_9423 < count__9349_9422))
{var vec__9351_9424 = cljs.core._nth.call(null,chunk__9348_9421,i__9350_9423);var ev__7756__auto___9425 = cljs.core.nth.call(null,vec__9351_9424,0,null);var func__7757__auto___9426 = cljs.core.nth.call(null,vec__9351_9424,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9425,func__7757__auto___9426);
{
var G__9427 = seq__9347_9420;
var G__9428 = chunk__9348_9421;
var G__9429 = count__9349_9422;
var G__9430 = (i__9350_9423 + 1);
seq__9347_9420 = G__9427;
chunk__9348_9421 = G__9428;
count__9349_9422 = G__9429;
i__9350_9423 = G__9430;
continue;
}
} else
{var temp__4092__auto___9431 = cljs.core.seq.call(null,seq__9347_9420);if(temp__4092__auto___9431)
{var seq__9347_9432__$1 = temp__4092__auto___9431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9347_9432__$1))
{var c__7112__auto___9433 = cljs.core.chunk_first.call(null,seq__9347_9432__$1);{
var G__9434 = cljs.core.chunk_rest.call(null,seq__9347_9432__$1);
var G__9435 = c__7112__auto___9433;
var G__9436 = cljs.core.count.call(null,c__7112__auto___9433);
var G__9437 = 0;
seq__9347_9420 = G__9434;
chunk__9348_9421 = G__9435;
count__9349_9422 = G__9436;
i__9350_9423 = G__9437;
continue;
}
} else
{var vec__9352_9438 = cljs.core.first.call(null,seq__9347_9432__$1);var ev__7756__auto___9439 = cljs.core.nth.call(null,vec__9352_9438,0,null);var func__7757__auto___9440 = cljs.core.nth.call(null,vec__9352_9438,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9439,func__7757__auto___9440);
{
var G__9441 = cljs.core.next.call(null,seq__9347_9432__$1);
var G__9442 = null;
var G__9443 = 0;
var G__9444 = 0;
seq__9347_9420 = G__9441;
chunk__9348_9421 = G__9442;
count__9349_9422 = G__9443;
i__9350_9423 = G__9444;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__9359_9445 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9360_9446 = null;var count__9361_9447 = 0;var i__9362_9448 = 0;while(true){
if((i__9362_9448 < count__9361_9447))
{var vec__9363_9449 = cljs.core._nth.call(null,chunk__9360_9446,i__9362_9448);var ev__7756__auto___9450 = cljs.core.nth.call(null,vec__9363_9449,0,null);var func__7757__auto___9451 = cljs.core.nth.call(null,vec__9363_9449,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9450,func__7757__auto___9451);
{
var G__9452 = seq__9359_9445;
var G__9453 = chunk__9360_9446;
var G__9454 = count__9361_9447;
var G__9455 = (i__9362_9448 + 1);
seq__9359_9445 = G__9452;
chunk__9360_9446 = G__9453;
count__9361_9447 = G__9454;
i__9362_9448 = G__9455;
continue;
}
} else
{var temp__4092__auto___9456 = cljs.core.seq.call(null,seq__9359_9445);if(temp__4092__auto___9456)
{var seq__9359_9457__$1 = temp__4092__auto___9456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9359_9457__$1))
{var c__7112__auto___9458 = cljs.core.chunk_first.call(null,seq__9359_9457__$1);{
var G__9459 = cljs.core.chunk_rest.call(null,seq__9359_9457__$1);
var G__9460 = c__7112__auto___9458;
var G__9461 = cljs.core.count.call(null,c__7112__auto___9458);
var G__9462 = 0;
seq__9359_9445 = G__9459;
chunk__9360_9446 = G__9460;
count__9361_9447 = G__9461;
i__9362_9448 = G__9462;
continue;
}
} else
{var vec__9364_9463 = cljs.core.first.call(null,seq__9359_9457__$1);var ev__7756__auto___9464 = cljs.core.nth.call(null,vec__9364_9463,0,null);var func__7757__auto___9465 = cljs.core.nth.call(null,vec__9364_9463,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9464,func__7757__auto___9465);
{
var G__9466 = cljs.core.next.call(null,seq__9359_9457__$1);
var G__9467 = null;
var G__9468 = 0;
var G__9469 = 0;
seq__9359_9445 = G__9466;
chunk__9360_9446 = G__9467;
count__9361_9447 = G__9468;
i__9362_9448 = G__9469;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.gitlight.status.ui.__BEH__update = (function __BEH__update(obj,status_parsed,branch){var bar_dom = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));lt.plugins.gitlight.common_ui.dom_truncate.call(null,bar_dom);
lt.util.dom.append.call(null,bar_dom,lt.plugins.gitlight.status.ui.status_ui.call(null,status_parsed,branch,lt.plugins.gitlight.git.get_git_root.call(null)));
return lt.plugins.gitlight.status.ui.resize_to_content.call(null,lt.util.dom.parent.call(null,bar_dom),bar_dom);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.ui.__BEH__update,new cljs.core.Keyword(null,"desc","desc",1016984067),"update status view",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"GIT",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731)], null),new cljs.core.Keyword(null,"order","order",1119910592),2,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.status.ui.wrapper.call(null,cljs.core.deref.call(null,this$));
}));
lt.plugins.gitlight.status.ui.status_bar = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status')) {
goog.provide('lt.plugins.gitlight.status');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.sidebar');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.plugins.gitlight.status.ui');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.plugins.gitlight.status.ui');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight');
lt.plugins.gitlight.status.status_if_open = (function status_if_open(){if(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null))
{return lt.plugins.gitlight.status.back.git_status.call(null);
} else
{return null;
}
});
lt.plugins.gitlight.status.__BEH__init = (function __BEH__init(this$){lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.gitlight.status.ui.status_bar);
lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.git_status_out,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826));
lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.git_status_out,new cljs.core.Keyword("lt.plugins.gitlight.status","close-ui-on-failure","lt.plugins.gitlight.status/close-ui-on-failure",4763397812));
return lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.git_status_out,new cljs.core.Keyword("lt.plugins.gitlight.status","add-watch","lt.plugins.gitlight.status/add-watch",3854676855));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","init","lt.plugins.gitlight.status/init",3068682980),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__init,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Init gitlight status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.plugins.gitlight.status.status_toggle = (function status_toggle(){if(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null))
{lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword("lt.plugins.gitlight.status","close-ui-on-failure","lt.plugins.gitlight.status/close-ui-on-failure",4763397812));
return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"close!","close!",3951350939),lt.plugins.gitlight.status.ui.status_bar);
} else
{return lt.plugins.gitlight.status.back.git_status.call(null);
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-status","gitlight-status",4738816205),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: status",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.status.back.git_status], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-status-toggle","gitlight-status-toggle",2792867704),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: status toggle",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.status.status_toggle], null));
lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status = (function __BEH__refresh_ui_on_new_status(obj,data){if(!(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null)))
{lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.gitlight.status.ui.status_bar);
} else
{}
return lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216).cljs$core$IFn$_invoke$arity$1(data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.plugins.gitlight.status.__BEH__close_ui_on_failure = (function __BEH__close_ui_on_failure(obj,data){cljs.core.remove_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status","status-pool-watch","lt.plugins.gitlight.status/status-pool-watch",2316860253));
if(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null))
{return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"close!","close!",3951350939),lt.plugins.gitlight.status.ui.status_bar);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","close-ui-on-failure","lt.plugins.gitlight.status/close-ui-on-failure",4763397812),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__close_ui_on_failure,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: close ui on failure",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status-failed","status-failed",1731571178),null], null), null));
lt.plugins.gitlight.status.__BEH__add_watch = (function __BEH__add_watch(obj){return cljs.core.add_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status","status-pool-watch","lt.plugins.gitlight.status/status-pool-watch",2316860253),(function (k,r,old,new$){return lt.plugins.gitlight.status.status_if_open.call(null);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","add-watch","lt.plugins.gitlight.status/add-watch",3854676855),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__add_watch,new cljs.core.Keyword(null,"desc","desc",1016984067),"add pool watch",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-watch","add-watch",4224092181),null], null), null));
lt.plugins.gitlight.status.__BEH__refresh_git_status_on_save = (function __BEH__refresh_git_status_on_save(editor,content){lt.plugins.gitlight.status.status_if_open.call(null);
return content;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-git-status-on-save","lt.plugins.gitlight.status/refresh-git-status-on-save",3914231473),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_git_status_on_save,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: refresh gitlight status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save+","save+",1123115456),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.plugins.gitlight.status.__BEH__debug_new_status = (function __BEH__debug_new_status(obj,data){return console.log("refresh",cljs.core.clj__GT_js.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","debug-new-status","lt.plugins.gitlight.status/debug-new-status",3684259709),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__debug_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: debug status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
}

//# sourceMappingURL=gitlight_compiled.js.map