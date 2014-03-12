if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.config = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),null], null), null),new cljs.core.Keyword(null,"git-status-refresh-rate","git-status-refresh-rate",1535627140),1000,new cljs.core.Keyword(null,"git-binary","git-binary",1640221134),"/usr/bin/git"));
lt.plugins.gitlight.__BEH__config = (function __BEH__config(this$,new_config){return lt.object.merge_BANG_.call(null,lt.plugins.gitlight.config,new_config);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.__BEH__config,new cljs.core.Keyword(null,"desc","desc",1016984067),"Configure gitlight",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.plugins.gitlight.__BEH__popup_error = (function __BEH__popup_error(obj){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't guess git root",new cljs.core.Keyword(null,"body","body",1016933652),"Please rerun the command again on a file that is in a git repo.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","popup-error","lt.plugins.gitlight/popup-error",1374664047),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.__BEH__popup_error,new cljs.core.Keyword(null,"desc","desc",1016984067),"Raise error popup.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raise-error-popup","raise-error-popup",3751697336),null], null), null));
lt.plugins.gitlight.error = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","error","lt.plugins.gitlight/error",866896272),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight","error","lt.plugins.gitlight/error",866896272),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight","popup-error","lt.plugins.gitlight/popup-error",1374664047)], null)));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.git')) {
goog.provide('lt.plugins.gitlight.git');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.files');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
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
var git_command_cwd__delegate = function (obj,cwd,args){lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"git-binary","git-binary",1640221134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config)),new cljs.core.Keyword(null,"args","args",1016906831),args,new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
return true;
};
var git_command_cwd = function (obj,cwd,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return git_command_cwd__delegate.call(this,obj,cwd,args);};
git_command_cwd.cljs$lang$maxFixedArity = 2;
git_command_cwd.cljs$lang$applyTo = (function (arglist__9675){
var obj = cljs.core.first(arglist__9675);
arglist__9675 = cljs.core.next(arglist__9675);
var cwd = cljs.core.first(arglist__9675);
var args = cljs.core.rest(arglist__9675);
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
var git_command__delegate = function (obj,args){var temp__4090__auto__ = lt.plugins.gitlight.git.get_git_root.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var cwd = temp__4090__auto__;return cljs.core.apply.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.git.git_command_cwd,obj,cwd),args);
} else
{lt.object.raise.call(null,lt.plugins.gitlight.error,new cljs.core.Keyword(null,"raise-error-popup","raise-error-popup",3751697336));
return false;
}
};
var git_command = function (obj,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return git_command__delegate.call(this,obj,args);};
git_command.cljs$lang$maxFixedArity = 1;
git_command.cljs$lang$applyTo = (function (arglist__9676){
var obj = cljs.core.first(arglist__9676);
var args = cljs.core.rest(arglist__9676);
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
git_command_ignore_out.cljs$lang$applyTo = (function (arglist__9677){
var args = cljs.core.seq(arglist__9677);
return git_command_ignore_out__delegate(args);
});
git_command_ignore_out.cljs$core$IFn$_invoke$arity$variadic = git_command_ignore_out__delegate;
return git_command_ignore_out;
})()
;
lt.plugins.gitlight.git.__BEH__ignore__DOT__out = (function __BEH__ignore__DOT__out(obj,data){return lt.objs.notifos.set_msg_BANG_.call(null,((cljs.core._EQ_.call(null,data,0))?"git: success!":"git: failed!"));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out","lt.plugins.gitlight.git/ignore.out",2172047623),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.plugins.gitlight.git.git_ignore_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","git-ignore-out","lt.plugins.gitlight.git/git-ignore-out",1518510219),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-ignore-out","git-ignore-out",3448111392)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out","lt.plugins.gitlight.git/ignore.out",2172047623)], null)));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.common-ui')) {
goog.provide('lt.plugins.gitlight.common_ui');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('crate.binding');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('crate.core');
lt.plugins.gitlight.common_ui.input = (function input(this$){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.option","input.option",1495945867),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013)),new cljs.core.Keyword(null,"value","value",1125876963),crate.binding.bound.call(null,this$,lt.plugins.gitlight.common_ui.__GT_value)], null)], null));var seq__8315_8348 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){var me = this;return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.common_ui.common_input)),lt.util.dom.val.call(null,me));
})], null)));var chunk__8316_8349 = null;var count__8317_8350 = 0;var i__8318_8351 = 0;while(true){
if((i__8318_8351 < count__8317_8350))
{var vec__8319_8352 = cljs.core._nth.call(null,chunk__8316_8349,i__8318_8351);var ev__8115__auto___8353 = cljs.core.nth.call(null,vec__8319_8352,0,null);var func__8116__auto___8354 = cljs.core.nth.call(null,vec__8319_8352,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___8353,func__8116__auto___8354);
{
var G__8355 = seq__8315_8348;
var G__8356 = chunk__8316_8349;
var G__8357 = count__8317_8350;
var G__8358 = (i__8318_8351 + 1);
seq__8315_8348 = G__8355;
chunk__8316_8349 = G__8356;
count__8317_8350 = G__8357;
i__8318_8351 = G__8358;
continue;
}
} else
{var temp__4092__auto___8359 = cljs.core.seq.call(null,seq__8315_8348);if(temp__4092__auto___8359)
{var seq__8315_8360__$1 = temp__4092__auto___8359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8315_8360__$1))
{var c__7500__auto___8361 = cljs.core.chunk_first.call(null,seq__8315_8360__$1);{
var G__8362 = cljs.core.chunk_rest.call(null,seq__8315_8360__$1);
var G__8363 = c__7500__auto___8361;
var G__8364 = cljs.core.count.call(null,c__7500__auto___8361);
var G__8365 = 0;
seq__8315_8348 = G__8362;
chunk__8316_8349 = G__8363;
count__8317_8350 = G__8364;
i__8318_8351 = G__8365;
continue;
}
} else
{var vec__8320_8366 = cljs.core.first.call(null,seq__8315_8360__$1);var ev__8115__auto___8367 = cljs.core.nth.call(null,vec__8320_8366,0,null);var func__8116__auto___8368 = cljs.core.nth.call(null,vec__8320_8366,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___8367,func__8116__auto___8368);
{
var G__8369 = cljs.core.next.call(null,seq__8315_8360__$1);
var G__8370 = null;
var G__8371 = 0;
var G__8372 = 0;
seq__8315_8348 = G__8369;
chunk__8316_8349 = G__8370;
count__8317_8350 = G__8371;
i__8318_8351 = G__8372;
continue;
}
}
} else
{}
}
break;
}
return e__8114__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","common-input","lt.plugins.gitlight.common-ui/common-input",2194365018),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"commit-input","commit-input",3492250406),null], null), null),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"message",new cljs.core.Keyword(null,"message","message",1968829305),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){lt.object.merge_BANG_.call(null,this$,opts);
return lt.plugins.gitlight.common_ui.input.call(null,this$);
}));
lt.plugins.gitlight.common_ui.common_input = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","common-input","lt.plugins.gitlight.common-ui/common-input",2194365018));
lt.plugins.gitlight.common_ui.__GT_value = (function __GT_value(p__8321){var map__8323 = p__8321;var map__8323__$1 = ((cljs.core.seq_QMARK_.call(null,map__8323))?cljs.core.apply.call(null,cljs.core.hash_map,map__8323):map__8323);var value = cljs.core.get.call(null,map__8323__$1,new cljs.core.Keyword(null,"value","value",1125876963));if(cljs.core.not.call(null,value))
{return "";
} else
{return value;
}
});
lt.plugins.gitlight.common_ui.mesg_atom = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.common_ui.common_input));
lt.plugins.gitlight.common_ui.handle_input_and_clear = (function handle_input_and_clear(fun){cljs.core.apply.call(null,fun,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,lt.plugins.gitlight.common_ui.mesg_atom)], null));
return lt.plugins.gitlight.common_ui.clear_input.call(null);
});
lt.plugins.gitlight.common_ui.clear_input = (function clear_input(){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.common_ui.mesg_atom,null);
});
lt.plugins.gitlight.common_ui.input_popup = (function input_popup(mesg,label,fun){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),mesg,new cljs.core.Keyword(null,"body","body",1016933652),lt.plugins.gitlight.common_ui.input.call(null,lt.plugins.gitlight.common_ui.common_input),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),label,new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.plugins.gitlight.common_ui.handle_input_and_clear.call(null,fun);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel",new cljs.core.Keyword(null,"action","action",3885920680),lt.plugins.gitlight.common_ui.clear_input], null)], null)], null));
});
lt.plugins.gitlight.common_ui.make_refresh_behavior = (function make_refresh_behavior(k,ui_fun){lt.plugins.gitlight.common_ui.__BEH__k = (function __BEH__k(this$){var new_cnt = ui_fun.call(null,this$);lt.plugins.gitlight.common_ui.dom_reset.call(null,lt.util.dom.parent.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),new_cnt);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),new_cnt], null));
});
return lt.object.behavior_STAR_.call(null,k,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__k,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
});
lt.plugins.gitlight.common_ui.make_refresh_tab_behavior = (function make_refresh_tab_behavior(obj,k,data_parsing_fun){lt.plugins.gitlight.common_ui.__BEH__k = (function __BEH__k(this$,data){lt.objs.tabs.add_or_focus_BANG_.call(null,obj);
lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",2111450984),data_parsing_fun.call(null,data)], null));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
return lt.object.behavior_STAR_.call(null,k,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__k,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
});
lt.plugins.gitlight.common_ui.make_keywords = (function make_keywords(k){var kwrdstr = cljs.core.subs.call(null,[cljs.core.str(k)].join(''),1);return cljs.core.map.call(null,(function (x){return cljs.core.keyword.call(null,[cljs.core.str(kwrdstr),cljs.core.str(x)].join(''));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-out","-refresh-results","-refresh-tab-results","-output"], null));
});
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,data_parsing_fun,ui_fun){var vec__8325 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__8325,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__8325,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__8325,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__8325,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__8325,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return ui_fun.call(null,this$);
});})(vec__8325,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);var tab = lt.object.create.call(null,tab_obj);var parse_command_output = lt.plugins.gitlight.common_ui.make_refresh_tab_behavior.call(null,tab,refresh_tab_kwd,data_parsing_fun);return lt.object.create.call(null,lt.object.object_STAR_.call(null,command_output_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gitlight-tab-output","gitlight-tab-output",1332604564),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse_command_output], null)));
});
lt.plugins.gitlight.common_ui.dom_truncate = (function dom_truncate(node){return node.innerHTML = "";
});
lt.plugins.gitlight.common_ui.dom_reset = (function dom_reset(node,new_cnt){lt.plugins.gitlight.common_ui.dom_truncate.call(null,node);
return lt.util.dom.append.call(null,node,new_cnt);
});
lt.plugins.gitlight.common_ui.button = (function button(n,f,fun){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8332_8373 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__8333_8374 = null;var count__8334_8375 = 0;var i__8335_8376 = 0;while(true){
if((i__8335_8376 < count__8334_8375))
{var vec__8336_8377 = cljs.core._nth.call(null,chunk__8333_8374,i__8335_8376);var ev__8115__auto___8378 = cljs.core.nth.call(null,vec__8336_8377,0,null);var func__8116__auto___8379 = cljs.core.nth.call(null,vec__8336_8377,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___8378,func__8116__auto___8379);
{
var G__8380 = seq__8332_8373;
var G__8381 = chunk__8333_8374;
var G__8382 = count__8334_8375;
var G__8383 = (i__8335_8376 + 1);
seq__8332_8373 = G__8380;
chunk__8333_8374 = G__8381;
count__8334_8375 = G__8382;
i__8335_8376 = G__8383;
continue;
}
} else
{var temp__4092__auto___8384 = cljs.core.seq.call(null,seq__8332_8373);if(temp__4092__auto___8384)
{var seq__8332_8385__$1 = temp__4092__auto___8384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8332_8385__$1))
{var c__7500__auto___8386 = cljs.core.chunk_first.call(null,seq__8332_8385__$1);{
var G__8387 = cljs.core.chunk_rest.call(null,seq__8332_8385__$1);
var G__8388 = c__7500__auto___8386;
var G__8389 = cljs.core.count.call(null,c__7500__auto___8386);
var G__8390 = 0;
seq__8332_8373 = G__8387;
chunk__8333_8374 = G__8388;
count__8334_8375 = G__8389;
i__8335_8376 = G__8390;
continue;
}
} else
{var vec__8337_8391 = cljs.core.first.call(null,seq__8332_8385__$1);var ev__8115__auto___8392 = cljs.core.nth.call(null,vec__8337_8391,0,null);var func__8116__auto___8393 = cljs.core.nth.call(null,vec__8337_8391,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___8392,func__8116__auto___8393);
{
var G__8394 = cljs.core.next.call(null,seq__8332_8385__$1);
var G__8395 = null;
var G__8396 = 0;
var G__8397 = 0;
seq__8332_8373 = G__8394;
chunk__8333_8374 = G__8395;
count__8334_8375 = G__8396;
i__8335_8376 = G__8397;
continue;
}
}
} else
{}
}
break;
}
return e__8114__auto__;
});
lt.plugins.gitlight.common_ui.make_button = (function make_button(n,f,fun){return lt.plugins.gitlight.common_ui.button.call(null,n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8398 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8398))
{var ts_8399 = temp__4092__auto___8398;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8399))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8399);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
}
if(!lt.util.load.provided_QMARK_('clojure.walk')) {
goog.provide('clojure.walk');
goog.require('cljs.core');
/**
* Traverses form, an arbitrary data structure.  inner and outer are
* functions.  Applies inner to each element of form, building up a
* data structure of the same type, then applies outer to the result.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.walk = (function walk(inner,outer,form){if(cljs.core.seq_QMARK_.call(null,form))
{return outer.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form)));
} else
{if(cljs.core.coll_QMARK_.call(null,form))
{return outer.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,inner,form)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return outer.call(null,form);
} else
{return null;
}
}
}
});
/**
* Performs a depth-first, post-order traversal of form.  Calls f on
* each sub-form, uses f's return value in place of the original.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.postwalk = (function postwalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,postwalk,f),f,form);
});
/**
* Like postwalk, but does pre-order traversal.
*/
clojure.walk.prewalk = (function prewalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,prewalk,f),cljs.core.identity,f.call(null,form));
});
/**
* Recursively transforms all map keys from strings to keywords.
*/
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__9669){var vec__9670 = p__9669;var k = cljs.core.nth.call(null,vec__9670,0,null);var v = cljs.core.nth.call(null,vec__9670,1,null);if(typeof k === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,(function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
}),m);
});
/**
* Recursively transforms all map keys from keywords to strings.
*/
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__9673){var vec__9674 = p__9673;var k = cljs.core.nth.call(null,vec__9674,0,null);var v = cljs.core.nth.call(null,vec__9674,1,null);if((k instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,(function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
}),m);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the root of the tree first.
*/
clojure.walk.prewalk_replace = (function prewalk_replace(smap,form){return clojure.walk.prewalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the leaves of the tree first.
*/
clojure.walk.postwalk_replace = (function postwalk_replace(smap,form){return clojure.walk.postwalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.diff')) {
goog.provide('lt.plugins.gitlight.diff');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.proc');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.diff.diff_panel = (function diff_panel(this$){var e__8114__auto__ = crate.core.html.call(null,(function (){var output = new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-diff","div.gitlight-diff",3415869571),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context","div.context",3533479108),lt.plugins.gitlight.common_ui.make_button.call(null,"-","-",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,((function (output){
return (function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.dec);
});})(output))
,lt.plugins.gitlight.diff.git_diff_update_fun)),[cljs.core.str("context: "),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join(''),lt.plugins.gitlight.common_ui.make_button.call(null,"+","+",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,((function (output){
return (function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.inc);
});})(output))
,lt.plugins.gitlight.diff.git_diff_update_fun))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.more-context","div.more-context",3304815846),lt.plugins.gitlight.common_ui.make_button.call(null,"whole file","whole file",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,((function (output){
return (function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,100000);
});})(output))
,lt.plugins.gitlight.diff.git_diff_update_fun)),lt.plugins.gitlight.common_ui.make_button.call(null,"reset","reset",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,((function (output){
return (function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,3);
});})(output))
,lt.plugins.gitlight.diff.git_diff_update_fun))], null),(function (){var iter__7469__auto__ = ((function (output){
return (function iter__73896(s__73897){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__73897__$1 = s__73897;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__73897__$1);if(temp__4092__auto__)
{var s__73897__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__73897__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__73897__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__73899 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__73898 = 0;while(true){
if((i__73898 < size__7468__auto__))
{var file = cljs.core._nth.call(null,c__7467__auto__,i__73898);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);cljs.core.chunk_append.call(null,b__73899,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.filename","td.filename",2571134775),filename], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (i__73898,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function iter__74196(s__74197){return (new cljs.core.LazySeq(null,((function (i__73898,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74197__$1 = s__74197;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__74197__$1);if(temp__4092__auto____$1)
{var s__74197__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__74197__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__74197__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__74199 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__74198 = 0;while(true){
if((i__74198 < size__7468__auto____$1))
{var changes_group = cljs.core._nth.call(null,c__7467__auto____$1,i__74198);cljs.core.chunk_append.call(null,b__74199,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (i__74198,i__73898,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function iter__74272(s__74273){return (new cljs.core.LazySeq(null,((function (i__74198,i__73898,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74273__$1 = s__74273;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__74273__$1);if(temp__4092__auto____$2)
{var s__74273__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__74273__$2))
{var c__7467__auto____$2 = cljs.core.chunk_first.call(null,s__74273__$2);var size__7468__auto____$2 = cljs.core.count.call(null,c__7467__auto____$2);var b__74275 = cljs.core.chunk_buffer.call(null,size__7468__auto____$2);if((function (){var i__74274 = 0;while(true){
if((i__74274 < size__7468__auto____$2))
{var line_group = cljs.core._nth.call(null,c__7467__auto____$2,i__74274);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__74275,(function (){var iter__7469__auto__ = ((function (i__74274,i__74198,i__73898,columned,c,columns,line_group,c__7467__auto____$2,size__7468__auto____$2,b__74275,s__74273__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function iter__74292(s__74293){return (new cljs.core.LazySeq(null,((function (i__74274,i__74198,i__73898,columned,c,columns,line_group,c__7467__auto____$2,size__7468__auto____$2,b__74275,s__74273__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74293__$1 = s__74293;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__74293__$1);if(temp__4092__auto____$3)
{var s__74293__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__74293__$2))
{var c__7467__auto____$3 = cljs.core.chunk_first.call(null,s__74293__$2);var size__7468__auto____$3 = cljs.core.count.call(null,c__7467__auto____$3);var b__74295 = cljs.core.chunk_buffer.call(null,size__7468__auto____$3);if((function (){var i__74294 = 0;while(true){
if((i__74294 < size__7468__auto____$3))
{var vec__74298 = cljs.core._nth.call(null,c__7467__auto____$3,i__74294);var left = cljs.core.nth.call(null,vec__74298,0,null);var right = cljs.core.nth.call(null,vec__74298,1,null);cljs.core.chunk_append.call(null,b__74295,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__74503 = (i__74294 + 1);
i__74294 = G__74503;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74295),iter__74292.call(null,cljs.core.chunk_rest.call(null,s__74293__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74295),null);
}
} else
{var vec__74299 = cljs.core.first.call(null,s__74293__$2);var left = cljs.core.nth.call(null,vec__74299,0,null);var right = cljs.core.nth.call(null,vec__74299,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__74292.call(null,cljs.core.rest.call(null,s__74293__$2)));
}
} else
{return null;
}
break;
}
});})(i__74274,i__74198,i__73898,columned,c,columns,line_group,c__7467__auto____$2,size__7468__auto____$2,b__74275,s__74273__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(i__74274,i__74198,i__73898,columned,c,columns,line_group,c__7467__auto____$2,size__7468__auto____$2,b__74275,s__74273__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})());
{
var G__74504 = (i__74274 + 1);
i__74274 = G__74504;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74275),iter__74272.call(null,cljs.core.chunk_rest.call(null,s__74273__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74275),null);
}
} else
{var line_group = cljs.core.first.call(null,s__74273__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7469__auto__ = ((function (i__74198,i__73898,columned,c,columns,line_group,s__74273__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function iter__74300(s__74301){return (new cljs.core.LazySeq(null,((function (i__74198,i__73898,columned,c,columns,line_group,s__74273__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74301__$1 = s__74301;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__74301__$1);if(temp__4092__auto____$3)
{var s__74301__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__74301__$2))
{var c__7467__auto____$2 = cljs.core.chunk_first.call(null,s__74301__$2);var size__7468__auto____$2 = cljs.core.count.call(null,c__7467__auto____$2);var b__74303 = cljs.core.chunk_buffer.call(null,size__7468__auto____$2);if((function (){var i__74302 = 0;while(true){
if((i__74302 < size__7468__auto____$2))
{var vec__74306 = cljs.core._nth.call(null,c__7467__auto____$2,i__74302);var left = cljs.core.nth.call(null,vec__74306,0,null);var right = cljs.core.nth.call(null,vec__74306,1,null);cljs.core.chunk_append.call(null,b__74303,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__74505 = (i__74302 + 1);
i__74302 = G__74505;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74303),iter__74300.call(null,cljs.core.chunk_rest.call(null,s__74301__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74303),null);
}
} else
{var vec__74307 = cljs.core.first.call(null,s__74301__$2);var left = cljs.core.nth.call(null,vec__74307,0,null);var right = cljs.core.nth.call(null,vec__74307,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__74300.call(null,cljs.core.rest.call(null,s__74301__$2)));
}
} else
{return null;
}
break;
}
});})(i__74198,i__73898,columned,c,columns,line_group,s__74273__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(i__74198,i__73898,columned,c,columns,line_group,s__74273__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})(),iter__74272.call(null,cljs.core.rest.call(null,s__74273__$2)));
}
} else
{return null;
}
break;
}
});})(i__74198,i__73898,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(i__74198,i__73898,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__74199,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__74506 = (i__74198 + 1);
i__74198 = G__74506;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74199),iter__74196.call(null,cljs.core.chunk_rest.call(null,s__74197__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74199),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__74197__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (i__73898,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function iter__74308(s__74309){return (new cljs.core.LazySeq(null,((function (i__73898,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74309__$1 = s__74309;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__74309__$1);if(temp__4092__auto____$2)
{var s__74309__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__74309__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__74309__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__74311 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__74310 = 0;while(true){
if((i__74310 < size__7468__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7467__auto____$1,i__74310);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__74311,(function (){var iter__7469__auto__ = ((function (i__74310,i__73898,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__74311,s__74309__$2,temp__4092__auto____$2,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function iter__74328(s__74329){return (new cljs.core.LazySeq(null,((function (i__74310,i__73898,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__74311,s__74309__$2,temp__4092__auto____$2,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74329__$1 = s__74329;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__74329__$1);if(temp__4092__auto____$3)
{var s__74329__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__74329__$2))
{var c__7467__auto____$2 = cljs.core.chunk_first.call(null,s__74329__$2);var size__7468__auto____$2 = cljs.core.count.call(null,c__7467__auto____$2);var b__74331 = cljs.core.chunk_buffer.call(null,size__7468__auto____$2);if((function (){var i__74330 = 0;while(true){
if((i__74330 < size__7468__auto____$2))
{var vec__74334 = cljs.core._nth.call(null,c__7467__auto____$2,i__74330);var left = cljs.core.nth.call(null,vec__74334,0,null);var right = cljs.core.nth.call(null,vec__74334,1,null);cljs.core.chunk_append.call(null,b__74331,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__74507 = (i__74330 + 1);
i__74330 = G__74507;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74331),iter__74328.call(null,cljs.core.chunk_rest.call(null,s__74329__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74331),null);
}
} else
{var vec__74335 = cljs.core.first.call(null,s__74329__$2);var left = cljs.core.nth.call(null,vec__74335,0,null);var right = cljs.core.nth.call(null,vec__74335,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__74328.call(null,cljs.core.rest.call(null,s__74329__$2)));
}
} else
{return null;
}
break;
}
});})(i__74310,i__73898,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__74311,s__74309__$2,temp__4092__auto____$2,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(i__74310,i__73898,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__74311,s__74309__$2,temp__4092__auto____$2,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})());
{
var G__74508 = (i__74310 + 1);
i__74310 = G__74508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74311),iter__74308.call(null,cljs.core.chunk_rest.call(null,s__74309__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74311),null);
}
} else
{var line_group = cljs.core.first.call(null,s__74309__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7469__auto__ = ((function (i__73898,columned,c,columns,line_group,s__74309__$2,temp__4092__auto____$2,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function iter__74336(s__74337){return (new cljs.core.LazySeq(null,((function (i__73898,columned,c,columns,line_group,s__74309__$2,temp__4092__auto____$2,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74337__$1 = s__74337;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__74337__$1);if(temp__4092__auto____$3)
{var s__74337__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__74337__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__74337__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__74339 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__74338 = 0;while(true){
if((i__74338 < size__7468__auto____$1))
{var vec__74342 = cljs.core._nth.call(null,c__7467__auto____$1,i__74338);var left = cljs.core.nth.call(null,vec__74342,0,null);var right = cljs.core.nth.call(null,vec__74342,1,null);cljs.core.chunk_append.call(null,b__74339,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__74509 = (i__74338 + 1);
i__74338 = G__74509;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74339),iter__74336.call(null,cljs.core.chunk_rest.call(null,s__74337__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74339),null);
}
} else
{var vec__74343 = cljs.core.first.call(null,s__74337__$2);var left = cljs.core.nth.call(null,vec__74343,0,null);var right = cljs.core.nth.call(null,vec__74343,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__74336.call(null,cljs.core.rest.call(null,s__74337__$2)));
}
} else
{return null;
}
break;
}
});})(i__73898,columned,c,columns,line_group,s__74309__$2,temp__4092__auto____$2,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(i__73898,columned,c,columns,line_group,s__74309__$2,temp__4092__auto____$2,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})(),iter__74308.call(null,cljs.core.rest.call(null,s__74309__$2)));
}
} else
{return null;
}
break;
}
});})(i__73898,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(i__73898,changes_group,s__74197__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__74196.call(null,cljs.core.rest.call(null,s__74197__$2)));
}
} else
{return null;
}
break;
}
});})(i__73898,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(i__73898,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__73899,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null));
{
var G__74510 = (i__73898 + 1);
i__73898 = G__74510;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73899),iter__73896.call(null,cljs.core.chunk_rest.call(null,s__73897__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73899),null);
}
} else
{var file = cljs.core.first.call(null,s__73897__$2);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.filename","td.filename",2571134775),filename], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function iter__74344(s__74345){return (new cljs.core.LazySeq(null,((function (filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74345__$1 = s__74345;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__74345__$1);if(temp__4092__auto____$1)
{var s__74345__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__74345__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__74345__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__74347 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__74346 = 0;while(true){
if((i__74346 < size__7468__auto__))
{var changes_group = cljs.core._nth.call(null,c__7467__auto__,i__74346);cljs.core.chunk_append.call(null,b__74347,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (i__74346,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function iter__74420(s__74421){return (new cljs.core.LazySeq(null,((function (i__74346,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74421__$1 = s__74421;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__74421__$1);if(temp__4092__auto____$2)
{var s__74421__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__74421__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__74421__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__74423 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__74422 = 0;while(true){
if((i__74422 < size__7468__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7467__auto____$1,i__74422);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__74423,(function (){var iter__7469__auto__ = ((function (i__74422,i__74346,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__74423,s__74421__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function iter__74440(s__74441){return (new cljs.core.LazySeq(null,((function (i__74422,i__74346,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__74423,s__74421__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74441__$1 = s__74441;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__74441__$1);if(temp__4092__auto____$3)
{var s__74441__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__74441__$2))
{var c__7467__auto____$2 = cljs.core.chunk_first.call(null,s__74441__$2);var size__7468__auto____$2 = cljs.core.count.call(null,c__7467__auto____$2);var b__74443 = cljs.core.chunk_buffer.call(null,size__7468__auto____$2);if((function (){var i__74442 = 0;while(true){
if((i__74442 < size__7468__auto____$2))
{var vec__74446 = cljs.core._nth.call(null,c__7467__auto____$2,i__74442);var left = cljs.core.nth.call(null,vec__74446,0,null);var right = cljs.core.nth.call(null,vec__74446,1,null);cljs.core.chunk_append.call(null,b__74443,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__74511 = (i__74442 + 1);
i__74442 = G__74511;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74443),iter__74440.call(null,cljs.core.chunk_rest.call(null,s__74441__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74443),null);
}
} else
{var vec__74447 = cljs.core.first.call(null,s__74441__$2);var left = cljs.core.nth.call(null,vec__74447,0,null);var right = cljs.core.nth.call(null,vec__74447,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__74440.call(null,cljs.core.rest.call(null,s__74441__$2)));
}
} else
{return null;
}
break;
}
});})(i__74422,i__74346,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__74423,s__74421__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(i__74422,i__74346,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__74423,s__74421__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})());
{
var G__74512 = (i__74422 + 1);
i__74422 = G__74512;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74423),iter__74420.call(null,cljs.core.chunk_rest.call(null,s__74421__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74423),null);
}
} else
{var line_group = cljs.core.first.call(null,s__74421__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7469__auto__ = ((function (i__74346,columned,c,columns,line_group,s__74421__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function iter__74448(s__74449){return (new cljs.core.LazySeq(null,((function (i__74346,columned,c,columns,line_group,s__74421__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74449__$1 = s__74449;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__74449__$1);if(temp__4092__auto____$3)
{var s__74449__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__74449__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__74449__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__74451 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__74450 = 0;while(true){
if((i__74450 < size__7468__auto____$1))
{var vec__74454 = cljs.core._nth.call(null,c__7467__auto____$1,i__74450);var left = cljs.core.nth.call(null,vec__74454,0,null);var right = cljs.core.nth.call(null,vec__74454,1,null);cljs.core.chunk_append.call(null,b__74451,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__74513 = (i__74450 + 1);
i__74450 = G__74513;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74451),iter__74448.call(null,cljs.core.chunk_rest.call(null,s__74449__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74451),null);
}
} else
{var vec__74455 = cljs.core.first.call(null,s__74449__$2);var left = cljs.core.nth.call(null,vec__74455,0,null);var right = cljs.core.nth.call(null,vec__74455,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__74448.call(null,cljs.core.rest.call(null,s__74449__$2)));
}
} else
{return null;
}
break;
}
});})(i__74346,columned,c,columns,line_group,s__74421__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(i__74346,columned,c,columns,line_group,s__74421__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})(),iter__74420.call(null,cljs.core.rest.call(null,s__74421__$2)));
}
} else
{return null;
}
break;
}
});})(i__74346,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(i__74346,changes_group,c__7467__auto__,size__7468__auto__,b__74347,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__74514 = (i__74346 + 1);
i__74346 = G__74514;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74347),iter__74344.call(null,cljs.core.chunk_rest.call(null,s__74345__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74347),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__74345__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function iter__74456(s__74457){return (new cljs.core.LazySeq(null,((function (changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74457__$1 = s__74457;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__74457__$1);if(temp__4092__auto____$2)
{var s__74457__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__74457__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__74457__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__74459 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__74458 = 0;while(true){
if((i__74458 < size__7468__auto__))
{var line_group = cljs.core._nth.call(null,c__7467__auto__,i__74458);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__74459,(function (){var iter__7469__auto__ = ((function (i__74458,columned,c,columns,line_group,c__7467__auto__,size__7468__auto__,b__74459,s__74457__$2,temp__4092__auto____$2,changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function iter__74476(s__74477){return (new cljs.core.LazySeq(null,((function (i__74458,columned,c,columns,line_group,c__7467__auto__,size__7468__auto__,b__74459,s__74457__$2,temp__4092__auto____$2,changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74477__$1 = s__74477;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__74477__$1);if(temp__4092__auto____$3)
{var s__74477__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__74477__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__74477__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__74479 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__74478 = 0;while(true){
if((i__74478 < size__7468__auto____$1))
{var vec__74482 = cljs.core._nth.call(null,c__7467__auto____$1,i__74478);var left = cljs.core.nth.call(null,vec__74482,0,null);var right = cljs.core.nth.call(null,vec__74482,1,null);cljs.core.chunk_append.call(null,b__74479,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__74515 = (i__74478 + 1);
i__74478 = G__74515;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74479),iter__74476.call(null,cljs.core.chunk_rest.call(null,s__74477__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74479),null);
}
} else
{var vec__74483 = cljs.core.first.call(null,s__74477__$2);var left = cljs.core.nth.call(null,vec__74483,0,null);var right = cljs.core.nth.call(null,vec__74483,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__74476.call(null,cljs.core.rest.call(null,s__74477__$2)));
}
} else
{return null;
}
break;
}
});})(i__74458,columned,c,columns,line_group,c__7467__auto__,size__7468__auto__,b__74459,s__74457__$2,temp__4092__auto____$2,changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(i__74458,columned,c,columns,line_group,c__7467__auto__,size__7468__auto__,b__74459,s__74457__$2,temp__4092__auto____$2,changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})());
{
var G__74516 = (i__74458 + 1);
i__74458 = G__74516;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74459),iter__74456.call(null,cljs.core.chunk_rest.call(null,s__74457__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74459),null);
}
} else
{var line_group = cljs.core.first.call(null,s__74457__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7469__auto__ = ((function (columned,c,columns,line_group,s__74457__$2,temp__4092__auto____$2,changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function iter__74484(s__74485){return (new cljs.core.LazySeq(null,((function (columned,c,columns,line_group,s__74457__$2,temp__4092__auto____$2,changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output){
return (function (){var s__74485__$1 = s__74485;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__74485__$1);if(temp__4092__auto____$3)
{var s__74485__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__74485__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__74485__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__74487 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__74486 = 0;while(true){
if((i__74486 < size__7468__auto__))
{var vec__74490 = cljs.core._nth.call(null,c__7467__auto__,i__74486);var left = cljs.core.nth.call(null,vec__74490,0,null);var right = cljs.core.nth.call(null,vec__74490,1,null);cljs.core.chunk_append.call(null,b__74487,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__74517 = (i__74486 + 1);
i__74486 = G__74517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74487),iter__74484.call(null,cljs.core.chunk_rest.call(null,s__74485__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74487),null);
}
} else
{var vec__74491 = cljs.core.first.call(null,s__74485__$2);var left = cljs.core.nth.call(null,vec__74491,0,null);var right = cljs.core.nth.call(null,vec__74491,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__74484.call(null,cljs.core.rest.call(null,s__74485__$2)));
}
} else
{return null;
}
break;
}
});})(columned,c,columns,line_group,s__74457__$2,temp__4092__auto____$2,changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(columned,c,columns,line_group,s__74457__$2,temp__4092__auto____$2,changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})(),iter__74456.call(null,cljs.core.rest.call(null,s__74457__$2)));
}
} else
{return null;
}
break;
}
});})(changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(changes_group,s__74345__$2,temp__4092__auto____$1,filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__74344.call(null,cljs.core.rest.call(null,s__74345__$2)));
}
} else
{return null;
}
break;
}
});})(filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
,null,null));
});})(filename,file_diff,file,s__73897__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null),iter__73896.call(null,cljs.core.rest.call(null,s__73897__$2)));
}
} else
{return null;
}
break;
}
});})(output))
,null,null));
});})(output))
;return iter__7469__auto__.call(null,output);
})()], null);
})());var seq__74492_74518 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__74493_74519 = null;var count__74494_74520 = 0;var i__74495_74521 = 0;while(true){
if((i__74495_74521 < count__74494_74520))
{var vec__74496_74522 = cljs.core._nth.call(null,chunk__74493_74519,i__74495_74521);var ev__8115__auto___74523 = cljs.core.nth.call(null,vec__74496_74522,0,null);var func__8116__auto___74524 = cljs.core.nth.call(null,vec__74496_74522,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___74523,func__8116__auto___74524);
{
var G__74525 = seq__74492_74518;
var G__74526 = chunk__74493_74519;
var G__74527 = count__74494_74520;
var G__74528 = (i__74495_74521 + 1);
seq__74492_74518 = G__74525;
chunk__74493_74519 = G__74526;
count__74494_74520 = G__74527;
i__74495_74521 = G__74528;
continue;
}
} else
{var temp__4092__auto___74529 = cljs.core.seq.call(null,seq__74492_74518);if(temp__4092__auto___74529)
{var seq__74492_74530__$1 = temp__4092__auto___74529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__74492_74530__$1))
{var c__7500__auto___74531 = cljs.core.chunk_first.call(null,seq__74492_74530__$1);{
var G__74532 = cljs.core.chunk_rest.call(null,seq__74492_74530__$1);
var G__74533 = c__7500__auto___74531;
var G__74534 = cljs.core.count.call(null,c__7500__auto___74531);
var G__74535 = 0;
seq__74492_74518 = G__74532;
chunk__74493_74519 = G__74533;
count__74494_74520 = G__74534;
i__74495_74521 = G__74535;
continue;
}
} else
{var vec__74497_74536 = cljs.core.first.call(null,seq__74492_74530__$1);var ev__8115__auto___74537 = cljs.core.nth.call(null,vec__74497_74536,0,null);var func__8116__auto___74538 = cljs.core.nth.call(null,vec__74497_74536,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___74537,func__8116__auto___74538);
{
var G__74539 = cljs.core.next.call(null,seq__74492_74530__$1);
var G__74540 = null;
var G__74541 = 0;
var G__74542 = 0;
seq__74492_74518 = G__74539;
chunk__74493_74519 = G__74540;
count__74494_74520 = G__74541;
i__74495_74521 = G__74542;
continue;
}
}
} else
{}
}
break;
}
return e__8114__auto__;
});
lt.plugins.gitlight.diff.git_diff_update_fun = (function git_diff_update_fun(){return lt.plugins.gitlight.diff.git_diff.call(null,cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename));
});
lt.plugins.gitlight.diff.click_run_function_update = (function click_run_function_update(fun,up,x,y){fun.call(null);
return up.call(null);
});
lt.plugins.gitlight.diff.context = cljs.core.atom.call(null,3);
lt.plugins.gitlight.diff.last_filename = cljs.core.atom.call(null,null);
lt.plugins.gitlight.diff.val_or_emptystr = (function val_or_emptystr(what){if((what == null))
{return "";
} else
{return what;
}
});
lt.plugins.gitlight.diff.breaker = (function breaker(left,right){var m = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,left),cljs.core.first.call(null,right)], null);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,m)))
{return cljs.core.cons.call(null,cljs.core.map.call(null,lt.plugins.gitlight.diff.val_or_emptystr,m),breaker.call(null,cljs.core.rest.call(null,left),cljs.core.rest.call(null,right)));
} else
{return null;
}
});
lt.plugins.gitlight.diff.columner = (function columner(lines){if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"context",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,lines,lines)], null);
} else
{var partitioned = clojure.walk.keywordize_keys.call(null,cljs.core.group_by.call(null,cljs.core.first,lines));var left = new cljs.core.Keyword(null,"-","-",1013904287).cljs$core$IFn$_invoke$arity$1(partitioned);var right = new cljs.core.Keyword(null,"+","+",1013904285).cljs$core$IFn$_invoke$arity$1(partitioned);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"changed",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,left,right)], null);
}
});
lt.plugins.gitlight.diff.split_into_headered_groups = (function split_into_headered_groups(lines,fun,result_fun,headkey,contkey){if(!(cljs.core.empty_QMARK_.call(null,lines)))
{var fst = cljs.core.first.call(null,lines);var vec__74499 = cljs.core.split_with.call(null,fun,cljs.core.rest.call(null,lines));var content = cljs.core.nth.call(null,vec__74499,0,null);var leftovers = cljs.core.nth.call(null,vec__74499,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([headkey,fst,contkey,result_fun.call(null,content)], true, false),split_into_headered_groups.call(null,leftovers,fun,result_fun,headkey,contkey));
} else
{return null;
}
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,x));
}),(function (x){return cljs.core.partition_by.call(null,(function (p1__74500_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__74500_SHARP_));
}),x);
}),new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.Keyword(null,"content","content",1965434859));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(data){var vec__74502 = cljs.core.take.call(null,3,data);var header = cljs.core.nth.call(null,vec__74502,0,null);var left = cljs.core.nth.call(null,vec__74502,1,null);var right = cljs.core.nth.call(null,vec__74502,2,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,cljs.core.drop.call(null,3,data));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),header,new cljs.core.Keyword(null,"left","left",1017222009),left,new cljs.core.Keyword(null,"right","right",1122416014),right,new cljs.core.Keyword(null,"groups","groups",4071411014),groups], null);
});
lt.plugins.gitlight.diff.split_into_files = (function split_into_files(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return (cljs.core.re_matches.call(null,/diff --git .*/,x) == null);
}),lt.plugins.gitlight.diff.parse_single_git_diff,new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"file-diff","file-diff",3945937192));
});
lt.plugins.gitlight.diff.parse_git_diff = (function parse_git_diff(raw_data){cljs.core.println.call(null,raw_data);
return lt.plugins.gitlight.diff.split_into_files.call(null,clojure.string.split_lines.call(null,raw_data.toString()));
});
lt.plugins.gitlight.diff.git_diff_output = lt.plugins.gitlight.common_ui.make_output_tab_object.call(null,"Git diff",new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-diff","lt.plugins.gitlight.diff/gitlight-diff",1144555959),lt.plugins.gitlight.diff.parse_git_diff,lt.plugins.gitlight.diff.diff_panel);
lt.plugins.gitlight.diff.git_diff = (function git_diff(filepath){cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.last_filename,filepath);
return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.diff.git_diff_output,"diff",[cljs.core.str("-U"),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join(''),"--",filepath);
});
lt.plugins.gitlight.diff.git_diff_button = (function git_diff_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,[cljs.core.str(lt.plugins.gitlight.git.get_git_root.call(null)),cljs.core.str("/"),cljs.core.str(filename)].join(''));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","git-diff-file","lt.plugins.gitlight.diff/git-diff-file",4564618068),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: diff this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.diff.git_diff.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","git-diff-repo","lt.plugins.gitlight.diff/git-diff-repo",4564349286),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: diff this repo",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.diff.git_diff.call(null,"");
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.back')) {
goog.provide('lt.plugins.gitlight.status.back');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
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
lt.plugins.gitlight.status.back.__BEH__git_status__DOT__out = (function __BEH__git_status__DOT__out(obj,data){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.parse_porcelain.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status.out","lt.plugins.gitlight.status.back/git-status.out",3897738133),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git status is executed, parse its output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.status.back.git_status_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out","lt.plugins.gitlight.status.back/git-status-out",3897718648),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-status-out","git-status-out",2815542080)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status.out","lt.plugins.gitlight.status.back/git-status.out",3897738133),new cljs.core.Keyword("lt.plugins.gitlight.status.back","refresh-ui-on-new-status","lt.plugins.gitlight.status.back/refresh-ui-on-new-status",1675222016),new cljs.core.Keyword("lt.plugins.gitlight.status.back","auto-refresh-git-status","lt.plugins.gitlight.status.back/auto-refresh-git-status",1891470533)], null)));
lt.plugins.gitlight.status.back.git_status = (function git_status(){return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.status.back.git_status_out,"status","--porcelain","--branch");
});
lt.plugins.gitlight.status.back.git_add = (function git_add(action,filename){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"add",filename);
});
lt.plugins.gitlight.status.back.git_reset = (function git_reset(action,filename){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"reset",filename);
});
lt.plugins.gitlight.status.back.bin_rm = (function bin_rm(action,filename){return lt.objs.files.delete_BANG_.call(null,[cljs.core.str(lt.plugins.gitlight.git.get_git_root.call(null)),cljs.core.str("/"),cljs.core.str(filename)].join(''));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.commit')) {
goog.provide('lt.plugins.gitlight.commit');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.context');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.git');
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.commit","git-commit","lt.plugins.gitlight.commit/git-commit",1069137844),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: commit",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.commit.git_commit.call(null);
})], null));
lt.plugins.gitlight.commit.git_commit = (function git_commit(){return lt.plugins.gitlight.common_ui.input_popup.call(null,"commit message?","commit",lt.plugins.gitlight.commit.git_cmd_commit);
});
lt.plugins.gitlight.commit.git_cmd_commit = (function git_cmd_commit(msg){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"commit","-m",msg);
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
goog.require('lt.util.dom');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.objs.context');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.context');
goog.require('lt.objs.proc');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.branch.branch_panel = (function branch_panel(this$){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-branches","div.gitlight-branches",1801709646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Branches"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7469__auto__ = (function iter__8232(s__8233){return (new cljs.core.LazySeq(null,(function (){var s__8233__$1 = s__8233;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8233__$1);if(temp__4092__auto__)
{var s__8233__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8233__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__8233__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__8235 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__8234 = 0;while(true){
if((i__8234 < size__7468__auto__))
{var vec__8240 = cljs.core._nth.call(null,c__7467__auto__,i__8234);var this_one_QMARK_ = cljs.core.nth.call(null,vec__8240,0,null);var vec__8241 = cljs.core.nth.call(null,vec__8240,1,null);var branch = cljs.core.nth.call(null,vec__8241,0,null);var sha1 = cljs.core.nth.call(null,vec__8241,1,null);var desc = cljs.core.nth.call(null,vec__8241,2,null);cljs.core.chunk_append.call(null,b__8235,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.common_ui.make_button.call(null,branch,"checkout branch",lt.plugins.gitlight.branch.git_checkout)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.common_ui.make_button.call(null,"pull!",branch,((function (i__8234,vec__8240,this_one_QMARK_,vec__8241,branch,sha1,desc,c__7467__auto__,size__7468__auto__,b__8235,s__8233__$2,temp__4092__auto__){
return (function (x,y){return lt.plugins.gitlight.remote_com.git_pull.call(null);
});})(i__8234,vec__8240,this_one_QMARK_,vec__8241,branch,sha1,desc,c__7467__auto__,size__7468__auto__,b__8235,s__8233__$2,temp__4092__auto__))
)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.common_ui.make_button.call(null,"merge",branch,lt.plugins.gitlight.branch.git_merge)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.common_ui.make_button.call(null,"push it!",branch,lt.plugins.gitlight.branch.git_push_it_BANG_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null));
{
var G__8260 = (i__8234 + 1);
i__8234 = G__8260;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8235),iter__8232.call(null,cljs.core.chunk_rest.call(null,s__8233__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8235),null);
}
} else
{var vec__8242 = cljs.core.first.call(null,s__8233__$2);var this_one_QMARK_ = cljs.core.nth.call(null,vec__8242,0,null);var vec__8243 = cljs.core.nth.call(null,vec__8242,1,null);var branch = cljs.core.nth.call(null,vec__8243,0,null);var sha1 = cljs.core.nth.call(null,vec__8243,1,null);var desc = cljs.core.nth.call(null,vec__8243,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.common_ui.make_button.call(null,branch,"checkout branch",lt.plugins.gitlight.branch.git_checkout)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.common_ui.make_button.call(null,"pull!",branch,((function (vec__8242,this_one_QMARK_,vec__8243,branch,sha1,desc,s__8233__$2,temp__4092__auto__){
return (function (x,y){return lt.plugins.gitlight.remote_com.git_pull.call(null);
});})(vec__8242,this_one_QMARK_,vec__8243,branch,sha1,desc,s__8233__$2,temp__4092__auto__))
)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.common_ui.make_button.call(null,"merge",branch,lt.plugins.gitlight.branch.git_merge)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.common_ui.make_button.call(null,"push it!",branch,lt.plugins.gitlight.branch.git_push_it_BANG_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null),iter__8232.call(null,cljs.core.rest.call(null,s__8233__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.new-branch","td.new-branch",3433852959),lt.plugins.gitlight.common_ui.make_button.call(null,"make a new branch",null,lt.plugins.gitlight.branch.git_new_branch)], null)], null)], null)], null));var seq__8244_8261 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8245_8262 = null;var count__8246_8263 = 0;var i__8247_8264 = 0;while(true){
if((i__8247_8264 < count__8246_8263))
{var vec__8248_8265 = cljs.core._nth.call(null,chunk__8245_8262,i__8247_8264);var ev__8115__auto___8266 = cljs.core.nth.call(null,vec__8248_8265,0,null);var func__8116__auto___8267 = cljs.core.nth.call(null,vec__8248_8265,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___8266,func__8116__auto___8267);
{
var G__8268 = seq__8244_8261;
var G__8269 = chunk__8245_8262;
var G__8270 = count__8246_8263;
var G__8271 = (i__8247_8264 + 1);
seq__8244_8261 = G__8268;
chunk__8245_8262 = G__8269;
count__8246_8263 = G__8270;
i__8247_8264 = G__8271;
continue;
}
} else
{var temp__4092__auto___8272 = cljs.core.seq.call(null,seq__8244_8261);if(temp__4092__auto___8272)
{var seq__8244_8273__$1 = temp__4092__auto___8272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8244_8273__$1))
{var c__7500__auto___8274 = cljs.core.chunk_first.call(null,seq__8244_8273__$1);{
var G__8275 = cljs.core.chunk_rest.call(null,seq__8244_8273__$1);
var G__8276 = c__7500__auto___8274;
var G__8277 = cljs.core.count.call(null,c__7500__auto___8274);
var G__8278 = 0;
seq__8244_8261 = G__8275;
chunk__8245_8262 = G__8276;
count__8246_8263 = G__8277;
i__8247_8264 = G__8278;
continue;
}
} else
{var vec__8249_8279 = cljs.core.first.call(null,seq__8244_8273__$1);var ev__8115__auto___8280 = cljs.core.nth.call(null,vec__8249_8279,0,null);var func__8116__auto___8281 = cljs.core.nth.call(null,vec__8249_8279,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___8280,func__8116__auto___8281);
{
var G__8282 = cljs.core.next.call(null,seq__8244_8273__$1);
var G__8283 = null;
var G__8284 = 0;
var G__8285 = 0;
seq__8244_8261 = G__8282;
chunk__8245_8262 = G__8283;
count__8246_8263 = G__8284;
i__8247_8264 = G__8285;
continue;
}
}
} else
{}
}
break;
}
return e__8114__auto__;
});
lt.plugins.gitlight.branch.git_branch_splitter = (function git_branch_splitter(line){var active_QMARK_ = cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,line));var to_cut = cljs.core.subs.call(null,line,2);var splitted = clojure.string.split.call(null,to_cut,/\s+/,3);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_QMARK_,splitted], null);
});
lt.plugins.gitlight.branch.parse_data = (function parse_data(data){var lines = clojure.string.split_lines.call(null,data.toString());return cljs.core.map.call(null,lt.plugins.gitlight.branch.git_branch_splitter,lines);
});
lt.plugins.gitlight.branch.git_branch_output = lt.plugins.gitlight.common_ui.make_output_tab_object.call(null,"Git branches",new cljs.core.Keyword("lt.plugins.gitlight.branch","gitlight-branches","lt.plugins.gitlight.branch/gitlight-branches",2920815417),lt.plugins.gitlight.branch.parse_data,lt.plugins.gitlight.branch.branch_panel);
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.branch","branches","lt.plugins.gitlight.branch/branches",1924152112),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: branches",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.branch.git_branches], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.ui')) {
goog.provide('lt.plugins.gitlight.status.ui');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight.branch');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.gitlight.branch');
goog.require('lt.objs.popup');
goog.require('lt.plugins.gitlight.commit');
goog.require('lt.objs.popup');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.plugins.gitlight.diff');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.commit');
goog.require('lt.plugins.gitlight.common_ui');
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
lt.plugins.gitlight.status.ui.file_ops = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["resolve",lt.plugins.gitlight.status.back.git_add], null)], null),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stage",lt.plugins.gitlight.status.back.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_button], null)], null),new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add",lt.plugins.gitlight.status.back.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete",lt.plugins.gitlight.status.back.bin_rm], null)], null),new cljs.core.Keyword(null,"staged","staged",4416376984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unstage",lt.plugins.gitlight.status.back.git_reset], null)], null)], null);
lt.plugins.gitlight.status.ui.repo_ops = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"commit","commit",3954056361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit",lt.plugins.gitlight.commit.git_commit], null),new cljs.core.Keyword(null,"push","push",1017356940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push",lt.plugins.gitlight.remote_com.git_push], null),new cljs.core.Keyword(null,"pull","pull",1017356727),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull",lt.plugins.gitlight.remote_com.git_pull], null),new cljs.core.Keyword(null,"fetch","fetch",1111226924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fetch",lt.plugins.gitlight.remote_com.git_fetch], null)], null);
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__10085){var vec__10101 = p__10085;var f = cljs.core.nth.call(null,vec__10101,0,null);var t = cljs.core.nth.call(null,vec__10101,1,null);var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str(cljs.core.first.call(null,cljs.core.name.call(null,t)).toUpperCase()),cljs.core.str(" "),cljs.core.str(f)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7469__auto__ = (function iter__10102(s__10103){return (new cljs.core.LazySeq(null,(function (){var s__10103__$1 = s__10103;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10103__$1);if(temp__4092__auto__)
{var s__10103__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10103__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__10103__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__10105 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__10104 = 0;while(true){
if((i__10104 < size__7468__auto__))
{var vec__10108 = cljs.core._nth.call(null,c__7467__auto__,i__10104);var bt = cljs.core.nth.call(null,vec__10108,0,null);var fun = cljs.core.nth.call(null,vec__10108,1,null);cljs.core.chunk_append.call(null,b__10105,lt.plugins.gitlight.common_ui.make_button.call(null,bt,f,fun));
{
var G__10184 = (i__10104 + 1);
i__10104 = G__10184;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10105),iter__10102.call(null,cljs.core.chunk_rest.call(null,s__10103__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10105),null);
}
} else
{var vec__10109 = cljs.core.first.call(null,s__10103__$2);var bt = cljs.core.nth.call(null,vec__10109,0,null);var fun = cljs.core.nth.call(null,vec__10109,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.common_ui.make_button.call(null,bt,f,fun),iter__10102.call(null,cljs.core.rest.call(null,s__10103__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__10110_10185 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10111_10186 = null;var count__10112_10187 = 0;var i__10113_10188 = 0;while(true){
if((i__10113_10188 < count__10112_10187))
{var vec__10114_10189 = cljs.core._nth.call(null,chunk__10111_10186,i__10113_10188);var ev__8115__auto___10190 = cljs.core.nth.call(null,vec__10114_10189,0,null);var func__8116__auto___10191 = cljs.core.nth.call(null,vec__10114_10189,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10190,func__8116__auto___10191);
{
var G__10192 = seq__10110_10185;
var G__10193 = chunk__10111_10186;
var G__10194 = count__10112_10187;
var G__10195 = (i__10113_10188 + 1);
seq__10110_10185 = G__10192;
chunk__10111_10186 = G__10193;
count__10112_10187 = G__10194;
i__10113_10188 = G__10195;
continue;
}
} else
{var temp__4092__auto___10196 = cljs.core.seq.call(null,seq__10110_10185);if(temp__4092__auto___10196)
{var seq__10110_10197__$1 = temp__4092__auto___10196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10110_10197__$1))
{var c__7500__auto___10198 = cljs.core.chunk_first.call(null,seq__10110_10197__$1);{
var G__10199 = cljs.core.chunk_rest.call(null,seq__10110_10197__$1);
var G__10200 = c__7500__auto___10198;
var G__10201 = cljs.core.count.call(null,c__7500__auto___10198);
var G__10202 = 0;
seq__10110_10185 = G__10199;
chunk__10111_10186 = G__10200;
count__10112_10187 = G__10201;
i__10113_10188 = G__10202;
continue;
}
} else
{var vec__10115_10203 = cljs.core.first.call(null,seq__10110_10197__$1);var ev__8115__auto___10204 = cljs.core.nth.call(null,vec__10115_10203,0,null);var func__8116__auto___10205 = cljs.core.nth.call(null,vec__10115_10203,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10204,func__8116__auto___10205);
{
var G__10206 = cljs.core.next.call(null,seq__10110_10197__$1);
var G__10207 = null;
var G__10208 = 0;
var G__10209 = 0;
seq__10110_10185 = G__10206;
chunk__10111_10186 = G__10207;
count__10112_10187 = G__10208;
i__10113_10188 = G__10209;
continue;
}
}
} else
{}
}
break;
}
return e__8114__auto__;
});
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__10122_10210 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10123_10211 = null;var count__10124_10212 = 0;var i__10125_10213 = 0;while(true){
if((i__10125_10213 < count__10124_10212))
{var vec__10126_10214 = cljs.core._nth.call(null,chunk__10123_10211,i__10125_10213);var ev__8115__auto___10215 = cljs.core.nth.call(null,vec__10126_10214,0,null);var func__8116__auto___10216 = cljs.core.nth.call(null,vec__10126_10214,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10215,func__8116__auto___10216);
{
var G__10217 = seq__10122_10210;
var G__10218 = chunk__10123_10211;
var G__10219 = count__10124_10212;
var G__10220 = (i__10125_10213 + 1);
seq__10122_10210 = G__10217;
chunk__10123_10211 = G__10218;
count__10124_10212 = G__10219;
i__10125_10213 = G__10220;
continue;
}
} else
{var temp__4092__auto___10221 = cljs.core.seq.call(null,seq__10122_10210);if(temp__4092__auto___10221)
{var seq__10122_10222__$1 = temp__4092__auto___10221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10122_10222__$1))
{var c__7500__auto___10223 = cljs.core.chunk_first.call(null,seq__10122_10222__$1);{
var G__10224 = cljs.core.chunk_rest.call(null,seq__10122_10222__$1);
var G__10225 = c__7500__auto___10223;
var G__10226 = cljs.core.count.call(null,c__7500__auto___10223);
var G__10227 = 0;
seq__10122_10210 = G__10224;
chunk__10123_10211 = G__10225;
count__10124_10212 = G__10226;
i__10125_10213 = G__10227;
continue;
}
} else
{var vec__10127_10228 = cljs.core.first.call(null,seq__10122_10222__$1);var ev__8115__auto___10229 = cljs.core.nth.call(null,vec__10127_10228,0,null);var func__8116__auto___10230 = cljs.core.nth.call(null,vec__10127_10228,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10229,func__8116__auto___10230);
{
var G__10231 = cljs.core.next.call(null,seq__10122_10222__$1);
var G__10232 = null;
var G__10233 = 0;
var G__10234 = 0;
seq__10122_10210 = G__10231;
chunk__10123_10211 = G__10232;
count__10124_10212 = G__10233;
i__10125_10213 = G__10234;
continue;
}
}
} else
{}
}
break;
}
return e__8114__auto__;
});
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.common_ui.make_button.call(null,branch,[cljs.core.str("Branch menu")].join(''),(function (x,y){return lt.plugins.gitlight.branch.git_branches.call(null);
}))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",lt.plugins.gitlight.common_ui.make_button.call(null,git_root,"Change repo",null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7469__auto__ = (function iter__10150(s__10151){return (new cljs.core.LazySeq(null,(function (){var s__10151__$1 = s__10151;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10151__$1);if(temp__4092__auto__)
{var s__10151__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10151__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__10151__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__10153 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__10152 = 0;while(true){
if((i__10152 < size__7468__auto__))
{var vec__10156 = cljs.core._nth.call(null,c__7467__auto__,i__10152);var bname = cljs.core.nth.call(null,vec__10156,0,null);var fun = cljs.core.nth.call(null,vec__10156,1,null);cljs.core.chunk_append.call(null,b__10153,lt.plugins.gitlight.common_ui.make_button.call(null,bname,git_root,fun));
{
var G__10235 = (i__10152 + 1);
i__10152 = G__10235;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10153),iter__10150.call(null,cljs.core.chunk_rest.call(null,s__10151__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10153),null);
}
} else
{var vec__10157 = cljs.core.first.call(null,s__10151__$2);var bname = cljs.core.nth.call(null,vec__10157,0,null);var fun = cljs.core.nth.call(null,vec__10157,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.common_ui.make_button.call(null,bname,git_root,fun),iter__10150.call(null,cljs.core.rest.call(null,s__10151__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,cljs.core.vals.call(null,lt.plugins.gitlight.status.ui.repo_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7469__auto__ = (function iter__10158(s__10159){return (new cljs.core.LazySeq(null,(function (){var s__10159__$1 = s__10159;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10159__$1);if(temp__4092__auto__)
{var s__10159__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10159__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__10159__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__10161 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__10160 = 0;while(true){
if((i__10160 < size__7468__auto__))
{var vec__10164 = cljs.core._nth.call(null,c__7467__auto__,i__10160);var g = cljs.core.nth.call(null,vec__10164,0,null);var fs = cljs.core.nth.call(null,vec__10164,1,null);cljs.core.chunk_append.call(null,b__10161,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10236 = (i__10160 + 1);
i__10160 = G__10236;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10161),iter__10158.call(null,cljs.core.chunk_rest.call(null,s__10159__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10161),null);
}
} else
{var vec__10165 = cljs.core.first.call(null,s__10159__$2);var g = cljs.core.nth.call(null,vec__10165,0,null);var fs = cljs.core.nth.call(null,vec__10165,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__10158.call(null,cljs.core.rest.call(null,s__10159__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,this$);
})()], null)], null));var seq__10166_10237 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10167_10238 = null;var count__10168_10239 = 0;var i__10169_10240 = 0;while(true){
if((i__10169_10240 < count__10168_10239))
{var vec__10170_10241 = cljs.core._nth.call(null,chunk__10167_10238,i__10169_10240);var ev__8115__auto___10242 = cljs.core.nth.call(null,vec__10170_10241,0,null);var func__8116__auto___10243 = cljs.core.nth.call(null,vec__10170_10241,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10242,func__8116__auto___10243);
{
var G__10244 = seq__10166_10237;
var G__10245 = chunk__10167_10238;
var G__10246 = count__10168_10239;
var G__10247 = (i__10169_10240 + 1);
seq__10166_10237 = G__10244;
chunk__10167_10238 = G__10245;
count__10168_10239 = G__10246;
i__10169_10240 = G__10247;
continue;
}
} else
{var temp__4092__auto___10248 = cljs.core.seq.call(null,seq__10166_10237);if(temp__4092__auto___10248)
{var seq__10166_10249__$1 = temp__4092__auto___10248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10166_10249__$1))
{var c__7500__auto___10250 = cljs.core.chunk_first.call(null,seq__10166_10249__$1);{
var G__10251 = cljs.core.chunk_rest.call(null,seq__10166_10249__$1);
var G__10252 = c__7500__auto___10250;
var G__10253 = cljs.core.count.call(null,c__7500__auto___10250);
var G__10254 = 0;
seq__10166_10237 = G__10251;
chunk__10167_10238 = G__10252;
count__10168_10239 = G__10253;
i__10169_10240 = G__10254;
continue;
}
} else
{var vec__10171_10255 = cljs.core.first.call(null,seq__10166_10249__$1);var ev__8115__auto___10256 = cljs.core.nth.call(null,vec__10171_10255,0,null);var func__8116__auto___10257 = cljs.core.nth.call(null,vec__10171_10255,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10256,func__8116__auto___10257);
{
var G__10258 = cljs.core.next.call(null,seq__10166_10249__$1);
var G__10259 = null;
var G__10260 = 0;
var G__10261 = 0;
seq__10166_10237 = G__10258;
chunk__10167_10238 = G__10259;
count__10168_10239 = G__10260;
i__10169_10240 = G__10261;
continue;
}
}
} else
{}
}
break;
}
return e__8114__auto__;
});
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10178_10262 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10179_10263 = null;var count__10180_10264 = 0;var i__10181_10265 = 0;while(true){
if((i__10181_10265 < count__10180_10264))
{var vec__10182_10266 = cljs.core._nth.call(null,chunk__10179_10263,i__10181_10265);var ev__8115__auto___10267 = cljs.core.nth.call(null,vec__10182_10266,0,null);var func__8116__auto___10268 = cljs.core.nth.call(null,vec__10182_10266,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10267,func__8116__auto___10268);
{
var G__10269 = seq__10178_10262;
var G__10270 = chunk__10179_10263;
var G__10271 = count__10180_10264;
var G__10272 = (i__10181_10265 + 1);
seq__10178_10262 = G__10269;
chunk__10179_10263 = G__10270;
count__10180_10264 = G__10271;
i__10181_10265 = G__10272;
continue;
}
} else
{var temp__4092__auto___10273 = cljs.core.seq.call(null,seq__10178_10262);if(temp__4092__auto___10273)
{var seq__10178_10274__$1 = temp__4092__auto___10273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10178_10274__$1))
{var c__7500__auto___10275 = cljs.core.chunk_first.call(null,seq__10178_10274__$1);{
var G__10276 = cljs.core.chunk_rest.call(null,seq__10178_10274__$1);
var G__10277 = c__7500__auto___10275;
var G__10278 = cljs.core.count.call(null,c__7500__auto___10275);
var G__10279 = 0;
seq__10178_10262 = G__10276;
chunk__10179_10263 = G__10277;
count__10180_10264 = G__10278;
i__10181_10265 = G__10279;
continue;
}
} else
{var vec__10183_10280 = cljs.core.first.call(null,seq__10178_10274__$1);var ev__8115__auto___10281 = cljs.core.nth.call(null,vec__10183_10280,0,null);var func__8116__auto___10282 = cljs.core.nth.call(null,vec__10183_10280,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10281,func__8116__auto___10282);
{
var G__10283 = cljs.core.next.call(null,seq__10178_10274__$1);
var G__10284 = null;
var G__10285 = 0;
var G__10286 = 0;
seq__10178_10262 = G__10283;
chunk__10179_10263 = G__10284;
count__10180_10264 = G__10285;
i__10181_10265 = G__10286;
continue;
}
}
} else
{}
}
break;
}
return e__8114__auto__;
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
goog.require('lt.util.js');
goog.require('lt.objs.command');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.plugins.gitlight.status.ui');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.plugins.gitlight.status.ui');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight');
lt.plugins.gitlight.status.run_git_status = (function run_git_status(){if(cljs.core.truth_(lt.plugins.gitlight.status.back.git_status.call(null)))
{if(!(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null)))
{return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.gitlight.status.ui.status_bar);
} else
{return null;
}
} else
{if(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null))
{return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"close!","close!",3951350939),lt.plugins.gitlight.status.ui.status_bar);
} else
{return null;
}
}
});
lt.plugins.gitlight.status.__BEH__init = (function __BEH__init(this$){lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.gitlight.status.ui.status_bar);
lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.git_status_out,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826));
return lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.git_status_out,new cljs.core.Keyword("lt.plugins.gitlight.status","auto-refresh-git-status","lt.plugins.gitlight.status/auto-refresh-git-status",2840366769));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","init","lt.plugins.gitlight.status/init",3068682980),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__init,new cljs.core.Keyword(null,"desc","desc",1016984067),"Init gitlight status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-status","gitlight-status",4738816205),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Status",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.status.run_git_status], null));
lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status = (function __BEH__refresh_ui_on_new_status(obj,data){if(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null))
{return lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216).cljs$core$IFn$_invoke$arity$1(data));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.plugins.gitlight.status.__BEH__auto_refresh_git_status = (function __BEH__auto_refresh_git_status(obj,data){if((lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null)) && ((new cljs.core.Keyword(null,"git-status-refresh-rate","git-status-refresh-rate",1535627140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config)) > 0)))
{return lt.util.js.wait.call(null,new cljs.core.Keyword(null,"git-status-refresh-rate","git-status-refresh-rate",1535627140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config)),(function (){if((lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null)) && (cljs.core.not.call(null,lt.plugins.gitlight.status.back.git_status.call(null))))
{return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"close!","close!",3951350939),lt.plugins.gitlight.status.ui.status_bar);
} else
{return null;
}
}));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","auto-refresh-git-status","lt.plugins.gitlight.status/auto-refresh-git-status",2840366769),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__auto_refresh_git_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"auto refresh git status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.plugins.gitlight.status.__BEH__debug_new_status = (function __BEH__debug_new_status(obj,data){return console.log("refresh",cljs.core.clj__GT_js.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","debug-new-status","lt.plugins.gitlight.status/debug-new-status",3684259709),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__debug_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"debug status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
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
lt.plugins.gitlight.tests.which_color_QMARK_ = (function which_color_QMARK_(result){var G__10020 = result;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"not-bool","not-bool",2543743254),G__10020))
{return "pink";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__10020))
{return "red";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__10020))
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
lt.plugins.gitlight.tests.test_panel = (function test_panel(this$){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7469__auto__ = (function iter__10035(s__10036){return (new cljs.core.LazySeq(null,(function (){var s__10036__$1 = s__10036;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10036__$1);if(temp__4092__auto__)
{var s__10036__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10036__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__10036__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__10038 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__10037 = 0;while(true){
if((i__10037 < size__7468__auto__))
{var map__10041 = cljs.core._nth.call(null,c__7467__auto__,i__10037);var map__10041__$1 = ((cljs.core.seq_QMARK_.call(null,map__10041))?cljs.core.apply.call(null,cljs.core.hash_map,map__10041):map__10041);var status = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"info","info",1017141280));cljs.core.chunk_append.call(null,b__10038,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null));
{
var G__10059 = (i__10037 + 1);
i__10037 = G__10059;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10038),iter__10035.call(null,cljs.core.chunk_rest.call(null,s__10036__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10038),null);
}
} else
{var map__10042 = cljs.core.first.call(null,s__10036__$2);var map__10042__$1 = ((cljs.core.seq_QMARK_.call(null,map__10042))?cljs.core.apply.call(null,cljs.core.hash_map,map__10042):map__10042);var status = cljs.core.get.call(null,map__10042__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10042__$1,new cljs.core.Keyword(null,"info","info",1017141280));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null),iter__10035.call(null,cljs.core.rest.call(null,s__10036__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__10043_10060 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10044_10061 = null;var count__10045_10062 = 0;var i__10046_10063 = 0;while(true){
if((i__10046_10063 < count__10045_10062))
{var vec__10047_10064 = cljs.core._nth.call(null,chunk__10044_10061,i__10046_10063);var ev__8115__auto___10065 = cljs.core.nth.call(null,vec__10047_10064,0,null);var func__8116__auto___10066 = cljs.core.nth.call(null,vec__10047_10064,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10065,func__8116__auto___10066);
{
var G__10067 = seq__10043_10060;
var G__10068 = chunk__10044_10061;
var G__10069 = count__10045_10062;
var G__10070 = (i__10046_10063 + 1);
seq__10043_10060 = G__10067;
chunk__10044_10061 = G__10068;
count__10045_10062 = G__10069;
i__10046_10063 = G__10070;
continue;
}
} else
{var temp__4092__auto___10071 = cljs.core.seq.call(null,seq__10043_10060);if(temp__4092__auto___10071)
{var seq__10043_10072__$1 = temp__4092__auto___10071;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10043_10072__$1))
{var c__7500__auto___10073 = cljs.core.chunk_first.call(null,seq__10043_10072__$1);{
var G__10074 = cljs.core.chunk_rest.call(null,seq__10043_10072__$1);
var G__10075 = c__7500__auto___10073;
var G__10076 = cljs.core.count.call(null,c__7500__auto___10073);
var G__10077 = 0;
seq__10043_10060 = G__10074;
chunk__10044_10061 = G__10075;
count__10045_10062 = G__10076;
i__10046_10063 = G__10077;
continue;
}
} else
{var vec__10048_10078 = cljs.core.first.call(null,seq__10043_10072__$1);var ev__8115__auto___10079 = cljs.core.nth.call(null,vec__10048_10078,0,null);var func__8116__auto___10080 = cljs.core.nth.call(null,vec__10048_10078,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10079,func__8116__auto___10080);
{
var G__10081 = cljs.core.next.call(null,seq__10043_10072__$1);
var G__10082 = null;
var G__10083 = 0;
var G__10084 = 0;
seq__10043_10060 = G__10081;
chunk__10044_10061 = G__10082;
count__10045_10062 = G__10083;
i__10046_10063 = G__10084;
continue;
}
}
} else
{}
}
break;
}
return e__8114__auto__;
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
lt.plugins.gitlight.tests.lib.selector_asrt = (function selector_asrt(p__10287){var map__10289 = p__10287;var map__10289__$1 = ((cljs.core.seq_QMARK_.call(null,map__10289))?cljs.core.apply.call(null,cljs.core.hash_map,map__10289):map__10289);var select = cljs.core.get.call(null,map__10289__$1,new cljs.core.Keyword(null,"select","select",4402849902));return null;
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
lt.plugins.gitlight.tests.status.back.change_filenames = (function change_filenames(filename,x){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10313_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filename","filename",4574102905),p1__10313_SHARP_))
{return filename;
} else
{return p1__10313_SHARP_;
}
}),x));
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","back-tests","lt.plugins.gitlight.tests.status.back/back-tests",4633446629),(function (){lt.plugins.gitlight.tests.status.back.test_data = (function test_data(pair){var vec__10317 = pair;var n = cljs.core.nth.call(null,vec__10317,0,null);var what = cljs.core.nth.call(null,vec__10317,1,null);var vec__10318 = what;var tst = cljs.core.nth.call(null,vec__10318,0,null);var parsed = cljs.core.nth.call(null,vec__10318,1,null);var vec__10319 = tst;var X = cljs.core.nth.call(null,vec__10319,0,null);var Y = cljs.core.nth.call(null,vec__10319,1,null);var filename = cljs.core.nth.call(null,vec__10319,2,null);var d = cljs.core.nth.call(null,lt.plugins.gitlight.tests.status.back.data,n);var what_should_be = cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.tests.status.back.change_filenames,filename),d));var what_is = cljs.core.sort.call(null,parsed);var tst__$1 = cljs.core._EQ_.call(null,what_should_be,what_is);if(!(tst__$1))
{lt.plugins.gitlight.tests.lib.asrt.call(null,[cljs.core.str("parsing porcelain: `"),cljs.core.str(X),cljs.core.str("' `"),cljs.core.str(Y),cljs.core.str("'")].join(''),tst__$1);
} else
{}
return tst__$1;
});
lt.plugins.gitlight.tests.status.back.generate_test_data = (function generate_test_data(){var iter__7469__auto__ = (function iter__10326(s__10327){return (new cljs.core.LazySeq(null,(function (){var s__10327__$1 = s__10327;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10327__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7465__auto__ = ((function (s__10327__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__10328(s__10329){return (new cljs.core.LazySeq(null,((function (s__10327__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__10329__$1 = s__10329;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10329__$1);if(temp__4092__auto____$1)
{var s__10329__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10329__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__10329__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__10331 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__10330 = 0;while(true){
if((i__10330 < size__7468__auto__))
{var y = cljs.core._nth.call(null,c__7467__auto__,i__10330);cljs.core.chunk_append.call(null,b__10331,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})());
{
var G__10342 = (i__10330 + 1);
i__10330 = G__10342;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10331),iter__10328.call(null,cljs.core.chunk_rest.call(null,s__10329__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10331),null);
}
} else
{var y = cljs.core.first.call(null,s__10329__$2);return cljs.core.cons.call(null,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})(),iter__10328.call(null,cljs.core.rest.call(null,s__10329__$2)));
}
} else
{return null;
}
break;
}
});})(s__10327__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__10327__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7466__auto__ = cljs.core.seq.call(null,iterys__7465__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","D","U"], null)));if(fs__7466__auto__)
{return cljs.core.concat.call(null,fs__7466__auto__,iter__10326.call(null,cljs.core.rest.call(null,s__10327__$1)));
} else
{{
var G__10343 = cljs.core.rest.call(null,s__10327__$1);
s__10327__$1 = G__10343;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","R","C","D","U"], null));
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
after.cljs$lang$applyTo = (function (arglist__10312){
var text = cljs.core.first(arglist__10312);
arglist__10312 = cljs.core.next(arglist__10312);
var cwd = cljs.core.first(arglist__10312);
arglist__10312 = cljs.core.next(arglist__10312);
var data = cljs.core.first(arglist__10312);
var what_next = cljs.core.rest(arglist__10312);
return after__delegate(text,cwd,data,what_next);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
lt.plugins.gitlight.tests.remote_com.__BEH__git_test_exit_status__DOT__out = (function __BEH__git_test_exit_status__DOT__out(obj,data){var cwd = cljs.core.deref.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));var G__10301 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));if(cljs.core._EQ_.call(null,"push",G__10301))
{return lt.plugins.gitlight.tests.lib.asrt.call(null,"git push",cljs.core._EQ_.call(null,0,data));
} else
{if(cljs.core._EQ_.call(null,"commit",G__10301))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git commit",cwd,data,"push");
} else
{if(cljs.core._EQ_.call(null,"add",G__10301))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git add",cwd,data,"commit","-m","commiting");
} else
{if(cljs.core._EQ_.call(null,"pull",G__10301))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git pull",cwd,data,"add","push_me");
} else
{if(cljs.core._EQ_.call(null,"fetch",G__10301))
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
lt.plugins.gitlight.tests.status.ui.test_node = (function test_node(){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"test"], null));var seq__10350_10366 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10351_10367 = null;var count__10352_10368 = 0;var i__10353_10369 = 0;while(true){
if((i__10353_10369 < count__10352_10368))
{var vec__10354_10370 = cljs.core._nth.call(null,chunk__10351_10367,i__10353_10369);var ev__8115__auto___10371 = cljs.core.nth.call(null,vec__10354_10370,0,null);var func__8116__auto___10372 = cljs.core.nth.call(null,vec__10354_10370,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10371,func__8116__auto___10372);
{
var G__10373 = seq__10350_10366;
var G__10374 = chunk__10351_10367;
var G__10375 = count__10352_10368;
var G__10376 = (i__10353_10369 + 1);
seq__10350_10366 = G__10373;
chunk__10351_10367 = G__10374;
count__10352_10368 = G__10375;
i__10353_10369 = G__10376;
continue;
}
} else
{var temp__4092__auto___10377 = cljs.core.seq.call(null,seq__10350_10366);if(temp__4092__auto___10377)
{var seq__10350_10378__$1 = temp__4092__auto___10377;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10350_10378__$1))
{var c__7500__auto___10379 = cljs.core.chunk_first.call(null,seq__10350_10378__$1);{
var G__10380 = cljs.core.chunk_rest.call(null,seq__10350_10378__$1);
var G__10381 = c__7500__auto___10379;
var G__10382 = cljs.core.count.call(null,c__7500__auto___10379);
var G__10383 = 0;
seq__10350_10366 = G__10380;
chunk__10351_10367 = G__10381;
count__10352_10368 = G__10382;
i__10353_10369 = G__10383;
continue;
}
} else
{var vec__10355_10384 = cljs.core.first.call(null,seq__10350_10378__$1);var ev__8115__auto___10385 = cljs.core.nth.call(null,vec__10355_10384,0,null);var func__8116__auto___10386 = cljs.core.nth.call(null,vec__10355_10384,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10385,func__8116__auto___10386);
{
var G__10387 = cljs.core.next.call(null,seq__10350_10378__$1);
var G__10388 = null;
var G__10389 = 0;
var G__10390 = 0;
seq__10350_10366 = G__10387;
chunk__10351_10367 = G__10388;
count__10352_10368 = G__10389;
i__10353_10369 = G__10390;
continue;
}
}
} else
{}
}
break;
}
return e__8114__auto__;
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.ui","test","lt.plugins.gitlight.tests.status.ui/test",1681010124),(function (){return lt.plugins.gitlight.tests.lib.asrt.call(null,"dom-truncate: truncates",(function (){var tn = lt.plugins.gitlight.tests.status.ui.test_node.call(null);lt.plugins.gitlight.common_ui.dom_truncate.call(null,tn);
return cljs.core._EQ_.call(null,tn.innerHTML,"");
})());
}));
}
if(!lt.util.load.provided_QMARK_('')) {
}

//# sourceMappingURL=gitlight_compiled.js.map