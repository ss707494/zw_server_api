(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{5876:function(t,e,n){"use strict";n.r(e);var a=n(19),r=n(0),c=n.n(r),i=n(81),l=n(53),o=n(54);function u(){var t=Object(l.a)(["\n > main {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 80px);\n    grid-gap: 6px;\n    text-align: center;\n }\n"]);return u=function(){return t},t}var p={};p.NoteList=Object(o.a)("div")(u());var d=n(130),f=n(120);n.d(e,"Calligraphy",function(){return s});var s=function(t){var e=t.match,n=Object(f.b)(d.allNote),l=Object(a.a)(n,2),o=l[0],u=l[1];return Object(r.useEffect)(function(){o({data:{bookId:e.params.id}})},[]),c.a.createElement(p.NoteList,null,c.a.createElement("main",null,u.allNote&&u.allNote.map(function(t){return c.a.createElement(i.c,{key:"allnote".concat(t.id),href:"/calligraphy/noteDetail/".concat(t.id)},t.title)})))};e.default=s}}]);
//# sourceMappingURL=4.c3c01745.chunk.js.map