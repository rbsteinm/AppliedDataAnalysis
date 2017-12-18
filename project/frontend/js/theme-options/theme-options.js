// THEME OPTIONS.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is JS file that contains skin, layout Style and bg used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Jekas.
// Author: Iwthemes.
// Name File: theme-options.js
// Version 1.1 - Updated on 6 - 01 - 2013
// Website: http://www.iwthemes.com 
// Email: support@iwthemes.com
// Copyright: (C) 2014
// -------------------------------------------------------------------------------------------------------------------------------

  var $;
  $(document).ready(function($) {

	/* Selec your skin, layout Style  and bg patter */

	function interface(){

    // Skin value
    var skin = "blue"; // red (default), blue,green,orange,purple, pink, cocoa, suelte, custom 

    // Boxed value
    var layout = "layout-wide"; // layout-wide (default), layout-boxed, layout-boxed-margin 

    //Only in boxed version 
    var bg = "none";  // none (default), bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11 


    $(".skin").attr("href", "css/skins/"+ skin + "/" + skin + ".css");
    $(".logo_img").attr("src", "css/skins/" + "/" + skin + "/" + "logo.png");
    $("#layout").addClass(layout);	
    $("body").addClass(bg);   
    return false;
  }

   interface();

});