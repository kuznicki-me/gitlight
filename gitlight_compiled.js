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
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.ui')) {
goog.provide('lt.plugins.gitlight.status.ui');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.objs.command');
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),cljs.core.name.call(null,g_name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,lt.plugins.gitlight.status.ui.file,files)], null)], null));var seq__8803_8861 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8804_8862 = null;var count__8805_8863 = 0;var i__8806_8864 = 0;while(true){
if((i__8806_8864 < count__8805_8863))
{var vec__8807_8865 = cljs.core._nth.call(null,chunk__8804_8862,i__8806_8864);var ev__8112__auto___8866 = cljs.core.nth.call(null,vec__8807_8865,0,null);var func__8113__auto___8867 = cljs.core.nth.call(null,vec__8807_8865,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8866,func__8113__auto___8867);
{
var G__8868 = seq__8803_8861;
var G__8869 = chunk__8804_8862;
var G__8870 = count__8805_8863;
var G__8871 = (i__8806_8864 + 1);
seq__8803_8861 = G__8868;
chunk__8804_8862 = G__8869;
count__8805_8863 = G__8870;
i__8806_8864 = G__8871;
continue;
}
} else
{var temp__4092__auto___8872 = cljs.core.seq.call(null,seq__8803_8861);if(temp__4092__auto___8872)
{var seq__8803_8873__$1 = temp__4092__auto___8872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8803_8873__$1))
{var c__7497__auto___8874 = cljs.core.chunk_first.call(null,seq__8803_8873__$1);{
var G__8875 = cljs.core.chunk_rest.call(null,seq__8803_8873__$1);
var G__8876 = c__7497__auto___8874;
var G__8877 = cljs.core.count.call(null,c__7497__auto___8874);
var G__8878 = 0;
seq__8803_8861 = G__8875;
chunk__8804_8862 = G__8876;
count__8805_8863 = G__8877;
i__8806_8864 = G__8878;
continue;
}
} else
{var vec__8808_8879 = cljs.core.first.call(null,seq__8803_8873__$1);var ev__8112__auto___8880 = cljs.core.nth.call(null,vec__8808_8879,0,null);var func__8113__auto___8881 = cljs.core.nth.call(null,vec__8808_8879,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8880,func__8113__auto___8881);
{
var G__8882 = cljs.core.next.call(null,seq__8803_8873__$1);
var G__8883 = null;
var G__8884 = 0;
var G__8885 = 0;
seq__8803_8861 = G__8882;
chunk__8804_8862 = G__8883;
count__8805_8863 = G__8884;
i__8806_8864 = G__8885;
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
lt.plugins.gitlight.status.ui.file = (function file(f){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),f], null));var seq__8815_8886 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8816_8887 = null;var count__8817_8888 = 0;var i__8818_8889 = 0;while(true){
if((i__8818_8889 < count__8817_8888))
{var vec__8819_8890 = cljs.core._nth.call(null,chunk__8816_8887,i__8818_8889);var ev__8112__auto___8891 = cljs.core.nth.call(null,vec__8819_8890,0,null);var func__8113__auto___8892 = cljs.core.nth.call(null,vec__8819_8890,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8891,func__8113__auto___8892);
{
var G__8893 = seq__8815_8886;
var G__8894 = chunk__8816_8887;
var G__8895 = count__8817_8888;
var G__8896 = (i__8818_8889 + 1);
seq__8815_8886 = G__8893;
chunk__8816_8887 = G__8894;
count__8817_8888 = G__8895;
i__8818_8889 = G__8896;
continue;
}
} else
{var temp__4092__auto___8897 = cljs.core.seq.call(null,seq__8815_8886);if(temp__4092__auto___8897)
{var seq__8815_8898__$1 = temp__4092__auto___8897;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8815_8898__$1))
{var c__7497__auto___8899 = cljs.core.chunk_first.call(null,seq__8815_8898__$1);{
var G__8900 = cljs.core.chunk_rest.call(null,seq__8815_8898__$1);
var G__8901 = c__7497__auto___8899;
var G__8902 = cljs.core.count.call(null,c__7497__auto___8899);
var G__8903 = 0;
seq__8815_8886 = G__8900;
chunk__8816_8887 = G__8901;
count__8817_8888 = G__8902;
i__8818_8889 = G__8903;
continue;
}
} else
{var vec__8820_8904 = cljs.core.first.call(null,seq__8815_8898__$1);var ev__8112__auto___8905 = cljs.core.nth.call(null,vec__8820_8904,0,null);var func__8113__auto___8906 = cljs.core.nth.call(null,vec__8820_8904,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8905,func__8113__auto___8906);
{
var G__8907 = cljs.core.next.call(null,seq__8815_8898__$1);
var G__8908 = null;
var G__8909 = 0;
var G__8910 = 0;
seq__8815_8886 = G__8907;
chunk__8816_8887 = G__8908;
count__8817_8888 = G__8909;
i__8818_8889 = G__8910;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str("test: "),cljs.core.str(Math.random())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__8835(s__8836){return (new cljs.core.LazySeq(null,(function (){var s__8836__$1 = s__8836;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8836__$1);if(temp__4092__auto__)
{var s__8836__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8836__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8836__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8838 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8837 = 0;while(true){
if((i__8837 < size__7465__auto__))
{var vec__8841 = cljs.core._nth.call(null,c__7464__auto__,i__8837);var g = cljs.core.nth.call(null,vec__8841,0,null);var fs = cljs.core.nth.call(null,vec__8841,1,null);cljs.core.chunk_append.call(null,b__8838,lt.plugins.gitlight.status.ui.group.call(null,g,fs));
{
var G__8911 = (i__8837 + 1);
i__8837 = G__8911;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8838),iter__8835.call(null,cljs.core.chunk_rest.call(null,s__8836__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8838),null);
}
} else
{var vec__8842 = cljs.core.first.call(null,s__8836__$2);var g = cljs.core.nth.call(null,vec__8842,0,null);var fs = cljs.core.nth.call(null,vec__8842,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.group.call(null,g,fs),iter__8835.call(null,cljs.core.rest.call(null,s__8836__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,new cljs.core.Keyword(null,"git-statuses","git-statuses",1990081325).cljs$core$IFn$_invoke$arity$1(this$));
})()], null)], null));var seq__8843_8912 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8844_8913 = null;var count__8845_8914 = 0;var i__8846_8915 = 0;while(true){
if((i__8846_8915 < count__8845_8914))
{var vec__8847_8916 = cljs.core._nth.call(null,chunk__8844_8913,i__8846_8915);var ev__8112__auto___8917 = cljs.core.nth.call(null,vec__8847_8916,0,null);var func__8113__auto___8918 = cljs.core.nth.call(null,vec__8847_8916,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8917,func__8113__auto___8918);
{
var G__8919 = seq__8843_8912;
var G__8920 = chunk__8844_8913;
var G__8921 = count__8845_8914;
var G__8922 = (i__8846_8915 + 1);
seq__8843_8912 = G__8919;
chunk__8844_8913 = G__8920;
count__8845_8914 = G__8921;
i__8846_8915 = G__8922;
continue;
}
} else
{var temp__4092__auto___8923 = cljs.core.seq.call(null,seq__8843_8912);if(temp__4092__auto___8923)
{var seq__8843_8924__$1 = temp__4092__auto___8923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8843_8924__$1))
{var c__7497__auto___8925 = cljs.core.chunk_first.call(null,seq__8843_8924__$1);{
var G__8926 = cljs.core.chunk_rest.call(null,seq__8843_8924__$1);
var G__8927 = c__7497__auto___8925;
var G__8928 = cljs.core.count.call(null,c__7497__auto___8925);
var G__8929 = 0;
seq__8843_8912 = G__8926;
chunk__8844_8913 = G__8927;
count__8845_8914 = G__8928;
i__8846_8915 = G__8929;
continue;
}
} else
{var vec__8848_8930 = cljs.core.first.call(null,seq__8843_8924__$1);var ev__8112__auto___8931 = cljs.core.nth.call(null,vec__8848_8930,0,null);var func__8113__auto___8932 = cljs.core.nth.call(null,vec__8848_8930,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8931,func__8113__auto___8932);
{
var G__8933 = cljs.core.next.call(null,seq__8843_8924__$1);
var G__8934 = null;
var G__8935 = 0;
var G__8936 = 0;
seq__8843_8912 = G__8933;
chunk__8844_8913 = G__8934;
count__8845_8914 = G__8935;
i__8846_8915 = G__8936;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.git-status","div.git-status",3669381948)], null));var seq__8855_8937 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8856_8938 = null;var count__8857_8939 = 0;var i__8858_8940 = 0;while(true){
if((i__8858_8940 < count__8857_8939))
{var vec__8859_8941 = cljs.core._nth.call(null,chunk__8856_8938,i__8858_8940);var ev__8112__auto___8942 = cljs.core.nth.call(null,vec__8859_8941,0,null);var func__8113__auto___8943 = cljs.core.nth.call(null,vec__8859_8941,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8942,func__8113__auto___8943);
{
var G__8944 = seq__8855_8937;
var G__8945 = chunk__8856_8938;
var G__8946 = count__8857_8939;
var G__8947 = (i__8858_8940 + 1);
seq__8855_8937 = G__8944;
chunk__8856_8938 = G__8945;
count__8857_8939 = G__8946;
i__8858_8940 = G__8947;
continue;
}
} else
{var temp__4092__auto___8948 = cljs.core.seq.call(null,seq__8855_8937);if(temp__4092__auto___8948)
{var seq__8855_8949__$1 = temp__4092__auto___8948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8855_8949__$1))
{var c__7497__auto___8950 = cljs.core.chunk_first.call(null,seq__8855_8949__$1);{
var G__8951 = cljs.core.chunk_rest.call(null,seq__8855_8949__$1);
var G__8952 = c__7497__auto___8950;
var G__8953 = cljs.core.count.call(null,c__7497__auto___8950);
var G__8954 = 0;
seq__8855_8937 = G__8951;
chunk__8856_8938 = G__8952;
count__8857_8939 = G__8953;
i__8858_8940 = G__8954;
continue;
}
} else
{var vec__8860_8955 = cljs.core.first.call(null,seq__8855_8949__$1);var ev__8112__auto___8956 = cljs.core.nth.call(null,vec__8860_8955,0,null);var func__8113__auto___8957 = cljs.core.nth.call(null,vec__8860_8955,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8956,func__8113__auto___8957);
{
var G__8958 = cljs.core.next.call(null,seq__8855_8949__$1);
var G__8959 = null;
var G__8960 = 0;
var G__8961 = 0;
seq__8855_8937 = G__8958;
chunk__8856_8938 = G__8959;
count__8857_8939 = G__8960;
i__8858_8940 = G__8961;
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
lt.plugins.gitlight.status.ui.__BEH__update = (function __BEH__update(obj){console.log("?");
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))));
new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)).innerHTML = "";
return lt.util.dom.append.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),lt.plugins.gitlight.status.ui.status_ui.call(null,cljs.core.deref.call(null,obj)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.ui.__BEH__update,new cljs.core.Keyword(null,"desc","desc",1016984067),"update status view",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"GIT",new cljs.core.Keyword(null,"git-statuses","git-statuses",1990081325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zygmunt.txt"], null),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"staged","staged",4416376984),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731)], null),new cljs.core.Keyword(null,"order","order",1119910592),2,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.status.ui.wrapper.call(null,cljs.core.deref.call(null,this$));
}));
lt.plugins.gitlight.status.ui.status_bar = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620));
lt.plugins.gitlight.status.ui.sb = lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.gitlight.status.ui.status_bar);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Status",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){console.log(Math.random());
lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.gitlight.status.ui.status_bar);
return console.log("que");
})], null));
}

//# sourceMappingURL=gitlight_compiled.js.map