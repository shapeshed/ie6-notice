Installation instructions:

* Copy the /images/icons/warning.gif file to a /images/icons/ folder
* Copy the IE6 CSS file to your CSS folder
* Place the html snippet (in ie6-notice.html) and place before the closing body tag of your html page.
* Add a link to the IE6 file in between the head tags of your html like so:

<!--[if IE 6]>
<link rel="stylesheet" href="/css/ie6.css" type="text/css" media="screen" />
<![endif]-->