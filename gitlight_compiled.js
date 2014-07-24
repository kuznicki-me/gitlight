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
lt.plugins.gitlight.common_ui.button = (function button(n,f,fun){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8073_8128 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return fun.call(null,n,f);
});})(e__7755__auto__))
], null)));var chunk__8074_8129 = null;var count__8075_8130 = 0;var i__8076_8131 = 0;while(true){
if((i__8076_8131 < count__8075_8130))
{var vec__8077_8132 = cljs.core._nth.call(null,chunk__8074_8129,i__8076_8131);var ev__7756__auto___8133 = cljs.core.nth.call(null,vec__8077_8132,0,null);var func__7757__auto___8134 = cljs.core.nth.call(null,vec__8077_8132,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8133,func__7757__auto___8134);
{
var G__8135 = seq__8073_8128;
var G__8136 = chunk__8074_8129;
var G__8137 = count__8075_8130;
var G__8138 = (i__8076_8131 + 1);
seq__8073_8128 = G__8135;
chunk__8074_8129 = G__8136;
count__8075_8130 = G__8137;
i__8076_8131 = G__8138;
continue;
}
} else
{var temp__4092__auto___8139 = cljs.core.seq.call(null,seq__8073_8128);if(temp__4092__auto___8139)
{var seq__8073_8140__$1 = temp__4092__auto___8139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8073_8140__$1))
{var c__7112__auto___8141 = cljs.core.chunk_first.call(null,seq__8073_8140__$1);{
var G__8142 = cljs.core.chunk_rest.call(null,seq__8073_8140__$1);
var G__8143 = c__7112__auto___8141;
var G__8144 = cljs.core.count.call(null,c__7112__auto___8141);
var G__8145 = 0;
seq__8073_8128 = G__8142;
chunk__8074_8129 = G__8143;
count__8075_8130 = G__8144;
i__8076_8131 = G__8145;
continue;
}
} else
{var vec__8078_8146 = cljs.core.first.call(null,seq__8073_8140__$1);var ev__7756__auto___8147 = cljs.core.nth.call(null,vec__8078_8146,0,null);var func__7757__auto___8148 = cljs.core.nth.call(null,vec__8078_8146,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8147,func__7757__auto___8148);
{
var G__8149 = cljs.core.next.call(null,seq__8073_8140__$1);
var G__8150 = null;
var G__8151 = 0;
var G__8152 = 0;
seq__8073_8128 = G__8149;
chunk__8074_8129 = G__8150;
count__8075_8130 = G__8151;
i__8076_8131 = G__8152;
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
lt.plugins.gitlight.common_ui.classy_button = (function classy_button(cls,n,f,fun){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8085_8153 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return fun.call(null,n,f);
});})(e__7755__auto__))
], null)));var chunk__8086_8154 = null;var count__8087_8155 = 0;var i__8088_8156 = 0;while(true){
if((i__8088_8156 < count__8087_8155))
{var vec__8089_8157 = cljs.core._nth.call(null,chunk__8086_8154,i__8088_8156);var ev__7756__auto___8158 = cljs.core.nth.call(null,vec__8089_8157,0,null);var func__7757__auto___8159 = cljs.core.nth.call(null,vec__8089_8157,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8158,func__7757__auto___8159);
{
var G__8160 = seq__8085_8153;
var G__8161 = chunk__8086_8154;
var G__8162 = count__8087_8155;
var G__8163 = (i__8088_8156 + 1);
seq__8085_8153 = G__8160;
chunk__8086_8154 = G__8161;
count__8087_8155 = G__8162;
i__8088_8156 = G__8163;
continue;
}
} else
{var temp__4092__auto___8164 = cljs.core.seq.call(null,seq__8085_8153);if(temp__4092__auto___8164)
{var seq__8085_8165__$1 = temp__4092__auto___8164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8085_8165__$1))
{var c__7112__auto___8166 = cljs.core.chunk_first.call(null,seq__8085_8165__$1);{
var G__8167 = cljs.core.chunk_rest.call(null,seq__8085_8165__$1);
var G__8168 = c__7112__auto___8166;
var G__8169 = cljs.core.count.call(null,c__7112__auto___8166);
var G__8170 = 0;
seq__8085_8153 = G__8167;
chunk__8086_8154 = G__8168;
count__8087_8155 = G__8169;
i__8088_8156 = G__8170;
continue;
}
} else
{var vec__8090_8171 = cljs.core.first.call(null,seq__8085_8165__$1);var ev__7756__auto___8172 = cljs.core.nth.call(null,vec__8090_8171,0,null);var func__7757__auto___8173 = cljs.core.nth.call(null,vec__8090_8171,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8172,func__7757__auto___8173);
{
var G__8174 = cljs.core.next.call(null,seq__8085_8165__$1);
var G__8175 = null;
var G__8176 = 0;
var G__8177 = 0;
seq__8085_8153 = G__8174;
chunk__8086_8154 = G__8175;
count__8087_8155 = G__8176;
i__8088_8156 = G__8177;
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
lt.plugins.gitlight.common_ui.text_input = (function text_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"message"], null)], null));var seq__8097_8178 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7755__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7755__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
], null)));var chunk__8098_8179 = null;var count__8099_8180 = 0;var i__8100_8181 = 0;while(true){
if((i__8100_8181 < count__8099_8180))
{var vec__8101_8182 = cljs.core._nth.call(null,chunk__8098_8179,i__8100_8181);var ev__7756__auto___8183 = cljs.core.nth.call(null,vec__8101_8182,0,null);var func__7757__auto___8184 = cljs.core.nth.call(null,vec__8101_8182,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8183,func__7757__auto___8184);
{
var G__8185 = seq__8097_8178;
var G__8186 = chunk__8098_8179;
var G__8187 = count__8099_8180;
var G__8188 = (i__8100_8181 + 1);
seq__8097_8178 = G__8185;
chunk__8098_8179 = G__8186;
count__8099_8180 = G__8187;
i__8100_8181 = G__8188;
continue;
}
} else
{var temp__4092__auto___8189 = cljs.core.seq.call(null,seq__8097_8178);if(temp__4092__auto___8189)
{var seq__8097_8190__$1 = temp__4092__auto___8189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8097_8190__$1))
{var c__7112__auto___8191 = cljs.core.chunk_first.call(null,seq__8097_8190__$1);{
var G__8192 = cljs.core.chunk_rest.call(null,seq__8097_8190__$1);
var G__8193 = c__7112__auto___8191;
var G__8194 = cljs.core.count.call(null,c__7112__auto___8191);
var G__8195 = 0;
seq__8097_8178 = G__8192;
chunk__8098_8179 = G__8193;
count__8099_8180 = G__8194;
i__8100_8181 = G__8195;
continue;
}
} else
{var vec__8102_8196 = cljs.core.first.call(null,seq__8097_8190__$1);var ev__7756__auto___8197 = cljs.core.nth.call(null,vec__8102_8196,0,null);var func__7757__auto___8198 = cljs.core.nth.call(null,vec__8102_8196,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8197,func__7757__auto___8198);
{
var G__8199 = cljs.core.next.call(null,seq__8097_8190__$1);
var G__8200 = null;
var G__8201 = 0;
var G__8202 = 0;
seq__8097_8178 = G__8199;
chunk__8098_8179 = G__8200;
count__8099_8180 = G__8201;
i__8100_8181 = G__8202;
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
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.map.call(null,(function (p1__8103_SHARP_){return cljs.core.nth.call(null,p1__8103_SHARP_,2);
}),results)], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","merge-mult-results","lt.plugins.gitlight.common-ui/merge-mult-results",4752627904),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__merge_mult_results,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mult-outs","mult-outs",4047322324)], null));
lt.plugins.gitlight.common_ui.not_a_thing = (function not_a_thing(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"nothing"], null));var seq__8110_8203 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8111_8204 = null;var count__8112_8205 = 0;var i__8113_8206 = 0;while(true){
if((i__8113_8206 < count__8112_8205))
{var vec__8114_8207 = cljs.core._nth.call(null,chunk__8111_8204,i__8113_8206);var ev__7756__auto___8208 = cljs.core.nth.call(null,vec__8114_8207,0,null);var func__7757__auto___8209 = cljs.core.nth.call(null,vec__8114_8207,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8208,func__7757__auto___8209);
{
var G__8210 = seq__8110_8203;
var G__8211 = chunk__8111_8204;
var G__8212 = count__8112_8205;
var G__8213 = (i__8113_8206 + 1);
seq__8110_8203 = G__8210;
chunk__8111_8204 = G__8211;
count__8112_8205 = G__8212;
i__8113_8206 = G__8213;
continue;
}
} else
{var temp__4092__auto___8214 = cljs.core.seq.call(null,seq__8110_8203);if(temp__4092__auto___8214)
{var seq__8110_8215__$1 = temp__4092__auto___8214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8110_8215__$1))
{var c__7112__auto___8216 = cljs.core.chunk_first.call(null,seq__8110_8215__$1);{
var G__8217 = cljs.core.chunk_rest.call(null,seq__8110_8215__$1);
var G__8218 = c__7112__auto___8216;
var G__8219 = cljs.core.count.call(null,c__7112__auto___8216);
var G__8220 = 0;
seq__8110_8203 = G__8217;
chunk__8111_8204 = G__8218;
count__8112_8205 = G__8219;
i__8113_8206 = G__8220;
continue;
}
} else
{var vec__8115_8221 = cljs.core.first.call(null,seq__8110_8215__$1);var ev__7756__auto___8222 = cljs.core.nth.call(null,vec__8115_8221,0,null);var func__7757__auto___8223 = cljs.core.nth.call(null,vec__8115_8221,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8222,func__7757__auto___8223);
{
var G__8224 = cljs.core.next.call(null,seq__8110_8215__$1);
var G__8225 = null;
var G__8226 = 0;
var G__8227 = 0;
seq__8110_8203 = G__8224;
chunk__8111_8204 = G__8225;
count__8112_8205 = G__8226;
i__8113_8206 = G__8227;
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
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,ui_fun){var vec__8117 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__8117,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__8117,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__8117,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__8117,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478),new cljs.core.Keyword(null,"gitlight-log-history","gitlight-log-history",2628910772)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"result","result",4374444943),null,new cljs.core.Keyword(null,"results","results",2111450984),null,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword("lt.plugins.gitlight.common-ui","refresh-tab","lt.plugins.gitlight.common-ui/refresh-tab",1790366357),new cljs.core.Keyword("lt.plugins.gitlight.common-ui","merge-mult-results","lt.plugins.gitlight.common-ui/merge-mult-results",4752627904),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__8117,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return lt.plugins.gitlight.common_ui.not_a_thing.call(null);
});})(vec__8117,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);return lt.object.create.call(null,tab_obj);
});
lt.plugins.gitlight.common_ui.make_button = (function make_button(n,f,fun){return lt.plugins.gitlight.common_ui.button.call(null,n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.make_classy_button = (function make_classy_button(n,f,fun){return lt.plugins.gitlight.common_ui.classy_button.call(null,[cljs.core.str(n)].join(''),n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8228 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8228))
{var ts_8229 = temp__4092__auto___8228;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8229))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8229);
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
lt.plugins.gitlight.history.row = (function row(p__9719){var vec__9722 = p__9719;var cls = cljs.core.nth.call(null,vec__9722,0,null);var vec__9723 = cljs.core.nth.call(null,vec__9722,1,null);var command = cljs.core.nth.call(null,vec__9723,0,null);var date = cljs.core.nth.call(null,vec__9723,1,null);var stdout = cljs.core.nth.call(null,vec__9723,2,null);var stderr = cljs.core.nth.call(null,vec__9723,3,null);if(!((cls == null)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,cls)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),command], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),date,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),cljs.core.name.call(null,cls)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),"disabled"], null),stdout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),"disabled"], null),stderr], null)], null)], null);
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
lt.plugins.gitlight.history.ui_fun = (function ui_fun(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var history = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var last_ok = cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (history){
return (function (p1__9724_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),cljs.core.first.call(null,p1__9724_SHARP_));
});})(history))
,cljs.core.deref.call(null,history)));var last_fail = cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (history,last_ok){
return (function (p1__9725_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"success","success",3441701749),cljs.core.first.call(null,p1__9725_SHARP_));
});})(history,last_ok))
,cljs.core.deref.call(null,history)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-command-history","div.gitlight-command-history",2639214328),lt.plugins.gitlight.common_ui.make_button.call(null,"dump history",lt.plugins.gitlight.history.parse_dump.call(null,cljs.core.deref.call(null,history)),lt.plugins.gitlight.history.landfill_of_history),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),lt.plugins.gitlight.history.spacer.call(null,"last ok: "),lt.plugins.gitlight.history.row.call(null,last_ok),lt.plugins.gitlight.history.spacer.call(null,"last failed: "),lt.plugins.gitlight.history.row.call(null,last_fail),lt.plugins.gitlight.history.spacer.call(null,"history: "),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stdout"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),"stderr"], null)], null),cljs.core.map.call(null,lt.plugins.gitlight.history.row,cljs.core.deref.call(null,history))], null)], null);
})());var seq__9732_9738 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9733_9739 = null;var count__9734_9740 = 0;var i__9735_9741 = 0;while(true){
if((i__9735_9741 < count__9734_9740))
{var vec__9736_9742 = cljs.core._nth.call(null,chunk__9733_9739,i__9735_9741);var ev__7756__auto___9743 = cljs.core.nth.call(null,vec__9736_9742,0,null);var func__7757__auto___9744 = cljs.core.nth.call(null,vec__9736_9742,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9743,func__7757__auto___9744);
{
var G__9745 = seq__9732_9738;
var G__9746 = chunk__9733_9739;
var G__9747 = count__9734_9740;
var G__9748 = (i__9735_9741 + 1);
seq__9732_9738 = G__9745;
chunk__9733_9739 = G__9746;
count__9734_9740 = G__9747;
i__9735_9741 = G__9748;
continue;
}
} else
{var temp__4092__auto___9749 = cljs.core.seq.call(null,seq__9732_9738);if(temp__4092__auto___9749)
{var seq__9732_9750__$1 = temp__4092__auto___9749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9732_9750__$1))
{var c__7112__auto___9751 = cljs.core.chunk_first.call(null,seq__9732_9750__$1);{
var G__9752 = cljs.core.chunk_rest.call(null,seq__9732_9750__$1);
var G__9753 = c__7112__auto___9751;
var G__9754 = cljs.core.count.call(null,c__7112__auto___9751);
var G__9755 = 0;
seq__9732_9738 = G__9752;
chunk__9733_9739 = G__9753;
count__9734_9740 = G__9754;
i__9735_9741 = G__9755;
continue;
}
} else
{var vec__9737_9756 = cljs.core.first.call(null,seq__9732_9750__$1);var ev__7756__auto___9757 = cljs.core.nth.call(null,vec__9737_9756,0,null);var func__7757__auto___9758 = cljs.core.nth.call(null,vec__9737_9756,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9757,func__7757__auto___9758);
{
var G__9759 = cljs.core.next.call(null,seq__9732_9750__$1);
var G__9760 = null;
var G__9761 = 0;
var G__9762 = 0;
seq__9732_9738 = G__9759;
chunk__9733_9739 = G__9760;
count__9734_9740 = G__9761;
i__9735_9741 = G__9762;
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
lt.plugins.gitlight.history.refresh = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,new cljs.core.Keyword("lt.plugins.gitlight.history","history-refresh","lt.plugins.gitlight.history/history-refresh",2164998053),lt.plugins.gitlight.history.ui_fun);
lt.plugins.gitlight.history.tab_obj = lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.history","history-tab","lt.plugins.gitlight.history/history-tab",571578219),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-tab","history-tab",1364763214)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Git command history",new cljs.core.Keyword(null,"history","history",1940838406),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),lt.plugins.gitlight.history.refresh], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.history.ui_fun.call(null,this$);
}));
lt.plugins.gitlight.history.history_tab = lt.object.create.call(null,lt.plugins.gitlight.history.tab_obj);
lt.plugins.gitlight.history.history = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.history.history_tab));
lt.plugins.gitlight.history.limited_conj = (function limited_conj(a,b){var toomuch = new cljs.core.Keyword(null,"max-history","max-history",730578077).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config));return cljs.core.take.call(null,toomuch,cljs.core.conj.call(null,a,b));
});
lt.plugins.gitlight.history.command_history = (function command_history(){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.gitlight.history.history_tab);
return lt.object.raise.call(null,lt.plugins.gitlight.history.history_tab,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
lt.plugins.gitlight.history.add_to_history = (function add_to_history(kw,obj,command,stdout,stderr){if(!((command == null)))
{return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.history.history,lt.plugins.gitlight.history.limited_conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [command,lt.plugins.gitlight.libs.now.call(null),stdout.toString(),stderr.toString()], null)], null));
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
lt.plugins.gitlight.gutter.make_gutter_marker = (function make_gutter_marker(this$,on_click,style_content,content){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gutter-content","div.gutter-content",4072529974),style_content.call(null,content)], null));var seq__9686_9693 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return on_click.call(null,content);
});})(e__7755__auto__))
], null)));var chunk__9687_9694 = null;var count__9688_9695 = 0;var i__9689_9696 = 0;while(true){
if((i__9689_9696 < count__9688_9695))
{var vec__9690_9697 = cljs.core._nth.call(null,chunk__9687_9694,i__9689_9696);var ev__7756__auto___9698 = cljs.core.nth.call(null,vec__9690_9697,0,null);var func__7757__auto___9699 = cljs.core.nth.call(null,vec__9690_9697,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9698,func__7757__auto___9699);
{
var G__9700 = seq__9686_9693;
var G__9701 = chunk__9687_9694;
var G__9702 = count__9688_9695;
var G__9703 = (i__9689_9696 + 1);
seq__9686_9693 = G__9700;
chunk__9687_9694 = G__9701;
count__9688_9695 = G__9702;
i__9689_9696 = G__9703;
continue;
}
} else
{var temp__4092__auto___9704 = cljs.core.seq.call(null,seq__9686_9693);if(temp__4092__auto___9704)
{var seq__9686_9705__$1 = temp__4092__auto___9704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9686_9705__$1))
{var c__7112__auto___9706 = cljs.core.chunk_first.call(null,seq__9686_9705__$1);{
var G__9707 = cljs.core.chunk_rest.call(null,seq__9686_9705__$1);
var G__9708 = c__7112__auto___9706;
var G__9709 = cljs.core.count.call(null,c__7112__auto___9706);
var G__9710 = 0;
seq__9686_9693 = G__9707;
chunk__9687_9694 = G__9708;
count__9688_9695 = G__9709;
i__9689_9696 = G__9710;
continue;
}
} else
{var vec__9691_9711 = cljs.core.first.call(null,seq__9686_9705__$1);var ev__7756__auto___9712 = cljs.core.nth.call(null,vec__9691_9711,0,null);var func__7757__auto___9713 = cljs.core.nth.call(null,vec__9691_9711,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9712,func__7757__auto___9713);
{
var G__9714 = cljs.core.next.call(null,seq__9686_9705__$1);
var G__9715 = null;
var G__9716 = 0;
var G__9717 = 0;
seq__9686_9693 = G__9714;
chunk__9687_9694 = G__9715;
count__9688_9695 = G__9716;
i__9689_9696 = G__9717;
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
return (function (p1__9692_SHARP_){return lt.plugins.gitlight.gutter.make_gutter_marker.call(null,this$,on_click,style_content,p1__9692_SHARP_);
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
var gutter_9718 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["gitlight-gutter",null], null), null),gutter_9718))], null));
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
lt.plugins.gitlight.diff.commit_input = (function commit_input(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title","input.title",3943357094),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"size","size",1017434995),81,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit title"], null)], null));var seq__8249_9516 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8250_9517 = null;var count__8251_9518 = 0;var i__8252_9519 = 0;while(true){
if((i__8252_9519 < count__8251_9518))
{var vec__8253_9520 = cljs.core._nth.call(null,chunk__8250_9517,i__8252_9519);var ev__7756__auto___9521 = cljs.core.nth.call(null,vec__8253_9520,0,null);var func__7757__auto___9522 = cljs.core.nth.call(null,vec__8253_9520,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9521,func__7757__auto___9522);
{
var G__9523 = seq__8249_9516;
var G__9524 = chunk__8250_9517;
var G__9525 = count__8251_9518;
var G__9526 = (i__8252_9519 + 1);
seq__8249_9516 = G__9523;
chunk__8250_9517 = G__9524;
count__8251_9518 = G__9525;
i__8252_9519 = G__9526;
continue;
}
} else
{var temp__4092__auto___9527 = cljs.core.seq.call(null,seq__8249_9516);if(temp__4092__auto___9527)
{var seq__8249_9528__$1 = temp__4092__auto___9527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8249_9528__$1))
{var c__7112__auto___9529 = cljs.core.chunk_first.call(null,seq__8249_9528__$1);{
var G__9530 = cljs.core.chunk_rest.call(null,seq__8249_9528__$1);
var G__9531 = c__7112__auto___9529;
var G__9532 = cljs.core.count.call(null,c__7112__auto___9529);
var G__9533 = 0;
seq__8249_9516 = G__9530;
chunk__8250_9517 = G__9531;
count__8251_9518 = G__9532;
i__8252_9519 = G__9533;
continue;
}
} else
{var vec__8254_9534 = cljs.core.first.call(null,seq__8249_9528__$1);var ev__7756__auto___9535 = cljs.core.nth.call(null,vec__8254_9534,0,null);var func__7757__auto___9536 = cljs.core.nth.call(null,vec__8254_9534,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9535,func__7757__auto___9536);
{
var G__9537 = cljs.core.next.call(null,seq__8249_9528__$1);
var G__9538 = null;
var G__9539 = 0;
var G__9540 = 0;
seq__8249_9516 = G__9537;
chunk__8250_9517 = G__9538;
count__8251_9518 = G__9539;
i__8252_9519 = G__9540;
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
lt.plugins.gitlight.diff.commit_body = (function commit_body(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.body","textarea.body",3433374536),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit body",new cljs.core.Keyword(null,"cols","cols",1016963685),81,new cljs.core.Keyword(null,"rows","rows",1017410891),10], null)], null));var seq__8261_9541 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8262_9542 = null;var count__8263_9543 = 0;var i__8264_9544 = 0;while(true){
if((i__8264_9544 < count__8263_9543))
{var vec__8265_9545 = cljs.core._nth.call(null,chunk__8262_9542,i__8264_9544);var ev__7756__auto___9546 = cljs.core.nth.call(null,vec__8265_9545,0,null);var func__7757__auto___9547 = cljs.core.nth.call(null,vec__8265_9545,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9546,func__7757__auto___9547);
{
var G__9548 = seq__8261_9541;
var G__9549 = chunk__8262_9542;
var G__9550 = count__8263_9543;
var G__9551 = (i__8264_9544 + 1);
seq__8261_9541 = G__9548;
chunk__8262_9542 = G__9549;
count__8263_9543 = G__9550;
i__8264_9544 = G__9551;
continue;
}
} else
{var temp__4092__auto___9552 = cljs.core.seq.call(null,seq__8261_9541);if(temp__4092__auto___9552)
{var seq__8261_9553__$1 = temp__4092__auto___9552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8261_9553__$1))
{var c__7112__auto___9554 = cljs.core.chunk_first.call(null,seq__8261_9553__$1);{
var G__9555 = cljs.core.chunk_rest.call(null,seq__8261_9553__$1);
var G__9556 = c__7112__auto___9554;
var G__9557 = cljs.core.count.call(null,c__7112__auto___9554);
var G__9558 = 0;
seq__8261_9541 = G__9555;
chunk__8262_9542 = G__9556;
count__8263_9543 = G__9557;
i__8264_9544 = G__9558;
continue;
}
} else
{var vec__8266_9559 = cljs.core.first.call(null,seq__8261_9553__$1);var ev__7756__auto___9560 = cljs.core.nth.call(null,vec__8266_9559,0,null);var func__7757__auto___9561 = cljs.core.nth.call(null,vec__8266_9559,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9560,func__7757__auto___9561);
{
var G__9562 = cljs.core.next.call(null,seq__8261_9553__$1);
var G__9563 = null;
var G__9564 = 0;
var G__9565 = 0;
seq__8261_9541 = G__9562;
chunk__8262_9542 = G__9563;
count__8263_9543 = G__9564;
i__8264_9544 = G__9565;
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
return (function iter__8869(s__8870){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__8870__$1 = s__8870;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8870__$1);if(temp__4092__auto__)
{var s__8870__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8870__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8870__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8872 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8871 = 0;while(true){
if((i__8871 < size__7080__auto__))
{var file = cljs.core._nth.call(null,c__7079__auto__,i__8871);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);cljs.core.chunk_append.call(null,b__8872,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__8871,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function iter__9169(s__9170){return (new cljs.core.LazySeq(null,((function (i__8871,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9170__$1 = s__9170;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9170__$1);if(temp__4092__auto____$1)
{var s__9170__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9170__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9170__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9172 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9171 = 0;while(true){
if((i__9171 < size__7080__auto____$1))
{var changes_group = cljs.core._nth.call(null,c__7079__auto____$1,i__9171);cljs.core.chunk_append.call(null,b__9172,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__9171,i__8871,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function iter__9245(s__9246){return (new cljs.core.LazySeq(null,((function (i__9171,i__8871,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9246__$1 = s__9246;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9246__$1);if(temp__4092__auto____$2)
{var s__9246__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9246__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9246__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9248 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9247 = 0;while(true){
if((i__9247 < size__7080__auto____$2))
{var line_group = cljs.core._nth.call(null,c__7079__auto____$2,i__9247);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9248,(function (){var iter__7081__auto__ = ((function (i__9247,i__9171,i__8871,columned,c,columns,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9248,s__9246__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function iter__9265(s__9266){return (new cljs.core.LazySeq(null,((function (i__9247,i__9171,i__8871,columned,c,columns,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9248,s__9246__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9266__$1 = s__9266;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9266__$1);if(temp__4092__auto____$3)
{var s__9266__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9266__$2))
{var c__7079__auto____$3 = cljs.core.chunk_first.call(null,s__9266__$2);var size__7080__auto____$3 = cljs.core.count.call(null,c__7079__auto____$3);var b__9268 = cljs.core.chunk_buffer.call(null,size__7080__auto____$3);if((function (){var i__9267 = 0;while(true){
if((i__9267 < size__7080__auto____$3))
{var vec__9271 = cljs.core._nth.call(null,c__7079__auto____$3,i__9267);var left = cljs.core.nth.call(null,vec__9271,0,null);var right = cljs.core.nth.call(null,vec__9271,1,null);cljs.core.chunk_append.call(null,b__9268,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9566 = (i__9267 + 1);
i__9267 = G__9566;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9268),iter__9265.call(null,cljs.core.chunk_rest.call(null,s__9266__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9268),null);
}
} else
{var vec__9272 = cljs.core.first.call(null,s__9266__$2);var left = cljs.core.nth.call(null,vec__9272,0,null);var right = cljs.core.nth.call(null,vec__9272,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9265.call(null,cljs.core.rest.call(null,s__9266__$2)));
}
} else
{return null;
}
break;
}
});})(i__9247,i__9171,i__8871,columned,c,columns,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9248,s__9246__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(i__9247,i__9171,i__8871,columned,c,columns,line_group,c__7079__auto____$2,size__7080__auto____$2,b__9248,s__9246__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})());
{
var G__9567 = (i__9247 + 1);
i__9247 = G__9567;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9248),iter__9245.call(null,cljs.core.chunk_rest.call(null,s__9246__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9248),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9246__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (i__9171,i__8871,columned,c,columns,line_group,s__9246__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function iter__9273(s__9274){return (new cljs.core.LazySeq(null,((function (i__9171,i__8871,columned,c,columns,line_group,s__9246__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9274__$1 = s__9274;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9274__$1);if(temp__4092__auto____$3)
{var s__9274__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9274__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9274__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9276 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9275 = 0;while(true){
if((i__9275 < size__7080__auto____$2))
{var vec__9279 = cljs.core._nth.call(null,c__7079__auto____$2,i__9275);var left = cljs.core.nth.call(null,vec__9279,0,null);var right = cljs.core.nth.call(null,vec__9279,1,null);cljs.core.chunk_append.call(null,b__9276,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9568 = (i__9275 + 1);
i__9275 = G__9568;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9276),iter__9273.call(null,cljs.core.chunk_rest.call(null,s__9274__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9276),null);
}
} else
{var vec__9280 = cljs.core.first.call(null,s__9274__$2);var left = cljs.core.nth.call(null,vec__9280,0,null);var right = cljs.core.nth.call(null,vec__9280,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9273.call(null,cljs.core.rest.call(null,s__9274__$2)));
}
} else
{return null;
}
break;
}
});})(i__9171,i__8871,columned,c,columns,line_group,s__9246__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(i__9171,i__8871,columned,c,columns,line_group,s__9246__$2,temp__4092__auto____$2,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})(),iter__9245.call(null,cljs.core.rest.call(null,s__9246__$2)));
}
} else
{return null;
}
break;
}
});})(i__9171,i__8871,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(i__9171,i__8871,changes_group,c__7079__auto____$1,size__7080__auto____$1,b__9172,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__9569 = (i__9171 + 1);
i__9171 = G__9569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9172),iter__9169.call(null,cljs.core.chunk_rest.call(null,s__9170__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9172),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9170__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__8871,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function iter__9281(s__9282){return (new cljs.core.LazySeq(null,((function (i__8871,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9282__$1 = s__9282;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9282__$1);if(temp__4092__auto____$2)
{var s__9282__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9282__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9282__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9284 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9283 = 0;while(true){
if((i__9283 < size__7080__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7079__auto____$1,i__9283);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9284,(function (){var iter__7081__auto__ = ((function (i__9283,i__8871,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9284,s__9282__$2,temp__4092__auto____$2,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function iter__9301(s__9302){return (new cljs.core.LazySeq(null,((function (i__9283,i__8871,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9284,s__9282__$2,temp__4092__auto____$2,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9302__$1 = s__9302;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9302__$1);if(temp__4092__auto____$3)
{var s__9302__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9302__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9302__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9304 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9303 = 0;while(true){
if((i__9303 < size__7080__auto____$2))
{var vec__9307 = cljs.core._nth.call(null,c__7079__auto____$2,i__9303);var left = cljs.core.nth.call(null,vec__9307,0,null);var right = cljs.core.nth.call(null,vec__9307,1,null);cljs.core.chunk_append.call(null,b__9304,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9570 = (i__9303 + 1);
i__9303 = G__9570;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9304),iter__9301.call(null,cljs.core.chunk_rest.call(null,s__9302__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9304),null);
}
} else
{var vec__9308 = cljs.core.first.call(null,s__9302__$2);var left = cljs.core.nth.call(null,vec__9308,0,null);var right = cljs.core.nth.call(null,vec__9308,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9301.call(null,cljs.core.rest.call(null,s__9302__$2)));
}
} else
{return null;
}
break;
}
});})(i__9283,i__8871,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9284,s__9282__$2,temp__4092__auto____$2,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(i__9283,i__8871,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9284,s__9282__$2,temp__4092__auto____$2,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})());
{
var G__9571 = (i__9283 + 1);
i__9283 = G__9571;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9284),iter__9281.call(null,cljs.core.chunk_rest.call(null,s__9282__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9284),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9282__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (i__8871,columned,c,columns,line_group,s__9282__$2,temp__4092__auto____$2,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function iter__9309(s__9310){return (new cljs.core.LazySeq(null,((function (i__8871,columned,c,columns,line_group,s__9282__$2,temp__4092__auto____$2,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9310__$1 = s__9310;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9310__$1);if(temp__4092__auto____$3)
{var s__9310__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9310__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9310__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9312 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9311 = 0;while(true){
if((i__9311 < size__7080__auto____$1))
{var vec__9315 = cljs.core._nth.call(null,c__7079__auto____$1,i__9311);var left = cljs.core.nth.call(null,vec__9315,0,null);var right = cljs.core.nth.call(null,vec__9315,1,null);cljs.core.chunk_append.call(null,b__9312,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9572 = (i__9311 + 1);
i__9311 = G__9572;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9312),iter__9309.call(null,cljs.core.chunk_rest.call(null,s__9310__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9312),null);
}
} else
{var vec__9316 = cljs.core.first.call(null,s__9310__$2);var left = cljs.core.nth.call(null,vec__9316,0,null);var right = cljs.core.nth.call(null,vec__9316,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9309.call(null,cljs.core.rest.call(null,s__9310__$2)));
}
} else
{return null;
}
break;
}
});})(i__8871,columned,c,columns,line_group,s__9282__$2,temp__4092__auto____$2,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(i__8871,columned,c,columns,line_group,s__9282__$2,temp__4092__auto____$2,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})(),iter__9281.call(null,cljs.core.rest.call(null,s__9282__$2)));
}
} else
{return null;
}
break;
}
});})(i__8871,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(i__8871,changes_group,s__9170__$2,temp__4092__auto____$1,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9169.call(null,cljs.core.rest.call(null,s__9170__$2)));
}
} else
{return null;
}
break;
}
});})(i__8871,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(i__8871,filename,file_diff,file,c__7079__auto__,size__7080__auto__,b__8872,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null));
{
var G__9573 = (i__8871 + 1);
i__8871 = G__9573;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8872),iter__8869.call(null,cljs.core.chunk_rest.call(null,s__8870__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8872),null);
}
} else
{var file = cljs.core.first.call(null,s__8870__$2);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function iter__9317(s__9318){return (new cljs.core.LazySeq(null,((function (filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9318__$1 = s__9318;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9318__$1);if(temp__4092__auto____$1)
{var s__9318__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9318__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9318__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9320 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9319 = 0;while(true){
if((i__9319 < size__7080__auto__))
{var changes_group = cljs.core._nth.call(null,c__7079__auto__,i__9319);cljs.core.chunk_append.call(null,b__9320,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (i__9319,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function iter__9393(s__9394){return (new cljs.core.LazySeq(null,((function (i__9319,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9394__$1 = s__9394;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9394__$1);if(temp__4092__auto____$2)
{var s__9394__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9394__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9394__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9396 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9395 = 0;while(true){
if((i__9395 < size__7080__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7079__auto____$1,i__9395);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9396,(function (){var iter__7081__auto__ = ((function (i__9395,i__9319,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9396,s__9394__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function iter__9413(s__9414){return (new cljs.core.LazySeq(null,((function (i__9395,i__9319,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9396,s__9394__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9414__$1 = s__9414;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9414__$1);if(temp__4092__auto____$3)
{var s__9414__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9414__$2))
{var c__7079__auto____$2 = cljs.core.chunk_first.call(null,s__9414__$2);var size__7080__auto____$2 = cljs.core.count.call(null,c__7079__auto____$2);var b__9416 = cljs.core.chunk_buffer.call(null,size__7080__auto____$2);if((function (){var i__9415 = 0;while(true){
if((i__9415 < size__7080__auto____$2))
{var vec__9419 = cljs.core._nth.call(null,c__7079__auto____$2,i__9415);var left = cljs.core.nth.call(null,vec__9419,0,null);var right = cljs.core.nth.call(null,vec__9419,1,null);cljs.core.chunk_append.call(null,b__9416,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9574 = (i__9415 + 1);
i__9415 = G__9574;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9416),iter__9413.call(null,cljs.core.chunk_rest.call(null,s__9414__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9416),null);
}
} else
{var vec__9420 = cljs.core.first.call(null,s__9414__$2);var left = cljs.core.nth.call(null,vec__9420,0,null);var right = cljs.core.nth.call(null,vec__9420,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9413.call(null,cljs.core.rest.call(null,s__9414__$2)));
}
} else
{return null;
}
break;
}
});})(i__9395,i__9319,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9396,s__9394__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(i__9395,i__9319,columned,c,columns,line_group,c__7079__auto____$1,size__7080__auto____$1,b__9396,s__9394__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})());
{
var G__9575 = (i__9395 + 1);
i__9395 = G__9575;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9396),iter__9393.call(null,cljs.core.chunk_rest.call(null,s__9394__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9396),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9394__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (i__9319,columned,c,columns,line_group,s__9394__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function iter__9421(s__9422){return (new cljs.core.LazySeq(null,((function (i__9319,columned,c,columns,line_group,s__9394__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9422__$1 = s__9422;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9422__$1);if(temp__4092__auto____$3)
{var s__9422__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9422__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9422__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9424 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9423 = 0;while(true){
if((i__9423 < size__7080__auto____$1))
{var vec__9427 = cljs.core._nth.call(null,c__7079__auto____$1,i__9423);var left = cljs.core.nth.call(null,vec__9427,0,null);var right = cljs.core.nth.call(null,vec__9427,1,null);cljs.core.chunk_append.call(null,b__9424,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9576 = (i__9423 + 1);
i__9423 = G__9576;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9424),iter__9421.call(null,cljs.core.chunk_rest.call(null,s__9422__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9424),null);
}
} else
{var vec__9428 = cljs.core.first.call(null,s__9422__$2);var left = cljs.core.nth.call(null,vec__9428,0,null);var right = cljs.core.nth.call(null,vec__9428,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9421.call(null,cljs.core.rest.call(null,s__9422__$2)));
}
} else
{return null;
}
break;
}
});})(i__9319,columned,c,columns,line_group,s__9394__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(i__9319,columned,c,columns,line_group,s__9394__$2,temp__4092__auto____$2,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})(),iter__9393.call(null,cljs.core.rest.call(null,s__9394__$2)));
}
} else
{return null;
}
break;
}
});})(i__9319,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(i__9319,changes_group,c__7079__auto__,size__7080__auto__,b__9320,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__9577 = (i__9319 + 1);
i__9319 = G__9577;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9320),iter__9317.call(null,cljs.core.chunk_rest.call(null,s__9318__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9320),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9318__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7081__auto__ = ((function (changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function iter__9429(s__9430){return (new cljs.core.LazySeq(null,((function (changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9430__$1 = s__9430;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9430__$1);if(temp__4092__auto____$2)
{var s__9430__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9430__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9430__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9432 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9431 = 0;while(true){
if((i__9431 < size__7080__auto__))
{var line_group = cljs.core._nth.call(null,c__7079__auto__,i__9431);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9432,(function (){var iter__7081__auto__ = ((function (i__9431,columned,c,columns,line_group,c__7079__auto__,size__7080__auto__,b__9432,s__9430__$2,temp__4092__auto____$2,changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function iter__9449(s__9450){return (new cljs.core.LazySeq(null,((function (i__9431,columned,c,columns,line_group,c__7079__auto__,size__7080__auto__,b__9432,s__9430__$2,temp__4092__auto____$2,changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9450__$1 = s__9450;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9450__$1);if(temp__4092__auto____$3)
{var s__9450__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9450__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__9450__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__9452 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__9451 = 0;while(true){
if((i__9451 < size__7080__auto____$1))
{var vec__9455 = cljs.core._nth.call(null,c__7079__auto____$1,i__9451);var left = cljs.core.nth.call(null,vec__9455,0,null);var right = cljs.core.nth.call(null,vec__9455,1,null);cljs.core.chunk_append.call(null,b__9452,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9578 = (i__9451 + 1);
i__9451 = G__9578;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9452),iter__9449.call(null,cljs.core.chunk_rest.call(null,s__9450__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9452),null);
}
} else
{var vec__9456 = cljs.core.first.call(null,s__9450__$2);var left = cljs.core.nth.call(null,vec__9456,0,null);var right = cljs.core.nth.call(null,vec__9456,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9449.call(null,cljs.core.rest.call(null,s__9450__$2)));
}
} else
{return null;
}
break;
}
});})(i__9431,columned,c,columns,line_group,c__7079__auto__,size__7080__auto__,b__9432,s__9430__$2,temp__4092__auto____$2,changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(i__9431,columned,c,columns,line_group,c__7079__auto__,size__7080__auto__,b__9432,s__9430__$2,temp__4092__auto____$2,changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})());
{
var G__9579 = (i__9431 + 1);
i__9431 = G__9579;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9432),iter__9429.call(null,cljs.core.chunk_rest.call(null,s__9430__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9432),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9430__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7081__auto__ = ((function (columned,c,columns,line_group,s__9430__$2,temp__4092__auto____$2,changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function iter__9457(s__9458){return (new cljs.core.LazySeq(null,((function (columned,c,columns,line_group,s__9430__$2,temp__4092__auto____$2,changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output){
return (function (){var s__9458__$1 = s__9458;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9458__$1);if(temp__4092__auto____$3)
{var s__9458__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9458__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__9458__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__9460 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__9459 = 0;while(true){
if((i__9459 < size__7080__auto__))
{var vec__9463 = cljs.core._nth.call(null,c__7079__auto__,i__9459);var left = cljs.core.nth.call(null,vec__9463,0,null);var right = cljs.core.nth.call(null,vec__9463,1,null);cljs.core.chunk_append.call(null,b__9460,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9580 = (i__9459 + 1);
i__9459 = G__9580;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9460),iter__9457.call(null,cljs.core.chunk_rest.call(null,s__9458__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9460),null);
}
} else
{var vec__9464 = cljs.core.first.call(null,s__9458__$2);var left = cljs.core.nth.call(null,vec__9464,0,null);var right = cljs.core.nth.call(null,vec__9464,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9457.call(null,cljs.core.rest.call(null,s__9458__$2)));
}
} else
{return null;
}
break;
}
});})(columned,c,columns,line_group,s__9430__$2,temp__4092__auto____$2,changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(columned,c,columns,line_group,s__9430__$2,temp__4092__auto____$2,changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,columns);
})(),iter__9429.call(null,cljs.core.rest.call(null,s__9430__$2)));
}
} else
{return null;
}
break;
}
});})(changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(changes_group,s__9318__$2,temp__4092__auto____$1,filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9317.call(null,cljs.core.rest.call(null,s__9318__$2)));
}
} else
{return null;
}
break;
}
});})(filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
,null,null));
});})(filename,file_diff,file,s__8870__$2,temp__4092__auto__,output))
;return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null),iter__8869.call(null,cljs.core.rest.call(null,s__8870__$2)));
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
})());var seq__9465_9581 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9466_9582 = null;var count__9467_9583 = 0;var i__9468_9584 = 0;while(true){
if((i__9468_9584 < count__9467_9583))
{var vec__9469_9585 = cljs.core._nth.call(null,chunk__9466_9582,i__9468_9584);var ev__7756__auto___9586 = cljs.core.nth.call(null,vec__9469_9585,0,null);var func__7757__auto___9587 = cljs.core.nth.call(null,vec__9469_9585,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9586,func__7757__auto___9587);
{
var G__9588 = seq__9465_9581;
var G__9589 = chunk__9466_9582;
var G__9590 = count__9467_9583;
var G__9591 = (i__9468_9584 + 1);
seq__9465_9581 = G__9588;
chunk__9466_9582 = G__9589;
count__9467_9583 = G__9590;
i__9468_9584 = G__9591;
continue;
}
} else
{var temp__4092__auto___9592 = cljs.core.seq.call(null,seq__9465_9581);if(temp__4092__auto___9592)
{var seq__9465_9593__$1 = temp__4092__auto___9592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9465_9593__$1))
{var c__7112__auto___9594 = cljs.core.chunk_first.call(null,seq__9465_9593__$1);{
var G__9595 = cljs.core.chunk_rest.call(null,seq__9465_9593__$1);
var G__9596 = c__7112__auto___9594;
var G__9597 = cljs.core.count.call(null,c__7112__auto___9594);
var G__9598 = 0;
seq__9465_9581 = G__9595;
chunk__9466_9582 = G__9596;
count__9467_9583 = G__9597;
i__9468_9584 = G__9598;
continue;
}
} else
{var vec__9470_9599 = cljs.core.first.call(null,seq__9465_9593__$1);var ev__7756__auto___9600 = cljs.core.nth.call(null,vec__9470_9599,0,null);var func__7757__auto___9601 = cljs.core.nth.call(null,vec__9470_9599,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9600,func__7757__auto___9601);
{
var G__9602 = cljs.core.next.call(null,seq__9465_9593__$1);
var G__9603 = null;
var G__9604 = 0;
var G__9605 = 0;
seq__9465_9581 = G__9602;
chunk__9466_9582 = G__9603;
count__9467_9583 = G__9604;
i__9468_9584 = G__9605;
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
lt.plugins.gitlight.diff.separate = (function separate(fun,coll){return cljs.core.reduce.call(null,(function (p__9473,line){var vec__9474 = p__9473;var left = cljs.core.nth.call(null,vec__9474,0,null);var right = cljs.core.nth.call(null,vec__9474,1,null);if(cljs.core.truth_(fun.call(null,line)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,left,line),right], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,cljs.core.conj.call(null,right,line)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),coll);
});
lt.plugins.gitlight.diff.columner = (function columner(lines){if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"context",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,lines,lines)], null);
} else
{var vec__9477 = lt.plugins.gitlight.diff.separate.call(null,(function (p1__9475_SHARP_){return cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p1__9475_SHARP_));
}),lines);var left = cljs.core.nth.call(null,vec__9477,0,null);var right = cljs.core.nth.call(null,vec__9477,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"changed",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,left,right)], null);
}
});
lt.plugins.gitlight.diff.split_into_headered_groups = (function split_into_headered_groups(lines,fun,result_fun,headkey,contkey){if(!(cljs.core.empty_QMARK_.call(null,lines)))
{var fst = cljs.core.first.call(null,lines);var vec__9479 = cljs.core.split_with.call(null,fun,cljs.core.rest.call(null,lines));var content = cljs.core.nth.call(null,vec__9479,0,null);var leftovers = cljs.core.nth.call(null,vec__9479,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([headkey,fst,contkey,result_fun.call(null,content)], true, false),split_into_headered_groups.call(null,leftovers,fun,result_fun,headkey,contkey));
} else
{return null;
}
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,x));
}),(function (x){return cljs.core.partition_by.call(null,(function (p1__9480_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__9480_SHARP_));
}),x);
}),new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.Keyword(null,"content","content",1965434859));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(data){var vec__9482 = cljs.core.take.call(null,3,data);var header = cljs.core.nth.call(null,vec__9482,0,null);var left = cljs.core.nth.call(null,vec__9482,1,null);var right = cljs.core.nth.call(null,vec__9482,2,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,cljs.core.drop.call(null,3,data));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),header,new cljs.core.Keyword(null,"left","left",1017222009),left,new cljs.core.Keyword(null,"right","right",1122416014),right,new cljs.core.Keyword(null,"groups","groups",4071411014),groups], null);
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
return (function (p__9487,part){var vec__9488 = p__9487;var ok = cljs.core.nth.call(null,vec__9488,0,null);var stack = cljs.core.nth.call(null,vec__9488,1,null);var vec__9489 = cljs.core.split_at.call(null,1,part);var fst = cljs.core.nth.call(null,vec__9489,0,null);var rst = cljs.core.nth.call(null,vec__9489,1,null);var left = cljs.core.count.call(null,stack);var right = cljs.core.count.call(null,part);var G__9490 = cljs.core.first.call(null,fst);if(cljs.core._EQ_.call(null,"\\",G__9490))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok,part], null);
} else
{if(cljs.core._EQ_.call(null,"+",G__9490))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,ok,cljs.core.map.call(null,cljs.core.str,part,stack),cljs.core.repeat.call(null,(right - left),"+")),cljs.core.repeat.call(null,(left - right),"-")], null);
} else
{if(cljs.core._EQ_.call(null,"-",G__9490))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok,part], null);
} else
{if(cljs.core._EQ_.call(null," ",G__9490))
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
lt.plugins.gitlight.diff.style_diff_marker = (function style_diff_marker(p__9491){var vec__9499 = p__9491;var p = cljs.core.nth.call(null,vec__9499,0,null);var m = cljs.core.nth.call(null,vec__9499,1,null);var content = vec__9499;var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(((cljs.core._EQ_.call(null,p," ")) && ((m == null)))?"no-change":(((cljs.core._EQ_.call(null,p,"+")) && ((m == null)))?"added-line":(((cljs.core._EQ_.call(null,p," ")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"deleted-lines":(((cljs.core._EQ_.call(null,p,"+")) && (cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,m))))?"modified-line":null))))], null),content], null));var seq__9500_9606 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9501_9607 = null;var count__9502_9608 = 0;var i__9503_9609 = 0;while(true){
if((i__9503_9609 < count__9502_9608))
{var vec__9504_9610 = cljs.core._nth.call(null,chunk__9501_9607,i__9503_9609);var ev__7756__auto___9611 = cljs.core.nth.call(null,vec__9504_9610,0,null);var func__7757__auto___9612 = cljs.core.nth.call(null,vec__9504_9610,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9611,func__7757__auto___9612);
{
var G__9613 = seq__9500_9606;
var G__9614 = chunk__9501_9607;
var G__9615 = count__9502_9608;
var G__9616 = (i__9503_9609 + 1);
seq__9500_9606 = G__9613;
chunk__9501_9607 = G__9614;
count__9502_9608 = G__9615;
i__9503_9609 = G__9616;
continue;
}
} else
{var temp__4092__auto___9617 = cljs.core.seq.call(null,seq__9500_9606);if(temp__4092__auto___9617)
{var seq__9500_9618__$1 = temp__4092__auto___9617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9500_9618__$1))
{var c__7112__auto___9619 = cljs.core.chunk_first.call(null,seq__9500_9618__$1);{
var G__9620 = cljs.core.chunk_rest.call(null,seq__9500_9618__$1);
var G__9621 = c__7112__auto___9619;
var G__9622 = cljs.core.count.call(null,c__7112__auto___9619);
var G__9623 = 0;
seq__9500_9606 = G__9620;
chunk__9501_9607 = G__9621;
count__9502_9608 = G__9622;
i__9503_9609 = G__9623;
continue;
}
} else
{var vec__9505_9624 = cljs.core.first.call(null,seq__9500_9618__$1);var ev__7756__auto___9625 = cljs.core.nth.call(null,vec__9505_9624,0,null);var func__7757__auto___9626 = cljs.core.nth.call(null,vec__9505_9624,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___9625,func__7757__auto___9626);
{
var G__9627 = cljs.core.next.call(null,seq__9500_9618__$1);
var G__9628 = null;
var G__9629 = 0;
var G__9630 = 0;
seq__9500_9606 = G__9627;
chunk__9501_9607 = G__9628;
count__9502_9608 = G__9629;
i__9503_9609 = G__9630;
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
lt.plugins.gitlight.branch.local_branches_ui = (function local_branches_ui(branches){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = (function iter__7886(s__7887){return (new cljs.core.LazySeq(null,(function (){var s__7887__$1 = s__7887;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7887__$1);if(temp__4092__auto__)
{var s__7887__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7887__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7887__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7889 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7888 = 0;while(true){
if((i__7888 < size__7080__auto__))
{var parsed = cljs.core._nth.call(null,c__7079__auto__,i__7888);var vec__7894 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__7894,0,null);var vec__7895 = cljs.core.nth.call(null,vec__7894,1,null);var branch = cljs.core.nth.call(null,vec__7895,0,null);var sha1 = cljs.core.nth.call(null,vec__7895,1,null);var desc = cljs.core.nth.call(null,vec__7895,2,null);cljs.core.chunk_append.call(null,b__7889,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":lt.plugins.gitlight.branch.delete_branch_button.call(null,branch))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null));
{
var G__7955 = (i__7888 + 1);
i__7888 = G__7955;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7889),iter__7886.call(null,cljs.core.chunk_rest.call(null,s__7887__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7889),null);
}
} else
{var parsed = cljs.core.first.call(null,s__7887__$2);var vec__7896 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__7896,0,null);var vec__7897 = cljs.core.nth.call(null,vec__7896,1,null);var branch = cljs.core.nth.call(null,vec__7897,0,null);var sha1 = cljs.core.nth.call(null,vec__7897,1,null);var desc = cljs.core.nth.call(null,vec__7897,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":lt.plugins.gitlight.branch.delete_branch_button.call(null,branch))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null),iter__7886.call(null,cljs.core.rest.call(null,s__7887__$2)));
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
lt.plugins.gitlight.branch.remote_branches_ui = (function remote_branches_ui(remote_branches){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = (function iter__7906(s__7907){return (new cljs.core.LazySeq(null,(function (){var s__7907__$1 = s__7907;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7907__$1);if(temp__4092__auto__)
{var s__7907__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7907__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7907__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7909 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7908 = 0;while(true){
if((i__7908 < size__7080__auto__))
{var branch = cljs.core._nth.call(null,c__7079__auto__,i__7908);var vec__7912 = clojure.string.split.call(null,branch,/\s+/,4);var _ = cljs.core.nth.call(null,vec__7912,0,null);var branch_name = cljs.core.nth.call(null,vec__7912,1,null);var h = cljs.core.nth.call(null,vec__7912,2,null);var tail = cljs.core.nth.call(null,vec__7912,3,null);cljs.core.chunk_append.call(null,b__7909,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),branch_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),tail], null)], null));
{
var G__7956 = (i__7908 + 1);
i__7908 = G__7956;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7909),iter__7906.call(null,cljs.core.chunk_rest.call(null,s__7907__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7909),null);
}
} else
{var branch = cljs.core.first.call(null,s__7907__$2);var vec__7913 = clojure.string.split.call(null,branch,/\s+/,4);var _ = cljs.core.nth.call(null,vec__7913,0,null);var branch_name = cljs.core.nth.call(null,vec__7913,1,null);var h = cljs.core.nth.call(null,vec__7913,2,null);var tail = cljs.core.nth.call(null,vec__7913,3,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),branch_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),tail], null)], null),iter__7906.call(null,cljs.core.rest.call(null,s__7907__$2)));
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
lt.plugins.gitlight.branch.remotes_ui = (function remotes_ui(remotes){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = (function iter__7922(s__7923){return (new cljs.core.LazySeq(null,(function (){var s__7923__$1 = s__7923;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7923__$1);if(temp__4092__auto__)
{var s__7923__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7923__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7923__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7925 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7924 = 0;while(true){
if((i__7924 < size__7080__auto__))
{var remote = cljs.core._nth.call(null,c__7079__auto__,i__7924);var vec__7928 = clojure.string.split.call(null,remote,/\s+/,3);var r = cljs.core.nth.call(null,vec__7928,0,null);var url = cljs.core.nth.call(null,vec__7928,1,null);var what = cljs.core.nth.call(null,vec__7928,2,null);cljs.core.chunk_append.call(null,b__7925,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),url], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),what], null)], null));
{
var G__7957 = (i__7924 + 1);
i__7924 = G__7957;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7925),iter__7922.call(null,cljs.core.chunk_rest.call(null,s__7923__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7925),null);
}
} else
{var remote = cljs.core.first.call(null,s__7923__$2);var vec__7929 = clojure.string.split.call(null,remote,/\s+/,3);var r = cljs.core.nth.call(null,vec__7929,0,null);var url = cljs.core.nth.call(null,vec__7929,1,null);var what = cljs.core.nth.call(null,vec__7929,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),url], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),what], null)], null),iter__7922.call(null,cljs.core.rest.call(null,s__7923__$2)));
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
lt.plugins.gitlight.branch.branch_panel = (function branch_panel(this$){var e__7755__auto__ = crate.core.html.call(null,(function (){var vec__7937 = new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var branches = cljs.core.nth.call(null,vec__7937,0,null);var remotes = cljs.core.nth.call(null,vec__7937,1,null);var remote_branches = cljs.core.nth.call(null,vec__7937,2,null);return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-branches","div.gitlight-branches",1801709646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Branches"], null),lt.plugins.gitlight.branch.local_branches_ui.call(null,branches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Remote branches"], null),lt.plugins.gitlight.branch.remote_branches_ui.call(null,remote_branches),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Remotes"], null),lt.plugins.gitlight.branch.remotes_ui.call(null,remotes)], null);
})());var seq__7938_7958 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7939_7959 = null;var count__7940_7960 = 0;var i__7941_7961 = 0;while(true){
if((i__7941_7961 < count__7940_7960))
{var vec__7942_7962 = cljs.core._nth.call(null,chunk__7939_7959,i__7941_7961);var ev__7756__auto___7963 = cljs.core.nth.call(null,vec__7942_7962,0,null);var func__7757__auto___7964 = cljs.core.nth.call(null,vec__7942_7962,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7963,func__7757__auto___7964);
{
var G__7965 = seq__7938_7958;
var G__7966 = chunk__7939_7959;
var G__7967 = count__7940_7960;
var G__7968 = (i__7941_7961 + 1);
seq__7938_7958 = G__7965;
chunk__7939_7959 = G__7966;
count__7940_7960 = G__7967;
i__7941_7961 = G__7968;
continue;
}
} else
{var temp__4092__auto___7969 = cljs.core.seq.call(null,seq__7938_7958);if(temp__4092__auto___7969)
{var seq__7938_7970__$1 = temp__4092__auto___7969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7938_7970__$1))
{var c__7112__auto___7971 = cljs.core.chunk_first.call(null,seq__7938_7970__$1);{
var G__7972 = cljs.core.chunk_rest.call(null,seq__7938_7970__$1);
var G__7973 = c__7112__auto___7971;
var G__7974 = cljs.core.count.call(null,c__7112__auto___7971);
var G__7975 = 0;
seq__7938_7958 = G__7972;
chunk__7939_7959 = G__7973;
count__7940_7960 = G__7974;
i__7941_7961 = G__7975;
continue;
}
} else
{var vec__7943_7976 = cljs.core.first.call(null,seq__7938_7970__$1);var ev__7756__auto___7977 = cljs.core.nth.call(null,vec__7943_7976,0,null);var func__7757__auto___7978 = cljs.core.nth.call(null,vec__7943_7976,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7977,func__7757__auto___7978);
{
var G__7979 = cljs.core.next.call(null,seq__7938_7970__$1);
var G__7980 = null;
var G__7981 = 0;
var G__7982 = 0;
seq__7938_7958 = G__7979;
chunk__7939_7959 = G__7980;
count__7940_7960 = G__7981;
i__7941_7961 = G__7982;
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
return (function (p1__7944_SHARP_){return cljs.core.partial.call(null,lt.plugins.gitlight.git.git,p1__7944_SHARP_);
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__10284){var vec__10300 = p__10284;var f = cljs.core.nth.call(null,vec__10300,0,null);var t = cljs.core.nth.call(null,vec__10300,1,null);var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,f,f,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = ((function (vec__10300,f,t){
return (function iter__10301(s__10302){return (new cljs.core.LazySeq(null,((function (vec__10300,f,t){
return (function (){var s__10302__$1 = s__10302;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10302__$1);if(temp__4092__auto__)
{var s__10302__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10302__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10302__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10304 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10303 = 0;while(true){
if((i__10303 < size__7080__auto__))
{var vec__10307 = cljs.core._nth.call(null,c__7079__auto__,i__10303);var bt = cljs.core.nth.call(null,vec__10307,0,null);var fun = cljs.core.nth.call(null,vec__10307,1,null);cljs.core.chunk_append.call(null,b__10304,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun));
{
var G__10439 = (i__10303 + 1);
i__10303 = G__10439;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10304),iter__10301.call(null,cljs.core.chunk_rest.call(null,s__10302__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10304),null);
}
} else
{var vec__10308 = cljs.core.first.call(null,s__10302__$2);var bt = cljs.core.nth.call(null,vec__10308,0,null);var fun = cljs.core.nth.call(null,vec__10308,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun),iter__10301.call(null,cljs.core.rest.call(null,s__10302__$2)));
}
} else
{return null;
}
break;
}
});})(vec__10300,f,t))
,null,null));
});})(vec__10300,f,t))
;return iter__7081__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__10309_10440 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10310_10441 = null;var count__10311_10442 = 0;var i__10312_10443 = 0;while(true){
if((i__10312_10443 < count__10311_10442))
{var vec__10313_10444 = cljs.core._nth.call(null,chunk__10310_10441,i__10312_10443);var ev__7756__auto___10445 = cljs.core.nth.call(null,vec__10313_10444,0,null);var func__7757__auto___10446 = cljs.core.nth.call(null,vec__10313_10444,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10445,func__7757__auto___10446);
{
var G__10447 = seq__10309_10440;
var G__10448 = chunk__10310_10441;
var G__10449 = count__10311_10442;
var G__10450 = (i__10312_10443 + 1);
seq__10309_10440 = G__10447;
chunk__10310_10441 = G__10448;
count__10311_10442 = G__10449;
i__10312_10443 = G__10450;
continue;
}
} else
{var temp__4092__auto___10451 = cljs.core.seq.call(null,seq__10309_10440);if(temp__4092__auto___10451)
{var seq__10309_10452__$1 = temp__4092__auto___10451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10309_10452__$1))
{var c__7112__auto___10453 = cljs.core.chunk_first.call(null,seq__10309_10452__$1);{
var G__10454 = cljs.core.chunk_rest.call(null,seq__10309_10452__$1);
var G__10455 = c__7112__auto___10453;
var G__10456 = cljs.core.count.call(null,c__7112__auto___10453);
var G__10457 = 0;
seq__10309_10440 = G__10454;
chunk__10310_10441 = G__10455;
count__10311_10442 = G__10456;
i__10312_10443 = G__10457;
continue;
}
} else
{var vec__10314_10458 = cljs.core.first.call(null,seq__10309_10452__$1);var ev__7756__auto___10459 = cljs.core.nth.call(null,vec__10314_10458,0,null);var func__7757__auto___10460 = cljs.core.nth.call(null,vec__10314_10458,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10459,func__7757__auto___10460);
{
var G__10461 = cljs.core.next.call(null,seq__10309_10452__$1);
var G__10462 = null;
var G__10463 = 0;
var G__10464 = 0;
seq__10309_10440 = G__10461;
chunk__10310_10441 = G__10462;
count__10311_10442 = G__10463;
i__10312_10443 = G__10464;
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__10321_10465 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10322_10466 = null;var count__10323_10467 = 0;var i__10324_10468 = 0;while(true){
if((i__10324_10468 < count__10323_10467))
{var vec__10325_10469 = cljs.core._nth.call(null,chunk__10322_10466,i__10324_10468);var ev__7756__auto___10470 = cljs.core.nth.call(null,vec__10325_10469,0,null);var func__7757__auto___10471 = cljs.core.nth.call(null,vec__10325_10469,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10470,func__7757__auto___10471);
{
var G__10472 = seq__10321_10465;
var G__10473 = chunk__10322_10466;
var G__10474 = count__10323_10467;
var G__10475 = (i__10324_10468 + 1);
seq__10321_10465 = G__10472;
chunk__10322_10466 = G__10473;
count__10323_10467 = G__10474;
i__10324_10468 = G__10475;
continue;
}
} else
{var temp__4092__auto___10476 = cljs.core.seq.call(null,seq__10321_10465);if(temp__4092__auto___10476)
{var seq__10321_10477__$1 = temp__4092__auto___10476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10321_10477__$1))
{var c__7112__auto___10478 = cljs.core.chunk_first.call(null,seq__10321_10477__$1);{
var G__10479 = cljs.core.chunk_rest.call(null,seq__10321_10477__$1);
var G__10480 = c__7112__auto___10478;
var G__10481 = cljs.core.count.call(null,c__7112__auto___10478);
var G__10482 = 0;
seq__10321_10465 = G__10479;
chunk__10322_10466 = G__10480;
count__10323_10467 = G__10481;
i__10324_10468 = G__10482;
continue;
}
} else
{var vec__10326_10483 = cljs.core.first.call(null,seq__10321_10477__$1);var ev__7756__auto___10484 = cljs.core.nth.call(null,vec__10326_10483,0,null);var func__7757__auto___10485 = cljs.core.nth.call(null,vec__10326_10483,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10484,func__7757__auto___10485);
{
var G__10486 = cljs.core.next.call(null,seq__10321_10477__$1);
var G__10487 = null;
var G__10488 = 0;
var G__10489 = 0;
seq__10321_10465 = G__10486;
chunk__10322_10466 = G__10487;
count__10323_10467 = G__10488;
i__10324_10468 = G__10489;
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
}))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7081__auto__ = (function iter__10377(s__10378){return (new cljs.core.LazySeq(null,(function (){var s__10378__$1 = s__10378;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10378__$1);if(temp__4092__auto__)
{var s__10378__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10378__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10378__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10380 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10379 = 0;while(true){
if((i__10379 < size__7080__auto__))
{var option_group = cljs.core._nth.call(null,c__7079__auto__,i__10379);cljs.core.chunk_append.call(null,b__10380,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (i__10379,option_group,c__7079__auto__,size__7080__auto__,b__10380,s__10378__$2,temp__4092__auto__){
return (function iter__10397(s__10398){return (new cljs.core.LazySeq(null,((function (i__10379,option_group,c__7079__auto__,size__7080__auto__,b__10380,s__10378__$2,temp__4092__auto__){
return (function (){var s__10398__$1 = s__10398;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10398__$1);if(temp__4092__auto____$1)
{var s__10398__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10398__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__10398__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__10400 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__10399 = 0;while(true){
if((i__10399 < size__7080__auto____$1))
{var vec__10403 = cljs.core._nth.call(null,c__7079__auto____$1,i__10399);var bname = cljs.core.nth.call(null,vec__10403,0,null);var fun = cljs.core.nth.call(null,vec__10403,1,null);cljs.core.chunk_append.call(null,b__10400,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10490 = (i__10399 + 1);
i__10399 = G__10490;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10400),iter__10397.call(null,cljs.core.chunk_rest.call(null,s__10398__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10400),null);
}
} else
{var vec__10404 = cljs.core.first.call(null,s__10398__$2);var bname = cljs.core.nth.call(null,vec__10404,0,null);var fun = cljs.core.nth.call(null,vec__10404,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10397.call(null,cljs.core.rest.call(null,s__10398__$2)));
}
} else
{return null;
}
break;
}
});})(i__10379,option_group,c__7079__auto__,size__7080__auto__,b__10380,s__10378__$2,temp__4092__auto__))
,null,null));
});})(i__10379,option_group,c__7079__auto__,size__7080__auto__,b__10380,s__10378__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null));
{
var G__10491 = (i__10379 + 1);
i__10379 = G__10491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10380),iter__10377.call(null,cljs.core.chunk_rest.call(null,s__10378__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10380),null);
}
} else
{var option_group = cljs.core.first.call(null,s__10378__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (option_group,s__10378__$2,temp__4092__auto__){
return (function iter__10405(s__10406){return (new cljs.core.LazySeq(null,((function (option_group,s__10378__$2,temp__4092__auto__){
return (function (){var s__10406__$1 = s__10406;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10406__$1);if(temp__4092__auto____$1)
{var s__10406__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10406__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10406__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10408 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10407 = 0;while(true){
if((i__10407 < size__7080__auto__))
{var vec__10411 = cljs.core._nth.call(null,c__7079__auto__,i__10407);var bname = cljs.core.nth.call(null,vec__10411,0,null);var fun = cljs.core.nth.call(null,vec__10411,1,null);cljs.core.chunk_append.call(null,b__10408,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10492 = (i__10407 + 1);
i__10407 = G__10492;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10408),iter__10405.call(null,cljs.core.chunk_rest.call(null,s__10406__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10408),null);
}
} else
{var vec__10412 = cljs.core.first.call(null,s__10406__$2);var bname = cljs.core.nth.call(null,vec__10412,0,null);var fun = cljs.core.nth.call(null,vec__10412,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10405.call(null,cljs.core.rest.call(null,s__10406__$2)));
}
} else
{return null;
}
break;
}
});})(option_group,s__10378__$2,temp__4092__auto__))
,null,null));
});})(option_group,s__10378__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null),iter__10377.call(null,cljs.core.rest.call(null,s__10378__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,lt.plugins.gitlight.status.ui.repo_ops);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,"refresh","refresh",(function (x,y){return null;
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = (function iter__10413(s__10414){return (new cljs.core.LazySeq(null,(function (){var s__10414__$1 = s__10414;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10414__$1);if(temp__4092__auto__)
{var s__10414__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10414__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10414__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10416 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10415 = 0;while(true){
if((i__10415 < size__7080__auto__))
{var vec__10419 = cljs.core._nth.call(null,c__7079__auto__,i__10415);var g = cljs.core.nth.call(null,vec__10419,0,null);var fs = cljs.core.nth.call(null,vec__10419,1,null);cljs.core.chunk_append.call(null,b__10416,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10493 = (i__10415 + 1);
i__10415 = G__10493;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10416),iter__10413.call(null,cljs.core.chunk_rest.call(null,s__10414__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10416),null);
}
} else
{var vec__10420 = cljs.core.first.call(null,s__10414__$2);var g = cljs.core.nth.call(null,vec__10420,0,null);var fs = cljs.core.nth.call(null,vec__10420,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__10413.call(null,cljs.core.rest.call(null,s__10414__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,this$);
})()], null)], null));var seq__10421_10494 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10422_10495 = null;var count__10423_10496 = 0;var i__10424_10497 = 0;while(true){
if((i__10424_10497 < count__10423_10496))
{var vec__10425_10498 = cljs.core._nth.call(null,chunk__10422_10495,i__10424_10497);var ev__7756__auto___10499 = cljs.core.nth.call(null,vec__10425_10498,0,null);var func__7757__auto___10500 = cljs.core.nth.call(null,vec__10425_10498,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10499,func__7757__auto___10500);
{
var G__10501 = seq__10421_10494;
var G__10502 = chunk__10422_10495;
var G__10503 = count__10423_10496;
var G__10504 = (i__10424_10497 + 1);
seq__10421_10494 = G__10501;
chunk__10422_10495 = G__10502;
count__10423_10496 = G__10503;
i__10424_10497 = G__10504;
continue;
}
} else
{var temp__4092__auto___10505 = cljs.core.seq.call(null,seq__10421_10494);if(temp__4092__auto___10505)
{var seq__10421_10506__$1 = temp__4092__auto___10505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10421_10506__$1))
{var c__7112__auto___10507 = cljs.core.chunk_first.call(null,seq__10421_10506__$1);{
var G__10508 = cljs.core.chunk_rest.call(null,seq__10421_10506__$1);
var G__10509 = c__7112__auto___10507;
var G__10510 = cljs.core.count.call(null,c__7112__auto___10507);
var G__10511 = 0;
seq__10421_10494 = G__10508;
chunk__10422_10495 = G__10509;
count__10423_10496 = G__10510;
i__10424_10497 = G__10511;
continue;
}
} else
{var vec__10426_10512 = cljs.core.first.call(null,seq__10421_10506__$1);var ev__7756__auto___10513 = cljs.core.nth.call(null,vec__10426_10512,0,null);var func__7757__auto___10514 = cljs.core.nth.call(null,vec__10426_10512,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10513,func__7757__auto___10514);
{
var G__10515 = cljs.core.next.call(null,seq__10421_10506__$1);
var G__10516 = null;
var G__10517 = 0;
var G__10518 = 0;
seq__10421_10494 = G__10515;
chunk__10422_10495 = G__10516;
count__10423_10496 = G__10517;
i__10424_10497 = G__10518;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10433_10519 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10434_10520 = null;var count__10435_10521 = 0;var i__10436_10522 = 0;while(true){
if((i__10436_10522 < count__10435_10521))
{var vec__10437_10523 = cljs.core._nth.call(null,chunk__10434_10520,i__10436_10522);var ev__7756__auto___10524 = cljs.core.nth.call(null,vec__10437_10523,0,null);var func__7757__auto___10525 = cljs.core.nth.call(null,vec__10437_10523,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10524,func__7757__auto___10525);
{
var G__10526 = seq__10433_10519;
var G__10527 = chunk__10434_10520;
var G__10528 = count__10435_10521;
var G__10529 = (i__10436_10522 + 1);
seq__10433_10519 = G__10526;
chunk__10434_10520 = G__10527;
count__10435_10521 = G__10528;
i__10436_10522 = G__10529;
continue;
}
} else
{var temp__4092__auto___10530 = cljs.core.seq.call(null,seq__10433_10519);if(temp__4092__auto___10530)
{var seq__10433_10531__$1 = temp__4092__auto___10530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10433_10531__$1))
{var c__7112__auto___10532 = cljs.core.chunk_first.call(null,seq__10433_10531__$1);{
var G__10533 = cljs.core.chunk_rest.call(null,seq__10433_10531__$1);
var G__10534 = c__7112__auto___10532;
var G__10535 = cljs.core.count.call(null,c__7112__auto___10532);
var G__10536 = 0;
seq__10433_10519 = G__10533;
chunk__10434_10520 = G__10534;
count__10435_10521 = G__10535;
i__10436_10522 = G__10536;
continue;
}
} else
{var vec__10438_10537 = cljs.core.first.call(null,seq__10433_10531__$1);var ev__7756__auto___10538 = cljs.core.nth.call(null,vec__10438_10537,0,null);var func__7757__auto___10539 = cljs.core.nth.call(null,vec__10438_10537,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10538,func__7757__auto___10539);
{
var G__10540 = cljs.core.next.call(null,seq__10433_10531__$1);
var G__10541 = null;
var G__10542 = 0;
var G__10543 = 0;
seq__10433_10519 = G__10540;
chunk__10434_10520 = G__10541;
count__10435_10521 = G__10542;
i__10436_10522 = G__10543;
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
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests')) {
goog.provide('lt.plugins.gitlight.tests');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.objs.command');
lt.plugins.gitlight.tests.which_color_QMARK_ = (function which_color_QMARK_(result){var G__10219 = result;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"not-bool","not-bool",2543743254),G__10219))
{return "pink";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__10219))
{return "red";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__10219))
{return "green";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "purple";
} else
{return null;
}
}
}
}
});
lt.plugins.gitlight.tests.test_panel = (function test_panel(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7081__auto__ = (function iter__10234(s__10235){return (new cljs.core.LazySeq(null,(function (){var s__10235__$1 = s__10235;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10235__$1);if(temp__4092__auto__)
{var s__10235__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10235__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10235__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10237 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10236 = 0;while(true){
if((i__10236 < size__7080__auto__))
{var map__10240 = cljs.core._nth.call(null,c__7079__auto__,i__10236);var map__10240__$1 = ((cljs.core.seq_QMARK_.call(null,map__10240))?cljs.core.apply.call(null,cljs.core.hash_map,map__10240):map__10240);var status = cljs.core.get.call(null,map__10240__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10240__$1,new cljs.core.Keyword(null,"info","info",1017141280));cljs.core.chunk_append.call(null,b__10237,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null));
{
var G__10258 = (i__10236 + 1);
i__10236 = G__10258;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10237),iter__10234.call(null,cljs.core.chunk_rest.call(null,s__10235__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10237),null);
}
} else
{var map__10241 = cljs.core.first.call(null,s__10235__$2);var map__10241__$1 = ((cljs.core.seq_QMARK_.call(null,map__10241))?cljs.core.apply.call(null,cljs.core.hash_map,map__10241):map__10241);var status = cljs.core.get.call(null,map__10241__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10241__$1,new cljs.core.Keyword(null,"info","info",1017141280));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null),iter__10234.call(null,cljs.core.rest.call(null,s__10235__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__10242_10259 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10243_10260 = null;var count__10244_10261 = 0;var i__10245_10262 = 0;while(true){
if((i__10245_10262 < count__10244_10261))
{var vec__10246_10263 = cljs.core._nth.call(null,chunk__10243_10260,i__10245_10262);var ev__7756__auto___10264 = cljs.core.nth.call(null,vec__10246_10263,0,null);var func__7757__auto___10265 = cljs.core.nth.call(null,vec__10246_10263,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10264,func__7757__auto___10265);
{
var G__10266 = seq__10242_10259;
var G__10267 = chunk__10243_10260;
var G__10268 = count__10244_10261;
var G__10269 = (i__10245_10262 + 1);
seq__10242_10259 = G__10266;
chunk__10243_10260 = G__10267;
count__10244_10261 = G__10268;
i__10245_10262 = G__10269;
continue;
}
} else
{var temp__4092__auto___10270 = cljs.core.seq.call(null,seq__10242_10259);if(temp__4092__auto___10270)
{var seq__10242_10271__$1 = temp__4092__auto___10270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10242_10271__$1))
{var c__7112__auto___10272 = cljs.core.chunk_first.call(null,seq__10242_10271__$1);{
var G__10273 = cljs.core.chunk_rest.call(null,seq__10242_10271__$1);
var G__10274 = c__7112__auto___10272;
var G__10275 = cljs.core.count.call(null,c__7112__auto___10272);
var G__10276 = 0;
seq__10242_10259 = G__10273;
chunk__10243_10260 = G__10274;
count__10244_10261 = G__10275;
i__10245_10262 = G__10276;
continue;
}
} else
{var vec__10247_10277 = cljs.core.first.call(null,seq__10242_10271__$1);var ev__7756__auto___10278 = cljs.core.nth.call(null,vec__10247_10277,0,null);var func__7757__auto___10279 = cljs.core.nth.call(null,vec__10247_10277,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10278,func__7757__auto___10279);
{
var G__10280 = cljs.core.next.call(null,seq__10242_10271__$1);
var G__10281 = null;
var G__10282 = 0;
var G__10283 = 0;
seq__10242_10259 = G__10280;
chunk__10243_10260 = G__10281;
count__10244_10261 = G__10282;
i__10245_10262 = G__10283;
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
lt.plugins.gitlight.tests.__BEH__refresh_results = (function __BEH__refresh_results(this$,result){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",2111450984)], null),cljs.core.conj,result);
var new_cnt = lt.plugins.gitlight.tests.test_panel.call(null,this$);lt.plugins.gitlight.common_ui.dom_reset.call(null,lt.util.dom.parent.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),new_cnt);
console.log(new_cnt.innerHTML);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),new_cnt], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests","refresh-results","lt.plugins.gitlight.tests/refresh-results",3760669173),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.__BEH__refresh_results,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-result","add-result",1606018619),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests","tests.out","lt.plugins.gitlight.tests/tests.out",4666915576),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tests.out","gitlight-tests.out",1702733674)], null),new cljs.core.Keyword(null,"name","name",1017277949),"tests out",new cljs.core.Keyword(null,"results","results",2111450984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",1017141280),"show test panel",new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"ok","ok",1013907790)], null)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword("lt.plugins.gitlight.tests","refresh-results","lt.plugins.gitlight.tests/refresh-results",3760669173)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.tests.test_panel.call(null,this$);
}));
lt.plugins.gitlight.tests.tests_out = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests","tests.out","lt.plugins.gitlight.tests/tests.out",4666915576));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.tests","selft-test","lt.plugins.gitlight.tests/selft-test",1165251898),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: self test",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.gitlight.tests.tests_out);
lt.object.merge_BANG_.call(null,lt.plugins.gitlight.tests.tests_out,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.PersistentVector.EMPTY], null));
return lt.object.raise.call(null,lt.plugins.gitlight.tests.tests_out,new cljs.core.Keyword(null,"run-tests","run-tests",3407592401));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests.lib')) {
goog.provide('lt.plugins.gitlight.tests.lib');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.plugins.gitlight.tests');
goog.require('lt.plugins.gitlight.tests');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.tests.lib.asrt_out = (function asrt_out(status){if((status === false) || ((status == null)))
{return new cljs.core.Keyword(null,"error","error",1110689146);
} else
{if(status === true)
{return new cljs.core.Keyword(null,"ok","ok",1013907790);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"not-bool","not-bool",2543743254);
} else
{return null;
}
}
}
});
/**
* Show status of test
*/
lt.plugins.gitlight.tests.lib.asrt = (function asrt(explanation,test_case){return lt.object.raise.call(null,lt.plugins.gitlight.tests.tests_out,new cljs.core.Keyword(null,"add-result","add-result",1606018619),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",1017141280),explanation,new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.tests.lib.asrt_out.call(null,test_case)], null));
});
lt.plugins.gitlight.tests.lib.selector_asrt = (function selector_asrt(p__10544){var map__10546 = p__10544;var map__10546__$1 = ((cljs.core.seq_QMARK_.call(null,map__10546))?cljs.core.apply.call(null,cljs.core.hash_map,map__10546):map__10546);var select = cljs.core.get.call(null,map__10546__$1,new cljs.core.Keyword(null,"select","select",4402849902));return null;
});
lt.plugins.gitlight.tests.lib.def_test = (function def_test(test_name,f){lt.plugins.gitlight.tests.lib.__BEH__test_name = (function __BEH__test_name(){console.log("refresh",Math.random());
return f.call(null);
});
lt.object.behavior_STAR_.call(null,test_name,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.lib.__BEH__test_name,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run-tests","run-tests",3407592401),null], null), null));
return lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.tests.tests_out,test_name);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests.status.back')) {
goog.provide('lt.plugins.gitlight.tests.status.back');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.objs.proc');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('clojure.string');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.tests.status.back.random_str = (function random_str(){var r = (10 + cljs.core.rand_int.call(null,10));return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,r,((function (r){
return (function (){return cljs.core.char$.call(null,(cljs.core.rand_int.call(null,26) + 97));
});})(r))
));
});
lt.plugins.gitlight.tests.status.back.data = cljs.core.list(cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"newfile","newfile",2859647630),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"newfile","newfile",2859647630),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-both-added","unmerged-both-added",3821120238),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"newfile","newfile",2859647630),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-added-by-us","unmerged-added-by-us",4095962481),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"renamed","renamed",2106238040),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"renamed","renamed",2106238040),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"renamed","renamed",2106238040),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"copied","copied",3954141750),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"copied","copied",3954141750),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"copied","copied",3954141750),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-both-deleted","unmerged-both-deleted",4207561479),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-deleted-by-us","unmerged-deleted-by-us",1004394442),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-added-by-them","unmerged-added-by-them",3639367855),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-deleted-by-them","unmerged-deleted-by-them",4759851208),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-both-modified","unmerged-both-modified",4092771903),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))));
lt.plugins.gitlight.tests.status.back.change_filenames = (function change_filenames(filename,x){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10570_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filename","filename",4574102905),p1__10570_SHARP_))
{return filename;
} else
{return p1__10570_SHARP_;
}
}),x));
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","back-tests","lt.plugins.gitlight.tests.status.back/back-tests",4633446629),(function (){lt.plugins.gitlight.tests.status.back.test_data = (function test_data(pair){var vec__10574 = pair;var n = cljs.core.nth.call(null,vec__10574,0,null);var what = cljs.core.nth.call(null,vec__10574,1,null);var vec__10575 = what;var tst = cljs.core.nth.call(null,vec__10575,0,null);var parsed = cljs.core.nth.call(null,vec__10575,1,null);var vec__10576 = tst;var X = cljs.core.nth.call(null,vec__10576,0,null);var Y = cljs.core.nth.call(null,vec__10576,1,null);var filename = cljs.core.nth.call(null,vec__10576,2,null);var d = cljs.core.nth.call(null,lt.plugins.gitlight.tests.status.back.data,n);var what_should_be = cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.tests.status.back.change_filenames,filename),d));var what_is = cljs.core.sort.call(null,parsed);var tst__$1 = cljs.core._EQ_.call(null,what_should_be,what_is);if(!(tst__$1))
{lt.plugins.gitlight.tests.lib.asrt.call(null,[cljs.core.str("parsing porcelain: `"),cljs.core.str(X),cljs.core.str("' `"),cljs.core.str(Y),cljs.core.str("'")].join(''),tst__$1);
} else
{}
return tst__$1;
});
lt.plugins.gitlight.tests.status.back.generate_test_data = (function generate_test_data(){var iter__7081__auto__ = (function iter__10583(s__10584){return (new cljs.core.LazySeq(null,(function (){var s__10584__$1 = s__10584;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10584__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7077__auto__ = ((function (s__10584__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__10585(s__10586){return (new cljs.core.LazySeq(null,((function (s__10584__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__10586__$1 = s__10586;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10586__$1);if(temp__4092__auto____$1)
{var s__10586__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10586__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__10586__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__10588 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__10587 = 0;while(true){
if((i__10587 < size__7080__auto__))
{var y = cljs.core._nth.call(null,c__7079__auto__,i__10587);cljs.core.chunk_append.call(null,b__10588,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})());
{
var G__10599 = (i__10587 + 1);
i__10587 = G__10599;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10588),iter__10585.call(null,cljs.core.chunk_rest.call(null,s__10586__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10588),null);
}
} else
{var y = cljs.core.first.call(null,s__10586__$2);return cljs.core.cons.call(null,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})(),iter__10585.call(null,cljs.core.rest.call(null,s__10586__$2)));
}
} else
{return null;
}
break;
}
});})(s__10584__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__10584__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7078__auto__ = cljs.core.seq.call(null,iterys__7077__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","D","U"], null)));if(fs__7078__auto__)
{return cljs.core.concat.call(null,fs__7078__auto__,iter__10583.call(null,cljs.core.rest.call(null,s__10584__$1)));
} else
{{
var G__10600 = cljs.core.rest.call(null,s__10584__$1);
s__10584__$1 = G__10600;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","R","C","D","U"], null));
});
lt.plugins.gitlight.tests.status.back.run_tests = (function run_tests(){return cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,lt.plugins.gitlight.tests.status.back.test_data,cljs.core.map_indexed.call(null,cljs.core.vector,lt.plugins.gitlight.tests.status.back.generate_test_data.call(null))));
});
return lt.plugins.gitlight.tests.lib.asrt.call(null,"git status parse porcelain",lt.plugins.gitlight.tests.status.back.run_tests.call(null));
}));
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","does-git-path-even-point-to-something?","lt.plugins.gitlight.tests.status.back/does-git-path-even-point-to-something?",1965506090),(function (){return lt.plugins.gitlight.tests.lib.asrt.call(null,"path to git exec",lt.objs.files.file_QMARK_.call(null,new cljs.core.Keyword(null,"git-binary","git-binary",1640221134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config))));
}));
lt.plugins.gitlight.tests.status.back.status_regexp = /## master\n( M not-staged-...\n){5}(M  staged-...\n){5}A  unstage_me\n\?\? stage_me\n\?\? trash\n(\?\? untracked-...\n){5}/;
lt.plugins.gitlight.tests.status.back.what_status_should_look_like = /## master\n( M not-staged-...\n){5}A  stage_me\n(M  staged-...\n){5}\?\? unstage_me\n(\?\? untracked-...\n){5}/;
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","git-add-and-reset-test","lt.plugins.gitlight.tests.status.back/git-add-and-reset-test",1253463607),(function (){lt.plugins.gitlight.tests.status.back.__BEH__git_test_repo__DOT__out = (function __BEH__git_test_repo__DOT__out(obj,data){cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.tests.status.back.test_git_status_out)),data.toString());
return lt.plugins.gitlight.tests.status.back.test_git_status.call(null,data.toString());
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","git-test-repo.out","lt.plugins.gitlight.tests.status.back/git-test-repo.out",1375076508),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.status.back.__BEH__git_test_repo__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"git test repo out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.tests.status.back.__BEH__test_git_status__DOT__out = (function __BEH__test_git_status__DOT__out(obj,data){var matched = cljs.core.re_matches.call(null,lt.plugins.gitlight.tests.status.back.status_regexp,data.toString());var cwd = cljs.core.deref.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));lt.plugins.gitlight.git.git_command_cwd.call(null,lt.plugins.gitlight.git.git_ignore_out,cwd,"add","stage_me");
lt.plugins.gitlight.git.git_command_cwd.call(null,lt.plugins.gitlight.git.git_ignore_out,cwd,"reset","unstage_me");
lt.objs.files.delete_BANG_.call(null,[cljs.core.str(cwd),cljs.core.str("/"),cljs.core.str("trash")].join(''));
lt.plugins.gitlight.tests.lib.asrt.call(null,"status of test git repo ",!((matched == null)));
return lt.plugins.gitlight.git.git_command_cwd.call(null,lt.plugins.gitlight.tests.status.back.after_add_reset_rm_out,cwd,"status","--porcelain","--branch");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","test-git-status.out","lt.plugins.gitlight.tests.status.back/test-git-status.out",4522827762),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.status.back.__BEH__test_git_status__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git status is executed, parse its output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.tests.status.back.__BEH__after_add_reset_rm__DOT__out = (function __BEH__after_add_reset_rm__DOT__out(obj,data){var matched_after = cljs.core.re_matches.call(null,lt.plugins.gitlight.tests.status.back.what_status_should_look_like,data.toString());return lt.plugins.gitlight.tests.lib.asrt.call(null,"status of test git repo after add and reset",!((matched_after == null)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","after-add-reset-rm.out","lt.plugins.gitlight.tests.status.back/after-add-reset-rm.out",1535969728),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.status.back.__BEH__after_add_reset_rm__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git status is executed after add and reset parse its output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.tests.status.back.git_test_repo = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","git-test-repo-out","lt.plugins.gitlight.tests.status.back/git-test-repo-out",1375071229),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-test-repo-out","git-test-repo-out",1206949381)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","git-test-repo.out","lt.plugins.gitlight.tests.status.back/git-test-repo.out",1375076508)], null)));
lt.plugins.gitlight.tests.status.back.test_git_status_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","test-git-status-out","lt.plugins.gitlight.tests.status.back/test-git-status-out",4522134867),new cljs.core.Keyword(null,"cwd","cwd",1014003170),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-git-status-out","test-git-status-out",2760717787)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","test-git-status.out","lt.plugins.gitlight.tests.status.back/test-git-status.out",4522827762)], null)));
lt.plugins.gitlight.tests.status.back.after_add_reset_rm_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","after-add-reset-rm-out","lt.plugins.gitlight.tests.status.back/after-add-reset-rm-out",1535940129),new cljs.core.Keyword(null,"cwd","cwd",1014003170),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"after-add-reset-rm-out","after-add-reset-rm-out",1384481769)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","after-add-reset-rm.out","lt.plugins.gitlight.tests.status.back/after-add-reset-rm.out",1535969728)], null)));
lt.plugins.gitlight.tests.status.back.test_git_status = (function test_git_status(cwd){return lt.plugins.gitlight.git.git_command_cwd.call(null,lt.plugins.gitlight.tests.status.back.test_git_status_out,cwd,"status","--porcelain","--branch");
});
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),[cljs.core.str(lt.objs.plugins.user_plugins_dir),cljs.core.str("/gitlight/src/lt/plugins/gitlight/tests/status/mkgit.sh")].join(''),new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.tests.status.back.git_test_repo], null));
}));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests.remote-com')) {
goog.provide('lt.plugins.gitlight.tests.remote_com');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.objs.proc');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('clojure.string');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-fetch-pull-commit-push-test","lt.plugins.gitlight.tests.remote-com/git-fetch-pull-commit-push-test",3144114653),(function (){lt.plugins.gitlight.tests.remote_com.__BEH__git_test_repo__DOT__out = (function __BEH__git_test_repo__DOT__out(obj,data){var cwd = data.toString();cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.tests.remote_com.git_test_exit_status)),cwd);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.tests.remote_com.git_test_exit_status)),"fetch");
return lt.plugins.gitlight.git.git_command_cwd.call(null,lt.plugins.gitlight.tests.remote_com.git_test_exit_status,cwd,"fetch");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-repo.out","lt.plugins.gitlight.tests.remote-com/git-test-repo.out",3393625464),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.remote_com.__BEH__git_test_repo__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"git test repo out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
/**
* @param {...*} var_args
*/
lt.plugins.gitlight.tests.remote_com.after = (function() { 
var after__delegate = function (text,cwd,data,what_next){cljs.core.println.call(null,text,cwd,data,what_next);
lt.plugins.gitlight.tests.lib.asrt.call(null,text,cljs.core._EQ_.call(null,0,data));
if(cljs.core._EQ_.call(null,0,data))
{cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.tests.remote_com.git_test_exit_status)),cljs.core.first.call(null,what_next));
return cljs.core.apply.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.git.git_command_cwd,lt.plugins.gitlight.tests.remote_com.git_test_exit_status,cwd),what_next);
} else
{return null;
}
};
var after = function (text,cwd,data,var_args){
var what_next = null;if (arguments.length > 3) {
  what_next = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return after__delegate.call(this,text,cwd,data,what_next);};
after.cljs$lang$maxFixedArity = 3;
after.cljs$lang$applyTo = (function (arglist__10569){
var text = cljs.core.first(arglist__10569);
arglist__10569 = cljs.core.next(arglist__10569);
var cwd = cljs.core.first(arglist__10569);
arglist__10569 = cljs.core.next(arglist__10569);
var data = cljs.core.first(arglist__10569);
var what_next = cljs.core.rest(arglist__10569);
return after__delegate(text,cwd,data,what_next);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
lt.plugins.gitlight.tests.remote_com.__BEH__git_test_exit_status__DOT__out = (function __BEH__git_test_exit_status__DOT__out(obj,data){var cwd = cljs.core.deref.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));var G__10558 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));if(cljs.core._EQ_.call(null,"push",G__10558))
{return lt.plugins.gitlight.tests.lib.asrt.call(null,"git push",cljs.core._EQ_.call(null,0,data));
} else
{if(cljs.core._EQ_.call(null,"commit",G__10558))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git commit",cwd,data,"push");
} else
{if(cljs.core._EQ_.call(null,"add",G__10558))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git add",cwd,data,"commit","-m","commiting");
} else
{if(cljs.core._EQ_.call(null,"pull",G__10558))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git pull",cwd,data,"add","push_me");
} else
{if(cljs.core._EQ_.call(null,"fetch",G__10558))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git fetch",cwd,data,"pull");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))))].join('')));
} else
{return null;
}
}
}
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-exit-status.out","lt.plugins.gitlight.tests.remote-com/git-test-exit-status.out",787683621),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.remote_com.__BEH__git_test_exit_status__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"git test repo out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.plugins.gitlight.tests.remote_com.git_test_exit_status = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-exit-status","lt.plugins.gitlight.tests.remote-com/git-test-exit-status",1407654085),new cljs.core.Keyword(null,"cwd","cwd",1014003170),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"command","command",1964298941),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-test-exit-status","git-test-exit-status",3511711443)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-exit-status.out","lt.plugins.gitlight.tests.remote-com/git-test-exit-status.out",787683621)], null)));
lt.plugins.gitlight.tests.remote_com.git_test_repo = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-repo-out","lt.plugins.gitlight.tests.remote-com/git-test-repo-out",3393665431),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-test-repo-out","git-test-repo-out",1206949381)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-repo.out","lt.plugins.gitlight.tests.remote-com/git-test-repo.out",3393625464)], null)));
lt.plugins.gitlight.tests.remote_com.dir = [cljs.core.str(lt.objs.plugins.user_plugins_dir),cljs.core.str("/gitlight/src/lt/plugins/gitlight/tests/status/")].join('');
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),[cljs.core.str(lt.plugins.gitlight.tests.remote_com.dir),cljs.core.str("mkremote.sh")].join(''),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.gitlight.tests.remote_com.dir,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.tests.remote_com.git_test_repo], null));
}));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests.status.ui')) {
goog.provide('lt.plugins.gitlight.tests.status.ui');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.status.ui');
goog.require('lt.plugins.gitlight.status.ui');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.tests.status.ui.test_node = (function test_node(){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"test"], null));var seq__10607_10623 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10608_10624 = null;var count__10609_10625 = 0;var i__10610_10626 = 0;while(true){
if((i__10610_10626 < count__10609_10625))
{var vec__10611_10627 = cljs.core._nth.call(null,chunk__10608_10624,i__10610_10626);var ev__7756__auto___10628 = cljs.core.nth.call(null,vec__10611_10627,0,null);var func__7757__auto___10629 = cljs.core.nth.call(null,vec__10611_10627,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10628,func__7757__auto___10629);
{
var G__10630 = seq__10607_10623;
var G__10631 = chunk__10608_10624;
var G__10632 = count__10609_10625;
var G__10633 = (i__10610_10626 + 1);
seq__10607_10623 = G__10630;
chunk__10608_10624 = G__10631;
count__10609_10625 = G__10632;
i__10610_10626 = G__10633;
continue;
}
} else
{var temp__4092__auto___10634 = cljs.core.seq.call(null,seq__10607_10623);if(temp__4092__auto___10634)
{var seq__10607_10635__$1 = temp__4092__auto___10634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10607_10635__$1))
{var c__7112__auto___10636 = cljs.core.chunk_first.call(null,seq__10607_10635__$1);{
var G__10637 = cljs.core.chunk_rest.call(null,seq__10607_10635__$1);
var G__10638 = c__7112__auto___10636;
var G__10639 = cljs.core.count.call(null,c__7112__auto___10636);
var G__10640 = 0;
seq__10607_10623 = G__10637;
chunk__10608_10624 = G__10638;
count__10609_10625 = G__10639;
i__10610_10626 = G__10640;
continue;
}
} else
{var vec__10612_10641 = cljs.core.first.call(null,seq__10607_10635__$1);var ev__7756__auto___10642 = cljs.core.nth.call(null,vec__10612_10641,0,null);var func__7757__auto___10643 = cljs.core.nth.call(null,vec__10612_10641,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___10642,func__7757__auto___10643);
{
var G__10644 = cljs.core.next.call(null,seq__10607_10635__$1);
var G__10645 = null;
var G__10646 = 0;
var G__10647 = 0;
seq__10607_10623 = G__10644;
chunk__10608_10624 = G__10645;
count__10609_10625 = G__10646;
i__10610_10626 = G__10647;
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
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.ui","test","lt.plugins.gitlight.tests.status.ui/test",1681010124),(function (){return lt.plugins.gitlight.tests.lib.asrt.call(null,"dom-truncate: truncates",(function (){var tn = lt.plugins.gitlight.tests.status.ui.test_node.call(null);lt.plugins.gitlight.common_ui.dom_truncate.call(null,tn);
return cljs.core._EQ_.call(null,tn.innerHTML,"");
})());
}));
}
if(!lt.util.load.provided_QMARK_('')) {
}

//# sourceMappingURL=gitlight_compiled.js.map