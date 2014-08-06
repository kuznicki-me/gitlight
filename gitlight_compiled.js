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
lt.plugins.gitlight.history.row = (function row(p__9746){var vec__9748 = p__9746;var success_or_error = cljs.core.nth.call(null,vec__9748,0,null);var command = cljs.core.nth.call(null,vec__9748,1,null);var date = cljs.core.nth.call(null,vec__9748,2,null);var stdout = cljs.core.nth.call(null,vec__9748,3,null);var stderr = cljs.core.nth.call(null,vec__9748,4,null);if(!((success_or_error == null)))
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
lt.plugins.gitlight.history.get_first = (function get_first(needle,haystack){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__9749_SHARP_){return cljs.core._EQ_.call(null,needle,cljs.core.first.call(null,p1__9749_SHARP_));
}),haystack));
});
lt.plugins.gitlight.history.history_header = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stdout"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stderr"], null)], null);
lt.plugins.gitlight.history.make_history_gui = (function make_history_gui(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var history = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var dump_button = lt.plugins.gitlight.common_ui.make_button.call(null,"dump history",lt.plugins.gitlight.history.parse_dump.call(null,cljs.core.deref.call(null,history)),lt.plugins.gitlight.history.landfill_of_history);var last_ok = lt.plugins.gitlight.history.get_first.call(null,new cljs.core.Keyword(null,"success","success",3441701749),cljs.core.deref.call(null,history));var last_fail = lt.plugins.gitlight.history.get_first.call(null,new cljs.core.Keyword(null,"error","error",1110689146),cljs.core.deref.call(null,history));var history_rows = cljs.core.map.call(null,lt.plugins.gitlight.history.row,cljs.core.deref.call(null,history));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-command-history","div.gitlight-command-history",2639214328),dump_button,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),lt.plugins.gitlight.history.spacer.call(null,"last ok: "),lt.plugins.gitlight.history.row.call(null,last_ok),lt.plugins.gitlight.history.spacer.call(null,"last failed: "),lt.plugins.gitlight.history.row.call(null,last_fail),lt.plugins.gitlight.history.spacer.call(null,"history: "),lt.plugins.gitlight.history.history_header,history_rows], null)], null);
})());var seq__9756_9762 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9757_9763 = null;var count__9758_9764 = 0;var i__9759_9765 = 0;while(true){
if((i__9759_9765 < count__9758_9764))
{var vec__9760_9766 = cljs.core._nth.call(null,chunk__9757_9763,i__9759_9765);var ev__7756__auto___9767 = cljs.core.nth.call(null,vec__9760_9766,0,null);var func__7757__auto___9768 = cljs.core.nth.call(null,vec__9760_9766,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9767,func__7757__auto___9768);
{
var G__9769 = seq__9756_9762;
var G__9770 = chunk__9757_9763;
var G__9771 = count__9758_9764;
var G__9772 = (i__9759_9765 + 1);
seq__9756_9762 = G__9769;
chunk__9757_9763 = G__9770;
count__9758_9764 = G__9771;
i__9759_9765 = G__9772;
continue;
}
} else
{var temp__4092__auto___9773 = cljs.core.seq.call(null,seq__9756_9762);if(temp__4092__auto___9773)
{var seq__9756_9774__$1 = temp__4092__auto___9773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9756_9774__$1))
{var c__7112__auto___9775 = cljs.core.chunk_first.call(null,seq__9756_9774__$1);{
var G__9776 = cljs.core.chunk_rest.call(null,seq__9756_9774__$1);
var G__9777 = c__7112__auto___9775;
var G__9778 = cljs.core.count.call(null,c__7112__auto___9775);
var G__9779 = 0;
seq__9756_9762 = G__9776;
chunk__9757_9763 = G__9777;
count__9758_9764 = G__9778;
i__9759_9765 = G__9779;
continue;
}
} else
{var vec__9761_9780 = cljs.core.first.call(null,seq__9756_9774__$1);var ev__7756__auto___9781 = cljs.core.nth.call(null,vec__9761_9780,0,null);var func__7757__auto___9782 = cljs.core.nth.call(null,vec__9761_9780,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9781,func__7757__auto___9782);
{
var G__9783 = cljs.core.next.call(null,seq__9756_9774__$1);
var G__9784 = null;
var G__9785 = 0;
var G__9786 = 0;
seq__9756_9762 = G__9783;
chunk__9757_9763 = G__9784;
count__9758_9764 = G__9785;
i__9759_9765 = G__9786;
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
lt.plugins.gitlight.gutter.make_gutter_marker = (function make_gutter_marker(this$,on_click,style_content,content){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gutter-content","div.gutter-content",4072529974),style_content.call(null,content)], null));var seq__9713_9720 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return on_click.call(null,content);
});})(e__7755__auto__))
], null)));var chunk__9714_9721 = null;var count__9715_9722 = 0;var i__9716_9723 = 0;while(true){
if((i__9716_9723 < count__9715_9722))
{var vec__9717_9724 = cljs.core._nth.call(null,chunk__9714_9721,i__9716_9723);var ev__7756__auto___9725 = cljs.core.nth.call(null,vec__9717_9724,0,null);var func__7757__auto___9726 = cljs.core.nth.call(null,vec__9717_9724,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9725,func__7757__auto___9726);
{
var G__9727 = seq__9713_9720;
var G__9728 = chunk__9714_9721;
var G__9729 = count__9715_9722;
var G__9730 = (i__9716_9723 + 1);
seq__9713_9720 = G__9727;
chunk__9714_9721 = G__9728;
count__9715_9722 = G__9729;
i__9716_9723 = G__9730;
continue;
}
} else
{var temp__4092__auto___9731 = cljs.core.seq.call(null,seq__9713_9720);if(temp__4092__auto___9731)
{var seq__9713_9732__$1 = temp__4092__auto___9731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9713_9732__$1))
{var c__7112__auto___9733 = cljs.core.chunk_first.call(null,seq__9713_9732__$1);{
var G__9734 = cljs.core.chunk_rest.call(null,seq__9713_9732__$1);
var G__9735 = c__7112__auto___9733;
var G__9736 = cljs.core.count.call(null,c__7112__auto___9733);
var G__9737 = 0;
seq__9713_9720 = G__9734;
chunk__9714_9721 = G__9735;
count__9715_9722 = G__9736;
i__9716_9723 = G__9737;
continue;
}
} else
{var vec__9718_9738 = cljs.core.first.call(null,seq__9713_9732__$1);var ev__7756__auto___9739 = cljs.core.nth.call(null,vec__9718_9738,0,null);var func__7757__auto___9740 = cljs.core.nth.call(null,vec__9718_9738,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9739,func__7757__auto___9740);
{
var G__9741 = cljs.core.next.call(null,seq__9713_9732__$1);
var G__9742 = null;
var G__9743 = 0;
var G__9744 = 0;
seq__9713_9720 = G__9741;
chunk__9714_9721 = G__9742;
count__9715_9722 = G__9743;
i__9716_9723 = G__9744;
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
return (function (p1__9719_SHARP_){return lt.plugins.gitlight.gutter.make_gutter_marker.call(null,this$,on_click,style_content,p1__9719_SHARP_);
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
var gutter_9745 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["gitlight-gutter",null], null), null),gutter_9745))], null));
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
lt.plugins.gitlight.diff.commit_input = (function commit_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title","input.title",3943357094),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"size","size",1017434995),81,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit title"], null)], null));var seq__8243_9542 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8244_9543 = null;var count__8245_9544 = 0;var i__8246_9545 = 0;while(true){
if((i__8246_9545 < count__8245_9544))
{var vec__8247_9546 = cljs.core._nth.call(null,chunk__8244_9543,i__8246_9545);var ev__7756__auto___9547 = cljs.core.nth.call(null,vec__8247_9546,0,null);var func__7757__auto___9548 = cljs.core.nth.call(null,vec__8247_9546,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9547,func__7757__auto___9548);
{
var G__9549 = seq__8243_9542;
var G__9550 = chunk__8244_9543;
var G__9551 = count__8245_9544;
var G__9552 = (i__8246_9545 + 1);
seq__8243_9542 = G__9549;
chunk__8244_9543 = G__9550;
count__8245_9544 = G__9551;
i__8246_9545 = G__9552;
continue;
}
} else
{var temp__4092__auto___9553 = cljs.core.seq.call(null,seq__8243_9542);if(temp__4092__auto___9553)
{var seq__8243_9554__$1 = temp__4092__auto___9553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8243_9554__$1))
{var c__7112__auto___9555 = cljs.core.chunk_first.call(null,seq__8243_9554__$1);{
var G__9556 = cljs.core.chunk_rest.call(null,seq__8243_9554__$1);
var G__9557 = c__7112__auto___9555;
var G__9558 = cljs.core.count.call(null,c__7112__auto___9555);
var G__9559 = 0;
seq__8243_9542 = G__9556;
chunk__8244_9543 = G__9557;
count__8245_9544 = G__9558;
i__8246_9545 = G__9559;
continue;
}
} else
{var vec__8248_9560 = cljs.core.first.call(null,seq__8243_9554__$1);var ev__7756__auto___9561 = cljs.core.nth.call(null,vec__8248_9560,0,null);var func__7757__auto___9562 = cljs.core.nth.call(null,vec__8248_9560,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9561,func__7757__auto___9562);
{
var G__9563 = cljs.core.next.call(null,seq__8243_9554__$1);
var G__9564 = null;
var G__9565 = 0;
var G__9566 = 0;
seq__8243_9542 = G__9563;
chunk__8244_9543 = G__9564;
count__8245_9544 = G__9565;
i__8246_9545 = G__9566;
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
lt.plugins.gitlight.diff.commit_body = (function commit_body(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.body","textarea.body",3433374536),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit body",new cljs.core.Keyword(null,"cols","cols",1016963685),81,new cljs.core.Keyword(null,"rows","rows",1017410891),10], null)], null));var seq__8255_9567 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8256_9568 = null;var count__8257_9569 = 0;var i__8258_9570 = 0;while(true){
if((i__8258_9570 < count__8257_9569))
{var vec__8259_9571 = cljs.core._nth.call(null,chunk__8256_9568,i__8258_9570);var ev__7756__auto___9572 = cljs.core.nth.call(null,vec__8259_9571,0,null);var func__7757__auto___9573 = cljs.core.nth.call(null,vec__8259_9571,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9572,func__7757__auto___9573);
{
var G__9574 = seq__8255_9567;
var G__9575 = chunk__8256_9568;
var G__9576 = count__8257_9569;
var G__9577 = (i__8258_9570 + 1);
seq__8255_9567 = G__9574;
chunk__8256_9568 = G__9575;
count__8257_9569 = G__9576;
i__8258_9570 = G__9577;
continue;
}
} else
{var temp__4092__auto___9578 = cljs.core.seq.call(null,seq__8255_9567);if(temp__4092__auto___9578)
{var seq__8255_9579__$1 = temp__4092__auto___9578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8255_9579__$1))
{var c__7112__auto___9580 = cljs.core.chunk_first.call(null,seq__8255_9579__$1);{
var G__9581 = cljs.core.chunk_rest.call(null,seq__8255_9579__$1);
var G__9582 = c__7112__auto___9580;
var G__9583 = cljs.core.count.call(null,c__7112__auto___9580);
var G__9584 = 0;
seq__8255_9567 = G__9581;
chunk__8256_9568 = G__9582;
count__8257_9569 = G__9583;
i__8258_9570 = G__9584;
continue;
}
} else
{var vec__8260_9585 = cljs.core.first.call(null,seq__8255_9579__$1);var ev__7756__auto___9586 = cljs.core.nth.call(null,vec__8260_9585,0,null);var func__7757__auto___9587 = cljs.core.nth.call(null,vec__8260_9585,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9586,func__7757__auto___9587);
{
var G__9588 = cljs.core.next.call(null,seq__8255_9579__$1);
var G__9589 = null;
var G__9590 = 0;
var G__9591 = 0;
seq__8255_9567 = G__9588;
chunk__8256_9568 = G__9589;
count__8257_9569 = G__9590;
i__8258_9570 = G__9591;
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
return (function iter__8884(s__8885){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__8885__$1 = s__8885;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8885__$1);if(temp__4092__auto__)
{var s__8885__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8885__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8885__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8887 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8886 = 0;while(true){
if((i__8886 < size__7080__auto__))
{var vec__9194 = cljs.core._nth.call(null,c__7079__auto__,i__8886);var header = cljs.core.nth.call(null,vec__9194,0,null);var left = cljs.core.nth.call(null,vec__9194,1,null);var right = cljs.core.nth.call(null,vec__9194,2,null);var groups = cljs.core.nth.call(null,vec__9194,3,null);cljs.core.chunk_append.call(null,b__8887,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),header], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),right], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__8886,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function iter__9195(s__9196){return (new cljs.core.LazySeq(null,((function (i__8886,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9196__$1 = s__9196;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9196__$1);if(temp__4092__auto____$1)
{var s__9196__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9196__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9196__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9198 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9197 = 0;while(true){
if((i__9197 < size__7080__auto____$1))
{var vec__9273 = cljs.core._nth.call(null,c__7079__auto____$1,i__9197);var location = cljs.core.nth.call(null,vec__9273,0,null);var content = cljs.core.nth.call(null,vec__9273,1,null);cljs.core.chunk_append.call(null,b__9198,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),location], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__9197,i__8886,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function iter__9274(s__9275){return (new cljs.core.LazySeq(null,((function (i__9197,i__8886,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9275__$1 = s__9275;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9275__$1);if(temp__4092__auto____$2)
{var s__9275__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9275__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9275__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9277 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9276 = 0;while(true){
if((i__9276 < size__7080__auto____$2))
{var line_group = cljs.core._nth.call(null,c__7079__auto____$2,i__9276);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);cljs.core.chunk_append.call(null,b__9277,(function (){var iter__7081__auto__ = ((function (i__9276,i__9197,i__8886,columned,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9277,s__9275__$2,temp__4092__auto____$2,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function iter__9294(s__9295){return (new cljs.core.LazySeq(null,((function (i__9276,i__9197,i__8886,columned,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9277,s__9275__$2,temp__4092__auto____$2,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9295__$1 = s__9295;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9295__$1);if(temp__4092__auto____$3)
{var s__9295__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9295__$2))
{var c__7079__auto____$3 = cljs.core.chunk_first.call(null,s__9295__$2);var size__7080__auto____$3 = cljs.core.count.call(null,c__7079__auto____$3);var b__9297 = cljs.core.chunk_buffer.call(null,size__7080__auto____$3);if((function (){var i__9296 = 0;while(true){
if((i__9296 < size__7080__auto____$3))
{var vec__9300 = cljs.core._nth.call(null,c__7079__auto____$3,i__9296);var left__$1 = cljs.core.nth.call(null,vec__9300,0,null);var right__$1 = cljs.core.nth.call(null,vec__9300,1,null);cljs.core.chunk_append.call(null,b__9297,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null));
{
var G__9592 = (i__9296 + 1);
i__9296 = G__9592;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9297),iter__9294.call(null,cljs.core.chunk_rest.call(null,s__9295__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9297),null);
}
} else
{var vec__9301 = cljs.core.first.call(null,s__9295__$2);var left__$1 = cljs.core.nth.call(null,vec__9301,0,null);var right__$1 = cljs.core.nth.call(null,vec__9301,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null),iter__9294.call(null,cljs.core.rest.call(null,s__9295__$2)));
}
} else
{return null;
}
break;
}
});})(i__9276,i__9197,i__8886,columned,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9277,s__9275__$2,temp__4092__auto____$2,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(i__9276,i__9197,i__8886,columned,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9277,s__9275__$2,temp__4092__auto____$2,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned));
})());
{
var G__9593 = (i__9276 + 1);
i__9276 = G__9593;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9277),iter__9274.call(null,cljs.core.chunk_rest.call(null,s__9275__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9277),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9275__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (i__9197,i__8886,columned,line_group,s__9275__$2,temp__4092__auto____$2,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function iter__9302(s__9303){return (new cljs.core.LazySeq(null,((function (i__9197,i__8886,columned,line_group,s__9275__$2,temp__4092__auto____$2,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9303__$1 = s__9303;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9303__$1);if(temp__4092__auto____$3)
{var s__9303__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9303__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9303__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9305 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9304 = 0;while(true){
if((i__9304 < size__7080__auto____$2))
{var vec__9308 = cljs.core._nth.call(null,c__7079__auto____$2,i__9304);var left__$1 = cljs.core.nth.call(null,vec__9308,0,null);var right__$1 = cljs.core.nth.call(null,vec__9308,1,null);cljs.core.chunk_append.call(null,b__9305,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null));
{
var G__9594 = (i__9304 + 1);
i__9304 = G__9594;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9305),iter__9302.call(null,cljs.core.chunk_rest.call(null,s__9303__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9305),null);
}
} else
{var vec__9309 = cljs.core.first.call(null,s__9303__$2);var left__$1 = cljs.core.nth.call(null,vec__9309,0,null);var right__$1 = cljs.core.nth.call(null,vec__9309,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null),iter__9302.call(null,cljs.core.rest.call(null,s__9303__$2)));
}
} else
{return null;
}
break;
}
});})(i__9197,i__8886,columned,line_group,s__9275__$2,temp__4092__auto____$2,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(i__9197,i__8886,columned,line_group,s__9275__$2,temp__4092__auto____$2,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned));
})(),iter__9274.call(null,cljs.core.rest.call(null,s__9275__$2)));
}
} else
{return null;
}
break;
}
});})(i__9197,i__8886,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(i__9197,i__8886,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,cljs.core.partition_by.call(null,((function (i__9197,i__8886,iter__7081__auto__,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function (p1__8261_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__8261_SHARP_));
});})(i__9197,i__8886,iter__7081__auto__,vec__9273,location,content,c__7079__auto____$1,size__7080__auto____$1,b__9198,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
,content));
})()));
{
var G__9595 = (i__9197 + 1);
i__9197 = G__9595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9198),iter__9195.call(null,cljs.core.chunk_rest.call(null,s__9196__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9198),null);
}
} else
{var vec__9310 = cljs.core.first.call(null,s__9196__$2);var location = cljs.core.nth.call(null,vec__9310,0,null);var content = cljs.core.nth.call(null,vec__9310,1,null);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),location], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__8886,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function iter__9311(s__9312){return (new cljs.core.LazySeq(null,((function (i__8886,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9312__$1 = s__9312;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9312__$1);if(temp__4092__auto____$2)
{var s__9312__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9312__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9312__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9314 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9313 = 0;while(true){
if((i__9313 < size__7080__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7079__auto____$1,i__9313);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);cljs.core.chunk_append.call(null,b__9314,(function (){var iter__7081__auto__ = ((function (i__9313,i__8886,columned,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9314,s__9312__$2,temp__4092__auto____$2,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function iter__9331(s__9332){return (new cljs.core.LazySeq(null,((function (i__9313,i__8886,columned,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9314,s__9312__$2,temp__4092__auto____$2,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9332__$1 = s__9332;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9332__$1);if(temp__4092__auto____$3)
{var s__9332__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9332__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9332__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9334 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9333 = 0;while(true){
if((i__9333 < size__7080__auto____$2))
{var vec__9337 = cljs.core._nth.call(null,c__7079__auto____$2,i__9333);var left__$1 = cljs.core.nth.call(null,vec__9337,0,null);var right__$1 = cljs.core.nth.call(null,vec__9337,1,null);cljs.core.chunk_append.call(null,b__9334,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null));
{
var G__9596 = (i__9333 + 1);
i__9333 = G__9596;
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
{var vec__9338 = cljs.core.first.call(null,s__9332__$2);var left__$1 = cljs.core.nth.call(null,vec__9338,0,null);var right__$1 = cljs.core.nth.call(null,vec__9338,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null),iter__9331.call(null,cljs.core.rest.call(null,s__9332__$2)));
}
} else
{return null;
}
break;
}
});})(i__9313,i__8886,columned,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9314,s__9312__$2,temp__4092__auto____$2,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(i__9313,i__8886,columned,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9314,s__9312__$2,temp__4092__auto____$2,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned));
})());
{
var G__9597 = (i__9313 + 1);
i__9313 = G__9597;
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
{var line_group = cljs.core.first.call(null,s__9312__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (i__8886,columned,line_group,s__9312__$2,temp__4092__auto____$2,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function iter__9339(s__9340){return (new cljs.core.LazySeq(null,((function (i__8886,columned,line_group,s__9312__$2,temp__4092__auto____$2,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9340__$1 = s__9340;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9340__$1);if(temp__4092__auto____$3)
{var s__9340__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9340__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9340__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9342 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9341 = 0;while(true){
if((i__9341 < size__7080__auto____$1))
{var vec__9345 = cljs.core._nth.call(null,c__7079__auto____$1,i__9341);var left__$1 = cljs.core.nth.call(null,vec__9345,0,null);var right__$1 = cljs.core.nth.call(null,vec__9345,1,null);cljs.core.chunk_append.call(null,b__9342,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null));
{
var G__9598 = (i__9341 + 1);
i__9341 = G__9598;
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
{var vec__9346 = cljs.core.first.call(null,s__9340__$2);var left__$1 = cljs.core.nth.call(null,vec__9346,0,null);var right__$1 = cljs.core.nth.call(null,vec__9346,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null),iter__9339.call(null,cljs.core.rest.call(null,s__9340__$2)));
}
} else
{return null;
}
break;
}
});})(i__8886,columned,line_group,s__9312__$2,temp__4092__auto____$2,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(i__8886,columned,line_group,s__9312__$2,temp__4092__auto____$2,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned));
})(),iter__9311.call(null,cljs.core.rest.call(null,s__9312__$2)));
}
} else
{return null;
}
break;
}
});})(i__8886,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(i__8886,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,cljs.core.partition_by.call(null,((function (i__8886,iter__7081__auto__,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output){
return (function (p1__8261_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__8261_SHARP_));
});})(i__8886,iter__7081__auto__,vec__9310,location,content,s__9196__$2,temp__4092__auto____$1,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
,content));
})()),iter__9195.call(null,cljs.core.rest.call(null,s__9196__$2)));
}
} else
{return null;
}
break;
}
});})(i__8886,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(i__8886,vec__9194,header,left,right,groups,c__7079__auto__,size__7080__auto__,b__8887,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,groups);
})()], null));
{
var G__9599 = (i__8886 + 1);
i__8886 = G__9599;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8887),iter__8884.call(null,cljs.core.chunk_rest.call(null,s__8885__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8887),null);
}
} else
{var vec__9347 = cljs.core.first.call(null,s__8885__$2);var header = cljs.core.nth.call(null,vec__9347,0,null);var left = cljs.core.nth.call(null,vec__9347,1,null);var right = cljs.core.nth.call(null,vec__9347,2,null);var groups = cljs.core.nth.call(null,vec__9347,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),header], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),right], null)], null)], null),(function (){var iter__7081__auto__ = ((function (vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function iter__9348(s__9349){return (new cljs.core.LazySeq(null,((function (vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9349__$1 = s__9349;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9349__$1);if(temp__4092__auto____$1)
{var s__9349__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9349__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9349__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9351 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9350 = 0;while(true){
if((i__9350 < size__7080__auto__))
{var vec__9426 = cljs.core._nth.call(null,c__7079__auto__,i__9350);var location = cljs.core.nth.call(null,vec__9426,0,null);var content = cljs.core.nth.call(null,vec__9426,1,null);cljs.core.chunk_append.call(null,b__9351,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),location], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__9350,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function iter__9427(s__9428){return (new cljs.core.LazySeq(null,((function (i__9350,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9428__$1 = s__9428;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9428__$1);if(temp__4092__auto____$2)
{var s__9428__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9428__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9428__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9430 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9429 = 0;while(true){
if((i__9429 < size__7080__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7079__auto____$1,i__9429);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);cljs.core.chunk_append.call(null,b__9430,(function (){var iter__7081__auto__ = ((function (i__9429,i__9350,columned,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9430,s__9428__$2,temp__4092__auto____$2,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function iter__9447(s__9448){return (new cljs.core.LazySeq(null,((function (i__9429,i__9350,columned,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9430,s__9428__$2,temp__4092__auto____$2,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9448__$1 = s__9448;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9448__$1);if(temp__4092__auto____$3)
{var s__9448__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9448__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9448__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9450 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9449 = 0;while(true){
if((i__9449 < size__7080__auto____$2))
{var vec__9453 = cljs.core._nth.call(null,c__7079__auto____$2,i__9449);var left__$1 = cljs.core.nth.call(null,vec__9453,0,null);var right__$1 = cljs.core.nth.call(null,vec__9453,1,null);cljs.core.chunk_append.call(null,b__9450,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null));
{
var G__9600 = (i__9449 + 1);
i__9449 = G__9600;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9450),iter__9447.call(null,cljs.core.chunk_rest.call(null,s__9448__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9450),null);
}
} else
{var vec__9454 = cljs.core.first.call(null,s__9448__$2);var left__$1 = cljs.core.nth.call(null,vec__9454,0,null);var right__$1 = cljs.core.nth.call(null,vec__9454,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null),iter__9447.call(null,cljs.core.rest.call(null,s__9448__$2)));
}
} else
{return null;
}
break;
}
});})(i__9429,i__9350,columned,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9430,s__9428__$2,temp__4092__auto____$2,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(i__9429,i__9350,columned,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9430,s__9428__$2,temp__4092__auto____$2,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned));
})());
{
var G__9601 = (i__9429 + 1);
i__9429 = G__9601;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9430),iter__9427.call(null,cljs.core.chunk_rest.call(null,s__9428__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9430),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9428__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (i__9350,columned,line_group,s__9428__$2,temp__4092__auto____$2,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function iter__9455(s__9456){return (new cljs.core.LazySeq(null,((function (i__9350,columned,line_group,s__9428__$2,temp__4092__auto____$2,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9456__$1 = s__9456;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9456__$1);if(temp__4092__auto____$3)
{var s__9456__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9456__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9456__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9458 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9457 = 0;while(true){
if((i__9457 < size__7080__auto____$1))
{var vec__9461 = cljs.core._nth.call(null,c__7079__auto____$1,i__9457);var left__$1 = cljs.core.nth.call(null,vec__9461,0,null);var right__$1 = cljs.core.nth.call(null,vec__9461,1,null);cljs.core.chunk_append.call(null,b__9458,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null));
{
var G__9602 = (i__9457 + 1);
i__9457 = G__9602;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9458),iter__9455.call(null,cljs.core.chunk_rest.call(null,s__9456__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9458),null);
}
} else
{var vec__9462 = cljs.core.first.call(null,s__9456__$2);var left__$1 = cljs.core.nth.call(null,vec__9462,0,null);var right__$1 = cljs.core.nth.call(null,vec__9462,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null),iter__9455.call(null,cljs.core.rest.call(null,s__9456__$2)));
}
} else
{return null;
}
break;
}
});})(i__9350,columned,line_group,s__9428__$2,temp__4092__auto____$2,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(i__9350,columned,line_group,s__9428__$2,temp__4092__auto____$2,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned));
})(),iter__9427.call(null,cljs.core.rest.call(null,s__9428__$2)));
}
} else
{return null;
}
break;
}
});})(i__9350,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(i__9350,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,cljs.core.partition_by.call(null,((function (i__9350,iter__7081__auto__,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function (p1__8261_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__8261_SHARP_));
});})(i__9350,iter__7081__auto__,vec__9426,location,content,c__7079__auto__,size__7080__auto__,b__9351,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
,content));
})()));
{
var G__9603 = (i__9350 + 1);
i__9350 = G__9603;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9351),iter__9348.call(null,cljs.core.chunk_rest.call(null,s__9349__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9351),null);
}
} else
{var vec__9463 = cljs.core.first.call(null,s__9349__$2);var location = cljs.core.nth.call(null,vec__9463,0,null);var content = cljs.core.nth.call(null,vec__9463,1,null);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),location], null)], null)], null),(function (){var iter__7081__auto__ = ((function (vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function iter__9464(s__9465){return (new cljs.core.LazySeq(null,((function (vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9465__$1 = s__9465;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9465__$1);if(temp__4092__auto____$2)
{var s__9465__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9465__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9465__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9467 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9466 = 0;while(true){
if((i__9466 < size__7080__auto__))
{var line_group = cljs.core._nth.call(null,c__7079__auto__,i__9466);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);cljs.core.chunk_append.call(null,b__9467,(function (){var iter__7081__auto__ = ((function (i__9466,columned,line_group,c__7079__auto__,size__7080__auto__,b__9467,s__9465__$2,temp__4092__auto____$2,vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function iter__9484(s__9485){return (new cljs.core.LazySeq(null,((function (i__9466,columned,line_group,c__7079__auto__,size__7080__auto__,b__9467,s__9465__$2,temp__4092__auto____$2,vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9485__$1 = s__9485;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9485__$1);if(temp__4092__auto____$3)
{var s__9485__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9485__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9485__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9487 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9486 = 0;while(true){
if((i__9486 < size__7080__auto____$1))
{var vec__9490 = cljs.core._nth.call(null,c__7079__auto____$1,i__9486);var left__$1 = cljs.core.nth.call(null,vec__9490,0,null);var right__$1 = cljs.core.nth.call(null,vec__9490,1,null);cljs.core.chunk_append.call(null,b__9487,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null));
{
var G__9604 = (i__9486 + 1);
i__9486 = G__9604;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9487),iter__9484.call(null,cljs.core.chunk_rest.call(null,s__9485__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9487),null);
}
} else
{var vec__9491 = cljs.core.first.call(null,s__9485__$2);var left__$1 = cljs.core.nth.call(null,vec__9491,0,null);var right__$1 = cljs.core.nth.call(null,vec__9491,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null),iter__9484.call(null,cljs.core.rest.call(null,s__9485__$2)));
}
} else
{return null;
}
break;
}
});})(i__9466,columned,line_group,c__7079__auto__,size__7080__auto__,b__9467,s__9465__$2,temp__4092__auto____$2,vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(i__9466,columned,line_group,c__7079__auto__,size__7080__auto__,b__9467,s__9465__$2,temp__4092__auto____$2,vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned));
})());
{
var G__9605 = (i__9466 + 1);
i__9466 = G__9605;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9467),iter__9464.call(null,cljs.core.chunk_rest.call(null,s__9465__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9467),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9465__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (columned,line_group,s__9465__$2,temp__4092__auto____$2,vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function iter__9492(s__9493){return (new cljs.core.LazySeq(null,((function (columned,line_group,s__9465__$2,temp__4092__auto____$2,vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function (){var s__9493__$1 = s__9493;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9493__$1);if(temp__4092__auto____$3)
{var s__9493__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9493__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9493__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9495 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9494 = 0;while(true){
if((i__9494 < size__7080__auto__))
{var vec__9498 = cljs.core._nth.call(null,c__7079__auto__,i__9494);var left__$1 = cljs.core.nth.call(null,vec__9498,0,null);var right__$1 = cljs.core.nth.call(null,vec__9498,1,null);cljs.core.chunk_append.call(null,b__9495,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null));
{
var G__9606 = (i__9494 + 1);
i__9494 = G__9606;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9495),iter__9492.call(null,cljs.core.chunk_rest.call(null,s__9493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9495),null);
}
} else
{var vec__9499 = cljs.core.first.call(null,s__9493__$2);var left__$1 = cljs.core.nth.call(null,vec__9499,0,null);var right__$1 = cljs.core.nth.call(null,vec__9499,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right__$1], null)], null)], null),iter__9492.call(null,cljs.core.rest.call(null,s__9493__$2)));
}
} else
{return null;
}
break;
}
});})(columned,line_group,s__9465__$2,temp__4092__auto____$2,vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(columned,line_group,s__9465__$2,temp__4092__auto____$2,vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned));
})(),iter__9464.call(null,cljs.core.rest.call(null,s__9465__$2)));
}
} else
{return null;
}
break;
}
});})(vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,cljs.core.partition_by.call(null,((function (iter__7081__auto__,vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output){
return (function (p1__8261_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__8261_SHARP_));
});})(iter__7081__auto__,vec__9463,location,content,s__9349__$2,temp__4092__auto____$1,vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
,content));
})()),iter__9348.call(null,cljs.core.rest.call(null,s__9349__$2)));
}
} else
{return null;
}
break;
}
});})(vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
,null,null));
});})(vec__9347,header,left,right,groups,s__8885__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,groups);
})()], null),iter__8884.call(null,cljs.core.rest.call(null,s__8885__$2)));
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
})());var seq__9500_9607 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9501_9608 = null;var count__9502_9609 = 0;var i__9503_9610 = 0;while(true){
if((i__9503_9610 < count__9502_9609))
{var vec__9504_9611 = cljs.core._nth.call(null,chunk__9501_9608,i__9503_9610);var ev__7756__auto___9612 = cljs.core.nth.call(null,vec__9504_9611,0,null);var func__7757__auto___9613 = cljs.core.nth.call(null,vec__9504_9611,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9612,func__7757__auto___9613);
{
var G__9614 = seq__9500_9607;
var G__9615 = chunk__9501_9608;
var G__9616 = count__9502_9609;
var G__9617 = (i__9503_9610 + 1);
seq__9500_9607 = G__9614;
chunk__9501_9608 = G__9615;
count__9502_9609 = G__9616;
i__9503_9610 = G__9617;
continue;
}
} else
{var temp__4092__auto___9618 = cljs.core.seq.call(null,seq__9500_9607);if(temp__4092__auto___9618)
{var seq__9500_9619__$1 = temp__4092__auto___9618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9500_9619__$1))
{var c__7112__auto___9620 = cljs.core.chunk_first.call(null,seq__9500_9619__$1);{
var G__9621 = cljs.core.chunk_rest.call(null,seq__9500_9619__$1);
var G__9622 = c__7112__auto___9620;
var G__9623 = cljs.core.count.call(null,c__7112__auto___9620);
var G__9624 = 0;
seq__9500_9607 = G__9621;
chunk__9501_9608 = G__9622;
count__9502_9609 = G__9623;
i__9503_9610 = G__9624;
continue;
}
} else
{var vec__9505_9625 = cljs.core.first.call(null,seq__9500_9619__$1);var ev__7756__auto___9626 = cljs.core.nth.call(null,vec__9505_9625,0,null);var func__7757__auto___9627 = cljs.core.nth.call(null,vec__9505_9625,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9626,func__7757__auto___9627);
{
var G__9628 = cljs.core.next.call(null,seq__9500_9619__$1);
var G__9629 = null;
var G__9630 = 0;
var G__9631 = 0;
seq__9500_9607 = G__9628;
chunk__9501_9608 = G__9629;
count__9502_9609 = G__9630;
i__9503_9610 = G__9631;
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
lt.plugins.gitlight.diff.separate = (function separate(fun,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,fun,coll),cljs.core.filter.call(null,cljs.core.complement.call(null,fun),coll)], null);
});
lt.plugins.gitlight.diff.nil_padder = (function nil_padder(coll,padding){return cljs.core.concat.call(null,coll,cljs.core.repeat.call(null,padding,null));
});
/**
* @param {...*} var_args
*/
lt.plugins.gitlight.diff.pad_smaller_with_nils = (function() { 
var pad_smaller_with_nils__delegate = function (args){var counts = cljs.core.map.call(null,cljs.core.count,args);var paddings = cljs.core.map.call(null,cljs.core._,cljs.core.reverse.call(null,counts),counts);return cljs.core.map.call(null,lt.plugins.gitlight.diff.nil_padder,args,paddings);
};
var pad_smaller_with_nils = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pad_smaller_with_nils__delegate.call(this,args);};
pad_smaller_with_nils.cljs$lang$maxFixedArity = 0;
pad_smaller_with_nils.cljs$lang$applyTo = (function (arglist__9632){
var args = cljs.core.seq(arglist__9632);
return pad_smaller_with_nils__delegate(args);
});
pad_smaller_with_nils.cljs$core$IFn$_invoke$arity$variadic = pad_smaller_with_nils__delegate;
return pad_smaller_with_nils;
})()
;
lt.plugins.gitlight.diff.columner = (function columner(lines){if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"context",new cljs.core.Keyword(null,"cols","cols",1016963685),cljs.core.map.call(null,cljs.core.vector,lines,lines)], null);
} else
{var vec__9508 = lt.plugins.gitlight.diff.separate.call(null,(function (p1__9506_SHARP_){return cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p1__9506_SHARP_));
}),lines);var left = cljs.core.nth.call(null,vec__9508,0,null);var right = cljs.core.nth.call(null,vec__9508,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"changed",new cljs.core.Keyword(null,"cols","cols",1016963685),cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.vector),lt.plugins.gitlight.diff.pad_smaller_with_nils.call(null,left,right))], null);
}
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(file_lines){return cljs.core.partition.call(null,2,cljs.core.partition_by.call(null,(function (p1__9509_SHARP_){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,p1__9509_SHARP_));
}),file_lines));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(lines){var vec__9511 = cljs.core.split_at.call(null,3,lines);var fileinfo = cljs.core.nth.call(null,vec__9511,0,null);var diff_lines = cljs.core.nth.call(null,vec__9511,1,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,diff_lines);return cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,fileinfo),groups);
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
lt.plugins.gitlight.diff.git_diff_button = (function git_diff_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,filename);
});
lt.plugins.gitlight.diff.git_diff_cached_button = (function git_diff_cached_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,filename,true);
});
lt.plugins.gitlight.diff.git_diff_repo_button = (function git_diff_repo_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,"");
});
lt.plugins.gitlight.diff.git_diff_cached_repo_button = (function git_diff_cached_repo_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,"",true);
});
lt.plugins.gitlight.diff.style_diff_marker = (function style_diff_marker(p__9512){var vec__9520 = p__9512;var p = cljs.core.nth.call(null,vec__9520,0,null);var m = cljs.core.nth.call(null,vec__9520,1,null);var content = vec__9520;var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(((cljs.core._EQ_.call(null,p," ")) && ((m == null)))?"no-change":(((cljs.core._EQ_.call(null,p,"+")) && ((m == null)))?"added-line":(((cljs.core._EQ_.call(null,p," ")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"deleted-lines":(((cljs.core._EQ_.call(null,p,"+")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"modified-line":null))))], null),content], null));var seq__9521_9633 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9522_9634 = null;var count__9523_9635 = 0;var i__9524_9636 = 0;while(true){
if((i__9524_9636 < count__9523_9635))
{var vec__9525_9637 = cljs.core._nth.call(null,chunk__9522_9634,i__9524_9636);var ev__7756__auto___9638 = cljs.core.nth.call(null,vec__9525_9637,0,null);var func__7757__auto___9639 = cljs.core.nth.call(null,vec__9525_9637,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9638,func__7757__auto___9639);
{
var G__9640 = seq__9521_9633;
var G__9641 = chunk__9522_9634;
var G__9642 = count__9523_9635;
var G__9643 = (i__9524_9636 + 1);
seq__9521_9633 = G__9640;
chunk__9522_9634 = G__9641;
count__9523_9635 = G__9642;
i__9524_9636 = G__9643;
continue;
}
} else
{var temp__4092__auto___9644 = cljs.core.seq.call(null,seq__9521_9633);if(temp__4092__auto___9644)
{var seq__9521_9645__$1 = temp__4092__auto___9644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9521_9645__$1))
{var c__7112__auto___9646 = cljs.core.chunk_first.call(null,seq__9521_9645__$1);{
var G__9647 = cljs.core.chunk_rest.call(null,seq__9521_9645__$1);
var G__9648 = c__7112__auto___9646;
var G__9649 = cljs.core.count.call(null,c__7112__auto___9646);
var G__9650 = 0;
seq__9521_9633 = G__9647;
chunk__9522_9634 = G__9648;
count__9523_9635 = G__9649;
i__9524_9636 = G__9650;
continue;
}
} else
{var vec__9526_9651 = cljs.core.first.call(null,seq__9521_9645__$1);var ev__7756__auto___9652 = cljs.core.nth.call(null,vec__9526_9651,0,null);var func__7757__auto___9653 = cljs.core.nth.call(null,vec__9526_9651,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9652,func__7757__auto___9653);
{
var G__9654 = cljs.core.next.call(null,seq__9521_9645__$1);
var G__9655 = null;
var G__9656 = 0;
var G__9657 = 0;
seq__9521_9633 = G__9654;
chunk__9522_9634 = G__9655;
count__9523_9635 = G__9656;
i__9524_9636 = G__9657;
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
lt.plugins.gitlight.diff.make_indicator = (function make_indicator(p__9527,marker){var vec__9530 = p__9527;var consumed = cljs.core.nth.call(null,vec__9530,0,null);var deficit = cljs.core.nth.call(null,vec__9530,1,null);var new_marker = lt.plugins.gitlight.diff.with_deficit.call(null,marker,deficit);var added_new = cljs.core.conj.call(null,consumed,new_marker);var G__9531 = marker;if(cljs.core._EQ_.call(null," ",G__9531))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [added_new,0], null);
} else
{if(cljs.core._EQ_.call(null,"+",G__9531))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [added_new,lt.plugins.gitlight.diff.dec_GT_0.call(null,deficit)], null);
} else
{if(cljs.core._EQ_.call(null,"-",G__9531))
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__10242){var vec__10258 = p__10242;var f = cljs.core.nth.call(null,vec__10258,0,null);var t = cljs.core.nth.call(null,vec__10258,1,null);var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,f,f,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = ((function (vec__10258,f,t){
return (function iter__10259(s__10260){return (new cljs.core.LazySeq(null,((function (vec__10258,f,t){
return (function (){var s__10260__$1 = s__10260;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10260__$1);if(temp__4092__auto__)
{var s__10260__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10260__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10260__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10262 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10261 = 0;while(true){
if((i__10261 < size__7080__auto__))
{var vec__10265 = cljs.core._nth.call(null,c__7079__auto__,i__10261);var bt = cljs.core.nth.call(null,vec__10265,0,null);var fun = cljs.core.nth.call(null,vec__10265,1,null);cljs.core.chunk_append.call(null,b__10262,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun));
{
var G__10397 = (i__10261 + 1);
i__10261 = G__10397;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10262),iter__10259.call(null,cljs.core.chunk_rest.call(null,s__10260__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10262),null);
}
} else
{var vec__10266 = cljs.core.first.call(null,s__10260__$2);var bt = cljs.core.nth.call(null,vec__10266,0,null);var fun = cljs.core.nth.call(null,vec__10266,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun),iter__10259.call(null,cljs.core.rest.call(null,s__10260__$2)));
}
} else
{return null;
}
break;
}
});})(vec__10258,f,t))
,null,null));
});})(vec__10258,f,t))
;return iter__7081__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__10267_10398 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10268_10399 = null;var count__10269_10400 = 0;var i__10270_10401 = 0;while(true){
if((i__10270_10401 < count__10269_10400))
{var vec__10271_10402 = cljs.core._nth.call(null,chunk__10268_10399,i__10270_10401);var ev__7756__auto___10403 = cljs.core.nth.call(null,vec__10271_10402,0,null);var func__7757__auto___10404 = cljs.core.nth.call(null,vec__10271_10402,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10403,func__7757__auto___10404);
{
var G__10405 = seq__10267_10398;
var G__10406 = chunk__10268_10399;
var G__10407 = count__10269_10400;
var G__10408 = (i__10270_10401 + 1);
seq__10267_10398 = G__10405;
chunk__10268_10399 = G__10406;
count__10269_10400 = G__10407;
i__10270_10401 = G__10408;
continue;
}
} else
{var temp__4092__auto___10409 = cljs.core.seq.call(null,seq__10267_10398);if(temp__4092__auto___10409)
{var seq__10267_10410__$1 = temp__4092__auto___10409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10267_10410__$1))
{var c__7112__auto___10411 = cljs.core.chunk_first.call(null,seq__10267_10410__$1);{
var G__10412 = cljs.core.chunk_rest.call(null,seq__10267_10410__$1);
var G__10413 = c__7112__auto___10411;
var G__10414 = cljs.core.count.call(null,c__7112__auto___10411);
var G__10415 = 0;
seq__10267_10398 = G__10412;
chunk__10268_10399 = G__10413;
count__10269_10400 = G__10414;
i__10270_10401 = G__10415;
continue;
}
} else
{var vec__10272_10416 = cljs.core.first.call(null,seq__10267_10410__$1);var ev__7756__auto___10417 = cljs.core.nth.call(null,vec__10272_10416,0,null);var func__7757__auto___10418 = cljs.core.nth.call(null,vec__10272_10416,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10417,func__7757__auto___10418);
{
var G__10419 = cljs.core.next.call(null,seq__10267_10410__$1);
var G__10420 = null;
var G__10421 = 0;
var G__10422 = 0;
seq__10267_10398 = G__10419;
chunk__10268_10399 = G__10420;
count__10269_10400 = G__10421;
i__10270_10401 = G__10422;
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__10279_10423 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10280_10424 = null;var count__10281_10425 = 0;var i__10282_10426 = 0;while(true){
if((i__10282_10426 < count__10281_10425))
{var vec__10283_10427 = cljs.core._nth.call(null,chunk__10280_10424,i__10282_10426);var ev__7756__auto___10428 = cljs.core.nth.call(null,vec__10283_10427,0,null);var func__7757__auto___10429 = cljs.core.nth.call(null,vec__10283_10427,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10428,func__7757__auto___10429);
{
var G__10430 = seq__10279_10423;
var G__10431 = chunk__10280_10424;
var G__10432 = count__10281_10425;
var G__10433 = (i__10282_10426 + 1);
seq__10279_10423 = G__10430;
chunk__10280_10424 = G__10431;
count__10281_10425 = G__10432;
i__10282_10426 = G__10433;
continue;
}
} else
{var temp__4092__auto___10434 = cljs.core.seq.call(null,seq__10279_10423);if(temp__4092__auto___10434)
{var seq__10279_10435__$1 = temp__4092__auto___10434;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10279_10435__$1))
{var c__7112__auto___10436 = cljs.core.chunk_first.call(null,seq__10279_10435__$1);{
var G__10437 = cljs.core.chunk_rest.call(null,seq__10279_10435__$1);
var G__10438 = c__7112__auto___10436;
var G__10439 = cljs.core.count.call(null,c__7112__auto___10436);
var G__10440 = 0;
seq__10279_10423 = G__10437;
chunk__10280_10424 = G__10438;
count__10281_10425 = G__10439;
i__10282_10426 = G__10440;
continue;
}
} else
{var vec__10284_10441 = cljs.core.first.call(null,seq__10279_10435__$1);var ev__7756__auto___10442 = cljs.core.nth.call(null,vec__10284_10441,0,null);var func__7757__auto___10443 = cljs.core.nth.call(null,vec__10284_10441,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10442,func__7757__auto___10443);
{
var G__10444 = cljs.core.next.call(null,seq__10279_10435__$1);
var G__10445 = null;
var G__10446 = 0;
var G__10447 = 0;
seq__10279_10423 = G__10444;
chunk__10280_10424 = G__10445;
count__10281_10425 = G__10446;
i__10282_10426 = G__10447;
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
}))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = (function iter__10335(s__10336){return (new cljs.core.LazySeq(null,(function (){var s__10336__$1 = s__10336;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10336__$1);if(temp__4092__auto__)
{var s__10336__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10336__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10336__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10338 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10337 = 0;while(true){
if((i__10337 < size__7080__auto__))
{var option_group = cljs.core._nth.call(null,c__7079__auto__,i__10337);cljs.core.chunk_append.call(null,b__10338,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (i__10337,option_group,c__7079__auto__,size__7080__auto__,b__10338,s__10336__$2,temp__4092__auto__){
return (function iter__10355(s__10356){return (new cljs.core.LazySeq(null,((function (i__10337,option_group,c__7079__auto__,size__7080__auto__,b__10338,s__10336__$2,temp__4092__auto__){
return (function (){var s__10356__$1 = s__10356;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10356__$1);if(temp__4092__auto____$1)
{var s__10356__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10356__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__10356__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__10358 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__10357 = 0;while(true){
if((i__10357 < size__7080__auto____$1))
{var vec__10361 = cljs.core._nth.call(null,c__7079__auto____$1,i__10357);var bname = cljs.core.nth.call(null,vec__10361,0,null);var fun = cljs.core.nth.call(null,vec__10361,1,null);cljs.core.chunk_append.call(null,b__10358,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10448 = (i__10357 + 1);
i__10357 = G__10448;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10358),iter__10355.call(null,cljs.core.chunk_rest.call(null,s__10356__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10358),null);
}
} else
{var vec__10362 = cljs.core.first.call(null,s__10356__$2);var bname = cljs.core.nth.call(null,vec__10362,0,null);var fun = cljs.core.nth.call(null,vec__10362,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10355.call(null,cljs.core.rest.call(null,s__10356__$2)));
}
} else
{return null;
}
break;
}
});})(i__10337,option_group,c__7079__auto__,size__7080__auto__,b__10338,s__10336__$2,temp__4092__auto__))
,null,null));
});})(i__10337,option_group,c__7079__auto__,size__7080__auto__,b__10338,s__10336__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null));
{
var G__10449 = (i__10337 + 1);
i__10337 = G__10449;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10338),iter__10335.call(null,cljs.core.chunk_rest.call(null,s__10336__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10338),null);
}
} else
{var option_group = cljs.core.first.call(null,s__10336__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (option_group,s__10336__$2,temp__4092__auto__){
return (function iter__10363(s__10364){return (new cljs.core.LazySeq(null,((function (option_group,s__10336__$2,temp__4092__auto__){
return (function (){var s__10364__$1 = s__10364;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10364__$1);if(temp__4092__auto____$1)
{var s__10364__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10364__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10364__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10366 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10365 = 0;while(true){
if((i__10365 < size__7080__auto__))
{var vec__10369 = cljs.core._nth.call(null,c__7079__auto__,i__10365);var bname = cljs.core.nth.call(null,vec__10369,0,null);var fun = cljs.core.nth.call(null,vec__10369,1,null);cljs.core.chunk_append.call(null,b__10366,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10450 = (i__10365 + 1);
i__10365 = G__10450;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10366),iter__10363.call(null,cljs.core.chunk_rest.call(null,s__10364__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10366),null);
}
} else
{var vec__10370 = cljs.core.first.call(null,s__10364__$2);var bname = cljs.core.nth.call(null,vec__10370,0,null);var fun = cljs.core.nth.call(null,vec__10370,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10363.call(null,cljs.core.rest.call(null,s__10364__$2)));
}
} else
{return null;
}
break;
}
});})(option_group,s__10336__$2,temp__4092__auto__))
,null,null));
});})(option_group,s__10336__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null),iter__10335.call(null,cljs.core.rest.call(null,s__10336__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,lt.plugins.gitlight.status.ui.repo_ops);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,"refresh","refresh",(function (x,y){return null;
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__10371(s__10372){return (new cljs.core.LazySeq(null,(function (){var s__10372__$1 = s__10372;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10372__$1);if(temp__4092__auto__)
{var s__10372__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10372__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10372__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10374 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10373 = 0;while(true){
if((i__10373 < size__7080__auto__))
{var vec__10377 = cljs.core._nth.call(null,c__7079__auto__,i__10373);var g = cljs.core.nth.call(null,vec__10377,0,null);var fs = cljs.core.nth.call(null,vec__10377,1,null);cljs.core.chunk_append.call(null,b__10374,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10451 = (i__10373 + 1);
i__10373 = G__10451;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10374),iter__10371.call(null,cljs.core.chunk_rest.call(null,s__10372__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10374),null);
}
} else
{var vec__10378 = cljs.core.first.call(null,s__10372__$2);var g = cljs.core.nth.call(null,vec__10378,0,null);var fs = cljs.core.nth.call(null,vec__10378,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__10371.call(null,cljs.core.rest.call(null,s__10372__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,this$);
})()], null)], null));var seq__10379_10452 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10380_10453 = null;var count__10381_10454 = 0;var i__10382_10455 = 0;while(true){
if((i__10382_10455 < count__10381_10454))
{var vec__10383_10456 = cljs.core._nth.call(null,chunk__10380_10453,i__10382_10455);var ev__7756__auto___10457 = cljs.core.nth.call(null,vec__10383_10456,0,null);var func__7757__auto___10458 = cljs.core.nth.call(null,vec__10383_10456,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10457,func__7757__auto___10458);
{
var G__10459 = seq__10379_10452;
var G__10460 = chunk__10380_10453;
var G__10461 = count__10381_10454;
var G__10462 = (i__10382_10455 + 1);
seq__10379_10452 = G__10459;
chunk__10380_10453 = G__10460;
count__10381_10454 = G__10461;
i__10382_10455 = G__10462;
continue;
}
} else
{var temp__4092__auto___10463 = cljs.core.seq.call(null,seq__10379_10452);if(temp__4092__auto___10463)
{var seq__10379_10464__$1 = temp__4092__auto___10463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10379_10464__$1))
{var c__7112__auto___10465 = cljs.core.chunk_first.call(null,seq__10379_10464__$1);{
var G__10466 = cljs.core.chunk_rest.call(null,seq__10379_10464__$1);
var G__10467 = c__7112__auto___10465;
var G__10468 = cljs.core.count.call(null,c__7112__auto___10465);
var G__10469 = 0;
seq__10379_10452 = G__10466;
chunk__10380_10453 = G__10467;
count__10381_10454 = G__10468;
i__10382_10455 = G__10469;
continue;
}
} else
{var vec__10384_10470 = cljs.core.first.call(null,seq__10379_10464__$1);var ev__7756__auto___10471 = cljs.core.nth.call(null,vec__10384_10470,0,null);var func__7757__auto___10472 = cljs.core.nth.call(null,vec__10384_10470,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10471,func__7757__auto___10472);
{
var G__10473 = cljs.core.next.call(null,seq__10379_10464__$1);
var G__10474 = null;
var G__10475 = 0;
var G__10476 = 0;
seq__10379_10452 = G__10473;
chunk__10380_10453 = G__10474;
count__10381_10454 = G__10475;
i__10382_10455 = G__10476;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10391_10477 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10392_10478 = null;var count__10393_10479 = 0;var i__10394_10480 = 0;while(true){
if((i__10394_10480 < count__10393_10479))
{var vec__10395_10481 = cljs.core._nth.call(null,chunk__10392_10478,i__10394_10480);var ev__7756__auto___10482 = cljs.core.nth.call(null,vec__10395_10481,0,null);var func__7757__auto___10483 = cljs.core.nth.call(null,vec__10395_10481,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10482,func__7757__auto___10483);
{
var G__10484 = seq__10391_10477;
var G__10485 = chunk__10392_10478;
var G__10486 = count__10393_10479;
var G__10487 = (i__10394_10480 + 1);
seq__10391_10477 = G__10484;
chunk__10392_10478 = G__10485;
count__10393_10479 = G__10486;
i__10394_10480 = G__10487;
continue;
}
} else
{var temp__4092__auto___10488 = cljs.core.seq.call(null,seq__10391_10477);if(temp__4092__auto___10488)
{var seq__10391_10489__$1 = temp__4092__auto___10488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10391_10489__$1))
{var c__7112__auto___10490 = cljs.core.chunk_first.call(null,seq__10391_10489__$1);{
var G__10491 = cljs.core.chunk_rest.call(null,seq__10391_10489__$1);
var G__10492 = c__7112__auto___10490;
var G__10493 = cljs.core.count.call(null,c__7112__auto___10490);
var G__10494 = 0;
seq__10391_10477 = G__10491;
chunk__10392_10478 = G__10492;
count__10393_10479 = G__10493;
i__10394_10480 = G__10494;
continue;
}
} else
{var vec__10396_10495 = cljs.core.first.call(null,seq__10391_10489__$1);var ev__7756__auto___10496 = cljs.core.nth.call(null,vec__10396_10495,0,null);var func__7757__auto___10497 = cljs.core.nth.call(null,vec__10396_10495,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10496,func__7757__auto___10497);
{
var G__10498 = cljs.core.next.call(null,seq__10391_10489__$1);
var G__10499 = null;
var G__10500 = 0;
var G__10501 = 0;
seq__10391_10477 = G__10498;
chunk__10392_10478 = G__10499;
count__10393_10479 = G__10500;
i__10394_10480 = G__10501;
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