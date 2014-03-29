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
lt.plugins.gitlight.common_ui.button = (function button(n,f,fun){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8572_8614 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__8573_8615 = null;var count__8574_8616 = 0;var i__8575_8617 = 0;while(true){
if((i__8575_8617 < count__8574_8616))
{var vec__8576_8618 = cljs.core._nth.call(null,chunk__8573_8615,i__8575_8617);var ev__8184__auto___8619 = cljs.core.nth.call(null,vec__8576_8618,0,null);var func__8185__auto___8620 = cljs.core.nth.call(null,vec__8576_8618,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8619,func__8185__auto___8620);
{
var G__8621 = seq__8572_8614;
var G__8622 = chunk__8573_8615;
var G__8623 = count__8574_8616;
var G__8624 = (i__8575_8617 + 1);
seq__8572_8614 = G__8621;
chunk__8573_8615 = G__8622;
count__8574_8616 = G__8623;
i__8575_8617 = G__8624;
continue;
}
} else
{var temp__4092__auto___8625 = cljs.core.seq.call(null,seq__8572_8614);if(temp__4092__auto___8625)
{var seq__8572_8626__$1 = temp__4092__auto___8625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8572_8626__$1))
{var c__7561__auto___8627 = cljs.core.chunk_first.call(null,seq__8572_8626__$1);{
var G__8628 = cljs.core.chunk_rest.call(null,seq__8572_8626__$1);
var G__8629 = c__7561__auto___8627;
var G__8630 = cljs.core.count.call(null,c__7561__auto___8627);
var G__8631 = 0;
seq__8572_8614 = G__8628;
chunk__8573_8615 = G__8629;
count__8574_8616 = G__8630;
i__8575_8617 = G__8631;
continue;
}
} else
{var vec__8577_8632 = cljs.core.first.call(null,seq__8572_8626__$1);var ev__8184__auto___8633 = cljs.core.nth.call(null,vec__8577_8632,0,null);var func__8185__auto___8634 = cljs.core.nth.call(null,vec__8577_8632,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8633,func__8185__auto___8634);
{
var G__8635 = cljs.core.next.call(null,seq__8572_8626__$1);
var G__8636 = null;
var G__8637 = 0;
var G__8638 = 0;
seq__8572_8614 = G__8635;
chunk__8573_8615 = G__8636;
count__8574_8616 = G__8637;
i__8575_8617 = G__8638;
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
lt.plugins.gitlight.common_ui.classy_button = (function classy_button(cls,n,f,fun){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8584_8639 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__8585_8640 = null;var count__8586_8641 = 0;var i__8587_8642 = 0;while(true){
if((i__8587_8642 < count__8586_8641))
{var vec__8588_8643 = cljs.core._nth.call(null,chunk__8585_8640,i__8587_8642);var ev__8184__auto___8644 = cljs.core.nth.call(null,vec__8588_8643,0,null);var func__8185__auto___8645 = cljs.core.nth.call(null,vec__8588_8643,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8644,func__8185__auto___8645);
{
var G__8646 = seq__8584_8639;
var G__8647 = chunk__8585_8640;
var G__8648 = count__8586_8641;
var G__8649 = (i__8587_8642 + 1);
seq__8584_8639 = G__8646;
chunk__8585_8640 = G__8647;
count__8586_8641 = G__8648;
i__8587_8642 = G__8649;
continue;
}
} else
{var temp__4092__auto___8650 = cljs.core.seq.call(null,seq__8584_8639);if(temp__4092__auto___8650)
{var seq__8584_8651__$1 = temp__4092__auto___8650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8584_8651__$1))
{var c__7561__auto___8652 = cljs.core.chunk_first.call(null,seq__8584_8651__$1);{
var G__8653 = cljs.core.chunk_rest.call(null,seq__8584_8651__$1);
var G__8654 = c__7561__auto___8652;
var G__8655 = cljs.core.count.call(null,c__7561__auto___8652);
var G__8656 = 0;
seq__8584_8639 = G__8653;
chunk__8585_8640 = G__8654;
count__8586_8641 = G__8655;
i__8587_8642 = G__8656;
continue;
}
} else
{var vec__8589_8657 = cljs.core.first.call(null,seq__8584_8651__$1);var ev__8184__auto___8658 = cljs.core.nth.call(null,vec__8589_8657,0,null);var func__8185__auto___8659 = cljs.core.nth.call(null,vec__8589_8657,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8658,func__8185__auto___8659);
{
var G__8660 = cljs.core.next.call(null,seq__8584_8651__$1);
var G__8661 = null;
var G__8662 = 0;
var G__8663 = 0;
seq__8584_8639 = G__8660;
chunk__8585_8640 = G__8661;
count__8586_8641 = G__8662;
i__8587_8642 = G__8663;
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
lt.plugins.gitlight.common_ui.text_input = (function text_input(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"message"], null)], null));var seq__8596_8664 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),(function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
}),new cljs.core.Keyword(null,"blur","blur",1016931289),(function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
})], null)));var chunk__8597_8665 = null;var count__8598_8666 = 0;var i__8599_8667 = 0;while(true){
if((i__8599_8667 < count__8598_8666))
{var vec__8600_8668 = cljs.core._nth.call(null,chunk__8597_8665,i__8599_8667);var ev__8184__auto___8669 = cljs.core.nth.call(null,vec__8600_8668,0,null);var func__8185__auto___8670 = cljs.core.nth.call(null,vec__8600_8668,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8669,func__8185__auto___8670);
{
var G__8671 = seq__8596_8664;
var G__8672 = chunk__8597_8665;
var G__8673 = count__8598_8666;
var G__8674 = (i__8599_8667 + 1);
seq__8596_8664 = G__8671;
chunk__8597_8665 = G__8672;
count__8598_8666 = G__8673;
i__8599_8667 = G__8674;
continue;
}
} else
{var temp__4092__auto___8675 = cljs.core.seq.call(null,seq__8596_8664);if(temp__4092__auto___8675)
{var seq__8596_8676__$1 = temp__4092__auto___8675;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8596_8676__$1))
{var c__7561__auto___8677 = cljs.core.chunk_first.call(null,seq__8596_8676__$1);{
var G__8678 = cljs.core.chunk_rest.call(null,seq__8596_8676__$1);
var G__8679 = c__7561__auto___8677;
var G__8680 = cljs.core.count.call(null,c__7561__auto___8677);
var G__8681 = 0;
seq__8596_8664 = G__8678;
chunk__8597_8665 = G__8679;
count__8598_8666 = G__8680;
i__8599_8667 = G__8681;
continue;
}
} else
{var vec__8601_8682 = cljs.core.first.call(null,seq__8596_8676__$1);var ev__8184__auto___8683 = cljs.core.nth.call(null,vec__8601_8682,0,null);var func__8185__auto___8684 = cljs.core.nth.call(null,vec__8601_8682,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8683,func__8185__auto___8684);
{
var G__8685 = cljs.core.next.call(null,seq__8596_8676__$1);
var G__8686 = null;
var G__8687 = 0;
var G__8688 = 0;
seq__8596_8664 = G__8685;
chunk__8597_8665 = G__8686;
count__8598_8666 = G__8687;
i__8599_8667 = G__8688;
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
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,ui_fun){var vec__8603 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__8603,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__8603,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__8603,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__8603,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__8603,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return ui_fun.call(null,this$);
});})(vec__8603,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);var tab = lt.object.create.call(null,tab_obj);var command_output = lt.plugins.gitlight.common_ui.make_refresh_tab_behavior.call(null,tab,refresh_tab_kwd);return lt.object.create.call(null,lt.object.object_STAR_.call(null,command_output_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gitlight-tab-output","gitlight-tab-output",1332604564),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_output], null)));
});
lt.plugins.gitlight.common_ui.make_button = (function make_button(n,f,fun){return lt.plugins.gitlight.common_ui.button.call(null,n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.make_classy_button = (function make_classy_button(n,f,fun){return lt.plugins.gitlight.common_ui.classy_button.call(null,[cljs.core.str(n)].join(''),n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8689 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8689))
{var ts_8690 = temp__4092__auto___8689;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8690))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8690);
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
lt.plugins.gitlight.history.row = (function row(p__11477){var vec__11480 = p__11477;var cls = cljs.core.nth.call(null,vec__11480,0,null);var vec__11481 = cljs.core.nth.call(null,vec__11480,1,null);var date = cljs.core.nth.call(null,vec__11481,0,null);var command = cljs.core.nth.call(null,vec__11481,1,null);var out = cljs.core.nth.call(null,vec__11481,2,null);if(!((cls == null)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,cls)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),command], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),out], null)], null)], null);
} else
{return null;
}
});
lt.plugins.gitlight.history.ui_fun = (function ui_fun(this$){var e__8183__auto__ = crate.core.html.call(null,(function (){var history = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var reversed = cljs.core.reverse.call(null,cljs.core.deref.call(null,history));var last_ok = cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (history,reversed){
return (function (p1__11482_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),cljs.core.first.call(null,p1__11482_SHARP_));
});})(history,reversed))
,reversed));var last_fail = cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (history,reversed,last_ok){
return (function (p1__11483_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"success","success",3441701749),cljs.core.first.call(null,p1__11483_SHARP_));
});})(history,reversed,last_ok))
,reversed));return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-command-history","div.gitlight-command-history",2639214328),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),"last ok: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.last-ok","table.last-ok",1867294149),lt.plugins.gitlight.history.row.call(null,last_ok)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),"last failed: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.last-fail","table.last-fail",782576967),lt.plugins.gitlight.history.row.call(null,last_fail)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),"history: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.history","table.history",2841343462),cljs.core.map.call(null,lt.plugins.gitlight.history.row,reversed)], null)], null);
})());var seq__11490_11496 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11491_11497 = null;var count__11492_11498 = 0;var i__11493_11499 = 0;while(true){
if((i__11493_11499 < count__11492_11498))
{var vec__11494_11500 = cljs.core._nth.call(null,chunk__11491_11497,i__11493_11499);var ev__8184__auto___11501 = cljs.core.nth.call(null,vec__11494_11500,0,null);var func__8185__auto___11502 = cljs.core.nth.call(null,vec__11494_11500,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___11501,func__8185__auto___11502);
{
var G__11503 = seq__11490_11496;
var G__11504 = chunk__11491_11497;
var G__11505 = count__11492_11498;
var G__11506 = (i__11493_11499 + 1);
seq__11490_11496 = G__11503;
chunk__11491_11497 = G__11504;
count__11492_11498 = G__11505;
i__11493_11499 = G__11506;
continue;
}
} else
{var temp__4092__auto___11507 = cljs.core.seq.call(null,seq__11490_11496);if(temp__4092__auto___11507)
{var seq__11490_11508__$1 = temp__4092__auto___11507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11490_11508__$1))
{var c__7561__auto___11509 = cljs.core.chunk_first.call(null,seq__11490_11508__$1);{
var G__11510 = cljs.core.chunk_rest.call(null,seq__11490_11508__$1);
var G__11511 = c__7561__auto___11509;
var G__11512 = cljs.core.count.call(null,c__7561__auto___11509);
var G__11513 = 0;
seq__11490_11496 = G__11510;
chunk__11491_11497 = G__11511;
count__11492_11498 = G__11512;
i__11493_11499 = G__11513;
continue;
}
} else
{var vec__11495_11514 = cljs.core.first.call(null,seq__11490_11508__$1);var ev__8184__auto___11515 = cljs.core.nth.call(null,vec__11495_11514,0,null);var func__8185__auto___11516 = cljs.core.nth.call(null,vec__11495_11514,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___11515,func__8185__auto___11516);
{
var G__11517 = cljs.core.next.call(null,seq__11490_11508__$1);
var G__11518 = null;
var G__11519 = 0;
var G__11520 = 0;
seq__11490_11496 = G__11517;
chunk__11491_11497 = G__11518;
count__11492_11498 = G__11519;
i__11493_11499 = G__11520;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.history","git-history","lt.plugins.gitlight.history/git-history",1919033520),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: command history",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.gitlight.history.history_tab);
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
git_command_cwd.cljs$lang$applyTo = (function (arglist__10101){
var obj = cljs.core.first(arglist__10101);
arglist__10101 = cljs.core.next(arglist__10101);
var cwd = cljs.core.first(arglist__10101);
var args = cljs.core.rest(arglist__10101);
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
git_command.cljs$lang$applyTo = (function (arglist__10102){
var obj = cljs.core.first(arglist__10102);
var args = cljs.core.rest(arglist__10102);
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
git_command_ignore_out.cljs$lang$applyTo = (function (arglist__10103){
var args = cljs.core.seq(arglist__10103);
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
lt.plugins.gitlight.gutter.make_gutter_marker = (function make_gutter_marker(this$,on_click,content){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gutter-content","div.gutter-content",4072529974),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: "),cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.gutter.gutter_settings))),cljs.core.str("px; "),cljs.core.str("white-space: nowrap; "),cljs.core.str("overflow: hidden;")].join('')], null),content], null));var seq__10110_10117 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return on_click.call(null,content);
})], null)));var chunk__10111_10118 = null;var count__10112_10119 = 0;var i__10113_10120 = 0;while(true){
if((i__10113_10120 < count__10112_10119))
{var vec__10114_10121 = cljs.core._nth.call(null,chunk__10111_10118,i__10113_10120);var ev__8184__auto___10122 = cljs.core.nth.call(null,vec__10114_10121,0,null);var func__8185__auto___10123 = cljs.core.nth.call(null,vec__10114_10121,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10122,func__8185__auto___10123);
{
var G__10124 = seq__10110_10117;
var G__10125 = chunk__10111_10118;
var G__10126 = count__10112_10119;
var G__10127 = (i__10113_10120 + 1);
seq__10110_10117 = G__10124;
chunk__10111_10118 = G__10125;
count__10112_10119 = G__10126;
i__10113_10120 = G__10127;
continue;
}
} else
{var temp__4092__auto___10128 = cljs.core.seq.call(null,seq__10110_10117);if(temp__4092__auto___10128)
{var seq__10110_10129__$1 = temp__4092__auto___10128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10110_10129__$1))
{var c__7561__auto___10130 = cljs.core.chunk_first.call(null,seq__10110_10129__$1);{
var G__10131 = cljs.core.chunk_rest.call(null,seq__10110_10129__$1);
var G__10132 = c__7561__auto___10130;
var G__10133 = cljs.core.count.call(null,c__7561__auto___10130);
var G__10134 = 0;
seq__10110_10117 = G__10131;
chunk__10111_10118 = G__10132;
count__10112_10119 = G__10133;
i__10113_10120 = G__10134;
continue;
}
} else
{var vec__10115_10135 = cljs.core.first.call(null,seq__10110_10129__$1);var ev__8184__auto___10136 = cljs.core.nth.call(null,vec__10115_10135,0,null);var func__8185__auto___10137 = cljs.core.nth.call(null,vec__10115_10135,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10136,func__8185__auto___10137);
{
var G__10138 = cljs.core.next.call(null,seq__10110_10129__$1);
var G__10139 = null;
var G__10140 = 0;
var G__10141 = 0;
seq__10110_10117 = G__10138;
chunk__10111_10118 = G__10139;
count__10112_10119 = G__10140;
i__10113_10120 = G__10141;
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
return (function (p1__10116_SHARP_){return lt.plugins.gitlight.gutter.make_gutter_marker.call(null,this$,cljs.core.println,p1__10116_SHARP_);
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
var gutter_10142 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["gitlight-gutter",null], null), null),gutter_10142))], null));
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
lt.plugins.gitlight.diff.commit_input = (function commit_input(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title","input.title",3943357094),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"size","size",1017434995),81,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit title"], null)], null));var seq__8710_9962 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8711_9963 = null;var count__8712_9964 = 0;var i__8713_9965 = 0;while(true){
if((i__8713_9965 < count__8712_9964))
{var vec__8714_9966 = cljs.core._nth.call(null,chunk__8711_9963,i__8713_9965);var ev__8184__auto___9967 = cljs.core.nth.call(null,vec__8714_9966,0,null);var func__8185__auto___9968 = cljs.core.nth.call(null,vec__8714_9966,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9967,func__8185__auto___9968);
{
var G__9969 = seq__8710_9962;
var G__9970 = chunk__8711_9963;
var G__9971 = count__8712_9964;
var G__9972 = (i__8713_9965 + 1);
seq__8710_9962 = G__9969;
chunk__8711_9963 = G__9970;
count__8712_9964 = G__9971;
i__8713_9965 = G__9972;
continue;
}
} else
{var temp__4092__auto___9973 = cljs.core.seq.call(null,seq__8710_9962);if(temp__4092__auto___9973)
{var seq__8710_9974__$1 = temp__4092__auto___9973;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8710_9974__$1))
{var c__7561__auto___9975 = cljs.core.chunk_first.call(null,seq__8710_9974__$1);{
var G__9976 = cljs.core.chunk_rest.call(null,seq__8710_9974__$1);
var G__9977 = c__7561__auto___9975;
var G__9978 = cljs.core.count.call(null,c__7561__auto___9975);
var G__9979 = 0;
seq__8710_9962 = G__9976;
chunk__8711_9963 = G__9977;
count__8712_9964 = G__9978;
i__8713_9965 = G__9979;
continue;
}
} else
{var vec__8715_9980 = cljs.core.first.call(null,seq__8710_9974__$1);var ev__8184__auto___9981 = cljs.core.nth.call(null,vec__8715_9980,0,null);var func__8185__auto___9982 = cljs.core.nth.call(null,vec__8715_9980,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9981,func__8185__auto___9982);
{
var G__9983 = cljs.core.next.call(null,seq__8710_9974__$1);
var G__9984 = null;
var G__9985 = 0;
var G__9986 = 0;
seq__8710_9962 = G__9983;
chunk__8711_9963 = G__9984;
count__8712_9964 = G__9985;
i__8713_9965 = G__9986;
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
lt.plugins.gitlight.diff.commit_body = (function commit_body(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.body","textarea.body",3433374536),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"commit body",new cljs.core.Keyword(null,"cols","cols",1016963685),81,new cljs.core.Keyword(null,"rows","rows",1017410891),10], null)], null));var seq__8722_9987 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8723_9988 = null;var count__8724_9989 = 0;var i__8725_9990 = 0;while(true){
if((i__8725_9990 < count__8724_9989))
{var vec__8726_9991 = cljs.core._nth.call(null,chunk__8723_9988,i__8725_9990);var ev__8184__auto___9992 = cljs.core.nth.call(null,vec__8726_9991,0,null);var func__8185__auto___9993 = cljs.core.nth.call(null,vec__8726_9991,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9992,func__8185__auto___9993);
{
var G__9994 = seq__8722_9987;
var G__9995 = chunk__8723_9988;
var G__9996 = count__8724_9989;
var G__9997 = (i__8725_9990 + 1);
seq__8722_9987 = G__9994;
chunk__8723_9988 = G__9995;
count__8724_9989 = G__9996;
i__8725_9990 = G__9997;
continue;
}
} else
{var temp__4092__auto___9998 = cljs.core.seq.call(null,seq__8722_9987);if(temp__4092__auto___9998)
{var seq__8722_9999__$1 = temp__4092__auto___9998;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8722_9999__$1))
{var c__7561__auto___10000 = cljs.core.chunk_first.call(null,seq__8722_9999__$1);{
var G__10001 = cljs.core.chunk_rest.call(null,seq__8722_9999__$1);
var G__10002 = c__7561__auto___10000;
var G__10003 = cljs.core.count.call(null,c__7561__auto___10000);
var G__10004 = 0;
seq__8722_9987 = G__10001;
chunk__8723_9988 = G__10002;
count__8724_9989 = G__10003;
i__8725_9990 = G__10004;
continue;
}
} else
{var vec__8727_10005 = cljs.core.first.call(null,seq__8722_9999__$1);var ev__8184__auto___10006 = cljs.core.nth.call(null,vec__8727_10005,0,null);var func__8185__auto___10007 = cljs.core.nth.call(null,vec__8727_10005,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10006,func__8185__auto___10007);
{
var G__10008 = cljs.core.next.call(null,seq__8722_9999__$1);
var G__10009 = null;
var G__10010 = 0;
var G__10011 = 0;
seq__8722_9987 = G__10008;
chunk__8723_9988 = G__10009;
count__8724_9989 = G__10010;
i__8725_9990 = G__10011;
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
lt.plugins.gitlight.diff.diff_panel = (function diff_panel(this$){var e__8183__auto__ = crate.core.html.call(null,(function (){var output = new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-diff","div.gitlight-diff",3415869571),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"diff: ",((cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename)))?"whole repo":cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename))], null),lt.plugins.gitlight.diff.make_context.call(null),lt.plugins.gitlight.diff.make_more_context.call(null),lt.plugins.gitlight.diff.cached_toggle_button.call(null),(cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_cached))?lt.plugins.gitlight.diff.make_commit_form.call(null):null),(function (){var iter__7530__auto__ = ((function (output){
return (function iter__9330(s__9331){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__9331__$1 = s__9331;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9331__$1);if(temp__4092__auto__)
{var s__9331__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9331__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9331__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9333 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9332 = 0;while(true){
if((i__9332 < size__7529__auto__))
{var file = cljs.core._nth.call(null,c__7528__auto__,i__9332);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);cljs.core.chunk_append.call(null,b__9333,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9332,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function iter__9630(s__9631){return (new cljs.core.LazySeq(null,((function (i__9332,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9631__$1 = s__9631;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9631__$1);if(temp__4092__auto____$1)
{var s__9631__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9631__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9631__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9633 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9632 = 0;while(true){
if((i__9632 < size__7529__auto____$1))
{var changes_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9632);cljs.core.chunk_append.call(null,b__9633,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9632,i__9332,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function iter__9706(s__9707){return (new cljs.core.LazySeq(null,((function (i__9632,i__9332,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9707__$1 = s__9707;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9707__$1);if(temp__4092__auto____$2)
{var s__9707__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9707__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9707__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9709 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9708 = 0;while(true){
if((i__9708 < size__7529__auto____$2))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$2,i__9708);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9709,(function (){var iter__7530__auto__ = ((function (i__9708,i__9632,i__9332,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9709,s__9707__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function iter__9726(s__9727){return (new cljs.core.LazySeq(null,((function (i__9708,i__9632,i__9332,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9709,s__9707__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9727__$1 = s__9727;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9727__$1);if(temp__4092__auto____$3)
{var s__9727__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9727__$2))
{var c__7528__auto____$3 = cljs.core.chunk_first.call(null,s__9727__$2);var size__7529__auto____$3 = cljs.core.count.call(null,c__7528__auto____$3);var b__9729 = cljs.core.chunk_buffer.call(null,size__7529__auto____$3);if((function (){var i__9728 = 0;while(true){
if((i__9728 < size__7529__auto____$3))
{var vec__9732 = cljs.core._nth.call(null,c__7528__auto____$3,i__9728);var left = cljs.core.nth.call(null,vec__9732,0,null);var right = cljs.core.nth.call(null,vec__9732,1,null);cljs.core.chunk_append.call(null,b__9729,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10012 = (i__9728 + 1);
i__9728 = G__10012;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9729),iter__9726.call(null,cljs.core.chunk_rest.call(null,s__9727__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9729),null);
}
} else
{var vec__9733 = cljs.core.first.call(null,s__9727__$2);var left = cljs.core.nth.call(null,vec__9733,0,null);var right = cljs.core.nth.call(null,vec__9733,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9726.call(null,cljs.core.rest.call(null,s__9727__$2)));
}
} else
{return null;
}
break;
}
});})(i__9708,i__9632,i__9332,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9709,s__9707__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(i__9708,i__9632,i__9332,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9709,s__9707__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10013 = (i__9708 + 1);
i__9708 = G__10013;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9709),iter__9706.call(null,cljs.core.chunk_rest.call(null,s__9707__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9709),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9707__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9632,i__9332,columned,c,columns,line_group,s__9707__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function iter__9734(s__9735){return (new cljs.core.LazySeq(null,((function (i__9632,i__9332,columned,c,columns,line_group,s__9707__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9735__$1 = s__9735;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9735__$1);if(temp__4092__auto____$3)
{var s__9735__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9735__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9735__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9737 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9736 = 0;while(true){
if((i__9736 < size__7529__auto____$2))
{var vec__9740 = cljs.core._nth.call(null,c__7528__auto____$2,i__9736);var left = cljs.core.nth.call(null,vec__9740,0,null);var right = cljs.core.nth.call(null,vec__9740,1,null);cljs.core.chunk_append.call(null,b__9737,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10014 = (i__9736 + 1);
i__9736 = G__10014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9737),iter__9734.call(null,cljs.core.chunk_rest.call(null,s__9735__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9737),null);
}
} else
{var vec__9741 = cljs.core.first.call(null,s__9735__$2);var left = cljs.core.nth.call(null,vec__9741,0,null);var right = cljs.core.nth.call(null,vec__9741,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9734.call(null,cljs.core.rest.call(null,s__9735__$2)));
}
} else
{return null;
}
break;
}
});})(i__9632,i__9332,columned,c,columns,line_group,s__9707__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(i__9632,i__9332,columned,c,columns,line_group,s__9707__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9706.call(null,cljs.core.rest.call(null,s__9707__$2)));
}
} else
{return null;
}
break;
}
});})(i__9632,i__9332,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(i__9632,i__9332,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9633,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__10015 = (i__9632 + 1);
i__9632 = G__10015;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9633),iter__9630.call(null,cljs.core.chunk_rest.call(null,s__9631__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9633),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9631__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9332,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function iter__9742(s__9743){return (new cljs.core.LazySeq(null,((function (i__9332,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9743__$1 = s__9743;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9743__$1);if(temp__4092__auto____$2)
{var s__9743__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9743__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9743__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9745 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9744 = 0;while(true){
if((i__9744 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9744);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9745,(function (){var iter__7530__auto__ = ((function (i__9744,i__9332,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9745,s__9743__$2,temp__4092__auto____$2,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function iter__9762(s__9763){return (new cljs.core.LazySeq(null,((function (i__9744,i__9332,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9745,s__9743__$2,temp__4092__auto____$2,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9763__$1 = s__9763;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9763__$1);if(temp__4092__auto____$3)
{var s__9763__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9763__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9763__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9765 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9764 = 0;while(true){
if((i__9764 < size__7529__auto____$2))
{var vec__9768 = cljs.core._nth.call(null,c__7528__auto____$2,i__9764);var left = cljs.core.nth.call(null,vec__9768,0,null);var right = cljs.core.nth.call(null,vec__9768,1,null);cljs.core.chunk_append.call(null,b__9765,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10016 = (i__9764 + 1);
i__9764 = G__10016;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9765),iter__9762.call(null,cljs.core.chunk_rest.call(null,s__9763__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9765),null);
}
} else
{var vec__9769 = cljs.core.first.call(null,s__9763__$2);var left = cljs.core.nth.call(null,vec__9769,0,null);var right = cljs.core.nth.call(null,vec__9769,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9762.call(null,cljs.core.rest.call(null,s__9763__$2)));
}
} else
{return null;
}
break;
}
});})(i__9744,i__9332,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9745,s__9743__$2,temp__4092__auto____$2,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(i__9744,i__9332,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9745,s__9743__$2,temp__4092__auto____$2,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10017 = (i__9744 + 1);
i__9744 = G__10017;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9745),iter__9742.call(null,cljs.core.chunk_rest.call(null,s__9743__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9745),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9743__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9332,columned,c,columns,line_group,s__9743__$2,temp__4092__auto____$2,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function iter__9770(s__9771){return (new cljs.core.LazySeq(null,((function (i__9332,columned,c,columns,line_group,s__9743__$2,temp__4092__auto____$2,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9771__$1 = s__9771;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9771__$1);if(temp__4092__auto____$3)
{var s__9771__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9771__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9771__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9773 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9772 = 0;while(true){
if((i__9772 < size__7529__auto____$1))
{var vec__9776 = cljs.core._nth.call(null,c__7528__auto____$1,i__9772);var left = cljs.core.nth.call(null,vec__9776,0,null);var right = cljs.core.nth.call(null,vec__9776,1,null);cljs.core.chunk_append.call(null,b__9773,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10018 = (i__9772 + 1);
i__9772 = G__10018;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9773),iter__9770.call(null,cljs.core.chunk_rest.call(null,s__9771__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9773),null);
}
} else
{var vec__9777 = cljs.core.first.call(null,s__9771__$2);var left = cljs.core.nth.call(null,vec__9777,0,null);var right = cljs.core.nth.call(null,vec__9777,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9770.call(null,cljs.core.rest.call(null,s__9771__$2)));
}
} else
{return null;
}
break;
}
});})(i__9332,columned,c,columns,line_group,s__9743__$2,temp__4092__auto____$2,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(i__9332,columned,c,columns,line_group,s__9743__$2,temp__4092__auto____$2,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9742.call(null,cljs.core.rest.call(null,s__9743__$2)));
}
} else
{return null;
}
break;
}
});})(i__9332,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(i__9332,changes_group,s__9631__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9630.call(null,cljs.core.rest.call(null,s__9631__$2)));
}
} else
{return null;
}
break;
}
});})(i__9332,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(i__9332,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9333,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null));
{
var G__10019 = (i__9332 + 1);
i__9332 = G__10019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9333),iter__9330.call(null,cljs.core.chunk_rest.call(null,s__9331__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9333),null);
}
} else
{var file = cljs.core.first.call(null,s__9331__$2);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function iter__9778(s__9779){return (new cljs.core.LazySeq(null,((function (filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9779__$1 = s__9779;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9779__$1);if(temp__4092__auto____$1)
{var s__9779__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9779__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9779__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9781 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9780 = 0;while(true){
if((i__9780 < size__7529__auto__))
{var changes_group = cljs.core._nth.call(null,c__7528__auto__,i__9780);cljs.core.chunk_append.call(null,b__9781,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9780,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function iter__9854(s__9855){return (new cljs.core.LazySeq(null,((function (i__9780,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9855__$1 = s__9855;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9855__$1);if(temp__4092__auto____$2)
{var s__9855__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9855__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9855__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9857 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9856 = 0;while(true){
if((i__9856 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9856);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9857,(function (){var iter__7530__auto__ = ((function (i__9856,i__9780,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9857,s__9855__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function iter__9874(s__9875){return (new cljs.core.LazySeq(null,((function (i__9856,i__9780,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9857,s__9855__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9875__$1 = s__9875;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9875__$1);if(temp__4092__auto____$3)
{var s__9875__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9875__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9875__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9877 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9876 = 0;while(true){
if((i__9876 < size__7529__auto____$2))
{var vec__9880 = cljs.core._nth.call(null,c__7528__auto____$2,i__9876);var left = cljs.core.nth.call(null,vec__9880,0,null);var right = cljs.core.nth.call(null,vec__9880,1,null);cljs.core.chunk_append.call(null,b__9877,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10020 = (i__9876 + 1);
i__9876 = G__10020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9877),iter__9874.call(null,cljs.core.chunk_rest.call(null,s__9875__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9877),null);
}
} else
{var vec__9881 = cljs.core.first.call(null,s__9875__$2);var left = cljs.core.nth.call(null,vec__9881,0,null);var right = cljs.core.nth.call(null,vec__9881,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9874.call(null,cljs.core.rest.call(null,s__9875__$2)));
}
} else
{return null;
}
break;
}
});})(i__9856,i__9780,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9857,s__9855__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(i__9856,i__9780,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9857,s__9855__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10021 = (i__9856 + 1);
i__9856 = G__10021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9857),iter__9854.call(null,cljs.core.chunk_rest.call(null,s__9855__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9857),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9855__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9780,columned,c,columns,line_group,s__9855__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function iter__9882(s__9883){return (new cljs.core.LazySeq(null,((function (i__9780,columned,c,columns,line_group,s__9855__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9883__$1 = s__9883;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9883__$1);if(temp__4092__auto____$3)
{var s__9883__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9883__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9883__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9885 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9884 = 0;while(true){
if((i__9884 < size__7529__auto____$1))
{var vec__9888 = cljs.core._nth.call(null,c__7528__auto____$1,i__9884);var left = cljs.core.nth.call(null,vec__9888,0,null);var right = cljs.core.nth.call(null,vec__9888,1,null);cljs.core.chunk_append.call(null,b__9885,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10022 = (i__9884 + 1);
i__9884 = G__10022;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9885),iter__9882.call(null,cljs.core.chunk_rest.call(null,s__9883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9885),null);
}
} else
{var vec__9889 = cljs.core.first.call(null,s__9883__$2);var left = cljs.core.nth.call(null,vec__9889,0,null);var right = cljs.core.nth.call(null,vec__9889,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9882.call(null,cljs.core.rest.call(null,s__9883__$2)));
}
} else
{return null;
}
break;
}
});})(i__9780,columned,c,columns,line_group,s__9855__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(i__9780,columned,c,columns,line_group,s__9855__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9854.call(null,cljs.core.rest.call(null,s__9855__$2)));
}
} else
{return null;
}
break;
}
});})(i__9780,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(i__9780,changes_group,c__7528__auto__,size__7529__auto__,b__9781,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__10023 = (i__9780 + 1);
i__9780 = G__10023;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9781),iter__9778.call(null,cljs.core.chunk_rest.call(null,s__9779__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9781),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9779__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function iter__9890(s__9891){return (new cljs.core.LazySeq(null,((function (changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9891__$1 = s__9891;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9891__$1);if(temp__4092__auto____$2)
{var s__9891__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9891__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9891__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9893 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9892 = 0;while(true){
if((i__9892 < size__7529__auto__))
{var line_group = cljs.core._nth.call(null,c__7528__auto__,i__9892);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9893,(function (){var iter__7530__auto__ = ((function (i__9892,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9893,s__9891__$2,temp__4092__auto____$2,changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function iter__9910(s__9911){return (new cljs.core.LazySeq(null,((function (i__9892,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9893,s__9891__$2,temp__4092__auto____$2,changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9911__$1 = s__9911;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9911__$1);if(temp__4092__auto____$3)
{var s__9911__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9911__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9911__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9913 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9912 = 0;while(true){
if((i__9912 < size__7529__auto____$1))
{var vec__9916 = cljs.core._nth.call(null,c__7528__auto____$1,i__9912);var left = cljs.core.nth.call(null,vec__9916,0,null);var right = cljs.core.nth.call(null,vec__9916,1,null);cljs.core.chunk_append.call(null,b__9913,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10024 = (i__9912 + 1);
i__9912 = G__10024;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9913),iter__9910.call(null,cljs.core.chunk_rest.call(null,s__9911__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9913),null);
}
} else
{var vec__9917 = cljs.core.first.call(null,s__9911__$2);var left = cljs.core.nth.call(null,vec__9917,0,null);var right = cljs.core.nth.call(null,vec__9917,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9910.call(null,cljs.core.rest.call(null,s__9911__$2)));
}
} else
{return null;
}
break;
}
});})(i__9892,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9893,s__9891__$2,temp__4092__auto____$2,changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(i__9892,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9893,s__9891__$2,temp__4092__auto____$2,changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10025 = (i__9892 + 1);
i__9892 = G__10025;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9893),iter__9890.call(null,cljs.core.chunk_rest.call(null,s__9891__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9893),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9891__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (columned,c,columns,line_group,s__9891__$2,temp__4092__auto____$2,changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function iter__9918(s__9919){return (new cljs.core.LazySeq(null,((function (columned,c,columns,line_group,s__9891__$2,temp__4092__auto____$2,changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output){
return (function (){var s__9919__$1 = s__9919;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9919__$1);if(temp__4092__auto____$3)
{var s__9919__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9919__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9919__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9921 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9920 = 0;while(true){
if((i__9920 < size__7529__auto__))
{var vec__9924 = cljs.core._nth.call(null,c__7528__auto__,i__9920);var left = cljs.core.nth.call(null,vec__9924,0,null);var right = cljs.core.nth.call(null,vec__9924,1,null);cljs.core.chunk_append.call(null,b__9921,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10026 = (i__9920 + 1);
i__9920 = G__10026;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9921),iter__9918.call(null,cljs.core.chunk_rest.call(null,s__9919__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9921),null);
}
} else
{var vec__9925 = cljs.core.first.call(null,s__9919__$2);var left = cljs.core.nth.call(null,vec__9925,0,null);var right = cljs.core.nth.call(null,vec__9925,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9918.call(null,cljs.core.rest.call(null,s__9919__$2)));
}
} else
{return null;
}
break;
}
});})(columned,c,columns,line_group,s__9891__$2,temp__4092__auto____$2,changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(columned,c,columns,line_group,s__9891__$2,temp__4092__auto____$2,changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9890.call(null,cljs.core.rest.call(null,s__9891__$2)));
}
} else
{return null;
}
break;
}
});})(changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(changes_group,s__9779__$2,temp__4092__auto____$1,filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9778.call(null,cljs.core.rest.call(null,s__9779__$2)));
}
} else
{return null;
}
break;
}
});})(filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
,null,null));
});})(filename,file_diff,file,s__9331__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null),iter__9330.call(null,cljs.core.rest.call(null,s__9331__$2)));
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
})());var seq__9926_10027 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9927_10028 = null;var count__9928_10029 = 0;var i__9929_10030 = 0;while(true){
if((i__9929_10030 < count__9928_10029))
{var vec__9930_10031 = cljs.core._nth.call(null,chunk__9927_10028,i__9929_10030);var ev__8184__auto___10032 = cljs.core.nth.call(null,vec__9930_10031,0,null);var func__8185__auto___10033 = cljs.core.nth.call(null,vec__9930_10031,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10032,func__8185__auto___10033);
{
var G__10034 = seq__9926_10027;
var G__10035 = chunk__9927_10028;
var G__10036 = count__9928_10029;
var G__10037 = (i__9929_10030 + 1);
seq__9926_10027 = G__10034;
chunk__9927_10028 = G__10035;
count__9928_10029 = G__10036;
i__9929_10030 = G__10037;
continue;
}
} else
{var temp__4092__auto___10038 = cljs.core.seq.call(null,seq__9926_10027);if(temp__4092__auto___10038)
{var seq__9926_10039__$1 = temp__4092__auto___10038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9926_10039__$1))
{var c__7561__auto___10040 = cljs.core.chunk_first.call(null,seq__9926_10039__$1);{
var G__10041 = cljs.core.chunk_rest.call(null,seq__9926_10039__$1);
var G__10042 = c__7561__auto___10040;
var G__10043 = cljs.core.count.call(null,c__7561__auto___10040);
var G__10044 = 0;
seq__9926_10027 = G__10041;
chunk__9927_10028 = G__10042;
count__9928_10029 = G__10043;
i__9929_10030 = G__10044;
continue;
}
} else
{var vec__9931_10045 = cljs.core.first.call(null,seq__9926_10039__$1);var ev__8184__auto___10046 = cljs.core.nth.call(null,vec__9931_10045,0,null);var func__8185__auto___10047 = cljs.core.nth.call(null,vec__9931_10045,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10046,func__8185__auto___10047);
{
var G__10048 = cljs.core.next.call(null,seq__9926_10039__$1);
var G__10049 = null;
var G__10050 = 0;
var G__10051 = 0;
seq__9926_10027 = G__10048;
chunk__9927_10028 = G__10049;
count__9928_10029 = G__10050;
i__9929_10030 = G__10051;
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
lt.plugins.gitlight.diff.separate = (function separate(fun,coll){return cljs.core.reduce.call(null,(function (p__9934,line){var vec__9935 = p__9934;var left = cljs.core.nth.call(null,vec__9935,0,null);var right = cljs.core.nth.call(null,vec__9935,1,null);if(cljs.core.truth_(fun.call(null,line)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,left,line),right], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,cljs.core.conj.call(null,right,line)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),coll);
});
lt.plugins.gitlight.diff.columner = (function columner(lines){if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"context",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,lines,lines)], null);
} else
{var vec__9938 = lt.plugins.gitlight.diff.separate.call(null,(function (p1__9936_SHARP_){return cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p1__9936_SHARP_));
}),lines);var left = cljs.core.nth.call(null,vec__9938,0,null);var right = cljs.core.nth.call(null,vec__9938,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"changed",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,left,right)], null);
}
});
lt.plugins.gitlight.diff.split_into_headered_groups = (function split_into_headered_groups(lines,fun,result_fun,headkey,contkey){if(!(cljs.core.empty_QMARK_.call(null,lines)))
{var fst = cljs.core.first.call(null,lines);var vec__9940 = cljs.core.split_with.call(null,fun,cljs.core.rest.call(null,lines));var content = cljs.core.nth.call(null,vec__9940,0,null);var leftovers = cljs.core.nth.call(null,vec__9940,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([headkey,fst,contkey,result_fun.call(null,content)], true, false),split_into_headered_groups.call(null,leftovers,fun,result_fun,headkey,contkey));
} else
{return null;
}
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,x));
}),(function (x){return cljs.core.partition_by.call(null,(function (p1__9941_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__9941_SHARP_));
}),x);
}),new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.Keyword(null,"content","content",1965434859));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(data){var vec__9943 = cljs.core.take.call(null,3,data);var header = cljs.core.nth.call(null,vec__9943,0,null);var left = cljs.core.nth.call(null,vec__9943,1,null);var right = cljs.core.nth.call(null,vec__9943,2,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,cljs.core.drop.call(null,3,data));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),header,new cljs.core.Keyword(null,"left","left",1017222009),left,new cljs.core.Keyword(null,"right","right",1122416014),right,new cljs.core.Keyword(null,"groups","groups",4071411014),groups], null);
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
lt.plugins.gitlight.diff.side_by_side = (function side_by_side(firsts){var partitioned = cljs.core.partition_by.call(null,cljs.core.first,firsts);return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__9948,part){var vec__9949 = p__9948;var ok = cljs.core.nth.call(null,vec__9949,0,null);var stack = cljs.core.nth.call(null,vec__9949,1,null);var vec__9950 = cljs.core.split_at.call(null,1,part);var fst = cljs.core.nth.call(null,vec__9950,0,null);var rst = cljs.core.nth.call(null,vec__9950,1,null);var left = cljs.core.count.call(null,stack);var right = cljs.core.count.call(null,part);var G__9951 = cljs.core.first.call(null,fst);if(cljs.core._EQ_.call(null,"\\",G__9951))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok,part], null);
} else
{if(cljs.core._EQ_.call(null,"+",G__9951))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,ok,cljs.core.map.call(null,cljs.core.str,part,stack),cljs.core.repeat.call(null,(right - left),"+")),cljs.core.repeat.call(null,(left - right),"-")], null);
} else
{if(cljs.core._EQ_.call(null,"-",G__9951))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok,part], null);
} else
{if(cljs.core._EQ_.call(null," ",G__9951))
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
lt.plugins.gitlight.branch.branch_panel = (function branch_panel(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-branches","div.gitlight-branches",1801709646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Branches"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7530__auto__ = (function iter__8398(s__8399){return (new cljs.core.LazySeq(null,(function (){var s__8399__$1 = s__8399;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8399__$1);if(temp__4092__auto__)
{var s__8399__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8399__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__8399__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__8401 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__8400 = 0;while(true){
if((i__8400 < size__7529__auto__))
{var parsed = cljs.core._nth.call(null,c__7528__auto__,i__8400);var vec__8406 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__8406,0,null);var vec__8407 = cljs.core.nth.call(null,vec__8406,1,null);var branch = cljs.core.nth.call(null,vec__8407,0,null);var sha1 = cljs.core.nth.call(null,vec__8407,1,null);var desc = cljs.core.nth.call(null,vec__8407,2,null);cljs.core.chunk_append.call(null,b__8401,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":lt.plugins.gitlight.branch.delete_branch_button.call(null,branch))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null));
{
var G__8426 = (i__8400 + 1);
i__8400 = G__8426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8401),iter__8398.call(null,cljs.core.chunk_rest.call(null,s__8399__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8401),null);
}
} else
{var parsed = cljs.core.first.call(null,s__8399__$2);var vec__8408 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__8408,0,null);var vec__8409 = cljs.core.nth.call(null,vec__8408,1,null);var branch = cljs.core.nth.call(null,vec__8409,0,null);var sha1 = cljs.core.nth.call(null,vec__8409,1,null);var desc = cljs.core.nth.call(null,vec__8409,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":lt.plugins.gitlight.branch.delete_branch_button.call(null,branch))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null),iter__8398.call(null,cljs.core.rest.call(null,s__8399__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,lt.plugins.gitlight.branch.parse_data.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.new-branch","td.new-branch",3433852959),lt.plugins.gitlight.branch.new_branch_button.call(null)], null)], null)], null)], null));var seq__8410_8427 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8411_8428 = null;var count__8412_8429 = 0;var i__8413_8430 = 0;while(true){
if((i__8413_8430 < count__8412_8429))
{var vec__8414_8431 = cljs.core._nth.call(null,chunk__8411_8428,i__8413_8430);var ev__8184__auto___8432 = cljs.core.nth.call(null,vec__8414_8431,0,null);var func__8185__auto___8433 = cljs.core.nth.call(null,vec__8414_8431,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8432,func__8185__auto___8433);
{
var G__8434 = seq__8410_8427;
var G__8435 = chunk__8411_8428;
var G__8436 = count__8412_8429;
var G__8437 = (i__8413_8430 + 1);
seq__8410_8427 = G__8434;
chunk__8411_8428 = G__8435;
count__8412_8429 = G__8436;
i__8413_8430 = G__8437;
continue;
}
} else
{var temp__4092__auto___8438 = cljs.core.seq.call(null,seq__8410_8427);if(temp__4092__auto___8438)
{var seq__8410_8439__$1 = temp__4092__auto___8438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8410_8439__$1))
{var c__7561__auto___8440 = cljs.core.chunk_first.call(null,seq__8410_8439__$1);{
var G__8441 = cljs.core.chunk_rest.call(null,seq__8410_8439__$1);
var G__8442 = c__7561__auto___8440;
var G__8443 = cljs.core.count.call(null,c__7561__auto___8440);
var G__8444 = 0;
seq__8410_8427 = G__8441;
chunk__8411_8428 = G__8442;
count__8412_8429 = G__8443;
i__8413_8430 = G__8444;
continue;
}
} else
{var vec__8415_8445 = cljs.core.first.call(null,seq__8410_8439__$1);var ev__8184__auto___8446 = cljs.core.nth.call(null,vec__8415_8445,0,null);var func__8185__auto___8447 = cljs.core.nth.call(null,vec__8415_8445,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8446,func__8185__auto___8447);
{
var G__8448 = cljs.core.next.call(null,seq__8410_8439__$1);
var G__8449 = null;
var G__8450 = 0;
var G__8451 = 0;
seq__8410_8427 = G__8448;
chunk__8411_8428 = G__8449;
count__8412_8429 = G__8450;
i__8413_8430 = G__8451;
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__10745){var vec__10761 = p__10745;var f = cljs.core.nth.call(null,vec__10761,0,null);var t = cljs.core.nth.call(null,vec__10761,1,null);var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,f,f,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10762(s__10763){return (new cljs.core.LazySeq(null,(function (){var s__10763__$1 = s__10763;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10763__$1);if(temp__4092__auto__)
{var s__10763__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10763__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10763__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10765 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10764 = 0;while(true){
if((i__10764 < size__7529__auto__))
{var vec__10768 = cljs.core._nth.call(null,c__7528__auto__,i__10764);var bt = cljs.core.nth.call(null,vec__10768,0,null);var fun = cljs.core.nth.call(null,vec__10768,1,null);cljs.core.chunk_append.call(null,b__10765,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun));
{
var G__10900 = (i__10764 + 1);
i__10764 = G__10900;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10765),iter__10762.call(null,cljs.core.chunk_rest.call(null,s__10763__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10765),null);
}
} else
{var vec__10769 = cljs.core.first.call(null,s__10763__$2);var bt = cljs.core.nth.call(null,vec__10769,0,null);var fun = cljs.core.nth.call(null,vec__10769,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun),iter__10762.call(null,cljs.core.rest.call(null,s__10763__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__10770_10901 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10771_10902 = null;var count__10772_10903 = 0;var i__10773_10904 = 0;while(true){
if((i__10773_10904 < count__10772_10903))
{var vec__10774_10905 = cljs.core._nth.call(null,chunk__10771_10902,i__10773_10904);var ev__8184__auto___10906 = cljs.core.nth.call(null,vec__10774_10905,0,null);var func__8185__auto___10907 = cljs.core.nth.call(null,vec__10774_10905,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10906,func__8185__auto___10907);
{
var G__10908 = seq__10770_10901;
var G__10909 = chunk__10771_10902;
var G__10910 = count__10772_10903;
var G__10911 = (i__10773_10904 + 1);
seq__10770_10901 = G__10908;
chunk__10771_10902 = G__10909;
count__10772_10903 = G__10910;
i__10773_10904 = G__10911;
continue;
}
} else
{var temp__4092__auto___10912 = cljs.core.seq.call(null,seq__10770_10901);if(temp__4092__auto___10912)
{var seq__10770_10913__$1 = temp__4092__auto___10912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10770_10913__$1))
{var c__7561__auto___10914 = cljs.core.chunk_first.call(null,seq__10770_10913__$1);{
var G__10915 = cljs.core.chunk_rest.call(null,seq__10770_10913__$1);
var G__10916 = c__7561__auto___10914;
var G__10917 = cljs.core.count.call(null,c__7561__auto___10914);
var G__10918 = 0;
seq__10770_10901 = G__10915;
chunk__10771_10902 = G__10916;
count__10772_10903 = G__10917;
i__10773_10904 = G__10918;
continue;
}
} else
{var vec__10775_10919 = cljs.core.first.call(null,seq__10770_10913__$1);var ev__8184__auto___10920 = cljs.core.nth.call(null,vec__10775_10919,0,null);var func__8185__auto___10921 = cljs.core.nth.call(null,vec__10775_10919,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10920,func__8185__auto___10921);
{
var G__10922 = cljs.core.next.call(null,seq__10770_10913__$1);
var G__10923 = null;
var G__10924 = 0;
var G__10925 = 0;
seq__10770_10901 = G__10922;
chunk__10771_10902 = G__10923;
count__10772_10903 = G__10924;
i__10773_10904 = G__10925;
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__10782_10926 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10783_10927 = null;var count__10784_10928 = 0;var i__10785_10929 = 0;while(true){
if((i__10785_10929 < count__10784_10928))
{var vec__10786_10930 = cljs.core._nth.call(null,chunk__10783_10927,i__10785_10929);var ev__8184__auto___10931 = cljs.core.nth.call(null,vec__10786_10930,0,null);var func__8185__auto___10932 = cljs.core.nth.call(null,vec__10786_10930,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10931,func__8185__auto___10932);
{
var G__10933 = seq__10782_10926;
var G__10934 = chunk__10783_10927;
var G__10935 = count__10784_10928;
var G__10936 = (i__10785_10929 + 1);
seq__10782_10926 = G__10933;
chunk__10783_10927 = G__10934;
count__10784_10928 = G__10935;
i__10785_10929 = G__10936;
continue;
}
} else
{var temp__4092__auto___10937 = cljs.core.seq.call(null,seq__10782_10926);if(temp__4092__auto___10937)
{var seq__10782_10938__$1 = temp__4092__auto___10937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10782_10938__$1))
{var c__7561__auto___10939 = cljs.core.chunk_first.call(null,seq__10782_10938__$1);{
var G__10940 = cljs.core.chunk_rest.call(null,seq__10782_10938__$1);
var G__10941 = c__7561__auto___10939;
var G__10942 = cljs.core.count.call(null,c__7561__auto___10939);
var G__10943 = 0;
seq__10782_10926 = G__10940;
chunk__10783_10927 = G__10941;
count__10784_10928 = G__10942;
i__10785_10929 = G__10943;
continue;
}
} else
{var vec__10787_10944 = cljs.core.first.call(null,seq__10782_10938__$1);var ev__8184__auto___10945 = cljs.core.nth.call(null,vec__10787_10944,0,null);var func__8185__auto___10946 = cljs.core.nth.call(null,vec__10787_10944,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10945,func__8185__auto___10946);
{
var G__10947 = cljs.core.next.call(null,seq__10782_10938__$1);
var G__10948 = null;
var G__10949 = 0;
var G__10950 = 0;
seq__10782_10926 = G__10947;
chunk__10783_10927 = G__10948;
count__10784_10928 = G__10949;
i__10785_10929 = G__10950;
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
}))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10838(s__10839){return (new cljs.core.LazySeq(null,(function (){var s__10839__$1 = s__10839;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10839__$1);if(temp__4092__auto__)
{var s__10839__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10839__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10839__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10841 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10840 = 0;while(true){
if((i__10840 < size__7529__auto__))
{var option_group = cljs.core._nth.call(null,c__7528__auto__,i__10840);cljs.core.chunk_append.call(null,b__10841,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7530__auto__ = ((function (i__10840,option_group,c__7528__auto__,size__7529__auto__,b__10841,s__10839__$2,temp__4092__auto__){
return (function iter__10858(s__10859){return (new cljs.core.LazySeq(null,((function (i__10840,option_group,c__7528__auto__,size__7529__auto__,b__10841,s__10839__$2,temp__4092__auto__){
return (function (){var s__10859__$1 = s__10859;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10859__$1);if(temp__4092__auto____$1)
{var s__10859__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10859__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__10859__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__10861 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__10860 = 0;while(true){
if((i__10860 < size__7529__auto____$1))
{var vec__10864 = cljs.core._nth.call(null,c__7528__auto____$1,i__10860);var bname = cljs.core.nth.call(null,vec__10864,0,null);var fun = cljs.core.nth.call(null,vec__10864,1,null);cljs.core.chunk_append.call(null,b__10861,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10951 = (i__10860 + 1);
i__10860 = G__10951;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10861),iter__10858.call(null,cljs.core.chunk_rest.call(null,s__10859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10861),null);
}
} else
{var vec__10865 = cljs.core.first.call(null,s__10859__$2);var bname = cljs.core.nth.call(null,vec__10865,0,null);var fun = cljs.core.nth.call(null,vec__10865,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10858.call(null,cljs.core.rest.call(null,s__10859__$2)));
}
} else
{return null;
}
break;
}
});})(i__10840,option_group,c__7528__auto__,size__7529__auto__,b__10841,s__10839__$2,temp__4092__auto__))
,null,null));
});})(i__10840,option_group,c__7528__auto__,size__7529__auto__,b__10841,s__10839__$2,temp__4092__auto__))
;return iter__7530__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null));
{
var G__10952 = (i__10840 + 1);
i__10840 = G__10952;
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
{var option_group = cljs.core.first.call(null,s__10839__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7530__auto__ = ((function (option_group,s__10839__$2,temp__4092__auto__){
return (function iter__10866(s__10867){return (new cljs.core.LazySeq(null,((function (option_group,s__10839__$2,temp__4092__auto__){
return (function (){var s__10867__$1 = s__10867;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10867__$1);if(temp__4092__auto____$1)
{var s__10867__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10867__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10867__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10869 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10868 = 0;while(true){
if((i__10868 < size__7529__auto__))
{var vec__10872 = cljs.core._nth.call(null,c__7528__auto__,i__10868);var bname = cljs.core.nth.call(null,vec__10872,0,null);var fun = cljs.core.nth.call(null,vec__10872,1,null);cljs.core.chunk_append.call(null,b__10869,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10953 = (i__10868 + 1);
i__10868 = G__10953;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10869),iter__10866.call(null,cljs.core.chunk_rest.call(null,s__10867__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10869),null);
}
} else
{var vec__10873 = cljs.core.first.call(null,s__10867__$2);var bname = cljs.core.nth.call(null,vec__10873,0,null);var fun = cljs.core.nth.call(null,vec__10873,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10866.call(null,cljs.core.rest.call(null,s__10867__$2)));
}
} else
{return null;
}
break;
}
});})(option_group,s__10839__$2,temp__4092__auto__))
,null,null));
});})(option_group,s__10839__$2,temp__4092__auto__))
;return iter__7530__auto__.call(null,cljs.core.vals.call(null,option_group));
})()], null),iter__10838.call(null,cljs.core.rest.call(null,s__10839__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,lt.plugins.gitlight.status.ui.repo_ops);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,"refresh","refresh",(function (x,y){return null;
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7530__auto__ = (function iter__10874(s__10875){return (new cljs.core.LazySeq(null,(function (){var s__10875__$1 = s__10875;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10875__$1);if(temp__4092__auto__)
{var s__10875__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10875__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10875__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10877 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10876 = 0;while(true){
if((i__10876 < size__7529__auto__))
{var vec__10880 = cljs.core._nth.call(null,c__7528__auto__,i__10876);var g = cljs.core.nth.call(null,vec__10880,0,null);var fs = cljs.core.nth.call(null,vec__10880,1,null);cljs.core.chunk_append.call(null,b__10877,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10954 = (i__10876 + 1);
i__10876 = G__10954;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10877),iter__10874.call(null,cljs.core.chunk_rest.call(null,s__10875__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10877),null);
}
} else
{var vec__10881 = cljs.core.first.call(null,s__10875__$2);var g = cljs.core.nth.call(null,vec__10881,0,null);var fs = cljs.core.nth.call(null,vec__10881,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__10874.call(null,cljs.core.rest.call(null,s__10875__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,this$);
})()], null)], null));var seq__10882_10955 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10883_10956 = null;var count__10884_10957 = 0;var i__10885_10958 = 0;while(true){
if((i__10885_10958 < count__10884_10957))
{var vec__10886_10959 = cljs.core._nth.call(null,chunk__10883_10956,i__10885_10958);var ev__8184__auto___10960 = cljs.core.nth.call(null,vec__10886_10959,0,null);var func__8185__auto___10961 = cljs.core.nth.call(null,vec__10886_10959,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10960,func__8185__auto___10961);
{
var G__10962 = seq__10882_10955;
var G__10963 = chunk__10883_10956;
var G__10964 = count__10884_10957;
var G__10965 = (i__10885_10958 + 1);
seq__10882_10955 = G__10962;
chunk__10883_10956 = G__10963;
count__10884_10957 = G__10964;
i__10885_10958 = G__10965;
continue;
}
} else
{var temp__4092__auto___10966 = cljs.core.seq.call(null,seq__10882_10955);if(temp__4092__auto___10966)
{var seq__10882_10967__$1 = temp__4092__auto___10966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10882_10967__$1))
{var c__7561__auto___10968 = cljs.core.chunk_first.call(null,seq__10882_10967__$1);{
var G__10969 = cljs.core.chunk_rest.call(null,seq__10882_10967__$1);
var G__10970 = c__7561__auto___10968;
var G__10971 = cljs.core.count.call(null,c__7561__auto___10968);
var G__10972 = 0;
seq__10882_10955 = G__10969;
chunk__10883_10956 = G__10970;
count__10884_10957 = G__10971;
i__10885_10958 = G__10972;
continue;
}
} else
{var vec__10887_10973 = cljs.core.first.call(null,seq__10882_10967__$1);var ev__8184__auto___10974 = cljs.core.nth.call(null,vec__10887_10973,0,null);var func__8185__auto___10975 = cljs.core.nth.call(null,vec__10887_10973,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10974,func__8185__auto___10975);
{
var G__10976 = cljs.core.next.call(null,seq__10882_10967__$1);
var G__10977 = null;
var G__10978 = 0;
var G__10979 = 0;
seq__10882_10955 = G__10976;
chunk__10883_10956 = G__10977;
count__10884_10957 = G__10978;
i__10885_10958 = G__10979;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10894_10980 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10895_10981 = null;var count__10896_10982 = 0;var i__10897_10983 = 0;while(true){
if((i__10897_10983 < count__10896_10982))
{var vec__10898_10984 = cljs.core._nth.call(null,chunk__10895_10981,i__10897_10983);var ev__8184__auto___10985 = cljs.core.nth.call(null,vec__10898_10984,0,null);var func__8185__auto___10986 = cljs.core.nth.call(null,vec__10898_10984,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10985,func__8185__auto___10986);
{
var G__10987 = seq__10894_10980;
var G__10988 = chunk__10895_10981;
var G__10989 = count__10896_10982;
var G__10990 = (i__10897_10983 + 1);
seq__10894_10980 = G__10987;
chunk__10895_10981 = G__10988;
count__10896_10982 = G__10989;
i__10897_10983 = G__10990;
continue;
}
} else
{var temp__4092__auto___10991 = cljs.core.seq.call(null,seq__10894_10980);if(temp__4092__auto___10991)
{var seq__10894_10992__$1 = temp__4092__auto___10991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10894_10992__$1))
{var c__7561__auto___10993 = cljs.core.chunk_first.call(null,seq__10894_10992__$1);{
var G__10994 = cljs.core.chunk_rest.call(null,seq__10894_10992__$1);
var G__10995 = c__7561__auto___10993;
var G__10996 = cljs.core.count.call(null,c__7561__auto___10993);
var G__10997 = 0;
seq__10894_10980 = G__10994;
chunk__10895_10981 = G__10995;
count__10896_10982 = G__10996;
i__10897_10983 = G__10997;
continue;
}
} else
{var vec__10899_10998 = cljs.core.first.call(null,seq__10894_10992__$1);var ev__8184__auto___10999 = cljs.core.nth.call(null,vec__10899_10998,0,null);var func__8185__auto___11000 = cljs.core.nth.call(null,vec__10899_10998,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10999,func__8185__auto___11000);
{
var G__11001 = cljs.core.next.call(null,seq__10894_10992__$1);
var G__11002 = null;
var G__11003 = 0;
var G__11004 = 0;
seq__10894_10980 = G__11001;
chunk__10895_10981 = G__11002;
count__10896_10982 = G__11003;
i__10897_10983 = G__11004;
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
lt.plugins.gitlight.tests.which_color_QMARK_ = (function which_color_QMARK_(result){var G__10680 = result;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"not-bool","not-bool",2543743254),G__10680))
{return "pink";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__10680))
{return "red";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__10680))
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
lt.plugins.gitlight.tests.test_panel = (function test_panel(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7530__auto__ = (function iter__10695(s__10696){return (new cljs.core.LazySeq(null,(function (){var s__10696__$1 = s__10696;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10696__$1);if(temp__4092__auto__)
{var s__10696__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10696__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10696__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10698 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10697 = 0;while(true){
if((i__10697 < size__7529__auto__))
{var map__10701 = cljs.core._nth.call(null,c__7528__auto__,i__10697);var map__10701__$1 = ((cljs.core.seq_QMARK_.call(null,map__10701))?cljs.core.apply.call(null,cljs.core.hash_map,map__10701):map__10701);var status = cljs.core.get.call(null,map__10701__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10701__$1,new cljs.core.Keyword(null,"info","info",1017141280));cljs.core.chunk_append.call(null,b__10698,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null));
{
var G__10719 = (i__10697 + 1);
i__10697 = G__10719;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10698),iter__10695.call(null,cljs.core.chunk_rest.call(null,s__10696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10698),null);
}
} else
{var map__10702 = cljs.core.first.call(null,s__10696__$2);var map__10702__$1 = ((cljs.core.seq_QMARK_.call(null,map__10702))?cljs.core.apply.call(null,cljs.core.hash_map,map__10702):map__10702);var status = cljs.core.get.call(null,map__10702__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10702__$1,new cljs.core.Keyword(null,"info","info",1017141280));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null),iter__10695.call(null,cljs.core.rest.call(null,s__10696__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__10703_10720 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10704_10721 = null;var count__10705_10722 = 0;var i__10706_10723 = 0;while(true){
if((i__10706_10723 < count__10705_10722))
{var vec__10707_10724 = cljs.core._nth.call(null,chunk__10704_10721,i__10706_10723);var ev__8184__auto___10725 = cljs.core.nth.call(null,vec__10707_10724,0,null);var func__8185__auto___10726 = cljs.core.nth.call(null,vec__10707_10724,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10725,func__8185__auto___10726);
{
var G__10727 = seq__10703_10720;
var G__10728 = chunk__10704_10721;
var G__10729 = count__10705_10722;
var G__10730 = (i__10706_10723 + 1);
seq__10703_10720 = G__10727;
chunk__10704_10721 = G__10728;
count__10705_10722 = G__10729;
i__10706_10723 = G__10730;
continue;
}
} else
{var temp__4092__auto___10731 = cljs.core.seq.call(null,seq__10703_10720);if(temp__4092__auto___10731)
{var seq__10703_10732__$1 = temp__4092__auto___10731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10703_10732__$1))
{var c__7561__auto___10733 = cljs.core.chunk_first.call(null,seq__10703_10732__$1);{
var G__10734 = cljs.core.chunk_rest.call(null,seq__10703_10732__$1);
var G__10735 = c__7561__auto___10733;
var G__10736 = cljs.core.count.call(null,c__7561__auto___10733);
var G__10737 = 0;
seq__10703_10720 = G__10734;
chunk__10704_10721 = G__10735;
count__10705_10722 = G__10736;
i__10706_10723 = G__10737;
continue;
}
} else
{var vec__10708_10738 = cljs.core.first.call(null,seq__10703_10732__$1);var ev__8184__auto___10739 = cljs.core.nth.call(null,vec__10708_10738,0,null);var func__8185__auto___10740 = cljs.core.nth.call(null,vec__10708_10738,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10739,func__8185__auto___10740);
{
var G__10741 = cljs.core.next.call(null,seq__10703_10732__$1);
var G__10742 = null;
var G__10743 = 0;
var G__10744 = 0;
seq__10703_10720 = G__10741;
chunk__10704_10721 = G__10742;
count__10705_10722 = G__10743;
i__10706_10723 = G__10744;
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
lt.plugins.gitlight.tests.lib.selector_asrt = (function selector_asrt(p__11005){var map__11007 = p__11005;var map__11007__$1 = ((cljs.core.seq_QMARK_.call(null,map__11007))?cljs.core.apply.call(null,cljs.core.hash_map,map__11007):map__11007);var select = cljs.core.get.call(null,map__11007__$1,new cljs.core.Keyword(null,"select","select",4402849902));return null;
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
lt.plugins.gitlight.tests.status.back.change_filenames = (function change_filenames(filename,x){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__11031_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filename","filename",4574102905),p1__11031_SHARP_))
{return filename;
} else
{return p1__11031_SHARP_;
}
}),x));
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","back-tests","lt.plugins.gitlight.tests.status.back/back-tests",4633446629),(function (){lt.plugins.gitlight.tests.status.back.test_data = (function test_data(pair){var vec__11035 = pair;var n = cljs.core.nth.call(null,vec__11035,0,null);var what = cljs.core.nth.call(null,vec__11035,1,null);var vec__11036 = what;var tst = cljs.core.nth.call(null,vec__11036,0,null);var parsed = cljs.core.nth.call(null,vec__11036,1,null);var vec__11037 = tst;var X = cljs.core.nth.call(null,vec__11037,0,null);var Y = cljs.core.nth.call(null,vec__11037,1,null);var filename = cljs.core.nth.call(null,vec__11037,2,null);var d = cljs.core.nth.call(null,lt.plugins.gitlight.tests.status.back.data,n);var what_should_be = cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.tests.status.back.change_filenames,filename),d));var what_is = cljs.core.sort.call(null,parsed);var tst__$1 = cljs.core._EQ_.call(null,what_should_be,what_is);if(!(tst__$1))
{lt.plugins.gitlight.tests.lib.asrt.call(null,[cljs.core.str("parsing porcelain: `"),cljs.core.str(X),cljs.core.str("' `"),cljs.core.str(Y),cljs.core.str("'")].join(''),tst__$1);
} else
{}
return tst__$1;
});
lt.plugins.gitlight.tests.status.back.generate_test_data = (function generate_test_data(){var iter__7530__auto__ = (function iter__11044(s__11045){return (new cljs.core.LazySeq(null,(function (){var s__11045__$1 = s__11045;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11045__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7526__auto__ = ((function (s__11045__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__11046(s__11047){return (new cljs.core.LazySeq(null,((function (s__11045__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__11047__$1 = s__11047;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__11047__$1);if(temp__4092__auto____$1)
{var s__11047__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11047__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__11047__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__11049 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__11048 = 0;while(true){
if((i__11048 < size__7529__auto__))
{var y = cljs.core._nth.call(null,c__7528__auto__,i__11048);cljs.core.chunk_append.call(null,b__11049,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})());
{
var G__11060 = (i__11048 + 1);
i__11048 = G__11060;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11049),iter__11046.call(null,cljs.core.chunk_rest.call(null,s__11047__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11049),null);
}
} else
{var y = cljs.core.first.call(null,s__11047__$2);return cljs.core.cons.call(null,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})(),iter__11046.call(null,cljs.core.rest.call(null,s__11047__$2)));
}
} else
{return null;
}
break;
}
});})(s__11045__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__11045__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7527__auto__ = cljs.core.seq.call(null,iterys__7526__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","D","U"], null)));if(fs__7527__auto__)
{return cljs.core.concat.call(null,fs__7527__auto__,iter__11044.call(null,cljs.core.rest.call(null,s__11045__$1)));
} else
{{
var G__11061 = cljs.core.rest.call(null,s__11045__$1);
s__11045__$1 = G__11061;
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
after.cljs$lang$applyTo = (function (arglist__11030){
var text = cljs.core.first(arglist__11030);
arglist__11030 = cljs.core.next(arglist__11030);
var cwd = cljs.core.first(arglist__11030);
arglist__11030 = cljs.core.next(arglist__11030);
var data = cljs.core.first(arglist__11030);
var what_next = cljs.core.rest(arglist__11030);
return after__delegate(text,cwd,data,what_next);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
lt.plugins.gitlight.tests.remote_com.__BEH__git_test_exit_status__DOT__out = (function __BEH__git_test_exit_status__DOT__out(obj,data){var cwd = cljs.core.deref.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));var G__11019 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));if(cljs.core._EQ_.call(null,"push",G__11019))
{return lt.plugins.gitlight.tests.lib.asrt.call(null,"git push",cljs.core._EQ_.call(null,0,data));
} else
{if(cljs.core._EQ_.call(null,"commit",G__11019))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git commit",cwd,data,"push");
} else
{if(cljs.core._EQ_.call(null,"add",G__11019))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git add",cwd,data,"commit","-m","commiting");
} else
{if(cljs.core._EQ_.call(null,"pull",G__11019))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git pull",cwd,data,"add","push_me");
} else
{if(cljs.core._EQ_.call(null,"fetch",G__11019))
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
lt.plugins.gitlight.tests.status.ui.test_node = (function test_node(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"test"], null));var seq__11068_11084 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11069_11085 = null;var count__11070_11086 = 0;var i__11071_11087 = 0;while(true){
if((i__11071_11087 < count__11070_11086))
{var vec__11072_11088 = cljs.core._nth.call(null,chunk__11069_11085,i__11071_11087);var ev__8184__auto___11089 = cljs.core.nth.call(null,vec__11072_11088,0,null);var func__8185__auto___11090 = cljs.core.nth.call(null,vec__11072_11088,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___11089,func__8185__auto___11090);
{
var G__11091 = seq__11068_11084;
var G__11092 = chunk__11069_11085;
var G__11093 = count__11070_11086;
var G__11094 = (i__11071_11087 + 1);
seq__11068_11084 = G__11091;
chunk__11069_11085 = G__11092;
count__11070_11086 = G__11093;
i__11071_11087 = G__11094;
continue;
}
} else
{var temp__4092__auto___11095 = cljs.core.seq.call(null,seq__11068_11084);if(temp__4092__auto___11095)
{var seq__11068_11096__$1 = temp__4092__auto___11095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11068_11096__$1))
{var c__7561__auto___11097 = cljs.core.chunk_first.call(null,seq__11068_11096__$1);{
var G__11098 = cljs.core.chunk_rest.call(null,seq__11068_11096__$1);
var G__11099 = c__7561__auto___11097;
var G__11100 = cljs.core.count.call(null,c__7561__auto___11097);
var G__11101 = 0;
seq__11068_11084 = G__11098;
chunk__11069_11085 = G__11099;
count__11070_11086 = G__11100;
i__11071_11087 = G__11101;
continue;
}
} else
{var vec__11073_11102 = cljs.core.first.call(null,seq__11068_11096__$1);var ev__8184__auto___11103 = cljs.core.nth.call(null,vec__11073_11102,0,null);var func__8185__auto___11104 = cljs.core.nth.call(null,vec__11073_11102,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___11103,func__8185__auto___11104);
{
var G__11105 = cljs.core.next.call(null,seq__11068_11096__$1);
var G__11106 = null;
var G__11107 = 0;
var G__11108 = 0;
seq__11068_11084 = G__11105;
chunk__11069_11085 = G__11106;
count__11070_11086 = G__11107;
i__11071_11087 = G__11108;
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