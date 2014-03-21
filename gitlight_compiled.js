if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.config = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),null], null), null),new cljs.core.Keyword(null,"git-status-refresh-rate","git-status-refresh-rate",1535627140),1000,new cljs.core.Keyword(null,"git-binary","git-binary",1640221134),"/usr/bin/git"));
lt.plugins.gitlight.__BEH__config = (function __BEH__config(this$,new_config){return lt.object.merge_BANG_.call(null,lt.plugins.gitlight.config,new_config);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.__BEH__config,new cljs.core.Keyword(null,"desc","desc",1016984067),"Configure gitlight",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.plugins.gitlight.__BEH__popup_error = (function __BEH__popup_error(obj){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't guess git root",new cljs.core.Keyword(null,"body","body",1016933652),"Please rerun the command again on a file that is in a git repo.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","popup-error","lt.plugins.gitlight/popup-error",1374664047),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.__BEH__popup_error,new cljs.core.Keyword(null,"desc","desc",1016984067),"Raise error popup.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raise-error-popup","raise-error-popup",3751697336),null], null), null));
lt.plugins.gitlight.error = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","error","lt.plugins.gitlight/error",866896272),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight","error","lt.plugins.gitlight/error",866896272),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight","popup-error","lt.plugins.gitlight/popup-error",1374664047)], null)));
}
if(!lt.util.load.provided_QMARK_('crate.binding')) {
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__7380__auto__,writer__7381__auto__,opt__7382__auto__){return cljs.core._write.call(null,writer__7381__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8597 = cljs.core.seq.call(null,self__.watches);var chunk__8598 = null;var count__8599 = 0;var i__8600 = 0;while(true){
if((i__8600 < count__8599))
{var vec__8601 = cljs.core._nth.call(null,chunk__8598,i__8600);var key__$1 = cljs.core.nth.call(null,vec__8601,0,null);var f = cljs.core.nth.call(null,vec__8601,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8676 = seq__8597;
var G__8677 = chunk__8598;
var G__8678 = count__8599;
var G__8679 = (i__8600 + 1);
seq__8597 = G__8676;
chunk__8598 = G__8677;
count__8599 = G__8678;
i__8600 = G__8679;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8597);if(temp__4092__auto__)
{var seq__8597__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8597__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8597__$1);{
var G__8680 = cljs.core.chunk_rest.call(null,seq__8597__$1);
var G__8681 = c__7561__auto__;
var G__8682 = cljs.core.count.call(null,c__7561__auto__);
var G__8683 = 0;
seq__8597 = G__8680;
chunk__8598 = G__8681;
count__8599 = G__8682;
i__8600 = G__8683;
continue;
}
} else
{var vec__8602 = cljs.core.first.call(null,seq__8597__$1);var key__$1 = cljs.core.nth.call(null,vec__8602,0,null);var f = cljs.core.nth.call(null,vec__8602,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8684 = cljs.core.next.call(null,seq__8597__$1);
var G__8685 = null;
var G__8686 = 0;
var G__8687 = 0;
seq__8597 = G__8684;
chunk__8598 = G__8685;
count__8599 = G__8686;
i__8600 = G__8687;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.atm))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8604 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8604,0,null);var path__$2 = cljs.core.nth.call(null,vec__8604,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
}));
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__8688__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8688 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8688__delegate.call(this,sa,f,x,y,z,more);};
G__8688.cljs$lang$maxFixedArity = 5;
G__8688.cljs$lang$applyTo = (function (arglist__8689){
var sa = cljs.core.first(arglist__8689);
arglist__8689 = cljs.core.next(arglist__8689);
var f = cljs.core.first(arglist__8689);
arglist__8689 = cljs.core.next(arglist__8689);
var x = cljs.core.first(arglist__8689);
arglist__8689 = cljs.core.next(arglist__8689);
var y = cljs.core.first(arglist__8689);
arglist__8689 = cljs.core.next(arglist__8689);
var z = cljs.core.first(arglist__8689);
var more = cljs.core.rest(arglist__8689);
return G__8688__delegate(sa,f,x,y,z,more);
});
G__8688.cljs$core$IFn$_invoke$arity$variadic = G__8688__delegate;
return G__8688;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj8606 = {};return obj8606;
})();
crate.binding._depend = (function _depend(this$,atm){if((function (){var and__6801__auto__ = this$;if(and__6801__auto__)
{return this$.crate$binding$computable$_depend$arity$2;
} else
{return and__6801__auto__;
}
})())
{return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else
{var x__7440__auto__ = (((this$ == null))?null:this$);return (function (){var or__6813__auto__ = (crate.binding._depend[goog.typeOf(x__7440__auto__)]);if(or__6813__auto__)
{return or__6813__auto__;
} else
{var or__6813__auto____$1 = (crate.binding._depend["_"]);if(or__6813__auto____$1)
{return or__6813__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});
crate.binding._compute = (function _compute(this$){if((function (){var and__6801__auto__ = this$;if(and__6801__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__6801__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__7440__auto__ = (((this$ == null))?null:this$);return (function (){var or__6813__auto__ = (crate.binding._compute[goog.typeOf(x__7440__auto__)]);if(or__6813__auto__)
{return or__6813__auto__;
} else
{var or__6813__auto____$1 = (crate.binding._compute["_"]);if(or__6813__auto____$1)
{return or__6813__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__7380__auto__,writer__7381__auto__,opt__7382__auto__){return cljs.core._write.call(null,writer__7381__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){var self__ = this;
var this$__$1 = this;this$__$1.atms = cljs.core.conj.call(null,this$__$1.atms,atm);
return cljs.core.add_watch.call(null,atm,self__.key,(function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,this$__$1);
}));
});
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;var nv = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));this$__$1.value = nv;
return cljs.core._notify_watches.call(null,this$__$1,old,nv);
});
crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8607 = cljs.core.seq.call(null,self__.watches);var chunk__8608 = null;var count__8609 = 0;var i__8610 = 0;while(true){
if((i__8610 < count__8609))
{var vec__8611 = cljs.core._nth.call(null,chunk__8608,i__8610);var key__$1 = cljs.core.nth.call(null,vec__8611,0,null);var f = cljs.core.nth.call(null,vec__8611,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8690 = seq__8607;
var G__8691 = chunk__8608;
var G__8692 = count__8609;
var G__8693 = (i__8610 + 1);
seq__8607 = G__8690;
chunk__8608 = G__8691;
count__8609 = G__8692;
i__8610 = G__8693;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8607);if(temp__4092__auto__)
{var seq__8607__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8607__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8607__$1);{
var G__8694 = cljs.core.chunk_rest.call(null,seq__8607__$1);
var G__8695 = c__7561__auto__;
var G__8696 = cljs.core.count.call(null,c__7561__auto__);
var G__8697 = 0;
seq__8607 = G__8694;
chunk__8608 = G__8695;
count__8609 = G__8696;
i__8610 = G__8697;
continue;
}
} else
{var vec__8612 = cljs.core.first.call(null,seq__8607__$1);var key__$1 = cljs.core.nth.call(null,vec__8612,0,null);var f = cljs.core.nth.call(null,vec__8612,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8698 = cljs.core.next.call(null,seq__8607__$1);
var G__8699 = null;
var G__8700 = 0;
var G__8701 = 0;
seq__8607 = G__8698;
chunk__8608 = G__8699;
count__8609 = G__8700;
i__8610 = G__8701;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));crate.binding._compute.call(null,neue);
var seq__8617_8702 = cljs.core.seq.call(null,atms);var chunk__8618_8703 = null;var count__8619_8704 = 0;var i__8620_8705 = 0;while(true){
if((i__8620_8705 < count__8619_8704))
{var atm_8706 = cljs.core._nth.call(null,chunk__8618_8703,i__8620_8705);crate.binding._depend.call(null,neue,atm_8706);
{
var G__8707 = seq__8617_8702;
var G__8708 = chunk__8618_8703;
var G__8709 = count__8619_8704;
var G__8710 = (i__8620_8705 + 1);
seq__8617_8702 = G__8707;
chunk__8618_8703 = G__8708;
count__8619_8704 = G__8709;
i__8620_8705 = G__8710;
continue;
}
} else
{var temp__4092__auto___8711 = cljs.core.seq.call(null,seq__8617_8702);if(temp__4092__auto___8711)
{var seq__8617_8712__$1 = temp__4092__auto___8711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8617_8712__$1))
{var c__7561__auto___8713 = cljs.core.chunk_first.call(null,seq__8617_8712__$1);{
var G__8714 = cljs.core.chunk_rest.call(null,seq__8617_8712__$1);
var G__8715 = c__7561__auto___8713;
var G__8716 = cljs.core.count.call(null,c__7561__auto___8713);
var G__8717 = 0;
seq__8617_8702 = G__8714;
chunk__8618_8703 = G__8715;
count__8619_8704 = G__8716;
i__8620_8705 = G__8717;
continue;
}
} else
{var atm_8718 = cljs.core.first.call(null,seq__8617_8712__$1);crate.binding._depend.call(null,neue,atm_8718);
{
var G__8719 = cljs.core.next.call(null,seq__8617_8712__$1);
var G__8720 = null;
var G__8721 = 0;
var G__8722 = 0;
seq__8617_8702 = G__8719;
chunk__8618_8703 = G__8720;
count__8619_8704 = G__8721;
i__8620_8705 = G__8722;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.compute = (function compute(compu){return crate.binding._compute.call(null,compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){return crate.binding._depend.call(null,compu,atm);
});
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj8622 = {};return obj8622;
})();
crate.binding.bindable = (function (){var obj8624 = {};return obj8624;
})();
crate.binding._value = (function _value(this$){if((function (){var and__6801__auto__ = this$;if(and__6801__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__6801__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__7440__auto__ = (((this$ == null))?null:this$);return (function (){var or__6813__auto__ = (crate.binding._value[goog.typeOf(x__7440__auto__)]);if(or__6813__auto__)
{return or__6813__auto__;
} else
{var or__6813__auto____$1 = (crate.binding._value["_"]);if(or__6813__auto____$1)
{return or__6813__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__6801__auto__ = this$;if(and__6801__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__6801__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__7440__auto__ = (((this$ == null))?null:this$);return (function (){var or__6813__auto__ = (crate.binding._on_change[goog.typeOf(x__7440__auto__)]);if(or__6813__auto__)
{return or__6813__auto__;
} else
{var or__6813__auto____$1 = (crate.binding._on_change["_"]);if(or__6813__auto____$1)
{return or__6813__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__7380__auto__,writer__7381__auto__,opt__7382__auto__){return cljs.core._write.call(null,writer__7381__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),(function (){return func.call(null,crate.binding._value.call(null,this$__$1));
}));
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__7380__auto__,writer__7381__auto__,opt__7382__auto__){return cljs.core._write.call(null,writer__7381__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8625 = cljs.core.seq.call(null,self__.watches);var chunk__8626 = null;var count__8627 = 0;var i__8628 = 0;while(true){
if((i__8628 < count__8627))
{var vec__8629 = cljs.core._nth.call(null,chunk__8626,i__8628);var key = cljs.core.nth.call(null,vec__8629,0,null);var f = cljs.core.nth.call(null,vec__8629,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8723 = seq__8625;
var G__8724 = chunk__8626;
var G__8725 = count__8627;
var G__8726 = (i__8628 + 1);
seq__8625 = G__8723;
chunk__8626 = G__8724;
count__8627 = G__8725;
i__8628 = G__8726;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8625);if(temp__4092__auto__)
{var seq__8625__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8625__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8625__$1);{
var G__8727 = cljs.core.chunk_rest.call(null,seq__8625__$1);
var G__8728 = c__7561__auto__;
var G__8729 = cljs.core.count.call(null,c__7561__auto__);
var G__8730 = 0;
seq__8625 = G__8727;
chunk__8626 = G__8728;
count__8627 = G__8729;
i__8628 = G__8730;
continue;
}
} else
{var vec__8630 = cljs.core.first.call(null,seq__8625__$1);var key = cljs.core.nth.call(null,vec__8630,0,null);var f = cljs.core.nth.call(null,vec__8630,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8731 = cljs.core.next.call(null,seq__8625__$1);
var G__8732 = null;
var G__8733 = 0;
var G__8734 = 0;
seq__8625 = G__8731;
chunk__8626 = G__8732;
count__8627 = G__8733;
i__8628 = G__8734;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__7380__auto__,writer__7381__auto__,opt__7382__auto__){return cljs.core._write.call(null,writer__7381__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__8631){var vec__8632 = p__8631;var event = cljs.core.nth.call(null,vec__8632,0,null);var el = cljs.core.nth.call(null,vec__8632,1,null);var v = cljs.core.nth.call(null,vec__8632,2,null);return func.call(null,event,el,v);
}));
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__6813__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__8735){
var bc = cljs.core.first(arglist__8735);
var segs = cljs.core.rest(arglist__8735);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8641_8736 = cljs.core.seq.call(null,added);var chunk__8642_8737 = null;var count__8643_8738 = 0;var i__8644_8739 = 0;while(true){
if((i__8644_8739 < count__8643_8738))
{var a_8740 = cljs.core._nth.call(null,chunk__8642_8737,i__8644_8739);crate.binding.bc_add.call(null,bc,a_8740,a_8740);
{
var G__8741 = seq__8641_8736;
var G__8742 = chunk__8642_8737;
var G__8743 = count__8643_8738;
var G__8744 = (i__8644_8739 + 1);
seq__8641_8736 = G__8741;
chunk__8642_8737 = G__8742;
count__8643_8738 = G__8743;
i__8644_8739 = G__8744;
continue;
}
} else
{var temp__4092__auto___8745 = cljs.core.seq.call(null,seq__8641_8736);if(temp__4092__auto___8745)
{var seq__8641_8746__$1 = temp__4092__auto___8745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8641_8746__$1))
{var c__7561__auto___8747 = cljs.core.chunk_first.call(null,seq__8641_8746__$1);{
var G__8748 = cljs.core.chunk_rest.call(null,seq__8641_8746__$1);
var G__8749 = c__7561__auto___8747;
var G__8750 = cljs.core.count.call(null,c__7561__auto___8747);
var G__8751 = 0;
seq__8641_8736 = G__8748;
chunk__8642_8737 = G__8749;
count__8643_8738 = G__8750;
i__8644_8739 = G__8751;
continue;
}
} else
{var a_8752 = cljs.core.first.call(null,seq__8641_8746__$1);crate.binding.bc_add.call(null,bc,a_8752,a_8752);
{
var G__8753 = cljs.core.next.call(null,seq__8641_8746__$1);
var G__8754 = null;
var G__8755 = 0;
var G__8756 = 0;
seq__8641_8736 = G__8753;
chunk__8642_8737 = G__8754;
count__8643_8738 = G__8755;
i__8644_8739 = G__8756;
continue;
}
}
} else
{}
}
break;
}
var seq__8645 = cljs.core.seq.call(null,removed);var chunk__8646 = null;var count__8647 = 0;var i__8648 = 0;while(true){
if((i__8648 < count__8647))
{var r = cljs.core._nth.call(null,chunk__8646,i__8648);crate.binding.bc_remove.call(null,bc,r);
{
var G__8757 = seq__8645;
var G__8758 = chunk__8646;
var G__8759 = count__8647;
var G__8760 = (i__8648 + 1);
seq__8645 = G__8757;
chunk__8646 = G__8758;
count__8647 = G__8759;
i__8648 = G__8760;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8645);if(temp__4092__auto__)
{var seq__8645__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8645__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8645__$1);{
var G__8761 = cljs.core.chunk_rest.call(null,seq__8645__$1);
var G__8762 = c__7561__auto__;
var G__8763 = cljs.core.count.call(null,c__7561__auto__);
var G__8764 = 0;
seq__8645 = G__8761;
chunk__8646 = G__8762;
count__8647 = G__8763;
i__8648 = G__8764;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8645__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8765 = cljs.core.next.call(null,seq__8645__$1);
var G__8766 = null;
var G__8767 = 0;
var G__8768 = 0;
seq__8645 = G__8765;
chunk__8646 = G__8766;
count__8647 = G__8767;
i__8648 = G__8768;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__8649){var vec__8652 = p__8649;var path = cljs.core.nth.call(null,vec__8652,0,null);var opts = cljs.core.nth.call(null,vec__8652,1,null);var vec__8653 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8653,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8653,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8649 = null;if (arguments.length > 1) {
  p__8649 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8649);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8769){
var atm = cljs.core.first(arglist__8769);
var p__8649 = cljs.core.rest(arglist__8769);
return bound_coll__delegate(atm,p__8649);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8654){var vec__8656 = p__8654;var opts = cljs.core.nth.call(null,vec__8656,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8654 = null;if (arguments.length > 2) {
  p__8654 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8654);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8770){
var as = cljs.core.first(arglist__8770);
arglist__8770 = cljs.core.next(arglist__8770);
var atm = cljs.core.first(arglist__8770);
var p__8654 = cljs.core.rest(arglist__8770);
return map_bound__delegate(as,atm,p__8654);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8658 = b;if(G__8658)
{var bit__7463__auto__ = null;if(cljs.core.truth_((function (){var or__6813__auto__ = bit__7463__auto__;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return G__8658.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8658.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8658);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8658);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8660 = b;if(G__8660)
{var bit__7463__auto__ = null;if(cljs.core.truth_((function (){var or__6813__auto__ = bit__7463__auto__;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return G__8660.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8660.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8660);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8660);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8662 = atm;if(G__8662)
{var bit__7463__auto__ = (G__8662.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7463__auto__) || (G__8662.cljs$core$IDeref$))
{return true;
} else
{if((!G__8662.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8662);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8662);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__8663){var vec__8665 = p__8663;var func = cljs.core.nth.call(null,vec__8665,0,null);var func__$1 = (function (){var or__6813__auto__ = func;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8663 = null;if (arguments.length > 1) {
  p__8663 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8663);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8771){
var atm = cljs.core.first(arglist__8771);
var p__8663 = cljs.core.rest(arglist__8771);
return bound__delegate(atm,p__8663);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.common-ui')) {
goog.provide('lt.plugins.gitlight.common_ui');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('crate.binding');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.common_ui.button = (function button(n,f,fun){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8475_8520 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__8476_8521 = null;var count__8477_8522 = 0;var i__8478_8523 = 0;while(true){
if((i__8478_8523 < count__8477_8522))
{var vec__8479_8524 = cljs.core._nth.call(null,chunk__8476_8521,i__8478_8523);var ev__8184__auto___8525 = cljs.core.nth.call(null,vec__8479_8524,0,null);var func__8185__auto___8526 = cljs.core.nth.call(null,vec__8479_8524,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8525,func__8185__auto___8526);
{
var G__8527 = seq__8475_8520;
var G__8528 = chunk__8476_8521;
var G__8529 = count__8477_8522;
var G__8530 = (i__8478_8523 + 1);
seq__8475_8520 = G__8527;
chunk__8476_8521 = G__8528;
count__8477_8522 = G__8529;
i__8478_8523 = G__8530;
continue;
}
} else
{var temp__4092__auto___8531 = cljs.core.seq.call(null,seq__8475_8520);if(temp__4092__auto___8531)
{var seq__8475_8532__$1 = temp__4092__auto___8531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8475_8532__$1))
{var c__7561__auto___8533 = cljs.core.chunk_first.call(null,seq__8475_8532__$1);{
var G__8534 = cljs.core.chunk_rest.call(null,seq__8475_8532__$1);
var G__8535 = c__7561__auto___8533;
var G__8536 = cljs.core.count.call(null,c__7561__auto___8533);
var G__8537 = 0;
seq__8475_8520 = G__8534;
chunk__8476_8521 = G__8535;
count__8477_8522 = G__8536;
i__8478_8523 = G__8537;
continue;
}
} else
{var vec__8480_8538 = cljs.core.first.call(null,seq__8475_8532__$1);var ev__8184__auto___8539 = cljs.core.nth.call(null,vec__8480_8538,0,null);var func__8185__auto___8540 = cljs.core.nth.call(null,vec__8480_8538,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8539,func__8185__auto___8540);
{
var G__8541 = cljs.core.next.call(null,seq__8475_8532__$1);
var G__8542 = null;
var G__8543 = 0;
var G__8544 = 0;
seq__8475_8520 = G__8541;
chunk__8476_8521 = G__8542;
count__8477_8522 = G__8543;
i__8478_8523 = G__8544;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.common_ui.classy_button = (function classy_button(cls,n,f,fun){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8487_8545 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__8488_8546 = null;var count__8489_8547 = 0;var i__8490_8548 = 0;while(true){
if((i__8490_8548 < count__8489_8547))
{var vec__8491_8549 = cljs.core._nth.call(null,chunk__8488_8546,i__8490_8548);var ev__8184__auto___8550 = cljs.core.nth.call(null,vec__8491_8549,0,null);var func__8185__auto___8551 = cljs.core.nth.call(null,vec__8491_8549,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8550,func__8185__auto___8551);
{
var G__8552 = seq__8487_8545;
var G__8553 = chunk__8488_8546;
var G__8554 = count__8489_8547;
var G__8555 = (i__8490_8548 + 1);
seq__8487_8545 = G__8552;
chunk__8488_8546 = G__8553;
count__8489_8547 = G__8554;
i__8490_8548 = G__8555;
continue;
}
} else
{var temp__4092__auto___8556 = cljs.core.seq.call(null,seq__8487_8545);if(temp__4092__auto___8556)
{var seq__8487_8557__$1 = temp__4092__auto___8556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8487_8557__$1))
{var c__7561__auto___8558 = cljs.core.chunk_first.call(null,seq__8487_8557__$1);{
var G__8559 = cljs.core.chunk_rest.call(null,seq__8487_8557__$1);
var G__8560 = c__7561__auto___8558;
var G__8561 = cljs.core.count.call(null,c__7561__auto___8558);
var G__8562 = 0;
seq__8487_8545 = G__8559;
chunk__8488_8546 = G__8560;
count__8489_8547 = G__8561;
i__8490_8548 = G__8562;
continue;
}
} else
{var vec__8492_8563 = cljs.core.first.call(null,seq__8487_8557__$1);var ev__8184__auto___8564 = cljs.core.nth.call(null,vec__8492_8563,0,null);var func__8185__auto___8565 = cljs.core.nth.call(null,vec__8492_8563,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8564,func__8185__auto___8565);
{
var G__8566 = cljs.core.next.call(null,seq__8487_8557__$1);
var G__8567 = null;
var G__8568 = 0;
var G__8569 = 0;
seq__8487_8545 = G__8566;
chunk__8488_8546 = G__8567;
count__8489_8547 = G__8568;
i__8490_8548 = G__8569;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.common_ui.__GT_value = (function __GT_value(p__8493){var map__8495 = p__8493;var map__8495__$1 = ((cljs.core.seq_QMARK_.call(null,map__8495))?cljs.core.apply.call(null,cljs.core.hash_map,map__8495):map__8495);var value = cljs.core.get.call(null,map__8495__$1,new cljs.core.Keyword(null,"value","value",1125876963));if(cljs.core.not.call(null,value))
{return "";
} else
{return value;
}
});
lt.plugins.gitlight.common_ui.input = (function input(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.option","input.option",1495945867),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013)),new cljs.core.Keyword(null,"value","value",1125876963),crate.binding.bound.call(null,this$,lt.plugins.gitlight.common_ui.__GT_value)], null)], null));var seq__8502_8570 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){var me = this;return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.common_ui.common_input)),lt.util.dom.val.call(null,me));
})], null)));var chunk__8503_8571 = null;var count__8504_8572 = 0;var i__8505_8573 = 0;while(true){
if((i__8505_8573 < count__8504_8572))
{var vec__8506_8574 = cljs.core._nth.call(null,chunk__8503_8571,i__8505_8573);var ev__8184__auto___8575 = cljs.core.nth.call(null,vec__8506_8574,0,null);var func__8185__auto___8576 = cljs.core.nth.call(null,vec__8506_8574,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8575,func__8185__auto___8576);
{
var G__8577 = seq__8502_8570;
var G__8578 = chunk__8503_8571;
var G__8579 = count__8504_8572;
var G__8580 = (i__8505_8573 + 1);
seq__8502_8570 = G__8577;
chunk__8503_8571 = G__8578;
count__8504_8572 = G__8579;
i__8505_8573 = G__8580;
continue;
}
} else
{var temp__4092__auto___8581 = cljs.core.seq.call(null,seq__8502_8570);if(temp__4092__auto___8581)
{var seq__8502_8582__$1 = temp__4092__auto___8581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8502_8582__$1))
{var c__7561__auto___8583 = cljs.core.chunk_first.call(null,seq__8502_8582__$1);{
var G__8584 = cljs.core.chunk_rest.call(null,seq__8502_8582__$1);
var G__8585 = c__7561__auto___8583;
var G__8586 = cljs.core.count.call(null,c__7561__auto___8583);
var G__8587 = 0;
seq__8502_8570 = G__8584;
chunk__8503_8571 = G__8585;
count__8504_8572 = G__8586;
i__8505_8573 = G__8587;
continue;
}
} else
{var vec__8507_8588 = cljs.core.first.call(null,seq__8502_8582__$1);var ev__8184__auto___8589 = cljs.core.nth.call(null,vec__8507_8588,0,null);var func__8185__auto___8590 = cljs.core.nth.call(null,vec__8507_8588,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8589,func__8185__auto___8590);
{
var G__8591 = cljs.core.next.call(null,seq__8502_8582__$1);
var G__8592 = null;
var G__8593 = 0;
var G__8594 = 0;
seq__8502_8570 = G__8591;
chunk__8503_8571 = G__8592;
count__8504_8572 = G__8593;
i__8505_8573 = G__8594;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","common-input","lt.plugins.gitlight.common-ui/common-input",2194365018),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"commit-input","commit-input",3492250406),null], null), null),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"message",new cljs.core.Keyword(null,"message","message",1968829305),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){lt.object.merge_BANG_.call(null,this$,opts);
return lt.plugins.gitlight.common_ui.input.call(null,this$);
}));
lt.plugins.gitlight.common_ui.common_input = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","common-input","lt.plugins.gitlight.common-ui/common-input",2194365018));
lt.plugins.gitlight.common_ui.mesg_atom = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.common_ui.common_input));
lt.plugins.gitlight.common_ui.handle_input_and_clear = (function handle_input_and_clear(fun){cljs.core.apply.call(null,fun,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,lt.plugins.gitlight.common_ui.mesg_atom)], null));
return lt.plugins.gitlight.common_ui.clear_input.call(null);
});
lt.plugins.gitlight.common_ui.clear_input = (function clear_input(){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.common_ui.mesg_atom,null);
});
lt.plugins.gitlight.common_ui.input_popup = (function input_popup(mesg,label,fun){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),mesg,new cljs.core.Keyword(null,"body","body",1016933652),lt.plugins.gitlight.common_ui.input.call(null,lt.plugins.gitlight.common_ui.common_input),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),label,new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.plugins.gitlight.common_ui.handle_input_and_clear.call(null,fun);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel",new cljs.core.Keyword(null,"action","action",3885920680),lt.plugins.gitlight.common_ui.clear_input], null)], null)], null));
});
lt.plugins.gitlight.common_ui.dom_truncate = (function dom_truncate(node){return node.innerHTML = "";
});
lt.plugins.gitlight.common_ui.dom_reset = (function dom_reset(node,new_cnt){lt.plugins.gitlight.common_ui.dom_truncate.call(null,node);
return lt.util.dom.append.call(null,node,new_cnt);
});
lt.plugins.gitlight.common_ui.make_refresh_behavior = (function make_refresh_behavior(k,ui_fun){lt.plugins.gitlight.common_ui.__BEH__k = (function __BEH__k(this$){var new_cnt = ui_fun.call(null,this$);lt.plugins.gitlight.common_ui.dom_reset.call(null,lt.util.dom.parent.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),new_cnt);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),new_cnt], null));
});
return lt.object.behavior_STAR_.call(null,k,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__k,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
});
lt.plugins.gitlight.common_ui.make_refresh_tab_behavior = (function make_refresh_tab_behavior(obj,k){lt.plugins.gitlight.common_ui.__BEH__k = (function __BEH__k(this$,data,err){lt.objs.tabs.add_or_focus_BANG_.call(null,obj);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)),data);
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"refresh","refresh",2099349069));
});
return lt.object.behavior_STAR_.call(null,k,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__k,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
});
lt.plugins.gitlight.common_ui.make_keywords = (function make_keywords(k){var kwrdstr = cljs.core.subs.call(null,[cljs.core.str(k)].join(''),1);return cljs.core.map.call(null,(function (x){return cljs.core.keyword.call(null,[cljs.core.str(kwrdstr),cljs.core.str(x)].join(''));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-out","-refresh-results","-refresh-tab-results","-output"], null));
});
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,ui_fun){var vec__8509 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__8509,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__8509,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__8509,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__8509,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__8509,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return ui_fun.call(null,this$);
});})(vec__8509,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);var tab = lt.object.create.call(null,tab_obj);var command_output = lt.plugins.gitlight.common_ui.make_refresh_tab_behavior.call(null,tab,refresh_tab_kwd);return lt.object.create.call(null,lt.object.object_STAR_.call(null,command_output_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gitlight-tab-output","gitlight-tab-output",1332604564),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_output], null)));
});
lt.plugins.gitlight.common_ui.make_button = (function make_button(n,f,fun){return lt.plugins.gitlight.common_ui.button.call(null,n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.make_classy_button = (function make_classy_button(n,f,fun){return lt.plugins.gitlight.common_ui.classy_button.call(null,[cljs.core.str(n)].join(''),n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8595 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8595))
{var ts_8596 = temp__4092__auto___8595;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8596))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8596);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.execute')) {
goog.provide('lt.plugins.gitlight.execute');
goog.require('cljs.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.execute.exec = require("child_process").exec;
lt.plugins.gitlight.execute.run = (function run(return_obj,path,command,input){var child_proc = lt.plugins.gitlight.execute.exec.call(null,command,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",path], null)),(function (err,stdout,stderr){if(cljs.core.truth_(err))
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword(null,"err","err",1014004951),err,stderr);
} else
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword(null,"out","out",1014014656),stdout,stderr);
}
}));var proc_input = child_proc.stdin;return proc_input.end(input);
});
lt.plugins.gitlight.execute.run_deaf = (function run_deaf(return_obj,path,command){return lt.plugins.gitlight.execute.run.call(null,return_obj,path,command,"");
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.lib')) {
goog.provide('lt.plugins.gitlight.lib');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.lib.qu = (function qu(s){return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
lt.plugins.gitlight.lib.sanitize = (function sanitize(s){return clojure.string.escape.call(null,s,new cljs.core.PersistentArrayMap(null, 3, ["$","\\$","`","\\`","\"","\\\""], null));
});
lt.plugins.gitlight.lib.q_AMPERSAND_s = (function q_AMPERSAND_s(s){return lt.plugins.gitlight.lib.qu.call(null,lt.plugins.gitlight.lib.sanitize.call(null,s));
});
lt.plugins.gitlight.lib.qsprint = (function qsprint(s){return cljs.core.println.call(null,lt.plugins.gitlight.lib.q_AMPERSAND_s.call(null,s));
});
lt.plugins.gitlight.lib.popup = (function popup(){return lt.plugins.gitlight.common_ui.input_popup.call(null,"try to break us","commit",lt.plugins.gitlight.lib.qsprint);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.lib","input-test","lt.plugins.gitlight.lib/input-test",2633420103),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: input sanitize test",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.lib.popup], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.git')) {
goog.provide('lt.plugins.gitlight.git');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.lib');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.gitlight.execute');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.execute');
goog.require('lt.objs.proc');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.lib');
goog.require('lt.plugins.gitlight');
lt.plugins.gitlight.git.on_cwd_QMARK_ = (function on_cwd_QMARK_(){return !((lt.objs.editor.pool.last_active.call(null) == null));
});
lt.plugins.gitlight.git.get_cwd = (function get_cwd(){return lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
});
lt.plugins.gitlight.git.get_git_root = (function get_git_root(){if(lt.plugins.gitlight.git.on_cwd_QMARK_.call(null))
{var cwd = lt.objs.files.walk_up_find.call(null,lt.plugins.gitlight.git.get_cwd.call(null),".git");if(!((cwd == null)))
{return lt.objs.files.parent.call(null,cwd);
} else
{return null;
}
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
lt.plugins.gitlight.git.git_command_cwd = (function() { 
var git_command_cwd__delegate = function (obj,cwd,args){var git_path = new cljs.core.Keyword(null,"git-binary","git-binary",1640221134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config));var command = [cljs.core.str(git_path),cljs.core.str(" "),cljs.core.str(clojure.string.join.call(null," ",args))].join('');return lt.plugins.gitlight.execute.run_deaf.call(null,obj,cwd,command);
};
var git_command_cwd = function (obj,cwd,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return git_command_cwd__delegate.call(this,obj,cwd,args);};
git_command_cwd.cljs$lang$maxFixedArity = 2;
git_command_cwd.cljs$lang$applyTo = (function (arglist__10038){
var obj = cljs.core.first(arglist__10038);
arglist__10038 = cljs.core.next(arglist__10038);
var cwd = cljs.core.first(arglist__10038);
var args = cljs.core.rest(arglist__10038);
return git_command_cwd__delegate(obj,cwd,args);
});
git_command_cwd.cljs$core$IFn$_invoke$arity$variadic = git_command_cwd__delegate;
return git_command_cwd;
})()
;
/**
* @param {...*} var_args
*/
lt.plugins.gitlight.git.git_command = (function() { 
var git_command__delegate = function (obj,args){var cwd = lt.plugins.gitlight.git.get_git_root.call(null);return cljs.core.apply.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.git.git_command_cwd,obj,cwd),args);
};
var git_command = function (obj,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return git_command__delegate.call(this,obj,args);};
git_command.cljs$lang$maxFixedArity = 1;
git_command.cljs$lang$applyTo = (function (arglist__10039){
var obj = cljs.core.first(arglist__10039);
var args = cljs.core.rest(arglist__10039);
return git_command__delegate(obj,args);
});
git_command.cljs$core$IFn$_invoke$arity$variadic = git_command__delegate;
return git_command;
})()
;
/**
* @param {...*} var_args
*/
lt.plugins.gitlight.git.git_command_ignore_out = (function() { 
var git_command_ignore_out__delegate = function (args){return cljs.core.apply.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.git.git_command,lt.plugins.gitlight.git.git_ignore_out),args);
};
var git_command_ignore_out = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return git_command_ignore_out__delegate.call(this,args);};
git_command_ignore_out.cljs$lang$maxFixedArity = 0;
git_command_ignore_out.cljs$lang$applyTo = (function (arglist__10040){
var args = cljs.core.seq(arglist__10040);
return git_command_ignore_out__delegate(args);
});
git_command_ignore_out.cljs$core$IFn$_invoke$arity$variadic = git_command_ignore_out__delegate;
return git_command_ignore_out;
})()
;
lt.plugins.gitlight.git.git_add = (function git_add(filename){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"add","--",filename);
});
lt.plugins.gitlight.git.git_reset = (function git_reset(filename){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"reset","--",filename);
});
lt.plugins.gitlight.git.git_checkout_file = (function git_checkout_file(filename){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"checkout","--",filename);
});
lt.plugins.gitlight.git.git_commit = (function git_commit(){return lt.plugins.gitlight.common_ui.input_popup.call(null,"commit message?","commit",lt.plugins.gitlight.git.git_cmd_commit);
});
lt.plugins.gitlight.git.git_cmd_commit = (function git_cmd_commit(msg){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"commit","-m",lt.plugins.gitlight.lib.q_AMPERSAND_s.call(null,msg));
});
lt.plugins.gitlight.git.__BEH__ignore__DOT__out_success = (function __BEH__ignore__DOT__out_success(obj,data,err){return lt.objs.notifos.set_msg_BANG_.call(null,"git: success!");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-success","lt.plugins.gitlight.git/ignore.out-success",2272362317),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
lt.plugins.gitlight.git.__BEH__ignore__DOT__out_error = (function __BEH__ignore__DOT__out_error(obj,err,stderr){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("git failed!: "),cljs.core.str(stderr.toString())].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-error","lt.plugins.gitlight.git/ignore.out-error",2426640522),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out_error,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-add","lt.plugins.gitlight.git/git-add",3411206675),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: add this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_add.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-reset","lt.plugins.gitlight.git/git-reset",1466075745),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: reset this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_reset.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-checkout","lt.plugins.gitlight.git/git-checkout",2494382294),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: checkout this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_checkout.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-commit","lt.plugins.gitlight.git/git-commit",3023680103),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: commit",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.git.git_commit], null));
lt.plugins.gitlight.git.git_ignore_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","git-ignore-out","lt.plugins.gitlight.git/git-ignore-out",1518510219),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-ignore-out","git-ignore-out",3448111392)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-success","lt.plugins.gitlight.git/ignore.out-success",2272362317),new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-error","lt.plugins.gitlight.git/ignore.out-error",2426640522)], null)));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.diff')) {
goog.provide('lt.plugins.gitlight.diff');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.proc');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.diff.click_run_function_update = (function click_run_function_update(fun,up,x,y){fun.call(null);
return up.call(null);
});
lt.plugins.gitlight.diff.context = cljs.core.atom.call(null,3);
lt.plugins.gitlight.diff.last_filename = cljs.core.atom.call(null,null);
lt.plugins.gitlight.diff.git_diff_update_fun = (function git_diff_update_fun(){return lt.plugins.gitlight.diff.git_diff.call(null,cljs.core.deref.call(null,lt.plugins.gitlight.diff.last_filename));
});
lt.plugins.gitlight.diff.make_context = (function make_context(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context","div.context",3533479108),lt.plugins.gitlight.common_ui.make_button.call(null,"-","-",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.dec);
}),lt.plugins.gitlight.diff.git_diff_update_fun)),[cljs.core.str("context: "),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join(''),lt.plugins.gitlight.common_ui.make_button.call(null,"+","+",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.swap_BANG_.call(null,lt.plugins.gitlight.diff.context,cljs.core.inc);
}),lt.plugins.gitlight.diff.git_diff_update_fun))], null);
});
lt.plugins.gitlight.diff.make_more_context = (function make_more_context(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.more-context","div.more-context",3304815846),lt.plugins.gitlight.common_ui.make_button.call(null,"whole file","whole file",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,100000);
}),lt.plugins.gitlight.diff.git_diff_update_fun)),lt.plugins.gitlight.common_ui.make_button.call(null,"reset","reset",cljs.core.partial.call(null,lt.plugins.gitlight.diff.click_run_function_update,(function (){return cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.context,3);
}),lt.plugins.gitlight.diff.git_diff_update_fun))], null);
});
lt.plugins.gitlight.diff.diff_panel = (function diff_panel(this$){var e__8183__auto__ = crate.core.html.call(null,(function (){var output = new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-diff","div.gitlight-diff",3415869571),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),lt.plugins.gitlight.diff.make_context.call(null),lt.plugins.gitlight.diff.make_more_context.call(null),(function (){var iter__7530__auto__ = ((function (output){
return (function iter__9374(s__9375){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__9375__$1 = s__9375;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9375__$1);if(temp__4092__auto__)
{var s__9375__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9375__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9375__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9377 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9376 = 0;while(true){
if((i__9376 < size__7529__auto__))
{var file = cljs.core._nth.call(null,c__7528__auto__,i__9376);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);cljs.core.chunk_append.call(null,b__9377,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9376,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function iter__9674(s__9675){return (new cljs.core.LazySeq(null,((function (i__9376,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9675__$1 = s__9675;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9675__$1);if(temp__4092__auto____$1)
{var s__9675__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9675__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9675__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9677 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9676 = 0;while(true){
if((i__9676 < size__7529__auto____$1))
{var changes_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9676);cljs.core.chunk_append.call(null,b__9677,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9676,i__9376,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function iter__9750(s__9751){return (new cljs.core.LazySeq(null,((function (i__9676,i__9376,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9751__$1 = s__9751;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9751__$1);if(temp__4092__auto____$2)
{var s__9751__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9751__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9751__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9753 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9752 = 0;while(true){
if((i__9752 < size__7529__auto____$2))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$2,i__9752);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9753,(function (){var iter__7530__auto__ = ((function (i__9752,i__9676,i__9376,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9753,s__9751__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function iter__9770(s__9771){return (new cljs.core.LazySeq(null,((function (i__9752,i__9676,i__9376,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9753,s__9751__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9771__$1 = s__9771;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9771__$1);if(temp__4092__auto____$3)
{var s__9771__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9771__$2))
{var c__7528__auto____$3 = cljs.core.chunk_first.call(null,s__9771__$2);var size__7529__auto____$3 = cljs.core.count.call(null,c__7528__auto____$3);var b__9773 = cljs.core.chunk_buffer.call(null,size__7529__auto____$3);if((function (){var i__9772 = 0;while(true){
if((i__9772 < size__7529__auto____$3))
{var vec__9776 = cljs.core._nth.call(null,c__7528__auto____$3,i__9772);var left = cljs.core.nth.call(null,vec__9776,0,null);var right = cljs.core.nth.call(null,vec__9776,1,null);cljs.core.chunk_append.call(null,b__9773,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__9998 = (i__9772 + 1);
i__9772 = G__9998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9773),iter__9770.call(null,cljs.core.chunk_rest.call(null,s__9771__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9773),null);
}
} else
{var vec__9777 = cljs.core.first.call(null,s__9771__$2);var left = cljs.core.nth.call(null,vec__9777,0,null);var right = cljs.core.nth.call(null,vec__9777,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9770.call(null,cljs.core.rest.call(null,s__9771__$2)));
}
} else
{return null;
}
break;
}
});})(i__9752,i__9676,i__9376,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9753,s__9751__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(i__9752,i__9676,i__9376,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9753,s__9751__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__9999 = (i__9752 + 1);
i__9752 = G__9999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9753),iter__9750.call(null,cljs.core.chunk_rest.call(null,s__9751__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9753),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9751__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9676,i__9376,columned,c,columns,line_group,s__9751__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function iter__9778(s__9779){return (new cljs.core.LazySeq(null,((function (i__9676,i__9376,columned,c,columns,line_group,s__9751__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9779__$1 = s__9779;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9779__$1);if(temp__4092__auto____$3)
{var s__9779__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9779__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9779__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9781 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9780 = 0;while(true){
if((i__9780 < size__7529__auto____$2))
{var vec__9784 = cljs.core._nth.call(null,c__7528__auto____$2,i__9780);var left = cljs.core.nth.call(null,vec__9784,0,null);var right = cljs.core.nth.call(null,vec__9784,1,null);cljs.core.chunk_append.call(null,b__9781,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10000 = (i__9780 + 1);
i__9780 = G__10000;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9781),iter__9778.call(null,cljs.core.chunk_rest.call(null,s__9779__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9781),null);
}
} else
{var vec__9785 = cljs.core.first.call(null,s__9779__$2);var left = cljs.core.nth.call(null,vec__9785,0,null);var right = cljs.core.nth.call(null,vec__9785,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9778.call(null,cljs.core.rest.call(null,s__9779__$2)));
}
} else
{return null;
}
break;
}
});})(i__9676,i__9376,columned,c,columns,line_group,s__9751__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(i__9676,i__9376,columned,c,columns,line_group,s__9751__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9750.call(null,cljs.core.rest.call(null,s__9751__$2)));
}
} else
{return null;
}
break;
}
});})(i__9676,i__9376,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(i__9676,i__9376,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9677,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__10001 = (i__9676 + 1);
i__9676 = G__10001;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9677),iter__9674.call(null,cljs.core.chunk_rest.call(null,s__9675__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9677),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9675__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9376,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function iter__9786(s__9787){return (new cljs.core.LazySeq(null,((function (i__9376,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9787__$1 = s__9787;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9787__$1);if(temp__4092__auto____$2)
{var s__9787__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9787__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9787__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9789 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9788 = 0;while(true){
if((i__9788 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9788);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9789,(function (){var iter__7530__auto__ = ((function (i__9788,i__9376,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9789,s__9787__$2,temp__4092__auto____$2,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function iter__9806(s__9807){return (new cljs.core.LazySeq(null,((function (i__9788,i__9376,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9789,s__9787__$2,temp__4092__auto____$2,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9807__$1 = s__9807;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9807__$1);if(temp__4092__auto____$3)
{var s__9807__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9807__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9807__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9809 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9808 = 0;while(true){
if((i__9808 < size__7529__auto____$2))
{var vec__9812 = cljs.core._nth.call(null,c__7528__auto____$2,i__9808);var left = cljs.core.nth.call(null,vec__9812,0,null);var right = cljs.core.nth.call(null,vec__9812,1,null);cljs.core.chunk_append.call(null,b__9809,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10002 = (i__9808 + 1);
i__9808 = G__10002;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9809),iter__9806.call(null,cljs.core.chunk_rest.call(null,s__9807__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9809),null);
}
} else
{var vec__9813 = cljs.core.first.call(null,s__9807__$2);var left = cljs.core.nth.call(null,vec__9813,0,null);var right = cljs.core.nth.call(null,vec__9813,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9806.call(null,cljs.core.rest.call(null,s__9807__$2)));
}
} else
{return null;
}
break;
}
});})(i__9788,i__9376,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9789,s__9787__$2,temp__4092__auto____$2,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(i__9788,i__9376,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9789,s__9787__$2,temp__4092__auto____$2,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10003 = (i__9788 + 1);
i__9788 = G__10003;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9789),iter__9786.call(null,cljs.core.chunk_rest.call(null,s__9787__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9789),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9787__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9376,columned,c,columns,line_group,s__9787__$2,temp__4092__auto____$2,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function iter__9814(s__9815){return (new cljs.core.LazySeq(null,((function (i__9376,columned,c,columns,line_group,s__9787__$2,temp__4092__auto____$2,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9815__$1 = s__9815;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9815__$1);if(temp__4092__auto____$3)
{var s__9815__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9815__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9815__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9817 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9816 = 0;while(true){
if((i__9816 < size__7529__auto____$1))
{var vec__9820 = cljs.core._nth.call(null,c__7528__auto____$1,i__9816);var left = cljs.core.nth.call(null,vec__9820,0,null);var right = cljs.core.nth.call(null,vec__9820,1,null);cljs.core.chunk_append.call(null,b__9817,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10004 = (i__9816 + 1);
i__9816 = G__10004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9817),iter__9814.call(null,cljs.core.chunk_rest.call(null,s__9815__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9817),null);
}
} else
{var vec__9821 = cljs.core.first.call(null,s__9815__$2);var left = cljs.core.nth.call(null,vec__9821,0,null);var right = cljs.core.nth.call(null,vec__9821,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9814.call(null,cljs.core.rest.call(null,s__9815__$2)));
}
} else
{return null;
}
break;
}
});})(i__9376,columned,c,columns,line_group,s__9787__$2,temp__4092__auto____$2,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(i__9376,columned,c,columns,line_group,s__9787__$2,temp__4092__auto____$2,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9786.call(null,cljs.core.rest.call(null,s__9787__$2)));
}
} else
{return null;
}
break;
}
});})(i__9376,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(i__9376,changes_group,s__9675__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9674.call(null,cljs.core.rest.call(null,s__9675__$2)));
}
} else
{return null;
}
break;
}
});})(i__9376,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(i__9376,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9377,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null));
{
var G__10005 = (i__9376 + 1);
i__9376 = G__10005;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9377),iter__9374.call(null,cljs.core.chunk_rest.call(null,s__9375__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9377),null);
}
} else
{var file = cljs.core.first.call(null,s__9375__$2);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function iter__9822(s__9823){return (new cljs.core.LazySeq(null,((function (filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9823__$1 = s__9823;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9823__$1);if(temp__4092__auto____$1)
{var s__9823__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9823__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9823__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9825 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9824 = 0;while(true){
if((i__9824 < size__7529__auto__))
{var changes_group = cljs.core._nth.call(null,c__7528__auto__,i__9824);cljs.core.chunk_append.call(null,b__9825,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9824,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function iter__9898(s__9899){return (new cljs.core.LazySeq(null,((function (i__9824,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9899__$1 = s__9899;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9899__$1);if(temp__4092__auto____$2)
{var s__9899__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9899__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9899__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9901 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9900 = 0;while(true){
if((i__9900 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9900);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9901,(function (){var iter__7530__auto__ = ((function (i__9900,i__9824,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9901,s__9899__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function iter__9918(s__9919){return (new cljs.core.LazySeq(null,((function (i__9900,i__9824,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9901,s__9899__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9919__$1 = s__9919;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9919__$1);if(temp__4092__auto____$3)
{var s__9919__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9919__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9919__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9921 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9920 = 0;while(true){
if((i__9920 < size__7529__auto____$2))
{var vec__9924 = cljs.core._nth.call(null,c__7528__auto____$2,i__9920);var left = cljs.core.nth.call(null,vec__9924,0,null);var right = cljs.core.nth.call(null,vec__9924,1,null);cljs.core.chunk_append.call(null,b__9921,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10006 = (i__9920 + 1);
i__9920 = G__10006;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9921),iter__9918.call(null,cljs.core.chunk_rest.call(null,s__9919__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9921),null);
}
} else
{var vec__9925 = cljs.core.first.call(null,s__9919__$2);var left = cljs.core.nth.call(null,vec__9925,0,null);var right = cljs.core.nth.call(null,vec__9925,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9918.call(null,cljs.core.rest.call(null,s__9919__$2)));
}
} else
{return null;
}
break;
}
});})(i__9900,i__9824,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9901,s__9899__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(i__9900,i__9824,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9901,s__9899__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10007 = (i__9900 + 1);
i__9900 = G__10007;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9901),iter__9898.call(null,cljs.core.chunk_rest.call(null,s__9899__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9901),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9899__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9824,columned,c,columns,line_group,s__9899__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function iter__9926(s__9927){return (new cljs.core.LazySeq(null,((function (i__9824,columned,c,columns,line_group,s__9899__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9927__$1 = s__9927;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9927__$1);if(temp__4092__auto____$3)
{var s__9927__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9927__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9927__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9929 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9928 = 0;while(true){
if((i__9928 < size__7529__auto____$1))
{var vec__9932 = cljs.core._nth.call(null,c__7528__auto____$1,i__9928);var left = cljs.core.nth.call(null,vec__9932,0,null);var right = cljs.core.nth.call(null,vec__9932,1,null);cljs.core.chunk_append.call(null,b__9929,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10008 = (i__9928 + 1);
i__9928 = G__10008;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9929),iter__9926.call(null,cljs.core.chunk_rest.call(null,s__9927__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9929),null);
}
} else
{var vec__9933 = cljs.core.first.call(null,s__9927__$2);var left = cljs.core.nth.call(null,vec__9933,0,null);var right = cljs.core.nth.call(null,vec__9933,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9926.call(null,cljs.core.rest.call(null,s__9927__$2)));
}
} else
{return null;
}
break;
}
});})(i__9824,columned,c,columns,line_group,s__9899__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(i__9824,columned,c,columns,line_group,s__9899__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9898.call(null,cljs.core.rest.call(null,s__9899__$2)));
}
} else
{return null;
}
break;
}
});})(i__9824,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(i__9824,changes_group,c__7528__auto__,size__7529__auto__,b__9825,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__10009 = (i__9824 + 1);
i__9824 = G__10009;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9825),iter__9822.call(null,cljs.core.chunk_rest.call(null,s__9823__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9825),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9823__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function iter__9934(s__9935){return (new cljs.core.LazySeq(null,((function (changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9935__$1 = s__9935;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9935__$1);if(temp__4092__auto____$2)
{var s__9935__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9935__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9935__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9937 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9936 = 0;while(true){
if((i__9936 < size__7529__auto__))
{var line_group = cljs.core._nth.call(null,c__7528__auto__,i__9936);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9937,(function (){var iter__7530__auto__ = ((function (i__9936,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9937,s__9935__$2,temp__4092__auto____$2,changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function iter__9954(s__9955){return (new cljs.core.LazySeq(null,((function (i__9936,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9937,s__9935__$2,temp__4092__auto____$2,changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9955__$1 = s__9955;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9955__$1);if(temp__4092__auto____$3)
{var s__9955__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9955__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9955__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9957 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9956 = 0;while(true){
if((i__9956 < size__7529__auto____$1))
{var vec__9960 = cljs.core._nth.call(null,c__7528__auto____$1,i__9956);var left = cljs.core.nth.call(null,vec__9960,0,null);var right = cljs.core.nth.call(null,vec__9960,1,null);cljs.core.chunk_append.call(null,b__9957,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10010 = (i__9956 + 1);
i__9956 = G__10010;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9957),iter__9954.call(null,cljs.core.chunk_rest.call(null,s__9955__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9957),null);
}
} else
{var vec__9961 = cljs.core.first.call(null,s__9955__$2);var left = cljs.core.nth.call(null,vec__9961,0,null);var right = cljs.core.nth.call(null,vec__9961,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9954.call(null,cljs.core.rest.call(null,s__9955__$2)));
}
} else
{return null;
}
break;
}
});})(i__9936,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9937,s__9935__$2,temp__4092__auto____$2,changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(i__9936,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9937,s__9935__$2,temp__4092__auto____$2,changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10011 = (i__9936 + 1);
i__9936 = G__10011;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9937),iter__9934.call(null,cljs.core.chunk_rest.call(null,s__9935__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9937),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9935__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (columned,c,columns,line_group,s__9935__$2,temp__4092__auto____$2,changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function iter__9962(s__9963){return (new cljs.core.LazySeq(null,((function (columned,c,columns,line_group,s__9935__$2,temp__4092__auto____$2,changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output){
return (function (){var s__9963__$1 = s__9963;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9963__$1);if(temp__4092__auto____$3)
{var s__9963__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9963__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9963__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9965 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9964 = 0;while(true){
if((i__9964 < size__7529__auto__))
{var vec__9968 = cljs.core._nth.call(null,c__7528__auto__,i__9964);var left = cljs.core.nth.call(null,vec__9968,0,null);var right = cljs.core.nth.call(null,vec__9968,1,null);cljs.core.chunk_append.call(null,b__9965,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10012 = (i__9964 + 1);
i__9964 = G__10012;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9965),iter__9962.call(null,cljs.core.chunk_rest.call(null,s__9963__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9965),null);
}
} else
{var vec__9969 = cljs.core.first.call(null,s__9963__$2);var left = cljs.core.nth.call(null,vec__9969,0,null);var right = cljs.core.nth.call(null,vec__9969,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9962.call(null,cljs.core.rest.call(null,s__9963__$2)));
}
} else
{return null;
}
break;
}
});})(columned,c,columns,line_group,s__9935__$2,temp__4092__auto____$2,changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(columned,c,columns,line_group,s__9935__$2,temp__4092__auto____$2,changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9934.call(null,cljs.core.rest.call(null,s__9935__$2)));
}
} else
{return null;
}
break;
}
});})(changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(changes_group,s__9823__$2,temp__4092__auto____$1,filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9822.call(null,cljs.core.rest.call(null,s__9823__$2)));
}
} else
{return null;
}
break;
}
});})(filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
,null,null));
});})(filename,file_diff,file,s__9375__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null),iter__9374.call(null,cljs.core.rest.call(null,s__9375__$2)));
}
} else
{return null;
}
break;
}
});})(output))
,null,null));
});})(output))
;return iter__7530__auto__.call(null,lt.plugins.gitlight.diff.parse_git_diff.call(null,cljs.core.deref.call(null,output)));
})()], null);
})());var seq__9970_10013 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9971_10014 = null;var count__9972_10015 = 0;var i__9973_10016 = 0;while(true){
if((i__9973_10016 < count__9972_10015))
{var vec__9974_10017 = cljs.core._nth.call(null,chunk__9971_10014,i__9973_10016);var ev__8184__auto___10018 = cljs.core.nth.call(null,vec__9974_10017,0,null);var func__8185__auto___10019 = cljs.core.nth.call(null,vec__9974_10017,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10018,func__8185__auto___10019);
{
var G__10020 = seq__9970_10013;
var G__10021 = chunk__9971_10014;
var G__10022 = count__9972_10015;
var G__10023 = (i__9973_10016 + 1);
seq__9970_10013 = G__10020;
chunk__9971_10014 = G__10021;
count__9972_10015 = G__10022;
i__9973_10016 = G__10023;
continue;
}
} else
{var temp__4092__auto___10024 = cljs.core.seq.call(null,seq__9970_10013);if(temp__4092__auto___10024)
{var seq__9970_10025__$1 = temp__4092__auto___10024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9970_10025__$1))
{var c__7561__auto___10026 = cljs.core.chunk_first.call(null,seq__9970_10025__$1);{
var G__10027 = cljs.core.chunk_rest.call(null,seq__9970_10025__$1);
var G__10028 = c__7561__auto___10026;
var G__10029 = cljs.core.count.call(null,c__7561__auto___10026);
var G__10030 = 0;
seq__9970_10013 = G__10027;
chunk__9971_10014 = G__10028;
count__9972_10015 = G__10029;
i__9973_10016 = G__10030;
continue;
}
} else
{var vec__9975_10031 = cljs.core.first.call(null,seq__9970_10025__$1);var ev__8184__auto___10032 = cljs.core.nth.call(null,vec__9975_10031,0,null);var func__8185__auto___10033 = cljs.core.nth.call(null,vec__9975_10031,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10032,func__8185__auto___10033);
{
var G__10034 = cljs.core.next.call(null,seq__9970_10025__$1);
var G__10035 = null;
var G__10036 = 0;
var G__10037 = 0;
seq__9970_10013 = G__10034;
chunk__9971_10014 = G__10035;
count__9972_10015 = G__10036;
i__9973_10016 = G__10037;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.diff.breaker = (function breaker(left,right){var m = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,left),cljs.core.first.call(null,right)], null);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,m)))
{return cljs.core.cons.call(null,m,breaker.call(null,cljs.core.rest.call(null,left),cljs.core.rest.call(null,right)));
} else
{return null;
}
});
lt.plugins.gitlight.diff.separate = (function separate(fun,coll){return cljs.core.reduce.call(null,(function (p__9978,line){var vec__9979 = p__9978;var left = cljs.core.nth.call(null,vec__9979,0,null);var right = cljs.core.nth.call(null,vec__9979,1,null);if(cljs.core.truth_(fun.call(null,line)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,left,line),right], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,cljs.core.conj.call(null,right,line)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),coll);
});
lt.plugins.gitlight.diff.columner = (function columner(lines){if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"context",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,lines,lines)], null);
} else
{var vec__9982 = lt.plugins.gitlight.diff.separate.call(null,(function (p1__9980_SHARP_){return cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p1__9980_SHARP_));
}),lines);var left = cljs.core.nth.call(null,vec__9982,0,null);var right = cljs.core.nth.call(null,vec__9982,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"changed",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,left,right)], null);
}
});
lt.plugins.gitlight.diff.split_into_headered_groups = (function split_into_headered_groups(lines,fun,result_fun,headkey,contkey){if(!(cljs.core.empty_QMARK_.call(null,lines)))
{var fst = cljs.core.first.call(null,lines);var vec__9984 = cljs.core.split_with.call(null,fun,cljs.core.rest.call(null,lines));var content = cljs.core.nth.call(null,vec__9984,0,null);var leftovers = cljs.core.nth.call(null,vec__9984,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([headkey,fst,contkey,result_fun.call(null,content)], true, false),split_into_headered_groups.call(null,leftovers,fun,result_fun,headkey,contkey));
} else
{return null;
}
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,x));
}),(function (x){return cljs.core.partition_by.call(null,(function (p1__9985_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__9985_SHARP_));
}),x);
}),new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.Keyword(null,"content","content",1965434859));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(data){var vec__9987 = cljs.core.take.call(null,3,data);var header = cljs.core.nth.call(null,vec__9987,0,null);var left = cljs.core.nth.call(null,vec__9987,1,null);var right = cljs.core.nth.call(null,vec__9987,2,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,cljs.core.drop.call(null,3,data));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),header,new cljs.core.Keyword(null,"left","left",1017222009),left,new cljs.core.Keyword(null,"right","right",1122416014),right,new cljs.core.Keyword(null,"groups","groups",4071411014),groups], null);
});
lt.plugins.gitlight.diff.split_into_files = (function split_into_files(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return (cljs.core.re_matches.call(null,/diff --git .*/,x) == null);
}),lt.plugins.gitlight.diff.parse_single_git_diff,new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"file-diff","file-diff",3945937192));
});
lt.plugins.gitlight.diff.parse_git_diff = (function parse_git_diff(raw_data){return lt.plugins.gitlight.diff.split_into_files.call(null,clojure.string.split_lines.call(null,raw_data.toString()));
});
lt.plugins.gitlight.diff.git_diff_output = lt.plugins.gitlight.common_ui.make_output_tab_object.call(null,"Git diff",new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-diff","lt.plugins.gitlight.diff/gitlight-diff",1144555959),lt.plugins.gitlight.diff.diff_panel);
lt.plugins.gitlight.diff.git_diff = (function git_diff(filepath){cljs.core.reset_BANG_.call(null,lt.plugins.gitlight.diff.last_filename,filepath);
return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.diff.git_diff_output,"--no-pager","diff","--no-color",[cljs.core.str("-U"),cljs.core.str(cljs.core.deref.call(null,lt.plugins.gitlight.diff.context))].join(''),"--",filepath);
});
lt.plugins.gitlight.diff.git_diff_button = (function git_diff_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,[cljs.core.str(lt.plugins.gitlight.git.get_git_root.call(null)),cljs.core.str("/"),cljs.core.str(filename)].join(''));
});
lt.plugins.gitlight.diff.git_diff_repo_button = (function git_diff_repo_button(action,filename){return lt.plugins.gitlight.diff.git_diff.call(null,"");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","git-diff-file","lt.plugins.gitlight.diff/git-diff-file",4564618068),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: diff this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.diff.git_diff.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","git-diff-repo","lt.plugins.gitlight.diff/git-diff-repo",4564349286),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: diff this repo",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.diff.git_diff.call(null,"");
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.back')) {
goog.provide('lt.plugins.gitlight.status.back');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.commit');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.commit');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.status.back.in_sequence_QMARK_ = (function in_sequence_QMARK_(haystack,needle){return !((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([needle], true),cljs.core.seq.call(null,haystack)) == null));
});
lt.plugins.gitlight.status.back.keywording = (function keywording(status){if(cljs.core._EQ_.call(null,status,"A"))
{return new cljs.core.Keyword(null,"newfile","newfile",2859647630);
} else
{if(cljs.core._EQ_.call(null,status,"M"))
{return new cljs.core.Keyword(null,"modified","modified",4693358139);
} else
{if(cljs.core._EQ_.call(null,status,"D"))
{return new cljs.core.Keyword(null,"deleted","deleted",2564367243);
} else
{if(cljs.core._EQ_.call(null,status,"R"))
{return new cljs.core.Keyword(null,"renamed","renamed",2106238040);
} else
{if(cljs.core._EQ_.call(null,status,"C"))
{return new cljs.core.Keyword(null,"copied","copied",3954141750);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"unknown","unknown",729063356);
} else
{return null;
}
}
}
}
}
}
});
lt.plugins.gitlight.status.back.not_staged = (function not_staged(X,Y,filename){if(((lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null," MARC",X)) && (lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MD",Y))) || ((cljs.core._EQ_.call(null,"D",X)) && (cljs.core._EQ_.call(null,"M",Y))))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,lt.plugins.gitlight.status.back.keywording.call(null,Y),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066)], null);
} else
{return null;
}
});
lt.plugins.gitlight.status.back.staged = (function staged(X,Y,filename){if(((lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null,"MARC",X)) && (lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null," MD",Y))) || ((cljs.core._EQ_.call(null,"D",X)) && (lt.plugins.gitlight.status.back.in_sequence_QMARK_.call(null," M",Y))))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,lt.plugins.gitlight.status.back.keywording.call(null,X),new cljs.core.Keyword(null,"staged","staged",4416376984)], null);
} else
{return null;
}
});
lt.plugins.gitlight.status.back.merge_conflicts = (function merge_conflicts(X,Y,filename){var temp__4090__auto__ = (((cljs.core._EQ_.call(null,"D",X)) && (cljs.core._EQ_.call(null,"D",Y)))?new cljs.core.Keyword(null,"unmerged-both-deleted","unmerged-both-deleted",4207561479):(((cljs.core._EQ_.call(null,"A",X)) && (cljs.core._EQ_.call(null,"U",Y)))?new cljs.core.Keyword(null,"unmerged-added-by-us","unmerged-added-by-us",4095962481):(((cljs.core._EQ_.call(null,"U",X)) && (cljs.core._EQ_.call(null,"D",Y)))?new cljs.core.Keyword(null,"unmerged-deleted-by-them","unmerged-deleted-by-them",4759851208):(((cljs.core._EQ_.call(null,"U",X)) && (cljs.core._EQ_.call(null,"A",Y)))?new cljs.core.Keyword(null,"unmerged-added-by-them","unmerged-added-by-them",3639367855):(((cljs.core._EQ_.call(null,"D",X)) && (cljs.core._EQ_.call(null,"U",Y)))?new cljs.core.Keyword(null,"unmerged-deleted-by-us","unmerged-deleted-by-us",1004394442):(((cljs.core._EQ_.call(null,"A",X)) && (cljs.core._EQ_.call(null,"A",Y)))?new cljs.core.Keyword(null,"unmerged-both-added","unmerged-both-added",3821120238):(((cljs.core._EQ_.call(null,"U",X)) && (cljs.core._EQ_.call(null,"U",Y)))?new cljs.core.Keyword(null,"unmerged-both-modified","unmerged-both-modified",4092771903):null)))))));if(cljs.core.truth_(temp__4090__auto__))
{var status = temp__4090__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,status,new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209)], null);
} else
{return null;
}
});
lt.plugins.gitlight.status.back.others = (function others(X,Y,filename){if((cljs.core._EQ_.call(null,"?",X)) && (cljs.core._EQ_.call(null,"?",Y)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.Keyword(null,"untracked","untracked",1658310115)], null);
} else
{if((cljs.core._EQ_.call(null,"!",X)) && (cljs.core._EQ_.call(null,"!",Y)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword(null,"ignored","ignored",2766319684),new cljs.core.Keyword(null,"ignored","ignored",2766319684)], null);
} else
{return null;
}
}
});
lt.plugins.gitlight.status.back.get_status_for_line = (function get_status_for_line(line){var X = cljs.core.first.call(null,line);var Y = cljs.core.second.call(null,line);var filename = cljs.core.subs.call(null,line,3);return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (fun){return fun.call(null,X,Y,filename);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gitlight.status.back.not_staged,lt.plugins.gitlight.status.back.staged,lt.plugins.gitlight.status.back.merge_conflicts,lt.plugins.gitlight.status.back.others], null)));
});
lt.plugins.gitlight.status.back.parse_git_status = (function parse_git_status(lines){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,lt.plugins.gitlight.status.back.get_status_for_line,lines));
});
lt.plugins.gitlight.status.back.parse_porcelain = (function parse_porcelain(data){var splitted = clojure.string.split_lines.call(null,data.toString());var branch = cljs.core.subs.call(null,cljs.core.first.call(null,splitted),3);var parsed = lt.plugins.gitlight.status.back.parse_git_status.call(null,cljs.core.rest.call(null,splitted));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"branch-name","branch-name",4270694216),[cljs.core.str(branch)].join(''),new cljs.core.Keyword(null,"status","status",4416389988),cljs.core.sort.call(null,cljs.core.group_by.call(null,(function (a){return cljs.core.nth.call(null,a,2);
}),parsed))], null);
});
lt.plugins.gitlight.status.back.__BEH__git_status_out_success = (function __BEH__git_status_out_success(obj,data,stderr){lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"add-watch","add-watch",4224092181));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.status.back.parse_porcelain.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-success","lt.plugins.gitlight.status.back/git-status-out-success",3735995038),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: When git status is executed, parse its output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
lt.plugins.gitlight.status.back.__BEH__git_status_out_failure = (function __BEH__git_status_out_failure(obj,err,stderr){cljs.core.remove_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status.back","status-pool-watch","lt.plugins.gitlight.status.back/status-pool-watch",4566645289));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status-failed","status-failed",1731571178));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure","lt.plugins.gitlight.status.back/git-status-out-failure",3442851867),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_failure,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: When git status fails.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null));
lt.plugins.gitlight.status.back.__BEH__git_status_out_failure_verbose = (function __BEH__git_status_out_failure_verbose(obj,err,stderr){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("git status failed! "),cljs.core.str(stderr.toString())].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure-verbose","lt.plugins.gitlight.status.back/git-status-out-failure-verbose",4010434018),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_failure_verbose,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Be verbose about git status fail",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.gitlight.status.back.git_status_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out","lt.plugins.gitlight.status.back/git-status-out",3897718648),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-status-out","git-status-out",2815542080)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-success","lt.plugins.gitlight.status.back/git-status-out-success",3735995038),new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure","lt.plugins.gitlight.status.back/git-status-out-failure",3442851867),new cljs.core.Keyword("lt.plugins.gitlight.status.back","refresh-ui-on-new-status","lt.plugins.gitlight.status.back/refresh-ui-on-new-status",1675222016)], null)));
lt.plugins.gitlight.status.back.git_status = (function git_status(){return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.status.back.git_status_out,"status","--porcelain","--branch");
});
lt.plugins.gitlight.status.back.git_add = (function git_add(action,filename){return lt.plugins.gitlight.git.git_add.call(null,filename);
});
lt.plugins.gitlight.status.back.git_commit = (function git_commit(action,filename){return lt.plugins.gitlight.common_ui.input_popup.call(null,"commit message?","commit",(function (msg){lt.plugins.gitlight.git.git_cmd_commit.call(null,msg);
return lt.plugins.gitlight.status.back.git_status.call(null);
}));
});
lt.plugins.gitlight.status.back.git_reset = (function git_reset(action,filename){return lt.plugins.gitlight.git.git_reset.call(null,filename);
});
lt.plugins.gitlight.status.back.git_checkout_file = (function git_checkout_file(action,filename){return lt.plugins.gitlight.git.git_checkout_file.call(null,filename);
});
lt.plugins.gitlight.status.back.bin_rm = (function bin_rm(action,filename){return lt.objs.files.delete_BANG_.call(null,[cljs.core.str(lt.plugins.gitlight.git.get_git_root.call(null)),cljs.core.str("/"),cljs.core.str(filename)].join(''));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.remote-com')) {
goog.provide('lt.plugins.gitlight.remote_com');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.remote_com.git_fetch = (function git_fetch(){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"fetch");
});
lt.plugins.gitlight.remote_com.git_push = (function git_push(){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"push");
});
lt.plugins.gitlight.remote_com.git_push_remote_branch = (function git_push_remote_branch(remote,branch){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"push",remote,branch);
});
lt.plugins.gitlight.remote_com.git_pull = (function git_pull(){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"pull");
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.branch')) {
goog.provide('lt.plugins.gitlight.branch');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.objs.context');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.context');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.branch.checkout_button = (function checkout_button(branch){return lt.plugins.gitlight.common_ui.make_button.call(null,branch,"checkout branch",lt.plugins.gitlight.branch.git_checkout);
});
lt.plugins.gitlight.branch.pull_button = (function pull_button(branch){return lt.plugins.gitlight.common_ui.make_button.call(null,"pull!",branch,(function (x,y){return lt.plugins.gitlight.remote_com.git_pull.call(null);
}));
});
lt.plugins.gitlight.branch.merge_button = (function merge_button(branch){return lt.plugins.gitlight.common_ui.make_button.call(null,"merge",branch,lt.plugins.gitlight.branch.git_merge);
});
lt.plugins.gitlight.branch.push_button = (function push_button(branch){return lt.plugins.gitlight.common_ui.make_button.call(null,"push it!",branch,lt.plugins.gitlight.branch.git_push_it_BANG_);
});
lt.plugins.gitlight.branch.new_branch_button = (function new_branch_button(){return lt.plugins.gitlight.common_ui.make_button.call(null,"make a new branch",null,lt.plugins.gitlight.branch.git_new_branch);
});
lt.plugins.gitlight.branch.branch_panel = (function branch_panel(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-branches","div.gitlight-branches",1801709646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Branches"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7530__auto__ = (function iter__8301(s__8302){return (new cljs.core.LazySeq(null,(function (){var s__8302__$1 = s__8302;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8302__$1);if(temp__4092__auto__)
{var s__8302__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8302__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__8302__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__8304 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__8303 = 0;while(true){
if((i__8303 < size__7529__auto__))
{var parsed = cljs.core._nth.call(null,c__7528__auto__,i__8303);var vec__8309 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__8309,0,null);var vec__8310 = cljs.core.nth.call(null,vec__8309,1,null);var branch = cljs.core.nth.call(null,vec__8310,0,null);var sha1 = cljs.core.nth.call(null,vec__8310,1,null);var desc = cljs.core.nth.call(null,vec__8310,2,null);cljs.core.chunk_append.call(null,b__8304,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null));
{
var G__8329 = (i__8303 + 1);
i__8303 = G__8329;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8304),iter__8301.call(null,cljs.core.chunk_rest.call(null,s__8302__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8304),null);
}
} else
{var parsed = cljs.core.first.call(null,s__8302__$2);var vec__8311 = parsed;var this_one_QMARK_ = cljs.core.nth.call(null,vec__8311,0,null);var vec__8312 = cljs.core.nth.call(null,vec__8311,1,null);var branch = cljs.core.nth.call(null,vec__8312,0,null);var sha1 = cljs.core.nth.call(null,vec__8312,1,null);var desc = cljs.core.nth.call(null,vec__8312,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(cljs.core.truth_(this_one_QMARK_)?"->":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(this_one_QMARK_)?"current":"not-current")], null),lt.plugins.gitlight.branch.checkout_button.call(null,branch)], null),(cljs.core.truth_(this_one_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pull","td.pull",3793965685),lt.plugins.gitlight.branch.pull_button.call(null,branch)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.merge","td.merge",1293221548),lt.plugins.gitlight.branch.merge_button.call(null,branch)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),sha1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.push","td.push",3793965898),lt.plugins.gitlight.branch.push_button.call(null,branch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),desc], null)], null),iter__8301.call(null,cljs.core.rest.call(null,s__8302__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,lt.plugins.gitlight.branch.parse_data.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.new-branch","td.new-branch",3433852959),lt.plugins.gitlight.branch.new_branch_button.call(null)], null)], null)], null)], null));var seq__8313_8330 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8314_8331 = null;var count__8315_8332 = 0;var i__8316_8333 = 0;while(true){
if((i__8316_8333 < count__8315_8332))
{var vec__8317_8334 = cljs.core._nth.call(null,chunk__8314_8331,i__8316_8333);var ev__8184__auto___8335 = cljs.core.nth.call(null,vec__8317_8334,0,null);var func__8185__auto___8336 = cljs.core.nth.call(null,vec__8317_8334,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8335,func__8185__auto___8336);
{
var G__8337 = seq__8313_8330;
var G__8338 = chunk__8314_8331;
var G__8339 = count__8315_8332;
var G__8340 = (i__8316_8333 + 1);
seq__8313_8330 = G__8337;
chunk__8314_8331 = G__8338;
count__8315_8332 = G__8339;
i__8316_8333 = G__8340;
continue;
}
} else
{var temp__4092__auto___8341 = cljs.core.seq.call(null,seq__8313_8330);if(temp__4092__auto___8341)
{var seq__8313_8342__$1 = temp__4092__auto___8341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8313_8342__$1))
{var c__7561__auto___8343 = cljs.core.chunk_first.call(null,seq__8313_8342__$1);{
var G__8344 = cljs.core.chunk_rest.call(null,seq__8313_8342__$1);
var G__8345 = c__7561__auto___8343;
var G__8346 = cljs.core.count.call(null,c__7561__auto___8343);
var G__8347 = 0;
seq__8313_8330 = G__8344;
chunk__8314_8331 = G__8345;
count__8315_8332 = G__8346;
i__8316_8333 = G__8347;
continue;
}
} else
{var vec__8318_8348 = cljs.core.first.call(null,seq__8313_8342__$1);var ev__8184__auto___8349 = cljs.core.nth.call(null,vec__8318_8348,0,null);var func__8185__auto___8350 = cljs.core.nth.call(null,vec__8318_8348,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8349,func__8185__auto___8350);
{
var G__8351 = cljs.core.next.call(null,seq__8313_8342__$1);
var G__8352 = null;
var G__8353 = 0;
var G__8354 = 0;
seq__8313_8330 = G__8351;
chunk__8314_8331 = G__8352;
count__8315_8332 = G__8353;
i__8316_8333 = G__8354;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.branch.git_branch_splitter = (function git_branch_splitter(line){var active_QMARK_ = cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,line));var to_cut = cljs.core.subs.call(null,line,2);var splitted = clojure.string.split.call(null,to_cut,/\s+/,3);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_QMARK_,splitted], null);
});
lt.plugins.gitlight.branch.parse_data = (function parse_data(data){var lines = clojure.string.split_lines.call(null,data.toString());return cljs.core.map.call(null,lt.plugins.gitlight.branch.git_branch_splitter,lines);
});
lt.plugins.gitlight.branch.git_branch_output = lt.plugins.gitlight.common_ui.make_output_tab_object.call(null,"Git branches",new cljs.core.Keyword("lt.plugins.gitlight.branch","gitlight-branches","lt.plugins.gitlight.branch/gitlight-branches",2920815417),lt.plugins.gitlight.branch.branch_panel);
lt.plugins.gitlight.branch.git_branches = (function git_branches(){return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.branch.git_branch_output,"branch","--no-color","-vv");
});
lt.plugins.gitlight.branch.git_merge = (function git_merge(action,branch){lt.plugins.gitlight.git.git_command_ignore_out.call(null,"merge",branch);
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.plugins.gitlight.branch.git_checkout = (function git_checkout(branch,action){lt.plugins.gitlight.git.git_command_ignore_out.call(null,"checkout",branch);
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.plugins.gitlight.branch.git_push_it_BANG_ = (function git_push_it_BANG_(action,branch){lt.plugins.gitlight.remote_com.git_push_remote_branch.call(null,"origin",branch);
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.plugins.gitlight.branch.git_new_branch = (function git_new_branch(action,branch){return lt.plugins.gitlight.common_ui.input_popup.call(null,"new branch name","create",lt.plugins.gitlight.branch.git_create_new_branch);
});
lt.plugins.gitlight.branch.git_create_new_branch = (function git_create_new_branch(branch){lt.plugins.gitlight.git.git_command_ignore_out.call(null,"branch",branch);
return lt.plugins.gitlight.branch.git_branches.call(null);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.branch","branches","lt.plugins.gitlight.branch/branches",1924152112),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: branches",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.branch.git_branches], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status.ui')) {
goog.provide('lt.plugins.gitlight.status.ui');
goog.require('cljs.core');
goog.require('lt.objs.cli');
goog.require('lt.plugins.gitlight.branch');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.gitlight.branch');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.plugins.gitlight.diff');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.objs.cli');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.diff');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.status.ui.resize_rightbar = (function resize_rightbar(width){lt.object.merge_BANG_.call(null,lt.objs.tabs.multi,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"side","side",1017434313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),width], true, false));
return lt.object.merge_BANG_.call(null,lt.objs.sidebar.rightbar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),width,new cljs.core.Keyword(null,"max-width","max-width",3646439311),width], null));
});
lt.plugins.gitlight.status.ui.group_names = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209),"Merge conflicts",new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),"Not staged",new cljs.core.Keyword(null,"staged","staged",4416376984),"Staged",new cljs.core.Keyword(null,"untracked","untracked",1658310115),"Untracked",new cljs.core.Keyword(null,"ignored","ignored",2766319684),"Ignored"], null);
lt.plugins.gitlight.status.ui.dom_scroll_width = (function dom_scroll_width(n){return n.scrollWidth;
});
lt.plugins.gitlight.status.ui.resize_to_content = (function resize_to_content(parent,child){return lt.plugins.gitlight.status.ui.resize_rightbar.call(null,((lt.util.dom.width.call(null,parent) - lt.util.dom.width.call(null,child)) + lt.plugins.gitlight.status.ui.dom_scroll_width.call(null,child)));
});
lt.plugins.gitlight.status.ui.is_open_QMARK_ = (function is_open_QMARK_(){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),lt.plugins.gitlight.status.ui.status_bar);
});
lt.plugins.gitlight.status.ui.make_button_and_update = (function make_button_and_update(n,f,fun){return lt.plugins.gitlight.common_ui.make_classy_button.call(null,n,f,(function (x,y){fun.call(null,x,y);
return lt.plugins.gitlight.status.back.git_status.call(null);
}));
});
lt.plugins.gitlight.status.ui.open_file = (function open_file(action,filename){return lt.objs.cli.open_paths.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(lt.plugins.gitlight.git.get_git_root.call(null)),cljs.core.str("/"),cljs.core.str(filename)].join('')], null),false);
});
lt.plugins.gitlight.status.ui.file_ops = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["resolve",lt.plugins.gitlight.status.back.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_button], null)], null),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stage",lt.plugins.gitlight.status.back.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["checkout",lt.plugins.gitlight.status.back.git_checkout_file], null)], null),new cljs.core.Keyword(null,"untracked","untracked",1658310115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add",lt.plugins.gitlight.status.back.git_add], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete",lt.plugins.gitlight.status.back.bin_rm], null)], null),new cljs.core.Keyword(null,"staged","staged",4416376984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unstage",lt.plugins.gitlight.status.back.git_reset], null)], null)], null);
lt.plugins.gitlight.status.ui.repo_ops = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"commit","commit",3954056361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit",lt.plugins.gitlight.status.back.git_commit], null),new cljs.core.Keyword(null,"push","push",1017356940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push",lt.plugins.gitlight.remote_com.git_push], null),new cljs.core.Keyword(null,"pull","pull",1017356727),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull",lt.plugins.gitlight.remote_com.git_pull], null),new cljs.core.Keyword(null,"fetch","fetch",1111226924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fetch",lt.plugins.gitlight.remote_com.git_fetch], null),new cljs.core.Keyword(null,"diff","diff",1016987511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_repo_button], null)], null);
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__10515){var vec__10531 = p__10515;var f = cljs.core.nth.call(null,vec__10531,0,null);var t = cljs.core.nth.call(null,vec__10531,1,null);var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,f,f,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10532(s__10533){return (new cljs.core.LazySeq(null,(function (){var s__10533__$1 = s__10533;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10533__$1);if(temp__4092__auto__)
{var s__10533__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10533__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10533__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10535 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10534 = 0;while(true){
if((i__10534 < size__7529__auto__))
{var vec__10538 = cljs.core._nth.call(null,c__7528__auto__,i__10534);var bt = cljs.core.nth.call(null,vec__10538,0,null);var fun = cljs.core.nth.call(null,vec__10538,1,null);cljs.core.chunk_append.call(null,b__10535,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun));
{
var G__10614 = (i__10534 + 1);
i__10534 = G__10614;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10535),iter__10532.call(null,cljs.core.chunk_rest.call(null,s__10533__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10535),null);
}
} else
{var vec__10539 = cljs.core.first.call(null,s__10533__$2);var bt = cljs.core.nth.call(null,vec__10539,0,null);var fun = cljs.core.nth.call(null,vec__10539,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun),iter__10532.call(null,cljs.core.rest.call(null,s__10533__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__10540_10615 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10541_10616 = null;var count__10542_10617 = 0;var i__10543_10618 = 0;while(true){
if((i__10543_10618 < count__10542_10617))
{var vec__10544_10619 = cljs.core._nth.call(null,chunk__10541_10616,i__10543_10618);var ev__8184__auto___10620 = cljs.core.nth.call(null,vec__10544_10619,0,null);var func__8185__auto___10621 = cljs.core.nth.call(null,vec__10544_10619,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10620,func__8185__auto___10621);
{
var G__10622 = seq__10540_10615;
var G__10623 = chunk__10541_10616;
var G__10624 = count__10542_10617;
var G__10625 = (i__10543_10618 + 1);
seq__10540_10615 = G__10622;
chunk__10541_10616 = G__10623;
count__10542_10617 = G__10624;
i__10543_10618 = G__10625;
continue;
}
} else
{var temp__4092__auto___10626 = cljs.core.seq.call(null,seq__10540_10615);if(temp__4092__auto___10626)
{var seq__10540_10627__$1 = temp__4092__auto___10626;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10540_10627__$1))
{var c__7561__auto___10628 = cljs.core.chunk_first.call(null,seq__10540_10627__$1);{
var G__10629 = cljs.core.chunk_rest.call(null,seq__10540_10627__$1);
var G__10630 = c__7561__auto___10628;
var G__10631 = cljs.core.count.call(null,c__7561__auto___10628);
var G__10632 = 0;
seq__10540_10615 = G__10629;
chunk__10541_10616 = G__10630;
count__10542_10617 = G__10631;
i__10543_10618 = G__10632;
continue;
}
} else
{var vec__10545_10633 = cljs.core.first.call(null,seq__10540_10627__$1);var ev__8184__auto___10634 = cljs.core.nth.call(null,vec__10545_10633,0,null);var func__8185__auto___10635 = cljs.core.nth.call(null,vec__10545_10633,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10634,func__8185__auto___10635);
{
var G__10636 = cljs.core.next.call(null,seq__10540_10627__$1);
var G__10637 = null;
var G__10638 = 0;
var G__10639 = 0;
seq__10540_10615 = G__10636;
chunk__10541_10616 = G__10637;
count__10542_10617 = G__10638;
i__10543_10618 = G__10639;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__10552_10640 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10553_10641 = null;var count__10554_10642 = 0;var i__10555_10643 = 0;while(true){
if((i__10555_10643 < count__10554_10642))
{var vec__10556_10644 = cljs.core._nth.call(null,chunk__10553_10641,i__10555_10643);var ev__8184__auto___10645 = cljs.core.nth.call(null,vec__10556_10644,0,null);var func__8185__auto___10646 = cljs.core.nth.call(null,vec__10556_10644,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10645,func__8185__auto___10646);
{
var G__10647 = seq__10552_10640;
var G__10648 = chunk__10553_10641;
var G__10649 = count__10554_10642;
var G__10650 = (i__10555_10643 + 1);
seq__10552_10640 = G__10647;
chunk__10553_10641 = G__10648;
count__10554_10642 = G__10649;
i__10555_10643 = G__10650;
continue;
}
} else
{var temp__4092__auto___10651 = cljs.core.seq.call(null,seq__10552_10640);if(temp__4092__auto___10651)
{var seq__10552_10652__$1 = temp__4092__auto___10651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10552_10652__$1))
{var c__7561__auto___10653 = cljs.core.chunk_first.call(null,seq__10552_10652__$1);{
var G__10654 = cljs.core.chunk_rest.call(null,seq__10552_10652__$1);
var G__10655 = c__7561__auto___10653;
var G__10656 = cljs.core.count.call(null,c__7561__auto___10653);
var G__10657 = 0;
seq__10552_10640 = G__10654;
chunk__10553_10641 = G__10655;
count__10554_10642 = G__10656;
i__10555_10643 = G__10657;
continue;
}
} else
{var vec__10557_10658 = cljs.core.first.call(null,seq__10552_10652__$1);var ev__8184__auto___10659 = cljs.core.nth.call(null,vec__10557_10658,0,null);var func__8185__auto___10660 = cljs.core.nth.call(null,vec__10557_10658,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10659,func__8185__auto___10660);
{
var G__10661 = cljs.core.next.call(null,seq__10552_10652__$1);
var G__10662 = null;
var G__10663 = 0;
var G__10664 = 0;
seq__10552_10640 = G__10661;
chunk__10553_10641 = G__10662;
count__10554_10642 = G__10663;
i__10555_10643 = G__10664;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,branch,[cljs.core.str("Branch menu")].join(''),(function (x,y){return lt.plugins.gitlight.branch.git_branches.call(null);
}))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10580(s__10581){return (new cljs.core.LazySeq(null,(function (){var s__10581__$1 = s__10581;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10581__$1);if(temp__4092__auto__)
{var s__10581__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10581__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10581__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10583 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10582 = 0;while(true){
if((i__10582 < size__7529__auto__))
{var vec__10586 = cljs.core._nth.call(null,c__7528__auto__,i__10582);var bname = cljs.core.nth.call(null,vec__10586,0,null);var fun = cljs.core.nth.call(null,vec__10586,1,null);cljs.core.chunk_append.call(null,b__10583,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10665 = (i__10582 + 1);
i__10582 = G__10665;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10583),iter__10580.call(null,cljs.core.chunk_rest.call(null,s__10581__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10583),null);
}
} else
{var vec__10587 = cljs.core.first.call(null,s__10581__$2);var bname = cljs.core.nth.call(null,vec__10587,0,null);var fun = cljs.core.nth.call(null,vec__10587,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10580.call(null,cljs.core.rest.call(null,s__10581__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,cljs.core.vals.call(null,lt.plugins.gitlight.status.ui.repo_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,"refresh","refresh",(function (x,y){return null;
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7530__auto__ = (function iter__10588(s__10589){return (new cljs.core.LazySeq(null,(function (){var s__10589__$1 = s__10589;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10589__$1);if(temp__4092__auto__)
{var s__10589__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10589__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10589__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10591 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10590 = 0;while(true){
if((i__10590 < size__7529__auto__))
{var vec__10594 = cljs.core._nth.call(null,c__7528__auto__,i__10590);var g = cljs.core.nth.call(null,vec__10594,0,null);var fs = cljs.core.nth.call(null,vec__10594,1,null);cljs.core.chunk_append.call(null,b__10591,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10666 = (i__10590 + 1);
i__10590 = G__10666;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10591),iter__10588.call(null,cljs.core.chunk_rest.call(null,s__10589__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10591),null);
}
} else
{var vec__10595 = cljs.core.first.call(null,s__10589__$2);var g = cljs.core.nth.call(null,vec__10595,0,null);var fs = cljs.core.nth.call(null,vec__10595,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__10588.call(null,cljs.core.rest.call(null,s__10589__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,this$);
})()], null)], null));var seq__10596_10667 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10597_10668 = null;var count__10598_10669 = 0;var i__10599_10670 = 0;while(true){
if((i__10599_10670 < count__10598_10669))
{var vec__10600_10671 = cljs.core._nth.call(null,chunk__10597_10668,i__10599_10670);var ev__8184__auto___10672 = cljs.core.nth.call(null,vec__10600_10671,0,null);var func__8185__auto___10673 = cljs.core.nth.call(null,vec__10600_10671,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10672,func__8185__auto___10673);
{
var G__10674 = seq__10596_10667;
var G__10675 = chunk__10597_10668;
var G__10676 = count__10598_10669;
var G__10677 = (i__10599_10670 + 1);
seq__10596_10667 = G__10674;
chunk__10597_10668 = G__10675;
count__10598_10669 = G__10676;
i__10599_10670 = G__10677;
continue;
}
} else
{var temp__4092__auto___10678 = cljs.core.seq.call(null,seq__10596_10667);if(temp__4092__auto___10678)
{var seq__10596_10679__$1 = temp__4092__auto___10678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10596_10679__$1))
{var c__7561__auto___10680 = cljs.core.chunk_first.call(null,seq__10596_10679__$1);{
var G__10681 = cljs.core.chunk_rest.call(null,seq__10596_10679__$1);
var G__10682 = c__7561__auto___10680;
var G__10683 = cljs.core.count.call(null,c__7561__auto___10680);
var G__10684 = 0;
seq__10596_10667 = G__10681;
chunk__10597_10668 = G__10682;
count__10598_10669 = G__10683;
i__10599_10670 = G__10684;
continue;
}
} else
{var vec__10601_10685 = cljs.core.first.call(null,seq__10596_10679__$1);var ev__8184__auto___10686 = cljs.core.nth.call(null,vec__10601_10685,0,null);var func__8185__auto___10687 = cljs.core.nth.call(null,vec__10601_10685,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10686,func__8185__auto___10687);
{
var G__10688 = cljs.core.next.call(null,seq__10596_10679__$1);
var G__10689 = null;
var G__10690 = 0;
var G__10691 = 0;
seq__10596_10667 = G__10688;
chunk__10597_10668 = G__10689;
count__10598_10669 = G__10690;
i__10599_10670 = G__10691;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10608_10692 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10609_10693 = null;var count__10610_10694 = 0;var i__10611_10695 = 0;while(true){
if((i__10611_10695 < count__10610_10694))
{var vec__10612_10696 = cljs.core._nth.call(null,chunk__10609_10693,i__10611_10695);var ev__8184__auto___10697 = cljs.core.nth.call(null,vec__10612_10696,0,null);var func__8185__auto___10698 = cljs.core.nth.call(null,vec__10612_10696,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10697,func__8185__auto___10698);
{
var G__10699 = seq__10608_10692;
var G__10700 = chunk__10609_10693;
var G__10701 = count__10610_10694;
var G__10702 = (i__10611_10695 + 1);
seq__10608_10692 = G__10699;
chunk__10609_10693 = G__10700;
count__10610_10694 = G__10701;
i__10611_10695 = G__10702;
continue;
}
} else
{var temp__4092__auto___10703 = cljs.core.seq.call(null,seq__10608_10692);if(temp__4092__auto___10703)
{var seq__10608_10704__$1 = temp__4092__auto___10703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10608_10704__$1))
{var c__7561__auto___10705 = cljs.core.chunk_first.call(null,seq__10608_10704__$1);{
var G__10706 = cljs.core.chunk_rest.call(null,seq__10608_10704__$1);
var G__10707 = c__7561__auto___10705;
var G__10708 = cljs.core.count.call(null,c__7561__auto___10705);
var G__10709 = 0;
seq__10608_10692 = G__10706;
chunk__10609_10693 = G__10707;
count__10610_10694 = G__10708;
i__10611_10695 = G__10709;
continue;
}
} else
{var vec__10613_10710 = cljs.core.first.call(null,seq__10608_10704__$1);var ev__8184__auto___10711 = cljs.core.nth.call(null,vec__10613_10710,0,null);var func__8185__auto___10712 = cljs.core.nth.call(null,vec__10613_10710,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10711,func__8185__auto___10712);
{
var G__10713 = cljs.core.next.call(null,seq__10608_10704__$1);
var G__10714 = null;
var G__10715 = 0;
var G__10716 = 0;
seq__10608_10692 = G__10713;
chunk__10609_10693 = G__10714;
count__10610_10694 = G__10715;
i__10611_10695 = G__10716;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.status.ui.__BEH__update = (function __BEH__update(obj,status,branch){var bar_dom = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));lt.plugins.gitlight.common_ui.dom_truncate.call(null,bar_dom);
lt.util.dom.append.call(null,bar_dom,lt.plugins.gitlight.status.ui.status_ui.call(null,status,branch,lt.plugins.gitlight.git.get_git_root.call(null)));
return lt.plugins.gitlight.status.ui.resize_to_content.call(null,lt.util.dom.parent.call(null,bar_dom),bar_dom);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.ui.__BEH__update,new cljs.core.Keyword(null,"desc","desc",1016984067),"update status view",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"GIT",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.ui","update","lt.plugins.gitlight.status.ui/update",1820452731)], null),new cljs.core.Keyword(null,"order","order",1119910592),2,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.status.ui.wrapper.call(null,cljs.core.deref.call(null,this$));
}));
lt.plugins.gitlight.status.ui.status_bar = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.ui","status","lt.plugins.gitlight.status.ui/status",1760513620));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.status')) {
goog.provide('lt.plugins.gitlight.status');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.command');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.plugins.gitlight.status.ui');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.plugins.gitlight.status.ui');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight');
lt.plugins.gitlight.status.status_if_open = (function status_if_open(){if(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null))
{return lt.plugins.gitlight.status.back.git_status.call(null);
} else
{return null;
}
});
lt.plugins.gitlight.status.__BEH__init = (function __BEH__init(this$){lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.gitlight.status.ui.status_bar);
lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.git_status_out,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826));
lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.git_status_out,new cljs.core.Keyword("lt.plugins.gitlight.status","close-ui-on-failure","lt.plugins.gitlight.status/close-ui-on-failure",4763397812));
return lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.status.back.git_status_out,new cljs.core.Keyword("lt.plugins.gitlight.status","add-watch","lt.plugins.gitlight.status/add-watch",3854676855));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","init","lt.plugins.gitlight.status/init",3068682980),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__init,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Init gitlight status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-status","gitlight-status",4738816205),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Status",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.status.back.git_status], null));
lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status = (function __BEH__refresh_ui_on_new_status(obj,data){if(!(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null)))
{lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.gitlight.status.ui.status_bar);
} else
{}
return lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216).cljs$core$IFn$_invoke$arity$1(data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.plugins.gitlight.status.__BEH__close_ui_on_failure = (function __BEH__close_ui_on_failure(obj,data){cljs.core.remove_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status","status-pool-watch","lt.plugins.gitlight.status/status-pool-watch",2316860253));
if(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null))
{return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"close!","close!",3951350939),lt.plugins.gitlight.status.ui.status_bar);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","close-ui-on-failure","lt.plugins.gitlight.status/close-ui-on-failure",4763397812),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__close_ui_on_failure,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: close ui on failure",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status-failed","status-failed",1731571178),null], null), null));
lt.plugins.gitlight.status.__BEH__add_watch = (function __BEH__add_watch(obj){return cljs.core.add_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status","status-pool-watch","lt.plugins.gitlight.status/status-pool-watch",2316860253),(function (k,r,old,new$){return lt.plugins.gitlight.status.status_if_open.call(null);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","add-watch","lt.plugins.gitlight.status/add-watch",3854676855),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__add_watch,new cljs.core.Keyword(null,"desc","desc",1016984067),"add pool watch",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-watch","add-watch",4224092181),null], null), null));
lt.plugins.gitlight.status.__BEH__refresh_git_status_on_save = (function __BEH__refresh_git_status_on_save(editor,content){lt.plugins.gitlight.status.status_if_open.call(null);
return content;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-git-status-on-save","lt.plugins.gitlight.status/refresh-git-status-on-save",3914231473),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_git_status_on_save,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: refresh gitlight status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save+","save+",1123115456),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.plugins.gitlight.status.__BEH__debug_new_status = (function __BEH__debug_new_status(obj,data){return console.log("refresh",cljs.core.clj__GT_js.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","debug-new-status","lt.plugins.gitlight.status/debug-new-status",3684259709),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__debug_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: debug status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests')) {
goog.provide('lt.plugins.gitlight.tests');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.objs.command');
lt.plugins.gitlight.tests.which_color_QMARK_ = (function which_color_QMARK_(result){var G__10450 = result;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"not-bool","not-bool",2543743254),G__10450))
{return "pink";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__10450))
{return "red";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__10450))
{return "green";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "purple";
} else
{return null;
}
}
}
}
});
lt.plugins.gitlight.tests.test_panel = (function test_panel(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7530__auto__ = (function iter__10465(s__10466){return (new cljs.core.LazySeq(null,(function (){var s__10466__$1 = s__10466;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10466__$1);if(temp__4092__auto__)
{var s__10466__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10466__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10466__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10468 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10467 = 0;while(true){
if((i__10467 < size__7529__auto__))
{var map__10471 = cljs.core._nth.call(null,c__7528__auto__,i__10467);var map__10471__$1 = ((cljs.core.seq_QMARK_.call(null,map__10471))?cljs.core.apply.call(null,cljs.core.hash_map,map__10471):map__10471);var status = cljs.core.get.call(null,map__10471__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10471__$1,new cljs.core.Keyword(null,"info","info",1017141280));cljs.core.chunk_append.call(null,b__10468,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null));
{
var G__10489 = (i__10467 + 1);
i__10467 = G__10489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10468),iter__10465.call(null,cljs.core.chunk_rest.call(null,s__10466__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10468),null);
}
} else
{var map__10472 = cljs.core.first.call(null,s__10466__$2);var map__10472__$1 = ((cljs.core.seq_QMARK_.call(null,map__10472))?cljs.core.apply.call(null,cljs.core.hash_map,map__10472):map__10472);var status = cljs.core.get.call(null,map__10472__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10472__$1,new cljs.core.Keyword(null,"info","info",1017141280));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null),iter__10465.call(null,cljs.core.rest.call(null,s__10466__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__10473_10490 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10474_10491 = null;var count__10475_10492 = 0;var i__10476_10493 = 0;while(true){
if((i__10476_10493 < count__10475_10492))
{var vec__10477_10494 = cljs.core._nth.call(null,chunk__10474_10491,i__10476_10493);var ev__8184__auto___10495 = cljs.core.nth.call(null,vec__10477_10494,0,null);var func__8185__auto___10496 = cljs.core.nth.call(null,vec__10477_10494,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10495,func__8185__auto___10496);
{
var G__10497 = seq__10473_10490;
var G__10498 = chunk__10474_10491;
var G__10499 = count__10475_10492;
var G__10500 = (i__10476_10493 + 1);
seq__10473_10490 = G__10497;
chunk__10474_10491 = G__10498;
count__10475_10492 = G__10499;
i__10476_10493 = G__10500;
continue;
}
} else
{var temp__4092__auto___10501 = cljs.core.seq.call(null,seq__10473_10490);if(temp__4092__auto___10501)
{var seq__10473_10502__$1 = temp__4092__auto___10501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10473_10502__$1))
{var c__7561__auto___10503 = cljs.core.chunk_first.call(null,seq__10473_10502__$1);{
var G__10504 = cljs.core.chunk_rest.call(null,seq__10473_10502__$1);
var G__10505 = c__7561__auto___10503;
var G__10506 = cljs.core.count.call(null,c__7561__auto___10503);
var G__10507 = 0;
seq__10473_10490 = G__10504;
chunk__10474_10491 = G__10505;
count__10475_10492 = G__10506;
i__10476_10493 = G__10507;
continue;
}
} else
{var vec__10478_10508 = cljs.core.first.call(null,seq__10473_10502__$1);var ev__8184__auto___10509 = cljs.core.nth.call(null,vec__10478_10508,0,null);var func__8185__auto___10510 = cljs.core.nth.call(null,vec__10478_10508,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10509,func__8185__auto___10510);
{
var G__10511 = cljs.core.next.call(null,seq__10473_10502__$1);
var G__10512 = null;
var G__10513 = 0;
var G__10514 = 0;
seq__10473_10490 = G__10511;
chunk__10474_10491 = G__10512;
count__10475_10492 = G__10513;
i__10476_10493 = G__10514;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.tests.__BEH__refresh_results = (function __BEH__refresh_results(this$,result){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",2111450984)], null),cljs.core.conj,result);
var new_cnt = lt.plugins.gitlight.tests.test_panel.call(null,this$);lt.plugins.gitlight.common_ui.dom_reset.call(null,lt.util.dom.parent.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),new_cnt);
console.log(new_cnt.innerHTML);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),new_cnt], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests","refresh-results","lt.plugins.gitlight.tests/refresh-results",3760669173),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.__BEH__refresh_results,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-result","add-result",1606018619),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests","tests.out","lt.plugins.gitlight.tests/tests.out",4666915576),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tests.out","gitlight-tests.out",1702733674)], null),new cljs.core.Keyword(null,"name","name",1017277949),"tests out",new cljs.core.Keyword(null,"results","results",2111450984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",1017141280),"show test panel",new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"ok","ok",1013907790)], null)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword("lt.plugins.gitlight.tests","refresh-results","lt.plugins.gitlight.tests/refresh-results",3760669173)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gitlight.tests.test_panel.call(null,this$);
}));
lt.plugins.gitlight.tests.tests_out = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests","tests.out","lt.plugins.gitlight.tests/tests.out",4666915576));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.tests","selft-test","lt.plugins.gitlight.tests/selft-test",1165251898),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: self test",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.gitlight.tests.tests_out);
lt.object.merge_BANG_.call(null,lt.plugins.gitlight.tests.tests_out,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.PersistentVector.EMPTY], null));
return lt.object.raise.call(null,lt.plugins.gitlight.tests.tests_out,new cljs.core.Keyword(null,"run-tests","run-tests",3407592401));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests.lib')) {
goog.provide('lt.plugins.gitlight.tests.lib');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.plugins.gitlight.tests');
goog.require('lt.plugins.gitlight.tests');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.tests.lib.asrt_out = (function asrt_out(status){if((status === false) || ((status == null)))
{return new cljs.core.Keyword(null,"error","error",1110689146);
} else
{if(status === true)
{return new cljs.core.Keyword(null,"ok","ok",1013907790);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"not-bool","not-bool",2543743254);
} else
{return null;
}
}
}
});
/**
* Show status of test
*/
lt.plugins.gitlight.tests.lib.asrt = (function asrt(explanation,test_case){return lt.object.raise.call(null,lt.plugins.gitlight.tests.tests_out,new cljs.core.Keyword(null,"add-result","add-result",1606018619),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",1017141280),explanation,new cljs.core.Keyword(null,"status","status",4416389988),lt.plugins.gitlight.tests.lib.asrt_out.call(null,test_case)], null));
});
lt.plugins.gitlight.tests.lib.selector_asrt = (function selector_asrt(p__10717){var map__10719 = p__10717;var map__10719__$1 = ((cljs.core.seq_QMARK_.call(null,map__10719))?cljs.core.apply.call(null,cljs.core.hash_map,map__10719):map__10719);var select = cljs.core.get.call(null,map__10719__$1,new cljs.core.Keyword(null,"select","select",4402849902));return null;
});
lt.plugins.gitlight.tests.lib.def_test = (function def_test(test_name,f){lt.plugins.gitlight.tests.lib.__BEH__test_name = (function __BEH__test_name(){console.log("refresh",Math.random());
return f.call(null);
});
lt.object.behavior_STAR_.call(null,test_name,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.lib.__BEH__test_name,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run-tests","run-tests",3407592401),null], null), null));
return lt.object.add_behavior_BANG_.call(null,lt.plugins.gitlight.tests.tests_out,test_name);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests.status.back')) {
goog.provide('lt.plugins.gitlight.tests.status.back');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.objs.proc');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('clojure.string');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.tests.status.back.random_str = (function random_str(){var r = (10 + cljs.core.rand_int.call(null,10));return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,r,(function (){return cljs.core.char$.call(null,(cljs.core.rand_int.call(null,26) + 97));
})));
});
lt.plugins.gitlight.tests.status.back.data = cljs.core.list(cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"newfile","newfile",2859647630),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"newfile","newfile",2859647630),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-both-added","unmerged-both-added",3821120238),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"newfile","newfile",2859647630),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-added-by-us","unmerged-added-by-us",4095962481),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"renamed","renamed",2106238040),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"renamed","renamed",2106238040),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"renamed","renamed",2106238040),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"copied","copied",3954141750),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"copied","copied",3954141750),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"copied","copied",3954141750),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"staged","staged",4416376984))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"deleted","deleted",2564367243),new cljs.core.Keyword(null,"staged","staged",4416376984)),cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"modified","modified",4693358139),new cljs.core.Keyword(null,"not-staged","not-staged",2801274066))),cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-both-deleted","unmerged-both-deleted",4207561479),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-deleted-by-us","unmerged-deleted-by-us",1004394442),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-added-by-them","unmerged-added-by-them",3639367855),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-deleted-by-them","unmerged-deleted-by-them",4759851208),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"filename","filename",4574102905),new cljs.core.Keyword(null,"unmerged-both-modified","unmerged-both-modified",4092771903),new cljs.core.Keyword(null,"merge-conflict","merge-conflict",622673209))));
lt.plugins.gitlight.tests.status.back.change_filenames = (function change_filenames(filename,x){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10743_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filename","filename",4574102905),p1__10743_SHARP_))
{return filename;
} else
{return p1__10743_SHARP_;
}
}),x));
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","back-tests","lt.plugins.gitlight.tests.status.back/back-tests",4633446629),(function (){lt.plugins.gitlight.tests.status.back.test_data = (function test_data(pair){var vec__10747 = pair;var n = cljs.core.nth.call(null,vec__10747,0,null);var what = cljs.core.nth.call(null,vec__10747,1,null);var vec__10748 = what;var tst = cljs.core.nth.call(null,vec__10748,0,null);var parsed = cljs.core.nth.call(null,vec__10748,1,null);var vec__10749 = tst;var X = cljs.core.nth.call(null,vec__10749,0,null);var Y = cljs.core.nth.call(null,vec__10749,1,null);var filename = cljs.core.nth.call(null,vec__10749,2,null);var d = cljs.core.nth.call(null,lt.plugins.gitlight.tests.status.back.data,n);var what_should_be = cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.tests.status.back.change_filenames,filename),d));var what_is = cljs.core.sort.call(null,parsed);var tst__$1 = cljs.core._EQ_.call(null,what_should_be,what_is);if(!(tst__$1))
{lt.plugins.gitlight.tests.lib.asrt.call(null,[cljs.core.str("parsing porcelain: `"),cljs.core.str(X),cljs.core.str("' `"),cljs.core.str(Y),cljs.core.str("'")].join(''),tst__$1);
} else
{}
return tst__$1;
});
lt.plugins.gitlight.tests.status.back.generate_test_data = (function generate_test_data(){var iter__7530__auto__ = (function iter__10756(s__10757){return (new cljs.core.LazySeq(null,(function (){var s__10757__$1 = s__10757;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10757__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7526__auto__ = ((function (s__10757__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__10758(s__10759){return (new cljs.core.LazySeq(null,((function (s__10757__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__10759__$1 = s__10759;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10759__$1);if(temp__4092__auto____$1)
{var s__10759__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10759__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10759__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10761 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10760 = 0;while(true){
if((i__10760 < size__7529__auto__))
{var y = cljs.core._nth.call(null,c__7528__auto__,i__10760);cljs.core.chunk_append.call(null,b__10761,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})());
{
var G__10772 = (i__10760 + 1);
i__10760 = G__10772;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10761),iter__10758.call(null,cljs.core.chunk_rest.call(null,s__10759__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10761),null);
}
} else
{var y = cljs.core.first.call(null,s__10759__$2);return cljs.core.cons.call(null,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})(),iter__10758.call(null,cljs.core.rest.call(null,s__10759__$2)));
}
} else
{return null;
}
break;
}
});})(s__10757__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__10757__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7527__auto__ = cljs.core.seq.call(null,iterys__7526__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","D","U"], null)));if(fs__7527__auto__)
{return cljs.core.concat.call(null,fs__7527__auto__,iter__10756.call(null,cljs.core.rest.call(null,s__10757__$1)));
} else
{{
var G__10773 = cljs.core.rest.call(null,s__10757__$1);
s__10757__$1 = G__10773;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","R","C","D","U"], null));
});
lt.plugins.gitlight.tests.status.back.run_tests = (function run_tests(){return cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,lt.plugins.gitlight.tests.status.back.test_data,cljs.core.map_indexed.call(null,cljs.core.vector,lt.plugins.gitlight.tests.status.back.generate_test_data.call(null))));
});
return lt.plugins.gitlight.tests.lib.asrt.call(null,"git status parse porcelain",lt.plugins.gitlight.tests.status.back.run_tests.call(null));
}));
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","does-git-path-even-point-to-something?","lt.plugins.gitlight.tests.status.back/does-git-path-even-point-to-something?",1965506090),(function (){return lt.plugins.gitlight.tests.lib.asrt.call(null,"path to git exec",lt.objs.files.file_QMARK_.call(null,new cljs.core.Keyword(null,"git-binary","git-binary",1640221134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config))));
}));
lt.plugins.gitlight.tests.status.back.status_regexp = /## master\n( M not-staged-...\n){5}(M  staged-...\n){5}A  unstage_me\n\?\? stage_me\n\?\? trash\n(\?\? untracked-...\n){5}/;
lt.plugins.gitlight.tests.status.back.what_status_should_look_like = /## master\n( M not-staged-...\n){5}A  stage_me\n(M  staged-...\n){5}\?\? unstage_me\n(\?\? untracked-...\n){5}/;
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","git-add-and-reset-test","lt.plugins.gitlight.tests.status.back/git-add-and-reset-test",1253463607),(function (){lt.plugins.gitlight.tests.status.back.__BEH__git_test_repo__DOT__out = (function __BEH__git_test_repo__DOT__out(obj,data){cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.tests.status.back.test_git_status_out)),data.toString());
return lt.plugins.gitlight.tests.status.back.test_git_status.call(null,data.toString());
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","git-test-repo.out","lt.plugins.gitlight.tests.status.back/git-test-repo.out",1375076508),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.status.back.__BEH__git_test_repo__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"git test repo out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.tests.status.back.__BEH__test_git_status__DOT__out = (function __BEH__test_git_status__DOT__out(obj,data){var matched = cljs.core.re_matches.call(null,lt.plugins.gitlight.tests.status.back.status_regexp,data.toString());var cwd = cljs.core.deref.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));lt.plugins.gitlight.git.git_command_cwd.call(null,lt.plugins.gitlight.git.git_ignore_out,cwd,"add","stage_me");
lt.plugins.gitlight.git.git_command_cwd.call(null,lt.plugins.gitlight.git.git_ignore_out,cwd,"reset","unstage_me");
lt.objs.files.delete_BANG_.call(null,[cljs.core.str(cwd),cljs.core.str("/"),cljs.core.str("trash")].join(''));
lt.plugins.gitlight.tests.lib.asrt.call(null,"status of test git repo ",!((matched == null)));
return lt.plugins.gitlight.git.git_command_cwd.call(null,lt.plugins.gitlight.tests.status.back.after_add_reset_rm_out,cwd,"status","--porcelain","--branch");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","test-git-status.out","lt.plugins.gitlight.tests.status.back/test-git-status.out",4522827762),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.status.back.__BEH__test_git_status__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git status is executed, parse its output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.tests.status.back.__BEH__after_add_reset_rm__DOT__out = (function __BEH__after_add_reset_rm__DOT__out(obj,data){var matched_after = cljs.core.re_matches.call(null,lt.plugins.gitlight.tests.status.back.what_status_should_look_like,data.toString());return lt.plugins.gitlight.tests.lib.asrt.call(null,"status of test git repo after add and reset",!((matched_after == null)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","after-add-reset-rm.out","lt.plugins.gitlight.tests.status.back/after-add-reset-rm.out",1535969728),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.status.back.__BEH__after_add_reset_rm__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git status is executed after add and reset parse its output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.gitlight.tests.status.back.git_test_repo = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","git-test-repo-out","lt.plugins.gitlight.tests.status.back/git-test-repo-out",1375071229),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-test-repo-out","git-test-repo-out",1206949381)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","git-test-repo.out","lt.plugins.gitlight.tests.status.back/git-test-repo.out",1375076508)], null)));
lt.plugins.gitlight.tests.status.back.test_git_status_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","test-git-status-out","lt.plugins.gitlight.tests.status.back/test-git-status-out",4522134867),new cljs.core.Keyword(null,"cwd","cwd",1014003170),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-git-status-out","test-git-status-out",2760717787)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","test-git-status.out","lt.plugins.gitlight.tests.status.back/test-git-status.out",4522827762)], null)));
lt.plugins.gitlight.tests.status.back.after_add_reset_rm_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","after-add-reset-rm-out","lt.plugins.gitlight.tests.status.back/after-add-reset-rm-out",1535940129),new cljs.core.Keyword(null,"cwd","cwd",1014003170),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"after-add-reset-rm-out","after-add-reset-rm-out",1384481769)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","after-add-reset-rm.out","lt.plugins.gitlight.tests.status.back/after-add-reset-rm.out",1535969728)], null)));
lt.plugins.gitlight.tests.status.back.test_git_status = (function test_git_status(cwd){return lt.plugins.gitlight.git.git_command_cwd.call(null,lt.plugins.gitlight.tests.status.back.test_git_status_out,cwd,"status","--porcelain","--branch");
});
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),[cljs.core.str(lt.objs.plugins.user_plugins_dir),cljs.core.str("/gitlight/src/lt/plugins/gitlight/tests/status/mkgit.sh")].join(''),new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.tests.status.back.git_test_repo], null));
}));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests.remote-com')) {
goog.provide('lt.plugins.gitlight.tests.remote_com');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.objs.proc');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('clojure.string');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight');
goog.require('lt.plugins.gitlight.git');
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-fetch-pull-commit-push-test","lt.plugins.gitlight.tests.remote-com/git-fetch-pull-commit-push-test",3144114653),(function (){lt.plugins.gitlight.tests.remote_com.__BEH__git_test_repo__DOT__out = (function __BEH__git_test_repo__DOT__out(obj,data){var cwd = data.toString();cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.tests.remote_com.git_test_exit_status)),cwd);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.tests.remote_com.git_test_exit_status)),"fetch");
return lt.plugins.gitlight.git.git_command_cwd.call(null,lt.plugins.gitlight.tests.remote_com.git_test_exit_status,cwd,"fetch");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-repo.out","lt.plugins.gitlight.tests.remote-com/git-test-repo.out",3393625464),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.remote_com.__BEH__git_test_repo__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"git test repo out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
/**
* @param {...*} var_args
*/
lt.plugins.gitlight.tests.remote_com.after = (function() { 
var after__delegate = function (text,cwd,data,what_next){cljs.core.println.call(null,text,cwd,data,what_next);
lt.plugins.gitlight.tests.lib.asrt.call(null,text,cljs.core._EQ_.call(null,0,data));
if(cljs.core._EQ_.call(null,0,data))
{cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.tests.remote_com.git_test_exit_status)),cljs.core.first.call(null,what_next));
return cljs.core.apply.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.git.git_command_cwd,lt.plugins.gitlight.tests.remote_com.git_test_exit_status,cwd),what_next);
} else
{return null;
}
};
var after = function (text,cwd,data,var_args){
var what_next = null;if (arguments.length > 3) {
  what_next = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return after__delegate.call(this,text,cwd,data,what_next);};
after.cljs$lang$maxFixedArity = 3;
after.cljs$lang$applyTo = (function (arglist__10742){
var text = cljs.core.first(arglist__10742);
arglist__10742 = cljs.core.next(arglist__10742);
var cwd = cljs.core.first(arglist__10742);
arglist__10742 = cljs.core.next(arglist__10742);
var data = cljs.core.first(arglist__10742);
var what_next = cljs.core.rest(arglist__10742);
return after__delegate(text,cwd,data,what_next);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
lt.plugins.gitlight.tests.remote_com.__BEH__git_test_exit_status__DOT__out = (function __BEH__git_test_exit_status__DOT__out(obj,data){var cwd = cljs.core.deref.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));var G__10731 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));if(cljs.core._EQ_.call(null,"push",G__10731))
{return lt.plugins.gitlight.tests.lib.asrt.call(null,"git push",cljs.core._EQ_.call(null,0,data));
} else
{if(cljs.core._EQ_.call(null,"commit",G__10731))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git commit",cwd,data,"push");
} else
{if(cljs.core._EQ_.call(null,"add",G__10731))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git add",cwd,data,"commit","-m","commiting");
} else
{if(cljs.core._EQ_.call(null,"pull",G__10731))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git pull",cwd,data,"add","push_me");
} else
{if(cljs.core._EQ_.call(null,"fetch",G__10731))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git fetch",cwd,data,"pull");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))))].join('')));
} else
{return null;
}
}
}
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-exit-status.out","lt.plugins.gitlight.tests.remote-com/git-test-exit-status.out",787683621),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.tests.remote_com.__BEH__git_test_exit_status__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"git test repo out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.plugins.gitlight.tests.remote_com.git_test_exit_status = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-exit-status","lt.plugins.gitlight.tests.remote-com/git-test-exit-status",1407654085),new cljs.core.Keyword(null,"cwd","cwd",1014003170),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"command","command",1964298941),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-test-exit-status","git-test-exit-status",3511711443)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-exit-status.out","lt.plugins.gitlight.tests.remote-com/git-test-exit-status.out",787683621)], null)));
lt.plugins.gitlight.tests.remote_com.git_test_repo = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-repo-out","lt.plugins.gitlight.tests.remote-com/git-test-repo-out",3393665431),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-test-repo-out","git-test-repo-out",1206949381)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.tests.remote-com","git-test-repo.out","lt.plugins.gitlight.tests.remote-com/git-test-repo.out",3393625464)], null)));
lt.plugins.gitlight.tests.remote_com.dir = [cljs.core.str(lt.objs.plugins.user_plugins_dir),cljs.core.str("/gitlight/src/lt/plugins/gitlight/tests/status/")].join('');
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),[cljs.core.str(lt.plugins.gitlight.tests.remote_com.dir),cljs.core.str("mkremote.sh")].join(''),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.gitlight.tests.remote_com.dir,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.gitlight.tests.remote_com.git_test_repo], null));
}));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.gutter')) {
goog.provide('lt.plugins.gitlight.gutter');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.plugins.gitlight.execute');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.plugins.gitlight.diff');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.execute');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.diff');
goog.require('lt.plugins.gitlight.git');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","gutter-settings","lt.plugins.gitlight.gutter/gutter-settings",3270956924),new cljs.core.Keyword(null,"width","width",1127031096),50);
lt.plugins.gitlight.gutter.gutter_settings = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","gutter-settings","lt.plugins.gitlight.gutter/gutter-settings",3270956924));
lt.plugins.gitlight.gutter.make_gutter_marker = (function make_gutter_marker(this$,on_click,content){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gutter-content","div.gutter-content",4072529974),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: "),cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.gutter.gutter_settings))),cljs.core.str("px; "),cljs.core.str("white-space: nowrap; "),cljs.core.str("overflow: hidden;")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),content], null)], null));var seq__10047_10072 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return on_click.call(null,content);
})], null)));var chunk__10048_10073 = null;var count__10049_10074 = 0;var i__10050_10075 = 0;while(true){
if((i__10050_10075 < count__10049_10074))
{var vec__10051_10076 = cljs.core._nth.call(null,chunk__10048_10073,i__10050_10075);var ev__8184__auto___10077 = cljs.core.nth.call(null,vec__10051_10076,0,null);var func__8185__auto___10078 = cljs.core.nth.call(null,vec__10051_10076,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10077,func__8185__auto___10078);
{
var G__10079 = seq__10047_10072;
var G__10080 = chunk__10048_10073;
var G__10081 = count__10049_10074;
var G__10082 = (i__10050_10075 + 1);
seq__10047_10072 = G__10079;
chunk__10048_10073 = G__10080;
count__10049_10074 = G__10081;
i__10050_10075 = G__10082;
continue;
}
} else
{var temp__4092__auto___10083 = cljs.core.seq.call(null,seq__10047_10072);if(temp__4092__auto___10083)
{var seq__10047_10084__$1 = temp__4092__auto___10083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10047_10084__$1))
{var c__7561__auto___10085 = cljs.core.chunk_first.call(null,seq__10047_10084__$1);{
var G__10086 = cljs.core.chunk_rest.call(null,seq__10047_10084__$1);
var G__10087 = c__7561__auto___10085;
var G__10088 = cljs.core.count.call(null,c__7561__auto___10085);
var G__10089 = 0;
seq__10047_10072 = G__10086;
chunk__10048_10073 = G__10087;
count__10049_10074 = G__10088;
i__10050_10075 = G__10089;
continue;
}
} else
{var vec__10052_10090 = cljs.core.first.call(null,seq__10047_10084__$1);var ev__8184__auto___10091 = cljs.core.nth.call(null,vec__10052_10090,0,null);var func__8185__auto___10092 = cljs.core.nth.call(null,vec__10052_10090,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10091,func__8185__auto___10092);
{
var G__10093 = cljs.core.next.call(null,seq__10047_10084__$1);
var G__10094 = null;
var G__10095 = 0;
var G__10096 = 0;
seq__10047_10072 = G__10093;
chunk__10048_10073 = G__10094;
count__10049_10074 = G__10095;
i__10050_10075 = G__10096;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.gutter.show_gutter_data = (function show_gutter_data(this$,data){var current_gutters = cljs.core.set.call(null,cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters")));var gutter_div = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.CodeMirror-gutters","div.CodeMirror-gutters",1932435974),lt.object.__GT_content.call(null,this$));var gutter_markers = cljs.core.map.call(null,((function (current_gutters,gutter_div){
return (function (p1__10053_SHARP_){return lt.plugins.gitlight.gutter.make_gutter_marker.call(null,this$,cljs.core.println,p1__10053_SHARP_);
});})(current_gutters,gutter_div))
,data);var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);return lt.objs.editor.operation.call(null,this$,(function (){lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"gitlight-gutter"))], null));
lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.gitlight-gutter","div.gitlight-gutter",3002550937),gutter_div),new cljs.core.PersistentArrayMap(null, 1, ["width",[cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.gutter.gutter_settings))),cljs.core.str("px")].join('')], null));
cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (idx,gutter_marker){return ed.setGutterMarker(idx,"gitlight-gutter",gutter_marker);
}),gutter_markers));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
}));
});
lt.plugins.gitlight.gutter.remove_gutters = (function remove_gutters(this$){lt.objs.editor.__GT_cm_ed.call(null,this$).clearGutter("gitlight-gutter");
lt.util.dom.remove.call(null,new cljs.core.Keyword(null,"div.gitlight-gutter","div.gitlight-gutter",3002550937),lt.object.__GT_content.call(null,this$));
var gutter_10097 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["gitlight-gutter",null], null), null),gutter_10097))], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.plugins.gitlight.gutter.side_by_side = (function side_by_side(firsts){var partitioned = cljs.core.partition_by.call(null,cljs.core.first,firsts);return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__10058,part){var vec__10059 = p__10058;var ok = cljs.core.nth.call(null,vec__10059,0,null);var stack = cljs.core.nth.call(null,vec__10059,1,null);var vec__10060 = cljs.core.split_at.call(null,1,part);var fst = cljs.core.nth.call(null,vec__10060,0,null);var rst = cljs.core.nth.call(null,vec__10060,1,null);var left = cljs.core.count.call(null,stack);var right = cljs.core.count.call(null,part);var G__10061 = cljs.core.first.call(null,fst);if(cljs.core._EQ_.call(null,"+",G__10061))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,ok,cljs.core.map.call(null,cljs.core.str,part,stack),cljs.core.repeat.call(null,(right - left),"+")),cljs.core.repeat.call(null,(left - right),"-")], null);
} else
{if(cljs.core._EQ_.call(null,"-",G__10061))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok,part], null);
} else
{if(cljs.core._EQ_.call(null," ",G__10061))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,ok,((cljs.core.empty_QMARK_.call(null,stack))?fst:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(" -"),cljs.core.str(cljs.core.count.call(null,stack)),cljs.core.str("\u2191")].join('')], null)),rst),cljs.core.PersistentVector.EMPTY], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,fst))].join('')));
} else
{return null;
}
}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),partitioned));
});
lt.plugins.gitlight.gutter.__BEH__parse_diff_out = (function __BEH__parse_diff_out(this$,stdout,stderr){var parsed = cljs.core.drop.call(null,5,clojure.string.split_lines.call(null,stdout.toString()));var firsts = cljs.core.map.call(null,cljs.core.first,parsed);return lt.plugins.gitlight.gutter.show_gutter_data.call(null,lt.objs.editor.pool.last_active.call(null),((cljs.core.empty_QMARK_.call(null,firsts))?cljs.core.repeat.call(null,lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).doc.size," "):lt.plugins.gitlight.gutter.side_by_side.call(null,firsts)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","parse-diff-out","lt.plugins.gitlight.gutter/parse-diff-out",3347529797),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.gutter.__BEH__parse_diff_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out","out",1014014656)], null));
lt.plugins.gitlight.gutter.__BEH__diff_err = (function __BEH__diff_err(this$,err,stderr){return cljs.core.println.call(null,"error",stderr);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","diff-err","lt.plugins.gitlight.gutter/diff-err",3071060100),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.gutter.__BEH__diff_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",1014004951)], null));
lt.plugins.gitlight.gutter.diff_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","diff-file-out","lt.plugins.gitlight.gutter/diff-file-out",3278312268),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.gutter","diff-file-out","lt.plugins.gitlight.gutter/diff-file-out",3278312268),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.gutter","parse-diff-out","lt.plugins.gitlight.gutter/parse-diff-out",3347529797),new cljs.core.Keyword("lt.plugins.gitlight.gutter","diff-err","lt.plugins.gitlight.gutter/diff-err",3071060100)], null)));
lt.plugins.gitlight.gutter.add_git_diff_gutter = (function add_git_diff_gutter(){return lt.plugins.gitlight.execute.run_deaf.call(null,lt.plugins.gitlight.gutter.diff_out,lt.plugins.gitlight.git.get_git_root.call(null),[cljs.core.str("git diff -U10000 -- "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))))].join(''));
});
lt.plugins.gitlight.gutter.remove_git_diff_gutter = (function remove_git_diff_gutter(){return lt.plugins.gitlight.gutter.remove_gutters.call(null,lt.objs.editor.pool.last_active.call(null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.gutter","gitlight-add-diff-gutter","lt.plugins.gitlight.gutter/gitlight-add-diff-gutter",759220851),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: add gutter diff",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.gutter.add_git_diff_gutter], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.gutter","gitlight-remove-diff-gutter","lt.plugins.gitlight.gutter/gitlight-remove-diff-gutter",2404884234),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: remove gutter diff",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.gutter.remove_git_diff_gutter], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.tests.status.ui')) {
goog.provide('lt.plugins.gitlight.tests.status.ui');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.tests.lib');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.status.ui');
goog.require('lt.plugins.gitlight.status.ui');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.tests.status.ui.test_node = (function test_node(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"test"], null));var seq__10780_10796 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10781_10797 = null;var count__10782_10798 = 0;var i__10783_10799 = 0;while(true){
if((i__10783_10799 < count__10782_10798))
{var vec__10784_10800 = cljs.core._nth.call(null,chunk__10781_10797,i__10783_10799);var ev__8184__auto___10801 = cljs.core.nth.call(null,vec__10784_10800,0,null);var func__8185__auto___10802 = cljs.core.nth.call(null,vec__10784_10800,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10801,func__8185__auto___10802);
{
var G__10803 = seq__10780_10796;
var G__10804 = chunk__10781_10797;
var G__10805 = count__10782_10798;
var G__10806 = (i__10783_10799 + 1);
seq__10780_10796 = G__10803;
chunk__10781_10797 = G__10804;
count__10782_10798 = G__10805;
i__10783_10799 = G__10806;
continue;
}
} else
{var temp__4092__auto___10807 = cljs.core.seq.call(null,seq__10780_10796);if(temp__4092__auto___10807)
{var seq__10780_10808__$1 = temp__4092__auto___10807;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10780_10808__$1))
{var c__7561__auto___10809 = cljs.core.chunk_first.call(null,seq__10780_10808__$1);{
var G__10810 = cljs.core.chunk_rest.call(null,seq__10780_10808__$1);
var G__10811 = c__7561__auto___10809;
var G__10812 = cljs.core.count.call(null,c__7561__auto___10809);
var G__10813 = 0;
seq__10780_10796 = G__10810;
chunk__10781_10797 = G__10811;
count__10782_10798 = G__10812;
i__10783_10799 = G__10813;
continue;
}
} else
{var vec__10785_10814 = cljs.core.first.call(null,seq__10780_10808__$1);var ev__8184__auto___10815 = cljs.core.nth.call(null,vec__10785_10814,0,null);var func__8185__auto___10816 = cljs.core.nth.call(null,vec__10785_10814,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10815,func__8185__auto___10816);
{
var G__10817 = cljs.core.next.call(null,seq__10780_10808__$1);
var G__10818 = null;
var G__10819 = 0;
var G__10820 = 0;
seq__10780_10796 = G__10817;
chunk__10781_10797 = G__10818;
count__10782_10798 = G__10819;
i__10783_10799 = G__10820;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.ui","test","lt.plugins.gitlight.tests.status.ui/test",1681010124),(function (){return lt.plugins.gitlight.tests.lib.asrt.call(null,"dom-truncate: truncates",(function (){var tn = lt.plugins.gitlight.tests.status.ui.test_node.call(null);lt.plugins.gitlight.common_ui.dom_truncate.call(null,tn);
return cljs.core._EQ_.call(null,tn.innerHTML,"");
})());
}));
}
if(!lt.util.load.provided_QMARK_('')) {
}

//# sourceMappingURL=gitlight_compiled.js.map