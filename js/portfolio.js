
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
     title_bx : 'BASIX SYSTEM',
     desc_bx : 'Basix System is a beta app for payment, expenses and income monitoring. Data display is based on user login which has a very straight forward add, edit, delete on those objects. </p><p> This is a responsive single page app that where developed using (HTML, CSS, Javascript, Jquery, Bootstrap, Ajax, Php and MySql). It was organized using Codeigniter MVC framework and uses Google Chart for dashboard representation.</p> ',
     src_bx : 'images/bx_modal.jpg',
     link_bx : 'http://www.bxsystem.ml',

     title_retail : 'Homerun International',
     desc_retail : 'Homerun International is a dynamic retail site. It\'s content are all coming off of the database (product, articles, pages, images etc). </p><p>This responsive site was developed using (HTML, CSS, Javascript, Jquery, Bootstrap, Ajax, Php and MySql) and was organized using Codeigniter MVC framework.</p>' ,
     src_retail : 'images/retail_modal.jpg',
     link_retail : 'http://homeruninternational.com/home',

     title_admin : 'HRI Admin',
     desc_admin : 'HRI Admin is the backoffice of Multi-level Networking HRI Admins and Members. This is where Admins login to manage members like viewing data, editing profile etc. For members, this is where they manage their earnings, downlines, referrals among others. </p><p> It has very detailed dashboard representation for each of their earnings and met the requirement of such complex business process in \" Multi-level Networking \". This was developed through Codeigniter framework with very complex yet flexible MySql database.</p>' ,
     src_admin : 'images/admin_modal.png',
     link_admin : 'http://admin.homeruninternational.com',

     loader : function(){
            $("#overlay").addClass('showloader');

            setTimeout(function(){
              $("#overlay").removeClass('showloader');
            }, 1000)
      }
  }

  $('#proj-bx').on('click', function(){
      modal_cont.loader();
      $('.modal-title').html(modal_cont.title_bx);
      $('.modal-desc').html(modal_cont.desc_bx);
      $('.modal-img-bx').attr('src', modal_cont.src_bx);
      $('.linktosite').attr('href', modal_cont.link_bx);
      $('#project_modal').modal('show');
  }); 

  $('#proj-retail').on('click', function(){
      modal_cont.loader();
      $('.modal-title').html(modal_cont.title_retail);
      $('.modal-desc').html(modal_cont.desc_retail);
      $('.modal-img-bx').attr('src', modal_cont.src_retail);
      $('.linktosite').attr('href', modal_cont.link_retail);
      $('#project_modal').modal('show');
  }); 

  $('#proj-admin').on('click', function(){
      modal_cont.loader();
      $('.modal-title').html(modal_cont.title_admin);
      $('.modal-desc').html(modal_cont.desc_admin);
      $('.modal-img-bx').attr('src', modal_cont.src_admin);
      $('.linktosite').attr('href', modal_cont.link_admin);
      $('#project_modal').modal('show');
  }); 
