if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight')) {
goog.provide('lt.plugins.gitlight');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.config = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight","config","lt.plugins.gitlight/config",1646663114),null], null), null),new cljs.core.Keyword(null,"git-status-refresh-rate","git-status-refresh-rate",1535627140),1000,new cljs.core.Keyword(null,"git-binary","git-binary",1640221134),"git"));
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
var git_command_cwd__delegate = function (obj,cwd,args){var git_path = new cljs.core.Keyword(null,"git-binary","git-binary",1640221134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.config));var command = [cljs.core.str(lt.plugins.gitlight.lib.qu.call(null,git_path)),cljs.core.str(" "),cljs.core.str(clojure.string.join.call(null," ",args))].join('');return lt.plugins.gitlight.execute.run_deaf.call(null,obj,cwd,command);
};
var git_command_cwd = function (obj,cwd,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return git_command_cwd__delegate.call(this,obj,cwd,args);};
git_command_cwd.cljs$lang$maxFixedArity = 2;
git_command_cwd.cljs$lang$applyTo = (function (arglist__10110){
var obj = cljs.core.first(arglist__10110);
arglist__10110 = cljs.core.next(arglist__10110);
var cwd = cljs.core.first(arglist__10110);
var args = cljs.core.rest(arglist__10110);
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
git_command.cljs$lang$applyTo = (function (arglist__10111){
var obj = cljs.core.first(arglist__10111);
var args = cljs.core.rest(arglist__10111);
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
git_command_ignore_out.cljs$lang$applyTo = (function (arglist__10112){
var args = cljs.core.seq(arglist__10112);
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
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.gutter')) {
goog.provide('lt.plugins.gitlight.gutter');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.object');
goog.require('lt.object');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","gutter-settings","lt.plugins.gitlight.gutter/gutter-settings",3270956924),new cljs.core.Keyword(null,"width","width",1127031096),50);
lt.plugins.gitlight.gutter.gutter_settings = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","gutter-settings","lt.plugins.gitlight.gutter/gutter-settings",3270956924));
lt.plugins.gitlight.gutter.make_gutter_marker = (function make_gutter_marker(this$,on_click,content){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gutter-content","div.gutter-content",4072529974),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: "),cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.gutter.gutter_settings))),cljs.core.str("px; "),cljs.core.str("white-space: nowrap; "),cljs.core.str("overflow: hidden;")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),content], null)], null));var seq__10119_10126 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return on_click.call(null,content);
})], null)));var chunk__10120_10127 = null;var count__10121_10128 = 0;var i__10122_10129 = 0;while(true){
if((i__10122_10129 < count__10121_10128))
{var vec__10123_10130 = cljs.core._nth.call(null,chunk__10120_10127,i__10122_10129);var ev__8184__auto___10131 = cljs.core.nth.call(null,vec__10123_10130,0,null);var func__8185__auto___10132 = cljs.core.nth.call(null,vec__10123_10130,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10131,func__8185__auto___10132);
{
var G__10133 = seq__10119_10126;
var G__10134 = chunk__10120_10127;
var G__10135 = count__10121_10128;
var G__10136 = (i__10122_10129 + 1);
seq__10119_10126 = G__10133;
chunk__10120_10127 = G__10134;
count__10121_10128 = G__10135;
i__10122_10129 = G__10136;
continue;
}
} else
{var temp__4092__auto___10137 = cljs.core.seq.call(null,seq__10119_10126);if(temp__4092__auto___10137)
{var seq__10119_10138__$1 = temp__4092__auto___10137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10119_10138__$1))
{var c__7561__auto___10139 = cljs.core.chunk_first.call(null,seq__10119_10138__$1);{
var G__10140 = cljs.core.chunk_rest.call(null,seq__10119_10138__$1);
var G__10141 = c__7561__auto___10139;
var G__10142 = cljs.core.count.call(null,c__7561__auto___10139);
var G__10143 = 0;
seq__10119_10126 = G__10140;
chunk__10120_10127 = G__10141;
count__10121_10128 = G__10142;
i__10122_10129 = G__10143;
continue;
}
} else
{var vec__10124_10144 = cljs.core.first.call(null,seq__10119_10138__$1);var ev__8184__auto___10145 = cljs.core.nth.call(null,vec__10124_10144,0,null);var func__8185__auto___10146 = cljs.core.nth.call(null,vec__10124_10144,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10145,func__8185__auto___10146);
{
var G__10147 = cljs.core.next.call(null,seq__10119_10138__$1);
var G__10148 = null;
var G__10149 = 0;
var G__10150 = 0;
seq__10119_10126 = G__10147;
chunk__10120_10127 = G__10148;
count__10121_10128 = G__10149;
i__10122_10129 = G__10150;
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
return (function (p1__10125_SHARP_){return lt.plugins.gitlight.gutter.make_gutter_marker.call(null,this$,cljs.core.println,p1__10125_SHARP_);
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
var gutter_10151 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["gitlight-gutter",null], null), null),gutter_10151))], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.diff')) {
goog.provide('lt.plugins.gitlight.diff');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.proc');
goog.require('lt.util.dom');
goog.require('lt.plugins.gitlight.execute');
goog.require('lt.plugins.gitlight.gutter');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.plugins.gitlight.gutter');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.execute');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
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
return (function iter__9387(s__9388){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__9388__$1 = s__9388;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9388__$1);if(temp__4092__auto__)
{var s__9388__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9388__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9388__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9390 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9389 = 0;while(true){
if((i__9389 < size__7529__auto__))
{var file = cljs.core._nth.call(null,c__7528__auto__,i__9389);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);cljs.core.chunk_append.call(null,b__9390,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9389,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function iter__9687(s__9688){return (new cljs.core.LazySeq(null,((function (i__9389,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9688__$1 = s__9688;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9688__$1);if(temp__4092__auto____$1)
{var s__9688__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9688__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9688__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9690 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9689 = 0;while(true){
if((i__9689 < size__7529__auto____$1))
{var changes_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9689);cljs.core.chunk_append.call(null,b__9690,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9689,i__9389,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function iter__9763(s__9764){return (new cljs.core.LazySeq(null,((function (i__9689,i__9389,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9764__$1 = s__9764;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9764__$1);if(temp__4092__auto____$2)
{var s__9764__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9764__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9764__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9766 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9765 = 0;while(true){
if((i__9765 < size__7529__auto____$2))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$2,i__9765);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9766,(function (){var iter__7530__auto__ = ((function (i__9765,i__9689,i__9389,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9766,s__9764__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function iter__9783(s__9784){return (new cljs.core.LazySeq(null,((function (i__9765,i__9689,i__9389,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9766,s__9764__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9784__$1 = s__9784;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9784__$1);if(temp__4092__auto____$3)
{var s__9784__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9784__$2))
{var c__7528__auto____$3 = cljs.core.chunk_first.call(null,s__9784__$2);var size__7529__auto____$3 = cljs.core.count.call(null,c__7528__auto____$3);var b__9786 = cljs.core.chunk_buffer.call(null,size__7529__auto____$3);if((function (){var i__9785 = 0;while(true){
if((i__9785 < size__7529__auto____$3))
{var vec__9789 = cljs.core._nth.call(null,c__7528__auto____$3,i__9785);var left = cljs.core.nth.call(null,vec__9789,0,null);var right = cljs.core.nth.call(null,vec__9789,1,null);cljs.core.chunk_append.call(null,b__9786,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10019 = (i__9785 + 1);
i__9785 = G__10019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9786),iter__9783.call(null,cljs.core.chunk_rest.call(null,s__9784__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9786),null);
}
} else
{var vec__9790 = cljs.core.first.call(null,s__9784__$2);var left = cljs.core.nth.call(null,vec__9790,0,null);var right = cljs.core.nth.call(null,vec__9790,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9783.call(null,cljs.core.rest.call(null,s__9784__$2)));
}
} else
{return null;
}
break;
}
});})(i__9765,i__9689,i__9389,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9766,s__9764__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(i__9765,i__9689,i__9389,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9766,s__9764__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10020 = (i__9765 + 1);
i__9765 = G__10020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9766),iter__9763.call(null,cljs.core.chunk_rest.call(null,s__9764__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9766),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9764__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9689,i__9389,columned,c,columns,line_group,s__9764__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function iter__9791(s__9792){return (new cljs.core.LazySeq(null,((function (i__9689,i__9389,columned,c,columns,line_group,s__9764__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9792__$1 = s__9792;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9792__$1);if(temp__4092__auto____$3)
{var s__9792__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9792__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9792__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9794 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9793 = 0;while(true){
if((i__9793 < size__7529__auto____$2))
{var vec__9797 = cljs.core._nth.call(null,c__7528__auto____$2,i__9793);var left = cljs.core.nth.call(null,vec__9797,0,null);var right = cljs.core.nth.call(null,vec__9797,1,null);cljs.core.chunk_append.call(null,b__9794,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10021 = (i__9793 + 1);
i__9793 = G__10021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9794),iter__9791.call(null,cljs.core.chunk_rest.call(null,s__9792__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9794),null);
}
} else
{var vec__9798 = cljs.core.first.call(null,s__9792__$2);var left = cljs.core.nth.call(null,vec__9798,0,null);var right = cljs.core.nth.call(null,vec__9798,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9791.call(null,cljs.core.rest.call(null,s__9792__$2)));
}
} else
{return null;
}
break;
}
});})(i__9689,i__9389,columned,c,columns,line_group,s__9764__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(i__9689,i__9389,columned,c,columns,line_group,s__9764__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9763.call(null,cljs.core.rest.call(null,s__9764__$2)));
}
} else
{return null;
}
break;
}
});})(i__9689,i__9389,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(i__9689,i__9389,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9690,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__10022 = (i__9689 + 1);
i__9689 = G__10022;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9690),iter__9687.call(null,cljs.core.chunk_rest.call(null,s__9688__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9690),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9688__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9389,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function iter__9799(s__9800){return (new cljs.core.LazySeq(null,((function (i__9389,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9800__$1 = s__9800;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9800__$1);if(temp__4092__auto____$2)
{var s__9800__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9800__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9800__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9802 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9801 = 0;while(true){
if((i__9801 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9801);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9802,(function (){var iter__7530__auto__ = ((function (i__9801,i__9389,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9802,s__9800__$2,temp__4092__auto____$2,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function iter__9819(s__9820){return (new cljs.core.LazySeq(null,((function (i__9801,i__9389,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9802,s__9800__$2,temp__4092__auto____$2,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9820__$1 = s__9820;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9820__$1);if(temp__4092__auto____$3)
{var s__9820__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9820__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9820__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9822 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9821 = 0;while(true){
if((i__9821 < size__7529__auto____$2))
{var vec__9825 = cljs.core._nth.call(null,c__7528__auto____$2,i__9821);var left = cljs.core.nth.call(null,vec__9825,0,null);var right = cljs.core.nth.call(null,vec__9825,1,null);cljs.core.chunk_append.call(null,b__9822,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10023 = (i__9821 + 1);
i__9821 = G__10023;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9822),iter__9819.call(null,cljs.core.chunk_rest.call(null,s__9820__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9822),null);
}
} else
{var vec__9826 = cljs.core.first.call(null,s__9820__$2);var left = cljs.core.nth.call(null,vec__9826,0,null);var right = cljs.core.nth.call(null,vec__9826,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9819.call(null,cljs.core.rest.call(null,s__9820__$2)));
}
} else
{return null;
}
break;
}
});})(i__9801,i__9389,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9802,s__9800__$2,temp__4092__auto____$2,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(i__9801,i__9389,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9802,s__9800__$2,temp__4092__auto____$2,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10024 = (i__9801 + 1);
i__9801 = G__10024;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9802),iter__9799.call(null,cljs.core.chunk_rest.call(null,s__9800__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9802),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9800__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9389,columned,c,columns,line_group,s__9800__$2,temp__4092__auto____$2,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function iter__9827(s__9828){return (new cljs.core.LazySeq(null,((function (i__9389,columned,c,columns,line_group,s__9800__$2,temp__4092__auto____$2,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9828__$1 = s__9828;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9828__$1);if(temp__4092__auto____$3)
{var s__9828__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9828__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9828__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9830 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9829 = 0;while(true){
if((i__9829 < size__7529__auto____$1))
{var vec__9833 = cljs.core._nth.call(null,c__7528__auto____$1,i__9829);var left = cljs.core.nth.call(null,vec__9833,0,null);var right = cljs.core.nth.call(null,vec__9833,1,null);cljs.core.chunk_append.call(null,b__9830,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10025 = (i__9829 + 1);
i__9829 = G__10025;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9830),iter__9827.call(null,cljs.core.chunk_rest.call(null,s__9828__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9830),null);
}
} else
{var vec__9834 = cljs.core.first.call(null,s__9828__$2);var left = cljs.core.nth.call(null,vec__9834,0,null);var right = cljs.core.nth.call(null,vec__9834,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9827.call(null,cljs.core.rest.call(null,s__9828__$2)));
}
} else
{return null;
}
break;
}
});})(i__9389,columned,c,columns,line_group,s__9800__$2,temp__4092__auto____$2,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(i__9389,columned,c,columns,line_group,s__9800__$2,temp__4092__auto____$2,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9799.call(null,cljs.core.rest.call(null,s__9800__$2)));
}
} else
{return null;
}
break;
}
});})(i__9389,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(i__9389,changes_group,s__9688__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9687.call(null,cljs.core.rest.call(null,s__9688__$2)));
}
} else
{return null;
}
break;
}
});})(i__9389,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(i__9389,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9390,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null));
{
var G__10026 = (i__9389 + 1);
i__9389 = G__10026;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9390),iter__9387.call(null,cljs.core.chunk_rest.call(null,s__9388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9390),null);
}
} else
{var file = cljs.core.first.call(null,s__9388__$2);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function iter__9835(s__9836){return (new cljs.core.LazySeq(null,((function (filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9836__$1 = s__9836;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9836__$1);if(temp__4092__auto____$1)
{var s__9836__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9836__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9836__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9838 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9837 = 0;while(true){
if((i__9837 < size__7529__auto__))
{var changes_group = cljs.core._nth.call(null,c__7528__auto__,i__9837);cljs.core.chunk_append.call(null,b__9838,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9837,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function iter__9911(s__9912){return (new cljs.core.LazySeq(null,((function (i__9837,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9912__$1 = s__9912;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9912__$1);if(temp__4092__auto____$2)
{var s__9912__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9912__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9912__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9914 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9913 = 0;while(true){
if((i__9913 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9913);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9914,(function (){var iter__7530__auto__ = ((function (i__9913,i__9837,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9914,s__9912__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function iter__9931(s__9932){return (new cljs.core.LazySeq(null,((function (i__9913,i__9837,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9914,s__9912__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9932__$1 = s__9932;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9932__$1);if(temp__4092__auto____$3)
{var s__9932__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9932__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9932__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9934 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9933 = 0;while(true){
if((i__9933 < size__7529__auto____$2))
{var vec__9937 = cljs.core._nth.call(null,c__7528__auto____$2,i__9933);var left = cljs.core.nth.call(null,vec__9937,0,null);var right = cljs.core.nth.call(null,vec__9937,1,null);cljs.core.chunk_append.call(null,b__9934,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10027 = (i__9933 + 1);
i__9933 = G__10027;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9934),iter__9931.call(null,cljs.core.chunk_rest.call(null,s__9932__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9934),null);
}
} else
{var vec__9938 = cljs.core.first.call(null,s__9932__$2);var left = cljs.core.nth.call(null,vec__9938,0,null);var right = cljs.core.nth.call(null,vec__9938,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9931.call(null,cljs.core.rest.call(null,s__9932__$2)));
}
} else
{return null;
}
break;
}
});})(i__9913,i__9837,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9914,s__9912__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(i__9913,i__9837,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9914,s__9912__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10028 = (i__9913 + 1);
i__9913 = G__10028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9914),iter__9911.call(null,cljs.core.chunk_rest.call(null,s__9912__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9914),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9912__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9837,columned,c,columns,line_group,s__9912__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function iter__9939(s__9940){return (new cljs.core.LazySeq(null,((function (i__9837,columned,c,columns,line_group,s__9912__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9940__$1 = s__9940;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9940__$1);if(temp__4092__auto____$3)
{var s__9940__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9940__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9940__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9942 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9941 = 0;while(true){
if((i__9941 < size__7529__auto____$1))
{var vec__9945 = cljs.core._nth.call(null,c__7528__auto____$1,i__9941);var left = cljs.core.nth.call(null,vec__9945,0,null);var right = cljs.core.nth.call(null,vec__9945,1,null);cljs.core.chunk_append.call(null,b__9942,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10029 = (i__9941 + 1);
i__9941 = G__10029;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9942),iter__9939.call(null,cljs.core.chunk_rest.call(null,s__9940__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9942),null);
}
} else
{var vec__9946 = cljs.core.first.call(null,s__9940__$2);var left = cljs.core.nth.call(null,vec__9946,0,null);var right = cljs.core.nth.call(null,vec__9946,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9939.call(null,cljs.core.rest.call(null,s__9940__$2)));
}
} else
{return null;
}
break;
}
});})(i__9837,columned,c,columns,line_group,s__9912__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(i__9837,columned,c,columns,line_group,s__9912__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9911.call(null,cljs.core.rest.call(null,s__9912__$2)));
}
} else
{return null;
}
break;
}
});})(i__9837,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(i__9837,changes_group,c__7528__auto__,size__7529__auto__,b__9838,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__10030 = (i__9837 + 1);
i__9837 = G__10030;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9838),iter__9835.call(null,cljs.core.chunk_rest.call(null,s__9836__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9838),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9836__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function iter__9947(s__9948){return (new cljs.core.LazySeq(null,((function (changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9948__$1 = s__9948;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9948__$1);if(temp__4092__auto____$2)
{var s__9948__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9948__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9948__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9950 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9949 = 0;while(true){
if((i__9949 < size__7529__auto__))
{var line_group = cljs.core._nth.call(null,c__7528__auto__,i__9949);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9950,(function (){var iter__7530__auto__ = ((function (i__9949,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9950,s__9948__$2,temp__4092__auto____$2,changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function iter__9967(s__9968){return (new cljs.core.LazySeq(null,((function (i__9949,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9950,s__9948__$2,temp__4092__auto____$2,changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9968__$1 = s__9968;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9968__$1);if(temp__4092__auto____$3)
{var s__9968__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9968__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9968__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9970 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9969 = 0;while(true){
if((i__9969 < size__7529__auto____$1))
{var vec__9973 = cljs.core._nth.call(null,c__7528__auto____$1,i__9969);var left = cljs.core.nth.call(null,vec__9973,0,null);var right = cljs.core.nth.call(null,vec__9973,1,null);cljs.core.chunk_append.call(null,b__9970,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10031 = (i__9969 + 1);
i__9969 = G__10031;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9970),iter__9967.call(null,cljs.core.chunk_rest.call(null,s__9968__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9970),null);
}
} else
{var vec__9974 = cljs.core.first.call(null,s__9968__$2);var left = cljs.core.nth.call(null,vec__9974,0,null);var right = cljs.core.nth.call(null,vec__9974,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9967.call(null,cljs.core.rest.call(null,s__9968__$2)));
}
} else
{return null;
}
break;
}
});})(i__9949,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9950,s__9948__$2,temp__4092__auto____$2,changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(i__9949,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9950,s__9948__$2,temp__4092__auto____$2,changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10032 = (i__9949 + 1);
i__9949 = G__10032;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9950),iter__9947.call(null,cljs.core.chunk_rest.call(null,s__9948__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9950),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9948__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (columned,c,columns,line_group,s__9948__$2,temp__4092__auto____$2,changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function iter__9975(s__9976){return (new cljs.core.LazySeq(null,((function (columned,c,columns,line_group,s__9948__$2,temp__4092__auto____$2,changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output){
return (function (){var s__9976__$1 = s__9976;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9976__$1);if(temp__4092__auto____$3)
{var s__9976__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9976__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9976__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9978 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9977 = 0;while(true){
if((i__9977 < size__7529__auto__))
{var vec__9981 = cljs.core._nth.call(null,c__7528__auto__,i__9977);var left = cljs.core.nth.call(null,vec__9981,0,null);var right = cljs.core.nth.call(null,vec__9981,1,null);cljs.core.chunk_append.call(null,b__9978,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10033 = (i__9977 + 1);
i__9977 = G__10033;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9978),iter__9975.call(null,cljs.core.chunk_rest.call(null,s__9976__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9978),null);
}
} else
{var vec__9982 = cljs.core.first.call(null,s__9976__$2);var left = cljs.core.nth.call(null,vec__9982,0,null);var right = cljs.core.nth.call(null,vec__9982,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9975.call(null,cljs.core.rest.call(null,s__9976__$2)));
}
} else
{return null;
}
break;
}
});})(columned,c,columns,line_group,s__9948__$2,temp__4092__auto____$2,changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(columned,c,columns,line_group,s__9948__$2,temp__4092__auto____$2,changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9947.call(null,cljs.core.rest.call(null,s__9948__$2)));
}
} else
{return null;
}
break;
}
});})(changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(changes_group,s__9836__$2,temp__4092__auto____$1,filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9835.call(null,cljs.core.rest.call(null,s__9836__$2)));
}
} else
{return null;
}
break;
}
});})(filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
,null,null));
});})(filename,file_diff,file,s__9388__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null),iter__9387.call(null,cljs.core.rest.call(null,s__9388__$2)));
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
})());var seq__9983_10034 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9984_10035 = null;var count__9985_10036 = 0;var i__9986_10037 = 0;while(true){
if((i__9986_10037 < count__9985_10036))
{var vec__9987_10038 = cljs.core._nth.call(null,chunk__9984_10035,i__9986_10037);var ev__8184__auto___10039 = cljs.core.nth.call(null,vec__9987_10038,0,null);var func__8185__auto___10040 = cljs.core.nth.call(null,vec__9987_10038,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10039,func__8185__auto___10040);
{
var G__10041 = seq__9983_10034;
var G__10042 = chunk__9984_10035;
var G__10043 = count__9985_10036;
var G__10044 = (i__9986_10037 + 1);
seq__9983_10034 = G__10041;
chunk__9984_10035 = G__10042;
count__9985_10036 = G__10043;
i__9986_10037 = G__10044;
continue;
}
} else
{var temp__4092__auto___10045 = cljs.core.seq.call(null,seq__9983_10034);if(temp__4092__auto___10045)
{var seq__9983_10046__$1 = temp__4092__auto___10045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9983_10046__$1))
{var c__7561__auto___10047 = cljs.core.chunk_first.call(null,seq__9983_10046__$1);{
var G__10048 = cljs.core.chunk_rest.call(null,seq__9983_10046__$1);
var G__10049 = c__7561__auto___10047;
var G__10050 = cljs.core.count.call(null,c__7561__auto___10047);
var G__10051 = 0;
seq__9983_10034 = G__10048;
chunk__9984_10035 = G__10049;
count__9985_10036 = G__10050;
i__9986_10037 = G__10051;
continue;
}
} else
{var vec__9988_10052 = cljs.core.first.call(null,seq__9983_10046__$1);var ev__8184__auto___10053 = cljs.core.nth.call(null,vec__9988_10052,0,null);var func__8185__auto___10054 = cljs.core.nth.call(null,vec__9988_10052,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10053,func__8185__auto___10054);
{
var G__10055 = cljs.core.next.call(null,seq__9983_10046__$1);
var G__10056 = null;
var G__10057 = 0;
var G__10058 = 0;
seq__9983_10034 = G__10055;
chunk__9984_10035 = G__10056;
count__9985_10036 = G__10057;
i__9986_10037 = G__10058;
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
lt.plugins.gitlight.diff.separate = (function separate(fun,coll){return cljs.core.reduce.call(null,(function (p__9991,line){var vec__9992 = p__9991;var left = cljs.core.nth.call(null,vec__9992,0,null);var right = cljs.core.nth.call(null,vec__9992,1,null);if(cljs.core.truth_(fun.call(null,line)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,left,line),right], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,cljs.core.conj.call(null,right,line)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),coll);
});
lt.plugins.gitlight.diff.columner = (function columner(lines){if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"context",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,lines,lines)], null);
} else
{var vec__9995 = lt.plugins.gitlight.diff.separate.call(null,(function (p1__9993_SHARP_){return cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p1__9993_SHARP_));
}),lines);var left = cljs.core.nth.call(null,vec__9995,0,null);var right = cljs.core.nth.call(null,vec__9995,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"changed",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,left,right)], null);
}
});
lt.plugins.gitlight.diff.split_into_headered_groups = (function split_into_headered_groups(lines,fun,result_fun,headkey,contkey){if(!(cljs.core.empty_QMARK_.call(null,lines)))
{var fst = cljs.core.first.call(null,lines);var vec__9997 = cljs.core.split_with.call(null,fun,cljs.core.rest.call(null,lines));var content = cljs.core.nth.call(null,vec__9997,0,null);var leftovers = cljs.core.nth.call(null,vec__9997,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([headkey,fst,contkey,result_fun.call(null,content)], true, false),split_into_headered_groups.call(null,leftovers,fun,result_fun,headkey,contkey));
} else
{return null;
}
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,x));
}),(function (x){return cljs.core.partition_by.call(null,(function (p1__9998_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__9998_SHARP_));
}),x);
}),new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.Keyword(null,"content","content",1965434859));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(data){var vec__10000 = cljs.core.take.call(null,3,data);var header = cljs.core.nth.call(null,vec__10000,0,null);var left = cljs.core.nth.call(null,vec__10000,1,null);var right = cljs.core.nth.call(null,vec__10000,2,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,cljs.core.drop.call(null,3,data));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),header,new cljs.core.Keyword(null,"left","left",1017222009),left,new cljs.core.Keyword(null,"right","right",1122416014),right,new cljs.core.Keyword(null,"groups","groups",4071411014),groups], null);
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
lt.plugins.gitlight.diff.side_by_side = (function side_by_side(firsts){var partitioned = cljs.core.partition_by.call(null,cljs.core.first,firsts);return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__10005,part){var vec__10006 = p__10005;var ok = cljs.core.nth.call(null,vec__10006,0,null);var stack = cljs.core.nth.call(null,vec__10006,1,null);var vec__10007 = cljs.core.split_at.call(null,1,part);var fst = cljs.core.nth.call(null,vec__10007,0,null);var rst = cljs.core.nth.call(null,vec__10007,1,null);var left = cljs.core.count.call(null,stack);var right = cljs.core.count.call(null,part);var G__10008 = cljs.core.first.call(null,fst);if(cljs.core._EQ_.call(null,"+",G__10008))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,ok,cljs.core.map.call(null,cljs.core.str,part,stack),cljs.core.repeat.call(null,(right - left),"+")),cljs.core.repeat.call(null,(left - right),"-")], null);
} else
{if(cljs.core._EQ_.call(null,"-",G__10008))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok,part], null);
} else
{if(cljs.core._EQ_.call(null," ",G__10008))
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
lt.plugins.gitlight.diff.__BEH__parse_diff_gutter_out = (function __BEH__parse_diff_gutter_out(this$,stdout,stderr){var parsed_10059 = cljs.core.drop.call(null,5,clojure.string.split_lines.call(null,stdout.toString()));var firsts_10060 = cljs.core.map.call(null,cljs.core.first,parsed_10059);lt.plugins.gitlight.gutter.show_gutter_data.call(null,lt.objs.editor.pool.last_active.call(null),((cljs.core.empty_QMARK_.call(null,firsts_10060))?cljs.core.repeat.call(null,lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).doc.size," "):lt.plugins.gitlight.diff.side_by_side.call(null,firsts_10060)));
lt.object.add_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-gutter-on","lt.plugins.gitlight.diff/gitlight-gutter-on",2438341533),null], null), null));
return cljs.core.println.call(null,lt.object.has_tag_QMARK_.call(null,this$,new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-gutter-on","lt.plugins.gitlight.diff/gitlight-gutter-on",2438341533)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.diff","parse-diff-gutter-out","lt.plugins.gitlight.diff/parse-diff-gutter-out",1856487699),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.diff.__BEH__parse_diff_gutter_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out","out",1014014656)], null));
lt.plugins.gitlight.diff.__BEH__diff_gutter_err = (function __BEH__diff_gutter_err(this$,err,stderr){return cljs.core.println.call(null,"error",stderr);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.diff","diff-gutter-err","lt.plugins.gitlight.diff/diff-gutter-err",4747654114),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.diff.__BEH__diff_gutter_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",1014004951)], null));
lt.plugins.gitlight.diff.git_diff_gutter_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.diff","diff-file-out","lt.plugins.gitlight.diff/diff-file-out",3995830304),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.diff","diff-file-out","lt.plugins.gitlight.diff/diff-file-out",3995830304),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.diff","parse-diff-gutter-out","lt.plugins.gitlight.diff/parse-diff-gutter-out",1856487699),new cljs.core.Keyword("lt.plugins.gitlight.diff","diff-gutter-err","lt.plugins.gitlight.diff/diff-gutter-err",4747654114)], null)));
lt.plugins.gitlight.diff.add_git_diff_gutter = (function add_git_diff_gutter(){return lt.plugins.gitlight.execute.run_deaf.call(null,lt.plugins.gitlight.diff.git_diff_gutter_out,lt.plugins.gitlight.git.get_git_root.call(null),[cljs.core.str("git diff -U10000 -- "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))))].join(''));
});
lt.plugins.gitlight.diff.remove_git_diff_gutter = (function remove_git_diff_gutter(){lt.plugins.gitlight.gutter.remove_gutters.call(null,lt.objs.editor.pool.last_active.call(null));
return lt.object.remove_tags.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-gutter-on","lt.plugins.gitlight.diff/gitlight-gutter-on",2438341533),null], null), null));
});
lt.plugins.gitlight.diff.toggle_git_diff_gutter = (function toggle_git_diff_gutter(){cljs.core.List.EMPTY;
if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-gutter-on","lt.plugins.gitlight.diff/gitlight-gutter-on",2438341533))))
{return lt.plugins.gitlight.diff.remove_git_diff_gutter.call(null);
} else
{return lt.plugins.gitlight.diff.add_git_diff_gutter.call(null);
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-add-diff-gutter","lt.plugins.gitlight.diff/gitlight-add-diff-gutter",1473377015),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: add gutter diff (experimental)",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.diff.add_git_diff_gutter], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-remove-diff-gutter","lt.plugins.gitlight.diff/gitlight-remove-diff-gutter",1378510170),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: remove gutter diff (experimental)",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.diff.remove_git_diff_gutter], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.diff","gitlight-toggle-diff-gutter","lt.plugins.gitlight.diff/gitlight-toggle-diff-gutter",1724931722),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: toggle gutter diff (experimental)",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.diff.toggle_git_diff_gutter], null));
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__10569){var vec__10585 = p__10569;var f = cljs.core.nth.call(null,vec__10585,0,null);var t = cljs.core.nth.call(null,vec__10585,1,null);var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,f,f,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10586(s__10587){return (new cljs.core.LazySeq(null,(function (){var s__10587__$1 = s__10587;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10587__$1);if(temp__4092__auto__)
{var s__10587__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10587__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10587__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10589 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10588 = 0;while(true){
if((i__10588 < size__7529__auto__))
{var vec__10592 = cljs.core._nth.call(null,c__7528__auto__,i__10588);var bt = cljs.core.nth.call(null,vec__10592,0,null);var fun = cljs.core.nth.call(null,vec__10592,1,null);cljs.core.chunk_append.call(null,b__10589,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun));
{
var G__10668 = (i__10588 + 1);
i__10588 = G__10668;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10589),iter__10586.call(null,cljs.core.chunk_rest.call(null,s__10587__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10589),null);
}
} else
{var vec__10593 = cljs.core.first.call(null,s__10587__$2);var bt = cljs.core.nth.call(null,vec__10593,0,null);var fun = cljs.core.nth.call(null,vec__10593,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun),iter__10586.call(null,cljs.core.rest.call(null,s__10587__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__10594_10669 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10595_10670 = null;var count__10596_10671 = 0;var i__10597_10672 = 0;while(true){
if((i__10597_10672 < count__10596_10671))
{var vec__10598_10673 = cljs.core._nth.call(null,chunk__10595_10670,i__10597_10672);var ev__8184__auto___10674 = cljs.core.nth.call(null,vec__10598_10673,0,null);var func__8185__auto___10675 = cljs.core.nth.call(null,vec__10598_10673,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10674,func__8185__auto___10675);
{
var G__10676 = seq__10594_10669;
var G__10677 = chunk__10595_10670;
var G__10678 = count__10596_10671;
var G__10679 = (i__10597_10672 + 1);
seq__10594_10669 = G__10676;
chunk__10595_10670 = G__10677;
count__10596_10671 = G__10678;
i__10597_10672 = G__10679;
continue;
}
} else
{var temp__4092__auto___10680 = cljs.core.seq.call(null,seq__10594_10669);if(temp__4092__auto___10680)
{var seq__10594_10681__$1 = temp__4092__auto___10680;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10594_10681__$1))
{var c__7561__auto___10682 = cljs.core.chunk_first.call(null,seq__10594_10681__$1);{
var G__10683 = cljs.core.chunk_rest.call(null,seq__10594_10681__$1);
var G__10684 = c__7561__auto___10682;
var G__10685 = cljs.core.count.call(null,c__7561__auto___10682);
var G__10686 = 0;
seq__10594_10669 = G__10683;
chunk__10595_10670 = G__10684;
count__10596_10671 = G__10685;
i__10597_10672 = G__10686;
continue;
}
} else
{var vec__10599_10687 = cljs.core.first.call(null,seq__10594_10681__$1);var ev__8184__auto___10688 = cljs.core.nth.call(null,vec__10599_10687,0,null);var func__8185__auto___10689 = cljs.core.nth.call(null,vec__10599_10687,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10688,func__8185__auto___10689);
{
var G__10690 = cljs.core.next.call(null,seq__10594_10681__$1);
var G__10691 = null;
var G__10692 = 0;
var G__10693 = 0;
seq__10594_10669 = G__10690;
chunk__10595_10670 = G__10691;
count__10596_10671 = G__10692;
i__10597_10672 = G__10693;
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__10606_10694 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10607_10695 = null;var count__10608_10696 = 0;var i__10609_10697 = 0;while(true){
if((i__10609_10697 < count__10608_10696))
{var vec__10610_10698 = cljs.core._nth.call(null,chunk__10607_10695,i__10609_10697);var ev__8184__auto___10699 = cljs.core.nth.call(null,vec__10610_10698,0,null);var func__8185__auto___10700 = cljs.core.nth.call(null,vec__10610_10698,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10699,func__8185__auto___10700);
{
var G__10701 = seq__10606_10694;
var G__10702 = chunk__10607_10695;
var G__10703 = count__10608_10696;
var G__10704 = (i__10609_10697 + 1);
seq__10606_10694 = G__10701;
chunk__10607_10695 = G__10702;
count__10608_10696 = G__10703;
i__10609_10697 = G__10704;
continue;
}
} else
{var temp__4092__auto___10705 = cljs.core.seq.call(null,seq__10606_10694);if(temp__4092__auto___10705)
{var seq__10606_10706__$1 = temp__4092__auto___10705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10606_10706__$1))
{var c__7561__auto___10707 = cljs.core.chunk_first.call(null,seq__10606_10706__$1);{
var G__10708 = cljs.core.chunk_rest.call(null,seq__10606_10706__$1);
var G__10709 = c__7561__auto___10707;
var G__10710 = cljs.core.count.call(null,c__7561__auto___10707);
var G__10711 = 0;
seq__10606_10694 = G__10708;
chunk__10607_10695 = G__10709;
count__10608_10696 = G__10710;
i__10609_10697 = G__10711;
continue;
}
} else
{var vec__10611_10712 = cljs.core.first.call(null,seq__10606_10706__$1);var ev__8184__auto___10713 = cljs.core.nth.call(null,vec__10611_10712,0,null);var func__8185__auto___10714 = cljs.core.nth.call(null,vec__10611_10712,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10713,func__8185__auto___10714);
{
var G__10715 = cljs.core.next.call(null,seq__10606_10706__$1);
var G__10716 = null;
var G__10717 = 0;
var G__10718 = 0;
seq__10606_10694 = G__10715;
chunk__10607_10695 = G__10716;
count__10608_10696 = G__10717;
i__10609_10697 = G__10718;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,branch,[cljs.core.str("Branch menu")].join(''),(function (x,y){return lt.plugins.gitlight.branch.git_branches.call(null);
}))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10634(s__10635){return (new cljs.core.LazySeq(null,(function (){var s__10635__$1 = s__10635;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10635__$1);if(temp__4092__auto__)
{var s__10635__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10635__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10635__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10637 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10636 = 0;while(true){
if((i__10636 < size__7529__auto__))
{var vec__10640 = cljs.core._nth.call(null,c__7528__auto__,i__10636);var bname = cljs.core.nth.call(null,vec__10640,0,null);var fun = cljs.core.nth.call(null,vec__10640,1,null);cljs.core.chunk_append.call(null,b__10637,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10719 = (i__10636 + 1);
i__10636 = G__10719;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10637),iter__10634.call(null,cljs.core.chunk_rest.call(null,s__10635__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10637),null);
}
} else
{var vec__10641 = cljs.core.first.call(null,s__10635__$2);var bname = cljs.core.nth.call(null,vec__10641,0,null);var fun = cljs.core.nth.call(null,vec__10641,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10634.call(null,cljs.core.rest.call(null,s__10635__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,cljs.core.vals.call(null,lt.plugins.gitlight.status.ui.repo_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,"refresh","refresh",(function (x,y){return null;
})),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,"toggle inline diff","toggle inline diff",lt.plugins.gitlight.diff.toggle_git_diff_gutter),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7530__auto__ = (function iter__10642(s__10643){return (new cljs.core.LazySeq(null,(function (){var s__10643__$1 = s__10643;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10643__$1);if(temp__4092__auto__)
{var s__10643__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10643__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10643__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10645 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10644 = 0;while(true){
if((i__10644 < size__7529__auto__))
{var vec__10648 = cljs.core._nth.call(null,c__7528__auto__,i__10644);var g = cljs.core.nth.call(null,vec__10648,0,null);var fs = cljs.core.nth.call(null,vec__10648,1,null);cljs.core.chunk_append.call(null,b__10645,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10720 = (i__10644 + 1);
i__10644 = G__10720;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10645),iter__10642.call(null,cljs.core.chunk_rest.call(null,s__10643__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10645),null);
}
} else
{var vec__10649 = cljs.core.first.call(null,s__10643__$2);var g = cljs.core.nth.call(null,vec__10649,0,null);var fs = cljs.core.nth.call(null,vec__10649,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__10642.call(null,cljs.core.rest.call(null,s__10643__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,this$);
})()], null)], null));var seq__10650_10721 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10651_10722 = null;var count__10652_10723 = 0;var i__10653_10724 = 0;while(true){
if((i__10653_10724 < count__10652_10723))
{var vec__10654_10725 = cljs.core._nth.call(null,chunk__10651_10722,i__10653_10724);var ev__8184__auto___10726 = cljs.core.nth.call(null,vec__10654_10725,0,null);var func__8185__auto___10727 = cljs.core.nth.call(null,vec__10654_10725,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10726,func__8185__auto___10727);
{
var G__10728 = seq__10650_10721;
var G__10729 = chunk__10651_10722;
var G__10730 = count__10652_10723;
var G__10731 = (i__10653_10724 + 1);
seq__10650_10721 = G__10728;
chunk__10651_10722 = G__10729;
count__10652_10723 = G__10730;
i__10653_10724 = G__10731;
continue;
}
} else
{var temp__4092__auto___10732 = cljs.core.seq.call(null,seq__10650_10721);if(temp__4092__auto___10732)
{var seq__10650_10733__$1 = temp__4092__auto___10732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10650_10733__$1))
{var c__7561__auto___10734 = cljs.core.chunk_first.call(null,seq__10650_10733__$1);{
var G__10735 = cljs.core.chunk_rest.call(null,seq__10650_10733__$1);
var G__10736 = c__7561__auto___10734;
var G__10737 = cljs.core.count.call(null,c__7561__auto___10734);
var G__10738 = 0;
seq__10650_10721 = G__10735;
chunk__10651_10722 = G__10736;
count__10652_10723 = G__10737;
i__10653_10724 = G__10738;
continue;
}
} else
{var vec__10655_10739 = cljs.core.first.call(null,seq__10650_10733__$1);var ev__8184__auto___10740 = cljs.core.nth.call(null,vec__10655_10739,0,null);var func__8185__auto___10741 = cljs.core.nth.call(null,vec__10655_10739,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10740,func__8185__auto___10741);
{
var G__10742 = cljs.core.next.call(null,seq__10650_10733__$1);
var G__10743 = null;
var G__10744 = 0;
var G__10745 = 0;
seq__10650_10721 = G__10742;
chunk__10651_10722 = G__10743;
count__10652_10723 = G__10744;
i__10653_10724 = G__10745;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10662_10746 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10663_10747 = null;var count__10664_10748 = 0;var i__10665_10749 = 0;while(true){
if((i__10665_10749 < count__10664_10748))
{var vec__10666_10750 = cljs.core._nth.call(null,chunk__10663_10747,i__10665_10749);var ev__8184__auto___10751 = cljs.core.nth.call(null,vec__10666_10750,0,null);var func__8185__auto___10752 = cljs.core.nth.call(null,vec__10666_10750,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10751,func__8185__auto___10752);
{
var G__10753 = seq__10662_10746;
var G__10754 = chunk__10663_10747;
var G__10755 = count__10664_10748;
var G__10756 = (i__10665_10749 + 1);
seq__10662_10746 = G__10753;
chunk__10663_10747 = G__10754;
count__10664_10748 = G__10755;
i__10665_10749 = G__10756;
continue;
}
} else
{var temp__4092__auto___10757 = cljs.core.seq.call(null,seq__10662_10746);if(temp__4092__auto___10757)
{var seq__10662_10758__$1 = temp__4092__auto___10757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10662_10758__$1))
{var c__7561__auto___10759 = cljs.core.chunk_first.call(null,seq__10662_10758__$1);{
var G__10760 = cljs.core.chunk_rest.call(null,seq__10662_10758__$1);
var G__10761 = c__7561__auto___10759;
var G__10762 = cljs.core.count.call(null,c__7561__auto___10759);
var G__10763 = 0;
seq__10662_10746 = G__10760;
chunk__10663_10747 = G__10761;
count__10664_10748 = G__10762;
i__10665_10749 = G__10763;
continue;
}
} else
{var vec__10667_10764 = cljs.core.first.call(null,seq__10662_10758__$1);var ev__8184__auto___10765 = cljs.core.nth.call(null,vec__10667_10764,0,null);var func__8185__auto___10766 = cljs.core.nth.call(null,vec__10667_10764,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10765,func__8185__auto___10766);
{
var G__10767 = cljs.core.next.call(null,seq__10662_10758__$1);
var G__10768 = null;
var G__10769 = 0;
var G__10770 = 0;
seq__10662_10746 = G__10767;
chunk__10663_10747 = G__10768;
count__10664_10748 = G__10769;
i__10665_10749 = G__10770;
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
lt.plugins.gitlight.status.status_toggle = (function status_toggle(){if(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null))
{lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword("lt.plugins.gitlight.status","close-ui-on-failure","lt.plugins.gitlight.status/close-ui-on-failure",4763397812));
return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"close!","close!",3951350939),lt.plugins.gitlight.status.ui.status_bar);
} else
{return lt.plugins.gitlight.status.back.git_status.call(null);
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-status","gitlight-status",4738816205),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: status",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.status.back.git_status], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-status-toggle","gitlight-status-toggle",2792867704),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: status toggle",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.status.status_toggle], null));
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
lt.plugins.gitlight.tests.which_color_QMARK_ = (function which_color_QMARK_(result){var G__10504 = result;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"not-bool","not-bool",2543743254),G__10504))
{return "pink";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__10504))
{return "red";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__10504))
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
lt.plugins.gitlight.tests.test_panel = (function test_panel(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7530__auto__ = (function iter__10519(s__10520){return (new cljs.core.LazySeq(null,(function (){var s__10520__$1 = s__10520;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10520__$1);if(temp__4092__auto__)
{var s__10520__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10520__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10520__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10522 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10521 = 0;while(true){
if((i__10521 < size__7529__auto__))
{var map__10525 = cljs.core._nth.call(null,c__7528__auto__,i__10521);var map__10525__$1 = ((cljs.core.seq_QMARK_.call(null,map__10525))?cljs.core.apply.call(null,cljs.core.hash_map,map__10525):map__10525);var status = cljs.core.get.call(null,map__10525__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10525__$1,new cljs.core.Keyword(null,"info","info",1017141280));cljs.core.chunk_append.call(null,b__10522,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null));
{
var G__10543 = (i__10521 + 1);
i__10521 = G__10543;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10522),iter__10519.call(null,cljs.core.chunk_rest.call(null,s__10520__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10522),null);
}
} else
{var map__10526 = cljs.core.first.call(null,s__10520__$2);var map__10526__$1 = ((cljs.core.seq_QMARK_.call(null,map__10526))?cljs.core.apply.call(null,cljs.core.hash_map,map__10526):map__10526);var status = cljs.core.get.call(null,map__10526__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10526__$1,new cljs.core.Keyword(null,"info","info",1017141280));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null),iter__10519.call(null,cljs.core.rest.call(null,s__10520__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__10527_10544 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10528_10545 = null;var count__10529_10546 = 0;var i__10530_10547 = 0;while(true){
if((i__10530_10547 < count__10529_10546))
{var vec__10531_10548 = cljs.core._nth.call(null,chunk__10528_10545,i__10530_10547);var ev__8184__auto___10549 = cljs.core.nth.call(null,vec__10531_10548,0,null);var func__8185__auto___10550 = cljs.core.nth.call(null,vec__10531_10548,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10549,func__8185__auto___10550);
{
var G__10551 = seq__10527_10544;
var G__10552 = chunk__10528_10545;
var G__10553 = count__10529_10546;
var G__10554 = (i__10530_10547 + 1);
seq__10527_10544 = G__10551;
chunk__10528_10545 = G__10552;
count__10529_10546 = G__10553;
i__10530_10547 = G__10554;
continue;
}
} else
{var temp__4092__auto___10555 = cljs.core.seq.call(null,seq__10527_10544);if(temp__4092__auto___10555)
{var seq__10527_10556__$1 = temp__4092__auto___10555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10527_10556__$1))
{var c__7561__auto___10557 = cljs.core.chunk_first.call(null,seq__10527_10556__$1);{
var G__10558 = cljs.core.chunk_rest.call(null,seq__10527_10556__$1);
var G__10559 = c__7561__auto___10557;
var G__10560 = cljs.core.count.call(null,c__7561__auto___10557);
var G__10561 = 0;
seq__10527_10544 = G__10558;
chunk__10528_10545 = G__10559;
count__10529_10546 = G__10560;
i__10530_10547 = G__10561;
continue;
}
} else
{var vec__10532_10562 = cljs.core.first.call(null,seq__10527_10556__$1);var ev__8184__auto___10563 = cljs.core.nth.call(null,vec__10532_10562,0,null);var func__8185__auto___10564 = cljs.core.nth.call(null,vec__10532_10562,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10563,func__8185__auto___10564);
{
var G__10565 = cljs.core.next.call(null,seq__10527_10556__$1);
var G__10566 = null;
var G__10567 = 0;
var G__10568 = 0;
seq__10527_10544 = G__10565;
chunk__10528_10545 = G__10566;
count__10529_10546 = G__10567;
i__10530_10547 = G__10568;
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
lt.plugins.gitlight.tests.lib.selector_asrt = (function selector_asrt(p__10771){var map__10773 = p__10771;var map__10773__$1 = ((cljs.core.seq_QMARK_.call(null,map__10773))?cljs.core.apply.call(null,cljs.core.hash_map,map__10773):map__10773);var select = cljs.core.get.call(null,map__10773__$1,new cljs.core.Keyword(null,"select","select",4402849902));return null;
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
lt.plugins.gitlight.tests.status.back.change_filenames = (function change_filenames(filename,x){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10797_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filename","filename",4574102905),p1__10797_SHARP_))
{return filename;
} else
{return p1__10797_SHARP_;
}
}),x));
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","back-tests","lt.plugins.gitlight.tests.status.back/back-tests",4633446629),(function (){lt.plugins.gitlight.tests.status.back.test_data = (function test_data(pair){var vec__10801 = pair;var n = cljs.core.nth.call(null,vec__10801,0,null);var what = cljs.core.nth.call(null,vec__10801,1,null);var vec__10802 = what;var tst = cljs.core.nth.call(null,vec__10802,0,null);var parsed = cljs.core.nth.call(null,vec__10802,1,null);var vec__10803 = tst;var X = cljs.core.nth.call(null,vec__10803,0,null);var Y = cljs.core.nth.call(null,vec__10803,1,null);var filename = cljs.core.nth.call(null,vec__10803,2,null);var d = cljs.core.nth.call(null,lt.plugins.gitlight.tests.status.back.data,n);var what_should_be = cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.tests.status.back.change_filenames,filename),d));var what_is = cljs.core.sort.call(null,parsed);var tst__$1 = cljs.core._EQ_.call(null,what_should_be,what_is);if(!(tst__$1))
{lt.plugins.gitlight.tests.lib.asrt.call(null,[cljs.core.str("parsing porcelain: `"),cljs.core.str(X),cljs.core.str("' `"),cljs.core.str(Y),cljs.core.str("'")].join(''),tst__$1);
} else
{}
return tst__$1;
});
lt.plugins.gitlight.tests.status.back.generate_test_data = (function generate_test_data(){var iter__7530__auto__ = (function iter__10810(s__10811){return (new cljs.core.LazySeq(null,(function (){var s__10811__$1 = s__10811;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10811__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7526__auto__ = ((function (s__10811__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__10812(s__10813){return (new cljs.core.LazySeq(null,((function (s__10811__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__10813__$1 = s__10813;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10813__$1);if(temp__4092__auto____$1)
{var s__10813__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10813__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10813__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10815 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10814 = 0;while(true){
if((i__10814 < size__7529__auto__))
{var y = cljs.core._nth.call(null,c__7528__auto__,i__10814);cljs.core.chunk_append.call(null,b__10815,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})());
{
var G__10826 = (i__10814 + 1);
i__10814 = G__10826;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10815),iter__10812.call(null,cljs.core.chunk_rest.call(null,s__10813__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10815),null);
}
} else
{var y = cljs.core.first.call(null,s__10813__$2);return cljs.core.cons.call(null,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})(),iter__10812.call(null,cljs.core.rest.call(null,s__10813__$2)));
}
} else
{return null;
}
break;
}
});})(s__10811__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__10811__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7527__auto__ = cljs.core.seq.call(null,iterys__7526__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","D","U"], null)));if(fs__7527__auto__)
{return cljs.core.concat.call(null,fs__7527__auto__,iter__10810.call(null,cljs.core.rest.call(null,s__10811__$1)));
} else
{{
var G__10827 = cljs.core.rest.call(null,s__10811__$1);
s__10811__$1 = G__10827;
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
after.cljs$lang$applyTo = (function (arglist__10796){
var text = cljs.core.first(arglist__10796);
arglist__10796 = cljs.core.next(arglist__10796);
var cwd = cljs.core.first(arglist__10796);
arglist__10796 = cljs.core.next(arglist__10796);
var data = cljs.core.first(arglist__10796);
var what_next = cljs.core.rest(arglist__10796);
return after__delegate(text,cwd,data,what_next);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
lt.plugins.gitlight.tests.remote_com.__BEH__git_test_exit_status__DOT__out = (function __BEH__git_test_exit_status__DOT__out(obj,data){var cwd = cljs.core.deref.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));var G__10785 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));if(cljs.core._EQ_.call(null,"push",G__10785))
{return lt.plugins.gitlight.tests.lib.asrt.call(null,"git push",cljs.core._EQ_.call(null,0,data));
} else
{if(cljs.core._EQ_.call(null,"commit",G__10785))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git commit",cwd,data,"push");
} else
{if(cljs.core._EQ_.call(null,"add",G__10785))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git add",cwd,data,"commit","-m","commiting");
} else
{if(cljs.core._EQ_.call(null,"pull",G__10785))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git pull",cwd,data,"add","push_me");
} else
{if(cljs.core._EQ_.call(null,"fetch",G__10785))
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
lt.plugins.gitlight.tests.status.ui.test_node = (function test_node(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"test"], null));var seq__10834_10850 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10835_10851 = null;var count__10836_10852 = 0;var i__10837_10853 = 0;while(true){
if((i__10837_10853 < count__10836_10852))
{var vec__10838_10854 = cljs.core._nth.call(null,chunk__10835_10851,i__10837_10853);var ev__8184__auto___10855 = cljs.core.nth.call(null,vec__10838_10854,0,null);var func__8185__auto___10856 = cljs.core.nth.call(null,vec__10838_10854,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10855,func__8185__auto___10856);
{
var G__10857 = seq__10834_10850;
var G__10858 = chunk__10835_10851;
var G__10859 = count__10836_10852;
var G__10860 = (i__10837_10853 + 1);
seq__10834_10850 = G__10857;
chunk__10835_10851 = G__10858;
count__10836_10852 = G__10859;
i__10837_10853 = G__10860;
continue;
}
} else
{var temp__4092__auto___10861 = cljs.core.seq.call(null,seq__10834_10850);if(temp__4092__auto___10861)
{var seq__10834_10862__$1 = temp__4092__auto___10861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10834_10862__$1))
{var c__7561__auto___10863 = cljs.core.chunk_first.call(null,seq__10834_10862__$1);{
var G__10864 = cljs.core.chunk_rest.call(null,seq__10834_10862__$1);
var G__10865 = c__7561__auto___10863;
var G__10866 = cljs.core.count.call(null,c__7561__auto___10863);
var G__10867 = 0;
seq__10834_10850 = G__10864;
chunk__10835_10851 = G__10865;
count__10836_10852 = G__10866;
i__10837_10853 = G__10867;
continue;
}
} else
{var vec__10839_10868 = cljs.core.first.call(null,seq__10834_10862__$1);var ev__8184__auto___10869 = cljs.core.nth.call(null,vec__10839_10868,0,null);var func__8185__auto___10870 = cljs.core.nth.call(null,vec__10839_10868,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10869,func__8185__auto___10870);
{
var G__10871 = cljs.core.next.call(null,seq__10834_10862__$1);
var G__10872 = null;
var G__10873 = 0;
var G__10874 = 0;
seq__10834_10850 = G__10871;
chunk__10835_10851 = G__10872;
count__10836_10852 = G__10873;
i__10837_10853 = G__10874;
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