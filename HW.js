$('#CAL103_checkbox').prop('checked', true);
$('#CS115_checkbox').prop('checked', true);
$('#CS146_checkbox').prop('checked', true);
$('#PEP111_checkbox').prop('checked', true);

$(function(){
    /*For CAL103*/
    /*Show and hide*/
    $("#CAL103_checkbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#CAL103_selected_0").show();
        }
        else{
            $("#CAL103_selected_0").hide();
        }
        if ($(this).is(":checked")) {
            $("#CAL103_selected_1").show();
        }
        else{
            $("#CAL103_selected_1").hide();
        }
        if ($(this).is(":checked")) {
            $("#CAL103_selected_2").show();
        }
        else{
            $("#CAL103_selected_2").hide();
        }
        if ($(this).is(":checked")) {
            $("#CAL103_selected_3").show();
        }
        else{
            $("#CAL103_selected_3").hide();
        }
    })
/*-------------------------------------------------------------------------------------------------*/
    /*For CS115*/
    /*Show and hide*/
    $("#CS115_checkbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#CS115_selected_0").show();
        }
        else{
            $("#CS115_selected_0").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS115_selected_1").show();
        }
        else{
            $("#CS115_selected_1").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS115_selected_2").show();
        }
        else{
            $("#CS115_selected_2").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS115_selected_3").show();
        }
        else{
            $("#CS115_selected_3").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS115_selected_4").show();
        }
        else{
            $("#CS115_selected_4").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS115_selected_5").show();
        }
        else{
            $("#CS115_selected_5").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS115_selected_6").show();
        }
        else{
            $("#CS115_selected_6").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS115_selected_7").show();
        }
        else{
            $("#CS115_selected_7").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS115_selected_8").show();
        }
        else{
            $("#CS115_selected_8").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS115_selected_9").show();
        }
        else{
            $("#CS115_selected_9").hide();
        }
    })
/*-------------------------------------------------------------------------------------------------*/
    /*For CS146*/
    /*Show and hide*/
    $("#CS146_checkbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#CS146_selected_0").show();
        }
        else{
            $("#CS146_selected_0").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS146_selected_1").show();
        }
        else{
            $("#CS146_selected_1").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS146_selected_2").show();
        }
        else{
            $("#CS146_selected_2").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS146_selected_3").show();
        }
        else{
            $("#CS146_selected_3").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS146_selected_4").show();
        }
        else{
            $("#CS146_selected_4").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS146_selected_5").show();
        }
        else{
            $("#CS146_selected_5").hide();
        }
    }) 
/*-------------------------------------------------------------------------------------------------*/
    /*For PEP111*/
    /*Show and hide*/
    $("#PEP111_checkbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#PEP111_selected_0").show();
        }
        else{
            $("#PEP111_selected_0").hide();
        }
        if ($(this).is(":checked")) {
            $("#PEP111_selected_1").show();
        }
        else{
            $("#PEP111_selected_1").hide();
        }
        if ($(this).is(":checked")) {
            $("#PEP111_selected_2").show();
        }
        else{
            $("#PEP111_selected_2").hide();
        }
        if ($(this).is(":checked")) {
            $("#PEP111_selected_3").show();
        }
        else{
            $("#PEP111_selected_3").hide();
        }
        if ($(this).is(":checked")) {
            $("#PEP111_selected_4").show();
        }
        else{
            $("#PEP111_selected_4").hide();
        }
        if ($(this).is(":checked")) {
            $("#PEP111_selected_5").show();
        }
        else{
            $("#PEP111_selected_5").hide();
        }
        if ($(this).is(":checked")) {
            $("#PEP111_selected_6").show();
        }
        else{
            $("#PEP111_selected_6").hide();
        }
        if ($(this).is(":checked")) {
            $("#PEP111_selected_7").show();
        }
        else{
            $("#PEP111_selected_7").hide();
        }
    })   
})

$(document).ready(function(){ 
    /*CAL 103*/
    $("#CAL103_color_picker").change(function(){ 
           $("#CAL103").css("background-color", $(this).val());
    }); 
    $("#CAL103_color_picker").change(function(){ 
        $(".CAL103_selected").css("background-color", $(this).val());
    }); 
    /*CS 115*/
    $("#CS115_color_picker").change(function(){ 
        $("#CS115").css("background-color", $(this).val());
    }); 
    $("#CS115_color_picker").change(function(){ 
        $(".CS115_selected").css("background-color", $(this).val());
    });
    /*CS 146*/
    $("#CS146_color_picker").change(function(){ 
        $("#CS146").css("background-color", $(this).val());
    }); 
    $("#CS146_color_picker").change(function(){ 
        $(".CS146_selected").css("background-color", $(this).val());
    });
    /*PEP 111*/
    $("#PEP111_color_picker").change(function(){ 
        $("#PEP111").css("background-color", $(this).val());
    }); 
    $("#PEP111_color_picker").change(function(){ 
        $(".PEP111_selected").css("background-color", $(this).val());
    });
})
