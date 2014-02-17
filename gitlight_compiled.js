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
lt.plugins.gitlight.get_branch = (function get_branch(fist_line){return cljs.core.second.call(null,clojure.string.split.call(null,lt.plugins.gitlight.first_line,/On branch /));
});
lt.plugins.gitlight.git_status = (function git_status(){var dir = lt.plugins.gitlight.get_cwd.call(null);return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),"/usr/bin/git",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",4416389988)], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),dir,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.shell_git_out], null));
});
lt.plugins.gitlight.git_output = (function git_output(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"asdf"], null));var seq__23171_23177 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__23172_23178 = null;var count__23173_23179 = 0;var i__23174_23180 = 0;while(true){
if((i__23174_23180 < count__23173_23179))
{var vec__23175_23181 = cljs.core._nth.call(null,chunk__23172_23178,i__23174_23180);var ev__8112__auto___23182 = cljs.core.nth.call(null,vec__23175_23181,0,null);var func__8113__auto___23183 = cljs.core.nth.call(null,vec__23175_23181,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___23182,func__8113__auto___23183);
{
var G__23184 = seq__23171_23177;
var G__23185 = chunk__23172_23178;
var G__23186 = count__23173_23179;
var G__23187 = (i__23174_23180 + 1);
seq__23171_23177 = G__23184;
chunk__23172_23178 = G__23185;
count__23173_23179 = G__23186;
i__23174_23180 = G__23187;
continue;
}
} else
{var temp__4092__auto___23188 = cljs.core.seq.call(null,seq__23171_23177);if(temp__4092__auto___23188)
{var seq__23171_23189__$1 = temp__4092__auto___23188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23171_23189__$1))
{var c__7497__auto___23190 = cljs.core.chunk_first.call(null,seq__23171_23189__$1);{
var G__23191 = cljs.core.chunk_rest.call(null,seq__23171_23189__$1);
var G__23192 = c__7497__auto___23190;
var G__23193 = cljs.core.count.call(null,c__7497__auto___23190);
var G__23194 = 0;
seq__23171_23177 = G__23191;
chunk__23172_23178 = G__23192;
count__23173_23179 = G__23193;
i__23174_23180 = G__23194;
continue;
}
} else
{var vec__23176_23195 = cljs.core.first.call(null,seq__23171_23189__$1);var ev__8112__auto___23196 = cljs.core.nth.call(null,vec__23176_23195,0,null);var func__8113__auto___23197 = cljs.core.nth.call(null,vec__23176_23195,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___23196,func__8113__auto___23197);
{
var G__23198 = cljs.core.next.call(null,seq__23171_23189__$1);
var G__23199 = null;
var G__23200 = 0;
var G__23201 = 0;
seq__23171_23177 = G__23198;
chunk__23172_23178 = G__23199;
count__23173_23179 = G__23200;
i__23174_23180 = G__23201;
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
lt.plugins.gitlight.mangle_data = (function mangle_data(data){var splitted = clojure.string.split.call(null,data.toString(),/#/);return cljs.core.println.call(null,lt.plugins.gitlight.get_branch.call(null,cljs.core.second.call(null,splitted)));
});
lt.plugins.gitlight.__BEH__shell_git__DOT__out = (function __BEH__shell_git__DOT__out(obj,data){return lt.plugins.gitlight.mangle_data.call(null,data);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","shell-git.out","lt.plugins.gitlight/shell-git.out",1423956733),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.__BEH__shell_git__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git command is executed, show its out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.shell_git_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","shell-git-out","lt.plugins.gitlight/shell-git-out",1423904478),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shell-git-out","shell-git-out",543653800)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight","shell-git.out","lt.plugins.gitlight/shell-git.out",1423956733)], null)));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight","git-status","lt.plugins.gitlight/git-status",4124246213),new cljs.core.Keyword(null,"desc","desc",1016984067),"git: status",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.git_status], null));
}

//# sourceMappingURL=gitlight_compiled.js.map