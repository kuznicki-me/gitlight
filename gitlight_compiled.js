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
git_command_cwd.cljs$lang$applyTo = (function (arglist__10141){
var obj = cljs.core.first(arglist__10141);
arglist__10141 = cljs.core.next(arglist__10141);
var cwd = cljs.core.first(arglist__10141);
var args = cljs.core.rest(arglist__10141);
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
git_command.cljs$lang$applyTo = (function (arglist__10142){
var obj = cljs.core.first(arglist__10142);
var args = cljs.core.rest(arglist__10142);
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
git_command_ignore_out.cljs$lang$applyTo = (function (arglist__10143){
var args = cljs.core.seq(arglist__10143);
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
var this$__$1 = this;var seq__8700 = cljs.core.seq.call(null,self__.watches);var chunk__8701 = null;var count__8702 = 0;var i__8703 = 0;while(true){
if((i__8703 < count__8702))
{var vec__8704 = cljs.core._nth.call(null,chunk__8701,i__8703);var key__$1 = cljs.core.nth.call(null,vec__8704,0,null);var f = cljs.core.nth.call(null,vec__8704,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8779 = seq__8700;
var G__8780 = chunk__8701;
var G__8781 = count__8702;
var G__8782 = (i__8703 + 1);
seq__8700 = G__8779;
chunk__8701 = G__8780;
count__8702 = G__8781;
i__8703 = G__8782;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8700);if(temp__4092__auto__)
{var seq__8700__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8700__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8700__$1);{
var G__8783 = cljs.core.chunk_rest.call(null,seq__8700__$1);
var G__8784 = c__7561__auto__;
var G__8785 = cljs.core.count.call(null,c__7561__auto__);
var G__8786 = 0;
seq__8700 = G__8783;
chunk__8701 = G__8784;
count__8702 = G__8785;
i__8703 = G__8786;
continue;
}
} else
{var vec__8705 = cljs.core.first.call(null,seq__8700__$1);var key__$1 = cljs.core.nth.call(null,vec__8705,0,null);var f = cljs.core.nth.call(null,vec__8705,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8787 = cljs.core.next.call(null,seq__8700__$1);
var G__8788 = null;
var G__8789 = 0;
var G__8790 = 0;
seq__8700 = G__8787;
chunk__8701 = G__8788;
count__8702 = G__8789;
i__8703 = G__8790;
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
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8707 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8707,0,null);var path__$2 = cljs.core.nth.call(null,vec__8707,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
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
var G__8791__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8791 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8791__delegate.call(this,sa,f,x,y,z,more);};
G__8791.cljs$lang$maxFixedArity = 5;
G__8791.cljs$lang$applyTo = (function (arglist__8792){
var sa = cljs.core.first(arglist__8792);
arglist__8792 = cljs.core.next(arglist__8792);
var f = cljs.core.first(arglist__8792);
arglist__8792 = cljs.core.next(arglist__8792);
var x = cljs.core.first(arglist__8792);
arglist__8792 = cljs.core.next(arglist__8792);
var y = cljs.core.first(arglist__8792);
arglist__8792 = cljs.core.next(arglist__8792);
var z = cljs.core.first(arglist__8792);
var more = cljs.core.rest(arglist__8792);
return G__8791__delegate(sa,f,x,y,z,more);
});
G__8791.cljs$core$IFn$_invoke$arity$variadic = G__8791__delegate;
return G__8791;
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
crate.binding.computable = (function (){var obj8709 = {};return obj8709;
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
var this$__$1 = this;var seq__8710 = cljs.core.seq.call(null,self__.watches);var chunk__8711 = null;var count__8712 = 0;var i__8713 = 0;while(true){
if((i__8713 < count__8712))
{var vec__8714 = cljs.core._nth.call(null,chunk__8711,i__8713);var key__$1 = cljs.core.nth.call(null,vec__8714,0,null);var f = cljs.core.nth.call(null,vec__8714,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8793 = seq__8710;
var G__8794 = chunk__8711;
var G__8795 = count__8712;
var G__8796 = (i__8713 + 1);
seq__8710 = G__8793;
chunk__8711 = G__8794;
count__8712 = G__8795;
i__8713 = G__8796;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8710);if(temp__4092__auto__)
{var seq__8710__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8710__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8710__$1);{
var G__8797 = cljs.core.chunk_rest.call(null,seq__8710__$1);
var G__8798 = c__7561__auto__;
var G__8799 = cljs.core.count.call(null,c__7561__auto__);
var G__8800 = 0;
seq__8710 = G__8797;
chunk__8711 = G__8798;
count__8712 = G__8799;
i__8713 = G__8800;
continue;
}
} else
{var vec__8715 = cljs.core.first.call(null,seq__8710__$1);var key__$1 = cljs.core.nth.call(null,vec__8715,0,null);var f = cljs.core.nth.call(null,vec__8715,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8801 = cljs.core.next.call(null,seq__8710__$1);
var G__8802 = null;
var G__8803 = 0;
var G__8804 = 0;
seq__8710 = G__8801;
chunk__8711 = G__8802;
count__8712 = G__8803;
i__8713 = G__8804;
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
var seq__8720_8805 = cljs.core.seq.call(null,atms);var chunk__8721_8806 = null;var count__8722_8807 = 0;var i__8723_8808 = 0;while(true){
if((i__8723_8808 < count__8722_8807))
{var atm_8809 = cljs.core._nth.call(null,chunk__8721_8806,i__8723_8808);crate.binding._depend.call(null,neue,atm_8809);
{
var G__8810 = seq__8720_8805;
var G__8811 = chunk__8721_8806;
var G__8812 = count__8722_8807;
var G__8813 = (i__8723_8808 + 1);
seq__8720_8805 = G__8810;
chunk__8721_8806 = G__8811;
count__8722_8807 = G__8812;
i__8723_8808 = G__8813;
continue;
}
} else
{var temp__4092__auto___8814 = cljs.core.seq.call(null,seq__8720_8805);if(temp__4092__auto___8814)
{var seq__8720_8815__$1 = temp__4092__auto___8814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8720_8815__$1))
{var c__7561__auto___8816 = cljs.core.chunk_first.call(null,seq__8720_8815__$1);{
var G__8817 = cljs.core.chunk_rest.call(null,seq__8720_8815__$1);
var G__8818 = c__7561__auto___8816;
var G__8819 = cljs.core.count.call(null,c__7561__auto___8816);
var G__8820 = 0;
seq__8720_8805 = G__8817;
chunk__8721_8806 = G__8818;
count__8722_8807 = G__8819;
i__8723_8808 = G__8820;
continue;
}
} else
{var atm_8821 = cljs.core.first.call(null,seq__8720_8815__$1);crate.binding._depend.call(null,neue,atm_8821);
{
var G__8822 = cljs.core.next.call(null,seq__8720_8815__$1);
var G__8823 = null;
var G__8824 = 0;
var G__8825 = 0;
seq__8720_8805 = G__8822;
chunk__8721_8806 = G__8823;
count__8722_8807 = G__8824;
i__8723_8808 = G__8825;
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
crate.binding.bindable_coll = (function (){var obj8725 = {};return obj8725;
})();
crate.binding.bindable = (function (){var obj8727 = {};return obj8727;
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
var this$__$1 = this;var seq__8728 = cljs.core.seq.call(null,self__.watches);var chunk__8729 = null;var count__8730 = 0;var i__8731 = 0;while(true){
if((i__8731 < count__8730))
{var vec__8732 = cljs.core._nth.call(null,chunk__8729,i__8731);var key = cljs.core.nth.call(null,vec__8732,0,null);var f = cljs.core.nth.call(null,vec__8732,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8826 = seq__8728;
var G__8827 = chunk__8729;
var G__8828 = count__8730;
var G__8829 = (i__8731 + 1);
seq__8728 = G__8826;
chunk__8729 = G__8827;
count__8730 = G__8828;
i__8731 = G__8829;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8728);if(temp__4092__auto__)
{var seq__8728__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8728__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8728__$1);{
var G__8830 = cljs.core.chunk_rest.call(null,seq__8728__$1);
var G__8831 = c__7561__auto__;
var G__8832 = cljs.core.count.call(null,c__7561__auto__);
var G__8833 = 0;
seq__8728 = G__8830;
chunk__8729 = G__8831;
count__8730 = G__8832;
i__8731 = G__8833;
continue;
}
} else
{var vec__8733 = cljs.core.first.call(null,seq__8728__$1);var key = cljs.core.nth.call(null,vec__8733,0,null);var f = cljs.core.nth.call(null,vec__8733,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8834 = cljs.core.next.call(null,seq__8728__$1);
var G__8835 = null;
var G__8836 = 0;
var G__8837 = 0;
seq__8728 = G__8834;
chunk__8729 = G__8835;
count__8730 = G__8836;
i__8731 = G__8837;
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
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__8734){var vec__8735 = p__8734;var event = cljs.core.nth.call(null,vec__8735,0,null);var el = cljs.core.nth.call(null,vec__8735,1,null);var v = cljs.core.nth.call(null,vec__8735,2,null);return func.call(null,event,el,v);
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
__GT_path.cljs$lang$applyTo = (function (arglist__8838){
var bc = cljs.core.first(arglist__8838);
var segs = cljs.core.rest(arglist__8838);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8744_8839 = cljs.core.seq.call(null,added);var chunk__8745_8840 = null;var count__8746_8841 = 0;var i__8747_8842 = 0;while(true){
if((i__8747_8842 < count__8746_8841))
{var a_8843 = cljs.core._nth.call(null,chunk__8745_8840,i__8747_8842);crate.binding.bc_add.call(null,bc,a_8843,a_8843);
{
var G__8844 = seq__8744_8839;
var G__8845 = chunk__8745_8840;
var G__8846 = count__8746_8841;
var G__8847 = (i__8747_8842 + 1);
seq__8744_8839 = G__8844;
chunk__8745_8840 = G__8845;
count__8746_8841 = G__8846;
i__8747_8842 = G__8847;
continue;
}
} else
{var temp__4092__auto___8848 = cljs.core.seq.call(null,seq__8744_8839);if(temp__4092__auto___8848)
{var seq__8744_8849__$1 = temp__4092__auto___8848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8744_8849__$1))
{var c__7561__auto___8850 = cljs.core.chunk_first.call(null,seq__8744_8849__$1);{
var G__8851 = cljs.core.chunk_rest.call(null,seq__8744_8849__$1);
var G__8852 = c__7561__auto___8850;
var G__8853 = cljs.core.count.call(null,c__7561__auto___8850);
var G__8854 = 0;
seq__8744_8839 = G__8851;
chunk__8745_8840 = G__8852;
count__8746_8841 = G__8853;
i__8747_8842 = G__8854;
continue;
}
} else
{var a_8855 = cljs.core.first.call(null,seq__8744_8849__$1);crate.binding.bc_add.call(null,bc,a_8855,a_8855);
{
var G__8856 = cljs.core.next.call(null,seq__8744_8849__$1);
var G__8857 = null;
var G__8858 = 0;
var G__8859 = 0;
seq__8744_8839 = G__8856;
chunk__8745_8840 = G__8857;
count__8746_8841 = G__8858;
i__8747_8842 = G__8859;
continue;
}
}
} else
{}
}
break;
}
var seq__8748 = cljs.core.seq.call(null,removed);var chunk__8749 = null;var count__8750 = 0;var i__8751 = 0;while(true){
if((i__8751 < count__8750))
{var r = cljs.core._nth.call(null,chunk__8749,i__8751);crate.binding.bc_remove.call(null,bc,r);
{
var G__8860 = seq__8748;
var G__8861 = chunk__8749;
var G__8862 = count__8750;
var G__8863 = (i__8751 + 1);
seq__8748 = G__8860;
chunk__8749 = G__8861;
count__8750 = G__8862;
i__8751 = G__8863;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8748);if(temp__4092__auto__)
{var seq__8748__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8748__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8748__$1);{
var G__8864 = cljs.core.chunk_rest.call(null,seq__8748__$1);
var G__8865 = c__7561__auto__;
var G__8866 = cljs.core.count.call(null,c__7561__auto__);
var G__8867 = 0;
seq__8748 = G__8864;
chunk__8749 = G__8865;
count__8750 = G__8866;
i__8751 = G__8867;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8748__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8868 = cljs.core.next.call(null,seq__8748__$1);
var G__8869 = null;
var G__8870 = 0;
var G__8871 = 0;
seq__8748 = G__8868;
chunk__8749 = G__8869;
count__8750 = G__8870;
i__8751 = G__8871;
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
var bound_coll__delegate = function (atm,p__8752){var vec__8755 = p__8752;var path = cljs.core.nth.call(null,vec__8755,0,null);var opts = cljs.core.nth.call(null,vec__8755,1,null);var vec__8756 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8756,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8756,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8752 = null;if (arguments.length > 1) {
  p__8752 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8752);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8872){
var atm = cljs.core.first(arglist__8872);
var p__8752 = cljs.core.rest(arglist__8872);
return bound_coll__delegate(atm,p__8752);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8757){var vec__8759 = p__8757;var opts = cljs.core.nth.call(null,vec__8759,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8757 = null;if (arguments.length > 2) {
  p__8757 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8757);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8873){
var as = cljs.core.first(arglist__8873);
arglist__8873 = cljs.core.next(arglist__8873);
var atm = cljs.core.first(arglist__8873);
var p__8757 = cljs.core.rest(arglist__8873);
return map_bound__delegate(as,atm,p__8757);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8761 = b;if(G__8761)
{var bit__7463__auto__ = null;if(cljs.core.truth_((function (){var or__6813__auto__ = bit__7463__auto__;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return G__8761.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8761.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8761);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8761);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8763 = b;if(G__8763)
{var bit__7463__auto__ = null;if(cljs.core.truth_((function (){var or__6813__auto__ = bit__7463__auto__;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return G__8763.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8763.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8763);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8763);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8765 = atm;if(G__8765)
{var bit__7463__auto__ = (G__8765.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7463__auto__) || (G__8765.cljs$core$IDeref$))
{return true;
} else
{if((!G__8765.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8765);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8765);
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
var bound__delegate = function (atm,p__8766){var vec__8768 = p__8766;var func = cljs.core.nth.call(null,vec__8768,0,null);var func__$1 = (function (){var or__6813__auto__ = func;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8766 = null;if (arguments.length > 1) {
  p__8766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8766);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8874){
var atm = cljs.core.first(arglist__8874);
var p__8766 = cljs.core.rest(arglist__8874);
return bound__delegate(atm,p__8766);
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
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('crate.binding');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('crate.core');
lt.plugins.gitlight.common_ui.button = (function button(n,f,fun){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8578_8623 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__8579_8624 = null;var count__8580_8625 = 0;var i__8581_8626 = 0;while(true){
if((i__8581_8626 < count__8580_8625))
{var vec__8582_8627 = cljs.core._nth.call(null,chunk__8579_8624,i__8581_8626);var ev__8184__auto___8628 = cljs.core.nth.call(null,vec__8582_8627,0,null);var func__8185__auto___8629 = cljs.core.nth.call(null,vec__8582_8627,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8628,func__8185__auto___8629);
{
var G__8630 = seq__8578_8623;
var G__8631 = chunk__8579_8624;
var G__8632 = count__8580_8625;
var G__8633 = (i__8581_8626 + 1);
seq__8578_8623 = G__8630;
chunk__8579_8624 = G__8631;
count__8580_8625 = G__8632;
i__8581_8626 = G__8633;
continue;
}
} else
{var temp__4092__auto___8634 = cljs.core.seq.call(null,seq__8578_8623);if(temp__4092__auto___8634)
{var seq__8578_8635__$1 = temp__4092__auto___8634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8578_8635__$1))
{var c__7561__auto___8636 = cljs.core.chunk_first.call(null,seq__8578_8635__$1);{
var G__8637 = cljs.core.chunk_rest.call(null,seq__8578_8635__$1);
var G__8638 = c__7561__auto___8636;
var G__8639 = cljs.core.count.call(null,c__7561__auto___8636);
var G__8640 = 0;
seq__8578_8623 = G__8637;
chunk__8579_8624 = G__8638;
count__8580_8625 = G__8639;
i__8581_8626 = G__8640;
continue;
}
} else
{var vec__8583_8641 = cljs.core.first.call(null,seq__8578_8635__$1);var ev__8184__auto___8642 = cljs.core.nth.call(null,vec__8583_8641,0,null);var func__8185__auto___8643 = cljs.core.nth.call(null,vec__8583_8641,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8642,func__8185__auto___8643);
{
var G__8644 = cljs.core.next.call(null,seq__8578_8635__$1);
var G__8645 = null;
var G__8646 = 0;
var G__8647 = 0;
seq__8578_8623 = G__8644;
chunk__8579_8624 = G__8645;
count__8580_8625 = G__8646;
i__8581_8626 = G__8647;
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
lt.plugins.gitlight.common_ui.classy_button = (function classy_button(cls,n,f,fun){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),n], null)], null));var seq__8590_8648 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return fun.call(null,n,f);
})], null)));var chunk__8591_8649 = null;var count__8592_8650 = 0;var i__8593_8651 = 0;while(true){
if((i__8593_8651 < count__8592_8650))
{var vec__8594_8652 = cljs.core._nth.call(null,chunk__8591_8649,i__8593_8651);var ev__8184__auto___8653 = cljs.core.nth.call(null,vec__8594_8652,0,null);var func__8185__auto___8654 = cljs.core.nth.call(null,vec__8594_8652,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8653,func__8185__auto___8654);
{
var G__8655 = seq__8590_8648;
var G__8656 = chunk__8591_8649;
var G__8657 = count__8592_8650;
var G__8658 = (i__8593_8651 + 1);
seq__8590_8648 = G__8655;
chunk__8591_8649 = G__8656;
count__8592_8650 = G__8657;
i__8593_8651 = G__8658;
continue;
}
} else
{var temp__4092__auto___8659 = cljs.core.seq.call(null,seq__8590_8648);if(temp__4092__auto___8659)
{var seq__8590_8660__$1 = temp__4092__auto___8659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8590_8660__$1))
{var c__7561__auto___8661 = cljs.core.chunk_first.call(null,seq__8590_8660__$1);{
var G__8662 = cljs.core.chunk_rest.call(null,seq__8590_8660__$1);
var G__8663 = c__7561__auto___8661;
var G__8664 = cljs.core.count.call(null,c__7561__auto___8661);
var G__8665 = 0;
seq__8590_8648 = G__8662;
chunk__8591_8649 = G__8663;
count__8592_8650 = G__8664;
i__8593_8651 = G__8665;
continue;
}
} else
{var vec__8595_8666 = cljs.core.first.call(null,seq__8590_8660__$1);var ev__8184__auto___8667 = cljs.core.nth.call(null,vec__8595_8666,0,null);var func__8185__auto___8668 = cljs.core.nth.call(null,vec__8595_8666,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8667,func__8185__auto___8668);
{
var G__8669 = cljs.core.next.call(null,seq__8590_8660__$1);
var G__8670 = null;
var G__8671 = 0;
var G__8672 = 0;
seq__8590_8648 = G__8669;
chunk__8591_8649 = G__8670;
count__8592_8650 = G__8671;
i__8593_8651 = G__8672;
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
lt.plugins.gitlight.common_ui.__GT_value = (function __GT_value(p__8596){var map__8598 = p__8596;var map__8598__$1 = ((cljs.core.seq_QMARK_.call(null,map__8598))?cljs.core.apply.call(null,cljs.core.hash_map,map__8598):map__8598);var value = cljs.core.get.call(null,map__8598__$1,new cljs.core.Keyword(null,"value","value",1125876963));if(cljs.core.not.call(null,value))
{return "";
} else
{return value;
}
});
lt.plugins.gitlight.common_ui.input = (function input(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.option","input.option",1495945867),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013)),new cljs.core.Keyword(null,"value","value",1125876963),crate.binding.bound.call(null,this$,lt.plugins.gitlight.common_ui.__GT_value)], null)], null));var seq__8605_8673 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){var me = this;return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.common_ui.common_input)),lt.util.dom.val.call(null,me));
})], null)));var chunk__8606_8674 = null;var count__8607_8675 = 0;var i__8608_8676 = 0;while(true){
if((i__8608_8676 < count__8607_8675))
{var vec__8609_8677 = cljs.core._nth.call(null,chunk__8606_8674,i__8608_8676);var ev__8184__auto___8678 = cljs.core.nth.call(null,vec__8609_8677,0,null);var func__8185__auto___8679 = cljs.core.nth.call(null,vec__8609_8677,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8678,func__8185__auto___8679);
{
var G__8680 = seq__8605_8673;
var G__8681 = chunk__8606_8674;
var G__8682 = count__8607_8675;
var G__8683 = (i__8608_8676 + 1);
seq__8605_8673 = G__8680;
chunk__8606_8674 = G__8681;
count__8607_8675 = G__8682;
i__8608_8676 = G__8683;
continue;
}
} else
{var temp__4092__auto___8684 = cljs.core.seq.call(null,seq__8605_8673);if(temp__4092__auto___8684)
{var seq__8605_8685__$1 = temp__4092__auto___8684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8605_8685__$1))
{var c__7561__auto___8686 = cljs.core.chunk_first.call(null,seq__8605_8685__$1);{
var G__8687 = cljs.core.chunk_rest.call(null,seq__8605_8685__$1);
var G__8688 = c__7561__auto___8686;
var G__8689 = cljs.core.count.call(null,c__7561__auto___8686);
var G__8690 = 0;
seq__8605_8673 = G__8687;
chunk__8606_8674 = G__8688;
count__8607_8675 = G__8689;
i__8608_8676 = G__8690;
continue;
}
} else
{var vec__8610_8691 = cljs.core.first.call(null,seq__8605_8685__$1);var ev__8184__auto___8692 = cljs.core.nth.call(null,vec__8610_8691,0,null);var func__8185__auto___8693 = cljs.core.nth.call(null,vec__8610_8691,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8692,func__8185__auto___8693);
{
var G__8694 = cljs.core.next.call(null,seq__8605_8685__$1);
var G__8695 = null;
var G__8696 = 0;
var G__8697 = 0;
seq__8605_8673 = G__8694;
chunk__8606_8674 = G__8695;
count__8607_8675 = G__8696;
i__8608_8676 = G__8697;
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
lt.plugins.gitlight.common_ui.make_output_tab_object = (function make_output_tab_object(window_name,k,ui_fun){var vec__8612 = lt.plugins.gitlight.common_ui.make_keywords.call(null,k);var tab_kwd = cljs.core.nth.call(null,vec__8612,0,null);var refresh_kwd = cljs.core.nth.call(null,vec__8612,1,null);var refresh_tab_kwd = cljs.core.nth.call(null,vec__8612,2,null);var command_output_kwd = cljs.core.nth.call(null,vec__8612,3,null);var refresh_results = lt.plugins.gitlight.common_ui.make_refresh_behavior.call(null,refresh_kwd,ui_fun);var tab_obj = lt.object.object_STAR_.call(null,tab_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gitlight-tab.out","gitlight-tab.out",864440478)], null),new cljs.core.Keyword(null,"name","name",1017277949),window_name,new cljs.core.Keyword(null,"results","results",2111450984),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),refresh_results], null),new cljs.core.Keyword(null,"init","init",1017141378),((function (vec__8612,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results){
return (function (this$){return ui_fun.call(null,this$);
});})(vec__8612,tab_kwd,refresh_kwd,refresh_tab_kwd,command_output_kwd,refresh_results))
);var tab = lt.object.create.call(null,tab_obj);var command_output = lt.plugins.gitlight.common_ui.make_refresh_tab_behavior.call(null,tab,refresh_tab_kwd);return lt.object.create.call(null,lt.object.object_STAR_.call(null,command_output_kwd,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gitlight-tab-output","gitlight-tab-output",1332604564),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_output], null)));
});
lt.plugins.gitlight.common_ui.make_button = (function make_button(n,f,fun){return lt.plugins.gitlight.common_ui.button.call(null,n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.make_classy_button = (function make_classy_button(n,f,fun){return lt.plugins.gitlight.common_ui.classy_button.call(null,[cljs.core.str(n)].join(''),n,f,((cljs.core._EQ_.call(null,fun,null))?lt.plugins.gitlight.common_ui.not_implemented_popup:fun));
});
lt.plugins.gitlight.common_ui.not_implemented_popup = (function not_implemented_popup(n,f){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Not yet implemented...",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("perform action "),cljs.core.str(n),cljs.core.str(" on "),cljs.core.str(f)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.gitlight.common_ui.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8698 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8698))
{var ts_8699 = temp__4092__auto___8698;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8699))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8699);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.common-ui","on-close-destroy","lt.plugins.gitlight.common-ui/on-close-destroy",3324075689),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.common_ui.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
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
return (function iter__17108(s__17109){return (new cljs.core.LazySeq(null,((function (output){
return (function (){var s__17109__$1 = s__17109;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17109__$1);if(temp__4092__auto__)
{var s__17109__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17109__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__17109__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__17111 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__17110 = 0;while(true){
if((i__17110 < size__7529__auto__))
{var file = cljs.core._nth.call(null,c__7528__auto__,i__17110);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);cljs.core.chunk_append.call(null,b__17111,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__17110,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function iter__17408(s__17409){return (new cljs.core.LazySeq(null,((function (i__17110,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17409__$1 = s__17409;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17409__$1);if(temp__4092__auto____$1)
{var s__17409__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17409__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__17409__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__17411 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__17410 = 0;while(true){
if((i__17410 < size__7529__auto____$1))
{var changes_group = cljs.core._nth.call(null,c__7528__auto____$1,i__17410);cljs.core.chunk_append.call(null,b__17411,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__17410,i__17110,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function iter__17484(s__17485){return (new cljs.core.LazySeq(null,((function (i__17410,i__17110,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17485__$1 = s__17485;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__17485__$1);if(temp__4092__auto____$2)
{var s__17485__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__17485__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__17485__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__17487 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__17486 = 0;while(true){
if((i__17486 < size__7529__auto____$2))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$2,i__17486);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__17487,(function (){var iter__7530__auto__ = ((function (i__17486,i__17410,i__17110,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__17487,s__17485__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function iter__17504(s__17505){return (new cljs.core.LazySeq(null,((function (i__17486,i__17410,i__17110,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__17487,s__17485__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17505__$1 = s__17505;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__17505__$1);if(temp__4092__auto____$3)
{var s__17505__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__17505__$2))
{var c__7528__auto____$3 = cljs.core.chunk_first.call(null,s__17505__$2);var size__7529__auto____$3 = cljs.core.count.call(null,c__7528__auto____$3);var b__17507 = cljs.core.chunk_buffer.call(null,size__7529__auto____$3);if((function (){var i__17506 = 0;while(true){
if((i__17506 < size__7529__auto____$3))
{var vec__17510 = cljs.core._nth.call(null,c__7528__auto____$3,i__17506);var left = cljs.core.nth.call(null,vec__17510,0,null);var right = cljs.core.nth.call(null,vec__17510,1,null);cljs.core.chunk_append.call(null,b__17507,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__17722 = (i__17506 + 1);
i__17506 = G__17722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17507),iter__17504.call(null,cljs.core.chunk_rest.call(null,s__17505__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17507),null);
}
} else
{var vec__17511 = cljs.core.first.call(null,s__17505__$2);var left = cljs.core.nth.call(null,vec__17511,0,null);var right = cljs.core.nth.call(null,vec__17511,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__17504.call(null,cljs.core.rest.call(null,s__17505__$2)));
}
} else
{return null;
}
break;
}
});})(i__17486,i__17410,i__17110,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__17487,s__17485__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(i__17486,i__17410,i__17110,columned,c,columns,line_group,c__7528__auto____$2,size__7529__auto____$2,b__17487,s__17485__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__17723 = (i__17486 + 1);
i__17486 = G__17723;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17487),iter__17484.call(null,cljs.core.chunk_rest.call(null,s__17485__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17487),null);
}
} else
{var line_group = cljs.core.first.call(null,s__17485__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__17410,i__17110,columned,c,columns,line_group,s__17485__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function iter__17512(s__17513){return (new cljs.core.LazySeq(null,((function (i__17410,i__17110,columned,c,columns,line_group,s__17485__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17513__$1 = s__17513;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__17513__$1);if(temp__4092__auto____$3)
{var s__17513__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__17513__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__17513__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__17515 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__17514 = 0;while(true){
if((i__17514 < size__7529__auto____$2))
{var vec__17518 = cljs.core._nth.call(null,c__7528__auto____$2,i__17514);var left = cljs.core.nth.call(null,vec__17518,0,null);var right = cljs.core.nth.call(null,vec__17518,1,null);cljs.core.chunk_append.call(null,b__17515,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__17724 = (i__17514 + 1);
i__17514 = G__17724;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17515),iter__17512.call(null,cljs.core.chunk_rest.call(null,s__17513__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17515),null);
}
} else
{var vec__17519 = cljs.core.first.call(null,s__17513__$2);var left = cljs.core.nth.call(null,vec__17519,0,null);var right = cljs.core.nth.call(null,vec__17519,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__17512.call(null,cljs.core.rest.call(null,s__17513__$2)));
}
} else
{return null;
}
break;
}
});})(i__17410,i__17110,columned,c,columns,line_group,s__17485__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(i__17410,i__17110,columned,c,columns,line_group,s__17485__$2,temp__4092__auto____$2,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__17484.call(null,cljs.core.rest.call(null,s__17485__$2)));
}
} else
{return null;
}
break;
}
});})(i__17410,i__17110,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(i__17410,i__17110,changes_group,c__7528__auto____$1,size__7529__auto____$1,b__17411,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__17725 = (i__17410 + 1);
i__17410 = G__17725;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17411),iter__17408.call(null,cljs.core.chunk_rest.call(null,s__17409__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17411),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__17409__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__17110,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function iter__17520(s__17521){return (new cljs.core.LazySeq(null,((function (i__17110,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17521__$1 = s__17521;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__17521__$1);if(temp__4092__auto____$2)
{var s__17521__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__17521__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__17521__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__17523 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__17522 = 0;while(true){
if((i__17522 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__17522);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__17523,(function (){var iter__7530__auto__ = ((function (i__17522,i__17110,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__17523,s__17521__$2,temp__4092__auto____$2,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function iter__17540(s__17541){return (new cljs.core.LazySeq(null,((function (i__17522,i__17110,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__17523,s__17521__$2,temp__4092__auto____$2,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17541__$1 = s__17541;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__17541__$1);if(temp__4092__auto____$3)
{var s__17541__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__17541__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__17541__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__17543 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__17542 = 0;while(true){
if((i__17542 < size__7529__auto____$2))
{var vec__17546 = cljs.core._nth.call(null,c__7528__auto____$2,i__17542);var left = cljs.core.nth.call(null,vec__17546,0,null);var right = cljs.core.nth.call(null,vec__17546,1,null);cljs.core.chunk_append.call(null,b__17543,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__17726 = (i__17542 + 1);
i__17542 = G__17726;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17543),iter__17540.call(null,cljs.core.chunk_rest.call(null,s__17541__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17543),null);
}
} else
{var vec__17547 = cljs.core.first.call(null,s__17541__$2);var left = cljs.core.nth.call(null,vec__17547,0,null);var right = cljs.core.nth.call(null,vec__17547,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__17540.call(null,cljs.core.rest.call(null,s__17541__$2)));
}
} else
{return null;
}
break;
}
});})(i__17522,i__17110,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__17523,s__17521__$2,temp__4092__auto____$2,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(i__17522,i__17110,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__17523,s__17521__$2,temp__4092__auto____$2,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__17727 = (i__17522 + 1);
i__17522 = G__17727;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17523),iter__17520.call(null,cljs.core.chunk_rest.call(null,s__17521__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17523),null);
}
} else
{var line_group = cljs.core.first.call(null,s__17521__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__17110,columned,c,columns,line_group,s__17521__$2,temp__4092__auto____$2,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function iter__17548(s__17549){return (new cljs.core.LazySeq(null,((function (i__17110,columned,c,columns,line_group,s__17521__$2,temp__4092__auto____$2,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17549__$1 = s__17549;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__17549__$1);if(temp__4092__auto____$3)
{var s__17549__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__17549__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__17549__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__17551 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__17550 = 0;while(true){
if((i__17550 < size__7529__auto____$1))
{var vec__17554 = cljs.core._nth.call(null,c__7528__auto____$1,i__17550);var left = cljs.core.nth.call(null,vec__17554,0,null);var right = cljs.core.nth.call(null,vec__17554,1,null);cljs.core.chunk_append.call(null,b__17551,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__17728 = (i__17550 + 1);
i__17550 = G__17728;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17551),iter__17548.call(null,cljs.core.chunk_rest.call(null,s__17549__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17551),null);
}
} else
{var vec__17555 = cljs.core.first.call(null,s__17549__$2);var left = cljs.core.nth.call(null,vec__17555,0,null);var right = cljs.core.nth.call(null,vec__17555,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__17548.call(null,cljs.core.rest.call(null,s__17549__$2)));
}
} else
{return null;
}
break;
}
});})(i__17110,columned,c,columns,line_group,s__17521__$2,temp__4092__auto____$2,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(i__17110,columned,c,columns,line_group,s__17521__$2,temp__4092__auto____$2,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__17520.call(null,cljs.core.rest.call(null,s__17521__$2)));
}
} else
{return null;
}
break;
}
});})(i__17110,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(i__17110,changes_group,s__17409__$2,temp__4092__auto____$1,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__17408.call(null,cljs.core.rest.call(null,s__17409__$2)));
}
} else
{return null;
}
break;
}
});})(i__17110,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(i__17110,filename,file_diff,file,c__7528__auto__,size__7529__auto__,b__17111,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null));
{
var G__17729 = (i__17110 + 1);
i__17110 = G__17729;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17111),iter__17108.call(null,cljs.core.chunk_rest.call(null,s__17109__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17111),null);
}
} else
{var file = cljs.core.first.call(null,s__17109__$2);var filename = new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(file);var file_diff = new cljs.core.Keyword(null,"file-diff","file-diff",3945937192).cljs$core$IFn$_invoke$arity$1(file);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.header","td.header",939151165),new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"left","left",1017222009).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"right","right",1122416014).cljs$core$IFn$_invoke$arity$1(file_diff)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function iter__17556(s__17557){return (new cljs.core.LazySeq(null,((function (filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17557__$1 = s__17557;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17557__$1);if(temp__4092__auto____$1)
{var s__17557__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17557__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__17557__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__17559 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__17558 = 0;while(true){
if((i__17558 < size__7529__auto__))
{var changes_group = cljs.core._nth.call(null,c__7528__auto__,i__17558);cljs.core.chunk_append.call(null,b__17559,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (i__17558,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function iter__17632(s__17633){return (new cljs.core.LazySeq(null,((function (i__17558,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17633__$1 = s__17633;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__17633__$1);if(temp__4092__auto____$2)
{var s__17633__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__17633__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__17633__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__17635 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__17634 = 0;while(true){
if((i__17634 < size__7529__auto____$1))
{var line_group = cljs.core._nth.call(null,c__7528__auto____$1,i__17634);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__17635,(function (){var iter__7530__auto__ = ((function (i__17634,i__17558,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__17635,s__17633__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function iter__17652(s__17653){return (new cljs.core.LazySeq(null,((function (i__17634,i__17558,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__17635,s__17633__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17653__$1 = s__17653;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__17653__$1);if(temp__4092__auto____$3)
{var s__17653__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__17653__$2))
{var c__7528__auto____$2 = cljs.core.chunk_first.call(null,s__17653__$2);var size__7529__auto____$2 = cljs.core.count.call(null,c__7528__auto____$2);var b__17655 = cljs.core.chunk_buffer.call(null,size__7529__auto____$2);if((function (){var i__17654 = 0;while(true){
if((i__17654 < size__7529__auto____$2))
{var vec__17658 = cljs.core._nth.call(null,c__7528__auto____$2,i__17654);var left = cljs.core.nth.call(null,vec__17658,0,null);var right = cljs.core.nth.call(null,vec__17658,1,null);cljs.core.chunk_append.call(null,b__17655,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__17730 = (i__17654 + 1);
i__17654 = G__17730;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17655),iter__17652.call(null,cljs.core.chunk_rest.call(null,s__17653__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17655),null);
}
} else
{var vec__17659 = cljs.core.first.call(null,s__17653__$2);var left = cljs.core.nth.call(null,vec__17659,0,null);var right = cljs.core.nth.call(null,vec__17659,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__17652.call(null,cljs.core.rest.call(null,s__17653__$2)));
}
} else
{return null;
}
break;
}
});})(i__17634,i__17558,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__17635,s__17633__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(i__17634,i__17558,columned,c,columns,line_group,c__7528__auto____$1,size__7529__auto____$1,b__17635,s__17633__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__17731 = (i__17634 + 1);
i__17634 = G__17731;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17635),iter__17632.call(null,cljs.core.chunk_rest.call(null,s__17633__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17635),null);
}
} else
{var line_group = cljs.core.first.call(null,s__17633__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (i__17558,columned,c,columns,line_group,s__17633__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function iter__17660(s__17661){return (new cljs.core.LazySeq(null,((function (i__17558,columned,c,columns,line_group,s__17633__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17661__$1 = s__17661;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__17661__$1);if(temp__4092__auto____$3)
{var s__17661__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__17661__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__17661__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__17663 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__17662 = 0;while(true){
if((i__17662 < size__7529__auto____$1))
{var vec__17666 = cljs.core._nth.call(null,c__7528__auto____$1,i__17662);var left = cljs.core.nth.call(null,vec__17666,0,null);var right = cljs.core.nth.call(null,vec__17666,1,null);cljs.core.chunk_append.call(null,b__17663,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__17732 = (i__17662 + 1);
i__17662 = G__17732;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17663),iter__17660.call(null,cljs.core.chunk_rest.call(null,s__17661__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17663),null);
}
} else
{var vec__17667 = cljs.core.first.call(null,s__17661__$2);var left = cljs.core.nth.call(null,vec__17667,0,null);var right = cljs.core.nth.call(null,vec__17667,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__17660.call(null,cljs.core.rest.call(null,s__17661__$2)));
}
} else
{return null;
}
break;
}
});})(i__17558,columned,c,columns,line_group,s__17633__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(i__17558,columned,c,columns,line_group,s__17633__$2,temp__4092__auto____$2,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__17632.call(null,cljs.core.rest.call(null,s__17633__$2)));
}
} else
{return null;
}
break;
}
});})(i__17558,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(i__17558,changes_group,c__7528__auto__,size__7529__auto__,b__17559,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()));
{
var G__17733 = (i__17558 + 1);
i__17558 = G__17733;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17559),iter__17556.call(null,cljs.core.chunk_rest.call(null,s__17557__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17559),null);
}
} else
{var changes_group = cljs.core.first.call(null,s__17557__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.where","tr.where",842683625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",1963568188),2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(changes_group)], null)], null)], null),(function (){var iter__7530__auto__ = ((function (changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function iter__17668(s__17669){return (new cljs.core.LazySeq(null,((function (changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17669__$1 = s__17669;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__17669__$1);if(temp__4092__auto____$2)
{var s__17669__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__17669__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__17669__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__17671 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__17670 = 0;while(true){
if((i__17670 < size__7529__auto__))
{var line_group = cljs.core._nth.call(null,c__7528__auto__,i__17670);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);cljs.core.chunk_append.call(null,b__17671,(function (){var iter__7530__auto__ = ((function (i__17670,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__17671,s__17669__$2,temp__4092__auto____$2,changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function iter__17688(s__17689){return (new cljs.core.LazySeq(null,((function (i__17670,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__17671,s__17669__$2,temp__4092__auto____$2,changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17689__$1 = s__17689;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__17689__$1);if(temp__4092__auto____$3)
{var s__17689__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__17689__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__17689__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__17691 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__17690 = 0;while(true){
if((i__17690 < size__7529__auto____$1))
{var vec__17694 = cljs.core._nth.call(null,c__7528__auto____$1,i__17690);var left = cljs.core.nth.call(null,vec__17694,0,null);var right = cljs.core.nth.call(null,vec__17694,1,null);cljs.core.chunk_append.call(null,b__17691,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__17734 = (i__17690 + 1);
i__17690 = G__17734;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17691),iter__17688.call(null,cljs.core.chunk_rest.call(null,s__17689__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17691),null);
}
} else
{var vec__17695 = cljs.core.first.call(null,s__17689__$2);var left = cljs.core.nth.call(null,vec__17695,0,null);var right = cljs.core.nth.call(null,vec__17695,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__17688.call(null,cljs.core.rest.call(null,s__17689__$2)));
}
} else
{return null;
}
break;
}
});})(i__17670,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__17671,s__17669__$2,temp__4092__auto____$2,changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(i__17670,columned,c,columns,line_group,c__7528__auto__,size__7529__auto__,b__17671,s__17669__$2,temp__4092__auto____$2,changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})());
{
var G__17735 = (i__17670 + 1);
i__17670 = G__17735;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17671),iter__17668.call(null,cljs.core.chunk_rest.call(null,s__17669__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17671),null);
}
} else
{var line_group = cljs.core.first.call(null,s__17669__$2);var columned = lt.plugins.gitlight.diff.columner.call(null,line_group);var c = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(columned);var columns = new cljs.core.Keyword(null,"cols","cols",1016963685).cljs$core$IFn$_invoke$arity$1(columned);return cljs.core.cons.call(null,(function (){var iter__7530__auto__ = ((function (columned,c,columns,line_group,s__17669__$2,temp__4092__auto____$2,changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function iter__17696(s__17697){return (new cljs.core.LazySeq(null,((function (columned,c,columns,line_group,s__17669__$2,temp__4092__auto____$2,changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output){
return (function (){var s__17697__$1 = s__17697;while(true){
var temp__4092__auto____$3 = cljs.core.seq.call(null,s__17697__$1);if(temp__4092__auto____$3)
{var s__17697__$2 = temp__4092__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__17697__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__17697__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__17699 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__17698 = 0;while(true){
if((i__17698 < size__7529__auto__))
{var vec__17702 = cljs.core._nth.call(null,c__7528__auto__,i__17698);var left = cljs.core.nth.call(null,vec__17702,0,null);var right = cljs.core.nth.call(null,vec__17702,1,null);cljs.core.chunk_append.call(null,b__17699,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null));
{
var G__17736 = (i__17698 + 1);
i__17698 = G__17736;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17699),iter__17696.call(null,cljs.core.chunk_rest.call(null,s__17697__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17699),null);
}
} else
{var vec__17703 = cljs.core.first.call(null,s__17697__$2);var left = cljs.core.nth.call(null,vec__17703,0,null);var right = cljs.core.nth.call(null,vec__17703,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.left","td.left",3793830967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),left], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.right","td.right",1297947792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),right], null)], null)], null),iter__17696.call(null,cljs.core.rest.call(null,s__17697__$2)));
}
} else
{return null;
}
break;
}
});})(columned,c,columns,line_group,s__17669__$2,temp__4092__auto____$2,changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(columned,c,columns,line_group,s__17669__$2,temp__4092__auto____$2,changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,columns);
})(),iter__17668.call(null,cljs.core.rest.call(null,s__17669__$2)));
}
} else
{return null;
}
break;
}
});})(changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(changes_group,s__17557__$2,temp__4092__auto____$1,filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(changes_group));
})()),iter__17556.call(null,cljs.core.rest.call(null,s__17557__$2)));
}
} else
{return null;
}
break;
}
});})(filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
,null,null));
});})(filename,file_diff,file,s__17109__$2,temp__4092__auto__,output))
;return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(file_diff));
})()], null),iter__17108.call(null,cljs.core.rest.call(null,s__17109__$2)));
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
})());var seq__17704_17737 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__17705_17738 = null;var count__17706_17739 = 0;var i__17707_17740 = 0;while(true){
if((i__17707_17740 < count__17706_17739))
{var vec__17708_17741 = cljs.core._nth.call(null,chunk__17705_17738,i__17707_17740);var ev__8184__auto___17742 = cljs.core.nth.call(null,vec__17708_17741,0,null);var func__8185__auto___17743 = cljs.core.nth.call(null,vec__17708_17741,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___17742,func__8185__auto___17743);
{
var G__17744 = seq__17704_17737;
var G__17745 = chunk__17705_17738;
var G__17746 = count__17706_17739;
var G__17747 = (i__17707_17740 + 1);
seq__17704_17737 = G__17744;
chunk__17705_17738 = G__17745;
count__17706_17739 = G__17746;
i__17707_17740 = G__17747;
continue;
}
} else
{var temp__4092__auto___17748 = cljs.core.seq.call(null,seq__17704_17737);if(temp__4092__auto___17748)
{var seq__17704_17749__$1 = temp__4092__auto___17748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17704_17749__$1))
{var c__7561__auto___17750 = cljs.core.chunk_first.call(null,seq__17704_17749__$1);{
var G__17751 = cljs.core.chunk_rest.call(null,seq__17704_17749__$1);
var G__17752 = c__7561__auto___17750;
var G__17753 = cljs.core.count.call(null,c__7561__auto___17750);
var G__17754 = 0;
seq__17704_17737 = G__17751;
chunk__17705_17738 = G__17752;
count__17706_17739 = G__17753;
i__17707_17740 = G__17754;
continue;
}
} else
{var vec__17709_17755 = cljs.core.first.call(null,seq__17704_17749__$1);var ev__8184__auto___17756 = cljs.core.nth.call(null,vec__17709_17755,0,null);var func__8185__auto___17757 = cljs.core.nth.call(null,vec__17709_17755,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___17756,func__8185__auto___17757);
{
var G__17758 = cljs.core.next.call(null,seq__17704_17749__$1);
var G__17759 = null;
var G__17760 = 0;
var G__17761 = 0;
seq__17704_17737 = G__17758;
chunk__17705_17738 = G__17759;
count__17706_17739 = G__17760;
i__17707_17740 = G__17761;
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
lt.plugins.gitlight.diff.separate = (function separate(fun,coll){return cljs.core.reduce.call(null,(function (p__17712,line){var vec__17713 = p__17712;var left = cljs.core.nth.call(null,vec__17713,0,null);var right = cljs.core.nth.call(null,vec__17713,1,null);if(cljs.core.truth_(fun.call(null,line)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,left,line),right], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,cljs.core.conj.call(null,right,line)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),coll);
});
lt.plugins.gitlight.diff.columner = (function columner(lines){if(cljs.core._EQ_.call(null," ",cljs.core.first.call(null,cljs.core.first.call(null,lines))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"context",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,lines,lines)], null);
} else
{var vec__17716 = lt.plugins.gitlight.diff.separate.call(null,(function (p1__17714_SHARP_){return cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p1__17714_SHARP_));
}),lines);var left = cljs.core.nth.call(null,vec__17716,0,null);var right = cljs.core.nth.call(null,vec__17716,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"changed",new cljs.core.Keyword(null,"cols","cols",1016963685),lt.plugins.gitlight.diff.breaker.call(null,left,right)], null);
}
});
lt.plugins.gitlight.diff.split_into_headered_groups = (function split_into_headered_groups(lines,fun,result_fun,headkey,contkey){if(!(cljs.core.empty_QMARK_.call(null,lines)))
{var fst = cljs.core.first.call(null,lines);var vec__17718 = cljs.core.split_with.call(null,fun,cljs.core.rest.call(null,lines));var content = cljs.core.nth.call(null,vec__17718,0,null);var leftovers = cljs.core.nth.call(null,vec__17718,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([headkey,fst,contkey,result_fun.call(null,content)], true, false),split_into_headered_groups.call(null,leftovers,fun,result_fun,headkey,contkey));
} else
{return null;
}
});
lt.plugins.gitlight.diff.split_into_groups = (function split_into_groups(lines){return lt.plugins.gitlight.diff.split_into_headered_groups.call(null,lines,(function (x){return cljs.core.not_EQ_.call(null,"@",cljs.core.first.call(null,x));
}),(function (x){return cljs.core.partition_by.call(null,(function (p1__17719_SHARP_){return cljs.core._EQ_.call(null," ",cljs.core.first.call(null,p1__17719_SHARP_));
}),x);
}),new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.Keyword(null,"content","content",1965434859));
});
lt.plugins.gitlight.diff.parse_single_git_diff = (function parse_single_git_diff(data){var vec__17721 = cljs.core.take.call(null,3,data);var header = cljs.core.nth.call(null,vec__17721,0,null);var left = cljs.core.nth.call(null,vec__17721,1,null);var right = cljs.core.nth.call(null,vec__17721,2,null);var groups = lt.plugins.gitlight.diff.split_into_groups.call(null,cljs.core.drop.call(null,3,data));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",4087600639),header,new cljs.core.Keyword(null,"left","left",1017222009),left,new cljs.core.Keyword(null,"right","right",1122416014),right,new cljs.core.Keyword(null,"groups","groups",4071411014),groups], null);
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
lt.plugins.gitlight.status.ui.file = (function file(g_name,p__10616){var vec__10632 = p__10616;var f = cljs.core.nth.call(null,vec__10632,0,null);var t = cljs.core.nth.call(null,vec__10632,1,null);var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,t)], null),lt.plugins.gitlight.status.ui.make_button_and_update.call(null,f,f,lt.plugins.gitlight.status.ui.open_file),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10633(s__10634){return (new cljs.core.LazySeq(null,(function (){var s__10634__$1 = s__10634;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10634__$1);if(temp__4092__auto__)
{var s__10634__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10634__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10634__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10636 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10635 = 0;while(true){
if((i__10635 < size__7529__auto__))
{var vec__10639 = cljs.core._nth.call(null,c__7528__auto__,i__10635);var bt = cljs.core.nth.call(null,vec__10639,0,null);var fun = cljs.core.nth.call(null,vec__10639,1,null);cljs.core.chunk_append.call(null,b__10636,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun));
{
var G__10715 = (i__10635 + 1);
i__10635 = G__10715;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10636),iter__10633.call(null,cljs.core.chunk_rest.call(null,s__10634__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10636),null);
}
} else
{var vec__10640 = cljs.core.first.call(null,s__10634__$2);var bt = cljs.core.nth.call(null,vec__10640,0,null);var fun = cljs.core.nth.call(null,vec__10640,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bt,f,fun),iter__10633.call(null,cljs.core.rest.call(null,s__10634__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,g_name.call(null,lt.plugins.gitlight.status.ui.file_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null)], null));var seq__10641_10716 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10642_10717 = null;var count__10643_10718 = 0;var i__10644_10719 = 0;while(true){
if((i__10644_10719 < count__10643_10718))
{var vec__10645_10720 = cljs.core._nth.call(null,chunk__10642_10717,i__10644_10719);var ev__8184__auto___10721 = cljs.core.nth.call(null,vec__10645_10720,0,null);var func__8185__auto___10722 = cljs.core.nth.call(null,vec__10645_10720,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10721,func__8185__auto___10722);
{
var G__10723 = seq__10641_10716;
var G__10724 = chunk__10642_10717;
var G__10725 = count__10643_10718;
var G__10726 = (i__10644_10719 + 1);
seq__10641_10716 = G__10723;
chunk__10642_10717 = G__10724;
count__10643_10718 = G__10725;
i__10644_10719 = G__10726;
continue;
}
} else
{var temp__4092__auto___10727 = cljs.core.seq.call(null,seq__10641_10716);if(temp__4092__auto___10727)
{var seq__10641_10728__$1 = temp__4092__auto___10727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10641_10728__$1))
{var c__7561__auto___10729 = cljs.core.chunk_first.call(null,seq__10641_10728__$1);{
var G__10730 = cljs.core.chunk_rest.call(null,seq__10641_10728__$1);
var G__10731 = c__7561__auto___10729;
var G__10732 = cljs.core.count.call(null,c__7561__auto___10729);
var G__10733 = 0;
seq__10641_10716 = G__10730;
chunk__10642_10717 = G__10731;
count__10643_10718 = G__10732;
i__10644_10719 = G__10733;
continue;
}
} else
{var vec__10646_10734 = cljs.core.first.call(null,seq__10641_10728__$1);var ev__8184__auto___10735 = cljs.core.nth.call(null,vec__10646_10734,0,null);var func__8185__auto___10736 = cljs.core.nth.call(null,vec__10646_10734,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10735,func__8185__auto___10736);
{
var G__10737 = cljs.core.next.call(null,seq__10641_10728__$1);
var G__10738 = null;
var G__10739 = 0;
var G__10740 = 0;
seq__10641_10716 = G__10737;
chunk__10642_10717 = G__10738;
count__10643_10718 = G__10739;
i__10644_10719 = G__10740;
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
lt.plugins.gitlight.status.ui.group = (function group(g_name,files){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,g_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),g_name.call(null,lt.plugins.gitlight.status.ui.group_names)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files","ul.files",1539775442),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.status.ui.file,g_name),files)], null)], null));var seq__10653_10741 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10654_10742 = null;var count__10655_10743 = 0;var i__10656_10744 = 0;while(true){
if((i__10656_10744 < count__10655_10743))
{var vec__10657_10745 = cljs.core._nth.call(null,chunk__10654_10742,i__10656_10744);var ev__8184__auto___10746 = cljs.core.nth.call(null,vec__10657_10745,0,null);var func__8185__auto___10747 = cljs.core.nth.call(null,vec__10657_10745,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10746,func__8185__auto___10747);
{
var G__10748 = seq__10653_10741;
var G__10749 = chunk__10654_10742;
var G__10750 = count__10655_10743;
var G__10751 = (i__10656_10744 + 1);
seq__10653_10741 = G__10748;
chunk__10654_10742 = G__10749;
count__10655_10743 = G__10750;
i__10656_10744 = G__10751;
continue;
}
} else
{var temp__4092__auto___10752 = cljs.core.seq.call(null,seq__10653_10741);if(temp__4092__auto___10752)
{var seq__10653_10753__$1 = temp__4092__auto___10752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10653_10753__$1))
{var c__7561__auto___10754 = cljs.core.chunk_first.call(null,seq__10653_10753__$1);{
var G__10755 = cljs.core.chunk_rest.call(null,seq__10653_10753__$1);
var G__10756 = c__7561__auto___10754;
var G__10757 = cljs.core.count.call(null,c__7561__auto___10754);
var G__10758 = 0;
seq__10653_10741 = G__10755;
chunk__10654_10742 = G__10756;
count__10655_10743 = G__10757;
i__10656_10744 = G__10758;
continue;
}
} else
{var vec__10658_10759 = cljs.core.first.call(null,seq__10653_10753__$1);var ev__8184__auto___10760 = cljs.core.nth.call(null,vec__10658_10759,0,null);var func__8185__auto___10761 = cljs.core.nth.call(null,vec__10658_10759,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10760,func__8185__auto___10761);
{
var G__10762 = cljs.core.next.call(null,seq__10653_10753__$1);
var G__10763 = null;
var G__10764 = 0;
var G__10765 = 0;
seq__10653_10741 = G__10762;
chunk__10654_10742 = G__10763;
count__10655_10743 = G__10764;
i__10656_10744 = G__10765;
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
}))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nobr","nobr",1017291075),"Root: ",git_root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__7530__auto__ = (function iter__10681(s__10682){return (new cljs.core.LazySeq(null,(function (){var s__10682__$1 = s__10682;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10682__$1);if(temp__4092__auto__)
{var s__10682__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10682__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10682__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10684 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10683 = 0;while(true){
if((i__10683 < size__7529__auto__))
{var vec__10687 = cljs.core._nth.call(null,c__7528__auto__,i__10683);var bname = cljs.core.nth.call(null,vec__10687,0,null);var fun = cljs.core.nth.call(null,vec__10687,1,null);cljs.core.chunk_append.call(null,b__10684,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun));
{
var G__10766 = (i__10683 + 1);
i__10683 = G__10766;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10684),iter__10681.call(null,cljs.core.chunk_rest.call(null,s__10682__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10684),null);
}
} else
{var vec__10688 = cljs.core.first.call(null,s__10682__$2);var bname = cljs.core.nth.call(null,vec__10688,0,null);var fun = cljs.core.nth.call(null,vec__10688,1,null);return cljs.core.cons.call(null,lt.plugins.gitlight.status.ui.make_button_and_update.call(null,bname,git_root,fun),iter__10681.call(null,cljs.core.rest.call(null,s__10682__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,cljs.core.vals.call(null,lt.plugins.gitlight.status.ui.repo_ops));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7530__auto__ = (function iter__10689(s__10690){return (new cljs.core.LazySeq(null,(function (){var s__10690__$1 = s__10690;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10690__$1);if(temp__4092__auto__)
{var s__10690__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10690__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10690__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10692 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10691 = 0;while(true){
if((i__10691 < size__7529__auto__))
{var vec__10695 = cljs.core._nth.call(null,c__7528__auto__,i__10691);var g = cljs.core.nth.call(null,vec__10695,0,null);var fs = cljs.core.nth.call(null,vec__10695,1,null);cljs.core.chunk_append.call(null,b__10692,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null));
{
var G__10767 = (i__10691 + 1);
i__10691 = G__10767;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10692),iter__10689.call(null,cljs.core.chunk_rest.call(null,s__10690__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10692),null);
}
} else
{var vec__10696 = cljs.core.first.call(null,s__10690__$2);var g = cljs.core.nth.call(null,vec__10696,0,null);var fs = cljs.core.nth.call(null,vec__10696,1,null);return cljs.core.cons.call(null,((!((cljs.core.count.call(null,fs) === 0)))?lt.plugins.gitlight.status.ui.group.call(null,g,fs):null),iter__10689.call(null,cljs.core.rest.call(null,s__10690__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,this$);
})()], null)], null));var seq__10697_10768 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10698_10769 = null;var count__10699_10770 = 0;var i__10700_10771 = 0;while(true){
if((i__10700_10771 < count__10699_10770))
{var vec__10701_10772 = cljs.core._nth.call(null,chunk__10698_10769,i__10700_10771);var ev__8184__auto___10773 = cljs.core.nth.call(null,vec__10701_10772,0,null);var func__8185__auto___10774 = cljs.core.nth.call(null,vec__10701_10772,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10773,func__8185__auto___10774);
{
var G__10775 = seq__10697_10768;
var G__10776 = chunk__10698_10769;
var G__10777 = count__10699_10770;
var G__10778 = (i__10700_10771 + 1);
seq__10697_10768 = G__10775;
chunk__10698_10769 = G__10776;
count__10699_10770 = G__10777;
i__10700_10771 = G__10778;
continue;
}
} else
{var temp__4092__auto___10779 = cljs.core.seq.call(null,seq__10697_10768);if(temp__4092__auto___10779)
{var seq__10697_10780__$1 = temp__4092__auto___10779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10697_10780__$1))
{var c__7561__auto___10781 = cljs.core.chunk_first.call(null,seq__10697_10780__$1);{
var G__10782 = cljs.core.chunk_rest.call(null,seq__10697_10780__$1);
var G__10783 = c__7561__auto___10781;
var G__10784 = cljs.core.count.call(null,c__7561__auto___10781);
var G__10785 = 0;
seq__10697_10768 = G__10782;
chunk__10698_10769 = G__10783;
count__10699_10770 = G__10784;
i__10700_10771 = G__10785;
continue;
}
} else
{var vec__10702_10786 = cljs.core.first.call(null,seq__10697_10780__$1);var ev__8184__auto___10787 = cljs.core.nth.call(null,vec__10702_10786,0,null);var func__8185__auto___10788 = cljs.core.nth.call(null,vec__10702_10786,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10787,func__8185__auto___10788);
{
var G__10789 = cljs.core.next.call(null,seq__10697_10780__$1);
var G__10790 = null;
var G__10791 = 0;
var G__10792 = 0;
seq__10697_10768 = G__10789;
chunk__10698_10769 = G__10790;
count__10699_10770 = G__10791;
i__10700_10771 = G__10792;
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
lt.plugins.gitlight.status.ui.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gitlight-status","div.gitlight-status",3344611696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),"Waiting for git..."], null));var seq__10709_10793 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10710_10794 = null;var count__10711_10795 = 0;var i__10712_10796 = 0;while(true){
if((i__10712_10796 < count__10711_10795))
{var vec__10713_10797 = cljs.core._nth.call(null,chunk__10710_10794,i__10712_10796);var ev__8184__auto___10798 = cljs.core.nth.call(null,vec__10713_10797,0,null);var func__8185__auto___10799 = cljs.core.nth.call(null,vec__10713_10797,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10798,func__8185__auto___10799);
{
var G__10800 = seq__10709_10793;
var G__10801 = chunk__10710_10794;
var G__10802 = count__10711_10795;
var G__10803 = (i__10712_10796 + 1);
seq__10709_10793 = G__10800;
chunk__10710_10794 = G__10801;
count__10711_10795 = G__10802;
i__10712_10796 = G__10803;
continue;
}
} else
{var temp__4092__auto___10804 = cljs.core.seq.call(null,seq__10709_10793);if(temp__4092__auto___10804)
{var seq__10709_10805__$1 = temp__4092__auto___10804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10709_10805__$1))
{var c__7561__auto___10806 = cljs.core.chunk_first.call(null,seq__10709_10805__$1);{
var G__10807 = cljs.core.chunk_rest.call(null,seq__10709_10805__$1);
var G__10808 = c__7561__auto___10806;
var G__10809 = cljs.core.count.call(null,c__7561__auto___10806);
var G__10810 = 0;
seq__10709_10793 = G__10807;
chunk__10710_10794 = G__10808;
count__10711_10795 = G__10809;
i__10712_10796 = G__10810;
continue;
}
} else
{var vec__10714_10811 = cljs.core.first.call(null,seq__10709_10805__$1);var ev__8184__auto___10812 = cljs.core.nth.call(null,vec__10714_10811,0,null);var func__8185__auto___10813 = cljs.core.nth.call(null,vec__10714_10811,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10812,func__8185__auto___10813);
{
var G__10814 = cljs.core.next.call(null,seq__10709_10805__$1);
var G__10815 = null;
var G__10816 = 0;
var G__10817 = 0;
seq__10709_10793 = G__10814;
chunk__10710_10794 = G__10815;
count__10711_10795 = G__10816;
i__10712_10796 = G__10817;
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
lt.plugins.gitlight.tests.which_color_QMARK_ = (function which_color_QMARK_(result){var G__10551 = result;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"not-bool","not-bool",2543743254),G__10551))
{return "pink";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__10551))
{return "red";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",1013907790),G__10551))
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
lt.plugins.gitlight.tests.test_panel = (function test_panel(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),(function (){var iter__7530__auto__ = (function iter__10566(s__10567){return (new cljs.core.LazySeq(null,(function (){var s__10567__$1 = s__10567;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10567__$1);if(temp__4092__auto__)
{var s__10567__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10567__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10567__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10569 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10568 = 0;while(true){
if((i__10568 < size__7529__auto__))
{var map__10572 = cljs.core._nth.call(null,c__7528__auto__,i__10568);var map__10572__$1 = ((cljs.core.seq_QMARK_.call(null,map__10572))?cljs.core.apply.call(null,cljs.core.hash_map,map__10572):map__10572);var status = cljs.core.get.call(null,map__10572__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10572__$1,new cljs.core.Keyword(null,"info","info",1017141280));cljs.core.chunk_append.call(null,b__10569,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null));
{
var G__10590 = (i__10568 + 1);
i__10568 = G__10590;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10569),iter__10566.call(null,cljs.core.chunk_rest.call(null,s__10567__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10569),null);
}
} else
{var map__10573 = cljs.core.first.call(null,s__10567__$2);var map__10573__$1 = ((cljs.core.seq_QMARK_.call(null,map__10573))?cljs.core.apply.call(null,cljs.core.hash_map,map__10573):map__10573);var status = cljs.core.get.call(null,map__10573__$1,new cljs.core.Keyword(null,"status","status",4416389988));var info = cljs.core.get.call(null,map__10573__$1,new cljs.core.Keyword(null,"info","info",1017141280));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("border: 1px solid "),cljs.core.str(lt.plugins.gitlight.tests.which_color_QMARK_.call(null,status)),cljs.core.str(";")].join('')], null),cljs.core.name.call(null,status)], null)], null),iter__10566.call(null,cljs.core.rest.call(null,s__10567__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})()], null)], null));var seq__10574_10591 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10575_10592 = null;var count__10576_10593 = 0;var i__10577_10594 = 0;while(true){
if((i__10577_10594 < count__10576_10593))
{var vec__10578_10595 = cljs.core._nth.call(null,chunk__10575_10592,i__10577_10594);var ev__8184__auto___10596 = cljs.core.nth.call(null,vec__10578_10595,0,null);var func__8185__auto___10597 = cljs.core.nth.call(null,vec__10578_10595,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10596,func__8185__auto___10597);
{
var G__10598 = seq__10574_10591;
var G__10599 = chunk__10575_10592;
var G__10600 = count__10576_10593;
var G__10601 = (i__10577_10594 + 1);
seq__10574_10591 = G__10598;
chunk__10575_10592 = G__10599;
count__10576_10593 = G__10600;
i__10577_10594 = G__10601;
continue;
}
} else
{var temp__4092__auto___10602 = cljs.core.seq.call(null,seq__10574_10591);if(temp__4092__auto___10602)
{var seq__10574_10603__$1 = temp__4092__auto___10602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10574_10603__$1))
{var c__7561__auto___10604 = cljs.core.chunk_first.call(null,seq__10574_10603__$1);{
var G__10605 = cljs.core.chunk_rest.call(null,seq__10574_10603__$1);
var G__10606 = c__7561__auto___10604;
var G__10607 = cljs.core.count.call(null,c__7561__auto___10604);
var G__10608 = 0;
seq__10574_10591 = G__10605;
chunk__10575_10592 = G__10606;
count__10576_10593 = G__10607;
i__10577_10594 = G__10608;
continue;
}
} else
{var vec__10579_10609 = cljs.core.first.call(null,seq__10574_10603__$1);var ev__8184__auto___10610 = cljs.core.nth.call(null,vec__10579_10609,0,null);var func__8185__auto___10611 = cljs.core.nth.call(null,vec__10579_10609,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10610,func__8185__auto___10611);
{
var G__10612 = cljs.core.next.call(null,seq__10574_10603__$1);
var G__10613 = null;
var G__10614 = 0;
var G__10615 = 0;
seq__10574_10591 = G__10612;
chunk__10575_10592 = G__10613;
count__10576_10593 = G__10614;
i__10577_10594 = G__10615;
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
lt.plugins.gitlight.tests.lib.selector_asrt = (function selector_asrt(p__10818){var map__10820 = p__10818;var map__10820__$1 = ((cljs.core.seq_QMARK_.call(null,map__10820))?cljs.core.apply.call(null,cljs.core.hash_map,map__10820):map__10820);var select = cljs.core.get.call(null,map__10820__$1,new cljs.core.Keyword(null,"select","select",4402849902));return null;
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
lt.plugins.gitlight.tests.status.back.change_filenames = (function change_filenames(filename,x){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10844_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filename","filename",4574102905),p1__10844_SHARP_))
{return filename;
} else
{return p1__10844_SHARP_;
}
}),x));
});
lt.plugins.gitlight.tests.lib.def_test.call(null,new cljs.core.Keyword("lt.plugins.gitlight.tests.status.back","back-tests","lt.plugins.gitlight.tests.status.back/back-tests",4633446629),(function (){lt.plugins.gitlight.tests.status.back.test_data = (function test_data(pair){var vec__10848 = pair;var n = cljs.core.nth.call(null,vec__10848,0,null);var what = cljs.core.nth.call(null,vec__10848,1,null);var vec__10849 = what;var tst = cljs.core.nth.call(null,vec__10849,0,null);var parsed = cljs.core.nth.call(null,vec__10849,1,null);var vec__10850 = tst;var X = cljs.core.nth.call(null,vec__10850,0,null);var Y = cljs.core.nth.call(null,vec__10850,1,null);var filename = cljs.core.nth.call(null,vec__10850,2,null);var d = cljs.core.nth.call(null,lt.plugins.gitlight.tests.status.back.data,n);var what_should_be = cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.gitlight.tests.status.back.change_filenames,filename),d));var what_is = cljs.core.sort.call(null,parsed);var tst__$1 = cljs.core._EQ_.call(null,what_should_be,what_is);if(!(tst__$1))
{lt.plugins.gitlight.tests.lib.asrt.call(null,[cljs.core.str("parsing porcelain: `"),cljs.core.str(X),cljs.core.str("' `"),cljs.core.str(Y),cljs.core.str("'")].join(''),tst__$1);
} else
{}
return tst__$1;
});
lt.plugins.gitlight.tests.status.back.generate_test_data = (function generate_test_data(){var iter__7530__auto__ = (function iter__10857(s__10858){return (new cljs.core.LazySeq(null,(function (){var s__10858__$1 = s__10858;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10858__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7526__auto__ = ((function (s__10858__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__10859(s__10860){return (new cljs.core.LazySeq(null,((function (s__10858__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__10860__$1 = s__10860;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10860__$1);if(temp__4092__auto____$1)
{var s__10860__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10860__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__10860__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__10862 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__10861 = 0;while(true){
if((i__10861 < size__7529__auto__))
{var y = cljs.core._nth.call(null,c__7528__auto__,i__10861);cljs.core.chunk_append.call(null,b__10862,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})());
{
var G__10873 = (i__10861 + 1);
i__10861 = G__10873;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10862),iter__10859.call(null,cljs.core.chunk_rest.call(null,s__10860__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10862),null);
}
} else
{var y = cljs.core.first.call(null,s__10860__$2);return cljs.core.cons.call(null,(function (){var filename = lt.plugins.gitlight.tests.status.back.random_str.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,filename], null),lt.plugins.gitlight.status.back.get_status_for_line.call(null,[cljs.core.str(x),cljs.core.str(y),cljs.core.str(" "),cljs.core.str(filename)].join(''))], null);
})(),iter__10859.call(null,cljs.core.rest.call(null,s__10860__$2)));
}
} else
{return null;
}
break;
}
});})(s__10858__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__10858__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7527__auto__ = cljs.core.seq.call(null,iterys__7526__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","M","A","D","U"], null)));if(fs__7527__auto__)
{return cljs.core.concat.call(null,fs__7527__auto__,iter__10857.call(null,cljs.core.rest.call(null,s__10858__$1)));
} else
{{
var G__10874 = cljs.core.rest.call(null,s__10858__$1);
s__10858__$1 = G__10874;
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
after.cljs$lang$applyTo = (function (arglist__10843){
var text = cljs.core.first(arglist__10843);
arglist__10843 = cljs.core.next(arglist__10843);
var cwd = cljs.core.first(arglist__10843);
arglist__10843 = cljs.core.next(arglist__10843);
var data = cljs.core.first(arglist__10843);
var what_next = cljs.core.rest(arglist__10843);
return after__delegate(text,cwd,data,what_next);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
lt.plugins.gitlight.tests.remote_com.__BEH__git_test_exit_status__DOT__out = (function __BEH__git_test_exit_status__DOT__out(obj,data){var cwd = cljs.core.deref.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));var G__10832 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));if(cljs.core._EQ_.call(null,"push",G__10832))
{return lt.plugins.gitlight.tests.lib.asrt.call(null,"git push",cljs.core._EQ_.call(null,0,data));
} else
{if(cljs.core._EQ_.call(null,"commit",G__10832))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git commit",cwd,data,"push");
} else
{if(cljs.core._EQ_.call(null,"add",G__10832))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git add",cwd,data,"commit","-m","commiting");
} else
{if(cljs.core._EQ_.call(null,"pull",G__10832))
{return lt.plugins.gitlight.tests.remote_com.after.call(null,"git pull",cwd,data,"add","push_me");
} else
{if(cljs.core._EQ_.call(null,"fetch",G__10832))
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
lt.plugins.gitlight.gutter.make_gutter_marker = (function make_gutter_marker(this$,on_click,content){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gutter-content","div.gutter-content",4072529974),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: "),cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gitlight.gutter.gutter_settings))),cljs.core.str("px; "),cljs.core.str("white-space: nowrap; "),cljs.core.str("overflow: hidden;")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),content], null)], null));var seq__18824_18841 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return on_click.call(null,content);
})], null)));var chunk__18825_18842 = null;var count__18826_18843 = 0;var i__18827_18844 = 0;while(true){
if((i__18827_18844 < count__18826_18843))
{var vec__18828_18845 = cljs.core._nth.call(null,chunk__18825_18842,i__18827_18844);var ev__8184__auto___18846 = cljs.core.nth.call(null,vec__18828_18845,0,null);var func__8185__auto___18847 = cljs.core.nth.call(null,vec__18828_18845,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___18846,func__8185__auto___18847);
{
var G__18848 = seq__18824_18841;
var G__18849 = chunk__18825_18842;
var G__18850 = count__18826_18843;
var G__18851 = (i__18827_18844 + 1);
seq__18824_18841 = G__18848;
chunk__18825_18842 = G__18849;
count__18826_18843 = G__18850;
i__18827_18844 = G__18851;
continue;
}
} else
{var temp__4092__auto___18852 = cljs.core.seq.call(null,seq__18824_18841);if(temp__4092__auto___18852)
{var seq__18824_18853__$1 = temp__4092__auto___18852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18824_18853__$1))
{var c__7561__auto___18854 = cljs.core.chunk_first.call(null,seq__18824_18853__$1);{
var G__18855 = cljs.core.chunk_rest.call(null,seq__18824_18853__$1);
var G__18856 = c__7561__auto___18854;
var G__18857 = cljs.core.count.call(null,c__7561__auto___18854);
var G__18858 = 0;
seq__18824_18841 = G__18855;
chunk__18825_18842 = G__18856;
count__18826_18843 = G__18857;
i__18827_18844 = G__18858;
continue;
}
} else
{var vec__18829_18859 = cljs.core.first.call(null,seq__18824_18853__$1);var ev__8184__auto___18860 = cljs.core.nth.call(null,vec__18829_18859,0,null);var func__8185__auto___18861 = cljs.core.nth.call(null,vec__18829_18859,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___18860,func__8185__auto___18861);
{
var G__18862 = cljs.core.next.call(null,seq__18824_18853__$1);
var G__18863 = null;
var G__18864 = 0;
var G__18865 = 0;
seq__18824_18841 = G__18862;
chunk__18825_18842 = G__18863;
count__18826_18843 = G__18864;
i__18827_18844 = G__18865;
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
return (function (p1__18830_SHARP_){return lt.plugins.gitlight.gutter.make_gutter_marker.call(null,this$,cljs.core.println,p1__18830_SHARP_);
});})(current_gutters,gutter_div))
,data);var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);return lt.objs.editor.operation.call(null,this$,(function (){lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"gutter"))], null));
lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.gutter","div.gutter",2462343306),gutter_div),new cljs.core.PersistentArrayMap(null, 1, ["width",[cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,lt.plugins.gitlight.gutter.gutter_settings),"px"))].join('')], null));
cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (idx,gutter_marker){return ed.setGutterMarker(idx,"gutter",gutter_marker);
}),gutter_markers));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
}));
});
lt.plugins.gitlight.gutter.char_to_val = (function char_to_val(c){var G__18832 = c;if(cljs.core._EQ_.call(null,"-",G__18832))
{return -1;
} else
{if(cljs.core._EQ_.call(null,"+",G__18832))
{return 1;
} else
{if(cljs.core._EQ_.call(null,null,G__18832))
{return 0;
} else
{if(cljs.core._EQ_.call(null," ",G__18832))
{return 0;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return 0;
} else
{return null;
}
}
}
}
}
});
lt.plugins.gitlight.gutter.line_value = (function line_value(line){return lt.plugins.gitlight.gutter.char_to_val.call(null,cljs.core.first.call(null,line));
});
lt.plugins.gitlight.gutter.side_by_side = (function side_by_side(firsts){var partitioned = cljs.core.partition_by.call(null,cljs.core.first,firsts);return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__18837,part){var vec__18838 = p__18837;var ok = cljs.core.nth.call(null,vec__18838,0,null);var stack = cljs.core.nth.call(null,vec__18838,1,null);cljs.core.println.call(null,ok,stack,part);
var vec__18839 = cljs.core.split_at.call(null,1,part);var fst = cljs.core.nth.call(null,vec__18839,0,null);var rst = cljs.core.nth.call(null,vec__18839,1,null);var left = cljs.core.count.call(null,stack);var right = cljs.core.count.call(null,part);var G__18840 = cljs.core.first.call(null,fst);if(cljs.core._EQ_.call(null,"+",G__18840))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,ok,cljs.core.map.call(null,cljs.core.str,part,stack),cljs.core.repeat.call(null,(right - left),"+")),cljs.core.repeat.call(null,(left - right),"-")], null);
} else
{if(cljs.core._EQ_.call(null,"-",G__18840))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok,part], null);
} else
{if(cljs.core._EQ_.call(null," ",G__18840))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,ok,((cljs.core.empty_QMARK_.call(null,stack))?fst:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(" -"),cljs.core.str((cljs.core.count.call(null,stack) - 1)),cljs.core.str("\u2191")].join('')], null)),rst),cljs.core.PersistentVector.EMPTY], null);
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
lt.plugins.gitlight.gutter.__BEH__parse_diff_out = (function __BEH__parse_diff_out(this$,stdout,stderr){var parsed = cljs.core.drop.call(null,5,clojure.string.split_lines.call(null,stdout.toString()));var firsts = cljs.core.map.call(null,cljs.core.first,parsed);return lt.plugins.gitlight.gutter.show_gutter_data.call(null,lt.objs.editor.pool.last_active.call(null),((cljs.core.empty_QMARK_.call(null,firsts))?cljs.core.repeat.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)))))," "):lt.plugins.gitlight.gutter.side_by_side.call(null,firsts)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","parse-diff-out","lt.plugins.gitlight.gutter/parse-diff-out",3347529797),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.gutter.__BEH__parse_diff_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out","out",1014014656)], null));
lt.plugins.gitlight.gutter.__BEH__diff_err = (function __BEH__diff_err(this$,err,stderr){return cljs.core.println.call(null,"error",stderr);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","diff-err","lt.plugins.gitlight.gutter/diff-err",3071060100),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitlight.gutter.__BEH__diff_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",1014004951)], null));
lt.plugins.gitlight.gutter.diff_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitlight.gutter","diff-file-out","lt.plugins.gitlight.gutter/diff-file-out",3278312268),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitlight.gutter","diff-file-out","lt.plugins.gitlight.gutter/diff-file-out",3278312268),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gitlight.gutter","parse-diff-out","lt.plugins.gitlight.gutter/parse-diff-out",3347529797),new cljs.core.Keyword("lt.plugins.gitlight.gutter","diff-err","lt.plugins.gitlight.gutter/diff-err",3071060100)], null)));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gitlight.gutter","whatevers","lt.plugins.gitlight.gutter/whatevers",3140729816),new cljs.core.Keyword(null,"desc","desc",1016984067),"gutter test add",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.gitlight.execute.run_deaf.call(null,lt.plugins.gitlight.gutter.diff_out,lt.plugins.gitlight.git.get_git_root.call(null),[cljs.core.str("git diff -U10000 -- "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))))].join(''));
})], null));
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
lt.plugins.gitlight.tests.status.ui.test_node = (function test_node(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"test"], null));var seq__10881_10897 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10882_10898 = null;var count__10883_10899 = 0;var i__10884_10900 = 0;while(true){
if((i__10884_10900 < count__10883_10899))
{var vec__10885_10901 = cljs.core._nth.call(null,chunk__10882_10898,i__10884_10900);var ev__8184__auto___10902 = cljs.core.nth.call(null,vec__10885_10901,0,null);var func__8185__auto___10903 = cljs.core.nth.call(null,vec__10885_10901,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10902,func__8185__auto___10903);
{
var G__10904 = seq__10881_10897;
var G__10905 = chunk__10882_10898;
var G__10906 = count__10883_10899;
var G__10907 = (i__10884_10900 + 1);
seq__10881_10897 = G__10904;
chunk__10882_10898 = G__10905;
count__10883_10899 = G__10906;
i__10884_10900 = G__10907;
continue;
}
} else
{var temp__4092__auto___10908 = cljs.core.seq.call(null,seq__10881_10897);if(temp__4092__auto___10908)
{var seq__10881_10909__$1 = temp__4092__auto___10908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10881_10909__$1))
{var c__7561__auto___10910 = cljs.core.chunk_first.call(null,seq__10881_10909__$1);{
var G__10911 = cljs.core.chunk_rest.call(null,seq__10881_10909__$1);
var G__10912 = c__7561__auto___10910;
var G__10913 = cljs.core.count.call(null,c__7561__auto___10910);
var G__10914 = 0;
seq__10881_10897 = G__10911;
chunk__10882_10898 = G__10912;
count__10883_10899 = G__10913;
i__10884_10900 = G__10914;
continue;
}
} else
{var vec__10886_10915 = cljs.core.first.call(null,seq__10881_10909__$1);var ev__8184__auto___10916 = cljs.core.nth.call(null,vec__10886_10915,0,null);var func__8185__auto___10917 = cljs.core.nth.call(null,vec__10886_10915,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10916,func__8185__auto___10917);
{
var G__10918 = cljs.core.next.call(null,seq__10881_10909__$1);
var G__10919 = null;
var G__10920 = 0;
var G__10921 = 0;
seq__10881_10897 = G__10918;
chunk__10882_10898 = G__10919;
count__10883_10899 = G__10920;
i__10884_10900 = G__10921;
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