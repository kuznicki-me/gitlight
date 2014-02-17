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
lt.plugins.gitlight.delete_inside_parens = (function delete_inside_parens(data){var line_with_no_hash = clojure.string.replace_first.call(null,data,/#/," ");var trimmed = clojure.string.trim.call(null,line_with_no_hash);return clojure.string.replace.call(null,[cljs.core.str(trimmed)].join(''),/^\(.*\)$/,"");
});
lt.plugins.gitlight.get_files = (function get_files(data){var first_line_fix = [cljs.core.str("#"),cljs.core.str(data)].join('');var splitted = clojure.string.split_lines.call(null,first_line_fix);var filtered = cljs.core.filter.call(null,((function (first_line_fix,splitted){
return (function (p1__32893_SHARP_){return p1__32893_SHARP_.startsWith("#");
});})(first_line_fix,splitted))
,splitted);var no_parens = cljs.core.map.call(null,lt.plugins.gitlight.delete_inside_parens,filtered);return cljs.core.filter.call(null,(function (p1__32894_SHARP_){return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,p1__32894_SHARP_));
}),no_parens);
});
lt.plugins.gitlight.git_status = (function git_status(){var dir = lt.plugins.gitlight.get_cwd.call(null);return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),"/usr/bin/git",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",4416389988)], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),dir,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.shell_git_out], null));
});
lt.plugins.gitlight.git_output = (function git_output(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"asdf"], null));var seq__32901_32909 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__32902_32910 = null;var count__32903_32911 = 0;var i__32904_32912 = 0;while(true){
if((i__32904_32912 < count__32903_32911))
{var vec__32905_32913 = cljs.core._nth.call(null,chunk__32902_32910,i__32904_32912);var ev__8112__auto___32914 = cljs.core.nth.call(null,vec__32905_32913,0,null);var func__8113__auto___32915 = cljs.core.nth.call(null,vec__32905_32913,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___32914,func__8113__auto___32915);
{
var G__32916 = seq__32901_32909;
var G__32917 = chunk__32902_32910;
var G__32918 = count__32903_32911;
var G__32919 = (i__32904_32912 + 1);
seq__32901_32909 = G__32916;
chunk__32902_32910 = G__32917;
count__32903_32911 = G__32918;
i__32904_32912 = G__32919;
continue;
}
} else
{var temp__4092__auto___32920 = cljs.core.seq.call(null,seq__32901_32909);if(temp__4092__auto___32920)
{var seq__32901_32921__$1 = temp__4092__auto___32920;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32901_32921__$1))
{var c__7497__auto___32922 = cljs.core.chunk_first.call(null,seq__32901_32921__$1);{
var G__32923 = cljs.core.chunk_rest.call(null,seq__32901_32921__$1);
var G__32924 = c__7497__auto___32922;
var G__32925 = cljs.core.count.call(null,c__7497__auto___32922);
var G__32926 = 0;
seq__32901_32909 = G__32923;
chunk__32902_32910 = G__32924;
count__32903_32911 = G__32925;
i__32904_32912 = G__32926;
continue;
}
} else
{var vec__32906_32927 = cljs.core.first.call(null,seq__32901_32921__$1);var ev__8112__auto___32928 = cljs.core.nth.call(null,vec__32906_32927,0,null);var func__8113__auto___32929 = cljs.core.nth.call(null,vec__32906_32927,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___32928,func__8113__auto___32929);
{
var G__32930 = cljs.core.next.call(null,seq__32901_32921__$1);
var G__32931 = null;
var G__32932 = 0;
var G__32933 = 0;
seq__32901_32909 = G__32930;
chunk__32902_32910 = G__32931;
count__32903_32911 = G__32932;
i__32904_32912 = G__32933;
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
lt.plugins.gitlight.split_and_swap = (function split_and_swap(filename){var vec__32908 = clojure.string.split.call(null,filename,/:/,2);var a = cljs.core.nth.call(null,vec__32908,0,null);var b = cljs.core.nth.call(null,vec__32908,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim.call(null,b),cljs.core.keyword.call(null,a)], null);
});
lt.plugins.gitlight.split_property = (function split_property(filenames){return cljs.core.map.call(null,lt.plugins.gitlight.split_and_swap,filenames);
});
lt.plugins.gitlight.make_a_category = (function make_a_category(data){var cat = cljs.core.first.call(null,data);var filenames = cljs.core.rest.call(null,data);if(cljs.core._EQ_.call(null,cat,"to be committed:"))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to_commit","to_commit",3334658797),lt.plugins.gitlight.split_property.call(null,filenames)], null);
} else
{if(cljs.core._EQ_.call(null,cat,"not staged for commit:"))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not_staged","not_staged",4226785156),lt.plugins.gitlight.split_property.call(null,filenames)], null);
} else
{if(cljs.core._EQ_.call(null,cat,"files:"))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untracked","untracked",1658310115),filenames], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown","unknown",729063356),filenames], null);
} else
{return null;
}
}
}
}
});
lt.plugins.gitlight.mangle_data = (function mangle_data(data){var splitted = clojure.string.split.call(null,data.toString(),/#/,3);var branch_line = cljs.core.second.call(null,splitted);var splitted_by_changes = clojure.string.split.call(null,cljs.core.nth.call(null,splitted,2),/Changes|Untracked/);var grouped_by_fields = cljs.core.rest.call(null,cljs.core.map.call(null,lt.plugins.gitlight.get_files,splitted_by_changes));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.get_branch.call(null,branch_line),cljs.core.map.call(null,lt.plugins.gitlight.make_a_category,grouped_by_fields)], null);
});
lt.plugins.gitlight.__BEH__shell_git__DOT__out = (function __BEH__shell_git__DOT__out(obj,data){return cljs.core.println.call(null,lt.plugins.gitlight.mangle_data.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","shell-git.out","lt.plugins.gitlight/shell-git.out",1423956733),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.__BEH__shell_git__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git command is executed, show its out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.shell_git_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","shell-git-out","lt.plugins.gitlight/shell-git-out",1423904478),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shell-git-out","shell-git-out",543653800)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight","shell-git.out","lt.plugins.gitlight/shell-git.out",1423956733)], null)));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight","git-status","lt.plugins.gitlight/git-status",4124246213),new cljs.core.Keyword(null,"desc","desc",1016984067),"git: status",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.git_status], null));
}

//# sourceMappingURL=gitlight_compiled.js.map