// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14494_14508 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14495_14509 = null;
var count__14496_14510 = (0);
var i__14497_14511 = (0);
while(true){
if((i__14497_14511 < count__14496_14510)){
var f_14512 = cljs.core._nth.call(null,chunk__14495_14509,i__14497_14511);
cljs.core.println.call(null,"  ",f_14512);

var G__14513 = seq__14494_14508;
var G__14514 = chunk__14495_14509;
var G__14515 = count__14496_14510;
var G__14516 = (i__14497_14511 + (1));
seq__14494_14508 = G__14513;
chunk__14495_14509 = G__14514;
count__14496_14510 = G__14515;
i__14497_14511 = G__14516;
continue;
} else {
var temp__4425__auto___14517 = cljs.core.seq.call(null,seq__14494_14508);
if(temp__4425__auto___14517){
var seq__14494_14518__$1 = temp__4425__auto___14517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14494_14518__$1)){
var c__14141__auto___14519 = cljs.core.chunk_first.call(null,seq__14494_14518__$1);
var G__14520 = cljs.core.chunk_rest.call(null,seq__14494_14518__$1);
var G__14521 = c__14141__auto___14519;
var G__14522 = cljs.core.count.call(null,c__14141__auto___14519);
var G__14523 = (0);
seq__14494_14508 = G__14520;
chunk__14495_14509 = G__14521;
count__14496_14510 = G__14522;
i__14497_14511 = G__14523;
continue;
} else {
var f_14524 = cljs.core.first.call(null,seq__14494_14518__$1);
cljs.core.println.call(null,"  ",f_14524);

var G__14525 = cljs.core.next.call(null,seq__14494_14518__$1);
var G__14526 = null;
var G__14527 = (0);
var G__14528 = (0);
seq__14494_14508 = G__14525;
chunk__14495_14509 = G__14526;
count__14496_14510 = G__14527;
i__14497_14511 = G__14528;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14529 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__13338__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__13338__auto__)){
return or__13338__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14529);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14529)))?cljs.core.second.call(null,arglists_14529):arglists_14529));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14498 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14499 = null;
var count__14500 = (0);
var i__14501 = (0);
while(true){
if((i__14501 < count__14500)){
var vec__14502 = cljs.core._nth.call(null,chunk__14499,i__14501);
var name = cljs.core.nth.call(null,vec__14502,(0),null);
var map__14503 = cljs.core.nth.call(null,vec__14502,(1),null);
var map__14503__$1 = ((((!((map__14503 == null)))?((((map__14503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14503):map__14503);
var doc = cljs.core.get.call(null,map__14503__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__14503__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14530 = seq__14498;
var G__14531 = chunk__14499;
var G__14532 = count__14500;
var G__14533 = (i__14501 + (1));
seq__14498 = G__14530;
chunk__14499 = G__14531;
count__14500 = G__14532;
i__14501 = G__14533;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14498);
if(temp__4425__auto__){
var seq__14498__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14498__$1)){
var c__14141__auto__ = cljs.core.chunk_first.call(null,seq__14498__$1);
var G__14534 = cljs.core.chunk_rest.call(null,seq__14498__$1);
var G__14535 = c__14141__auto__;
var G__14536 = cljs.core.count.call(null,c__14141__auto__);
var G__14537 = (0);
seq__14498 = G__14534;
chunk__14499 = G__14535;
count__14500 = G__14536;
i__14501 = G__14537;
continue;
} else {
var vec__14505 = cljs.core.first.call(null,seq__14498__$1);
var name = cljs.core.nth.call(null,vec__14505,(0),null);
var map__14506 = cljs.core.nth.call(null,vec__14505,(1),null);
var map__14506__$1 = ((((!((map__14506 == null)))?((((map__14506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14506):map__14506);
var doc = cljs.core.get.call(null,map__14506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__14506__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14538 = cljs.core.next.call(null,seq__14498__$1);
var G__14539 = null;
var G__14540 = (0);
var G__14541 = (0);
seq__14498 = G__14538;
chunk__14499 = G__14539;
count__14500 = G__14540;
i__14501 = G__14541;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map