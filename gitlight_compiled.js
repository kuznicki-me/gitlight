if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.tabs');
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
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.gitlight.get_cwd = (function get_cwd(){var filename = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));return lt.objs.files.parent.call(null,filename);
});
lt.plugins.gitlight.get_branch = (function get_branch(data){return cljs.core.second.call(null,clojure.string.split.call(null,data,/On branch /));
});
lt.plugins.gitlight.delete_inside_parens = (function delete_inside_parens(data){return clojure.string.replace.call(null,clojure.string.trim.call(null,data),/^\(.*\)$/,"");
});
lt.plugins.gitlight.get_files = (function get_files(data){var splitted = clojure.string.split.call(null,data,/#/);return cljs.core.map.call(null,lt.plugins.gitlight.delete_inside_parens,splitted);
});
lt.plugins.gitlight.git_status = (function git_status(){var dir = lt.plugins.gitlight.get_cwd.call(null);return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),"/usr/bin/git",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",4416389988)], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),dir,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.shell_git_out], null));
});
lt.plugins.gitlight.git_output = (function git_output(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"asdf"], null));var seq__26612_26618 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__26613_26619 = null;var count__26614_26620 = 0;var i__26615_26621 = 0;while(true){
if((i__26615_26621 < count__26614_26620))
{var vec__26616_26622 = cljs.core._nth.call(null,chunk__26613_26619,i__26615_26621);var ev__8112__auto___26623 = cljs.core.nth.call(null,vec__26616_26622,0,null);var func__8113__auto___26624 = cljs.core.nth.call(null,vec__26616_26622,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___26623,func__8113__auto___26624);
{
var G__26625 = seq__26612_26618;
var G__26626 = chunk__26613_26619;
var G__26627 = count__26614_26620;
var G__26628 = (i__26615_26621 + 1);
seq__26612_26618 = G__26625;
chunk__26613_26619 = G__26626;
count__26614_26620 = G__26627;
i__26615_26621 = G__26628;
continue;
}
} else
{var temp__4092__auto___26629 = cljs.core.seq.call(null,seq__26612_26618);if(temp__4092__auto___26629)
{var seq__26612_26630__$1 = temp__4092__auto___26629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26612_26630__$1))
{var c__7497__auto___26631 = cljs.core.chunk_first.call(null,seq__26612_26630__$1);{
var G__26632 = cljs.core.chunk_rest.call(null,seq__26612_26630__$1);
var G__26633 = c__7497__auto___26631;
var G__26634 = cljs.core.count.call(null,c__7497__auto___26631);
var G__26635 = 0;
seq__26612_26618 = G__26632;
chunk__26613_26619 = G__26633;
count__26614_26620 = G__26634;
i__26615_26621 = G__26635;
continue;
}
} else
{var vec__26617_26636 = cljs.core.first.call(null,seq__26612_26630__$1);var ev__8112__auto___26637 = cljs.core.nth.call(null,vec__26617_26636,0,null);var func__8113__auto___26638 = cljs.core.nth.call(null,vec__26617_26636,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___26637,func__8113__auto___26638);
{
var G__26639 = cljs.core.next.call(null,seq__26612_26630__$1);
var G__26640 = null;
var G__26641 = 0;
var G__26642 = 0;
seq__26612_26618 = G__26639;
chunk__26613_26619 = G__26640;
count__26614_26620 = G__26641;
i__26615_26621 = G__26642;
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
lt.plugins.gitlight.mangle_data = (function mangle_data(data){var splitted = clojure.string.split.call(null,data.toString(),/#/,3);var branch_line = cljs.core.second.call(null,splitted);var splitted_by_changes = clojure.string.split.call(null,cljs.core.nth.call(null,splitted,2),"Changes");cljs.core.println.call(null,lt.plugins.gitlight.get_branch.call(null,branch_line));
return cljs.core.println.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,lt.plugins.gitlight.get_files,splitted_by_changes,"Changes")));
});
lt.plugins.gitlight.__BEH__shell_git__DOT__out = (function __BEH__shell_git__DOT__out(obj,data){return lt.plugins.gitlight.mangle_data.call(null,data);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","shell-git.out","lt.plugins.gitlight/shell-git.out",1423956733),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.__BEH__shell_git__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git command is executed, show its out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.shell_git_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","shell-git-out","lt.plugins.gitlight/shell-git-out",1423904478),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shell-git-out","shell-git-out",543653800)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight","shell-git.out","lt.plugins.gitlight/shell-git.out",1423956733)], null)));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight","git-status","lt.plugins.gitlight/git-status",4124246213),new cljs.core.Keyword(null,"desc","desc",1016984067),"git: status",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.git_status], null));
}

//# sourceMappingURL=gitlight_compiled.js.map