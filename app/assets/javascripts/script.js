(function($){$(window).load(function(){"use strict";if($.fn.blueberry){$('#slider-img').blueberry();};});
$(document).ready(function(){"use strict";$(".datepicker").focusout();
$(".title-form").click(function(){var this_id=$(this).attr('id');$(this).parents('form').filter(':first').children('.main_form_navigation').children('.title-form').addClass('back').removeClass('current');$(this).addClass("current").removeClass('back');
	$(this).parents('form').filter(':first').children(".content-form").addClass("hidden");$("#"+this_id+"_content").removeClass('hidden');});if($.browser.msie){$('.location, #sign_up_name, #sign_up_email, .form_element input, .shortcode_input, .input_placeholder').placeholder();}
$(".select").selectbox();$(".select:disabled").selectbox("disable");$(".price_range").slider({from:0,to:1500,step:50,dimension:'&nbsp;$'});$(".passangers_range").slider({from:1,to:5,step:1,dimension:''});$(".shortcode_range").slider({to:5,step:1,dimension:''});$(".details-more").css('display','none');$(".view-details").click(function(){$(this).css('display','none');$(this).closest('.main-block').find('.close-details').css('display','block');$(this).closest('.main-block').find('.details-more').css('display','block');});$(".close-details").click(function(){$(this).css('display','none');$(this).closest('.main-block').find('.view-details').css('display','block');$(this).closest('.main-block').find('.details-more').css('display','none');});$(".details div").hover(function(){$(this).css('color','#EE7835');},function(){$(this).css('color','#378EEF');});$("#overlay_block").css('height',$(document).height());$(".admin-form-content").click(function(event){if($(event.target).closest(".admin-form-block").length)return;$("#overlay_block").css('display','none');$(".admin-form-content").css('display','none');event.stopPropagation();});var anc=window.location.hash.replace("#","");if(anc!=""){Display_tab_div(anc);}
$(".tab_link_button").click(function(){$("#overlay_block").css('display','block');var this_id=$(this).parent('span').attr('class').toLowerCase().replace(' ','_');if(this_id=='forgot_passwd'){$(".admin-form-content").css('display','none');$(".forgot_passwd_block").css('display','block');}else{$(".admin-form-content").css('display','none');$(".sign_register_block").css('display','block');}
$('.admin-form-block .title-form').addClass('back').removeClass('current');$(".admin-form-block .main_form_navigation #tab_"+this_id).addClass("current").removeClass('back');$('.admin-form-block .content-form').addClass("hidden");$('.admin-form-block #tab_'+this_id+"_content").removeClass('hidden');});if($.fn.setMask){$(".time-select").setMask("29:59").keypress(function(){var currentMask=$(this).data('mask').mask;var newMask=$(this).val().match(/^2.*/)?"23:59":"29:59";if(newMask!=currentMask){$(this).setMask(newMask);}});};$(".faq_nav li").click(function(){$(".faq_nav li").removeClass('current');$(this).addClass('current');});$(".widget-title-sort a").click(function(){$(".widget-title-sort a").removeClass('current');$(this).addClass('current');$(".content-overlay").css('display','block').css('height',$('.product-widget > form').height()).css('width',$('.product-widget > form').width());$(".content-overlay > img").css('display','block').css('margin-top',$('.product-widget > form').height()/2-33).css('margin-left',$('.product-widget > form').width()/2-33);setTimeout(function(){$(".main-widget .close-details").css('display','none');$('.main-widget .view-details').css('display','block');$('.main-widget .details-more').css('display','none');$(".content-overlay").css('display','none');},400);});$('.content-form .return_location').css('display','none');$("#location-checkbox, #location-checkbox-1").change(function(){if($(this).is(':checked')){$('.return_location').css('display','block');}else{$('.return_location').css('display','none');}});$("span.checkbox").live('click',function(){if($(this).next('input[type="checkbox"]').attr('id')=='location-checkbox'||$(this).next('input[type="checkbox"]').attr('id')=='location-checkbox-1'){if($(this).next('input[type="checkbox"]').is(':checked')){$('.return_location').css('display','block');}else{$('.return_location').css('display','none');}}});$('.pagination div').click(function(){$('.pagination div').removeClass('current');$(".content-overlay").css('display','block').css('height',$('.product-widget > form').height()).css('width',$('.product-widget > form').width());$(".content-overlay > img").css('display','block').css('margin-top',$('.product-widget > form').height()/2-33).css('margin-left',$('.product-widget > form').width()/2-33);if($(this).hasClass('left')||$(this).hasClass('right')){if($(this).hasClass('left')){$(this).next('div').addClass('current');}else{$(this).prev('div').addClass('current');}}else{$(this).addClass('current');}
setTimeout(function(){$(".main-widget .close-details").css('display','none');$('.main-widget .view-details').css('display','block');$('.main-widget .details-more').css('display','none');$(".content-overlay").css('display','none');},400);});});})(jQuery);function Display_tab_div(name){(function($){"use strict";$(".admin-form .title-form").addClass('back').removeClass('current');$(".admin-form #tab_"+name).addClass("current").removeClass('back');$(".admin-form .content-form").addClass("hidden");$(".admin-form #tab_"+name+"_content").removeClass('hidden');})(jQuery);}
(function($){$.fn.extend({blueberry:function(options){var defaults={interval:5000,duration:500,lineheight:1,height:'auto',hoverpause:false,pager:true,nav:true,keynav:true}
var options=$.extend(defaults,options);return this.each(function(){var o=options;var obj=$(this);var slides=$('.slides li',obj);var pager=$('.pager li',obj);var current=0;var next=current+1;var imgHeight=slides.eq(current).find('img').height();var imgWidth=slides.eq(current).find('img').width();var imgRatio=imgWidth/imgHeight;var sliderWidth=0;var cropHeight=0;slides.hide().eq(current).fadeIn(o.duration).addClass('active');if(pager.length){pager.eq(current).addClass('active');}else if(o.pager){obj.append('<ul class="pager"></ul>');slides.each(function(index){$('.pager',obj).append('<li><a href="#"><span>'+index+'</span></a></li>')});pager=$('.pager li',obj);pager.eq(current).addClass('active');}
if(pager){$('a',pager).click(function(){clearTimeout(obj.play);next=$(this).parent().index();rotate();return false;});}
var rotate=function(){slides.eq(current).fadeOut(o.duration).removeClass('active').end().eq(next).fadeIn(o.duration).addClass('active').queue(function(){clearTimeout(obj.play);rotateTimer();$(this).dequeue()});if(pager){pager.eq(current).removeClass('active').end().eq(next).addClass('active');}
current=next;next=current>=slides.length-1?0:current+1;};var rotateTimer=function(){obj.play=setTimeout(function(){rotate();},o.interval);};rotateTimer();if(o.hoverpause){slides.hover(function(){clearTimeout(obj.play);},function(){rotateTimer();});}
var setsize=function(){sliderWidth=$('.slides',obj).width();cropHeight=Math.floor(((sliderWidth/imgRatio)/o.lineheight))*o.lineheight;$('.slides',obj).css({height:cropHeight});};setsize();$(window).resize(function(){setsize();});if(o.keynav){$(document).keyup(function(e){switch(e.which){case 39:case 32:clearTimeout(obj.play);rotate();break;case 37:clearTimeout(obj.play);next=current-1;rotate();break;}});}});}});})(jQuery);