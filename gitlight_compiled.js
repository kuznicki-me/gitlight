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
lt.plugins.gitlight.status.back.on_cwd_QMARK_ = (function on_cwd_QMARK_(){return !((lt.objs.editor.pool.last_active.call(null) == null));
});
lt.plugins.gitlight.status.back.get_cwd = (function get_cwd(){return lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
});
lt.plugins.gitlight.status.back.get_git_root = (function get_git_root(){if(lt.plugins.gitlight.status.back.on_cwd_QMARK_.call(null))
{var cwd = lt.objs.files.walk_up_find.call(null,lt.plugins.gitlight.status.back.get_cwd.call(null),".git");if(!((cwd == null)))
{return lt.objs.files.parent.call(null,cwd);
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.gitlight.status.back.git_status = (function git_status(){var temp__4090__auto__ = lt.plugins.gitlight.status.back.get_git_root.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var cwd = temp__4090__auto__;return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"git-binary","git-binary",1640221134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config)),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["status","--porcelain","--branch"], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.status.back.shell_git_out], null));
} else
{return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't guess git root",new cljs.core.Keyword(null,"body","body",1016933652),"Please run `gitlight: Status' again on a file that is in a git repo.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
}
});
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
lt.plugins.gitlight.status.back.parse_porcelain = (function parse_porcelain(data){var splitted = clojure.string.split_lines.call(null,data.toString());var branch = cljs.core.subs.call(null,cljs.core.first.call(null,splitted),3);var parsed = cljs.core.map.call(null,lt.plugins.gitlight.status.back.parse_and_keyword_line,cljs.core.rest.call(null,splitted));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"git-root","git-root",2199394671),lt.plugins.gitlight.status.back.get_git_root.call(null),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),[cljs.core.str(branch)].join(''),new cljs.core.Keyword(null,"status","status",4416389988),cljs.core.group_by.call(null,(function (a){return cljs.core.nth.call(null,a,2);
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__8565_8654 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8566_8655 = null;var count__8567_8656 = 0;var i__8568_8657 = 0;while(true){
if((i__8568_8657 < count__8567_8656))
{var vec__8569_8658 = cljs.core._nth.call(null,chunk__8566_8655,i__8568_8657);var ev__8112__auto___8659 = cljs.core.nth.call(null,vec__8569_8658,0,null);var func__8113__auto___8660 = cljs.core.nth.call(null,vec__8569_8658,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8659,func__8113__auto___8660);
{
var G__8661 = seq__8565_8654;
var G__8662 = chunk__8566_8655;
var G__8663 = count__8567_8656;
var G__8664 = (i__8568_8657 + 1);
seq__8565_8654 = G__8661;
chunk__8566_8655 = G__8662;
count__8567_8656 = G__8663;
i__8568_8657 = G__8664;
continue;
}
} else
{var temp__4092__auto___8665 = cljs.core.seq.call(null,seq__8565_8654);if(temp__4092__auto___8665)
{var seq__8565_8666__$1 = temp__4092__auto___8665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8565_8666__$1))
{var c__7497__auto___8667 = cljs.core.chunk_first.call(null,seq__8565_8666__$1);{
var G__8668 = cljs.core.chunk_rest.call(null,seq__8565_8666__$1);
var G__8669 = c__7497__auto___8667;
var G__8670 = cljs.core.count.call(null,c__7497__auto___8667);
var G__8671 = 0;
seq__8565_8654 = G__8668;
chunk__8566_8655 = G__8669;
count__8567_8656 = G__8670;
i__8568_8657 = G__8671;
continue;
}
} else
{var vec__8570_8672 = cljs.core.first.call(null,seq__8565_8666__$1);var ev__8112__auto___8673 = cljs.core.nth.call(null,vec__8570_8672,0,null);var func__8113__auto___8674 = cljs.core.nth.call(null,vec__8570_8672,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8673,func__8113__auto___8674);
{
var G__8675 = cljs.core.next.call(null,seq__8565_8666__$1);
var G__8676 = null;
var G__8677 = 0;
var G__8678 = 0;
seq__8565_8654 = G__8675;
chunk__8566_8655 = G__8676;
count__8567_8656 = G__8677;
i__8568_8657 = G__8678;
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
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8577_8679 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__8578_8680 = null;var count__8579_8681 = 0;var i__8580_8682 = 0;while(true){
if((i__8580_8682 < count__8579_8681))
{var vec__8581_8683 = cljs.core._nth.call(null,chunk__8578_8680,i__8580_8682);var ev__8112__auto___8684 = cljs.core.nth.call(null,vec__8581_8683,0,null);var func__8113__auto___8685 = cljs.core.nth.call(null,vec__8581_8683,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8684,func__8113__auto___8685);
{
var G__8686 = seq__8577_8679;
var G__8687 = chunk__8578_8680;
var G__8688 = count__8579_8681;
var G__8689 = (i__8580_8682 + 1);
seq__8577_8679 = G__8686;
chunk__8578_8680 = G__8687;
count__8579_8681 = G__8688;
i__8580_8682 = G__8689;
continue;
}
} else
{var temp__4092__auto___8690 = cljs.core.seq.call(null,seq__8577_8679);if(temp__4092__auto___8690)
{var seq__8577_8691__$1 = temp__4092__auto___8690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8577_8691__$1))
{var c__7497__auto___8692 = cljs.core.chunk_first.call(null,seq__8577_8691__$1);{
var G__8693 = cljs.core.chunk_rest.call(null,seq__8577_8691__$1);
var G__8694 = c__7497__auto___8692;
var G__8695 = cljs.core.count.call(null,c__7497__auto___8692);
var G__8696 = 0;
seq__8577_8679 = G__8693;
chunk__8578_8680 = G__8694;
count__8579_8681 = G__8695;
i__8580_8682 = G__8696;
continue;
}
} else
{var vec__8582_8697 = cljs.core.first.call(null,seq__8577_8691__$1);var ev__8112__auto___8698 = cljs.core.nth.call(null,vec__8582_8697,0,null);var func__8113__auto___8699 = cljs.core.nth.call(null,vec__8582_8697,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8698,func__8113__auto___8699);
{
var G__8700 = cljs.core.next.call(null,seq__8577_8691__$1);
var G__8701 = null;
var G__8702 = 0;
var G__8703 = 0;
seq__8577_8679 = G__8700;
chunk__8578_8680 = G__8701;
count__8579_8681 = G__8702;
i__8580_8682 = G__8703;
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__8583){var vec__8595 = p__8583;var f = cljs.core.nth.call(null,vec__8595,0,null);var t = cljs.core.nth.call(null,vec__8595,1,null);var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str(cljs.core.first.call(null,cljs.core.name.call(null,t)).toUpperCase()),cljs.core.str(" "),cljs.core.str(f)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__8596(s__8597){return (new cljs.core.LazySeq(null,(function (){var s__8597__$1 = s__8597;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8597__$1);if(temp__4092__auto__)
{var s__8597__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8597__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8597__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8599 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8598 = 0;while(true){
if((i__8598 < size__7465__auto__))
{var bt = cljs.core._nth.call(null,c__7464__auto__,i__8598);cljs.core.chunk_append.call(null,b__8599,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__8704 = (i__8598 + 1);
i__8598 = G__8704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8599),iter__8596.call(null,cljs.core.chunk_rest.call(null,s__8597__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8599),null);
}
} else
{var bt = cljs.core.first.call(null,s__8597__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__8596.call(null,cljs.core.rest.call(null,s__8597__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__8600_8705 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8601_8706 = null;var count__8602_8707 = 0;var i__8603_8708 = 0;while(true){
if((i__8603_8708 < count__8602_8707))
{var vec__8604_8709 = cljs.core._nth.call(null,chunk__8601_8706,i__8603_8708);var ev__8112__auto___8710 = cljs.core.nth.call(null,vec__8604_8709,0,null);var func__8113__auto___8711 = cljs.core.nth.call(null,vec__8604_8709,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8710,func__8113__auto___8711);
{
var G__8712 = seq__8600_8705;
var G__8713 = chunk__8601_8706;
var G__8714 = count__8602_8707;
var G__8715 = (i__8603_8708 + 1);
seq__8600_8705 = G__8712;
chunk__8601_8706 = G__8713;
count__8602_8707 = G__8714;
i__8603_8708 = G__8715;
continue;
}
} else
{var temp__4092__auto___8716 = cljs.core.seq.call(null,seq__8600_8705);if(temp__4092__auto___8716)
{var seq__8600_8717__$1 = temp__4092__auto___8716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8600_8717__$1))
{var c__7497__auto___8718 = cljs.core.chunk_first.call(null,seq__8600_8717__$1);{
var G__8719 = cljs.core.chunk_rest.call(null,seq__8600_8717__$1);
var G__8720 = c__7497__auto___8718;
var G__8721 = cljs.core.count.call(null,c__7497__auto___8718);
var G__8722 = 0;
seq__8600_8705 = G__8719;
chunk__8601_8706 = G__8720;
count__8602_8707 = G__8721;
i__8603_8708 = G__8722;
continue;
}
} else
{var vec__8605_8723 = cljs.core.first.call(null,seq__8600_8717__$1);var ev__8112__auto___8724 = cljs.core.nth.call(null,vec__8605_8723,0,null);var func__8113__auto___8725 = cljs.core.nth.call(null,vec__8605_8723,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8724,func__8113__auto___8725);
{
var G__8726 = cljs.core.next.call(null,seq__8600_8717__$1);
var G__8727 = null;
var G__8728 = 0;
var G__8729 = 0;
seq__8600_8705 = G__8726;
chunk__8601_8706 = G__8727;
count__8602_8707 = G__8728;
i__8603_8708 = G__8729;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.button.call(null,branch,[cljs.core.str("Branch menu")].join(''))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",lt.plugins.gitlight.status.ui.button.call(null,git_root,"Change repo")], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__8624(s__8625){return (new cljs.core.LazySeq(null,(function (){var s__8625__$1 = s__8625;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8625__$1);if(temp__4092__auto__)
{var s__8625__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8625__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8625__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8627 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8626 = 0;while(true){
if((i__8626 < size__7465__auto__))
{var t = cljs.core._nth.call(null,c__7464__auto__,i__8626);cljs.core.chunk_append.call(null,b__8627,lt.plugins.gitlight.status.ui.button.call(null,t,git_root));
{
var G__8730 = (i__8626 + 1);
i__8626 = G__8730;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8627),iter__8624.call(null,cljs.core.chunk_rest.call(null,s__8625__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8627),null);
}
} else
{var t = cljs.core.first.call(null,s__8625__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,t,git_root),iter__8624.call(null,cljs.core.rest.call(null,s__8625__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","tag"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__8628(s__8629){return (new cljs.core.LazySeq(null,(function (){var s__8629__$1 = s__8629;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8629__$1);if(temp__4092__auto__)
{var s__8629__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8629__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8629__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8631 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8630 = 0;while(true){
if((i__8630 < size__7465__auto__))
{var vec__8634 = cljs.core._nth.call(null,c__7464__auto__,i__8630);var g = cljs.core.nth.call(null,vec__8634,0,null);var fs = cljs.core.nth.call(null,vec__8634,1,null);cljs.core.chunk_append.call(null,b__8631,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__8731 = (i__8630 + 1);
i__8630 = G__8731;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8631),iter__8628.call(null,cljs.core.chunk_rest.call(null,s__8629__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8631),null);
}
} else
{var vec__8635 = cljs.core.first.call(null,s__8629__$2);var g = cljs.core.nth.call(null,vec__8635,0,null);var fs = cljs.core.nth.call(null,vec__8635,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__8628.call(null,cljs.core.rest.call(null,s__8629__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,this$);
})()], null)], null));var seq__8636_8732 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8637_8733 = null;var count__8638_8734 = 0;var i__8639_8735 = 0;while(true){
if((i__8639_8735 < count__8638_8734))
{var vec__8640_8736 = cljs.core._nth.call(null,chunk__8637_8733,i__8639_8735);var ev__8112__auto___8737 = cljs.core.nth.call(null,vec__8640_8736,0,null);var func__8113__auto___8738 = cljs.core.nth.call(null,vec__8640_8736,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8737,func__8113__auto___8738);
{
var G__8739 = seq__8636_8732;
var G__8740 = chunk__8637_8733;
var G__8741 = count__8638_8734;
var G__8742 = (i__8639_8735 + 1);
seq__8636_8732 = G__8739;
chunk__8637_8733 = G__8740;
count__8638_8734 = G__8741;
i__8639_8735 = G__8742;
continue;
}
} else
{var temp__4092__auto___8743 = cljs.core.seq.call(null,seq__8636_8732);if(temp__4092__auto___8743)
{var seq__8636_8744__$1 = temp__4092__auto___8743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8636_8744__$1))
{var c__7497__auto___8745 = cljs.core.chunk_first.call(null,seq__8636_8744__$1);{
var G__8746 = cljs.core.chunk_rest.call(null,seq__8636_8744__$1);
var G__8747 = c__7497__auto___8745;
var G__8748 = cljs.core.count.call(null,c__7497__auto___8745);
var G__8749 = 0;
seq__8636_8732 = G__8746;
chunk__8637_8733 = G__8747;
count__8638_8734 = G__8748;
i__8639_8735 = G__8749;
continue;
}
} else
{var vec__8641_8750 = cljs.core.first.call(null,seq__8636_8744__$1);var ev__8112__auto___8751 = cljs.core.nth.call(null,vec__8641_8750,0,null);var func__8113__auto___8752 = cljs.core.nth.call(null,vec__8641_8750,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8751,func__8113__auto___8752);
{
var G__8753 = cljs.core.next.call(null,seq__8636_8744__$1);
var G__8754 = null;
var G__8755 = 0;
var G__8756 = 0;
seq__8636_8732 = G__8753;
chunk__8637_8733 = G__8754;
count__8638_8734 = G__8755;
i__8639_8735 = G__8756;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__8648_8757 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8649_8758 = null;var count__8650_8759 = 0;var i__8651_8760 = 0;while(true){
if((i__8651_8760 < count__8650_8759))
{var vec__8652_8761 = cljs.core._nth.call(null,chunk__8649_8758,i__8651_8760);var ev__8112__auto___8762 = cljs.core.nth.call(null,vec__8652_8761,0,null);var func__8113__auto___8763 = cljs.core.nth.call(null,vec__8652_8761,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8762,func__8113__auto___8763);
{
var G__8764 = seq__8648_8757;
var G__8765 = chunk__8649_8758;
var G__8766 = count__8650_8759;
var G__8767 = (i__8651_8760 + 1);
seq__8648_8757 = G__8764;
chunk__8649_8758 = G__8765;
count__8650_8759 = G__8766;
i__8651_8760 = G__8767;
continue;
}
} else
{var temp__4092__auto___8768 = cljs.core.seq.call(null,seq__8648_8757);if(temp__4092__auto___8768)
{var seq__8648_8769__$1 = temp__4092__auto___8768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8648_8769__$1))
{var c__7497__auto___8770 = cljs.core.chunk_first.call(null,seq__8648_8769__$1);{
var G__8771 = cljs.core.chunk_rest.call(null,seq__8648_8769__$1);
var G__8772 = c__7497__auto___8770;
var G__8773 = cljs.core.count.call(null,c__7497__auto___8770);
var G__8774 = 0;
seq__8648_8757 = G__8771;
chunk__8649_8758 = G__8772;
count__8650_8759 = G__8773;
i__8651_8760 = G__8774;
continue;
}
} else
{var vec__8653_8775 = cljs.core.first.call(null,seq__8648_8769__$1);var ev__8112__auto___8776 = cljs.core.nth.call(null,vec__8653_8775,0,null);var func__8113__auto___8777 = cljs.core.nth.call(null,vec__8653_8775,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8776,func__8113__auto___8777);
{
var G__8778 = cljs.core.next.call(null,seq__8648_8769__$1);
var G__8779 = null;
var G__8780 = 0;
var G__8781 = 0;
seq__8648_8757 = G__8778;
chunk__8649_8758 = G__8779;
count__8650_8759 = G__8780;
i__8651_8760 = G__8781;
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