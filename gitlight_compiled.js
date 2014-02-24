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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__8626_8715 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8627_8716 = null;var count__8628_8717 = 0;var i__8629_8718 = 0;while(true){
if((i__8629_8718 < count__8628_8717))
{var vec__8630_8719 = cljs.core._nth.call(null,chunk__8627_8716,i__8629_8718);var ev__8112__auto___8720 = cljs.core.nth.call(null,vec__8630_8719,0,null);var func__8113__auto___8721 = cljs.core.nth.call(null,vec__8630_8719,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8720,func__8113__auto___8721);
{
var G__8722 = seq__8626_8715;
var G__8723 = chunk__8627_8716;
var G__8724 = count__8628_8717;
var G__8725 = (i__8629_8718 + 1);
seq__8626_8715 = G__8722;
chunk__8627_8716 = G__8723;
count__8628_8717 = G__8724;
i__8629_8718 = G__8725;
continue;
}
} else
{var temp__4092__auto___8726 = cljs.core.seq.call(null,seq__8626_8715);if(temp__4092__auto___8726)
{var seq__8626_8727__$1 = temp__4092__auto___8726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8626_8727__$1))
{var c__7497__auto___8728 = cljs.core.chunk_first.call(null,seq__8626_8727__$1);{
var G__8729 = cljs.core.chunk_rest.call(null,seq__8626_8727__$1);
var G__8730 = c__7497__auto___8728;
var G__8731 = cljs.core.count.call(null,c__7497__auto___8728);
var G__8732 = 0;
seq__8626_8715 = G__8729;
chunk__8627_8716 = G__8730;
count__8628_8717 = G__8731;
i__8629_8718 = G__8732;
continue;
}
} else
{var vec__8631_8733 = cljs.core.first.call(null,seq__8626_8727__$1);var ev__8112__auto___8734 = cljs.core.nth.call(null,vec__8631_8733,0,null);var func__8113__auto___8735 = cljs.core.nth.call(null,vec__8631_8733,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8734,func__8113__auto___8735);
{
var G__8736 = cljs.core.next.call(null,seq__8626_8727__$1);
var G__8737 = null;
var G__8738 = 0;
var G__8739 = 0;
seq__8626_8715 = G__8736;
chunk__8627_8716 = G__8737;
count__8628_8717 = G__8738;
i__8629_8718 = G__8739;
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
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8638_8740 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__8639_8741 = null;var count__8640_8742 = 0;var i__8641_8743 = 0;while(true){
if((i__8641_8743 < count__8640_8742))
{var vec__8642_8744 = cljs.core._nth.call(null,chunk__8639_8741,i__8641_8743);var ev__8112__auto___8745 = cljs.core.nth.call(null,vec__8642_8744,0,null);var func__8113__auto___8746 = cljs.core.nth.call(null,vec__8642_8744,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8745,func__8113__auto___8746);
{
var G__8747 = seq__8638_8740;
var G__8748 = chunk__8639_8741;
var G__8749 = count__8640_8742;
var G__8750 = (i__8641_8743 + 1);
seq__8638_8740 = G__8747;
chunk__8639_8741 = G__8748;
count__8640_8742 = G__8749;
i__8641_8743 = G__8750;
continue;
}
} else
{var temp__4092__auto___8751 = cljs.core.seq.call(null,seq__8638_8740);if(temp__4092__auto___8751)
{var seq__8638_8752__$1 = temp__4092__auto___8751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8638_8752__$1))
{var c__7497__auto___8753 = cljs.core.chunk_first.call(null,seq__8638_8752__$1);{
var G__8754 = cljs.core.chunk_rest.call(null,seq__8638_8752__$1);
var G__8755 = c__7497__auto___8753;
var G__8756 = cljs.core.count.call(null,c__7497__auto___8753);
var G__8757 = 0;
seq__8638_8740 = G__8754;
chunk__8639_8741 = G__8755;
count__8640_8742 = G__8756;
i__8641_8743 = G__8757;
continue;
}
} else
{var vec__8643_8758 = cljs.core.first.call(null,seq__8638_8752__$1);var ev__8112__auto___8759 = cljs.core.nth.call(null,vec__8643_8758,0,null);var func__8113__auto___8760 = cljs.core.nth.call(null,vec__8643_8758,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8759,func__8113__auto___8760);
{
var G__8761 = cljs.core.next.call(null,seq__8638_8752__$1);
var G__8762 = null;
var G__8763 = 0;
var G__8764 = 0;
seq__8638_8740 = G__8761;
chunk__8639_8741 = G__8762;
count__8640_8742 = G__8763;
i__8641_8743 = G__8764;
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__8644){var vec__8656 = p__8644;var f = cljs.core.nth.call(null,vec__8656,0,null);var t = cljs.core.nth.call(null,vec__8656,1,null);var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str(cljs.core.first.call(null,cljs.core.name.call(null,t)).toUpperCase()),cljs.core.str(" "),cljs.core.str(f)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__8657(s__8658){return (new cljs.core.LazySeq(null,(function (){var s__8658__$1 = s__8658;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8658__$1);if(temp__4092__auto__)
{var s__8658__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8658__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8658__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8660 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8659 = 0;while(true){
if((i__8659 < size__7465__auto__))
{var bt = cljs.core._nth.call(null,c__7464__auto__,i__8659);cljs.core.chunk_append.call(null,b__8660,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__8765 = (i__8659 + 1);
i__8659 = G__8765;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8660),iter__8657.call(null,cljs.core.chunk_rest.call(null,s__8658__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8660),null);
}
} else
{var bt = cljs.core.first.call(null,s__8658__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__8657.call(null,cljs.core.rest.call(null,s__8658__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__8661_8766 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8662_8767 = null;var count__8663_8768 = 0;var i__8664_8769 = 0;while(true){
if((i__8664_8769 < count__8663_8768))
{var vec__8665_8770 = cljs.core._nth.call(null,chunk__8662_8767,i__8664_8769);var ev__8112__auto___8771 = cljs.core.nth.call(null,vec__8665_8770,0,null);var func__8113__auto___8772 = cljs.core.nth.call(null,vec__8665_8770,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8771,func__8113__auto___8772);
{
var G__8773 = seq__8661_8766;
var G__8774 = chunk__8662_8767;
var G__8775 = count__8663_8768;
var G__8776 = (i__8664_8769 + 1);
seq__8661_8766 = G__8773;
chunk__8662_8767 = G__8774;
count__8663_8768 = G__8775;
i__8664_8769 = G__8776;
continue;
}
} else
{var temp__4092__auto___8777 = cljs.core.seq.call(null,seq__8661_8766);if(temp__4092__auto___8777)
{var seq__8661_8778__$1 = temp__4092__auto___8777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8661_8778__$1))
{var c__7497__auto___8779 = cljs.core.chunk_first.call(null,seq__8661_8778__$1);{
var G__8780 = cljs.core.chunk_rest.call(null,seq__8661_8778__$1);
var G__8781 = c__7497__auto___8779;
var G__8782 = cljs.core.count.call(null,c__7497__auto___8779);
var G__8783 = 0;
seq__8661_8766 = G__8780;
chunk__8662_8767 = G__8781;
count__8663_8768 = G__8782;
i__8664_8769 = G__8783;
continue;
}
} else
{var vec__8666_8784 = cljs.core.first.call(null,seq__8661_8778__$1);var ev__8112__auto___8785 = cljs.core.nth.call(null,vec__8666_8784,0,null);var func__8113__auto___8786 = cljs.core.nth.call(null,vec__8666_8784,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8785,func__8113__auto___8786);
{
var G__8787 = cljs.core.next.call(null,seq__8661_8778__$1);
var G__8788 = null;
var G__8789 = 0;
var G__8790 = 0;
seq__8661_8766 = G__8787;
chunk__8662_8767 = G__8788;
count__8663_8768 = G__8789;
i__8664_8769 = G__8790;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.button.call(null,branch,[cljs.core.str("Branch menu")].join(''))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",lt.plugins.gitlight.status.ui.button.call(null,git_root,"Change repo")], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__8685(s__8686){return (new cljs.core.LazySeq(null,(function (){var s__8686__$1 = s__8686;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8686__$1);if(temp__4092__auto__)
{var s__8686__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8686__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8686__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8688 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8687 = 0;while(true){
if((i__8687 < size__7465__auto__))
{var t = cljs.core._nth.call(null,c__7464__auto__,i__8687);cljs.core.chunk_append.call(null,b__8688,lt.plugins.gitlight.status.ui.button.call(null,t,git_root));
{
var G__8791 = (i__8687 + 1);
i__8687 = G__8791;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8688),iter__8685.call(null,cljs.core.chunk_rest.call(null,s__8686__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8688),null);
}
} else
{var t = cljs.core.first.call(null,s__8686__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,t,git_root),iter__8685.call(null,cljs.core.rest.call(null,s__8686__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","tag"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__8689(s__8690){return (new cljs.core.LazySeq(null,(function (){var s__8690__$1 = s__8690;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8690__$1);if(temp__4092__auto__)
{var s__8690__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8690__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8690__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8692 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8691 = 0;while(true){
if((i__8691 < size__7465__auto__))
{var vec__8695 = cljs.core._nth.call(null,c__7464__auto__,i__8691);var g = cljs.core.nth.call(null,vec__8695,0,null);var fs = cljs.core.nth.call(null,vec__8695,1,null);cljs.core.chunk_append.call(null,b__8692,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__8792 = (i__8691 + 1);
i__8691 = G__8792;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8692),iter__8689.call(null,cljs.core.chunk_rest.call(null,s__8690__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8692),null);
}
} else
{var vec__8696 = cljs.core.first.call(null,s__8690__$2);var g = cljs.core.nth.call(null,vec__8696,0,null);var fs = cljs.core.nth.call(null,vec__8696,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__8689.call(null,cljs.core.rest.call(null,s__8690__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,this$);
})()], null)], null));var seq__8697_8793 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8698_8794 = null;var count__8699_8795 = 0;var i__8700_8796 = 0;while(true){
if((i__8700_8796 < count__8699_8795))
{var vec__8701_8797 = cljs.core._nth.call(null,chunk__8698_8794,i__8700_8796);var ev__8112__auto___8798 = cljs.core.nth.call(null,vec__8701_8797,0,null);var func__8113__auto___8799 = cljs.core.nth.call(null,vec__8701_8797,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8798,func__8113__auto___8799);
{
var G__8800 = seq__8697_8793;
var G__8801 = chunk__8698_8794;
var G__8802 = count__8699_8795;
var G__8803 = (i__8700_8796 + 1);
seq__8697_8793 = G__8800;
chunk__8698_8794 = G__8801;
count__8699_8795 = G__8802;
i__8700_8796 = G__8803;
continue;
}
} else
{var temp__4092__auto___8804 = cljs.core.seq.call(null,seq__8697_8793);if(temp__4092__auto___8804)
{var seq__8697_8805__$1 = temp__4092__auto___8804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8697_8805__$1))
{var c__7497__auto___8806 = cljs.core.chunk_first.call(null,seq__8697_8805__$1);{
var G__8807 = cljs.core.chunk_rest.call(null,seq__8697_8805__$1);
var G__8808 = c__7497__auto___8806;
var G__8809 = cljs.core.count.call(null,c__7497__auto___8806);
var G__8810 = 0;
seq__8697_8793 = G__8807;
chunk__8698_8794 = G__8808;
count__8699_8795 = G__8809;
i__8700_8796 = G__8810;
continue;
}
} else
{var vec__8702_8811 = cljs.core.first.call(null,seq__8697_8805__$1);var ev__8112__auto___8812 = cljs.core.nth.call(null,vec__8702_8811,0,null);var func__8113__auto___8813 = cljs.core.nth.call(null,vec__8702_8811,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8812,func__8113__auto___8813);
{
var G__8814 = cljs.core.next.call(null,seq__8697_8805__$1);
var G__8815 = null;
var G__8816 = 0;
var G__8817 = 0;
seq__8697_8793 = G__8814;
chunk__8698_8794 = G__8815;
count__8699_8795 = G__8816;
i__8700_8796 = G__8817;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__8709_8818 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8710_8819 = null;var count__8711_8820 = 0;var i__8712_8821 = 0;while(true){
if((i__8712_8821 < count__8711_8820))
{var vec__8713_8822 = cljs.core._nth.call(null,chunk__8710_8819,i__8712_8821);var ev__8112__auto___8823 = cljs.core.nth.call(null,vec__8713_8822,0,null);var func__8113__auto___8824 = cljs.core.nth.call(null,vec__8713_8822,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8823,func__8113__auto___8824);
{
var G__8825 = seq__8709_8818;
var G__8826 = chunk__8710_8819;
var G__8827 = count__8711_8820;
var G__8828 = (i__8712_8821 + 1);
seq__8709_8818 = G__8825;
chunk__8710_8819 = G__8826;
count__8711_8820 = G__8827;
i__8712_8821 = G__8828;
continue;
}
} else
{var temp__4092__auto___8829 = cljs.core.seq.call(null,seq__8709_8818);if(temp__4092__auto___8829)
{var seq__8709_8830__$1 = temp__4092__auto___8829;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8709_8830__$1))
{var c__7497__auto___8831 = cljs.core.chunk_first.call(null,seq__8709_8830__$1);{
var G__8832 = cljs.core.chunk_rest.call(null,seq__8709_8830__$1);
var G__8833 = c__7497__auto___8831;
var G__8834 = cljs.core.count.call(null,c__7497__auto___8831);
var G__8835 = 0;
seq__8709_8818 = G__8832;
chunk__8710_8819 = G__8833;
count__8711_8820 = G__8834;
i__8712_8821 = G__8835;
continue;
}
} else
{var vec__8714_8836 = cljs.core.first.call(null,seq__8709_8830__$1);var ev__8112__auto___8837 = cljs.core.nth.call(null,vec__8714_8836,0,null);var func__8113__auto___8838 = cljs.core.nth.call(null,vec__8714_8836,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8837,func__8113__auto___8838);
{
var G__8839 = cljs.core.next.call(null,seq__8709_8830__$1);
var G__8840 = null;
var G__8841 = 0;
var G__8842 = 0;
seq__8709_8818 = G__8839;
chunk__8710_8819 = G__8840;
count__8711_8820 = G__8841;
i__8712_8821 = G__8842;
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
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests.lib')) {
goog.provide('lt.plugins.gitlight.tests.lib');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
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
lt.plugins.gitlight.tests.lib.asrt = (function asrt(explanation,test_case){return console.log(explanation,cljs.core.name.call(null,lt.plugins.gitlight.tests.lib.asrt_out.call(null,test_case)));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests')) {
goog.provide('lt.plugins.gitlight.tests');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.tests.hello_panel = (function hello_panel(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from test-plugin"], null));var seq__8859_8865 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8860_8866 = null;var count__8861_8867 = 0;var i__8862_8868 = 0;while(true){
if((i__8862_8868 < count__8861_8867))
{var vec__8863_8869 = cljs.core._nth.call(null,chunk__8860_8866,i__8862_8868);var ev__8112__auto___8870 = cljs.core.nth.call(null,vec__8863_8869,0,null);var func__8113__auto___8871 = cljs.core.nth.call(null,vec__8863_8869,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8870,func__8113__auto___8871);
{
var G__8872 = seq__8859_8865;
var G__8873 = chunk__8860_8866;
var G__8874 = count__8861_8867;
var G__8875 = (i__8862_8868 + 1);
seq__8859_8865 = G__8872;
chunk__8860_8866 = G__8873;
count__8861_8867 = G__8874;
i__8862_8868 = G__8875;
continue;
}
} else
{var temp__4092__auto___8876 = cljs.core.seq.call(null,seq__8859_8865);if(temp__4092__auto___8876)
{var seq__8859_8877__$1 = temp__4092__auto___8876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8859_8877__$1))
{var c__7497__auto___8878 = cljs.core.chunk_first.call(null,seq__8859_8877__$1);{
var G__8879 = cljs.core.chunk_rest.call(null,seq__8859_8877__$1);
var G__8880 = c__7497__auto___8878;
var G__8881 = cljs.core.count.call(null,c__7497__auto___8878);
var G__8882 = 0;
seq__8859_8865 = G__8879;
chunk__8860_8866 = G__8880;
count__8861_8867 = G__8881;
i__8862_8868 = G__8882;
continue;
}
} else
{var vec__8864_8883 = cljs.core.first.call(null,seq__8859_8877__$1);var ev__8112__auto___8884 = cljs.core.nth.call(null,vec__8864_8883,0,null);var func__8113__auto___8885 = cljs.core.nth.call(null,vec__8864_8883,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8884,func__8113__auto___8885);
{
var G__8886 = cljs.core.next.call(null,seq__8859_8877__$1);
var G__8887 = null;
var G__8888 = 0;
var G__8889 = 0;
seq__8859_8865 = G__8886;
chunk__8860_8866 = G__8887;
count__8861_8867 = G__8888;
i__8862_8868 = G__8889;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests","tests.out","lt.plugins.gitlight.tests/tests.out",4666915576),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tests.out","gitlight-tests.out",1702733674)], null),new cljs.core.Keyword(null,"name","name",1017277949),"tests out",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.tests.hello_panel.call(null,this$);
}));
lt.plugins.gitlight.tests.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8890 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8890))
{var ts_8891 = temp__4092__auto___8890;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8891))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8891);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests","on-close-destroy","lt.plugins.gitlight.tests/on-close-destroy",734188314),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.gitlight.tests.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests","test-plugin.hello","lt.plugins.gitlight.tests/test-plugin.hello",2083981607));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.tests","say-hello","lt.plugins.gitlight.tests/say-hello",1713233249),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: self test",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.gitlight.tests.hello);
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests.status.ui')) {
goog.provide('lt.plugins.gitlight.tests.status.ui');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.tests.lib.asrt.call(null,"It's alive",true);
lt.plugins.gitlight.tests.lib.asrt.call(null,"It's that is not","that is not");
lt.plugins.gitlight.tests.lib.asrt.call(null,"It's an error",false);
}
if(!lt.util.load.provided_QMARK_('')) {
}

//# sourceMappingURL=gitlight_compiled.js.map