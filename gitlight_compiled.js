if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.hello_panel = (function hello_panel(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from gitlight"], null));var seq__8201_8217 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8202_8218 = null;var count__8203_8219 = 0;var i__8204_8220 = 0;while(true){
if((i__8204_8220 < count__8203_8219))
{var vec__8205_8221 = cljs.core._nth.call(null,chunk__8202_8218,i__8204_8220);var ev__8112__auto___8222 = cljs.core.nth.call(null,vec__8205_8221,0,null);var func__8113__auto___8223 = cljs.core.nth.call(null,vec__8205_8221,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8222,func__8113__auto___8223);
{
var G__8224 = seq__8201_8217;
var G__8225 = chunk__8202_8218;
var G__8226 = count__8203_8219;
var G__8227 = (i__8204_8220 + 1);
seq__8201_8217 = G__8224;
chunk__8202_8218 = G__8225;
count__8203_8219 = G__8226;
i__8204_8220 = G__8227;
continue;
}
} else
{var temp__4092__auto___8228 = cljs.core.seq.call(null,seq__8201_8217);if(temp__4092__auto___8228)
{var seq__8201_8229__$1 = temp__4092__auto___8228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8201_8229__$1))
{var c__7497__auto___8230 = cljs.core.chunk_first.call(null,seq__8201_8229__$1);{
var G__8231 = cljs.core.chunk_rest.call(null,seq__8201_8229__$1);
var G__8232 = c__7497__auto___8230;
var G__8233 = cljs.core.count.call(null,c__7497__auto___8230);
var G__8234 = 0;
seq__8201_8217 = G__8231;
chunk__8202_8218 = G__8232;
count__8203_8219 = G__8233;
i__8204_8220 = G__8234;
continue;
}
} else
{var vec__8206_8235 = cljs.core.first.call(null,seq__8201_8229__$1);var ev__8112__auto___8236 = cljs.core.nth.call(null,vec__8206_8235,0,null);var func__8113__auto___8237 = cljs.core.nth.call(null,vec__8206_8235,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8236,func__8113__auto___8237);
{
var G__8238 = cljs.core.next.call(null,seq__8201_8229__$1);
var G__8239 = null;
var G__8240 = 0;
var G__8241 = 0;
seq__8201_8217 = G__8238;
chunk__8202_8218 = G__8239;
count__8203_8219 = G__8240;
i__8204_8220 = G__8241;
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
lt.plugins.gitlight.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8242 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8242))
{var ts_8243 = temp__4092__auto___8242;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8243))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8243);
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