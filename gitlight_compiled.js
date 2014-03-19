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
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.git')) {
goog.provide('lt.plugins.gitlight.git');
goog.require('cljs.core');
goog.require('lt.plugins.gitlight');
goog.require('lt.objs.files');
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
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.execute');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
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
git_command_cwd.cljs$lang$applyTo = (function (arglist__10057){
var obj = cljs.core.first(arglist__10057);
arglist__10057 = cljs.core.next(arglist__10057);
var cwd = cljs.core.first(arglist__10057);
var args = cljs.core.rest(arglist__10057);
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
git_command.cljs$lang$applyTo = (function (arglist__10058){
var obj = cljs.core.first(arglist__10058);
var args = cljs.core.rest(arglist__10058);
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
git_command_ignore_out.cljs$lang$applyTo = (function (arglist__10059){
var args = cljs.core.seq(arglist__10059);
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
lt.plugins.gitlight.git.__BEH__ignore__DOT__out_success = (function __BEH__ignore__DOT__out_success(obj,data,err){return lt.objs.notifos.set_msg_BANG_.call(null,"git: success!");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-success","lt.plugins.gitlight.git/ignore.out-success",2272362317),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
lt.plugins.gitlight.git.__BEH__ignore__DOT__out_error = (function __BEH__ignore__DOT__out_error(obj,err,stderr){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("git failed!: "),cljs.core.str(stderr.toString())].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-error","lt.plugins.gitlight.git/ignore.out-error",2426640522),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.git.__BEH__ignore__DOT__out_error,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ignore git command output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-add","lt.plugins.gitlight.git/git-add",3411206675),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: add this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_add.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-reset","lt.plugins.gitlight.git/git-reset",1466075745),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: reset this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_reset.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.git","git-checkout","lt.plugins.gitlight.git/git-checkout",2494382294),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: checkout this file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.git.git_checkout.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
})], null));
lt.plugins.gitlight.git.git_ignore_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.git","git-ignore-out","lt.plugins.gitlight.git/git-ignore-out",1518510219),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-ignore-out","git-ignore-out",3448111392)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-success","lt.plugins.gitlight.git/ignore.out-success",2272362317),new cljs.core.Keyword("lt.plugins.gitlight.git","ignore.out-error","lt.plugins.gitlight.git/ignore.out-error",2426640522)], null)));
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
var this$__$1 = this;var seq__8607 = cljs.core.seq.call(null,self__.watches);var chunk__8608 = null;var count__8609 = 0;var i__8610 = 0;while(true){
if((i__8610 < count__8609))
{var vec__8611 = cljs.core._nth.call(null,chunk__8608,i__8610);var key__$1 = cljs.core.nth.call(null,vec__8611,0,null);var f = cljs.core.nth.call(null,vec__8611,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8686 = seq__8607;
var G__8687 = chunk__8608;
var G__8688 = count__8609;
var G__8689 = (i__8610 + 1);
seq__8607 = G__8686;
chunk__8608 = G__8687;
count__8609 = G__8688;
i__8610 = G__8689;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8607);if(temp__4092__auto__)
{var seq__8607__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8607__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8607__$1);{
var G__8690 = cljs.core.chunk_rest.call(null,seq__8607__$1);
var G__8691 = c__7561__auto__;
var G__8692 = cljs.core.count.call(null,c__7561__auto__);
var G__8693 = 0;
seq__8607 = G__8690;
chunk__8608 = G__8691;
count__8609 = G__8692;
i__8610 = G__8693;
continue;
}
} else
{var vec__8612 = cljs.core.first.call(null,seq__8607__$1);var key__$1 = cljs.core.nth.call(null,vec__8612,0,null);var f = cljs.core.nth.call(null,vec__8612,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8694 = cljs.core.next.call(null,seq__8607__$1);
var G__8695 = null;
var G__8696 = 0;
var G__8697 = 0;
seq__8607 = G__8694;
chunk__8608 = G__8695;
count__8609 = G__8696;
i__8610 = G__8697;
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
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8614 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8614,0,null);var path__$2 = cljs.core.nth.call(null,vec__8614,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
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
var G__8698__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8698 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8698__delegate.call(this,sa,f,x,y,z,more);};
G__8698.cljs$lang$maxFixedArity = 5;
G__8698.cljs$lang$applyTo = (function (arglist__8699){
var sa = cljs.core.first(arglist__8699);
arglist__8699 = cljs.core.next(arglist__8699);
var f = cljs.core.first(arglist__8699);
arglist__8699 = cljs.core.next(arglist__8699);
var x = cljs.core.first(arglist__8699);
arglist__8699 = cljs.core.next(arglist__8699);
var y = cljs.core.first(arglist__8699);
arglist__8699 = cljs.core.next(arglist__8699);
var z = cljs.core.first(arglist__8699);
var more = cljs.core.rest(arglist__8699);
return G__8698__delegate(sa,f,x,y,z,more);
});
G__8698.cljs$core$IFn$_invoke$arity$variadic = G__8698__delegate;
return G__8698;
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
crate.binding.computable = (function (){var obj8616 = {};return obj8616;
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
var this$__$1 = this;var seq__8617 = cljs.core.seq.call(null,self__.watches);var chunk__8618 = null;var count__8619 = 0;var i__8620 = 0;while(true){
if((i__8620 < count__8619))
{var vec__8621 = cljs.core._nth.call(null,chunk__8618,i__8620);var key__$1 = cljs.core.nth.call(null,vec__8621,0,null);var f = cljs.core.nth.call(null,vec__8621,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8700 = seq__8617;
var G__8701 = chunk__8618;
var G__8702 = count__8619;
var G__8703 = (i__8620 + 1);
seq__8617 = G__8700;
chunk__8618 = G__8701;
count__8619 = G__8702;
i__8620 = G__8703;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8617);if(temp__4092__auto__)
{var seq__8617__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8617__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8617__$1);{
var G__8704 = cljs.core.chunk_rest.call(null,seq__8617__$1);
var G__8705 = c__7561__auto__;
var G__8706 = cljs.core.count.call(null,c__7561__auto__);
var G__8707 = 0;
seq__8617 = G__8704;
chunk__8618 = G__8705;
count__8619 = G__8706;
i__8620 = G__8707;
continue;
}
} else
{var vec__8622 = cljs.core.first.call(null,seq__8617__$1);var key__$1 = cljs.core.nth.call(null,vec__8622,0,null);var f = cljs.core.nth.call(null,vec__8622,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8708 = cljs.core.next.call(null,seq__8617__$1);
var G__8709 = null;
var G__8710 = 0;
var G__8711 = 0;
seq__8617 = G__8708;
chunk__8618 = G__8709;
count__8619 = G__8710;
i__8620 = G__8711;
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
var seq__8627_8712 = cljs.core.seq.call(null,atms);var chunk__8628_8713 = null;var count__8629_8714 = 0;var i__8630_8715 = 0;while(true){
if((i__8630_8715 < count__8629_8714))
{var atm_8716 = cljs.core._nth.call(null,chunk__8628_8713,i__8630_8715);crate.binding._depend.call(null,neue,atm_8716);
{
var G__8717 = seq__8627_8712;
var G__8718 = chunk__8628_8713;
var G__8719 = count__8629_8714;
var G__8720 = (i__8630_8715 + 1);
seq__8627_8712 = G__8717;
chunk__8628_8713 = G__8718;
count__8629_8714 = G__8719;
i__8630_8715 = G__8720;
continue;
}
} else
{var temp__4092__auto___8721 = cljs.core.seq.call(null,seq__8627_8712);if(temp__4092__auto___8721)
{var seq__8627_8722__$1 = temp__4092__auto___8721;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8627_8722__$1))
{var c__7561__auto___8723 = cljs.core.chunk_first.call(null,seq__8627_8722__$1);{
var G__8724 = cljs.core.chunk_rest.call(null,seq__8627_8722__$1);
var G__8725 = c__7561__auto___8723;
var G__8726 = cljs.core.count.call(null,c__7561__auto___8723);
var G__8727 = 0;
seq__8627_8712 = G__8724;
chunk__8628_8713 = G__8725;
count__8629_8714 = G__8726;
i__8630_8715 = G__8727;
continue;
}
} else
{var atm_8728 = cljs.core.first.call(null,seq__8627_8722__$1);crate.binding._depend.call(null,neue,atm_8728);
{
var G__8729 = cljs.core.next.call(null,seq__8627_8722__$1);
var G__8730 = null;
var G__8731 = 0;
var G__8732 = 0;
seq__8627_8712 = G__8729;
chunk__8628_8713 = G__8730;
count__8629_8714 = G__8731;
i__8630_8715 = G__8732;
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
crate.binding.bindable_coll = (function (){var obj8632 = {};return obj8632;
})();
crate.binding.bindable = (function (){var obj8634 = {};return obj8634;
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
var this$__$1 = this;var seq__8635 = cljs.core.seq.call(null,self__.watches);var chunk__8636 = null;var count__8637 = 0;var i__8638 = 0;while(true){
if((i__8638 < count__8637))
{var vec__8639 = cljs.core._nth.call(null,chunk__8636,i__8638);var key = cljs.core.nth.call(null,vec__8639,0,null);var f = cljs.core.nth.call(null,vec__8639,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8733 = seq__8635;
var G__8734 = chunk__8636;
var G__8735 = count__8637;
var G__8736 = (i__8638 + 1);
seq__8635 = G__8733;
chunk__8636 = G__8734;
count__8637 = G__8735;
i__8638 = G__8736;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8635);if(temp__4092__auto__)
{var seq__8635__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8635__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8635__$1);{
var G__8737 = cljs.core.chunk_rest.call(null,seq__8635__$1);
var G__8738 = c__7561__auto__;
var G__8739 = cljs.core.count.call(null,c__7561__auto__);
var G__8740 = 0;
seq__8635 = G__8737;
chunk__8636 = G__8738;
count__8637 = G__8739;
i__8638 = G__8740;
continue;
}
} else
{var vec__8640 = cljs.core.first.call(null,seq__8635__$1);var key = cljs.core.nth.call(null,vec__8640,0,null);var f = cljs.core.nth.call(null,vec__8640,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8741 = cljs.core.next.call(null,seq__8635__$1);
var G__8742 = null;
var G__8743 = 0;
var G__8744 = 0;
seq__8635 = G__8741;
chunk__8636 = G__8742;
count__8637 = G__8743;
i__8638 = G__8744;
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
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__8641){var vec__8642 = p__8641;var event = cljs.core.nth.call(null,vec__8642,0,null);var el = cljs.core.nth.call(null,vec__8642,1,null);var v = cljs.core.nth.call(null,vec__8642,2,null);return func.call(null,event,el,v);
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
__GT_path.cljs$lang$applyTo = (function (arglist__8745){
var bc = cljs.core.first(arglist__8745);
var segs = cljs.core.rest(arglist__8745);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8651_8746 = cljs.core.seq.call(null,added);var chunk__8652_8747 = null;var count__8653_8748 = 0;var i__8654_8749 = 0;while(true){
if((i__8654_8749 < count__8653_8748))
{var a_8750 = cljs.core._nth.call(null,chunk__8652_8747,i__8654_8749);crate.binding.bc_add.call(null,bc,a_8750,a_8750);
{
var G__8751 = seq__8651_8746;
var G__8752 = chunk__8652_8747;
var G__8753 = count__8653_8748;
var G__8754 = (i__8654_8749 + 1);
seq__8651_8746 = G__8751;
chunk__8652_8747 = G__8752;
count__8653_8748 = G__8753;
i__8654_8749 = G__8754;
continue;
}
} else
{var temp__4092__auto___8755 = cljs.core.seq.call(null,seq__8651_8746);if(temp__4092__auto___8755)
{var seq__8651_8756__$1 = temp__4092__auto___8755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8651_8756__$1))
{var c__7561__auto___8757 = cljs.core.chunk_first.call(null,seq__8651_8756__$1);{
var G__8758 = cljs.core.chunk_rest.call(null,seq__8651_8756__$1);
var G__8759 = c__7561__auto___8757;
var G__8760 = cljs.core.count.call(null,c__7561__auto___8757);
var G__8761 = 0;
seq__8651_8746 = G__8758;
chunk__8652_8747 = G__8759;
count__8653_8748 = G__8760;
i__8654_8749 = G__8761;
continue;
}
} else
{var a_8762 = cljs.core.first.call(null,seq__8651_8756__$1);crate.binding.bc_add.call(null,bc,a_8762,a_8762);
{
var G__8763 = cljs.core.next.call(null,seq__8651_8756__$1);
var G__8764 = null;
var G__8765 = 0;
var G__8766 = 0;
seq__8651_8746 = G__8763;
chunk__8652_8747 = G__8764;
count__8653_8748 = G__8765;
i__8654_8749 = G__8766;
continue;
}
}
} else
{}
}
break;
}
var seq__8655 = cljs.core.seq.call(null,removed);var chunk__8656 = null;var count__8657 = 0;var i__8658 = 0;while(true){
if((i__8658 < count__8657))
{var r = cljs.core._nth.call(null,chunk__8656,i__8658);crate.binding.bc_remove.call(null,bc,r);
{
var G__8767 = seq__8655;
var G__8768 = chunk__8656;
var G__8769 = count__8657;
var G__8770 = (i__8658 + 1);
seq__8655 = G__8767;
chunk__8656 = G__8768;
count__8657 = G__8769;
i__8658 = G__8770;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8655);if(temp__4092__auto__)
{var seq__8655__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8655__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8655__$1);{
var G__8771 = cljs.core.chunk_rest.call(null,seq__8655__$1);
var G__8772 = c__7561__auto__;
var G__8773 = cljs.core.count.call(null,c__7561__auto__);
var G__8774 = 0;
seq__8655 = G__8771;
chunk__8656 = G__8772;
count__8657 = G__8773;
i__8658 = G__8774;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8655__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8775 = cljs.core.next.call(null,seq__8655__$1);
var G__8776 = null;
var G__8777 = 0;
var G__8778 = 0;
seq__8655 = G__8775;
chunk__8656 = G__8776;
count__8657 = G__8777;
i__8658 = G__8778;
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
var bound_coll__delegate = function (atm,p__8659){var vec__8662 = p__8659;var path = cljs.core.nth.call(null,vec__8662,0,null);var opts = cljs.core.nth.call(null,vec__8662,1,null);var vec__8663 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8663,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8663,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8659 = null;if (arguments.length > 1) {
  p__8659 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8659);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8779){
var atm = cljs.core.first(arglist__8779);
var p__8659 = cljs.core.rest(arglist__8779);
return bound_coll__delegate(atm,p__8659);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8664){var vec__8666 = p__8664;var opts = cljs.core.nth.call(null,vec__8666,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8664 = null;if (arguments.length > 2) {
  p__8664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8664);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8780){
var as = cljs.core.first(arglist__8780);
arglist__8780 = cljs.core.next(arglist__8780);
var atm = cljs.core.first(arglist__8780);
var p__8664 = cljs.core.rest(arglist__8780);
return map_bound__delegate(as,atm,p__8664);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8668 = b;if(G__8668)
{var bit__7463__auto__ = null;if(cljs.core.truth_((function (){var or__6813__auto__ = bit__7463__auto__;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return G__8668.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8668.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8668);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8668);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8670 = b;if(G__8670)
{var bit__7463__auto__ = null;if(cljs.core.truth_((function (){var or__6813__auto__ = bit__7463__auto__;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return G__8670.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8670.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8670);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8670);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8672 = atm;if(G__8672)
{var bit__7463__auto__ = (G__8672.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7463__auto__) || (G__8672.cljs$core$IDeref$))
{return true;
} else
{if((!G__8672.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8672);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8672);
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
var bound__delegate = function (atm,p__8673){var vec__8675 = p__8673;var func = cljs.core.nth.call(null,vec__8675,0,null);var func__$1 = (function (){var or__6813__auto__ = func;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8673 = null;if (arguments.length > 1) {
  p__8673 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8673);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8781){
var atm = cljs.core.first(arglist__8781);
var p__8673 = cljs.core.rest(arglist__8781);
return bound__delegate(atm,p__8673);
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
lt.plugins.gitlight.common_ui.button = (function button(n,f,fun){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8485_8530 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__8486_8531 = null;var count__8487_8532 = 0;var i__8488_8533 = 0;while(true){
if((i__8488_8533 < count__8487_8532))
{var vec__8489_8534 = cljs.core._nth.call(null,chunk__8486_8531,i__8488_8533);var ev__8184__auto___8535 = cljs.core.nth.call(null,vec__8489_8534,0,null);var func__8185__auto___8536 = cljs.core.nth.call(null,vec__8489_8534,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8535,func__8185__auto___8536);
{
var G__8537 = seq__8485_8530;
var G__8538 = chunk__8486_8531;
var G__8539 = count__8487_8532;
var G__8540 = (i__8488_8533 + 1);
seq__8485_8530 = G__8537;
chunk__8486_8531 = G__8538;
count__8487_8532 = G__8539;
i__8488_8533 = G__8540;
continue;
}
} else
{var temp__4092__auto___8541 = cljs.core.seq.call(null,seq__8485_8530);if(temp__4092__auto___8541)
{var seq__8485_8542__$1 = temp__4092__auto___8541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8485_8542__$1))
{var c__7561__auto___8543 = cljs.core.chunk_first.call(null,seq__8485_8542__$1);{
var G__8544 = cljs.core.chunk_rest.call(null,seq__8485_8542__$1);
var G__8545 = c__7561__auto___8543;
var G__8546 = cljs.core.count.call(null,c__7561__auto___8543);
var G__8547 = 0;
seq__8485_8530 = G__8544;
chunk__8486_8531 = G__8545;
count__8487_8532 = G__8546;
i__8488_8533 = G__8547;
continue;
}
} else
{var vec__8490_8548 = cljs.core.first.call(null,seq__8485_8542__$1);var ev__8184__auto___8549 = cljs.core.nth.call(null,vec__8490_8548,0,null);var func__8185__auto___8550 = cljs.core.nth.call(null,vec__8490_8548,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8549,func__8185__auto___8550);
{
var G__8551 = cljs.core.next.call(null,seq__8485_8542__$1);
var G__8552 = null;
var G__8553 = 0;
var G__8554 = 0;
seq__8485_8530 = G__8551;
chunk__8486_8531 = G__8552;
count__8487_8532 = G__8553;
i__8488_8533 = G__8554;
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
lt.plugins.gitlight.common_ui.classy_button = (function classy_button(cls,n,f,fun){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8497_8555 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__8498_8556 = null;var count__8499_8557 = 0;var i__8500_8558 = 0;while(true){
if((i__8500_8558 < count__8499_8557))
{var vec__8501_8559 = cljs.core._nth.call(null,chunk__8498_8556,i__8500_8558);var ev__8184__auto___8560 = cljs.core.nth.call(null,vec__8501_8559,0,null);var func__8185__auto___8561 = cljs.core.nth.call(null,vec__8501_8559,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8560,func__8185__auto___8561);
{
var G__8562 = seq__8497_8555;
var G__8563 = chunk__8498_8556;
var G__8564 = count__8499_8557;
var G__8565 = (i__8500_8558 + 1);
seq__8497_8555 = G__8562;
chunk__8498_8556 = G__8563;
count__8499_8557 = G__8564;
i__8500_8558 = G__8565;
continue;
}
} else
{var temp__4092__auto___8566 = cljs.core.seq.call(null,seq__8497_8555);if(temp__4092__auto___8566)
{var seq__8497_8567__$1 = temp__4092__auto___8566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8497_8567__$1))
{var c__7561__auto___8568 = cljs.core.chunk_first.call(null,seq__8497_8567__$1);{
var G__8569 = cljs.core.chunk_rest.call(null,seq__8497_8567__$1);
var G__8570 = c__7561__auto___8568;
var G__8571 = cljs.core.count.call(null,c__7561__auto___8568);
var G__8572 = 0;
seq__8497_8555 = G__8569;
chunk__8498_8556 = G__8570;
count__8499_8557 = G__8571;
i__8500_8558 = G__8572;
continue;
}
} else
{var vec__8502_8573 = cljs.core.first.call(null,seq__8497_8567__$1);var ev__8184__auto___8574 = cljs.core.nth.call(null,vec__8502_8573,0,null);var func__8185__auto___8575 = cljs.core.nth.call(null,vec__8502_8573,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8574,func__8185__auto___8575);
{
var G__8576 = cljs.core.next.call(null,seq__8497_8567__$1);
var G__8577 = null;
var G__8578 = 0;
var G__8579 = 0;
seq__8497_8555 = G__8576;
chunk__8498_8556 = G__8577;
count__8499_8557 = G__8578;
i__8500_8558 = G__8579;
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
lt.plugins.gitlight.common_ui.__GT_value = (function __GT_value(p__8503){var map__8505 = p__8503;var map__8505__$1 = ((cljs.core.seq_QMARK_.call(null,map__8505))?cljs.core.apply.call(null,cljs.core.hash_map,map__8505):map__8505);var value = cljs.core.get.call(null,map__8505__$1,new cljs.core.Keyword(null,"value","value",1125876963));if(cljs.core.not.call(null,value))
{return "";
} else
{return value;
}
});
lt.plugins.gitlight.common_ui.input = (function input(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.option","input.option",1495945867),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013)),new cljs.core.Keyword(null,"value","value",1125876963),crate.binding.bound.call(null,this$,lt.plugins.gitlight.common_ui.__GT_value)], null)], null));var seq__8512_8580 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){var me = this;return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.common_ui.common_input)),lt.util.dom.val.call(null,me));
})], null)));var chunk__8513_8581 = null;var count__8514_8582 = 0;var i__8515_8583 = 0;while(true){
if((i__8515_8583 < count__8514_8582))
{var vec__8516_8584 = cljs.core._nth.call(null,chunk__8513_8581,i__8515_8583);var ev__8184__auto___8585 = cljs.core.nth.call(null,vec__8516_8584,0,null);var func__8185__auto___8586 = cljs.core.nth.call(null,vec__8516_8584,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8585,func__8185__auto___8586);
{
var G__8587 = seq__8512_8580;
var G__8588 = chunk__8513_8581;
var G__8589 = count__8514_8582;
var G__8590 = (i__8515_8583 + 1);
seq__8512_8580 = G__8587;
chunk__8513_8581 = G__8588;
count__8514_8582 = G__8589;
i__8515_8583 = G__8590;
continue;
}
} else
{var temp__4092__auto___8591 = cljs.core.seq.call(null,seq__8512_8580);if(temp__4092__auto___8591)
{var seq__8512_8592__$1 = temp__4092__auto___8591;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8512_8592__$1))
{var c__7561__auto___8593 = cljs.core.chunk_first.call(null,seq__8512_8592__$1);{
var G__8594 = cljs.core.chunk_rest.call(null,seq__8512_8592__$1);
var G__8595 = c__7561__auto___8593;
var G__8596 = cljs.core.count.call(null,c__7561__auto___8593);
var G__8597 = 0;
seq__8512_8580 = G__8594;
chunk__8513_8581 = G__8595;
count__8514_8582 = G__8596;
i__8515_8583 = G__8597;
continue;
}
} else
{var vec__8517_8598 = cljs.core.first.call(null,seq__8512_8592__$1);var ev__8184__auto___8599 = cljs.core.nth.call(null,vec__8517_8598,0,null);var func__8185__auto___8600 = cljs.core.nth.call(null,vec__8517_8598,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8599,func__8185__auto___8600);
{
var G__8601 = cljs.core.next.call(null,seq__8512_8592__$1);
var G__8602 = null;
var G__8603 = 0;
var G__8604 = 0;
seq__8512_8580 = G__8601;
chunk__8513_8581 = G__8602;
count__8514_8582 = G__8603;
i__8515_8583 = G__8604;
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
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,ui_fun){var vec__8519 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__8519,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__8519,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__8519,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__8519,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__8519,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return ui_fun.call(null,this$);
});})(vec__8519,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);var tab = lt.object.create.call(null,tab_obj);var command_output = lt.plugins.gitlight.common_ui.make_refresh_tab_behavior.call(null,tab,refresh_tab_kwd);return lt.object.create.call(null,lt.object.object_STAR_.call(null,command_output_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gitlight-tab-output","gitlight-tab-output",1332604564),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_output], null)));
});
lt.plugins.gitlight.common_ui.make_button = (function make_button(n,f,fun){return lt.plugins.gitlight.common_ui.button.call(null,n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.make_classy_button = (function make_classy_button(n,f,fun){return lt.plugins.gitlight.common_ui.classy_button.call(null,[cljs.core.str(n)].join(''),n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8605 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8605))
{var ts_8606 = temp__4092__auto___8605;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8606))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8606);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
}
if(!lt.util.load.provided_QMARK_('clojure.walk')) {
goog.provide('clojure.walk');
goog.require('cljs.core');
/**
* Traverses form, an arbitrary data structure.  inner and outer are
* functions.  Applies inner to each element of form, building up a
* data structure of the same type, then applies outer to the result.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.walk = (function walk(inner,outer,form){if(cljs.core.seq_QMARK_.call(null,form))
{return outer.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form)));
} else
{if(cljs.core.coll_QMARK_.call(null,form))
{return outer.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,inner,form)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return outer.call(null,form);
} else
{return null;
}
}
}
});
/**
* Performs a depth-first, post-order traversal of form.  Calls f on
* each sub-form, uses f's return value in place of the original.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.postwalk = (function postwalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,postwalk,f),f,form);
});
/**
* Like postwalk, but does pre-order traversal.
*/
clojure.walk.prewalk = (function prewalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,prewalk,f),cljs.core.identity,f.call(null,form));
});
/**
* Recursively transforms all map keys from strings to keywords.
*/
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__10051){var vec__10052 = p__10051;var k = cljs.core.nth.call(null,vec__10052,0,null);var v = cljs.core.nth.call(null,vec__10052,1,null);if(typeof k === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,(function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
}),m);
});
/**
* Recursively transforms all map keys from keywords to strings.
*/
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__10055){var vec__10056 = p__10055;var k = cljs.core.nth.call(null,vec__10056,0,null);var v = cljs.core.nth.call(null,vec__10056,1,null);if((k instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,(function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
}),m);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the root of the tree first.
*/
clojure.walk.prewalk_replace = (function prewalk_replace(smap,form){return clojure.walk.prewalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the leaves of the tree first.
*/
clojure.walk.postwalk_replace = (function postwalk_replace(smap,form){return clojure.walk.postwalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.diff')) {
goog.provide('lt.plugins.gitlight.diff');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.proc');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('clojure.walk');
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
return (function iter__9392(s__9393){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__9393__$1 = s__9393;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9393__$1);if(temp__4092__auto__)
{var s__9393__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9393__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9393__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9395 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9394 = 0;while(true){
if((i__9394 < size__7529__auto__))
{var file = cljs.core._nth.call(null,c__7528__auto__,i__9394);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);cljs.core.chunk_append.call(null,b__9395,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9394,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function iter__9692(s__9693){return (new cljs.core.LazySeq(null,((function (i__9394,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9693__$1 = s__9693;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9693__$1);if(temp__4092__auto____$1)
{var s__9693__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9693__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9693__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9695 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9694 = 0;while(true){
if((i__9694 < size__7529__auto____$1))
{var changes_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9694);cljs.core.chunk_append.call(null,b__9695,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9694,i__9394,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function iter__9768(s__9769){return (new cljs.core.LazySeq(null,((function (i__9694,i__9394,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9769__$1 = s__9769;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9769__$1);if(temp__4092__auto____$2)
{var s__9769__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9769__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9769__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9771 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9770 = 0;while(true){
if((i__9770 < size__7529__auto____$2))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$2,i__9770);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9771,(function (){var iter__7530__auto__ = ((function (i__9770,i__9694,i__9394,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9771,s__9769__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function iter__9788(s__9789){return (new cljs.core.LazySeq(null,((function (i__9770,i__9694,i__9394,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9771,s__9769__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9789__$1 = s__9789;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9789__$1);if(temp__4092__auto____$3)
{var s__9789__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9789__$2))
{var c__7528__auto____$3 = cljs.core.chunk_first.call(null,s__9789__$2);var size__7529__auto____$3 = cljs.core.count.call(null,c__7528__auto____$3);var b__9791 = cljs.core.chunk_buffer.call(null,size__7529__auto____$3);if((function (){var i__9790 = 0;while(true){
if((i__9790 < size__7529__auto____$3))
{var vec__9794 = cljs.core._nth.call(null,c__7528__auto____$3,i__9790);var left = cljs.core.nth.call(null,vec__9794,0,null);var right = cljs.core.nth.call(null,vec__9794,1,null);cljs.core.chunk_append.call(null,b__9791,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10009 = (i__9790 + 1);
i__9790 = G__10009;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9791),iter__9788.call(null,cljs.core.chunk_rest.call(null,s__9789__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9791),null);
}
} else
{var vec__9795 = cljs.core.first.call(null,s__9789__$2);var left = cljs.core.nth.call(null,vec__9795,0,null);var right = cljs.core.nth.call(null,vec__9795,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9788.call(null,cljs.core.rest.call(null,s__9789__$2)));
}
} else
{return null;
}
break;
}
});})(i__9770,i__9694,i__9394,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9771,s__9769__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(i__9770,i__9694,i__9394,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__9771,s__9769__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10010 = (i__9770 + 1);
i__9770 = G__10010;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9771),iter__9768.call(null,cljs.core.chunk_rest.call(null,s__9769__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9771),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9769__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9694,i__9394,columned,c,columns,line_group,s__9769__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function iter__9796(s__9797){return (new cljs.core.LazySeq(null,((function (i__9694,i__9394,columned,c,columns,line_group,s__9769__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9797__$1 = s__9797;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9797__$1);if(temp__4092__auto____$3)
{var s__9797__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9797__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9797__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9799 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9798 = 0;while(true){
if((i__9798 < size__7529__auto____$2))
{var vec__9802 = cljs.core._nth.call(null,c__7528__auto____$2,i__9798);var left = cljs.core.nth.call(null,vec__9802,0,null);var right = cljs.core.nth.call(null,vec__9802,1,null);cljs.core.chunk_append.call(null,b__9799,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10011 = (i__9798 + 1);
i__9798 = G__10011;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9799),iter__9796.call(null,cljs.core.chunk_rest.call(null,s__9797__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9799),null);
}
} else
{var vec__9803 = cljs.core.first.call(null,s__9797__$2);var left = cljs.core.nth.call(null,vec__9803,0,null);var right = cljs.core.nth.call(null,vec__9803,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9796.call(null,cljs.core.rest.call(null,s__9797__$2)));
}
} else
{return null;
}
break;
}
});})(i__9694,i__9394,columned,c,columns,line_group,s__9769__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(i__9694,i__9394,columned,c,columns,line_group,s__9769__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9768.call(null,cljs.core.rest.call(null,s__9769__$2)));
}
} else
{return null;
}
break;
}
});})(i__9694,i__9394,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(i__9694,i__9394,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__9695,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__10012 = (i__9694 + 1);
i__9694 = G__10012;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9695),iter__9692.call(null,cljs.core.chunk_rest.call(null,s__9693__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9695),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9693__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9394,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function iter__9804(s__9805){return (new cljs.core.LazySeq(null,((function (i__9394,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9805__$1 = s__9805;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9805__$1);if(temp__4092__auto____$2)
{var s__9805__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9805__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9805__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9807 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9806 = 0;while(true){
if((i__9806 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9806);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9807,(function (){var iter__7530__auto__ = ((function (i__9806,i__9394,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9807,s__9805__$2,temp__4092__auto____$2,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function iter__9824(s__9825){return (new cljs.core.LazySeq(null,((function (i__9806,i__9394,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9807,s__9805__$2,temp__4092__auto____$2,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9825__$1 = s__9825;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9825__$1);if(temp__4092__auto____$3)
{var s__9825__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9825__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9825__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9827 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9826 = 0;while(true){
if((i__9826 < size__7529__auto____$2))
{var vec__9830 = cljs.core._nth.call(null,c__7528__auto____$2,i__9826);var left = cljs.core.nth.call(null,vec__9830,0,null);var right = cljs.core.nth.call(null,vec__9830,1,null);cljs.core.chunk_append.call(null,b__9827,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10013 = (i__9826 + 1);
i__9826 = G__10013;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9827),iter__9824.call(null,cljs.core.chunk_rest.call(null,s__9825__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9827),null);
}
} else
{var vec__9831 = cljs.core.first.call(null,s__9825__$2);var left = cljs.core.nth.call(null,vec__9831,0,null);var right = cljs.core.nth.call(null,vec__9831,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9824.call(null,cljs.core.rest.call(null,s__9825__$2)));
}
} else
{return null;
}
break;
}
});})(i__9806,i__9394,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9807,s__9805__$2,temp__4092__auto____$2,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(i__9806,i__9394,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9807,s__9805__$2,temp__4092__auto____$2,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10014 = (i__9806 + 1);
i__9806 = G__10014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9807),iter__9804.call(null,cljs.core.chunk_rest.call(null,s__9805__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9807),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9805__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9394,columned,c,columns,line_group,s__9805__$2,temp__4092__auto____$2,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function iter__9832(s__9833){return (new cljs.core.LazySeq(null,((function (i__9394,columned,c,columns,line_group,s__9805__$2,temp__4092__auto____$2,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9833__$1 = s__9833;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9833__$1);if(temp__4092__auto____$3)
{var s__9833__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9833__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9833__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9835 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9834 = 0;while(true){
if((i__9834 < size__7529__auto____$1))
{var vec__9838 = cljs.core._nth.call(null,c__7528__auto____$1,i__9834);var left = cljs.core.nth.call(null,vec__9838,0,null);var right = cljs.core.nth.call(null,vec__9838,1,null);cljs.core.chunk_append.call(null,b__9835,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10015 = (i__9834 + 1);
i__9834 = G__10015;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9835),iter__9832.call(null,cljs.core.chunk_rest.call(null,s__9833__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9835),null);
}
} else
{var vec__9839 = cljs.core.first.call(null,s__9833__$2);var left = cljs.core.nth.call(null,vec__9839,0,null);var right = cljs.core.nth.call(null,vec__9839,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9832.call(null,cljs.core.rest.call(null,s__9833__$2)));
}
} else
{return null;
}
break;
}
});})(i__9394,columned,c,columns,line_group,s__9805__$2,temp__4092__auto____$2,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(i__9394,columned,c,columns,line_group,s__9805__$2,temp__4092__auto____$2,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9804.call(null,cljs.core.rest.call(null,s__9805__$2)));
}
} else
{return null;
}
break;
}
});})(i__9394,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(i__9394,changes_group,s__9693__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9692.call(null,cljs.core.rest.call(null,s__9693__$2)));
}
} else
{return null;
}
break;
}
});})(i__9394,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(i__9394,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__9395,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null));
{
var G__10016 = (i__9394 + 1);
i__9394 = G__10016;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9395),iter__9392.call(null,cljs.core.chunk_rest.call(null,s__9393__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9395),null);
}
} else
{var file = cljs.core.first.call(null,s__9393__$2);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function iter__9840(s__9841){return (new cljs.core.LazySeq(null,((function (filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9841__$1 = s__9841;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9841__$1);if(temp__4092__auto____$1)
{var s__9841__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9841__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9841__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9843 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9842 = 0;while(true){
if((i__9842 < size__7529__auto__))
{var changes_group = cljs.core._nth.call(null,c__7528__auto__,i__9842);cljs.core.chunk_append.call(null,b__9843,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__9842,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function iter__9916(s__9917){return (new cljs.core.LazySeq(null,((function (i__9842,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9917__$1 = s__9917;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9917__$1);if(temp__4092__auto____$2)
{var s__9917__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9917__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9917__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9919 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9918 = 0;while(true){
if((i__9918 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__9918);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9919,(function (){var iter__7530__auto__ = ((function (i__9918,i__9842,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9919,s__9917__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function iter__9936(s__9937){return (new cljs.core.LazySeq(null,((function (i__9918,i__9842,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9919,s__9917__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9937__$1 = s__9937;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9937__$1);if(temp__4092__auto____$3)
{var s__9937__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9937__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__9937__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__9939 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__9938 = 0;while(true){
if((i__9938 < size__7529__auto____$2))
{var vec__9942 = cljs.core._nth.call(null,c__7528__auto____$2,i__9938);var left = cljs.core.nth.call(null,vec__9942,0,null);var right = cljs.core.nth.call(null,vec__9942,1,null);cljs.core.chunk_append.call(null,b__9939,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10017 = (i__9938 + 1);
i__9938 = G__10017;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9939),iter__9936.call(null,cljs.core.chunk_rest.call(null,s__9937__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9939),null);
}
} else
{var vec__9943 = cljs.core.first.call(null,s__9937__$2);var left = cljs.core.nth.call(null,vec__9943,0,null);var right = cljs.core.nth.call(null,vec__9943,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9936.call(null,cljs.core.rest.call(null,s__9937__$2)));
}
} else
{return null;
}
break;
}
});})(i__9918,i__9842,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9919,s__9917__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(i__9918,i__9842,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__9919,s__9917__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10018 = (i__9918 + 1);
i__9918 = G__10018;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9919),iter__9916.call(null,cljs.core.chunk_rest.call(null,s__9917__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9919),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9917__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__9842,columned,c,columns,line_group,s__9917__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function iter__9944(s__9945){return (new cljs.core.LazySeq(null,((function (i__9842,columned,c,columns,line_group,s__9917__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9945__$1 = s__9945;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9945__$1);if(temp__4092__auto____$3)
{var s__9945__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9945__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9945__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9947 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9946 = 0;while(true){
if((i__9946 < size__7529__auto____$1))
{var vec__9950 = cljs.core._nth.call(null,c__7528__auto____$1,i__9946);var left = cljs.core.nth.call(null,vec__9950,0,null);var right = cljs.core.nth.call(null,vec__9950,1,null);cljs.core.chunk_append.call(null,b__9947,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10019 = (i__9946 + 1);
i__9946 = G__10019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9947),iter__9944.call(null,cljs.core.chunk_rest.call(null,s__9945__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9947),null);
}
} else
{var vec__9951 = cljs.core.first.call(null,s__9945__$2);var left = cljs.core.nth.call(null,vec__9951,0,null);var right = cljs.core.nth.call(null,vec__9951,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9944.call(null,cljs.core.rest.call(null,s__9945__$2)));
}
} else
{return null;
}
break;
}
});})(i__9842,columned,c,columns,line_group,s__9917__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(i__9842,columned,c,columns,line_group,s__9917__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9916.call(null,cljs.core.rest.call(null,s__9917__$2)));
}
} else
{return null;
}
break;
}
});})(i__9842,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(i__9842,changes_group,c__7528__auto__,size__7529__auto__,b__9843,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__10020 = (i__9842 + 1);
i__9842 = G__10020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9843),iter__9840.call(null,cljs.core.chunk_rest.call(null,s__9841__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9843),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__9841__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function iter__9952(s__9953){return (new cljs.core.LazySeq(null,((function (changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9953__$1 = s__9953;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__9953__$1);if(temp__4092__auto____$2)
{var s__9953__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__9953__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9953__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9955 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9954 = 0;while(true){
if((i__9954 < size__7529__auto__))
{var line_group = cljs.core._nth.call(null,c__7528__auto__,i__9954);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__9955,(function (){var iter__7530__auto__ = ((function (i__9954,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9955,s__9953__$2,temp__4092__auto____$2,changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function iter__9972(s__9973){return (new cljs.core.LazySeq(null,((function (i__9954,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9955,s__9953__$2,temp__4092__auto____$2,changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9973__$1 = s__9973;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9973__$1);if(temp__4092__auto____$3)
{var s__9973__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9973__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__9973__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__9975 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__9974 = 0;while(true){
if((i__9974 < size__7529__auto____$1))
{var vec__9978 = cljs.core._nth.call(null,c__7528__auto____$1,i__9974);var left = cljs.core.nth.call(null,vec__9978,0,null);var right = cljs.core.nth.call(null,vec__9978,1,null);cljs.core.chunk_append.call(null,b__9975,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10021 = (i__9974 + 1);
i__9974 = G__10021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9975),iter__9972.call(null,cljs.core.chunk_rest.call(null,s__9973__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9975),null);
}
} else
{var vec__9979 = cljs.core.first.call(null,s__9973__$2);var left = cljs.core.nth.call(null,vec__9979,0,null);var right = cljs.core.nth.call(null,vec__9979,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9972.call(null,cljs.core.rest.call(null,s__9973__$2)));
}
} else
{return null;
}
break;
}
});})(i__9954,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9955,s__9953__$2,temp__4092__auto____$2,changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(i__9954,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__9955,s__9953__$2,temp__4092__auto____$2,changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__10022 = (i__9954 + 1);
i__9954 = G__10022;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9955),iter__9952.call(null,cljs.core.chunk_rest.call(null,s__9953__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9955),null);
}
} else
{var line_group = cljs.core.first.call(null,s__9953__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (columned,c,columns,line_group,s__9953__$2,temp__4092__auto____$2,changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function iter__9980(s__9981){return (new cljs.core.LazySeq(null,((function (columned,c,columns,line_group,s__9953__$2,temp__4092__auto____$2,changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output){
return (function (){var s__9981__$1 = s__9981;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__9981__$1);if(temp__4092__auto____$3)
{var s__9981__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__9981__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__9981__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__9983 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__9982 = 0;while(true){
if((i__9982 < size__7529__auto__))
{var vec__9986 = cljs.core._nth.call(null,c__7528__auto__,i__9982);var left = cljs.core.nth.call(null,vec__9986,0,null);var right = cljs.core.nth.call(null,vec__9986,1,null);cljs.core.chunk_append.call(null,b__9983,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__10023 = (i__9982 + 1);
i__9982 = G__10023;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9983),iter__9980.call(null,cljs.core.chunk_rest.call(null,s__9981__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9983),null);
}
} else
{var vec__9987 = cljs.core.first.call(null,s__9981__$2);var left = cljs.core.nth.call(null,vec__9987,0,null);var right = cljs.core.nth.call(null,vec__9987,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__9980.call(null,cljs.core.rest.call(null,s__9981__$2)));
}
} else
{return null;
}
break;
}
});})(columned,c,columns,line_group,s__9953__$2,temp__4092__auto____$2,changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(columned,c,columns,line_group,s__9953__$2,temp__4092__auto____$2,changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__9952.call(null,cljs.core.rest.call(null,s__9953__$2)));
}
} else
{return null;
}
break;
}
});})(changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(changes_group,s__9841__$2,temp__4092__auto____$1,filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__9840.call(null,cljs.core.rest.call(null,s__9841__$2)));
}
} else
{return null;
}
break;
}
});})(filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
,null,null));
});})(filename,file_diff,file,s__9393__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null),iter__9392.call(null,cljs.core.rest.call(null,s__9393__$2)));
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
})());var seq__9988_10024 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9989_10025 = null;var count__9990_10026 = 0;var i__9991_10027 = 0;while(true){
if((i__9991_10027 < count__9990_10026))
{var vec__9992_10028 = cljs.core._nth.call(null,chunk__9989_10025,i__9991_10027);var ev__8184__auto___10029 = cljs.core.nth.call(null,vec__9992_10028,0,null);var func__8185__auto___10030 = cljs.core.nth.call(null,vec__9992_10028,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10029,func__8185__auto___10030);
{
var G__10031 = seq__9988_10024;
var G__10032 = chunk__9989_10025;
var G__10033 = count__9990_10026;
var G__10034 = (i__9991_10027 + 1);
seq__9988_10024 = G__10031;
chunk__9989_10025 = G__10032;
count__9990_10026 = G__10033;
i__9991_10027 = G__10034;
continue;
}
} else
{var temp__4092__auto___10035 = cljs.core.seq.call(null,seq__9988_10024);if(temp__4092__auto___10035)
{var seq__9988_10036__$1 = temp__4092__auto___10035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9988_10036__$1))
{var c__7561__auto___10037 = cljs.core.chunk_first.call(null,seq__9988_10036__$1);{
var G__10038 = cljs.core.chunk_rest.call(null,seq__9988_10036__$1);
var G__10039 = c__7561__auto___10037;
var G__10040 = cljs.core.count.call(null,c__7561__auto___10037);
var G__10041 = 0;
seq__9988_10024 = G__10038;
chunk__9989_10025 = G__10039;
count__9990_10026 = G__10040;
i__9991_10027 = G__10041;
continue;
}
} else
{var vec__9993_10042 = cljs.core.first.call(null,seq__9988_10036__$1);var ev__8184__auto___10043 = cljs.core.nth.call(null,vec__9993_10042,0,null);var func__8185__auto___10044 = cljs.core.nth.call(null,vec__9993_10042,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10043,func__8185__auto___10044);
{
var G__10045 = cljs.core.next.call(null,seq__9988_10036__$1);
var G__10046 = null;
var G__10047 = 0;
var G__10048 = 0;
seq__9988_10024 = G__10045;
chunk__9989_10025 = G__10046;
count__9990_10026 = G__10047;
i__9991_10027 = G__10048;
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
lt.plugins.gitlight.diff.val_or_emptystr = (function val_or_emptystr(what){if((what == null))
{return "";
} else
{return what;
}
});
lt.plugins.gitlight.diff.breaker = (function breaker(left,right){var m = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,left),cljs.core.first.call(null,right)], null);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,m)))
{return cljs.core.cons.call(null,cljs.core.map.call(null,lt.plugins.gitlight.diff.val_or_emptystr,m),breaker.call(null,cljs.core.rest.call(null,left),cljs.core.rest.call(null,right)));
} else
{return null;
}
});
lt.plugins.gitlight.diff.columner = (function columner(lines){if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"context",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,lines,lines)], null);
} else
{var partitioned = clojure.walk.keywordize_keys.call(null,cljs.core.group_by.call(null,cljs.core.first,lines));var left = new cljs.core.Keyword(null,"-","-",1013904287).cljs$core$IFn$_invoke$arity$1(partitioned);var right = new cljs.core.Keyword(null,"+","+",1013904285).cljs$core$IFn$_invoke$arity$1(partitioned);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"changed",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,left,right)], null);
}
});
lt.plugins.gitlight.diff.split_into_headered_groups = (function split_into_headered_groups(lines,fun,result_fun,headkey,contkey){if(!(cljs.core.empty_QMARK_.call(null,lines)))
{var fst = cljs.core.first.call(null,lines);var vec__9995 = cljs.core.split_with.call(null,fun,cljs.core.rest.call(null,lines));var content = cljs.core.nth.call(null,vec__9995,0,null);var leftovers = cljs.core.nth.call(null,vec__9995,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([headkey,fst,contkey,result_fun.call(null,content)], true, false),split_into_headered_groups.call(null,leftovers,fun,result_fun,headkey,contkey));
} else
{return null;
}
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,x));
}),(function (x){return cljs.core.partition_by.call(null,(function (p1__9996_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__9996_SHARP_));
}),x);
}),new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.Keyword(null,"content","content",1965434859));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(data){var vec__9998 = cljs.core.take.call(null,3,data);var header = cljs.core.nth.call(null,vec__9998,0,null);var left = cljs.core.nth.call(null,vec__9998,1,null);var right = cljs.core.nth.call(null,vec__9998,2,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,cljs.core.drop.call(null,3,data));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),header,new cljs.core.Keyword(null,"left","left",1017222009),left,new cljs.core.Keyword(null,"right","right",1122416014),right,new cljs.core.Keyword(null,"groups","groups",4071411014),groups], null);
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
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.object');
goog.require('lt.object');
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-success","lt.plugins.gitlight.status.back/git-status-out-success",3735995038),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git status is executed, parse its output.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",1014014656),null], null), null));
lt.plugins.gitlight.status.back.__BEH__git_status_out_failure = (function __BEH__git_status_out_failure(obj,err,stderr){cljs.core.remove_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status.back","status-pool-watch","lt.plugins.gitlight.status.back/status-pool-watch",4566645289));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"status-failed","status-failed",1731571178));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure","lt.plugins.gitlight.status.back/git-status-out-failure",3442851867),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.back.__BEH__git_status_out_failure,new cljs.core.Keyword(null,"desc","desc",1016984067),"When git status fails.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",1014004951),null], null), null));
lt.plugins.gitlight.status.back.git_status_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out","lt.plugins.gitlight.status.back/git-status-out",3897718648),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git-status-out","git-status-out",2815542080)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-success","lt.plugins.gitlight.status.back/git-status-out-success",3735995038),new cljs.core.Keyword("lt.plugins.gitlight.status.back","git-status-out-failure","lt.plugins.gitlight.status.back/git-status-out-failure",3442851867),new cljs.core.Keyword("lt.plugins.gitlight.status.back","refresh-ui-on-new-status","lt.plugins.gitlight.status.back/refresh-ui-on-new-status",1675222016)], null)));
lt.plugins.gitlight.status.back.git_status = (function git_status(){return lt.plugins.gitlight.git.git_command.call(null,lt.plugins.gitlight.status.back.git_status_out,"status","--porcelain","--branch");
});
lt.plugins.gitlight.status.back.git_add = (function git_add(action,filename){return lt.plugins.gitlight.git.git_add.call(null,filename);
});
lt.plugins.gitlight.status.back.git_reset = (function git_reset(action,filename){return lt.plugins.gitlight.git.git_reset.call(null,filename);
});
lt.plugins.gitlight.status.back.git_checkout_file = (function git_checkout_file(action,filename){return lt.plugins.gitlight.git.git_checkout_file.call(null,filename);
});
lt.plugins.gitlight.status.back.bin_rm = (function bin_rm(action,filename){return lt.objs.files.delete_BANG_.call(null,[cljs.core.str(lt.plugins.gitlight.git.get_git_root.call(null)),cljs.core.str("/"),cljs.core.str(filename)].join(''));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.commit')) {
goog.provide('lt.plugins.gitlight.commit');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.context');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.gitlight.common_ui');
goog.require('lt.plugins.gitlight.git');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.git');
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.commit","git-commit","lt.plugins.gitlight.commit/git-commit",1069137844),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: commit",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.commit.git_commit], null));
lt.plugins.gitlight.commit.git_commit = (function git_commit(){return lt.plugins.gitlight.common_ui.input_popup.call(null,"commit message?","commit",lt.plugins.gitlight.commit.git_cmd_commit);
});
lt.plugins.gitlight.commit.add_quotes = (function add_quotes(s){return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
lt.plugins.gitlight.commit.git_cmd_commit = (function git_cmd_commit(msg){return lt.plugins.gitlight.git.git_command_ignore_out.call(null,"commit","-m",lt.plugins.gitlight.commit.add_quotes.call(null,msg));
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
goog.require('lt.plugins.gitlight.commit');
goog.require('lt.objs.popup');
goog.require('lt.plugins.gitlight.status.back');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.plugins.gitlight.remote_com');
goog.require('lt.plugins.gitlight.diff');
goog.require('lt.objs.command');
goog.require('lt.plugins.gitlight.commit');
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
lt.plugins.gitlight.status.ui.repo_ops = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"commit","commit",3954056361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commit",lt.plugins.gitlight.commit.git_commit], null),new cljs.core.Keyword(null,"push","push",1017356940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["push",lt.plugins.gitlight.remote_com.git_push], null),new cljs.core.Keyword(null,"pull","pull",1017356727),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull",lt.plugins.gitlight.remote_com.git_pull], null),new cljs.core.Keyword(null,"fetch","fetch",1111226924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fetch",lt.plugins.gitlight.remote_com.git_fetch], null),new cljs.core.Keyword(null,"diff","diff",1016987511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",lt.plugins.gitlight.diff.git_diff_repo_button], null)], null);
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__10477){var vec__10493 = p__10477;var f = cljs.core.nth.call(null,vec__10493,0,null);var t = cljs.core.nth.call(null,vec__10493,1,null);var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,f,f,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10494(s__10495){return (new cljs.core.LazySeq(null,(function (){var s__10495__$1 = s__10495;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10495__$1);if(temp__4092__auto__)
{var s__10495__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10495__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10495__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10497 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10496 = 0;while(true){
if((i__10496 < size__7529__auto__))
{var vec__10500 = cljs.core._nth.call(null,c__7528__auto__,i__10496);var bt = cljs.core.nth.call(null,vec__10500,0,null);var fun = cljs.core.nth.call(null,vec__10500,1,null);cljs.core.chunk_append.call(null,b__10497,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun));
{
var G__10576 = (i__10496 + 1);
i__10496 = G__10576;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10497),iter__10494.call(null,cljs.core.chunk_rest.call(null,s__10495__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10497),null);
}
} else
{var vec__10501 = cljs.core.first.call(null,s__10495__$2);var bt = cljs.core.nth.call(null,vec__10501,0,null);var fun = cljs.core.nth.call(null,vec__10501,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun),iter__10494.call(null,cljs.core.rest.call(null,s__10495__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__10502_10577 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10503_10578 = null;var count__10504_10579 = 0;var i__10505_10580 = 0;while(true){
if((i__10505_10580 < count__10504_10579))
{var vec__10506_10581 = cljs.core._nth.call(null,chunk__10503_10578,i__10505_10580);var ev__8184__auto___10582 = cljs.core.nth.call(null,vec__10506_10581,0,null);var func__8185__auto___10583 = cljs.core.nth.call(null,vec__10506_10581,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10582,func__8185__auto___10583);
{
var G__10584 = seq__10502_10577;
var G__10585 = chunk__10503_10578;
var G__10586 = count__10504_10579;
var G__10587 = (i__10505_10580 + 1);
seq__10502_10577 = G__10584;
chunk__10503_10578 = G__10585;
count__10504_10579 = G__10586;
i__10505_10580 = G__10587;
continue;
}
} else
{var temp__4092__auto___10588 = cljs.core.seq.call(null,seq__10502_10577);if(temp__4092__auto___10588)
{var seq__10502_10589__$1 = temp__4092__auto___10588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10502_10589__$1))
{var c__7561__auto___10590 = cljs.core.chunk_first.call(null,seq__10502_10589__$1);{
var G__10591 = cljs.core.chunk_rest.call(null,seq__10502_10589__$1);
var G__10592 = c__7561__auto___10590;
var G__10593 = cljs.core.count.call(null,c__7561__auto___10590);
var G__10594 = 0;
seq__10502_10577 = G__10591;
chunk__10503_10578 = G__10592;
count__10504_10579 = G__10593;
i__10505_10580 = G__10594;
continue;
}
} else
{var vec__10507_10595 = cljs.core.first.call(null,seq__10502_10589__$1);var ev__8184__auto___10596 = cljs.core.nth.call(null,vec__10507_10595,0,null);var func__8185__auto___10597 = cljs.core.nth.call(null,vec__10507_10595,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10596,func__8185__auto___10597);
{
var G__10598 = cljs.core.next.call(null,seq__10502_10589__$1);
var G__10599 = null;
var G__10600 = 0;
var G__10601 = 0;
seq__10502_10577 = G__10598;
chunk__10503_10578 = G__10599;
count__10504_10579 = G__10600;
i__10505_10580 = G__10601;
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__10514_10602 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10515_10603 = null;var count__10516_10604 = 0;var i__10517_10605 = 0;while(true){
if((i__10517_10605 < count__10516_10604))
{var vec__10518_10606 = cljs.core._nth.call(null,chunk__10515_10603,i__10517_10605);var ev__8184__auto___10607 = cljs.core.nth.call(null,vec__10518_10606,0,null);var func__8185__auto___10608 = cljs.core.nth.call(null,vec__10518_10606,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10607,func__8185__auto___10608);
{
var G__10609 = seq__10514_10602;
var G__10610 = chunk__10515_10603;
var G__10611 = count__10516_10604;
var G__10612 = (i__10517_10605 + 1);
seq__10514_10602 = G__10609;
chunk__10515_10603 = G__10610;
count__10516_10604 = G__10611;
i__10517_10605 = G__10612;
continue;
}
} else
{var temp__4092__auto___10613 = cljs.core.seq.call(null,seq__10514_10602);if(temp__4092__auto___10613)
{var seq__10514_10614__$1 = temp__4092__auto___10613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10514_10614__$1))
{var c__7561__auto___10615 = cljs.core.chunk_first.call(null,seq__10514_10614__$1);{
var G__10616 = cljs.core.chunk_rest.call(null,seq__10514_10614__$1);
var G__10617 = c__7561__auto___10615;
var G__10618 = cljs.core.count.call(null,c__7561__auto___10615);
var G__10619 = 0;
seq__10514_10602 = G__10616;
chunk__10515_10603 = G__10617;
count__10516_10604 = G__10618;
i__10517_10605 = G__10619;
continue;
}
} else
{var vec__10519_10620 = cljs.core.first.call(null,seq__10514_10614__$1);var ev__8184__auto___10621 = cljs.core.nth.call(null,vec__10519_10620,0,null);var func__8185__auto___10622 = cljs.core.nth.call(null,vec__10519_10620,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10621,func__8185__auto___10622);
{
var G__10623 = cljs.core.next.call(null,seq__10514_10614__$1);
var G__10624 = null;
var G__10625 = 0;
var G__10626 = 0;
seq__10514_10602 = G__10623;
chunk__10515_10603 = G__10624;
count__10516_10604 = G__10625;
i__10517_10605 = G__10626;
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
lt.plugins.gitlight.status.ui.status_ui = (function status_ui(this$,branch,git_root){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),[cljs.core.str("Branch: ")].join(''),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,branch,[cljs.core.str("Branch menu")].join(''),(function (x,y){return lt.plugins.gitlight.branch.git_branches.call(null);
}))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10542(s__10543){return (new cljs.core.LazySeq(null,(function (){var s__10543__$1 = s__10543;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10543__$1);if(temp__4092__auto__)
{var s__10543__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10543__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10543__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10545 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10544 = 0;while(true){
if((i__10544 < size__7529__auto__))
{var vec__10548 = cljs.core._nth.call(null,c__7528__auto__,i__10544);var bname = cljs.core.nth.call(null,vec__10548,0,null);var fun = cljs.core.nth.call(null,vec__10548,1,null);cljs.core.chunk_append.call(null,b__10545,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10627 = (i__10544 + 1);
i__10544 = G__10627;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10545),iter__10542.call(null,cljs.core.chunk_rest.call(null,s__10543__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10545),null);
}
} else
{var vec__10549 = cljs.core.first.call(null,s__10543__$2);var bname = cljs.core.nth.call(null,vec__10549,0,null);var fun = cljs.core.nth.call(null,vec__10549,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10542.call(null,cljs.core.rest.call(null,s__10543__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,cljs.core.vals.call(null,lt.plugins.gitlight.status.ui.repo_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7530__auto__ = (function iter__10550(s__10551){return (new cljs.core.LazySeq(null,(function (){var s__10551__$1 = s__10551;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10551__$1);if(temp__4092__auto__)
{var s__10551__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10551__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10551__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10553 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10552 = 0;while(true){
if((i__10552 < size__7529__auto__))
{var vec__10556 = cljs.core._nth.call(null,c__7528__auto__,i__10552);var g = cljs.core.nth.call(null,vec__10556,0,null);var fs = cljs.core.nth.call(null,vec__10556,1,null);cljs.core.chunk_append.call(null,b__10553,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10628 = (i__10552 + 1);
i__10552 = G__10628;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10553),iter__10550.call(null,cljs.core.chunk_rest.call(null,s__10551__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10553),null);
}
} else
{var vec__10557 = cljs.core.first.call(null,s__10551__$2);var g = cljs.core.nth.call(null,vec__10557,0,null);var fs = cljs.core.nth.call(null,vec__10557,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__10550.call(null,cljs.core.rest.call(null,s__10551__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,this$);
})()], null)], null));var seq__10558_10629 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10559_10630 = null;var count__10560_10631 = 0;var i__10561_10632 = 0;while(true){
if((i__10561_10632 < count__10560_10631))
{var vec__10562_10633 = cljs.core._nth.call(null,chunk__10559_10630,i__10561_10632);var ev__8184__auto___10634 = cljs.core.nth.call(null,vec__10562_10633,0,null);var func__8185__auto___10635 = cljs.core.nth.call(null,vec__10562_10633,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10634,func__8185__auto___10635);
{
var G__10636 = seq__10558_10629;
var G__10637 = chunk__10559_10630;
var G__10638 = count__10560_10631;
var G__10639 = (i__10561_10632 + 1);
seq__10558_10629 = G__10636;
chunk__10559_10630 = G__10637;
count__10560_10631 = G__10638;
i__10561_10632 = G__10639;
continue;
}
} else
{var temp__4092__auto___10640 = cljs.core.seq.call(null,seq__10558_10629);if(temp__4092__auto___10640)
{var seq__10558_10641__$1 = temp__4092__auto___10640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10558_10641__$1))
{var c__7561__auto___10642 = cljs.core.chunk_first.call(null,seq__10558_10641__$1);{
var G__10643 = cljs.core.chunk_rest.call(null,seq__10558_10641__$1);
var G__10644 = c__7561__auto___10642;
var G__10645 = cljs.core.count.call(null,c__7561__auto___10642);
var G__10646 = 0;
seq__10558_10629 = G__10643;
chunk__10559_10630 = G__10644;
count__10560_10631 = G__10645;
i__10561_10632 = G__10646;
continue;
}
} else
{var vec__10563_10647 = cljs.core.first.call(null,seq__10558_10641__$1);var ev__8184__auto___10648 = cljs.core.nth.call(null,vec__10563_10647,0,null);var func__8185__auto___10649 = cljs.core.nth.call(null,vec__10563_10647,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10648,func__8185__auto___10649);
{
var G__10650 = cljs.core.next.call(null,seq__10558_10641__$1);
var G__10651 = null;
var G__10652 = 0;
var G__10653 = 0;
seq__10558_10629 = G__10650;
chunk__10559_10630 = G__10651;
count__10560_10631 = G__10652;
i__10561_10632 = G__10653;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10570_10654 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10571_10655 = null;var count__10572_10656 = 0;var i__10573_10657 = 0;while(true){
if((i__10573_10657 < count__10572_10656))
{var vec__10574_10658 = cljs.core._nth.call(null,chunk__10571_10655,i__10573_10657);var ev__8184__auto___10659 = cljs.core.nth.call(null,vec__10574_10658,0,null);var func__8185__auto___10660 = cljs.core.nth.call(null,vec__10574_10658,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10659,func__8185__auto___10660);
{
var G__10661 = seq__10570_10654;
var G__10662 = chunk__10571_10655;
var G__10663 = count__10572_10656;
var G__10664 = (i__10573_10657 + 1);
seq__10570_10654 = G__10661;
chunk__10571_10655 = G__10662;
count__10572_10656 = G__10663;
i__10573_10657 = G__10664;
continue;
}
} else
{var temp__4092__auto___10665 = cljs.core.seq.call(null,seq__10570_10654);if(temp__4092__auto___10665)
{var seq__10570_10666__$1 = temp__4092__auto___10665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10570_10666__$1))
{var c__7561__auto___10667 = cljs.core.chunk_first.call(null,seq__10570_10666__$1);{
var G__10668 = cljs.core.chunk_rest.call(null,seq__10570_10666__$1);
var G__10669 = c__7561__auto___10667;
var G__10670 = cljs.core.count.call(null,c__7561__auto___10667);
var G__10671 = 0;
seq__10570_10654 = G__10668;
chunk__10571_10655 = G__10669;
count__10572_10656 = G__10670;
i__10573_10657 = G__10671;
continue;
}
} else
{var vec__10575_10672 = cljs.core.first.call(null,seq__10570_10666__$1);var ev__8184__auto___10673 = cljs.core.nth.call(null,vec__10575_10672,0,null);var func__8185__auto___10674 = cljs.core.nth.call(null,vec__10575_10672,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10673,func__8185__auto___10674);
{
var G__10675 = cljs.core.next.call(null,seq__10570_10666__$1);
var G__10676 = null;
var G__10677 = 0;
var G__10678 = 0;
seq__10570_10654 = G__10675;
chunk__10571_10655 = G__10676;
count__10572_10656 = G__10677;
i__10573_10657 = G__10678;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","init","lt.plugins.gitlight.status/init",3068682980),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__init,new cljs.core.Keyword(null,"desc","desc",1016984067),"Init gitlight status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitlight-status","gitlight-status",4738816205),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitlight: Status",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitlight.status.back.git_status], null));
lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status = (function __BEH__refresh_ui_on_new_status(obj,data){if(!(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null)))
{lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.gitlight.status.ui.status_bar);
} else
{}
return lt.object.raise.call(null,lt.plugins.gitlight.status.ui.status_bar,new cljs.core.Keyword(null,"refresh","refresh",2099349069),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"branch-name","branch-name",4270694216).cljs$core$IFn$_invoke$arity$1(data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-ui-on-new-status","lt.plugins.gitlight.status/refresh-ui-on-new-status",4772158826),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_ui_on_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
lt.plugins.gitlight.status.__BEH__close_ui_on_failure = (function __BEH__close_ui_on_failure(obj,data){cljs.core.remove_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status","status-pool-watch","lt.plugins.gitlight.status/status-pool-watch",2316860253));
if(lt.plugins.gitlight.status.ui.is_open_QMARK_.call(null))
{lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"close!","close!",3951350939),lt.plugins.gitlight.status.ui.status_bar);
} else
{}
return lt.object.raise.call(null,lt.plugins.gitlight.error,new cljs.core.Keyword(null,"raise-error-popup","raise-error-popup",3751697336));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","close-ui-on-failure","lt.plugins.gitlight.status/close-ui-on-failure",4763397812),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__close_ui_on_failure,new cljs.core.Keyword(null,"desc","desc",1016984067),"refresh ui on new status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status-failed","status-failed",1731571178),null], null), null));
lt.plugins.gitlight.status.__BEH__add_watch = (function __BEH__add_watch(obj){return cljs.core.add_watch.call(null,lt.objs.editor.pool.pool,new cljs.core.Keyword("lt.plugins.gitlight.status","status-pool-watch","lt.plugins.gitlight.status/status-pool-watch",2316860253),(function (k,r,old,new$){return lt.plugins.gitlight.status.status_if_open.call(null);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","add-watch","lt.plugins.gitlight.status/add-watch",3854676855),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__add_watch,new cljs.core.Keyword(null,"desc","desc",1016984067),"add pool watch",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-watch","add-watch",4224092181),null], null), null));
lt.plugins.gitlight.status.__BEH__refresh_git_status_on_save = (function __BEH__refresh_git_status_on_save(editor,content){lt.plugins.gitlight.status.status_if_open.call(null);
return content;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","refresh-git-status-on-save","lt.plugins.gitlight.status/refresh-git-status-on-save",3914231473),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__refresh_git_status_on_save,new cljs.core.Keyword(null,"desc","desc",1016984067),"Save: refresh gitlight status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save+","save+",1123115456),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.plugins.gitlight.status.__BEH__debug_new_status = (function __BEH__debug_new_status(obj,data){return console.log("refresh",cljs.core.clj__GT_js.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.status","debug-new-status","lt.plugins.gitlight.status/debug-new-status",3684259709),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.status.__BEH__debug_new_status,new cljs.core.Keyword(null,"desc","desc",1016984067),"debug status",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),null], null), null));
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
lt.plugins.gitlight.tests.which_color_QMARK_ = (function which_color_QMARK_(result){var G__10412 = result;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"not-bool","not-bool",2543743254),G__10412))
{return "pink";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__10412))
{return "red";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__10412))
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
lt.plugins.gitlight.tests.test_panel = (function test_panel(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7530__auto__ = (function iter__10427(s__10428){return (new cljs.core.LazySeq(null,(function (){var s__10428__$1 = s__10428;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10428__$1);if(temp__4092__auto__)
{var s__10428__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10428__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10428__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10430 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10429 = 0;while(true){
if((i__10429 < size__7529__auto__))
{var map__10433 = cljs.core._nth.call(null,c__7528__auto__,i__10429);var map__10433__$1 = ((cljs.core.seq_QMARK_.call(null,map__10433))?cljs.core.apply.call(null,cljs.core.hash_map,map__10433):map__10433);var status = cljs.core.get.call(null,map__10433__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10433__$1,new cljs.core.Keyword(null,"info","info",1017141280));cljs.core.chunk_append.call(null,b__10430,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null));
{
var G__10451 = (i__10429 + 1);
i__10429 = G__10451;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10430),iter__10427.call(null,cljs.core.chunk_rest.call(null,s__10428__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10430),null);
}
} else
{var map__10434 = cljs.core.first.call(null,s__10428__$2);var map__10434__$1 = ((cljs.core.seq_QMARK_.call(null,map__10434))?cljs.core.apply.call(null,cljs.core.hash_map,map__10434):map__10434);var status = cljs.core.get.call(null,map__10434__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10434__$1,new cljs.core.Keyword(null,"info","info",1017141280));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null),iter__10427.call(null,cljs.core.rest.call(null,s__10428__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__10435_10452 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10436_10453 = null;var count__10437_10454 = 0;var i__10438_10455 = 0;while(true){
if((i__10438_10455 < count__10437_10454))
{var vec__10439_10456 = cljs.core._nth.call(null,chunk__10436_10453,i__10438_10455);var ev__8184__auto___10457 = cljs.core.nth.call(null,vec__10439_10456,0,null);var func__8185__auto___10458 = cljs.core.nth.call(null,vec__10439_10456,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10457,func__8185__auto___10458);
{
var G__10459 = seq__10435_10452;
var G__10460 = chunk__10436_10453;
var G__10461 = count__10437_10454;
var G__10462 = (i__10438_10455 + 1);
seq__10435_10452 = G__10459;
chunk__10436_10453 = G__10460;
count__10437_10454 = G__10461;
i__10438_10455 = G__10462;
continue;
}
} else
{var temp__4092__auto___10463 = cljs.core.seq.call(null,seq__10435_10452);if(temp__4092__auto___10463)
{var seq__10435_10464__$1 = temp__4092__auto___10463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10435_10464__$1))
{var c__7561__auto___10465 = cljs.core.chunk_first.call(null,seq__10435_10464__$1);{
var G__10466 = cljs.core.chunk_rest.call(null,seq__10435_10464__$1);
var G__10467 = c__7561__auto___10465;
var G__10468 = cljs.core.count.call(null,c__7561__auto___10465);
var G__10469 = 0;
seq__10435_10452 = G__10466;
chunk__10436_10453 = G__10467;
count__10437_10454 = G__10468;
i__10438_10455 = G__10469;
continue;
}
} else
{var vec__10440_10470 = cljs.core.first.call(null,seq__10435_10464__$1);var ev__8184__auto___10471 = cljs.core.nth.call(null,vec__10440_10470,0,null);var func__8185__auto___10472 = cljs.core.nth.call(null,vec__10440_10470,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10471,func__8185__auto___10472);
{
var G__10473 = cljs.core.next.call(null,seq__10435_10464__$1);
var G__10474 = null;
var G__10475 = 0;
var G__10476 = 0;
seq__10435_10452 = G__10473;
chunk__10436_10453 = G__10474;
count__10437_10454 = G__10475;
i__10438_10455 = G__10476;
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
lt.plugins.gitlight.tests.lib.selector_asrt = (function selector_asrt(p__10679){var map__10681 = p__10679;var map__10681__$1 = ((cljs.core.seq_QMARK_.call(null,map__10681))?cljs.core.apply.call(null,cljs.core.hash_map,map__10681):map__10681);var select = cljs.core.get.call(null,map__10681__$1,new cljs.core.Keyword(null,"select","select",4402849902));return null;
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
lt.plugins.gitlight.tests.status.back.change_filenames = (function change_filenames(filename,x){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10705_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filename","filename",4574102905),p1__10705_SHARP_))
{return filename;
} else
{return p1__10705_SHARP_;
}
}),x));
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","back-tests","lt.plugins.gitlight.tests.status.back/back-tests",4633446629),(function (){lt.plugins.gitlight.tests.status.back.test_data = (function test_data(pair){var vec__10709 = pair;var n = cljs.core.nth.call(null,vec__10709,0,null);var what = cljs.core.nth.call(null,vec__10709,1,null);var vec__10710 = what;var tst = cljs.core.nth.call(null,vec__10710,0,null);var parsed = cljs.core.nth.call(null,vec__10710,1,null);var vec__10711 = tst;var X = cljs.core.nth.call(null,vec__10711,0,null);var Y = cljs.core.nth.call(null,vec__10711,1,null);var filename = cljs.core.nth.call(null,vec__10711,2,null);var d = cljs.core.nth.call(null,lt.plugins.gitlight.tests.status.back.data,n);var what_should_be = cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.tests.status.back.change_filenames,filename),d));var what_is = cljs.core.sort.call(null,parsed);var tst__$1 = cljs.core._EQ_.call(null,what_should_be,what_is);if(!(tst__$1))
{lt.plugins.gitlight.tests.lib.asrt.call(null,[cljs.core.str("parsing porcelain: `"),cljs.core.str(X),cljs.core.str("' `"),cljs.core.str(Y),cljs.core.str("'")].join(''),tst__$1);
} else
{}
return tst__$1;
});
lt.plugins.gitlight.tests.status.back.generate_test_data = (function generate_test_data(){var iter__7530__auto__ = (function iter__10718(s__10719){return (new cljs.core.LazySeq(null,(function (){var s__10719__$1 = s__10719;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10719__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7526__auto__ = ((function (s__10719__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__10720(s__10721){return (new cljs.core.LazySeq(null,((function (s__10719__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__10721__$1 = s__10721;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10721__$1);if(temp__4092__auto____$1)
{var s__10721__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10721__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10721__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10723 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10722 = 0;while(true){
if((i__10722 < size__7529__auto__))
{var y = cljs.core._nth.call(null,c__7528__auto__,i__10722);cljs.core.chunk_append.call(null,b__10723,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})());
{
var G__10734 = (i__10722 + 1);
i__10722 = G__10734;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10723),iter__10720.call(null,cljs.core.chunk_rest.call(null,s__10721__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10723),null);
}
} else
{var y = cljs.core.first.call(null,s__10721__$2);return cljs.core.cons.call(null,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})(),iter__10720.call(null,cljs.core.rest.call(null,s__10721__$2)));
}
} else
{return null;
}
break;
}
});})(s__10719__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__10719__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7527__auto__ = cljs.core.seq.call(null,iterys__7526__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","D","U"], null)));if(fs__7527__auto__)
{return cljs.core.concat.call(null,fs__7527__auto__,iter__10718.call(null,cljs.core.rest.call(null,s__10719__$1)));
} else
{{
var G__10735 = cljs.core.rest.call(null,s__10719__$1);
s__10719__$1 = G__10735;
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
after.cljs$lang$applyTo = (function (arglist__10704){
var text = cljs.core.first(arglist__10704);
arglist__10704 = cljs.core.next(arglist__10704);
var cwd = cljs.core.first(arglist__10704);
arglist__10704 = cljs.core.next(arglist__10704);
var data = cljs.core.first(arglist__10704);
var what_next = cljs.core.rest(arglist__10704);
return after__delegate(text,cwd,data,what_next);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
lt.plugins.gitlight.tests.remote_com.__BEH__git_test_exit_status__DOT__out = (function __BEH__git_test_exit_status__DOT__out(obj,data){var cwd = cljs.core.deref.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));var G__10693 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));if(cljs.core._EQ_.call(null,"push",G__10693))
{return lt.plugins.gitlight.tests.lib.asrt.call(null,"git push",cljs.core._EQ_.call(null,0,data));
} else
{if(cljs.core._EQ_.call(null,"commit",G__10693))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git commit",cwd,data,"push");
} else
{if(cljs.core._EQ_.call(null,"add",G__10693))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git add",cwd,data,"commit","-m","commiting");
} else
{if(cljs.core._EQ_.call(null,"pull",G__10693))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git pull",cwd,data,"add","push_me");
} else
{if(cljs.core._EQ_.call(null,"fetch",G__10693))
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
if(!lt.util.load.provided_QMARK_('lt.plugins.gitlight.lib')) {
goog.provide('lt.plugins.gitlight.lib');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gitlight.lib.quote = (function quote(s){return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
lt.plugins.gitlight.lib.sanitize = (function sanitize(s){return clojure.string.escape.call(null,s,new cljs.core.PersistentArrayMap(null, 3, ["$","\\$","`","\\`","\"","\\\""], null));
});
lt.plugins.gitlight.lib.q_AMPERSAND_s = (function q_AMPERSAND_s(s){return cljs.core.list(new cljs.core.Symbol(null,"sanitize","sanitize",357442082,null),new cljs.core.Symbol(null,"s","s",-1640531412,null));
});
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
lt.plugins.gitlight.tests.status.ui.test_node = (function test_node(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"test"], null));var seq__10742_10758 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10743_10759 = null;var count__10744_10760 = 0;var i__10745_10761 = 0;while(true){
if((i__10745_10761 < count__10744_10760))
{var vec__10746_10762 = cljs.core._nth.call(null,chunk__10743_10759,i__10745_10761);var ev__8184__auto___10763 = cljs.core.nth.call(null,vec__10746_10762,0,null);var func__8185__auto___10764 = cljs.core.nth.call(null,vec__10746_10762,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10763,func__8185__auto___10764);
{
var G__10765 = seq__10742_10758;
var G__10766 = chunk__10743_10759;
var G__10767 = count__10744_10760;
var G__10768 = (i__10745_10761 + 1);
seq__10742_10758 = G__10765;
chunk__10743_10759 = G__10766;
count__10744_10760 = G__10767;
i__10745_10761 = G__10768;
continue;
}
} else
{var temp__4092__auto___10769 = cljs.core.seq.call(null,seq__10742_10758);if(temp__4092__auto___10769)
{var seq__10742_10770__$1 = temp__4092__auto___10769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10742_10770__$1))
{var c__7561__auto___10771 = cljs.core.chunk_first.call(null,seq__10742_10770__$1);{
var G__10772 = cljs.core.chunk_rest.call(null,seq__10742_10770__$1);
var G__10773 = c__7561__auto___10771;
var G__10774 = cljs.core.count.call(null,c__7561__auto___10771);
var G__10775 = 0;
seq__10742_10758 = G__10772;
chunk__10743_10759 = G__10773;
count__10744_10760 = G__10774;
i__10745_10761 = G__10775;
continue;
}
} else
{var vec__10747_10776 = cljs.core.first.call(null,seq__10742_10770__$1);var ev__8184__auto___10777 = cljs.core.nth.call(null,vec__10747_10776,0,null);var func__8185__auto___10778 = cljs.core.nth.call(null,vec__10747_10776,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10777,func__8185__auto___10778);
{
var G__10779 = cljs.core.next.call(null,seq__10742_10770__$1);
var G__10780 = null;
var G__10781 = 0;
var G__10782 = 0;
seq__10742_10758 = G__10779;
chunk__10743_10759 = G__10780;
count__10744_10760 = G__10781;
i__10745_10761 = G__10782;
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