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
lt.plugins.gitlight.status.back.get_cwd = (function get_cwd(){var temp__4090__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var l = temp__4090__auto__;var filename = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,l)));return lt.objs.files.parent.call(null,filename);
} else
{return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't guess git root",new cljs.core.Keyword(null,"body","body",1016933652),"Please run `git: status' again with file under git repo in editor tab",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
}
});
lt.plugins.gitlight.status.back.get_branch = (function get_branch(data){return cljs.core.second.call(null,clojure.string.split.call(null,data,/On branch /));
});
lt.plugins.gitlight.status.back.delete_inside_parens = (function delete_inside_parens(data){var line_with_no_hash = clojure.string.replace_first.call(null,data,/#/," ");var trimmed = clojure.string.trim.call(null,line_with_no_hash);return clojure.string.replace.call(null,[cljs.core.str(trimmed)].join(''),/^\(.*\)$/,"");
});
lt.plugins.gitlight.status.back.get_files = (function get_files(data){var first_line_fix = [cljs.core.str("#"),cljs.core.str(data)].join('');var splitted = clojure.string.split_lines.call(null,first_line_fix);var filtered = cljs.core.filter.call(null,((function (first_line_fix,splitted){
return (function (p1__9261_SHARP_){return p1__9261_SHARP_.startsWith("#");
});})(first_line_fix,splitted))
,splitted);var no_parens = cljs.core.map.call(null,lt.plugins.gitlight.status.back.delete_inside_parens,filtered);return cljs.core.filter.call(null,(function (p1__9262_SHARP_){return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,p1__9262_SHARP_));
}),no_parens);
});
lt.plugins.gitlight.status.back.git_status = (function git_status(){var dir = lt.plugins.gitlight.status.back.get_cwd.call(null);return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),"/usr/bin/git",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",4416389988),cljs.core.keyword.call(null,"--porcelain"),cljs.core.keyword.call(null,"--branch")], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),dir,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.status.back.shell_git_out], null));
});
lt.plugins.gitlight.status.back.split_and_swap = (function split_and_swap(filename){var vec__9264 = clojure.string.split.call(null,filename,/:/,2);var a = cljs.core.nth.call(null,vec__9264,0,null);var b = cljs.core.nth.call(null,vec__9264,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim.call(null,b),cljs.core.keyword.call(null,a)], null);
});
lt.plugins.gitlight.status.back.split_property = (function split_property(filenames){return cljs.core.map.call(null,lt.plugins.gitlight.status.back.split_and_swap,filenames);
});
lt.plugins.gitlight.status.back.make_a_category = (function make_a_category(data){var cat = cljs.core.first.call(null,data);var filenames = cljs.core.rest.call(null,data);if(cljs.core._EQ_.call(null,cat,"to be committed:"))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to_commit","to_commit",3334658797),lt.plugins.gitlight.status.back.split_property.call(null,filenames)], null);
} else
{if(cljs.core._EQ_.call(null,cat,"not staged for commit:"))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not_staged","not_staged",4226785156),lt.plugins.gitlight.status.back.split_property.call(null,filenames)], null);
} else
{if(cljs.core._EQ_.call(null,cat,"files:"))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untracked","untracked",1658310115),cljs.core.map.call(null,(function (f){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.Keyword(null,"untracked","untracked",1658310115)], null);
}),filenames)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown","unknown",729063356),cljs.core.map.call(null,(function (f){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.Keyword(null,"unknown","unknown",729063356)], null);
}),filenames)], null);
} else
{return null;
}
}
}
}
});
lt.plugins.gitlight.status.back.in_sequence_QMARK_ = (function in_sequence_QMARK_(haystack,needle){if((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([needle], true),cljs.core.seq.call(null,haystack)) == null))
{return null;
} else
{return true;
}
});
lt.plugins.gitlight.status.back.keywording_file_status = (function keywording_file_status(status,file){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(file)].join(''),cljs.core.keyword.call(null,((cljs.core._EQ_.call(null,status,"#"))?"branch-name":((cljs.core._EQ_.call(null,status,"A"))?"new file":((cljs.core._EQ_.call(null,status,"M"))?"modified":((cljs.core._EQ_.call(null,status,"D"))?"deleted":((cljs.core._EQ_.call(null,status,"R"))?"renamed":((cljs.core._EQ_.call(null,status,"C"))?"copied":((cljs.core._EQ_.call(null,status,"?"))?"untracked":((cljs.core._EQ_.call(null,status,"#"))?"branch":((cljs.core._EQ_.call(null,status,"!"))?"ignored":null))))))))))], null);
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
lt.plugins.gitlight.status.back.make_ignored = (function make_ignored(data){var filtered = cljs.core.filter.call(null,(function (d){return cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,d));
}),data);var keyworded = cljs.core.map.call(null,((function (filtered){
return (function (f){return lt.plugins.gitlight.status.back.keywording_file_status.call(null,cljs.core.second.call(null,f),cljs.core.rest.call(null,cljs.core.rest.call(null,f)));
});})(filtered))
,filtered);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignored","ignored",2766319684),keyworded], null);
});
lt.plugins.gitlight.status.back.parse_line = (function parse_line(line){var X = cljs.core.first.call(null,line);var Y = cljs.core.second.call(null,line);var filename = cljs.core.subs.call(null,line,3);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [X,Y,filename], null);
});
lt.plugins.gitlight.status.back.make_status = (function make_status(data){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7469__auto__ = (function iter__9269(s__9270){return (new cljs.core.LazySeq(null,(function (){var s__9270__$1 = s__9270;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9270__$1);if(temp__4092__auto__)
{var s__9270__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9270__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__9270__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__9272 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__9271 = 0;while(true){
if((i__9271 < size__7468__auto__))
{var f = cljs.core._nth.call(null,c__7467__auto__,i__9271);cljs.core.chunk_append.call(null,b__9272,f.call(null,data));
{
var G__9273 = (i__9271 + 1);
i__9271 = G__9273;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9272),iter__9269.call(null,cljs.core.chunk_rest.call(null,s__9270__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9272),null);
}
} else
{var f = cljs.core.first.call(null,s__9270__$2);return cljs.core.cons.call(null,f.call(null,data),iter__9269.call(null,cljs.core.rest.call(null,s__9270__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.status.back.make_to_commit,lt.plugins.gitlight.status.back.make_not_staged,lt.plugins.gitlight.status.back.make_untracked,lt.plugins.gitlight.status.back.make_ignored], null));
})());
});
lt.plugins.gitlight.status.back.parse_porcelain = (function parse_porcelain(data){var splitted = clojure.string.split_lines.call(null,data.toString());var parsed = cljs.core.map.call(null,lt.plugins.gitlight.status.back.parse_line,splitted);var branch = cljs.core.first.call(null,parsed);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),[cljs.core.str(cljs.core.rest.call(null,cljs.core.rest.call(null,branch)))].join(''),new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.make_status.call(null,cljs.core.rest.call(null,parsed))], null);
});
lt.plugins.gitlight.status.back.mangle_data = (function mangle_data(data){var splitted = clojure.string.split.call(null,data.toString(),/#/,3);var branch_line = cljs.core.second.call(null,splitted);var splitted_by_changes = clojure.string.split.call(null,cljs.core.nth.call(null,splitted,2),/Changes|Untracked/);var grouped_by_fields = cljs.core.rest.call(null,cljs.core.map.call(null,lt.plugins.gitlight.status.back.get_files,splitted_by_changes));cljs.core.println.call(null,lt.plugins.gitlight.status.back.parse_porcelain.call(null,data));
return cljs.core.println.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),lt.plugins.gitlight.status.back.get_branch.call(null,branch_line),new cljs.core.Keyword(null,"status","status",4416389988),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,lt.plugins.gitlight.status.back.make_a_category,grouped_by_fields))], null));
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
lt.plugins.gitlight.status.ui.dom_scroll_width = (function dom_scroll_width(n){return n.scrollWidth;
});
lt.plugins.gitlight.status.ui.resize_to_content = (function resize_to_content(parent,child){return lt.plugins.gitlight.status.ui.resize_rightbar.call(null,((lt.util.dom.width.call(null,parent) - lt.util.dom.width.call(null,child)) + lt.plugins.gitlight.status.ui.dom_scroll_width.call(null,child)));
});
lt.plugins.gitlight.status.ui.dom_trunkate = (function dom_trunkate(node){return node.innerHTML = "";
});
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,lt.plugins.gitlight.status.ui.file,files)], null)], null));var seq__8720_8809 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8721_8810 = null;var count__8722_8811 = 0;var i__8723_8812 = 0;while(true){
if((i__8723_8812 < count__8722_8811))
{var vec__8724_8813 = cljs.core._nth.call(null,chunk__8721_8810,i__8723_8812);var ev__8121__auto___8814 = cljs.core.nth.call(null,vec__8724_8813,0,null);var func__8122__auto___8815 = cljs.core.nth.call(null,vec__8724_8813,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8814,func__8122__auto___8815);
{
var G__8816 = seq__8720_8809;
var G__8817 = chunk__8721_8810;
var G__8818 = count__8722_8811;
var G__8819 = (i__8723_8812 + 1);
seq__8720_8809 = G__8816;
chunk__8721_8810 = G__8817;
count__8722_8811 = G__8818;
i__8723_8812 = G__8819;
continue;
}
} else
{var temp__4092__auto___8820 = cljs.core.seq.call(null,seq__8720_8809);if(temp__4092__auto___8820)
{var seq__8720_8821__$1 = temp__4092__auto___8820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8720_8821__$1))
{var c__7500__auto___8822 = cljs.core.chunk_first.call(null,seq__8720_8821__$1);{
var G__8823 = cljs.core.chunk_rest.call(null,seq__8720_8821__$1);
var G__8824 = c__7500__auto___8822;
var G__8825 = cljs.core.count.call(null,c__7500__auto___8822);
var G__8826 = 0;
seq__8720_8809 = G__8823;
chunk__8721_8810 = G__8824;
count__8722_8811 = G__8825;
i__8723_8812 = G__8826;
continue;
}
} else
{var vec__8725_8827 = cljs.core.first.call(null,seq__8720_8821__$1);var ev__8121__auto___8828 = cljs.core.nth.call(null,vec__8725_8827,0,null);var func__8122__auto___8829 = cljs.core.nth.call(null,vec__8725_8827,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8828,func__8122__auto___8829);
{
var G__8830 = cljs.core.next.call(null,seq__8720_8821__$1);
var G__8831 = null;
var G__8832 = 0;
var G__8833 = 0;
seq__8720_8809 = G__8830;
chunk__8721_8810 = G__8831;
count__8722_8811 = G__8832;
i__8723_8812 = G__8833;
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
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),n], null));var seq__8732_8834 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Are you sure?",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__8733_8835 = null;var count__8734_8836 = 0;var i__8735_8837 = 0;while(true){
if((i__8735_8837 < count__8734_8836))
{var vec__8736_8838 = cljs.core._nth.call(null,chunk__8733_8835,i__8735_8837);var ev__8121__auto___8839 = cljs.core.nth.call(null,vec__8736_8838,0,null);var func__8122__auto___8840 = cljs.core.nth.call(null,vec__8736_8838,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8839,func__8122__auto___8840);
{
var G__8841 = seq__8732_8834;
var G__8842 = chunk__8733_8835;
var G__8843 = count__8734_8836;
var G__8844 = (i__8735_8837 + 1);
seq__8732_8834 = G__8841;
chunk__8733_8835 = G__8842;
count__8734_8836 = G__8843;
i__8735_8837 = G__8844;
continue;
}
} else
{var temp__4092__auto___8845 = cljs.core.seq.call(null,seq__8732_8834);if(temp__4092__auto___8845)
{var seq__8732_8846__$1 = temp__4092__auto___8845;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8732_8846__$1))
{var c__7500__auto___8847 = cljs.core.chunk_first.call(null,seq__8732_8846__$1);{
var G__8848 = cljs.core.chunk_rest.call(null,seq__8732_8846__$1);
var G__8849 = c__7500__auto___8847;
var G__8850 = cljs.core.count.call(null,c__7500__auto___8847);
var G__8851 = 0;
seq__8732_8834 = G__8848;
chunk__8733_8835 = G__8849;
count__8734_8836 = G__8850;
i__8735_8837 = G__8851;
continue;
}
} else
{var vec__8737_8852 = cljs.core.first.call(null,seq__8732_8846__$1);var ev__8121__auto___8853 = cljs.core.nth.call(null,vec__8737_8852,0,null);var func__8122__auto___8854 = cljs.core.nth.call(null,vec__8737_8852,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8853,func__8122__auto___8854);
{
var G__8855 = cljs.core.next.call(null,seq__8732_8846__$1);
var G__8856 = null;
var G__8857 = 0;
var G__8858 = 0;
seq__8732_8834 = G__8855;
chunk__8733_8835 = G__8856;
count__8734_8836 = G__8857;
i__8735_8837 = G__8858;
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
lt.plugins.gitlight.status.ui.file = (function file(p__8738){var vec__8750 = p__8738;var f = cljs.core.nth.call(null,vec__8750,0,null);var t = cljs.core.nth.call(null,vec__8750,1,null);var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(t),cljs.core.str(":"),cljs.core.str(f)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7469__auto__ = (function iter__8751(s__8752){return (new cljs.core.LazySeq(null,(function (){var s__8752__$1 = s__8752;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8752__$1);if(temp__4092__auto__)
{var s__8752__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8752__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__8752__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__8754 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__8753 = 0;while(true){
if((i__8753 < size__7468__auto__))
{var bt = cljs.core._nth.call(null,c__7467__auto__,i__8753);cljs.core.chunk_append.call(null,b__8754,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__8859 = (i__8753 + 1);
i__8753 = G__8859;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8754),iter__8751.call(null,cljs.core.chunk_rest.call(null,s__8752__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8754),null);
}
} else
{var bt = cljs.core.first.call(null,s__8752__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__8751.call(null,cljs.core.rest.call(null,s__8752__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stage","diff","revert","delete","stash","add","ignore"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__8755_8860 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8756_8861 = null;var count__8757_8862 = 0;var i__8758_8863 = 0;while(true){
if((i__8758_8863 < count__8757_8862))
{var vec__8759_8864 = cljs.core._nth.call(null,chunk__8756_8861,i__8758_8863);var ev__8121__auto___8865 = cljs.core.nth.call(null,vec__8759_8864,0,null);var func__8122__auto___8866 = cljs.core.nth.call(null,vec__8759_8864,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8865,func__8122__auto___8866);
{
var G__8867 = seq__8755_8860;
var G__8868 = chunk__8756_8861;
var G__8869 = count__8757_8862;
var G__8870 = (i__8758_8863 + 1);
seq__8755_8860 = G__8867;
chunk__8756_8861 = G__8868;
count__8757_8862 = G__8869;
i__8758_8863 = G__8870;
continue;
}
} else
{var temp__4092__auto___8871 = cljs.core.seq.call(null,seq__8755_8860);if(temp__4092__auto___8871)
{var seq__8755_8872__$1 = temp__4092__auto___8871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8755_8872__$1))
{var c__7500__auto___8873 = cljs.core.chunk_first.call(null,seq__8755_8872__$1);{
var G__8874 = cljs.core.chunk_rest.call(null,seq__8755_8872__$1);
var G__8875 = c__7500__auto___8873;
var G__8876 = cljs.core.count.call(null,c__7500__auto___8873);
var G__8877 = 0;
seq__8755_8860 = G__8874;
chunk__8756_8861 = G__8875;
count__8757_8862 = G__8876;
i__8758_8863 = G__8877;
continue;
}
} else
{var vec__8760_8878 = cljs.core.first.call(null,seq__8755_8872__$1);var ev__8121__auto___8879 = cljs.core.nth.call(null,vec__8760_8878,0,null);var func__8122__auto___8880 = cljs.core.nth.call(null,vec__8760_8878,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8879,func__8122__auto___8880);
{
var G__8881 = cljs.core.next.call(null,seq__8755_8872__$1);
var G__8882 = null;
var G__8883 = 0;
var G__8884 = 0;
seq__8755_8860 = G__8881;
chunk__8756_8861 = G__8882;
count__8757_8862 = G__8883;
i__8758_8863 = G__8884;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("Current branch: "),cljs.core.str(branch)].join('')], null),(function (){var iter__7469__auto__ = (function iter__8779(s__8780){return (new cljs.core.LazySeq(null,(function (){var s__8780__$1 = s__8780;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8780__$1);if(temp__4092__auto__)
{var s__8780__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8780__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__8780__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__8782 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__8781 = 0;while(true){
if((i__8781 < size__7468__auto__))
{var t = cljs.core._nth.call(null,c__7467__auto__,i__8781);cljs.core.chunk_append.call(null,b__8782,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null));
{
var G__8885 = (i__8781 + 1);
i__8781 = G__8885;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8782),iter__8779.call(null,cljs.core.chunk_rest.call(null,s__8780__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8782),null);
}
} else
{var t = cljs.core.first.call(null,s__8780__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null),iter__8779.call(null,cljs.core.rest.call(null,s__8780__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","branch","tag","remote"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7469__auto__ = (function iter__8783(s__8784){return (new cljs.core.LazySeq(null,(function (){var s__8784__$1 = s__8784;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8784__$1);if(temp__4092__auto__)
{var s__8784__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8784__$2))
{var c__7467__auto__ = cljs.core.chunk_first.call(null,s__8784__$2);var size__7468__auto__ = cljs.core.count.call(null,c__7467__auto__);var b__8786 = cljs.core.chunk_buffer.call(null,size__7468__auto__);if((function (){var i__8785 = 0;while(true){
if((i__8785 < size__7468__auto__))
{var vec__8789 = cljs.core._nth.call(null,c__7467__auto__,i__8785);var g = cljs.core.nth.call(null,vec__8789,0,null);var fs = cljs.core.nth.call(null,vec__8789,1,null);cljs.core.chunk_append.call(null,b__8786,lt.plugins.gitlight.status.ui.group.call(null,g,fs));
{
var G__8886 = (i__8785 + 1);
i__8785 = G__8886;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8786),iter__8783.call(null,cljs.core.chunk_rest.call(null,s__8784__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8786),null);
}
} else
{var vec__8790 = cljs.core.first.call(null,s__8784__$2);var g = cljs.core.nth.call(null,vec__8790,0,null);var fs = cljs.core.nth.call(null,vec__8790,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.group.call(null,g,fs),iter__8783.call(null,cljs.core.rest.call(null,s__8784__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7469__auto__.call(null,this$);
})()], null)], null));var seq__8791_8887 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8792_8888 = null;var count__8793_8889 = 0;var i__8794_8890 = 0;while(true){
if((i__8794_8890 < count__8793_8889))
{var vec__8795_8891 = cljs.core._nth.call(null,chunk__8792_8888,i__8794_8890);var ev__8121__auto___8892 = cljs.core.nth.call(null,vec__8795_8891,0,null);var func__8122__auto___8893 = cljs.core.nth.call(null,vec__8795_8891,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8892,func__8122__auto___8893);
{
var G__8894 = seq__8791_8887;
var G__8895 = chunk__8792_8888;
var G__8896 = count__8793_8889;
var G__8897 = (i__8794_8890 + 1);
seq__8791_8887 = G__8894;
chunk__8792_8888 = G__8895;
count__8793_8889 = G__8896;
i__8794_8890 = G__8897;
continue;
}
} else
{var temp__4092__auto___8898 = cljs.core.seq.call(null,seq__8791_8887);if(temp__4092__auto___8898)
{var seq__8791_8899__$1 = temp__4092__auto___8898;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8791_8899__$1))
{var c__7500__auto___8900 = cljs.core.chunk_first.call(null,seq__8791_8899__$1);{
var G__8901 = cljs.core.chunk_rest.call(null,seq__8791_8899__$1);
var G__8902 = c__7500__auto___8900;
var G__8903 = cljs.core.count.call(null,c__7500__auto___8900);
var G__8904 = 0;
seq__8791_8887 = G__8901;
chunk__8792_8888 = G__8902;
count__8793_8889 = G__8903;
i__8794_8890 = G__8904;
continue;
}
} else
{var vec__8796_8905 = cljs.core.first.call(null,seq__8791_8899__$1);var ev__8121__auto___8906 = cljs.core.nth.call(null,vec__8796_8905,0,null);var func__8122__auto___8907 = cljs.core.nth.call(null,vec__8796_8905,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8906,func__8122__auto___8907);
{
var G__8908 = cljs.core.next.call(null,seq__8791_8899__$1);
var G__8909 = null;
var G__8910 = 0;
var G__8911 = 0;
seq__8791_8887 = G__8908;
chunk__8792_8888 = G__8909;
count__8793_8889 = G__8910;
i__8794_8890 = G__8911;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.git-status","div.git-status",3669381948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__8803_8912 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8804_8913 = null;var count__8805_8914 = 0;var i__8806_8915 = 0;while(true){
if((i__8806_8915 < count__8805_8914))
{var vec__8807_8916 = cljs.core._nth.call(null,chunk__8804_8913,i__8806_8915);var ev__8121__auto___8917 = cljs.core.nth.call(null,vec__8807_8916,0,null);var func__8122__auto___8918 = cljs.core.nth.call(null,vec__8807_8916,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8917,func__8122__auto___8918);
{
var G__8919 = seq__8803_8912;
var G__8920 = chunk__8804_8913;
var G__8921 = count__8805_8914;
var G__8922 = (i__8806_8915 + 1);
seq__8803_8912 = G__8919;
chunk__8804_8913 = G__8920;
count__8805_8914 = G__8921;
i__8806_8915 = G__8922;
continue;
}
} else
{var temp__4092__auto___8923 = cljs.core.seq.call(null,seq__8803_8912);if(temp__4092__auto___8923)
{var seq__8803_8924__$1 = temp__4092__auto___8923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8803_8924__$1))
{var c__7500__auto___8925 = cljs.core.chunk_first.call(null,seq__8803_8924__$1);{
var G__8926 = cljs.core.chunk_rest.call(null,seq__8803_8924__$1);
var G__8927 = c__7500__auto___8925;
var G__8928 = cljs.core.count.call(null,c__7500__auto___8925);
var G__8929 = 0;
seq__8803_8912 = G__8926;
chunk__8804_8913 = G__8927;
count__8805_8914 = G__8928;
i__8806_8915 = G__8929;
continue;
}
} else
{var vec__8808_8930 = cljs.core.first.call(null,seq__8803_8924__$1);var ev__8121__auto___8931 = cljs.core.nth.call(null,vec__8808_8930,0,null);var func__8122__auto___8932 = cljs.core.nth.call(null,vec__8808_8930,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8931,func__8122__auto___8932);
{
var G__8933 = cljs.core.next.call(null,seq__8803_8924__$1);
var G__8934 = null;
var G__8935 = 0;
var G__8936 = 0;
seq__8803_8912 = G__8933;
chunk__8804_8913 = G__8934;
count__8805_8914 = G__8935;
i__8806_8915 = G__8936;
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