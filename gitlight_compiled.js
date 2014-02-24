if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.config = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),null], null), null),new cljs.core.Keyword(null,"git-status-refresh-rate","git-status-refresh-rate",1535627140),1000,new cljs.core.Keyword(null,"git-binary","git-binary",1640221134),"/usr/bin/git"));
lt.plugins.gitlight.__BEH__config = (function __BEH__config(this$,new_config){return lt.object.merge_BANG_.call(null,lt.plugins.gitlight.config,new_config);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.__BEH__config,new cljs.core.Keyword(null,"desc","desc",1016984067),"Configure gitlight",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.git')) {
goog.provide('lt.plugins.gitlight.git');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.files');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.proc');
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
lt.plugins.gitlight.git.git_command = (function() { 
var git_command__delegate = function (obj,args){var temp__4090__auto__ = lt.plugins.gitlight.git.get_git_root.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var cwd = temp__4090__auto__;lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"git-binary","git-binary",1640221134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config)),new cljs.core.Keyword(null,"args","args",1016906831),args,new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
return true;
} else
{lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't guess git root",new cljs.core.Keyword(null,"body","body",1016933652),"Please rerun the command again on a file that is in a git repo.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
return null;
}
};
var git_command = function (obj,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return git_command__delegate.call(this,obj,args);};
git_command.cljs$lang$maxFixedArity = 1;
git_command.cljs$lang$applyTo = (function (arglist__8221){
var obj = cljs.core.first(arglist__8221);
var args = cljs.core.rest(arglist__8221);
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
git_command_ignore_out.cljs$lang$applyTo = (function (arglist__8222){
var args = cljs.core.seq(arglist__8222);
return git_command_ignore_out__delegate(args);
});
git_command_ignore_out.cljs$core$IFn$_invoke$arity$variadic = git_command_ignore_out__delegate;
return git_command_ignore_out;
})()
;
lt.plugins.gitlight.git.__BEH__ignore__DOT__out = (function __BEH__ignore__DOT__out(obj,data){return cljs.core.print.call(null,data);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out","lt.plugins.gitlight.git/ignore.out",2172047623),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null,new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.gitlight.git.git_ignore_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","git-ignore-out","lt.plugins.gitlight.git/git-ignore-out",1518510219),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-ignore-out","git-ignore-out",3448111392)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out","lt.plugins.gitlight.git/ignore.out",2172047623)], null)));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-add","gitlight-add",1086961482),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: add",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"add","something");
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.ui')) {
goog.provide('lt.plugins.gitlight.status.ui');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.status.ui.resize_rightbar = (function resize_rightbar(width){lt.object.merge_BANG_.call(null,lt.objs.tabs.multi,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"side","side",1017434313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),width], true, false));
return lt.object.merge_BANG_.call(null,lt.objs.sidebar.rightbar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),width,new cljs.core.Keyword(null,"max-width","max-width",3646439311),width], null));
});
lt.plugins.gitlight.status.ui.group_names = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),"Not staged",new cljs.core.Keyword(null,"staged","staged",4416376984),"Staged",new cljs.core.Keyword(null,"untracked","untracked",1658310115),"Untracked",new cljs.core.Keyword(null,"ignored","ignored",2766319684),"Ignored"], null);
lt.plugins.gitlight.status.ui.dom_scroll_width = (function dom_scroll_width(n){return n.scrollWidth;
});
lt.plugins.gitlight.status.ui.resize_to_content = (function resize_to_content(parent,child){return lt.plugins.gitlight.status.ui.resize_rightbar.call(null,((lt.util.dom.width.call(null,parent) - lt.util.dom.width.call(null,child)) + lt.plugins.gitlight.status.ui.dom_scroll_width.call(null,child)));
});
lt.plugins.gitlight.status.ui.is_open_QMARK_ = (function is_open_QMARK_(){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),lt.plugins.gitlight.status.ui.status_bar);
});
lt.plugins.gitlight.status.ui.dom_truncate = (function dom_truncate(node){return node.innerHTML = "";
});
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__8577_8666 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8578_8667 = null;var count__8579_8668 = 0;var i__8580_8669 = 0;while(true){
if((i__8580_8669 < count__8579_8668))
{var vec__8581_8670 = cljs.core._nth.call(null,chunk__8578_8667,i__8580_8669);var ev__8112__auto___8671 = cljs.core.nth.call(null,vec__8581_8670,0,null);var func__8113__auto___8672 = cljs.core.nth.call(null,vec__8581_8670,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8671,func__8113__auto___8672);
{
var G__8673 = seq__8577_8666;
var G__8674 = chunk__8578_8667;
var G__8675 = count__8579_8668;
var G__8676 = (i__8580_8669 + 1);
seq__8577_8666 = G__8673;
chunk__8578_8667 = G__8674;
count__8579_8668 = G__8675;
i__8580_8669 = G__8676;
continue;
}
} else
{var temp__4092__auto___8677 = cljs.core.seq.call(null,seq__8577_8666);if(temp__4092__auto___8677)
{var seq__8577_8678__$1 = temp__4092__auto___8677;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8577_8678__$1))
{var c__7497__auto___8679 = cljs.core.chunk_first.call(null,seq__8577_8678__$1);{
var G__8680 = cljs.core.chunk_rest.call(null,seq__8577_8678__$1);
var G__8681 = c__7497__auto___8679;
var G__8682 = cljs.core.count.call(null,c__7497__auto___8679);
var G__8683 = 0;
seq__8577_8666 = G__8680;
chunk__8578_8667 = G__8681;
count__8579_8668 = G__8682;
i__8580_8669 = G__8683;
continue;
}
} else
{var vec__8582_8684 = cljs.core.first.call(null,seq__8577_8678__$1);var ev__8112__auto___8685 = cljs.core.nth.call(null,vec__8582_8684,0,null);var func__8113__auto___8686 = cljs.core.nth.call(null,vec__8582_8684,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8685,func__8113__auto___8686);
{
var G__8687 = cljs.core.next.call(null,seq__8577_8678__$1);
var G__8688 = null;
var G__8689 = 0;
var G__8690 = 0;
seq__8577_8666 = G__8687;
chunk__8578_8667 = G__8688;
count__8579_8668 = G__8689;
i__8580_8669 = G__8690;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8589_8691 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__8590_8692 = null;var count__8591_8693 = 0;var i__8592_8694 = 0;while(true){
if((i__8592_8694 < count__8591_8693))
{var vec__8593_8695 = cljs.core._nth.call(null,chunk__8590_8692,i__8592_8694);var ev__8112__auto___8696 = cljs.core.nth.call(null,vec__8593_8695,0,null);var func__8113__auto___8697 = cljs.core.nth.call(null,vec__8593_8695,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8696,func__8113__auto___8697);
{
var G__8698 = seq__8589_8691;
var G__8699 = chunk__8590_8692;
var G__8700 = count__8591_8693;
var G__8701 = (i__8592_8694 + 1);
seq__8589_8691 = G__8698;
chunk__8590_8692 = G__8699;
count__8591_8693 = G__8700;
i__8592_8694 = G__8701;
continue;
}
} else
{var temp__4092__auto___8702 = cljs.core.seq.call(null,seq__8589_8691);if(temp__4092__auto___8702)
{var seq__8589_8703__$1 = temp__4092__auto___8702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8589_8703__$1))
{var c__7497__auto___8704 = cljs.core.chunk_first.call(null,seq__8589_8703__$1);{
var G__8705 = cljs.core.chunk_rest.call(null,seq__8589_8703__$1);
var G__8706 = c__7497__auto___8704;
var G__8707 = cljs.core.count.call(null,c__7497__auto___8704);
var G__8708 = 0;
seq__8589_8691 = G__8705;
chunk__8590_8692 = G__8706;
count__8591_8693 = G__8707;
i__8592_8694 = G__8708;
continue;
}
} else
{var vec__8594_8709 = cljs.core.first.call(null,seq__8589_8703__$1);var ev__8112__auto___8710 = cljs.core.nth.call(null,vec__8594_8709,0,null);var func__8113__auto___8711 = cljs.core.nth.call(null,vec__8594_8709,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8710,func__8113__auto___8711);
{
var G__8712 = cljs.core.next.call(null,seq__8589_8703__$1);
var G__8713 = null;
var G__8714 = 0;
var G__8715 = 0;
seq__8589_8691 = G__8712;
chunk__8590_8692 = G__8713;
count__8591_8693 = G__8714;
i__8592_8694 = G__8715;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.plugins.gitlight.status.ui.file_ops = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stage","diff","revert","stash"], null),new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add","ignore","delete"], null),new cljs.core.Keyword(null,"staged","staged",4416376984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unstage"], null)], null);
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__8595){var vec__8607 = p__8595;var f = cljs.core.nth.call(null,vec__8607,0,null);var t = cljs.core.nth.call(null,vec__8607,1,null);var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str(cljs.core.first.call(null,cljs.core.name.call(null,t)).toUpperCase()),cljs.core.str(" "),cljs.core.str(f)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__8608(s__8609){return (new cljs.core.LazySeq(null,(function (){var s__8609__$1 = s__8609;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8609__$1);if(temp__4092__auto__)
{var s__8609__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8609__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8609__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8611 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8610 = 0;while(true){
if((i__8610 < size__7465__auto__))
{var bt = cljs.core._nth.call(null,c__7464__auto__,i__8610);cljs.core.chunk_append.call(null,b__8611,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__8716 = (i__8610 + 1);
i__8610 = G__8716;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8611),iter__8608.call(null,cljs.core.chunk_rest.call(null,s__8609__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8611),null);
}
} else
{var bt = cljs.core.first.call(null,s__8609__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__8608.call(null,cljs.core.rest.call(null,s__8609__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__8612_8717 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8613_8718 = null;var count__8614_8719 = 0;var i__8615_8720 = 0;while(true){
if((i__8615_8720 < count__8614_8719))
{var vec__8616_8721 = cljs.core._nth.call(null,chunk__8613_8718,i__8615_8720);var ev__8112__auto___8722 = cljs.core.nth.call(null,vec__8616_8721,0,null);var func__8113__auto___8723 = cljs.core.nth.call(null,vec__8616_8721,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8722,func__8113__auto___8723);
{
var G__8724 = seq__8612_8717;
var G__8725 = chunk__8613_8718;
var G__8726 = count__8614_8719;
var G__8727 = (i__8615_8720 + 1);
seq__8612_8717 = G__8724;
chunk__8613_8718 = G__8725;
count__8614_8719 = G__8726;
i__8615_8720 = G__8727;
continue;
}
} else
{var temp__4092__auto___8728 = cljs.core.seq.call(null,seq__8612_8717);if(temp__4092__auto___8728)
{var seq__8612_8729__$1 = temp__4092__auto___8728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8612_8729__$1))
{var c__7497__auto___8730 = cljs.core.chunk_first.call(null,seq__8612_8729__$1);{
var G__8731 = cljs.core.chunk_rest.call(null,seq__8612_8729__$1);
var G__8732 = c__7497__auto___8730;
var G__8733 = cljs.core.count.call(null,c__7497__auto___8730);
var G__8734 = 0;
seq__8612_8717 = G__8731;
chunk__8613_8718 = G__8732;
count__8614_8719 = G__8733;
i__8615_8720 = G__8734;
continue;
}
} else
{var vec__8617_8735 = cljs.core.first.call(null,seq__8612_8729__$1);var ev__8112__auto___8736 = cljs.core.nth.call(null,vec__8617_8735,0,null);var func__8113__auto___8737 = cljs.core.nth.call(null,vec__8617_8735,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8736,func__8113__auto___8737);
{
var G__8738 = cljs.core.next.call(null,seq__8612_8729__$1);
var G__8739 = null;
var G__8740 = 0;
var G__8741 = 0;
seq__8612_8717 = G__8738;
chunk__8613_8718 = G__8739;
count__8614_8719 = G__8740;
i__8615_8720 = G__8741;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.button.call(null,branch,[cljs.core.str("Branch menu")].join(''))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",lt.plugins.gitlight.status.ui.button.call(null,git_root,"Change repo")], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__8636(s__8637){return (new cljs.core.LazySeq(null,(function (){var s__8637__$1 = s__8637;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8637__$1);if(temp__4092__auto__)
{var s__8637__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8637__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8637__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8639 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8638 = 0;while(true){
if((i__8638 < size__7465__auto__))
{var t = cljs.core._nth.call(null,c__7464__auto__,i__8638);cljs.core.chunk_append.call(null,b__8639,lt.plugins.gitlight.status.ui.button.call(null,t,git_root));
{
var G__8742 = (i__8638 + 1);
i__8638 = G__8742;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8639),iter__8636.call(null,cljs.core.chunk_rest.call(null,s__8637__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8639),null);
}
} else
{var t = cljs.core.first.call(null,s__8637__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,t,git_root),iter__8636.call(null,cljs.core.rest.call(null,s__8637__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","tag"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__8640(s__8641){return (new cljs.core.LazySeq(null,(function (){var s__8641__$1 = s__8641;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8641__$1);if(temp__4092__auto__)
{var s__8641__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8641__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8641__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8643 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8642 = 0;while(true){
if((i__8642 < size__7465__auto__))
{var vec__8646 = cljs.core._nth.call(null,c__7464__auto__,i__8642);var g = cljs.core.nth.call(null,vec__8646,0,null);var fs = cljs.core.nth.call(null,vec__8646,1,null);cljs.core.chunk_append.call(null,b__8643,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__8743 = (i__8642 + 1);
i__8642 = G__8743;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8643),iter__8640.call(null,cljs.core.chunk_rest.call(null,s__8641__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8643),null);
}
} else
{var vec__8647 = cljs.core.first.call(null,s__8641__$2);var g = cljs.core.nth.call(null,vec__8647,0,null);var fs = cljs.core.nth.call(null,vec__8647,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__8640.call(null,cljs.core.rest.call(null,s__8641__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,this$);
})()], null)], null));var seq__8648_8744 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8649_8745 = null;var count__8650_8746 = 0;var i__8651_8747 = 0;while(true){
if((i__8651_8747 < count__8650_8746))
{var vec__8652_8748 = cljs.core._nth.call(null,chunk__8649_8745,i__8651_8747);var ev__8112__auto___8749 = cljs.core.nth.call(null,vec__8652_8748,0,null);var func__8113__auto___8750 = cljs.core.nth.call(null,vec__8652_8748,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8749,func__8113__auto___8750);
{
var G__8751 = seq__8648_8744;
var G__8752 = chunk__8649_8745;
var G__8753 = count__8650_8746;
var G__8754 = (i__8651_8747 + 1);
seq__8648_8744 = G__8751;
chunk__8649_8745 = G__8752;
count__8650_8746 = G__8753;
i__8651_8747 = G__8754;
continue;
}
} else
{var temp__4092__auto___8755 = cljs.core.seq.call(null,seq__8648_8744);if(temp__4092__auto___8755)
{var seq__8648_8756__$1 = temp__4092__auto___8755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8648_8756__$1))
{var c__7497__auto___8757 = cljs.core.chunk_first.call(null,seq__8648_8756__$1);{
var G__8758 = cljs.core.chunk_rest.call(null,seq__8648_8756__$1);
var G__8759 = c__7497__auto___8757;
var G__8760 = cljs.core.count.call(null,c__7497__auto___8757);
var G__8761 = 0;
seq__8648_8744 = G__8758;
chunk__8649_8745 = G__8759;
count__8650_8746 = G__8760;
i__8651_8747 = G__8761;
continue;
}
} else
{var vec__8653_8762 = cljs.core.first.call(null,seq__8648_8756__$1);var ev__8112__auto___8763 = cljs.core.nth.call(null,vec__8653_8762,0,null);var func__8113__auto___8764 = cljs.core.nth.call(null,vec__8653_8762,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8763,func__8113__auto___8764);
{
var G__8765 = cljs.core.next.call(null,seq__8648_8756__$1);
var G__8766 = null;
var G__8767 = 0;
var G__8768 = 0;
seq__8648_8744 = G__8765;
chunk__8649_8745 = G__8766;
count__8650_8746 = G__8767;
i__8651_8747 = G__8768;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__8660_8769 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8661_8770 = null;var count__8662_8771 = 0;var i__8663_8772 = 0;while(true){
if((i__8663_8772 < count__8662_8771))
{var vec__8664_8773 = cljs.core._nth.call(null,chunk__8661_8770,i__8663_8772);var ev__8112__auto___8774 = cljs.core.nth.call(null,vec__8664_8773,0,null);var func__8113__auto___8775 = cljs.core.nth.call(null,vec__8664_8773,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8774,func__8113__auto___8775);
{
var G__8776 = seq__8660_8769;
var G__8777 = chunk__8661_8770;
var G__8778 = count__8662_8771;
var G__8779 = (i__8663_8772 + 1);
seq__8660_8769 = G__8776;
chunk__8661_8770 = G__8777;
count__8662_8771 = G__8778;
i__8663_8772 = G__8779;
continue;
}
} else
{var temp__4092__auto___8780 = cljs.core.seq.call(null,seq__8660_8769);if(temp__4092__auto___8780)
{var seq__8660_8781__$1 = temp__4092__auto___8780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8660_8781__$1))
{var c__7497__auto___8782 = cljs.core.chunk_first.call(null,seq__8660_8781__$1);{
var G__8783 = cljs.core.chunk_rest.call(null,seq__8660_8781__$1);
var G__8784 = c__7497__auto___8782;
var G__8785 = cljs.core.count.call(null,c__7497__auto___8782);
var G__8786 = 0;
seq__8660_8769 = G__8783;
chunk__8661_8770 = G__8784;
count__8662_8771 = G__8785;
i__8663_8772 = G__8786;
continue;
}
} else
{var vec__8665_8787 = cljs.core.first.call(null,seq__8660_8781__$1);var ev__8112__auto___8788 = cljs.core.nth.call(null,vec__8665_8787,0,null);var func__8113__auto___8789 = cljs.core.nth.call(null,vec__8665_8787,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8788,func__8113__auto___8789);
{
var G__8790 = cljs.core.next.call(null,seq__8660_8781__$1);
var G__8791 = null;
var G__8792 = 0;
var G__8793 = 0;
seq__8660_8769 = G__8790;
chunk__8661_8770 = G__8791;
count__8662_8771 = G__8792;
i__8663_8772 = G__8793;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.plugins.gitlight.status.ui.__BEH__update = (function __BEH__update(obj,status,branch){var bar_dom = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));lt.plugins.gitlight.status.ui.dom_truncate.call(null,bar_dom);
lt.util.dom.append.call(null,bar_dom,lt.plugins.gitlight.status.ui.status_ui.call(null,status,branch,lt.plugins.gitlight.git.get_git_root.call(null)));
return lt.plugins.gitlight.status.ui.resize_to_content.call(null,lt.util.dom.parent.call(null,bar_dom),bar_dom);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.ui.__BEH__update,new cljs.core.Keyword(null,"desc","desc",1016984067),"update status view",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"GIT",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731)], null),new cljs.core.Keyword(null,"order","order",1119910592),2,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.status.ui.wrapper.call(null,cljs.core.deref.call(null,this$));
}));
lt.plugins.gitlight.status.ui.status_bar = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620));
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
lt.plugins.gitlight.status.back.staged = (function staged(X,Y,filename){if((lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MARC",X)) || ((cljs.core._EQ_.call(null,"D",X)) && (lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null," M",Y))))
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
lt.plugins.gitlight.status.back.parse_porcelain = (function parse_porcelain(data){var splitted = clojure.string.split_lines.call(null,data.toString());var branch = cljs.core.subs.call(null,cljs.core.first.call(null,splitted),3);var parsed = lt.plugins.gitlight.status.back.parse_git_status.call(null,cljs.core.rest.call(null,splitted));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),[cljs.core.str(branch)].join(''),new cljs.core.Keyword(null,"status","status",4416389988),cljs.core.group_by.call(null,(function (a){return cljs.core.nth.call(null,a,2);
}),parsed)], null);
});
lt.plugins.gitlight.status.back.__BEH__git_status__DOT__out = (function __BEH__git_status__DOT__out(obj,data){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.parse_porcelain.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status.out","lt.plugins.gitlight.status.back/git-status.out",3897738133),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git status is executed, parse its output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.status.back.git_status_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out","lt.plugins.gitlight.status.back/git-status-out",3897718648),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-status-out","git-status-out",2815542080)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status.out","lt.plugins.gitlight.status.back/git-status.out",3897738133),new cljs.core.Keyword("lt.plugins.gitlight.status.back","refresh-ui-on-new-status","lt.plugins.gitlight.status.back/refresh-ui-on-new-status",1675222016),new cljs.core.Keyword("lt.plugins.gitlight.status.back","auto-refresh-git-status","lt.plugins.gitlight.status.back/auto-refresh-git-status",1891470533)], null)));
lt.plugins.gitlight.status.back.git_status = (function git_status(){return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.status.back.git_status_out,"status","--porcelain","--branch");
});
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

//# sourceMappingURL=gitlight_compiled.js.map