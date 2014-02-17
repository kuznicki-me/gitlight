if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.gitlight.hello_panel = (function hello_panel(this$){var e__8111__auto__ = crate.core.html.call(null,(function (){var filename = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),[cljs.core.str(filename)].join('')], null);
})());var seq__10144_10150 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10145_10151 = null;var count__10146_10152 = 0;var i__10147_10153 = 0;while(true){
if((i__10147_10153 < count__10146_10152))
{var vec__10148_10154 = cljs.core._nth.call(null,chunk__10145_10151,i__10147_10153);var ev__8112__auto___10155 = cljs.core.nth.call(null,vec__10148_10154,0,null);var func__8113__auto___10156 = cljs.core.nth.call(null,vec__10148_10154,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10155,func__8113__auto___10156);
{
var G__10157 = seq__10144_10150;
var G__10158 = chunk__10145_10151;
var G__10159 = count__10146_10152;
var G__10160 = (i__10147_10153 + 1);
seq__10144_10150 = G__10157;
chunk__10145_10151 = G__10158;
count__10146_10152 = G__10159;
i__10147_10153 = G__10160;
continue;
}
} else
{var temp__4092__auto___10161 = cljs.core.seq.call(null,seq__10144_10150);if(temp__4092__auto___10161)
{var seq__10144_10162__$1 = temp__4092__auto___10161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10144_10162__$1))
{var c__7497__auto___10163 = cljs.core.chunk_first.call(null,seq__10144_10162__$1);{
var G__10164 = cljs.core.chunk_rest.call(null,seq__10144_10162__$1);
var G__10165 = c__7497__auto___10163;
var G__10166 = cljs.core.count.call(null,c__7497__auto___10163);
var G__10167 = 0;
seq__10144_10150 = G__10164;
chunk__10145_10151 = G__10165;
count__10146_10152 = G__10166;
i__10147_10153 = G__10167;
continue;
}
} else
{var vec__10149_10168 = cljs.core.first.call(null,seq__10144_10162__$1);var ev__8112__auto___10169 = cljs.core.nth.call(null,vec__10149_10168,0,null);var func__8113__auto___10170 = cljs.core.nth.call(null,vec__10149_10168,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___10169,func__8113__auto___10170);
{
var G__10171 = cljs.core.next.call(null,seq__10144_10162__$1);
var G__10172 = null;
var G__10173 = 0;
var G__10174 = 0;
seq__10144_10150 = G__10171;
chunk__10145_10151 = G__10172;
count__10146_10152 = G__10173;
i__10147_10153 = G__10174;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","gitlight.hello","lt.plugins.gitlight/gitlight.hello",3719843504),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight.hello","gitlight.hello",2537569882)], null),new cljs.core.Keyword(null,"name","name",1017277949),"gitlight",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.hello_panel.call(null,this$);
}));
lt.plugins.gitlight.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___10175 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___10175))
{var ts_10176 = temp__4092__auto___10175;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_10176))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_10176);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","on-close-destroy","lt.plugins.gitlight/on-close-destroy",882287967),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.gitlight.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight","gitlight.hello","lt.plugins.gitlight/gitlight.hello",3719843504));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight","say-hello","lt.plugins.gitlight/say-hello",3329986344),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.gitlight.hello);
})], null));
}

//# sourceMappingURL=gitlight_compiled.js.map