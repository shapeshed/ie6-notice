function ie6CookieCheck() 
{	
	/*------------------------------
	Check if a cookie has been set 
	------------------------------*/
	if (document.cookie.length > 0)
	{		
		if(document.cookie.indexOf("ie6Notice") == -1)
		{
			/*------------------------------
			Check user has hidden notice. If not show it. 
			------------------------------*/
			ie6Notice();
		}
	}
}
function ie6Notice() 
{		
	/*------------------------------
	Set variables
	------------------------------*/		
	var head, body, noticeDiv, noticeParagraph, noticeText;

	/*------------------------------
	Check getElementsByTagName support
	------------------------------*/
	if(!document.getElementsByTagName) { return; }

	/*------------------------------
	Get head element
	------------------------------*/
	head = document.getElementsByTagName("head")[0];
	if (!head) { return;}
	
	/*------------------------------
	Create and insert CSS link into head
	------------------------------*/
	ie6Css = document.createElement('link');
	ie6Css.setAttribute("rel", "stylesheet");
	ie6Css.setAttribute("href", "http://shapeshed.github.com/ie6-notice/css/ie6_notice.css");
	ie6Css.setAttribute("type", "text/css");	
	ie6Css.setAttribute("media", "screen");	

	head.appendChild(ie6Css); 
	
	/*------------------------------
	Get body element
	------------------------------*/
	body = document.getElementsByTagName("body")[0];
	if (!body) { return;}
	
	/*------------------------------
	Create and insert notice div
	------------------------------*/
	noticeDiv = document.createElement('div');
	noticeDiv.id = "ie6-notice";
	body.appendChild(noticeDiv); 

	/*------------------------------
	Create and insert notice paragraph
	------------------------------*/
	noticeParagraph = document.createElement('p');
	noticeParagraph.id = "ie6-text";
	noticeDiv.appendChild(noticeParagraph);
	
	/*------------------------------
	Create and insert notice text
	------------------------------*/
	noticeText = 'You appear to be browsing this site using Internet Explorer 6. This browser is now out of date. For safer, more reliable browsing it is recommended that you upgrade your browser to to <a href="http://www.mozilla.com/firefox/">Firefox</a>, <a href="http://www.apple.com/safari/">Safari</a>, <a href="http://www.opera.com/">Opera</a>, or <a href="http://www.microsoft.com/windows/internet-explorer/">Internet Explorer 8</a>  ';
	noticeParagraph.innerHTML=noticeText;

	/*------------------------------
	Create and insert hide paragraph
	------------------------------*/	
	hideParagraph = document.createElement('p');
	hideParagraph.id = "ie6-hide-notice";
	noticeDiv.appendChild(hideParagraph);

	/*------------------------------
	Create and insert hide link
	------------------------------*/	
	hideLink = document.createElement('a');
	hideLink.setAttribute("href", "#");	
	hideParagraph.appendChild(hideLink);
			
	/*------------------------------
	Create and insert hide text
	------------------------------*/
	hideText = document.createTextNode('Hide this message');
	hideLink.appendChild(hideText);
	
	hideParagraph.onclick = function()
	{
		var today = new Date(); 
		var expiry = new Date(today.getTime() + 30 * 86400 * 1000);
		document.cookie = name + "=" + "ie6Notice" + "; expires=" + expiry.toGMTString() + "; path=/"; 
		noticeDiv.style.display="none";
		ie6Css.setAttribute("href", "");
		return false;
    }
		
}
ie6CookieCheck();