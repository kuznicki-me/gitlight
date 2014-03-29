if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.config = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),null], null), null),new cljs.core.Keyword(null,"git-binary","git-binary",1640221134),"git"));
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
lt.plugins.gitlight.common_ui.button = (function button(n,f,fun){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8529_8571 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__8530_8572 = null;var count__8531_8573 = 0;var i__8532_8574 = 0;while(true){
if((i__8532_8574 < count__8531_8573))
{var vec__8533_8575 = cljs.core._nth.call(null,chunk__8530_8572,i__8532_8574);var ev__8184__auto___8576 = cljs.core.nth.call(null,vec__8533_8575,0,null);var func__8185__auto___8577 = cljs.core.nth.call(null,vec__8533_8575,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8576,func__8185__auto___8577);
{
var G__8578 = seq__8529_8571;
var G__8579 = chunk__8530_8572;
var G__8580 = count__8531_8573;
var G__8581 = (i__8532_8574 + 1);
seq__8529_8571 = G__8578;
chunk__8530_8572 = G__8579;
count__8531_8573 = G__8580;
i__8532_8574 = G__8581;
continue;
}
} else
{var temp__4092__auto___8582 = cljs.core.seq.call(null,seq__8529_8571);if(temp__4092__auto___8582)
{var seq__8529_8583__$1 = temp__4092__auto___8582;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8529_8583__$1))
{var c__7561__auto___8584 = cljs.core.chunk_first.call(null,seq__8529_8583__$1);{
var G__8585 = cljs.core.chunk_rest.call(null,seq__8529_8583__$1);
var G__8586 = c__7561__auto___8584;
var G__8587 = cljs.core.count.call(null,c__7561__auto___8584);
var G__8588 = 0;
seq__8529_8571 = G__8585;
chunk__8530_8572 = G__8586;
count__8531_8573 = G__8587;
i__8532_8574 = G__8588;
continue;
}
} else
{var vec__8534_8589 = cljs.core.first.call(null,seq__8529_8583__$1);var ev__8184__auto___8590 = cljs.core.nth.call(null,vec__8534_8589,0,null);var func__8185__auto___8591 = cljs.core.nth.call(null,vec__8534_8589,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8590,func__8185__auto___8591);
{
var G__8592 = cljs.core.next.call(null,seq__8529_8583__$1);
var G__8593 = null;
var G__8594 = 0;
var G__8595 = 0;
seq__8529_8571 = G__8592;
chunk__8530_8572 = G__8593;
count__8531_8573 = G__8594;
i__8532_8574 = G__8595;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.common_ui.classy_button = (function classy_button(cls,n,f,fun){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8541_8596 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__8542_8597 = null;var count__8543_8598 = 0;var i__8544_8599 = 0;while(true){
if((i__8544_8599 < count__8543_8598))
{var vec__8545_8600 = cljs.core._nth.call(null,chunk__8542_8597,i__8544_8599);var ev__8184__auto___8601 = cljs.core.nth.call(null,vec__8545_8600,0,null);var func__8185__auto___8602 = cljs.core.nth.call(null,vec__8545_8600,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8601,func__8185__auto___8602);
{
var G__8603 = seq__8541_8596;
var G__8604 = chunk__8542_8597;
var G__8605 = count__8543_8598;
var G__8606 = (i__8544_8599 + 1);
seq__8541_8596 = G__8603;
chunk__8542_8597 = G__8604;
count__8543_8598 = G__8605;
i__8544_8599 = G__8606;
continue;
}
} else
{var temp__4092__auto___8607 = cljs.core.seq.call(null,seq__8541_8596);if(temp__4092__auto___8607)
{var seq__8541_8608__$1 = temp__4092__auto___8607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8541_8608__$1))
{var c__7561__auto___8609 = cljs.core.chunk_first.call(null,seq__8541_8608__$1);{
var G__8610 = cljs.core.chunk_rest.call(null,seq__8541_8608__$1);
var G__8611 = c__7561__auto___8609;
var G__8612 = cljs.core.count.call(null,c__7561__auto___8609);
var G__8613 = 0;
seq__8541_8596 = G__8610;
chunk__8542_8597 = G__8611;
count__8543_8598 = G__8612;
i__8544_8599 = G__8613;
continue;
}
} else
{var vec__8546_8614 = cljs.core.first.call(null,seq__8541_8608__$1);var ev__8184__auto___8615 = cljs.core.nth.call(null,vec__8546_8614,0,null);var func__8185__auto___8616 = cljs.core.nth.call(null,vec__8546_8614,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8615,func__8185__auto___8616);
{
var G__8617 = cljs.core.next.call(null,seq__8541_8608__$1);
var G__8618 = null;
var G__8619 = 0;
var G__8620 = 0;
seq__8541_8596 = G__8617;
chunk__8542_8597 = G__8618;
count__8543_8598 = G__8619;
i__8544_8599 = G__8620;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.common_ui.text_input = (function text_input(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"message"], null)], null));var seq__8553_8621 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),(function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
}),new cljs.core.Keyword(null,"blur","blur",1016931289),(function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
})], null)));var chunk__8554_8622 = null;var count__8555_8623 = 0;var i__8556_8624 = 0;while(true){
if((i__8556_8624 < count__8555_8623))
{var vec__8557_8625 = cljs.core._nth.call(null,chunk__8554_8622,i__8556_8624);var ev__8184__auto___8626 = cljs.core.nth.call(null,vec__8557_8625,0,null);var func__8185__auto___8627 = cljs.core.nth.call(null,vec__8557_8625,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8626,func__8185__auto___8627);
{
var G__8628 = seq__8553_8621;
var G__8629 = chunk__8554_8622;
var G__8630 = count__8555_8623;
var G__8631 = (i__8556_8624 + 1);
seq__8553_8621 = G__8628;
chunk__8554_8622 = G__8629;
count__8555_8623 = G__8630;
i__8556_8624 = G__8631;
continue;
}
} else
{var temp__4092__auto___8632 = cljs.core.seq.call(null,seq__8553_8621);if(temp__4092__auto___8632)
{var seq__8553_8633__$1 = temp__4092__auto___8632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8553_8633__$1))
{var c__7561__auto___8634 = cljs.core.chunk_first.call(null,seq__8553_8633__$1);{
var G__8635 = cljs.core.chunk_rest.call(null,seq__8553_8633__$1);
var G__8636 = c__7561__auto___8634;
var G__8637 = cljs.core.count.call(null,c__7561__auto___8634);
var G__8638 = 0;
seq__8553_8621 = G__8635;
chunk__8554_8622 = G__8636;
count__8555_8623 = G__8637;
i__8556_8624 = G__8638;
continue;
}
} else
{var vec__8558_8639 = cljs.core.first.call(null,seq__8553_8633__$1);var ev__8184__auto___8640 = cljs.core.nth.call(null,vec__8558_8639,0,null);var func__8185__auto___8641 = cljs.core.nth.call(null,vec__8558_8639,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8640,func__8185__auto___8641);
{
var G__8642 = cljs.core.next.call(null,seq__8553_8633__$1);
var G__8643 = null;
var G__8644 = 0;
var G__8645 = 0;
seq__8553_8621 = G__8642;
chunk__8554_8622 = G__8643;
count__8555_8623 = G__8644;
i__8556_8624 = G__8645;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
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
lt.plugins.gitlight.common_ui.make_refresh_tab_behavior = (function make_refresh_tab_behavior(obj,k){lt.plugins.gitlight.common_ui.__BEH__k = (function __BEH__k(this$,command,data,err){lt.objs.tabs.add_or_focus_BANG_.call(null,obj);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),data);
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
return lt.object.behavior_STAR_.call(null,k,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__k,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
});
lt.plugins.gitlight.common_ui.make_keywords = (function make_keywords(k){var kwrdstr = cljs.core.subs.call(null,[cljs.core.str(k)].join(''),1);return cljs.core.map.call(null,(function (x){return cljs.core.keyword.call(null,[cljs.core.str(kwrdstr),cljs.core.str(x)].join(''));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-out","-refresh-results","-refresh-tab-results","-output"], null));
});
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,ui_fun){var vec__8560 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__8560,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__8560,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__8560,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__8560,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__8560,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return ui_fun.call(null,this$);
});})(vec__8560,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);var tab = lt.object.create.call(null,tab_obj);var command_output = lt.plugins.gitlight.common_ui.make_refresh_tab_behavior.call(null,tab,refresh_tab_kwd);return lt.object.create.call(null,lt.object.object_STAR_.call(null,command_output_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gitlight-tab-output","gitlight-tab-output",1332604564),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_output], null)));
});
lt.plugins.gitlight.common_ui.make_button = (function make_button(n,f,fun){return lt.plugins.gitlight.common_ui.button.call(null,n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.make_classy_button = (function make_classy_button(n,f,fun){return lt.plugins.gitlight.common_ui.classy_button.call(null,[cljs.core.str(n)].join(''),n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8646 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8646))
{var ts_8647 = temp__4092__auto___8646;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8647))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8647);
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
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.libs.now = (function now(){return (new Date()).toString();
});
lt.plugins.gitlight.libs.qu = (function qu(s){return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
lt.plugins.gitlight.libs.sanitize = (function sanitize(s){return clojure.string.escape.call(null,s,new cljs.core.PersistentArrayMap(null, 4, ["$","\\$","`","\\`","\\","\\\\","\"","\\\""], null));
});
lt.plugins.gitlight.libs.q_AMPERSAND_s = (function q_AMPERSAND_s(s){return lt.plugins.gitlight.libs.qu.call(null,lt.plugins.gitlight.libs.sanitize.call(null,s));
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
lt.plugins.gitlight.execute.run = (function run(return_obj,path,command,input){var child_proc = lt.plugins.gitlight.execute.exec.call(null,command,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",path], null)),(function (err,stdout,stderr){if(cljs.core.truth_(err))
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword(null,"err","err",1014004951),command,err,stderr);
} else
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword(null,"out","out",1014014656),command,stdout,stderr);
}
}));var proc_input = child_proc.stdin;return proc_input.end(input);
});
lt.plugins.gitlight.execute.run_deaf = (function run_deaf(return_obj,path,command){return lt.plugins.gitlight.execute.run.call(null,return_obj,path,command,"");
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.history')) {
goog.provide('lt.plugins.gitlight.history');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight.libs');
goog.require('lt.plugins.gitlight');
lt.plugins.gitlight.history.row = (function row(p__13978){var vec__13987 = p__13978;var cls = cljs.core.nth.call(null,vec__13987,0,null);var vec__13988 = cljs.core.nth.call(null,vec__13987,1,null);var date = cljs.core.nth.call(null,vec__13988,0,null);var command = cljs.core.nth.call(null,vec__13988,1,null);var out = cljs.core.nth.call(null,vec__13988,2,null);var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),command], null),cljs.core.println.call(null,out),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),out], null)], null)], null));var seq__13989_14009 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__13990_14010 = null;var count__13991_14011 = 0;var i__13992_14012 = 0;while(true){
if((i__13992_14012 < count__13991_14011))
{var vec__13993_14013 = cljs.core._nth.call(null,chunk__13990_14010,i__13992_14012);var ev__8184__auto___14014 = cljs.core.nth.call(null,vec__13993_14013,0,null);var func__8185__auto___14015 = cljs.core.nth.call(null,vec__13993_14013,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___14014,func__8185__auto___14015);
{
var G__14016 = seq__13989_14009;
var G__14017 = chunk__13990_14010;
var G__14018 = count__13991_14011;
var G__14019 = (i__13992_14012 + 1);
seq__13989_14009 = G__14016;
chunk__13990_14010 = G__14017;
count__13991_14011 = G__14018;
i__13992_14012 = G__14019;
continue;
}
} else
{var temp__4092__auto___14020 = cljs.core.seq.call(null,seq__13989_14009);if(temp__4092__auto___14020)
{var seq__13989_14021__$1 = temp__4092__auto___14020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13989_14021__$1))
{var c__7561__auto___14022 = cljs.core.chunk_first.call(null,seq__13989_14021__$1);{
var G__14023 = cljs.core.chunk_rest.call(null,seq__13989_14021__$1);
var G__14024 = c__7561__auto___14022;
var G__14025 = cljs.core.count.call(null,c__7561__auto___14022);
var G__14026 = 0;
seq__13989_14009 = G__14023;
chunk__13990_14010 = G__14024;
count__13991_14011 = G__14025;
i__13992_14012 = G__14026;
continue;
}
} else
{var vec__13994_14027 = cljs.core.first.call(null,seq__13989_14021__$1);var ev__8184__auto___14028 = cljs.core.nth.call(null,vec__13994_14027,0,null);var func__8185__auto___14029 = cljs.core.nth.call(null,vec__13994_14027,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___14028,func__8185__auto___14029);
{
var G__14030 = cljs.core.next.call(null,seq__13989_14021__$1);
var G__14031 = null;
var G__14032 = 0;
var G__14033 = 0;
seq__13989_14009 = G__14030;
chunk__13990_14010 = G__14031;
count__13991_14011 = G__14032;
i__13992_14012 = G__14033;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.history.ui_fun = (function ui_fun(this$){var e__8183__auto__ = crate.core.html.call(null,(function (){var history = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var reversed = cljs.core.reverse.call(null,cljs.core.deref.call(null,history));var last_ok = cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (history,reversed){
return (function (p1__13995_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),cljs.core.first.call(null,p1__13995_SHARP_));
});})(history,reversed))
,reversed));var last_fail = cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (history,reversed,last_ok){
return (function (p1__13996_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"success","success",3441701749),cljs.core.first.call(null,p1__13996_SHARP_));
});})(history,reversed,last_ok))
,reversed));return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history","div.history",3508882345),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),"last ok: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.last-ok","table.last-ok",1867294149),lt.plugins.gitlight.history.row.call(null,last_ok)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),"last failed: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.last-fail","table.last-fail",782576967),lt.plugins.gitlight.history.row.call(null,last_fail)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),"history: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.history","table.history",2841343462),cljs.core.map.call(null,lt.plugins.gitlight.history.row,reversed)], null)], null);
})());var seq__14003_14034 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__14004_14035 = null;var count__14005_14036 = 0;var i__14006_14037 = 0;while(true){
if((i__14006_14037 < count__14005_14036))
{var vec__14007_14038 = cljs.core._nth.call(null,chunk__14004_14035,i__14006_14037);var ev__8184__auto___14039 = cljs.core.nth.call(null,vec__14007_14038,0,null);var func__8185__auto___14040 = cljs.core.nth.call(null,vec__14007_14038,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___14039,func__8185__auto___14040);
{
var G__14041 = seq__14003_14034;
var G__14042 = chunk__14004_14035;
var G__14043 = count__14005_14036;
var G__14044 = (i__14006_14037 + 1);
seq__14003_14034 = G__14041;
chunk__14004_14035 = G__14042;
count__14005_14036 = G__14043;
i__14006_14037 = G__14044;
continue;
}
} else
{var temp__4092__auto___14045 = cljs.core.seq.call(null,seq__14003_14034);if(temp__4092__auto___14045)
{var seq__14003_14046__$1 = temp__4092__auto___14045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14003_14046__$1))
{var c__7561__auto___14047 = cljs.core.chunk_first.call(null,seq__14003_14046__$1);{
var G__14048 = cljs.core.chunk_rest.call(null,seq__14003_14046__$1);
var G__14049 = c__7561__auto___14047;
var G__14050 = cljs.core.count.call(null,c__7561__auto___14047);
var G__14051 = 0;
seq__14003_14034 = G__14048;
chunk__14004_14035 = G__14049;
count__14005_14036 = G__14050;
i__14006_14037 = G__14051;
continue;
}
} else
{var vec__14008_14052 = cljs.core.first.call(null,seq__14003_14046__$1);var ev__8184__auto___14053 = cljs.core.nth.call(null,vec__14008_14052,0,null);var func__8185__auto___14054 = cljs.core.nth.call(null,vec__14008_14052,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___14053,func__8185__auto___14054);
{
var G__14055 = cljs.core.next.call(null,seq__14003_14046__$1);
var G__14056 = null;
var G__14057 = 0;
var G__14058 = 0;
seq__14003_14034 = G__14055;
chunk__14004_14035 = G__14056;
count__14005_14036 = G__14057;
i__14006_14037 = G__14058;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.history.refresh = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,new cljs.core.Keyword("lt.plugins.gitlight.history","history-refresh","lt.plugins.gitlight.history/history-refresh",2164998053),lt.plugins.gitlight.history.ui_fun);
lt.plugins.gitlight.history.tab_obj = lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.history","history-tab","lt.plugins.gitlight.history/history-tab",571578219),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-tab","history-tab",1364763214)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Git command history",new cljs.core.Keyword(null,"history","history",1940838406),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),lt.plugins.gitlight.history.refresh], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.history.ui_fun.call(null,this$);
}));
lt.plugins.gitlight.history.history_tab = lt.object.create.call(null,lt.plugins.gitlight.history.tab_obj);
lt.plugins.gitlight.history.history = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.history.history_tab));
lt.plugins.gitlight.history.__BEH__history_out_success = (function __BEH__history_out_success(obj,command,data,err){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.history.history,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success","success",3441701749),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.libs.now.call(null),command,data.toString()], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.history","history-out-success","lt.plugins.gitlight.history/history-out-success",3203541310),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.history.__BEH__history_out_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Log command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.gitlight.history.__BEH__history_out_error = (function __BEH__history_out_error(obj,command,err,stderr){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.history.history,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.libs.now.call(null),command,stderr.toString()], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.history","history-out-error","lt.plugins.gitlight.history/history-out-error",4273094007),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.history.__BEH__history_out_error,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Log command error output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.history","git-history","lt.plugins.gitlight.history/git-history",1919033520),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: command history",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){cljs.core.println.call(null,cljs.core.deref.call(null,lt.plugins.gitlight.history.history));
lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.gitlight.history.history_tab);
return lt.object.raise.call(null,lt.plugins.gitlight.history.history_tab,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
})], null));
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
/**
* @param {...*} var_args
*/
lt.plugins.gitlight.git.git_command_cwd = (function() { 
var git_command_cwd__delegate = function (obj,cwd,args){var git_path = new cljs.core.Keyword(null,"git-binary","git-binary",1640221134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config));var command = [cljs.core.str(lt.plugins.gitlight.libs.qu.call(null,git_path)),cljs.core.str(" "),cljs.core.str(clojure.string.join.call(null," ",args))].join('');return lt.plugins.gitlight.execute.run_deaf.call(null,obj,cwd,command);
};
var git_command_cwd = function (obj,cwd,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return git_command_cwd__delegate.call(this,obj,cwd,args);};
git_command_cwd.cljs$lang$maxFixedArity = 2;
git_command_cwd.cljs$lang$applyTo = (function (arglist__10058){
var obj = cljs.core.first(arglist__10058);
arglist__10058 = cljs.core.next(arglist__10058);
var cwd = cljs.core.first(arglist__10058);
var args = cljs.core.rest(arglist__10058);
return git_command_cwd__delegate(obj,cwd,args);
});
git_command_cwd.cljs$core$IFn$_invoke$arity$variadic = git_command_cwd__delegate;
return git_command_cwd;
})()
;
/**
* @param {...*} var_args
*/
lt.plugins.gitlight.git.git_command = (function() { 
var git_command__delegate = function (obj,args){var cwd = lt.plugins.gitlight.git.get_git_root.call(null);return cljs.core.apply.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.git.git_command_cwd,obj,cwd),args);
};
var git_command = function (obj,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return git_command__delegate.call(this,obj,args);};
git_command.cljs$lang$maxFixedArity = 1;
git_command.cljs$lang$applyTo = (function (arglist__10059){
var obj = cljs.core.first(arglist__10059);
var args = cljs.core.rest(arglist__10059);
return git_command__delegate(obj,args);
});
git_command.cljs$core$IFn$_invoke$arity$variadic = git_command__delegate;
return git_command;
})()
;
/**
* @param {...*} var_args
*/
lt.plugins.gitlight.git.git_command_ignore_out = (function() { 
var git_command_ignore_out__delegate = function (args){return cljs.core.apply.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.git.git_command,lt.plugins.gitlight.git.git_ignore_out),args);
};
var git_command_ignore_out = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return git_command_ignore_out__delegate.call(this,args);};
git_command_ignore_out.cljs$lang$maxFixedArity = 0;
git_command_ignore_out.cljs$lang$applyTo = (function (arglist__10060){
var args = cljs.core.seq(arglist__10060);
return git_command_ignore_out__delegate(args);
});
git_command_ignore_out.cljs$core$IFn$_invoke$arity$variadic = git_command_ignore_out__delegate;
return git_command_ignore_out;
})()
;
lt.plugins.gitlight.git.git_add = (function git_add(filename){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"add","--",filename);
});
lt.plugins.gitlight.git.git_reset = (function git_reset(filename){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"reset","--",filename);
});
lt.plugins.gitlight.git.git_checkout_file = (function git_checkout_file(filename){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"checkout","--",filename);
});
lt.plugins.gitlight.git.git_commit = (function git_commit(){return lt.plugins.gitlight.common_ui.input_popup.call(null,"commit message?","commit",lt.plugins.gitlight.git.git_cmd_commit);
});
lt.plugins.gitlight.git.git_cmd_commit = (function git_cmd_commit(msg){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"commit","-m",lt.plugins.gitlight.libs.q_AMPERSAND_s.call(null,msg));
});
lt.plugins.gitlight.git.git_form_commit = (function git_form_commit(title,body){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"commit","-m",lt.plugins.gitlight.libs.q_AMPERSAND_s.call(null,title),"-m",lt.plugins.gitlight.libs.q_AMPERSAND_s.call(null,body));
});
lt.plugins.gitlight.git.__BEH__ignore__DOT__out_success = (function __BEH__ignore__DOT__out_success(obj,command,data,err){return lt.objs.notifos.set_msg_BANG_.call(null,"git: success!");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-success","lt.plugins.gitlight.git/ignore.out-success",2272362317),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
lt.plugins.gitlight.git.__BEH__ignore__DOT__out_error = (function __BEH__ignore__DOT__out_error(obj,command,err,stderr){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("git failed!: "),cljs.core.str(stderr.toString())].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-error","lt.plugins.gitlight.git/ignore.out-error",2426640522),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out_error,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-add","lt.plugins.gitlight.git/git-add",3411206675),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: add this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_add.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-reset","lt.plugins.gitlight.git/git-reset",1466075745),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: reset this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_reset.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-checkout","lt.plugins.gitlight.git/git-checkout",2494382294),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: checkout this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_checkout.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-commit","lt.plugins.gitlight.git/git-commit",3023680103),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: commit",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.git.git_commit], null));
lt.plugins.gitlight.git.git_ignore_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","git-ignore-out","lt.plugins.gitlight.git/git-ignore-out",1518510219),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-ignore-out","git-ignore-out",3448111392)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-success","lt.plugins.gitlight.git/ignore.out-success",2272362317),new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-error","lt.plugins.gitlight.git/ignore.out-error",2426640522)], null)));
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","gutter-settings","lt.plugins.gitlight.gutter/gutter-settings",3270956924),new cljs.core.Keyword(null,"width","width",1127031096),50);
lt.plugins.gitlight.gutter.gutter_settings = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","gutter-settings","lt.plugins.gitlight.gutter/gutter-settings",3270956924));
lt.plugins.gitlight.gutter.make_gutter_marker = (function make_gutter_marker(this$,on_click,content){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gutter-content","div.gutter-content",4072529974),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: "),cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.gutter.gutter_settings))),cljs.core.str("px; "),cljs.core.str("white-space: nowrap; "),cljs.core.str("overflow: hidden;")].join('')], null),content], null));var seq__10067_10074 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return on_click.call(null,content);
})], null)));var chunk__10068_10075 = null;var count__10069_10076 = 0;var i__10070_10077 = 0;while(true){
if((i__10070_10077 < count__10069_10076))
{var vec__10071_10078 = cljs.core._nth.call(null,chunk__10068_10075,i__10070_10077);var ev__8184__auto___10079 = cljs.core.nth.call(null,vec__10071_10078,0,null);var func__8185__auto___10080 = cljs.core.nth.call(null,vec__10071_10078,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10079,func__8185__auto___10080);
{
var G__10081 = seq__10067_10074;
var G__10082 = chunk__10068_10075;
var G__10083 = count__10069_10076;
var G__10084 = (i__10070_10077 + 1);
seq__10067_10074 = G__10081;
chunk__10068_10075 = G__10082;
count__10069_10076 = G__10083;
i__10070_10077 = G__10084;
continue;
}
} else
{var temp__4092__auto___10085 = cljs.core.seq.call(null,seq__10067_10074);if(temp__4092__auto___10085)
{var seq__10067_10086__$1 = temp__4092__auto___10085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10067_10086__$1))
{var c__7561__auto___10087 = cljs.core.chunk_first.call(null,seq__10067_10086__$1);{
var G__10088 = cljs.core.chunk_rest.call(null,seq__10067_10086__$1);
var G__10089 = c__7561__auto___10087;
var G__10090 = cljs.core.count.call(null,c__7561__auto___10087);
var G__10091 = 0;
seq__10067_10074 = G__10088;
chunk__10068_10075 = G__10089;
count__10069_10076 = G__10090;
i__10070_10077 = G__10091;
continue;
}
} else
{var vec__10072_10092 = cljs.core.first.call(null,seq__10067_10086__$1);var ev__8184__auto___10093 = cljs.core.nth.call(null,vec__10072_10092,0,null);var func__8185__auto___10094 = cljs.core.nth.call(null,vec__10072_10092,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10093,func__8185__auto___10094);
{
var G__10095 = cljs.core.next.call(null,seq__10067_10086__$1);
var G__10096 = null;
var G__10097 = 0;
var G__10098 = 0;
seq__10067_10074 = G__10095;
chunk__10068_10075 = G__10096;
count__10069_10076 = G__10097;
i__10070_10077 = G__10098;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.gutter.show_gutter_data = (function show_gutter_data(this$,data){var current_gutters = cljs.core.set.call(null,cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters")));var gutter_div = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.CodeMirror-gutters","div.CodeMirror-gutters",1932435974),lt.object.__GT_content.call(null,this$));var gutter_markers = cljs.core.map.call(null,((function (current_gutters,gutter_div){
return (function (p1__10073_SHARP_){return lt.plugins.gitlight.gutter.make_gutter_marker.call(null,this$,cljs.core.println,p1__10073_SHARP_);
});})(current_gutters,gutter_div))
,data);var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);return lt.objs.editor.operation.call(null,this$,(function (){lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"gitlight-gutter"))], null));
lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.gitlight-gutter","div.gitlight-gutter",3002550937),gutter_div),new cljs.core.PersistentArrayMap(null, 1, ["width",[cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.gutter.gutter_settings))),cljs.core.str("px")].join('')], null));
cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (idx,gutter_marker){return ed.setGutterMarker(idx,"gitlight-gutter",gutter_marker);
}),gutter_markers));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
}));
});
lt.plugins.gitlight.gutter.remove_gutters = (function remove_gutters(this$){lt.objs.editor.__GT_cm_ed.call(null,this$).clearGutter("gitlight-gutter");
lt.util.dom.remove.call(null,new cljs.core.Keyword(null,"div.gitlight-gutter","div.gitlight-gutter",3002550937),lt.object.__GT_content.call(null,this$));
var gutter_10099 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["gitlight-gutter",null], null), null),gutter_10099))], null));
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
lt.plugins.gitlight.diff.git_diff_update_fun = (function git_diff_update_fun(){return lt.plugins.gitlight.diff.git_diff_cached.call(null,cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached),cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename));
});
lt.plugins.gitlight.diff.make_context = (function make_context(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context","div.context",3533479108),lt.plugins.gitlight.common_ui.make_button.call(null,"-","-",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.dec);
}),lt.plugins.gitlight.diff.git_diff_update_fun)),[cljs.core.str("context: "),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join(''),lt.plugins.gitlight.common_ui.make_button.call(null,"+","+",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.inc);
}),lt.plugins.gitlight.diff.git_diff_update_fun))], null);
});
lt.plugins.gitlight.diff.make_more_context = (function make_more_context(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.more-context","div.more-context",3304815846),lt.plugins.gitlight.common_ui.make_button.call(null,"whole file","whole file",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,100000);
}),lt.plugins.gitlight.diff.git_diff_update_fun)),lt.plugins.gitlight.common_ui.make_button.call(null,"reset","reset",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,3);
}),lt.plugins.gitlight.diff.git_diff_update_fun))], null);
});
lt.plugins.gitlight.diff.cached_toggle_button = (function cached_toggle_button(){var cached_txt = (cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached))?"unstaged changes":"staged changes");return lt.plugins.gitlight.common_ui.make_button.call(null,cached_txt,cached_txt,(function (){cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.last_cached,cljs.core.not);
return lt.plugins.gitlight.diff.git_diff_update_fun.call(null);
}));
});
lt.plugins.gitlight.diff.commit_input = (function commit_input(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title","input.title",3943357094),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"size","size",1017434995),81,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit title"], null)], null));var seq__8667_9919 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8668_9920 = null;var count__8669_9921 = 0;var i__8670_9922 = 0;while(true){
if((i__8670_9922 < count__8669_9921))
{var vec__8671_9923 = cljs.core._nth.call(null,chunk__8668_9920,i__8670_9922);var ev__8184__auto___9924 = cljs.core.nth.call(null,vec__8671_9923,0,null);var func__8185__auto___9925 = cljs.core.nth.call(null,vec__8671_9923,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9924,func__8185__auto___9925);
{
var G__9926 = seq__8667_9919;
var G__9927 = chunk__8668_9920;
var G__9928 = count__8669_9921;
var G__9929 = (i__8670_9922 + 1);
seq__8667_9919 = G__9926;
chunk__8668_9920 = G__9927;
count__8669_9921 = G__9928;
i__8670_9922 = G__9929;
continue;
}
} else
{var temp__4092__auto___9930 = cljs.core.seq.call(null,seq__8667_9919);if(temp__4092__auto___9930)
{var seq__8667_9931__$1 = temp__4092__auto___9930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8667_9931__$1))
{var c__7561__auto___9932 = cljs.core.chunk_first.call(null,seq__8667_9931__$1);{
var G__9933 = cljs.core.chunk_rest.call(null,seq__8667_9931__$1);
var G__9934 = c__7561__auto___9932;
var G__9935 = cljs.core.count.call(null,c__7561__auto___9932);
var G__9936 = 0;
seq__8667_9919 = G__9933;
chunk__8668_9920 = G__9934;
count__8669_9921 = G__9935;
i__8670_9922 = G__9936;
continue;
}
} else
{var vec__8672_9937 = cljs.core.first.call(null,seq__8667_9931__$1);var ev__8184__auto___9938 = cljs.core.nth.call(null,vec__8672_9937,0,null);var func__8185__auto___9939 = cljs.core.nth.call(null,vec__8672_9937,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9938,func__8185__auto___9939);
{
var G__9940 = cljs.core.next.call(null,seq__8667_9931__$1);
var G__9941 = null;
var G__9942 = 0;
var G__9943 = 0;
seq__8667_9919 = G__9940;
chunk__8668_9920 = G__9941;
count__8669_9921 = G__9942;
i__8670_9922 = G__9943;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.diff.commit_body = (function commit_body(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.body","textarea.body",3433374536),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit body",new cljs.core.Keyword(null,"cols","cols",1016963685),81,new cljs.core.Keyword(null,"rows","rows",1017410891),10], null)], null));var seq__8679_9944 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8680_9945 = null;var count__8681_9946 = 0;var i__8682_9947 = 0;while(true){
if((i__8682_9947 < count__8681_9946))
{var vec__8683_9948 = cljs.core._nth.call(null,chunk__8680_9945,i__8682_9947);var ev__8184__auto___9949 = cljs.core.nth.call(null,vec__8683_9948,0,null);var func__8185__auto___9950 = cljs.core.nth.call(null,vec__8683_9948,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9949,func__8185__auto___9950);
{
var G__9951 = seq__8679_9944;
var G__9952 = chunk__8680_9945;
var G__9953 = count__8681_9946;
var G__9954 = (i__8682_9947 + 1);
seq__8679_9944 = G__9951;
chunk__8680_9945 = G__9952;
count__8681_9946 = G__9953;
i__8682_9947 = G__9954;
continue;
}
} else
{var temp__4092__auto___9955 = cljs.core.seq.call(null,seq__8679_9944);if(temp__4092__auto___9955)
{var seq__8679_9956__$1 = temp__4092__auto___9955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8679_9956__$1))
{var c__7561__auto___9957 = cljs.core.chunk_first.call(null,seq__8679_9956__$1);{
var G__9958 = cljs.core.chunk_rest.call(null,seq__8679_9956__$1);
var G__9959 = c__7561__auto___9957;
var G__9960 = cljs.core.count.call(null,c__7561__auto___9957);
var G__9961 = 0;
seq__8679_9944 = G__9958;
chunk__8680_9945 = G__9959;
count__8681_9946 = G__9960;
i__8682_9947 = G__9961;
continue;
}
} else
{var vec__8684_9962 = cljs.core.first.call(null,seq__8679_9956__$1);var ev__8184__auto___9963 = cljs.core.nth.call(null,vec__8684_9962,0,null);var func__8185__auto___9964 = cljs.core.nth.call(null,vec__8684_9962,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9963,func__8185__auto___9964);
{
var G__9965 = cljs.core.next.call(null,seq__8679_9956__$1);
var G__9966 = null;
var G__9967 = 0;
var G__9968 = 0;
seq__8679_9944 = G__9965;
chunk__8680_9945 = G__9966;
count__8681_9946 = G__9967;
i__8682_9947 = G__9968;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.diff.make_commit_form = (function make_commit_form(){var title = lt.plugins.gitlight.diff.commit_input.call(null);var body = lt.plugins.gitlight.diff.commit_body.call(null);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.commit-form","div.commit-form",2747534639),title,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.common_ui.make_button.call(null,"submit","submit",(function (x,y){lt.plugins.gitlight.git.git_form_commit.call(null,lt.util.dom.val.call(null,title),lt.util.dom.val.call(null,body));
return lt.plugins.gitlight.diff.git_diff_update_fun.call(null);
}))], null);
});
lt.plugins.gitlight.diff.diff_panel = (function diff_panel(this$){var e__8183__auto__ = crate.core.html.call(null,(function (){var output = new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-diff","div.gitlight-diff",3415869571),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"diff: ",((cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename)))?"whole repo":cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename))], null),lt.plugins.gitlight.diff.make_context.call(null),lt.plugins.gitlight.diff.make_more_context.call(null),lt.plugins.gitlight.diff.cached_toggle_button.call(null),(cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached))?lt.plugins.gitlight.diff.make_commit_form.call(null):null),(function (){var iter__7530__auto__ = ((function (output){
return (function iter__9287(s__9288){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__9288__$1 = s__9288;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9288__$1);if(temp__4092__auto__)
{var s__9288__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9288__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9288__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9290 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9289 = 0;while(true){
if((i__9289 < size__7529__auto__))
{var file = cljs.core._nth.call(null,c__7528__auto__,i__9289);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);cljs.core.chunk_append.call(null,b__9290,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9289,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function iter__9587(s__9588){return (new cljs.core.LazySeq(null,((function (i__9289,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9588__$1 = s__9588;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9588__$1);if(temp__4092__auto____$1)
{var s__9588__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9588__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9588__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9590 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9589 = 0;while(true){
if((i__9589 < size__7529__auto____$1))
{var changes_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9589);cljs.core.chunk_append.call(null,b__9590,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9589,i__9289,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function iter__9663(s__9664){return (new cljs.core.LazySeq(null,((function (i__9589,i__9289,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9664__$1 = s__9664;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9664__$1);if(temp__4092__auto____$2)
{var s__9664__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9664__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9664__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9666 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9665 = 0;while(true){
if((i__9665 < size__7529__auto____$2))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$2,i__9665);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9666,(function (){var iter__7530__auto__ = ((function (i__9665,i__9589,i__9289,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9666,s__9664__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function iter__9683(s__9684){return (new cljs.core.LazySeq(null,((function (i__9665,i__9589,i__9289,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9666,s__9664__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9684__$1 = s__9684;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9684__$1);if(temp__4092__auto____$3)
{var s__9684__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9684__$2))
{var c__7528__auto____$3 = cljs.core.chunk_first.call(null,s__9684__$2);var size__7529__auto____$3 = cljs.core.count.call(null,c__7528__auto____$3);var b__9686 = cljs.core.chunk_buffer.call(null,size__7529__auto____$3);if((function (){var i__9685 = 0;while(true){
if((i__9685 < size__7529__auto____$3))
{var vec__9689 = cljs.core._nth.call(null,c__7528__auto____$3,i__9685);var left = cljs.core.nth.call(null,vec__9689,0,null);var right = cljs.core.nth.call(null,vec__9689,1,null);cljs.core.chunk_append.call(null,b__9686,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9969 = (i__9685 + 1);
i__9685 = G__9969;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9686),iter__9683.call(null,cljs.core.chunk_rest.call(null,s__9684__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9686),null);
}
} else
{var vec__9690 = cljs.core.first.call(null,s__9684__$2);var left = cljs.core.nth.call(null,vec__9690,0,null);var right = cljs.core.nth.call(null,vec__9690,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9683.call(null,cljs.core.rest.call(null,s__9684__$2)));
}
} else
{return null;
}
break;
}
});})(i__9665,i__9589,i__9289,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9666,s__9664__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(i__9665,i__9589,i__9289,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9666,s__9664__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__9970 = (i__9665 + 1);
i__9665 = G__9970;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9666),iter__9663.call(null,cljs.core.chunk_rest.call(null,s__9664__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9666),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9664__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9589,i__9289,columned,c,columns,line_group,s__9664__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function iter__9691(s__9692){return (new cljs.core.LazySeq(null,((function (i__9589,i__9289,columned,c,columns,line_group,s__9664__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9692__$1 = s__9692;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9692__$1);if(temp__4092__auto____$3)
{var s__9692__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9692__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9692__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9694 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9693 = 0;while(true){
if((i__9693 < size__7529__auto____$2))
{var vec__9697 = cljs.core._nth.call(null,c__7528__auto____$2,i__9693);var left = cljs.core.nth.call(null,vec__9697,0,null);var right = cljs.core.nth.call(null,vec__9697,1,null);cljs.core.chunk_append.call(null,b__9694,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9971 = (i__9693 + 1);
i__9693 = G__9971;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9694),iter__9691.call(null,cljs.core.chunk_rest.call(null,s__9692__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9694),null);
}
} else
{var vec__9698 = cljs.core.first.call(null,s__9692__$2);var left = cljs.core.nth.call(null,vec__9698,0,null);var right = cljs.core.nth.call(null,vec__9698,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9691.call(null,cljs.core.rest.call(null,s__9692__$2)));
}
} else
{return null;
}
break;
}
});})(i__9589,i__9289,columned,c,columns,line_group,s__9664__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(i__9589,i__9289,columned,c,columns,line_group,s__9664__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9663.call(null,cljs.core.rest.call(null,s__9664__$2)));
}
} else
{return null;
}
break;
}
});})(i__9589,i__9289,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(i__9589,i__9289,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9590,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__9972 = (i__9589 + 1);
i__9589 = G__9972;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9590),iter__9587.call(null,cljs.core.chunk_rest.call(null,s__9588__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9590),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9588__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9289,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function iter__9699(s__9700){return (new cljs.core.LazySeq(null,((function (i__9289,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9700__$1 = s__9700;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9700__$1);if(temp__4092__auto____$2)
{var s__9700__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9700__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9700__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9702 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9701 = 0;while(true){
if((i__9701 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9701);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9702,(function (){var iter__7530__auto__ = ((function (i__9701,i__9289,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9702,s__9700__$2,temp__4092__auto____$2,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function iter__9719(s__9720){return (new cljs.core.LazySeq(null,((function (i__9701,i__9289,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9702,s__9700__$2,temp__4092__auto____$2,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9720__$1 = s__9720;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9720__$1);if(temp__4092__auto____$3)
{var s__9720__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9720__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9720__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9722 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9721 = 0;while(true){
if((i__9721 < size__7529__auto____$2))
{var vec__9725 = cljs.core._nth.call(null,c__7528__auto____$2,i__9721);var left = cljs.core.nth.call(null,vec__9725,0,null);var right = cljs.core.nth.call(null,vec__9725,1,null);cljs.core.chunk_append.call(null,b__9722,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9973 = (i__9721 + 1);
i__9721 = G__9973;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9722),iter__9719.call(null,cljs.core.chunk_rest.call(null,s__9720__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9722),null);
}
} else
{var vec__9726 = cljs.core.first.call(null,s__9720__$2);var left = cljs.core.nth.call(null,vec__9726,0,null);var right = cljs.core.nth.call(null,vec__9726,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9719.call(null,cljs.core.rest.call(null,s__9720__$2)));
}
} else
{return null;
}
break;
}
});})(i__9701,i__9289,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9702,s__9700__$2,temp__4092__auto____$2,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(i__9701,i__9289,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9702,s__9700__$2,temp__4092__auto____$2,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__9974 = (i__9701 + 1);
i__9701 = G__9974;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9702),iter__9699.call(null,cljs.core.chunk_rest.call(null,s__9700__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9702),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9700__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9289,columned,c,columns,line_group,s__9700__$2,temp__4092__auto____$2,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function iter__9727(s__9728){return (new cljs.core.LazySeq(null,((function (i__9289,columned,c,columns,line_group,s__9700__$2,temp__4092__auto____$2,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9728__$1 = s__9728;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9728__$1);if(temp__4092__auto____$3)
{var s__9728__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9728__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9728__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9730 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9729 = 0;while(true){
if((i__9729 < size__7529__auto____$1))
{var vec__9733 = cljs.core._nth.call(null,c__7528__auto____$1,i__9729);var left = cljs.core.nth.call(null,vec__9733,0,null);var right = cljs.core.nth.call(null,vec__9733,1,null);cljs.core.chunk_append.call(null,b__9730,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9975 = (i__9729 + 1);
i__9729 = G__9975;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9730),iter__9727.call(null,cljs.core.chunk_rest.call(null,s__9728__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9730),null);
}
} else
{var vec__9734 = cljs.core.first.call(null,s__9728__$2);var left = cljs.core.nth.call(null,vec__9734,0,null);var right = cljs.core.nth.call(null,vec__9734,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9727.call(null,cljs.core.rest.call(null,s__9728__$2)));
}
} else
{return null;
}
break;
}
});})(i__9289,columned,c,columns,line_group,s__9700__$2,temp__4092__auto____$2,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(i__9289,columned,c,columns,line_group,s__9700__$2,temp__4092__auto____$2,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9699.call(null,cljs.core.rest.call(null,s__9700__$2)));
}
} else
{return null;
}
break;
}
});})(i__9289,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(i__9289,changes_group,s__9588__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9587.call(null,cljs.core.rest.call(null,s__9588__$2)));
}
} else
{return null;
}
break;
}
});})(i__9289,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(i__9289,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9290,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null));
{
var G__9976 = (i__9289 + 1);
i__9289 = G__9976;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9290),iter__9287.call(null,cljs.core.chunk_rest.call(null,s__9288__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9290),null);
}
} else
{var file = cljs.core.first.call(null,s__9288__$2);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function iter__9735(s__9736){return (new cljs.core.LazySeq(null,((function (filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9736__$1 = s__9736;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9736__$1);if(temp__4092__auto____$1)
{var s__9736__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9736__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9736__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9738 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9737 = 0;while(true){
if((i__9737 < size__7529__auto__))
{var changes_group = cljs.core._nth.call(null,c__7528__auto__,i__9737);cljs.core.chunk_append.call(null,b__9738,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9737,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function iter__9811(s__9812){return (new cljs.core.LazySeq(null,((function (i__9737,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9812__$1 = s__9812;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9812__$1);if(temp__4092__auto____$2)
{var s__9812__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9812__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9812__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9814 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9813 = 0;while(true){
if((i__9813 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9813);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9814,(function (){var iter__7530__auto__ = ((function (i__9813,i__9737,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9814,s__9812__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function iter__9831(s__9832){return (new cljs.core.LazySeq(null,((function (i__9813,i__9737,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9814,s__9812__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9832__$1 = s__9832;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9832__$1);if(temp__4092__auto____$3)
{var s__9832__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9832__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9832__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9834 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9833 = 0;while(true){
if((i__9833 < size__7529__auto____$2))
{var vec__9837 = cljs.core._nth.call(null,c__7528__auto____$2,i__9833);var left = cljs.core.nth.call(null,vec__9837,0,null);var right = cljs.core.nth.call(null,vec__9837,1,null);cljs.core.chunk_append.call(null,b__9834,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9977 = (i__9833 + 1);
i__9833 = G__9977;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9834),iter__9831.call(null,cljs.core.chunk_rest.call(null,s__9832__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9834),null);
}
} else
{var vec__9838 = cljs.core.first.call(null,s__9832__$2);var left = cljs.core.nth.call(null,vec__9838,0,null);var right = cljs.core.nth.call(null,vec__9838,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9831.call(null,cljs.core.rest.call(null,s__9832__$2)));
}
} else
{return null;
}
break;
}
});})(i__9813,i__9737,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9814,s__9812__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(i__9813,i__9737,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9814,s__9812__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__9978 = (i__9813 + 1);
i__9813 = G__9978;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9814),iter__9811.call(null,cljs.core.chunk_rest.call(null,s__9812__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9814),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9812__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9737,columned,c,columns,line_group,s__9812__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function iter__9839(s__9840){return (new cljs.core.LazySeq(null,((function (i__9737,columned,c,columns,line_group,s__9812__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9840__$1 = s__9840;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9840__$1);if(temp__4092__auto____$3)
{var s__9840__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9840__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9840__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9842 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9841 = 0;while(true){
if((i__9841 < size__7529__auto____$1))
{var vec__9845 = cljs.core._nth.call(null,c__7528__auto____$1,i__9841);var left = cljs.core.nth.call(null,vec__9845,0,null);var right = cljs.core.nth.call(null,vec__9845,1,null);cljs.core.chunk_append.call(null,b__9842,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9979 = (i__9841 + 1);
i__9841 = G__9979;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9842),iter__9839.call(null,cljs.core.chunk_rest.call(null,s__9840__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9842),null);
}
} else
{var vec__9846 = cljs.core.first.call(null,s__9840__$2);var left = cljs.core.nth.call(null,vec__9846,0,null);var right = cljs.core.nth.call(null,vec__9846,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9839.call(null,cljs.core.rest.call(null,s__9840__$2)));
}
} else
{return null;
}
break;
}
});})(i__9737,columned,c,columns,line_group,s__9812__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(i__9737,columned,c,columns,line_group,s__9812__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9811.call(null,cljs.core.rest.call(null,s__9812__$2)));
}
} else
{return null;
}
break;
}
});})(i__9737,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(i__9737,changes_group,c__7528__auto__,size__7529__auto__,b__9738,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__9980 = (i__9737 + 1);
i__9737 = G__9980;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9738),iter__9735.call(null,cljs.core.chunk_rest.call(null,s__9736__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9738),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9736__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function iter__9847(s__9848){return (new cljs.core.LazySeq(null,((function (changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9848__$1 = s__9848;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9848__$1);if(temp__4092__auto____$2)
{var s__9848__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9848__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9848__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9850 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9849 = 0;while(true){
if((i__9849 < size__7529__auto__))
{var line_group = cljs.core._nth.call(null,c__7528__auto__,i__9849);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9850,(function (){var iter__7530__auto__ = ((function (i__9849,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9850,s__9848__$2,temp__4092__auto____$2,changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function iter__9867(s__9868){return (new cljs.core.LazySeq(null,((function (i__9849,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9850,s__9848__$2,temp__4092__auto____$2,changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9868__$1 = s__9868;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9868__$1);if(temp__4092__auto____$3)
{var s__9868__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9868__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9868__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9870 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9869 = 0;while(true){
if((i__9869 < size__7529__auto____$1))
{var vec__9873 = cljs.core._nth.call(null,c__7528__auto____$1,i__9869);var left = cljs.core.nth.call(null,vec__9873,0,null);var right = cljs.core.nth.call(null,vec__9873,1,null);cljs.core.chunk_append.call(null,b__9870,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9981 = (i__9869 + 1);
i__9869 = G__9981;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9870),iter__9867.call(null,cljs.core.chunk_rest.call(null,s__9868__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9870),null);
}
} else
{var vec__9874 = cljs.core.first.call(null,s__9868__$2);var left = cljs.core.nth.call(null,vec__9874,0,null);var right = cljs.core.nth.call(null,vec__9874,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9867.call(null,cljs.core.rest.call(null,s__9868__$2)));
}
} else
{return null;
}
break;
}
});})(i__9849,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9850,s__9848__$2,temp__4092__auto____$2,changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(i__9849,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9850,s__9848__$2,temp__4092__auto____$2,changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__9982 = (i__9849 + 1);
i__9849 = G__9982;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9850),iter__9847.call(null,cljs.core.chunk_rest.call(null,s__9848__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9850),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9848__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (columned,c,columns,line_group,s__9848__$2,temp__4092__auto____$2,changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function iter__9875(s__9876){return (new cljs.core.LazySeq(null,((function (columned,c,columns,line_group,s__9848__$2,temp__4092__auto____$2,changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output){
return (function (){var s__9876__$1 = s__9876;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9876__$1);if(temp__4092__auto____$3)
{var s__9876__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9876__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9876__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9878 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9877 = 0;while(true){
if((i__9877 < size__7529__auto__))
{var vec__9881 = cljs.core._nth.call(null,c__7528__auto__,i__9877);var left = cljs.core.nth.call(null,vec__9881,0,null);var right = cljs.core.nth.call(null,vec__9881,1,null);cljs.core.chunk_append.call(null,b__9878,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9983 = (i__9877 + 1);
i__9877 = G__9983;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9878),iter__9875.call(null,cljs.core.chunk_rest.call(null,s__9876__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9878),null);
}
} else
{var vec__9882 = cljs.core.first.call(null,s__9876__$2);var left = cljs.core.nth.call(null,vec__9882,0,null);var right = cljs.core.nth.call(null,vec__9882,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9875.call(null,cljs.core.rest.call(null,s__9876__$2)));
}
} else
{return null;
}
break;
}
});})(columned,c,columns,line_group,s__9848__$2,temp__4092__auto____$2,changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(columned,c,columns,line_group,s__9848__$2,temp__4092__auto____$2,changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9847.call(null,cljs.core.rest.call(null,s__9848__$2)));
}
} else
{return null;
}
break;
}
});})(changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(changes_group,s__9736__$2,temp__4092__auto____$1,filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9735.call(null,cljs.core.rest.call(null,s__9736__$2)));
}
} else
{return null;
}
break;
}
});})(filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
,null,null));
});})(filename,file_diff,file,s__9288__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null),iter__9287.call(null,cljs.core.rest.call(null,s__9288__$2)));
}
} else
{return null;
}
break;
}
});})(output))
,null,null));
});})(output))
;return iter__7530__auto__.call(null,lt.plugins.gitlight.diff.parse_git_diff.call(null,cljs.core.deref.call(null,output)));
})()], null);
})());var seq__9883_9984 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9884_9985 = null;var count__9885_9986 = 0;var i__9886_9987 = 0;while(true){
if((i__9886_9987 < count__9885_9986))
{var vec__9887_9988 = cljs.core._nth.call(null,chunk__9884_9985,i__9886_9987);var ev__8184__auto___9989 = cljs.core.nth.call(null,vec__9887_9988,0,null);var func__8185__auto___9990 = cljs.core.nth.call(null,vec__9887_9988,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9989,func__8185__auto___9990);
{
var G__9991 = seq__9883_9984;
var G__9992 = chunk__9884_9985;
var G__9993 = count__9885_9986;
var G__9994 = (i__9886_9987 + 1);
seq__9883_9984 = G__9991;
chunk__9884_9985 = G__9992;
count__9885_9986 = G__9993;
i__9886_9987 = G__9994;
continue;
}
} else
{var temp__4092__auto___9995 = cljs.core.seq.call(null,seq__9883_9984);if(temp__4092__auto___9995)
{var seq__9883_9996__$1 = temp__4092__auto___9995;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9883_9996__$1))
{var c__7561__auto___9997 = cljs.core.chunk_first.call(null,seq__9883_9996__$1);{
var G__9998 = cljs.core.chunk_rest.call(null,seq__9883_9996__$1);
var G__9999 = c__7561__auto___9997;
var G__10000 = cljs.core.count.call(null,c__7561__auto___9997);
var G__10001 = 0;
seq__9883_9984 = G__9998;
chunk__9884_9985 = G__9999;
count__9885_9986 = G__10000;
i__9886_9987 = G__10001;
continue;
}
} else
{var vec__9888_10002 = cljs.core.first.call(null,seq__9883_9996__$1);var ev__8184__auto___10003 = cljs.core.nth.call(null,vec__9888_10002,0,null);var func__8185__auto___10004 = cljs.core.nth.call(null,vec__9888_10002,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10003,func__8185__auto___10004);
{
var G__10005 = cljs.core.next.call(null,seq__9883_9996__$1);
var G__10006 = null;
var G__10007 = 0;
var G__10008 = 0;
seq__9883_9984 = G__10005;
chunk__9884_9985 = G__10006;
count__9885_9986 = G__10007;
i__9886_9987 = G__10008;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.diff.breaker = (function breaker(left,right){var m = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,left),cljs.core.first.call(null,right)], null);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,m)))
{return cljs.core.cons.call(null,m,breaker.call(null,cljs.core.rest.call(null,left),cljs.core.rest.call(null,right)));
} else
{return null;
}
});
lt.plugins.gitlight.diff.separate = (function separate(fun,coll){return cljs.core.reduce.call(null,(function (p__9891,line){var vec__9892 = p__9891;var left = cljs.core.nth.call(null,vec__9892,0,null);var right = cljs.core.nth.call(null,vec__9892,1,null);if(cljs.core.truth_(fun.call(null,line)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,left,line),right], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,cljs.core.conj.call(null,right,line)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),coll);
});
lt.plugins.gitlight.diff.columner = (function columner(lines){if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"context",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,lines,lines)], null);
} else
{var vec__9895 = lt.plugins.gitlight.diff.separate.call(null,(function (p1__9893_SHARP_){return cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p1__9893_SHARP_));
}),lines);var left = cljs.core.nth.call(null,vec__9895,0,null);var right = cljs.core.nth.call(null,vec__9895,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"changed",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,left,right)], null);
}
});
lt.plugins.gitlight.diff.split_into_headered_groups = (function split_into_headered_groups(lines,fun,result_fun,headkey,contkey){if(!(cljs.core.empty_QMARK_.call(null,lines)))
{var fst = cljs.core.first.call(null,lines);var vec__9897 = cljs.core.split_with.call(null,fun,cljs.core.rest.call(null,lines));var content = cljs.core.nth.call(null,vec__9897,0,null);var leftovers = cljs.core.nth.call(null,vec__9897,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([headkey,fst,contkey,result_fun.call(null,content)], true, false),split_into_headered_groups.call(null,leftovers,fun,result_fun,headkey,contkey));
} else
{return null;
}
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,x));
}),(function (x){return cljs.core.partition_by.call(null,(function (p1__9898_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__9898_SHARP_));
}),x);
}),new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.Keyword(null,"content","content",1965434859));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(data){var vec__9900 = cljs.core.take.call(null,3,data);var header = cljs.core.nth.call(null,vec__9900,0,null);var left = cljs.core.nth.call(null,vec__9900,1,null);var right = cljs.core.nth.call(null,vec__9900,2,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,cljs.core.drop.call(null,3,data));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),header,new cljs.core.Keyword(null,"left","left",1017222009),left,new cljs.core.Keyword(null,"right","right",1122416014),right,new cljs.core.Keyword(null,"groups","groups",4071411014),groups], null);
});
lt.plugins.gitlight.diff.split_into_files = (function split_into_files(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return (cljs.core.re_matches.call(null,/diff --git .*/,x) == null);
}),lt.plugins.gitlight.diff.parse_single_git_diff,new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"file-diff","file-diff",3945937192));
});
lt.plugins.gitlight.diff.parse_git_diff = (function parse_git_diff(raw_data){return lt.plugins.gitlight.diff.split_into_files.call(null,clojure.string.split_lines.call(null,raw_data.toString()));
});
lt.plugins.gitlight.diff.git_diff_output = lt.plugins.gitlight.common_ui.make_output_tab_object.call(null,"Git diff",new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-diff","lt.plugins.gitlight.diff/gitlight-diff",1144555959),lt.plugins.gitlight.diff.diff_panel);
lt.plugins.gitlight.diff.git_diff_cached = (function git_diff_cached(cached_QMARK_,filepath){cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.last_filename,filepath);
cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.last_cached,cached_QMARK_);
return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.diff.git_diff_output,"--no-pager","diff",(cljs.core.truth_(cached_QMARK_)?"--cached":null),"--no-color",[cljs.core.str("-U"),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join(''),"--",filepath);
});
lt.plugins.gitlight.diff.git_diff = (function git_diff(filepath){return lt.plugins.gitlight.diff.git_diff_cached.call(null,false,filepath);
});
lt.plugins.gitlight.diff.git_diff_button = (function git_diff_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,filename);
});
lt.plugins.gitlight.diff.git_diff_cached_button = (function git_diff_cached_button(action,filename){return lt.plugins.gitlight.diff.git_diff_cached.call(null,true,filename);
});
lt.plugins.gitlight.diff.git_diff_repo_button = (function git_diff_repo_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,"");
});
lt.plugins.gitlight.diff.git_diff_cached_repo_button = (function git_diff_cached_repo_button(action,filename){return lt.plugins.gitlight.diff.git_diff_cached.call(null,true,"");
});
lt.plugins.gitlight.diff.side_by_side = (function side_by_side(firsts){var partitioned = cljs.core.partition_by.call(null,cljs.core.first,firsts);return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__9905,part){var vec__9906 = p__9905;var ok = cljs.core.nth.call(null,vec__9906,0,null);var stack = cljs.core.nth.call(null,vec__9906,1,null);var vec__9907 = cljs.core.split_at.call(null,1,part);var fst = cljs.core.nth.call(null,vec__9907,0,null);var rst = cljs.core.nth.call(null,vec__9907,1,null);var left = cljs.core.count.call(null,stack);var right = cljs.core.count.call(null,part);var G__9908 = cljs.core.first.call(null,fst);if(cljs.core._EQ_.call(null,"\\",G__9908))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok,part], null);
} else
{if(cljs.core._EQ_.call(null,"+",G__9908))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,ok,cljs.core.map.call(null,cljs.core.str,part,stack),cljs.core.repeat.call(null,(right - left),"+")),cljs.core.repeat.call(null,(left - right),"-")], null);
} else
{if(cljs.core._EQ_.call(null,"-",G__9908))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok,part], null);
} else
{if(cljs.core._EQ_.call(null," ",G__9908))
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
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),partitioned));
});
lt.plugins.gitlight.diff.__BEH__parse_diff_gutter_out = (function __BEH__parse_diff_gutter_out(this$,command,stdout,stderr){var parsed = cljs.core.drop.call(null,5,clojure.string.split_lines.call(null,stdout.toString()));var firsts = cljs.core.map.call(null,cljs.core.first,parsed);return lt.plugins.gitlight.gutter.show_gutter_data.call(null,lt.objs.editor.pool.last_active.call(null),((cljs.core.empty_QMARK_.call(null,firsts))?cljs.core.repeat.call(null,lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).doc.size," "):lt.plugins.gitlight.diff.side_by_side.call(null,firsts)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.diff","parse-diff-gutter-out","lt.plugins.gitlight.diff/parse-diff-gutter-out",1856487699),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.diff.__BEH__parse_diff_gutter_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out","out",1014014656)], null));
lt.plugins.gitlight.diff.__BEH__diff_gutter_err = (function __BEH__diff_gutter_err(this$,command,err,stderr){return cljs.core.println.call(null,"error",stderr);
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
return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.diff.git_diff_gutter_out,"diff","-U10000","--",new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","git-diff-file","lt.plugins.gitlight.diff/git-diff-file",4564618068),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: diff this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.diff.git_diff.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
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
lt.plugins.gitlight.status.back.get_status_for_line = (function get_status_for_line(line){var X = cljs.core.first.call(null,line);var Y = cljs.core.second.call(null,line);var filename = cljs.core.subs.call(null,line,3);return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (fun){return fun.call(null,X,Y,filename);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.status.back.not_staged,lt.plugins.gitlight.status.back.staged,lt.plugins.gitlight.status.back.merge_conflicts,lt.plugins.gitlight.status.back.others], null)));
});
lt.plugins.gitlight.status.back.parse_git_status = (function parse_git_status(lines){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,lt.plugins.gitlight.status.back.get_status_for_line,lines));
});
lt.plugins.gitlight.status.back.parse_porcelain = (function parse_porcelain(data){var splitted = clojure.string.split_lines.call(null,data.toString());var branch = cljs.core.subs.call(null,cljs.core.first.call(null,splitted),3);var parsed = lt.plugins.gitlight.status.back.parse_git_status.call(null,cljs.core.rest.call(null,splitted));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),[cljs.core.str(branch)].join(''),new cljs.core.Keyword(null,"status","status",4416389988),cljs.core.sort.call(null,cljs.core.group_by.call(null,(function (a){return cljs.core.nth.call(null,a,2);
}),parsed))], null);
});
lt.plugins.gitlight.status.back.__BEH__git_status_out_success = (function __BEH__git_status_out_success(obj,command,data,stderr){lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"add-watch","add-watch",4224092181));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.parse_porcelain.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-success","lt.plugins.gitlight.status.back/git-status-out-success",3735995038),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: When git status is executed, parse its output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
lt.plugins.gitlight.status.back.__BEH__git_status_out_failure = (function __BEH__git_status_out_failure(obj,command,err,stderr){cljs.core.remove_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status.back","status-pool-watch","lt.plugins.gitlight.status.back/status-pool-watch",4566645289));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status-failed","status-failed",1731571178));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure","lt.plugins.gitlight.status.back/git-status-out-failure",3442851867),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_failure,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: When git status fails.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null));
lt.plugins.gitlight.status.back.__BEH__git_status_out_failure_verbose = (function __BEH__git_status_out_failure_verbose(obj,command,err,stderr){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("git status failed! "),cljs.core.str(stderr.toString())].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure-verbose","lt.plugins.gitlight.status.back/git-status-out-failure-verbose",4010434018),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_failure_verbose,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Be verbose about git status fail",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.gitlight.status.back.git_status_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out","lt.plugins.gitlight.status.back/git-status-out",3897718648),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-status-out","git-status-out",2815542080)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-success","lt.plugins.gitlight.status.back/git-status-out-success",3735995038),new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure","lt.plugins.gitlight.status.back/git-status-out-failure",3442851867),new cljs.core.Keyword("lt.plugins.gitlight.status.back","refresh-ui-on-new-status","lt.plugins.gitlight.status.back/refresh-ui-on-new-status",1675222016)], null)));
lt.plugins.gitlight.status.back.git_status = (function git_status(){return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.status.back.git_status_out,"status","--porcelain","--branch");
});
lt.plugins.gitlight.status.back.git_add = (function git_add(action,filename){return lt.plugins.gitlight.git.git_add.call(null,filename);
});
lt.plugins.gitlight.status.back.git_commit = (function git_commit(action,filename){return lt.plugins.gitlight.common_ui.input_popup.call(null,"commit message?","commit",(function (msg){return lt.plugins.gitlight.git.git_cmd_commit.call(null,msg);
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
lt.plugins.gitlight.remote_com.git_fetch = (function git_fetch(){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"fetch");
});
lt.plugins.gitlight.remote_com.git_push = (function git_push(){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"push");
});
lt.plugins.gitlight.remote_com.git_push_remote_branch = (function git_push_remote_branch(remote,branch){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"push",remote,branch);
});
lt.plugins.gitlight.remote_com.git_pull = (function git_pull(){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"pull");
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.branch')) {
goog.provide('lt.plugins.gitlight.branch');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
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
lt.plugins.gitlight.branch.branch_panel = (function branch_panel(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-branches","div.gitlight-branches",1801709646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Branches"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7530__auto__ = (function iter__8338(s__8339){return (new cljs.core.LazySeq(null,(function (){var s__8339__$1 = s__8339;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8339__$1);if(temp__4092__auto__)
{var s__8339__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8339__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__8339__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__8341 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__8340 = 0;while(true){
if((i__8340 < size__7529__auto__))
{var parsed = cljs.core._nth.call(null,c__7528__auto__,i__8340);var vec__8346 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__8346,0,null);var vec__8347 = cljs.core.nth.call(null,vec__8346,1,null);var branch = cljs.core.nth.call(null,vec__8347,0,null);var sha1 = cljs.core.nth.call(null,vec__8347,1,null);var desc = cljs.core.nth.call(null,vec__8347,2,null);cljs.core.chunk_append.call(null,b__8341,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":lt.plugins.gitlight.branch.delete_branch_button.call(null,branch))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null));
{
var G__8366 = (i__8340 + 1);
i__8340 = G__8366;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8341),iter__8338.call(null,cljs.core.chunk_rest.call(null,s__8339__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8341),null);
}
} else
{var parsed = cljs.core.first.call(null,s__8339__$2);var vec__8348 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__8348,0,null);var vec__8349 = cljs.core.nth.call(null,vec__8348,1,null);var branch = cljs.core.nth.call(null,vec__8349,0,null);var sha1 = cljs.core.nth.call(null,vec__8349,1,null);var desc = cljs.core.nth.call(null,vec__8349,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":lt.plugins.gitlight.branch.delete_branch_button.call(null,branch))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null),iter__8338.call(null,cljs.core.rest.call(null,s__8339__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,lt.plugins.gitlight.branch.parse_data.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.new-branch","td.new-branch",3433852959),lt.plugins.gitlight.branch.new_branch_button.call(null)], null)], null)], null)], null));var seq__8350_8367 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8351_8368 = null;var count__8352_8369 = 0;var i__8353_8370 = 0;while(true){
if((i__8353_8370 < count__8352_8369))
{var vec__8354_8371 = cljs.core._nth.call(null,chunk__8351_8368,i__8353_8370);var ev__8184__auto___8372 = cljs.core.nth.call(null,vec__8354_8371,0,null);var func__8185__auto___8373 = cljs.core.nth.call(null,vec__8354_8371,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8372,func__8185__auto___8373);
{
var G__8374 = seq__8350_8367;
var G__8375 = chunk__8351_8368;
var G__8376 = count__8352_8369;
var G__8377 = (i__8353_8370 + 1);
seq__8350_8367 = G__8374;
chunk__8351_8368 = G__8375;
count__8352_8369 = G__8376;
i__8353_8370 = G__8377;
continue;
}
} else
{var temp__4092__auto___8378 = cljs.core.seq.call(null,seq__8350_8367);if(temp__4092__auto___8378)
{var seq__8350_8379__$1 = temp__4092__auto___8378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8350_8379__$1))
{var c__7561__auto___8380 = cljs.core.chunk_first.call(null,seq__8350_8379__$1);{
var G__8381 = cljs.core.chunk_rest.call(null,seq__8350_8379__$1);
var G__8382 = c__7561__auto___8380;
var G__8383 = cljs.core.count.call(null,c__7561__auto___8380);
var G__8384 = 0;
seq__8350_8367 = G__8381;
chunk__8351_8368 = G__8382;
count__8352_8369 = G__8383;
i__8353_8370 = G__8384;
continue;
}
} else
{var vec__8355_8385 = cljs.core.first.call(null,seq__8350_8379__$1);var ev__8184__auto___8386 = cljs.core.nth.call(null,vec__8355_8385,0,null);var func__8185__auto___8387 = cljs.core.nth.call(null,vec__8355_8385,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8386,func__8185__auto___8387);
{
var G__8388 = cljs.core.next.call(null,seq__8350_8379__$1);
var G__8389 = null;
var G__8390 = 0;
var G__8391 = 0;
seq__8350_8367 = G__8388;
chunk__8351_8368 = G__8389;
count__8352_8369 = G__8390;
i__8353_8370 = G__8391;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.branch.git_branch_splitter = (function git_branch_splitter(line){var active_QMARK_ = cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,line));var to_cut = cljs.core.subs.call(null,line,2);var splitted = clojure.string.split.call(null,to_cut,/\s+/,3);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_QMARK_,splitted], null);
});
lt.plugins.gitlight.branch.parse_data = (function parse_data(data){var lines = clojure.string.split_lines.call(null,data.toString());return cljs.core.map.call(null,lt.plugins.gitlight.branch.git_branch_splitter,lines);
});
lt.plugins.gitlight.branch.git_branch_output = lt.plugins.gitlight.common_ui.make_output_tab_object.call(null,"Git branches",new cljs.core.Keyword("lt.plugins.gitlight.branch","gitlight-branches","lt.plugins.gitlight.branch/gitlight-branches",2920815417),lt.plugins.gitlight.branch.branch_panel);
lt.plugins.gitlight.branch.git_branches = (function git_branches(){return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.branch.git_branch_output,"branch","--no-color","-vv");
});
lt.plugins.gitlight.branch.git_merge = (function git_merge(action,branch){lt.plugins.gitlight.git.git_command_ignore_out.call(null,"merge",branch);
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.plugins.gitlight.branch.git_checkout = (function git_checkout(branch,action){lt.plugins.gitlight.git.git_command_ignore_out.call(null,"checkout",branch);
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.plugins.gitlight.branch.git_push_it_BANG_ = (function git_push_it_BANG_(action,branch){lt.plugins.gitlight.remote_com.git_push_remote_branch.call(null,"origin",branch);
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.plugins.gitlight.branch.git_new_branch = (function git_new_branch(action,branch){return lt.plugins.gitlight.common_ui.input_popup.call(null,"new branch name","create",lt.plugins.gitlight.branch.git_create_new_branch);
});
lt.plugins.gitlight.branch.git_create_new_branch = (function git_create_new_branch(branch){lt.plugins.gitlight.git.git_command_ignore_out.call(null,"branch",branch);
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.plugins.gitlight.branch.git_delete_branch = (function git_delete_branch(action,branch){lt.plugins.gitlight.git.git_command_ignore_out.call(null,"branch","-D",branch);
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.branch","branches","lt.plugins.gitlight.branch/branches",1924152112),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: branches",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.branch.git_branches], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.ui')) {
goog.provide('lt.plugins.gitlight.status.ui');
goog.require('cljs.core');
goog.require('lt.objs.cli');
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
lt.plugins.gitlight.status.ui.repo_ops = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",1017356940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push",lt.plugins.gitlight.remote_com.git_push], null),new cljs.core.Keyword(null,"pull","pull",1017356727),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull",lt.plugins.gitlight.remote_com.git_pull], null),new cljs.core.Keyword(null,"fetch","fetch",1111226924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fetch",lt.plugins.gitlight.remote_com.git_fetch], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"commit","commit",3954056361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quitck commit",lt.plugins.gitlight.status.back.git_commit], null),new cljs.core.Keyword(null,"cached-diff","cached-diff",1992836418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cached diff",lt.plugins.gitlight.diff.git_diff_cached_repo_button], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"diff","diff",1016987511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_repo_button], null),new cljs.core.Keyword(null,"inline-diff","inline-diff",3623171627),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toggle inline diff",lt.plugins.gitlight.diff.toggle_git_diff_gutter], null)], null)], null);
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__10709){var vec__10725 = p__10709;var f = cljs.core.nth.call(null,vec__10725,0,null);var t = cljs.core.nth.call(null,vec__10725,1,null);var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,f,f,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10726(s__10727){return (new cljs.core.LazySeq(null,(function (){var s__10727__$1 = s__10727;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10727__$1);if(temp__4092__auto__)
{var s__10727__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10727__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10727__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10729 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10728 = 0;while(true){
if((i__10728 < size__7529__auto__))
{var vec__10732 = cljs.core._nth.call(null,c__7528__auto__,i__10728);var bt = cljs.core.nth.call(null,vec__10732,0,null);var fun = cljs.core.nth.call(null,vec__10732,1,null);cljs.core.chunk_append.call(null,b__10729,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun));
{
var G__10864 = (i__10728 + 1);
i__10728 = G__10864;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10729),iter__10726.call(null,cljs.core.chunk_rest.call(null,s__10727__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10729),null);
}
} else
{var vec__10733 = cljs.core.first.call(null,s__10727__$2);var bt = cljs.core.nth.call(null,vec__10733,0,null);var fun = cljs.core.nth.call(null,vec__10733,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun),iter__10726.call(null,cljs.core.rest.call(null,s__10727__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__10734_10865 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10735_10866 = null;var count__10736_10867 = 0;var i__10737_10868 = 0;while(true){
if((i__10737_10868 < count__10736_10867))
{var vec__10738_10869 = cljs.core._nth.call(null,chunk__10735_10866,i__10737_10868);var ev__8184__auto___10870 = cljs.core.nth.call(null,vec__10738_10869,0,null);var func__8185__auto___10871 = cljs.core.nth.call(null,vec__10738_10869,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10870,func__8185__auto___10871);
{
var G__10872 = seq__10734_10865;
var G__10873 = chunk__10735_10866;
var G__10874 = count__10736_10867;
var G__10875 = (i__10737_10868 + 1);
seq__10734_10865 = G__10872;
chunk__10735_10866 = G__10873;
count__10736_10867 = G__10874;
i__10737_10868 = G__10875;
continue;
}
} else
{var temp__4092__auto___10876 = cljs.core.seq.call(null,seq__10734_10865);if(temp__4092__auto___10876)
{var seq__10734_10877__$1 = temp__4092__auto___10876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10734_10877__$1))
{var c__7561__auto___10878 = cljs.core.chunk_first.call(null,seq__10734_10877__$1);{
var G__10879 = cljs.core.chunk_rest.call(null,seq__10734_10877__$1);
var G__10880 = c__7561__auto___10878;
var G__10881 = cljs.core.count.call(null,c__7561__auto___10878);
var G__10882 = 0;
seq__10734_10865 = G__10879;
chunk__10735_10866 = G__10880;
count__10736_10867 = G__10881;
i__10737_10868 = G__10882;
continue;
}
} else
{var vec__10739_10883 = cljs.core.first.call(null,seq__10734_10877__$1);var ev__8184__auto___10884 = cljs.core.nth.call(null,vec__10739_10883,0,null);var func__8185__auto___10885 = cljs.core.nth.call(null,vec__10739_10883,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10884,func__8185__auto___10885);
{
var G__10886 = cljs.core.next.call(null,seq__10734_10877__$1);
var G__10887 = null;
var G__10888 = 0;
var G__10889 = 0;
seq__10734_10865 = G__10886;
chunk__10735_10866 = G__10887;
count__10736_10867 = G__10888;
i__10737_10868 = G__10889;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__10746_10890 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10747_10891 = null;var count__10748_10892 = 0;var i__10749_10893 = 0;while(true){
if((i__10749_10893 < count__10748_10892))
{var vec__10750_10894 = cljs.core._nth.call(null,chunk__10747_10891,i__10749_10893);var ev__8184__auto___10895 = cljs.core.nth.call(null,vec__10750_10894,0,null);var func__8185__auto___10896 = cljs.core.nth.call(null,vec__10750_10894,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10895,func__8185__auto___10896);
{
var G__10897 = seq__10746_10890;
var G__10898 = chunk__10747_10891;
var G__10899 = count__10748_10892;
var G__10900 = (i__10749_10893 + 1);
seq__10746_10890 = G__10897;
chunk__10747_10891 = G__10898;
count__10748_10892 = G__10899;
i__10749_10893 = G__10900;
continue;
}
} else
{var temp__4092__auto___10901 = cljs.core.seq.call(null,seq__10746_10890);if(temp__4092__auto___10901)
{var seq__10746_10902__$1 = temp__4092__auto___10901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10746_10902__$1))
{var c__7561__auto___10903 = cljs.core.chunk_first.call(null,seq__10746_10902__$1);{
var G__10904 = cljs.core.chunk_rest.call(null,seq__10746_10902__$1);
var G__10905 = c__7561__auto___10903;
var G__10906 = cljs.core.count.call(null,c__7561__auto___10903);
var G__10907 = 0;
seq__10746_10890 = G__10904;
chunk__10747_10891 = G__10905;
count__10748_10892 = G__10906;
i__10749_10893 = G__10907;
continue;
}
} else
{var vec__10751_10908 = cljs.core.first.call(null,seq__10746_10902__$1);var ev__8184__auto___10909 = cljs.core.nth.call(null,vec__10751_10908,0,null);var func__8185__auto___10910 = cljs.core.nth.call(null,vec__10751_10908,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10909,func__8185__auto___10910);
{
var G__10911 = cljs.core.next.call(null,seq__10746_10902__$1);
var G__10912 = null;
var G__10913 = 0;
var G__10914 = 0;
seq__10746_10890 = G__10911;
chunk__10747_10891 = G__10912;
count__10748_10892 = G__10913;
i__10749_10893 = G__10914;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,branch,[cljs.core.str("Branch menu")].join(''),(function (x,y){return lt.plugins.gitlight.branch.git_branches.call(null);
}))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10802(s__10803){return (new cljs.core.LazySeq(null,(function (){var s__10803__$1 = s__10803;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10803__$1);if(temp__4092__auto__)
{var s__10803__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10803__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10803__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10805 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10804 = 0;while(true){
if((i__10804 < size__7529__auto__))
{var option_group = cljs.core._nth.call(null,c__7528__auto__,i__10804);cljs.core.chunk_append.call(null,b__10805,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7530__auto__ = ((function (i__10804,option_group,c__7528__auto__,size__7529__auto__,b__10805,s__10803__$2,temp__4092__auto__){
return (function iter__10822(s__10823){return (new cljs.core.LazySeq(null,((function (i__10804,option_group,c__7528__auto__,size__7529__auto__,b__10805,s__10803__$2,temp__4092__auto__){
return (function (){var s__10823__$1 = s__10823;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10823__$1);if(temp__4092__auto____$1)
{var s__10823__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10823__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__10823__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__10825 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__10824 = 0;while(true){
if((i__10824 < size__7529__auto____$1))
{var vec__10828 = cljs.core._nth.call(null,c__7528__auto____$1,i__10824);var bname = cljs.core.nth.call(null,vec__10828,0,null);var fun = cljs.core.nth.call(null,vec__10828,1,null);cljs.core.chunk_append.call(null,b__10825,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10915 = (i__10824 + 1);
i__10824 = G__10915;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10825),iter__10822.call(null,cljs.core.chunk_rest.call(null,s__10823__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10825),null);
}
} else
{var vec__10829 = cljs.core.first.call(null,s__10823__$2);var bname = cljs.core.nth.call(null,vec__10829,0,null);var fun = cljs.core.nth.call(null,vec__10829,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10822.call(null,cljs.core.rest.call(null,s__10823__$2)));
}
} else
{return null;
}
break;
}
});})(i__10804,option_group,c__7528__auto__,size__7529__auto__,b__10805,s__10803__$2,temp__4092__auto__))
,null,null));
});})(i__10804,option_group,c__7528__auto__,size__7529__auto__,b__10805,s__10803__$2,temp__4092__auto__))
;return iter__7530__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null));
{
var G__10916 = (i__10804 + 1);
i__10804 = G__10916;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10805),iter__10802.call(null,cljs.core.chunk_rest.call(null,s__10803__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10805),null);
}
} else
{var option_group = cljs.core.first.call(null,s__10803__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7530__auto__ = ((function (option_group,s__10803__$2,temp__4092__auto__){
return (function iter__10830(s__10831){return (new cljs.core.LazySeq(null,((function (option_group,s__10803__$2,temp__4092__auto__){
return (function (){var s__10831__$1 = s__10831;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10831__$1);if(temp__4092__auto____$1)
{var s__10831__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10831__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10831__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10833 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10832 = 0;while(true){
if((i__10832 < size__7529__auto__))
{var vec__10836 = cljs.core._nth.call(null,c__7528__auto__,i__10832);var bname = cljs.core.nth.call(null,vec__10836,0,null);var fun = cljs.core.nth.call(null,vec__10836,1,null);cljs.core.chunk_append.call(null,b__10833,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10917 = (i__10832 + 1);
i__10832 = G__10917;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10833),iter__10830.call(null,cljs.core.chunk_rest.call(null,s__10831__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10833),null);
}
} else
{var vec__10837 = cljs.core.first.call(null,s__10831__$2);var bname = cljs.core.nth.call(null,vec__10837,0,null);var fun = cljs.core.nth.call(null,vec__10837,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10830.call(null,cljs.core.rest.call(null,s__10831__$2)));
}
} else
{return null;
}
break;
}
});})(option_group,s__10803__$2,temp__4092__auto__))
,null,null));
});})(option_group,s__10803__$2,temp__4092__auto__))
;return iter__7530__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null),iter__10802.call(null,cljs.core.rest.call(null,s__10803__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,lt.plugins.gitlight.status.ui.repo_ops);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,"refresh","refresh",(function (x,y){return null;
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7530__auto__ = (function iter__10838(s__10839){return (new cljs.core.LazySeq(null,(function (){var s__10839__$1 = s__10839;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10839__$1);if(temp__4092__auto__)
{var s__10839__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10839__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10839__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10841 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10840 = 0;while(true){
if((i__10840 < size__7529__auto__))
{var vec__10844 = cljs.core._nth.call(null,c__7528__auto__,i__10840);var g = cljs.core.nth.call(null,vec__10844,0,null);var fs = cljs.core.nth.call(null,vec__10844,1,null);cljs.core.chunk_append.call(null,b__10841,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10918 = (i__10840 + 1);
i__10840 = G__10918;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10841),iter__10838.call(null,cljs.core.chunk_rest.call(null,s__10839__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10841),null);
}
} else
{var vec__10845 = cljs.core.first.call(null,s__10839__$2);var g = cljs.core.nth.call(null,vec__10845,0,null);var fs = cljs.core.nth.call(null,vec__10845,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__10838.call(null,cljs.core.rest.call(null,s__10839__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,this$);
})()], null)], null));var seq__10846_10919 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10847_10920 = null;var count__10848_10921 = 0;var i__10849_10922 = 0;while(true){
if((i__10849_10922 < count__10848_10921))
{var vec__10850_10923 = cljs.core._nth.call(null,chunk__10847_10920,i__10849_10922);var ev__8184__auto___10924 = cljs.core.nth.call(null,vec__10850_10923,0,null);var func__8185__auto___10925 = cljs.core.nth.call(null,vec__10850_10923,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10924,func__8185__auto___10925);
{
var G__10926 = seq__10846_10919;
var G__10927 = chunk__10847_10920;
var G__10928 = count__10848_10921;
var G__10929 = (i__10849_10922 + 1);
seq__10846_10919 = G__10926;
chunk__10847_10920 = G__10927;
count__10848_10921 = G__10928;
i__10849_10922 = G__10929;
continue;
}
} else
{var temp__4092__auto___10930 = cljs.core.seq.call(null,seq__10846_10919);if(temp__4092__auto___10930)
{var seq__10846_10931__$1 = temp__4092__auto___10930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10846_10931__$1))
{var c__7561__auto___10932 = cljs.core.chunk_first.call(null,seq__10846_10931__$1);{
var G__10933 = cljs.core.chunk_rest.call(null,seq__10846_10931__$1);
var G__10934 = c__7561__auto___10932;
var G__10935 = cljs.core.count.call(null,c__7561__auto___10932);
var G__10936 = 0;
seq__10846_10919 = G__10933;
chunk__10847_10920 = G__10934;
count__10848_10921 = G__10935;
i__10849_10922 = G__10936;
continue;
}
} else
{var vec__10851_10937 = cljs.core.first.call(null,seq__10846_10931__$1);var ev__8184__auto___10938 = cljs.core.nth.call(null,vec__10851_10937,0,null);var func__8185__auto___10939 = cljs.core.nth.call(null,vec__10851_10937,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10938,func__8185__auto___10939);
{
var G__10940 = cljs.core.next.call(null,seq__10846_10931__$1);
var G__10941 = null;
var G__10942 = 0;
var G__10943 = 0;
seq__10846_10919 = G__10940;
chunk__10847_10920 = G__10941;
count__10848_10921 = G__10942;
i__10849_10922 = G__10943;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10858_10944 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10859_10945 = null;var count__10860_10946 = 0;var i__10861_10947 = 0;while(true){
if((i__10861_10947 < count__10860_10946))
{var vec__10862_10948 = cljs.core._nth.call(null,chunk__10859_10945,i__10861_10947);var ev__8184__auto___10949 = cljs.core.nth.call(null,vec__10862_10948,0,null);var func__8185__auto___10950 = cljs.core.nth.call(null,vec__10862_10948,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10949,func__8185__auto___10950);
{
var G__10951 = seq__10858_10944;
var G__10952 = chunk__10859_10945;
var G__10953 = count__10860_10946;
var G__10954 = (i__10861_10947 + 1);
seq__10858_10944 = G__10951;
chunk__10859_10945 = G__10952;
count__10860_10946 = G__10953;
i__10861_10947 = G__10954;
continue;
}
} else
{var temp__4092__auto___10955 = cljs.core.seq.call(null,seq__10858_10944);if(temp__4092__auto___10955)
{var seq__10858_10956__$1 = temp__4092__auto___10955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10858_10956__$1))
{var c__7561__auto___10957 = cljs.core.chunk_first.call(null,seq__10858_10956__$1);{
var G__10958 = cljs.core.chunk_rest.call(null,seq__10858_10956__$1);
var G__10959 = c__7561__auto___10957;
var G__10960 = cljs.core.count.call(null,c__7561__auto___10957);
var G__10961 = 0;
seq__10858_10944 = G__10958;
chunk__10859_10945 = G__10959;
count__10860_10946 = G__10960;
i__10861_10947 = G__10961;
continue;
}
} else
{var vec__10863_10962 = cljs.core.first.call(null,seq__10858_10956__$1);var ev__8184__auto___10963 = cljs.core.nth.call(null,vec__10863_10962,0,null);var func__8185__auto___10964 = cljs.core.nth.call(null,vec__10863_10962,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10963,func__8185__auto___10964);
{
var G__10965 = cljs.core.next.call(null,seq__10858_10956__$1);
var G__10966 = null;
var G__10967 = 0;
var G__10968 = 0;
seq__10858_10944 = G__10965;
chunk__10859_10945 = G__10966;
count__10860_10946 = G__10967;
i__10861_10947 = G__10968;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
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
lt.plugins.gitlight.tests.which_color_QMARK_ = (function which_color_QMARK_(result){var G__10644 = result;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"not-bool","not-bool",2543743254),G__10644))
{return "pink";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__10644))
{return "red";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__10644))
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
lt.plugins.gitlight.tests.test_panel = (function test_panel(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7530__auto__ = (function iter__10659(s__10660){return (new cljs.core.LazySeq(null,(function (){var s__10660__$1 = s__10660;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10660__$1);if(temp__4092__auto__)
{var s__10660__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10660__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10660__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10662 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10661 = 0;while(true){
if((i__10661 < size__7529__auto__))
{var map__10665 = cljs.core._nth.call(null,c__7528__auto__,i__10661);var map__10665__$1 = ((cljs.core.seq_QMARK_.call(null,map__10665))?cljs.core.apply.call(null,cljs.core.hash_map,map__10665):map__10665);var status = cljs.core.get.call(null,map__10665__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10665__$1,new cljs.core.Keyword(null,"info","info",1017141280));cljs.core.chunk_append.call(null,b__10662,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null));
{
var G__10683 = (i__10661 + 1);
i__10661 = G__10683;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10662),iter__10659.call(null,cljs.core.chunk_rest.call(null,s__10660__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10662),null);
}
} else
{var map__10666 = cljs.core.first.call(null,s__10660__$2);var map__10666__$1 = ((cljs.core.seq_QMARK_.call(null,map__10666))?cljs.core.apply.call(null,cljs.core.hash_map,map__10666):map__10666);var status = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"info","info",1017141280));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null),iter__10659.call(null,cljs.core.rest.call(null,s__10660__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__10667_10684 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10668_10685 = null;var count__10669_10686 = 0;var i__10670_10687 = 0;while(true){
if((i__10670_10687 < count__10669_10686))
{var vec__10671_10688 = cljs.core._nth.call(null,chunk__10668_10685,i__10670_10687);var ev__8184__auto___10689 = cljs.core.nth.call(null,vec__10671_10688,0,null);var func__8185__auto___10690 = cljs.core.nth.call(null,vec__10671_10688,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10689,func__8185__auto___10690);
{
var G__10691 = seq__10667_10684;
var G__10692 = chunk__10668_10685;
var G__10693 = count__10669_10686;
var G__10694 = (i__10670_10687 + 1);
seq__10667_10684 = G__10691;
chunk__10668_10685 = G__10692;
count__10669_10686 = G__10693;
i__10670_10687 = G__10694;
continue;
}
} else
{var temp__4092__auto___10695 = cljs.core.seq.call(null,seq__10667_10684);if(temp__4092__auto___10695)
{var seq__10667_10696__$1 = temp__4092__auto___10695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10667_10696__$1))
{var c__7561__auto___10697 = cljs.core.chunk_first.call(null,seq__10667_10696__$1);{
var G__10698 = cljs.core.chunk_rest.call(null,seq__10667_10696__$1);
var G__10699 = c__7561__auto___10697;
var G__10700 = cljs.core.count.call(null,c__7561__auto___10697);
var G__10701 = 0;
seq__10667_10684 = G__10698;
chunk__10668_10685 = G__10699;
count__10669_10686 = G__10700;
i__10670_10687 = G__10701;
continue;
}
} else
{var vec__10672_10702 = cljs.core.first.call(null,seq__10667_10696__$1);var ev__8184__auto___10703 = cljs.core.nth.call(null,vec__10672_10702,0,null);var func__8185__auto___10704 = cljs.core.nth.call(null,vec__10672_10702,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10703,func__8185__auto___10704);
{
var G__10705 = cljs.core.next.call(null,seq__10667_10696__$1);
var G__10706 = null;
var G__10707 = 0;
var G__10708 = 0;
seq__10667_10684 = G__10705;
chunk__10668_10685 = G__10706;
count__10669_10686 = G__10707;
i__10670_10687 = G__10708;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
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
lt.plugins.gitlight.tests.lib.selector_asrt = (function selector_asrt(p__10969){var map__10971 = p__10969;var map__10971__$1 = ((cljs.core.seq_QMARK_.call(null,map__10971))?cljs.core.apply.call(null,cljs.core.hash_map,map__10971):map__10971);var select = cljs.core.get.call(null,map__10971__$1,new cljs.core.Keyword(null,"select","select",4402849902));return null;
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
lt.plugins.gitlight.tests.status.back.random_str = (function random_str(){var r = (10 + cljs.core.rand_int.call(null,10));return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,r,(function (){return cljs.core.char$.call(null,(cljs.core.rand_int.call(null,26) + 97));
})));
});
lt.plugins.gitlight.tests.status.back.data = cljs.core.list(cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"newfile","newfile",2859647630),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"newfile","newfile",2859647630),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-both-added","unmerged-both-added",3821120238),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"newfile","newfile",2859647630),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-added-by-us","unmerged-added-by-us",4095962481),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"renamed","renamed",2106238040),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"renamed","renamed",2106238040),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"renamed","renamed",2106238040),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"copied","copied",3954141750),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"copied","copied",3954141750),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"copied","copied",3954141750),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-both-deleted","unmerged-both-deleted",4207561479),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-deleted-by-us","unmerged-deleted-by-us",1004394442),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-added-by-them","unmerged-added-by-them",3639367855),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-deleted-by-them","unmerged-deleted-by-them",4759851208),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-both-modified","unmerged-both-modified",4092771903),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))));
lt.plugins.gitlight.tests.status.back.change_filenames = (function change_filenames(filename,x){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10995_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filename","filename",4574102905),p1__10995_SHARP_))
{return filename;
} else
{return p1__10995_SHARP_;
}
}),x));
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","back-tests","lt.plugins.gitlight.tests.status.back/back-tests",4633446629),(function (){lt.plugins.gitlight.tests.status.back.test_data = (function test_data(pair){var vec__10999 = pair;var n = cljs.core.nth.call(null,vec__10999,0,null);var what = cljs.core.nth.call(null,vec__10999,1,null);var vec__11000 = what;var tst = cljs.core.nth.call(null,vec__11000,0,null);var parsed = cljs.core.nth.call(null,vec__11000,1,null);var vec__11001 = tst;var X = cljs.core.nth.call(null,vec__11001,0,null);var Y = cljs.core.nth.call(null,vec__11001,1,null);var filename = cljs.core.nth.call(null,vec__11001,2,null);var d = cljs.core.nth.call(null,lt.plugins.gitlight.tests.status.back.data,n);var what_should_be = cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.tests.status.back.change_filenames,filename),d));var what_is = cljs.core.sort.call(null,parsed);var tst__$1 = cljs.core._EQ_.call(null,what_should_be,what_is);if(!(tst__$1))
{lt.plugins.gitlight.tests.lib.asrt.call(null,[cljs.core.str("parsing porcelain: `"),cljs.core.str(X),cljs.core.str("' `"),cljs.core.str(Y),cljs.core.str("'")].join(''),tst__$1);
} else
{}
return tst__$1;
});
lt.plugins.gitlight.tests.status.back.generate_test_data = (function generate_test_data(){var iter__7530__auto__ = (function iter__11008(s__11009){return (new cljs.core.LazySeq(null,(function (){var s__11009__$1 = s__11009;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11009__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7526__auto__ = ((function (s__11009__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__11010(s__11011){return (new cljs.core.LazySeq(null,((function (s__11009__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__11011__$1 = s__11011;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__11011__$1);if(temp__4092__auto____$1)
{var s__11011__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11011__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__11011__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__11013 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__11012 = 0;while(true){
if((i__11012 < size__7529__auto__))
{var y = cljs.core._nth.call(null,c__7528__auto__,i__11012);cljs.core.chunk_append.call(null,b__11013,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})());
{
var G__11024 = (i__11012 + 1);
i__11012 = G__11024;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11013),iter__11010.call(null,cljs.core.chunk_rest.call(null,s__11011__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11013),null);
}
} else
{var y = cljs.core.first.call(null,s__11011__$2);return cljs.core.cons.call(null,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})(),iter__11010.call(null,cljs.core.rest.call(null,s__11011__$2)));
}
} else
{return null;
}
break;
}
});})(s__11009__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__11009__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7527__auto__ = cljs.core.seq.call(null,iterys__7526__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","D","U"], null)));if(fs__7527__auto__)
{return cljs.core.concat.call(null,fs__7527__auto__,iter__11008.call(null,cljs.core.rest.call(null,s__11009__$1)));
} else
{{
var G__11025 = cljs.core.rest.call(null,s__11009__$1);
s__11009__$1 = G__11025;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","R","C","D","U"], null));
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
after.cljs$lang$applyTo = (function (arglist__10994){
var text = cljs.core.first(arglist__10994);
arglist__10994 = cljs.core.next(arglist__10994);
var cwd = cljs.core.first(arglist__10994);
arglist__10994 = cljs.core.next(arglist__10994);
var data = cljs.core.first(arglist__10994);
var what_next = cljs.core.rest(arglist__10994);
return after__delegate(text,cwd,data,what_next);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
lt.plugins.gitlight.tests.remote_com.__BEH__git_test_exit_status__DOT__out = (function __BEH__git_test_exit_status__DOT__out(obj,data){var cwd = cljs.core.deref.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));var G__10983 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));if(cljs.core._EQ_.call(null,"push",G__10983))
{return lt.plugins.gitlight.tests.lib.asrt.call(null,"git push",cljs.core._EQ_.call(null,0,data));
} else
{if(cljs.core._EQ_.call(null,"commit",G__10983))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git commit",cwd,data,"push");
} else
{if(cljs.core._EQ_.call(null,"add",G__10983))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git add",cwd,data,"commit","-m","commiting");
} else
{if(cljs.core._EQ_.call(null,"pull",G__10983))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git pull",cwd,data,"add","push_me");
} else
{if(cljs.core._EQ_.call(null,"fetch",G__10983))
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
lt.plugins.gitlight.tests.status.ui.test_node = (function test_node(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"test"], null));var seq__11032_11048 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11033_11049 = null;var count__11034_11050 = 0;var i__11035_11051 = 0;while(true){
if((i__11035_11051 < count__11034_11050))
{var vec__11036_11052 = cljs.core._nth.call(null,chunk__11033_11049,i__11035_11051);var ev__8184__auto___11053 = cljs.core.nth.call(null,vec__11036_11052,0,null);var func__8185__auto___11054 = cljs.core.nth.call(null,vec__11036_11052,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___11053,func__8185__auto___11054);
{
var G__11055 = seq__11032_11048;
var G__11056 = chunk__11033_11049;
var G__11057 = count__11034_11050;
var G__11058 = (i__11035_11051 + 1);
seq__11032_11048 = G__11055;
chunk__11033_11049 = G__11056;
count__11034_11050 = G__11057;
i__11035_11051 = G__11058;
continue;
}
} else
{var temp__4092__auto___11059 = cljs.core.seq.call(null,seq__11032_11048);if(temp__4092__auto___11059)
{var seq__11032_11060__$1 = temp__4092__auto___11059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11032_11060__$1))
{var c__7561__auto___11061 = cljs.core.chunk_first.call(null,seq__11032_11060__$1);{
var G__11062 = cljs.core.chunk_rest.call(null,seq__11032_11060__$1);
var G__11063 = c__7561__auto___11061;
var G__11064 = cljs.core.count.call(null,c__7561__auto___11061);
var G__11065 = 0;
seq__11032_11048 = G__11062;
chunk__11033_11049 = G__11063;
count__11034_11050 = G__11064;
i__11035_11051 = G__11065;
continue;
}
} else
{var vec__11037_11066 = cljs.core.first.call(null,seq__11032_11060__$1);var ev__8184__auto___11067 = cljs.core.nth.call(null,vec__11037_11066,0,null);var func__8185__auto___11068 = cljs.core.nth.call(null,vec__11037_11066,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___11067,func__8185__auto___11068);
{
var G__11069 = cljs.core.next.call(null,seq__11032_11060__$1);
var G__11070 = null;
var G__11071 = 0;
var G__11072 = 0;
seq__11032_11048 = G__11069;
chunk__11033_11049 = G__11070;
count__11034_11050 = G__11071;
i__11035_11051 = G__11072;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.ui","test","lt.plugins.gitlight.tests.status.ui/test",1681010124),(function (){return lt.plugins.gitlight.tests.lib.asrt.call(null,"dom-truncate: truncates",(function (){var tn = lt.plugins.gitlight.tests.status.ui.test_node.call(null);lt.plugins.gitlight.common_ui.dom_truncate.call(null,tn);
return cljs.core._EQ_.call(null,tn.innerHTML,"");
})());
}));
}
if(!lt.util.load.provided_QMARK_('')) {
}

//# sourceMappingURL=gitlight_compiled.js.map