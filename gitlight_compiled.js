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
lt.plugins.gitlight.common_ui.button = (function button(n,f,fun){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8067_8122 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return fun.call(null,n,f);
});})(e__7755__auto__))
], null)));var chunk__8068_8123 = null;var count__8069_8124 = 0;var i__8070_8125 = 0;while(true){
if((i__8070_8125 < count__8069_8124))
{var vec__8071_8126 = cljs.core._nth.call(null,chunk__8068_8123,i__8070_8125);var ev__7756__auto___8127 = cljs.core.nth.call(null,vec__8071_8126,0,null);var func__7757__auto___8128 = cljs.core.nth.call(null,vec__8071_8126,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8127,func__7757__auto___8128);
{
var G__8129 = seq__8067_8122;
var G__8130 = chunk__8068_8123;
var G__8131 = count__8069_8124;
var G__8132 = (i__8070_8125 + 1);
seq__8067_8122 = G__8129;
chunk__8068_8123 = G__8130;
count__8069_8124 = G__8131;
i__8070_8125 = G__8132;
continue;
}
} else
{var temp__4092__auto___8133 = cljs.core.seq.call(null,seq__8067_8122);if(temp__4092__auto___8133)
{var seq__8067_8134__$1 = temp__4092__auto___8133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8067_8134__$1))
{var c__7112__auto___8135 = cljs.core.chunk_first.call(null,seq__8067_8134__$1);{
var G__8136 = cljs.core.chunk_rest.call(null,seq__8067_8134__$1);
var G__8137 = c__7112__auto___8135;
var G__8138 = cljs.core.count.call(null,c__7112__auto___8135);
var G__8139 = 0;
seq__8067_8122 = G__8136;
chunk__8068_8123 = G__8137;
count__8069_8124 = G__8138;
i__8070_8125 = G__8139;
continue;
}
} else
{var vec__8072_8140 = cljs.core.first.call(null,seq__8067_8134__$1);var ev__7756__auto___8141 = cljs.core.nth.call(null,vec__8072_8140,0,null);var func__7757__auto___8142 = cljs.core.nth.call(null,vec__8072_8140,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8141,func__7757__auto___8142);
{
var G__8143 = cljs.core.next.call(null,seq__8067_8134__$1);
var G__8144 = null;
var G__8145 = 0;
var G__8146 = 0;
seq__8067_8122 = G__8143;
chunk__8068_8123 = G__8144;
count__8069_8124 = G__8145;
i__8070_8125 = G__8146;
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
lt.plugins.gitlight.common_ui.classy_button = (function classy_button(cls,n,f,fun){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8079_8147 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return fun.call(null,n,f);
});})(e__7755__auto__))
], null)));var chunk__8080_8148 = null;var count__8081_8149 = 0;var i__8082_8150 = 0;while(true){
if((i__8082_8150 < count__8081_8149))
{var vec__8083_8151 = cljs.core._nth.call(null,chunk__8080_8148,i__8082_8150);var ev__7756__auto___8152 = cljs.core.nth.call(null,vec__8083_8151,0,null);var func__7757__auto___8153 = cljs.core.nth.call(null,vec__8083_8151,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8152,func__7757__auto___8153);
{
var G__8154 = seq__8079_8147;
var G__8155 = chunk__8080_8148;
var G__8156 = count__8081_8149;
var G__8157 = (i__8082_8150 + 1);
seq__8079_8147 = G__8154;
chunk__8080_8148 = G__8155;
count__8081_8149 = G__8156;
i__8082_8150 = G__8157;
continue;
}
} else
{var temp__4092__auto___8158 = cljs.core.seq.call(null,seq__8079_8147);if(temp__4092__auto___8158)
{var seq__8079_8159__$1 = temp__4092__auto___8158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8079_8159__$1))
{var c__7112__auto___8160 = cljs.core.chunk_first.call(null,seq__8079_8159__$1);{
var G__8161 = cljs.core.chunk_rest.call(null,seq__8079_8159__$1);
var G__8162 = c__7112__auto___8160;
var G__8163 = cljs.core.count.call(null,c__7112__auto___8160);
var G__8164 = 0;
seq__8079_8147 = G__8161;
chunk__8080_8148 = G__8162;
count__8081_8149 = G__8163;
i__8082_8150 = G__8164;
continue;
}
} else
{var vec__8084_8165 = cljs.core.first.call(null,seq__8079_8159__$1);var ev__7756__auto___8166 = cljs.core.nth.call(null,vec__8084_8165,0,null);var func__7757__auto___8167 = cljs.core.nth.call(null,vec__8084_8165,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8166,func__7757__auto___8167);
{
var G__8168 = cljs.core.next.call(null,seq__8079_8159__$1);
var G__8169 = null;
var G__8170 = 0;
var G__8171 = 0;
seq__8079_8147 = G__8168;
chunk__8080_8148 = G__8169;
count__8081_8149 = G__8170;
i__8082_8150 = G__8171;
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
lt.plugins.gitlight.common_ui.text_input = (function text_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"message"], null)], null));var seq__8091_8172 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7755__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7755__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
], null)));var chunk__8092_8173 = null;var count__8093_8174 = 0;var i__8094_8175 = 0;while(true){
if((i__8094_8175 < count__8093_8174))
{var vec__8095_8176 = cljs.core._nth.call(null,chunk__8092_8173,i__8094_8175);var ev__7756__auto___8177 = cljs.core.nth.call(null,vec__8095_8176,0,null);var func__7757__auto___8178 = cljs.core.nth.call(null,vec__8095_8176,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8177,func__7757__auto___8178);
{
var G__8179 = seq__8091_8172;
var G__8180 = chunk__8092_8173;
var G__8181 = count__8093_8174;
var G__8182 = (i__8094_8175 + 1);
seq__8091_8172 = G__8179;
chunk__8092_8173 = G__8180;
count__8093_8174 = G__8181;
i__8094_8175 = G__8182;
continue;
}
} else
{var temp__4092__auto___8183 = cljs.core.seq.call(null,seq__8091_8172);if(temp__4092__auto___8183)
{var seq__8091_8184__$1 = temp__4092__auto___8183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8091_8184__$1))
{var c__7112__auto___8185 = cljs.core.chunk_first.call(null,seq__8091_8184__$1);{
var G__8186 = cljs.core.chunk_rest.call(null,seq__8091_8184__$1);
var G__8187 = c__7112__auto___8185;
var G__8188 = cljs.core.count.call(null,c__7112__auto___8185);
var G__8189 = 0;
seq__8091_8172 = G__8186;
chunk__8092_8173 = G__8187;
count__8093_8174 = G__8188;
i__8094_8175 = G__8189;
continue;
}
} else
{var vec__8096_8190 = cljs.core.first.call(null,seq__8091_8184__$1);var ev__7756__auto___8191 = cljs.core.nth.call(null,vec__8096_8190,0,null);var func__7757__auto___8192 = cljs.core.nth.call(null,vec__8096_8190,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8191,func__7757__auto___8192);
{
var G__8193 = cljs.core.next.call(null,seq__8091_8184__$1);
var G__8194 = null;
var G__8195 = 0;
var G__8196 = 0;
seq__8091_8172 = G__8193;
chunk__8092_8173 = G__8194;
count__8093_8174 = G__8195;
i__8094_8175 = G__8196;
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
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.map.call(null,(function (p1__8097_SHARP_){return cljs.core.nth.call(null,p1__8097_SHARP_,2);
}),results)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","merge-mult-results","lt.plugins.gitlight.common-ui/merge-mult-results",4752627904),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__merge_mult_results,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mult-outs","mult-outs",4047322324)], null));
lt.plugins.gitlight.common_ui.not_a_thing = (function not_a_thing(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"nothing"], null));var seq__8104_8197 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8105_8198 = null;var count__8106_8199 = 0;var i__8107_8200 = 0;while(true){
if((i__8107_8200 < count__8106_8199))
{var vec__8108_8201 = cljs.core._nth.call(null,chunk__8105_8198,i__8107_8200);var ev__7756__auto___8202 = cljs.core.nth.call(null,vec__8108_8201,0,null);var func__7757__auto___8203 = cljs.core.nth.call(null,vec__8108_8201,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8202,func__7757__auto___8203);
{
var G__8204 = seq__8104_8197;
var G__8205 = chunk__8105_8198;
var G__8206 = count__8106_8199;
var G__8207 = (i__8107_8200 + 1);
seq__8104_8197 = G__8204;
chunk__8105_8198 = G__8205;
count__8106_8199 = G__8206;
i__8107_8200 = G__8207;
continue;
}
} else
{var temp__4092__auto___8208 = cljs.core.seq.call(null,seq__8104_8197);if(temp__4092__auto___8208)
{var seq__8104_8209__$1 = temp__4092__auto___8208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8104_8209__$1))
{var c__7112__auto___8210 = cljs.core.chunk_first.call(null,seq__8104_8209__$1);{
var G__8211 = cljs.core.chunk_rest.call(null,seq__8104_8209__$1);
var G__8212 = c__7112__auto___8210;
var G__8213 = cljs.core.count.call(null,c__7112__auto___8210);
var G__8214 = 0;
seq__8104_8197 = G__8211;
chunk__8105_8198 = G__8212;
count__8106_8199 = G__8213;
i__8107_8200 = G__8214;
continue;
}
} else
{var vec__8109_8215 = cljs.core.first.call(null,seq__8104_8209__$1);var ev__7756__auto___8216 = cljs.core.nth.call(null,vec__8109_8215,0,null);var func__7757__auto___8217 = cljs.core.nth.call(null,vec__8109_8215,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8216,func__7757__auto___8217);
{
var G__8218 = cljs.core.next.call(null,seq__8104_8209__$1);
var G__8219 = null;
var G__8220 = 0;
var G__8221 = 0;
seq__8104_8197 = G__8218;
chunk__8105_8198 = G__8219;
count__8106_8199 = G__8220;
i__8107_8200 = G__8221;
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
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,ui_fun){var vec__8111 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__8111,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__8111,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__8111,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__8111,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478),new cljs.core.Keyword(null,"gitlight-log-history","gitlight-log-history",2628910772)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"result","result",4374444943),null,new cljs.core.Keyword(null,"results","results",2111450984),null,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword("lt.plugins.gitlight.common-ui","refresh-tab","lt.plugins.gitlight.common-ui/refresh-tab",1790366357),new cljs.core.Keyword("lt.plugins.gitlight.common-ui","merge-mult-results","lt.plugins.gitlight.common-ui/merge-mult-results",4752627904),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__8111,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return lt.plugins.gitlight.common_ui.not_a_thing.call(null);
});})(vec__8111,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);return lt.object.create.call(null,tab_obj);
});
lt.plugins.gitlight.common_ui.make_button = (function make_button(n,f,fun){return lt.plugins.gitlight.common_ui.button.call(null,n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.make_classy_button = (function make_classy_button(n,f,fun){return lt.plugins.gitlight.common_ui.classy_button.call(null,[cljs.core.str(n)].join(''),n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8222 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8222))
{var ts_8223 = temp__4092__auto___8222;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8223))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8223);
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
lt.plugins.gitlight.history.row = (function row(p__9713){var vec__9715 = p__9713;var success_or_error = cljs.core.nth.call(null,vec__9715,0,null);var command = cljs.core.nth.call(null,vec__9715,1,null);var date = cljs.core.nth.call(null,vec__9715,2,null);var stdout = cljs.core.nth.call(null,vec__9715,3,null);var stderr = cljs.core.nth.call(null,vec__9715,4,null);if(!((success_or_error == null)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,success_or_error)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),command], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),date,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),cljs.core.name.call(null,success_or_error)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),"disabled"], null),stdout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),"disabled"], null),stderr], null)], null)], null);
} else
{return null;
}
});
lt.plugins.gitlight.history.spacer = (function spacer(txt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.spacer","tr.spacer",4188737806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),txt], null)], null)], null);
});
lt.plugins.gitlight.history.parse_dump = (function parse_dump(dump){return clojure.string.join.call(null,"\n",cljs.core.map.call(null,cljs.core.str,dump));
});
lt.plugins.gitlight.history.landfill_of_history = (function landfill_of_history(action,dump){var landfill = lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-separator","line-separator",3195996094),"\n",new cljs.core.Keyword(null,"name","name",1017277949),"Landfill_of_History",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.plaintext","editor.plaintext",4474629672),new cljs.core.Keyword(null,"editor.transient","editor.transient",3554141883)], null)], null));lt.objs.tabs.add_or_focus_BANG_.call(null,landfill);
return lt.objs.editor.set_val.call(null,landfill,dump);
});
lt.plugins.gitlight.history.get_first = (function get_first(needle,haystack){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__9716_SHARP_){return cljs.core._EQ_.call(null,needle,cljs.core.first.call(null,p1__9716_SHARP_));
}),haystack));
});
lt.plugins.gitlight.history.history_header = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stdout"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stderr"], null)], null);
lt.plugins.gitlight.history.make_history_gui = (function make_history_gui(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var history = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var dump_button = lt.plugins.gitlight.common_ui.make_button.call(null,"dump history",lt.plugins.gitlight.history.parse_dump.call(null,cljs.core.deref.call(null,history)),lt.plugins.gitlight.history.landfill_of_history);var last_ok = lt.plugins.gitlight.history.get_first.call(null,new cljs.core.Keyword(null,"success","success",3441701749),cljs.core.deref.call(null,history));var last_fail = lt.plugins.gitlight.history.get_first.call(null,new cljs.core.Keyword(null,"error","error",1110689146),cljs.core.deref.call(null,history));var history_rows = cljs.core.map.call(null,lt.plugins.gitlight.history.row,cljs.core.deref.call(null,history));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-command-history","div.gitlight-command-history",2639214328),dump_button,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),lt.plugins.gitlight.history.spacer.call(null,"last ok: "),lt.plugins.gitlight.history.row.call(null,last_ok),lt.plugins.gitlight.history.spacer.call(null,"last failed: "),lt.plugins.gitlight.history.row.call(null,last_fail),lt.plugins.gitlight.history.spacer.call(null,"history: "),lt.plugins.gitlight.history.history_header,history_rows], null)], null);
})());var seq__9723_9729 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9724_9730 = null;var count__9725_9731 = 0;var i__9726_9732 = 0;while(true){
if((i__9726_9732 < count__9725_9731))
{var vec__9727_9733 = cljs.core._nth.call(null,chunk__9724_9730,i__9726_9732);var ev__7756__auto___9734 = cljs.core.nth.call(null,vec__9727_9733,0,null);var func__7757__auto___9735 = cljs.core.nth.call(null,vec__9727_9733,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9734,func__7757__auto___9735);
{
var G__9736 = seq__9723_9729;
var G__9737 = chunk__9724_9730;
var G__9738 = count__9725_9731;
var G__9739 = (i__9726_9732 + 1);
seq__9723_9729 = G__9736;
chunk__9724_9730 = G__9737;
count__9725_9731 = G__9738;
i__9726_9732 = G__9739;
continue;
}
} else
{var temp__4092__auto___9740 = cljs.core.seq.call(null,seq__9723_9729);if(temp__4092__auto___9740)
{var seq__9723_9741__$1 = temp__4092__auto___9740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9723_9741__$1))
{var c__7112__auto___9742 = cljs.core.chunk_first.call(null,seq__9723_9741__$1);{
var G__9743 = cljs.core.chunk_rest.call(null,seq__9723_9741__$1);
var G__9744 = c__7112__auto___9742;
var G__9745 = cljs.core.count.call(null,c__7112__auto___9742);
var G__9746 = 0;
seq__9723_9729 = G__9743;
chunk__9724_9730 = G__9744;
count__9725_9731 = G__9745;
i__9726_9732 = G__9746;
continue;
}
} else
{var vec__9728_9747 = cljs.core.first.call(null,seq__9723_9741__$1);var ev__7756__auto___9748 = cljs.core.nth.call(null,vec__9728_9747,0,null);var func__7757__auto___9749 = cljs.core.nth.call(null,vec__9728_9747,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9748,func__7757__auto___9749);
{
var G__9750 = cljs.core.next.call(null,seq__9723_9741__$1);
var G__9751 = null;
var G__9752 = 0;
var G__9753 = 0;
seq__9723_9729 = G__9750;
chunk__9724_9730 = G__9751;
count__9725_9731 = G__9752;
i__9726_9732 = G__9753;
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
lt.plugins.gitlight.gutter.make_gutter_marker = (function make_gutter_marker(this$,on_click,style_content,content){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gutter-content","div.gutter-content",4072529974),style_content.call(null,content)], null));var seq__9680_9687 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return on_click.call(null,content);
});})(e__7755__auto__))
], null)));var chunk__9681_9688 = null;var count__9682_9689 = 0;var i__9683_9690 = 0;while(true){
if((i__9683_9690 < count__9682_9689))
{var vec__9684_9691 = cljs.core._nth.call(null,chunk__9681_9688,i__9683_9690);var ev__7756__auto___9692 = cljs.core.nth.call(null,vec__9684_9691,0,null);var func__7757__auto___9693 = cljs.core.nth.call(null,vec__9684_9691,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9692,func__7757__auto___9693);
{
var G__9694 = seq__9680_9687;
var G__9695 = chunk__9681_9688;
var G__9696 = count__9682_9689;
var G__9697 = (i__9683_9690 + 1);
seq__9680_9687 = G__9694;
chunk__9681_9688 = G__9695;
count__9682_9689 = G__9696;
i__9683_9690 = G__9697;
continue;
}
} else
{var temp__4092__auto___9698 = cljs.core.seq.call(null,seq__9680_9687);if(temp__4092__auto___9698)
{var seq__9680_9699__$1 = temp__4092__auto___9698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9680_9699__$1))
{var c__7112__auto___9700 = cljs.core.chunk_first.call(null,seq__9680_9699__$1);{
var G__9701 = cljs.core.chunk_rest.call(null,seq__9680_9699__$1);
var G__9702 = c__7112__auto___9700;
var G__9703 = cljs.core.count.call(null,c__7112__auto___9700);
var G__9704 = 0;
seq__9680_9687 = G__9701;
chunk__9681_9688 = G__9702;
count__9682_9689 = G__9703;
i__9683_9690 = G__9704;
continue;
}
} else
{var vec__9685_9705 = cljs.core.first.call(null,seq__9680_9699__$1);var ev__7756__auto___9706 = cljs.core.nth.call(null,vec__9685_9705,0,null);var func__7757__auto___9707 = cljs.core.nth.call(null,vec__9685_9705,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9706,func__7757__auto___9707);
{
var G__9708 = cljs.core.next.call(null,seq__9680_9699__$1);
var G__9709 = null;
var G__9710 = 0;
var G__9711 = 0;
seq__9680_9687 = G__9708;
chunk__9681_9688 = G__9709;
count__9682_9689 = G__9710;
i__9683_9690 = G__9711;
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
return (function (p1__9686_SHARP_){return lt.plugins.gitlight.gutter.make_gutter_marker.call(null,this$,on_click,style_content,p1__9686_SHARP_);
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
var gutter_9712 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["gitlight-gutter",null], null), null),gutter_9712))], null));
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
lt.plugins.gitlight.diff.click_run_function_update = (function click_run_function_update(fun,up,x,y){fun.call(null);
return up.call(null);
});
lt.plugins.gitlight.diff.context = cljs.core.atom.call(null,3);
lt.plugins.gitlight.diff.last_filename = cljs.core.atom.call(null,null);
lt.plugins.gitlight.diff.last_cached = cljs.core.atom.call(null,false);
lt.plugins.gitlight.diff.git_diff_update_fun = (function git_diff_update_fun(){return lt.plugins.gitlight.diff.git_diff.call(null,cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename),cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached));
});
lt.plugins.gitlight.diff.make_context = (function make_context(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context","div.context",3533479108),lt.plugins.gitlight.common_ui.make_button.call(null,"-","-",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.dec);
}),lt.plugins.gitlight.diff.git_diff_update_fun)),[cljs.core.str("context: "),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join(''),lt.plugins.gitlight.common_ui.make_button.call(null,"+","+",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.inc);
}),lt.plugins.gitlight.diff.git_diff_update_fun))], null);
});
lt.plugins.gitlight.diff.make_more_context = (function make_more_context(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.more-context","div.more-context",3304815846),lt.plugins.gitlight.common_ui.make_button.call(null,"whole file","whole file",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,100000);
}),lt.plugins.gitlight.diff.git_diff_update_fun)),lt.plugins.gitlight.common_ui.make_button.call(null,"reset","reset",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,3);
}),lt.plugins.gitlight.diff.git_diff_update_fun))], null);
});
lt.plugins.gitlight.diff.cached_toggle_button = (function cached_toggle_button(){var cached_txt = (cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached))?"unstaged changes":"staged changes");return lt.plugins.gitlight.common_ui.make_button.call(null,cached_txt,cached_txt,((function (cached_txt){
return (function (){cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.last_cached,cljs.core.not);
return lt.plugins.gitlight.diff.git_diff_update_fun.call(null);
});})(cached_txt))
);
});
lt.plugins.gitlight.diff.commit_input = (function commit_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title","input.title",3943357094),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"size","size",1017434995),81,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit title"], null)], null));var seq__8243_9510 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8244_9511 = null;var count__8245_9512 = 0;var i__8246_9513 = 0;while(true){
if((i__8246_9513 < count__8245_9512))
{var vec__8247_9514 = cljs.core._nth.call(null,chunk__8244_9511,i__8246_9513);var ev__7756__auto___9515 = cljs.core.nth.call(null,vec__8247_9514,0,null);var func__7757__auto___9516 = cljs.core.nth.call(null,vec__8247_9514,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9515,func__7757__auto___9516);
{
var G__9517 = seq__8243_9510;
var G__9518 = chunk__8244_9511;
var G__9519 = count__8245_9512;
var G__9520 = (i__8246_9513 + 1);
seq__8243_9510 = G__9517;
chunk__8244_9511 = G__9518;
count__8245_9512 = G__9519;
i__8246_9513 = G__9520;
continue;
}
} else
{var temp__4092__auto___9521 = cljs.core.seq.call(null,seq__8243_9510);if(temp__4092__auto___9521)
{var seq__8243_9522__$1 = temp__4092__auto___9521;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8243_9522__$1))
{var c__7112__auto___9523 = cljs.core.chunk_first.call(null,seq__8243_9522__$1);{
var G__9524 = cljs.core.chunk_rest.call(null,seq__8243_9522__$1);
var G__9525 = c__7112__auto___9523;
var G__9526 = cljs.core.count.call(null,c__7112__auto___9523);
var G__9527 = 0;
seq__8243_9510 = G__9524;
chunk__8244_9511 = G__9525;
count__8245_9512 = G__9526;
i__8246_9513 = G__9527;
continue;
}
} else
{var vec__8248_9528 = cljs.core.first.call(null,seq__8243_9522__$1);var ev__7756__auto___9529 = cljs.core.nth.call(null,vec__8248_9528,0,null);var func__7757__auto___9530 = cljs.core.nth.call(null,vec__8248_9528,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9529,func__7757__auto___9530);
{
var G__9531 = cljs.core.next.call(null,seq__8243_9522__$1);
var G__9532 = null;
var G__9533 = 0;
var G__9534 = 0;
seq__8243_9510 = G__9531;
chunk__8244_9511 = G__9532;
count__8245_9512 = G__9533;
i__8246_9513 = G__9534;
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
lt.plugins.gitlight.diff.commit_body = (function commit_body(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.body","textarea.body",3433374536),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit body",new cljs.core.Keyword(null,"cols","cols",1016963685),81,new cljs.core.Keyword(null,"rows","rows",1017410891),10], null)], null));var seq__8255_9535 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8256_9536 = null;var count__8257_9537 = 0;var i__8258_9538 = 0;while(true){
if((i__8258_9538 < count__8257_9537))
{var vec__8259_9539 = cljs.core._nth.call(null,chunk__8256_9536,i__8258_9538);var ev__7756__auto___9540 = cljs.core.nth.call(null,vec__8259_9539,0,null);var func__7757__auto___9541 = cljs.core.nth.call(null,vec__8259_9539,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9540,func__7757__auto___9541);
{
var G__9542 = seq__8255_9535;
var G__9543 = chunk__8256_9536;
var G__9544 = count__8257_9537;
var G__9545 = (i__8258_9538 + 1);
seq__8255_9535 = G__9542;
chunk__8256_9536 = G__9543;
count__8257_9537 = G__9544;
i__8258_9538 = G__9545;
continue;
}
} else
{var temp__4092__auto___9546 = cljs.core.seq.call(null,seq__8255_9535);if(temp__4092__auto___9546)
{var seq__8255_9547__$1 = temp__4092__auto___9546;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8255_9547__$1))
{var c__7112__auto___9548 = cljs.core.chunk_first.call(null,seq__8255_9547__$1);{
var G__9549 = cljs.core.chunk_rest.call(null,seq__8255_9547__$1);
var G__9550 = c__7112__auto___9548;
var G__9551 = cljs.core.count.call(null,c__7112__auto___9548);
var G__9552 = 0;
seq__8255_9535 = G__9549;
chunk__8256_9536 = G__9550;
count__8257_9537 = G__9551;
i__8258_9538 = G__9552;
continue;
}
} else
{var vec__8260_9553 = cljs.core.first.call(null,seq__8255_9547__$1);var ev__7756__auto___9554 = cljs.core.nth.call(null,vec__8260_9553,0,null);var func__7757__auto___9555 = cljs.core.nth.call(null,vec__8260_9553,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9554,func__7757__auto___9555);
{
var G__9556 = cljs.core.next.call(null,seq__8255_9547__$1);
var G__9557 = null;
var G__9558 = 0;
var G__9559 = 0;
seq__8255_9535 = G__9556;
chunk__8256_9536 = G__9557;
count__8257_9537 = G__9558;
i__8258_9538 = G__9559;
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
lt.plugins.gitlight.diff.make_commit_form = (function make_commit_form(){var title = lt.plugins.gitlight.diff.commit_input.call(null);var body = lt.plugins.gitlight.diff.commit_body.call(null);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.commit-form","div.commit-form",2747534639),title,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.common_ui.make_button.call(null,"submit","submit",((function (title,body){
return (function (x,y){lt.plugins.gitlight.git.git_commit.call(null,lt.util.dom.val.call(null,title),lt.util.dom.val.call(null,body));
return lt.plugins.gitlight.diff.git_diff_update_fun.call(null);
});})(title,body))
)], null);
});
lt.plugins.gitlight.diff.diff_panel = (function diff_panel(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var output = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-diff","div.gitlight-diff",3415869571),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"diff: ",((cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename)))?"whole repo":cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename))], null),lt.plugins.gitlight.diff.make_context.call(null),lt.plugins.gitlight.diff.make_more_context.call(null),lt.plugins.gitlight.diff.cached_toggle_button.call(null),(cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached))?lt.plugins.gitlight.diff.make_commit_form.call(null):null),(function (){var iter__7081__auto__ = ((function (output){
return (function iter__8863(s__8864){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__8864__$1 = s__8864;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8864__$1);if(temp__4092__auto__)
{var s__8864__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8864__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8864__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8866 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8865 = 0;while(true){
if((i__8865 < size__7080__auto__))
{var file = cljs.core._nth.call(null,c__7079__auto__,i__8865);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);cljs.core.chunk_append.call(null,b__8866,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__8865,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function iter__9163(s__9164){return (new cljs.core.LazySeq(null,((function (i__8865,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9164__$1 = s__9164;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9164__$1);if(temp__4092__auto____$1)
{var s__9164__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9164__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9164__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9166 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9165 = 0;while(true){
if((i__9165 < size__7080__auto____$1))
{var changes_group = cljs.core._nth.call(null,c__7079__auto____$1,i__9165);cljs.core.chunk_append.call(null,b__9166,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__9165,i__8865,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function iter__9239(s__9240){return (new cljs.core.LazySeq(null,((function (i__9165,i__8865,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9240__$1 = s__9240;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9240__$1);if(temp__4092__auto____$2)
{var s__9240__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9240__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9240__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9242 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9241 = 0;while(true){
if((i__9241 < size__7080__auto____$2))
{var line_group = cljs.core._nth.call(null,c__7079__auto____$2,i__9241);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9242,(function (){var iter__7081__auto__ = ((function (i__9241,i__9165,i__8865,columned,c,columns,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9242,s__9240__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function iter__9259(s__9260){return (new cljs.core.LazySeq(null,((function (i__9241,i__9165,i__8865,columned,c,columns,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9242,s__9240__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9260__$1 = s__9260;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9260__$1);if(temp__4092__auto____$3)
{var s__9260__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9260__$2))
{var c__7079__auto____$3 = cljs.core.chunk_first.call(null,s__9260__$2);var size__7080__auto____$3 = cljs.core.count.call(null,c__7079__auto____$3);var b__9262 = cljs.core.chunk_buffer.call(null,size__7080__auto____$3);if((function (){var i__9261 = 0;while(true){
if((i__9261 < size__7080__auto____$3))
{var vec__9265 = cljs.core._nth.call(null,c__7079__auto____$3,i__9261);var left = cljs.core.nth.call(null,vec__9265,0,null);var right = cljs.core.nth.call(null,vec__9265,1,null);cljs.core.chunk_append.call(null,b__9262,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9560 = (i__9261 + 1);
i__9261 = G__9560;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9262),iter__9259.call(null,cljs.core.chunk_rest.call(null,s__9260__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9262),null);
}
} else
{var vec__9266 = cljs.core.first.call(null,s__9260__$2);var left = cljs.core.nth.call(null,vec__9266,0,null);var right = cljs.core.nth.call(null,vec__9266,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9259.call(null,cljs.core.rest.call(null,s__9260__$2)));
}
} else
{return null;
}
break;
}
});})(i__9241,i__9165,i__8865,columned,c,columns,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9242,s__9240__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(i__9241,i__9165,i__8865,columned,c,columns,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9242,s__9240__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})());
{
var G__9561 = (i__9241 + 1);
i__9241 = G__9561;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9242),iter__9239.call(null,cljs.core.chunk_rest.call(null,s__9240__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9242),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9240__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (i__9165,i__8865,columned,c,columns,line_group,s__9240__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function iter__9267(s__9268){return (new cljs.core.LazySeq(null,((function (i__9165,i__8865,columned,c,columns,line_group,s__9240__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9268__$1 = s__9268;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9268__$1);if(temp__4092__auto____$3)
{var s__9268__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9268__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9268__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9270 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9269 = 0;while(true){
if((i__9269 < size__7080__auto____$2))
{var vec__9273 = cljs.core._nth.call(null,c__7079__auto____$2,i__9269);var left = cljs.core.nth.call(null,vec__9273,0,null);var right = cljs.core.nth.call(null,vec__9273,1,null);cljs.core.chunk_append.call(null,b__9270,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9562 = (i__9269 + 1);
i__9269 = G__9562;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9270),iter__9267.call(null,cljs.core.chunk_rest.call(null,s__9268__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9270),null);
}
} else
{var vec__9274 = cljs.core.first.call(null,s__9268__$2);var left = cljs.core.nth.call(null,vec__9274,0,null);var right = cljs.core.nth.call(null,vec__9274,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9267.call(null,cljs.core.rest.call(null,s__9268__$2)));
}
} else
{return null;
}
break;
}
});})(i__9165,i__8865,columned,c,columns,line_group,s__9240__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(i__9165,i__8865,columned,c,columns,line_group,s__9240__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})(),iter__9239.call(null,cljs.core.rest.call(null,s__9240__$2)));
}
} else
{return null;
}
break;
}
});})(i__9165,i__8865,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(i__9165,i__8865,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9166,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__9563 = (i__9165 + 1);
i__9165 = G__9563;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9166),iter__9163.call(null,cljs.core.chunk_rest.call(null,s__9164__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9166),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9164__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__8865,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function iter__9275(s__9276){return (new cljs.core.LazySeq(null,((function (i__8865,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9276__$1 = s__9276;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9276__$1);if(temp__4092__auto____$2)
{var s__9276__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9276__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9276__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9278 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9277 = 0;while(true){
if((i__9277 < size__7080__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7079__auto____$1,i__9277);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9278,(function (){var iter__7081__auto__ = ((function (i__9277,i__8865,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9278,s__9276__$2,temp__4092__auto____$2,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function iter__9295(s__9296){return (new cljs.core.LazySeq(null,((function (i__9277,i__8865,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9278,s__9276__$2,temp__4092__auto____$2,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9296__$1 = s__9296;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9296__$1);if(temp__4092__auto____$3)
{var s__9296__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9296__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9296__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9298 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9297 = 0;while(true){
if((i__9297 < size__7080__auto____$2))
{var vec__9301 = cljs.core._nth.call(null,c__7079__auto____$2,i__9297);var left = cljs.core.nth.call(null,vec__9301,0,null);var right = cljs.core.nth.call(null,vec__9301,1,null);cljs.core.chunk_append.call(null,b__9298,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9564 = (i__9297 + 1);
i__9297 = G__9564;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9298),iter__9295.call(null,cljs.core.chunk_rest.call(null,s__9296__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9298),null);
}
} else
{var vec__9302 = cljs.core.first.call(null,s__9296__$2);var left = cljs.core.nth.call(null,vec__9302,0,null);var right = cljs.core.nth.call(null,vec__9302,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9295.call(null,cljs.core.rest.call(null,s__9296__$2)));
}
} else
{return null;
}
break;
}
});})(i__9277,i__8865,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9278,s__9276__$2,temp__4092__auto____$2,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(i__9277,i__8865,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9278,s__9276__$2,temp__4092__auto____$2,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})());
{
var G__9565 = (i__9277 + 1);
i__9277 = G__9565;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9278),iter__9275.call(null,cljs.core.chunk_rest.call(null,s__9276__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9278),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9276__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (i__8865,columned,c,columns,line_group,s__9276__$2,temp__4092__auto____$2,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function iter__9303(s__9304){return (new cljs.core.LazySeq(null,((function (i__8865,columned,c,columns,line_group,s__9276__$2,temp__4092__auto____$2,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9304__$1 = s__9304;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9304__$1);if(temp__4092__auto____$3)
{var s__9304__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9304__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9304__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9306 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9305 = 0;while(true){
if((i__9305 < size__7080__auto____$1))
{var vec__9309 = cljs.core._nth.call(null,c__7079__auto____$1,i__9305);var left = cljs.core.nth.call(null,vec__9309,0,null);var right = cljs.core.nth.call(null,vec__9309,1,null);cljs.core.chunk_append.call(null,b__9306,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9566 = (i__9305 + 1);
i__9305 = G__9566;
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
{var vec__9310 = cljs.core.first.call(null,s__9304__$2);var left = cljs.core.nth.call(null,vec__9310,0,null);var right = cljs.core.nth.call(null,vec__9310,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9303.call(null,cljs.core.rest.call(null,s__9304__$2)));
}
} else
{return null;
}
break;
}
});})(i__8865,columned,c,columns,line_group,s__9276__$2,temp__4092__auto____$2,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(i__8865,columned,c,columns,line_group,s__9276__$2,temp__4092__auto____$2,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})(),iter__9275.call(null,cljs.core.rest.call(null,s__9276__$2)));
}
} else
{return null;
}
break;
}
});})(i__8865,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(i__8865,changes_group,s__9164__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9163.call(null,cljs.core.rest.call(null,s__9164__$2)));
}
} else
{return null;
}
break;
}
});})(i__8865,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(i__8865,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8866,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null));
{
var G__9567 = (i__8865 + 1);
i__8865 = G__9567;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8866),iter__8863.call(null,cljs.core.chunk_rest.call(null,s__8864__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8866),null);
}
} else
{var file = cljs.core.first.call(null,s__8864__$2);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function iter__9311(s__9312){return (new cljs.core.LazySeq(null,((function (filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9312__$1 = s__9312;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9312__$1);if(temp__4092__auto____$1)
{var s__9312__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9312__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9312__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9314 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9313 = 0;while(true){
if((i__9313 < size__7080__auto__))
{var changes_group = cljs.core._nth.call(null,c__7079__auto__,i__9313);cljs.core.chunk_append.call(null,b__9314,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__9313,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function iter__9387(s__9388){return (new cljs.core.LazySeq(null,((function (i__9313,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9388__$1 = s__9388;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9388__$1);if(temp__4092__auto____$2)
{var s__9388__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9388__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9388__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9390 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9389 = 0;while(true){
if((i__9389 < size__7080__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7079__auto____$1,i__9389);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9390,(function (){var iter__7081__auto__ = ((function (i__9389,i__9313,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9390,s__9388__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function iter__9407(s__9408){return (new cljs.core.LazySeq(null,((function (i__9389,i__9313,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9390,s__9388__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9408__$1 = s__9408;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9408__$1);if(temp__4092__auto____$3)
{var s__9408__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9408__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9408__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9410 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9409 = 0;while(true){
if((i__9409 < size__7080__auto____$2))
{var vec__9413 = cljs.core._nth.call(null,c__7079__auto____$2,i__9409);var left = cljs.core.nth.call(null,vec__9413,0,null);var right = cljs.core.nth.call(null,vec__9413,1,null);cljs.core.chunk_append.call(null,b__9410,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9568 = (i__9409 + 1);
i__9409 = G__9568;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9410),iter__9407.call(null,cljs.core.chunk_rest.call(null,s__9408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9410),null);
}
} else
{var vec__9414 = cljs.core.first.call(null,s__9408__$2);var left = cljs.core.nth.call(null,vec__9414,0,null);var right = cljs.core.nth.call(null,vec__9414,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9407.call(null,cljs.core.rest.call(null,s__9408__$2)));
}
} else
{return null;
}
break;
}
});})(i__9389,i__9313,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9390,s__9388__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(i__9389,i__9313,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9390,s__9388__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})());
{
var G__9569 = (i__9389 + 1);
i__9389 = G__9569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9390),iter__9387.call(null,cljs.core.chunk_rest.call(null,s__9388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9390),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9388__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (i__9313,columned,c,columns,line_group,s__9388__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function iter__9415(s__9416){return (new cljs.core.LazySeq(null,((function (i__9313,columned,c,columns,line_group,s__9388__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9416__$1 = s__9416;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9416__$1);if(temp__4092__auto____$3)
{var s__9416__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9416__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9416__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9418 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9417 = 0;while(true){
if((i__9417 < size__7080__auto____$1))
{var vec__9421 = cljs.core._nth.call(null,c__7079__auto____$1,i__9417);var left = cljs.core.nth.call(null,vec__9421,0,null);var right = cljs.core.nth.call(null,vec__9421,1,null);cljs.core.chunk_append.call(null,b__9418,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9570 = (i__9417 + 1);
i__9417 = G__9570;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9418),iter__9415.call(null,cljs.core.chunk_rest.call(null,s__9416__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9418),null);
}
} else
{var vec__9422 = cljs.core.first.call(null,s__9416__$2);var left = cljs.core.nth.call(null,vec__9422,0,null);var right = cljs.core.nth.call(null,vec__9422,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9415.call(null,cljs.core.rest.call(null,s__9416__$2)));
}
} else
{return null;
}
break;
}
});})(i__9313,columned,c,columns,line_group,s__9388__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(i__9313,columned,c,columns,line_group,s__9388__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})(),iter__9387.call(null,cljs.core.rest.call(null,s__9388__$2)));
}
} else
{return null;
}
break;
}
});})(i__9313,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(i__9313,changes_group,c__7079__auto__,size__7080__auto__,b__9314,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__9571 = (i__9313 + 1);
i__9313 = G__9571;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9314),iter__9311.call(null,cljs.core.chunk_rest.call(null,s__9312__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9314),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9312__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function iter__9423(s__9424){return (new cljs.core.LazySeq(null,((function (changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9424__$1 = s__9424;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9424__$1);if(temp__4092__auto____$2)
{var s__9424__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9424__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9424__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9426 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9425 = 0;while(true){
if((i__9425 < size__7080__auto__))
{var line_group = cljs.core._nth.call(null,c__7079__auto__,i__9425);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9426,(function (){var iter__7081__auto__ = ((function (i__9425,columned,c,columns,line_group,c__7079__auto__,size__7080__auto__,b__9426,s__9424__$2,temp__4092__auto____$2,changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function iter__9443(s__9444){return (new cljs.core.LazySeq(null,((function (i__9425,columned,c,columns,line_group,c__7079__auto__,size__7080__auto__,b__9426,s__9424__$2,temp__4092__auto____$2,changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9444__$1 = s__9444;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9444__$1);if(temp__4092__auto____$3)
{var s__9444__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9444__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9444__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9446 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9445 = 0;while(true){
if((i__9445 < size__7080__auto____$1))
{var vec__9449 = cljs.core._nth.call(null,c__7079__auto____$1,i__9445);var left = cljs.core.nth.call(null,vec__9449,0,null);var right = cljs.core.nth.call(null,vec__9449,1,null);cljs.core.chunk_append.call(null,b__9446,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9572 = (i__9445 + 1);
i__9445 = G__9572;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9446),iter__9443.call(null,cljs.core.chunk_rest.call(null,s__9444__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9446),null);
}
} else
{var vec__9450 = cljs.core.first.call(null,s__9444__$2);var left = cljs.core.nth.call(null,vec__9450,0,null);var right = cljs.core.nth.call(null,vec__9450,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9443.call(null,cljs.core.rest.call(null,s__9444__$2)));
}
} else
{return null;
}
break;
}
});})(i__9425,columned,c,columns,line_group,c__7079__auto__,size__7080__auto__,b__9426,s__9424__$2,temp__4092__auto____$2,changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(i__9425,columned,c,columns,line_group,c__7079__auto__,size__7080__auto__,b__9426,s__9424__$2,temp__4092__auto____$2,changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})());
{
var G__9573 = (i__9425 + 1);
i__9425 = G__9573;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9426),iter__9423.call(null,cljs.core.chunk_rest.call(null,s__9424__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9426),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9424__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (columned,c,columns,line_group,s__9424__$2,temp__4092__auto____$2,changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function iter__9451(s__9452){return (new cljs.core.LazySeq(null,((function (columned,c,columns,line_group,s__9424__$2,temp__4092__auto____$2,changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output){
return (function (){var s__9452__$1 = s__9452;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9452__$1);if(temp__4092__auto____$3)
{var s__9452__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9452__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9452__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9454 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9453 = 0;while(true){
if((i__9453 < size__7080__auto__))
{var vec__9457 = cljs.core._nth.call(null,c__7079__auto__,i__9453);var left = cljs.core.nth.call(null,vec__9457,0,null);var right = cljs.core.nth.call(null,vec__9457,1,null);cljs.core.chunk_append.call(null,b__9454,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9574 = (i__9453 + 1);
i__9453 = G__9574;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9454),iter__9451.call(null,cljs.core.chunk_rest.call(null,s__9452__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9454),null);
}
} else
{var vec__9458 = cljs.core.first.call(null,s__9452__$2);var left = cljs.core.nth.call(null,vec__9458,0,null);var right = cljs.core.nth.call(null,vec__9458,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9451.call(null,cljs.core.rest.call(null,s__9452__$2)));
}
} else
{return null;
}
break;
}
});})(columned,c,columns,line_group,s__9424__$2,temp__4092__auto____$2,changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(columned,c,columns,line_group,s__9424__$2,temp__4092__auto____$2,changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})(),iter__9423.call(null,cljs.core.rest.call(null,s__9424__$2)));
}
} else
{return null;
}
break;
}
});})(changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(changes_group,s__9312__$2,temp__4092__auto____$1,filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9311.call(null,cljs.core.rest.call(null,s__9312__$2)));
}
} else
{return null;
}
break;
}
});})(filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
,null,null));
});})(filename,file_diff,file,s__8864__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null),iter__8863.call(null,cljs.core.rest.call(null,s__8864__$2)));
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
})());var seq__9459_9575 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9460_9576 = null;var count__9461_9577 = 0;var i__9462_9578 = 0;while(true){
if((i__9462_9578 < count__9461_9577))
{var vec__9463_9579 = cljs.core._nth.call(null,chunk__9460_9576,i__9462_9578);var ev__7756__auto___9580 = cljs.core.nth.call(null,vec__9463_9579,0,null);var func__7757__auto___9581 = cljs.core.nth.call(null,vec__9463_9579,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9580,func__7757__auto___9581);
{
var G__9582 = seq__9459_9575;
var G__9583 = chunk__9460_9576;
var G__9584 = count__9461_9577;
var G__9585 = (i__9462_9578 + 1);
seq__9459_9575 = G__9582;
chunk__9460_9576 = G__9583;
count__9461_9577 = G__9584;
i__9462_9578 = G__9585;
continue;
}
} else
{var temp__4092__auto___9586 = cljs.core.seq.call(null,seq__9459_9575);if(temp__4092__auto___9586)
{var seq__9459_9587__$1 = temp__4092__auto___9586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9459_9587__$1))
{var c__7112__auto___9588 = cljs.core.chunk_first.call(null,seq__9459_9587__$1);{
var G__9589 = cljs.core.chunk_rest.call(null,seq__9459_9587__$1);
var G__9590 = c__7112__auto___9588;
var G__9591 = cljs.core.count.call(null,c__7112__auto___9588);
var G__9592 = 0;
seq__9459_9575 = G__9589;
chunk__9460_9576 = G__9590;
count__9461_9577 = G__9591;
i__9462_9578 = G__9592;
continue;
}
} else
{var vec__9464_9593 = cljs.core.first.call(null,seq__9459_9587__$1);var ev__7756__auto___9594 = cljs.core.nth.call(null,vec__9464_9593,0,null);var func__7757__auto___9595 = cljs.core.nth.call(null,vec__9464_9593,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9594,func__7757__auto___9595);
{
var G__9596 = cljs.core.next.call(null,seq__9459_9587__$1);
var G__9597 = null;
var G__9598 = 0;
var G__9599 = 0;
seq__9459_9575 = G__9596;
chunk__9460_9576 = G__9597;
count__9461_9577 = G__9598;
i__9462_9578 = G__9599;
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
lt.plugins.gitlight.diff.breaker = (function breaker(left,right){var m = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,left),cljs.core.first.call(null,right)], null);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,m)))
{return cljs.core.cons.call(null,m,breaker.call(null,cljs.core.rest.call(null,left),cljs.core.rest.call(null,right)));
} else
{return null;
}
});
lt.plugins.gitlight.diff.separate = (function separate(fun,coll){return cljs.core.reduce.call(null,(function (p__9467,line){var vec__9468 = p__9467;var left = cljs.core.nth.call(null,vec__9468,0,null);var right = cljs.core.nth.call(null,vec__9468,1,null);if(cljs.core.truth_(fun.call(null,line)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,left,line),right], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,cljs.core.conj.call(null,right,line)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),coll);
});
lt.plugins.gitlight.diff.columner = (function columner(lines){if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"context",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,lines,lines)], null);
} else
{var vec__9471 = lt.plugins.gitlight.diff.separate.call(null,(function (p1__9469_SHARP_){return cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p1__9469_SHARP_));
}),lines);var left = cljs.core.nth.call(null,vec__9471,0,null);var right = cljs.core.nth.call(null,vec__9471,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"changed",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,left,right)], null);
}
});
lt.plugins.gitlight.diff.split_into_headered_groups = (function split_into_headered_groups(lines,fun,result_fun,headkey,contkey){if(!(cljs.core.empty_QMARK_.call(null,lines)))
{var fst = cljs.core.first.call(null,lines);var vec__9473 = cljs.core.split_with.call(null,fun,cljs.core.rest.call(null,lines));var content = cljs.core.nth.call(null,vec__9473,0,null);var leftovers = cljs.core.nth.call(null,vec__9473,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([headkey,fst,contkey,result_fun.call(null,content)], true, false),split_into_headered_groups.call(null,leftovers,fun,result_fun,headkey,contkey));
} else
{return null;
}
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,x));
}),(function (x){return cljs.core.partition_by.call(null,(function (p1__9474_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__9474_SHARP_));
}),x);
}),new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.Keyword(null,"content","content",1965434859));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(data){var vec__9476 = cljs.core.take.call(null,3,data);var header = cljs.core.nth.call(null,vec__9476,0,null);var left = cljs.core.nth.call(null,vec__9476,1,null);var right = cljs.core.nth.call(null,vec__9476,2,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,cljs.core.drop.call(null,3,data));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),header,new cljs.core.Keyword(null,"left","left",1017222009),left,new cljs.core.Keyword(null,"right","right",1122416014),right,new cljs.core.Keyword(null,"groups","groups",4071411014),groups], null);
});
lt.plugins.gitlight.diff.split_into_files = (function split_into_files(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return (cljs.core.re_matches.call(null,/diff --git .*/,x) == null);
}),lt.plugins.gitlight.diff.parse_single_git_diff,new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"file-diff","file-diff",3945937192));
});
lt.plugins.gitlight.diff.parse_git_diff = (function parse_git_diff(raw_data){return lt.plugins.gitlight.diff.split_into_files.call(null,clojure.string.split_lines.call(null,raw_data.toString()));
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
lt.plugins.gitlight.diff.git_diff_button = (function git_diff_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,filename);
});
lt.plugins.gitlight.diff.git_diff_cached_button = (function git_diff_cached_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,filename,true);
});
lt.plugins.gitlight.diff.git_diff_repo_button = (function git_diff_repo_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,"");
});
lt.plugins.gitlight.diff.git_diff_cached_repo_button = (function git_diff_cached_repo_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,"",true);
});
lt.plugins.gitlight.diff.side_by_side = (function side_by_side(firsts){var partitioned = cljs.core.partition_by.call(null,cljs.core.first,firsts);return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (partitioned){
return (function (p__9481,part){var vec__9482 = p__9481;var ok = cljs.core.nth.call(null,vec__9482,0,null);var stack = cljs.core.nth.call(null,vec__9482,1,null);var vec__9483 = cljs.core.split_at.call(null,1,part);var fst = cljs.core.nth.call(null,vec__9483,0,null);var rst = cljs.core.nth.call(null,vec__9483,1,null);var left = cljs.core.count.call(null,stack);var right = cljs.core.count.call(null,part);var G__9484 = cljs.core.first.call(null,fst);if(cljs.core._EQ_.call(null,"\\",G__9484))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok,part], null);
} else
{if(cljs.core._EQ_.call(null,"+",G__9484))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,ok,cljs.core.map.call(null,cljs.core.str,part,stack),cljs.core.repeat.call(null,(right - left),"+")),cljs.core.repeat.call(null,(left - right),"-")], null);
} else
{if(cljs.core._EQ_.call(null,"-",G__9484))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok,part], null);
} else
{if(cljs.core._EQ_.call(null," ",G__9484))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,ok,((cljs.core.empty_QMARK_.call(null,stack))?fst:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(" -"),cljs.core.str(cljs.core.count.call(null,stack)),cljs.core.str("\u2191")].join('')], null)),rst),cljs.core.PersistentVector.EMPTY], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,fst))].join('')));
} else
{return null;
}
}
}
}
}
});})(partitioned))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),partitioned));
});
lt.plugins.gitlight.diff.style_diff_marker = (function style_diff_marker(p__9485){var vec__9493 = p__9485;var p = cljs.core.nth.call(null,vec__9493,0,null);var m = cljs.core.nth.call(null,vec__9493,1,null);var content = vec__9493;var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(((cljs.core._EQ_.call(null,p," ")) && ((m == null)))?"no-change":(((cljs.core._EQ_.call(null,p,"+")) && ((m == null)))?"added-line":(((cljs.core._EQ_.call(null,p," ")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"deleted-lines":(((cljs.core._EQ_.call(null,p,"+")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"modified-line":null))))], null),content], null));var seq__9494_9600 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9495_9601 = null;var count__9496_9602 = 0;var i__9497_9603 = 0;while(true){
if((i__9497_9603 < count__9496_9602))
{var vec__9498_9604 = cljs.core._nth.call(null,chunk__9495_9601,i__9497_9603);var ev__7756__auto___9605 = cljs.core.nth.call(null,vec__9498_9604,0,null);var func__7757__auto___9606 = cljs.core.nth.call(null,vec__9498_9604,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9605,func__7757__auto___9606);
{
var G__9607 = seq__9494_9600;
var G__9608 = chunk__9495_9601;
var G__9609 = count__9496_9602;
var G__9610 = (i__9497_9603 + 1);
seq__9494_9600 = G__9607;
chunk__9495_9601 = G__9608;
count__9496_9602 = G__9609;
i__9497_9603 = G__9610;
continue;
}
} else
{var temp__4092__auto___9611 = cljs.core.seq.call(null,seq__9494_9600);if(temp__4092__auto___9611)
{var seq__9494_9612__$1 = temp__4092__auto___9611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9494_9612__$1))
{var c__7112__auto___9613 = cljs.core.chunk_first.call(null,seq__9494_9612__$1);{
var G__9614 = cljs.core.chunk_rest.call(null,seq__9494_9612__$1);
var G__9615 = c__7112__auto___9613;
var G__9616 = cljs.core.count.call(null,c__7112__auto___9613);
var G__9617 = 0;
seq__9494_9600 = G__9614;
chunk__9495_9601 = G__9615;
count__9496_9602 = G__9616;
i__9497_9603 = G__9617;
continue;
}
} else
{var vec__9499_9618 = cljs.core.first.call(null,seq__9494_9612__$1);var ev__7756__auto___9619 = cljs.core.nth.call(null,vec__9499_9618,0,null);var func__7757__auto___9620 = cljs.core.nth.call(null,vec__9499_9618,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9619,func__7757__auto___9620);
{
var G__9621 = cljs.core.next.call(null,seq__9494_9612__$1);
var G__9622 = null;
var G__9623 = 0;
var G__9624 = 0;
seq__9494_9600 = G__9621;
chunk__9495_9601 = G__9622;
count__9496_9602 = G__9623;
i__9497_9603 = G__9624;
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
lt.plugins.gitlight.diff.__BEH__parse_diff_gutter_out = (function __BEH__parse_diff_gutter_out(this$,command,stdout,stderr){var parsed = cljs.core.drop.call(null,5,clojure.string.split_lines.call(null,stdout.toString()));var firsts = cljs.core.map.call(null,cljs.core.first,parsed);return lt.plugins.gitlight.gutter.show_gutter_data.call(null,lt.objs.editor.pool.last_active.call(null),cljs.core.println,lt.plugins.gitlight.diff.style_diff_marker,((cljs.core.empty_QMARK_.call(null,firsts))?cljs.core.repeat.call(null,lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).doc.size," "):lt.plugins.gitlight.diff.side_by_side.call(null,firsts)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.diff","parse-diff-gutter-out","lt.plugins.gitlight.diff/parse-diff-gutter-out",1856487699),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.diff.__BEH__parse_diff_gutter_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out","out",1014014656)], null));
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
lt.plugins.gitlight.status.back.git_add = (function git_add(action,filename){return lt.plugins.gitlight.git.git_add.call(null,filename);
});
lt.plugins.gitlight.status.back.git_commit = (function git_commit(action,filename){return lt.plugins.gitlight.common_ui.input_popup.call(null,"commit message?","commit",(function (msg){lt.plugins.gitlight.git.git_commit.call(null,msg);
return lt.plugins.gitlight.status.back.git_status.call(null);
}));
});
lt.plugins.gitlight.status.back.git_reset = (function git_reset(action,filename){return lt.plugins.gitlight.git.git_reset.call(null,filename);
});
lt.plugins.gitlight.status.back.git_checkout_file = (function git_checkout_file(action,filename){return lt.plugins.gitlight.git.git_checkout_file.call(null,filename);
});
lt.plugins.gitlight.status.back.bin_rm = (function bin_rm(action,filename){return lt.objs.files.delete_BANG_.call(null,[cljs.core.str(lt.plugins.gitlight.git.get_git_root.call(null)),cljs.core.str("/"),cljs.core.str(filename)].join(''));
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
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.branch.checkout_button = (function checkout_button(branch){return lt.plugins.gitlight.common_ui.make_button.call(null,branch,"checkout branch",lt.plugins.gitlight.branch.git_checkout);
});
lt.plugins.gitlight.branch.pull_button = (function pull_button(branch){return lt.plugins.gitlight.common_ui.make_button.call(null,"pull!",branch,(function (x,y){return lt.plugins.gitlight.remote_com.git_pull.call(null);
}));
});
lt.plugins.gitlight.branch.merge_button = (function merge_button(branch){return lt.plugins.gitlight.common_ui.make_button.call(null,"merge",branch,lt.plugins.gitlight.branch.git_merge);
});
lt.plugins.gitlight.branch.push_button = (function push_button(branch){return lt.plugins.gitlight.common_ui.make_button.call(null,"push it!",branch,lt.plugins.gitlight.branch.git_push_it_BANG_);
});
lt.plugins.gitlight.branch.new_branch_button = (function new_branch_button(){return lt.plugins.gitlight.common_ui.make_button.call(null,"make a new branch",null,lt.plugins.gitlight.branch.git_new_branch);
});
lt.plugins.gitlight.branch.delete_branch_button = (function delete_branch_button(branch){return lt.plugins.gitlight.common_ui.make_button.call(null,"delete",branch,lt.plugins.gitlight.branch.git_delete_branch);
});
lt.plugins.gitlight.branch.local_branches_ui = (function local_branches_ui(branches){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = (function iter__7883(s__7884){return (new cljs.core.LazySeq(null,(function (){var s__7884__$1 = s__7884;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7884__$1);if(temp__4092__auto__)
{var s__7884__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7884__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7884__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7886 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7885 = 0;while(true){
if((i__7885 < size__7080__auto__))
{var parsed = cljs.core._nth.call(null,c__7079__auto__,i__7885);var vec__7891 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__7891,0,null);var vec__7892 = cljs.core.nth.call(null,vec__7891,1,null);var branch = cljs.core.nth.call(null,vec__7892,0,null);var sha1 = cljs.core.nth.call(null,vec__7892,1,null);var desc = cljs.core.nth.call(null,vec__7892,2,null);cljs.core.chunk_append.call(null,b__7886,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":lt.plugins.gitlight.branch.delete_branch_button.call(null,branch))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null));
{
var G__7952 = (i__7885 + 1);
i__7885 = G__7952;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7886),iter__7883.call(null,cljs.core.chunk_rest.call(null,s__7884__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7886),null);
}
} else
{var parsed = cljs.core.first.call(null,s__7884__$2);var vec__7893 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__7893,0,null);var vec__7894 = cljs.core.nth.call(null,vec__7893,1,null);var branch = cljs.core.nth.call(null,vec__7894,0,null);var sha1 = cljs.core.nth.call(null,vec__7894,1,null);var desc = cljs.core.nth.call(null,vec__7894,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":lt.plugins.gitlight.branch.delete_branch_button.call(null,branch))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null),iter__7883.call(null,cljs.core.rest.call(null,s__7884__$2)));
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
lt.plugins.gitlight.branch.remote_branches_ui = (function remote_branches_ui(remote_branches){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = (function iter__7903(s__7904){return (new cljs.core.LazySeq(null,(function (){var s__7904__$1 = s__7904;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7904__$1);if(temp__4092__auto__)
{var s__7904__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7904__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7904__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7906 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7905 = 0;while(true){
if((i__7905 < size__7080__auto__))
{var branch = cljs.core._nth.call(null,c__7079__auto__,i__7905);var vec__7909 = clojure.string.split.call(null,branch,/\s+/,4);var _ = cljs.core.nth.call(null,vec__7909,0,null);var branch_name = cljs.core.nth.call(null,vec__7909,1,null);var h = cljs.core.nth.call(null,vec__7909,2,null);var tail = cljs.core.nth.call(null,vec__7909,3,null);cljs.core.chunk_append.call(null,b__7906,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),branch_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),tail], null)], null));
{
var G__7953 = (i__7905 + 1);
i__7905 = G__7953;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7906),iter__7903.call(null,cljs.core.chunk_rest.call(null,s__7904__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7906),null);
}
} else
{var branch = cljs.core.first.call(null,s__7904__$2);var vec__7910 = clojure.string.split.call(null,branch,/\s+/,4);var _ = cljs.core.nth.call(null,vec__7910,0,null);var branch_name = cljs.core.nth.call(null,vec__7910,1,null);var h = cljs.core.nth.call(null,vec__7910,2,null);var tail = cljs.core.nth.call(null,vec__7910,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),branch_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),tail], null)], null),iter__7903.call(null,cljs.core.rest.call(null,s__7904__$2)));
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
lt.plugins.gitlight.branch.remotes_ui = (function remotes_ui(remotes){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = (function iter__7919(s__7920){return (new cljs.core.LazySeq(null,(function (){var s__7920__$1 = s__7920;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7920__$1);if(temp__4092__auto__)
{var s__7920__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7920__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7920__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7922 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7921 = 0;while(true){
if((i__7921 < size__7080__auto__))
{var remote = cljs.core._nth.call(null,c__7079__auto__,i__7921);var vec__7925 = clojure.string.split.call(null,remote,/\s+/,3);var r = cljs.core.nth.call(null,vec__7925,0,null);var url = cljs.core.nth.call(null,vec__7925,1,null);var what = cljs.core.nth.call(null,vec__7925,2,null);cljs.core.chunk_append.call(null,b__7922,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),url], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),what], null)], null));
{
var G__7954 = (i__7921 + 1);
i__7921 = G__7954;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7922),iter__7919.call(null,cljs.core.chunk_rest.call(null,s__7920__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7922),null);
}
} else
{var remote = cljs.core.first.call(null,s__7920__$2);var vec__7926 = clojure.string.split.call(null,remote,/\s+/,3);var r = cljs.core.nth.call(null,vec__7926,0,null);var url = cljs.core.nth.call(null,vec__7926,1,null);var what = cljs.core.nth.call(null,vec__7926,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),url], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),what], null)], null),iter__7919.call(null,cljs.core.rest.call(null,s__7920__$2)));
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
lt.plugins.gitlight.branch.branch_panel = (function branch_panel(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var vec__7934 = new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var branches = cljs.core.nth.call(null,vec__7934,0,null);var remotes = cljs.core.nth.call(null,vec__7934,1,null);var remote_branches = cljs.core.nth.call(null,vec__7934,2,null);return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-branches","div.gitlight-branches",1801709646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Branches"], null),lt.plugins.gitlight.branch.local_branches_ui.call(null,branches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Remote branches"], null),lt.plugins.gitlight.branch.remote_branches_ui.call(null,remote_branches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Remotes"], null),lt.plugins.gitlight.branch.remotes_ui.call(null,remotes)], null);
})());var seq__7935_7955 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7936_7956 = null;var count__7937_7957 = 0;var i__7938_7958 = 0;while(true){
if((i__7938_7958 < count__7937_7957))
{var vec__7939_7959 = cljs.core._nth.call(null,chunk__7936_7956,i__7938_7958);var ev__7756__auto___7960 = cljs.core.nth.call(null,vec__7939_7959,0,null);var func__7757__auto___7961 = cljs.core.nth.call(null,vec__7939_7959,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7960,func__7757__auto___7961);
{
var G__7962 = seq__7935_7955;
var G__7963 = chunk__7936_7956;
var G__7964 = count__7937_7957;
var G__7965 = (i__7938_7958 + 1);
seq__7935_7955 = G__7962;
chunk__7936_7956 = G__7963;
count__7937_7957 = G__7964;
i__7938_7958 = G__7965;
continue;
}
} else
{var temp__4092__auto___7966 = cljs.core.seq.call(null,seq__7935_7955);if(temp__4092__auto___7966)
{var seq__7935_7967__$1 = temp__4092__auto___7966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7935_7967__$1))
{var c__7112__auto___7968 = cljs.core.chunk_first.call(null,seq__7935_7967__$1);{
var G__7969 = cljs.core.chunk_rest.call(null,seq__7935_7967__$1);
var G__7970 = c__7112__auto___7968;
var G__7971 = cljs.core.count.call(null,c__7112__auto___7968);
var G__7972 = 0;
seq__7935_7955 = G__7969;
chunk__7936_7956 = G__7970;
count__7937_7957 = G__7971;
i__7938_7958 = G__7972;
continue;
}
} else
{var vec__7940_7973 = cljs.core.first.call(null,seq__7935_7967__$1);var ev__7756__auto___7974 = cljs.core.nth.call(null,vec__7940_7973,0,null);var func__7757__auto___7975 = cljs.core.nth.call(null,vec__7940_7973,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7974,func__7757__auto___7975);
{
var G__7976 = cljs.core.next.call(null,seq__7935_7967__$1);
var G__7977 = null;
var G__7978 = 0;
var G__7979 = 0;
seq__7935_7955 = G__7976;
chunk__7936_7956 = G__7977;
count__7937_7957 = G__7978;
i__7938_7958 = G__7979;
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
lt.plugins.gitlight.branch.git_branches = (function git_branches(){var commands_args = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch","--no-color","-vv"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["remote","-v"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch","-r","-v"], null)], null);var commands_to_run = cljs.core.map.call(null,((function (commands_args){
return (function (p1__7941_SHARP_){return cljs.core.partial.call(null,lt.plugins.gitlight.git.git,p1__7941_SHARP_);
});})(commands_args))
,commands_args);return lt.plugins.gitlight.execute.runfuns.call(null,lt.plugins.gitlight.branch.git_branch_output,commands_to_run);
});
lt.plugins.gitlight.branch.git_merge = (function git_merge(action,branch){lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["merge",branch], null));
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.plugins.gitlight.branch.git_checkout = (function git_checkout(branch,action){lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["checkout",branch], null));
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.plugins.gitlight.branch.git_push_it_BANG_ = (function git_push_it_BANG_(action,branch){lt.plugins.gitlight.remote_com.git_push_remote_branch.call(null,"origin",branch);
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.plugins.gitlight.branch.git_new_branch = (function git_new_branch(action,branch){return lt.plugins.gitlight.common_ui.input_popup.call(null,"new branch name","create",lt.plugins.gitlight.branch.git_create_new_branch);
});
lt.plugins.gitlight.branch.git_create_new_branch = (function git_create_new_branch(branch){lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch",branch], null));
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.plugins.gitlight.branch.git_delete_branch = (function git_delete_branch(action,branch){lt.plugins.gitlight.git.git.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch","-D",branch], null));
return lt.plugins.gitlight.branch.git_branches.call(null);
});
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
lt.plugins.gitlight.status.ui.make_button_and_update = (function make_button_and_update(n,f,fun){return lt.plugins.gitlight.common_ui.make_classy_button.call(null,n,f,(function (x,y){fun.call(null,x,y);
return lt.plugins.gitlight.status.back.git_status.call(null);
}));
});
lt.plugins.gitlight.status.ui.open_file = (function open_file(action,filename){return lt.objs.cli.open_paths.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(lt.plugins.gitlight.git.get_git_root.call(null)),cljs.core.str("/"),cljs.core.str(filename)].join('')], null),false);
});
lt.plugins.gitlight.status.ui.file_ops = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["resolve",lt.plugins.gitlight.status.back.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_button], null)], null),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stage",lt.plugins.gitlight.status.back.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["checkout",lt.plugins.gitlight.status.back.git_checkout_file], null)], null),new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add",lt.plugins.gitlight.status.back.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete",lt.plugins.gitlight.status.back.bin_rm], null)], null),new cljs.core.Keyword(null,"staged","staged",4416376984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unstage",lt.plugins.gitlight.status.back.git_reset], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_cached_button], null)], null)], null);
lt.plugins.gitlight.status.ui.repo_ops = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",1017356940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push",lt.plugins.gitlight.remote_com.git_push], null),new cljs.core.Keyword(null,"pull","pull",1017356727),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull",lt.plugins.gitlight.remote_com.git_pull], null),new cljs.core.Keyword(null,"fetch","fetch",1111226924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fetch",lt.plugins.gitlight.remote_com.git_fetch], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"commit","commit",3954056361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quick commit",lt.plugins.gitlight.status.back.git_commit], null),new cljs.core.Keyword(null,"cached-diff","cached-diff",1992836418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cached diff",lt.plugins.gitlight.diff.git_diff_cached_repo_button], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"diff","diff",1016987511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_repo_button], null),new cljs.core.Keyword(null,"inline-diff","inline-diff",3623171627),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toggle inline diff",lt.plugins.gitlight.diff.toggle_git_diff_gutter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command-history","command-history",2259099524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["history",lt.plugins.gitlight.history.command_history], null)], null)], null);
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__10209){var vec__10225 = p__10209;var f = cljs.core.nth.call(null,vec__10225,0,null);var t = cljs.core.nth.call(null,vec__10225,1,null);var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,f,f,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = ((function (vec__10225,f,t){
return (function iter__10226(s__10227){return (new cljs.core.LazySeq(null,((function (vec__10225,f,t){
return (function (){var s__10227__$1 = s__10227;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10227__$1);if(temp__4092__auto__)
{var s__10227__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10227__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10227__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10229 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10228 = 0;while(true){
if((i__10228 < size__7080__auto__))
{var vec__10232 = cljs.core._nth.call(null,c__7079__auto__,i__10228);var bt = cljs.core.nth.call(null,vec__10232,0,null);var fun = cljs.core.nth.call(null,vec__10232,1,null);cljs.core.chunk_append.call(null,b__10229,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun));
{
var G__10364 = (i__10228 + 1);
i__10228 = G__10364;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10229),iter__10226.call(null,cljs.core.chunk_rest.call(null,s__10227__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10229),null);
}
} else
{var vec__10233 = cljs.core.first.call(null,s__10227__$2);var bt = cljs.core.nth.call(null,vec__10233,0,null);var fun = cljs.core.nth.call(null,vec__10233,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun),iter__10226.call(null,cljs.core.rest.call(null,s__10227__$2)));
}
} else
{return null;
}
break;
}
});})(vec__10225,f,t))
,null,null));
});})(vec__10225,f,t))
;return iter__7081__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__10234_10365 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10235_10366 = null;var count__10236_10367 = 0;var i__10237_10368 = 0;while(true){
if((i__10237_10368 < count__10236_10367))
{var vec__10238_10369 = cljs.core._nth.call(null,chunk__10235_10366,i__10237_10368);var ev__7756__auto___10370 = cljs.core.nth.call(null,vec__10238_10369,0,null);var func__7757__auto___10371 = cljs.core.nth.call(null,vec__10238_10369,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10370,func__7757__auto___10371);
{
var G__10372 = seq__10234_10365;
var G__10373 = chunk__10235_10366;
var G__10374 = count__10236_10367;
var G__10375 = (i__10237_10368 + 1);
seq__10234_10365 = G__10372;
chunk__10235_10366 = G__10373;
count__10236_10367 = G__10374;
i__10237_10368 = G__10375;
continue;
}
} else
{var temp__4092__auto___10376 = cljs.core.seq.call(null,seq__10234_10365);if(temp__4092__auto___10376)
{var seq__10234_10377__$1 = temp__4092__auto___10376;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10234_10377__$1))
{var c__7112__auto___10378 = cljs.core.chunk_first.call(null,seq__10234_10377__$1);{
var G__10379 = cljs.core.chunk_rest.call(null,seq__10234_10377__$1);
var G__10380 = c__7112__auto___10378;
var G__10381 = cljs.core.count.call(null,c__7112__auto___10378);
var G__10382 = 0;
seq__10234_10365 = G__10379;
chunk__10235_10366 = G__10380;
count__10236_10367 = G__10381;
i__10237_10368 = G__10382;
continue;
}
} else
{var vec__10239_10383 = cljs.core.first.call(null,seq__10234_10377__$1);var ev__7756__auto___10384 = cljs.core.nth.call(null,vec__10239_10383,0,null);var func__7757__auto___10385 = cljs.core.nth.call(null,vec__10239_10383,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10384,func__7757__auto___10385);
{
var G__10386 = cljs.core.next.call(null,seq__10234_10377__$1);
var G__10387 = null;
var G__10388 = 0;
var G__10389 = 0;
seq__10234_10365 = G__10386;
chunk__10235_10366 = G__10387;
count__10236_10367 = G__10388;
i__10237_10368 = G__10389;
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__10246_10390 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10247_10391 = null;var count__10248_10392 = 0;var i__10249_10393 = 0;while(true){
if((i__10249_10393 < count__10248_10392))
{var vec__10250_10394 = cljs.core._nth.call(null,chunk__10247_10391,i__10249_10393);var ev__7756__auto___10395 = cljs.core.nth.call(null,vec__10250_10394,0,null);var func__7757__auto___10396 = cljs.core.nth.call(null,vec__10250_10394,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10395,func__7757__auto___10396);
{
var G__10397 = seq__10246_10390;
var G__10398 = chunk__10247_10391;
var G__10399 = count__10248_10392;
var G__10400 = (i__10249_10393 + 1);
seq__10246_10390 = G__10397;
chunk__10247_10391 = G__10398;
count__10248_10392 = G__10399;
i__10249_10393 = G__10400;
continue;
}
} else
{var temp__4092__auto___10401 = cljs.core.seq.call(null,seq__10246_10390);if(temp__4092__auto___10401)
{var seq__10246_10402__$1 = temp__4092__auto___10401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10246_10402__$1))
{var c__7112__auto___10403 = cljs.core.chunk_first.call(null,seq__10246_10402__$1);{
var G__10404 = cljs.core.chunk_rest.call(null,seq__10246_10402__$1);
var G__10405 = c__7112__auto___10403;
var G__10406 = cljs.core.count.call(null,c__7112__auto___10403);
var G__10407 = 0;
seq__10246_10390 = G__10404;
chunk__10247_10391 = G__10405;
count__10248_10392 = G__10406;
i__10249_10393 = G__10407;
continue;
}
} else
{var vec__10251_10408 = cljs.core.first.call(null,seq__10246_10402__$1);var ev__7756__auto___10409 = cljs.core.nth.call(null,vec__10251_10408,0,null);var func__7757__auto___10410 = cljs.core.nth.call(null,vec__10251_10408,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10409,func__7757__auto___10410);
{
var G__10411 = cljs.core.next.call(null,seq__10246_10402__$1);
var G__10412 = null;
var G__10413 = 0;
var G__10414 = 0;
seq__10246_10390 = G__10411;
chunk__10247_10391 = G__10412;
count__10248_10392 = G__10413;
i__10249_10393 = G__10414;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,branch,[cljs.core.str("Branch menu")].join(''),(function (x,y){return lt.plugins.gitlight.branch.git_branches.call(null);
}))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = (function iter__10302(s__10303){return (new cljs.core.LazySeq(null,(function (){var s__10303__$1 = s__10303;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10303__$1);if(temp__4092__auto__)
{var s__10303__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10303__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10303__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10305 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10304 = 0;while(true){
if((i__10304 < size__7080__auto__))
{var option_group = cljs.core._nth.call(null,c__7079__auto__,i__10304);cljs.core.chunk_append.call(null,b__10305,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (i__10304,option_group,c__7079__auto__,size__7080__auto__,b__10305,s__10303__$2,temp__4092__auto__){
return (function iter__10322(s__10323){return (new cljs.core.LazySeq(null,((function (i__10304,option_group,c__7079__auto__,size__7080__auto__,b__10305,s__10303__$2,temp__4092__auto__){
return (function (){var s__10323__$1 = s__10323;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10323__$1);if(temp__4092__auto____$1)
{var s__10323__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10323__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__10323__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__10325 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__10324 = 0;while(true){
if((i__10324 < size__7080__auto____$1))
{var vec__10328 = cljs.core._nth.call(null,c__7079__auto____$1,i__10324);var bname = cljs.core.nth.call(null,vec__10328,0,null);var fun = cljs.core.nth.call(null,vec__10328,1,null);cljs.core.chunk_append.call(null,b__10325,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10415 = (i__10324 + 1);
i__10324 = G__10415;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10325),iter__10322.call(null,cljs.core.chunk_rest.call(null,s__10323__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10325),null);
}
} else
{var vec__10329 = cljs.core.first.call(null,s__10323__$2);var bname = cljs.core.nth.call(null,vec__10329,0,null);var fun = cljs.core.nth.call(null,vec__10329,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10322.call(null,cljs.core.rest.call(null,s__10323__$2)));
}
} else
{return null;
}
break;
}
});})(i__10304,option_group,c__7079__auto__,size__7080__auto__,b__10305,s__10303__$2,temp__4092__auto__))
,null,null));
});})(i__10304,option_group,c__7079__auto__,size__7080__auto__,b__10305,s__10303__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null));
{
var G__10416 = (i__10304 + 1);
i__10304 = G__10416;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10305),iter__10302.call(null,cljs.core.chunk_rest.call(null,s__10303__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10305),null);
}
} else
{var option_group = cljs.core.first.call(null,s__10303__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (option_group,s__10303__$2,temp__4092__auto__){
return (function iter__10330(s__10331){return (new cljs.core.LazySeq(null,((function (option_group,s__10303__$2,temp__4092__auto__){
return (function (){var s__10331__$1 = s__10331;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10331__$1);if(temp__4092__auto____$1)
{var s__10331__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10331__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10331__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10333 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10332 = 0;while(true){
if((i__10332 < size__7080__auto__))
{var vec__10336 = cljs.core._nth.call(null,c__7079__auto__,i__10332);var bname = cljs.core.nth.call(null,vec__10336,0,null);var fun = cljs.core.nth.call(null,vec__10336,1,null);cljs.core.chunk_append.call(null,b__10333,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10417 = (i__10332 + 1);
i__10332 = G__10417;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10333),iter__10330.call(null,cljs.core.chunk_rest.call(null,s__10331__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10333),null);
}
} else
{var vec__10337 = cljs.core.first.call(null,s__10331__$2);var bname = cljs.core.nth.call(null,vec__10337,0,null);var fun = cljs.core.nth.call(null,vec__10337,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10330.call(null,cljs.core.rest.call(null,s__10331__$2)));
}
} else
{return null;
}
break;
}
});})(option_group,s__10303__$2,temp__4092__auto__))
,null,null));
});})(option_group,s__10303__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null),iter__10302.call(null,cljs.core.rest.call(null,s__10303__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,lt.plugins.gitlight.status.ui.repo_ops);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,"refresh","refresh",(function (x,y){return null;
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__10338(s__10339){return (new cljs.core.LazySeq(null,(function (){var s__10339__$1 = s__10339;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10339__$1);if(temp__4092__auto__)
{var s__10339__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10339__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10339__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10341 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10340 = 0;while(true){
if((i__10340 < size__7080__auto__))
{var vec__10344 = cljs.core._nth.call(null,c__7079__auto__,i__10340);var g = cljs.core.nth.call(null,vec__10344,0,null);var fs = cljs.core.nth.call(null,vec__10344,1,null);cljs.core.chunk_append.call(null,b__10341,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10418 = (i__10340 + 1);
i__10340 = G__10418;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10341),iter__10338.call(null,cljs.core.chunk_rest.call(null,s__10339__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10341),null);
}
} else
{var vec__10345 = cljs.core.first.call(null,s__10339__$2);var g = cljs.core.nth.call(null,vec__10345,0,null);var fs = cljs.core.nth.call(null,vec__10345,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__10338.call(null,cljs.core.rest.call(null,s__10339__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,this$);
})()], null)], null));var seq__10346_10419 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10347_10420 = null;var count__10348_10421 = 0;var i__10349_10422 = 0;while(true){
if((i__10349_10422 < count__10348_10421))
{var vec__10350_10423 = cljs.core._nth.call(null,chunk__10347_10420,i__10349_10422);var ev__7756__auto___10424 = cljs.core.nth.call(null,vec__10350_10423,0,null);var func__7757__auto___10425 = cljs.core.nth.call(null,vec__10350_10423,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10424,func__7757__auto___10425);
{
var G__10426 = seq__10346_10419;
var G__10427 = chunk__10347_10420;
var G__10428 = count__10348_10421;
var G__10429 = (i__10349_10422 + 1);
seq__10346_10419 = G__10426;
chunk__10347_10420 = G__10427;
count__10348_10421 = G__10428;
i__10349_10422 = G__10429;
continue;
}
} else
{var temp__4092__auto___10430 = cljs.core.seq.call(null,seq__10346_10419);if(temp__4092__auto___10430)
{var seq__10346_10431__$1 = temp__4092__auto___10430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10346_10431__$1))
{var c__7112__auto___10432 = cljs.core.chunk_first.call(null,seq__10346_10431__$1);{
var G__10433 = cljs.core.chunk_rest.call(null,seq__10346_10431__$1);
var G__10434 = c__7112__auto___10432;
var G__10435 = cljs.core.count.call(null,c__7112__auto___10432);
var G__10436 = 0;
seq__10346_10419 = G__10433;
chunk__10347_10420 = G__10434;
count__10348_10421 = G__10435;
i__10349_10422 = G__10436;
continue;
}
} else
{var vec__10351_10437 = cljs.core.first.call(null,seq__10346_10431__$1);var ev__7756__auto___10438 = cljs.core.nth.call(null,vec__10351_10437,0,null);var func__7757__auto___10439 = cljs.core.nth.call(null,vec__10351_10437,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10438,func__7757__auto___10439);
{
var G__10440 = cljs.core.next.call(null,seq__10346_10431__$1);
var G__10441 = null;
var G__10442 = 0;
var G__10443 = 0;
seq__10346_10419 = G__10440;
chunk__10347_10420 = G__10441;
count__10348_10421 = G__10442;
i__10349_10422 = G__10443;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10358_10444 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10359_10445 = null;var count__10360_10446 = 0;var i__10361_10447 = 0;while(true){
if((i__10361_10447 < count__10360_10446))
{var vec__10362_10448 = cljs.core._nth.call(null,chunk__10359_10445,i__10361_10447);var ev__7756__auto___10449 = cljs.core.nth.call(null,vec__10362_10448,0,null);var func__7757__auto___10450 = cljs.core.nth.call(null,vec__10362_10448,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10449,func__7757__auto___10450);
{
var G__10451 = seq__10358_10444;
var G__10452 = chunk__10359_10445;
var G__10453 = count__10360_10446;
var G__10454 = (i__10361_10447 + 1);
seq__10358_10444 = G__10451;
chunk__10359_10445 = G__10452;
count__10360_10446 = G__10453;
i__10361_10447 = G__10454;
continue;
}
} else
{var temp__4092__auto___10455 = cljs.core.seq.call(null,seq__10358_10444);if(temp__4092__auto___10455)
{var seq__10358_10456__$1 = temp__4092__auto___10455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10358_10456__$1))
{var c__7112__auto___10457 = cljs.core.chunk_first.call(null,seq__10358_10456__$1);{
var G__10458 = cljs.core.chunk_rest.call(null,seq__10358_10456__$1);
var G__10459 = c__7112__auto___10457;
var G__10460 = cljs.core.count.call(null,c__7112__auto___10457);
var G__10461 = 0;
seq__10358_10444 = G__10458;
chunk__10359_10445 = G__10459;
count__10360_10446 = G__10460;
i__10361_10447 = G__10461;
continue;
}
} else
{var vec__10363_10462 = cljs.core.first.call(null,seq__10358_10456__$1);var ev__7756__auto___10463 = cljs.core.nth.call(null,vec__10363_10462,0,null);var func__7757__auto___10464 = cljs.core.nth.call(null,vec__10363_10462,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10463,func__7757__auto___10464);
{
var G__10465 = cljs.core.next.call(null,seq__10358_10456__$1);
var G__10466 = null;
var G__10467 = 0;
var G__10468 = 0;
seq__10358_10444 = G__10465;
chunk__10359_10445 = G__10466;
count__10360_10446 = G__10467;
i__10361_10447 = G__10468;
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