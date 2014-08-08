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
lt.plugins.gitlight.common_ui.button_ui = (function button_ui(text,fun,args,cls){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),(((cls == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),text], null)], null));var seq__8027_8070 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return cljs.core.apply.call(null,fun,args);
});})(e__7755__auto__))
], null)));var chunk__8028_8071 = null;var count__8029_8072 = 0;var i__8030_8073 = 0;while(true){
if((i__8030_8073 < count__8029_8072))
{var vec__8031_8074 = cljs.core._nth.call(null,chunk__8028_8071,i__8030_8073);var ev__7756__auto___8075 = cljs.core.nth.call(null,vec__8031_8074,0,null);var func__7757__auto___8076 = cljs.core.nth.call(null,vec__8031_8074,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8075,func__7757__auto___8076);
{
var G__8077 = seq__8027_8070;
var G__8078 = chunk__8028_8071;
var G__8079 = count__8029_8072;
var G__8080 = (i__8030_8073 + 1);
seq__8027_8070 = G__8077;
chunk__8028_8071 = G__8078;
count__8029_8072 = G__8079;
i__8030_8073 = G__8080;
continue;
}
} else
{var temp__4092__auto___8081 = cljs.core.seq.call(null,seq__8027_8070);if(temp__4092__auto___8081)
{var seq__8027_8082__$1 = temp__4092__auto___8081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8027_8082__$1))
{var c__7112__auto___8083 = cljs.core.chunk_first.call(null,seq__8027_8082__$1);{
var G__8084 = cljs.core.chunk_rest.call(null,seq__8027_8082__$1);
var G__8085 = c__7112__auto___8083;
var G__8086 = cljs.core.count.call(null,c__7112__auto___8083);
var G__8087 = 0;
seq__8027_8070 = G__8084;
chunk__8028_8071 = G__8085;
count__8029_8072 = G__8086;
i__8030_8073 = G__8087;
continue;
}
} else
{var vec__8032_8088 = cljs.core.first.call(null,seq__8027_8082__$1);var ev__7756__auto___8089 = cljs.core.nth.call(null,vec__8032_8088,0,null);var func__7757__auto___8090 = cljs.core.nth.call(null,vec__8032_8088,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8089,func__7757__auto___8090);
{
var G__8091 = cljs.core.next.call(null,seq__8027_8082__$1);
var G__8092 = null;
var G__8093 = 0;
var G__8094 = 0;
seq__8027_8070 = G__8091;
chunk__8028_8071 = G__8092;
count__8029_8072 = G__8093;
i__8030_8073 = G__8094;
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
lt.plugins.gitlight.common_ui.text_input = (function text_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"message"], null)], null));var seq__8039_8095 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7755__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7755__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
], null)));var chunk__8040_8096 = null;var count__8041_8097 = 0;var i__8042_8098 = 0;while(true){
if((i__8042_8098 < count__8041_8097))
{var vec__8043_8099 = cljs.core._nth.call(null,chunk__8040_8096,i__8042_8098);var ev__7756__auto___8100 = cljs.core.nth.call(null,vec__8043_8099,0,null);var func__7757__auto___8101 = cljs.core.nth.call(null,vec__8043_8099,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8100,func__7757__auto___8101);
{
var G__8102 = seq__8039_8095;
var G__8103 = chunk__8040_8096;
var G__8104 = count__8041_8097;
var G__8105 = (i__8042_8098 + 1);
seq__8039_8095 = G__8102;
chunk__8040_8096 = G__8103;
count__8041_8097 = G__8104;
i__8042_8098 = G__8105;
continue;
}
} else
{var temp__4092__auto___8106 = cljs.core.seq.call(null,seq__8039_8095);if(temp__4092__auto___8106)
{var seq__8039_8107__$1 = temp__4092__auto___8106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8039_8107__$1))
{var c__7112__auto___8108 = cljs.core.chunk_first.call(null,seq__8039_8107__$1);{
var G__8109 = cljs.core.chunk_rest.call(null,seq__8039_8107__$1);
var G__8110 = c__7112__auto___8108;
var G__8111 = cljs.core.count.call(null,c__7112__auto___8108);
var G__8112 = 0;
seq__8039_8095 = G__8109;
chunk__8040_8096 = G__8110;
count__8041_8097 = G__8111;
i__8042_8098 = G__8112;
continue;
}
} else
{var vec__8044_8113 = cljs.core.first.call(null,seq__8039_8107__$1);var ev__7756__auto___8114 = cljs.core.nth.call(null,vec__8044_8113,0,null);var func__7757__auto___8115 = cljs.core.nth.call(null,vec__8044_8113,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8114,func__7757__auto___8115);
{
var G__8116 = cljs.core.next.call(null,seq__8039_8107__$1);
var G__8117 = null;
var G__8118 = 0;
var G__8119 = 0;
seq__8039_8095 = G__8116;
chunk__8040_8096 = G__8117;
count__8041_8097 = G__8118;
i__8042_8098 = G__8119;
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
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.map.call(null,(function (p1__8045_SHARP_){return cljs.core.nth.call(null,p1__8045_SHARP_,2);
}),results)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","merge-mult-results","lt.plugins.gitlight.common-ui/merge-mult-results",4752627904),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__merge_mult_results,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mult-outs","mult-outs",4047322324)], null));
lt.plugins.gitlight.common_ui.not_a_thing = (function not_a_thing(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"nothing"], null));var seq__8052_8120 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8053_8121 = null;var count__8054_8122 = 0;var i__8055_8123 = 0;while(true){
if((i__8055_8123 < count__8054_8122))
{var vec__8056_8124 = cljs.core._nth.call(null,chunk__8053_8121,i__8055_8123);var ev__7756__auto___8125 = cljs.core.nth.call(null,vec__8056_8124,0,null);var func__7757__auto___8126 = cljs.core.nth.call(null,vec__8056_8124,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8125,func__7757__auto___8126);
{
var G__8127 = seq__8052_8120;
var G__8128 = chunk__8053_8121;
var G__8129 = count__8054_8122;
var G__8130 = (i__8055_8123 + 1);
seq__8052_8120 = G__8127;
chunk__8053_8121 = G__8128;
count__8054_8122 = G__8129;
i__8055_8123 = G__8130;
continue;
}
} else
{var temp__4092__auto___8131 = cljs.core.seq.call(null,seq__8052_8120);if(temp__4092__auto___8131)
{var seq__8052_8132__$1 = temp__4092__auto___8131;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8052_8132__$1))
{var c__7112__auto___8133 = cljs.core.chunk_first.call(null,seq__8052_8132__$1);{
var G__8134 = cljs.core.chunk_rest.call(null,seq__8052_8132__$1);
var G__8135 = c__7112__auto___8133;
var G__8136 = cljs.core.count.call(null,c__7112__auto___8133);
var G__8137 = 0;
seq__8052_8120 = G__8134;
chunk__8053_8121 = G__8135;
count__8054_8122 = G__8136;
i__8055_8123 = G__8137;
continue;
}
} else
{var vec__8057_8138 = cljs.core.first.call(null,seq__8052_8132__$1);var ev__7756__auto___8139 = cljs.core.nth.call(null,vec__8057_8138,0,null);var func__7757__auto___8140 = cljs.core.nth.call(null,vec__8057_8138,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8139,func__7757__auto___8140);
{
var G__8141 = cljs.core.next.call(null,seq__8052_8132__$1);
var G__8142 = null;
var G__8143 = 0;
var G__8144 = 0;
seq__8052_8120 = G__8141;
chunk__8053_8121 = G__8142;
count__8054_8122 = G__8143;
i__8055_8123 = G__8144;
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
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,ui_fun){var vec__8059 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__8059,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__8059,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__8059,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__8059,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478),new cljs.core.Keyword(null,"gitlight-log-history","gitlight-log-history",2628910772)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"result","result",4374444943),null,new cljs.core.Keyword(null,"results","results",2111450984),null,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword("lt.plugins.gitlight.common-ui","refresh-tab","lt.plugins.gitlight.common-ui/refresh-tab",1790366357),new cljs.core.Keyword("lt.plugins.gitlight.common-ui","merge-mult-results","lt.plugins.gitlight.common-ui/merge-mult-results",4752627904),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__8059,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return lt.plugins.gitlight.common_ui.not_a_thing.call(null);
});})(vec__8059,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);return lt.object.create.call(null,tab_obj);
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8145 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8145))
{var ts_8146 = temp__4092__auto___8145;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8146))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8146);
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
var G__8484__delegate = function (args){cljs.core.apply.call(null,fun,args);
return wrapper.call(null);
};
var G__8484 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8484__delegate.call(this,args);};
G__8484.cljs$lang$maxFixedArity = 0;
G__8484.cljs$lang$applyTo = (function (arglist__8485){
var args = cljs.core.seq(arglist__8485);
return G__8484__delegate(args);
});
G__8484.cljs$core$IFn$_invoke$arity$variadic = G__8484__delegate;
return G__8484;
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
lt.plugins.gitlight.history.row = (function row(p__8443){var vec__8445 = p__8443;var success_or_error = cljs.core.nth.call(null,vec__8445,0,null);var command = cljs.core.nth.call(null,vec__8445,1,null);var date = cljs.core.nth.call(null,vec__8445,2,null);var stdout = cljs.core.nth.call(null,vec__8445,3,null);var stderr = cljs.core.nth.call(null,vec__8445,4,null);if(!((success_or_error == null)))
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
lt.plugins.gitlight.history.get_first = (function get_first(needle,haystack){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8446_SHARP_){return cljs.core._EQ_.call(null,needle,cljs.core.first.call(null,p1__8446_SHARP_));
}),haystack));
});
lt.plugins.gitlight.history.history_header = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stdout"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stderr"], null)], null);
lt.plugins.gitlight.history.make_history_gui = (function make_history_gui(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var history = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var dump_button = lt.plugins.gitlight.common_ui.button.call(null,"dump history",lt.plugins.gitlight.history.landfill_of_history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.history.parse_dump.call(null,cljs.core.deref.call(null,history))], null));var last_ok = lt.plugins.gitlight.history.get_first.call(null,new cljs.core.Keyword(null,"success","success",3441701749),cljs.core.deref.call(null,history));var last_fail = lt.plugins.gitlight.history.get_first.call(null,new cljs.core.Keyword(null,"error","error",1110689146),cljs.core.deref.call(null,history));var history_rows = cljs.core.map.call(null,lt.plugins.gitlight.history.row,cljs.core.deref.call(null,history));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-command-history","div.gitlight-command-history",2639214328),dump_button,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),lt.plugins.gitlight.history.spacer.call(null,"last ok: "),lt.plugins.gitlight.history.row.call(null,last_ok),lt.plugins.gitlight.history.spacer.call(null,"last failed: "),lt.plugins.gitlight.history.row.call(null,last_fail),lt.plugins.gitlight.history.spacer.call(null,"history: "),lt.plugins.gitlight.history.history_header,history_rows], null)], null);
})());var seq__8453_8459 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8454_8460 = null;var count__8455_8461 = 0;var i__8456_8462 = 0;while(true){
if((i__8456_8462 < count__8455_8461))
{var vec__8457_8463 = cljs.core._nth.call(null,chunk__8454_8460,i__8456_8462);var ev__7756__auto___8464 = cljs.core.nth.call(null,vec__8457_8463,0,null);var func__7757__auto___8465 = cljs.core.nth.call(null,vec__8457_8463,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8464,func__7757__auto___8465);
{
var G__8466 = seq__8453_8459;
var G__8467 = chunk__8454_8460;
var G__8468 = count__8455_8461;
var G__8469 = (i__8456_8462 + 1);
seq__8453_8459 = G__8466;
chunk__8454_8460 = G__8467;
count__8455_8461 = G__8468;
i__8456_8462 = G__8469;
continue;
}
} else
{var temp__4092__auto___8470 = cljs.core.seq.call(null,seq__8453_8459);if(temp__4092__auto___8470)
{var seq__8453_8471__$1 = temp__4092__auto___8470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8453_8471__$1))
{var c__7112__auto___8472 = cljs.core.chunk_first.call(null,seq__8453_8471__$1);{
var G__8473 = cljs.core.chunk_rest.call(null,seq__8453_8471__$1);
var G__8474 = c__7112__auto___8472;
var G__8475 = cljs.core.count.call(null,c__7112__auto___8472);
var G__8476 = 0;
seq__8453_8459 = G__8473;
chunk__8454_8460 = G__8474;
count__8455_8461 = G__8475;
i__8456_8462 = G__8476;
continue;
}
} else
{var vec__8458_8477 = cljs.core.first.call(null,seq__8453_8471__$1);var ev__7756__auto___8478 = cljs.core.nth.call(null,vec__8458_8477,0,null);var func__7757__auto___8479 = cljs.core.nth.call(null,vec__8458_8477,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8478,func__7757__auto___8479);
{
var G__8480 = cljs.core.next.call(null,seq__8453_8471__$1);
var G__8481 = null;
var G__8482 = 0;
var G__8483 = 0;
seq__8453_8459 = G__8480;
chunk__8454_8460 = G__8481;
count__8455_8461 = G__8482;
i__8456_8462 = G__8483;
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
lt.plugins.gitlight.gutter.make_gutter_marker = (function make_gutter_marker(this$,on_click,style_content,content){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gutter-content","div.gutter-content",4072529974),style_content.call(null,content)], null));var seq__8410_8417 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return on_click.call(null,content);
});})(e__7755__auto__))
], null)));var chunk__8411_8418 = null;var count__8412_8419 = 0;var i__8413_8420 = 0;while(true){
if((i__8413_8420 < count__8412_8419))
{var vec__8414_8421 = cljs.core._nth.call(null,chunk__8411_8418,i__8413_8420);var ev__7756__auto___8422 = cljs.core.nth.call(null,vec__8414_8421,0,null);var func__7757__auto___8423 = cljs.core.nth.call(null,vec__8414_8421,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8422,func__7757__auto___8423);
{
var G__8424 = seq__8410_8417;
var G__8425 = chunk__8411_8418;
var G__8426 = count__8412_8419;
var G__8427 = (i__8413_8420 + 1);
seq__8410_8417 = G__8424;
chunk__8411_8418 = G__8425;
count__8412_8419 = G__8426;
i__8413_8420 = G__8427;
continue;
}
} else
{var temp__4092__auto___8428 = cljs.core.seq.call(null,seq__8410_8417);if(temp__4092__auto___8428)
{var seq__8410_8429__$1 = temp__4092__auto___8428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8410_8429__$1))
{var c__7112__auto___8430 = cljs.core.chunk_first.call(null,seq__8410_8429__$1);{
var G__8431 = cljs.core.chunk_rest.call(null,seq__8410_8429__$1);
var G__8432 = c__7112__auto___8430;
var G__8433 = cljs.core.count.call(null,c__7112__auto___8430);
var G__8434 = 0;
seq__8410_8417 = G__8431;
chunk__8411_8418 = G__8432;
count__8412_8419 = G__8433;
i__8413_8420 = G__8434;
continue;
}
} else
{var vec__8415_8435 = cljs.core.first.call(null,seq__8410_8429__$1);var ev__7756__auto___8436 = cljs.core.nth.call(null,vec__8415_8435,0,null);var func__7757__auto___8437 = cljs.core.nth.call(null,vec__8415_8435,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8436,func__7757__auto___8437);
{
var G__8438 = cljs.core.next.call(null,seq__8410_8429__$1);
var G__8439 = null;
var G__8440 = 0;
var G__8441 = 0;
seq__8410_8417 = G__8438;
chunk__8411_8418 = G__8439;
count__8412_8419 = G__8440;
i__8413_8420 = G__8441;
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
return (function (p1__8416_SHARP_){return lt.plugins.gitlight.gutter.make_gutter_marker.call(null,this$,on_click,style_content,p1__8416_SHARP_);
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
var gutter_8442 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["gitlight-gutter",null], null), null),gutter_8442))], null));
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
lt.plugins.gitlight.diff.update_diff = (function update_diff(){return lt.plugins.gitlight.diff.git_diff.call(null,cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename),cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached));
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
lt.plugins.gitlight.diff.commit_input = (function commit_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title","input.title",3943357094),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"size","size",1017434995),81,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit title"], null)], null));var seq__8166_8254 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8167_8255 = null;var count__8168_8256 = 0;var i__8169_8257 = 0;while(true){
if((i__8169_8257 < count__8168_8256))
{var vec__8170_8258 = cljs.core._nth.call(null,chunk__8167_8255,i__8169_8257);var ev__7756__auto___8259 = cljs.core.nth.call(null,vec__8170_8258,0,null);var func__7757__auto___8260 = cljs.core.nth.call(null,vec__8170_8258,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8259,func__7757__auto___8260);
{
var G__8261 = seq__8166_8254;
var G__8262 = chunk__8167_8255;
var G__8263 = count__8168_8256;
var G__8264 = (i__8169_8257 + 1);
seq__8166_8254 = G__8261;
chunk__8167_8255 = G__8262;
count__8168_8256 = G__8263;
i__8169_8257 = G__8264;
continue;
}
} else
{var temp__4092__auto___8265 = cljs.core.seq.call(null,seq__8166_8254);if(temp__4092__auto___8265)
{var seq__8166_8266__$1 = temp__4092__auto___8265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8166_8266__$1))
{var c__7112__auto___8267 = cljs.core.chunk_first.call(null,seq__8166_8266__$1);{
var G__8268 = cljs.core.chunk_rest.call(null,seq__8166_8266__$1);
var G__8269 = c__7112__auto___8267;
var G__8270 = cljs.core.count.call(null,c__7112__auto___8267);
var G__8271 = 0;
seq__8166_8254 = G__8268;
chunk__8167_8255 = G__8269;
count__8168_8256 = G__8270;
i__8169_8257 = G__8271;
continue;
}
} else
{var vec__8171_8272 = cljs.core.first.call(null,seq__8166_8266__$1);var ev__7756__auto___8273 = cljs.core.nth.call(null,vec__8171_8272,0,null);var func__7757__auto___8274 = cljs.core.nth.call(null,vec__8171_8272,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8273,func__7757__auto___8274);
{
var G__8275 = cljs.core.next.call(null,seq__8166_8266__$1);
var G__8276 = null;
var G__8277 = 0;
var G__8278 = 0;
seq__8166_8254 = G__8275;
chunk__8167_8255 = G__8276;
count__8168_8256 = G__8277;
i__8169_8257 = G__8278;
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
lt.plugins.gitlight.diff.commit_body = (function commit_body(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.body","textarea.body",3433374536),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit body",new cljs.core.Keyword(null,"cols","cols",1016963685),81,new cljs.core.Keyword(null,"rows","rows",1017410891),10], null)], null));var seq__8178_8279 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8179_8280 = null;var count__8180_8281 = 0;var i__8181_8282 = 0;while(true){
if((i__8181_8282 < count__8180_8281))
{var vec__8182_8283 = cljs.core._nth.call(null,chunk__8179_8280,i__8181_8282);var ev__7756__auto___8284 = cljs.core.nth.call(null,vec__8182_8283,0,null);var func__7757__auto___8285 = cljs.core.nth.call(null,vec__8182_8283,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8284,func__7757__auto___8285);
{
var G__8286 = seq__8178_8279;
var G__8287 = chunk__8179_8280;
var G__8288 = count__8180_8281;
var G__8289 = (i__8181_8282 + 1);
seq__8178_8279 = G__8286;
chunk__8179_8280 = G__8287;
count__8180_8281 = G__8288;
i__8181_8282 = G__8289;
continue;
}
} else
{var temp__4092__auto___8290 = cljs.core.seq.call(null,seq__8178_8279);if(temp__4092__auto___8290)
{var seq__8178_8291__$1 = temp__4092__auto___8290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8178_8291__$1))
{var c__7112__auto___8292 = cljs.core.chunk_first.call(null,seq__8178_8291__$1);{
var G__8293 = cljs.core.chunk_rest.call(null,seq__8178_8291__$1);
var G__8294 = c__7112__auto___8292;
var G__8295 = cljs.core.count.call(null,c__7112__auto___8292);
var G__8296 = 0;
seq__8178_8279 = G__8293;
chunk__8179_8280 = G__8294;
count__8180_8281 = G__8295;
i__8181_8282 = G__8296;
continue;
}
} else
{var vec__8183_8297 = cljs.core.first.call(null,seq__8178_8291__$1);var ev__7756__auto___8298 = cljs.core.nth.call(null,vec__8183_8297,0,null);var func__7757__auto___8299 = cljs.core.nth.call(null,vec__8183_8297,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8298,func__7757__auto___8299);
{
var G__8300 = cljs.core.next.call(null,seq__8178_8291__$1);
var G__8301 = null;
var G__8302 = 0;
var G__8303 = 0;
seq__8178_8279 = G__8300;
chunk__8179_8280 = G__8301;
count__8180_8281 = G__8302;
i__8181_8282 = G__8303;
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
lt.plugins.gitlight.diff.make_file_table = (function make_file_table(p__8184){var vec__8186 = p__8184;var header = cljs.core.nth.call(null,vec__8186,0,null);var left = cljs.core.nth.call(null,vec__8186,1,null);var right = cljs.core.nth.call(null,vec__8186,2,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),header], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),right], null)], null)], null)], null);
});
lt.plugins.gitlight.diff.location_row = (function location_row(location){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),location], null)], null)], null);
});
lt.plugins.gitlight.diff.separate = (function separate(fun,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,fun,coll),cljs.core.filter.call(null,cljs.core.complement.call(null,fun),coll)], null);
});
lt.plugins.gitlight.diff.nil_padder = (function nil_padder(coll,padding){return cljs.core.concat.call(null,coll,cljs.core.repeat.call(null,padding,null));
});
lt.plugins.gitlight.diff.pad_smaller_with_nils = (function pad_smaller_with_nils(left_right){var counts = cljs.core.map.call(null,cljs.core.count,left_right);var paddings = cljs.core.map.call(null,cljs.core._,cljs.core.reverse.call(null,counts),counts);return cljs.core.map.call(null,lt.plugins.gitlight.diff.nil_padder,left_right,paddings);
});
lt.plugins.gitlight.diff.separate_minus_and_plus = (function separate_minus_and_plus(lines){var minus_plus = lt.plugins.gitlight.diff.separate.call(null,(function (p1__8187_SHARP_){return cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p1__8187_SHARP_));
}),lines);return lt.plugins.gitlight.diff.pad_smaller_with_nils.call(null,minus_plus);
});
lt.plugins.gitlight.diff.make_columns = (function make_columns(lines){var separated = lt.plugins.gitlight.diff.separate_minus_and_plus.call(null,lines);var make_context_row = ((function (separated){
return (function (p1__8188_SHARP_){return lt.plugins.gitlight.diff.make_diff_row.call(null,"context",p1__8188_SHARP_,p1__8188_SHARP_);
});})(separated))
;var make_changes_row = cljs.core.partial.call(null,lt.plugins.gitlight.diff.make_diff_row,"changes");if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return cljs.core.map.call(null,make_context_row,lines);
} else
{return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.map,make_changes_row),separated);
}
});
lt.plugins.gitlight.diff.make_diff_row = (function make_diff_row(classname,left,right){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),classname], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null);
});
lt.plugins.gitlight.diff.split_diff_into_columns = (function split_diff_into_columns(p__8190){var vec__8192 = p__8190;var location = cljs.core.nth.call(null,vec__8192,0,null);var diff = cljs.core.nth.call(null,vec__8192,1,null);var splitted_into_groups = cljs.core.partition_by.call(null,((function (vec__8192,location,diff){
return (function (p1__8189_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__8189_SHARP_));
});})(vec__8192,location,diff))
,diff);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.diff.location_row.call(null,location),cljs.core.map.call(null,lt.plugins.gitlight.diff.make_columns,splitted_into_groups)], null);
});
lt.plugins.gitlight.diff.make_file_diff = (function make_file_diff(file_diff){return cljs.core.mapcat.call(null,lt.plugins.gitlight.diff.split_diff_into_columns,file_diff);
});
lt.plugins.gitlight.diff.diff_panel = (function diff_panel(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var output = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-diff","div.gitlight-diff",3415869571),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"diff: ",((cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename)))?"whole repo":cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename))], null),lt.plugins.gitlight.diff.make_context.call(null),lt.plugins.gitlight.diff.make_more_context.call(null),lt.plugins.gitlight.diff.cached_toggle_button.call(null),(cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached))?lt.plugins.gitlight.diff.make_commit_form.call(null):null),(function (){var iter__7081__auto__ = ((function (output){
return (function iter__8207(s__8208){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__8208__$1 = s__8208;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8208__$1);if(temp__4092__auto__)
{var s__8208__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8208__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8208__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8210 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8209 = 0;while(true){
if((i__8209 < size__7080__auto__))
{var vec__8213 = cljs.core._nth.call(null,c__7079__auto__,i__8209);var fileinfo = cljs.core.nth.call(null,vec__8213,0,null);var file_diff = cljs.core.nth.call(null,vec__8213,1,null);cljs.core.chunk_append.call(null,b__8210,cljs.core.into.call(null,lt.plugins.gitlight.diff.make_file_table.call(null,fileinfo),lt.plugins.gitlight.diff.make_file_diff.call(null,file_diff)));
{
var G__8304 = (i__8209 + 1);
i__8209 = G__8304;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8210),iter__8207.call(null,cljs.core.chunk_rest.call(null,s__8208__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8210),null);
}
} else
{var vec__8214 = cljs.core.first.call(null,s__8208__$2);var fileinfo = cljs.core.nth.call(null,vec__8214,0,null);var file_diff = cljs.core.nth.call(null,vec__8214,1,null);return cljs.core.cons.call(null,cljs.core.into.call(null,lt.plugins.gitlight.diff.make_file_table.call(null,fileinfo),lt.plugins.gitlight.diff.make_file_diff.call(null,file_diff)),iter__8207.call(null,cljs.core.rest.call(null,s__8208__$2)));
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
})());var seq__8215_8305 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8216_8306 = null;var count__8217_8307 = 0;var i__8218_8308 = 0;while(true){
if((i__8218_8308 < count__8217_8307))
{var vec__8219_8309 = cljs.core._nth.call(null,chunk__8216_8306,i__8218_8308);var ev__7756__auto___8310 = cljs.core.nth.call(null,vec__8219_8309,0,null);var func__7757__auto___8311 = cljs.core.nth.call(null,vec__8219_8309,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8310,func__7757__auto___8311);
{
var G__8312 = seq__8215_8305;
var G__8313 = chunk__8216_8306;
var G__8314 = count__8217_8307;
var G__8315 = (i__8218_8308 + 1);
seq__8215_8305 = G__8312;
chunk__8216_8306 = G__8313;
count__8217_8307 = G__8314;
i__8218_8308 = G__8315;
continue;
}
} else
{var temp__4092__auto___8316 = cljs.core.seq.call(null,seq__8215_8305);if(temp__4092__auto___8316)
{var seq__8215_8317__$1 = temp__4092__auto___8316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8215_8317__$1))
{var c__7112__auto___8318 = cljs.core.chunk_first.call(null,seq__8215_8317__$1);{
var G__8319 = cljs.core.chunk_rest.call(null,seq__8215_8317__$1);
var G__8320 = c__7112__auto___8318;
var G__8321 = cljs.core.count.call(null,c__7112__auto___8318);
var G__8322 = 0;
seq__8215_8305 = G__8319;
chunk__8216_8306 = G__8320;
count__8217_8307 = G__8321;
i__8218_8308 = G__8322;
continue;
}
} else
{var vec__8220_8323 = cljs.core.first.call(null,seq__8215_8317__$1);var ev__7756__auto___8324 = cljs.core.nth.call(null,vec__8220_8323,0,null);var func__7757__auto___8325 = cljs.core.nth.call(null,vec__8220_8323,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8324,func__7757__auto___8325);
{
var G__8326 = cljs.core.next.call(null,seq__8215_8317__$1);
var G__8327 = null;
var G__8328 = 0;
var G__8329 = 0;
seq__8215_8305 = G__8326;
chunk__8216_8306 = G__8327;
count__8217_8307 = G__8328;
i__8218_8308 = G__8329;
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
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(file_lines){return cljs.core.partition.call(null,2,cljs.core.partition_by.call(null,(function (p1__8221_SHARP_){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,p1__8221_SHARP_));
}),file_lines));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(lines){var vec__8223 = cljs.core.split_at.call(null,3,lines);var fileinfo = cljs.core.nth.call(null,vec__8223,0,null);var diff_lines = cljs.core.nth.call(null,vec__8223,1,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,diff_lines);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fileinfo,groups], null);
});
lt.plugins.gitlight.diff.split_into_files = (function split_into_files(lines){var diff_regexp = /diff --git .*/;var splitter = cljs.core.partial.call(null,cljs.core.re_matches,diff_regexp);var splitted_by_regexp = cljs.core.partition_by.call(null,splitter,lines);return cljs.core.take_nth.call(null,2,cljs.core.rest.call(null,splitted_by_regexp));
});
lt.plugins.gitlight.diff.parse_git_diff = (function parse_git_diff(raw_data){var lines = clojure.string.split_lines.call(null,raw_data.toString());var files = lt.plugins.gitlight.diff.split_into_files.call(null,lines);return cljs.core.map.call(null,lt.plugins.gitlight.diff.parse_single_git_diff,files);
});
lt.plugins.gitlight.diff.git_diff_output = lt.plugins.gitlight.common_ui.make_output_tab_object.call(null,"Git diff",new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-diff","lt.plugins.gitlight.diff/gitlight-diff",1144555959),lt.plugins.gitlight.diff.diff_panel);
lt.plugins.gitlight.diff.git_diff = (function() {
var git_diff = null;
var git_diff__1 = (function (filepath){return git_diff.call(null,filepath,false);
});
var git_diff__2 = (function (filepath,cached_QMARK_){var contextstr = [cljs.core.str("-U"),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join('');var args = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff","--no-color",contextstr,(cljs.core.truth_(cached_QMARK_)?"--cached":null),"--",filepath], null);cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.last_filename,filepath);
cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.last_cached,cached_QMARK_);
return lt.plugins.gitlight.git.git.call(null,args,lt.plugins.gitlight.diff.git_diff_output);
});
git_diff = function(filepath,cached_QMARK_){
switch(arguments.length){
case 1:
return git_diff__1.call(this,filepath);
case 2:
return git_diff__2.call(this,filepath,cached_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
git_diff.cljs$core$IFn$_invoke$arity$1 = git_diff__1;
git_diff.cljs$core$IFn$_invoke$arity$2 = git_diff__2;
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
lt.plugins.gitlight.diff.style_diff_marker = (function style_diff_marker(p__8224){var vec__8232 = p__8224;var p = cljs.core.nth.call(null,vec__8232,0,null);var m = cljs.core.nth.call(null,vec__8232,1,null);var content = vec__8232;var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(((cljs.core._EQ_.call(null,p," ")) && ((m == null)))?"no-change":(((cljs.core._EQ_.call(null,p,"+")) && ((m == null)))?"added-line":(((cljs.core._EQ_.call(null,p," ")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"deleted-lines":(((cljs.core._EQ_.call(null,p,"+")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"modified-line":null))))], null),content], null));var seq__8233_8330 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8234_8331 = null;var count__8235_8332 = 0;var i__8236_8333 = 0;while(true){
if((i__8236_8333 < count__8235_8332))
{var vec__8237_8334 = cljs.core._nth.call(null,chunk__8234_8331,i__8236_8333);var ev__7756__auto___8335 = cljs.core.nth.call(null,vec__8237_8334,0,null);var func__7757__auto___8336 = cljs.core.nth.call(null,vec__8237_8334,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8335,func__7757__auto___8336);
{
var G__8337 = seq__8233_8330;
var G__8338 = chunk__8234_8331;
var G__8339 = count__8235_8332;
var G__8340 = (i__8236_8333 + 1);
seq__8233_8330 = G__8337;
chunk__8234_8331 = G__8338;
count__8235_8332 = G__8339;
i__8236_8333 = G__8340;
continue;
}
} else
{var temp__4092__auto___8341 = cljs.core.seq.call(null,seq__8233_8330);if(temp__4092__auto___8341)
{var seq__8233_8342__$1 = temp__4092__auto___8341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8233_8342__$1))
{var c__7112__auto___8343 = cljs.core.chunk_first.call(null,seq__8233_8342__$1);{
var G__8344 = cljs.core.chunk_rest.call(null,seq__8233_8342__$1);
var G__8345 = c__7112__auto___8343;
var G__8346 = cljs.core.count.call(null,c__7112__auto___8343);
var G__8347 = 0;
seq__8233_8330 = G__8344;
chunk__8234_8331 = G__8345;
count__8235_8332 = G__8346;
i__8236_8333 = G__8347;
continue;
}
} else
{var vec__8238_8348 = cljs.core.first.call(null,seq__8233_8342__$1);var ev__7756__auto___8349 = cljs.core.nth.call(null,vec__8238_8348,0,null);var func__7757__auto___8350 = cljs.core.nth.call(null,vec__8238_8348,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8349,func__7757__auto___8350);
{
var G__8351 = cljs.core.next.call(null,seq__8233_8342__$1);
var G__8352 = null;
var G__8353 = 0;
var G__8354 = 0;
seq__8233_8330 = G__8351;
chunk__8234_8331 = G__8352;
count__8235_8332 = G__8353;
i__8236_8333 = G__8354;
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
lt.plugins.gitlight.diff.make_indicator = (function make_indicator(p__8239,marker){var vec__8242 = p__8239;var consumed = cljs.core.nth.call(null,vec__8242,0,null);var deficit = cljs.core.nth.call(null,vec__8242,1,null);var new_marker = lt.plugins.gitlight.diff.with_deficit.call(null,marker,deficit);var added_new = cljs.core.conj.call(null,consumed,new_marker);var G__8243 = marker;if(cljs.core._EQ_.call(null," ",G__8243))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [added_new,0], null);
} else
{if(cljs.core._EQ_.call(null,"+",G__8243))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [added_new,lt.plugins.gitlight.diff.dec_GT_0.call(null,deficit)], null);
} else
{if(cljs.core._EQ_.call(null,"-",G__8243))
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
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.branch.git_branches = (function git_branches(){var commands_args = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch","--no-color","-vv"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["remote","-v"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch","-r","-v"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stash","list"], null)], null);var commands_to_run = cljs.core.map.call(null,((function (commands_args){
return (function (p1__7871_SHARP_){return cljs.core.partial.call(null,lt.plugins.gitlight.git.git,p1__7871_SHARP_);
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
lt.plugins.gitlight.branch.make_field = (function make_field(p__7872){var vec__7874 = p__7872;var the_class = cljs.core.nth.call(null,vec__7874,0,null);var content = cljs.core.nth.call(null,vec__7874,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),the_class], null),content], null);
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
lt.plugins.gitlight.branch.parse_branch_line = (function parse_branch_line(line){var active_QMARK_ = cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,line));var current_or_not = ((active_QMARK_)?"current":"not-current");var to_cut = cljs.core.subs.call(null,line,2);var vec__7876 = clojure.string.split.call(null,to_cut,/\s+/,3);var branch = cljs.core.nth.call(null,vec__7876,0,null);var sha1 = cljs.core.nth.call(null,vec__7876,1,null);var desc = cljs.core.nth.call(null,vec__7876,2,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),current_or_not,new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.conj.call(null,lt.plugins.gitlight.branch.make_active_part.call(null,active_QMARK_,branch),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sha",sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push",lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["desc",desc], null))], null);
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
lt.plugins.gitlight.branch.parse_stash_line = (function parse_stash_line(line){var vec__7878 = clojure.string.split.call(null,line,/:/,2);var stash_id = cljs.core.nth.call(null,vec__7878,0,null);var desc = cljs.core.nth.call(null,vec__7878,1,null);var delete_button = lt.plugins.gitlight.common_ui.button.call(null,"delete",lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.stash.stash_drop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stash_id], null));var apply_button = lt.plugins.gitlight.common_ui.button.call(null,"apply",lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.stash.stash_apply),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stash_id], null));var pop_button = lt.plugins.gitlight.common_ui.button.call(null,"pop",lt.plugins.gitlight.branch.update_after.call(null,lt.plugins.gitlight.stash.stash_pop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stash_id], null));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"stashes",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete",delete_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stash",stash_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply",apply_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pop",pop_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["desc",desc], null)], null)], null);
});
lt.plugins.gitlight.branch.parse_stashes = (function parse_stashes(raw_data){return lt.plugins.gitlight.branch.raw_fun__GT_parsed_rows.call(null,raw_data,lt.plugins.gitlight.branch.parse_stash_line);
});
lt.plugins.gitlight.branch.stashes_ui = (function stashes_ui(raw_stashes){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),lt.plugins.gitlight.branch.parse_stashes.call(null,raw_stashes)], null);
});
lt.plugins.gitlight.branch.branch_panel = (function branch_panel(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var vec__7886 = new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var branches = cljs.core.nth.call(null,vec__7886,0,null);var remotes = cljs.core.nth.call(null,vec__7886,1,null);var remote_branches = cljs.core.nth.call(null,vec__7886,2,null);var stashes = cljs.core.nth.call(null,vec__7886,3,null);return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-branches","div.gitlight-branches",1801709646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Branches"], null),lt.plugins.gitlight.branch.local_branches_ui.call(null,branches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Remote branches"], null),lt.plugins.gitlight.branch.remote_branches_ui.call(null,remote_branches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Remotes"], null),lt.plugins.gitlight.branch.remotes_ui.call(null,remotes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Stashes"], null),lt.plugins.gitlight.branch.stashes_ui.call(null,stashes)], null);
})());var seq__7887_7903 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7888_7904 = null;var count__7889_7905 = 0;var i__7890_7906 = 0;while(true){
if((i__7890_7906 < count__7889_7905))
{var vec__7891_7907 = cljs.core._nth.call(null,chunk__7888_7904,i__7890_7906);var ev__7756__auto___7908 = cljs.core.nth.call(null,vec__7891_7907,0,null);var func__7757__auto___7909 = cljs.core.nth.call(null,vec__7891_7907,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7908,func__7757__auto___7909);
{
var G__7910 = seq__7887_7903;
var G__7911 = chunk__7888_7904;
var G__7912 = count__7889_7905;
var G__7913 = (i__7890_7906 + 1);
seq__7887_7903 = G__7910;
chunk__7888_7904 = G__7911;
count__7889_7905 = G__7912;
i__7890_7906 = G__7913;
continue;
}
} else
{var temp__4092__auto___7914 = cljs.core.seq.call(null,seq__7887_7903);if(temp__4092__auto___7914)
{var seq__7887_7915__$1 = temp__4092__auto___7914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7887_7915__$1))
{var c__7112__auto___7916 = cljs.core.chunk_first.call(null,seq__7887_7915__$1);{
var G__7917 = cljs.core.chunk_rest.call(null,seq__7887_7915__$1);
var G__7918 = c__7112__auto___7916;
var G__7919 = cljs.core.count.call(null,c__7112__auto___7916);
var G__7920 = 0;
seq__7887_7903 = G__7917;
chunk__7888_7904 = G__7918;
count__7889_7905 = G__7919;
i__7890_7906 = G__7920;
continue;
}
} else
{var vec__7892_7921 = cljs.core.first.call(null,seq__7887_7915__$1);var ev__7756__auto___7922 = cljs.core.nth.call(null,vec__7892_7921,0,null);var func__7757__auto___7923 = cljs.core.nth.call(null,vec__7892_7921,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7922,func__7757__auto___7923);
{
var G__7924 = cljs.core.next.call(null,seq__7887_7915__$1);
var G__7925 = null;
var G__7926 = 0;
var G__7927 = 0;
seq__7887_7903 = G__7924;
chunk__7888_7904 = G__7925;
count__7889_7905 = G__7926;
i__7890_7906 = G__7927;
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
lt.plugins.gitlight.status.ui.file_ui = (function file_ui(state_keyword,p__8941){var vec__8957 = p__8941;var filename = cljs.core.nth.call(null,vec__8957,0,null);var file_state = cljs.core.nth.call(null,vec__8957,1,null);var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,file_state)], null),lt.plugins.gitlight.common_ui.button.call(null,filename,lt.plugins.gitlight.status.ui.update_status_after.call(null,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = ((function (vec__8957,filename,file_state){
return (function iter__8958(s__8959){return (new cljs.core.LazySeq(null,((function (vec__8957,filename,file_state){
return (function (){var s__8959__$1 = s__8959;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8959__$1);if(temp__4092__auto__)
{var s__8959__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8959__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8959__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8961 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8960 = 0;while(true){
if((i__8960 < size__7080__auto__))
{var vec__8964 = cljs.core._nth.call(null,c__7079__auto__,i__8960);var button_text = cljs.core.nth.call(null,vec__8964,0,null);var fun = cljs.core.nth.call(null,vec__8964,1,null);cljs.core.chunk_append.call(null,b__8961,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),button_text));
{
var G__9096 = (i__8960 + 1);
i__8960 = G__9096;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8961),iter__8958.call(null,cljs.core.chunk_rest.call(null,s__8959__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8961),null);
}
} else
{var vec__8965 = cljs.core.first.call(null,s__8959__$2);var button_text = cljs.core.nth.call(null,vec__8965,0,null);var fun = cljs.core.nth.call(null,vec__8965,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),button_text),iter__8958.call(null,cljs.core.rest.call(null,s__8959__$2)));
}
} else
{return null;
}
break;
}
});})(vec__8957,filename,file_state))
,null,null));
});})(vec__8957,filename,file_state))
;return iter__7081__auto__.call(null,state_keyword.call(null,lt.plugins.gitlight.status.ui.file_state__GT_buttons));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__8966_9097 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8967_9098 = null;var count__8968_9099 = 0;var i__8969_9100 = 0;while(true){
if((i__8969_9100 < count__8968_9099))
{var vec__8970_9101 = cljs.core._nth.call(null,chunk__8967_9098,i__8969_9100);var ev__7756__auto___9102 = cljs.core.nth.call(null,vec__8970_9101,0,null);var func__7757__auto___9103 = cljs.core.nth.call(null,vec__8970_9101,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9102,func__7757__auto___9103);
{
var G__9104 = seq__8966_9097;
var G__9105 = chunk__8967_9098;
var G__9106 = count__8968_9099;
var G__9107 = (i__8969_9100 + 1);
seq__8966_9097 = G__9104;
chunk__8967_9098 = G__9105;
count__8968_9099 = G__9106;
i__8969_9100 = G__9107;
continue;
}
} else
{var temp__4092__auto___9108 = cljs.core.seq.call(null,seq__8966_9097);if(temp__4092__auto___9108)
{var seq__8966_9109__$1 = temp__4092__auto___9108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8966_9109__$1))
{var c__7112__auto___9110 = cljs.core.chunk_first.call(null,seq__8966_9109__$1);{
var G__9111 = cljs.core.chunk_rest.call(null,seq__8966_9109__$1);
var G__9112 = c__7112__auto___9110;
var G__9113 = cljs.core.count.call(null,c__7112__auto___9110);
var G__9114 = 0;
seq__8966_9097 = G__9111;
chunk__8967_9098 = G__9112;
count__8968_9099 = G__9113;
i__8969_9100 = G__9114;
continue;
}
} else
{var vec__8971_9115 = cljs.core.first.call(null,seq__8966_9109__$1);var ev__7756__auto___9116 = cljs.core.nth.call(null,vec__8971_9115,0,null);var func__7757__auto___9117 = cljs.core.nth.call(null,vec__8971_9115,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9116,func__7757__auto___9117);
{
var G__9118 = cljs.core.next.call(null,seq__8966_9109__$1);
var G__9119 = null;
var G__9120 = 0;
var G__9121 = 0;
seq__8966_9097 = G__9118;
chunk__8967_9098 = G__9119;
count__8968_9099 = G__9120;
i__8969_9100 = G__9121;
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
lt.plugins.gitlight.status.ui.ui_for_files_in_state = (function ui_for_files_in_state(state_keyword,files){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,state_keyword)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),state_keyword.call(null,lt.plugins.gitlight.status.ui.state_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file_ui,state_keyword),files)], null)], null));var seq__8978_9122 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8979_9123 = null;var count__8980_9124 = 0;var i__8981_9125 = 0;while(true){
if((i__8981_9125 < count__8980_9124))
{var vec__8982_9126 = cljs.core._nth.call(null,chunk__8979_9123,i__8981_9125);var ev__7756__auto___9127 = cljs.core.nth.call(null,vec__8982_9126,0,null);var func__7757__auto___9128 = cljs.core.nth.call(null,vec__8982_9126,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9127,func__7757__auto___9128);
{
var G__9129 = seq__8978_9122;
var G__9130 = chunk__8979_9123;
var G__9131 = count__8980_9124;
var G__9132 = (i__8981_9125 + 1);
seq__8978_9122 = G__9129;
chunk__8979_9123 = G__9130;
count__8980_9124 = G__9131;
i__8981_9125 = G__9132;
continue;
}
} else
{var temp__4092__auto___9133 = cljs.core.seq.call(null,seq__8978_9122);if(temp__4092__auto___9133)
{var seq__8978_9134__$1 = temp__4092__auto___9133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8978_9134__$1))
{var c__7112__auto___9135 = cljs.core.chunk_first.call(null,seq__8978_9134__$1);{
var G__9136 = cljs.core.chunk_rest.call(null,seq__8978_9134__$1);
var G__9137 = c__7112__auto___9135;
var G__9138 = cljs.core.count.call(null,c__7112__auto___9135);
var G__9139 = 0;
seq__8978_9122 = G__9136;
chunk__8979_9123 = G__9137;
count__8980_9124 = G__9138;
i__8981_9125 = G__9139;
continue;
}
} else
{var vec__8983_9140 = cljs.core.first.call(null,seq__8978_9134__$1);var ev__7756__auto___9141 = cljs.core.nth.call(null,vec__8983_9140,0,null);var func__7757__auto___9142 = cljs.core.nth.call(null,vec__8983_9140,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9141,func__7757__auto___9142);
{
var G__9143 = cljs.core.next.call(null,seq__8978_9134__$1);
var G__9144 = null;
var G__9145 = 0;
var G__9146 = 0;
seq__8978_9122 = G__9143;
chunk__8979_9123 = G__9144;
count__8980_9124 = G__9145;
i__8981_9125 = G__9146;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(status_parsed,branch,git_root){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),lt.plugins.gitlight.common_ui.button.call(null,[cljs.core.str("Branch: "),cljs.core.str(branch)].join(''),lt.plugins.gitlight.branch.git_branches)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = (function iter__9034(s__9035){return (new cljs.core.LazySeq(null,(function (){var s__9035__$1 = s__9035;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9035__$1);if(temp__4092__auto__)
{var s__9035__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9035__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9035__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9037 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9036 = 0;while(true){
if((i__9036 < size__7080__auto__))
{var opions = cljs.core._nth.call(null,c__7079__auto__,i__9036);cljs.core.chunk_append.call(null,b__9037,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (i__9036,opions,c__7079__auto__,size__7080__auto__,b__9037,s__9035__$2,temp__4092__auto__){
return (function iter__9054(s__9055){return (new cljs.core.LazySeq(null,((function (i__9036,opions,c__7079__auto__,size__7080__auto__,b__9037,s__9035__$2,temp__4092__auto__){
return (function (){var s__9055__$1 = s__9055;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9055__$1);if(temp__4092__auto____$1)
{var s__9055__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9055__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9055__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9057 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9056 = 0;while(true){
if((i__9056 < size__7080__auto____$1))
{var vec__9060 = cljs.core._nth.call(null,c__7079__auto____$1,i__9056);var button_text = cljs.core.nth.call(null,vec__9060,0,null);var fun = cljs.core.nth.call(null,vec__9060,1,null);cljs.core.chunk_append.call(null,b__9057,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)));
{
var G__9147 = (i__9056 + 1);
i__9056 = G__9147;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9057),iter__9054.call(null,cljs.core.chunk_rest.call(null,s__9055__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9057),null);
}
} else
{var vec__9061 = cljs.core.first.call(null,s__9055__$2);var button_text = cljs.core.nth.call(null,vec__9061,0,null);var fun = cljs.core.nth.call(null,vec__9061,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)),iter__9054.call(null,cljs.core.rest.call(null,s__9055__$2)));
}
} else
{return null;
}
break;
}
});})(i__9036,opions,c__7079__auto__,size__7080__auto__,b__9037,s__9035__$2,temp__4092__auto__))
,null,null));
});})(i__9036,opions,c__7079__auto__,size__7080__auto__,b__9037,s__9035__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,opions);
})()], null));
{
var G__9148 = (i__9036 + 1);
i__9036 = G__9148;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9037),iter__9034.call(null,cljs.core.chunk_rest.call(null,s__9035__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9037),null);
}
} else
{var opions = cljs.core.first.call(null,s__9035__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (opions,s__9035__$2,temp__4092__auto__){
return (function iter__9062(s__9063){return (new cljs.core.LazySeq(null,((function (opions,s__9035__$2,temp__4092__auto__){
return (function (){var s__9063__$1 = s__9063;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9063__$1);if(temp__4092__auto____$1)
{var s__9063__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9063__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9063__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9065 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9064 = 0;while(true){
if((i__9064 < size__7080__auto__))
{var vec__9068 = cljs.core._nth.call(null,c__7079__auto__,i__9064);var button_text = cljs.core.nth.call(null,vec__9068,0,null);var fun = cljs.core.nth.call(null,vec__9068,1,null);cljs.core.chunk_append.call(null,b__9065,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)));
{
var G__9149 = (i__9064 + 1);
i__9064 = G__9149;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9065),iter__9062.call(null,cljs.core.chunk_rest.call(null,s__9063__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9065),null);
}
} else
{var vec__9069 = cljs.core.first.call(null,s__9063__$2);var button_text = cljs.core.nth.call(null,vec__9069,0,null);var fun = cljs.core.nth.call(null,vec__9069,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)),iter__9062.call(null,cljs.core.rest.call(null,s__9063__$2)));
}
} else
{return null;
}
break;
}
});})(opions,s__9035__$2,temp__4092__auto__))
,null,null));
});})(opions,s__9035__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,opions);
})()], null),iter__9034.call(null,cljs.core.rest.call(null,s__9035__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,lt.plugins.gitlight.status.ui.repo_options);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.common_ui.button.call(null,"refresh",lt.plugins.gitlight.status.ui.update_status_after.call(null,(function (){return cljs.core.List.EMPTY;
}))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__9070(s__9071){return (new cljs.core.LazySeq(null,(function (){var s__9071__$1 = s__9071;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9071__$1);if(temp__4092__auto__)
{var s__9071__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9071__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9071__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9073 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9072 = 0;while(true){
if((i__9072 < size__7080__auto__))
{var vec__9076 = cljs.core._nth.call(null,c__7079__auto__,i__9072);var state_keyword = cljs.core.nth.call(null,vec__9076,0,null);var files = cljs.core.nth.call(null,vec__9076,1,null);cljs.core.chunk_append.call(null,b__9073,((!((cljs.core.count.call(null,files) === 0)))?lt.plugins.gitlight.status.ui.ui_for_files_in_state.call(null,state_keyword,files):null));
{
var G__9150 = (i__9072 + 1);
i__9072 = G__9150;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9073),iter__9070.call(null,cljs.core.chunk_rest.call(null,s__9071__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9073),null);
}
} else
{var vec__9077 = cljs.core.first.call(null,s__9071__$2);var state_keyword = cljs.core.nth.call(null,vec__9077,0,null);var files = cljs.core.nth.call(null,vec__9077,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,files) === 0)))?lt.plugins.gitlight.status.ui.ui_for_files_in_state.call(null,state_keyword,files):null),iter__9070.call(null,cljs.core.rest.call(null,s__9071__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,status_parsed);
})()], null)], null));var seq__9078_9151 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9079_9152 = null;var count__9080_9153 = 0;var i__9081_9154 = 0;while(true){
if((i__9081_9154 < count__9080_9153))
{var vec__9082_9155 = cljs.core._nth.call(null,chunk__9079_9152,i__9081_9154);var ev__7756__auto___9156 = cljs.core.nth.call(null,vec__9082_9155,0,null);var func__7757__auto___9157 = cljs.core.nth.call(null,vec__9082_9155,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9156,func__7757__auto___9157);
{
var G__9158 = seq__9078_9151;
var G__9159 = chunk__9079_9152;
var G__9160 = count__9080_9153;
var G__9161 = (i__9081_9154 + 1);
seq__9078_9151 = G__9158;
chunk__9079_9152 = G__9159;
count__9080_9153 = G__9160;
i__9081_9154 = G__9161;
continue;
}
} else
{var temp__4092__auto___9162 = cljs.core.seq.call(null,seq__9078_9151);if(temp__4092__auto___9162)
{var seq__9078_9163__$1 = temp__4092__auto___9162;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9078_9163__$1))
{var c__7112__auto___9164 = cljs.core.chunk_first.call(null,seq__9078_9163__$1);{
var G__9165 = cljs.core.chunk_rest.call(null,seq__9078_9163__$1);
var G__9166 = c__7112__auto___9164;
var G__9167 = cljs.core.count.call(null,c__7112__auto___9164);
var G__9168 = 0;
seq__9078_9151 = G__9165;
chunk__9079_9152 = G__9166;
count__9080_9153 = G__9167;
i__9081_9154 = G__9168;
continue;
}
} else
{var vec__9083_9169 = cljs.core.first.call(null,seq__9078_9163__$1);var ev__7756__auto___9170 = cljs.core.nth.call(null,vec__9083_9169,0,null);var func__7757__auto___9171 = cljs.core.nth.call(null,vec__9083_9169,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9170,func__7757__auto___9171);
{
var G__9172 = cljs.core.next.call(null,seq__9078_9163__$1);
var G__9173 = null;
var G__9174 = 0;
var G__9175 = 0;
seq__9078_9151 = G__9172;
chunk__9079_9152 = G__9173;
count__9080_9153 = G__9174;
i__9081_9154 = G__9175;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__9090_9176 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9091_9177 = null;var count__9092_9178 = 0;var i__9093_9179 = 0;while(true){
if((i__9093_9179 < count__9092_9178))
{var vec__9094_9180 = cljs.core._nth.call(null,chunk__9091_9177,i__9093_9179);var ev__7756__auto___9181 = cljs.core.nth.call(null,vec__9094_9180,0,null);var func__7757__auto___9182 = cljs.core.nth.call(null,vec__9094_9180,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9181,func__7757__auto___9182);
{
var G__9183 = seq__9090_9176;
var G__9184 = chunk__9091_9177;
var G__9185 = count__9092_9178;
var G__9186 = (i__9093_9179 + 1);
seq__9090_9176 = G__9183;
chunk__9091_9177 = G__9184;
count__9092_9178 = G__9185;
i__9093_9179 = G__9186;
continue;
}
} else
{var temp__4092__auto___9187 = cljs.core.seq.call(null,seq__9090_9176);if(temp__4092__auto___9187)
{var seq__9090_9188__$1 = temp__4092__auto___9187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9090_9188__$1))
{var c__7112__auto___9189 = cljs.core.chunk_first.call(null,seq__9090_9188__$1);{
var G__9190 = cljs.core.chunk_rest.call(null,seq__9090_9188__$1);
var G__9191 = c__7112__auto___9189;
var G__9192 = cljs.core.count.call(null,c__7112__auto___9189);
var G__9193 = 0;
seq__9090_9176 = G__9190;
chunk__9091_9177 = G__9191;
count__9092_9178 = G__9192;
i__9093_9179 = G__9193;
continue;
}
} else
{var vec__9095_9194 = cljs.core.first.call(null,seq__9090_9188__$1);var ev__7756__auto___9195 = cljs.core.nth.call(null,vec__9095_9194,0,null);var func__7757__auto___9196 = cljs.core.nth.call(null,vec__9095_9194,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9195,func__7757__auto___9196);
{
var G__9197 = cljs.core.next.call(null,seq__9090_9188__$1);
var G__9198 = null;
var G__9199 = 0;
var G__9200 = 0;
seq__9090_9176 = G__9197;
chunk__9091_9177 = G__9198;
count__9092_9178 = G__9199;
i__9093_9179 = G__9200;
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