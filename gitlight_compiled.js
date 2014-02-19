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
lt.plugins.gitlight.status.back.in_sequence_QMARK_ = (function in_sequence_QMARK_(haystack,needle){if((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([needle], true),cljs.core.seq.call(null,haystack)) == null))
{return null;
} else
{return true;
}
});
lt.plugins.gitlight.status.back.keywording_file_status = (function keywording_file_status(status,file){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(file)].join(''),((cljs.core._EQ_.call(null,status,"#"))?"branch-name":((cljs.core._EQ_.call(null,status,"A"))?"new file":((cljs.core._EQ_.call(null,status,"M"))?"modified":((cljs.core._EQ_.call(null,status,"D"))?"deleted":((cljs.core._EQ_.call(null,status,"R"))?"renamed":((cljs.core._EQ_.call(null,status,"C"))?"copied":((cljs.core._EQ_.call(null,status,"?"))?"untracked":((cljs.core._EQ_.call(null,status,"#"))?"branch":((cljs.core._EQ_.call(null,status,"!"))?"ignored":null)))))))))], null);
});
lt.plugins.gitlight.status.back.make_to_commit = (function make_to_commit(data){var filtered = cljs.core.filter.call(null,(function (d){return lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MADRC",cljs.core.first.call(null,d));
}),data);var keyworded = cljs.core.map.call(null,((function (filtered){
return (function (f){return lt.plugins.gitlight.status.back.keywording_file_status.call(null,cljs.core.first.call(null,f),cljs.core.rest.call(null,cljs.core.rest.call(null,f)));
});})(filtered))
,filtered);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to_commit","to_commit",3334658797),keyworded], null);
});
lt.plugins.gitlight.status.back.make_not_staged = (function make_not_staged(data){var filtered = cljs.core.filter.call(null,(function (d){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,d));
}),data);var keyworded = cljs.core.map.call(null,((function (filtered){
return (function (f){return lt.plugins.gitlight.status.back.keywording_file_status.call(null,cljs.core.second.call(null,f),cljs.core.rest.call(null,cljs.core.rest.call(null,f)));
});})(filtered))
,filtered);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not_staged","not_staged",4226785156),keyworded], null);
});
lt.plugins.gitlight.status.back.make_untracked = (function make_untracked(data){var filtered = cljs.core.filter.call(null,(function (d){return cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,d));
}),data);var keyworded = cljs.core.map.call(null,((function (filtered){
return (function (f){return lt.plugins.gitlight.status.back.keywording_file_status.call(null,cljs.core.second.call(null,f),cljs.core.rest.call(null,cljs.core.rest.call(null,f)));
});})(filtered))
,filtered);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untracked","untracked",1658310115),keyworded], null);
});
lt.plugins.gitlight.status.back.make_ignored = (function make_ignored(data){var filtered = cljs.core.filter.call(null,(function (d){return cljs.core._EQ_.call(null,"!",cljs.core.first.call(null,d));
}),data);var keyworded = cljs.core.map.call(null,((function (filtered){
return (function (f){return lt.plugins.gitlight.status.back.keywording_file_status.call(null,cljs.core.second.call(null,f),cljs.core.rest.call(null,cljs.core.rest.call(null,f)));
});})(filtered))
,filtered);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignored","ignored",2766319684),keyworded], null);
});
lt.plugins.gitlight.status.back.make_keyworded = (function make_keyworded(what_keyword,test_function,which_function,dat){var filtered = cljs.core.filter.call(null,test_function,lt.plugins.gitlight.status.back.data);var keyworded = cljs.core.map.call(null,((function (filtered){
return (function (f){return lt.plugins.gitlight.status.back.keywording_file_status.call(null,which_function.call(null,f),cljs.core.rest.call(null,cljs.core.rest.call(null,f)));
});})(filtered))
,filtered);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [what_keyword,keyworded], null);
});
lt.plugins.gitlight.status.back.parse_line = (function parse_line(line){var X = cljs.core.first.call(null,line);var Y = cljs.core.second.call(null,line);var filename = cljs.core.subs.call(null,line,3);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [X,Y,filename], null);
});
lt.plugins.gitlight.status.back.make_status = (function make_status(data){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7466__auto__ = (function iter__8597(s__8598){return (new cljs.core.LazySeq(null,(function (){var s__8598__$1 = s__8598;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8598__$1);if(temp__4092__auto__)
{var s__8598__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8598__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8598__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8600 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8599 = 0;while(true){
if((i__8599 < size__7465__auto__))
{var f = cljs.core._nth.call(null,c__7464__auto__,i__8599);cljs.core.chunk_append.call(null,b__8600,f.call(null,data));
{
var G__8609 = (i__8599 + 1);
i__8599 = G__8609;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8600),iter__8597.call(null,cljs.core.chunk_rest.call(null,s__8598__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8600),null);
}
} else
{var f = cljs.core.first.call(null,s__8598__$2);return cljs.core.cons.call(null,f.call(null,data),iter__8597.call(null,cljs.core.rest.call(null,s__8598__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.status.back.make_to_commit,lt.plugins.gitlight.status.back.make_not_staged,lt.plugins.gitlight.status.back.make_untracked,lt.plugins.gitlight.status.back.make_ignored], null));
})());
});
lt.plugins.gitlight.status.back.keyword_functions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to_commit","to_commit",3334658797),(function (d){return lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MADRC",cljs.core.first.call(null,d));
}),cljs.core.first], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not_staged","not_staged",4226785156),(function (d){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,d));
}),cljs.core.second], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untracked","untracked",1658310115),(function (d){return cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,d));
}),cljs.core.second], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignored","ignored",2766319684),(function (d){return cljs.core._EQ_.call(null,"!",cljs.core.first.call(null,d));
}),cljs.core.second], null)], null);
lt.plugins.gitlight.status.back.make_status = (function make_status(data){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7466__auto__ = (function iter__8605(s__8606){return (new cljs.core.LazySeq(null,(function (){var s__8606__$1 = s__8606;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8606__$1);if(temp__4092__auto__)
{var s__8606__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8606__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8606__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8608 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8607 = 0;while(true){
if((i__8607 < size__7465__auto__))
{var f = cljs.core._nth.call(null,c__7464__auto__,i__8607);cljs.core.chunk_append.call(null,b__8608,f.call(null,data));
{
var G__8610 = (i__8607 + 1);
i__8607 = G__8610;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8608),iter__8605.call(null,cljs.core.chunk_rest.call(null,s__8606__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8608),null);
}
} else
{var f = cljs.core.first.call(null,s__8606__$2);return cljs.core.cons.call(null,f.call(null,data),iter__8605.call(null,cljs.core.rest.call(null,s__8606__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.status.back.make_to_commit,lt.plugins.gitlight.status.back.make_not_staged,lt.plugins.gitlight.status.back.make_untracked,lt.plugins.gitlight.status.back.make_ignored], null));
})());
});
lt.plugins.gitlight.status.back.parse_porcelain = (function parse_porcelain(data){var splitted = clojure.string.split_lines.call(null,data.toString());var parsed = cljs.core.map.call(null,lt.plugins.gitlight.status.back.parse_line,splitted);var branch = cljs.core.first.call(null,parsed);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),[cljs.core.str(cljs.core.rest.call(null,cljs.core.rest.call(null,branch)))].join(''),new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.make_status.call(null,cljs.core.rest.call(null,parsed))], null);
});
lt.plugins.gitlight.status.back.__BEH__shell_git__DOT__out = (function __BEH__shell_git__DOT__out(obj,data){console.log("I'm alive");
cljs.core.print.call(null,lt.plugins.gitlight.status.back.parse_porcelain.call(null,data));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.parse_porcelain.call(null,data));
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
lt.plugins.gitlight.status.ui.group_names = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"not_staged","not_staged",4226785156),"Not staged",new cljs.core.Keyword(null,"to_commit","to_commit",3334658797),"Staged",new cljs.core.Keyword(null,"untracked","untracked",1658310115),"Untracked",new cljs.core.Keyword(null,"ignored","ignored",2766319684),"Ignored"], null);
lt.plugins.gitlight.status.ui.dom_scroll_width = (function dom_scroll_width(n){return n.scrollWidth;
});
lt.plugins.gitlight.status.ui.resize_to_content = (function resize_to_content(parent,child){return lt.plugins.gitlight.status.ui.resize_rightbar.call(null,((lt.util.dom.width.call(null,parent) - lt.util.dom.width.call(null,child)) + lt.plugins.gitlight.status.ui.dom_scroll_width.call(null,child)));
});
lt.plugins.gitlight.status.ui.dom_trunkate = (function dom_trunkate(node){return node.innerHTML = "";
});
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__11293_11382 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11294_11383 = null;var count__11295_11384 = 0;var i__11296_11385 = 0;while(true){
if((i__11296_11385 < count__11295_11384))
{var vec__11297_11386 = cljs.core._nth.call(null,chunk__11294_11383,i__11296_11385);var ev__8112__auto___11387 = cljs.core.nth.call(null,vec__11297_11386,0,null);var func__8113__auto___11388 = cljs.core.nth.call(null,vec__11297_11386,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11387,func__8113__auto___11388);
{
var G__11389 = seq__11293_11382;
var G__11390 = chunk__11294_11383;
var G__11391 = count__11295_11384;
var G__11392 = (i__11296_11385 + 1);
seq__11293_11382 = G__11389;
chunk__11294_11383 = G__11390;
count__11295_11384 = G__11391;
i__11296_11385 = G__11392;
continue;
}
} else
{var temp__4092__auto___11393 = cljs.core.seq.call(null,seq__11293_11382);if(temp__4092__auto___11393)
{var seq__11293_11394__$1 = temp__4092__auto___11393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11293_11394__$1))
{var c__7497__auto___11395 = cljs.core.chunk_first.call(null,seq__11293_11394__$1);{
var G__11396 = cljs.core.chunk_rest.call(null,seq__11293_11394__$1);
var G__11397 = c__7497__auto___11395;
var G__11398 = cljs.core.count.call(null,c__7497__auto___11395);
var G__11399 = 0;
seq__11293_11382 = G__11396;
chunk__11294_11383 = G__11397;
count__11295_11384 = G__11398;
i__11296_11385 = G__11399;
continue;
}
} else
{var vec__11298_11400 = cljs.core.first.call(null,seq__11293_11394__$1);var ev__8112__auto___11401 = cljs.core.nth.call(null,vec__11298_11400,0,null);var func__8113__auto___11402 = cljs.core.nth.call(null,vec__11298_11400,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11401,func__8113__auto___11402);
{
var G__11403 = cljs.core.next.call(null,seq__11293_11394__$1);
var G__11404 = null;
var G__11405 = 0;
var G__11406 = 0;
seq__11293_11382 = G__11403;
chunk__11294_11383 = G__11404;
count__11295_11384 = G__11405;
i__11296_11385 = G__11406;
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
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),n], null));var seq__11305_11407 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Are you sure?",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__11306_11408 = null;var count__11307_11409 = 0;var i__11308_11410 = 0;while(true){
if((i__11308_11410 < count__11307_11409))
{var vec__11309_11411 = cljs.core._nth.call(null,chunk__11306_11408,i__11308_11410);var ev__8112__auto___11412 = cljs.core.nth.call(null,vec__11309_11411,0,null);var func__8113__auto___11413 = cljs.core.nth.call(null,vec__11309_11411,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11412,func__8113__auto___11413);
{
var G__11414 = seq__11305_11407;
var G__11415 = chunk__11306_11408;
var G__11416 = count__11307_11409;
var G__11417 = (i__11308_11410 + 1);
seq__11305_11407 = G__11414;
chunk__11306_11408 = G__11415;
count__11307_11409 = G__11416;
i__11308_11410 = G__11417;
continue;
}
} else
{var temp__4092__auto___11418 = cljs.core.seq.call(null,seq__11305_11407);if(temp__4092__auto___11418)
{var seq__11305_11419__$1 = temp__4092__auto___11418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11305_11419__$1))
{var c__7497__auto___11420 = cljs.core.chunk_first.call(null,seq__11305_11419__$1);{
var G__11421 = cljs.core.chunk_rest.call(null,seq__11305_11419__$1);
var G__11422 = c__7497__auto___11420;
var G__11423 = cljs.core.count.call(null,c__7497__auto___11420);
var G__11424 = 0;
seq__11305_11407 = G__11421;
chunk__11306_11408 = G__11422;
count__11307_11409 = G__11423;
i__11308_11410 = G__11424;
continue;
}
} else
{var vec__11310_11425 = cljs.core.first.call(null,seq__11305_11419__$1);var ev__8112__auto___11426 = cljs.core.nth.call(null,vec__11310_11425,0,null);var func__8113__auto___11427 = cljs.core.nth.call(null,vec__11310_11425,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11426,func__8113__auto___11427);
{
var G__11428 = cljs.core.next.call(null,seq__11305_11419__$1);
var G__11429 = null;
var G__11430 = 0;
var G__11431 = 0;
seq__11305_11407 = G__11428;
chunk__11306_11408 = G__11429;
count__11307_11409 = G__11430;
i__11308_11410 = G__11431;
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
lt.plugins.gitlight.status.ui.file_ops = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"not_staged","not_staged",4226785156),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stage","diff","revert","stash"], null),new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add","ignore","delete"], null),new cljs.core.Keyword(null,"to_commit","to_commit",3334658797),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unstage"], null)], null);
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__11311){var vec__11323 = p__11311;var f = cljs.core.nth.call(null,vec__11323,0,null);var t = cljs.core.nth.call(null,vec__11323,1,null);var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),[cljs.core.str(t),cljs.core.str(":"),cljs.core.str(f)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__11324(s__11325){return (new cljs.core.LazySeq(null,(function (){var s__11325__$1 = s__11325;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11325__$1);if(temp__4092__auto__)
{var s__11325__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11325__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__11325__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__11327 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__11326 = 0;while(true){
if((i__11326 < size__7465__auto__))
{var bt = cljs.core._nth.call(null,c__7464__auto__,i__11326);cljs.core.chunk_append.call(null,b__11327,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__11432 = (i__11326 + 1);
i__11326 = G__11432;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11327),iter__11324.call(null,cljs.core.chunk_rest.call(null,s__11325__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11327),null);
}
} else
{var bt = cljs.core.first.call(null,s__11325__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__11324.call(null,cljs.core.rest.call(null,s__11325__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__11328_11433 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11329_11434 = null;var count__11330_11435 = 0;var i__11331_11436 = 0;while(true){
if((i__11331_11436 < count__11330_11435))
{var vec__11332_11437 = cljs.core._nth.call(null,chunk__11329_11434,i__11331_11436);var ev__8112__auto___11438 = cljs.core.nth.call(null,vec__11332_11437,0,null);var func__8113__auto___11439 = cljs.core.nth.call(null,vec__11332_11437,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11438,func__8113__auto___11439);
{
var G__11440 = seq__11328_11433;
var G__11441 = chunk__11329_11434;
var G__11442 = count__11330_11435;
var G__11443 = (i__11331_11436 + 1);
seq__11328_11433 = G__11440;
chunk__11329_11434 = G__11441;
count__11330_11435 = G__11442;
i__11331_11436 = G__11443;
continue;
}
} else
{var temp__4092__auto___11444 = cljs.core.seq.call(null,seq__11328_11433);if(temp__4092__auto___11444)
{var seq__11328_11445__$1 = temp__4092__auto___11444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11328_11445__$1))
{var c__7497__auto___11446 = cljs.core.chunk_first.call(null,seq__11328_11445__$1);{
var G__11447 = cljs.core.chunk_rest.call(null,seq__11328_11445__$1);
var G__11448 = c__7497__auto___11446;
var G__11449 = cljs.core.count.call(null,c__7497__auto___11446);
var G__11450 = 0;
seq__11328_11433 = G__11447;
chunk__11329_11434 = G__11448;
count__11330_11435 = G__11449;
i__11331_11436 = G__11450;
continue;
}
} else
{var vec__11333_11451 = cljs.core.first.call(null,seq__11328_11445__$1);var ev__8112__auto___11452 = cljs.core.nth.call(null,vec__11333_11451,0,null);var func__8113__auto___11453 = cljs.core.nth.call(null,vec__11333_11451,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11452,func__8113__auto___11453);
{
var G__11454 = cljs.core.next.call(null,seq__11328_11445__$1);
var G__11455 = null;
var G__11456 = 0;
var G__11457 = 0;
seq__11328_11433 = G__11454;
chunk__11329_11434 = G__11455;
count__11330_11435 = G__11456;
i__11331_11436 = G__11457;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("Current branch: ")].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),branch], null)], null),(function (){var iter__7466__auto__ = (function iter__11352(s__11353){return (new cljs.core.LazySeq(null,(function (){var s__11353__$1 = s__11353;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11353__$1);if(temp__4092__auto__)
{var s__11353__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11353__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__11353__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__11355 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__11354 = 0;while(true){
if((i__11354 < size__7465__auto__))
{var t = cljs.core._nth.call(null,c__7464__auto__,i__11354);cljs.core.chunk_append.call(null,b__11355,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null));
{
var G__11458 = (i__11354 + 1);
i__11354 = G__11458;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11355),iter__11352.call(null,cljs.core.chunk_rest.call(null,s__11353__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11355),null);
}
} else
{var t = cljs.core.first.call(null,s__11353__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null),iter__11352.call(null,cljs.core.rest.call(null,s__11353__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","tag"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__11356(s__11357){return (new cljs.core.LazySeq(null,(function (){var s__11357__$1 = s__11357;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11357__$1);if(temp__4092__auto__)
{var s__11357__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11357__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__11357__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__11359 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__11358 = 0;while(true){
if((i__11358 < size__7465__auto__))
{var vec__11362 = cljs.core._nth.call(null,c__7464__auto__,i__11358);var g = cljs.core.nth.call(null,vec__11362,0,null);var fs = cljs.core.nth.call(null,vec__11362,1,null);cljs.core.chunk_append.call(null,b__11359,lt.plugins.gitlight.status.ui.group.call(null,g,fs));
{
var G__11459 = (i__11358 + 1);
i__11358 = G__11459;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11359),iter__11356.call(null,cljs.core.chunk_rest.call(null,s__11357__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11359),null);
}
} else
{var vec__11363 = cljs.core.first.call(null,s__11357__$2);var g = cljs.core.nth.call(null,vec__11363,0,null);var fs = cljs.core.nth.call(null,vec__11363,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.group.call(null,g,fs),iter__11356.call(null,cljs.core.rest.call(null,s__11357__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,this$);
})()], null)], null));var seq__11364_11460 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11365_11461 = null;var count__11366_11462 = 0;var i__11367_11463 = 0;while(true){
if((i__11367_11463 < count__11366_11462))
{var vec__11368_11464 = cljs.core._nth.call(null,chunk__11365_11461,i__11367_11463);var ev__8112__auto___11465 = cljs.core.nth.call(null,vec__11368_11464,0,null);var func__8113__auto___11466 = cljs.core.nth.call(null,vec__11368_11464,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11465,func__8113__auto___11466);
{
var G__11467 = seq__11364_11460;
var G__11468 = chunk__11365_11461;
var G__11469 = count__11366_11462;
var G__11470 = (i__11367_11463 + 1);
seq__11364_11460 = G__11467;
chunk__11365_11461 = G__11468;
count__11366_11462 = G__11469;
i__11367_11463 = G__11470;
continue;
}
} else
{var temp__4092__auto___11471 = cljs.core.seq.call(null,seq__11364_11460);if(temp__4092__auto___11471)
{var seq__11364_11472__$1 = temp__4092__auto___11471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11364_11472__$1))
{var c__7497__auto___11473 = cljs.core.chunk_first.call(null,seq__11364_11472__$1);{
var G__11474 = cljs.core.chunk_rest.call(null,seq__11364_11472__$1);
var G__11475 = c__7497__auto___11473;
var G__11476 = cljs.core.count.call(null,c__7497__auto___11473);
var G__11477 = 0;
seq__11364_11460 = G__11474;
chunk__11365_11461 = G__11475;
count__11366_11462 = G__11476;
i__11367_11463 = G__11477;
continue;
}
} else
{var vec__11369_11478 = cljs.core.first.call(null,seq__11364_11472__$1);var ev__8112__auto___11479 = cljs.core.nth.call(null,vec__11369_11478,0,null);var func__8113__auto___11480 = cljs.core.nth.call(null,vec__11369_11478,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11479,func__8113__auto___11480);
{
var G__11481 = cljs.core.next.call(null,seq__11364_11472__$1);
var G__11482 = null;
var G__11483 = 0;
var G__11484 = 0;
seq__11364_11460 = G__11481;
chunk__11365_11461 = G__11482;
count__11366_11462 = G__11483;
i__11367_11463 = G__11484;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__11376_11485 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11377_11486 = null;var count__11378_11487 = 0;var i__11379_11488 = 0;while(true){
if((i__11379_11488 < count__11378_11487))
{var vec__11380_11489 = cljs.core._nth.call(null,chunk__11377_11486,i__11379_11488);var ev__8112__auto___11490 = cljs.core.nth.call(null,vec__11380_11489,0,null);var func__8113__auto___11491 = cljs.core.nth.call(null,vec__11380_11489,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11490,func__8113__auto___11491);
{
var G__11492 = seq__11376_11485;
var G__11493 = chunk__11377_11486;
var G__11494 = count__11378_11487;
var G__11495 = (i__11379_11488 + 1);
seq__11376_11485 = G__11492;
chunk__11377_11486 = G__11493;
count__11378_11487 = G__11494;
i__11379_11488 = G__11495;
continue;
}
} else
{var temp__4092__auto___11496 = cljs.core.seq.call(null,seq__11376_11485);if(temp__4092__auto___11496)
{var seq__11376_11497__$1 = temp__4092__auto___11496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11376_11497__$1))
{var c__7497__auto___11498 = cljs.core.chunk_first.call(null,seq__11376_11497__$1);{
var G__11499 = cljs.core.chunk_rest.call(null,seq__11376_11497__$1);
var G__11500 = c__7497__auto___11498;
var G__11501 = cljs.core.count.call(null,c__7497__auto___11498);
var G__11502 = 0;
seq__11376_11485 = G__11499;
chunk__11377_11486 = G__11500;
count__11378_11487 = G__11501;
i__11379_11488 = G__11502;
continue;
}
} else
{var vec__11381_11503 = cljs.core.first.call(null,seq__11376_11497__$1);var ev__8112__auto___11504 = cljs.core.nth.call(null,vec__11381_11503,0,null);var func__8113__auto___11505 = cljs.core.nth.call(null,vec__11381_11503,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11504,func__8113__auto___11505);
{
var G__11506 = cljs.core.next.call(null,seq__11376_11497__$1);
var G__11507 = null;
var G__11508 = 0;
var G__11509 = 0;
seq__11376_11485 = G__11506;
chunk__11377_11486 = G__11507;
count__11378_11487 = G__11508;
i__11379_11488 = G__11509;
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
lt.plugins.gitlight.status.ui.__BEH__update = (function __BEH__update(obj,status,branch){var bar_dom = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));lt.plugins.gitlight.status.ui.dom_trunkate.call(null,bar_dom);
lt.util.dom.append.call(null,bar_dom,lt.plugins.gitlight.status.ui.status_ui.call(null,status,branch));
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
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.objs.command');
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-status","gitlight-status",4738816205),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Status",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){console.log(Math.random());
lt.plugins.gitlight.status.back.git_status.call(null);
lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.gitlight.status.ui.status_bar);
return console.log("que");
})], null));
lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status = (function __BEH__refresh_ui_on_new_status(obj,data){console.log("refresh",cljs.core.clj__GT_js.call(null,data));
return lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216).cljs$core$IFn$_invoke$arity$1(data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.shell_git_out,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826));
}

//# sourceMappingURL=gitlight_compiled.js.map