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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__9054_9143 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9055_9144 = null;var count__9056_9145 = 0;var i__9057_9146 = 0;while(true){
if((i__9057_9146 < count__9056_9145))
{var vec__9058_9147 = cljs.core._nth.call(null,chunk__9055_9144,i__9057_9146);var ev__8112__auto___9148 = cljs.core.nth.call(null,vec__9058_9147,0,null);var func__8113__auto___9149 = cljs.core.nth.call(null,vec__9058_9147,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9148,func__8113__auto___9149);
{
var G__9150 = seq__9054_9143;
var G__9151 = chunk__9055_9144;
var G__9152 = count__9056_9145;
var G__9153 = (i__9057_9146 + 1);
seq__9054_9143 = G__9150;
chunk__9055_9144 = G__9151;
count__9056_9145 = G__9152;
i__9057_9146 = G__9153;
continue;
}
} else
{var temp__4092__auto___9154 = cljs.core.seq.call(null,seq__9054_9143);if(temp__4092__auto___9154)
{var seq__9054_9155__$1 = temp__4092__auto___9154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9054_9155__$1))
{var c__7497__auto___9156 = cljs.core.chunk_first.call(null,seq__9054_9155__$1);{
var G__9157 = cljs.core.chunk_rest.call(null,seq__9054_9155__$1);
var G__9158 = c__7497__auto___9156;
var G__9159 = cljs.core.count.call(null,c__7497__auto___9156);
var G__9160 = 0;
seq__9054_9143 = G__9157;
chunk__9055_9144 = G__9158;
count__9056_9145 = G__9159;
i__9057_9146 = G__9160;
continue;
}
} else
{var vec__9059_9161 = cljs.core.first.call(null,seq__9054_9155__$1);var ev__8112__auto___9162 = cljs.core.nth.call(null,vec__9059_9161,0,null);var func__8113__auto___9163 = cljs.core.nth.call(null,vec__9059_9161,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9162,func__8113__auto___9163);
{
var G__9164 = cljs.core.next.call(null,seq__9054_9155__$1);
var G__9165 = null;
var G__9166 = 0;
var G__9167 = 0;
seq__9054_9143 = G__9164;
chunk__9055_9144 = G__9165;
count__9056_9145 = G__9166;
i__9057_9146 = G__9167;
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
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),n], null));var seq__9066_9168 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Are you sure?",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__9067_9169 = null;var count__9068_9170 = 0;var i__9069_9171 = 0;while(true){
if((i__9069_9171 < count__9068_9170))
{var vec__9070_9172 = cljs.core._nth.call(null,chunk__9067_9169,i__9069_9171);var ev__8112__auto___9173 = cljs.core.nth.call(null,vec__9070_9172,0,null);var func__8113__auto___9174 = cljs.core.nth.call(null,vec__9070_9172,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9173,func__8113__auto___9174);
{
var G__9175 = seq__9066_9168;
var G__9176 = chunk__9067_9169;
var G__9177 = count__9068_9170;
var G__9178 = (i__9069_9171 + 1);
seq__9066_9168 = G__9175;
chunk__9067_9169 = G__9176;
count__9068_9170 = G__9177;
i__9069_9171 = G__9178;
continue;
}
} else
{var temp__4092__auto___9179 = cljs.core.seq.call(null,seq__9066_9168);if(temp__4092__auto___9179)
{var seq__9066_9180__$1 = temp__4092__auto___9179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9066_9180__$1))
{var c__7497__auto___9181 = cljs.core.chunk_first.call(null,seq__9066_9180__$1);{
var G__9182 = cljs.core.chunk_rest.call(null,seq__9066_9180__$1);
var G__9183 = c__7497__auto___9181;
var G__9184 = cljs.core.count.call(null,c__7497__auto___9181);
var G__9185 = 0;
seq__9066_9168 = G__9182;
chunk__9067_9169 = G__9183;
count__9068_9170 = G__9184;
i__9069_9171 = G__9185;
continue;
}
} else
{var vec__9071_9186 = cljs.core.first.call(null,seq__9066_9180__$1);var ev__8112__auto___9187 = cljs.core.nth.call(null,vec__9071_9186,0,null);var func__8113__auto___9188 = cljs.core.nth.call(null,vec__9071_9186,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9187,func__8113__auto___9188);
{
var G__9189 = cljs.core.next.call(null,seq__9066_9180__$1);
var G__9190 = null;
var G__9191 = 0;
var G__9192 = 0;
seq__9066_9168 = G__9189;
chunk__9067_9169 = G__9190;
count__9068_9170 = G__9191;
i__9069_9171 = G__9192;
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__9072){var vec__9084 = p__9072;var f = cljs.core.nth.call(null,vec__9084,0,null);var t = cljs.core.nth.call(null,vec__9084,1,null);var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),[cljs.core.str(cljs.core.first.call(null,cljs.core.name.call(null,t)).toUpperCase()),cljs.core.str(" "),cljs.core.str(f)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__9085(s__9086){return (new cljs.core.LazySeq(null,(function (){var s__9086__$1 = s__9086;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9086__$1);if(temp__4092__auto__)
{var s__9086__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9086__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9086__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9088 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9087 = 0;while(true){
if((i__9087 < size__7465__auto__))
{var bt = cljs.core._nth.call(null,c__7464__auto__,i__9087);cljs.core.chunk_append.call(null,b__9088,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__9193 = (i__9087 + 1);
i__9087 = G__9193;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9088),iter__9085.call(null,cljs.core.chunk_rest.call(null,s__9086__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9088),null);
}
} else
{var bt = cljs.core.first.call(null,s__9086__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__9085.call(null,cljs.core.rest.call(null,s__9086__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__9089_9194 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9090_9195 = null;var count__9091_9196 = 0;var i__9092_9197 = 0;while(true){
if((i__9092_9197 < count__9091_9196))
{var vec__9093_9198 = cljs.core._nth.call(null,chunk__9090_9195,i__9092_9197);var ev__8112__auto___9199 = cljs.core.nth.call(null,vec__9093_9198,0,null);var func__8113__auto___9200 = cljs.core.nth.call(null,vec__9093_9198,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9199,func__8113__auto___9200);
{
var G__9201 = seq__9089_9194;
var G__9202 = chunk__9090_9195;
var G__9203 = count__9091_9196;
var G__9204 = (i__9092_9197 + 1);
seq__9089_9194 = G__9201;
chunk__9090_9195 = G__9202;
count__9091_9196 = G__9203;
i__9092_9197 = G__9204;
continue;
}
} else
{var temp__4092__auto___9205 = cljs.core.seq.call(null,seq__9089_9194);if(temp__4092__auto___9205)
{var seq__9089_9206__$1 = temp__4092__auto___9205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9089_9206__$1))
{var c__7497__auto___9207 = cljs.core.chunk_first.call(null,seq__9089_9206__$1);{
var G__9208 = cljs.core.chunk_rest.call(null,seq__9089_9206__$1);
var G__9209 = c__7497__auto___9207;
var G__9210 = cljs.core.count.call(null,c__7497__auto___9207);
var G__9211 = 0;
seq__9089_9194 = G__9208;
chunk__9090_9195 = G__9209;
count__9091_9196 = G__9210;
i__9092_9197 = G__9211;
continue;
}
} else
{var vec__9094_9212 = cljs.core.first.call(null,seq__9089_9206__$1);var ev__8112__auto___9213 = cljs.core.nth.call(null,vec__9094_9212,0,null);var func__8113__auto___9214 = cljs.core.nth.call(null,vec__9094_9212,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9213,func__8113__auto___9214);
{
var G__9215 = cljs.core.next.call(null,seq__9089_9206__$1);
var G__9216 = null;
var G__9217 = 0;
var G__9218 = 0;
seq__9089_9194 = G__9215;
chunk__9090_9195 = G__9216;
count__9091_9196 = G__9217;
i__9092_9197 = G__9218;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("Branch: ")].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),branch], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Root: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__9113(s__9114){return (new cljs.core.LazySeq(null,(function (){var s__9114__$1 = s__9114;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9114__$1);if(temp__4092__auto__)
{var s__9114__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9114__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9114__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9116 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9115 = 0;while(true){
if((i__9115 < size__7465__auto__))
{var t = cljs.core._nth.call(null,c__7464__auto__,i__9115);cljs.core.chunk_append.call(null,b__9116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null));
{
var G__9219 = (i__9115 + 1);
i__9115 = G__9219;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9116),iter__9113.call(null,cljs.core.chunk_rest.call(null,s__9114__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9116),null);
}
} else
{var t = cljs.core.first.call(null,s__9114__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null),iter__9113.call(null,cljs.core.rest.call(null,s__9114__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","tag"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__9117(s__9118){return (new cljs.core.LazySeq(null,(function (){var s__9118__$1 = s__9118;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9118__$1);if(temp__4092__auto__)
{var s__9118__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9118__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9118__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9120 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9119 = 0;while(true){
if((i__9119 < size__7465__auto__))
{var vec__9123 = cljs.core._nth.call(null,c__7464__auto__,i__9119);var g = cljs.core.nth.call(null,vec__9123,0,null);var fs = cljs.core.nth.call(null,vec__9123,1,null);cljs.core.chunk_append.call(null,b__9120,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__9220 = (i__9119 + 1);
i__9119 = G__9220;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9120),iter__9117.call(null,cljs.core.chunk_rest.call(null,s__9118__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9120),null);
}
} else
{var vec__9124 = cljs.core.first.call(null,s__9118__$2);var g = cljs.core.nth.call(null,vec__9124,0,null);var fs = cljs.core.nth.call(null,vec__9124,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__9117.call(null,cljs.core.rest.call(null,s__9118__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,this$);
})()], null)], null));var seq__9125_9221 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9126_9222 = null;var count__9127_9223 = 0;var i__9128_9224 = 0;while(true){
if((i__9128_9224 < count__9127_9223))
{var vec__9129_9225 = cljs.core._nth.call(null,chunk__9126_9222,i__9128_9224);var ev__8112__auto___9226 = cljs.core.nth.call(null,vec__9129_9225,0,null);var func__8113__auto___9227 = cljs.core.nth.call(null,vec__9129_9225,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9226,func__8113__auto___9227);
{
var G__9228 = seq__9125_9221;
var G__9229 = chunk__9126_9222;
var G__9230 = count__9127_9223;
var G__9231 = (i__9128_9224 + 1);
seq__9125_9221 = G__9228;
chunk__9126_9222 = G__9229;
count__9127_9223 = G__9230;
i__9128_9224 = G__9231;
continue;
}
} else
{var temp__4092__auto___9232 = cljs.core.seq.call(null,seq__9125_9221);if(temp__4092__auto___9232)
{var seq__9125_9233__$1 = temp__4092__auto___9232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9125_9233__$1))
{var c__7497__auto___9234 = cljs.core.chunk_first.call(null,seq__9125_9233__$1);{
var G__9235 = cljs.core.chunk_rest.call(null,seq__9125_9233__$1);
var G__9236 = c__7497__auto___9234;
var G__9237 = cljs.core.count.call(null,c__7497__auto___9234);
var G__9238 = 0;
seq__9125_9221 = G__9235;
chunk__9126_9222 = G__9236;
count__9127_9223 = G__9237;
i__9128_9224 = G__9238;
continue;
}
} else
{var vec__9130_9239 = cljs.core.first.call(null,seq__9125_9233__$1);var ev__8112__auto___9240 = cljs.core.nth.call(null,vec__9130_9239,0,null);var func__8113__auto___9241 = cljs.core.nth.call(null,vec__9130_9239,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9240,func__8113__auto___9241);
{
var G__9242 = cljs.core.next.call(null,seq__9125_9233__$1);
var G__9243 = null;
var G__9244 = 0;
var G__9245 = 0;
seq__9125_9221 = G__9242;
chunk__9126_9222 = G__9243;
count__9127_9223 = G__9244;
i__9128_9224 = G__9245;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__9137_9246 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9138_9247 = null;var count__9139_9248 = 0;var i__9140_9249 = 0;while(true){
if((i__9140_9249 < count__9139_9248))
{var vec__9141_9250 = cljs.core._nth.call(null,chunk__9138_9247,i__9140_9249);var ev__8112__auto___9251 = cljs.core.nth.call(null,vec__9141_9250,0,null);var func__8113__auto___9252 = cljs.core.nth.call(null,vec__9141_9250,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9251,func__8113__auto___9252);
{
var G__9253 = seq__9137_9246;
var G__9254 = chunk__9138_9247;
var G__9255 = count__9139_9248;
var G__9256 = (i__9140_9249 + 1);
seq__9137_9246 = G__9253;
chunk__9138_9247 = G__9254;
count__9139_9248 = G__9255;
i__9140_9249 = G__9256;
continue;
}
} else
{var temp__4092__auto___9257 = cljs.core.seq.call(null,seq__9137_9246);if(temp__4092__auto___9257)
{var seq__9137_9258__$1 = temp__4092__auto___9257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9137_9258__$1))
{var c__7497__auto___9259 = cljs.core.chunk_first.call(null,seq__9137_9258__$1);{
var G__9260 = cljs.core.chunk_rest.call(null,seq__9137_9258__$1);
var G__9261 = c__7497__auto___9259;
var G__9262 = cljs.core.count.call(null,c__7497__auto___9259);
var G__9263 = 0;
seq__9137_9246 = G__9260;
chunk__9138_9247 = G__9261;
count__9139_9248 = G__9262;
i__9140_9249 = G__9263;
continue;
}
} else
{var vec__9142_9264 = cljs.core.first.call(null,seq__9137_9258__$1);var ev__8112__auto___9265 = cljs.core.nth.call(null,vec__9142_9264,0,null);var func__8113__auto___9266 = cljs.core.nth.call(null,vec__9142_9264,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9265,func__8113__auto___9266);
{
var G__9267 = cljs.core.next.call(null,seq__9137_9258__$1);
var G__9268 = null;
var G__9269 = 0;
var G__9270 = 0;
seq__9137_9246 = G__9267;
chunk__9138_9247 = G__9268;
count__9139_9248 = G__9269;
i__9140_9249 = G__9270;
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