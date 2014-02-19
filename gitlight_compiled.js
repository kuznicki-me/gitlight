if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.sidebar');
goog.require('lt.object');
goog.require('lt.object');
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight","gitlight.sidebar.close","lt.plugins.gitlight/gitlight.sidebar.close",1352006804),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: sidebar close",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"close!","close!",3951350939));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.back')) {
goog.provide('lt.plugins.gitlight.status.back');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.tabs');
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
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.gitlight.status.back.get_git_root = (function get_git_root(path){return lt.objs.files.parent.call(null,lt.objs.files.walk_up_find.call(null,path,".git"));
});
lt.plugins.gitlight.status.back.on_cwd_QMARK_ = (function on_cwd_QMARK_(){return !((lt.objs.editor.pool.last_active.call(null) == null));
});
lt.plugins.gitlight.status.back.get_cwd = (function get_cwd(){return lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
});
lt.plugins.gitlight.status.back.git_status = (function git_status(){if(lt.plugins.gitlight.status.back.on_cwd_QMARK_.call(null))
{return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),"/usr/bin/git",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["status","--porcelain","--branch"], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.gitlight.status.back.get_cwd.call(null),new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.status.back.shell_git_out], null));
} else
{return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't guess git root",new cljs.core.Keyword(null,"body","body",1016933652),"Please run `git: status' again with file under git repo in editor tab",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
}
});
lt.plugins.gitlight.status.back.in_sequence_QMARK_ = (function in_sequence_QMARK_(haystack,needle){return !((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([needle], true),cljs.core.seq.call(null,haystack)) == null));
});
lt.plugins.gitlight.status.back.keywording_file_status = (function keywording_file_status(status,file){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(file)].join(''),((cljs.core._EQ_.call(null,status,"#"))?new cljs.core.Keyword(null,"branch-name","branch-name",4270694216):((cljs.core._EQ_.call(null,status,"A"))?new cljs.core.Keyword(null,"newfile","newfile",2859647630):((cljs.core._EQ_.call(null,status,"M"))?new cljs.core.Keyword(null,"modified","modified",4693358139):((cljs.core._EQ_.call(null,status,"D"))?new cljs.core.Keyword(null,"deleted","deleted",2564367243):((cljs.core._EQ_.call(null,status,"R"))?new cljs.core.Keyword(null,"renamed","renamed",2106238040):((cljs.core._EQ_.call(null,status,"C"))?new cljs.core.Keyword(null,"copied","copied",3954141750):((cljs.core._EQ_.call(null,status,"?"))?new cljs.core.Keyword(null,"untracked","untracked",1658310115):((cljs.core._EQ_.call(null,status,"!"))?new cljs.core.Keyword(null,"ignored","ignored",2766319684):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.Keyword(null,"unknown","unknown",729063356):null)))))))))], null);
});
lt.plugins.gitlight.status.back.make_keyworded = (function make_keyworded(keyword_function,data){var vec__8581 = keyword_function;var what_keyword = cljs.core.nth.call(null,vec__8581,0,null);var test_function = cljs.core.nth.call(null,vec__8581,1,null);var which_function = cljs.core.nth.call(null,vec__8581,2,null);var filtered = cljs.core.filter.call(null,test_function,data);var keyworded = cljs.core.map.call(null,((function (filtered){
return (function (f){return lt.plugins.gitlight.status.back.keywording_file_status.call(null,which_function.call(null,f),cljs.core.last.call(null,f));
});})(filtered))
,filtered);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [what_keyword,keyworded], null);
});
lt.plugins.gitlight.status.back.parse_line = (function parse_line(line){var X = cljs.core.first.call(null,line);var Y = cljs.core.second.call(null,line);var filename = cljs.core.subs.call(null,line,3);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [X,Y,filename], null);
});
lt.plugins.gitlight.status.back.keyword_functions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"staged","staged",4416376984),(function (d){return lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MARC",cljs.core.first.call(null,d));
}),cljs.core.first], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),(function (d){return (lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null," MARC",cljs.core.first.call(null,d))) && (lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MD",cljs.core.second.call(null,d)));
}),cljs.core.second], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untracked","untracked",1658310115),(function (d){return cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,d));
}),cljs.core.second], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignored","ignored",2766319684),(function (d){return cljs.core._EQ_.call(null,"!",cljs.core.first.call(null,d));
}),cljs.core.second], null)], null);
lt.plugins.gitlight.status.back.make_status = (function make_status(data){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7466__auto__ = (function iter__8586(s__8587){return (new cljs.core.LazySeq(null,(function (){var s__8587__$1 = s__8587;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8587__$1);if(temp__4092__auto__)
{var s__8587__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8587__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8587__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8589 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8588 = 0;while(true){
if((i__8588 < size__7465__auto__))
{var key_fun = cljs.core._nth.call(null,c__7464__auto__,i__8588);cljs.core.chunk_append.call(null,b__8589,lt.plugins.gitlight.status.back.make_keyworded.call(null,key_fun,data));
{
var G__8590 = (i__8588 + 1);
i__8588 = G__8590;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8589),iter__8586.call(null,cljs.core.chunk_rest.call(null,s__8587__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8589),null);
}
} else
{var key_fun = cljs.core.first.call(null,s__8587__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.back.make_keyworded.call(null,key_fun,data),iter__8586.call(null,cljs.core.rest.call(null,s__8587__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,lt.plugins.gitlight.status.back.keyword_functions);
})());
});
lt.plugins.gitlight.status.back.parse_porcelain = (function parse_porcelain(data){var splitted = clojure.string.split_lines.call(null,data.toString());var parsed = cljs.core.map.call(null,lt.plugins.gitlight.status.back.parse_line,splitted);var branch = cljs.core.first.call(null,parsed);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"git-root","git-root",2199394671),lt.plugins.gitlight.status.back.get_git_root.call(null,lt.plugins.gitlight.status.back.get_cwd.call(null)),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),[cljs.core.str(cljs.core.last.call(null,branch))].join(''),new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.make_status.call(null,cljs.core.rest.call(null,parsed))], null);
});
lt.plugins.gitlight.status.back.__BEH__shell_git__DOT__out = (function __BEH__shell_git__DOT__out(obj,data){return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.parse_porcelain.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","shell-git.out","lt.plugins.gitlight.status.back/shell-git.out",1629750829),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__shell_git__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git command is executed, show its out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.status.back.shell_git_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","shell-git-out","lt.plugins.gitlight.status.back/shell-git-out",1629727632),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shell-git-out","shell-git-out",543653800)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.back","shell-git.out","lt.plugins.gitlight.status.back/shell-git.out",1629750829)], null)));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.ui')) {
goog.provide('lt.plugins.gitlight.status.ui');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.objs.command');
lt.plugins.gitlight.status.ui.resize_rightbar = (function resize_rightbar(width){lt.object.merge_BANG_.call(null,lt.objs.tabs.multi,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"side","side",1017434313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),width], true, false));
return lt.object.merge_BANG_.call(null,lt.objs.sidebar.rightbar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),width,new cljs.core.Keyword(null,"max-width","max-width",3646439311),width], null));
});
lt.plugins.gitlight.status.ui.group_names = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),"Not staged",new cljs.core.Keyword(null,"staged","staged",4416376984),"Staged",new cljs.core.Keyword(null,"untracked","untracked",1658310115),"Untracked",new cljs.core.Keyword(null,"ignored","ignored",2766319684),"Ignored"], null);
lt.plugins.gitlight.status.ui.dom_scroll_width = (function dom_scroll_width(n){return n.scrollWidth;
});
lt.plugins.gitlight.status.ui.resize_to_content = (function resize_to_content(parent,child){return lt.plugins.gitlight.status.ui.resize_rightbar.call(null,((lt.util.dom.width.call(null,parent) - lt.util.dom.width.call(null,child)) + lt.plugins.gitlight.status.ui.dom_scroll_width.call(null,child)));
});
lt.plugins.gitlight.status.ui.dom_trunkate = (function dom_trunkate(node){return node.innerHTML = "";
});
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__9935_10024 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9936_10025 = null;var count__9937_10026 = 0;var i__9938_10027 = 0;while(true){
if((i__9938_10027 < count__9937_10026))
{var vec__9939_10028 = cljs.core._nth.call(null,chunk__9936_10025,i__9938_10027);var ev__8112__auto___10029 = cljs.core.nth.call(null,vec__9939_10028,0,null);var func__8113__auto___10030 = cljs.core.nth.call(null,vec__9939_10028,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10029,func__8113__auto___10030);
{
var G__10031 = seq__9935_10024;
var G__10032 = chunk__9936_10025;
var G__10033 = count__9937_10026;
var G__10034 = (i__9938_10027 + 1);
seq__9935_10024 = G__10031;
chunk__9936_10025 = G__10032;
count__9937_10026 = G__10033;
i__9938_10027 = G__10034;
continue;
}
} else
{var temp__4092__auto___10035 = cljs.core.seq.call(null,seq__9935_10024);if(temp__4092__auto___10035)
{var seq__9935_10036__$1 = temp__4092__auto___10035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9935_10036__$1))
{var c__7497__auto___10037 = cljs.core.chunk_first.call(null,seq__9935_10036__$1);{
var G__10038 = cljs.core.chunk_rest.call(null,seq__9935_10036__$1);
var G__10039 = c__7497__auto___10037;
var G__10040 = cljs.core.count.call(null,c__7497__auto___10037);
var G__10041 = 0;
seq__9935_10024 = G__10038;
chunk__9936_10025 = G__10039;
count__9937_10026 = G__10040;
i__9938_10027 = G__10041;
continue;
}
} else
{var vec__9940_10042 = cljs.core.first.call(null,seq__9935_10036__$1);var ev__8112__auto___10043 = cljs.core.nth.call(null,vec__9940_10042,0,null);var func__8113__auto___10044 = cljs.core.nth.call(null,vec__9940_10042,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10043,func__8113__auto___10044);
{
var G__10045 = cljs.core.next.call(null,seq__9935_10036__$1);
var G__10046 = null;
var G__10047 = 0;
var G__10048 = 0;
seq__9935_10024 = G__10045;
chunk__9936_10025 = G__10046;
count__9937_10026 = G__10047;
i__9938_10027 = G__10048;
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
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__9947_10049 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__9948_10050 = null;var count__9949_10051 = 0;var i__9950_10052 = 0;while(true){
if((i__9950_10052 < count__9949_10051))
{var vec__9951_10053 = cljs.core._nth.call(null,chunk__9948_10050,i__9950_10052);var ev__8112__auto___10054 = cljs.core.nth.call(null,vec__9951_10053,0,null);var func__8113__auto___10055 = cljs.core.nth.call(null,vec__9951_10053,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10054,func__8113__auto___10055);
{
var G__10056 = seq__9947_10049;
var G__10057 = chunk__9948_10050;
var G__10058 = count__9949_10051;
var G__10059 = (i__9950_10052 + 1);
seq__9947_10049 = G__10056;
chunk__9948_10050 = G__10057;
count__9949_10051 = G__10058;
i__9950_10052 = G__10059;
continue;
}
} else
{var temp__4092__auto___10060 = cljs.core.seq.call(null,seq__9947_10049);if(temp__4092__auto___10060)
{var seq__9947_10061__$1 = temp__4092__auto___10060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9947_10061__$1))
{var c__7497__auto___10062 = cljs.core.chunk_first.call(null,seq__9947_10061__$1);{
var G__10063 = cljs.core.chunk_rest.call(null,seq__9947_10061__$1);
var G__10064 = c__7497__auto___10062;
var G__10065 = cljs.core.count.call(null,c__7497__auto___10062);
var G__10066 = 0;
seq__9947_10049 = G__10063;
chunk__9948_10050 = G__10064;
count__9949_10051 = G__10065;
i__9950_10052 = G__10066;
continue;
}
} else
{var vec__9952_10067 = cljs.core.first.call(null,seq__9947_10061__$1);var ev__8112__auto___10068 = cljs.core.nth.call(null,vec__9952_10067,0,null);var func__8113__auto___10069 = cljs.core.nth.call(null,vec__9952_10067,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10068,func__8113__auto___10069);
{
var G__10070 = cljs.core.next.call(null,seq__9947_10061__$1);
var G__10071 = null;
var G__10072 = 0;
var G__10073 = 0;
seq__9947_10049 = G__10070;
chunk__9948_10050 = G__10071;
count__9949_10051 = G__10072;
i__9950_10052 = G__10073;
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__9953){var vec__9965 = p__9953;var f = cljs.core.nth.call(null,vec__9965,0,null);var t = cljs.core.nth.call(null,vec__9965,1,null);var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str(cljs.core.first.call(null,cljs.core.name.call(null,t)).toUpperCase()),cljs.core.str(" "),cljs.core.str(f)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__9966(s__9967){return (new cljs.core.LazySeq(null,(function (){var s__9967__$1 = s__9967;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9967__$1);if(temp__4092__auto__)
{var s__9967__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9967__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9967__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9969 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9968 = 0;while(true){
if((i__9968 < size__7465__auto__))
{var bt = cljs.core._nth.call(null,c__7464__auto__,i__9968);cljs.core.chunk_append.call(null,b__9969,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__10074 = (i__9968 + 1);
i__9968 = G__10074;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9969),iter__9966.call(null,cljs.core.chunk_rest.call(null,s__9967__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9969),null);
}
} else
{var bt = cljs.core.first.call(null,s__9967__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__9966.call(null,cljs.core.rest.call(null,s__9967__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__9970_10075 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9971_10076 = null;var count__9972_10077 = 0;var i__9973_10078 = 0;while(true){
if((i__9973_10078 < count__9972_10077))
{var vec__9974_10079 = cljs.core._nth.call(null,chunk__9971_10076,i__9973_10078);var ev__8112__auto___10080 = cljs.core.nth.call(null,vec__9974_10079,0,null);var func__8113__auto___10081 = cljs.core.nth.call(null,vec__9974_10079,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10080,func__8113__auto___10081);
{
var G__10082 = seq__9970_10075;
var G__10083 = chunk__9971_10076;
var G__10084 = count__9972_10077;
var G__10085 = (i__9973_10078 + 1);
seq__9970_10075 = G__10082;
chunk__9971_10076 = G__10083;
count__9972_10077 = G__10084;
i__9973_10078 = G__10085;
continue;
}
} else
{var temp__4092__auto___10086 = cljs.core.seq.call(null,seq__9970_10075);if(temp__4092__auto___10086)
{var seq__9970_10087__$1 = temp__4092__auto___10086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9970_10087__$1))
{var c__7497__auto___10088 = cljs.core.chunk_first.call(null,seq__9970_10087__$1);{
var G__10089 = cljs.core.chunk_rest.call(null,seq__9970_10087__$1);
var G__10090 = c__7497__auto___10088;
var G__10091 = cljs.core.count.call(null,c__7497__auto___10088);
var G__10092 = 0;
seq__9970_10075 = G__10089;
chunk__9971_10076 = G__10090;
count__9972_10077 = G__10091;
i__9973_10078 = G__10092;
continue;
}
} else
{var vec__9975_10093 = cljs.core.first.call(null,seq__9970_10087__$1);var ev__8112__auto___10094 = cljs.core.nth.call(null,vec__9975_10093,0,null);var func__8113__auto___10095 = cljs.core.nth.call(null,vec__9975_10093,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10094,func__8113__auto___10095);
{
var G__10096 = cljs.core.next.call(null,seq__9970_10087__$1);
var G__10097 = null;
var G__10098 = 0;
var G__10099 = 0;
seq__9970_10075 = G__10096;
chunk__9971_10076 = G__10097;
count__9972_10077 = G__10098;
i__9973_10078 = G__10099;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.button.call(null,branch,[cljs.core.str("Branch menu")].join(''))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Root: ",lt.plugins.gitlight.status.ui.button.call(null,git_root,"Change repo")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__9994(s__9995){return (new cljs.core.LazySeq(null,(function (){var s__9995__$1 = s__9995;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9995__$1);if(temp__4092__auto__)
{var s__9995__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9995__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9995__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9997 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9996 = 0;while(true){
if((i__9996 < size__7465__auto__))
{var t = cljs.core._nth.call(null,c__7464__auto__,i__9996);cljs.core.chunk_append.call(null,b__9997,lt.plugins.gitlight.status.ui.button.call(null,t,git_root));
{
var G__10100 = (i__9996 + 1);
i__9996 = G__10100;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9997),iter__9994.call(null,cljs.core.chunk_rest.call(null,s__9995__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9997),null);
}
} else
{var t = cljs.core.first.call(null,s__9995__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,t,git_root),iter__9994.call(null,cljs.core.rest.call(null,s__9995__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","tag"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__9998(s__9999){return (new cljs.core.LazySeq(null,(function (){var s__9999__$1 = s__9999;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9999__$1);if(temp__4092__auto__)
{var s__9999__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9999__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9999__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__10001 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__10000 = 0;while(true){
if((i__10000 < size__7465__auto__))
{var vec__10004 = cljs.core._nth.call(null,c__7464__auto__,i__10000);var g = cljs.core.nth.call(null,vec__10004,0,null);var fs = cljs.core.nth.call(null,vec__10004,1,null);cljs.core.chunk_append.call(null,b__10001,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10101 = (i__10000 + 1);
i__10000 = G__10101;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10001),iter__9998.call(null,cljs.core.chunk_rest.call(null,s__9999__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10001),null);
}
} else
{var vec__10005 = cljs.core.first.call(null,s__9999__$2);var g = cljs.core.nth.call(null,vec__10005,0,null);var fs = cljs.core.nth.call(null,vec__10005,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__9998.call(null,cljs.core.rest.call(null,s__9999__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,this$);
})()], null)], null));var seq__10006_10102 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10007_10103 = null;var count__10008_10104 = 0;var i__10009_10105 = 0;while(true){
if((i__10009_10105 < count__10008_10104))
{var vec__10010_10106 = cljs.core._nth.call(null,chunk__10007_10103,i__10009_10105);var ev__8112__auto___10107 = cljs.core.nth.call(null,vec__10010_10106,0,null);var func__8113__auto___10108 = cljs.core.nth.call(null,vec__10010_10106,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10107,func__8113__auto___10108);
{
var G__10109 = seq__10006_10102;
var G__10110 = chunk__10007_10103;
var G__10111 = count__10008_10104;
var G__10112 = (i__10009_10105 + 1);
seq__10006_10102 = G__10109;
chunk__10007_10103 = G__10110;
count__10008_10104 = G__10111;
i__10009_10105 = G__10112;
continue;
}
} else
{var temp__4092__auto___10113 = cljs.core.seq.call(null,seq__10006_10102);if(temp__4092__auto___10113)
{var seq__10006_10114__$1 = temp__4092__auto___10113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10006_10114__$1))
{var c__7497__auto___10115 = cljs.core.chunk_first.call(null,seq__10006_10114__$1);{
var G__10116 = cljs.core.chunk_rest.call(null,seq__10006_10114__$1);
var G__10117 = c__7497__auto___10115;
var G__10118 = cljs.core.count.call(null,c__7497__auto___10115);
var G__10119 = 0;
seq__10006_10102 = G__10116;
chunk__10007_10103 = G__10117;
count__10008_10104 = G__10118;
i__10009_10105 = G__10119;
continue;
}
} else
{var vec__10011_10120 = cljs.core.first.call(null,seq__10006_10114__$1);var ev__8112__auto___10121 = cljs.core.nth.call(null,vec__10011_10120,0,null);var func__8113__auto___10122 = cljs.core.nth.call(null,vec__10011_10120,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10121,func__8113__auto___10122);
{
var G__10123 = cljs.core.next.call(null,seq__10006_10114__$1);
var G__10124 = null;
var G__10125 = 0;
var G__10126 = 0;
seq__10006_10102 = G__10123;
chunk__10007_10103 = G__10124;
count__10008_10104 = G__10125;
i__10009_10105 = G__10126;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10018_10127 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10019_10128 = null;var count__10020_10129 = 0;var i__10021_10130 = 0;while(true){
if((i__10021_10130 < count__10020_10129))
{var vec__10022_10131 = cljs.core._nth.call(null,chunk__10019_10128,i__10021_10130);var ev__8112__auto___10132 = cljs.core.nth.call(null,vec__10022_10131,0,null);var func__8113__auto___10133 = cljs.core.nth.call(null,vec__10022_10131,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10132,func__8113__auto___10133);
{
var G__10134 = seq__10018_10127;
var G__10135 = chunk__10019_10128;
var G__10136 = count__10020_10129;
var G__10137 = (i__10021_10130 + 1);
seq__10018_10127 = G__10134;
chunk__10019_10128 = G__10135;
count__10020_10129 = G__10136;
i__10021_10130 = G__10137;
continue;
}
} else
{var temp__4092__auto___10138 = cljs.core.seq.call(null,seq__10018_10127);if(temp__4092__auto___10138)
{var seq__10018_10139__$1 = temp__4092__auto___10138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10018_10139__$1))
{var c__7497__auto___10140 = cljs.core.chunk_first.call(null,seq__10018_10139__$1);{
var G__10141 = cljs.core.chunk_rest.call(null,seq__10018_10139__$1);
var G__10142 = c__7497__auto___10140;
var G__10143 = cljs.core.count.call(null,c__7497__auto___10140);
var G__10144 = 0;
seq__10018_10127 = G__10141;
chunk__10019_10128 = G__10142;
count__10020_10129 = G__10143;
i__10021_10130 = G__10144;
continue;
}
} else
{var vec__10023_10145 = cljs.core.first.call(null,seq__10018_10139__$1);var ev__8112__auto___10146 = cljs.core.nth.call(null,vec__10023_10145,0,null);var func__8113__auto___10147 = cljs.core.nth.call(null,vec__10023_10145,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10146,func__8113__auto___10147);
{
var G__10148 = cljs.core.next.call(null,seq__10018_10139__$1);
var G__10149 = null;
var G__10150 = 0;
var G__10151 = 0;
seq__10018_10127 = G__10148;
chunk__10019_10128 = G__10149;
count__10020_10129 = G__10150;
i__10021_10130 = G__10151;
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
lt.plugins.gitlight.status.ui.__BEH__update = (function __BEH__update(obj,status,branch,git_root){var bar_dom = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));lt.plugins.gitlight.status.ui.dom_trunkate.call(null,bar_dom);
lt.util.dom.append.call(null,bar_dom,lt.plugins.gitlight.status.ui.status_ui.call(null,status,branch,git_root));
return lt.plugins.gitlight.status.ui.resize_to_content.call(null,lt.util.dom.parent.call(null,bar_dom),bar_dom);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.ui.__BEH__update,new cljs.core.Keyword(null,"desc","desc",1016984067),"update status view",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"GIT",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731)], null),new cljs.core.Keyword(null,"order","order",1119910592),2,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.status.ui.wrapper.call(null,cljs.core.deref.call(null,this$));
}));
lt.plugins.gitlight.status.ui.status_bar = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620));
lt.plugins.gitlight.status.ui.sb = lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.gitlight.status.ui.status_bar);
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status')) {
goog.provide('lt.plugins.gitlight.status');
goog.require('cljs.core');
goog.require('lt.util.js');
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-status","gitlight-status",4738816205),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Status",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.plugins.gitlight.status.back.git_status.call(null);
return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.gitlight.status.ui.status_bar);
})], null));
lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status = (function __BEH__refresh_ui_on_new_status(obj,data){return lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"git-root","git-root",2199394671).cljs$core$IFn$_invoke$arity$1(data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.shell_git_out,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826));
lt.plugins.gitlight.status.__BEH__auto_refresh_git_status = (function __BEH__auto_refresh_git_status(obj,data){return lt.util.js.wait.call(null,1000,lt.plugins.gitlight.status.back.git_status);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","auto-refresh-git-status","lt.plugins.gitlight.status/auto-refresh-git-status",2840366769),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__auto_refresh_git_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"auto refresh git status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.shell_git_out,new cljs.core.Keyword("lt.plugins.gitlight.status","auto-refresh-git-status","lt.plugins.gitlight.status/auto-refresh-git-status",2840366769));
lt.plugins.gitlight.status.__BEH__debug_new_status = (function __BEH__debug_new_status(obj,data){return console.log("refresh",cljs.core.clj__GT_js.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","debug-new-status","lt.plugins.gitlight.status/debug-new-status",3684259709),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__debug_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"debug status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
}

//# sourceMappingURL=gitlight_compiled.js.map