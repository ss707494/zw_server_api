(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{JtOw:function(e,t,n){var i,o,r;o=[t,n("fnPv")],void 0===(r="function"===typeof(i=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(t);function i(e){return e&&e.__esModule?e:{default:e}}e.default=n.default})?i.apply(t,o):i)||(e.exports=r)},K0AU:function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i),r=n("i8i4"),s=n.n(r),a=n("17x9"),u=n.n(a),l=n("TSYQ"),c=n.n(l),p=function(e){return c()({"carousel-root":!0,[e]:!!e})},h=function(e){return c()({carousel:!0,"carousel-slider":e})},f=function(e,t){return c()({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},d=function(e,t){return c()({thumbs:!e,slider:e,animated:!t})},m=function(e,t){return c()({thumb:!e,slide:e,selected:t})},v=function(e){return c()({"control-arrow control-prev":!0,"control-disabled":e})},w=function(e){return c()({"control-arrow control-next":!0,"control-disabled":e})},y=function(e){return c()({dot:!0,selected:e})},b=function(e,t){return"translate3d"+("("+("horizontal"===t?[e,0,0]:[0,e,0]).join(",")+")")},S=n("JtOw"),g=n.n(S),I=function(){return window};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(u,e);var t,n,r,s,a=(t=u,function(){var e,n=R(t);if(k()){var i=R(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return M(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),C(O(t=a.call(this,e)),"setItemsWrapperRef",(function(e){t.itemsWrapperRef=e})),C(O(t),"setItemsListRef",(function(e){t.itemsListRef=e})),C(O(t),"setThumbsRef",(function(e,n){t.thumbsRef||(t.thumbsRef=[]),t.thumbsRef[n]=e})),C(O(t),"updateSizes",(function(){if(t.props.children&&t.itemsWrapperRef&&0!==t.state.images.length){var e=t.props.children.length,n=t.itemsWrapperRef.clientWidth,i=t.props.thumbWidth?t.props.thumbWidth:function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+(parseInt(n.marginLeft)+parseInt(n.marginRight))}(t.thumbsRef[0]),o=Math.floor(n/i),r=e-o,s=o<e;t.setState((function(e,n){return{itemSize:i,visibleItems:o,firstItem:s?t.getFirstItem(n.selectedItem):0,lastPosition:r,showArrows:s}}))}})),C(O(t),"setMountState",(function(){t.setState({hasMount:!0}),t.updateSizes()})),C(O(t),"handleClickItem",(function(e,n,i){if(!i.keyCode||"Enter"===i.key){var o=t.props.onSelectItem;"function"===typeof o&&o(e,n)}})),C(O(t),"onSwipeStart",(function(){t.setState({swiping:!0})})),C(O(t),"onSwipeEnd",(function(){t.setState({swiping:!1})})),C(O(t),"onSwipeMove",(function(e){var n=-t.state.firstItem*t.state.itemSize;0===n&&e>0&&(e=0),n===-t.state.visibleItems*t.state.itemSize&&e<0&&(e=0);var i=n+100/(t.itemsWrapperRef.clientWidth/e)+"%";t.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(e){t.itemsListRef.style[e]=b(i,t.props.axis)}))})),C(O(t),"slideRight",(function(e){t.moveTo(t.state.firstItem-("number"===typeof e?e:1))})),C(O(t),"slideLeft",(function(e){t.moveTo(t.state.firstItem+("number"===typeof e?e:1))})),C(O(t),"moveTo",(function(e){e=(e=e<0?0:e)>=t.lastPosition?t.lastPosition:e,t.setState({firstItem:e})})),t.state={selectedItem:e.selectedItem,hasMount:!1,firstItem:0,itemSize:null,visibleItems:0,lastPosition:0,showArrows:!1,images:t.getImages()},t}return n=u,(r=[{key:"componentDidMount",value:function(e){this.setupThumbs()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e,t){e.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:e.selectedItem,firstItem:this.getFirstItem(e.selectedItem)}),e.children!==this.props.children&&this.setState({images:this.getImages()})}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){I().addEventListener("resize",this.updateSizes),I().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){I().removeEventListener("resize",this.updateSizes),I().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getImages",value:function(){var e=i.Children.map(this.props.children,(function(e,t){var n=e;return"img"!==e.type&&(n=i.Children.toArray(e.props.children).filter((function(e){return"img"===e.type}))[0]),n&&0!==n.length?n:null}));return 0===e.filter((function(e){return e})).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):e}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.state.images.map((function(t,n){var i=m(!1,n===e.state.selectedItem&&e.state.hasMount),r={key:n,ref:function(t){return e.setThumbsRef(t,n)},className:i,onClick:e.handleClickItem.bind(e,n,e.props.children[n]),onKeyDown:e.handleClickItem.bind(e,n,e.props.children[n]),"aria-label":"".concat(e.props.labels.item," ").concat(n+1),style:{width:e.props.thumbWidth}};return 0===n&&(t=o.a.cloneElement(t,{onLoad:e.setMountState})),o.a.createElement("li",P({},r,{role:"button",tabIndex:0}),t)}))}},{key:"render",value:function(){if(!this.props.children)return null;var e,t=this.state.showArrows&&this.state.firstItem>0,n=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,i=-this.state.firstItem*this.state.itemSize+"px",r=b(i,this.props.axis),s=this.props.transitionTime+"ms";return e={WebkitTransform:r,MozTransform:r,MsTransform:r,OTransform:r,transform:r,msTransform:r,WebkitTransitionDuration:s,MozTransitionDuration:s,MsTransitionDuration:s,OTransitionDuration:s,transitionDuration:s,msTransitionDuration:s},o.a.createElement("div",{className:h(!1)},o.a.createElement("div",{className:f(!1),ref:this.setItemsWrapperRef},o.a.createElement("button",{type:"button",className:v(!t),onClick:this.slideRight,"aria-label":this.props.labels.leftArrow}),o.a.createElement(g.a,{tagName:"ul",className:d(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:e,innerRef:this.setItemsListRef},this.renderItems()),o.a.createElement("button",{type:"button",className:w(!n),onClick:this.slideLeft,"aria-label":this.props.labels.rightArrow})))}}])&&E(n.prototype,r),s&&E(n,s),u}(i.Component);C(_,"displayName","Thumbs"),C(_,"propsTypes",{children:u.a.element.isRequired,transitionTime:u.a.number,selectedItem:u.a.number,thumbWidth:u.a.number,labels:u.a.shape({leftArrow:u.a.string,rightArrow:u.a.string,item:u.a.string})}),C(_,"defaultProps",{selectedItem:0,thumbWidth:80,transitionTime:350,axis:"horizontal"});var L=_,z=function(){return document};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function A(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?W(e):t}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=function(){},q=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(l,e);var t,n,r,a,u=(t=l,function(){var e,n=H(t);if(U()){var i=H(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return N(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),F(W(t=u.call(this,e)),"setThumbsRef",(function(e){t.thumbsRef=e})),F(W(t),"setCarouselWrapperRef",(function(e){t.carouselWrapperRef=e})),F(W(t),"setListRef",(function(e){t.listRef=e})),F(W(t),"setItemsWrapperRef",(function(e){t.itemsWrapperRef=e})),F(W(t),"setItemsRef",(function(e,n){t.itemsRef||(t.itemsRef=[]),t.itemsRef[n]=e})),F(W(t),"autoPlay",(function(){!t.state.autoPlay||i.Children.count(t.props.children)<=1||(clearTimeout(t.timer),t.timer=setTimeout((function(){t.increment()}),t.props.interval))})),F(W(t),"clearAutoPlay",(function(){t.state.autoPlay&&clearTimeout(t.timer)})),F(W(t),"resetAutoPlay",(function(){t.clearAutoPlay(),t.autoPlay()})),F(W(t),"stopOnHover",(function(){t.setState({isMouseEntered:!0}),t.clearAutoPlay()})),F(W(t),"startOnLeave",(function(){t.setState({isMouseEntered:!1}),t.autoPlay()})),F(W(t),"isFocusWithinTheCarousel",(function(){return!(z().activeElement!==t.carouselWrapperRef&&!t.carouselWrapperRef.contains(z().activeElement))})),F(W(t),"navigateWithKeyboard",(function(e){if(t.isFocusWithinTheCarousel()){var n="horizontal"===t.props.axis,i=n?37:38;(n?39:40)===e.keyCode?t.increment():i===e.keyCode&&t.decrement()}})),F(W(t),"updateSizes",(function(){if(t.state.initialized){var e="horizontal"===t.props.axis,n=t.itemsRef[0],i=e?n.clientWidth:n.clientHeight;t.setState((function(e,t){return{itemSize:i}})),t.thumbsRef&&t.thumbsRef.updateSizes()}})),F(W(t),"setMountState",(function(){t.setState({hasMount:!0}),t.updateSizes()})),F(W(t),"handleClickItem",(function(e,n){0!==i.Children.count(t.props.children)&&(t.state.cancelClick?t.setState({cancelClick:!1}):(t.props.onClickItem(e,n),e!==t.state.selectedItem&&t.setState({selectedItem:e})))})),F(W(t),"handleOnChange",(function(e,n){i.Children.count(t.props.children)<=1||t.props.onChange(e,n)})),F(W(t),"handleClickThumb",(function(e,n){t.props.onClickThumb(e,n),t.selectItem({selectedItem:e})})),F(W(t),"onSwipeStart",(function(e){t.setState({swiping:!0}),t.props.onSwipeStart(e),t.clearAutoPlay()})),F(W(t),"onSwipeEnd",(function(e){t.setState({swiping:!1,cancelClick:!1}),t.props.onSwipeEnd(e),t.autoPlay()})),F(W(t),"onSwipeMove",(function(e,n){t.props.onSwipeMove(n);var o="horizontal"===t.props.axis,r=i.Children.count(t.props.children),s=t.getPosition(t.state.selectedItem),a=t.props.infiniteLoop?t.getPosition(r-1)-100:t.getPosition(r-1),u=o?e.x:e.y,l=u;0===s&&u>0&&(l=0),s===a&&u<0&&(l=0);var c=s+100/(t.state.itemSize/l);t.props.infiniteLoop&&(0===t.state.selectedItem&&c>-100?c-=100*r:t.state.selectedItem===r-1&&c<100*-r&&(c+=100*r)),c+="%",t.setPosition(c);var p=Math.abs(u)>t.props.swipeScrollTolerance;return p&&!t.state.cancelClick&&t.setState({cancelClick:!0}),p})),F(W(t),"setPosition",(function(e,n){var i=s.a.findDOMNode(t.listRef);["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(n){i.style[n]=b(e,t.props.axis)})),n&&i.offsetLeft})),F(W(t),"resetPosition",(function(){var e=t.getPosition(t.state.selectedItem)+"%";t.setPosition(e)})),F(W(t),"decrement",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.moveTo(t.state.selectedItem-("number"===typeof e?e:1),n)})),F(W(t),"increment",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.moveTo(t.state.selectedItem+("number"===typeof e?e:1),n)})),F(W(t),"moveTo",(function(e,n){var o=i.Children.count(t.props.children)-1,r=t.props.infiniteLoop&&!n&&(e<0||e>o),s=e;e<0&&(e=t.props.infiniteLoop?o:0),e>o&&(e=t.props.infiniteLoop?0:o),r?t.setState({swiping:!0},(function(){s<0?t.props.centerMode&&"horizontal"===t.props.axis?t.setPosition("-".concat((o+2)*t.props.centerSlidePercentage-(100-t.props.centerSlidePercentage)/2,"%"),!0):t.setPosition("-".concat(100*(o+2),"%"),!0):s>o&&t.setPosition(0,!0),t.selectItem({selectedItem:e,swiping:!1})})):t.selectItem({selectedItem:e}),t.state.autoPlay&&!1===t.state.isMouseEntered&&t.resetAutoPlay()})),F(W(t),"onClickNext",(function(){t.increment(1,!1)})),F(W(t),"onClickPrev",(function(){t.decrement(1,!1)})),F(W(t),"onSwipeForward",(function(){t.increment(1,!0)})),F(W(t),"onSwipeBackwards",(function(){t.decrement(1,!0)})),F(W(t),"changeItem",(function(e){if(!e.key||"Enter"===e.key){var n=e.target.value;t.selectItem({selectedItem:n})}})),F(W(t),"selectItem",(function(e,n){t.setState(e,n),t.handleOnChange(e.selectedItem,i.Children.toArray(t.props.children)[e.selectedItem])})),F(W(t),"getInitialImage",(function(){var e=t.props.selectedItem,n=t.itemsRef&&t.itemsRef[e],i=n&&n.getElementsByTagName("img");return i&&i[e]})),F(W(t),"getVariableImageHeight",(function(e){var n=t.itemsRef&&t.itemsRef[e],i=n&&n.getElementsByTagName("img");if(t.state.hasMount&&i.length>0){var o=i[0];if(!o.complete){o.addEventListener("load",(function e(){t.forceUpdate(),o.removeEventListener("load",e)}))}var r=o.clientHeight;return r>0?r:null}return null})),t.state={initialized:!1,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay},t}return n=l,(r=[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),t.swiping&&!this.state.swiping&&this.resetPosition(),e.selectedItem===this.props.selectedItem&&e.centerMode===this.props.centerMode||(this.updateSizes(),this.moveTo(this.props.selectedItem)),e.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){this.bindEvents(),this.state.autoPlay&&i.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.setState({initialized:!0});var e=this.getInitialImage();e?e.addEventListener("load",this.setMountState):this.setMountState()}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){I().addEventListener("resize",this.updateSizes),I().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&z().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){I().removeEventListener("resize",this.updateSizes),I().removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&z().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"getPosition",value:function(e){if(this.props.infiniteLoop&&++e,0===e)return 0;var t=i.Children.count(this.props.children);if(this.props.centerMode&&"horizontal"===this.props.axis){var n=-e*this.props.centerSlidePercentage,o=t-1;return e&&(e!==o||this.props.infiniteLoop)?n+=(100-this.props.centerSlidePercentage)/2:e===o&&(n+=100-this.props.centerSlidePercentage),n}return 100*-e}},{key:"renderItems",value:function(e){var t=this;return i.Children.map(this.props.children,(function(n,i){var r={ref:function(e){return t.setItemsRef(e,i)},key:"itemKey"+i+(e?"clone":""),className:m(!0,i===t.state.selectedItem),onClick:t.handleClickItem.bind(t,i,n)};return t.props.centerMode&&"horizontal"===t.props.axis&&(r.style={minWidth:t.props.centerSlidePercentage+"%"}),o.a.createElement("li",r,t.props.renderItem(n,{isSelected:i===t.state.selectedItem}))}))}},{key:"renderControls",value:function(){var e=this;return this.props.showIndicators?o.a.createElement("ul",{className:"control-dots"},i.Children.map(this.props.children,(function(t,n){return e.props.renderIndicator(e.changeItem,n===e.state.selectedItem,n,e.props.labels.item)}))):null}},{key:"renderStatus",value:function(){return this.props.showStatus?o.a.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,i.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&0!==i.Children.count(this.props.children)?o.a.createElement(L,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels},this.props.renderThumbs(this.props.children)):null}},{key:"render",value:function(){if(!this.props.children||0===i.Children.count(this.props.children))return null;var e="horizontal"===this.props.axis,t=this.props.showArrows&&i.Children.count(this.props.children)>1,n=t&&(this.state.selectedItem>0||this.props.infiniteLoop),r=t&&(this.state.selectedItem<i.Children.count(this.props.children)-1||this.props.infiniteLoop),s={},a=this.getPosition(this.state.selectedItem),u=b(a+"%",this.props.axis),l=this.props.transitionTime+"ms";s={WebkitTransform:u,MozTransform:u,MsTransform:u,OTransform:u,transform:u,msTransform:u},this.state.swiping||(s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s,{WebkitTransitionDuration:l,MozTransitionDuration:l,MsTransitionDuration:l,OTransitionDuration:l,transitionDuration:l,msTransitionDuration:l}));var c=this.renderItems(!0),m=c.shift(),v=c.pop(),w={className:d(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:s,tolerance:this.props.swipeScrollTolerance},y={};if(e){if(w.onSwipeLeft=this.onSwipeForward,w.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var S=this.getVariableImageHeight(this.state.selectedItem);w.style.height=S||"auto",y.height=S||"auto"}}else w.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,w.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,w.style.height=this.state.itemSize,y.height=this.state.itemSize;return o.a.createElement("div",{className:p(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:"0"},o.a.createElement("div",{className:h(!0),style:{width:this.props.width}},this.props.renderArrowPrev(this.onClickPrev,n,this.props.labels.leftArrow),o.a.createElement("div",{className:f(!0,this.props.axis),style:y,ref:this.setItemsWrapperRef},this.props.swipeable?o.a.createElement(g.a,x({tagName:"ul",ref:this.setListRef},w,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m):o.a.createElement("ul",{className:d(!0,this.state.swiping),ref:this.setListRef,style:s},this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m)),this.props.renderArrowNext(this.onClickNext,r,this.props.labels.rightArrow),this.renderControls(),this.renderStatus()),this.renderThumbs())}}])&&A(n.prototype,r),a&&A(n,a),l}(i.Component);F(q,"displayName","Carousel"),F(q,"propTypes",{className:u.a.string,children:u.a.node,showArrows:u.a.bool,showStatus:u.a.bool,showIndicators:u.a.bool,infiniteLoop:u.a.bool,showThumbs:u.a.bool,thumbWidth:u.a.number,selectedItem:u.a.number,onClickItem:u.a.func.isRequired,onClickThumb:u.a.func.isRequired,onChange:u.a.func.isRequired,axis:u.a.oneOf(["horizontal","vertical"]),verticalSwipe:u.a.oneOf(["natural","standard"]),width:function(e,t,n){if(!/(pt|px|em|rem|vw|vh|%)$/.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %")},useKeyboardArrows:u.a.bool,autoPlay:u.a.bool,stopOnHover:u.a.bool,interval:u.a.number,transitionTime:u.a.number,swipeScrollTolerance:u.a.number,swipeable:u.a.bool,dynamicHeight:u.a.bool,emulateTouch:u.a.bool,statusFormatter:u.a.func.isRequired,centerMode:u.a.bool,centerSlidePercentage:u.a.number,labels:u.a.shape({leftArrow:u.a.string,rightArrow:u.a.string,item:u.a.string}),onSwipeStart:u.a.func,onSwipeEnd:u.a.func,onSwipeMove:u.a.func,renderArrowPrev:u.a.func,renderArrowNext:u.a.func,renderIndicator:u.a.func,renderItem:u.a.func,renderThumbs:u.a.func}),F(q,"defaultProps",{showIndicators:!0,showArrows:!0,showStatus:!0,showThumbs:!0,infiniteLoop:!1,selectedItem:0,axis:"horizontal",verticalSwipe:"standard",width:"100%",useKeyboardArrows:!1,autoPlay:!1,stopOnHover:!0,interval:3e3,transitionTime:350,swipeScrollTolerance:5,swipeable:!0,dynamicHeight:!1,emulateTouch:!1,onClickItem:K,onClickThumb:K,onChange:K,statusFormatter:function(e,t){return"".concat(e," of ").concat(t)},centerMode:!1,centerSlidePercentage:80,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){},renderArrowPrev:function(e,t,n){return o.a.createElement("button",{type:"button","aria-label":n,className:v(!t),onClick:e})},renderArrowNext:function(e,t,n){return o.a.createElement("button",{type:"button","aria-label":n,className:w(!t),onClick:e})},renderIndicator:function(e,t,n,i){return o.a.createElement("li",{className:y(t),onClick:e,onKeyDown:e,value:n,key:n,role:"button",tabIndex:0,"aria-label":"".concat(i," ").concat(n+1)})},renderItem:function(e,t){t.isSelected;return e},renderThumbs:function(e){return e}});var B=q,Y=n("Oj7+"),X=o.a.createElement;t.a=function(e){var t=e.dataList,n=e.onClickItem,i=e.height,o=e.renderItem,r=e.showArrows,s=void 0!==r&&r,a=e.showIndicators;return X(B,{autoPlay:!0,showThumbs:!1,showArrows:s,showStatus:!1,showIndicators:void 0===a||a,infiniteLoop:!0,onClickItem:n},o?null===t||void 0===t?void 0:t.map((function(e){return o(e)})):null===t||void 0===t?void 0:t.map((function(e){return X("div",{key:"Carousel_".concat(e.id)},X("img",{style:{height:i},src:Object(Y.a)(e.imgUrl),alt:""}))})))}},TSYQ:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var s=o.apply(null,i);s&&e.push(s)}else if("object"===r)for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(e.exports=i)}()},fnPv:function(e,t,n){var i,o,r;o=[t,n("q1tI"),n("17x9")],void 0===(r="function"===typeof(i=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=f;var i=r(t),o=r(n);function r(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function a(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=!1;function f(e){h=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){f(!0)}}))}catch(w){}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return h?e:e.capture}function m(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var v=function(e){function t(){var e;u(this,t);for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];var r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return r._handleSwipeStart=r._handleSwipeStart.bind(r),r._handleSwipeMove=r._handleSwipeMove.bind(r),r._handleSwipeEnd=r._handleSwipeEnd.bind(r),r._onMouseDown=r._onMouseDown.bind(r),r._onMouseMove=r._onMouseMove.bind(r),r._onMouseUp=r._onMouseUp.bind(r),r._setSwiperRef=r._setSwiperRef.bind(r),r}return p(t,e),l(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,d({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,d({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=m(e),n=t.x,i=t.y;this.moveStart={x:n,y:i},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=m(e),n=t.x,i=t.y,o=n-this.moveStart.x,r=i-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:o,y:r},e)&&e.preventDefault(),this.movePosition={deltaX:o,deltaY:r}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(e){this.swiper=e,this.props.innerRef(e)}},{key:"render",value:function(){var e=this.props,t=(e.tagName,e.className),n=e.style,o=e.children,r=(e.allowMouseEvents,e.onSwipeUp,e.onSwipeDown,e.onSwipeLeft,e.onSwipeRight,e.onSwipeStart,e.onSwipeMove,e.onSwipeEnd,e.innerRef,e.tolerance,a(e,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]));return i.default.createElement(this.props.tagName,s({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:t,style:n},r),o)}}]),t}(t.Component);v.displayName="ReactSwipe",v.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,innerRef:o.default.func,tolerance:o.default.number.isRequired},v.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},e.default=v})?i.apply(t,o):i)||(e.exports=r)}}]);