// build time:Sat Oct 05 2019 18:57:27 GMT+0800 (GMT+08:00)
var searchFunc=function(e,t,r){"use strict";var a="<button type='button' class='local-search-close' id='local-search-close'></button>";$.ajax({url:e,dataType:"xml",success:function(e){var i=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var l=document.getElementById(t);var n=document.getElementById(r);l.addEventListener("input",function(){var e='<ul class="search-result-list">';var t=this.value.trim().toLowerCase().split(/[\s]+/);n.innerHTML="";if(this.value.trim().length<=0){return}i.forEach(function(r){var a=true;if(!r.title||r.title.trim()===""){r.title="Untitled"}var i=r.title.trim().toLowerCase();var l=r.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var n=r.url;var s=-1;var c=-1;var o=-1;if(l!==""){t.forEach(function(e,t){s=i.indexOf(e);c=l.indexOf(e);if(s<0&&c<0){a=false}else{if(c<0){c=0}if(t==0){o=c}}})}else{a=false}if(a){e+="<li><a href='"+n+"' class='search-result-title'>"+i+"</a>";var u=r.content.trim().replace(/<[^>]+>/g,"");if(o>=0){var f=o-20;var v=o+80;if(f<0){f=0}if(f==0){v=100}if(v>u.length){v=u.length}var h=u.substr(f,v);t.forEach(function(e){var t=new RegExp(e,"gi");h=h.replace(t,'<em class="search-keyword">'+e+"</em>")});e+='<p class="search-result">'+h+"...</p>"}e+="</li>"}});e+="</ul>";if(e.indexOf("<li>")===-1){return n.innerHTML=a+'<div class="search-result-empty"><p><i class="fe fe-tired"></i> 没有找到内容，更换下搜索词试试吧~<p></div>'}n.innerHTML=a+e})}});$(document).on("click","#local-search-close",function(){$("#local-search-input").val("");$("#local-search-result").html("")})};
//rebuild by neat 