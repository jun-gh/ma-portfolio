
// 	$('.project_cont').hover(function(){ 
//     	$(this).children('.project_overlay').slideToggle();
$(document).ready(function(){

  document.getElementById("current_year").innerHTML = new Date().getFullYear();
  
  //show page using hash
  function showPage(page_id){
    $('.page_cont').hide();
    $(page_id).show();
  }

  location.hash = "";
  location.hash = "#intro";

  $(window).on('hashchange', function(){
    showPage(location.hash);
  })
});

  $(function(){
    setTimeout(function(){
      $('.fly-text').removeClass('hiden')
    }, 500);
  });

  function myfunction(self){
   self.classList.toggle("change");
   $('#menus').toggle();
  }

  $('#menus').on('click', function(){    
    $('#menu_icon').removeClass('change');
    $('#menus').toggle();   
  })

 
  $('#menu_icon').hover(function(){
      $(this).children().css('background-color', '#D3D3D3');
  }, function(){
      $(this).children().css('background-color', '#888888');
  });

    $('#menus>li').hover(function(){   
      $(this).children().css('color', '#D3D3D3');
  }, function(){
      $(this).children().css('color', '#888888');
  });

  $('.project_cont').hover(function(){ 
      $(this).children('.project_overlay').slideToggle();
  });  


  var modal_cont =
  { 
    fk_android : {
      title : 'Fishingkaki Android App',
      desc : 'FishingKaki.com is the largest fishing community conglomerate dedicated to catering to anglers worldwide. The site is developed using laravel backend, mysql database, react frontend & graphql api. It is setup for server side render to cater SEO & social share.',
      src : 'images/fk_android.png',
      link : 'https://play.google.com/store/apps/details?id=com.fishingkaki',
    },
    fk : {
      title : 'Fishingkaki Classified',
      desc : 'FishingKaki.com is the largest fishing community conglomerate dedicated to catering to anglers worldwide. The site is developed using laravel backend, mysql database, react frontend & graphql api. It is setup for server side render to cater SEO & social share.',
      src : 'images/fk_classified.png',
      link : 'https://classifieds.fishingkaki.com/',
    },
    tenet : {
      title : 'Tenet',
      desc: 'The Tenet Way, a compliance application designed for Tenet Health employees, places information and resources at employee fingertips. The app is available on Appstore & Playstore. It is developed using Contentful CMS backend, react native frontend & rest api. It is setup with push notification to update user whenever there is update on the health system process',
      src : 'images/tenet.png',
      link : 'https://fnd.io/#/us/iphone-app/1470672836-the-tenet-way-by-tenet-healthsystems-med',
    },
    alz : {
      title : `Alzheimer's`,
      desc: `The Alzheimer's Association Science Hub provides the latest science news and expert viewpoints about research in Alzheimer's disease and related dementias. The app is available on Appstore & Playstore. It is developed using Contentful CMS backend, react native frontend & rest api. It is setup with firebase push notification to update user whenever there is update on the process`,
      src : 'images/alz.png',
      link : 'https://fnd.io/#/us/iphone-app/1472268471-alzheimers-assoc-science-hub-by-alzheime',
    },
    hri_admin: {
      title : 'HRI Admin',
      desc : 'HRI Admin is the backoffice of Multi-level Networking HRI Admins and Members. This is where Admins login to manage members like viewing data, editing profile etc. For members, this is where they manage their earnings, downlines, referrals among others. </p><p> It has very detailed dashboard representation for each of their earnings and met the requirement of such complex business process in \" Multi-level Networking \". This was developed through Codeigniter framework with very complex yet flexible MySql database.</p>' ,
      src : 'images/admin_modal.png',
      link : 'http://admin.homeruninternational.com',
    },
    bx: {
     title : 'BASIX SYSTEM',
     desc : 'Basix System is a beta app for payment, expenses and income monitoring. Data display is based on user login which has a very straight forward add, edit, delete on those objects. </p><p> This is a responsive single page app that where developed using (HTML, CSS, Javascript, Jquery, Bootstrap, Ajax, Php and MySql). It was organized using Codeigniter MVC framework and uses Google Chart for dashboard representation.</p> ',
     src : 'images/bx_modal.jpg',
     link : 'http://bxsystem.tk',
    },
  
    loader : function(){
    $("#overlay").addClass('showloader');

    setTimeout(function(){
      $("#overlay").removeClass('showloader');
    }, 1000)
  }


    //  title_retail : 'Homerun International',
    //  desc_retail : 'Homerun International is a dynamic retail site. It\'s content are all coming off of the database (product, articles, pages, images etc). </p><p>This responsive site was developed using (HTML, CSS, Javascript, Jquery, Bootstrap, Ajax, Php and MySql) and was organized using Codeigniter MVC framework.</p>' ,
    //  src_retail : 'images/retail_modal.jpg',
    //  link_retail : 'http://homeruninternational.com/home',

    //  title_admin : 'HRI Admin',
    //  desc_admin : 'HRI Admin is the backoffice of Multi-level Networking HRI Admins and Members. This is where Admins login to manage members like viewing data, editing profile etc. For members, this is where they manage their earnings, downlines, referrals among others. </p><p> It has very detailed dashboard representation for each of their earnings and met the requirement of such complex business process in \" Multi-level Networking \". This was developed through Codeigniter framework with very complex yet flexible MySql database.</p>' ,
    //  src_admin : 'images/admin_modal.png',
    //  link_admin : 'http://admin.homeruninternational.com',

    //  loader : function(){
    //         $("#overlay").addClass('showloader');

    //         setTimeout(function(){
    //           $("#overlay").removeClass('showloader');
    //         }, 1000)
    //   }
  }

  $('#proj-fk_android').on('click', function(){
    modal_cont.loader();
    $('.modal-title').html(modal_cont.fk_android.title);
    $('.modal-desc').html(modal_cont.fk_android.desc);
    $('.modal-img-bx').attr('src', modal_cont.fk_android.src);
    $('.linktosite').attr('href', modal_cont.fk_android.link);
    $('#project_modal').modal('show');
}); 

  $('#proj-fk').on('click', function(){
      modal_cont.loader();
      $('.modal-title').html(modal_cont.fk.title);
      $('.modal-desc').html(modal_cont.fk.desc);
      $('.modal-img-bx').attr('src', modal_cont.fk.src);
      $('.linktosite').attr('href', modal_cont.fk.link);
      $('#project_modal').modal('show');
  }); 

  $('#proj-tenet').on('click', function(){
      modal_cont.loader();
      $('.modal-title').html(modal_cont.tenet.title);
      $('.modal-desc').html(modal_cont.tenet.desc);
      $('.modal-img-bx').attr('src', modal_cont.tenet.src);
      $('.linktosite').attr('href', modal_cont.tenet.link);
      $('#project_modal').modal('show');
  }); 

  $('#proj-alz').on('click', function(){
      modal_cont.loader();
      $('.modal-title').html(modal_cont.alz.title);
      $('.modal-desc').html(modal_cont.alz.desc);
      $('.modal-img-bx').attr('src', modal_cont.alz.src);
      $('.linktosite').attr('href', modal_cont.alz.link);
      $('#project_modal').modal('show');
  }); 

  $('#proj-admin').on('click', function(){
      modal_cont.loader();
      $('.modal-title').html(modal_cont.hri_admin.title);
      $('.modal-desc').html(modal_cont.hri_admin.desc);
      $('.modal-img-bx').attr('src', modal_cont.hri_admin.src);
      $('.linktosite').attr('href', modal_cont.hri_admin.link);
      $('#project_modal').modal('show');
  }); 

  
  $('#proj-bx').on('click', function(){
    modal_cont.loader();
    $('.modal-title').html(modal_cont.bx.title);
    $('.modal-desc').html(modal_cont.bx.desc);
    $('.modal-img-bx').attr('src', modal_cont.bx.src);
    $('.linktosite').attr('href', modal_cont.bx.link);
    $('#project_modal').modal('show');
}); 
