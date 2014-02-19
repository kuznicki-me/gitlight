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
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.back')) {
goog.provide('lt.plugins.gitlight.status.back');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
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
goog.require('lt.plugins.gitlight');
lt.plugins.gitlight.status.back.get_git_root = (function get_git_root(path){return lt.objs.files.parent.call(null,lt.objs.files.walk_up_find.call(null,path,".git"));
});
lt.plugins.gitlight.status.back.on_cwd_QMARK_ = (function on_cwd_QMARK_(){return !((lt.objs.editor.pool.last_active.call(null) == null));
});
lt.plugins.gitlight.status.back.get_cwd = (function get_cwd(){return lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
});
lt.plugins.gitlight.status.back.git_status = (function git_status(){if(lt.plugins.gitlight.status.back.on_cwd_QMARK_.call(null))
{return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"git-binary","git-binary",1640221134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config)),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["status","--porcelain","--branch"], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.gitlight.status.back.get_cwd.call(null),new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.status.back.shell_git_out], null));
} else
{return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't guess git root",new cljs.core.Keyword(null,"body","body",1016933652),"Please run `git: status' again with file under git repo in editor tab",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
}
});
lt.plugins.gitlight.status.back.in_sequence_QMARK_ = (function in_sequence_QMARK_(haystack,needle){return !((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([needle], true),cljs.core.seq.call(null,haystack)) == null));
});
lt.plugins.gitlight.status.back.parse_porcelain = (function parse_porcelain(data){var splitted = clojure.string.split_lines.call(null,data.toString());var parsed = cljs.core.map.call(null,lt.plugins.gitlight.status.back.parse_line,splitted);var branch = cljs.core.first.call(null,parsed);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"git-root","git-root",2199394671),lt.plugins.gitlight.status.back.get_git_root.call(null,lt.plugins.gitlight.status.back.get_cwd.call(null)),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),[cljs.core.str(cljs.core.last.call(null,branch))].join(''),new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.make_status.call(null,cljs.core.rest.call(null,parsed))], null);
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
lt.plugins.gitlight.status.back.parse_and_keyword_line = (function parse_and_keyword_line(line){var X = cljs.core.first.call(null,line);var Y = cljs.core.second.call(null,line);var filename = [cljs.core.str(cljs.core.subs.call(null,line,3))].join('');if((cljs.core._EQ_.call(null," ",X)) && (lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MD",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,lt.plugins.gitlight.status.back.keywording.call(null,Y),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066)], null)], null);
} else
{if((lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MARC",X)) && (cljs.core._EQ_.call(null," ",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,lt.plugins.gitlight.status.back.keywording.call(null,X),new cljs.core.Keyword(null,"staged","staged",4416376984)], null)], null);
} else
{if((lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MARC",X)) && (lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MD",Y)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,lt.plugins.gitlight.status.back.keywording.call(null,X),new cljs.core.Keyword(null,"staged","staged",4416376984)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,lt.plugins.gitlight.status.back.keywording.call(null,Y),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066)], null)], null);
} else
{if((cljs.core._EQ_.call(null,"D",X)) && (cljs.core._EQ_.call(null," ",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"staged","staged",4416376984)], null)], null);
} else
{if((cljs.core._EQ_.call(null,"D",X)) && (cljs.core._EQ_.call(null,"M",Y)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"staged","staged",4416376984)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066)], null)], null);
} else
{if((cljs.core._EQ_.call(null,"D",X)) && (cljs.core._EQ_.call(null,"D",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"unmerged-both-deleted","unmerged-both-deleted",4207561479),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209)], null)], null);
} else
{if((cljs.core._EQ_.call(null,"A",X)) && (cljs.core._EQ_.call(null,"U",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"unmerged-added-by-us","unmerged-added-by-us",4095962481),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209)], null)], null);
} else
{if((cljs.core._EQ_.call(null,"U",X)) && (cljs.core._EQ_.call(null,"D",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"unmerged-deleted-by-them","unmerged-deleted-by-them",4759851208),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209)], null)], null);
} else
{if((cljs.core._EQ_.call(null,"U",X)) && (cljs.core._EQ_.call(null,"A",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"unmerged-added-by-them","unmerged-added-by-them",3639367855),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209)], null)], null);
} else
{if((cljs.core._EQ_.call(null,"D",X)) && (cljs.core._EQ_.call(null,"U",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"unmerged-deleted-by-us","unmerged-deleted-by-us",1004394442),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209)], null)], null);
} else
{if((cljs.core._EQ_.call(null,"A",X)) && (cljs.core._EQ_.call(null,"A",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"unmerged-both-added","unmerged-both-added",3821120238),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209)], null)], null);
} else
{if((cljs.core._EQ_.call(null,"U",X)) && (cljs.core._EQ_.call(null,"U",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"unmerged-both-modified","unmerged-both-modified",4092771903),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209)], null)], null);
} else
{if((cljs.core._EQ_.call(null,"?",X)) && (cljs.core._EQ_.call(null,"?",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.Keyword(null,"untracked","untracked",1658310115)], null)], null);
} else
{if((cljs.core._EQ_.call(null,"!",X)) && (cljs.core._EQ_.call(null,"!",Y)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"ignored","ignored",2766319684),new cljs.core.Keyword(null,"ignored","ignored",2766319684)], null)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"unknown","unknown",729063356),new cljs.core.Keyword(null,"unknown","unknown",729063356)], null)], null);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
lt.plugins.gitlight.status.back.parse_porcelain = (function parse_porcelain(data){var splitted = clojure.string.split_lines.call(null,data.toString());var branch = cljs.core.subs.call(null,cljs.core.first.call(null,splitted),3);var parsed = cljs.core.map.call(null,lt.plugins.gitlight.status.back.parse_and_keyword_line,cljs.core.rest.call(null,splitted));cljs.core.print.call(null,parsed);
cljs.core.print.call(null,cljs.core.group_by.call(null,(function (a){return cljs.core.nth.call(null,a,2);
}),cljs.core.apply.call(null,cljs.core.concat,parsed)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"git-root","git-root",2199394671),lt.plugins.gitlight.status.back.get_git_root.call(null,lt.plugins.gitlight.status.back.get_cwd.call(null)),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),[cljs.core.str(branch)].join(''),new cljs.core.Keyword(null,"status","status",4416389988),cljs.core.group_by.call(null,(function (a){return cljs.core.nth.call(null,a,2);
}),cljs.core.apply.call(null,cljs.core.concat,parsed))], null);
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
lt.plugins.gitlight.status.ui.is_open_QMARK_ = (function is_open_QMARK_(){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),lt.plugins.gitlight.status.ui.status_bar);
});
lt.plugins.gitlight.status.ui.dom_truncate = (function dom_truncate(node){return node.innerHTML = "";
});
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__9357_9446 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9358_9447 = null;var count__9359_9448 = 0;var i__9360_9449 = 0;while(true){
if((i__9360_9449 < count__9359_9448))
{var vec__9361_9450 = cljs.core._nth.call(null,chunk__9358_9447,i__9360_9449);var ev__8121__auto___9451 = cljs.core.nth.call(null,vec__9361_9450,0,null);var func__8122__auto___9452 = cljs.core.nth.call(null,vec__9361_9450,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___9451,func__8122__auto___9452);
{
var G__9453 = seq__9357_9446;
var G__9454 = chunk__9358_9447;
var G__9455 = count__9359_9448;
var G__9456 = (i__9360_9449 + 1);
seq__9357_9446 = G__9453;
chunk__9358_9447 = G__9454;
count__9359_9448 = G__9455;
i__9360_9449 = G__9456;
continue;
}
} else
{var temp__4092__auto___9457 = cljs.core.seq.call(null,seq__9357_9446);if(temp__4092__auto___9457)
{var seq__9357_9458__$1 = temp__4092__auto___9457;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9357_9458__$1))
{var c__7500__auto___9459 = cljs.core.chunk_first.call(null,seq__9357_9458__$1);{
var G__9460 = cljs.core.chunk_rest.call(null,seq__9357_9458__$1);
var G__9461 = c__7500__auto___9459;
var G__9462 = cljs.core.count.call(null,c__7500__auto___9459);
var G__9463 = 0;
seq__9357_9446 = G__9460;
chunk__9358_9447 = G__9461;
count__9359_9448 = G__9462;
i__9360_9449 = G__9463;
continue;
}
} else
{var vec__9362_9464 = cljs.core.first.call(null,seq__9357_9458__$1);var ev__8121__auto___9465 = cljs.core.nth.call(null,vec__9362_9464,0,null);var func__8122__auto___9466 = cljs.core.nth.call(null,vec__9362_9464,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___9465,func__8122__auto___9466);
{
var G__9467 = cljs.core.next.call(null,seq__9357_9458__$1);
var G__9468 = null;
var G__9469 = 0;
var G__9470 = 0;
seq__9357_9446 = G__9467;
chunk__9358_9447 = G__9468;
count__9359_9448 = G__9469;
i__9360_9449 = G__9470;
continue;
}
}
} else
{}
}
break;
}
return e__8120__auto__;
});
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__9369_9471 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__9370_9472 = null;var count__9371_9473 = 0;var i__9372_9474 = 0;while(true){
if((i__9372_9474 < count__9371_9473))
{var vec__9373_9475 = cljs.core._nth.call(null,chunk__9370_9472,i__9372_9474);var ev__8121__auto___9476 = cljs.core.nth.call(null,vec__9373_9475,0,null);var func__8122__auto___9477 = cljs.core.nth.call(null,vec__9373_9475,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___9476,func__8122__auto___9477);
{
var G__9478 = seq__9369_9471;
var G__9479 = chunk__9370_9472;
var G__9480 = count__9371_9473;
var G__9481 = (i__9372_9474 + 1);
seq__9369_9471 = G__9478;
chunk__9370_9472 = G__9479;
count__9371_9473 = G__9480;
i__9372_9474 = G__9481;
continue;
}
} else
{var temp__4092__auto___9482 = cljs.core.seq.call(null,seq__9369_9471);if(temp__4092__auto___9482)
{var seq__9369_9483__$1 = temp__4092__auto___9482;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9369_9483__$1))
{var c__7500__auto___9484 = cljs.core.chunk_first.call(null,seq__9369_9483__$1);{
var G__9485 = cljs.core.chunk_rest.call(null,seq__9369_9483__$1);
var G__9486 = c__7500__auto___9484;
var G__9487 = cljs.core.count.call(null,c__7500__auto___9484);
var G__9488 = 0;
seq__9369_9471 = G__9485;
chunk__9370_9472 = G__9486;
count__9371_9473 = G__9487;
i__9372_9474 = G__9488;
continue;
}
} else
{var vec__9374_9489 = cljs.core.first.call(null,seq__9369_9483__$1);var ev__8121__auto___9490 = cljs.core.nth.call(null,vec__9374_9489,0,null);var func__8122__auto___9491 = cljs.core.nth.call(null,vec__9374_9489,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___9490,func__8122__auto___9491);
{
var G__9492 = cljs.core.next.call(null,seq__9369_9483__$1);
var G__9493 = null;
var G__9494 = 0;
var G__9495 = 0;
seq__9369_9471 = G__9492;
chunk__9370_9472 = G__9493;
count__9371_9473 = G__9494;
i__9372_9474 = G__9495;
continue;
}
}
} else
{}
}
break;
}
return e__8120__auto__;
});
lt.plugins.gitlight.status.ui.file_ops = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stage","diff","revert","stash"], null),new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add","ignore","delete"], null),new cljs.core.Keyword(null,"staged","staged",4416376984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unstage"], null)], null);
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__9375){var vec__9387 = p__9375;var f = cljs.core.nth.call(null,vec__9387,0,null);var t = cljs.core.nth.call(null,vec__9387,1,null);var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str(cljs.core.first.call(null,cljs.core.name.call(null,t)).toUpperCase()),cljs.core.str(" "),cljs.core.str(f)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7469__auto__ = (function iter__9388(s__9389){return (new cljs.core.LazySeq(null,(function (){var s__9389__$1 = s__9389;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9389__$1);if(temp__4092__auto__)
{var s__9389__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9389__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__9389__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__9391 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__9390 = 0;while(true){
if((i__9390 < size__7468__auto__))
{var bt = cljs.core._nth.call(null,c__7467__auto__,i__9390);cljs.core.chunk_append.call(null,b__9391,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__9496 = (i__9390 + 1);
i__9390 = G__9496;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9391),iter__9388.call(null,cljs.core.chunk_rest.call(null,s__9389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9391),null);
}
} else
{var bt = cljs.core.first.call(null,s__9389__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__9388.call(null,cljs.core.rest.call(null,s__9389__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__9392_9497 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9393_9498 = null;var count__9394_9499 = 0;var i__9395_9500 = 0;while(true){
if((i__9395_9500 < count__9394_9499))
{var vec__9396_9501 = cljs.core._nth.call(null,chunk__9393_9498,i__9395_9500);var ev__8121__auto___9502 = cljs.core.nth.call(null,vec__9396_9501,0,null);var func__8122__auto___9503 = cljs.core.nth.call(null,vec__9396_9501,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___9502,func__8122__auto___9503);
{
var G__9504 = seq__9392_9497;
var G__9505 = chunk__9393_9498;
var G__9506 = count__9394_9499;
var G__9507 = (i__9395_9500 + 1);
seq__9392_9497 = G__9504;
chunk__9393_9498 = G__9505;
count__9394_9499 = G__9506;
i__9395_9500 = G__9507;
continue;
}
} else
{var temp__4092__auto___9508 = cljs.core.seq.call(null,seq__9392_9497);if(temp__4092__auto___9508)
{var seq__9392_9509__$1 = temp__4092__auto___9508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9392_9509__$1))
{var c__7500__auto___9510 = cljs.core.chunk_first.call(null,seq__9392_9509__$1);{
var G__9511 = cljs.core.chunk_rest.call(null,seq__9392_9509__$1);
var G__9512 = c__7500__auto___9510;
var G__9513 = cljs.core.count.call(null,c__7500__auto___9510);
var G__9514 = 0;
seq__9392_9497 = G__9511;
chunk__9393_9498 = G__9512;
count__9394_9499 = G__9513;
i__9395_9500 = G__9514;
continue;
}
} else
{var vec__9397_9515 = cljs.core.first.call(null,seq__9392_9509__$1);var ev__8121__auto___9516 = cljs.core.nth.call(null,vec__9397_9515,0,null);var func__8122__auto___9517 = cljs.core.nth.call(null,vec__9397_9515,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___9516,func__8122__auto___9517);
{
var G__9518 = cljs.core.next.call(null,seq__9392_9509__$1);
var G__9519 = null;
var G__9520 = 0;
var G__9521 = 0;
seq__9392_9497 = G__9518;
chunk__9393_9498 = G__9519;
count__9394_9499 = G__9520;
i__9395_9500 = G__9521;
continue;
}
}
} else
{}
}
break;
}
return e__8120__auto__;
});
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.button.call(null,branch,[cljs.core.str("Branch menu")].join(''))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Root: ",lt.plugins.gitlight.status.ui.button.call(null,git_root,"Change repo")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7469__auto__ = (function iter__9416(s__9417){return (new cljs.core.LazySeq(null,(function (){var s__9417__$1 = s__9417;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9417__$1);if(temp__4092__auto__)
{var s__9417__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9417__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__9417__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__9419 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__9418 = 0;while(true){
if((i__9418 < size__7468__auto__))
{var t = cljs.core._nth.call(null,c__7467__auto__,i__9418);cljs.core.chunk_append.call(null,b__9419,lt.plugins.gitlight.status.ui.button.call(null,t,git_root));
{
var G__9522 = (i__9418 + 1);
i__9418 = G__9522;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9419),iter__9416.call(null,cljs.core.chunk_rest.call(null,s__9417__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9419),null);
}
} else
{var t = cljs.core.first.call(null,s__9417__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,t,git_root),iter__9416.call(null,cljs.core.rest.call(null,s__9417__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","tag"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7469__auto__ = (function iter__9420(s__9421){return (new cljs.core.LazySeq(null,(function (){var s__9421__$1 = s__9421;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9421__$1);if(temp__4092__auto__)
{var s__9421__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9421__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__9421__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__9423 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__9422 = 0;while(true){
if((i__9422 < size__7468__auto__))
{var vec__9426 = cljs.core._nth.call(null,c__7467__auto__,i__9422);var g = cljs.core.nth.call(null,vec__9426,0,null);var fs = cljs.core.nth.call(null,vec__9426,1,null);cljs.core.chunk_append.call(null,b__9423,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__9523 = (i__9422 + 1);
i__9422 = G__9523;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9423),iter__9420.call(null,cljs.core.chunk_rest.call(null,s__9421__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9423),null);
}
} else
{var vec__9427 = cljs.core.first.call(null,s__9421__$2);var g = cljs.core.nth.call(null,vec__9427,0,null);var fs = cljs.core.nth.call(null,vec__9427,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__9420.call(null,cljs.core.rest.call(null,s__9421__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,this$);
})()], null)], null));var seq__9428_9524 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9429_9525 = null;var count__9430_9526 = 0;var i__9431_9527 = 0;while(true){
if((i__9431_9527 < count__9430_9526))
{var vec__9432_9528 = cljs.core._nth.call(null,chunk__9429_9525,i__9431_9527);var ev__8121__auto___9529 = cljs.core.nth.call(null,vec__9432_9528,0,null);var func__8122__auto___9530 = cljs.core.nth.call(null,vec__9432_9528,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___9529,func__8122__auto___9530);
{
var G__9531 = seq__9428_9524;
var G__9532 = chunk__9429_9525;
var G__9533 = count__9430_9526;
var G__9534 = (i__9431_9527 + 1);
seq__9428_9524 = G__9531;
chunk__9429_9525 = G__9532;
count__9430_9526 = G__9533;
i__9431_9527 = G__9534;
continue;
}
} else
{var temp__4092__auto___9535 = cljs.core.seq.call(null,seq__9428_9524);if(temp__4092__auto___9535)
{var seq__9428_9536__$1 = temp__4092__auto___9535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9428_9536__$1))
{var c__7500__auto___9537 = cljs.core.chunk_first.call(null,seq__9428_9536__$1);{
var G__9538 = cljs.core.chunk_rest.call(null,seq__9428_9536__$1);
var G__9539 = c__7500__auto___9537;
var G__9540 = cljs.core.count.call(null,c__7500__auto___9537);
var G__9541 = 0;
seq__9428_9524 = G__9538;
chunk__9429_9525 = G__9539;
count__9430_9526 = G__9540;
i__9431_9527 = G__9541;
continue;
}
} else
{var vec__9433_9542 = cljs.core.first.call(null,seq__9428_9536__$1);var ev__8121__auto___9543 = cljs.core.nth.call(null,vec__9433_9542,0,null);var func__8122__auto___9544 = cljs.core.nth.call(null,vec__9433_9542,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___9543,func__8122__auto___9544);
{
var G__9545 = cljs.core.next.call(null,seq__9428_9536__$1);
var G__9546 = null;
var G__9547 = 0;
var G__9548 = 0;
seq__9428_9524 = G__9545;
chunk__9429_9525 = G__9546;
count__9430_9526 = G__9547;
i__9431_9527 = G__9548;
continue;
}
}
} else
{}
}
break;
}
return e__8120__auto__;
});
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__9440_9549 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9441_9550 = null;var count__9442_9551 = 0;var i__9443_9552 = 0;while(true){
if((i__9443_9552 < count__9442_9551))
{var vec__9444_9553 = cljs.core._nth.call(null,chunk__9441_9550,i__9443_9552);var ev__8121__auto___9554 = cljs.core.nth.call(null,vec__9444_9553,0,null);var func__8122__auto___9555 = cljs.core.nth.call(null,vec__9444_9553,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___9554,func__8122__auto___9555);
{
var G__9556 = seq__9440_9549;
var G__9557 = chunk__9441_9550;
var G__9558 = count__9442_9551;
var G__9559 = (i__9443_9552 + 1);
seq__9440_9549 = G__9556;
chunk__9441_9550 = G__9557;
count__9442_9551 = G__9558;
i__9443_9552 = G__9559;
continue;
}
} else
{var temp__4092__auto___9560 = cljs.core.seq.call(null,seq__9440_9549);if(temp__4092__auto___9560)
{var seq__9440_9561__$1 = temp__4092__auto___9560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9440_9561__$1))
{var c__7500__auto___9562 = cljs.core.chunk_first.call(null,seq__9440_9561__$1);{
var G__9563 = cljs.core.chunk_rest.call(null,seq__9440_9561__$1);
var G__9564 = c__7500__auto___9562;
var G__9565 = cljs.core.count.call(null,c__7500__auto___9562);
var G__9566 = 0;
seq__9440_9549 = G__9563;
chunk__9441_9550 = G__9564;
count__9442_9551 = G__9565;
i__9443_9552 = G__9566;
continue;
}
} else
{var vec__9445_9567 = cljs.core.first.call(null,seq__9440_9561__$1);var ev__8121__auto___9568 = cljs.core.nth.call(null,vec__9445_9567,0,null);var func__8122__auto___9569 = cljs.core.nth.call(null,vec__9445_9567,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___9568,func__8122__auto___9569);
{
var G__9570 = cljs.core.next.call(null,seq__9440_9561__$1);
var G__9571 = null;
var G__9572 = 0;
var G__9573 = 0;
seq__9440_9549 = G__9570;
chunk__9441_9550 = G__9571;
count__9442_9551 = G__9572;
i__9443_9552 = G__9573;
continue;
}
}
} else
{}
}
break;
}
return e__8120__auto__;
});
lt.plugins.gitlight.status.ui.__BEH__update = (function __BEH__update(obj,status,branch,git_root){var bar_dom = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));lt.plugins.gitlight.status.ui.dom_truncate.call(null,bar_dom);
lt.util.dom.append.call(null,bar_dom,lt.plugins.gitlight.status.ui.status_ui.call(null,status,branch,git_root));
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
lt.plugins.gitlight.status.__BEH__init = (function __BEH__init(this$){lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.gitlight.status.ui.status_bar);
lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.shell_git_out,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826));
return lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.shell_git_out,new cljs.core.Keyword("lt.plugins.gitlight.status","auto-refresh-git-status","lt.plugins.gitlight.status/auto-refresh-git-status",2840366769));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","init","lt.plugins.gitlight.status/init",3068682980),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__init,new cljs.core.Keyword(null,"desc","desc",1016984067),"Init gitlight status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-status","gitlight-status",4738816205),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Status",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.plugins.gitlight.status.back.git_status.call(null);
return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.gitlight.status.ui.status_bar);
})], null));
lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status = (function __BEH__refresh_ui_on_new_status(obj,data){if(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null))
{return lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"git-root","git-root",2199394671).cljs$core$IFn$_invoke$arity$1(data));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.plugins.gitlight.status.__BEH__auto_refresh_git_status = (function __BEH__auto_refresh_git_status(obj,data){if((lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null)) && ((new cljs.core.Keyword(null,"git-status-refresh-rate","git-status-refresh-rate",1535627140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config)) > 0)))
{return lt.util.js.wait.call(null,new cljs.core.Keyword(null,"git-status-refresh-rate","git-status-refresh-rate",1535627140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config)),lt.plugins.gitlight.status.back.git_status);
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