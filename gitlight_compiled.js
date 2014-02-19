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
lt.plugins.gitlight.status.back.make_keyworded = (function make_keyworded(keyword_function,data){var vec__8581 = keyword_function;var what_keyword = cljs.core.nth.call(null,vec__8581,0,null);var test_function = cljs.core.nth.call(null,vec__8581,1,null);var which_function = cljs.core.nth.call(null,vec__8581,2,null);var filtered = cljs.core.filter.call(null,test_function,data);var keyworded = cljs.core.map.call(null,((function (filtered){
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__9043_9132 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9044_9133 = null;var count__9045_9134 = 0;var i__9046_9135 = 0;while(true){
if((i__9046_9135 < count__9045_9134))
{var vec__9047_9136 = cljs.core._nth.call(null,chunk__9044_9133,i__9046_9135);var ev__8112__auto___9137 = cljs.core.nth.call(null,vec__9047_9136,0,null);var func__8113__auto___9138 = cljs.core.nth.call(null,vec__9047_9136,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9137,func__8113__auto___9138);
{
var G__9139 = seq__9043_9132;
var G__9140 = chunk__9044_9133;
var G__9141 = count__9045_9134;
var G__9142 = (i__9046_9135 + 1);
seq__9043_9132 = G__9139;
chunk__9044_9133 = G__9140;
count__9045_9134 = G__9141;
i__9046_9135 = G__9142;
continue;
}
} else
{var temp__4092__auto___9143 = cljs.core.seq.call(null,seq__9043_9132);if(temp__4092__auto___9143)
{var seq__9043_9144__$1 = temp__4092__auto___9143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9043_9144__$1))
{var c__7497__auto___9145 = cljs.core.chunk_first.call(null,seq__9043_9144__$1);{
var G__9146 = cljs.core.chunk_rest.call(null,seq__9043_9144__$1);
var G__9147 = c__7497__auto___9145;
var G__9148 = cljs.core.count.call(null,c__7497__auto___9145);
var G__9149 = 0;
seq__9043_9132 = G__9146;
chunk__9044_9133 = G__9147;
count__9045_9134 = G__9148;
i__9046_9135 = G__9149;
continue;
}
} else
{var vec__9048_9150 = cljs.core.first.call(null,seq__9043_9144__$1);var ev__8112__auto___9151 = cljs.core.nth.call(null,vec__9048_9150,0,null);var func__8113__auto___9152 = cljs.core.nth.call(null,vec__9048_9150,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9151,func__8113__auto___9152);
{
var G__9153 = cljs.core.next.call(null,seq__9043_9144__$1);
var G__9154 = null;
var G__9155 = 0;
var G__9156 = 0;
seq__9043_9132 = G__9153;
chunk__9044_9133 = G__9154;
count__9045_9134 = G__9155;
i__9046_9135 = G__9156;
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
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),n], null));var seq__9055_9157 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Are you sure?",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__9056_9158 = null;var count__9057_9159 = 0;var i__9058_9160 = 0;while(true){
if((i__9058_9160 < count__9057_9159))
{var vec__9059_9161 = cljs.core._nth.call(null,chunk__9056_9158,i__9058_9160);var ev__8112__auto___9162 = cljs.core.nth.call(null,vec__9059_9161,0,null);var func__8113__auto___9163 = cljs.core.nth.call(null,vec__9059_9161,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9162,func__8113__auto___9163);
{
var G__9164 = seq__9055_9157;
var G__9165 = chunk__9056_9158;
var G__9166 = count__9057_9159;
var G__9167 = (i__9058_9160 + 1);
seq__9055_9157 = G__9164;
chunk__9056_9158 = G__9165;
count__9057_9159 = G__9166;
i__9058_9160 = G__9167;
continue;
}
} else
{var temp__4092__auto___9168 = cljs.core.seq.call(null,seq__9055_9157);if(temp__4092__auto___9168)
{var seq__9055_9169__$1 = temp__4092__auto___9168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9055_9169__$1))
{var c__7497__auto___9170 = cljs.core.chunk_first.call(null,seq__9055_9169__$1);{
var G__9171 = cljs.core.chunk_rest.call(null,seq__9055_9169__$1);
var G__9172 = c__7497__auto___9170;
var G__9173 = cljs.core.count.call(null,c__7497__auto___9170);
var G__9174 = 0;
seq__9055_9157 = G__9171;
chunk__9056_9158 = G__9172;
count__9057_9159 = G__9173;
i__9058_9160 = G__9174;
continue;
}
} else
{var vec__9060_9175 = cljs.core.first.call(null,seq__9055_9169__$1);var ev__8112__auto___9176 = cljs.core.nth.call(null,vec__9060_9175,0,null);var func__8113__auto___9177 = cljs.core.nth.call(null,vec__9060_9175,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9176,func__8113__auto___9177);
{
var G__9178 = cljs.core.next.call(null,seq__9055_9169__$1);
var G__9179 = null;
var G__9180 = 0;
var G__9181 = 0;
seq__9055_9157 = G__9178;
chunk__9056_9158 = G__9179;
count__9057_9159 = G__9180;
i__9058_9160 = G__9181;
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__9061){var vec__9073 = p__9061;var f = cljs.core.nth.call(null,vec__9073,0,null);var t = cljs.core.nth.call(null,vec__9073,1,null);var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),[cljs.core.str(t),cljs.core.str(":"),cljs.core.str(f)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__9074(s__9075){return (new cljs.core.LazySeq(null,(function (){var s__9075__$1 = s__9075;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9075__$1);if(temp__4092__auto__)
{var s__9075__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9075__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9075__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9077 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9076 = 0;while(true){
if((i__9076 < size__7465__auto__))
{var bt = cljs.core._nth.call(null,c__7464__auto__,i__9076);cljs.core.chunk_append.call(null,b__9077,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__9182 = (i__9076 + 1);
i__9076 = G__9182;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9077),iter__9074.call(null,cljs.core.chunk_rest.call(null,s__9075__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9077),null);
}
} else
{var bt = cljs.core.first.call(null,s__9075__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__9074.call(null,cljs.core.rest.call(null,s__9075__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__9078_9183 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9079_9184 = null;var count__9080_9185 = 0;var i__9081_9186 = 0;while(true){
if((i__9081_9186 < count__9080_9185))
{var vec__9082_9187 = cljs.core._nth.call(null,chunk__9079_9184,i__9081_9186);var ev__8112__auto___9188 = cljs.core.nth.call(null,vec__9082_9187,0,null);var func__8113__auto___9189 = cljs.core.nth.call(null,vec__9082_9187,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9188,func__8113__auto___9189);
{
var G__9190 = seq__9078_9183;
var G__9191 = chunk__9079_9184;
var G__9192 = count__9080_9185;
var G__9193 = (i__9081_9186 + 1);
seq__9078_9183 = G__9190;
chunk__9079_9184 = G__9191;
count__9080_9185 = G__9192;
i__9081_9186 = G__9193;
continue;
}
} else
{var temp__4092__auto___9194 = cljs.core.seq.call(null,seq__9078_9183);if(temp__4092__auto___9194)
{var seq__9078_9195__$1 = temp__4092__auto___9194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9078_9195__$1))
{var c__7497__auto___9196 = cljs.core.chunk_first.call(null,seq__9078_9195__$1);{
var G__9197 = cljs.core.chunk_rest.call(null,seq__9078_9195__$1);
var G__9198 = c__7497__auto___9196;
var G__9199 = cljs.core.count.call(null,c__7497__auto___9196);
var G__9200 = 0;
seq__9078_9183 = G__9197;
chunk__9079_9184 = G__9198;
count__9080_9185 = G__9199;
i__9081_9186 = G__9200;
continue;
}
} else
{var vec__9083_9201 = cljs.core.first.call(null,seq__9078_9195__$1);var ev__8112__auto___9202 = cljs.core.nth.call(null,vec__9083_9201,0,null);var func__8113__auto___9203 = cljs.core.nth.call(null,vec__9083_9201,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9202,func__8113__auto___9203);
{
var G__9204 = cljs.core.next.call(null,seq__9078_9195__$1);
var G__9205 = null;
var G__9206 = 0;
var G__9207 = 0;
seq__9078_9183 = G__9204;
chunk__9079_9184 = G__9205;
count__9080_9185 = G__9206;
i__9081_9186 = G__9207;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("Branch: ")].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),branch], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Root: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__9102(s__9103){return (new cljs.core.LazySeq(null,(function (){var s__9103__$1 = s__9103;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9103__$1);if(temp__4092__auto__)
{var s__9103__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9103__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9103__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9105 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9104 = 0;while(true){
if((i__9104 < size__7465__auto__))
{var t = cljs.core._nth.call(null,c__7464__auto__,i__9104);cljs.core.chunk_append.call(null,b__9105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null));
{
var G__9208 = (i__9104 + 1);
i__9104 = G__9208;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9105),iter__9102.call(null,cljs.core.chunk_rest.call(null,s__9103__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9105),null);
}
} else
{var t = cljs.core.first.call(null,s__9103__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null),iter__9102.call(null,cljs.core.rest.call(null,s__9103__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","tag"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__9106(s__9107){return (new cljs.core.LazySeq(null,(function (){var s__9107__$1 = s__9107;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9107__$1);if(temp__4092__auto__)
{var s__9107__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9107__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9107__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9109 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9108 = 0;while(true){
if((i__9108 < size__7465__auto__))
{var vec__9112 = cljs.core._nth.call(null,c__7464__auto__,i__9108);var g = cljs.core.nth.call(null,vec__9112,0,null);var fs = cljs.core.nth.call(null,vec__9112,1,null);cljs.core.chunk_append.call(null,b__9109,lt.plugins.gitlight.status.ui.group.call(null,g,fs));
{
var G__9209 = (i__9108 + 1);
i__9108 = G__9209;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9109),iter__9106.call(null,cljs.core.chunk_rest.call(null,s__9107__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9109),null);
}
} else
{var vec__9113 = cljs.core.first.call(null,s__9107__$2);var g = cljs.core.nth.call(null,vec__9113,0,null);var fs = cljs.core.nth.call(null,vec__9113,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.group.call(null,g,fs),iter__9106.call(null,cljs.core.rest.call(null,s__9107__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,this$);
})()], null)], null));var seq__9114_9210 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9115_9211 = null;var count__9116_9212 = 0;var i__9117_9213 = 0;while(true){
if((i__9117_9213 < count__9116_9212))
{var vec__9118_9214 = cljs.core._nth.call(null,chunk__9115_9211,i__9117_9213);var ev__8112__auto___9215 = cljs.core.nth.call(null,vec__9118_9214,0,null);var func__8113__auto___9216 = cljs.core.nth.call(null,vec__9118_9214,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9215,func__8113__auto___9216);
{
var G__9217 = seq__9114_9210;
var G__9218 = chunk__9115_9211;
var G__9219 = count__9116_9212;
var G__9220 = (i__9117_9213 + 1);
seq__9114_9210 = G__9217;
chunk__9115_9211 = G__9218;
count__9116_9212 = G__9219;
i__9117_9213 = G__9220;
continue;
}
} else
{var temp__4092__auto___9221 = cljs.core.seq.call(null,seq__9114_9210);if(temp__4092__auto___9221)
{var seq__9114_9222__$1 = temp__4092__auto___9221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9114_9222__$1))
{var c__7497__auto___9223 = cljs.core.chunk_first.call(null,seq__9114_9222__$1);{
var G__9224 = cljs.core.chunk_rest.call(null,seq__9114_9222__$1);
var G__9225 = c__7497__auto___9223;
var G__9226 = cljs.core.count.call(null,c__7497__auto___9223);
var G__9227 = 0;
seq__9114_9210 = G__9224;
chunk__9115_9211 = G__9225;
count__9116_9212 = G__9226;
i__9117_9213 = G__9227;
continue;
}
} else
{var vec__9119_9228 = cljs.core.first.call(null,seq__9114_9222__$1);var ev__8112__auto___9229 = cljs.core.nth.call(null,vec__9119_9228,0,null);var func__8113__auto___9230 = cljs.core.nth.call(null,vec__9119_9228,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9229,func__8113__auto___9230);
{
var G__9231 = cljs.core.next.call(null,seq__9114_9222__$1);
var G__9232 = null;
var G__9233 = 0;
var G__9234 = 0;
seq__9114_9210 = G__9231;
chunk__9115_9211 = G__9232;
count__9116_9212 = G__9233;
i__9117_9213 = G__9234;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__9126_9235 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9127_9236 = null;var count__9128_9237 = 0;var i__9129_9238 = 0;while(true){
if((i__9129_9238 < count__9128_9237))
{var vec__9130_9239 = cljs.core._nth.call(null,chunk__9127_9236,i__9129_9238);var ev__8112__auto___9240 = cljs.core.nth.call(null,vec__9130_9239,0,null);var func__8113__auto___9241 = cljs.core.nth.call(null,vec__9130_9239,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9240,func__8113__auto___9241);
{
var G__9242 = seq__9126_9235;
var G__9243 = chunk__9127_9236;
var G__9244 = count__9128_9237;
var G__9245 = (i__9129_9238 + 1);
seq__9126_9235 = G__9242;
chunk__9127_9236 = G__9243;
count__9128_9237 = G__9244;
i__9129_9238 = G__9245;
continue;
}
} else
{var temp__4092__auto___9246 = cljs.core.seq.call(null,seq__9126_9235);if(temp__4092__auto___9246)
{var seq__9126_9247__$1 = temp__4092__auto___9246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9126_9247__$1))
{var c__7497__auto___9248 = cljs.core.chunk_first.call(null,seq__9126_9247__$1);{
var G__9249 = cljs.core.chunk_rest.call(null,seq__9126_9247__$1);
var G__9250 = c__7497__auto___9248;
var G__9251 = cljs.core.count.call(null,c__7497__auto___9248);
var G__9252 = 0;
seq__9126_9235 = G__9249;
chunk__9127_9236 = G__9250;
count__9128_9237 = G__9251;
i__9129_9238 = G__9252;
continue;
}
} else
{var vec__9131_9253 = cljs.core.first.call(null,seq__9126_9247__$1);var ev__8112__auto___9254 = cljs.core.nth.call(null,vec__9131_9253,0,null);var func__8113__auto___9255 = cljs.core.nth.call(null,vec__9131_9253,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9254,func__8113__auto___9255);
{
var G__9256 = cljs.core.next.call(null,seq__9126_9247__$1);
var G__9257 = null;
var G__9258 = 0;
var G__9259 = 0;
seq__9126_9235 = G__9256;
chunk__9127_9236 = G__9257;
count__9128_9237 = G__9258;
i__9129_9238 = G__9259;
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