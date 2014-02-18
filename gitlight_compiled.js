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
lt.plugins.gitlight.status.back.get_cwd = (function get_cwd(){var filename = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));return lt.objs.files.parent.call(null,filename);
});
lt.plugins.gitlight.status.back.get_branch = (function get_branch(data){return cljs.core.second.call(null,clojure.string.split.call(null,data,/On branch /));
});
lt.plugins.gitlight.status.back.delete_inside_parens = (function delete_inside_parens(data){var line_with_no_hash = clojure.string.replace_first.call(null,data,/#/," ");var trimmed = clojure.string.trim.call(null,line_with_no_hash);return clojure.string.replace.call(null,[cljs.core.str(trimmed)].join(''),/^\(.*\)$/,"");
});
lt.plugins.gitlight.status.back.get_files = (function get_files(data){var first_line_fix = [cljs.core.str("#"),cljs.core.str(data)].join('');var splitted = clojure.string.split_lines.call(null,first_line_fix);var filtered = cljs.core.filter.call(null,((function (first_line_fix,splitted){
return (function (p1__8826_SHARP_){return p1__8826_SHARP_.startsWith("#");
});})(first_line_fix,splitted))
,splitted);var no_parens = cljs.core.map.call(null,lt.plugins.gitlight.status.back.delete_inside_parens,filtered);return cljs.core.filter.call(null,(function (p1__8827_SHARP_){return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,p1__8827_SHARP_));
}),no_parens);
});
lt.plugins.gitlight.status.back.git_status = (function git_status(){var dir = lt.plugins.gitlight.status.back.get_cwd.call(null);return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),"/usr/bin/git",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",4416389988)], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),dir,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.status.back.shell_git_out], null));
});
lt.plugins.gitlight.status.back.split_and_swap = (function split_and_swap(filename){var vec__8829 = clojure.string.split.call(null,filename,/:/,2);var a = cljs.core.nth.call(null,vec__8829,0,null);var b = cljs.core.nth.call(null,vec__8829,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim.call(null,b),cljs.core.keyword.call(null,a)], null);
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
lt.plugins.gitlight.status.back.mangle_data = (function mangle_data(data){var splitted = clojure.string.split.call(null,data.toString(),/#/,3);var branch_line = cljs.core.second.call(null,splitted);var splitted_by_changes = clojure.string.split.call(null,cljs.core.nth.call(null,splitted,2),/Changes|Untracked/);var grouped_by_fields = cljs.core.rest.call(null,cljs.core.map.call(null,lt.plugins.gitlight.status.back.get_files,splitted_by_changes));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),lt.plugins.gitlight.status.back.get_branch.call(null,branch_line),new cljs.core.Keyword(null,"status","status",4416389988),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,lt.plugins.gitlight.status.back.make_a_category,grouped_by_fields))], null);
});
lt.plugins.gitlight.status.back.__BEH__shell_git__DOT__out = (function __BEH__shell_git__DOT__out(obj,data){console.log("I'm alive");
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.mangle_data.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","shell-git.out","lt.plugins.gitlight.status.back/shell-git.out",1629750829),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__shell_git__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git command is executed, show its out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.status.back.shell_git_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","shell-git-out","lt.plugins.gitlight.status.back/shell-git-out",1629727632),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shell-git-out","shell-git-out",543653800)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.back","shell-git.out","lt.plugins.gitlight.status.back/shell-git.out",1629750829)], null)));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.ui')) {
goog.provide('lt.plugins.gitlight.status.ui');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.objs.command');
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8121__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,lt.plugins.gitlight.status.ui.file,files)], null)], null));var seq__12042_12103 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12043_12104 = null;var count__12044_12105 = 0;var i__12045_12106 = 0;while(true){
if((i__12045_12106 < count__12044_12105))
{var vec__12046_12107 = cljs.core._nth.call(null,chunk__12043_12104,i__12045_12106);var ev__8122__auto___12108 = cljs.core.nth.call(null,vec__12046_12107,0,null);var func__8123__auto___12109 = cljs.core.nth.call(null,vec__12046_12107,1,null);lt.util.dom.on.call(null,e__8121__auto__,ev__8122__auto___12108,func__8123__auto___12109);
{
var G__12110 = seq__12042_12103;
var G__12111 = chunk__12043_12104;
var G__12112 = count__12044_12105;
var G__12113 = (i__12045_12106 + 1);
seq__12042_12103 = G__12110;
chunk__12043_12104 = G__12111;
count__12044_12105 = G__12112;
i__12045_12106 = G__12113;
continue;
}
} else
{var temp__4092__auto___12114 = cljs.core.seq.call(null,seq__12042_12103);if(temp__4092__auto___12114)
{var seq__12042_12115__$1 = temp__4092__auto___12114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12042_12115__$1))
{var c__7501__auto___12116 = cljs.core.chunk_first.call(null,seq__12042_12115__$1);{
var G__12117 = cljs.core.chunk_rest.call(null,seq__12042_12115__$1);
var G__12118 = c__7501__auto___12116;
var G__12119 = cljs.core.count.call(null,c__7501__auto___12116);
var G__12120 = 0;
seq__12042_12103 = G__12117;
chunk__12043_12104 = G__12118;
count__12044_12105 = G__12119;
i__12045_12106 = G__12120;
continue;
}
} else
{var vec__12047_12121 = cljs.core.first.call(null,seq__12042_12115__$1);var ev__8122__auto___12122 = cljs.core.nth.call(null,vec__12047_12121,0,null);var func__8123__auto___12123 = cljs.core.nth.call(null,vec__12047_12121,1,null);lt.util.dom.on.call(null,e__8121__auto__,ev__8122__auto___12122,func__8123__auto___12123);
{
var G__12124 = cljs.core.next.call(null,seq__12042_12115__$1);
var G__12125 = null;
var G__12126 = 0;
var G__12127 = 0;
seq__12042_12103 = G__12124;
chunk__12043_12104 = G__12125;
count__12044_12105 = G__12126;
i__12045_12106 = G__12127;
continue;
}
}
} else
{}
}
break;
}
return e__8121__auto__;
});
lt.plugins.gitlight.status.ui.file = (function file(p__12048){var vec__12056 = p__12048;var f = cljs.core.nth.call(null,vec__12056,0,null);var t = cljs.core.nth.call(null,vec__12056,1,null);var e__8121__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(t),cljs.core.str(":"),cljs.core.str(f)].join('')], null));var seq__12057_12128 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12058_12129 = null;var count__12059_12130 = 0;var i__12060_12131 = 0;while(true){
if((i__12060_12131 < count__12059_12130))
{var vec__12061_12132 = cljs.core._nth.call(null,chunk__12058_12129,i__12060_12131);var ev__8122__auto___12133 = cljs.core.nth.call(null,vec__12061_12132,0,null);var func__8123__auto___12134 = cljs.core.nth.call(null,vec__12061_12132,1,null);lt.util.dom.on.call(null,e__8121__auto__,ev__8122__auto___12133,func__8123__auto___12134);
{
var G__12135 = seq__12057_12128;
var G__12136 = chunk__12058_12129;
var G__12137 = count__12059_12130;
var G__12138 = (i__12060_12131 + 1);
seq__12057_12128 = G__12135;
chunk__12058_12129 = G__12136;
count__12059_12130 = G__12137;
i__12060_12131 = G__12138;
continue;
}
} else
{var temp__4092__auto___12139 = cljs.core.seq.call(null,seq__12057_12128);if(temp__4092__auto___12139)
{var seq__12057_12140__$1 = temp__4092__auto___12139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12057_12140__$1))
{var c__7501__auto___12141 = cljs.core.chunk_first.call(null,seq__12057_12140__$1);{
var G__12142 = cljs.core.chunk_rest.call(null,seq__12057_12140__$1);
var G__12143 = c__7501__auto___12141;
var G__12144 = cljs.core.count.call(null,c__7501__auto___12141);
var G__12145 = 0;
seq__12057_12128 = G__12142;
chunk__12058_12129 = G__12143;
count__12059_12130 = G__12144;
i__12060_12131 = G__12145;
continue;
}
} else
{var vec__12062_12146 = cljs.core.first.call(null,seq__12057_12140__$1);var ev__8122__auto___12147 = cljs.core.nth.call(null,vec__12062_12146,0,null);var func__8123__auto___12148 = cljs.core.nth.call(null,vec__12062_12146,1,null);lt.util.dom.on.call(null,e__8121__auto__,ev__8122__auto___12147,func__8123__auto___12148);
{
var G__12149 = cljs.core.next.call(null,seq__12057_12140__$1);
var G__12150 = null;
var G__12151 = 0;
var G__12152 = 0;
seq__12057_12128 = G__12149;
chunk__12058_12129 = G__12150;
count__12059_12130 = G__12151;
i__12060_12131 = G__12152;
continue;
}
}
} else
{}
}
break;
}
return e__8121__auto__;
});
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$){var e__8121__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("test: "),cljs.core.str(Math.random())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7470__auto__ = (function iter__12077(s__12078){return (new cljs.core.LazySeq(null,(function (){var s__12078__$1 = s__12078;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12078__$1);if(temp__4092__auto__)
{var s__12078__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12078__$2))
{var c__7468__auto__ = cljs.core.chunk_first.call(null,s__12078__$2);var size__7469__auto__ = cljs.core.count.call(null,c__7468__auto__);var b__12080 = cljs.core.chunk_buffer.call(null,size__7469__auto__);if((function (){var i__12079 = 0;while(true){
if((i__12079 < size__7469__auto__))
{var vec__12083 = cljs.core._nth.call(null,c__7468__auto__,i__12079);var g = cljs.core.nth.call(null,vec__12083,0,null);var fs = cljs.core.nth.call(null,vec__12083,1,null);cljs.core.chunk_append.call(null,b__12080,lt.plugins.gitlight.status.ui.group.call(null,g,fs));
{
var G__12153 = (i__12079 + 1);
i__12079 = G__12153;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12080),iter__12077.call(null,cljs.core.chunk_rest.call(null,s__12078__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12080),null);
}
} else
{var vec__12084 = cljs.core.first.call(null,s__12078__$2);var g = cljs.core.nth.call(null,vec__12084,0,null);var fs = cljs.core.nth.call(null,vec__12084,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.group.call(null,g,fs),iter__12077.call(null,cljs.core.rest.call(null,s__12078__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7470__auto__.call(null,this$);
})()], null)], null));var seq__12085_12154 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12086_12155 = null;var count__12087_12156 = 0;var i__12088_12157 = 0;while(true){
if((i__12088_12157 < count__12087_12156))
{var vec__12089_12158 = cljs.core._nth.call(null,chunk__12086_12155,i__12088_12157);var ev__8122__auto___12159 = cljs.core.nth.call(null,vec__12089_12158,0,null);var func__8123__auto___12160 = cljs.core.nth.call(null,vec__12089_12158,1,null);lt.util.dom.on.call(null,e__8121__auto__,ev__8122__auto___12159,func__8123__auto___12160);
{
var G__12161 = seq__12085_12154;
var G__12162 = chunk__12086_12155;
var G__12163 = count__12087_12156;
var G__12164 = (i__12088_12157 + 1);
seq__12085_12154 = G__12161;
chunk__12086_12155 = G__12162;
count__12087_12156 = G__12163;
i__12088_12157 = G__12164;
continue;
}
} else
{var temp__4092__auto___12165 = cljs.core.seq.call(null,seq__12085_12154);if(temp__4092__auto___12165)
{var seq__12085_12166__$1 = temp__4092__auto___12165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12085_12166__$1))
{var c__7501__auto___12167 = cljs.core.chunk_first.call(null,seq__12085_12166__$1);{
var G__12168 = cljs.core.chunk_rest.call(null,seq__12085_12166__$1);
var G__12169 = c__7501__auto___12167;
var G__12170 = cljs.core.count.call(null,c__7501__auto___12167);
var G__12171 = 0;
seq__12085_12154 = G__12168;
chunk__12086_12155 = G__12169;
count__12087_12156 = G__12170;
i__12088_12157 = G__12171;
continue;
}
} else
{var vec__12090_12172 = cljs.core.first.call(null,seq__12085_12166__$1);var ev__8122__auto___12173 = cljs.core.nth.call(null,vec__12090_12172,0,null);var func__8123__auto___12174 = cljs.core.nth.call(null,vec__12090_12172,1,null);lt.util.dom.on.call(null,e__8121__auto__,ev__8122__auto___12173,func__8123__auto___12174);
{
var G__12175 = cljs.core.next.call(null,seq__12085_12166__$1);
var G__12176 = null;
var G__12177 = 0;
var G__12178 = 0;
seq__12085_12154 = G__12175;
chunk__12086_12155 = G__12176;
count__12087_12156 = G__12177;
i__12088_12157 = G__12178;
continue;
}
}
} else
{}
}
break;
}
return e__8121__auto__;
});
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8121__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.git-status","div.git-status",3669381948)], null));var seq__12097_12179 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12098_12180 = null;var count__12099_12181 = 0;var i__12100_12182 = 0;while(true){
if((i__12100_12182 < count__12099_12181))
{var vec__12101_12183 = cljs.core._nth.call(null,chunk__12098_12180,i__12100_12182);var ev__8122__auto___12184 = cljs.core.nth.call(null,vec__12101_12183,0,null);var func__8123__auto___12185 = cljs.core.nth.call(null,vec__12101_12183,1,null);lt.util.dom.on.call(null,e__8121__auto__,ev__8122__auto___12184,func__8123__auto___12185);
{
var G__12186 = seq__12097_12179;
var G__12187 = chunk__12098_12180;
var G__12188 = count__12099_12181;
var G__12189 = (i__12100_12182 + 1);
seq__12097_12179 = G__12186;
chunk__12098_12180 = G__12187;
count__12099_12181 = G__12188;
i__12100_12182 = G__12189;
continue;
}
} else
{var temp__4092__auto___12190 = cljs.core.seq.call(null,seq__12097_12179);if(temp__4092__auto___12190)
{var seq__12097_12191__$1 = temp__4092__auto___12190;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12097_12191__$1))
{var c__7501__auto___12192 = cljs.core.chunk_first.call(null,seq__12097_12191__$1);{
var G__12193 = cljs.core.chunk_rest.call(null,seq__12097_12191__$1);
var G__12194 = c__7501__auto___12192;
var G__12195 = cljs.core.count.call(null,c__7501__auto___12192);
var G__12196 = 0;
seq__12097_12179 = G__12193;
chunk__12098_12180 = G__12194;
count__12099_12181 = G__12195;
i__12100_12182 = G__12196;
continue;
}
} else
{var vec__12102_12197 = cljs.core.first.call(null,seq__12097_12191__$1);var ev__8122__auto___12198 = cljs.core.nth.call(null,vec__12102_12197,0,null);var func__8123__auto___12199 = cljs.core.nth.call(null,vec__12102_12197,1,null);lt.util.dom.on.call(null,e__8121__auto__,ev__8122__auto___12198,func__8123__auto___12199);
{
var G__12200 = cljs.core.next.call(null,seq__12097_12191__$1);
var G__12201 = null;
var G__12202 = 0;
var G__12203 = 0;
seq__12097_12179 = G__12200;
chunk__12098_12180 = G__12201;
count__12099_12181 = G__12202;
i__12100_12182 = G__12203;
continue;
}
}
} else
{}
}
break;
}
return e__8121__auto__;
});
lt.plugins.gitlight.status.ui.__BEH__update = (function __BEH__update(obj,status){console.log("?");
new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)).innerHTML = "";
console.log(lt.plugins.gitlight.status.ui.status_ui.call(null,status).innerHTML);
return lt.util.dom.append.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),lt.plugins.gitlight.status.ui.status_ui.call(null,status));
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
return lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.shell_git_out,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826));
}

//# sourceMappingURL=gitlight_compiled.js.map