$(document).ready(function(){

    $('.header_setting-but').click(function(){
        
        $('.header_setting-menu').slideToggle(200);
        $('.header_setting-but').toggleClass('active');
    })

    var filter = $('.modal')

    $('.expenses .edit').click(function(){
    filter.fadeIn(600);
    $('body').toggleClass('hidden_mod');
    })

    filter.click(function(e){
        var target = $(e.target);
        if (target.hasClass('modal')){
            filter.fadeOut(600);
            $('body').toggleClass('hidden_mod');
        };
    });

    $('.editing_paid input').click(function(){
        $('.editing_paid label').removeClass('editing_paid-check')
        $(this).parent().toggleClass('editing_paid-check')
    });


    /*Bihavior for upload input*/
     var wrapper = $( ".editing_file-upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".editing_file-button" ),
        lbl = wrapper.find( ".editing_file-mark" );

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

        inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Select..." );
        }else
            btn.text( file_name );
    }).change();

    $( window ).resize(function(){
    $( ".editing_file-upload" ).triggerHandler( "change" );
    });

    /* Settings for chosen plugin*/

    $('#upply').chosen({
        width:"100%",
        disable_search_threshold: 10
    });
    $('#frequency').chosen({
        width:"110px",
        disable_search_threshold: 10
    });
    



});


window.onload = function() {
    baron({
        root: '.baron',
        scroller: '.baron__scroller',
        bar: '.baron__bar'
    });
    $('#datetimepicker1').datepicker({
        autoclose: true
    });
    $('#datetimepicker2').datepicker({
        autoclose: true
    });
};