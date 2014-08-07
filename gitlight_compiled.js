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
lt.plugins.gitlight.common_ui.button_ui = (function button_ui(text,fun,args,cls){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),(((cls == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),text], null)], null));var seq__8069_8112 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return cljs.core.apply.call(null,fun,args);
});})(e__7755__auto__))
], null)));var chunk__8070_8113 = null;var count__8071_8114 = 0;var i__8072_8115 = 0;while(true){
if((i__8072_8115 < count__8071_8114))
{var vec__8073_8116 = cljs.core._nth.call(null,chunk__8070_8113,i__8072_8115);var ev__7756__auto___8117 = cljs.core.nth.call(null,vec__8073_8116,0,null);var func__7757__auto___8118 = cljs.core.nth.call(null,vec__8073_8116,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8117,func__7757__auto___8118);
{
var G__8119 = seq__8069_8112;
var G__8120 = chunk__8070_8113;
var G__8121 = count__8071_8114;
var G__8122 = (i__8072_8115 + 1);
seq__8069_8112 = G__8119;
chunk__8070_8113 = G__8120;
count__8071_8114 = G__8121;
i__8072_8115 = G__8122;
continue;
}
} else
{var temp__4092__auto___8123 = cljs.core.seq.call(null,seq__8069_8112);if(temp__4092__auto___8123)
{var seq__8069_8124__$1 = temp__4092__auto___8123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8069_8124__$1))
{var c__7112__auto___8125 = cljs.core.chunk_first.call(null,seq__8069_8124__$1);{
var G__8126 = cljs.core.chunk_rest.call(null,seq__8069_8124__$1);
var G__8127 = c__7112__auto___8125;
var G__8128 = cljs.core.count.call(null,c__7112__auto___8125);
var G__8129 = 0;
seq__8069_8112 = G__8126;
chunk__8070_8113 = G__8127;
count__8071_8114 = G__8128;
i__8072_8115 = G__8129;
continue;
}
} else
{var vec__8074_8130 = cljs.core.first.call(null,seq__8069_8124__$1);var ev__7756__auto___8131 = cljs.core.nth.call(null,vec__8074_8130,0,null);var func__7757__auto___8132 = cljs.core.nth.call(null,vec__8074_8130,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8131,func__7757__auto___8132);
{
var G__8133 = cljs.core.next.call(null,seq__8069_8124__$1);
var G__8134 = null;
var G__8135 = 0;
var G__8136 = 0;
seq__8069_8112 = G__8133;
chunk__8070_8113 = G__8134;
count__8071_8114 = G__8135;
i__8072_8115 = G__8136;
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
lt.plugins.gitlight.common_ui.text_input = (function text_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"message"], null)], null));var seq__8081_8137 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7755__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7755__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
], null)));var chunk__8082_8138 = null;var count__8083_8139 = 0;var i__8084_8140 = 0;while(true){
if((i__8084_8140 < count__8083_8139))
{var vec__8085_8141 = cljs.core._nth.call(null,chunk__8082_8138,i__8084_8140);var ev__7756__auto___8142 = cljs.core.nth.call(null,vec__8085_8141,0,null);var func__7757__auto___8143 = cljs.core.nth.call(null,vec__8085_8141,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8142,func__7757__auto___8143);
{
var G__8144 = seq__8081_8137;
var G__8145 = chunk__8082_8138;
var G__8146 = count__8083_8139;
var G__8147 = (i__8084_8140 + 1);
seq__8081_8137 = G__8144;
chunk__8082_8138 = G__8145;
count__8083_8139 = G__8146;
i__8084_8140 = G__8147;
continue;
}
} else
{var temp__4092__auto___8148 = cljs.core.seq.call(null,seq__8081_8137);if(temp__4092__auto___8148)
{var seq__8081_8149__$1 = temp__4092__auto___8148;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8081_8149__$1))
{var c__7112__auto___8150 = cljs.core.chunk_first.call(null,seq__8081_8149__$1);{
var G__8151 = cljs.core.chunk_rest.call(null,seq__8081_8149__$1);
var G__8152 = c__7112__auto___8150;
var G__8153 = cljs.core.count.call(null,c__7112__auto___8150);
var G__8154 = 0;
seq__8081_8137 = G__8151;
chunk__8082_8138 = G__8152;
count__8083_8139 = G__8153;
i__8084_8140 = G__8154;
continue;
}
} else
{var vec__8086_8155 = cljs.core.first.call(null,seq__8081_8149__$1);var ev__7756__auto___8156 = cljs.core.nth.call(null,vec__8086_8155,0,null);var func__7757__auto___8157 = cljs.core.nth.call(null,vec__8086_8155,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8156,func__7757__auto___8157);
{
var G__8158 = cljs.core.next.call(null,seq__8081_8149__$1);
var G__8159 = null;
var G__8160 = 0;
var G__8161 = 0;
seq__8081_8137 = G__8158;
chunk__8082_8138 = G__8159;
count__8083_8139 = G__8160;
i__8084_8140 = G__8161;
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
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.map.call(null,(function (p1__8087_SHARP_){return cljs.core.nth.call(null,p1__8087_SHARP_,2);
}),results)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","merge-mult-results","lt.plugins.gitlight.common-ui/merge-mult-results",4752627904),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__merge_mult_results,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mult-outs","mult-outs",4047322324)], null));
lt.plugins.gitlight.common_ui.not_a_thing = (function not_a_thing(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"nothing"], null));var seq__8094_8162 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8095_8163 = null;var count__8096_8164 = 0;var i__8097_8165 = 0;while(true){
if((i__8097_8165 < count__8096_8164))
{var vec__8098_8166 = cljs.core._nth.call(null,chunk__8095_8163,i__8097_8165);var ev__7756__auto___8167 = cljs.core.nth.call(null,vec__8098_8166,0,null);var func__7757__auto___8168 = cljs.core.nth.call(null,vec__8098_8166,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8167,func__7757__auto___8168);
{
var G__8169 = seq__8094_8162;
var G__8170 = chunk__8095_8163;
var G__8171 = count__8096_8164;
var G__8172 = (i__8097_8165 + 1);
seq__8094_8162 = G__8169;
chunk__8095_8163 = G__8170;
count__8096_8164 = G__8171;
i__8097_8165 = G__8172;
continue;
}
} else
{var temp__4092__auto___8173 = cljs.core.seq.call(null,seq__8094_8162);if(temp__4092__auto___8173)
{var seq__8094_8174__$1 = temp__4092__auto___8173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8094_8174__$1))
{var c__7112__auto___8175 = cljs.core.chunk_first.call(null,seq__8094_8174__$1);{
var G__8176 = cljs.core.chunk_rest.call(null,seq__8094_8174__$1);
var G__8177 = c__7112__auto___8175;
var G__8178 = cljs.core.count.call(null,c__7112__auto___8175);
var G__8179 = 0;
seq__8094_8162 = G__8176;
chunk__8095_8163 = G__8177;
count__8096_8164 = G__8178;
i__8097_8165 = G__8179;
continue;
}
} else
{var vec__8099_8180 = cljs.core.first.call(null,seq__8094_8174__$1);var ev__7756__auto___8181 = cljs.core.nth.call(null,vec__8099_8180,0,null);var func__7757__auto___8182 = cljs.core.nth.call(null,vec__8099_8180,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8181,func__7757__auto___8182);
{
var G__8183 = cljs.core.next.call(null,seq__8094_8174__$1);
var G__8184 = null;
var G__8185 = 0;
var G__8186 = 0;
seq__8094_8162 = G__8183;
chunk__8095_8163 = G__8184;
count__8096_8164 = G__8185;
i__8097_8165 = G__8186;
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
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,ui_fun){var vec__8101 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__8101,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__8101,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__8101,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__8101,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478),new cljs.core.Keyword(null,"gitlight-log-history","gitlight-log-history",2628910772)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"result","result",4374444943),null,new cljs.core.Keyword(null,"results","results",2111450984),null,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword("lt.plugins.gitlight.common-ui","refresh-tab","lt.plugins.gitlight.common-ui/refresh-tab",1790366357),new cljs.core.Keyword("lt.plugins.gitlight.common-ui","merge-mult-results","lt.plugins.gitlight.common-ui/merge-mult-results",4752627904),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__8101,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return lt.plugins.gitlight.common_ui.not_a_thing.call(null);
});})(vec__8101,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);return lt.object.create.call(null,tab_obj);
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8187 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8187))
{var ts_8188 = temp__4092__auto___8187;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8188))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8188);
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
var G__8527__delegate = function (args){cljs.core.apply.call(null,fun,args);
return wrapper.call(null);
};
var G__8527 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8527__delegate.call(this,args);};
G__8527.cljs$lang$maxFixedArity = 0;
G__8527.cljs$lang$applyTo = (function (arglist__8528){
var args = cljs.core.seq(arglist__8528);
return G__8527__delegate(args);
});
G__8527.cljs$core$IFn$_invoke$arity$variadic = G__8527__delegate;
return G__8527;
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
lt.plugins.gitlight.history.row = (function row(p__8486){var vec__8488 = p__8486;var success_or_error = cljs.core.nth.call(null,vec__8488,0,null);var command = cljs.core.nth.call(null,vec__8488,1,null);var date = cljs.core.nth.call(null,vec__8488,2,null);var stdout = cljs.core.nth.call(null,vec__8488,3,null);var stderr = cljs.core.nth.call(null,vec__8488,4,null);if(!((success_or_error == null)))
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
lt.plugins.gitlight.history.get_first = (function get_first(needle,haystack){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8489_SHARP_){return cljs.core._EQ_.call(null,needle,cljs.core.first.call(null,p1__8489_SHARP_));
}),haystack));
});
lt.plugins.gitlight.history.history_header = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stdout"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stderr"], null)], null);
lt.plugins.gitlight.history.make_history_gui = (function make_history_gui(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var history = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var dump_button = lt.plugins.gitlight.common_ui.button.call(null,"dump history",lt.plugins.gitlight.history.landfill_of_history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.history.parse_dump.call(null,cljs.core.deref.call(null,history))], null));var last_ok = lt.plugins.gitlight.history.get_first.call(null,new cljs.core.Keyword(null,"success","success",3441701749),cljs.core.deref.call(null,history));var last_fail = lt.plugins.gitlight.history.get_first.call(null,new cljs.core.Keyword(null,"error","error",1110689146),cljs.core.deref.call(null,history));var history_rows = cljs.core.map.call(null,lt.plugins.gitlight.history.row,cljs.core.deref.call(null,history));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-command-history","div.gitlight-command-history",2639214328),dump_button,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),lt.plugins.gitlight.history.spacer.call(null,"last ok: "),lt.plugins.gitlight.history.row.call(null,last_ok),lt.plugins.gitlight.history.spacer.call(null,"last failed: "),lt.plugins.gitlight.history.row.call(null,last_fail),lt.plugins.gitlight.history.spacer.call(null,"history: "),lt.plugins.gitlight.history.history_header,history_rows], null)], null);
})());var seq__8496_8502 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8497_8503 = null;var count__8498_8504 = 0;var i__8499_8505 = 0;while(true){
if((i__8499_8505 < count__8498_8504))
{var vec__8500_8506 = cljs.core._nth.call(null,chunk__8497_8503,i__8499_8505);var ev__7756__auto___8507 = cljs.core.nth.call(null,vec__8500_8506,0,null);var func__7757__auto___8508 = cljs.core.nth.call(null,vec__8500_8506,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8507,func__7757__auto___8508);
{
var G__8509 = seq__8496_8502;
var G__8510 = chunk__8497_8503;
var G__8511 = count__8498_8504;
var G__8512 = (i__8499_8505 + 1);
seq__8496_8502 = G__8509;
chunk__8497_8503 = G__8510;
count__8498_8504 = G__8511;
i__8499_8505 = G__8512;
continue;
}
} else
{var temp__4092__auto___8513 = cljs.core.seq.call(null,seq__8496_8502);if(temp__4092__auto___8513)
{var seq__8496_8514__$1 = temp__4092__auto___8513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8496_8514__$1))
{var c__7112__auto___8515 = cljs.core.chunk_first.call(null,seq__8496_8514__$1);{
var G__8516 = cljs.core.chunk_rest.call(null,seq__8496_8514__$1);
var G__8517 = c__7112__auto___8515;
var G__8518 = cljs.core.count.call(null,c__7112__auto___8515);
var G__8519 = 0;
seq__8496_8502 = G__8516;
chunk__8497_8503 = G__8517;
count__8498_8504 = G__8518;
i__8499_8505 = G__8519;
continue;
}
} else
{var vec__8501_8520 = cljs.core.first.call(null,seq__8496_8514__$1);var ev__7756__auto___8521 = cljs.core.nth.call(null,vec__8501_8520,0,null);var func__7757__auto___8522 = cljs.core.nth.call(null,vec__8501_8520,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8521,func__7757__auto___8522);
{
var G__8523 = cljs.core.next.call(null,seq__8496_8514__$1);
var G__8524 = null;
var G__8525 = 0;
var G__8526 = 0;
seq__8496_8502 = G__8523;
chunk__8497_8503 = G__8524;
count__8498_8504 = G__8525;
i__8499_8505 = G__8526;
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
lt.plugins.gitlight.gutter.make_gutter_marker = (function make_gutter_marker(this$,on_click,style_content,content){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gutter-content","div.gutter-content",4072529974),style_content.call(null,content)], null));var seq__8453_8460 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return on_click.call(null,content);
});})(e__7755__auto__))
], null)));var chunk__8454_8461 = null;var count__8455_8462 = 0;var i__8456_8463 = 0;while(true){
if((i__8456_8463 < count__8455_8462))
{var vec__8457_8464 = cljs.core._nth.call(null,chunk__8454_8461,i__8456_8463);var ev__7756__auto___8465 = cljs.core.nth.call(null,vec__8457_8464,0,null);var func__7757__auto___8466 = cljs.core.nth.call(null,vec__8457_8464,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8465,func__7757__auto___8466);
{
var G__8467 = seq__8453_8460;
var G__8468 = chunk__8454_8461;
var G__8469 = count__8455_8462;
var G__8470 = (i__8456_8463 + 1);
seq__8453_8460 = G__8467;
chunk__8454_8461 = G__8468;
count__8455_8462 = G__8469;
i__8456_8463 = G__8470;
continue;
}
} else
{var temp__4092__auto___8471 = cljs.core.seq.call(null,seq__8453_8460);if(temp__4092__auto___8471)
{var seq__8453_8472__$1 = temp__4092__auto___8471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8453_8472__$1))
{var c__7112__auto___8473 = cljs.core.chunk_first.call(null,seq__8453_8472__$1);{
var G__8474 = cljs.core.chunk_rest.call(null,seq__8453_8472__$1);
var G__8475 = c__7112__auto___8473;
var G__8476 = cljs.core.count.call(null,c__7112__auto___8473);
var G__8477 = 0;
seq__8453_8460 = G__8474;
chunk__8454_8461 = G__8475;
count__8455_8462 = G__8476;
i__8456_8463 = G__8477;
continue;
}
} else
{var vec__8458_8478 = cljs.core.first.call(null,seq__8453_8472__$1);var ev__7756__auto___8479 = cljs.core.nth.call(null,vec__8458_8478,0,null);var func__7757__auto___8480 = cljs.core.nth.call(null,vec__8458_8478,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8479,func__7757__auto___8480);
{
var G__8481 = cljs.core.next.call(null,seq__8453_8472__$1);
var G__8482 = null;
var G__8483 = 0;
var G__8484 = 0;
seq__8453_8460 = G__8481;
chunk__8454_8461 = G__8482;
count__8455_8462 = G__8483;
i__8456_8463 = G__8484;
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
return (function (p1__8459_SHARP_){return lt.plugins.gitlight.gutter.make_gutter_marker.call(null,this$,on_click,style_content,p1__8459_SHARP_);
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
var gutter_8485 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["gitlight-gutter",null], null), null),gutter_8485))], null));
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
lt.plugins.gitlight.diff.update_after = cljs.core.partial.call(null,lt.plugins.gitlight.libs.wrap_post,lt.plugins.gitlight.diff.update_diff);
lt.plugins.gitlight.diff.make_context = (function make_context(){var inc_and_up = lt.plugins.gitlight.diff.update_after.call(null,(function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.inc);
}));var dec_and_up = lt.plugins.gitlight.diff.update_after.call(null,((function (inc_and_up){
return (function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.dec);
});})(inc_and_up))
);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context","div.context",3533479108),lt.plugins.gitlight.common_ui.button.call(null,"-",inc_and_up),[cljs.core.str("context: "),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join(''),lt.plugins.gitlight.common_ui.button.call(null,"+",dec_and_up)], null);
});
lt.plugins.gitlight.diff.make_more_context = (function make_more_context(){var large_context_8295 = lt.plugins.gitlight.diff.update_after.call(null,(function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,100000);
}));var reset_context_8296 = lt.plugins.gitlight.diff.update_after.call(null,((function (large_context_8295){
return (function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,3);
});})(large_context_8295))
);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.more-context","div.more-context",3304815846),lt.plugins.gitlight.common_ui.button.call(null,"whole file",lt.plugins.gitlight.diff.large_context),lt.plugins.gitlight.common_ui.button.call(null,"reset",lt.plugins.gitlight.diff.reset_context)], null);
});
lt.plugins.gitlight.diff.cached_toggle_button = (function cached_toggle_button(){var cached_txt = (cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached))?"unstaged changes":"staged changes");var update_cached = lt.plugins.gitlight.diff.update_after.call(null,((function (cached_txt){
return (function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.last_cached,cljs.core.not);
});})(cached_txt))
);return lt.plugins.gitlight.common_ui.button.call(null,cached_txt,update_cached);
});
lt.plugins.gitlight.diff.commit_input = (function commit_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title","input.title",3943357094),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"size","size",1017434995),81,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit title"], null)], null));var seq__8208_8297 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8209_8298 = null;var count__8210_8299 = 0;var i__8211_8300 = 0;while(true){
if((i__8211_8300 < count__8210_8299))
{var vec__8212_8301 = cljs.core._nth.call(null,chunk__8209_8298,i__8211_8300);var ev__7756__auto___8302 = cljs.core.nth.call(null,vec__8212_8301,0,null);var func__7757__auto___8303 = cljs.core.nth.call(null,vec__8212_8301,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8302,func__7757__auto___8303);
{
var G__8304 = seq__8208_8297;
var G__8305 = chunk__8209_8298;
var G__8306 = count__8210_8299;
var G__8307 = (i__8211_8300 + 1);
seq__8208_8297 = G__8304;
chunk__8209_8298 = G__8305;
count__8210_8299 = G__8306;
i__8211_8300 = G__8307;
continue;
}
} else
{var temp__4092__auto___8308 = cljs.core.seq.call(null,seq__8208_8297);if(temp__4092__auto___8308)
{var seq__8208_8309__$1 = temp__4092__auto___8308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8208_8309__$1))
{var c__7112__auto___8310 = cljs.core.chunk_first.call(null,seq__8208_8309__$1);{
var G__8311 = cljs.core.chunk_rest.call(null,seq__8208_8309__$1);
var G__8312 = c__7112__auto___8310;
var G__8313 = cljs.core.count.call(null,c__7112__auto___8310);
var G__8314 = 0;
seq__8208_8297 = G__8311;
chunk__8209_8298 = G__8312;
count__8210_8299 = G__8313;
i__8211_8300 = G__8314;
continue;
}
} else
{var vec__8213_8315 = cljs.core.first.call(null,seq__8208_8309__$1);var ev__7756__auto___8316 = cljs.core.nth.call(null,vec__8213_8315,0,null);var func__7757__auto___8317 = cljs.core.nth.call(null,vec__8213_8315,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8316,func__7757__auto___8317);
{
var G__8318 = cljs.core.next.call(null,seq__8208_8309__$1);
var G__8319 = null;
var G__8320 = 0;
var G__8321 = 0;
seq__8208_8297 = G__8318;
chunk__8209_8298 = G__8319;
count__8210_8299 = G__8320;
i__8211_8300 = G__8321;
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
lt.plugins.gitlight.diff.commit_body = (function commit_body(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.body","textarea.body",3433374536),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit body",new cljs.core.Keyword(null,"cols","cols",1016963685),81,new cljs.core.Keyword(null,"rows","rows",1017410891),10], null)], null));var seq__8220_8322 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8221_8323 = null;var count__8222_8324 = 0;var i__8223_8325 = 0;while(true){
if((i__8223_8325 < count__8222_8324))
{var vec__8224_8326 = cljs.core._nth.call(null,chunk__8221_8323,i__8223_8325);var ev__7756__auto___8327 = cljs.core.nth.call(null,vec__8224_8326,0,null);var func__7757__auto___8328 = cljs.core.nth.call(null,vec__8224_8326,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8327,func__7757__auto___8328);
{
var G__8329 = seq__8220_8322;
var G__8330 = chunk__8221_8323;
var G__8331 = count__8222_8324;
var G__8332 = (i__8223_8325 + 1);
seq__8220_8322 = G__8329;
chunk__8221_8323 = G__8330;
count__8222_8324 = G__8331;
i__8223_8325 = G__8332;
continue;
}
} else
{var temp__4092__auto___8333 = cljs.core.seq.call(null,seq__8220_8322);if(temp__4092__auto___8333)
{var seq__8220_8334__$1 = temp__4092__auto___8333;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8220_8334__$1))
{var c__7112__auto___8335 = cljs.core.chunk_first.call(null,seq__8220_8334__$1);{
var G__8336 = cljs.core.chunk_rest.call(null,seq__8220_8334__$1);
var G__8337 = c__7112__auto___8335;
var G__8338 = cljs.core.count.call(null,c__7112__auto___8335);
var G__8339 = 0;
seq__8220_8322 = G__8336;
chunk__8221_8323 = G__8337;
count__8222_8324 = G__8338;
i__8223_8325 = G__8339;
continue;
}
} else
{var vec__8225_8340 = cljs.core.first.call(null,seq__8220_8334__$1);var ev__7756__auto___8341 = cljs.core.nth.call(null,vec__8225_8340,0,null);var func__7757__auto___8342 = cljs.core.nth.call(null,vec__8225_8340,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8341,func__7757__auto___8342);
{
var G__8343 = cljs.core.next.call(null,seq__8220_8334__$1);
var G__8344 = null;
var G__8345 = 0;
var G__8346 = 0;
seq__8220_8322 = G__8343;
chunk__8221_8323 = G__8344;
count__8222_8324 = G__8345;
i__8223_8325 = G__8346;
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
lt.plugins.gitlight.diff.make_file_table = (function make_file_table(p__8226){var vec__8228 = p__8226;var header = cljs.core.nth.call(null,vec__8228,0,null);var left = cljs.core.nth.call(null,vec__8228,1,null);var right = cljs.core.nth.call(null,vec__8228,2,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),header], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),right], null)], null)], null)], null);
});
lt.plugins.gitlight.diff.location_row = (function location_row(location){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),location], null)], null)], null);
});
lt.plugins.gitlight.diff.separate = (function separate(fun,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,fun,coll),cljs.core.filter.call(null,cljs.core.complement.call(null,fun),coll)], null);
});
lt.plugins.gitlight.diff.nil_padder = (function nil_padder(coll,padding){return cljs.core.concat.call(null,coll,cljs.core.repeat.call(null,padding,null));
});
lt.plugins.gitlight.diff.pad_smaller_with_nils = (function pad_smaller_with_nils(left_right){var counts = cljs.core.map.call(null,cljs.core.count,left_right);var paddings = cljs.core.map.call(null,cljs.core._,cljs.core.reverse.call(null,counts),counts);return cljs.core.map.call(null,lt.plugins.gitlight.diff.nil_padder,left_right,paddings);
});
lt.plugins.gitlight.diff.separate_minus_and_plus = (function separate_minus_and_plus(lines){var minus_plus = lt.plugins.gitlight.diff.separate.call(null,(function (p1__8229_SHARP_){return cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p1__8229_SHARP_));
}),lines);return lt.plugins.gitlight.diff.pad_smaller_with_nils.call(null,minus_plus);
});
lt.plugins.gitlight.diff.make_columns = (function make_columns(lines){var separated = lt.plugins.gitlight.diff.separate_minus_and_plus.call(null,lines);if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.diff.make_diff_row,"context"),lines,lines);
} else
{return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.partial.call(null,lt.plugins.gitlight.diff.make_diff_row,"changed")),separated);
}
});
lt.plugins.gitlight.diff.make_diff_row = (function make_diff_row(classname,left,right){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),classname], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null);
});
lt.plugins.gitlight.diff.split_diff_into_columns = (function split_diff_into_columns(p__8231){var vec__8233 = p__8231;var location = cljs.core.nth.call(null,vec__8233,0,null);var diff = cljs.core.nth.call(null,vec__8233,1,null);var splitted_into_groups = cljs.core.partition_by.call(null,((function (vec__8233,location,diff){
return (function (p1__8230_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__8230_SHARP_));
});})(vec__8233,location,diff))
,diff);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.diff.location_row.call(null,location),cljs.core.map.call(null,lt.plugins.gitlight.diff.make_columns,splitted_into_groups)], null);
});
lt.plugins.gitlight.diff.make_file_diff = (function make_file_diff(file_diff){return cljs.core.mapcat.call(null,lt.plugins.gitlight.diff.split_diff_into_columns,file_diff);
});
lt.plugins.gitlight.diff.diff_panel = (function diff_panel(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var output = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-diff","div.gitlight-diff",3415869571),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"diff: ",((cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename)))?"whole repo":cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename))], null),lt.plugins.gitlight.diff.make_context.call(null),lt.plugins.gitlight.diff.make_more_context.call(null),lt.plugins.gitlight.diff.cached_toggle_button.call(null),(cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached))?lt.plugins.gitlight.diff.make_commit_form.call(null):null),(function (){var iter__7081__auto__ = ((function (output){
return (function iter__8248(s__8249){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__8249__$1 = s__8249;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8249__$1);if(temp__4092__auto__)
{var s__8249__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8249__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8249__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8251 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8250 = 0;while(true){
if((i__8250 < size__7080__auto__))
{var vec__8254 = cljs.core._nth.call(null,c__7079__auto__,i__8250);var fileinfo = cljs.core.nth.call(null,vec__8254,0,null);var file_diff = cljs.core.nth.call(null,vec__8254,1,null);cljs.core.chunk_append.call(null,b__8251,cljs.core.into.call(null,lt.plugins.gitlight.diff.make_file_table.call(null,fileinfo),lt.plugins.gitlight.diff.make_file_diff.call(null,file_diff)));
{
var G__8347 = (i__8250 + 1);
i__8250 = G__8347;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8251),iter__8248.call(null,cljs.core.chunk_rest.call(null,s__8249__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8251),null);
}
} else
{var vec__8255 = cljs.core.first.call(null,s__8249__$2);var fileinfo = cljs.core.nth.call(null,vec__8255,0,null);var file_diff = cljs.core.nth.call(null,vec__8255,1,null);return cljs.core.cons.call(null,cljs.core.into.call(null,lt.plugins.gitlight.diff.make_file_table.call(null,fileinfo),lt.plugins.gitlight.diff.make_file_diff.call(null,file_diff)),iter__8248.call(null,cljs.core.rest.call(null,s__8249__$2)));
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
})());var seq__8256_8348 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8257_8349 = null;var count__8258_8350 = 0;var i__8259_8351 = 0;while(true){
if((i__8259_8351 < count__8258_8350))
{var vec__8260_8352 = cljs.core._nth.call(null,chunk__8257_8349,i__8259_8351);var ev__7756__auto___8353 = cljs.core.nth.call(null,vec__8260_8352,0,null);var func__7757__auto___8354 = cljs.core.nth.call(null,vec__8260_8352,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8353,func__7757__auto___8354);
{
var G__8355 = seq__8256_8348;
var G__8356 = chunk__8257_8349;
var G__8357 = count__8258_8350;
var G__8358 = (i__8259_8351 + 1);
seq__8256_8348 = G__8355;
chunk__8257_8349 = G__8356;
count__8258_8350 = G__8357;
i__8259_8351 = G__8358;
continue;
}
} else
{var temp__4092__auto___8359 = cljs.core.seq.call(null,seq__8256_8348);if(temp__4092__auto___8359)
{var seq__8256_8360__$1 = temp__4092__auto___8359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8256_8360__$1))
{var c__7112__auto___8361 = cljs.core.chunk_first.call(null,seq__8256_8360__$1);{
var G__8362 = cljs.core.chunk_rest.call(null,seq__8256_8360__$1);
var G__8363 = c__7112__auto___8361;
var G__8364 = cljs.core.count.call(null,c__7112__auto___8361);
var G__8365 = 0;
seq__8256_8348 = G__8362;
chunk__8257_8349 = G__8363;
count__8258_8350 = G__8364;
i__8259_8351 = G__8365;
continue;
}
} else
{var vec__8261_8366 = cljs.core.first.call(null,seq__8256_8360__$1);var ev__7756__auto___8367 = cljs.core.nth.call(null,vec__8261_8366,0,null);var func__7757__auto___8368 = cljs.core.nth.call(null,vec__8261_8366,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8367,func__7757__auto___8368);
{
var G__8369 = cljs.core.next.call(null,seq__8256_8360__$1);
var G__8370 = null;
var G__8371 = 0;
var G__8372 = 0;
seq__8256_8348 = G__8369;
chunk__8257_8349 = G__8370;
count__8258_8350 = G__8371;
i__8259_8351 = G__8372;
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
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(file_lines){return cljs.core.partition.call(null,2,cljs.core.partition_by.call(null,(function (p1__8262_SHARP_){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,p1__8262_SHARP_));
}),file_lines));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(lines){var vec__8264 = cljs.core.split_at.call(null,3,lines);var fileinfo = cljs.core.nth.call(null,vec__8264,0,null);var diff_lines = cljs.core.nth.call(null,vec__8264,1,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,diff_lines);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fileinfo,groups], null);
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
lt.plugins.gitlight.diff.style_diff_marker = (function style_diff_marker(p__8265){var vec__8273 = p__8265;var p = cljs.core.nth.call(null,vec__8273,0,null);var m = cljs.core.nth.call(null,vec__8273,1,null);var content = vec__8273;var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(((cljs.core._EQ_.call(null,p," ")) && ((m == null)))?"no-change":(((cljs.core._EQ_.call(null,p,"+")) && ((m == null)))?"added-line":(((cljs.core._EQ_.call(null,p," ")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"deleted-lines":(((cljs.core._EQ_.call(null,p,"+")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"modified-line":null))))], null),content], null));var seq__8274_8373 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8275_8374 = null;var count__8276_8375 = 0;var i__8277_8376 = 0;while(true){
if((i__8277_8376 < count__8276_8375))
{var vec__8278_8377 = cljs.core._nth.call(null,chunk__8275_8374,i__8277_8376);var ev__7756__auto___8378 = cljs.core.nth.call(null,vec__8278_8377,0,null);var func__7757__auto___8379 = cljs.core.nth.call(null,vec__8278_8377,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8378,func__7757__auto___8379);
{
var G__8380 = seq__8274_8373;
var G__8381 = chunk__8275_8374;
var G__8382 = count__8276_8375;
var G__8383 = (i__8277_8376 + 1);
seq__8274_8373 = G__8380;
chunk__8275_8374 = G__8381;
count__8276_8375 = G__8382;
i__8277_8376 = G__8383;
continue;
}
} else
{var temp__4092__auto___8384 = cljs.core.seq.call(null,seq__8274_8373);if(temp__4092__auto___8384)
{var seq__8274_8385__$1 = temp__4092__auto___8384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8274_8385__$1))
{var c__7112__auto___8386 = cljs.core.chunk_first.call(null,seq__8274_8385__$1);{
var G__8387 = cljs.core.chunk_rest.call(null,seq__8274_8385__$1);
var G__8388 = c__7112__auto___8386;
var G__8389 = cljs.core.count.call(null,c__7112__auto___8386);
var G__8390 = 0;
seq__8274_8373 = G__8387;
chunk__8275_8374 = G__8388;
count__8276_8375 = G__8389;
i__8277_8376 = G__8390;
continue;
}
} else
{var vec__8279_8391 = cljs.core.first.call(null,seq__8274_8385__$1);var ev__7756__auto___8392 = cljs.core.nth.call(null,vec__8279_8391,0,null);var func__7757__auto___8393 = cljs.core.nth.call(null,vec__8279_8391,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8392,func__7757__auto___8393);
{
var G__8394 = cljs.core.next.call(null,seq__8274_8385__$1);
var G__8395 = null;
var G__8396 = 0;
var G__8397 = 0;
seq__8274_8373 = G__8394;
chunk__8275_8374 = G__8395;
count__8276_8375 = G__8396;
i__8277_8376 = G__8397;
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
lt.plugins.gitlight.diff.dec_GT_0 = (function dec_GT_0(x){if((x > 0))
{return (x - 1);
} else
{return 0;
}
});
lt.plugins.gitlight.diff.with_deficit = (function with_deficit(marker,deficit){return [cljs.core.str(marker),cljs.core.str((((deficit > 0))?((cljs.core._EQ_.call(null,"+",marker))?"-":[cljs.core.str("-"),cljs.core.str(deficit),cljs.core.str("\u2191")].join('')):null))].join('');
});
lt.plugins.gitlight.diff.make_indicator = (function make_indicator(p__8280,marker){var vec__8283 = p__8280;var consumed = cljs.core.nth.call(null,vec__8283,0,null);var deficit = cljs.core.nth.call(null,vec__8283,1,null);var new_marker = lt.plugins.gitlight.diff.with_deficit.call(null,marker,deficit);var added_new = cljs.core.conj.call(null,consumed,new_marker);var G__8284 = marker;if(cljs.core._EQ_.call(null," ",G__8284))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [added_new,0], null);
} else
{if(cljs.core._EQ_.call(null,"+",G__8284))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [added_new,lt.plugins.gitlight.diff.dec_GT_0.call(null,deficit)], null);
} else
{if(cljs.core._EQ_.call(null,"-",G__8284))
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
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.branch.git_branches = (function git_branches(){var commands_args = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch","--no-color","-vv"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["remote","-v"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch","-r","-v"], null)], null);var commands_to_run = cljs.core.map.call(null,((function (commands_args){
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
lt.plugins.gitlight.branch.local_branches_ui = (function local_branches_ui(branches){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = (function iter__7884(s__7885){return (new cljs.core.LazySeq(null,(function (){var s__7885__$1 = s__7885;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7885__$1);if(temp__4092__auto__)
{var s__7885__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7885__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7885__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7887 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7886 = 0;while(true){
if((i__7886 < size__7080__auto__))
{var parsed = cljs.core._nth.call(null,c__7079__auto__,i__7886);var vec__7892 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__7892,0,null);var vec__7893 = cljs.core.nth.call(null,vec__7892,1,null);var branch = cljs.core.nth.call(null,vec__7893,0,null);var sha1 = cljs.core.nth.call(null,vec__7893,1,null);var desc = cljs.core.nth.call(null,vec__7893,2,null);cljs.core.chunk_append.call(null,b__7887,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":lt.plugins.gitlight.branch.delete_branch_button.call(null,branch))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null));
{
var G__7952 = (i__7886 + 1);
i__7886 = G__7952;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7887),iter__7884.call(null,cljs.core.chunk_rest.call(null,s__7885__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7887),null);
}
} else
{var parsed = cljs.core.first.call(null,s__7885__$2);var vec__7894 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__7894,0,null);var vec__7895 = cljs.core.nth.call(null,vec__7894,1,null);var branch = cljs.core.nth.call(null,vec__7895,0,null);var sha1 = cljs.core.nth.call(null,vec__7895,1,null);var desc = cljs.core.nth.call(null,vec__7895,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":lt.plugins.gitlight.branch.delete_branch_button.call(null,branch))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null),iter__7884.call(null,cljs.core.rest.call(null,s__7885__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,lt.plugins.gitlight.branch.parse_data.call(null,branches));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.new-branch","td.new-branch",3433852959),lt.plugins.gitlight.branch.new_branch_button.call(null)], null)], null)], null);
});
lt.plugins.gitlight.branch.remote_branches_ui = (function remote_branches_ui(remote_branches){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = (function iter__7904(s__7905){return (new cljs.core.LazySeq(null,(function (){var s__7905__$1 = s__7905;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7905__$1);if(temp__4092__auto__)
{var s__7905__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7905__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7905__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7907 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7906 = 0;while(true){
if((i__7906 < size__7080__auto__))
{var branch = cljs.core._nth.call(null,c__7079__auto__,i__7906);var vec__7910 = clojure.string.split.call(null,branch,/\s+/,4);var _ = cljs.core.nth.call(null,vec__7910,0,null);var branch_name = cljs.core.nth.call(null,vec__7910,1,null);var h = cljs.core.nth.call(null,vec__7910,2,null);var tail = cljs.core.nth.call(null,vec__7910,3,null);cljs.core.chunk_append.call(null,b__7907,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),branch_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),tail], null)], null));
{
var G__7953 = (i__7906 + 1);
i__7906 = G__7953;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7907),iter__7904.call(null,cljs.core.chunk_rest.call(null,s__7905__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7907),null);
}
} else
{var branch = cljs.core.first.call(null,s__7905__$2);var vec__7911 = clojure.string.split.call(null,branch,/\s+/,4);var _ = cljs.core.nth.call(null,vec__7911,0,null);var branch_name = cljs.core.nth.call(null,vec__7911,1,null);var h = cljs.core.nth.call(null,vec__7911,2,null);var tail = cljs.core.nth.call(null,vec__7911,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),branch_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),tail], null)], null),iter__7904.call(null,cljs.core.rest.call(null,s__7905__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,clojure.string.split_lines.call(null,remote_branches.toString()));
})()], null);
});
lt.plugins.gitlight.branch.remotes_ui = (function remotes_ui(remotes){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = (function iter__7920(s__7921){return (new cljs.core.LazySeq(null,(function (){var s__7921__$1 = s__7921;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7921__$1);if(temp__4092__auto__)
{var s__7921__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7921__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7921__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7923 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7922 = 0;while(true){
if((i__7922 < size__7080__auto__))
{var remote = cljs.core._nth.call(null,c__7079__auto__,i__7922);var vec__7926 = clojure.string.split.call(null,remote,/\s+/,3);var r = cljs.core.nth.call(null,vec__7926,0,null);var url = cljs.core.nth.call(null,vec__7926,1,null);var what = cljs.core.nth.call(null,vec__7926,2,null);cljs.core.chunk_append.call(null,b__7923,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),url], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),what], null)], null));
{
var G__7954 = (i__7922 + 1);
i__7922 = G__7954;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7923),iter__7920.call(null,cljs.core.chunk_rest.call(null,s__7921__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7923),null);
}
} else
{var remote = cljs.core.first.call(null,s__7921__$2);var vec__7927 = clojure.string.split.call(null,remote,/\s+/,3);var r = cljs.core.nth.call(null,vec__7927,0,null);var url = cljs.core.nth.call(null,vec__7927,1,null);var what = cljs.core.nth.call(null,vec__7927,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),url], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),what], null)], null),iter__7920.call(null,cljs.core.rest.call(null,s__7921__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,clojure.string.split_lines.call(null,remotes.toString()));
})()], null);
});
lt.plugins.gitlight.branch.branch_panel = (function branch_panel(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var vec__7935 = new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var branches = cljs.core.nth.call(null,vec__7935,0,null);var remotes = cljs.core.nth.call(null,vec__7935,1,null);var remote_branches = cljs.core.nth.call(null,vec__7935,2,null);return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-branches","div.gitlight-branches",1801709646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Branches"], null),lt.plugins.gitlight.branch.local_branches_ui.call(null,branches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Remote branches"], null),lt.plugins.gitlight.branch.remote_branches_ui.call(null,remote_branches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Remotes"], null),lt.plugins.gitlight.branch.remotes_ui.call(null,remotes)], null);
})());var seq__7936_7955 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7937_7956 = null;var count__7938_7957 = 0;var i__7939_7958 = 0;while(true){
if((i__7939_7958 < count__7938_7957))
{var vec__7940_7959 = cljs.core._nth.call(null,chunk__7937_7956,i__7939_7958);var ev__7756__auto___7960 = cljs.core.nth.call(null,vec__7940_7959,0,null);var func__7757__auto___7961 = cljs.core.nth.call(null,vec__7940_7959,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7960,func__7757__auto___7961);
{
var G__7962 = seq__7936_7955;
var G__7963 = chunk__7937_7956;
var G__7964 = count__7938_7957;
var G__7965 = (i__7939_7958 + 1);
seq__7936_7955 = G__7962;
chunk__7937_7956 = G__7963;
count__7938_7957 = G__7964;
i__7939_7958 = G__7965;
continue;
}
} else
{var temp__4092__auto___7966 = cljs.core.seq.call(null,seq__7936_7955);if(temp__4092__auto___7966)
{var seq__7936_7967__$1 = temp__4092__auto___7966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7936_7967__$1))
{var c__7112__auto___7968 = cljs.core.chunk_first.call(null,seq__7936_7967__$1);{
var G__7969 = cljs.core.chunk_rest.call(null,seq__7936_7967__$1);
var G__7970 = c__7112__auto___7968;
var G__7971 = cljs.core.count.call(null,c__7112__auto___7968);
var G__7972 = 0;
seq__7936_7955 = G__7969;
chunk__7937_7956 = G__7970;
count__7938_7957 = G__7971;
i__7939_7958 = G__7972;
continue;
}
} else
{var vec__7941_7973 = cljs.core.first.call(null,seq__7936_7967__$1);var ev__7756__auto___7974 = cljs.core.nth.call(null,vec__7941_7973,0,null);var func__7757__auto___7975 = cljs.core.nth.call(null,vec__7941_7973,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7974,func__7757__auto___7975);
{
var G__7976 = cljs.core.next.call(null,seq__7936_7967__$1);
var G__7977 = null;
var G__7978 = 0;
var G__7979 = 0;
seq__7936_7955 = G__7976;
chunk__7937_7956 = G__7977;
count__7938_7957 = G__7978;
i__7939_7958 = G__7979;
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
lt.plugins.gitlight.branch.git_branch_splitter = (function git_branch_splitter(line){var active_QMARK_ = cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,line));var to_cut = cljs.core.subs.call(null,line,2);var splitted = clojure.string.split.call(null,to_cut,/\s+/,3);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_QMARK_,splitted], null);
});
lt.plugins.gitlight.branch.parse_data = (function parse_data(data){var lines = clojure.string.split_lines.call(null,data.toString());return cljs.core.map.call(null,lt.plugins.gitlight.branch.git_branch_splitter,lines);
});
lt.plugins.gitlight.branch.git_branch_output = lt.plugins.gitlight.common_ui.make_output_tab_object.call(null,"Git branches",new cljs.core.Keyword("lt.plugins.gitlight.branch","gitlight-branches","lt.plugins.gitlight.branch/gitlight-branches",2920815417),lt.plugins.gitlight.branch.branch_panel);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.branch","branches","lt.plugins.gitlight.branch/branches",1924152112),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: branches",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.branch.git_branches], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.ui')) {
goog.provide('lt.plugins.gitlight.status.ui');
goog.require('cljs.core');
goog.require('lt.objs.cli');
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
lt.plugins.gitlight.status.ui.group_names = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209),"Merge conflicts",new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),"Not staged",new cljs.core.Keyword(null,"staged","staged",4416376984),"Staged",new cljs.core.Keyword(null,"untracked","untracked",1658310115),"Untracked",new cljs.core.Keyword(null,"ignored","ignored",2766319684),"Ignored"], null);
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
lt.plugins.gitlight.status.ui.repo_ops = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",1017356940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push",lt.plugins.gitlight.remote_com.git_push], null),new cljs.core.Keyword(null,"pull","pull",1017356727),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull",lt.plugins.gitlight.remote_com.git_pull], null),new cljs.core.Keyword(null,"fetch","fetch",1111226924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fetch",lt.plugins.gitlight.remote_com.git_fetch], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"commit","commit",3954056361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quick commit",lt.plugins.gitlight.status.back.git_commit], null),new cljs.core.Keyword(null,"cached-diff","cached-diff",1992836418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cached diff",lt.plugins.gitlight.diff.git_diff_cached_repo_button], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"diff","diff",1016987511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_repo_button], null),new cljs.core.Keyword(null,"inline-diff","inline-diff",3623171627),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toggle inline diff",lt.plugins.gitlight.diff.toggle_git_diff_gutter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command-history","command-history",2259099524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["history",lt.plugins.gitlight.history.command_history], null)], null)], null);
lt.plugins.gitlight.status.ui.file = (function file(file_state,p__8984){var vec__9000 = p__8984;var filename = cljs.core.nth.call(null,vec__9000,0,null);var t = cljs.core.nth.call(null,vec__9000,1,null);var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),lt.plugins.gitlight.common_ui.button.call(null,filename,lt.plugins.gitlight.status.ui.update_status_after.call(null,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = ((function (vec__9000,filename,t){
return (function iter__9001(s__9002){return (new cljs.core.LazySeq(null,((function (vec__9000,filename,t){
return (function (){var s__9002__$1 = s__9002;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9002__$1);if(temp__4092__auto__)
{var s__9002__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9002__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9002__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9004 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9003 = 0;while(true){
if((i__9003 < size__7080__auto__))
{var vec__9007 = cljs.core._nth.call(null,c__7079__auto__,i__9003);var button_text = cljs.core.nth.call(null,vec__9007,0,null);var fun = cljs.core.nth.call(null,vec__9007,1,null);cljs.core.chunk_append.call(null,b__9004,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null)));
{
var G__9139 = (i__9003 + 1);
i__9003 = G__9139;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9004),iter__9001.call(null,cljs.core.chunk_rest.call(null,s__9002__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9004),null);
}
} else
{var vec__9008 = cljs.core.first.call(null,s__9002__$2);var button_text = cljs.core.nth.call(null,vec__9008,0,null);var fun = cljs.core.nth.call(null,vec__9008,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null)),iter__9001.call(null,cljs.core.rest.call(null,s__9002__$2)));
}
} else
{return null;
}
break;
}
});})(vec__9000,filename,t))
,null,null));
});})(vec__9000,filename,t))
;return iter__7081__auto__.call(null,file_state.call(null,lt.plugins.gitlight.status.ui.file_state__GT_buttons));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__9009_9140 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9010_9141 = null;var count__9011_9142 = 0;var i__9012_9143 = 0;while(true){
if((i__9012_9143 < count__9011_9142))
{var vec__9013_9144 = cljs.core._nth.call(null,chunk__9010_9141,i__9012_9143);var ev__7756__auto___9145 = cljs.core.nth.call(null,vec__9013_9144,0,null);var func__7757__auto___9146 = cljs.core.nth.call(null,vec__9013_9144,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9145,func__7757__auto___9146);
{
var G__9147 = seq__9009_9140;
var G__9148 = chunk__9010_9141;
var G__9149 = count__9011_9142;
var G__9150 = (i__9012_9143 + 1);
seq__9009_9140 = G__9147;
chunk__9010_9141 = G__9148;
count__9011_9142 = G__9149;
i__9012_9143 = G__9150;
continue;
}
} else
{var temp__4092__auto___9151 = cljs.core.seq.call(null,seq__9009_9140);if(temp__4092__auto___9151)
{var seq__9009_9152__$1 = temp__4092__auto___9151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9009_9152__$1))
{var c__7112__auto___9153 = cljs.core.chunk_first.call(null,seq__9009_9152__$1);{
var G__9154 = cljs.core.chunk_rest.call(null,seq__9009_9152__$1);
var G__9155 = c__7112__auto___9153;
var G__9156 = cljs.core.count.call(null,c__7112__auto___9153);
var G__9157 = 0;
seq__9009_9140 = G__9154;
chunk__9010_9141 = G__9155;
count__9011_9142 = G__9156;
i__9012_9143 = G__9157;
continue;
}
} else
{var vec__9014_9158 = cljs.core.first.call(null,seq__9009_9152__$1);var ev__7756__auto___9159 = cljs.core.nth.call(null,vec__9014_9158,0,null);var func__7757__auto___9160 = cljs.core.nth.call(null,vec__9014_9158,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9159,func__7757__auto___9160);
{
var G__9161 = cljs.core.next.call(null,seq__9009_9152__$1);
var G__9162 = null;
var G__9163 = 0;
var G__9164 = 0;
seq__9009_9140 = G__9161;
chunk__9010_9141 = G__9162;
count__9011_9142 = G__9163;
i__9012_9143 = G__9164;
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__9021_9165 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9022_9166 = null;var count__9023_9167 = 0;var i__9024_9168 = 0;while(true){
if((i__9024_9168 < count__9023_9167))
{var vec__9025_9169 = cljs.core._nth.call(null,chunk__9022_9166,i__9024_9168);var ev__7756__auto___9170 = cljs.core.nth.call(null,vec__9025_9169,0,null);var func__7757__auto___9171 = cljs.core.nth.call(null,vec__9025_9169,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9170,func__7757__auto___9171);
{
var G__9172 = seq__9021_9165;
var G__9173 = chunk__9022_9166;
var G__9174 = count__9023_9167;
var G__9175 = (i__9024_9168 + 1);
seq__9021_9165 = G__9172;
chunk__9022_9166 = G__9173;
count__9023_9167 = G__9174;
i__9024_9168 = G__9175;
continue;
}
} else
{var temp__4092__auto___9176 = cljs.core.seq.call(null,seq__9021_9165);if(temp__4092__auto___9176)
{var seq__9021_9177__$1 = temp__4092__auto___9176;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9021_9177__$1))
{var c__7112__auto___9178 = cljs.core.chunk_first.call(null,seq__9021_9177__$1);{
var G__9179 = cljs.core.chunk_rest.call(null,seq__9021_9177__$1);
var G__9180 = c__7112__auto___9178;
var G__9181 = cljs.core.count.call(null,c__7112__auto___9178);
var G__9182 = 0;
seq__9021_9165 = G__9179;
chunk__9022_9166 = G__9180;
count__9023_9167 = G__9181;
i__9024_9168 = G__9182;
continue;
}
} else
{var vec__9026_9183 = cljs.core.first.call(null,seq__9021_9177__$1);var ev__7756__auto___9184 = cljs.core.nth.call(null,vec__9026_9183,0,null);var func__7757__auto___9185 = cljs.core.nth.call(null,vec__9026_9183,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9184,func__7757__auto___9185);
{
var G__9186 = cljs.core.next.call(null,seq__9021_9177__$1);
var G__9187 = null;
var G__9188 = 0;
var G__9189 = 0;
seq__9021_9165 = G__9186;
chunk__9022_9166 = G__9187;
count__9023_9167 = G__9188;
i__9024_9168 = G__9189;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),lt.plugins.gitlight.common_ui.button.call(null,[cljs.core.str("Branch: "),cljs.core.str(branch)].join(''),lt.plugins.gitlight.branch.git_branches)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = (function iter__9077(s__9078){return (new cljs.core.LazySeq(null,(function (){var s__9078__$1 = s__9078;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9078__$1);if(temp__4092__auto__)
{var s__9078__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9078__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9078__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9080 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9079 = 0;while(true){
if((i__9079 < size__7080__auto__))
{var option_group = cljs.core._nth.call(null,c__7079__auto__,i__9079);cljs.core.chunk_append.call(null,b__9080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (i__9079,option_group,c__7079__auto__,size__7080__auto__,b__9080,s__9078__$2,temp__4092__auto__){
return (function iter__9097(s__9098){return (new cljs.core.LazySeq(null,((function (i__9079,option_group,c__7079__auto__,size__7080__auto__,b__9080,s__9078__$2,temp__4092__auto__){
return (function (){var s__9098__$1 = s__9098;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9098__$1);if(temp__4092__auto____$1)
{var s__9098__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9098__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9098__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9100 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9099 = 0;while(true){
if((i__9099 < size__7080__auto____$1))
{var vec__9103 = cljs.core._nth.call(null,c__7079__auto____$1,i__9099);var button_text = cljs.core.nth.call(null,vec__9103,0,null);var fun = cljs.core.nth.call(null,vec__9103,1,null);cljs.core.chunk_append.call(null,b__9100,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)));
{
var G__9190 = (i__9099 + 1);
i__9099 = G__9190;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9100),iter__9097.call(null,cljs.core.chunk_rest.call(null,s__9098__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9100),null);
}
} else
{var vec__9104 = cljs.core.first.call(null,s__9098__$2);var button_text = cljs.core.nth.call(null,vec__9104,0,null);var fun = cljs.core.nth.call(null,vec__9104,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)),iter__9097.call(null,cljs.core.rest.call(null,s__9098__$2)));
}
} else
{return null;
}
break;
}
});})(i__9079,option_group,c__7079__auto__,size__7080__auto__,b__9080,s__9078__$2,temp__4092__auto__))
,null,null));
});})(i__9079,option_group,c__7079__auto__,size__7080__auto__,b__9080,s__9078__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null));
{
var G__9191 = (i__9079 + 1);
i__9079 = G__9191;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9080),iter__9077.call(null,cljs.core.chunk_rest.call(null,s__9078__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9080),null);
}
} else
{var option_group = cljs.core.first.call(null,s__9078__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (option_group,s__9078__$2,temp__4092__auto__){
return (function iter__9105(s__9106){return (new cljs.core.LazySeq(null,((function (option_group,s__9078__$2,temp__4092__auto__){
return (function (){var s__9106__$1 = s__9106;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9106__$1);if(temp__4092__auto____$1)
{var s__9106__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9106__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9106__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9108 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9107 = 0;while(true){
if((i__9107 < size__7080__auto__))
{var vec__9111 = cljs.core._nth.call(null,c__7079__auto__,i__9107);var button_text = cljs.core.nth.call(null,vec__9111,0,null);var fun = cljs.core.nth.call(null,vec__9111,1,null);cljs.core.chunk_append.call(null,b__9108,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)));
{
var G__9192 = (i__9107 + 1);
i__9107 = G__9192;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9108),iter__9105.call(null,cljs.core.chunk_rest.call(null,s__9106__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9108),null);
}
} else
{var vec__9112 = cljs.core.first.call(null,s__9106__$2);var button_text = cljs.core.nth.call(null,vec__9112,0,null);var fun = cljs.core.nth.call(null,vec__9112,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.common_ui.button.call(null,button_text,lt.plugins.gitlight.status.ui.update_status_after.call(null,fun)),iter__9105.call(null,cljs.core.rest.call(null,s__9106__$2)));
}
} else
{return null;
}
break;
}
});})(option_group,s__9078__$2,temp__4092__auto__))
,null,null));
});})(option_group,s__9078__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null),iter__9077.call(null,cljs.core.rest.call(null,s__9078__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,lt.plugins.gitlight.status.ui.repo_ops);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.common_ui.button.call(null,"refresh",lt.plugins.gitlight.status.ui.update_status_after.call(null,(function (){return cljs.core.List.EMPTY;
}))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__9113(s__9114){return (new cljs.core.LazySeq(null,(function (){var s__9114__$1 = s__9114;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9114__$1);if(temp__4092__auto__)
{var s__9114__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9114__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9114__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9116 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9115 = 0;while(true){
if((i__9115 < size__7080__auto__))
{var vec__9119 = cljs.core._nth.call(null,c__7079__auto__,i__9115);var g = cljs.core.nth.call(null,vec__9119,0,null);var fs = cljs.core.nth.call(null,vec__9119,1,null);cljs.core.chunk_append.call(null,b__9116,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__9193 = (i__9115 + 1);
i__9115 = G__9193;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9116),iter__9113.call(null,cljs.core.chunk_rest.call(null,s__9114__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9116),null);
}
} else
{var vec__9120 = cljs.core.first.call(null,s__9114__$2);var g = cljs.core.nth.call(null,vec__9120,0,null);var fs = cljs.core.nth.call(null,vec__9120,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__9113.call(null,cljs.core.rest.call(null,s__9114__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,this$);
})()], null)], null));var seq__9121_9194 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9122_9195 = null;var count__9123_9196 = 0;var i__9124_9197 = 0;while(true){
if((i__9124_9197 < count__9123_9196))
{var vec__9125_9198 = cljs.core._nth.call(null,chunk__9122_9195,i__9124_9197);var ev__7756__auto___9199 = cljs.core.nth.call(null,vec__9125_9198,0,null);var func__7757__auto___9200 = cljs.core.nth.call(null,vec__9125_9198,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9199,func__7757__auto___9200);
{
var G__9201 = seq__9121_9194;
var G__9202 = chunk__9122_9195;
var G__9203 = count__9123_9196;
var G__9204 = (i__9124_9197 + 1);
seq__9121_9194 = G__9201;
chunk__9122_9195 = G__9202;
count__9123_9196 = G__9203;
i__9124_9197 = G__9204;
continue;
}
} else
{var temp__4092__auto___9205 = cljs.core.seq.call(null,seq__9121_9194);if(temp__4092__auto___9205)
{var seq__9121_9206__$1 = temp__4092__auto___9205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9121_9206__$1))
{var c__7112__auto___9207 = cljs.core.chunk_first.call(null,seq__9121_9206__$1);{
var G__9208 = cljs.core.chunk_rest.call(null,seq__9121_9206__$1);
var G__9209 = c__7112__auto___9207;
var G__9210 = cljs.core.count.call(null,c__7112__auto___9207);
var G__9211 = 0;
seq__9121_9194 = G__9208;
chunk__9122_9195 = G__9209;
count__9123_9196 = G__9210;
i__9124_9197 = G__9211;
continue;
}
} else
{var vec__9126_9212 = cljs.core.first.call(null,seq__9121_9206__$1);var ev__7756__auto___9213 = cljs.core.nth.call(null,vec__9126_9212,0,null);var func__7757__auto___9214 = cljs.core.nth.call(null,vec__9126_9212,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9213,func__7757__auto___9214);
{
var G__9215 = cljs.core.next.call(null,seq__9121_9206__$1);
var G__9216 = null;
var G__9217 = 0;
var G__9218 = 0;
seq__9121_9194 = G__9215;
chunk__9122_9195 = G__9216;
count__9123_9196 = G__9217;
i__9124_9197 = G__9218;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__9133_9219 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9134_9220 = null;var count__9135_9221 = 0;var i__9136_9222 = 0;while(true){
if((i__9136_9222 < count__9135_9221))
{var vec__9137_9223 = cljs.core._nth.call(null,chunk__9134_9220,i__9136_9222);var ev__7756__auto___9224 = cljs.core.nth.call(null,vec__9137_9223,0,null);var func__7757__auto___9225 = cljs.core.nth.call(null,vec__9137_9223,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9224,func__7757__auto___9225);
{
var G__9226 = seq__9133_9219;
var G__9227 = chunk__9134_9220;
var G__9228 = count__9135_9221;
var G__9229 = (i__9136_9222 + 1);
seq__9133_9219 = G__9226;
chunk__9134_9220 = G__9227;
count__9135_9221 = G__9228;
i__9136_9222 = G__9229;
continue;
}
} else
{var temp__4092__auto___9230 = cljs.core.seq.call(null,seq__9133_9219);if(temp__4092__auto___9230)
{var seq__9133_9231__$1 = temp__4092__auto___9230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9133_9231__$1))
{var c__7112__auto___9232 = cljs.core.chunk_first.call(null,seq__9133_9231__$1);{
var G__9233 = cljs.core.chunk_rest.call(null,seq__9133_9231__$1);
var G__9234 = c__7112__auto___9232;
var G__9235 = cljs.core.count.call(null,c__7112__auto___9232);
var G__9236 = 0;
seq__9133_9219 = G__9233;
chunk__9134_9220 = G__9234;
count__9135_9221 = G__9235;
i__9136_9222 = G__9236;
continue;
}
} else
{var vec__9138_9237 = cljs.core.first.call(null,seq__9133_9231__$1);var ev__7756__auto___9238 = cljs.core.nth.call(null,vec__9138_9237,0,null);var func__7757__auto___9239 = cljs.core.nth.call(null,vec__9138_9237,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9238,func__7757__auto___9239);
{
var G__9240 = cljs.core.next.call(null,seq__9133_9231__$1);
var G__9241 = null;
var G__9242 = 0;
var G__9243 = 0;
seq__9133_9219 = G__9240;
chunk__9134_9220 = G__9241;
count__9135_9221 = G__9242;
i__9136_9222 = G__9243;
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
lt.plugins.gitlight.status.ui.__BEH__update = (function __BEH__update(obj,status,branch){var bar_dom = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));lt.plugins.gitlight.common_ui.dom_truncate.call(null,bar_dom);
lt.util.dom.append.call(null,bar_dom,lt.plugins.gitlight.status.ui.status_ui.call(null,status,branch,lt.plugins.gitlight.git.get_git_root.call(null)));
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