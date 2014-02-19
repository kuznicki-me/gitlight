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
lt.plugins.gitlight.status.back.keywording_file_status = (function keywording_file_status(status,file){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(file)].join(''),((cljs.core._EQ_.call(null,status,"#"))?"branch-name":((cljs.core._EQ_.call(null,status,"A"))?"new file":((cljs.core._EQ_.call(null,status,"M"))?"modified":((cljs.core._EQ_.call(null,status,"D"))?"deleted":((cljs.core._EQ_.call(null,status,"R"))?"renamed":((cljs.core._EQ_.call(null,status,"C"))?"copied":((cljs.core._EQ_.call(null,status,"?"))?"untracked":((cljs.core._EQ_.call(null,status,"#"))?"branch":((cljs.core._EQ_.call(null,status,"!"))?"ignored":null)))))))))], null);
});
lt.plugins.gitlight.status.back.make_keyworded = (function make_keyworded(keyword_function,data){var vec__9960 = keyword_function;var what_keyword = cljs.core.nth.call(null,vec__9960,0,null);var test_function = cljs.core.nth.call(null,vec__9960,1,null);var which_function = cljs.core.nth.call(null,vec__9960,2,null);var filtered = cljs.core.filter.call(null,test_function,data);var keyworded = cljs.core.map.call(null,((function (filtered){
return (function (f){return lt.plugins.gitlight.status.back.keywording_file_status.call(null,which_function.call(null,f),cljs.core.rest.call(null,cljs.core.rest.call(null,f)));
});})(filtered))
,filtered);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [what_keyword,keyworded], null);
});
lt.plugins.gitlight.status.back.parse_line = (function parse_line(line){var X = cljs.core.first.call(null,line);var Y = cljs.core.second.call(null,line);var filename = cljs.core.subs.call(null,line,3);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [X,Y,filename], null);
});
lt.plugins.gitlight.status.back.keyword_functions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"staged","staged",4416376984),(function (d){return lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MADRC",cljs.core.first.call(null,d));
}),cljs.core.first], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),(function (d){return !(cljs.core._EQ_.call(null," ",cljs.core.second.call(null,d)));
}),cljs.core.second], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untracked","untracked",1658310115),(function (d){return cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,d));
}),cljs.core.second], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignored","ignored",2766319684),(function (d){return cljs.core._EQ_.call(null,"!",cljs.core.first.call(null,d));
}),cljs.core.second], null)], null);
lt.plugins.gitlight.status.back.make_status = (function make_status(data){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7466__auto__ = (function iter__9965(s__9966){return (new cljs.core.LazySeq(null,(function (){var s__9966__$1 = s__9966;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9966__$1);if(temp__4092__auto__)
{var s__9966__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9966__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9966__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9968 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9967 = 0;while(true){
if((i__9967 < size__7465__auto__))
{var key_fun = cljs.core._nth.call(null,c__7464__auto__,i__9967);cljs.core.chunk_append.call(null,b__9968,lt.plugins.gitlight.status.back.make_keyworded.call(null,key_fun,data));
{
var G__9969 = (i__9967 + 1);
i__9967 = G__9969;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9968),iter__9965.call(null,cljs.core.chunk_rest.call(null,s__9966__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9968),null);
}
} else
{var key_fun = cljs.core.first.call(null,s__9966__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.back.make_keyworded.call(null,key_fun,data),iter__9965.call(null,cljs.core.rest.call(null,s__9966__$2)));
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
lt.plugins.gitlight.status.ui.dom_scroll_width = (function dom_scroll_width(n){return n.scrollWidth;
});
lt.plugins.gitlight.status.ui.resize_to_content = (function resize_to_content(parent,child){return lt.plugins.gitlight.status.ui.resize_rightbar.call(null,((lt.util.dom.width.call(null,parent) - lt.util.dom.width.call(null,child)) + lt.plugins.gitlight.status.ui.dom_scroll_width.call(null,child)));
});
lt.plugins.gitlight.status.ui.dom_trunkate = (function dom_trunkate(node){return node.innerHTML = "";
});
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,lt.plugins.gitlight.status.ui.file,files)], null)], null));var seq__8617_8706 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8618_8707 = null;var count__8619_8708 = 0;var i__8620_8709 = 0;while(true){
if((i__8620_8709 < count__8619_8708))
{var vec__8621_8710 = cljs.core._nth.call(null,chunk__8618_8707,i__8620_8709);var ev__8112__auto___8711 = cljs.core.nth.call(null,vec__8621_8710,0,null);var func__8113__auto___8712 = cljs.core.nth.call(null,vec__8621_8710,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8711,func__8113__auto___8712);
{
var G__8713 = seq__8617_8706;
var G__8714 = chunk__8618_8707;
var G__8715 = count__8619_8708;
var G__8716 = (i__8620_8709 + 1);
seq__8617_8706 = G__8713;
chunk__8618_8707 = G__8714;
count__8619_8708 = G__8715;
i__8620_8709 = G__8716;
continue;
}
} else
{var temp__4092__auto___8717 = cljs.core.seq.call(null,seq__8617_8706);if(temp__4092__auto___8717)
{var seq__8617_8718__$1 = temp__4092__auto___8717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8617_8718__$1))
{var c__7497__auto___8719 = cljs.core.chunk_first.call(null,seq__8617_8718__$1);{
var G__8720 = cljs.core.chunk_rest.call(null,seq__8617_8718__$1);
var G__8721 = c__7497__auto___8719;
var G__8722 = cljs.core.count.call(null,c__7497__auto___8719);
var G__8723 = 0;
seq__8617_8706 = G__8720;
chunk__8618_8707 = G__8721;
count__8619_8708 = G__8722;
i__8620_8709 = G__8723;
continue;
}
} else
{var vec__8622_8724 = cljs.core.first.call(null,seq__8617_8718__$1);var ev__8112__auto___8725 = cljs.core.nth.call(null,vec__8622_8724,0,null);var func__8113__auto___8726 = cljs.core.nth.call(null,vec__8622_8724,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8725,func__8113__auto___8726);
{
var G__8727 = cljs.core.next.call(null,seq__8617_8718__$1);
var G__8728 = null;
var G__8729 = 0;
var G__8730 = 0;
seq__8617_8706 = G__8727;
chunk__8618_8707 = G__8728;
count__8619_8708 = G__8729;
i__8620_8709 = G__8730;
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
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),n], null));var seq__8629_8731 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Are you sure?",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__8630_8732 = null;var count__8631_8733 = 0;var i__8632_8734 = 0;while(true){
if((i__8632_8734 < count__8631_8733))
{var vec__8633_8735 = cljs.core._nth.call(null,chunk__8630_8732,i__8632_8734);var ev__8112__auto___8736 = cljs.core.nth.call(null,vec__8633_8735,0,null);var func__8113__auto___8737 = cljs.core.nth.call(null,vec__8633_8735,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8736,func__8113__auto___8737);
{
var G__8738 = seq__8629_8731;
var G__8739 = chunk__8630_8732;
var G__8740 = count__8631_8733;
var G__8741 = (i__8632_8734 + 1);
seq__8629_8731 = G__8738;
chunk__8630_8732 = G__8739;
count__8631_8733 = G__8740;
i__8632_8734 = G__8741;
continue;
}
} else
{var temp__4092__auto___8742 = cljs.core.seq.call(null,seq__8629_8731);if(temp__4092__auto___8742)
{var seq__8629_8743__$1 = temp__4092__auto___8742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8629_8743__$1))
{var c__7497__auto___8744 = cljs.core.chunk_first.call(null,seq__8629_8743__$1);{
var G__8745 = cljs.core.chunk_rest.call(null,seq__8629_8743__$1);
var G__8746 = c__7497__auto___8744;
var G__8747 = cljs.core.count.call(null,c__7497__auto___8744);
var G__8748 = 0;
seq__8629_8731 = G__8745;
chunk__8630_8732 = G__8746;
count__8631_8733 = G__8747;
i__8632_8734 = G__8748;
continue;
}
} else
{var vec__8634_8749 = cljs.core.first.call(null,seq__8629_8743__$1);var ev__8112__auto___8750 = cljs.core.nth.call(null,vec__8634_8749,0,null);var func__8113__auto___8751 = cljs.core.nth.call(null,vec__8634_8749,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8750,func__8113__auto___8751);
{
var G__8752 = cljs.core.next.call(null,seq__8629_8743__$1);
var G__8753 = null;
var G__8754 = 0;
var G__8755 = 0;
seq__8629_8731 = G__8752;
chunk__8630_8732 = G__8753;
count__8631_8733 = G__8754;
i__8632_8734 = G__8755;
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
lt.plugins.gitlight.status.ui.file = (function file(p__8635){var vec__8647 = p__8635;var f = cljs.core.nth.call(null,vec__8647,0,null);var t = cljs.core.nth.call(null,vec__8647,1,null);var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(t),cljs.core.str(":"),cljs.core.str(f)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__8648(s__8649){return (new cljs.core.LazySeq(null,(function (){var s__8649__$1 = s__8649;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8649__$1);if(temp__4092__auto__)
{var s__8649__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8649__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8649__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8651 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8650 = 0;while(true){
if((i__8650 < size__7465__auto__))
{var bt = cljs.core._nth.call(null,c__7464__auto__,i__8650);cljs.core.chunk_append.call(null,b__8651,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__8756 = (i__8650 + 1);
i__8650 = G__8756;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8651),iter__8648.call(null,cljs.core.chunk_rest.call(null,s__8649__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8651),null);
}
} else
{var bt = cljs.core.first.call(null,s__8649__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__8648.call(null,cljs.core.rest.call(null,s__8649__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stage","diff","revert","delete","stash","add","ignore"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__8652_8757 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8653_8758 = null;var count__8654_8759 = 0;var i__8655_8760 = 0;while(true){
if((i__8655_8760 < count__8654_8759))
{var vec__8656_8761 = cljs.core._nth.call(null,chunk__8653_8758,i__8655_8760);var ev__8112__auto___8762 = cljs.core.nth.call(null,vec__8656_8761,0,null);var func__8113__auto___8763 = cljs.core.nth.call(null,vec__8656_8761,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8762,func__8113__auto___8763);
{
var G__8764 = seq__8652_8757;
var G__8765 = chunk__8653_8758;
var G__8766 = count__8654_8759;
var G__8767 = (i__8655_8760 + 1);
seq__8652_8757 = G__8764;
chunk__8653_8758 = G__8765;
count__8654_8759 = G__8766;
i__8655_8760 = G__8767;
continue;
}
} else
{var temp__4092__auto___8768 = cljs.core.seq.call(null,seq__8652_8757);if(temp__4092__auto___8768)
{var seq__8652_8769__$1 = temp__4092__auto___8768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8652_8769__$1))
{var c__7497__auto___8770 = cljs.core.chunk_first.call(null,seq__8652_8769__$1);{
var G__8771 = cljs.core.chunk_rest.call(null,seq__8652_8769__$1);
var G__8772 = c__7497__auto___8770;
var G__8773 = cljs.core.count.call(null,c__7497__auto___8770);
var G__8774 = 0;
seq__8652_8757 = G__8771;
chunk__8653_8758 = G__8772;
count__8654_8759 = G__8773;
i__8655_8760 = G__8774;
continue;
}
} else
{var vec__8657_8775 = cljs.core.first.call(null,seq__8652_8769__$1);var ev__8112__auto___8776 = cljs.core.nth.call(null,vec__8657_8775,0,null);var func__8113__auto___8777 = cljs.core.nth.call(null,vec__8657_8775,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8776,func__8113__auto___8777);
{
var G__8778 = cljs.core.next.call(null,seq__8652_8769__$1);
var G__8779 = null;
var G__8780 = 0;
var G__8781 = 0;
seq__8652_8757 = G__8778;
chunk__8653_8758 = G__8779;
count__8654_8759 = G__8780;
i__8655_8760 = G__8781;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("Current branch: "),cljs.core.str(branch)].join('')], null),(function (){var iter__7466__auto__ = (function iter__8676(s__8677){return (new cljs.core.LazySeq(null,(function (){var s__8677__$1 = s__8677;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8677__$1);if(temp__4092__auto__)
{var s__8677__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8677__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8677__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8679 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8678 = 0;while(true){
if((i__8678 < size__7465__auto__))
{var t = cljs.core._nth.call(null,c__7464__auto__,i__8678);cljs.core.chunk_append.call(null,b__8679,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null));
{
var G__8782 = (i__8678 + 1);
i__8678 = G__8782;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8679),iter__8676.call(null,cljs.core.chunk_rest.call(null,s__8677__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8679),null);
}
} else
{var t = cljs.core.first.call(null,s__8677__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null),iter__8676.call(null,cljs.core.rest.call(null,s__8677__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","branch","tag","remote"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__8680(s__8681){return (new cljs.core.LazySeq(null,(function (){var s__8681__$1 = s__8681;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8681__$1);if(temp__4092__auto__)
{var s__8681__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8681__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8681__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8683 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8682 = 0;while(true){
if((i__8682 < size__7465__auto__))
{var vec__8686 = cljs.core._nth.call(null,c__7464__auto__,i__8682);var g = cljs.core.nth.call(null,vec__8686,0,null);var fs = cljs.core.nth.call(null,vec__8686,1,null);cljs.core.chunk_append.call(null,b__8683,lt.plugins.gitlight.status.ui.group.call(null,g,fs));
{
var G__8783 = (i__8682 + 1);
i__8682 = G__8783;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8683),iter__8680.call(null,cljs.core.chunk_rest.call(null,s__8681__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8683),null);
}
} else
{var vec__8687 = cljs.core.first.call(null,s__8681__$2);var g = cljs.core.nth.call(null,vec__8687,0,null);var fs = cljs.core.nth.call(null,vec__8687,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.group.call(null,g,fs),iter__8680.call(null,cljs.core.rest.call(null,s__8681__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,this$);
})()], null)], null));var seq__8688_8784 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8689_8785 = null;var count__8690_8786 = 0;var i__8691_8787 = 0;while(true){
if((i__8691_8787 < count__8690_8786))
{var vec__8692_8788 = cljs.core._nth.call(null,chunk__8689_8785,i__8691_8787);var ev__8112__auto___8789 = cljs.core.nth.call(null,vec__8692_8788,0,null);var func__8113__auto___8790 = cljs.core.nth.call(null,vec__8692_8788,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8789,func__8113__auto___8790);
{
var G__8791 = seq__8688_8784;
var G__8792 = chunk__8689_8785;
var G__8793 = count__8690_8786;
var G__8794 = (i__8691_8787 + 1);
seq__8688_8784 = G__8791;
chunk__8689_8785 = G__8792;
count__8690_8786 = G__8793;
i__8691_8787 = G__8794;
continue;
}
} else
{var temp__4092__auto___8795 = cljs.core.seq.call(null,seq__8688_8784);if(temp__4092__auto___8795)
{var seq__8688_8796__$1 = temp__4092__auto___8795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8688_8796__$1))
{var c__7497__auto___8797 = cljs.core.chunk_first.call(null,seq__8688_8796__$1);{
var G__8798 = cljs.core.chunk_rest.call(null,seq__8688_8796__$1);
var G__8799 = c__7497__auto___8797;
var G__8800 = cljs.core.count.call(null,c__7497__auto___8797);
var G__8801 = 0;
seq__8688_8784 = G__8798;
chunk__8689_8785 = G__8799;
count__8690_8786 = G__8800;
i__8691_8787 = G__8801;
continue;
}
} else
{var vec__8693_8802 = cljs.core.first.call(null,seq__8688_8796__$1);var ev__8112__auto___8803 = cljs.core.nth.call(null,vec__8693_8802,0,null);var func__8113__auto___8804 = cljs.core.nth.call(null,vec__8693_8802,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8803,func__8113__auto___8804);
{
var G__8805 = cljs.core.next.call(null,seq__8688_8796__$1);
var G__8806 = null;
var G__8807 = 0;
var G__8808 = 0;
seq__8688_8784 = G__8805;
chunk__8689_8785 = G__8806;
count__8690_8786 = G__8807;
i__8691_8787 = G__8808;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.git-status","div.git-status",3669381948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__8700_8809 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8701_8810 = null;var count__8702_8811 = 0;var i__8703_8812 = 0;while(true){
if((i__8703_8812 < count__8702_8811))
{var vec__8704_8813 = cljs.core._nth.call(null,chunk__8701_8810,i__8703_8812);var ev__8112__auto___8814 = cljs.core.nth.call(null,vec__8704_8813,0,null);var func__8113__auto___8815 = cljs.core.nth.call(null,vec__8704_8813,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8814,func__8113__auto___8815);
{
var G__8816 = seq__8700_8809;
var G__8817 = chunk__8701_8810;
var G__8818 = count__8702_8811;
var G__8819 = (i__8703_8812 + 1);
seq__8700_8809 = G__8816;
chunk__8701_8810 = G__8817;
count__8702_8811 = G__8818;
i__8703_8812 = G__8819;
continue;
}
} else
{var temp__4092__auto___8820 = cljs.core.seq.call(null,seq__8700_8809);if(temp__4092__auto___8820)
{var seq__8700_8821__$1 = temp__4092__auto___8820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8700_8821__$1))
{var c__7497__auto___8822 = cljs.core.chunk_first.call(null,seq__8700_8821__$1);{
var G__8823 = cljs.core.chunk_rest.call(null,seq__8700_8821__$1);
var G__8824 = c__7497__auto___8822;
var G__8825 = cljs.core.count.call(null,c__7497__auto___8822);
var G__8826 = 0;
seq__8700_8809 = G__8823;
chunk__8701_8810 = G__8824;
count__8702_8811 = G__8825;
i__8703_8812 = G__8826;
continue;
}
} else
{var vec__8705_8827 = cljs.core.first.call(null,seq__8700_8821__$1);var ev__8112__auto___8828 = cljs.core.nth.call(null,vec__8705_8827,0,null);var func__8113__auto___8829 = cljs.core.nth.call(null,vec__8705_8827,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8828,func__8113__auto___8829);
{
var G__8830 = cljs.core.next.call(null,seq__8700_8821__$1);
var G__8831 = null;
var G__8832 = 0;
var G__8833 = 0;
seq__8700_8809 = G__8830;
chunk__8701_8810 = G__8831;
count__8702_8811 = G__8832;
i__8703_8812 = G__8833;
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