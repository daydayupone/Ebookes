$(function() {
 //刷新验证码
  var messageCodeImg=$("#messageCodeImg");
	messageCodeImg.click(function(){
    $(this).attr("src",$(this).attr("src2")+"&t="+new Date().getTime());
  });
  //提交表单
  var messageTitle=$("#messageTitle");
  var messageText=$("#messageText");
  var messageCode=$("#messageCode");
  var messageStatus=$("#messageStatus");
  var messageButton=$("#messageButton");
  messageButton.click(function(){
   if($.trim(messageTitle.val())==""){
    messageStatus.text("网名不能为空！");
    return false;
   }
   if($.trim(messageText.val())==""){
    messageStatus.text("内容不能为空！");
    return false;
   }
   if($.trim(messageCode.val())==""){
    messageStatus.text("验证码不能为空");
    return false;
   }
   messageStatus.text("正在提交留言中……");
   $.post("/json/getMessage.jsp",{
   	 pid:messageButton.attr("num"),
     messageTitle:encodeURI(messageTitle.val()),
     messageText:encodeURI(messageText.val()),
     messageCode:messageCode.val()
   },function(data){
      if($.trim(data)=="ok"){
         messageStatus.text("留言成功！");
         messageTitle.val("");
         messageText.val("");
         messageCode.val("");
         window.location.reload();
      }else{
        messageStatus.text(data);
      }
   });
  });
  $("#messageCode,#messageText,#messageTitle").focus(function(){
	  if(messageCodeImg.css("display")=="none"){
	    messageCodeImg.show().attr("src",messageCodeImg.attr("src2")+"&t="+new Date().getTime());
	  }
  });
});