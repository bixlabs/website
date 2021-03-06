(function() {
  'use strict';

  /*pop up ==============================================
  $(document).ready(function () {
        $('#modal-16').hide();
        $('.md-overlay').hide();
    });
    triggered = false;
  $('body').on('mouseleave', function (e) {
    console.log(e.offsetY, $(window).scrollTop())
    if (e.offsetY - $(window).scrollTop() < 0 && !triggered) {
        triggered = true;
         $('#modal-16').show();
     $('.md-overlay').show();
    }
  });*/

  /*menu ==============================================*/

  if($(window).width() >= 480){
    $(window).scroll(function() {
      if ($(window).scrollTop() > 100 ){
        $('header, nav').addClass('show');
        $('.menup li a').addClass('grey');
        $('.logocont').addClass('logocont2');
      } else {
        $('header, nav').removeClass('show');
        $('.menup li a').removeClass('grey');
        $('.logocont').removeClass('logocont2');
      }
    });
    $('.scroll').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop : $(this.hash).offset().top
      }, 1500);
    });
  }

  /*wow ==============================================*/

  if($(window).width() >= 1100){
    var wow = new WOW({
      animateClass: 'animated',
      offset: 100
    });
    wow.init();
  }

  /*menu ==============================================*/

  $(function() {
    var pull = $('#pull'),
        menu = $('nav ul'),
        menuHeight = menu.height();
    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
    $(window).resize(function(){
      var w = $(window).width();
      if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  /*sticky menu*/
  if($(window).width() >= 1100){
    $(document).ready(function() {
      var $window = $(window),
      $mainMenuBar = $('#myM'),
      $mainMenuBarAnchor = $('#mainMenuBarAnchor');

      $window.scroll(function() {
        var windowTop = $window.scrollTop();
        var divTop = $mainMenuBarAnchor.offset().top;
        if (windowTop > divTop) {
          $mainMenuBar.addClass('stick');
          $mainMenuBarAnchor.height($mainMenuBar.height());
        }
        else {
          $mainMenuBar.removeClass('stick');
          $mainMenuBarAnchor.height(0);
        }
      });
    });
  }

  /*burger ==============================================*/

  $(document).ready(function(){
    $('#pull').click(function(){
      $(this).toggleClass('open');
    });
  });


  /*scoll ==============================================*/
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  /*slider ==============================================*/
  $(document).ready(function() {
    $('#owl-demo').owlCarousel({

      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true
    });
  });
  $(document).ready(function() {
    $('#owl-demo2').owlCarousel({
      autoPlay: 14000,
      navigation : true,
      slideSpeed : 900,
      paginationSpeed : 900,
      singleItem : true
    });
  });

  /*loading progress bar ==============================================*/
  (function(){
    function id(v){return document.getElementById(v); }
    function loadbar() {
      var ovrl = id('overlay'),
      prog = id('progress'),
      stat = id('progstat'),
      img = document.images,
      c = 0,
      tot = img.length;

      function imgLoaded(){
        c += 1;
        var perc = parseInt(c/tot*100) + '%';
        prog.style.width = perc;
        stat.innerHTML = perc;
        if(c===tot) {return doneLoading();}
      }
      function doneLoading(){
        ovrl.style.opacity = 0;
        setTimeout(function(){
          ovrl.style.display = 'none';
        }, 1200);
      }
      for(var i=0; i<tot; i++) {
        var tImg     = new Image();
        tImg.onload  = imgLoaded;
        tImg.onerror = imgLoaded;
        tImg.src     = img[i].src;
      }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
  }());

  /*clock ==============================================*/
  function updateClock () {
    var timeTexas = moment().tz('America/Chicago').format('h:mm a');
    var timeUruguay = moment().tz('America/Montevideo').format('h:mm a');

    $('#clock4, #clock').html(timeUruguay);
    $('#clock3, #clock2').html(timeTexas);
  }

  $(document).ready(function () {
   setInterval(updateClock, 1000);
  });

  /*form success message =========================================*/
  $(document).ready(function () {

    $('#contactform').on('submit', function (e) {
      e.preventDefault();
      var $form = $(this);
      var $button = $form.find('.send');
      var $buttonText = $form.find('.send span');
      var $buttonLoader = $form.find('.send .loading');

      $button.prop('disabled', true);
      $buttonLoader.show();
      $buttonText.hide();

      $.ajax({
        type     : 'POST',
        cache    : false,
        url      : $(this).attr('action'),
        data     : $(this).serialize(),
        success  : function(data) {
          data = JSON.parse(data);
          $button.prop('disabled', false);
          $buttonLoader.hide();
          $buttonText.show();
          if (data.success) {
            $('.form-error').hide();
            $('.contact-success').fadeIn();
            $form.find('input[type=text], textarea').val('');
            $form.find('#upload ul').html('');
            $form.find('.attachementsInput').val('');
          } else {
            $('.form-error').show();
          }
        }
      });
    });

    // Hide contact success message
    $('body').on('click', '.contact-success', function() {
      $(this).fadeOut();
    });
  });

  /*resoluciones ios ==============================================*/

  var IS_IPHONE = navigator.userAgent.match(/iPhone/i) != null;
  if(IS_IPHONE) {
    $('.conjunto').addClass('ios-device');
    $('.talent').addClass('iosdeviceintro');
    $('.conjuntoboton2, .centro a').addClass('iosdevicewidth');
  }

  /*google maps ==============================================*/
  function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(-34.916004, -56.154339100000016),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    //map marker
    var myLatlng = new google.maps.LatLng(-34.916004, -56.154339100000016);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Bixlabs!'
    });
  }

  function initialize2() {
    var mapCanvas2 = document.getElementById('map-canvas2');
    var mapOptions2 = {
      center: new google.maps.LatLng(29.753536, -95.365771),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map2 = new google.maps.Map(mapCanvas2, mapOptions2);
    //map marker
    var myLatlng2 = new google.maps.LatLng(29.753536, -95.365771);
    var marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map2,
      title: 'bixlabs'
    });
  }

  if ($('#map-canvas').length) {
    google.maps.event.addDomListener(window, 'load', initialize2);
    google.maps.event.addDomListener(window, 'load', initialize);
  }

  /*blur ==============================================
  $(window).on('scroll', function () {
    var pixs = $(document).scrollTop();
    pixs = pixs / 100;
    $('.intro').css({'-webkit-filter': 'blur(' + pixs + 'px)','filter': 'blur(' + pixs + 'px)'});
  });*/

  /*portfolio ==============================================*/

  $(function(){
    // Instantiate MixItUp:
    $('#Container').mixItUp();
  });

  /**
   * File Upload
   */
  $(function(){

    var ul = $('#upload ul');

    $('#drop a').click(function(){
      // Simulate a click on the file input button
      // to show the file browser dialog
      $(this).parent().find('input').click();
    });

    // Initialize the jQuery File Upload plugin
    $('#upload').fileupload({
      // This element will accept file drag/drop uploading
      dropZone: $('#drop'),
      // This function is called when a file is added to the queue;
      // either via the browse button, or via drag/drop:
      add: function (e, data) {

        var tpl = $('<li class="working"><p></p><span></span></li>');

        // Append the file name and file size
        tpl.find('p').text(data.files[0].name)
                     .append('<i>' + formatFileSize(data.files[0].size) + '</i>');

        // Add the HTML to the UL element
        data.context = tpl.appendTo(ul);

        // Automatically upload the file once it is added to the queue
        var jqXHR = data.submit()
                        .success(function (result, textStatus, jqXHR) {
                          var fileUrl, arr, r,
                              $hidden = $('.attachementsInput');

                          result = JSON.parse(result);
                          fileUrl = result.files[0].url;

                          if (result.files[0].error) {
                            data.context.addClass('error');
                          }
                          var currVal = $hidden.val();
                          if (currVal.length) {
                            arr = currVal.split(',');
                            arr.push(fileUrl);
                            r = arr.join(',');
                          } else {
                            r = fileUrl;
                          }

                          $hidden.val(r);
                        })
                        .error(function (jqXHR, textStatus, errorThrown) {
                          data.context.addClass('error');
                        });

        // Listen for clicks on the cancel icon
        tpl.find('span').click(function (){
          if(tpl.hasClass('working') || tpl.hasClass('error')){
            jqXHR.abort();
            tpl.fadeOut(function (){
              tpl.remove();
            });
          }
        });
      },
      progress: function(e, data){

        // Calculate the completion percentage of the upload
        var progress = parseInt(data.loaded / data.total * 100, 10);

        if(progress === 100){
          data.context.removeClass('working');
        }
      },
      fail:function(e, data){
        // Something has gone wrong!
        data.context.addClass('error');
      }
    });

    // Prevent the default action when a file is dropped on the window
    $(document).on('drop dragover', function (e) {
      e.preventDefault();
    });

    // Helper function that formats the file sizes
    function formatFileSize(bytes) {
      if (typeof bytes !== 'number') {
        return '';
      }
      if (bytes >= 1000000000) {
        return (bytes / 1000000000).toFixed(2) + ' GB';
      }
      if (bytes >= 1000000) {
        return (bytes / 1000000).toFixed(2) + ' MB';
      }
      return (bytes / 1000).toFixed(2) + ' KB';
    }
  });

  /* ==============================================*/

  $('.ch-item').on('click', function () {
    if(IS_IPHONE) {
      $(this).parent().siblings().find('.ch-item').removeClass('active');
      $(this).toggleClass('active');
    }
  });

})();
