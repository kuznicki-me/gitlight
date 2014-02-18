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
return (function (p1__8518_SHARP_){return p1__8518_SHARP_.startsWith("#");
});})(first_line_fix,splitted))
,splitted);var no_parens = cljs.core.map.call(null,lt.plugins.gitlight.status.back.delete_inside_parens,filtered);return cljs.core.filter.call(null,(function (p1__8519_SHARP_){return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,p1__8519_SHARP_));
}),no_parens);
});
lt.plugins.gitlight.status.back.git_status = (function git_status(){var dir = lt.plugins.gitlight.status.back.get_cwd.call(null);return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),"/usr/bin/git",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",4416389988)], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),dir,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.status.back.shell_git_out], null));
});
lt.plugins.gitlight.status.back.split_and_swap = (function split_and_swap(filename){var vec__8521 = clojure.string.split.call(null,filename,/:/,2);var a = cljs.core.nth.call(null,vec__8521,0,null);var b = cljs.core.nth.call(null,vec__8521,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim.call(null,b),cljs.core.keyword.call(null,a)], null);
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,lt.plugins.gitlight.status.ui.file,files)], null)], null));var seq__9655_9744 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9656_9745 = null;var count__9657_9746 = 0;var i__9658_9747 = 0;while(true){
if((i__9658_9747 < count__9657_9746))
{var vec__9659_9748 = cljs.core._nth.call(null,chunk__9656_9745,i__9658_9747);var ev__8112__auto___9749 = cljs.core.nth.call(null,vec__9659_9748,0,null);var func__8113__auto___9750 = cljs.core.nth.call(null,vec__9659_9748,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9749,func__8113__auto___9750);
{
var G__9751 = seq__9655_9744;
var G__9752 = chunk__9656_9745;
var G__9753 = count__9657_9746;
var G__9754 = (i__9658_9747 + 1);
seq__9655_9744 = G__9751;
chunk__9656_9745 = G__9752;
count__9657_9746 = G__9753;
i__9658_9747 = G__9754;
continue;
}
} else
{var temp__4092__auto___9755 = cljs.core.seq.call(null,seq__9655_9744);if(temp__4092__auto___9755)
{var seq__9655_9756__$1 = temp__4092__auto___9755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9655_9756__$1))
{var c__7497__auto___9757 = cljs.core.chunk_first.call(null,seq__9655_9756__$1);{
var G__9758 = cljs.core.chunk_rest.call(null,seq__9655_9756__$1);
var G__9759 = c__7497__auto___9757;
var G__9760 = cljs.core.count.call(null,c__7497__auto___9757);
var G__9761 = 0;
seq__9655_9744 = G__9758;
chunk__9656_9745 = G__9759;
count__9657_9746 = G__9760;
i__9658_9747 = G__9761;
continue;
}
} else
{var vec__9660_9762 = cljs.core.first.call(null,seq__9655_9756__$1);var ev__8112__auto___9763 = cljs.core.nth.call(null,vec__9660_9762,0,null);var func__8113__auto___9764 = cljs.core.nth.call(null,vec__9660_9762,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9763,func__8113__auto___9764);
{
var G__9765 = cljs.core.next.call(null,seq__9655_9756__$1);
var G__9766 = null;
var G__9767 = 0;
var G__9768 = 0;
seq__9655_9744 = G__9765;
chunk__9656_9745 = G__9766;
count__9657_9746 = G__9767;
i__9658_9747 = G__9768;
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
lt.plugins.gitlight.status.ui.button = (function button(n,f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),n], null));var seq__9667_9769 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Are you sure?",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null)));var chunk__9668_9770 = null;var count__9669_9771 = 0;var i__9670_9772 = 0;while(true){
if((i__9670_9772 < count__9669_9771))
{var vec__9671_9773 = cljs.core._nth.call(null,chunk__9668_9770,i__9670_9772);var ev__8112__auto___9774 = cljs.core.nth.call(null,vec__9671_9773,0,null);var func__8113__auto___9775 = cljs.core.nth.call(null,vec__9671_9773,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9774,func__8113__auto___9775);
{
var G__9776 = seq__9667_9769;
var G__9777 = chunk__9668_9770;
var G__9778 = count__9669_9771;
var G__9779 = (i__9670_9772 + 1);
seq__9667_9769 = G__9776;
chunk__9668_9770 = G__9777;
count__9669_9771 = G__9778;
i__9670_9772 = G__9779;
continue;
}
} else
{var temp__4092__auto___9780 = cljs.core.seq.call(null,seq__9667_9769);if(temp__4092__auto___9780)
{var seq__9667_9781__$1 = temp__4092__auto___9780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9667_9781__$1))
{var c__7497__auto___9782 = cljs.core.chunk_first.call(null,seq__9667_9781__$1);{
var G__9783 = cljs.core.chunk_rest.call(null,seq__9667_9781__$1);
var G__9784 = c__7497__auto___9782;
var G__9785 = cljs.core.count.call(null,c__7497__auto___9782);
var G__9786 = 0;
seq__9667_9769 = G__9783;
chunk__9668_9770 = G__9784;
count__9669_9771 = G__9785;
i__9670_9772 = G__9786;
continue;
}
} else
{var vec__9672_9787 = cljs.core.first.call(null,seq__9667_9781__$1);var ev__8112__auto___9788 = cljs.core.nth.call(null,vec__9672_9787,0,null);var func__8113__auto___9789 = cljs.core.nth.call(null,vec__9672_9787,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9788,func__8113__auto___9789);
{
var G__9790 = cljs.core.next.call(null,seq__9667_9781__$1);
var G__9791 = null;
var G__9792 = 0;
var G__9793 = 0;
seq__9667_9769 = G__9790;
chunk__9668_9770 = G__9791;
count__9669_9771 = G__9792;
i__9670_9772 = G__9793;
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
lt.plugins.gitlight.status.ui.file = (function file(p__9673){var vec__9685 = p__9673;var f = cljs.core.nth.call(null,vec__9685,0,null);var t = cljs.core.nth.call(null,vec__9685,1,null);var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(t),cljs.core.str(":"),cljs.core.str(f)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7466__auto__ = (function iter__9686(s__9687){return (new cljs.core.LazySeq(null,(function (){var s__9687__$1 = s__9687;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9687__$1);if(temp__4092__auto__)
{var s__9687__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9687__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9687__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9689 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9688 = 0;while(true){
if((i__9688 < size__7465__auto__))
{var bt = cljs.core._nth.call(null,c__7464__auto__,i__9688);cljs.core.chunk_append.call(null,b__9689,lt.plugins.gitlight.status.ui.button.call(null,bt,f));
{
var G__9794 = (i__9688 + 1);
i__9688 = G__9794;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9689),iter__9686.call(null,cljs.core.chunk_rest.call(null,s__9687__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9689),null);
}
} else
{var bt = cljs.core.first.call(null,s__9687__$2);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.button.call(null,bt,f),iter__9686.call(null,cljs.core.rest.call(null,s__9687__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stage","diff","revert","delete","stash","add","ignore"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__9690_9795 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9691_9796 = null;var count__9692_9797 = 0;var i__9693_9798 = 0;while(true){
if((i__9693_9798 < count__9692_9797))
{var vec__9694_9799 = cljs.core._nth.call(null,chunk__9691_9796,i__9693_9798);var ev__8112__auto___9800 = cljs.core.nth.call(null,vec__9694_9799,0,null);var func__8113__auto___9801 = cljs.core.nth.call(null,vec__9694_9799,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9800,func__8113__auto___9801);
{
var G__9802 = seq__9690_9795;
var G__9803 = chunk__9691_9796;
var G__9804 = count__9692_9797;
var G__9805 = (i__9693_9798 + 1);
seq__9690_9795 = G__9802;
chunk__9691_9796 = G__9803;
count__9692_9797 = G__9804;
i__9693_9798 = G__9805;
continue;
}
} else
{var temp__4092__auto___9806 = cljs.core.seq.call(null,seq__9690_9795);if(temp__4092__auto___9806)
{var seq__9690_9807__$1 = temp__4092__auto___9806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9690_9807__$1))
{var c__7497__auto___9808 = cljs.core.chunk_first.call(null,seq__9690_9807__$1);{
var G__9809 = cljs.core.chunk_rest.call(null,seq__9690_9807__$1);
var G__9810 = c__7497__auto___9808;
var G__9811 = cljs.core.count.call(null,c__7497__auto___9808);
var G__9812 = 0;
seq__9690_9795 = G__9809;
chunk__9691_9796 = G__9810;
count__9692_9797 = G__9811;
i__9693_9798 = G__9812;
continue;
}
} else
{var vec__9695_9813 = cljs.core.first.call(null,seq__9690_9807__$1);var ev__8112__auto___9814 = cljs.core.nth.call(null,vec__9695_9813,0,null);var func__8113__auto___9815 = cljs.core.nth.call(null,vec__9695_9813,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9814,func__8113__auto___9815);
{
var G__9816 = cljs.core.next.call(null,seq__9690_9807__$1);
var G__9817 = null;
var G__9818 = 0;
var G__9819 = 0;
seq__9690_9795 = G__9816;
chunk__9691_9796 = G__9817;
count__9692_9797 = G__9818;
i__9693_9798 = G__9819;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("Current branch: "),cljs.core.str(branch)].join('')], null),(function (){var iter__7466__auto__ = (function iter__9714(s__9715){return (new cljs.core.LazySeq(null,(function (){var s__9715__$1 = s__9715;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9715__$1);if(temp__4092__auto__)
{var s__9715__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9715__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9715__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9717 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9716 = 0;while(true){
if((i__9716 < size__7465__auto__))
{var t = cljs.core._nth.call(null,c__7464__auto__,i__9716);cljs.core.chunk_append.call(null,b__9717,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null));
{
var G__9820 = (i__9716 + 1);
i__9716 = G__9820;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9717),iter__9714.call(null,cljs.core.chunk_rest.call(null,s__9715__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9717),null);
}
} else
{var t = cljs.core.first.call(null,s__9715__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),t], null),iter__9714.call(null,cljs.core.rest.call(null,s__9715__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit","push","pull","fetch","log","merge","branch","tag","remote"], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__9718(s__9719){return (new cljs.core.LazySeq(null,(function (){var s__9719__$1 = s__9719;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9719__$1);if(temp__4092__auto__)
{var s__9719__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9719__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9719__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9721 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9720 = 0;while(true){
if((i__9720 < size__7465__auto__))
{var vec__9724 = cljs.core._nth.call(null,c__7464__auto__,i__9720);var g = cljs.core.nth.call(null,vec__9724,0,null);var fs = cljs.core.nth.call(null,vec__9724,1,null);cljs.core.chunk_append.call(null,b__9721,lt.plugins.gitlight.status.ui.group.call(null,g,fs));
{
var G__9821 = (i__9720 + 1);
i__9720 = G__9821;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9721),iter__9718.call(null,cljs.core.chunk_rest.call(null,s__9719__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9721),null);
}
} else
{var vec__9725 = cljs.core.first.call(null,s__9719__$2);var g = cljs.core.nth.call(null,vec__9725,0,null);var fs = cljs.core.nth.call(null,vec__9725,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.group.call(null,g,fs),iter__9718.call(null,cljs.core.rest.call(null,s__9719__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,this$);
})()], null)], null));var seq__9726_9822 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9727_9823 = null;var count__9728_9824 = 0;var i__9729_9825 = 0;while(true){
if((i__9729_9825 < count__9728_9824))
{var vec__9730_9826 = cljs.core._nth.call(null,chunk__9727_9823,i__9729_9825);var ev__8112__auto___9827 = cljs.core.nth.call(null,vec__9730_9826,0,null);var func__8113__auto___9828 = cljs.core.nth.call(null,vec__9730_9826,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9827,func__8113__auto___9828);
{
var G__9829 = seq__9726_9822;
var G__9830 = chunk__9727_9823;
var G__9831 = count__9728_9824;
var G__9832 = (i__9729_9825 + 1);
seq__9726_9822 = G__9829;
chunk__9727_9823 = G__9830;
count__9728_9824 = G__9831;
i__9729_9825 = G__9832;
continue;
}
} else
{var temp__4092__auto___9833 = cljs.core.seq.call(null,seq__9726_9822);if(temp__4092__auto___9833)
{var seq__9726_9834__$1 = temp__4092__auto___9833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9726_9834__$1))
{var c__7497__auto___9835 = cljs.core.chunk_first.call(null,seq__9726_9834__$1);{
var G__9836 = cljs.core.chunk_rest.call(null,seq__9726_9834__$1);
var G__9837 = c__7497__auto___9835;
var G__9838 = cljs.core.count.call(null,c__7497__auto___9835);
var G__9839 = 0;
seq__9726_9822 = G__9836;
chunk__9727_9823 = G__9837;
count__9728_9824 = G__9838;
i__9729_9825 = G__9839;
continue;
}
} else
{var vec__9731_9840 = cljs.core.first.call(null,seq__9726_9834__$1);var ev__8112__auto___9841 = cljs.core.nth.call(null,vec__9731_9840,0,null);var func__8113__auto___9842 = cljs.core.nth.call(null,vec__9731_9840,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9841,func__8113__auto___9842);
{
var G__9843 = cljs.core.next.call(null,seq__9726_9834__$1);
var G__9844 = null;
var G__9845 = 0;
var G__9846 = 0;
seq__9726_9822 = G__9843;
chunk__9727_9823 = G__9844;
count__9728_9824 = G__9845;
i__9729_9825 = G__9846;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.git-status","div.git-status",3669381948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null)], null));var seq__9738_9847 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9739_9848 = null;var count__9740_9849 = 0;var i__9741_9850 = 0;while(true){
if((i__9741_9850 < count__9740_9849))
{var vec__9742_9851 = cljs.core._nth.call(null,chunk__9739_9848,i__9741_9850);var ev__8112__auto___9852 = cljs.core.nth.call(null,vec__9742_9851,0,null);var func__8113__auto___9853 = cljs.core.nth.call(null,vec__9742_9851,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9852,func__8113__auto___9853);
{
var G__9854 = seq__9738_9847;
var G__9855 = chunk__9739_9848;
var G__9856 = count__9740_9849;
var G__9857 = (i__9741_9850 + 1);
seq__9738_9847 = G__9854;
chunk__9739_9848 = G__9855;
count__9740_9849 = G__9856;
i__9741_9850 = G__9857;
continue;
}
} else
{var temp__4092__auto___9858 = cljs.core.seq.call(null,seq__9738_9847);if(temp__4092__auto___9858)
{var seq__9738_9859__$1 = temp__4092__auto___9858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9738_9859__$1))
{var c__7497__auto___9860 = cljs.core.chunk_first.call(null,seq__9738_9859__$1);{
var G__9861 = cljs.core.chunk_rest.call(null,seq__9738_9859__$1);
var G__9862 = c__7497__auto___9860;
var G__9863 = cljs.core.count.call(null,c__7497__auto___9860);
var G__9864 = 0;
seq__9738_9847 = G__9861;
chunk__9739_9848 = G__9862;
count__9740_9849 = G__9863;
i__9741_9850 = G__9864;
continue;
}
} else
{var vec__9743_9865 = cljs.core.first.call(null,seq__9738_9859__$1);var ev__8112__auto___9866 = cljs.core.nth.call(null,vec__9743_9865,0,null);var func__8113__auto___9867 = cljs.core.nth.call(null,vec__9743_9865,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___9866,func__8113__auto___9867);
{
var G__9868 = cljs.core.next.call(null,seq__9738_9859__$1);
var G__9869 = null;
var G__9870 = 0;
var G__9871 = 0;
seq__9738_9847 = G__9868;
chunk__9739_9848 = G__9869;
count__9740_9849 = G__9870;
i__9741_9850 = G__9871;
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