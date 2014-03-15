if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
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
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.execute')) {
goog.provide('lt.plugins.gitlight.execute');
goog.require('cljs.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.execute.exec = require("child_process").exec;
lt.plugins.gitlight.execute.run = (function run(return_obj,path,command,input){var child_proc = lt.plugins.gitlight.execute.exec.call(null,command,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",path], null)),(function (err,stdout,stderr){if(cljs.core.truth_(err))
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword(null,"err","err",1014004951),err,stderr);
} else
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword(null,"out","out",1014014656),stdout,stderr);
}
}));var proc_input = child_proc.stdin;return proc_input.end(input);
});
lt.plugins.gitlight.execute.run_deaf = (function run_deaf(return_obj,path,command){return lt.plugins.gitlight.execute.run.call(null,return_obj,path,command,"");
});
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
goog.require('lt.plugins.gitlight.execute');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.execute');
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
var git_command_cwd__delegate = function (obj,cwd,args){var git_path = new cljs.core.Keyword(null,"git-binary","git-binary",1640221134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config));var command = [cljs.core.str(git_path),cljs.core.str(" "),cljs.core.str(clojure.string.join.call(null," ",args))].join('');return lt.plugins.gitlight.execute.run_deaf.call(null,obj,cwd,command);
};
var git_command_cwd = function (obj,cwd,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return git_command_cwd__delegate.call(this,obj,cwd,args);};
git_command_cwd.cljs$lang$maxFixedArity = 2;
git_command_cwd.cljs$lang$applyTo = (function (arglist__9722){
var obj = cljs.core.first(arglist__9722);
arglist__9722 = cljs.core.next(arglist__9722);
var cwd = cljs.core.first(arglist__9722);
var args = cljs.core.rest(arglist__9722);
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
git_command.cljs$lang$applyTo = (function (arglist__9723){
var obj = cljs.core.first(arglist__9723);
var args = cljs.core.rest(arglist__9723);
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
git_command_ignore_out.cljs$lang$applyTo = (function (arglist__9724){
var args = cljs.core.seq(arglist__9724);
return git_command_ignore_out__delegate(args);
});
git_command_ignore_out.cljs$core$IFn$_invoke$arity$variadic = git_command_ignore_out__delegate;
return git_command_ignore_out;
})()
;
lt.plugins.gitlight.git.__BEH__ignore__DOT__out_success = (function __BEH__ignore__DOT__out_success(obj,data,err){return lt.objs.notifos.set_msg_BANG_.call(null,"git: success!");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-success","lt.plugins.gitlight.git/ignore.out-success",2272362317),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
lt.plugins.gitlight.git.__BEH__ignore__DOT__out_error = (function __BEH__ignore__DOT__out_error(obj,err,stderr){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("git failed!: "),cljs.core.str(stderr.toString())].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-error","lt.plugins.gitlight.git/ignore.out-error",2426640522),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out_error,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null));
lt.plugins.gitlight.git.git_ignore_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","git-ignore-out","lt.plugins.gitlight.git/git-ignore-out",1518510219),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-ignore-out","git-ignore-out",3448111392)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-success","lt.plugins.gitlight.git/ignore.out-success",2272362317),new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-error","lt.plugins.gitlight.git/ignore.out-error",2426640522)], null)));
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
lt.plugins.gitlight.common_ui.button = (function button(n,f,fun){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__10562_10597 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__10563_10598 = null;var count__10564_10599 = 0;var i__10565_10600 = 0;while(true){
if((i__10565_10600 < count__10564_10599))
{var vec__10566_10601 = cljs.core._nth.call(null,chunk__10563_10598,i__10565_10600);var ev__8115__auto___10602 = cljs.core.nth.call(null,vec__10566_10601,0,null);var func__8116__auto___10603 = cljs.core.nth.call(null,vec__10566_10601,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10602,func__8116__auto___10603);
{
var G__10604 = seq__10562_10597;
var G__10605 = chunk__10563_10598;
var G__10606 = count__10564_10599;
var G__10607 = (i__10565_10600 + 1);
seq__10562_10597 = G__10604;
chunk__10563_10598 = G__10605;
count__10564_10599 = G__10606;
i__10565_10600 = G__10607;
continue;
}
} else
{var temp__4092__auto___10608 = cljs.core.seq.call(null,seq__10562_10597);if(temp__4092__auto___10608)
{var seq__10562_10609__$1 = temp__4092__auto___10608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10562_10609__$1))
{var c__7500__auto___10610 = cljs.core.chunk_first.call(null,seq__10562_10609__$1);{
var G__10611 = cljs.core.chunk_rest.call(null,seq__10562_10609__$1);
var G__10612 = c__7500__auto___10610;
var G__10613 = cljs.core.count.call(null,c__7500__auto___10610);
var G__10614 = 0;
seq__10562_10597 = G__10611;
chunk__10563_10598 = G__10612;
count__10564_10599 = G__10613;
i__10565_10600 = G__10614;
continue;
}
} else
{var vec__10567_10615 = cljs.core.first.call(null,seq__10562_10609__$1);var ev__8115__auto___10616 = cljs.core.nth.call(null,vec__10567_10615,0,null);var func__8116__auto___10617 = cljs.core.nth.call(null,vec__10567_10615,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10616,func__8116__auto___10617);
{
var G__10618 = cljs.core.next.call(null,seq__10562_10609__$1);
var G__10619 = null;
var G__10620 = 0;
var G__10621 = 0;
seq__10562_10597 = G__10618;
chunk__10563_10598 = G__10619;
count__10564_10599 = G__10620;
i__10565_10600 = G__10621;
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
lt.plugins.gitlight.common_ui.classy_button = (function classy_button(cls,n,f,fun){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__10574_10622 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__10575_10623 = null;var count__10576_10624 = 0;var i__10577_10625 = 0;while(true){
if((i__10577_10625 < count__10576_10624))
{var vec__10578_10626 = cljs.core._nth.call(null,chunk__10575_10623,i__10577_10625);var ev__8115__auto___10627 = cljs.core.nth.call(null,vec__10578_10626,0,null);var func__8116__auto___10628 = cljs.core.nth.call(null,vec__10578_10626,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10627,func__8116__auto___10628);
{
var G__10629 = seq__10574_10622;
var G__10630 = chunk__10575_10623;
var G__10631 = count__10576_10624;
var G__10632 = (i__10577_10625 + 1);
seq__10574_10622 = G__10629;
chunk__10575_10623 = G__10630;
count__10576_10624 = G__10631;
i__10577_10625 = G__10632;
continue;
}
} else
{var temp__4092__auto___10633 = cljs.core.seq.call(null,seq__10574_10622);if(temp__4092__auto___10633)
{var seq__10574_10634__$1 = temp__4092__auto___10633;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10574_10634__$1))
{var c__7500__auto___10635 = cljs.core.chunk_first.call(null,seq__10574_10634__$1);{
var G__10636 = cljs.core.chunk_rest.call(null,seq__10574_10634__$1);
var G__10637 = c__7500__auto___10635;
var G__10638 = cljs.core.count.call(null,c__7500__auto___10635);
var G__10639 = 0;
seq__10574_10622 = G__10636;
chunk__10575_10623 = G__10637;
count__10576_10624 = G__10638;
i__10577_10625 = G__10639;
continue;
}
} else
{var vec__10579_10640 = cljs.core.first.call(null,seq__10574_10634__$1);var ev__8115__auto___10641 = cljs.core.nth.call(null,vec__10579_10640,0,null);var func__8116__auto___10642 = cljs.core.nth.call(null,vec__10579_10640,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10641,func__8116__auto___10642);
{
var G__10643 = cljs.core.next.call(null,seq__10574_10634__$1);
var G__10644 = null;
var G__10645 = 0;
var G__10646 = 0;
seq__10574_10622 = G__10643;
chunk__10575_10623 = G__10644;
count__10576_10624 = G__10645;
i__10577_10625 = G__10646;
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
lt.plugins.gitlight.common_ui.__GT_value = (function __GT_value(p__10580){var map__10582 = p__10580;var map__10582__$1 = ((cljs.core.seq_QMARK_.call(null,map__10582))?cljs.core.apply.call(null,cljs.core.hash_map,map__10582):map__10582);var value = cljs.core.get.call(null,map__10582__$1,new cljs.core.Keyword(null,"value","value",1125876963));if(cljs.core.not.call(null,value))
{return "";
} else
{return value;
}
});
lt.plugins.gitlight.common_ui.input = (function input(this$){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.option","input.option",1495945867),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013)),new cljs.core.Keyword(null,"value","value",1125876963),crate.binding.bound.call(null,this$,lt.plugins.gitlight.common_ui.__GT_value)], null)], null));var seq__10589_10647 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){var me = this;return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.common_ui.common_input)),lt.util.dom.val.call(null,me));
})], null)));var chunk__10590_10648 = null;var count__10591_10649 = 0;var i__10592_10650 = 0;while(true){
if((i__10592_10650 < count__10591_10649))
{var vec__10593_10651 = cljs.core._nth.call(null,chunk__10590_10648,i__10592_10650);var ev__8115__auto___10652 = cljs.core.nth.call(null,vec__10593_10651,0,null);var func__8116__auto___10653 = cljs.core.nth.call(null,vec__10593_10651,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10652,func__8116__auto___10653);
{
var G__10654 = seq__10589_10647;
var G__10655 = chunk__10590_10648;
var G__10656 = count__10591_10649;
var G__10657 = (i__10592_10650 + 1);
seq__10589_10647 = G__10654;
chunk__10590_10648 = G__10655;
count__10591_10649 = G__10656;
i__10592_10650 = G__10657;
continue;
}
} else
{var temp__4092__auto___10658 = cljs.core.seq.call(null,seq__10589_10647);if(temp__4092__auto___10658)
{var seq__10589_10659__$1 = temp__4092__auto___10658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10589_10659__$1))
{var c__7500__auto___10660 = cljs.core.chunk_first.call(null,seq__10589_10659__$1);{
var G__10661 = cljs.core.chunk_rest.call(null,seq__10589_10659__$1);
var G__10662 = c__7500__auto___10660;
var G__10663 = cljs.core.count.call(null,c__7500__auto___10660);
var G__10664 = 0;
seq__10589_10647 = G__10661;
chunk__10590_10648 = G__10662;
count__10591_10649 = G__10663;
i__10592_10650 = G__10664;
continue;
}
} else
{var vec__10594_10665 = cljs.core.first.call(null,seq__10589_10659__$1);var ev__8115__auto___10666 = cljs.core.nth.call(null,vec__10594_10665,0,null);var func__8116__auto___10667 = cljs.core.nth.call(null,vec__10594_10665,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10666,func__8116__auto___10667);
{
var G__10668 = cljs.core.next.call(null,seq__10589_10659__$1);
var G__10669 = null;
var G__10670 = 0;
var G__10671 = 0;
seq__10589_10647 = G__10668;
chunk__10590_10648 = G__10669;
count__10591_10649 = G__10670;
i__10592_10650 = G__10671;
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
lt.plugins.gitlight.common_ui.mesg_atom = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.common_ui.common_input));
lt.plugins.gitlight.common_ui.handle_input_and_clear = (function handle_input_and_clear(fun){cljs.core.apply.call(null,fun,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,lt.plugins.gitlight.common_ui.mesg_atom)], null));
return lt.plugins.gitlight.common_ui.clear_input.call(null);
});
lt.plugins.gitlight.common_ui.clear_input = (function clear_input(){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.common_ui.mesg_atom,null);
});
lt.plugins.gitlight.common_ui.input_popup = (function input_popup(mesg,label,fun){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),mesg,new cljs.core.Keyword(null,"body","body",1016933652),lt.plugins.gitlight.common_ui.input.call(null,lt.plugins.gitlight.common_ui.common_input),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),label,new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.plugins.gitlight.common_ui.handle_input_and_clear.call(null,fun);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel",new cljs.core.Keyword(null,"action","action",3885920680),lt.plugins.gitlight.common_ui.clear_input], null)], null)], null));
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
lt.plugins.gitlight.common_ui.make_refresh_tab_behavior = (function make_refresh_tab_behavior(obj,k){lt.plugins.gitlight.common_ui.__BEH__k = (function __BEH__k(this$,data,err){lt.objs.tabs.add_or_focus_BANG_.call(null,obj);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),data);
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
return lt.object.behavior_STAR_.call(null,k,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__k,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
});
lt.plugins.gitlight.common_ui.make_keywords = (function make_keywords(k){var kwrdstr = cljs.core.subs.call(null,[cljs.core.str(k)].join(''),1);return cljs.core.map.call(null,(function (x){return cljs.core.keyword.call(null,[cljs.core.str(kwrdstr),cljs.core.str(x)].join(''));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-out","-refresh-results","-refresh-tab-results","-output"], null));
});
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,ui_fun){var vec__10596 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__10596,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__10596,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__10596,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__10596,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__10596,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return ui_fun.call(null,this$);
});})(vec__10596,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);var tab = lt.object.create.call(null,tab_obj);var command_output = lt.plugins.gitlight.common_ui.make_refresh_tab_behavior.call(null,tab,refresh_tab_kwd);return lt.object.create.call(null,lt.object.object_STAR_.call(null,command_output_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gitlight-tab-output","gitlight-tab-output",1332604564),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_output], null)));
});
lt.plugins.gitlight.common_ui.make_button = (function make_button(n,f,fun){return lt.plugins.gitlight.common_ui.button.call(null,n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.make_classy_button = (function make_classy_button(n,f,fun){return lt.plugins.gitlight.common_ui.classy_button.call(null,[cljs.core.str(n)].join(''),n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___10672 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___10672))
{var ts_10673 = temp__4092__auto___10672;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_10673))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_10673);
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
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__9716){var vec__9717 = p__9716;var k = cljs.core.nth.call(null,vec__9717,0,null);var v = cljs.core.nth.call(null,vec__9717,1,null);if(typeof k === 'string')
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
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__9720){var vec__9721 = p__9720;var k = cljs.core.nth.call(null,vec__9721,0,null);var v = cljs.core.nth.call(null,vec__9721,1,null);if((k instanceof cljs.core.Keyword))
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
lt.plugins.gitlight.diff.click_run_function_update = (function click_run_function_update(fun,up,x,y){fun.call(null);
return up.call(null);
});
lt.plugins.gitlight.diff.context = cljs.core.atom.call(null,3);
lt.plugins.gitlight.diff.last_filename = cljs.core.atom.call(null,null);
lt.plugins.gitlight.diff.git_diff_update_fun = (function git_diff_update_fun(){return lt.plugins.gitlight.diff.git_diff.call(null,cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename));
});
lt.plugins.gitlight.diff.make_context = (function make_context(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context","div.context",3533479108),lt.plugins.gitlight.common_ui.make_button.call(null,"-","-",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.dec);
}),lt.plugins.gitlight.diff.git_diff_update_fun)),[cljs.core.str("context: "),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join(''),lt.plugins.gitlight.common_ui.make_button.call(null,"+","+",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.inc);
}),lt.plugins.gitlight.diff.git_diff_update_fun))], null);
});
lt.plugins.gitlight.diff.make_more_context = (function make_more_context(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.more-context","div.more-context",3304815846),lt.plugins.gitlight.common_ui.make_button.call(null,"whole file","whole file",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,100000);
}),lt.plugins.gitlight.diff.git_diff_update_fun)),lt.plugins.gitlight.common_ui.make_button.call(null,"reset","reset",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,3);
}),lt.plugins.gitlight.diff.git_diff_update_fun))], null);
});
lt.plugins.gitlight.diff.diff_panel = (function diff_panel(this$){var e__8114__auto__ = crate.core.html.call(null,(function (){var output = new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-diff","div.gitlight-diff",3415869571),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),lt.plugins.gitlight.diff.make_context.call(null),lt.plugins.gitlight.diff.make_more_context.call(null),(function (){var iter__7469__auto__ = ((function (output){
return (function iter__9057(s__9058){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__9058__$1 = s__9058;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9058__$1);if(temp__4092__auto__)
{var s__9058__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9058__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__9058__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__9060 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__9059 = 0;while(true){
if((i__9059 < size__7468__auto__))
{var file = cljs.core._nth.call(null,c__7467__auto__,i__9059);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);cljs.core.chunk_append.call(null,b__9060,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (i__9059,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function iter__9357(s__9358){return (new cljs.core.LazySeq(null,((function (i__9059,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9358__$1 = s__9358;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9358__$1);if(temp__4092__auto____$1)
{var s__9358__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9358__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__9358__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__9360 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__9359 = 0;while(true){
if((i__9359 < size__7468__auto____$1))
{var changes_group = cljs.core._nth.call(null,c__7467__auto____$1,i__9359);cljs.core.chunk_append.call(null,b__9360,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (i__9359,i__9059,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function iter__9433(s__9434){return (new cljs.core.LazySeq(null,((function (i__9359,i__9059,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9434__$1 = s__9434;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9434__$1);if(temp__4092__auto____$2)
{var s__9434__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9434__$2))
{var c__7467__auto____$2 = cljs.core.chunk_first.call(null,s__9434__$2);var size__7468__auto____$2 = cljs.core.count.call(null,c__7467__auto____$2);var b__9436 = cljs.core.chunk_buffer.call(null,size__7468__auto____$2);if((function (){var i__9435 = 0;while(true){
if((i__9435 < size__7468__auto____$2))
{var line_group = cljs.core._nth.call(null,c__7467__auto____$2,i__9435);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9436,(function (){var iter__7469__auto__ = ((function (i__9435,i__9359,i__9059,columned,c,columns,line_group,c__7467__auto____$2,size__7468__auto____$2,b__9436,s__9434__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function iter__9453(s__9454){return (new cljs.core.LazySeq(null,((function (i__9435,i__9359,i__9059,columned,c,columns,line_group,c__7467__auto____$2,size__7468__auto____$2,b__9436,s__9434__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9454__$1 = s__9454;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9454__$1);if(temp__4092__auto____$3)
{var s__9454__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9454__$2))
{var c__7467__auto____$3 = cljs.core.chunk_first.call(null,s__9454__$2);var size__7468__auto____$3 = cljs.core.count.call(null,c__7467__auto____$3);var b__9456 = cljs.core.chunk_buffer.call(null,size__7468__auto____$3);if((function (){var i__9455 = 0;while(true){
if((i__9455 < size__7468__auto____$3))
{var vec__9459 = cljs.core._nth.call(null,c__7467__auto____$3,i__9455);var left = cljs.core.nth.call(null,vec__9459,0,null);var right = cljs.core.nth.call(null,vec__9459,1,null);cljs.core.chunk_append.call(null,b__9456,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9674 = (i__9455 + 1);
i__9455 = G__9674;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9456),iter__9453.call(null,cljs.core.chunk_rest.call(null,s__9454__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9456),null);
}
} else
{var vec__9460 = cljs.core.first.call(null,s__9454__$2);var left = cljs.core.nth.call(null,vec__9460,0,null);var right = cljs.core.nth.call(null,vec__9460,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9453.call(null,cljs.core.rest.call(null,s__9454__$2)));
}
} else
{return null;
}
break;
}
});})(i__9435,i__9359,i__9059,columned,c,columns,line_group,c__7467__auto____$2,size__7468__auto____$2,b__9436,s__9434__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(i__9435,i__9359,i__9059,columned,c,columns,line_group,c__7467__auto____$2,size__7468__auto____$2,b__9436,s__9434__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})());
{
var G__9675 = (i__9435 + 1);
i__9435 = G__9675;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9436),iter__9433.call(null,cljs.core.chunk_rest.call(null,s__9434__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9436),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9434__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7469__auto__ = ((function (i__9359,i__9059,columned,c,columns,line_group,s__9434__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function iter__9461(s__9462){return (new cljs.core.LazySeq(null,((function (i__9359,i__9059,columned,c,columns,line_group,s__9434__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9462__$1 = s__9462;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9462__$1);if(temp__4092__auto____$3)
{var s__9462__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9462__$2))
{var c__7467__auto____$2 = cljs.core.chunk_first.call(null,s__9462__$2);var size__7468__auto____$2 = cljs.core.count.call(null,c__7467__auto____$2);var b__9464 = cljs.core.chunk_buffer.call(null,size__7468__auto____$2);if((function (){var i__9463 = 0;while(true){
if((i__9463 < size__7468__auto____$2))
{var vec__9467 = cljs.core._nth.call(null,c__7467__auto____$2,i__9463);var left = cljs.core.nth.call(null,vec__9467,0,null);var right = cljs.core.nth.call(null,vec__9467,1,null);cljs.core.chunk_append.call(null,b__9464,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9676 = (i__9463 + 1);
i__9463 = G__9676;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9464),iter__9461.call(null,cljs.core.chunk_rest.call(null,s__9462__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9464),null);
}
} else
{var vec__9468 = cljs.core.first.call(null,s__9462__$2);var left = cljs.core.nth.call(null,vec__9468,0,null);var right = cljs.core.nth.call(null,vec__9468,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9461.call(null,cljs.core.rest.call(null,s__9462__$2)));
}
} else
{return null;
}
break;
}
});})(i__9359,i__9059,columned,c,columns,line_group,s__9434__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(i__9359,i__9059,columned,c,columns,line_group,s__9434__$2,temp__4092__auto____$2,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})(),iter__9433.call(null,cljs.core.rest.call(null,s__9434__$2)));
}
} else
{return null;
}
break;
}
});})(i__9359,i__9059,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(i__9359,i__9059,changes_group,c__7467__auto____$1,size__7468__auto____$1,b__9360,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__9677 = (i__9359 + 1);
i__9359 = G__9677;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9360),iter__9357.call(null,cljs.core.chunk_rest.call(null,s__9358__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9360),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9358__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (i__9059,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function iter__9469(s__9470){return (new cljs.core.LazySeq(null,((function (i__9059,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9470__$1 = s__9470;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9470__$1);if(temp__4092__auto____$2)
{var s__9470__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9470__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__9470__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__9472 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__9471 = 0;while(true){
if((i__9471 < size__7468__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7467__auto____$1,i__9471);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9472,(function (){var iter__7469__auto__ = ((function (i__9471,i__9059,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__9472,s__9470__$2,temp__4092__auto____$2,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function iter__9489(s__9490){return (new cljs.core.LazySeq(null,((function (i__9471,i__9059,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__9472,s__9470__$2,temp__4092__auto____$2,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9490__$1 = s__9490;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9490__$1);if(temp__4092__auto____$3)
{var s__9490__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9490__$2))
{var c__7467__auto____$2 = cljs.core.chunk_first.call(null,s__9490__$2);var size__7468__auto____$2 = cljs.core.count.call(null,c__7467__auto____$2);var b__9492 = cljs.core.chunk_buffer.call(null,size__7468__auto____$2);if((function (){var i__9491 = 0;while(true){
if((i__9491 < size__7468__auto____$2))
{var vec__9495 = cljs.core._nth.call(null,c__7467__auto____$2,i__9491);var left = cljs.core.nth.call(null,vec__9495,0,null);var right = cljs.core.nth.call(null,vec__9495,1,null);cljs.core.chunk_append.call(null,b__9492,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9678 = (i__9491 + 1);
i__9491 = G__9678;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9492),iter__9489.call(null,cljs.core.chunk_rest.call(null,s__9490__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9492),null);
}
} else
{var vec__9496 = cljs.core.first.call(null,s__9490__$2);var left = cljs.core.nth.call(null,vec__9496,0,null);var right = cljs.core.nth.call(null,vec__9496,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9489.call(null,cljs.core.rest.call(null,s__9490__$2)));
}
} else
{return null;
}
break;
}
});})(i__9471,i__9059,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__9472,s__9470__$2,temp__4092__auto____$2,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(i__9471,i__9059,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__9472,s__9470__$2,temp__4092__auto____$2,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})());
{
var G__9679 = (i__9471 + 1);
i__9471 = G__9679;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9472),iter__9469.call(null,cljs.core.chunk_rest.call(null,s__9470__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9472),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9470__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7469__auto__ = ((function (i__9059,columned,c,columns,line_group,s__9470__$2,temp__4092__auto____$2,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function iter__9497(s__9498){return (new cljs.core.LazySeq(null,((function (i__9059,columned,c,columns,line_group,s__9470__$2,temp__4092__auto____$2,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9498__$1 = s__9498;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9498__$1);if(temp__4092__auto____$3)
{var s__9498__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9498__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__9498__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__9500 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__9499 = 0;while(true){
if((i__9499 < size__7468__auto____$1))
{var vec__9503 = cljs.core._nth.call(null,c__7467__auto____$1,i__9499);var left = cljs.core.nth.call(null,vec__9503,0,null);var right = cljs.core.nth.call(null,vec__9503,1,null);cljs.core.chunk_append.call(null,b__9500,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9680 = (i__9499 + 1);
i__9499 = G__9680;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9500),iter__9497.call(null,cljs.core.chunk_rest.call(null,s__9498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9500),null);
}
} else
{var vec__9504 = cljs.core.first.call(null,s__9498__$2);var left = cljs.core.nth.call(null,vec__9504,0,null);var right = cljs.core.nth.call(null,vec__9504,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9497.call(null,cljs.core.rest.call(null,s__9498__$2)));
}
} else
{return null;
}
break;
}
});})(i__9059,columned,c,columns,line_group,s__9470__$2,temp__4092__auto____$2,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(i__9059,columned,c,columns,line_group,s__9470__$2,temp__4092__auto____$2,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})(),iter__9469.call(null,cljs.core.rest.call(null,s__9470__$2)));
}
} else
{return null;
}
break;
}
});})(i__9059,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(i__9059,changes_group,s__9358__$2,temp__4092__auto____$1,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9357.call(null,cljs.core.rest.call(null,s__9358__$2)));
}
} else
{return null;
}
break;
}
});})(i__9059,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(i__9059,filename,file_diff,file,c__7467__auto__,size__7468__auto__,b__9060,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null));
{
var G__9681 = (i__9059 + 1);
i__9059 = G__9681;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9060),iter__9057.call(null,cljs.core.chunk_rest.call(null,s__9058__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9060),null);
}
} else
{var file = cljs.core.first.call(null,s__9058__$2);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function iter__9505(s__9506){return (new cljs.core.LazySeq(null,((function (filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9506__$1 = s__9506;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9506__$1);if(temp__4092__auto____$1)
{var s__9506__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9506__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__9506__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__9508 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__9507 = 0;while(true){
if((i__9507 < size__7468__auto__))
{var changes_group = cljs.core._nth.call(null,c__7467__auto__,i__9507);cljs.core.chunk_append.call(null,b__9508,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (i__9507,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function iter__9581(s__9582){return (new cljs.core.LazySeq(null,((function (i__9507,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9582__$1 = s__9582;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9582__$1);if(temp__4092__auto____$2)
{var s__9582__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9582__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__9582__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__9584 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__9583 = 0;while(true){
if((i__9583 < size__7468__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7467__auto____$1,i__9583);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9584,(function (){var iter__7469__auto__ = ((function (i__9583,i__9507,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__9584,s__9582__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function iter__9601(s__9602){return (new cljs.core.LazySeq(null,((function (i__9583,i__9507,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__9584,s__9582__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9602__$1 = s__9602;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9602__$1);if(temp__4092__auto____$3)
{var s__9602__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9602__$2))
{var c__7467__auto____$2 = cljs.core.chunk_first.call(null,s__9602__$2);var size__7468__auto____$2 = cljs.core.count.call(null,c__7467__auto____$2);var b__9604 = cljs.core.chunk_buffer.call(null,size__7468__auto____$2);if((function (){var i__9603 = 0;while(true){
if((i__9603 < size__7468__auto____$2))
{var vec__9607 = cljs.core._nth.call(null,c__7467__auto____$2,i__9603);var left = cljs.core.nth.call(null,vec__9607,0,null);var right = cljs.core.nth.call(null,vec__9607,1,null);cljs.core.chunk_append.call(null,b__9604,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9682 = (i__9603 + 1);
i__9603 = G__9682;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9604),iter__9601.call(null,cljs.core.chunk_rest.call(null,s__9602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9604),null);
}
} else
{var vec__9608 = cljs.core.first.call(null,s__9602__$2);var left = cljs.core.nth.call(null,vec__9608,0,null);var right = cljs.core.nth.call(null,vec__9608,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9601.call(null,cljs.core.rest.call(null,s__9602__$2)));
}
} else
{return null;
}
break;
}
});})(i__9583,i__9507,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__9584,s__9582__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(i__9583,i__9507,columned,c,columns,line_group,c__7467__auto____$1,size__7468__auto____$1,b__9584,s__9582__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})());
{
var G__9683 = (i__9583 + 1);
i__9583 = G__9683;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9584),iter__9581.call(null,cljs.core.chunk_rest.call(null,s__9582__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9584),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9582__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7469__auto__ = ((function (i__9507,columned,c,columns,line_group,s__9582__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function iter__9609(s__9610){return (new cljs.core.LazySeq(null,((function (i__9507,columned,c,columns,line_group,s__9582__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9610__$1 = s__9610;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9610__$1);if(temp__4092__auto____$3)
{var s__9610__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9610__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__9610__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__9612 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__9611 = 0;while(true){
if((i__9611 < size__7468__auto____$1))
{var vec__9615 = cljs.core._nth.call(null,c__7467__auto____$1,i__9611);var left = cljs.core.nth.call(null,vec__9615,0,null);var right = cljs.core.nth.call(null,vec__9615,1,null);cljs.core.chunk_append.call(null,b__9612,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9684 = (i__9611 + 1);
i__9611 = G__9684;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9612),iter__9609.call(null,cljs.core.chunk_rest.call(null,s__9610__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9612),null);
}
} else
{var vec__9616 = cljs.core.first.call(null,s__9610__$2);var left = cljs.core.nth.call(null,vec__9616,0,null);var right = cljs.core.nth.call(null,vec__9616,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9609.call(null,cljs.core.rest.call(null,s__9610__$2)));
}
} else
{return null;
}
break;
}
});})(i__9507,columned,c,columns,line_group,s__9582__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(i__9507,columned,c,columns,line_group,s__9582__$2,temp__4092__auto____$2,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})(),iter__9581.call(null,cljs.core.rest.call(null,s__9582__$2)));
}
} else
{return null;
}
break;
}
});})(i__9507,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(i__9507,changes_group,c__7467__auto__,size__7468__auto__,b__9508,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__9685 = (i__9507 + 1);
i__9507 = G__9685;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9508),iter__9505.call(null,cljs.core.chunk_rest.call(null,s__9506__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9508),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9506__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7469__auto__ = ((function (changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function iter__9617(s__9618){return (new cljs.core.LazySeq(null,((function (changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9618__$1 = s__9618;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9618__$1);if(temp__4092__auto____$2)
{var s__9618__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9618__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__9618__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__9620 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__9619 = 0;while(true){
if((i__9619 < size__7468__auto__))
{var line_group = cljs.core._nth.call(null,c__7467__auto__,i__9619);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9620,(function (){var iter__7469__auto__ = ((function (i__9619,columned,c,columns,line_group,c__7467__auto__,size__7468__auto__,b__9620,s__9618__$2,temp__4092__auto____$2,changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function iter__9637(s__9638){return (new cljs.core.LazySeq(null,((function (i__9619,columned,c,columns,line_group,c__7467__auto__,size__7468__auto__,b__9620,s__9618__$2,temp__4092__auto____$2,changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9638__$1 = s__9638;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9638__$1);if(temp__4092__auto____$3)
{var s__9638__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9638__$2))
{var c__7467__auto____$1 = cljs.core.chunk_first.call(null,s__9638__$2);var size__7468__auto____$1 = cljs.core.count.call(null,c__7467__auto____$1);var b__9640 = cljs.core.chunk_buffer.call(null,size__7468__auto____$1);if((function (){var i__9639 = 0;while(true){
if((i__9639 < size__7468__auto____$1))
{var vec__9643 = cljs.core._nth.call(null,c__7467__auto____$1,i__9639);var left = cljs.core.nth.call(null,vec__9643,0,null);var right = cljs.core.nth.call(null,vec__9643,1,null);cljs.core.chunk_append.call(null,b__9640,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9686 = (i__9639 + 1);
i__9639 = G__9686;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9640),iter__9637.call(null,cljs.core.chunk_rest.call(null,s__9638__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9640),null);
}
} else
{var vec__9644 = cljs.core.first.call(null,s__9638__$2);var left = cljs.core.nth.call(null,vec__9644,0,null);var right = cljs.core.nth.call(null,vec__9644,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9637.call(null,cljs.core.rest.call(null,s__9638__$2)));
}
} else
{return null;
}
break;
}
});})(i__9619,columned,c,columns,line_group,c__7467__auto__,size__7468__auto__,b__9620,s__9618__$2,temp__4092__auto____$2,changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(i__9619,columned,c,columns,line_group,c__7467__auto__,size__7468__auto__,b__9620,s__9618__$2,temp__4092__auto____$2,changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})());
{
var G__9687 = (i__9619 + 1);
i__9619 = G__9687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9620),iter__9617.call(null,cljs.core.chunk_rest.call(null,s__9618__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9620),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9618__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7469__auto__ = ((function (columned,c,columns,line_group,s__9618__$2,temp__4092__auto____$2,changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function iter__9645(s__9646){return (new cljs.core.LazySeq(null,((function (columned,c,columns,line_group,s__9618__$2,temp__4092__auto____$2,changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output){
return (function (){var s__9646__$1 = s__9646;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9646__$1);if(temp__4092__auto____$3)
{var s__9646__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9646__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__9646__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__9648 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__9647 = 0;while(true){
if((i__9647 < size__7468__auto__))
{var vec__9651 = cljs.core._nth.call(null,c__7467__auto__,i__9647);var left = cljs.core.nth.call(null,vec__9651,0,null);var right = cljs.core.nth.call(null,vec__9651,1,null);cljs.core.chunk_append.call(null,b__9648,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9688 = (i__9647 + 1);
i__9647 = G__9688;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9648),iter__9645.call(null,cljs.core.chunk_rest.call(null,s__9646__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9648),null);
}
} else
{var vec__9652 = cljs.core.first.call(null,s__9646__$2);var left = cljs.core.nth.call(null,vec__9652,0,null);var right = cljs.core.nth.call(null,vec__9652,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9645.call(null,cljs.core.rest.call(null,s__9646__$2)));
}
} else
{return null;
}
break;
}
});})(columned,c,columns,line_group,s__9618__$2,temp__4092__auto____$2,changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(columned,c,columns,line_group,s__9618__$2,temp__4092__auto____$2,changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,columns);
})(),iter__9617.call(null,cljs.core.rest.call(null,s__9618__$2)));
}
} else
{return null;
}
break;
}
});})(changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(changes_group,s__9506__$2,temp__4092__auto____$1,filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9505.call(null,cljs.core.rest.call(null,s__9506__$2)));
}
} else
{return null;
}
break;
}
});})(filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
,null,null));
});})(filename,file_diff,file,s__9058__$2,temp__4092__auto__,output))
;return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null),iter__9057.call(null,cljs.core.rest.call(null,s__9058__$2)));
}
} else
{return null;
}
break;
}
});})(output))
,null,null));
});})(output))
;return iter__7469__auto__.call(null,lt.plugins.gitlight.diff.parse_git_diff.call(null,cljs.core.deref.call(null,output)));
})()], null);
})());var seq__9653_9689 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9654_9690 = null;var count__9655_9691 = 0;var i__9656_9692 = 0;while(true){
if((i__9656_9692 < count__9655_9691))
{var vec__9657_9693 = cljs.core._nth.call(null,chunk__9654_9690,i__9656_9692);var ev__8115__auto___9694 = cljs.core.nth.call(null,vec__9657_9693,0,null);var func__8116__auto___9695 = cljs.core.nth.call(null,vec__9657_9693,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___9694,func__8116__auto___9695);
{
var G__9696 = seq__9653_9689;
var G__9697 = chunk__9654_9690;
var G__9698 = count__9655_9691;
var G__9699 = (i__9656_9692 + 1);
seq__9653_9689 = G__9696;
chunk__9654_9690 = G__9697;
count__9655_9691 = G__9698;
i__9656_9692 = G__9699;
continue;
}
} else
{var temp__4092__auto___9700 = cljs.core.seq.call(null,seq__9653_9689);if(temp__4092__auto___9700)
{var seq__9653_9701__$1 = temp__4092__auto___9700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9653_9701__$1))
{var c__7500__auto___9702 = cljs.core.chunk_first.call(null,seq__9653_9701__$1);{
var G__9703 = cljs.core.chunk_rest.call(null,seq__9653_9701__$1);
var G__9704 = c__7500__auto___9702;
var G__9705 = cljs.core.count.call(null,c__7500__auto___9702);
var G__9706 = 0;
seq__9653_9689 = G__9703;
chunk__9654_9690 = G__9704;
count__9655_9691 = G__9705;
i__9656_9692 = G__9706;
continue;
}
} else
{var vec__9658_9707 = cljs.core.first.call(null,seq__9653_9701__$1);var ev__8115__auto___9708 = cljs.core.nth.call(null,vec__9658_9707,0,null);var func__8116__auto___9709 = cljs.core.nth.call(null,vec__9658_9707,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___9708,func__8116__auto___9709);
{
var G__9710 = cljs.core.next.call(null,seq__9653_9701__$1);
var G__9711 = null;
var G__9712 = 0;
var G__9713 = 0;
seq__9653_9689 = G__9710;
chunk__9654_9690 = G__9711;
count__9655_9691 = G__9712;
i__9656_9692 = G__9713;
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
{var fst = cljs.core.first.call(null,lines);var vec__9660 = cljs.core.split_with.call(null,fun,cljs.core.rest.call(null,lines));var content = cljs.core.nth.call(null,vec__9660,0,null);var leftovers = cljs.core.nth.call(null,vec__9660,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([headkey,fst,contkey,result_fun.call(null,content)], true, false),split_into_headered_groups.call(null,leftovers,fun,result_fun,headkey,contkey));
} else
{return null;
}
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,x));
}),(function (x){return cljs.core.partition_by.call(null,(function (p1__9661_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__9661_SHARP_));
}),x);
}),new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.Keyword(null,"content","content",1965434859));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(data){var vec__9663 = cljs.core.take.call(null,3,data);var header = cljs.core.nth.call(null,vec__9663,0,null);var left = cljs.core.nth.call(null,vec__9663,1,null);var right = cljs.core.nth.call(null,vec__9663,2,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,cljs.core.drop.call(null,3,data));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),header,new cljs.core.Keyword(null,"left","left",1017222009),left,new cljs.core.Keyword(null,"right","right",1122416014),right,new cljs.core.Keyword(null,"groups","groups",4071411014),groups], null);
});
lt.plugins.gitlight.diff.split_into_files = (function split_into_files(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return (cljs.core.re_matches.call(null,/diff --git .*/,x) == null);
}),lt.plugins.gitlight.diff.parse_single_git_diff,new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"file-diff","file-diff",3945937192));
});
lt.plugins.gitlight.diff.parse_git_diff = (function parse_git_diff(raw_data){return lt.plugins.gitlight.diff.split_into_files.call(null,clojure.string.split_lines.call(null,raw_data.toString()));
});
lt.plugins.gitlight.diff.git_diff_output = lt.plugins.gitlight.common_ui.make_output_tab_object.call(null,"Git diff",new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-diff","lt.plugins.gitlight.diff/gitlight-diff",1144555959),lt.plugins.gitlight.diff.diff_panel);
lt.plugins.gitlight.diff.git_diff = (function git_diff(filepath){cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.last_filename,filepath);
return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.diff.git_diff_output,"--no-pager","diff","--no-color",[cljs.core.str("-U"),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join(''),"--",filepath);
});
lt.plugins.gitlight.diff.git_diff_button = (function git_diff_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,[cljs.core.str(lt.plugins.gitlight.git.get_git_root.call(null)),cljs.core.str("/"),cljs.core.str(filename)].join(''));
});
lt.plugins.gitlight.diff.git_diff_repo_button = (function git_diff_repo_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,"");
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
lt.plugins.gitlight.status.back.__BEH__git_status_out_success = (function __BEH__git_status_out_success(obj,data,stderr){lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"add-watch","add-watch",4224092181));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.parse_porcelain.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-success","lt.plugins.gitlight.status.back/git-status-out-success",3735995038),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git status is executed, parse its output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
lt.plugins.gitlight.status.back.__BEH__git_status_out_failure = (function __BEH__git_status_out_failure(obj,err,stderr){cljs.core.remove_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status.back","status-pool-watch","lt.plugins.gitlight.status.back/status-pool-watch",4566645289));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status-failed","status-failed",1731571178));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure","lt.plugins.gitlight.status.back/git-status-out-failure",3442851867),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_failure,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git status fails.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null));
lt.plugins.gitlight.status.back.git_status_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out","lt.plugins.gitlight.status.back/git-status-out",3897718648),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-status-out","git-status-out",2815542080)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-success","lt.plugins.gitlight.status.back/git-status-out-success",3735995038),new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure","lt.plugins.gitlight.status.back/git-status-out-failure",3442851867),new cljs.core.Keyword("lt.plugins.gitlight.status.back","refresh-ui-on-new-status","lt.plugins.gitlight.status.back/refresh-ui-on-new-status",1675222016)], null)));
lt.plugins.gitlight.status.back.git_status = (function git_status(){return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.status.back.git_status_out,"status","--porcelain","--branch");
});
lt.plugins.gitlight.status.back.git_add = (function git_add(action,filename){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"add","--",filename);
});
lt.plugins.gitlight.status.back.git_reset = (function git_reset(action,filename){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"reset","--",filename);
});
lt.plugins.gitlight.status.back.git_checkout_file = (function git_checkout_file(action,filename){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"checkout","--",filename);
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
lt.plugins.gitlight.commit.add_quotes = (function add_quotes(s){return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
lt.plugins.gitlight.commit.git_cmd_commit = (function git_cmd_commit(msg){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"commit","-m",lt.plugins.gitlight.commit.add_quotes.call(null,msg));
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
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
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
lt.plugins.gitlight.branch.branch_panel = (function branch_panel(this$){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-branches","div.gitlight-branches",1801709646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Branches"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7469__auto__ = (function iter__8232(s__8233){return (new cljs.core.LazySeq(null,(function (){var s__8233__$1 = s__8233;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8233__$1);if(temp__4092__auto__)
{var s__8233__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8233__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__8233__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__8235 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__8234 = 0;while(true){
if((i__8234 < size__7468__auto__))
{var parsed = cljs.core._nth.call(null,c__7467__auto__,i__8234);var vec__8240 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__8240,0,null);var vec__8241 = cljs.core.nth.call(null,vec__8240,1,null);var branch = cljs.core.nth.call(null,vec__8241,0,null);var sha1 = cljs.core.nth.call(null,vec__8241,1,null);var desc = cljs.core.nth.call(null,vec__8241,2,null);cljs.core.chunk_append.call(null,b__8235,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null));
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
{var parsed = cljs.core.first.call(null,s__8233__$2);var vec__8242 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__8242,0,null);var vec__8243 = cljs.core.nth.call(null,vec__8242,1,null);var branch = cljs.core.nth.call(null,vec__8243,0,null);var sha1 = cljs.core.nth.call(null,vec__8243,1,null);var desc = cljs.core.nth.call(null,vec__8243,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null),iter__8232.call(null,cljs.core.rest.call(null,s__8233__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,lt.plugins.gitlight.branch.parse_data.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.new-branch","td.new-branch",3433852959),lt.plugins.gitlight.branch.new_branch_button.call(null)], null)], null)], null)], null));var seq__8244_8261 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8245_8262 = null;var count__8246_8263 = 0;var i__8247_8264 = 0;while(true){
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
lt.plugins.gitlight.status.ui.make_button_and_update = (function make_button_and_update(n,f,fun){return lt.plugins.gitlight.common_ui.make_classy_button.call(null,n,f,(function (x,y){fun.call(null,x,y);
return lt.plugins.gitlight.status.back.git_status.call(null);
}));
});
lt.plugins.gitlight.status.ui.file_ops = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["resolve",lt.plugins.gitlight.status.back.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_button], null)], null),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stage",lt.plugins.gitlight.status.back.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["checkout",lt.plugins.gitlight.status.back.git_checkout_file], null)], null),new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add",lt.plugins.gitlight.status.back.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete",lt.plugins.gitlight.status.back.bin_rm], null)], null),new cljs.core.Keyword(null,"staged","staged",4416376984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unstage",lt.plugins.gitlight.status.back.git_reset], null)], null)], null);
lt.plugins.gitlight.status.ui.repo_ops = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"commit","commit",3954056361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit",lt.plugins.gitlight.commit.git_commit], null),new cljs.core.Keyword(null,"push","push",1017356940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push",lt.plugins.gitlight.remote_com.git_push], null),new cljs.core.Keyword(null,"pull","pull",1017356727),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull",lt.plugins.gitlight.remote_com.git_pull], null),new cljs.core.Keyword(null,"fetch","fetch",1111226924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fetch",lt.plugins.gitlight.remote_com.git_fetch], null),new cljs.core.Keyword(null,"diff","diff",1016987511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_repo_button], null)], null);
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__10132){var vec__10148 = p__10132;var f = cljs.core.nth.call(null,vec__10148,0,null);var t = cljs.core.nth.call(null,vec__10148,1,null);var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,f,f,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7469__auto__ = (function iter__10149(s__10150){return (new cljs.core.LazySeq(null,(function (){var s__10150__$1 = s__10150;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10150__$1);if(temp__4092__auto__)
{var s__10150__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10150__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__10150__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__10152 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__10151 = 0;while(true){
if((i__10151 < size__7468__auto__))
{var vec__10155 = cljs.core._nth.call(null,c__7467__auto__,i__10151);var bt = cljs.core.nth.call(null,vec__10155,0,null);var fun = cljs.core.nth.call(null,vec__10155,1,null);cljs.core.chunk_append.call(null,b__10152,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun));
{
var G__10231 = (i__10151 + 1);
i__10151 = G__10231;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10152),iter__10149.call(null,cljs.core.chunk_rest.call(null,s__10150__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10152),null);
}
} else
{var vec__10156 = cljs.core.first.call(null,s__10150__$2);var bt = cljs.core.nth.call(null,vec__10156,0,null);var fun = cljs.core.nth.call(null,vec__10156,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun),iter__10149.call(null,cljs.core.rest.call(null,s__10150__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__10157_10232 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10158_10233 = null;var count__10159_10234 = 0;var i__10160_10235 = 0;while(true){
if((i__10160_10235 < count__10159_10234))
{var vec__10161_10236 = cljs.core._nth.call(null,chunk__10158_10233,i__10160_10235);var ev__8115__auto___10237 = cljs.core.nth.call(null,vec__10161_10236,0,null);var func__8116__auto___10238 = cljs.core.nth.call(null,vec__10161_10236,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10237,func__8116__auto___10238);
{
var G__10239 = seq__10157_10232;
var G__10240 = chunk__10158_10233;
var G__10241 = count__10159_10234;
var G__10242 = (i__10160_10235 + 1);
seq__10157_10232 = G__10239;
chunk__10158_10233 = G__10240;
count__10159_10234 = G__10241;
i__10160_10235 = G__10242;
continue;
}
} else
{var temp__4092__auto___10243 = cljs.core.seq.call(null,seq__10157_10232);if(temp__4092__auto___10243)
{var seq__10157_10244__$1 = temp__4092__auto___10243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10157_10244__$1))
{var c__7500__auto___10245 = cljs.core.chunk_first.call(null,seq__10157_10244__$1);{
var G__10246 = cljs.core.chunk_rest.call(null,seq__10157_10244__$1);
var G__10247 = c__7500__auto___10245;
var G__10248 = cljs.core.count.call(null,c__7500__auto___10245);
var G__10249 = 0;
seq__10157_10232 = G__10246;
chunk__10158_10233 = G__10247;
count__10159_10234 = G__10248;
i__10160_10235 = G__10249;
continue;
}
} else
{var vec__10162_10250 = cljs.core.first.call(null,seq__10157_10244__$1);var ev__8115__auto___10251 = cljs.core.nth.call(null,vec__10162_10250,0,null);var func__8116__auto___10252 = cljs.core.nth.call(null,vec__10162_10250,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10251,func__8116__auto___10252);
{
var G__10253 = cljs.core.next.call(null,seq__10157_10244__$1);
var G__10254 = null;
var G__10255 = 0;
var G__10256 = 0;
seq__10157_10232 = G__10253;
chunk__10158_10233 = G__10254;
count__10159_10234 = G__10255;
i__10160_10235 = G__10256;
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__10169_10257 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10170_10258 = null;var count__10171_10259 = 0;var i__10172_10260 = 0;while(true){
if((i__10172_10260 < count__10171_10259))
{var vec__10173_10261 = cljs.core._nth.call(null,chunk__10170_10258,i__10172_10260);var ev__8115__auto___10262 = cljs.core.nth.call(null,vec__10173_10261,0,null);var func__8116__auto___10263 = cljs.core.nth.call(null,vec__10173_10261,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10262,func__8116__auto___10263);
{
var G__10264 = seq__10169_10257;
var G__10265 = chunk__10170_10258;
var G__10266 = count__10171_10259;
var G__10267 = (i__10172_10260 + 1);
seq__10169_10257 = G__10264;
chunk__10170_10258 = G__10265;
count__10171_10259 = G__10266;
i__10172_10260 = G__10267;
continue;
}
} else
{var temp__4092__auto___10268 = cljs.core.seq.call(null,seq__10169_10257);if(temp__4092__auto___10268)
{var seq__10169_10269__$1 = temp__4092__auto___10268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10169_10269__$1))
{var c__7500__auto___10270 = cljs.core.chunk_first.call(null,seq__10169_10269__$1);{
var G__10271 = cljs.core.chunk_rest.call(null,seq__10169_10269__$1);
var G__10272 = c__7500__auto___10270;
var G__10273 = cljs.core.count.call(null,c__7500__auto___10270);
var G__10274 = 0;
seq__10169_10257 = G__10271;
chunk__10170_10258 = G__10272;
count__10171_10259 = G__10273;
i__10172_10260 = G__10274;
continue;
}
} else
{var vec__10174_10275 = cljs.core.first.call(null,seq__10169_10269__$1);var ev__8115__auto___10276 = cljs.core.nth.call(null,vec__10174_10275,0,null);var func__8116__auto___10277 = cljs.core.nth.call(null,vec__10174_10275,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10276,func__8116__auto___10277);
{
var G__10278 = cljs.core.next.call(null,seq__10169_10269__$1);
var G__10279 = null;
var G__10280 = 0;
var G__10281 = 0;
seq__10169_10257 = G__10278;
chunk__10170_10258 = G__10279;
count__10171_10259 = G__10280;
i__10172_10260 = G__10281;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,branch,[cljs.core.str("Branch menu")].join(''),(function (x,y){return lt.plugins.gitlight.branch.git_branches.call(null);
}))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7469__auto__ = (function iter__10197(s__10198){return (new cljs.core.LazySeq(null,(function (){var s__10198__$1 = s__10198;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10198__$1);if(temp__4092__auto__)
{var s__10198__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10198__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__10198__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__10200 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__10199 = 0;while(true){
if((i__10199 < size__7468__auto__))
{var vec__10203 = cljs.core._nth.call(null,c__7467__auto__,i__10199);var bname = cljs.core.nth.call(null,vec__10203,0,null);var fun = cljs.core.nth.call(null,vec__10203,1,null);cljs.core.chunk_append.call(null,b__10200,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10282 = (i__10199 + 1);
i__10199 = G__10282;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10200),iter__10197.call(null,cljs.core.chunk_rest.call(null,s__10198__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10200),null);
}
} else
{var vec__10204 = cljs.core.first.call(null,s__10198__$2);var bname = cljs.core.nth.call(null,vec__10204,0,null);var fun = cljs.core.nth.call(null,vec__10204,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10197.call(null,cljs.core.rest.call(null,s__10198__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,cljs.core.vals.call(null,lt.plugins.gitlight.status.ui.repo_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7469__auto__ = (function iter__10205(s__10206){return (new cljs.core.LazySeq(null,(function (){var s__10206__$1 = s__10206;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10206__$1);if(temp__4092__auto__)
{var s__10206__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10206__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__10206__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__10208 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__10207 = 0;while(true){
if((i__10207 < size__7468__auto__))
{var vec__10211 = cljs.core._nth.call(null,c__7467__auto__,i__10207);var g = cljs.core.nth.call(null,vec__10211,0,null);var fs = cljs.core.nth.call(null,vec__10211,1,null);cljs.core.chunk_append.call(null,b__10208,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10283 = (i__10207 + 1);
i__10207 = G__10283;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10208),iter__10205.call(null,cljs.core.chunk_rest.call(null,s__10206__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10208),null);
}
} else
{var vec__10212 = cljs.core.first.call(null,s__10206__$2);var g = cljs.core.nth.call(null,vec__10212,0,null);var fs = cljs.core.nth.call(null,vec__10212,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__10205.call(null,cljs.core.rest.call(null,s__10206__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,this$);
})()], null)], null));var seq__10213_10284 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10214_10285 = null;var count__10215_10286 = 0;var i__10216_10287 = 0;while(true){
if((i__10216_10287 < count__10215_10286))
{var vec__10217_10288 = cljs.core._nth.call(null,chunk__10214_10285,i__10216_10287);var ev__8115__auto___10289 = cljs.core.nth.call(null,vec__10217_10288,0,null);var func__8116__auto___10290 = cljs.core.nth.call(null,vec__10217_10288,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10289,func__8116__auto___10290);
{
var G__10291 = seq__10213_10284;
var G__10292 = chunk__10214_10285;
var G__10293 = count__10215_10286;
var G__10294 = (i__10216_10287 + 1);
seq__10213_10284 = G__10291;
chunk__10214_10285 = G__10292;
count__10215_10286 = G__10293;
i__10216_10287 = G__10294;
continue;
}
} else
{var temp__4092__auto___10295 = cljs.core.seq.call(null,seq__10213_10284);if(temp__4092__auto___10295)
{var seq__10213_10296__$1 = temp__4092__auto___10295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10213_10296__$1))
{var c__7500__auto___10297 = cljs.core.chunk_first.call(null,seq__10213_10296__$1);{
var G__10298 = cljs.core.chunk_rest.call(null,seq__10213_10296__$1);
var G__10299 = c__7500__auto___10297;
var G__10300 = cljs.core.count.call(null,c__7500__auto___10297);
var G__10301 = 0;
seq__10213_10284 = G__10298;
chunk__10214_10285 = G__10299;
count__10215_10286 = G__10300;
i__10216_10287 = G__10301;
continue;
}
} else
{var vec__10218_10302 = cljs.core.first.call(null,seq__10213_10296__$1);var ev__8115__auto___10303 = cljs.core.nth.call(null,vec__10218_10302,0,null);var func__8116__auto___10304 = cljs.core.nth.call(null,vec__10218_10302,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10303,func__8116__auto___10304);
{
var G__10305 = cljs.core.next.call(null,seq__10213_10296__$1);
var G__10306 = null;
var G__10307 = 0;
var G__10308 = 0;
seq__10213_10284 = G__10305;
chunk__10214_10285 = G__10306;
count__10215_10286 = G__10307;
i__10216_10287 = G__10308;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10225_10309 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10226_10310 = null;var count__10227_10311 = 0;var i__10228_10312 = 0;while(true){
if((i__10228_10312 < count__10227_10311))
{var vec__10229_10313 = cljs.core._nth.call(null,chunk__10226_10310,i__10228_10312);var ev__8115__auto___10314 = cljs.core.nth.call(null,vec__10229_10313,0,null);var func__8116__auto___10315 = cljs.core.nth.call(null,vec__10229_10313,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10314,func__8116__auto___10315);
{
var G__10316 = seq__10225_10309;
var G__10317 = chunk__10226_10310;
var G__10318 = count__10227_10311;
var G__10319 = (i__10228_10312 + 1);
seq__10225_10309 = G__10316;
chunk__10226_10310 = G__10317;
count__10227_10311 = G__10318;
i__10228_10312 = G__10319;
continue;
}
} else
{var temp__4092__auto___10320 = cljs.core.seq.call(null,seq__10225_10309);if(temp__4092__auto___10320)
{var seq__10225_10321__$1 = temp__4092__auto___10320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10225_10321__$1))
{var c__7500__auto___10322 = cljs.core.chunk_first.call(null,seq__10225_10321__$1);{
var G__10323 = cljs.core.chunk_rest.call(null,seq__10225_10321__$1);
var G__10324 = c__7500__auto___10322;
var G__10325 = cljs.core.count.call(null,c__7500__auto___10322);
var G__10326 = 0;
seq__10225_10309 = G__10323;
chunk__10226_10310 = G__10324;
count__10227_10311 = G__10325;
i__10228_10312 = G__10326;
continue;
}
} else
{var vec__10230_10327 = cljs.core.first.call(null,seq__10225_10321__$1);var ev__8115__auto___10328 = cljs.core.nth.call(null,vec__10230_10327,0,null);var func__8116__auto___10329 = cljs.core.nth.call(null,vec__10230_10327,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10328,func__8116__auto___10329);
{
var G__10330 = cljs.core.next.call(null,seq__10225_10321__$1);
var G__10331 = null;
var G__10332 = 0;
var G__10333 = 0;
seq__10225_10309 = G__10330;
chunk__10226_10310 = G__10331;
count__10227_10311 = G__10332;
i__10228_10312 = G__10333;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","init","lt.plugins.gitlight.status/init",3068682980),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__init,new cljs.core.Keyword(null,"desc","desc",1016984067),"Init gitlight status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-status","gitlight-status",4738816205),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Status",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.status.back.git_status], null));
lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status = (function __BEH__refresh_ui_on_new_status(obj,data){if(!(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null)))
{lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.gitlight.status.ui.status_bar);
} else
{}
return lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216).cljs$core$IFn$_invoke$arity$1(data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.plugins.gitlight.status.__BEH__close_ui_on_failure = (function __BEH__close_ui_on_failure(obj,data){cljs.core.remove_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status","status-pool-watch","lt.plugins.gitlight.status/status-pool-watch",2316860253));
if(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null))
{lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"close!","close!",3951350939),lt.plugins.gitlight.status.ui.status_bar);
} else
{}
return lt.object.raise.call(null,lt.plugins.gitlight.error,new cljs.core.Keyword(null,"raise-error-popup","raise-error-popup",3751697336));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","close-ui-on-failure","lt.plugins.gitlight.status/close-ui-on-failure",4763397812),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__close_ui_on_failure,new cljs.core.Keyword(null,"desc","desc",1016984067),"refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status-failed","status-failed",1731571178),null], null), null));
lt.plugins.gitlight.status.__BEH__add_watch = (function __BEH__add_watch(obj){return cljs.core.add_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status","status-pool-watch","lt.plugins.gitlight.status/status-pool-watch",2316860253),(function (k,r,old,new$){return lt.plugins.gitlight.status.status_if_open.call(null);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","add-watch","lt.plugins.gitlight.status/add-watch",3854676855),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__add_watch,new cljs.core.Keyword(null,"desc","desc",1016984067),"add pool watch",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-watch","add-watch",4224092181),null], null), null));
lt.plugins.gitlight.status.__BEH__refresh_git_status_on_save = (function __BEH__refresh_git_status_on_save(editor,content){lt.plugins.gitlight.status.status_if_open.call(null);
return content;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-git-status-on-save","lt.plugins.gitlight.status/refresh-git-status-on-save",3914231473),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_git_status_on_save,new cljs.core.Keyword(null,"desc","desc",1016984067),"Save: refresh gitlight status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save+","save+",1123115456),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
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
lt.plugins.gitlight.tests.which_color_QMARK_ = (function which_color_QMARK_(result){var G__10067 = result;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"not-bool","not-bool",2543743254),G__10067))
{return "pink";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__10067))
{return "red";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__10067))
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
lt.plugins.gitlight.tests.test_panel = (function test_panel(this$){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7469__auto__ = (function iter__10082(s__10083){return (new cljs.core.LazySeq(null,(function (){var s__10083__$1 = s__10083;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10083__$1);if(temp__4092__auto__)
{var s__10083__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10083__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__10083__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__10085 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__10084 = 0;while(true){
if((i__10084 < size__7468__auto__))
{var map__10088 = cljs.core._nth.call(null,c__7467__auto__,i__10084);var map__10088__$1 = ((cljs.core.seq_QMARK_.call(null,map__10088))?cljs.core.apply.call(null,cljs.core.hash_map,map__10088):map__10088);var status = cljs.core.get.call(null,map__10088__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10088__$1,new cljs.core.Keyword(null,"info","info",1017141280));cljs.core.chunk_append.call(null,b__10085,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null));
{
var G__10106 = (i__10084 + 1);
i__10084 = G__10106;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10085),iter__10082.call(null,cljs.core.chunk_rest.call(null,s__10083__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10085),null);
}
} else
{var map__10089 = cljs.core.first.call(null,s__10083__$2);var map__10089__$1 = ((cljs.core.seq_QMARK_.call(null,map__10089))?cljs.core.apply.call(null,cljs.core.hash_map,map__10089):map__10089);var status = cljs.core.get.call(null,map__10089__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10089__$1,new cljs.core.Keyword(null,"info","info",1017141280));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null),iter__10082.call(null,cljs.core.rest.call(null,s__10083__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__10090_10107 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10091_10108 = null;var count__10092_10109 = 0;var i__10093_10110 = 0;while(true){
if((i__10093_10110 < count__10092_10109))
{var vec__10094_10111 = cljs.core._nth.call(null,chunk__10091_10108,i__10093_10110);var ev__8115__auto___10112 = cljs.core.nth.call(null,vec__10094_10111,0,null);var func__8116__auto___10113 = cljs.core.nth.call(null,vec__10094_10111,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10112,func__8116__auto___10113);
{
var G__10114 = seq__10090_10107;
var G__10115 = chunk__10091_10108;
var G__10116 = count__10092_10109;
var G__10117 = (i__10093_10110 + 1);
seq__10090_10107 = G__10114;
chunk__10091_10108 = G__10115;
count__10092_10109 = G__10116;
i__10093_10110 = G__10117;
continue;
}
} else
{var temp__4092__auto___10118 = cljs.core.seq.call(null,seq__10090_10107);if(temp__4092__auto___10118)
{var seq__10090_10119__$1 = temp__4092__auto___10118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10090_10119__$1))
{var c__7500__auto___10120 = cljs.core.chunk_first.call(null,seq__10090_10119__$1);{
var G__10121 = cljs.core.chunk_rest.call(null,seq__10090_10119__$1);
var G__10122 = c__7500__auto___10120;
var G__10123 = cljs.core.count.call(null,c__7500__auto___10120);
var G__10124 = 0;
seq__10090_10107 = G__10121;
chunk__10091_10108 = G__10122;
count__10092_10109 = G__10123;
i__10093_10110 = G__10124;
continue;
}
} else
{var vec__10095_10125 = cljs.core.first.call(null,seq__10090_10119__$1);var ev__8115__auto___10126 = cljs.core.nth.call(null,vec__10095_10125,0,null);var func__8116__auto___10127 = cljs.core.nth.call(null,vec__10095_10125,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10126,func__8116__auto___10127);
{
var G__10128 = cljs.core.next.call(null,seq__10090_10119__$1);
var G__10129 = null;
var G__10130 = 0;
var G__10131 = 0;
seq__10090_10107 = G__10128;
chunk__10091_10108 = G__10129;
count__10092_10109 = G__10130;
i__10093_10110 = G__10131;
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
lt.plugins.gitlight.tests.lib.selector_asrt = (function selector_asrt(p__10334){var map__10336 = p__10334;var map__10336__$1 = ((cljs.core.seq_QMARK_.call(null,map__10336))?cljs.core.apply.call(null,cljs.core.hash_map,map__10336):map__10336);var select = cljs.core.get.call(null,map__10336__$1,new cljs.core.Keyword(null,"select","select",4402849902));return null;
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
lt.plugins.gitlight.tests.status.back.change_filenames = (function change_filenames(filename,x){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10360_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filename","filename",4574102905),p1__10360_SHARP_))
{return filename;
} else
{return p1__10360_SHARP_;
}
}),x));
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","back-tests","lt.plugins.gitlight.tests.status.back/back-tests",4633446629),(function (){lt.plugins.gitlight.tests.status.back.test_data = (function test_data(pair){var vec__10364 = pair;var n = cljs.core.nth.call(null,vec__10364,0,null);var what = cljs.core.nth.call(null,vec__10364,1,null);var vec__10365 = what;var tst = cljs.core.nth.call(null,vec__10365,0,null);var parsed = cljs.core.nth.call(null,vec__10365,1,null);var vec__10366 = tst;var X = cljs.core.nth.call(null,vec__10366,0,null);var Y = cljs.core.nth.call(null,vec__10366,1,null);var filename = cljs.core.nth.call(null,vec__10366,2,null);var d = cljs.core.nth.call(null,lt.plugins.gitlight.tests.status.back.data,n);var what_should_be = cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.tests.status.back.change_filenames,filename),d));var what_is = cljs.core.sort.call(null,parsed);var tst__$1 = cljs.core._EQ_.call(null,what_should_be,what_is);if(!(tst__$1))
{lt.plugins.gitlight.tests.lib.asrt.call(null,[cljs.core.str("parsing porcelain: `"),cljs.core.str(X),cljs.core.str("' `"),cljs.core.str(Y),cljs.core.str("'")].join(''),tst__$1);
} else
{}
return tst__$1;
});
lt.plugins.gitlight.tests.status.back.generate_test_data = (function generate_test_data(){var iter__7469__auto__ = (function iter__10373(s__10374){return (new cljs.core.LazySeq(null,(function (){var s__10374__$1 = s__10374;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10374__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7465__auto__ = ((function (s__10374__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__10375(s__10376){return (new cljs.core.LazySeq(null,((function (s__10374__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__10376__$1 = s__10376;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10376__$1);if(temp__4092__auto____$1)
{var s__10376__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10376__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__10376__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__10378 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__10377 = 0;while(true){
if((i__10377 < size__7468__auto__))
{var y = cljs.core._nth.call(null,c__7467__auto__,i__10377);cljs.core.chunk_append.call(null,b__10378,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})());
{
var G__10389 = (i__10377 + 1);
i__10377 = G__10389;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10378),iter__10375.call(null,cljs.core.chunk_rest.call(null,s__10376__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10378),null);
}
} else
{var y = cljs.core.first.call(null,s__10376__$2);return cljs.core.cons.call(null,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})(),iter__10375.call(null,cljs.core.rest.call(null,s__10376__$2)));
}
} else
{return null;
}
break;
}
});})(s__10374__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__10374__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7466__auto__ = cljs.core.seq.call(null,iterys__7465__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","D","U"], null)));if(fs__7466__auto__)
{return cljs.core.concat.call(null,fs__7466__auto__,iter__10373.call(null,cljs.core.rest.call(null,s__10374__$1)));
} else
{{
var G__10390 = cljs.core.rest.call(null,s__10374__$1);
s__10374__$1 = G__10390;
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
after.cljs$lang$applyTo = (function (arglist__10359){
var text = cljs.core.first(arglist__10359);
arglist__10359 = cljs.core.next(arglist__10359);
var cwd = cljs.core.first(arglist__10359);
arglist__10359 = cljs.core.next(arglist__10359);
var data = cljs.core.first(arglist__10359);
var what_next = cljs.core.rest(arglist__10359);
return after__delegate(text,cwd,data,what_next);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
lt.plugins.gitlight.tests.remote_com.__BEH__git_test_exit_status__DOT__out = (function __BEH__git_test_exit_status__DOT__out(obj,data){var cwd = cljs.core.deref.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));var G__10348 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));if(cljs.core._EQ_.call(null,"push",G__10348))
{return lt.plugins.gitlight.tests.lib.asrt.call(null,"git push",cljs.core._EQ_.call(null,0,data));
} else
{if(cljs.core._EQ_.call(null,"commit",G__10348))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git commit",cwd,data,"push");
} else
{if(cljs.core._EQ_.call(null,"add",G__10348))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git add",cwd,data,"commit","-m","commiting");
} else
{if(cljs.core._EQ_.call(null,"pull",G__10348))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git pull",cwd,data,"add","push_me");
} else
{if(cljs.core._EQ_.call(null,"fetch",G__10348))
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
lt.plugins.gitlight.tests.status.ui.test_node = (function test_node(){var e__8114__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"test"], null));var seq__10397_10413 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10398_10414 = null;var count__10399_10415 = 0;var i__10400_10416 = 0;while(true){
if((i__10400_10416 < count__10399_10415))
{var vec__10401_10417 = cljs.core._nth.call(null,chunk__10398_10414,i__10400_10416);var ev__8115__auto___10418 = cljs.core.nth.call(null,vec__10401_10417,0,null);var func__8116__auto___10419 = cljs.core.nth.call(null,vec__10401_10417,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10418,func__8116__auto___10419);
{
var G__10420 = seq__10397_10413;
var G__10421 = chunk__10398_10414;
var G__10422 = count__10399_10415;
var G__10423 = (i__10400_10416 + 1);
seq__10397_10413 = G__10420;
chunk__10398_10414 = G__10421;
count__10399_10415 = G__10422;
i__10400_10416 = G__10423;
continue;
}
} else
{var temp__4092__auto___10424 = cljs.core.seq.call(null,seq__10397_10413);if(temp__4092__auto___10424)
{var seq__10397_10425__$1 = temp__4092__auto___10424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10397_10425__$1))
{var c__7500__auto___10426 = cljs.core.chunk_first.call(null,seq__10397_10425__$1);{
var G__10427 = cljs.core.chunk_rest.call(null,seq__10397_10425__$1);
var G__10428 = c__7500__auto___10426;
var G__10429 = cljs.core.count.call(null,c__7500__auto___10426);
var G__10430 = 0;
seq__10397_10413 = G__10427;
chunk__10398_10414 = G__10428;
count__10399_10415 = G__10429;
i__10400_10416 = G__10430;
continue;
}
} else
{var vec__10402_10431 = cljs.core.first.call(null,seq__10397_10425__$1);var ev__8115__auto___10432 = cljs.core.nth.call(null,vec__10402_10431,0,null);var func__8116__auto___10433 = cljs.core.nth.call(null,vec__10402_10431,1,null);lt.util.dom.on.call(null,e__8114__auto__,ev__8115__auto___10432,func__8116__auto___10433);
{
var G__10434 = cljs.core.next.call(null,seq__10397_10425__$1);
var G__10435 = null;
var G__10436 = 0;
var G__10437 = 0;
seq__10397_10413 = G__10434;
chunk__10398_10414 = G__10435;
count__10399_10415 = G__10436;
i__10400_10416 = G__10437;
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