
$('.view').click(function(e){
  page('/user/12')
  e.preventDefault()
})



//Incase I need to use document ready for other stuff
// (function ($) {
// 	'use strict';
// 	$(document).ready(function () {
// 		// Init here.
// 	});
// }(jQuery));

// $(function(){
//   'use strict';
//   var $page = $('#main'),
// 	  options = {
// 		debug: true,
// 		prefetch: true,
// 		cacheLength: 2,
// 		onStart: {
// 		  duration: 250, // Duration of our animation
// 		  render: function ($container) {
// 			// Add your CSS animation reversing class
// 			$container.addClass('is-exiting');
// 			// Restart your animation
// 			smoothState.restartCSSAnimations();
// 		  }
// 		},
// 		onReady: {
// 		  duration: 0,
// 		  render: function ($container, $newContent) {
// 			// Remove your CSS animation reversing class
// 			$container.removeClass('is-exiting');
// 			// Inject the new content
// 			$container.html($newContent);
// 		  }
// 		}
// 	  },
// 	  smoothState = $page.smoothState(options).data('smoothState');
// });



// document.addEventListener("DOMContentLoaded", function() {


//   Barba.Pjax.init();
//   Barba.Prefetch.init();

//   Barba.Dispatcher.on('linkClicked', function(el) {
//     lastElementClicked = el;
//     });

// var HideShowTransition = Barba.BaseTransition.extend({
//   start: function() {
//     this.newContainerLoading.then(this.finish.bind(this));
//   },

//   finish: function() {
//     document.body.scrollTop = 0;
//     this.done();
//   }
// });

// Barba.Pjax.getTransition = function() {
//   return HideShowTransition;
// };


// });








// jQuery(document).ready(function($){
//     //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
//     var MQL = 1170;

//     //primary navigation slide-in effect
//     if($(window).width() > MQL) {
//         var headerHeight = $('.cd-header').height();
//         $(window).on('scroll',
//         {
//             previousTop: 0
//         }, 
//         function () {
//             var currentTop = $(window).scrollTop();
//             //check if user is scrolling up
//             if (currentTop < this.previousTop ) {
//                 //if scrolling up...
//                 if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
//                     $('.cd-header').addClass('is-visible');
//                 } else {
//                     $('.cd-header').removeClass('is-visible is-fixed');
//                 }
//             } else {
//                 //if scrolling down...
//                 $('.cd-header').removeClass('is-visible');
//                 if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
//             }
//             this.previousTop = currentTop;
//         });
//     }

//     //open/close primary navigation
//     $('.cd-primary-nav-trigger').on('click', function(){
//         $('.cd-menu-icon').toggleClass('is-clicked'); 
//         $('.cd-header').toggleClass('menu-is-open');
		
//         //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
//         if( $('.cd-primary-nav').hasClass('is-visible') ) {
//             $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
//                 $('body').removeClass('overflow-hidden');
//             });
//         } else {
//             $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
//                 $('body').addClass('overflow-hidden');
//             }); 
//         }
//     });
// });



// function loadNewContent(newSection) {
//     //create a new section element and insert it into the DOM (newSection is the data-menu of the selected navigation item)
//     var section = $('<section class="cd-section overflow-hidden '+newSection+'"></section>').appendTo(mainContent);
	
//     //load the new content from the proper html file
//     section.load(newSection+'.html .cd-section > *', function(event){
		
//         loadingBar.velocity({
//             scaleY: scaleMax //this is the scaleY value to cover the entire window height (100% loaded)
//         }, 400, function(){
			
//             //add the .visible class to the new section element -> it will cover the old one
//             section.addClass('visible');
 
//             var url = newSection+'.html';
 
//             if(url!=window.location){
//                 //add the new page to the window.history
//                 window.history.pushState({path: url},'',url);
//             }
 
//             // ...
//         });
//     });
// }