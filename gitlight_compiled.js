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
lt.plugins.gitlight.status.back.keywording_file_status = (function keywording_file_status(status,file){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(file)].join(''),((cljs.core._EQ_.call(null,status,"#"))?new cljs.core.Keyword(null,"branch-name","branch-name",4270694216):((cljs.core._EQ_.call(null,status,"A"))?new cljs.core.Keyword(null,"newfile","newfile",2859647630):((cljs.core._EQ_.call(null,status,"M"))?new cljs.core.Keyword(null,"modified","modified",4693358139):((cljs.core._EQ_.call(null,status,"D"))?new cljs.core.Keyword(null,"deleted","deleted",2564367243):((cljs.core._EQ_.call(null,status,"R"))?new cljs.core.Keyword(null,"renamed","renamed",2106238040):((cljs.core._EQ_.call(null,status,"C"))?new cljs.core.Keyword(null,"copied","copied",3954141750):((cljs.core._EQ_.call(null,status,"?"))?new cljs.core.Keyword(null,"untracked","untracked",1658310115):((cljs.core._EQ_.call(null,status,"#"))?new cljs.core.Keyword(null,"branch","branch",3927841044):((cljs.core._EQ_.call(null,status,"!"))?new cljs.core.Keyword(null,"ignored","ignored",2766319684):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.Keyword(null,"unknown","unknown",729063356):null))))))))))], null);
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
lt.plugins.gitlight.status.back.__BEH__shell_git__DOT__out = (function __BEH__shell_git__DOT__out(obj,data){cljs.core.println.call(null,lt.plugins.gitlight.status.back.parse_porcelain.call(null,data));
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
lt.plugins.gitlight.status.ui.group_names = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),"Not staged",new cljs.core.Keyword(null,"staged","staged",4416376984),"Staged",new cljs.core.Keyword(null,"untracked","untracked",1658310115),"Untracked",new cljs.core.Keyword(null,"ignored","ignored",2766319684),"Ignored"], null);
lt.plugins.gitlight.status.ui.dom_scroll_width = (function dom_scroll_width(n){return n.scrollWidth;
});
lt.plugins.gitlight.status.ui.resize_to_content = (function resize_to_content(parent,child){return lt.plugins.gitlight.status.ui.resize_rightbar.call(null,((lt.util.dom.width.call(null,parent) - lt.util.dom.width.call(null,child)) + lt.plugins.gitlight.status.ui.dom_scroll_width.call(null,child)));
});
lt.plugins.gitlight.status.ui.dom_trunkate = (function dom_trunkate(node){return node.innerHTML = "";
});
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__12399_12488 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12400_12489 = null;var count__12401_12490 = 0;var i__12402_12491 = 0;while(true){
if((i__12402_12491 < count__12401_12490))
{var vec__12403_12492 = cljs.core._nth.call(null,chunk__12400_12489,i__12402_12491);var ev__8112__auto___12493 = cljs.core.nth.call(null,vec__12403_12492,0,null);var func__8113__auto___12494 = cljs.core.nth.call(null,vec__12403_12492,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___12493,func__8113__auto___12494);
{
var G__12495 = seq__12399_12488;
var G__12496 = chunk__12400_12489;
var G__12497 = count__12401_12490;
var G__12498 = (i__12402_12491 + 1);
seq__12399_12488 = G__12495;
chunk__12400_12489 = G__12496;
count__12401_12490 = G__12497;
i__12402_12491 = G__12498;
continue;
}
} else
{var temp__4092__auto___12499 = cljs.core.seq.call(null,seq__12399_12488);if(temp__4092__auto___12499)
{var seq__12399_12500__$1 = temp__4092__auto___12499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12399_12500__$1))
{var c__7497__auto___12501 = cljs.core.chunk_first.call(null,seq__12399_12500__$1);{
var G__12502 = cljs.core.chunk_rest.call(null,seq__12399_12500__$1);
var G__12503 = c__7497__auto___12501;
var G__12504 = cljs.core.count.call(null,c__7497__auto___12501);
var G__12505 = 0;
seq__12399_12488 = G__12502;
chunk__12400_12489 = G__12503;
count__12401_12490 = G__12504;
i__12402_12491 = G__12505;
continue;
}
} else
{var vec__12404_12506 = cljs.core.first.call(null,seq__12399_12500__$1);var ev__8112__auto___12507 = cljs.core.nth.call(null,vec__12404_12506,0,null);var func__8113__auto___12508 = cljs.core.nth.call(null,vec__12404_12506,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___12507,func__8113__auto___12508);
{
var G__12509 = cljs.core.next.call(null,seq__12399_12500__$1);
var G__12510 = null;
var G__12511 = 0;
var G__12512 = 0;
seq__12399_12488 = G__12509;
chunk__12400_12489 = G__12510;
count__12401_12490 = G__12511;
i__12402_12491 = G__12512;
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
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),n], null));var seq__12411_12513 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__12412_12514 = null;var count__12413_12515 = 0;var i__12414_12516 = 0;while(true){
if((i__12414_12516 < count__12413_12515))
{var vec__12415_12517 = cljs.core._nth.call(null,chunk__12412_12514,i__12414_12516);var ev__8112__auto___12518 = cljs.core.nth.call(null,vec__12415_12517,0,null);var func__8113__auto___12519 = cljs.core.nth.call(null,vec__12415_12517,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___12518,func__8113__auto___12519);
{
var G__12520 = seq__12411_12513;
var G__12521 = chunk__12412_12514;
var G__12522 = count__12413_12515;
var G__12523 = (i__12414_12516 + 1);
seq__12411_12513 = G__12520;
chunk__12412_12514 = G__12521;
count__12413_12515 = G__12522;
i__12414_12516 = G__12523;
continue;
}
} else
{var temp__4092__auto___12524 = cljs.core.seq.call(null,seq__12411_12513);if(temp__4092__auto___12524)
{var seq__12411_12525__$1 = temp__4092__auto___12524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12411_12525__$1))
{var c__7497__auto___12526 = cljs.core.chunk_first.call(null,seq__12411_12525__$1);{
var G__12527 = cljs.core.chunk_rest.call(null,seq__12411_12525__$1);
var G__12528 = c__7497__auto___12526;
var G__12529 = cljs.core.count.call(null,c__7497__auto___12526);
var G__12530 = 0;
seq__12411_12513 = G__12527;
chunk__12412_12514 = G__12528;
count__12413_12515 = G__12529;
i__12414_12516 = G__12530;
continue;
}
} else
{var vec__12416_12531 = cljs.core.first.call(null,seq__12411_12525__$1);var ev__8112__auto___12532 = cljs.core.nth.call(null,vec__12416_12531,0,null);var func__8113__auto___12533 = cljs.core.nth.call(null,vec__12416_12531,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___12532,func__8113__auto___12533);
{
var G__12534 = cljs.core.next.call(null,seq__12411_12525__$1);
var G__12535 = null;
var G__12536 = 0;
var G__12537 = 0;
seq__12411_12513 = G__12534;
chunk__12412_12514 = G__12535;
count__12413_12515 = G__12536;
i__12414_12516 = G__12537;
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__12417){var vec__12429 = p__12417;var f = cljs.core.nth.call(null,vec__12429,0,null);var t = cljs.core.nth.call(null,vec__12429,1,null);var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str(cljs.core.first.call(null,cljs.core.name.call(null,t)).toUpperCase()),cljs.core.str(" "),cljs.core.str(f)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__12430(s__12431){return (new cljs.core.LazySeq(null,(function (){var s__12431__$1 = s__12431;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12431__$1);if(temp__4092__auto__)
{var s__12431__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12431__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__12431__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__12433 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__12432 = 0;while(true){
if((i__12432 < size__7465__auto__))
{var bt = cljs.core._nth.call(null,c__7464__auto__,i__12432);cljs.core.chunk_append.call(null,b__12433,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__12538 = (i__12432 + 1);
i__12432 = G__12538;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12433),iter__12430.call(null,cljs.core.chunk_rest.call(null,s__12431__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12433),null);
}
} else
{var bt = cljs.core.first.call(null,s__12431__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__12430.call(null,cljs.core.rest.call(null,s__12431__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__12434_12539 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12435_12540 = null;var count__12436_12541 = 0;var i__12437_12542 = 0;while(true){
if((i__12437_12542 < count__12436_12541))
{var vec__12438_12543 = cljs.core._nth.call(null,chunk__12435_12540,i__12437_12542);var ev__8112__auto___12544 = cljs.core.nth.call(null,vec__12438_12543,0,null);var func__8113__auto___12545 = cljs.core.nth.call(null,vec__12438_12543,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___12544,func__8113__auto___12545);
{
var G__12546 = seq__12434_12539;
var G__12547 = chunk__12435_12540;
var G__12548 = count__12436_12541;
var G__12549 = (i__12437_12542 + 1);
seq__12434_12539 = G__12546;
chunk__12435_12540 = G__12547;
count__12436_12541 = G__12548;
i__12437_12542 = G__12549;
continue;
}
} else
{var temp__4092__auto___12550 = cljs.core.seq.call(null,seq__12434_12539);if(temp__4092__auto___12550)
{var seq__12434_12551__$1 = temp__4092__auto___12550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12434_12551__$1))
{var c__7497__auto___12552 = cljs.core.chunk_first.call(null,seq__12434_12551__$1);{
var G__12553 = cljs.core.chunk_rest.call(null,seq__12434_12551__$1);
var G__12554 = c__7497__auto___12552;
var G__12555 = cljs.core.count.call(null,c__7497__auto___12552);
var G__12556 = 0;
seq__12434_12539 = G__12553;
chunk__12435_12540 = G__12554;
count__12436_12541 = G__12555;
i__12437_12542 = G__12556;
continue;
}
} else
{var vec__12439_12557 = cljs.core.first.call(null,seq__12434_12551__$1);var ev__8112__auto___12558 = cljs.core.nth.call(null,vec__12439_12557,0,null);var func__8113__auto___12559 = cljs.core.nth.call(null,vec__12439_12557,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___12558,func__8113__auto___12559);
{
var G__12560 = cljs.core.next.call(null,seq__12434_12551__$1);
var G__12561 = null;
var G__12562 = 0;
var G__12563 = 0;
seq__12434_12539 = G__12560;
chunk__12435_12540 = G__12561;
count__12436_12541 = G__12562;
i__12437_12542 = G__12563;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.button.call(null,branch,[cljs.core.str("Branch menu")].join(''))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Root: ",lt.plugins.gitlight.status.ui.button.call(null,git_root,"Change repo")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__12458(s__12459){return (new cljs.core.LazySeq(null,(function (){var s__12459__$1 = s__12459;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12459__$1);if(temp__4092__auto__)
{var s__12459__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12459__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__12459__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__12461 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__12460 = 0;while(true){
if((i__12460 < size__7465__auto__))
{var t = cljs.core._nth.call(null,c__7464__auto__,i__12460);cljs.core.chunk_append.call(null,b__12461,lt.plugins.gitlight.status.ui.button.call(null,t,git_root));
{
var G__12564 = (i__12460 + 1);
i__12460 = G__12564;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12461),iter__12458.call(null,cljs.core.chunk_rest.call(null,s__12459__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12461),null);
}
} else
{var t = cljs.core.first.call(null,s__12459__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,t,git_root),iter__12458.call(null,cljs.core.rest.call(null,s__12459__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","tag"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__12462(s__12463){return (new cljs.core.LazySeq(null,(function (){var s__12463__$1 = s__12463;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12463__$1);if(temp__4092__auto__)
{var s__12463__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12463__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__12463__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__12465 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__12464 = 0;while(true){
if((i__12464 < size__7465__auto__))
{var vec__12468 = cljs.core._nth.call(null,c__7464__auto__,i__12464);var g = cljs.core.nth.call(null,vec__12468,0,null);var fs = cljs.core.nth.call(null,vec__12468,1,null);cljs.core.chunk_append.call(null,b__12465,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__12565 = (i__12464 + 1);
i__12464 = G__12565;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12465),iter__12462.call(null,cljs.core.chunk_rest.call(null,s__12463__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12465),null);
}
} else
{var vec__12469 = cljs.core.first.call(null,s__12463__$2);var g = cljs.core.nth.call(null,vec__12469,0,null);var fs = cljs.core.nth.call(null,vec__12469,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__12462.call(null,cljs.core.rest.call(null,s__12463__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,this$);
})()], null)], null));var seq__12470_12566 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12471_12567 = null;var count__12472_12568 = 0;var i__12473_12569 = 0;while(true){
if((i__12473_12569 < count__12472_12568))
{var vec__12474_12570 = cljs.core._nth.call(null,chunk__12471_12567,i__12473_12569);var ev__8112__auto___12571 = cljs.core.nth.call(null,vec__12474_12570,0,null);var func__8113__auto___12572 = cljs.core.nth.call(null,vec__12474_12570,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___12571,func__8113__auto___12572);
{
var G__12573 = seq__12470_12566;
var G__12574 = chunk__12471_12567;
var G__12575 = count__12472_12568;
var G__12576 = (i__12473_12569 + 1);
seq__12470_12566 = G__12573;
chunk__12471_12567 = G__12574;
count__12472_12568 = G__12575;
i__12473_12569 = G__12576;
continue;
}
} else
{var temp__4092__auto___12577 = cljs.core.seq.call(null,seq__12470_12566);if(temp__4092__auto___12577)
{var seq__12470_12578__$1 = temp__4092__auto___12577;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12470_12578__$1))
{var c__7497__auto___12579 = cljs.core.chunk_first.call(null,seq__12470_12578__$1);{
var G__12580 = cljs.core.chunk_rest.call(null,seq__12470_12578__$1);
var G__12581 = c__7497__auto___12579;
var G__12582 = cljs.core.count.call(null,c__7497__auto___12579);
var G__12583 = 0;
seq__12470_12566 = G__12580;
chunk__12471_12567 = G__12581;
count__12472_12568 = G__12582;
i__12473_12569 = G__12583;
continue;
}
} else
{var vec__12475_12584 = cljs.core.first.call(null,seq__12470_12578__$1);var ev__8112__auto___12585 = cljs.core.nth.call(null,vec__12475_12584,0,null);var func__8113__auto___12586 = cljs.core.nth.call(null,vec__12475_12584,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___12585,func__8113__auto___12586);
{
var G__12587 = cljs.core.next.call(null,seq__12470_12578__$1);
var G__12588 = null;
var G__12589 = 0;
var G__12590 = 0;
seq__12470_12566 = G__12587;
chunk__12471_12567 = G__12588;
count__12472_12568 = G__12589;
i__12473_12569 = G__12590;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__12482_12591 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12483_12592 = null;var count__12484_12593 = 0;var i__12485_12594 = 0;while(true){
if((i__12485_12594 < count__12484_12593))
{var vec__12486_12595 = cljs.core._nth.call(null,chunk__12483_12592,i__12485_12594);var ev__8112__auto___12596 = cljs.core.nth.call(null,vec__12486_12595,0,null);var func__8113__auto___12597 = cljs.core.nth.call(null,vec__12486_12595,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___12596,func__8113__auto___12597);
{
var G__12598 = seq__12482_12591;
var G__12599 = chunk__12483_12592;
var G__12600 = count__12484_12593;
var G__12601 = (i__12485_12594 + 1);
seq__12482_12591 = G__12598;
chunk__12483_12592 = G__12599;
count__12484_12593 = G__12600;
i__12485_12594 = G__12601;
continue;
}
} else
{var temp__4092__auto___12602 = cljs.core.seq.call(null,seq__12482_12591);if(temp__4092__auto___12602)
{var seq__12482_12603__$1 = temp__4092__auto___12602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12482_12603__$1))
{var c__7497__auto___12604 = cljs.core.chunk_first.call(null,seq__12482_12603__$1);{
var G__12605 = cljs.core.chunk_rest.call(null,seq__12482_12603__$1);
var G__12606 = c__7497__auto___12604;
var G__12607 = cljs.core.count.call(null,c__7497__auto___12604);
var G__12608 = 0;
seq__12482_12591 = G__12605;
chunk__12483_12592 = G__12606;
count__12484_12593 = G__12607;
i__12485_12594 = G__12608;
continue;
}
} else
{var vec__12487_12609 = cljs.core.first.call(null,seq__12482_12603__$1);var ev__8112__auto___12610 = cljs.core.nth.call(null,vec__12487_12609,0,null);var func__8113__auto___12611 = cljs.core.nth.call(null,vec__12487_12609,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___12610,func__8113__auto___12611);
{
var G__12612 = cljs.core.next.call(null,seq__12482_12603__$1);
var G__12613 = null;
var G__12614 = 0;
var G__12615 = 0;
seq__12482_12591 = G__12612;
chunk__12483_12592 = G__12613;
count__12484_12593 = G__12614;
i__12485_12594 = G__12615;
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
return lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"git-root","git-root",2199394671).cljs$core$IFn$_invoke$arity$1(data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.shell_git_out,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826));
}

//# sourceMappingURL=gitlight_compiled.js.map