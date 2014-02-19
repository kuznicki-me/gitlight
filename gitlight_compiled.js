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
lt.plugins.gitlight.status.back.in_sequence_QMARK_ = (function in_sequence_QMARK_(haystack,needle){if((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([needle], true),cljs.core.seq.call(null,haystack)) == null))
{return null;
} else
{return true;
}
});
lt.plugins.gitlight.status.back.keywording_file_status = (function keywording_file_status(status,file){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(file)].join(''),((cljs.core._EQ_.call(null,status,"#"))?new cljs.core.Keyword(null,"branch-name","branch-name",4270694216):((cljs.core._EQ_.call(null,status,"A"))?new cljs.core.Keyword(null,"newfile","newfile",2859647630):((cljs.core._EQ_.call(null,status,"M"))?new cljs.core.Keyword(null,"modified","modified",4693358139):((cljs.core._EQ_.call(null,status,"D"))?new cljs.core.Keyword(null,"deleted","deleted",2564367243):((cljs.core._EQ_.call(null,status,"R"))?new cljs.core.Keyword(null,"renamed","renamed",2106238040):((cljs.core._EQ_.call(null,status,"C"))?new cljs.core.Keyword(null,"copied","copied",3954141750):((cljs.core._EQ_.call(null,status,"?"))?new cljs.core.Keyword(null,"untracked","untracked",1658310115):((cljs.core._EQ_.call(null,status,"#"))?new cljs.core.Keyword(null,"branch","branch",3927841044):((cljs.core._EQ_.call(null,status,"!"))?new cljs.core.Keyword(null,"ignored","ignored",2766319684):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.Keyword(null,"unknown","unknown",729063356):null))))))))))], null);
});
lt.plugins.gitlight.status.back.make_keyworded = (function make_keyworded(keyword_function,data){var vec__8859 = keyword_function;var what_keyword = cljs.core.nth.call(null,vec__8859,0,null);var test_function = cljs.core.nth.call(null,vec__8859,1,null);var which_function = cljs.core.nth.call(null,vec__8859,2,null);var filtered = cljs.core.filter.call(null,test_function,data);var keyworded = cljs.core.map.call(null,((function (filtered){
return (function (f){return lt.plugins.gitlight.status.back.keywording_file_status.call(null,which_function.call(null,f),cljs.core.rest.call(null,cljs.core.rest.call(null,f)));
});})(filtered))
,filtered);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [what_keyword,keyworded], null);
});
lt.plugins.gitlight.status.back.parse_line = (function parse_line(line){var X = cljs.core.first.call(null,line);var Y = cljs.core.second.call(null,line);var filename = cljs.core.subs.call(null,line,3);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [X,Y,filename], null);
});
lt.plugins.gitlight.status.back.keyword_functions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"staged","staged",4416376984),(function (d){return lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MARC",cljs.core.first.call(null,d));
}),cljs.core.first], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),(function (d){var and__6743__auto__ = lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null," MARC",cljs.core.first.call(null,d));if(cljs.core.truth_(and__6743__auto__))
{return lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MD",cljs.core.second.call(null,d));
} else
{return and__6743__auto__;
}
}),cljs.core.second], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untracked","untracked",1658310115),(function (d){return cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,d));
}),cljs.core.second], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignored","ignored",2766319684),(function (d){return cljs.core._EQ_.call(null,"!",cljs.core.first.call(null,d));
}),cljs.core.second], null)], null);
lt.plugins.gitlight.status.back.make_status = (function make_status(data){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7466__auto__ = (function iter__8864(s__8865){return (new cljs.core.LazySeq(null,(function (){var s__8865__$1 = s__8865;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8865__$1);if(temp__4092__auto__)
{var s__8865__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8865__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8865__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8867 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8866 = 0;while(true){
if((i__8866 < size__7465__auto__))
{var key_fun = cljs.core._nth.call(null,c__7464__auto__,i__8866);cljs.core.chunk_append.call(null,b__8867,lt.plugins.gitlight.status.back.make_keyworded.call(null,key_fun,data));
{
var G__8868 = (i__8866 + 1);
i__8866 = G__8868;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8867),iter__8864.call(null,cljs.core.chunk_rest.call(null,s__8865__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8867),null);
}
} else
{var key_fun = cljs.core.first.call(null,s__8865__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.back.make_keyworded.call(null,key_fun,data),iter__8864.call(null,cljs.core.rest.call(null,s__8865__$2)));
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
lt.plugins.gitlight.status.back.parse_porcelain = (function parse_porcelain(data){var splitted = clojure.string.split_lines.call(null,data.toString());var parsed = cljs.core.map.call(null,lt.plugins.gitlight.status.back.parse_line,splitted);var branch = cljs.core.first.call(null,parsed);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"git-root","git-root",2199394671),lt.plugins.gitlight.status.back.get_git_root.call(null,lt.plugins.gitlight.status.back.get_cwd.call(null)),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),[cljs.core.str(cljs.core.rest.call(null,cljs.core.rest.call(null,branch)))].join(''),new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.make_status.call(null,cljs.core.rest.call(null,parsed))], null);
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__8597_8686 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8598_8687 = null;var count__8599_8688 = 0;var i__8600_8689 = 0;while(true){
if((i__8600_8689 < count__8599_8688))
{var vec__8601_8690 = cljs.core._nth.call(null,chunk__8598_8687,i__8600_8689);var ev__8112__auto___8691 = cljs.core.nth.call(null,vec__8601_8690,0,null);var func__8113__auto___8692 = cljs.core.nth.call(null,vec__8601_8690,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8691,func__8113__auto___8692);
{
var G__8693 = seq__8597_8686;
var G__8694 = chunk__8598_8687;
var G__8695 = count__8599_8688;
var G__8696 = (i__8600_8689 + 1);
seq__8597_8686 = G__8693;
chunk__8598_8687 = G__8694;
count__8599_8688 = G__8695;
i__8600_8689 = G__8696;
continue;
}
} else
{var temp__4092__auto___8697 = cljs.core.seq.call(null,seq__8597_8686);if(temp__4092__auto___8697)
{var seq__8597_8698__$1 = temp__4092__auto___8697;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8597_8698__$1))
{var c__7497__auto___8699 = cljs.core.chunk_first.call(null,seq__8597_8698__$1);{
var G__8700 = cljs.core.chunk_rest.call(null,seq__8597_8698__$1);
var G__8701 = c__7497__auto___8699;
var G__8702 = cljs.core.count.call(null,c__7497__auto___8699);
var G__8703 = 0;
seq__8597_8686 = G__8700;
chunk__8598_8687 = G__8701;
count__8599_8688 = G__8702;
i__8600_8689 = G__8703;
continue;
}
} else
{var vec__8602_8704 = cljs.core.first.call(null,seq__8597_8698__$1);var ev__8112__auto___8705 = cljs.core.nth.call(null,vec__8602_8704,0,null);var func__8113__auto___8706 = cljs.core.nth.call(null,vec__8602_8704,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8705,func__8113__auto___8706);
{
var G__8707 = cljs.core.next.call(null,seq__8597_8698__$1);
var G__8708 = null;
var G__8709 = 0;
var G__8710 = 0;
seq__8597_8686 = G__8707;
chunk__8598_8687 = G__8708;
count__8599_8688 = G__8709;
i__8600_8689 = G__8710;
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
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),n], null));var seq__8609_8711 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Are you sure?",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__8610_8712 = null;var count__8611_8713 = 0;var i__8612_8714 = 0;while(true){
if((i__8612_8714 < count__8611_8713))
{var vec__8613_8715 = cljs.core._nth.call(null,chunk__8610_8712,i__8612_8714);var ev__8112__auto___8716 = cljs.core.nth.call(null,vec__8613_8715,0,null);var func__8113__auto___8717 = cljs.core.nth.call(null,vec__8613_8715,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8716,func__8113__auto___8717);
{
var G__8718 = seq__8609_8711;
var G__8719 = chunk__8610_8712;
var G__8720 = count__8611_8713;
var G__8721 = (i__8612_8714 + 1);
seq__8609_8711 = G__8718;
chunk__8610_8712 = G__8719;
count__8611_8713 = G__8720;
i__8612_8714 = G__8721;
continue;
}
} else
{var temp__4092__auto___8722 = cljs.core.seq.call(null,seq__8609_8711);if(temp__4092__auto___8722)
{var seq__8609_8723__$1 = temp__4092__auto___8722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8609_8723__$1))
{var c__7497__auto___8724 = cljs.core.chunk_first.call(null,seq__8609_8723__$1);{
var G__8725 = cljs.core.chunk_rest.call(null,seq__8609_8723__$1);
var G__8726 = c__7497__auto___8724;
var G__8727 = cljs.core.count.call(null,c__7497__auto___8724);
var G__8728 = 0;
seq__8609_8711 = G__8725;
chunk__8610_8712 = G__8726;
count__8611_8713 = G__8727;
i__8612_8714 = G__8728;
continue;
}
} else
{var vec__8614_8729 = cljs.core.first.call(null,seq__8609_8723__$1);var ev__8112__auto___8730 = cljs.core.nth.call(null,vec__8614_8729,0,null);var func__8113__auto___8731 = cljs.core.nth.call(null,vec__8614_8729,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8730,func__8113__auto___8731);
{
var G__8732 = cljs.core.next.call(null,seq__8609_8723__$1);
var G__8733 = null;
var G__8734 = 0;
var G__8735 = 0;
seq__8609_8711 = G__8732;
chunk__8610_8712 = G__8733;
count__8611_8713 = G__8734;
i__8612_8714 = G__8735;
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__8615){var vec__8627 = p__8615;var f = cljs.core.nth.call(null,vec__8627,0,null);var t = cljs.core.nth.call(null,vec__8627,1,null);var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),[cljs.core.str(t),cljs.core.str(":"),cljs.core.str(f)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__8628(s__8629){return (new cljs.core.LazySeq(null,(function (){var s__8629__$1 = s__8629;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8629__$1);if(temp__4092__auto__)
{var s__8629__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8629__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8629__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8631 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8630 = 0;while(true){
if((i__8630 < size__7465__auto__))
{var bt = cljs.core._nth.call(null,c__7464__auto__,i__8630);cljs.core.chunk_append.call(null,b__8631,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__8736 = (i__8630 + 1);
i__8630 = G__8736;
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
{var bt = cljs.core.first.call(null,s__8629__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__8628.call(null,cljs.core.rest.call(null,s__8629__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__8632_8737 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8633_8738 = null;var count__8634_8739 = 0;var i__8635_8740 = 0;while(true){
if((i__8635_8740 < count__8634_8739))
{var vec__8636_8741 = cljs.core._nth.call(null,chunk__8633_8738,i__8635_8740);var ev__8112__auto___8742 = cljs.core.nth.call(null,vec__8636_8741,0,null);var func__8113__auto___8743 = cljs.core.nth.call(null,vec__8636_8741,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8742,func__8113__auto___8743);
{
var G__8744 = seq__8632_8737;
var G__8745 = chunk__8633_8738;
var G__8746 = count__8634_8739;
var G__8747 = (i__8635_8740 + 1);
seq__8632_8737 = G__8744;
chunk__8633_8738 = G__8745;
count__8634_8739 = G__8746;
i__8635_8740 = G__8747;
continue;
}
} else
{var temp__4092__auto___8748 = cljs.core.seq.call(null,seq__8632_8737);if(temp__4092__auto___8748)
{var seq__8632_8749__$1 = temp__4092__auto___8748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8632_8749__$1))
{var c__7497__auto___8750 = cljs.core.chunk_first.call(null,seq__8632_8749__$1);{
var G__8751 = cljs.core.chunk_rest.call(null,seq__8632_8749__$1);
var G__8752 = c__7497__auto___8750;
var G__8753 = cljs.core.count.call(null,c__7497__auto___8750);
var G__8754 = 0;
seq__8632_8737 = G__8751;
chunk__8633_8738 = G__8752;
count__8634_8739 = G__8753;
i__8635_8740 = G__8754;
continue;
}
} else
{var vec__8637_8755 = cljs.core.first.call(null,seq__8632_8749__$1);var ev__8112__auto___8756 = cljs.core.nth.call(null,vec__8637_8755,0,null);var func__8113__auto___8757 = cljs.core.nth.call(null,vec__8637_8755,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8756,func__8113__auto___8757);
{
var G__8758 = cljs.core.next.call(null,seq__8632_8749__$1);
var G__8759 = null;
var G__8760 = 0;
var G__8761 = 0;
seq__8632_8737 = G__8758;
chunk__8633_8738 = G__8759;
count__8634_8739 = G__8760;
i__8635_8740 = G__8761;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("Branch: ")].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),branch], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Root: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__8656(s__8657){return (new cljs.core.LazySeq(null,(function (){var s__8657__$1 = s__8657;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8657__$1);if(temp__4092__auto__)
{var s__8657__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8657__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8657__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8659 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8658 = 0;while(true){
if((i__8658 < size__7465__auto__))
{var t = cljs.core._nth.call(null,c__7464__auto__,i__8658);cljs.core.chunk_append.call(null,b__8659,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null));
{
var G__8762 = (i__8658 + 1);
i__8658 = G__8762;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8659),iter__8656.call(null,cljs.core.chunk_rest.call(null,s__8657__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8659),null);
}
} else
{var t = cljs.core.first.call(null,s__8657__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null),iter__8656.call(null,cljs.core.rest.call(null,s__8657__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","tag"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__8660(s__8661){return (new cljs.core.LazySeq(null,(function (){var s__8661__$1 = s__8661;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8661__$1);if(temp__4092__auto__)
{var s__8661__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8661__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8661__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8663 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8662 = 0;while(true){
if((i__8662 < size__7465__auto__))
{var vec__8666 = cljs.core._nth.call(null,c__7464__auto__,i__8662);var g = cljs.core.nth.call(null,vec__8666,0,null);var fs = cljs.core.nth.call(null,vec__8666,1,null);cljs.core.chunk_append.call(null,b__8663,lt.plugins.gitlight.status.ui.group.call(null,g,fs));
{
var G__8763 = (i__8662 + 1);
i__8662 = G__8763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8663),iter__8660.call(null,cljs.core.chunk_rest.call(null,s__8661__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8663),null);
}
} else
{var vec__8667 = cljs.core.first.call(null,s__8661__$2);var g = cljs.core.nth.call(null,vec__8667,0,null);var fs = cljs.core.nth.call(null,vec__8667,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.group.call(null,g,fs),iter__8660.call(null,cljs.core.rest.call(null,s__8661__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,this$);
})()], null)], null));var seq__8668_8764 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8669_8765 = null;var count__8670_8766 = 0;var i__8671_8767 = 0;while(true){
if((i__8671_8767 < count__8670_8766))
{var vec__8672_8768 = cljs.core._nth.call(null,chunk__8669_8765,i__8671_8767);var ev__8112__auto___8769 = cljs.core.nth.call(null,vec__8672_8768,0,null);var func__8113__auto___8770 = cljs.core.nth.call(null,vec__8672_8768,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8769,func__8113__auto___8770);
{
var G__8771 = seq__8668_8764;
var G__8772 = chunk__8669_8765;
var G__8773 = count__8670_8766;
var G__8774 = (i__8671_8767 + 1);
seq__8668_8764 = G__8771;
chunk__8669_8765 = G__8772;
count__8670_8766 = G__8773;
i__8671_8767 = G__8774;
continue;
}
} else
{var temp__4092__auto___8775 = cljs.core.seq.call(null,seq__8668_8764);if(temp__4092__auto___8775)
{var seq__8668_8776__$1 = temp__4092__auto___8775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8668_8776__$1))
{var c__7497__auto___8777 = cljs.core.chunk_first.call(null,seq__8668_8776__$1);{
var G__8778 = cljs.core.chunk_rest.call(null,seq__8668_8776__$1);
var G__8779 = c__7497__auto___8777;
var G__8780 = cljs.core.count.call(null,c__7497__auto___8777);
var G__8781 = 0;
seq__8668_8764 = G__8778;
chunk__8669_8765 = G__8779;
count__8670_8766 = G__8780;
i__8671_8767 = G__8781;
continue;
}
} else
{var vec__8673_8782 = cljs.core.first.call(null,seq__8668_8776__$1);var ev__8112__auto___8783 = cljs.core.nth.call(null,vec__8673_8782,0,null);var func__8113__auto___8784 = cljs.core.nth.call(null,vec__8673_8782,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8783,func__8113__auto___8784);
{
var G__8785 = cljs.core.next.call(null,seq__8668_8776__$1);
var G__8786 = null;
var G__8787 = 0;
var G__8788 = 0;
seq__8668_8764 = G__8785;
chunk__8669_8765 = G__8786;
count__8670_8766 = G__8787;
i__8671_8767 = G__8788;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__8680_8789 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8681_8790 = null;var count__8682_8791 = 0;var i__8683_8792 = 0;while(true){
if((i__8683_8792 < count__8682_8791))
{var vec__8684_8793 = cljs.core._nth.call(null,chunk__8681_8790,i__8683_8792);var ev__8112__auto___8794 = cljs.core.nth.call(null,vec__8684_8793,0,null);var func__8113__auto___8795 = cljs.core.nth.call(null,vec__8684_8793,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8794,func__8113__auto___8795);
{
var G__8796 = seq__8680_8789;
var G__8797 = chunk__8681_8790;
var G__8798 = count__8682_8791;
var G__8799 = (i__8683_8792 + 1);
seq__8680_8789 = G__8796;
chunk__8681_8790 = G__8797;
count__8682_8791 = G__8798;
i__8683_8792 = G__8799;
continue;
}
} else
{var temp__4092__auto___8800 = cljs.core.seq.call(null,seq__8680_8789);if(temp__4092__auto___8800)
{var seq__8680_8801__$1 = temp__4092__auto___8800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8680_8801__$1))
{var c__7497__auto___8802 = cljs.core.chunk_first.call(null,seq__8680_8801__$1);{
var G__8803 = cljs.core.chunk_rest.call(null,seq__8680_8801__$1);
var G__8804 = c__7497__auto___8802;
var G__8805 = cljs.core.count.call(null,c__7497__auto___8802);
var G__8806 = 0;
seq__8680_8789 = G__8803;
chunk__8681_8790 = G__8804;
count__8682_8791 = G__8805;
i__8683_8792 = G__8806;
continue;
}
} else
{var vec__8685_8807 = cljs.core.first.call(null,seq__8680_8801__$1);var ev__8112__auto___8808 = cljs.core.nth.call(null,vec__8685_8807,0,null);var func__8113__auto___8809 = cljs.core.nth.call(null,vec__8685_8807,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8808,func__8113__auto___8809);
{
var G__8810 = cljs.core.next.call(null,seq__8680_8801__$1);
var G__8811 = null;
var G__8812 = 0;
var G__8813 = 0;
seq__8680_8789 = G__8810;
chunk__8681_8790 = G__8811;
count__8682_8791 = G__8812;
i__8683_8792 = G__8813;
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